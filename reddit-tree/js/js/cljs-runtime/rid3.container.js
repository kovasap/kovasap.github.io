goog.provide('rid3.container');
rid3.container.piece_did_mount = (function rid3$container$piece_did_mount(piece,opts,prev_classes){
var map__8790 = opts;
var map__8790__$1 = cljs.core.__destructure_map(map__8790);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8790__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__8792 = piece;
var map__8792__$1 = cljs.core.__destructure_map(map__8792);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8792__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8792__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (node,ratom__$1){
return node;
}));
var node = d3.select(rid3.util.node_selector(id,prev_classes));
var G__8796 = node.append("g").attr("class",class$);
var G__8797 = ratom;
return (did_mount.cljs$core$IFn$_invoke$arity$2 ? did_mount.cljs$core$IFn$_invoke$arity$2(G__8796,G__8797) : did_mount.call(null,G__8796,G__8797));
});
rid3.container.piece_did_update = (function rid3$container$piece_did_update(piece,opts,prev_classes){
var map__8802 = opts;
var map__8802__$1 = cljs.core.__destructure_map(map__8802);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8802__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__8803 = piece;
var map__8803__$1 = cljs.core.__destructure_map(map__8803);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8803__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8803__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8803__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
var did_update__$1 = (function (){var or__4212__auto__ = did_update;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = did_mount;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var node = d3.select([rid3.util.node_selector(id,prev_classes)," .",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));
return (did_update__$1.cljs$core$IFn$_invoke$arity$2 ? did_update__$1.cljs$core$IFn$_invoke$arity$2(node,ratom) : did_update__$1.call(null,node,ratom));
});

//# sourceMappingURL=rid3.container.js.map
