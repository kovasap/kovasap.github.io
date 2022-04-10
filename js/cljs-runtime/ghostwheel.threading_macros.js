goog.provide('ghostwheel.threading_macros');
ghostwheel.threading_macros.log_threading_header = (function ghostwheel$threading_macros$log_threading_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48152 = arguments.length;
var i__4865__auto___48153 = (0);
while(true){
if((i__4865__auto___48153 < len__4864__auto___48152)){
args__4870__auto__.push((arguments[i__4865__auto___48153]));

var G__48154 = (i__4865__auto___48153 + (1));
i__4865__auto___48153 = G__48154;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic = (function (threading_type,expr,p__48096){
var vec__48097 = p__48096;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48097,(0),null);
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(threading_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),(cljs.core.truth_(name)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
}));

(ghostwheel.threading_macros.log_threading_header.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ghostwheel.threading_macros.log_threading_header.cljs$lang$applyTo = (function (seq48085){
var G__48086 = cljs.core.first(seq48085);
var seq48085__$1 = cljs.core.next(seq48085);
var G__48087 = cljs.core.first(seq48085__$1);
var seq48085__$2 = cljs.core.next(seq48085__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48086,G__48087,seq48085__$2);
}));

ghostwheel.threading_macros.log_cond_step = (function ghostwheel$threading_macros$log_cond_step(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48159 = arguments.length;
var i__4865__auto___48160 = (0);
while(true){
if((i__4865__auto___48160 < len__4864__auto___48159)){
args__4870__auto__.push((arguments[i__4865__auto___48160]));

var G__48161 = (i__4865__auto___48160 + (1));
i__4865__auto___48160 = G__48161;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic = (function (test,step,data,p__48126){
var vec__48127 = p__48126;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48127,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,style,null,(1),null))], 0))));
}));

(ghostwheel.threading_macros.log_cond_step.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ghostwheel.threading_macros.log_cond_step.cljs$lang$applyTo = (function (seq48117){
var G__48118 = cljs.core.first(seq48117);
var seq48117__$1 = cljs.core.next(seq48117);
var G__48119 = cljs.core.first(seq48117__$1);
var seq48117__$2 = cljs.core.next(seq48117__$1);
var G__48120 = cljs.core.first(seq48117__$2);
var seq48117__$3 = cljs.core.next(seq48117__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48118,G__48119,G__48120,seq48117__$3);
}));

ghostwheel.threading_macros.log_some_step = (function ghostwheel$threading_macros$log_some_step(some_step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,some_step)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,some_step,null,(1),null))], 0))));
});

//# sourceMappingURL=ghostwheel.threading_macros.js.map
