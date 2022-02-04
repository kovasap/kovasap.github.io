goog.provide('redux.core');
redux.core.pre_step = (function redux$core$pre_step(rf,f){
return (function() {
var G__42670 = null;
var G__42670__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__42670__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__42670__2 = (function (acc,x){
var G__42626 = acc;
var G__42627 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42626,G__42627) : rf.call(null,G__42626,G__42627));
});
G__42670 = function(acc,x){
switch(arguments.length){
case 0:
return G__42670__0.call(this);
case 1:
return G__42670__1.call(this,acc);
case 2:
return G__42670__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42670.cljs$core$IFn$_invoke$arity$0 = G__42670__0;
G__42670.cljs$core$IFn$_invoke$arity$1 = G__42670__1;
G__42670.cljs$core$IFn$_invoke$arity$2 = G__42670__2;
return G__42670;
})()
});
redux.core.post_complete = (function redux$core$post_complete(rf,f){
return (function() {
var G__42671 = null;
var G__42671__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__42671__1 = (function (acc){
var G__42633 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42633) : f.call(null,G__42633));
});
var G__42671__2 = (function (acc,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
});
G__42671 = function(acc,x){
switch(arguments.length){
case 0:
return G__42671__0.call(this);
case 1:
return G__42671__1.call(this,acc);
case 2:
return G__42671__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42671.cljs$core$IFn$_invoke$arity$0 = G__42671__0;
G__42671.cljs$core$IFn$_invoke$arity$1 = G__42671__1;
G__42671.cljs$core$IFn$_invoke$arity$2 = G__42671__2;
return G__42671;
})()
});
redux.core.with_xform = (function redux$core$with_xform(rf,xform){
var rfv = cljs.core.volatile_BANG_(null);
return (function() {
var G__42674 = null;
var G__42674__0 = (function (){
cljs.core.vreset_BANG_(rfv,(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf)));

var fexpr__42641 = cljs.core.deref(rfv);
return (fexpr__42641.cljs$core$IFn$_invoke$arity$0 ? fexpr__42641.cljs$core$IFn$_invoke$arity$0() : fexpr__42641.call(null));
});
var G__42674__1 = (function (acc){
var fexpr__42642 = cljs.core.deref(rfv);
return (fexpr__42642.cljs$core$IFn$_invoke$arity$1 ? fexpr__42642.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__42642.call(null,acc));
});
var G__42674__2 = (function (acc,x){
var fexpr__42643 = cljs.core.deref(rfv);
return (fexpr__42643.cljs$core$IFn$_invoke$arity$2 ? fexpr__42643.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__42643.call(null,acc,x));
});
G__42674 = function(acc,x){
switch(arguments.length){
case 0:
return G__42674__0.call(this);
case 1:
return G__42674__1.call(this,acc);
case 2:
return G__42674__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42674.cljs$core$IFn$_invoke$arity$0 = G__42674__0;
G__42674.cljs$core$IFn$_invoke$arity$1 = G__42674__1;
G__42674.cljs$core$IFn$_invoke$arity$2 = G__42674__2;
return G__42674;
})()
});
redux.core.juxt = (function redux$core$juxt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42677 = arguments.length;
var i__4865__auto___42678 = (0);
while(true){
if((i__4865__auto___42678 < len__4864__auto___42677)){
args__4870__auto__.push((arguments[i__4865__auto___42678]));

var G__42679 = (i__4865__auto___42678 + (1));
i__4865__auto___42678 = G__42679;
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
var G__42680 = null;
var G__42680__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),rfns);
});
var G__42680__1 = (function (acc){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
var G__42650 = cljs.core.unreduced(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42650) : f.call(null,G__42650));
}),rfns,acc);
});
var G__42680__2 = (function (acc,x){
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
G__42680 = function(acc,x){
switch(arguments.length){
case 0:
return G__42680__0.call(this);
case 1:
return G__42680__1.call(this,acc);
case 2:
return G__42680__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42680.cljs$core$IFn$_invoke$arity$0 = G__42680__0;
G__42680.cljs$core$IFn$_invoke$arity$1 = G__42680__1;
G__42680.cljs$core$IFn$_invoke$arity$2 = G__42680__2;
return G__42680;
})()
}));

(redux.core.juxt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redux.core.juxt.cljs$lang$applyTo = (function (seq42644){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42644));
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
return redux.core.post_complete(redux.core.pre_step(redux.core.fuse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42660){
var vec__42661 = p__42660;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42661,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42661,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null),(function (){var G__42664 = (function (p1__42657_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42657_SHARP_,k1);
});
var G__42665 = (function (p1__42658_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42658_SHARP_,k2);
});
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42664,G__42665) : rf.call(null,G__42664,G__42665));
})()], null);
}),redux.utils.pairs(cljs.core.keys(kvs))))),redux.utils.project(kvs)),redux.utils.complete_triangular_matrix);
});

//# sourceMappingURL=redux.core.js.map
