goog.provide('oz.core');
oz.core.vegaEmbed_STAR_ = ((cljs.core.fn_QMARK_(shadow.js.shim.module$vega_embed))?shadow.js.shim.module$vega_embed:shadow.js.shim.module$vega_embed.default);
cljs.core.enable_console_print_BANG_();
oz.core.apply_log_level = (function oz$core$apply_log_level(p__49793){
var map__49794 = p__49793;
var map__49794__$1 = cljs.core.__destructure_map(map__49794);
var opts = map__49794__$1;
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49794__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
if((((log_level instanceof cljs.core.Keyword)) || (typeof log_level === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"log-level","log-level",862121670)),new cljs.core.Keyword(null,"logLevel","logLevel",1131406165),(function (){var G__49795 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(log_level);
var G__49795__$1 = (((G__49795 instanceof cljs.core.Keyword))?G__49795.fqn:null);
switch (G__49795__$1) {
case "debug":
return shadow.js.shim.module$vega.Debug;

break;
case "info":
return shadow.js.shim.module$vega.Info;

break;
case "warn":
return shadow.js.shim.module$vega.Warn;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49795__$1)].join('')));

}
})());
} else {
return opts;
}
});
oz.core.embed_vega = (function oz$core$embed_vega(var_args){
var G__49798 = arguments.length;
switch (G__49798) {
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

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3 = (function (elem,doc,p__49803){
var map__49804 = p__49803;
var map__49804__$1 = cljs.core.__destructure_map(map__49804);
var opts = map__49804__$1;
var view_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49804__$1,new cljs.core.Keyword(null,"view-callback","view-callback",797033263));
if(cljs.core.truth_(doc)){
var doc__$1 = cljs.core.clj__GT_js(doc);
var opts__$1 = oz.core.apply_log_level(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"view-callback","view-callback",797033263))], 0)));
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),opts__$1], 0));
return (function (){var G__49805 = elem;
var G__49806 = doc__$1;
var G__49807 = cljs.core.clj__GT_js(opts__$2);
return (oz.core.vegaEmbed_STAR_.cljs$core$IFn$_invoke$arity$3 ? oz.core.vegaEmbed_STAR_.cljs$core$IFn$_invoke$arity$3(G__49805,G__49806,G__49807) : oz.core.vegaEmbed_STAR_.call(null,G__49805,G__49806,G__49807));
})().then((function (res){
if(cljs.core.truth_(view_callback)){
var G__49808 = res.view;
return (view_callback.cljs$core$IFn$_invoke$arity$1 ? view_callback.cljs$core$IFn$_invoke$arity$1(G__49808) : view_callback.call(null,G__49808));
} else {
return null;
}
})).catch((function (err){
return console.log(err);
}));
} else {
return null;
}
}));

(oz.core.embed_vega.cljs$lang$maxFixedArity = 3);

oz.core.update_vega = (function oz$core$update_vega(elem,old_doc,new_doc,old_opts,new_opts){
var G__49811 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"always-rerender","always-rerender",1736797242).cljs$core$IFn$_invoke$arity$1(new_opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_doc,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_doc,new cljs.core.Keyword(null,"data","data",-232669377)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"embed-vega","embed-vega",-617762446,null),G__49811)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),G__49811)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-doc","new-doc",795331265,null),G__49811)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-opts","new-opts",-1018023265,null),G__49811)){
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
var G__49816 = arguments.length;
switch (G__49816) {
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
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__49823){
var vec__49827 = p__49823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49827,(0),null);
var new_doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49827,(1),null);
var new_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49827,(2),null);
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
var G__49831 = arguments.length;
switch (G__49831) {
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

oz.core.live_viewers_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite], null));
oz.core.register_live_view = (function oz$core$register_live_view(key,component){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(oz.core.live_viewers_state,cljs.core.assoc,key,component);
});
oz.core.register_live_views = (function oz$core$register_live_views(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49934 = arguments.length;
var i__4865__auto___49935 = (0);
while(true){
if((i__4865__auto___49935 < len__4864__auto___49934)){
args__4870__auto__.push((arguments[i__4865__auto___49935]));

var G__49936 = (i__4865__auto___49935 + (1));
i__4865__auto___49935 = G__49936;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic = (function (p__49839){
var map__49840 = p__49839;
var map__49840__$1 = cljs.core.__destructure_map(map__49840);
var live_views = map__49840__$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(oz.core.live_viewers_state,cljs.core.merge,live_views);
}));

(oz.core.register_live_views.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oz.core.register_live_views.cljs$lang$applyTo = (function (seq49834){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49834));
}));

oz.core.default_data_table_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"per-page","per-page",-54905429),(50),new cljs.core.Keyword(null,"tr-style","tr-style",1853585605),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"td-style","td-style",1948769874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10)], null),new cljs.core.Keyword(null,"th-style","th-style",-1504296072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null);
oz.core.data_table = (function oz$core$data_table(var_args){
var G__49842 = arguments.length;
switch (G__49842) {
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

(oz.core.data_table.cljs$core$IFn$_invoke$arity$2 = (function (data,p__49843){
var map__49844 = p__49843;
var map__49844__$1 = cljs.core.__destructure_map(map__49844);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
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
var map__49845 = cljs.core.deref(state);
var map__49845__$1 = cljs.core.__destructure_map(map__49845);
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__49846 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (opt1,opt2){
if(((cljs.core.map_QMARK_(opt1)) && (cljs.core.map_QMARK_(opt2)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt1,opt2], 0));
} else {
return opt2;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oz.core.default_data_table_opts,opts], 0));
var map__49846__$1 = cljs.core.__destructure_map(map__49846);
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var tr_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846__$1,new cljs.core.Keyword(null,"tr-style","tr-style",1853585605));
var td_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846__$1,new cljs.core.Keyword(null,"td-style","td-style",1948769874));
var th_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846__$1,new cljs.core.Keyword(null,"th-style","th-style",-1504296072));
var scoped_data = (function (){var G__49847 = data__$1;
var G__49847__$1 = (cljs.core.truth_(sort_key__$1)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key__$1,G__49847):G__49847);
var G__49847__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"descending","descending",-24766135),sort_order__$1))?cljs.core.reverse(G__49847__$1):G__49847__$1);
var G__49847__$3 = (cljs.core.truth_(per_page)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page * page__$1),G__49847__$2):G__49847__$2);
if(cljs.core.truth_(per_page)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,G__49847__$3);
} else {
return G__49847__$3;
}
})();
var last_page = cljs.core.quot(cljs.core.count(data__$1),per_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.count(data__$1) > per_page))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),"Current page: ",(page__$1 + (1))], null),(((page__$1 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__49961__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
};
var G__49961 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49962__i = 0, G__49962__a = new Array(arguments.length -  0);
while (G__49962__i < G__49962__a.length) {G__49962__a[G__49962__i] = arguments[G__49962__i + 0]; ++G__49962__i;}
  _ = new cljs.core.IndexedSeq(G__49962__a,0,null);
} 
return G__49961__delegate.call(this,_);};
G__49961.cljs$lang$maxFixedArity = 0;
G__49961.cljs$lang$applyTo = (function (arglist__49963){
var _ = cljs.core.seq(arglist__49963);
return G__49961__delegate(_);
});
G__49961.cljs$core$IFn$_invoke$arity$variadic = G__49961__delegate;
return G__49961;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"prev"], null):null),(((page__$1 < last_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__49964__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
};
var G__49964 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49965__i = 0, G__49965__a = new Array(arguments.length -  0);
while (G__49965__i < G__49965__a.length) {G__49965__a[G__49965__i] = arguments[G__49965__i + 0]; ++G__49965__i;}
  _ = new cljs.core.IndexedSeq(G__49965__a,0,null);
} 
return G__49964__delegate.call(this,_);};
G__49964.cljs$lang$maxFixedArity = 0;
G__49964.cljs$lang$applyTo = (function (arglist__49966){
var _ = cljs.core.seq(arglist__49966);
return G__49964__delegate(_);
});
G__49964.cljs$core$IFn$_invoke$arity$variadic = G__49964__delegate;
return G__49964;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"next"], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4652__auto__ = (function oz$core$iter__49848(s__49849){
return (new cljs.core.LazySeq(null,(function (){
var s__49849__$1 = s__49849;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49849__$1);
if(temp__5753__auto__){
var s__49849__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49849__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49849__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49851 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49850 = (0);
while(true){
if((i__49850 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__49850);
cljs.core.chunk_append(b__49851,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49850,key,c__4650__auto__,size__4651__auto__,b__49851,s__49849__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order){
return (function() { 
var G__49971__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__49971 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49973__i = 0, G__49973__a = new Array(arguments.length -  0);
while (G__49973__i < G__49973__a.length) {G__49973__a[G__49973__i] = arguments[G__49973__i + 0]; ++G__49973__i;}
  _ = new cljs.core.IndexedSeq(G__49973__a,0,null);
} 
return G__49971__delegate.call(this,_);};
G__49971.cljs$lang$maxFixedArity = 0;
G__49971.cljs$lang$applyTo = (function (arglist__49974){
var _ = cljs.core.seq(arglist__49974);
return G__49971__delegate(_);
});
G__49971.cljs$core$IFn$_invoke$arity$variadic = G__49971__delegate;
return G__49971;
})()
;})(i__49850,key,c__4650__auto__,size__4651__auto__,b__49851,s__49849__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__49855 = sort_order__$1;
var G__49855__$1 = (((G__49855 instanceof cljs.core.Keyword))?G__49855.fqn:null);
switch (G__49855__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49855__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__49979 = (i__49850 + (1));
i__49850 = G__49979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49851),oz$core$iter__49848(cljs.core.chunk_rest(s__49849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49851),null);
}
} else {
var key = cljs.core.first(s__49849__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key,s__49849__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order){
return (function() { 
var G__49983__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__49983 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49984__i = 0, G__49984__a = new Array(arguments.length -  0);
while (G__49984__i < G__49984__a.length) {G__49984__a[G__49984__i] = arguments[G__49984__i + 0]; ++G__49984__i;}
  _ = new cljs.core.IndexedSeq(G__49984__a,0,null);
} 
return G__49983__delegate.call(this,_);};
G__49983.cljs$lang$maxFixedArity = 0;
G__49983.cljs$lang$applyTo = (function (arglist__49985){
var _ = cljs.core.seq(arglist__49985);
return G__49983__delegate(_);
});
G__49983.cljs$core$IFn$_invoke$arity$variadic = G__49983__delegate;
return G__49983;
})()
;})(key,s__49849__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__49858 = sort_order__$1;
var G__49858__$1 = (((G__49858 instanceof cljs.core.Keyword))?G__49858.fqn:null);
switch (G__49858__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49858__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__49848(cljs.core.rest(s__49849__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(header);
})()], null),(function (){var iter__4652__auto__ = (function oz$core$iter__49859(s__49860){
return (new cljs.core.LazySeq(null,(function (){
var s__49860__$1 = s__49860;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49860__$1);
if(temp__5753__auto__){
var s__49860__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49860__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49860__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49862 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49861 = (0);
while(true){
if((i__49861 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__49861);
cljs.core.chunk_append(b__49862,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4652__auto__ = ((function (i__49861,row,c__4650__auto__,size__4651__auto__,b__49862,s__49860__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order){
return (function oz$core$iter__49859_$_iter__49863(s__49864){
return (new cljs.core.LazySeq(null,((function (i__49861,row,c__4650__auto__,size__4651__auto__,b__49862,s__49860__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order){
return (function (){
var s__49864__$1 = s__49864;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__49864__$1);
if(temp__5753__auto____$1){
var s__49864__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49864__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__49864__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__49866 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__49865 = (0);
while(true){
if((i__49865 < size__4651__auto____$1)){
var key = cljs.core._nth(c__4650__auto____$1,i__49865);
cljs.core.chunk_append(b__49866,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__49991 = (i__49865 + (1));
i__49865 = G__49991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49866),oz$core$iter__49859_$_iter__49863(cljs.core.chunk_rest(s__49864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49866),null);
}
} else {
var key = cljs.core.first(s__49864__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__49859_$_iter__49863(cljs.core.rest(s__49864__$2)));
}
} else {
return null;
}
break;
}
});})(i__49861,row,c__4650__auto__,size__4651__auto__,b__49862,s__49860__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order))
,null,null));
});})(i__49861,row,c__4650__auto__,size__4651__auto__,b__49862,s__49860__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__50001 = (i__49861 + (1));
i__49861 = G__50001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49862),oz$core$iter__49859(cljs.core.chunk_rest(s__49860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49862),null);
}
} else {
var row = cljs.core.first(s__49860__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4652__auto__ = ((function (row,s__49860__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order){
return (function oz$core$iter__49859_$_iter__49868(s__49869){
return (new cljs.core.LazySeq(null,(function (){
var s__49869__$1 = s__49869;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__49869__$1);
if(temp__5753__auto____$1){
var s__49869__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49869__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49869__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49871 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49870 = (0);
while(true){
if((i__49870 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__49870);
cljs.core.chunk_append(b__49871,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__50006 = (i__49870 + (1));
i__49870 = G__50006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49871),oz$core$iter__49859_$_iter__49868(cljs.core.chunk_rest(s__49869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49871),null);
}
} else {
var key = cljs.core.first(s__49869__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__49859_$_iter__49868(cljs.core.rest(s__49869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__49860__$2,temp__5753__auto__,map__49845,map__49845__$1,page__$1,sort_key__$1,sort_order__$1,map__49846,map__49846__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__49844,map__49844__$1,page,sort_key,sort_order))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),oz$core$iter__49859(cljs.core.rest(s__49860__$2)));
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
var live_viewer_keys = cljs.core.set(cljs.core.keys(live_viewers));
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.coll_QMARK_(x);
if(and__4251__auto__){
var G__49890 = cljs.core.first(x);
return (live_viewer_keys.cljs$core$IFn$_invoke$arity$1 ? live_viewer_keys.cljs$core$IFn$_invoke$arity$1(G__49890) : live_viewer_keys.call(null,G__49890));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(live_viewers,cljs.core.first(x))], null),cljs.core.rest(x));
} else {
return x;
}
}),doc);
});
oz.core.view_spec = oz.core.live_view;

//# sourceMappingURL=oz.core.js.map
