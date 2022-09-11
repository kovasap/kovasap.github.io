goog.provide('rid3.elem');
rid3.elem.piece_did_mount = (function rid3$elem$piece_did_mount(piece,opts,prev_classes){
var map__41827 = opts;
var map__41827__$1 = cljs.core.__destructure_map(map__41827);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41827__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41828 = piece;
var map__41828__$1 = cljs.core.__destructure_map(map__41828);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41828__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41828__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41828__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (node,ratom__$1){
return node;
}));
var node = d3.select(rid3.util.node_selector(id,prev_classes));
var G__41833 = node.append("g").attr("class",class$).append(tag);
var G__41834 = ratom;
return (did_mount.cljs$core$IFn$_invoke$arity$2 ? did_mount.cljs$core$IFn$_invoke$arity$2(G__41833,G__41834) : did_mount.call(null,G__41833,G__41834));
});
rid3.elem.piece_did_update = (function rid3$elem$piece_did_update(piece,opts,prev_classes){
var map__41836 = opts;
var map__41836__$1 = cljs.core.__destructure_map(map__41836);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41836__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41837 = piece;
var map__41837__$1 = cljs.core.__destructure_map(map__41837);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41837__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41837__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41837__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41837__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
var did_update__$1 = (function (){var or__5045__auto__ = did_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = did_mount;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var node = d3.select([rid3.util.node_selector(id,prev_classes)," .",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));
var G__41840 = node.select(tag);
var G__41841 = ratom;
return (did_update__$1.cljs$core$IFn$_invoke$arity$2 ? did_update__$1.cljs$core$IFn$_invoke$arity$2(G__41840,G__41841) : did_update__$1.call(null,G__41840,G__41841));
});

//# sourceMappingURL=rid3.elem.js.map
