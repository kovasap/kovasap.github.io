(ns sketches.double-helix
  (:require [cljs.pprint]
            [sketches.common :as c]
            [quil.core :as q :include-macros true]
            [quil.middleware :as middleware]))

; Get size of canvas to inform where to draw things.
; (def body (.-body js/document))
; (def w (.-clientWidth body))
; (def h (.-clientHeight body))
(def w 1080)
(def h 1080)

(defn particle
  "Creates a particle map."
  [x y]
  {:vx         1
   :vy         1
   :size       10
   :direction  0
   ; Initial positions
   :ix         x
   :iy         y
   ; Current positions
   :x          x
   :y          y
   :color      (rand-nth (:colors (:purple-haze c/palettes)))})

(def helix-length 800)
(def helix-step 30)

(defn gen-helix [x y vertical?]
  (cond vertical? 
        (map particle (repeat x) (range y (+ y helix-length) helix-step))
        :else
        (map particle (range x (+ x helix-length) helix-step) (repeat y) )))


(defn sketch-setup 
  "Returns the initial state to use for the update-render loop."
  []
  {:helix-1 (gen-helix (/ w 2) (- (/ h 2) (/ helix-length 2)) true)
   :helix-2 (gen-helix (- (/ w 2) (/ helix-length 2)) (/ h 2) false)
   :step 0})


(def amp 100)
(def freq 0.05)

(defn calc-position [ipos step freq-mod]
  (+ ipos (* amp (Math/sin (* step freq freq-mod)))))

(defn sketch-update
  "Receives the current state. Returns the next state to render."
  [state]
  {:helix-1 (map (fn [p]
                   (assoc p :x (calc-position (:ix p)
                                              (:step state)
                                              (/ (:y p) h))))
                 (:helix-1 state))
   :helix-2 (map (fn [p]
                   (assoc p :y (calc-position (:iy p)
                                              (:step state)
                                              (/ (:x p) w))))
                 (:helix-2 state))
   :step (inc (:step state))})


(defn sketch-draw
  "Draws the current state to the canvas. Called on each iteration after
  sketch-update."
  [state]
  (apply q/background (:background (:purple-haze c/palettes)))
  (q/no-stroke)
  (c/draw-circles (concat (:helix-1 state) (:helix-2 state))))


; Draw a quil sketch onto the canvas.
(defn create [canvas]
  (q/sketch
    :host canvas
    :size [w h]
    :draw #'sketch-draw
    :setup #'sketch-setup
    :update #'sketch-update
    :middleware [middleware/fun-mode]
    :settings (fn []
                ; (q/pixel-density 1)
                (q/random-seed 666)
                (q/noise-seed 666))))

; Make sure that only one instance of the sketch is ever created.
(defonce sketch (create "sketch"))

