goog.provide('app.utils');
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :results-slope 50}
 *   
 *   Taken from https://stackoverflow.com/a/17902228
 */
app.utils.flatten_map_concat_keys = (function app$utils$flatten_map_concat_keys(var_args){
var G__42452 = arguments.length;
switch (G__42452) {
case 2:
return app.utils.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.utils.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.utils.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$2 = (function (form,separator){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.utils.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3(form,separator,null));
}));

(app.utils.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3 = (function (form,separator,pre){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__42454){
var vec__42455 = p__42454;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42455,(1),null);
var prefix = (cljs.core.truth_(pre)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator),cljs.core.name(k)].join(''):cljs.core.name(k));
if(cljs.core.map_QMARK_(v)){
return app.utils.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3(v,separator,prefix);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prefix),v], null)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
}));

(app.utils.flatten_map_concat_keys.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.utils.js.map
