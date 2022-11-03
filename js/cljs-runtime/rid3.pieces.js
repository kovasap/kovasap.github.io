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
var G__42185 = arguments.length;
switch (G__42185) {
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
var map__42186 = piece;
var map__42186__$1 = cljs.core.__destructure_map(map__42186);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42186__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42186__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42186__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var seq__42187 = cljs.core.seq(children);
var chunk__42188 = null;
var count__42189 = (0);
var i__42190 = (0);
while(true){
if((i__42190 < count__42189)){
var child = chunk__42188.cljs$core$IIndexed$_nth$arity$2(null,i__42190);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42204 = seq__42187;
var G__42205 = chunk__42188;
var G__42206 = count__42189;
var G__42207 = (i__42190 + (1));
seq__42187 = G__42204;
chunk__42188 = G__42205;
count__42189 = G__42206;
i__42190 = G__42207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42187);
if(temp__5804__auto__){
var seq__42187__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42187__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42187__$1);
var G__42208 = cljs.core.chunk_rest(seq__42187__$1);
var G__42209 = c__5568__auto__;
var G__42210 = cljs.core.count(c__5568__auto__);
var G__42211 = (0);
seq__42187 = G__42208;
chunk__42188 = G__42209;
count__42189 = G__42210;
i__42190 = G__42211;
continue;
} else {
var child = cljs.core.first(seq__42187__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42212 = cljs.core.next(seq__42187__$1);
var G__42213 = null;
var G__42214 = (0);
var G__42215 = (0);
seq__42187 = G__42212;
chunk__42188 = G__42213;
count__42189 = G__42214;
i__42190 = G__42215;
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
var G__42192 = arguments.length;
switch (G__42192) {
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
var map__42193 = opts;
var map__42193__$1 = cljs.core.__destructure_map(map__42193);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42194 = piece;
var map__42194__$1 = cljs.core.__destructure_map(map__42194);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42194__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42194__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__42195 = cljs.core.seq(children);
var chunk__42196 = null;
var count__42197 = (0);
var i__42198 = (0);
while(true){
if((i__42198 < count__42197)){
var child = chunk__42196.cljs$core$IIndexed$_nth$arity$2(null,i__42198);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42217 = seq__42195;
var G__42218 = chunk__42196;
var G__42219 = count__42197;
var G__42220 = (i__42198 + (1));
seq__42195 = G__42217;
chunk__42196 = G__42218;
count__42197 = G__42219;
i__42198 = G__42220;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42195);
if(temp__5804__auto__){
var seq__42195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42195__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42195__$1);
var G__42221 = cljs.core.chunk_rest(seq__42195__$1);
var G__42222 = c__5568__auto__;
var G__42223 = cljs.core.count(c__5568__auto__);
var G__42224 = (0);
seq__42195 = G__42221;
chunk__42196 = G__42222;
count__42197 = G__42223;
i__42198 = G__42224;
continue;
} else {
var child = cljs.core.first(seq__42195__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__42225 = cljs.core.next(seq__42195__$1);
var G__42226 = null;
var G__42227 = (0);
var G__42228 = (0);
seq__42195 = G__42225;
chunk__42196 = G__42226;
count__42197 = G__42227;
i__42198 = G__42228;
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
