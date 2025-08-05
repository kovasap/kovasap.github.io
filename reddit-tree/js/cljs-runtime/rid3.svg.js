goog.provide('rid3.svg');
rid3.svg.svg_did_mount = (function rid3$svg$svg_did_mount(opts){
var map__40087 = opts;
var map__40087__$1 = cljs.core.__destructure_map(map__40087);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40087__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var svg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40087__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var parent_node = d3.select(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(svg,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (node,ratom__$1){
return node;
}));
var G__40088 = parent_node.append("svg");
var G__40089 = ratom;
return (did_mount.cljs$core$IFn$_invoke$arity$2 ? did_mount.cljs$core$IFn$_invoke$arity$2(G__40088,G__40089) : did_mount.call(null,G__40088,G__40089));
});
rid3.svg.svg_did_update = (function rid3$svg$svg_did_update(opts){
var map__40090 = opts;
var map__40090__$1 = cljs.core.__destructure_map(map__40090);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40090__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var svg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40090__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var did_update = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(svg,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(svg,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var node = d3.select(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," svg"].join(''));
return (did_update.cljs$core$IFn$_invoke$arity$2 ? did_update.cljs$core$IFn$_invoke$arity$2(node,ratom) : did_update.call(null,node,ratom));
});

//# sourceMappingURL=rid3.svg.js.map
