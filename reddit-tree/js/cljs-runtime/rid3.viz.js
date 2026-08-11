goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__10278 = opts;
var map__10278__$1 = cljs.core.__destructure_map(map__10278);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10278__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10278__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__10279 = cljs.core.seq(pieces);
var chunk__10280 = null;
var count__10281 = (0);
var i__10282 = (0);
while(true){
if((i__10282 < count__10281)){
var piece = chunk__10280.cljs$core$IIndexed$_nth$arity$2(null,i__10282);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__10334 = seq__10279;
var G__10335 = chunk__10280;
var G__10336 = count__10281;
var G__10337 = (i__10282 + (1));
seq__10279 = G__10334;
chunk__10280 = G__10335;
count__10281 = G__10336;
i__10282 = G__10337;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10279);
if(temp__5753__auto__){
var seq__10279__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10279__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10279__$1);
var G__10343 = cljs.core.chunk_rest(seq__10279__$1);
var G__10344 = c__4638__auto__;
var G__10345 = cljs.core.count(c__4638__auto__);
var G__10346 = (0);
seq__10279 = G__10343;
chunk__10280 = G__10344;
count__10281 = G__10345;
i__10282 = G__10346;
continue;
} else {
var piece = cljs.core.first(seq__10279__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__10348 = cljs.core.next(seq__10279__$1);
var G__10349 = null;
var G__10350 = (0);
var G__10351 = (0);
seq__10279 = G__10348;
chunk__10280 = G__10349;
count__10281 = G__10350;
i__10282 = G__10351;
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
var seq__10283 = cljs.core.seq(pieces);
var chunk__10284 = null;
var count__10285 = (0);
var i__10286 = (0);
while(true){
if((i__10286 < count__10285)){
var piece = chunk__10284.cljs$core$IIndexed$_nth$arity$2(null,i__10286);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__10355 = seq__10283;
var G__10356 = chunk__10284;
var G__10357 = count__10285;
var G__10358 = (i__10286 + (1));
seq__10283 = G__10355;
chunk__10284 = G__10356;
count__10285 = G__10357;
i__10286 = G__10358;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10283);
if(temp__5753__auto__){
var seq__10283__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10283__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10283__$1);
var G__10360 = cljs.core.chunk_rest(seq__10283__$1);
var G__10361 = c__4638__auto__;
var G__10362 = cljs.core.count(c__4638__auto__);
var G__10363 = (0);
seq__10283 = G__10360;
chunk__10284 = G__10361;
count__10285 = G__10362;
i__10286 = G__10363;
continue;
} else {
var piece = cljs.core.first(seq__10283__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__10364 = cljs.core.next(seq__10283__$1);
var G__10365 = null;
var G__10366 = (0);
var G__10367 = (0);
seq__10283 = G__10364;
chunk__10284 = G__10365;
count__10285 = G__10366;
i__10286 = G__10367;
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
