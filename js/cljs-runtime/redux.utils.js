goog.provide('redux.utils');
redux.utils.project = (function redux$utils$project(fmap){
return (function (x){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),fmap));
});
});
redux.utils.complete_triangular_matrix = (function redux$utils$complete_triangular_matrix(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42246){
var vec__42247 = p__42246;
var vec__42250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42247,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42250,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42250,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42247,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),v], null);
}),m));
});
redux.utils.pairs = (function redux$utils$pairs(coll){
var pair = (function redux$utils$pairs_$_pair(x,xs){
if(cljs.core.seq(xs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42254_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,p1__42254_SHARP_],null));
}),xs),redux$utils$pairs_$_pair(cljs.core.first(xs),cljs.core.rest(xs)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
return pair(cljs.core.first(coll),cljs.core.rest(coll));
});

//# sourceMappingURL=redux.utils.js.map
