goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__39983_40102 = cljs.core.seq(attr_map);
var chunk__39984_40103 = null;
var count__39985_40104 = (0);
var i__39986_40105 = (0);
while(true){
if((i__39986_40105 < count__39985_40104)){
var vec__40036_40106 = chunk__39984_40103.cljs$core$IIndexed$_nth$arity$2(null,i__39986_40105);
var k_40107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40036_40106,(0),null);
var v_40108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40036_40106,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_40107),"style")){
var seq__40039_40114 = cljs.core.seq(v_40108);
var chunk__40040_40115 = null;
var count__40041_40116 = (0);
var i__40042_40117 = (0);
while(true){
if((i__40042_40117 < count__40041_40116)){
var vec__40051_40119 = chunk__40040_40115.cljs$core$IIndexed$_nth$arity$2(null,i__40042_40117);
var k_style_40120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051_40119,(0),null);
var v_style_40121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051_40119,(1),null);
node.style(cljs.core.name(k_style_40120),v_style_40121);


var G__40122 = seq__40039_40114;
var G__40123 = chunk__40040_40115;
var G__40124 = count__40041_40116;
var G__40125 = (i__40042_40117 + (1));
seq__40039_40114 = G__40122;
chunk__40040_40115 = G__40123;
count__40041_40116 = G__40124;
i__40042_40117 = G__40125;
continue;
} else {
var temp__5804__auto___40126 = cljs.core.seq(seq__40039_40114);
if(temp__5804__auto___40126){
var seq__40039_40127__$1 = temp__5804__auto___40126;
if(cljs.core.chunked_seq_QMARK_(seq__40039_40127__$1)){
var c__5568__auto___40128 = cljs.core.chunk_first(seq__40039_40127__$1);
var G__40129 = cljs.core.chunk_rest(seq__40039_40127__$1);
var G__40130 = c__5568__auto___40128;
var G__40131 = cljs.core.count(c__5568__auto___40128);
var G__40132 = (0);
seq__40039_40114 = G__40129;
chunk__40040_40115 = G__40130;
count__40041_40116 = G__40131;
i__40042_40117 = G__40132;
continue;
} else {
var vec__40054_40133 = cljs.core.first(seq__40039_40127__$1);
var k_style_40134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40054_40133,(0),null);
var v_style_40135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40054_40133,(1),null);
node.style(cljs.core.name(k_style_40134),v_style_40135);


var G__40136 = cljs.core.next(seq__40039_40127__$1);
var G__40137 = null;
var G__40138 = (0);
var G__40139 = (0);
seq__40039_40114 = G__40136;
chunk__40040_40115 = G__40137;
count__40041_40116 = G__40138;
i__40042_40117 = G__40139;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_40107),v_40108);
}


var G__40140 = seq__39983_40102;
var G__40141 = chunk__39984_40103;
var G__40142 = count__39985_40104;
var G__40143 = (i__39986_40105 + (1));
seq__39983_40102 = G__40140;
chunk__39984_40103 = G__40141;
count__39985_40104 = G__40142;
i__39986_40105 = G__40143;
continue;
} else {
var temp__5804__auto___40144 = cljs.core.seq(seq__39983_40102);
if(temp__5804__auto___40144){
var seq__39983_40145__$1 = temp__5804__auto___40144;
if(cljs.core.chunked_seq_QMARK_(seq__39983_40145__$1)){
var c__5568__auto___40146 = cljs.core.chunk_first(seq__39983_40145__$1);
var G__40147 = cljs.core.chunk_rest(seq__39983_40145__$1);
var G__40148 = c__5568__auto___40146;
var G__40149 = cljs.core.count(c__5568__auto___40146);
var G__40150 = (0);
seq__39983_40102 = G__40147;
chunk__39984_40103 = G__40148;
count__39985_40104 = G__40149;
i__39986_40105 = G__40150;
continue;
} else {
var vec__40062_40154 = cljs.core.first(seq__39983_40145__$1);
var k_40155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062_40154,(0),null);
var v_40156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062_40154,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_40155),"style")){
var seq__40066_40159 = cljs.core.seq(v_40156);
var chunk__40067_40160 = null;
var count__40068_40161 = (0);
var i__40069_40162 = (0);
while(true){
if((i__40069_40162 < count__40068_40161)){
var vec__40078_40163 = chunk__40067_40160.cljs$core$IIndexed$_nth$arity$2(null,i__40069_40162);
var k_style_40164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40078_40163,(0),null);
var v_style_40165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40078_40163,(1),null);
node.style(cljs.core.name(k_style_40164),v_style_40165);


var G__40168 = seq__40066_40159;
var G__40169 = chunk__40067_40160;
var G__40170 = count__40068_40161;
var G__40171 = (i__40069_40162 + (1));
seq__40066_40159 = G__40168;
chunk__40067_40160 = G__40169;
count__40068_40161 = G__40170;
i__40069_40162 = G__40171;
continue;
} else {
var temp__5804__auto___40172__$1 = cljs.core.seq(seq__40066_40159);
if(temp__5804__auto___40172__$1){
var seq__40066_40179__$1 = temp__5804__auto___40172__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40066_40179__$1)){
var c__5568__auto___40180 = cljs.core.chunk_first(seq__40066_40179__$1);
var G__40181 = cljs.core.chunk_rest(seq__40066_40179__$1);
var G__40182 = c__5568__auto___40180;
var G__40183 = cljs.core.count(c__5568__auto___40180);
var G__40184 = (0);
seq__40066_40159 = G__40181;
chunk__40067_40160 = G__40182;
count__40068_40161 = G__40183;
i__40069_40162 = G__40184;
continue;
} else {
var vec__40085_40186 = cljs.core.first(seq__40066_40179__$1);
var k_style_40187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085_40186,(0),null);
var v_style_40188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085_40186,(1),null);
node.style(cljs.core.name(k_style_40187),v_style_40188);


var G__40194 = cljs.core.next(seq__40066_40179__$1);
var G__40195 = null;
var G__40196 = (0);
var G__40197 = (0);
seq__40066_40159 = G__40194;
chunk__40067_40160 = G__40195;
count__40068_40161 = G__40196;
i__40069_40162 = G__40197;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_40155),v_40156);
}


var G__40201 = cljs.core.next(seq__39983_40145__$1);
var G__40202 = null;
var G__40203 = (0);
var G__40204 = (0);
seq__39983_40102 = G__40201;
chunk__39984_40103 = G__40202;
count__39985_40104 = G__40203;
i__39986_40105 = G__40204;
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
