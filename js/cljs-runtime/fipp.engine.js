goog.provide('fipp.engine');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48829 = cljs.core.get_global_hierarchy;
return (fexpr__48829.cljs$core$IFn$_invoke$arity$0 ? fexpr__48829.cljs$core$IFn$_invoke$arity$0() : fexpr__48829.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
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
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__48837){
var vec__48839 = p__48837;
var seq__48840 = cljs.core.seq(vec__48839);
var first__48841 = cljs.core.first(seq__48840);
var seq__48840__$1 = cljs.core.next(seq__48840);
var _ = first__48841;
var text = seq__48840__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__48844){
var vec__48845 = p__48844;
var seq__48846 = cljs.core.seq(vec__48845);
var first__48847 = cljs.core.first(seq__48846);
var seq__48846__$1 = cljs.core.next(seq__48846);
var _ = first__48847;
var text = seq__48846__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__48848){
var vec__48849 = p__48848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48849,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48849,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__48858){
var vec__48859 = p__48858;
var seq__48860 = cljs.core.seq(vec__48859);
var first__48861 = cljs.core.first(seq__48860);
var seq__48860__$1 = cljs.core.next(seq__48860);
var _ = first__48861;
var children = seq__48860__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__48866){
var vec__48867 = p__48866;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48867,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48867,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48867,(2),null);
var inline__$1 = (function (){var or__5045__auto__ = inline;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__5045__auto__ = terminate;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var G__49063__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__49063 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49064__i = 0, G__49064__a = new Array(arguments.length -  0);
while (G__49064__i < G__49064__a.length) {G__49064__a[G__49064__i] = arguments[G__49064__i + 0]; ++G__49064__i;}
  _ = new cljs.core.IndexedSeq(G__49064__a,0,null);
} 
return G__49063__delegate.call(this,_);};
G__49063.cljs$lang$maxFixedArity = 0;
G__49063.cljs$lang$applyTo = (function (arglist__49065){
var _ = cljs.core.seq(arglist__49065);
return G__49063__delegate(_);
});
G__49063.cljs$core$IFn$_invoke$arity$variadic = G__49063__delegate;
return G__49063;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"group","group",582596132),(function (p__48883){
var vec__48884 = p__48883;
var seq__48885 = cljs.core.seq(vec__48884);
var first__48886 = cljs.core.first(seq__48885);
var seq__48885__$1 = cljs.core.next(seq__48885);
var _ = first__48886;
var children = seq__48885__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__48897){
var vec__48900 = p__48897;
var seq__48901 = cljs.core.seq(vec__48900);
var first__48902 = cljs.core.first(seq__48901);
var seq__48901__$1 = cljs.core.next(seq__48901);
var _ = first__48902;
var args = seq__48901__$1;
var vec__48908 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__48909 = cljs.core.seq(vec__48908);
var first__48910 = cljs.core.first(seq__48909);
var seq__48909__$1 = cljs.core.next(seq__48909);
var offset = first__48910;
var children = seq__48909__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__48911){
var vec__48912 = p__48911;
var seq__48913 = cljs.core.seq(vec__48912);
var first__48914 = cljs.core.first(seq__48913);
var seq__48913__$1 = cljs.core.next(seq__48913);
var _ = first__48914;
var args = seq__48913__$1;
var vec__48915 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__48916 = cljs.core.seq(vec__48915);
var first__48917 = cljs.core.first(seq__48916);
var seq__48916__$1 = cljs.core.next(seq__48916);
var offset = first__48917;
var children = seq__48916__$1;
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
var G__49075 = null;
var G__49075__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__49075__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__49075__2 = (function (res,node){
var delta = (function (){var G__48928 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__48928__$1 = (((G__48928 instanceof cljs.core.Keyword))?G__48928.fqn:null);
switch (G__48928__$1) {
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
var G__48937 = res;
var G__48938 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"right","right",-452581833),p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__48937,G__48938) : rf.call(null,G__48937,G__48938));
});
G__49075 = function(res,node){
switch(arguments.length){
case 0:
return G__49075__0.call(this);
case 1:
return G__49075__1.call(this,res);
case 2:
return G__49075__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49075.cljs$core$IFn$_invoke$arity$0 = G__49075__0;
G__49075.cljs$core$IFn$_invoke$arity$1 = G__49075__1;
G__49075.cljs$core$IFn$_invoke$arity$2 = G__49075__2;
return G__49075;
})()
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49081 = arguments.length;
var i__5770__auto___49082 = (0);
while(true){
if((i__5770__auto___49082 < len__5769__auto___49081)){
args__5775__auto__.push((arguments[i__5770__auto___49082]));

var G__49084 = (i__5770__auto___49082 + (1));
i__5770__auto___49082 = G__49084;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr(cljs.core.pop(deque),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(deque),args));
}));

(fipp.engine.update_right.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(fipp.engine.update_right.cljs$lang$applyTo = (function (seq48944){
var G__48945 = cljs.core.first(seq48944);
var seq48944__$1 = cljs.core.next(seq48944);
var G__48946 = cljs.core.first(seq48944__$1);
var seq48944__$2 = cljs.core.next(seq48944__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48945,G__48946,seq48944__$2);
}));

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__48971){
var map__48974 = p__48971;
var map__48974__$1 = cljs.core.__destructure_map(map__48974);
var options = map__48974__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48974__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return (function() {
var G__49085 = null;
var G__49085__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__49085__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__49085__2 = (function (res,p__48975){
var map__48976 = p__48975;
var map__48976__$1 = cljs.core.__destructure_map(map__48976);
var node = map__48976__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48976__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48976__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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

var G__49092 = buffers_STAR__STAR_;
var G__49093 = res_STAR___$1;
buffers_STAR_ = G__49092;
res__$1 = G__49093;
continue;
}
}
break;
}
}
}
});
G__49085 = function(res,p__48975){
switch(arguments.length){
case 0:
return G__49085__0.call(this);
case 1:
return G__49085__1.call(this,res);
case 2:
return G__49085__2.call(this,res,p__48975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49085.cljs$core$IFn$_invoke$arity$0 = G__49085__0;
G__49085.cljs$core$IFn$_invoke$arity$1 = G__49085__1;
G__49085.cljs$core$IFn$_invoke$arity$2 = G__49085__2;
return G__49085;
})()
});
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__48991){
var map__48992 = p__48991;
var map__48992__$1 = cljs.core.__destructure_map(map__48992);
var options = map__48992__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48992__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return (function() {
var G__49098 = null;
var G__49098__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__49098__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__49098__2 = (function (res,p__48996){
var map__48997 = p__48996;
var map__48997__$1 = cljs.core.__destructure_map(map__48997);
var node = map__48997__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48997__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48997__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var format_text = (function (text,width__$1){
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__49009 = res;
var G__49010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__49009,G__49010) : rf.call(null,G__49009,G__49010));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + width__$1));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));
});
var G__49014 = op;
var G__49014__$1 = (((G__49014 instanceof cljs.core.Keyword))?G__49014.fqn:null);
switch (G__49014__$1) {
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

var G__49017 = res;
var G__49018 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__49017,G__49018) : rf.call(null,G__49017,G__49018));
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
cljs.core.vreset_BANG_(fits,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (cljs.core.deref(fits) - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__49098 = function(res,p__48996){
switch(arguments.length){
case 0:
return G__49098__0.call(this);
case 1:
return G__49098__1.call(this,res);
case 2:
return G__49098__2.call(this,res,p__48996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49098.cljs$core$IFn$_invoke$arity$0 = G__49098__0;
G__49098.cljs$core$IFn$_invoke$arity$1 = G__49098__1;
G__49098.cljs$core$IFn$_invoke$arity$2 = G__49098__2;
return G__49098;
})()
});
});
fipp.engine.print_fns = (function fipp$engine$print_fns(options){
var map__49030 = options;
var map__49030__$1 = cljs.core.__destructure_map(map__49030);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49030__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),cljs.core._STAR_print_fn_STAR_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print","print",1299562414),print_fn,new cljs.core.Keyword(null,"println","println",1920840330),(function (){
var _STAR_print_fn_STAR__orig_val__49031 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__49032 = print_fn;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49032);

try{return cljs.core.println();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49031);
}})], null);
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__49040 = arguments.length;
switch (G__49040) {
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
var map__49044 = fipp.engine.print_fns(options__$1);
var map__49044__$1 = cljs.core.__destructure_map(map__49044);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49044__$1,new cljs.core.Keyword(null,"print","print",1299562414));
var println = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49044__$1,new cljs.core.Keyword(null,"println","println",1920840330));
cljs.core.run_BANG_(print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options__$1),fipp.engine.format_nodes(options__$1),fipp.engine.serialize(document)], 0)));

return (println.cljs$core$IFn$_invoke$arity$0 ? println.cljs$core$IFn$_invoke$arity$0() : println.call(null));
}));

(fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=fipp.engine.js.map
