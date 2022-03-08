goog.provide('malli.instrument.cljs');
if((typeof malli !== 'undefined') && (typeof malli.instrument !== 'undefined') && (typeof malli.instrument.cljs !== 'undefined') && (typeof malli.instrument.cljs.instrumented_vars !== 'undefined')){
} else {
malli.instrument.cljs.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
malli.instrument.cljs._filter_var = (function malli$instrument$cljs$_filter_var(f){
return (function (_,s,___$1){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(s) : f.call(null,s));
});
});
malli.instrument.cljs._filter_ns = (function malli$instrument$cljs$_filter_ns(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44286 = arguments.length;
var i__4865__auto___44287 = (0);
while(true){
if((i__4865__auto___44287 < len__4864__auto___44286)){
args__4870__auto__.push((arguments[i__4865__auto___44287]));

var G__44288 = (i__4865__auto___44287 + (1));
i__4865__auto___44287 = G__44288;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return malli.instrument.cljs._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(malli.instrument.cljs._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__44282 = cljs.core.set(ns);
return (fexpr__44282.cljs$core$IFn$_invoke$arity$1 ? fexpr__44282.cljs$core$IFn$_invoke$arity$1(n) : fexpr__44282.call(null,n));
});
}));

(malli.instrument.cljs._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument.cljs._filter_ns.cljs$lang$applyTo = (function (seq44278){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44278));
}));


//# sourceMappingURL=malli.instrument.cljs.js.map
