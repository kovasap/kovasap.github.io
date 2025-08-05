// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.common');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('quil.core');
sketches.common.palettes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"purple-haze","purple-haze",122440217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10),(20)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(82),(15),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(53),(126)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(120),(120)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(10),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null)], null);
sketches.common.draw_circles = (function sketches$common$draw_circles(circle_particles){
var seq__10073 = cljs.core.seq.call(null,circle_particles);
var chunk__10074 = null;
var count__10075 = (0);
var i__10076 = (0);
while(true){
if((i__10076 < count__10075)){
var p = cljs.core._nth.call(null,chunk__10074,i__10076);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__10077 = seq__10073;
var G__10078 = chunk__10074;
var G__10079 = count__10075;
var G__10080 = (i__10076 + (1));
seq__10073 = G__10077;
chunk__10074 = G__10078;
count__10075 = G__10079;
i__10076 = G__10080;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10073);
if(temp__5720__auto__){
var seq__10073__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10073__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10073__$1);
var G__10081 = cljs.core.chunk_rest.call(null,seq__10073__$1);
var G__10082 = c__4351__auto__;
var G__10083 = cljs.core.count.call(null,c__4351__auto__);
var G__10084 = (0);
seq__10073 = G__10081;
chunk__10074 = G__10082;
count__10075 = G__10083;
i__10076 = G__10084;
continue;
} else {
var p = cljs.core.first.call(null,seq__10073__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__10085 = cljs.core.next.call(null,seq__10073__$1);
var G__10086 = null;
var G__10087 = (0);
var G__10088 = (0);
seq__10073 = G__10085;
chunk__10074 = G__10086;
count__10075 = G__10087;
i__10076 = G__10088;
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
