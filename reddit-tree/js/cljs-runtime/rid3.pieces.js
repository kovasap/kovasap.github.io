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
var G__8836 = arguments.length;
switch (G__8836) {
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
var map__8843 = piece;
var map__8843__$1 = cljs.core.__destructure_map(map__8843);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8843__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8843__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8843__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var seq__8853 = cljs.core.seq(children);
var chunk__8854 = null;
var count__8855 = (0);
var i__8856 = (0);
while(true){
if((i__8856 < count__8855)){
var child = chunk__8854.cljs$core$IIndexed$_nth$arity$2(null,i__8856);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__9013 = seq__8853;
var G__9014 = chunk__8854;
var G__9015 = count__8855;
var G__9016 = (i__8856 + (1));
seq__8853 = G__9013;
chunk__8854 = G__9014;
count__8855 = G__9015;
i__8856 = G__9016;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__8853);
if(temp__5753__auto__){
var seq__8853__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8853__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__8853__$1);
var G__9021 = cljs.core.chunk_rest(seq__8853__$1);
var G__9022 = c__4638__auto__;
var G__9023 = cljs.core.count(c__4638__auto__);
var G__9024 = (0);
seq__8853 = G__9021;
chunk__8854 = G__9022;
count__8855 = G__9023;
i__8856 = G__9024;
continue;
} else {
var child = cljs.core.first(seq__8853__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__9030 = cljs.core.next(seq__8853__$1);
var G__9031 = null;
var G__9032 = (0);
var G__9033 = (0);
seq__8853 = G__9030;
chunk__8854 = G__9031;
count__8855 = G__9032;
i__8856 = G__9033;
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
var G__8892 = arguments.length;
switch (G__8892) {
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
var map__8904 = opts;
var map__8904__$1 = cljs.core.__destructure_map(map__8904);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8904__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__8905 = piece;
var map__8905__$1 = cljs.core.__destructure_map(map__8905);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8905__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8905__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__8930 = cljs.core.seq(children);
var chunk__8931 = null;
var count__8932 = (0);
var i__8933 = (0);
while(true){
if((i__8933 < count__8932)){
var child = chunk__8931.cljs$core$IIndexed$_nth$arity$2(null,i__8933);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__9056 = seq__8930;
var G__9057 = chunk__8931;
var G__9058 = count__8932;
var G__9059 = (i__8933 + (1));
seq__8930 = G__9056;
chunk__8931 = G__9057;
count__8932 = G__9058;
i__8933 = G__9059;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__8930);
if(temp__5753__auto__){
var seq__8930__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8930__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__8930__$1);
var G__9062 = cljs.core.chunk_rest(seq__8930__$1);
var G__9063 = c__4638__auto__;
var G__9064 = cljs.core.count(c__4638__auto__);
var G__9065 = (0);
seq__8930 = G__9062;
chunk__8931 = G__9063;
count__8932 = G__9064;
i__8933 = G__9065;
continue;
} else {
var child = cljs.core.first(seq__8930__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$3(child,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_classes,class$));


var G__9068 = cljs.core.next(seq__8930__$1);
var G__9069 = null;
var G__9070 = (0);
var G__9071 = (0);
seq__8930 = G__9068;
chunk__8931 = G__9069;
count__8932 = G__9070;
i__8933 = G__9071;
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
