goog.provide('rid3.elem');
rid3.elem.piece_did_mount = (function rid3$elem$piece_did_mount(piece,opts,prev_classes){
var map__42074 = opts;
var map__42074__$1 = cljs.core.__destructure_map(map__42074);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42074__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42074__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42075 = piece;
var map__42075__$1 = cljs.core.__destructure_map(map__42075);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42075__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42075__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42075__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (node,ratom__$1){
return node;
}));
var node = d3.select(rid3.util.node_selector(id,prev_classes));
var G__42080 = node.append("g").attr("class",class$).append(tag);
var G__42081 = ratom;
return (did_mount.cljs$core$IFn$_invoke$arity$2 ? did_mount.cljs$core$IFn$_invoke$arity$2(G__42080,G__42081) : did_mount.call(null,G__42080,G__42081));
});
rid3.elem.piece_did_update = (function rid3$elem$piece_did_update(piece,opts,prev_classes){
var map__42083 = opts;
var map__42083__$1 = cljs.core.__destructure_map(map__42083);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42083__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42083__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42084 = piece;
var map__42084__$1 = cljs.core.__destructure_map(map__42084);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
var did_update__$1 = (function (){var or__4253__auto__ = did_update;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = did_mount;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var node = d3.select([rid3.util.node_selector(id,prev_classes)," .",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));
var G__42094 = node.select(tag);
var G__42095 = ratom;
return (did_update__$1.cljs$core$IFn$_invoke$arity$2 ? did_update__$1.cljs$core$IFn$_invoke$arity$2(G__42094,G__42095) : did_update__$1.call(null,G__42094,G__42095));
});

//# sourceMappingURL=rid3.elem.js.map
