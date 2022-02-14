goog.provide('redux.core');
redux.core.pre_step = (function redux$core$pre_step(rf,f){
return (function() {
var G__42338 = null;
var G__42338__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__42338__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__42338__2 = (function (acc,x){
var G__42276 = acc;
var G__42277 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42276,G__42277) : rf.call(null,G__42276,G__42277));
});
G__42338 = function(acc,x){
switch(arguments.length){
case 0:
return G__42338__0.call(this);
case 1:
return G__42338__1.call(this,acc);
case 2:
return G__42338__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42338.cljs$core$IFn$_invoke$arity$0 = G__42338__0;
G__42338.cljs$core$IFn$_invoke$arity$1 = G__42338__1;
G__42338.cljs$core$IFn$_invoke$arity$2 = G__42338__2;
return G__42338;
})()
});
redux.core.post_complete = (function redux$core$post_complete(rf,f){
return (function() {
var G__42339 = null;
var G__42339__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__42339__1 = (function (acc){
var G__42282 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42282) : f.call(null,G__42282));
});
var G__42339__2 = (function (acc,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
});
G__42339 = function(acc,x){
switch(arguments.length){
case 0:
return G__42339__0.call(this);
case 1:
return G__42339__1.call(this,acc);
case 2:
return G__42339__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42339.cljs$core$IFn$_invoke$arity$0 = G__42339__0;
G__42339.cljs$core$IFn$_invoke$arity$1 = G__42339__1;
G__42339.cljs$core$IFn$_invoke$arity$2 = G__42339__2;
return G__42339;
})()
});
redux.core.with_xform = (function redux$core$with_xform(rf,xform){
var rfv = cljs.core.volatile_BANG_(null);
return (function() {
var G__42344 = null;
var G__42344__0 = (function (){
cljs.core.vreset_BANG_(rfv,(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf)));

var fexpr__42290 = cljs.core.deref(rfv);
return (fexpr__42290.cljs$core$IFn$_invoke$arity$0 ? fexpr__42290.cljs$core$IFn$_invoke$arity$0() : fexpr__42290.call(null));
});
var G__42344__1 = (function (acc){
var fexpr__42291 = cljs.core.deref(rfv);
return (fexpr__42291.cljs$core$IFn$_invoke$arity$1 ? fexpr__42291.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__42291.call(null,acc));
});
var G__42344__2 = (function (acc,x){
var fexpr__42294 = cljs.core.deref(rfv);
return (fexpr__42294.cljs$core$IFn$_invoke$arity$2 ? fexpr__42294.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__42294.call(null,acc,x));
});
G__42344 = function(acc,x){
switch(arguments.length){
case 0:
return G__42344__0.call(this);
case 1:
return G__42344__1.call(this,acc);
case 2:
return G__42344__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42344.cljs$core$IFn$_invoke$arity$0 = G__42344__0;
G__42344.cljs$core$IFn$_invoke$arity$1 = G__42344__1;
G__42344.cljs$core$IFn$_invoke$arity$2 = G__42344__2;
return G__42344;
})()
});
redux.core.juxt = (function redux$core$juxt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42345 = arguments.length;
var i__4865__auto___42346 = (0);
while(true){
if((i__4865__auto___42346 < len__4864__auto___42345)){
args__4870__auto__.push((arguments[i__4865__auto___42346]));

var G__42347 = (i__4865__auto___42346 + (1));
i__4865__auto___42346 = G__42347;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic = (function (rfns){
return (function() {
var G__42348 = null;
var G__42348__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),rfns);
});
var G__42348__1 = (function (acc){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
var G__42303 = cljs.core.unreduced(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42303) : f.call(null,G__42303));
}),rfns,acc);
});
var G__42348__2 = (function (acc,x){
var all_reduced_QMARK_ = cljs.core.volatile_BANG_(true);
var results = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
if((!(cljs.core.reduced_QMARK_(a)))){
cljs.core.vreset_BANG_(all_reduced_QMARK_,false);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,x) : f.call(null,a,x));
} else {
return a;
}
}),rfns,acc);
if(cljs.core.truth_(cljs.core.deref(all_reduced_QMARK_))){
return cljs.core.reduced(results);
} else {
return results;
}
});
G__42348 = function(acc,x){
switch(arguments.length){
case 0:
return G__42348__0.call(this);
case 1:
return G__42348__1.call(this,acc);
case 2:
return G__42348__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42348.cljs$core$IFn$_invoke$arity$0 = G__42348__0;
G__42348.cljs$core$IFn$_invoke$arity$1 = G__42348__1;
G__42348.cljs$core$IFn$_invoke$arity$2 = G__42348__2;
return G__42348;
})()
}));

(redux.core.juxt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redux.core.juxt.cljs$lang$applyTo = (function (seq42296){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42296));
}));

redux.core.facet = (function redux$core$facet(rf,fns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(redux.core.juxt,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return redux.core.pre_step(rf,f);
}),fns));
});
redux.core.fuse = (function redux$core$fuse(kvs){
return redux.core.post_complete(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(redux.core.juxt,cljs.core.vals(kvs)),(function (acc){
return cljs.core.zipmap(cljs.core.keys(kvs),acc);
}));
});
redux.core.fuse_matrix = (function redux$core$fuse_matrix(rf,kvs){
return redux.core.post_complete(redux.core.pre_step(redux.core.fuse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42327){
var vec__42328 = p__42327;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42328,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42328,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null),(function (){var G__42331 = (function (p1__42323_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42323_SHARP_,k1);
});
var G__42332 = (function (p1__42324_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42324_SHARP_,k2);
});
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42331,G__42332) : rf.call(null,G__42331,G__42332));
})()], null);
}),redux.utils.pairs(cljs.core.keys(kvs))))),redux.utils.project(kvs)),redux.utils.complete_triangular_matrix);
});

//# sourceMappingURL=redux.core.js.map
