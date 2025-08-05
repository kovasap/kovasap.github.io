goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__40302 = opts;
var map__40302__$1 = cljs.core.__destructure_map(map__40302);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40302__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40302__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40302__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__40309 = cljs.core.seq(pieces);
var chunk__40310 = null;
var count__40311 = (0);
var i__40312 = (0);
while(true){
if((i__40312 < count__40311)){
var piece = chunk__40310.cljs$core$IIndexed$_nth$arity$2(null,i__40312);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__40351 = seq__40309;
var G__40352 = chunk__40310;
var G__40353 = count__40311;
var G__40354 = (i__40312 + (1));
seq__40309 = G__40351;
chunk__40310 = G__40352;
count__40311 = G__40353;
i__40312 = G__40354;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40309);
if(temp__5753__auto__){
var seq__40309__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40309__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40309__$1);
var G__40357 = cljs.core.chunk_rest(seq__40309__$1);
var G__40358 = c__4638__auto__;
var G__40359 = cljs.core.count(c__4638__auto__);
var G__40360 = (0);
seq__40309 = G__40357;
chunk__40310 = G__40358;
count__40311 = G__40359;
i__40312 = G__40360;
continue;
} else {
var piece = cljs.core.first(seq__40309__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__40362 = cljs.core.next(seq__40309__$1);
var G__40363 = null;
var G__40364 = (0);
var G__40365 = (0);
seq__40309 = G__40362;
chunk__40310 = G__40363;
count__40311 = G__40364;
i__40312 = G__40365;
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
var seq__40325 = cljs.core.seq(pieces);
var chunk__40326 = null;
var count__40327 = (0);
var i__40328 = (0);
while(true){
if((i__40328 < count__40327)){
var piece = chunk__40326.cljs$core$IIndexed$_nth$arity$2(null,i__40328);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__40369 = seq__40325;
var G__40370 = chunk__40326;
var G__40371 = count__40327;
var G__40372 = (i__40328 + (1));
seq__40325 = G__40369;
chunk__40326 = G__40370;
count__40327 = G__40371;
i__40328 = G__40372;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40325);
if(temp__5753__auto__){
var seq__40325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40325__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40325__$1);
var G__40375 = cljs.core.chunk_rest(seq__40325__$1);
var G__40376 = c__4638__auto__;
var G__40377 = cljs.core.count(c__4638__auto__);
var G__40378 = (0);
seq__40325 = G__40375;
chunk__40326 = G__40376;
count__40327 = G__40377;
i__40328 = G__40378;
continue;
} else {
var piece = cljs.core.first(seq__40325__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__40383 = cljs.core.next(seq__40325__$1);
var G__40384 = null;
var G__40385 = (0);
var G__40386 = (0);
seq__40325 = G__40383;
chunk__40326 = G__40384;
count__40327 = G__40385;
i__40328 = G__40386;
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
