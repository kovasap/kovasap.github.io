goog.provide('malli.impl.util');
malli.impl.util._PLUS_max_size_PLUS_ = Number.MAX_VALUE;
malli.impl.util._tagged = (function malli$impl$util$_tagged(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
malli.impl.util._tagged_QMARK_ = (function malli$impl$util$_tagged_QMARK_(v){
return (v instanceof cljs.core.MapEntry);
});
malli.impl.util._invalid_QMARK_ = (function malli$impl$util$_invalid_QMARK_(x){
return cljs.core.keyword_identical_QMARK_(x,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
});
malli.impl.util._map_valid = (function malli$impl$util$_map_valid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return v;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}
});
malli.impl.util._map_invalid = (function malli$impl$util$_map_invalid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
} else {
return v;
}
});
malli.impl.util._reduce_kv_valid = (function malli$impl$util$_reduce_kv_valid(f,init,coll){
return cljs.core.reduce_kv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__42814_SHARP_){
return malli.impl.util._map_invalid(cljs.core.reduced,p1__42814_SHARP_);
}),f),init,coll);
});
malli.impl.util._error = (function malli$impl$util$_error(var_args){
var G__42816 = arguments.length;
switch (G__42816) {
case 4:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$4 = (function (path,in$,schema,value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}));

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$5 = (function (path,in$,schema,value,type){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),type], null);
}));

(malli.impl.util._error.cljs$lang$maxFixedArity = 5);

malli.impl.util._vmap = (function malli$impl$util$_vmap(var_args){
var G__42820 = arguments.length;
switch (G__42820) {
case 1:
return malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$1 = (function (os){
return malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,os);
}));

(malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$2 = (function (f,os){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),os);
}));

(malli.impl.util._vmap.cljs$lang$maxFixedArity = 2);

malli.impl.util._every_pred = (function malli$impl$util$_every_pred(preds){
return (function (m){
return cljs.core.boolean$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42831_SHARP_,p2__42830_SHARP_){
var or__5045__auto__ = (p2__42830_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__42830_SHARP_.cljs$core$IFn$_invoke$arity$1(m) : p2__42830_SHARP_.call(null,m));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.reduced(false);
}
}),true,preds));
});
});
malli.impl.util._some_pred = (function malli$impl$util$_some_pred(preds){
return (function (x){
return cljs.core.boolean$(cljs.core.some((function (p1__42834_SHARP_){
return (p1__42834_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42834_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__42834_SHARP_.call(null,x));
}),preds));
});
});

//# sourceMappingURL=malli.impl.util.js.map
