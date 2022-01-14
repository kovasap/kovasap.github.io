goog.provide('rid3.elem');
rid3.elem.piece_did_mount = (function rid3$elem$piece_did_mount(piece,opts,prev_classes){
var map__26839 = opts;
var map__26839__$1 = cljs.core.__destructure_map(map__26839);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__26844 = piece;
var map__26844__$1 = cljs.core.__destructure_map(map__26844);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26844__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (node,ratom__$1){
return node;
}));
var node = d3.select(rid3.util.node_selector(id,prev_classes));
var G__26846 = node.append("g").attr("class",class$).append(tag);
var G__26849 = ratom;
return (did_mount.cljs$core$IFn$_invoke$arity$2 ? did_mount.cljs$core$IFn$_invoke$arity$2(G__26846,G__26849) : did_mount.call(null,G__26846,G__26849));
});
rid3.elem.piece_did_update = (function rid3$elem$piece_did_update(piece,opts,prev_classes){
var map__26854 = opts;
var map__26854__$1 = cljs.core.__destructure_map(map__26854);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__26855 = piece;
var map__26855__$1 = cljs.core.__destructure_map(map__26855);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
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
var G__26859 = node.select(tag);
var G__26860 = ratom;
return (did_update__$1.cljs$core$IFn$_invoke$arity$2 ? did_update__$1.cljs$core$IFn$_invoke$arity$2(G__26859,G__26860) : did_update__$1.call(null,G__26859,G__26860));
});

//# sourceMappingURL=rid3.elem.js.map
