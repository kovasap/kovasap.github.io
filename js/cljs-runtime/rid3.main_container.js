goog.provide('rid3.main_container');
rid3.main_container.main_container_did_mount = (function rid3$main_container$main_container_did_mount(opts){
var map__42005 = opts;
var map__42005__$1 = cljs.core.__destructure_map(map__42005);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var pieces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var main_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"main-container","main-container",-1260526439));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(main_container,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (node,ratom__$1){
return node;
}));
var node = d3.select(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," svg"].join(''));
var G__42009 = node.append("g").attr("class",rid3.util.main_container_class);
var G__42010 = ratom;
return (did_mount.cljs$core$IFn$_invoke$arity$2 ? did_mount.cljs$core$IFn$_invoke$arity$2(G__42009,G__42010) : did_mount.call(null,G__42009,G__42010));
});
rid3.main_container.main_container_did_update = (function rid3$main_container$main_container_did_update(opts){
var map__42016 = opts;
var map__42016__$1 = cljs.core.__destructure_map(map__42016);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var pieces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var main_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"main-container","main-container",-1260526439));
var did_update = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(main_container,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(main_container,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var node = d3.select(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," svg"," .",rid3.util.main_container_class].join(''));
return (did_update.cljs$core$IFn$_invoke$arity$2 ? did_update.cljs$core$IFn$_invoke$arity$2(node,ratom) : did_update.call(null,node,ratom));
});

//# sourceMappingURL=rid3.main_container.js.map
