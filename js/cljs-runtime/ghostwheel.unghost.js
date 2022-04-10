goog.provide('ghostwheel.unghost');
/**
 * This removes the gspec and returns a
 *   clean defn for use in production builds.
 */
ghostwheel.unghost.clean_defn = (function ghostwheel$unghost$clean_defn(op,forms){
var single_arity_QMARK_ = (function (fn_forms){
return cljs.core.boolean$(cljs.core.some(cljs.core.vector_QMARK_,fn_forms));
});
var strip_gspec = (function (body){
var vec__47409 = body;
var seq__47410 = cljs.core.seq(vec__47409);
var first__47411 = cljs.core.first(seq__47410);
var seq__47410__$1 = cljs.core.next(seq__47410);
var args = first__47411;
var first__47411__$1 = cljs.core.first(seq__47410__$1);
var seq__47410__$2 = cljs.core.next(seq__47410__$1);
var _gspec = first__47411__$1;
var more = seq__47410__$2;
return cljs.core.cons(args,more);
});
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((single_arity_QMARK_(forms))?(function (){var vec__47416 = cljs.core.split_with(cljs.core.complement(cljs.core.vector_QMARK_),forms);
var head_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(0),null);
var body_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,op,null,(1),null)),head_forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strip_gspec(body_forms)], 0))));
})():(function (){var vec__47420 = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.seq_QMARK_),forms);
var head_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47420,(0),null);
var body_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47420,(1),null);
var tail_attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47420,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,op,null,(1),null)),head_forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(strip_gspec,body_forms),tail_attr_map], 0))));
})()));
});

//# sourceMappingURL=ghostwheel.unghost.js.map
