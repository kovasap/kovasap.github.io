goog.provide('fipp.engine');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__83750 = cljs.core.get_global_hierarchy;
return (fexpr__83750.cljs$core$IFn$_invoke$arity$0 ? fexpr__83750.cljs$core$IFn$_invoke$arity$0() : fexpr__83750.call(null));
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
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__83768){
var vec__83773 = p__83768;
var seq__83774 = cljs.core.seq(vec__83773);
var first__83775 = cljs.core.first(seq__83774);
var seq__83774__$1 = cljs.core.next(seq__83774);
var _ = first__83775;
var text = seq__83774__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__83780){
var vec__83781 = p__83780;
var seq__83782 = cljs.core.seq(vec__83781);
var first__83783 = cljs.core.first(seq__83782);
var seq__83782__$1 = cljs.core.next(seq__83782);
var _ = first__83783;
var text = seq__83782__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__83788){
var vec__83790 = p__83788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83790,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83790,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__83793){
var vec__83794 = p__83793;
var seq__83795 = cljs.core.seq(vec__83794);
var first__83796 = cljs.core.first(seq__83795);
var seq__83795__$1 = cljs.core.next(seq__83795);
var _ = first__83796;
var children = seq__83795__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__83798){
var vec__83799 = p__83798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83799,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83799,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83799,(2),null);
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
var G__83902__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__83902 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__83905__i = 0, G__83905__a = new Array(arguments.length -  0);
while (G__83905__i < G__83905__a.length) {G__83905__a[G__83905__i] = arguments[G__83905__i + 0]; ++G__83905__i;}
  _ = new cljs.core.IndexedSeq(G__83905__a,0,null);
} 
return G__83902__delegate.call(this,_);};
G__83902.cljs$lang$maxFixedArity = 0;
G__83902.cljs$lang$applyTo = (function (arglist__83906){
var _ = cljs.core.seq(arglist__83906);
return G__83902__delegate(_);
});
G__83902.cljs$core$IFn$_invoke$arity$variadic = G__83902__delegate;
return G__83902;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"group","group",582596132),(function (p__83804){
var vec__83805 = p__83804;
var seq__83806 = cljs.core.seq(vec__83805);
var first__83807 = cljs.core.first(seq__83806);
var seq__83806__$1 = cljs.core.next(seq__83806);
var _ = first__83807;
var children = seq__83806__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__83810){
var vec__83812 = p__83810;
var seq__83813 = cljs.core.seq(vec__83812);
var first__83814 = cljs.core.first(seq__83813);
var seq__83813__$1 = cljs.core.next(seq__83813);
var _ = first__83814;
var args = seq__83813__$1;
var vec__83816 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__83817 = cljs.core.seq(vec__83816);
var first__83818 = cljs.core.first(seq__83817);
var seq__83817__$1 = cljs.core.next(seq__83817);
var offset = first__83818;
var children = seq__83817__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__83823){
var vec__83824 = p__83823;
var seq__83825 = cljs.core.seq(vec__83824);
var first__83826 = cljs.core.first(seq__83825);
var seq__83825__$1 = cljs.core.next(seq__83825);
var _ = first__83826;
var args = seq__83825__$1;
var vec__83827 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__83828 = cljs.core.seq(vec__83827);
var first__83829 = cljs.core.first(seq__83828);
var seq__83828__$1 = cljs.core.next(seq__83828);
var offset = first__83829;
var children = seq__83828__$1;
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
var G__83909 = null;
var G__83909__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__83909__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__83909__2 = (function (res,node){
var delta = (function (){var G__83832 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__83832__$1 = (((G__83832 instanceof cljs.core.Keyword))?G__83832.fqn:null);
switch (G__83832__$1) {
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
var G__83833 = res;
var G__83834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"right","right",-452581833),p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__83833,G__83834) : rf.call(null,G__83833,G__83834));
});
G__83909 = function(res,node){
switch(arguments.length){
case 0:
return G__83909__0.call(this);
case 1:
return G__83909__1.call(this,res);
case 2:
return G__83909__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__83909.cljs$core$IFn$_invoke$arity$0 = G__83909__0;
G__83909.cljs$core$IFn$_invoke$arity$1 = G__83909__1;
G__83909.cljs$core$IFn$_invoke$arity$2 = G__83909__2;
return G__83909;
})()
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4870__auto__ = [];
var len__4864__auto___83913 = arguments.length;
var i__4865__auto___83914 = (0);
while(true){
if((i__4865__auto___83914 < len__4864__auto___83913)){
args__4870__auto__.push((arguments[i__4865__auto___83914]));

var G__83915 = (i__4865__auto___83914 + (1));
i__4865__auto___83914 = G__83915;
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
(fipp.engine.update_right.cljs$lang$applyTo = (function (seq83841){
var G__83842 = cljs.core.first(seq83841);
var seq83841__$1 = cljs.core.next(seq83841);
var G__83843 = cljs.core.first(seq83841__$1);
var seq83841__$2 = cljs.core.next(seq83841__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83842,G__83843,seq83841__$2);
}));

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__83849){
var map__83850 = p__83849;
var map__83850__$1 = cljs.core.__destructure_map(map__83850);
var options = map__83850__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83850__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return (function() {
var G__83916 = null;
var G__83916__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__83916__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__83916__2 = (function (res,p__83852){
var map__83853 = p__83852;
var map__83853__$1 = cljs.core.__destructure_map(map__83853);
var node = map__83853__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83853__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83853__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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

var G__83928 = buffers_STAR__STAR_;
var G__83929 = res_STAR___$1;
buffers_STAR_ = G__83928;
res__$1 = G__83929;
continue;
}
}
break;
}
}
}
});
G__83916 = function(res,p__83852){
switch(arguments.length){
case 0:
return G__83916__0.call(this);
case 1:
return G__83916__1.call(this,res);
case 2:
return G__83916__2.call(this,res,p__83852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__83916.cljs$core$IFn$_invoke$arity$0 = G__83916__0;
G__83916.cljs$core$IFn$_invoke$arity$1 = G__83916__1;
G__83916.cljs$core$IFn$_invoke$arity$2 = G__83916__2;
return G__83916;
})()
});
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__83864){
var map__83865 = p__83864;
var map__83865__$1 = cljs.core.__destructure_map(map__83865);
var options = map__83865__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83865__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return (function() {
var G__83930 = null;
var G__83930__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__83930__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__83930__2 = (function (res,p__83870){
var map__83871 = p__83870;
var map__83871__$1 = cljs.core.__destructure_map(map__83871);
var node = map__83871__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83871__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83871__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var format_text = (function (text,width__$1){
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__83876 = res;
var G__83877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__83876,G__83877) : rf.call(null,G__83876,G__83877));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + width__$1));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));
});
var G__83878 = op;
var G__83878__$1 = (((G__83878 instanceof cljs.core.Keyword))?G__83878.fqn:null);
switch (G__83878__$1) {
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

var G__83879 = res;
var G__83880 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__83879,G__83880) : rf.call(null,G__83879,G__83880));
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
G__83930 = function(res,p__83870){
switch(arguments.length){
case 0:
return G__83930__0.call(this);
case 1:
return G__83930__1.call(this,res);
case 2:
return G__83930__2.call(this,res,p__83870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__83930.cljs$core$IFn$_invoke$arity$0 = G__83930__0;
G__83930.cljs$core$IFn$_invoke$arity$1 = G__83930__1;
G__83930.cljs$core$IFn$_invoke$arity$2 = G__83930__2;
return G__83930;
})()
});
});
fipp.engine.print_fns = (function fipp$engine$print_fns(options){
var map__83888 = options;
var map__83888__$1 = cljs.core.__destructure_map(map__83888);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83888__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),cljs.core._STAR_print_fn_STAR_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print","print",1299562414),print_fn,new cljs.core.Keyword(null,"println","println",1920840330),(function (){
var _STAR_print_fn_STAR__orig_val__83889 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__83890 = print_fn;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__83890);

try{return cljs.core.println();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__83889);
}})], null);
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__83896 = arguments.length;
switch (G__83896) {
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
var map__83898 = fipp.engine.print_fns(options__$1);
var map__83898__$1 = cljs.core.__destructure_map(map__83898);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83898__$1,new cljs.core.Keyword(null,"print","print",1299562414));
var println = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83898__$1,new cljs.core.Keyword(null,"println","println",1920840330));
cljs.core.run_BANG_(print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options__$1),fipp.engine.format_nodes(options__$1),fipp.engine.serialize(document)], 0)));

return (println.cljs$core$IFn$_invoke$arity$0 ? println.cljs$core$IFn$_invoke$arity$0() : println.call(null));
}));

(fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=fipp.engine.js.map
