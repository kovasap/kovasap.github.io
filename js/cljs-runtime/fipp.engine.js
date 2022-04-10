goog.provide('fipp.engine');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73601 = cljs.core.get_global_hierarchy;
return (fexpr__73601.cljs$core$IFn$_invoke$arity$0 ? fexpr__73601.cljs$core$IFn$_invoke$arity$0() : fexpr__73601.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_(doc)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fipp.engine.serialize,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc], 0));
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_(doc)){
return fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(doc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__73610){
var vec__73613 = p__73610;
var seq__73614 = cljs.core.seq(vec__73613);
var first__73615 = cljs.core.first(seq__73614);
var seq__73614__$1 = cljs.core.next(seq__73614);
var _ = first__73615;
var text = seq__73614__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__73617){
var vec__73618 = p__73617;
var seq__73619 = cljs.core.seq(vec__73618);
var first__73620 = cljs.core.first(seq__73619);
var seq__73619__$1 = cljs.core.next(seq__73619);
var _ = first__73620;
var text = seq__73619__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__73621){
var vec__73622 = p__73621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73622,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73622,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__73666){
var vec__73667 = p__73666;
var seq__73668 = cljs.core.seq(vec__73667);
var first__73669 = cljs.core.first(seq__73668);
var seq__73668__$1 = cljs.core.next(seq__73668);
var _ = first__73669;
var children = seq__73668__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__73679){
var vec__73681 = p__73679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73681,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73681,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73681,(2),null);
var inline__$1 = (function (){var or__4253__auto__ = inline;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__4253__auto__ = terminate;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__73873__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__73873 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__73874__i = 0, G__73874__a = new Array(arguments.length -  0);
while (G__73874__i < G__73874__a.length) {G__73874__a[G__73874__i] = arguments[G__73874__i + 0]; ++G__73874__i;}
  _ = new cljs.core.IndexedSeq(G__73874__a,0,null);
} 
return G__73873__delegate.call(this,_);};
G__73873.cljs$lang$maxFixedArity = 0;
G__73873.cljs$lang$applyTo = (function (arglist__73875){
var _ = cljs.core.seq(arglist__73875);
return G__73873__delegate(_);
});
G__73873.cljs$core$IFn$_invoke$arity$variadic = G__73873__delegate;
return G__73873;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"group","group",582596132),(function (p__73725){
var vec__73726 = p__73725;
var seq__73727 = cljs.core.seq(vec__73726);
var first__73728 = cljs.core.first(seq__73727);
var seq__73727__$1 = cljs.core.next(seq__73727);
var _ = first__73728;
var children = seq__73727__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__73730){
var vec__73731 = p__73730;
var seq__73732 = cljs.core.seq(vec__73731);
var first__73733 = cljs.core.first(seq__73732);
var seq__73732__$1 = cljs.core.next(seq__73732);
var _ = first__73733;
var args = seq__73732__$1;
var vec__73734 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__73735 = cljs.core.seq(vec__73734);
var first__73736 = cljs.core.first(seq__73735);
var seq__73735__$1 = cljs.core.next(seq__73735);
var offset = first__73736;
var children = seq__73735__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__73739){
var vec__73742 = p__73739;
var seq__73743 = cljs.core.seq(vec__73742);
var first__73744 = cljs.core.first(seq__73743);
var seq__73743__$1 = cljs.core.next(seq__73743);
var _ = first__73744;
var args = seq__73743__$1;
var vec__73751 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__73752 = cljs.core.seq(vec__73751);
var first__73753 = cljs.core.first(seq__73752);
var seq__73752__$1 = cljs.core.next(seq__73752);
var offset = first__73753;
var children = seq__73752__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null)], 0));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_((0));
return (function() {
var G__73883 = null;
var G__73883__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__73883__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__73883__2 = (function (res,node){
var delta = (function (){var G__73763 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__73763__$1 = (((G__73763 instanceof cljs.core.Keyword))?G__73763.fqn:null);
switch (G__73763__$1) {
case "text":
return cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count(new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = pos.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(pos.cljs$core$IDeref$_deref$arity$1(null) + delta));
var G__73767 = res;
var G__73768 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"right","right",-452581833),p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__73767,G__73768) : rf.call(null,G__73767,G__73768));
});
G__73883 = function(res,node){
switch(arguments.length){
case 0:
return G__73883__0.call(this);
case 1:
return G__73883__1.call(this,res);
case 2:
return G__73883__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73883.cljs$core$IFn$_invoke$arity$0 = G__73883__0;
G__73883.cljs$core$IFn$_invoke$arity$1 = G__73883__1;
G__73883.cljs$core$IFn$_invoke$arity$2 = G__73883__2;
return G__73883;
})()
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73890 = arguments.length;
var i__4865__auto___73891 = (0);
while(true){
if((i__4865__auto___73891 < len__4864__auto___73890)){
args__4870__auto__.push((arguments[i__4865__auto___73891]));

var G__73892 = (i__4865__auto___73891 + (1));
i__4865__auto___73891 = G__73892;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr(cljs.core.pop(deque),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(deque),args));
}));

(fipp.engine.update_right.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(fipp.engine.update_right.cljs$lang$applyTo = (function (seq73773){
var G__73774 = cljs.core.first(seq73773);
var seq73773__$1 = cljs.core.next(seq73773);
var G__73775 = cljs.core.first(seq73773__$1);
var seq73773__$2 = cljs.core.next(seq73773__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73774,G__73775,seq73773__$2);
}));

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__73792){
var map__73793 = p__73792;
var map__73793__$1 = cljs.core.__destructure_map(map__73793);
var options = map__73793__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73793__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return (function() {
var G__73897 = null;
var G__73897__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__73897__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__73897__2 = (function (res,p__73795){
var map__73796 = p__73795;
var map__73796__$1 = cljs.core.__destructure_map(map__73796);
var node = map__73796__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73796__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73796__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref(bufs);
if(cljs.core.empty_QMARK_(buffers)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_(pos,position_STAR_);

cljs.core.vreset_BANG_(bufs,(fipp.deque.create.cljs$core$IFn$_invoke$arity$1 ? fipp.deque.create.cljs$core$IFn$_invoke$arity$1(buffer) : fipp.deque.create.call(null,buffer)));

return res;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,node) : rf.call(null,res,node));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek(buffers);
var buffers_STAR_ = cljs.core.pop(buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr(begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_(buffers_STAR_)){
cljs.core.vreset_BANG_(pos,(0));

cljs.core.vreset_BANG_(bufs,fipp.deque.empty);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_(buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_(nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_(bufs,fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(buffers_STAR_,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes], 0)));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr(buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(buffers,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node], 0)));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref(pos))) && ((cljs.core.count(buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_(bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first(buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl(buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res__$1,begin) : rf.call(null,res__$1,begin));
var res_STAR___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_(buffers_STAR__STAR_)){
cljs.core.vreset_BANG_(pos,(0));

cljs.core.vreset_BANG_(bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_(pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(buffers_STAR__STAR_)));

var G__73902 = buffers_STAR__STAR_;
var G__73903 = res_STAR___$1;
buffers_STAR_ = G__73902;
res__$1 = G__73903;
continue;
}
}
break;
}
}
}
});
G__73897 = function(res,p__73795){
switch(arguments.length){
case 0:
return G__73897__0.call(this);
case 1:
return G__73897__1.call(this,res);
case 2:
return G__73897__2.call(this,res,p__73795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73897.cljs$core$IFn$_invoke$arity$0 = G__73897__0;
G__73897.cljs$core$IFn$_invoke$arity$1 = G__73897__1;
G__73897.cljs$core$IFn$_invoke$arity$2 = G__73897__2;
return G__73897;
})()
});
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__73815){
var map__73816 = p__73815;
var map__73816__$1 = cljs.core.__destructure_map(map__73816);
var options = map__73816__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73816__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return (function() {
var G__73904 = null;
var G__73904__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__73904__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__73904__2 = (function (res,p__73817){
var map__73819 = p__73817;
var map__73819__$1 = cljs.core.__destructure_map(map__73819);
var node = map__73819__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73819__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73819__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var format_text = (function (text,width__$1){
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__73824 = res;
var G__73825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__73824,G__73825) : rf.call(null,G__73824,G__73825));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + width__$1));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));
});
var G__73828 = op;
var G__73828__$1 = (((G__73828 instanceof cljs.core.Keyword))?G__73828.fqn:null);
switch (G__73828__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
return format_text(text,cljs.core.count(text));

break;
case "escaped":
return format_text(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node),(1));

break;
case "pass":
return format_text(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node),(0));

break;
case "line":
if((cljs.core.deref(fits) === (0))){
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

var G__73829 = res;
var G__73830 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__73829,G__73830) : rf.call(null,G__73829,G__73830));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + cljs.core.count(inline)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,inline) : rf.call(null,res,inline));
}

break;
case "break":
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,"\n") : rf.call(null,res,"\n"));

break;
case "nest":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tab_stops.cljs$core$IDeref$_deref$arity$1(null),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tab_stops.cljs$core$IDeref$_deref$arity$1(null),(cljs.core.deref(column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(tab_stops.cljs$core$IDeref$_deref$arity$1(null)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_(fits,(((cljs.core.deref(fits) > (0)))?(cljs.core.deref(fits) + (1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref(length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_(fits,(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (cljs.core.deref(fits) - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__73904 = function(res,p__73817){
switch(arguments.length){
case 0:
return G__73904__0.call(this);
case 1:
return G__73904__1.call(this,res);
case 2:
return G__73904__2.call(this,res,p__73817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73904.cljs$core$IFn$_invoke$arity$0 = G__73904__0;
G__73904.cljs$core$IFn$_invoke$arity$1 = G__73904__1;
G__73904.cljs$core$IFn$_invoke$arity$2 = G__73904__2;
return G__73904;
})()
});
});
fipp.engine.print_fns = (function fipp$engine$print_fns(options){
var map__73844 = options;
var map__73844__$1 = cljs.core.__destructure_map(map__73844);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73844__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),cljs.core._STAR_print_fn_STAR_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print","print",1299562414),print_fn,new cljs.core.Keyword(null,"println","println",1920840330),(function (){
var _STAR_print_fn_STAR__orig_val__73845 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__73846 = print_fn;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73846);

try{return cljs.core.println();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73845);
}})], null);
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__73856 = arguments.length;
switch (G__73856) {
case 1:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1 = (function (document){
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(document,cljs.core.PersistentArrayMap.EMPTY);
}));

(fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2 = (function (document,options){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options], 0));
var map__73859 = fipp.engine.print_fns(options__$1);
var map__73859__$1 = cljs.core.__destructure_map(map__73859);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73859__$1,new cljs.core.Keyword(null,"print","print",1299562414));
var println = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73859__$1,new cljs.core.Keyword(null,"println","println",1920840330));
cljs.core.run_BANG_(print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options__$1),fipp.engine.format_nodes(options__$1),fipp.engine.serialize(document)], 0)));

return (println.cljs$core$IFn$_invoke$arity$0 ? println.cljs$core$IFn$_invoke$arity$0() : println.call(null));
}));

(fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=fipp.engine.js.map
