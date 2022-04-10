goog.provide('rid3.pieces');
rid3.pieces.warn_if_piece_needs_class = (function rid3$pieces$warn_if_piece_needs_class(kind,class$){
if(((cljs.core.not(class$)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"elem","elem",618631056))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220))))))))){
return console.warn(["[rid3] a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," needs to have a class"].join(''));
} else {
return null;
}
});
rid3.pieces.warn_if_piece_is_keyword = (function rid3$pieces$warn_if_piece_is_keyword(piece){
return console.warn(["[rid3] a piece needs to be a hash-map, you provided a keyword --> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece)].join(''));
});
rid3.pieces.warn_if_piece_is_vector = (function rid3$pieces$warn_if_piece_is_vector(piece){
return console.warn(["[rid3] a piece needs to be a hash-map, you provided a vector --> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece)].join(''));
});
rid3.pieces.warn_if_piece_is_missing_kind = (function rid3$pieces$warn_if_piece_is_missing_kind(){
return console.warn("[rid3] every piece needs to have a kind");
});
rid3.pieces.warn_if_piece_has_unknown_kind = (function rid3$pieces$warn_if_piece_has_unknown_kind(kind){
return console.warn(["[rid3] unknown kind --> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''));
});
rid3.pieces.warn_if_piece_shouldnt_have_children = (function rid3$pieces$warn_if_piece_shouldnt_have_children(kind){
return console.warn(["[rid3] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," piece cannot have children"].join(''));
});
rid3.pieces.handle_piece_did_mount = (function rid3$pieces$handle_piece_did_mount(var_args){
var G__40075 = arguments.length;
switch (G__40075) {
case 2:
return rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2 = (function (piece,opts){
return rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(piece,opts,cljs.core.PersistentVector.EMPTY);
}));

(rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3 = (function (piece,opts,prev_classes){
var map__40079 = piece;
var map__40079__$1 = cljs.core.__destructure_map(map__40079);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
rid3.pieces.warn_if_piece_needs_class(kind,class$);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707))){
rid3.container.piece_did_mount(piece,opts,prev_classes);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"elem","elem",618631056))){
rid3.elem.piece_did_mount(piece,opts,prev_classes);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220))){
rid3.elem_with_data.piece_did_mount(piece,opts,prev_classes);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"raw","raw",1604651272))){
rid3.raw.piece_did_mount(piece,opts);
} else {
if((piece instanceof cljs.core.Keyword)){
rid3.pieces.warn_if_piece_is_keyword(piece);
} else {
if(cljs.core.vector_QMARK_(piece)){
rid3.pieces.warn_if_piece_is_vector(piece);
} else {
if(cljs.core.not(kind)){
rid3.pieces.warn_if_piece_is_missing_kind();
} else {
rid3.pieces.warn_if_piece_has_unknown_kind(kind);

}
}
}
}
}
}
}

var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(piece,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__4210__auto__ = children;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707));
} else {
return and__4210__auto__;
}
})())){
var seq__40083 = cljs.core.seq(children);
var chunk__40084 = null;
var count__40085 = (0);
var i__40086 = (0);
while(true){
if((i__40086 < count__40085)){
var child = chunk__40084.cljs$core$IIndexed$_nth$arity$2(null,i__40086);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__40102 = seq__40083;
var G__40103 = chunk__40084;
var G__40104 = count__40085;
var G__40105 = (i__40086 + (1));
seq__40083 = G__40102;
chunk__40084 = G__40103;
count__40085 = G__40104;
i__40086 = G__40105;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40083);
if(temp__5753__auto__){
var seq__40083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40083__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40083__$1);
var G__40106 = cljs.core.chunk_rest(seq__40083__$1);
var G__40107 = c__4638__auto__;
var G__40108 = cljs.core.count(c__4638__auto__);
var G__40109 = (0);
seq__40083 = G__40106;
chunk__40084 = G__40107;
count__40085 = G__40108;
i__40086 = G__40109;
continue;
} else {
var child = cljs.core.first(seq__40083__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__40110 = cljs.core.next(seq__40083__$1);
var G__40111 = null;
var G__40112 = (0);
var G__40113 = (0);
seq__40083 = G__40110;
chunk__40084 = G__40111;
count__40085 = G__40112;
i__40086 = G__40113;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_(children)){
return rid3.pieces.warn_if_piece_shouldnt_have_children(kind);
} else {
return null;

}
}
}));

(rid3.pieces.handle_piece_did_mount.cljs$lang$maxFixedArity = 3);

rid3.pieces.handle_piece_did_update = (function rid3$pieces$handle_piece_did_update(var_args){
var G__40092 = arguments.length;
switch (G__40092) {
case 2:
return rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2 = (function (piece,opts){
return rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(piece,opts,cljs.core.PersistentVector.EMPTY);
}));

(rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3 = (function (piece,opts,prev_classes){
var map__40093 = opts;
var map__40093__$1 = cljs.core.__destructure_map(map__40093);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__40094 = piece;
var map__40094__$1 = cljs.core.__destructure_map(map__40094);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40094__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40094__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
rid3.pieces.warn_if_piece_needs_class(kind,class$);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707))){
rid3.container.piece_did_update(piece,opts,prev_classes);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"elem","elem",618631056))){
rid3.elem.piece_did_update(piece,opts,prev_classes);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220))){
rid3.elem_with_data.piece_did_update(piece,opts,prev_classes);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"raw","raw",1604651272))){
rid3.raw.piece_did_update(piece,opts);
} else {
if((piece instanceof cljs.core.Keyword)){
rid3.pieces.warn_if_piece_is_keyword(piece);
} else {
if(cljs.core.vector_QMARK_(piece)){
rid3.pieces.warn_if_piece_is_vector(piece);
} else {
if(cljs.core.not(kind)){
rid3.pieces.warn_if_piece_is_missing_kind();
} else {
rid3.pieces.warn_if_piece_has_unknown_kind(kind);

}
}
}
}
}
}
}

var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(piece,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__4210__auto__ = children;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707));
} else {
return and__4210__auto__;
}
})())){
var seq__40096 = cljs.core.seq(children);
var chunk__40097 = null;
var count__40098 = (0);
var i__40099 = (0);
while(true){
if((i__40099 < count__40098)){
var child = chunk__40097.cljs$core$IIndexed$_nth$arity$2(null,i__40099);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__40115 = seq__40096;
var G__40116 = chunk__40097;
var G__40117 = count__40098;
var G__40118 = (i__40099 + (1));
seq__40096 = G__40115;
chunk__40097 = G__40116;
count__40098 = G__40117;
i__40099 = G__40118;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40096);
if(temp__5753__auto__){
var seq__40096__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40096__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40096__$1);
var G__40119 = cljs.core.chunk_rest(seq__40096__$1);
var G__40120 = c__4638__auto__;
var G__40121 = cljs.core.count(c__4638__auto__);
var G__40122 = (0);
seq__40096 = G__40119;
chunk__40097 = G__40120;
count__40098 = G__40121;
i__40099 = G__40122;
continue;
} else {
var child = cljs.core.first(seq__40096__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__40123 = cljs.core.next(seq__40096__$1);
var G__40124 = null;
var G__40125 = (0);
var G__40126 = (0);
seq__40096 = G__40123;
chunk__40097 = G__40124;
count__40098 = G__40125;
i__40099 = G__40126;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_(children)){
return rid3.pieces.warn_if_piece_shouldnt_have_children(kind);
} else {
return null;

}
}
}));

(rid3.pieces.handle_piece_did_update.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=rid3.pieces.js.map
