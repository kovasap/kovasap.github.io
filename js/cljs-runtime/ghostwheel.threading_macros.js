goog.provide('ghostwheel.threading_macros');
ghostwheel.threading_macros.log_threading_header = (function ghostwheel$threading_macros$log_threading_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47277 = arguments.length;
var i__4865__auto___47278 = (0);
while(true){
if((i__4865__auto___47278 < len__4864__auto___47277)){
args__4870__auto__.push((arguments[i__4865__auto___47278]));

var G__47279 = (i__4865__auto___47278 + (1));
i__4865__auto___47278 = G__47279;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic = (function (threading_type,expr,p__47247){
var vec__47248 = p__47247;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47248,(0),null);
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(threading_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),(cljs.core.truth_(name)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
}));

(ghostwheel.threading_macros.log_threading_header.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ghostwheel.threading_macros.log_threading_header.cljs$lang$applyTo = (function (seq47241){
var G__47242 = cljs.core.first(seq47241);
var seq47241__$1 = cljs.core.next(seq47241);
var G__47243 = cljs.core.first(seq47241__$1);
var seq47241__$2 = cljs.core.next(seq47241__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47242,G__47243,seq47241__$2);
}));

ghostwheel.threading_macros.log_cond_step = (function ghostwheel$threading_macros$log_cond_step(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47280 = arguments.length;
var i__4865__auto___47281 = (0);
while(true){
if((i__4865__auto___47281 < len__4864__auto___47280)){
args__4870__auto__.push((arguments[i__4865__auto___47281]));

var G__47282 = (i__4865__auto___47281 + (1));
i__4865__auto___47281 = G__47282;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic = (function (test,step,data,p__47264){
var vec__47265 = p__47264;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47265,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,style,null,(1),null))], 0))));
}));

(ghostwheel.threading_macros.log_cond_step.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ghostwheel.threading_macros.log_cond_step.cljs$lang$applyTo = (function (seq47258){
var G__47259 = cljs.core.first(seq47258);
var seq47258__$1 = cljs.core.next(seq47258);
var G__47260 = cljs.core.first(seq47258__$1);
var seq47258__$2 = cljs.core.next(seq47258__$1);
var G__47261 = cljs.core.first(seq47258__$2);
var seq47258__$3 = cljs.core.next(seq47258__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47259,G__47260,G__47261,seq47258__$3);
}));

ghostwheel.threading_macros.log_some_step = (function ghostwheel$threading_macros$log_some_step(some_step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,some_step)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,some_step,null,(1),null))], 0))));
});

//# sourceMappingURL=ghostwheel.threading_macros.js.map
