goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__27433_27544 = cljs.core.seq(attr_map);
var chunk__27434_27545 = null;
var count__27435_27546 = (0);
var i__27436_27547 = (0);
while(true){
if((i__27436_27547 < count__27435_27546)){
var vec__27503_27549 = chunk__27434_27545.cljs$core$IIndexed$_nth$arity$2(null,i__27436_27547);
var k_27550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503_27549,(0),null);
var v_27551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503_27549,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_27550),"style")){
var seq__27506_27552 = cljs.core.seq(v_27551);
var chunk__27507_27553 = null;
var count__27508_27554 = (0);
var i__27509_27555 = (0);
while(true){
if((i__27509_27555 < count__27508_27554)){
var vec__27519_27556 = chunk__27507_27553.cljs$core$IIndexed$_nth$arity$2(null,i__27509_27555);
var k_style_27557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27519_27556,(0),null);
var v_style_27558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27519_27556,(1),null);
node.style(cljs.core.name(k_style_27557),v_style_27558);


var G__27559 = seq__27506_27552;
var G__27560 = chunk__27507_27553;
var G__27561 = count__27508_27554;
var G__27562 = (i__27509_27555 + (1));
seq__27506_27552 = G__27559;
chunk__27507_27553 = G__27560;
count__27508_27554 = G__27561;
i__27509_27555 = G__27562;
continue;
} else {
var temp__5804__auto___27563 = cljs.core.seq(seq__27506_27552);
if(temp__5804__auto___27563){
var seq__27506_27564__$1 = temp__5804__auto___27563;
if(cljs.core.chunked_seq_QMARK_(seq__27506_27564__$1)){
var c__5568__auto___27565 = cljs.core.chunk_first(seq__27506_27564__$1);
var G__27566 = cljs.core.chunk_rest(seq__27506_27564__$1);
var G__27567 = c__5568__auto___27565;
var G__27568 = cljs.core.count(c__5568__auto___27565);
var G__27569 = (0);
seq__27506_27552 = G__27566;
chunk__27507_27553 = G__27567;
count__27508_27554 = G__27568;
i__27509_27555 = G__27569;
continue;
} else {
var vec__27522_27570 = cljs.core.first(seq__27506_27564__$1);
var k_style_27571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27522_27570,(0),null);
var v_style_27572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27522_27570,(1),null);
node.style(cljs.core.name(k_style_27571),v_style_27572);


var G__27573 = cljs.core.next(seq__27506_27564__$1);
var G__27574 = null;
var G__27575 = (0);
var G__27576 = (0);
seq__27506_27552 = G__27573;
chunk__27507_27553 = G__27574;
count__27508_27554 = G__27575;
i__27509_27555 = G__27576;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_27550),v_27551);
}


var G__27577 = seq__27433_27544;
var G__27578 = chunk__27434_27545;
var G__27579 = count__27435_27546;
var G__27580 = (i__27436_27547 + (1));
seq__27433_27544 = G__27577;
chunk__27434_27545 = G__27578;
count__27435_27546 = G__27579;
i__27436_27547 = G__27580;
continue;
} else {
var temp__5804__auto___27582 = cljs.core.seq(seq__27433_27544);
if(temp__5804__auto___27582){
var seq__27433_27583__$1 = temp__5804__auto___27582;
if(cljs.core.chunked_seq_QMARK_(seq__27433_27583__$1)){
var c__5568__auto___27584 = cljs.core.chunk_first(seq__27433_27583__$1);
var G__27585 = cljs.core.chunk_rest(seq__27433_27583__$1);
var G__27586 = c__5568__auto___27584;
var G__27587 = cljs.core.count(c__5568__auto___27584);
var G__27588 = (0);
seq__27433_27544 = G__27585;
chunk__27434_27545 = G__27586;
count__27435_27546 = G__27587;
i__27436_27547 = G__27588;
continue;
} else {
var vec__27525_27589 = cljs.core.first(seq__27433_27583__$1);
var k_27590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27525_27589,(0),null);
var v_27591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27525_27589,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_27590),"style")){
var seq__27528_27592 = cljs.core.seq(v_27591);
var chunk__27529_27593 = null;
var count__27530_27594 = (0);
var i__27531_27595 = (0);
while(true){
if((i__27531_27595 < count__27530_27594)){
var vec__27538_27596 = chunk__27529_27593.cljs$core$IIndexed$_nth$arity$2(null,i__27531_27595);
var k_style_27597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27538_27596,(0),null);
var v_style_27598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27538_27596,(1),null);
node.style(cljs.core.name(k_style_27597),v_style_27598);


var G__27600 = seq__27528_27592;
var G__27601 = chunk__27529_27593;
var G__27602 = count__27530_27594;
var G__27603 = (i__27531_27595 + (1));
seq__27528_27592 = G__27600;
chunk__27529_27593 = G__27601;
count__27530_27594 = G__27602;
i__27531_27595 = G__27603;
continue;
} else {
var temp__5804__auto___27604__$1 = cljs.core.seq(seq__27528_27592);
if(temp__5804__auto___27604__$1){
var seq__27528_27605__$1 = temp__5804__auto___27604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27528_27605__$1)){
var c__5568__auto___27606 = cljs.core.chunk_first(seq__27528_27605__$1);
var G__27607 = cljs.core.chunk_rest(seq__27528_27605__$1);
var G__27608 = c__5568__auto___27606;
var G__27609 = cljs.core.count(c__5568__auto___27606);
var G__27610 = (0);
seq__27528_27592 = G__27607;
chunk__27529_27593 = G__27608;
count__27530_27594 = G__27609;
i__27531_27595 = G__27610;
continue;
} else {
var vec__27541_27611 = cljs.core.first(seq__27528_27605__$1);
var k_style_27612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27541_27611,(0),null);
var v_style_27613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27541_27611,(1),null);
node.style(cljs.core.name(k_style_27612),v_style_27613);


var G__27615 = cljs.core.next(seq__27528_27605__$1);
var G__27616 = null;
var G__27617 = (0);
var G__27618 = (0);
seq__27528_27592 = G__27615;
chunk__27529_27593 = G__27616;
count__27530_27594 = G__27617;
i__27531_27595 = G__27618;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_27590),v_27591);
}


var G__27619 = cljs.core.next(seq__27433_27583__$1);
var G__27620 = null;
var G__27621 = (0);
var G__27622 = (0);
seq__27433_27544 = G__27619;
chunk__27434_27545 = G__27620;
count__27435_27546 = G__27621;
i__27436_27547 = G__27622;
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
