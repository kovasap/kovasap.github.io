goog.provide('redux.core');
redux.core.pre_step = (function redux$core$pre_step(rf,f){
return (function() {
var G__55137 = null;
var G__55137__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__55137__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__55137__2 = (function (acc,x){
var G__55090 = acc;
var G__55091 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__55090,G__55091) : rf.call(null,G__55090,G__55091));
});
G__55137 = function(acc,x){
switch(arguments.length){
case 0:
return G__55137__0.call(this);
case 1:
return G__55137__1.call(this,acc);
case 2:
return G__55137__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55137.cljs$core$IFn$_invoke$arity$0 = G__55137__0;
G__55137.cljs$core$IFn$_invoke$arity$1 = G__55137__1;
G__55137.cljs$core$IFn$_invoke$arity$2 = G__55137__2;
return G__55137;
})()
});
redux.core.post_complete = (function redux$core$post_complete(rf,f){
return (function() {
var G__55138 = null;
var G__55138__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__55138__1 = (function (acc){
var G__55093 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55093) : f.call(null,G__55093));
});
var G__55138__2 = (function (acc,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
});
G__55138 = function(acc,x){
switch(arguments.length){
case 0:
return G__55138__0.call(this);
case 1:
return G__55138__1.call(this,acc);
case 2:
return G__55138__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55138.cljs$core$IFn$_invoke$arity$0 = G__55138__0;
G__55138.cljs$core$IFn$_invoke$arity$1 = G__55138__1;
G__55138.cljs$core$IFn$_invoke$arity$2 = G__55138__2;
return G__55138;
})()
});
redux.core.with_xform = (function redux$core$with_xform(rf,xform){
var rfv = cljs.core.volatile_BANG_(null);
return (function() {
var G__55143 = null;
var G__55143__0 = (function (){
cljs.core.vreset_BANG_(rfv,(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf)));

var fexpr__55105 = cljs.core.deref(rfv);
return (fexpr__55105.cljs$core$IFn$_invoke$arity$0 ? fexpr__55105.cljs$core$IFn$_invoke$arity$0() : fexpr__55105.call(null));
});
var G__55143__1 = (function (acc){
var fexpr__55106 = cljs.core.deref(rfv);
return (fexpr__55106.cljs$core$IFn$_invoke$arity$1 ? fexpr__55106.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__55106.call(null,acc));
});
var G__55143__2 = (function (acc,x){
var fexpr__55107 = cljs.core.deref(rfv);
return (fexpr__55107.cljs$core$IFn$_invoke$arity$2 ? fexpr__55107.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__55107.call(null,acc,x));
});
G__55143 = function(acc,x){
switch(arguments.length){
case 0:
return G__55143__0.call(this);
case 1:
return G__55143__1.call(this,acc);
case 2:
return G__55143__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55143.cljs$core$IFn$_invoke$arity$0 = G__55143__0;
G__55143.cljs$core$IFn$_invoke$arity$1 = G__55143__1;
G__55143.cljs$core$IFn$_invoke$arity$2 = G__55143__2;
return G__55143;
})()
});
redux.core.juxt = (function redux$core$juxt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55145 = arguments.length;
var i__4865__auto___55146 = (0);
while(true){
if((i__4865__auto___55146 < len__4864__auto___55145)){
args__4870__auto__.push((arguments[i__4865__auto___55146]));

var G__55147 = (i__4865__auto___55146 + (1));
i__4865__auto___55146 = G__55147;
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
var G__55148 = null;
var G__55148__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),rfns);
});
var G__55148__1 = (function (acc){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
var G__55116 = cljs.core.unreduced(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55116) : f.call(null,G__55116));
}),rfns,acc);
});
var G__55148__2 = (function (acc,x){
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
G__55148 = function(acc,x){
switch(arguments.length){
case 0:
return G__55148__0.call(this);
case 1:
return G__55148__1.call(this,acc);
case 2:
return G__55148__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55148.cljs$core$IFn$_invoke$arity$0 = G__55148__0;
G__55148.cljs$core$IFn$_invoke$arity$1 = G__55148__1;
G__55148.cljs$core$IFn$_invoke$arity$2 = G__55148__2;
return G__55148;
})()
}));

(redux.core.juxt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redux.core.juxt.cljs$lang$applyTo = (function (seq55108){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55108));
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
return redux.core.post_complete(redux.core.pre_step(redux.core.fuse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55127){
var vec__55128 = p__55127;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55128,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55128,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null),(function (){var G__55131 = (function (p1__55122_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55122_SHARP_,k1);
});
var G__55132 = (function (p1__55126_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55126_SHARP_,k2);
});
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__55131,G__55132) : rf.call(null,G__55131,G__55132));
})()], null);
}),redux.utils.pairs(cljs.core.keys(kvs))))),redux.utils.project(kvs)),redux.utils.complete_triangular_matrix);
});

//# sourceMappingURL=redux.core.js.map
