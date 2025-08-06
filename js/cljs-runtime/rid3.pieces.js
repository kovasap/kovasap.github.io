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
var G__29866 = arguments.length;
switch (G__29866) {
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
var map__29867 = piece;
var map__29867__$1 = cljs.core.__destructure_map(map__29867);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29867__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29867__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var seq__29869 = cljs.core.seq(children);
var chunk__29870 = null;
var count__29871 = (0);
var i__29872 = (0);
while(true){
if((i__29872 < count__29871)){
var child = chunk__29870.cljs$core$IIndexed$_nth$arity$2(null,i__29872);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__29888 = seq__29869;
var G__29889 = chunk__29870;
var G__29890 = count__29871;
var G__29891 = (i__29872 + (1));
seq__29869 = G__29888;
chunk__29870 = G__29889;
count__29871 = G__29890;
i__29872 = G__29891;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29869);
if(temp__5804__auto__){
var seq__29869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29869__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29869__$1);
var G__29892 = cljs.core.chunk_rest(seq__29869__$1);
var G__29893 = c__5568__auto__;
var G__29894 = cljs.core.count(c__5568__auto__);
var G__29895 = (0);
seq__29869 = G__29892;
chunk__29870 = G__29893;
count__29871 = G__29894;
i__29872 = G__29895;
continue;
} else {
var child = cljs.core.first(seq__29869__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__29896 = cljs.core.next(seq__29869__$1);
var G__29897 = null;
var G__29898 = (0);
var G__29899 = (0);
seq__29869 = G__29896;
chunk__29870 = G__29897;
count__29871 = G__29898;
i__29872 = G__29899;
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
var G__29877 = arguments.length;
switch (G__29877) {
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
var map__29878 = opts;
var map__29878__$1 = cljs.core.__destructure_map(map__29878);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29878__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29878__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29879 = piece;
var map__29879__$1 = cljs.core.__destructure_map(map__29879);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__29881 = cljs.core.seq(children);
var chunk__29882 = null;
var count__29883 = (0);
var i__29884 = (0);
while(true){
if((i__29884 < count__29883)){
var child = chunk__29882.cljs$core$IIndexed$_nth$arity$2(null,i__29884);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__29902 = seq__29881;
var G__29903 = chunk__29882;
var G__29904 = count__29883;
var G__29905 = (i__29884 + (1));
seq__29881 = G__29902;
chunk__29882 = G__29903;
count__29883 = G__29904;
i__29884 = G__29905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29881);
if(temp__5804__auto__){
var seq__29881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29881__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29881__$1);
var G__29906 = cljs.core.chunk_rest(seq__29881__$1);
var G__29907 = c__5568__auto__;
var G__29908 = cljs.core.count(c__5568__auto__);
var G__29909 = (0);
seq__29881 = G__29906;
chunk__29882 = G__29907;
count__29883 = G__29908;
i__29884 = G__29909;
continue;
} else {
var child = cljs.core.first(seq__29881__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__29910 = cljs.core.next(seq__29881__$1);
var G__29911 = null;
var G__29912 = (0);
var G__29913 = (0);
seq__29881 = G__29910;
chunk__29882 = G__29911;
count__29883 = G__29912;
i__29884 = G__29913;
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
