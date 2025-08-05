// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.common');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('quil.core');
sketches.common.palettes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"purple-haze","purple-haze",122440217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10),(20)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(82),(15),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(53),(126)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(120),(120)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(10),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null)], null);
sketches.common.draw_circles = (function sketches$common$draw_circles(circle_particles){
var seq__8535 = cljs.core.seq.call(null,circle_particles);
var chunk__8536 = null;
var count__8537 = (0);
var i__8538 = (0);
while(true){
if((i__8538 < count__8537)){
var p = cljs.core._nth.call(null,chunk__8536,i__8538);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__8539 = seq__8535;
var G__8540 = chunk__8536;
var G__8541 = count__8537;
var G__8542 = (i__8538 + (1));
seq__8535 = G__8539;
chunk__8536 = G__8540;
count__8537 = G__8541;
i__8538 = G__8542;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8535);
if(temp__5720__auto__){
var seq__8535__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8535__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8535__$1);
var G__8543 = cljs.core.chunk_rest.call(null,seq__8535__$1);
var G__8544 = c__4351__auto__;
var G__8545 = cljs.core.count.call(null,c__4351__auto__);
var G__8546 = (0);
seq__8535 = G__8543;
chunk__8536 = G__8544;
count__8537 = G__8545;
i__8538 = G__8546;
continue;
} else {
var p = cljs.core.first.call(null,seq__8535__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__8547 = cljs.core.next.call(null,seq__8535__$1);
var G__8548 = null;
var G__8549 = (0);
var G__8550 = (0);
seq__8535 = G__8547;
chunk__8536 = G__8548;
count__8537 = G__8549;
i__8538 = G__8550;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=common.js.map
