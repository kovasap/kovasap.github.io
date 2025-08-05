goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__42171 = opts;
var map__42171__$1 = cljs.core.__destructure_map(map__42171);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__42173 = cljs.core.seq(pieces);
var chunk__42174 = null;
var count__42175 = (0);
var i__42176 = (0);
while(true){
if((i__42176 < count__42175)){
var piece = chunk__42174.cljs$core$IIndexed$_nth$arity$2(null,i__42176);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42189 = seq__42173;
var G__42190 = chunk__42174;
var G__42191 = count__42175;
var G__42192 = (i__42176 + (1));
seq__42173 = G__42189;
chunk__42174 = G__42190;
count__42175 = G__42191;
i__42176 = G__42192;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42173);
if(temp__5823__auto__){
var seq__42173__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42173__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42173__$1);
var G__42194 = cljs.core.chunk_rest(seq__42173__$1);
var G__42195 = c__5568__auto__;
var G__42196 = cljs.core.count(c__5568__auto__);
var G__42197 = (0);
seq__42173 = G__42194;
chunk__42174 = G__42195;
count__42175 = G__42196;
i__42176 = G__42197;
continue;
} else {
var piece = cljs.core.first(seq__42173__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42198 = cljs.core.next(seq__42173__$1);
var G__42199 = null;
var G__42200 = (0);
var G__42201 = (0);
seq__42173 = G__42198;
chunk__42174 = G__42199;
count__42175 = G__42200;
i__42176 = G__42201;
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
var seq__42179 = cljs.core.seq(pieces);
var chunk__42180 = null;
var count__42181 = (0);
var i__42182 = (0);
while(true){
if((i__42182 < count__42181)){
var piece = chunk__42180.cljs$core$IIndexed$_nth$arity$2(null,i__42182);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42203 = seq__42179;
var G__42204 = chunk__42180;
var G__42205 = count__42181;
var G__42206 = (i__42182 + (1));
seq__42179 = G__42203;
chunk__42180 = G__42204;
count__42181 = G__42205;
i__42182 = G__42206;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42179);
if(temp__5823__auto__){
var seq__42179__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42179__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42179__$1);
var G__42208 = cljs.core.chunk_rest(seq__42179__$1);
var G__42209 = c__5568__auto__;
var G__42210 = cljs.core.count(c__5568__auto__);
var G__42211 = (0);
seq__42179 = G__42208;
chunk__42180 = G__42209;
count__42181 = G__42210;
i__42182 = G__42211;
continue;
} else {
var piece = cljs.core.first(seq__42179__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__42212 = cljs.core.next(seq__42179__$1);
var G__42213 = null;
var G__42214 = (0);
var G__42215 = (0);
seq__42179 = G__42212;
chunk__42180 = G__42213;
count__42181 = G__42214;
i__42182 = G__42215;
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
