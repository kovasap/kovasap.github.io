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
var args__5775__auto__ = [];
var len__5769__auto___50162 = arguments.length;
var i__5770__auto___50163 = (0);
while(true){
if((i__5770__auto___50163 < len__5769__auto___50162)){
args__5775__auto__.push((arguments[i__5770__auto___50163]));

var G__50164 = (i__5770__auto___50163 + (1));
i__5770__auto___50163 = G__50164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return malli.instrument.cljs._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(malli.instrument.cljs._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__50161 = cljs.core.set(ns);
return (fexpr__50161.cljs$core$IFn$_invoke$arity$1 ? fexpr__50161.cljs$core$IFn$_invoke$arity$1(n) : fexpr__50161.call(null,n));
});
}));

(malli.instrument.cljs._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument.cljs._filter_ns.cljs$lang$applyTo = (function (seq50155){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50155));
}));

malli.instrument.cljs.perform_check = (function malli$instrument$cljs$perform_check(schema,f){
return malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,f);
});

//# sourceMappingURL=malli.instrument.cljs.js.map
