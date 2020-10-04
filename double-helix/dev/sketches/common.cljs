(ns sketches.common
  (:require [cljs.pprint]
            [quil.core :as q :include-macros true]))

(def palettes
  {:purple-haze
    {:background [10 10 10 20]
     :colors     [[32 0 40]
                  [82 15 125]
                  [99 53 126]
                  [255 120 120]
                  [102 10 150]
                  [132 26 200]
                  [165 32 250]
                  [196 106 251]]}})


(defn draw-circles [circle-particles]
  (doseq [p circle-particles]
    (apply q/fill (:color p))
    (q/ellipse (:x p) (:y p) (:size p) (:size p))))
