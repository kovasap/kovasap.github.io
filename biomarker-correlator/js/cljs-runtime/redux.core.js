goog.provide('redux.core');
redux.core.pre_step = (function redux$core$pre_step(rf,f){
return (function() {
var G__81863 = null;
var G__81863__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__81863__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__81863__2 = (function (acc,x){
var G__81831 = acc;
var G__81832 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__81831,G__81832) : rf.call(null,G__81831,G__81832));
});
G__81863 = function(acc,x){
switch(arguments.length){
case 0:
return G__81863__0.call(this);
case 1:
return G__81863__1.call(this,acc);
case 2:
return G__81863__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81863.cljs$core$IFn$_invoke$arity$0 = G__81863__0;
G__81863.cljs$core$IFn$_invoke$arity$1 = G__81863__1;
G__81863.cljs$core$IFn$_invoke$arity$2 = G__81863__2;
return G__81863;
})()
});
redux.core.post_complete = (function redux$core$post_complete(rf,f){
return (function() {
var G__81864 = null;
var G__81864__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__81864__1 = (function (acc){
var G__81833 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81833) : f.call(null,G__81833));
});
var G__81864__2 = (function (acc,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
});
G__81864 = function(acc,x){
switch(arguments.length){
case 0:
return G__81864__0.call(this);
case 1:
return G__81864__1.call(this,acc);
case 2:
return G__81864__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81864.cljs$core$IFn$_invoke$arity$0 = G__81864__0;
G__81864.cljs$core$IFn$_invoke$arity$1 = G__81864__1;
G__81864.cljs$core$IFn$_invoke$arity$2 = G__81864__2;
return G__81864;
})()
});
redux.core.with_xform = (function redux$core$with_xform(rf,xform){
var rfv = cljs.core.volatile_BANG_(null);
return (function() {
var G__81865 = null;
var G__81865__0 = (function (){
cljs.core.vreset_BANG_(rfv,(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf)));

var fexpr__81834 = cljs.core.deref(rfv);
return (fexpr__81834.cljs$core$IFn$_invoke$arity$0 ? fexpr__81834.cljs$core$IFn$_invoke$arity$0() : fexpr__81834.call(null));
});
var G__81865__1 = (function (acc){
var fexpr__81835 = cljs.core.deref(rfv);
return (fexpr__81835.cljs$core$IFn$_invoke$arity$1 ? fexpr__81835.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__81835.call(null,acc));
});
var G__81865__2 = (function (acc,x){
var fexpr__81836 = cljs.core.deref(rfv);
return (fexpr__81836.cljs$core$IFn$_invoke$arity$2 ? fexpr__81836.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__81836.call(null,acc,x));
});
G__81865 = function(acc,x){
switch(arguments.length){
case 0:
return G__81865__0.call(this);
case 1:
return G__81865__1.call(this,acc);
case 2:
return G__81865__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81865.cljs$core$IFn$_invoke$arity$0 = G__81865__0;
G__81865.cljs$core$IFn$_invoke$arity$1 = G__81865__1;
G__81865.cljs$core$IFn$_invoke$arity$2 = G__81865__2;
return G__81865;
})()
});
redux.core.juxt = (function redux$core$juxt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81866 = arguments.length;
var i__4865__auto___81867 = (0);
while(true){
if((i__4865__auto___81867 < len__4864__auto___81866)){
args__4870__auto__.push((arguments[i__4865__auto___81867]));

var G__81868 = (i__4865__auto___81867 + (1));
i__4865__auto___81867 = G__81868;
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
var G__81869 = null;
var G__81869__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),rfns);
});
var G__81869__1 = (function (acc){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
var G__81848 = cljs.core.unreduced(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81848) : f.call(null,G__81848));
}),rfns,acc);
});
var G__81869__2 = (function (acc,x){
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
G__81869 = function(acc,x){
switch(arguments.length){
case 0:
return G__81869__0.call(this);
case 1:
return G__81869__1.call(this,acc);
case 2:
return G__81869__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81869.cljs$core$IFn$_invoke$arity$0 = G__81869__0;
G__81869.cljs$core$IFn$_invoke$arity$1 = G__81869__1;
G__81869.cljs$core$IFn$_invoke$arity$2 = G__81869__2;
return G__81869;
})()
}));

(redux.core.juxt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redux.core.juxt.cljs$lang$applyTo = (function (seq81841){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81841));
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
return redux.core.post_complete(redux.core.pre_step(redux.core.fuse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81854){
var vec__81855 = p__81854;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81855,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81855,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null),(function (){var G__81861 = (function (p1__81849_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__81849_SHARP_,k1);
});
var G__81862 = (function (p1__81850_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__81850_SHARP_,k2);
});
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__81861,G__81862) : rf.call(null,G__81861,G__81862));
})()], null);
}),redux.utils.pairs(cljs.core.keys(kvs))))),redux.utils.project(kvs)),redux.utils.complete_triangular_matrix);
});

//# sourceMappingURL=redux.core.js.map
