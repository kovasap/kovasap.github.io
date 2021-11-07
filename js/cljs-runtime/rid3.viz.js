goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__38291 = opts;
var map__38291__$1 = cljs.core.__destructure_map(map__38291);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__38293 = cljs.core.seq(pieces);
var chunk__38294 = null;
var count__38295 = (0);
var i__38296 = (0);
while(true){
if((i__38296 < count__38295)){
var piece = chunk__38294.cljs$core$IIndexed$_nth$arity$2(null,i__38296);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__38319 = seq__38293;
var G__38320 = chunk__38294;
var G__38321 = count__38295;
var G__38322 = (i__38296 + (1));
seq__38293 = G__38319;
chunk__38294 = G__38320;
count__38295 = G__38321;
i__38296 = G__38322;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38293);
if(temp__5753__auto__){
var seq__38293__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38293__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38293__$1);
var G__38325 = cljs.core.chunk_rest(seq__38293__$1);
var G__38326 = c__4638__auto__;
var G__38327 = cljs.core.count(c__4638__auto__);
var G__38328 = (0);
seq__38293 = G__38325;
chunk__38294 = G__38326;
count__38295 = G__38327;
i__38296 = G__38328;
continue;
} else {
var piece = cljs.core.first(seq__38293__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__38332 = cljs.core.next(seq__38293__$1);
var G__38333 = null;
var G__38334 = (0);
var G__38335 = (0);
seq__38293 = G__38332;
chunk__38294 = G__38333;
count__38295 = G__38334;
i__38296 = G__38335;
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
var seq__38302 = cljs.core.seq(pieces);
var chunk__38303 = null;
var count__38304 = (0);
var i__38305 = (0);
while(true){
if((i__38305 < count__38304)){
var piece = chunk__38303.cljs$core$IIndexed$_nth$arity$2(null,i__38305);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__38337 = seq__38302;
var G__38338 = chunk__38303;
var G__38339 = count__38304;
var G__38340 = (i__38305 + (1));
seq__38302 = G__38337;
chunk__38303 = G__38338;
count__38304 = G__38339;
i__38305 = G__38340;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38302);
if(temp__5753__auto__){
var seq__38302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38302__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38302__$1);
var G__38342 = cljs.core.chunk_rest(seq__38302__$1);
var G__38343 = c__4638__auto__;
var G__38344 = cljs.core.count(c__4638__auto__);
var G__38345 = (0);
seq__38302 = G__38342;
chunk__38303 = G__38343;
count__38304 = G__38344;
i__38305 = G__38345;
continue;
} else {
var piece = cljs.core.first(seq__38302__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__38346 = cljs.core.next(seq__38302__$1);
var G__38347 = null;
var G__38348 = (0);
var G__38349 = (0);
seq__38302 = G__38346;
chunk__38303 = G__38347;
count__38304 = G__38348;
i__38305 = G__38349;
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
