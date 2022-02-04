goog.provide('oz.core');
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
var module$node_modules$vega$build$vega_node=shadow.js.require("module$node_modules$vega$build$vega_node", {});
cljs.core.enable_console_print_BANG_();
oz.core.apply_log_level = (function oz$core$apply_log_level(p__27696){
var map__27697 = p__27696;
var map__27697__$1 = cljs.core.__destructure_map(map__27697);
var opts = map__27697__$1;
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27697__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
if((((log_level instanceof cljs.core.Keyword)) || (typeof log_level === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"log-level","log-level",862121670)),new cljs.core.Keyword(null,"logLevel","logLevel",1131406165),(function (){var G__27698 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(log_level);
var G__27698__$1 = (((G__27698 instanceof cljs.core.Keyword))?G__27698.fqn:null);
switch (G__27698__$1) {
case "debug":
return module$node_modules$vega$build$vega_node.Debug;

break;
case "info":
return module$node_modules$vega$build$vega_node.Info;

break;
case "warn":
return module$node_modules$vega$build$vega_node.Warn;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27698__$1)].join('')));

}
})());
} else {
return opts;
}
});
oz.core.embed_vega = (function oz$core$embed_vega(var_args){
var G__27701 = arguments.length;
switch (G__27701) {
case 2:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2 = (function (elem,doc){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(elem,doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3 = (function (elem,doc,opts){
if(cljs.core.truth_(doc)){
var doc__$1 = cljs.core.clj__GT_js(doc);
var opts__$1 = oz.core.apply_log_level(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null),opts], 0)));
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),opts__$1], 0));
return module$node_modules$vega_embed$build$vega_embed(elem,doc__$1,cljs.core.clj__GT_js(opts__$2)).catch((function (err){
return console.log(err);
}));
} else {
return null;
}
}));

(oz.core.embed_vega.cljs$lang$maxFixedArity = 3);

oz.core.update_vega = (function oz$core$update_vega(elem,old_doc,new_doc,old_opts,new_opts){
var G__27722 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"always-rerender","always-rerender",1736797242).cljs$core$IFn$_invoke$arity$1(new_opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_doc,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_doc,new cljs.core.Keyword(null,"data","data",-232669377)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"embed-vega","embed-vega",-617762446,null),G__27722)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),G__27722)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-doc","new-doc",795331265,null),G__27722)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-opts","new-opts",-1018023265,null),G__27722)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
return null;

}
}
}
}
});
/**
 * Reagent component that renders vega
 */
oz.core.vega = (function oz$core$vega(var_args){
var G__27732 = arguments.length;
switch (G__27732) {
case 1:
return oz.core.vega.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega"], null),opts], 0));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),doc,opts__$1);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__27749){
var vec__27751 = p__27749;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(0),null);
var new_doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(1),null);
var new_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(2),null);
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),new_doc,new_opts);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (doc__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viz","div.viz",1155063891)], null);
})], null));
}));

(oz.core.vega.cljs$lang$maxFixedArity = 2);

/**
 * Reagent component that renders vega-lite.
 */
oz.core.vega_lite = (function oz$core$vega_lite(var_args){
var G__27771 = arguments.length;
switch (G__27771) {
case 1:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null)], 0)));
}));

(oz.core.vega_lite.cljs$lang$maxFixedArity = 2);

if((typeof oz !== 'undefined') && (typeof oz.core !== 'undefined') && (typeof oz.core.live_viewers_state !== 'undefined')){
} else {
oz.core.live_viewers_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite], null));
}
oz.core.register_live_view = (function oz$core$register_live_view(key,component){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(oz.core.live_viewers_state,cljs.core.assoc,key,component);
});
oz.core.register_live_views = (function oz$core$register_live_views(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28087 = arguments.length;
var i__4865__auto___28088 = (0);
while(true){
if((i__4865__auto___28088 < len__4864__auto___28087)){
args__4870__auto__.push((arguments[i__4865__auto___28088]));

var G__28089 = (i__4865__auto___28088 + (1));
i__4865__auto___28088 = G__28089;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic = (function (p__27809){
var map__27811 = p__27809;
var map__27811__$1 = cljs.core.__destructure_map(map__27811);
var live_views = map__27811__$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(oz.core.live_viewers_state,cljs.core.merge,live_views);
}));

(oz.core.register_live_views.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oz.core.register_live_views.cljs$lang$applyTo = (function (seq27797){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27797));
}));

oz.core.default_data_table_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"per-page","per-page",-54905429),(50),new cljs.core.Keyword(null,"tr-style","tr-style",1853585605),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"td-style","td-style",1948769874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10)], null),new cljs.core.Keyword(null,"th-style","th-style",-1504296072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null);
oz.core.data_table = (function oz$core$data_table(var_args){
var G__27835 = arguments.length;
switch (G__27835) {
case 1:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.data_table.cljs$core$IFn$_invoke$arity$1 = (function (data){
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.data_table.cljs$core$IFn$_invoke$arity$2 = (function (data,p__27846){
var map__27847 = p__27846;
var map__27847__$1 = cljs.core.__destructure_map(map__27847);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27847__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27847__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27847__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__4253__auto__ = page;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),sort_key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),(function (){var or__4253__auto__ = sort_order;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"ascending","ascending",-988350486);
}
})()], null));
var header = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),data)));
return (function (data__$1,opts){
var map__27861 = cljs.core.deref(state);
var map__27861__$1 = cljs.core.__destructure_map(map__27861);
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27861__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27861__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27861__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__27862 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (opt1,opt2){
if(((cljs.core.map_QMARK_(opt1)) && (cljs.core.map_QMARK_(opt2)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt1,opt2], 0));
} else {
return opt2;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oz.core.default_data_table_opts,opts], 0));
var map__27862__$1 = cljs.core.__destructure_map(map__27862);
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27862__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var tr_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27862__$1,new cljs.core.Keyword(null,"tr-style","tr-style",1853585605));
var td_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27862__$1,new cljs.core.Keyword(null,"td-style","td-style",1948769874));
var th_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27862__$1,new cljs.core.Keyword(null,"th-style","th-style",-1504296072));
var scoped_data = (function (){var G__27875 = data__$1;
var G__27875__$1 = (cljs.core.truth_(sort_key__$1)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key__$1,G__27875):G__27875);
var G__27875__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"descending","descending",-24766135),sort_order__$1))?cljs.core.reverse(G__27875__$1):G__27875__$1);
var G__27875__$3 = (cljs.core.truth_(per_page)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page * page__$1),G__27875__$2):G__27875__$2);
if(cljs.core.truth_(per_page)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,G__27875__$3);
} else {
return G__27875__$3;
}
})();
var last_page = cljs.core.quot(cljs.core.count(data__$1),per_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.count(data__$1) > per_page))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),"Current page: ",(page__$1 + (1))], null),(((page__$1 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__28105__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
};
var G__28105 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__28106__i = 0, G__28106__a = new Array(arguments.length -  0);
while (G__28106__i < G__28106__a.length) {G__28106__a[G__28106__i] = arguments[G__28106__i + 0]; ++G__28106__i;}
  _ = new cljs.core.IndexedSeq(G__28106__a,0,null);
} 
return G__28105__delegate.call(this,_);};
G__28105.cljs$lang$maxFixedArity = 0;
G__28105.cljs$lang$applyTo = (function (arglist__28107){
var _ = cljs.core.seq(arglist__28107);
return G__28105__delegate(_);
});
G__28105.cljs$core$IFn$_invoke$arity$variadic = G__28105__delegate;
return G__28105;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"prev"], null):null),(((page__$1 < last_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__28108__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
};
var G__28108 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__28109__i = 0, G__28109__a = new Array(arguments.length -  0);
while (G__28109__i < G__28109__a.length) {G__28109__a[G__28109__i] = arguments[G__28109__i + 0]; ++G__28109__i;}
  _ = new cljs.core.IndexedSeq(G__28109__a,0,null);
} 
return G__28108__delegate.call(this,_);};
G__28108.cljs$lang$maxFixedArity = 0;
G__28108.cljs$lang$applyTo = (function (arglist__28110){
var _ = cljs.core.seq(arglist__28110);
return G__28108__delegate(_);
});
G__28108.cljs$core$IFn$_invoke$arity$variadic = G__28108__delegate;
return G__28108;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"next"], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4652__auto__ = (function oz$core$iter__27892(s__27893){
return (new cljs.core.LazySeq(null,(function (){
var s__27893__$1 = s__27893;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27893__$1);
if(temp__5753__auto__){
var s__27893__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27893__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27893__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27895 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27894 = (0);
while(true){
if((i__27894 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__27894);
cljs.core.chunk_append(b__27895,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27894,key,c__4650__auto__,size__4651__auto__,b__27895,s__27893__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order){
return (function() { 
var G__28112__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__28112 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__28113__i = 0, G__28113__a = new Array(arguments.length -  0);
while (G__28113__i < G__28113__a.length) {G__28113__a[G__28113__i] = arguments[G__28113__i + 0]; ++G__28113__i;}
  _ = new cljs.core.IndexedSeq(G__28113__a,0,null);
} 
return G__28112__delegate.call(this,_);};
G__28112.cljs$lang$maxFixedArity = 0;
G__28112.cljs$lang$applyTo = (function (arglist__28115){
var _ = cljs.core.seq(arglist__28115);
return G__28112__delegate(_);
});
G__28112.cljs$core$IFn$_invoke$arity$variadic = G__28112__delegate;
return G__28112;
})()
;})(i__27894,key,c__4650__auto__,size__4651__auto__,b__27895,s__27893__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__27913 = sort_order__$1;
var G__27913__$1 = (((G__27913 instanceof cljs.core.Keyword))?G__27913.fqn:null);
switch (G__27913__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27913__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__28118 = (i__27894 + (1));
i__27894 = G__28118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27895),oz$core$iter__27892(cljs.core.chunk_rest(s__27893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27895),null);
}
} else {
var key = cljs.core.first(s__27893__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key,s__27893__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order){
return (function() { 
var G__28120__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__28120 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__28121__i = 0, G__28121__a = new Array(arguments.length -  0);
while (G__28121__i < G__28121__a.length) {G__28121__a[G__28121__i] = arguments[G__28121__i + 0]; ++G__28121__i;}
  _ = new cljs.core.IndexedSeq(G__28121__a,0,null);
} 
return G__28120__delegate.call(this,_);};
G__28120.cljs$lang$maxFixedArity = 0;
G__28120.cljs$lang$applyTo = (function (arglist__28122){
var _ = cljs.core.seq(arglist__28122);
return G__28120__delegate(_);
});
G__28120.cljs$core$IFn$_invoke$arity$variadic = G__28120__delegate;
return G__28120;
})()
;})(key,s__27893__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__27929 = sort_order__$1;
var G__27929__$1 = (((G__27929 instanceof cljs.core.Keyword))?G__27929.fqn:null);
switch (G__27929__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27929__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__27892(cljs.core.rest(s__27893__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(header);
})()], null),(function (){var iter__4652__auto__ = (function oz$core$iter__27935(s__27936){
return (new cljs.core.LazySeq(null,(function (){
var s__27936__$1 = s__27936;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27936__$1);
if(temp__5753__auto__){
var s__27936__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27936__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27936__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27938 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27937 = (0);
while(true){
if((i__27937 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__27937);
cljs.core.chunk_append(b__27938,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4652__auto__ = ((function (i__27937,row,c__4650__auto__,size__4651__auto__,b__27938,s__27936__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order){
return (function oz$core$iter__27935_$_iter__27950(s__27951){
return (new cljs.core.LazySeq(null,((function (i__27937,row,c__4650__auto__,size__4651__auto__,b__27938,s__27936__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order){
return (function (){
var s__27951__$1 = s__27951;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27951__$1);
if(temp__5753__auto____$1){
var s__27951__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27951__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__27951__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__27953 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__27952 = (0);
while(true){
if((i__27952 < size__4651__auto____$1)){
var key = cljs.core._nth(c__4650__auto____$1,i__27952);
cljs.core.chunk_append(b__27953,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__28127 = (i__27952 + (1));
i__27952 = G__28127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27953),oz$core$iter__27935_$_iter__27950(cljs.core.chunk_rest(s__27951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27953),null);
}
} else {
var key = cljs.core.first(s__27951__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__27935_$_iter__27950(cljs.core.rest(s__27951__$2)));
}
} else {
return null;
}
break;
}
});})(i__27937,row,c__4650__auto__,size__4651__auto__,b__27938,s__27936__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order))
,null,null));
});})(i__27937,row,c__4650__auto__,size__4651__auto__,b__27938,s__27936__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__28130 = (i__27937 + (1));
i__27937 = G__28130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27938),oz$core$iter__27935(cljs.core.chunk_rest(s__27936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27938),null);
}
} else {
var row = cljs.core.first(s__27936__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4652__auto__ = ((function (row,s__27936__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order){
return (function oz$core$iter__27935_$_iter__27982(s__27983){
return (new cljs.core.LazySeq(null,(function (){
var s__27983__$1 = s__27983;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27983__$1);
if(temp__5753__auto____$1){
var s__27983__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27983__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27983__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27985 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27984 = (0);
while(true){
if((i__27984 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__27984);
cljs.core.chunk_append(b__27985,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__28136 = (i__27984 + (1));
i__27984 = G__28136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27985),oz$core$iter__27935_$_iter__27982(cljs.core.chunk_rest(s__27983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27985),null);
}
} else {
var key = cljs.core.first(s__27983__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__27935_$_iter__27982(cljs.core.rest(s__27983__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__27936__$2,temp__5753__auto__,map__27861,map__27861__$1,page__$1,sort_key__$1,sort_order__$1,map__27862,map__27862__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__27847,map__27847__$1,page,sort_key,sort_order))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),oz$core$iter__27935(cljs.core.rest(s__27936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(scoped_data);
})()], null)], null);
});
}));

(oz.core.data_table.cljs$lang$maxFixedArity = 2);

oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite,new cljs.core.Keyword(null,"data-table","data-table",-149582774),oz.core.data_table], 0));
oz.core.live_view = (function oz$core$live_view(doc){
var live_viewers = cljs.core.deref(oz.core.live_viewers_state);
return clojure.walk.prewalk((function (x){
var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.coll_QMARK_(x);
if(and__4251__auto__){
var G__28028 = cljs.core.first(x);
return (live_viewers.cljs$core$IFn$_invoke$arity$1 ? live_viewers.cljs$core$IFn$_invoke$arity$1(G__28028) : live_viewers.call(null,G__28028));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var component_fn = temp__5751__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_fn], null),cljs.core.rest(x));
} else {
return x;
}
}),doc);
});
oz.core.view_spec = oz.core.live_view;

//# sourceMappingURL=oz.core.js.map
