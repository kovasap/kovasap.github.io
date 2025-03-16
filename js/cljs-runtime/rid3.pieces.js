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
var G__42018 = arguments.length;
switch (G__42018) {
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
var map__42022 = piece;
var map__42022__$1 = cljs.core.__destructure_map(map__42022);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42022__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42022__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42022__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
if(cljs.core.truth_((function (){var and__5043__auto__ = children;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707));
} else {
return and__5043__auto__;
}
})())){
var seq__42035 = cljs.core.seq(children);
var chunk__42036 = null;
var count__42037 = (0);
var i__42038 = (0);
while(true){
if((i__42038 < count__42037)){
var child = chunk__42036.cljs$core$IIndexed$_nth$arity$2(null,i__42038);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42104 = seq__42035;
var G__42105 = chunk__42036;
var G__42106 = count__42037;
var G__42107 = (i__42038 + (1));
seq__42035 = G__42104;
chunk__42036 = G__42105;
count__42037 = G__42106;
i__42038 = G__42107;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42035);
if(temp__5823__auto__){
var seq__42035__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42035__$1);
var G__42108 = cljs.core.chunk_rest(seq__42035__$1);
var G__42109 = c__5568__auto__;
var G__42110 = cljs.core.count(c__5568__auto__);
var G__42111 = (0);
seq__42035 = G__42108;
chunk__42036 = G__42109;
count__42037 = G__42110;
i__42038 = G__42111;
continue;
} else {
var child = cljs.core.first(seq__42035__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42112 = cljs.core.next(seq__42035__$1);
var G__42113 = null;
var G__42114 = (0);
var G__42115 = (0);
seq__42035 = G__42112;
chunk__42036 = G__42113;
count__42037 = G__42114;
i__42038 = G__42115;
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
var G__42053 = arguments.length;
switch (G__42053) {
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
var map__42054 = opts;
var map__42054__$1 = cljs.core.__destructure_map(map__42054);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42054__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42054__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42056 = piece;
var map__42056__$1 = cljs.core.__destructure_map(map__42056);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42056__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42056__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
if(cljs.core.truth_((function (){var and__5043__auto__ = children;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"container","container",-1736937707));
} else {
return and__5043__auto__;
}
})())){
var seq__42062 = cljs.core.seq(children);
var chunk__42063 = null;
var count__42064 = (0);
var i__42065 = (0);
while(true){
if((i__42065 < count__42064)){
var child = chunk__42063.cljs$core$IIndexed$_nth$arity$2(null,i__42065);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42120 = seq__42062;
var G__42121 = chunk__42063;
var G__42122 = count__42064;
var G__42123 = (i__42065 + (1));
seq__42062 = G__42120;
chunk__42063 = G__42121;
count__42064 = G__42122;
i__42065 = G__42123;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42062);
if(temp__5823__auto__){
var seq__42062__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42062__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42062__$1);
var G__42125 = cljs.core.chunk_rest(seq__42062__$1);
var G__42126 = c__5568__auto__;
var G__42127 = cljs.core.count(c__5568__auto__);
var G__42128 = (0);
seq__42062 = G__42125;
chunk__42063 = G__42126;
count__42064 = G__42127;
i__42065 = G__42128;
continue;
} else {
var child = cljs.core.first(seq__42062__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42129 = cljs.core.next(seq__42062__$1);
var G__42130 = null;
var G__42131 = (0);
var G__42132 = (0);
seq__42062 = G__42129;
chunk__42063 = G__42130;
count__42064 = G__42131;
i__42065 = G__42132;
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
