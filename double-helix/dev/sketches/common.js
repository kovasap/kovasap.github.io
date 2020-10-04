// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.common');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('quil.core');
sketches.common.palettes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"purple-haze","purple-haze",122440217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10),(20)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(82),(15),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(53),(126)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(120),(120)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(10),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null)], null);
sketches.common.draw_circles = (function sketches$common$draw_circles(circle_particles){
var seq__9985 = cljs.core.seq.call(null,circle_particles);
var chunk__9986 = null;
var count__9987 = (0);
var i__9988 = (0);
while(true){
if((i__9988 < count__9987)){
var p = cljs.core._nth.call(null,chunk__9986,i__9988);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__9989 = seq__9985;
var G__9990 = chunk__9986;
var G__9991 = count__9987;
var G__9992 = (i__9988 + (1));
seq__9985 = G__9989;
chunk__9986 = G__9990;
count__9987 = G__9991;
i__9988 = G__9992;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9985);
if(temp__5720__auto__){
var seq__9985__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9985__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9985__$1);
var G__9993 = cljs.core.chunk_rest.call(null,seq__9985__$1);
var G__9994 = c__4351__auto__;
var G__9995 = cljs.core.count.call(null,c__4351__auto__);
var G__9996 = (0);
seq__9985 = G__9993;
chunk__9986 = G__9994;
count__9987 = G__9995;
i__9988 = G__9996;
continue;
} else {
var p = cljs.core.first.call(null,seq__9985__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__9997 = cljs.core.next.call(null,seq__9985__$1);
var G__9998 = null;
var G__9999 = (0);
var G__10000 = (0);
seq__9985 = G__9997;
chunk__9986 = G__9998;
count__9987 = G__9999;
i__9988 = G__10000;
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
