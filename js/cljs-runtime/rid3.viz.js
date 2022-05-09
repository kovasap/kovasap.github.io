goog.provide('rid3.viz');
rid3.viz.component_render = (function rid3$viz$component_render(opts){
var map__44006 = opts;
var map__44006__$1 = cljs.core.__destructure_map(map__44006);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44006__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44006__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var seq__44018 = cljs.core.seq(pieces);
var chunk__44019 = null;
var count__44020 = (0);
var i__44021 = (0);
while(true){
if((i__44021 < count__44020)){
var piece = chunk__44019.cljs$core$IIndexed$_nth$arity$2(null,i__44021);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__44069 = seq__44018;
var G__44070 = chunk__44019;
var G__44071 = count__44020;
var G__44072 = (i__44021 + (1));
seq__44018 = G__44069;
chunk__44019 = G__44070;
count__44020 = G__44071;
i__44021 = G__44072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44018);
if(temp__5753__auto__){
var seq__44018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44018__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44018__$1);
var G__44075 = cljs.core.chunk_rest(seq__44018__$1);
var G__44076 = c__4679__auto__;
var G__44077 = cljs.core.count(c__4679__auto__);
var G__44078 = (0);
seq__44018 = G__44075;
chunk__44019 = G__44076;
count__44020 = G__44077;
i__44021 = G__44078;
continue;
} else {
var piece = cljs.core.first(seq__44018__$1);
rid3.pieces.handle_piece_did_mount.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__44082 = cljs.core.next(seq__44018__$1);
var G__44083 = null;
var G__44084 = (0);
var G__44085 = (0);
seq__44018 = G__44082;
chunk__44019 = G__44083;
count__44020 = G__44084;
i__44021 = G__44085;
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
var seq__44040 = cljs.core.seq(pieces);
var chunk__44041 = null;
var count__44042 = (0);
var i__44043 = (0);
while(true){
if((i__44043 < count__44042)){
var piece = chunk__44041.cljs$core$IIndexed$_nth$arity$2(null,i__44043);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__44088 = seq__44040;
var G__44089 = chunk__44041;
var G__44090 = count__44042;
var G__44091 = (i__44043 + (1));
seq__44040 = G__44088;
chunk__44041 = G__44089;
count__44042 = G__44090;
i__44043 = G__44091;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44040);
if(temp__5753__auto__){
var seq__44040__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44040__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44040__$1);
var G__44092 = cljs.core.chunk_rest(seq__44040__$1);
var G__44093 = c__4679__auto__;
var G__44094 = cljs.core.count(c__4679__auto__);
var G__44095 = (0);
seq__44040 = G__44092;
chunk__44041 = G__44093;
count__44042 = G__44094;
i__44043 = G__44095;
continue;
} else {
var piece = cljs.core.first(seq__44040__$1);
rid3.pieces.handle_piece_did_update.cljs$core$IFn$_invoke$arity$2(piece,opts);


var G__44096 = cljs.core.next(seq__44040__$1);
var G__44097 = null;
var G__44098 = (0);
var G__44099 = (0);
seq__44040 = G__44096;
chunk__44041 = G__44097;
count__44042 = G__44098;
i__44043 = G__44099;
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
