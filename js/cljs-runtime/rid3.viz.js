goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__29924 = opts;
var map__29924__$1 = cljs.core.__destructure_map(map__29924);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _trigger_update = cljs.core.deref(ratom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null);
});
rid3.viz.component_did_mount = (function rid3$viz$component_did_mount(opts){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010)))){
console.warn("[rid3] using :prepare-dataset at the top-level has been deprecated. Please move :prepare-dataset inside of your :elem-with-data pieces.");
} else {
}

rid3.svg.svg_did_mount(opts);

rid3.main_container.main_container_did_mount(opts);

var pieces = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.PersistentVector.EMPTY);
var seq__29925 = cljs.core.seq(pieces);
var chunk__29926 = null;
var count__29927 = (0);
var i__29928 = (0);
while(true){
if((i__29928 < count__29927)){
var piece = chunk__29926.cljs$core$IIndexed$_nth$arity$2(null,i__29928);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__29939 = seq__29925;
var G__29940 = chunk__29926;
var G__29941 = count__29927;
var G__29942 = (i__29928 + (1));
seq__29925 = G__29939;
chunk__29926 = G__29940;
count__29927 = G__29941;
i__29928 = G__29942;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29925);
if(temp__5804__auto__){
var seq__29925__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29925__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29925__$1);
var G__29943 = cljs.core.chunk_rest(seq__29925__$1);
var G__29944 = c__5568__auto__;
var G__29945 = cljs.core.count(c__5568__auto__);
var G__29946 = (0);
seq__29925 = G__29943;
chunk__29926 = G__29944;
count__29927 = G__29945;
i__29928 = G__29946;
continue;
} else {
var piece = cljs.core.first(seq__29925__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__29947 = cljs.core.next(seq__29925__$1);
var G__29948 = null;
var G__29949 = (0);
var G__29950 = (0);
seq__29925 = G__29947;
chunk__29926 = G__29948;
count__29927 = G__29949;
i__29928 = G__29950;
continue;
}
} else {
return null;
}
}
break;
}
});
rid3.viz.component_did_update = (function rid3$viz$component_did_update(opts){
rid3.svg.svg_did_update(opts);

rid3.main_container.main_container_did_update(opts);

var pieces = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.PersistentVector.EMPTY);
var seq__29932 = cljs.core.seq(pieces);
var chunk__29933 = null;
var count__29934 = (0);
var i__29935 = (0);
while(true){
if((i__29935 < count__29934)){
var piece = chunk__29933.cljs$core$IIndexed$_nth$arity$2(null,i__29935);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__29952 = seq__29932;
var G__29953 = chunk__29933;
var G__29954 = count__29934;
var G__29955 = (i__29935 + (1));
seq__29932 = G__29952;
chunk__29933 = G__29953;
count__29934 = G__29954;
i__29935 = G__29955;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29932);
if(temp__5804__auto__){
var seq__29932__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29932__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29932__$1);
var G__29956 = cljs.core.chunk_rest(seq__29932__$1);
var G__29957 = c__5568__auto__;
var G__29958 = cljs.core.count(c__5568__auto__);
var G__29959 = (0);
seq__29932 = G__29956;
chunk__29933 = G__29957;
count__29934 = G__29958;
i__29935 = G__29959;
continue;
} else {
var piece = cljs.core.first(seq__29932__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__29960 = cljs.core.next(seq__29932__$1);
var G__29961 = null;
var G__29962 = (0);
var G__29963 = (0);
seq__29932 = G__29960;
chunk__29933 = G__29961;
count__29934 = G__29962;
i__29935 = G__29963;
continue;
}
} else {
return null;
}
}
break;
}
});
rid3.viz.component = (function rid3$viz$component(opts){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return rid3.viz.component_render(opts);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return rid3.viz.component_did_mount(opts);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return rid3.viz.component_did_update(opts);
})], null));
});

//# sourceMappingURL=rid3.viz.js.map
