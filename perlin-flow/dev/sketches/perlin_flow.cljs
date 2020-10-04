(ns sketches.perlin-flow
  (:require [cljs.pprint]
            [quil.core :as q :include-macros true]
            [quil.middleware :as middleware]))

; Get size of canvas to inform where to draw things.
; (def body (.-body js/document))
; (def w (.-clientWidth body))
; (def h (.-clientHeight body))
(def w 1080)
(def h 480)

(def palette
  {:name       "purple haze"
   :background [10 10 10 20]
   :colors     [[32 0 40]
                [82 15 125]
                [99 53 126]
                [255 120 120]
                [102 10 150]
                [132 26 200]
                [165 32 250]
                [196 106 251]]})


(defn particle
  "Creates a particle map."
  [id]
  {:id         id
   :vx         1
   :vy         1
   :size       3
   :direction  0
   :x          (q/random w)
   :y          (q/random h)
   :color      (rand-nth (:colors palette))})

(defn sketch-setup 
  "Returns the initial state to use for the update-render loop."
  []
  {:particles (map particle (range 0 2000)) })


(def noise-zoom 0.005)

(defn direction
  "Calculates the next direction between [0, 2pi] based on the perlin noise
  at the position (x, y) and an id."
  [x y id]
  (* 2
     Math/PI
     (+ (q/noise (* x noise-zoom) (* y noise-zoom))
        (* 0.2 (q/noise (* x noise-zoom) (* y noise-zoom) (* id noise-zoom))))))

(defn position
  "Calculates the next position based on the current, the speed and a max."
  [current delta max]
  (mod (+ current delta) max))

(defn velocity
  "Calculates the next velocity by averaging the current velocity and the added
  delta."
  [current delta]
  (/ (+ current delta) 2))

(defn sketch-update
  "Receives the current state. Returns the next state to render."
  [state]
  {:particles
   (map (fn [p]
          (assoc p
                 :x (position (:x p) (:vx p) w)
                 :y (position (:y p) (:vy p) h)
                 :direction (direction (:x p) (:y p) (:id p))
                 ; :vx (velocity (:vx p) (q/random -0.5 0.5))
                 ; :vy (velocity (:vy p) (q/random -0.5 0.5))
                 :vx (velocity (:vx p) (Math/cos (:direction p)))
                 :vy (velocity (:vy p) (Math/sin (:direction p)))
                 ))
        (:particles state))
   })


(def click-radius 100)
(def click-push-strength 1)

(defn in-circle?
  "Checks if the point map with coordinates stored as :x and :y is in the
  circle with radius r and center (xc, yc)"
  [xc yc r pt-map]
  (< (Math/sqrt (+ (Math/pow (- (:x pt-map) xc) 2)
                   (Math/pow (- (:y pt-map) yc) 2)))
     r))

(defn sketch-mouse-clicked
  "Modifies the current state based on a mouse click."
  [state event]
  ; Get all particles within click-radius of the click point.
  (def affected-particles
    (filter (partial in-circle? (:x event) (:y event) click-radius)
            (:particles state)))
  (cljs.pprint/pprint "Affected Particles:")
  (cljs.pprint/pprint (count affected-particles))
  ; Set velocity of all affected particles to point away from the pointer.
  {:particles
   (map (fn [p]
          (cond (in-circle? (:x event) (:y event) click-radius p)
                (assoc p
                       :vx (+ (:vx p)
                              (* click-push-strength (- (:x p) (:x event))))
                       :vy (+ (:vy p)
                              (* click-push-strength (- (:y p) (:y event)))))
                :else p))
        (:particles state))})


(defn sketch-draw
  "Draws the current state to the canvas. Called on each iteration after
  sketch-update."
  [state]
  (apply q/background (:background palette))
  (q/no-stroke)
  (doseq [p (:particles state)]
    (apply q/fill (conj (:color p) 50))
    (q/ellipse (:x p) (:y p) (:size p) (:size p))))


; Draw a quil sketch onto the canvas.
(defn create [canvas]
  (q/sketch
    :host canvas
    :size [w h]
    :draw #'sketch-draw
    :setup #'sketch-setup
    :update #'sketch-update
    :mouse-clicked #'sketch-mouse-clicked
    :middleware [middleware/fun-mode]
    :settings (fn []
                ; (q/pixel-density 1)
                (q/random-seed 666)
                (q/noise-seed 666))))

; Make sure that only one instance of the sketch is ever created.
(defonce sketch (create "sketch"))

