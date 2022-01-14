goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__36516_36627 = cljs.core.seq(attr_map);
var chunk__36517_36628 = null;
var count__36518_36629 = (0);
var i__36519_36630 = (0);
while(true){
if((i__36519_36630 < count__36518_36629)){
var vec__36566_36631 = chunk__36517_36628.cljs$core$IIndexed$_nth$arity$2(null,i__36519_36630);
var k_36632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36566_36631,(0),null);
var v_36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36566_36631,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_36632),"style")){
var seq__36570_36634 = cljs.core.seq(v_36633);
var chunk__36571_36635 = null;
var count__36572_36636 = (0);
var i__36573_36637 = (0);
while(true){
if((i__36573_36637 < count__36572_36636)){
var vec__36581_36638 = chunk__36571_36635.cljs$core$IIndexed$_nth$arity$2(null,i__36573_36637);
var k_style_36639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36581_36638,(0),null);
var v_style_36640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36581_36638,(1),null);
node.style(cljs.core.name(k_style_36639),v_style_36640);


var G__36641 = seq__36570_36634;
var G__36642 = chunk__36571_36635;
var G__36643 = count__36572_36636;
var G__36644 = (i__36573_36637 + (1));
seq__36570_36634 = G__36641;
chunk__36571_36635 = G__36642;
count__36572_36636 = G__36643;
i__36573_36637 = G__36644;
continue;
} else {
var temp__5753__auto___36645 = cljs.core.seq(seq__36570_36634);
if(temp__5753__auto___36645){
var seq__36570_36646__$1 = temp__5753__auto___36645;
if(cljs.core.chunked_seq_QMARK_(seq__36570_36646__$1)){
var c__4638__auto___36647 = cljs.core.chunk_first(seq__36570_36646__$1);
var G__36648 = cljs.core.chunk_rest(seq__36570_36646__$1);
var G__36649 = c__4638__auto___36647;
var G__36650 = cljs.core.count(c__4638__auto___36647);
var G__36651 = (0);
seq__36570_36634 = G__36648;
chunk__36571_36635 = G__36649;
count__36572_36636 = G__36650;
i__36573_36637 = G__36651;
continue;
} else {
var vec__36585_36652 = cljs.core.first(seq__36570_36646__$1);
var k_style_36653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36585_36652,(0),null);
var v_style_36654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36585_36652,(1),null);
node.style(cljs.core.name(k_style_36653),v_style_36654);


var G__36655 = cljs.core.next(seq__36570_36646__$1);
var G__36656 = null;
var G__36657 = (0);
var G__36658 = (0);
seq__36570_36634 = G__36655;
chunk__36571_36635 = G__36656;
count__36572_36636 = G__36657;
i__36573_36637 = G__36658;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_36632),v_36633);
}


var G__36659 = seq__36516_36627;
var G__36660 = chunk__36517_36628;
var G__36661 = count__36518_36629;
var G__36662 = (i__36519_36630 + (1));
seq__36516_36627 = G__36659;
chunk__36517_36628 = G__36660;
count__36518_36629 = G__36661;
i__36519_36630 = G__36662;
continue;
} else {
var temp__5753__auto___36663 = cljs.core.seq(seq__36516_36627);
if(temp__5753__auto___36663){
var seq__36516_36664__$1 = temp__5753__auto___36663;
if(cljs.core.chunked_seq_QMARK_(seq__36516_36664__$1)){
var c__4638__auto___36665 = cljs.core.chunk_first(seq__36516_36664__$1);
var G__36666 = cljs.core.chunk_rest(seq__36516_36664__$1);
var G__36667 = c__4638__auto___36665;
var G__36668 = cljs.core.count(c__4638__auto___36665);
var G__36669 = (0);
seq__36516_36627 = G__36666;
chunk__36517_36628 = G__36667;
count__36518_36629 = G__36668;
i__36519_36630 = G__36669;
continue;
} else {
var vec__36596_36671 = cljs.core.first(seq__36516_36664__$1);
var k_36672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_36671,(0),null);
var v_36673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_36671,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_36672),"style")){
var seq__36599_36675 = cljs.core.seq(v_36673);
var chunk__36600_36676 = null;
var count__36601_36677 = (0);
var i__36602_36678 = (0);
while(true){
if((i__36602_36678 < count__36601_36677)){
var vec__36612_36679 = chunk__36600_36676.cljs$core$IIndexed$_nth$arity$2(null,i__36602_36678);
var k_style_36680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612_36679,(0),null);
var v_style_36681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612_36679,(1),null);
node.style(cljs.core.name(k_style_36680),v_style_36681);


var G__36682 = seq__36599_36675;
var G__36683 = chunk__36600_36676;
var G__36684 = count__36601_36677;
var G__36685 = (i__36602_36678 + (1));
seq__36599_36675 = G__36682;
chunk__36600_36676 = G__36683;
count__36601_36677 = G__36684;
i__36602_36678 = G__36685;
continue;
} else {
var temp__5753__auto___36686__$1 = cljs.core.seq(seq__36599_36675);
if(temp__5753__auto___36686__$1){
var seq__36599_36687__$1 = temp__5753__auto___36686__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36599_36687__$1)){
var c__4638__auto___36688 = cljs.core.chunk_first(seq__36599_36687__$1);
var G__36689 = cljs.core.chunk_rest(seq__36599_36687__$1);
var G__36690 = c__4638__auto___36688;
var G__36691 = cljs.core.count(c__4638__auto___36688);
var G__36692 = (0);
seq__36599_36675 = G__36689;
chunk__36600_36676 = G__36690;
count__36601_36677 = G__36691;
i__36602_36678 = G__36692;
continue;
} else {
var vec__36618_36694 = cljs.core.first(seq__36599_36687__$1);
var k_style_36695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_36694,(0),null);
var v_style_36696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_36694,(1),null);
node.style(cljs.core.name(k_style_36695),v_style_36696);


var G__36697 = cljs.core.next(seq__36599_36687__$1);
var G__36698 = null;
var G__36699 = (0);
var G__36700 = (0);
seq__36599_36675 = G__36697;
chunk__36600_36676 = G__36698;
count__36601_36677 = G__36699;
i__36602_36678 = G__36700;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_36672),v_36673);
}


var G__36702 = cljs.core.next(seq__36516_36664__$1);
var G__36703 = null;
var G__36704 = (0);
var G__36705 = (0);
seq__36516_36627 = G__36702;
chunk__36517_36628 = G__36703;
count__36518_36629 = G__36704;
i__36519_36630 = G__36705;
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
