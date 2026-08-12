goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__39138_39308 = cljs.core.seq(attr_map);
var chunk__39139_39309 = null;
var count__39140_39310 = (0);
var i__39141_39311 = (0);
while(true){
if((i__39141_39311 < count__39140_39310)){
var vec__39236_39313 = chunk__39139_39309.cljs$core$IIndexed$_nth$arity$2(null,i__39141_39311);
var k_39314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39236_39313,(0),null);
var v_39315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39236_39313,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_39314),"style")){
var seq__39240_39316 = cljs.core.seq(v_39315);
var chunk__39241_39317 = null;
var count__39242_39318 = (0);
var i__39243_39319 = (0);
while(true){
if((i__39243_39319 < count__39242_39318)){
var vec__39258_39320 = chunk__39241_39317.cljs$core$IIndexed$_nth$arity$2(null,i__39243_39319);
var k_style_39321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39258_39320,(0),null);
var v_style_39322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39258_39320,(1),null);
node.style(cljs.core.name(k_style_39321),v_style_39322);


var G__39324 = seq__39240_39316;
var G__39325 = chunk__39241_39317;
var G__39326 = count__39242_39318;
var G__39327 = (i__39243_39319 + (1));
seq__39240_39316 = G__39324;
chunk__39241_39317 = G__39325;
count__39242_39318 = G__39326;
i__39243_39319 = G__39327;
continue;
} else {
var temp__5753__auto___39329 = cljs.core.seq(seq__39240_39316);
if(temp__5753__auto___39329){
var seq__39240_39330__$1 = temp__5753__auto___39329;
if(cljs.core.chunked_seq_QMARK_(seq__39240_39330__$1)){
var c__4638__auto___39331 = cljs.core.chunk_first(seq__39240_39330__$1);
var G__39333 = cljs.core.chunk_rest(seq__39240_39330__$1);
var G__39334 = c__4638__auto___39331;
var G__39335 = cljs.core.count(c__4638__auto___39331);
var G__39336 = (0);
seq__39240_39316 = G__39333;
chunk__39241_39317 = G__39334;
count__39242_39318 = G__39335;
i__39243_39319 = G__39336;
continue;
} else {
var vec__39263_39337 = cljs.core.first(seq__39240_39330__$1);
var k_style_39338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39263_39337,(0),null);
var v_style_39339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39263_39337,(1),null);
node.style(cljs.core.name(k_style_39338),v_style_39339);


var G__39341 = cljs.core.next(seq__39240_39330__$1);
var G__39342 = null;
var G__39343 = (0);
var G__39344 = (0);
seq__39240_39316 = G__39341;
chunk__39241_39317 = G__39342;
count__39242_39318 = G__39343;
i__39243_39319 = G__39344;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_39314),v_39315);
}


var G__39345 = seq__39138_39308;
var G__39346 = chunk__39139_39309;
var G__39347 = count__39140_39310;
var G__39348 = (i__39141_39311 + (1));
seq__39138_39308 = G__39345;
chunk__39139_39309 = G__39346;
count__39140_39310 = G__39347;
i__39141_39311 = G__39348;
continue;
} else {
var temp__5753__auto___39349 = cljs.core.seq(seq__39138_39308);
if(temp__5753__auto___39349){
var seq__39138_39350__$1 = temp__5753__auto___39349;
if(cljs.core.chunked_seq_QMARK_(seq__39138_39350__$1)){
var c__4638__auto___39351 = cljs.core.chunk_first(seq__39138_39350__$1);
var G__39353 = cljs.core.chunk_rest(seq__39138_39350__$1);
var G__39354 = c__4638__auto___39351;
var G__39355 = cljs.core.count(c__4638__auto___39351);
var G__39356 = (0);
seq__39138_39308 = G__39353;
chunk__39139_39309 = G__39354;
count__39140_39310 = G__39355;
i__39141_39311 = G__39356;
continue;
} else {
var vec__39275_39357 = cljs.core.first(seq__39138_39350__$1);
var k_39358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39275_39357,(0),null);
var v_39359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39275_39357,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_39358),"style")){
var seq__39279_39360 = cljs.core.seq(v_39359);
var chunk__39280_39361 = null;
var count__39281_39362 = (0);
var i__39282_39363 = (0);
while(true){
if((i__39282_39363 < count__39281_39362)){
var vec__39295_39365 = chunk__39280_39361.cljs$core$IIndexed$_nth$arity$2(null,i__39282_39363);
var k_style_39366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39295_39365,(0),null);
var v_style_39367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39295_39365,(1),null);
node.style(cljs.core.name(k_style_39366),v_style_39367);


var G__39369 = seq__39279_39360;
var G__39370 = chunk__39280_39361;
var G__39371 = count__39281_39362;
var G__39372 = (i__39282_39363 + (1));
seq__39279_39360 = G__39369;
chunk__39280_39361 = G__39370;
count__39281_39362 = G__39371;
i__39282_39363 = G__39372;
continue;
} else {
var temp__5753__auto___39373__$1 = cljs.core.seq(seq__39279_39360);
if(temp__5753__auto___39373__$1){
var seq__39279_39375__$1 = temp__5753__auto___39373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39279_39375__$1)){
var c__4638__auto___39376 = cljs.core.chunk_first(seq__39279_39375__$1);
var G__39377 = cljs.core.chunk_rest(seq__39279_39375__$1);
var G__39378 = c__4638__auto___39376;
var G__39379 = cljs.core.count(c__4638__auto___39376);
var G__39380 = (0);
seq__39279_39360 = G__39377;
chunk__39280_39361 = G__39378;
count__39281_39362 = G__39379;
i__39282_39363 = G__39380;
continue;
} else {
var vec__39301_39381 = cljs.core.first(seq__39279_39375__$1);
var k_style_39382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39301_39381,(0),null);
var v_style_39383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39301_39381,(1),null);
node.style(cljs.core.name(k_style_39382),v_style_39383);


var G__39411 = cljs.core.next(seq__39279_39375__$1);
var G__39412 = null;
var G__39413 = (0);
var G__39414 = (0);
seq__39279_39360 = G__39411;
chunk__39280_39361 = G__39412;
count__39281_39362 = G__39413;
i__39282_39363 = G__39414;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_39358),v_39359);
}


var G__39415 = cljs.core.next(seq__39138_39350__$1);
var G__39416 = null;
var G__39417 = (0);
var G__39418 = (0);
seq__39138_39308 = G__39415;
chunk__39139_39309 = G__39416;
count__39140_39310 = G__39417;
i__39141_39311 = G__39418;
continue;
}
} else {
}
}
break;
}

return node;
});

//# sourceMappingURL=rid3.attrs.js.map
