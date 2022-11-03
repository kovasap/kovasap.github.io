goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__42253 = opts;
var map__42253__$1 = cljs.core.__destructure_map(map__42253);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42253__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42253__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42253__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__42255 = cljs.core.seq(pieces);
var chunk__42256 = null;
var count__42257 = (0);
var i__42258 = (0);
while(true){
if((i__42258 < count__42257)){
var piece = chunk__42256.cljs$core$IIndexed$_nth$arity$2(null,i__42258);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42270 = seq__42255;
var G__42271 = chunk__42256;
var G__42272 = count__42257;
var G__42273 = (i__42258 + (1));
seq__42255 = G__42270;
chunk__42256 = G__42271;
count__42257 = G__42272;
i__42258 = G__42273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42255);
if(temp__5804__auto__){
var seq__42255__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42255__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42255__$1);
var G__42274 = cljs.core.chunk_rest(seq__42255__$1);
var G__42275 = c__5568__auto__;
var G__42276 = cljs.core.count(c__5568__auto__);
var G__42277 = (0);
seq__42255 = G__42274;
chunk__42256 = G__42275;
count__42257 = G__42276;
i__42258 = G__42277;
continue;
} else {
var piece = cljs.core.first(seq__42255__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42278 = cljs.core.next(seq__42255__$1);
var G__42279 = null;
var G__42280 = (0);
var G__42281 = (0);
seq__42255 = G__42278;
chunk__42256 = G__42279;
count__42257 = G__42280;
i__42258 = G__42281;
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
var seq__42262 = cljs.core.seq(pieces);
var chunk__42263 = null;
var count__42264 = (0);
var i__42265 = (0);
while(true){
if((i__42265 < count__42264)){
var piece = chunk__42263.cljs$core$IIndexed$_nth$arity$2(null,i__42265);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42282 = seq__42262;
var G__42283 = chunk__42263;
var G__42284 = count__42264;
var G__42285 = (i__42265 + (1));
seq__42262 = G__42282;
chunk__42263 = G__42283;
count__42264 = G__42284;
i__42265 = G__42285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42262);
if(temp__5804__auto__){
var seq__42262__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42262__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42262__$1);
var G__42286 = cljs.core.chunk_rest(seq__42262__$1);
var G__42287 = c__5568__auto__;
var G__42288 = cljs.core.count(c__5568__auto__);
var G__42289 = (0);
seq__42262 = G__42286;
chunk__42263 = G__42287;
count__42264 = G__42288;
i__42265 = G__42289;
continue;
} else {
var piece = cljs.core.first(seq__42262__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42294 = cljs.core.next(seq__42262__$1);
var G__42295 = null;
var G__42296 = (0);
var G__42297 = (0);
seq__42262 = G__42294;
chunk__42263 = G__42295;
count__42264 = G__42296;
i__42265 = G__42297;
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
