goog.provide('rid3.util');
rid3.util.main_container_class = "rid3-main-container";
rid3.util.node_selector = (function rid3$util$node_selector(id,prev_classes){
var prev_classes__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,prev_classes);
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," svg"," .",rid3.util.main_container_class,((cljs.core.empty_QMARK_(prev_classes__$1))?null:[" .",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" .",prev_classes__$1)].join(''))].join('');
});

//# sourceMappingURL=rid3.util.js.map
