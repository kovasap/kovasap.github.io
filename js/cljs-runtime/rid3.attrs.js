goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__39895_40071 = cljs.core.seq(attr_map);
var chunk__39896_40072 = null;
var count__39897_40073 = (0);
var i__39898_40074 = (0);
while(true){
if((i__39898_40074 < count__39897_40073)){
var vec__40023_40076 = chunk__39896_40072.cljs$core$IIndexed$_nth$arity$2(null,i__39898_40074);
var k_40077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40023_40076,(0),null);
var v_40078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40023_40076,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_40077),"style")){
var seq__40026_40082 = cljs.core.seq(v_40078);
var chunk__40027_40083 = null;
var count__40028_40084 = (0);
var i__40029_40085 = (0);
while(true){
if((i__40029_40085 < count__40028_40084)){
var vec__40036_40086 = chunk__40027_40083.cljs$core$IIndexed$_nth$arity$2(null,i__40029_40085);
var k_style_40087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40036_40086,(0),null);
var v_style_40088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40036_40086,(1),null);
node.style(cljs.core.name(k_style_40087),v_style_40088);


var G__40090 = seq__40026_40082;
var G__40091 = chunk__40027_40083;
var G__40092 = count__40028_40084;
var G__40093 = (i__40029_40085 + (1));
seq__40026_40082 = G__40090;
chunk__40027_40083 = G__40091;
count__40028_40084 = G__40092;
i__40029_40085 = G__40093;
continue;
} else {
var temp__5823__auto___40094 = cljs.core.seq(seq__40026_40082);
if(temp__5823__auto___40094){
var seq__40026_40095__$1 = temp__5823__auto___40094;
if(cljs.core.chunked_seq_QMARK_(seq__40026_40095__$1)){
var c__5568__auto___40096 = cljs.core.chunk_first(seq__40026_40095__$1);
var G__40097 = cljs.core.chunk_rest(seq__40026_40095__$1);
var G__40098 = c__5568__auto___40096;
var G__40099 = cljs.core.count(c__5568__auto___40096);
var G__40100 = (0);
seq__40026_40082 = G__40097;
chunk__40027_40083 = G__40098;
count__40028_40084 = G__40099;
i__40029_40085 = G__40100;
continue;
} else {
var vec__40039_40102 = cljs.core.first(seq__40026_40095__$1);
var k_style_40103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40039_40102,(0),null);
var v_style_40104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40039_40102,(1),null);
node.style(cljs.core.name(k_style_40103),v_style_40104);


var G__40105 = cljs.core.next(seq__40026_40095__$1);
var G__40106 = null;
var G__40107 = (0);
var G__40108 = (0);
seq__40026_40082 = G__40105;
chunk__40027_40083 = G__40106;
count__40028_40084 = G__40107;
i__40029_40085 = G__40108;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_40077),v_40078);
}


var G__40109 = seq__39895_40071;
var G__40110 = chunk__39896_40072;
var G__40111 = count__39897_40073;
var G__40112 = (i__39898_40074 + (1));
seq__39895_40071 = G__40109;
chunk__39896_40072 = G__40110;
count__39897_40073 = G__40111;
i__39898_40074 = G__40112;
continue;
} else {
var temp__5823__auto___40113 = cljs.core.seq(seq__39895_40071);
if(temp__5823__auto___40113){
var seq__39895_40114__$1 = temp__5823__auto___40113;
if(cljs.core.chunked_seq_QMARK_(seq__39895_40114__$1)){
var c__5568__auto___40115 = cljs.core.chunk_first(seq__39895_40114__$1);
var G__40116 = cljs.core.chunk_rest(seq__39895_40114__$1);
var G__40117 = c__5568__auto___40115;
var G__40118 = cljs.core.count(c__5568__auto___40115);
var G__40119 = (0);
seq__39895_40071 = G__40116;
chunk__39896_40072 = G__40117;
count__39897_40073 = G__40118;
i__39898_40074 = G__40119;
continue;
} else {
var vec__40047_40120 = cljs.core.first(seq__39895_40114__$1);
var k_40121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40047_40120,(0),null);
var v_40122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40047_40120,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_40121),"style")){
var seq__40051_40123 = cljs.core.seq(v_40122);
var chunk__40052_40124 = null;
var count__40053_40125 = (0);
var i__40054_40126 = (0);
while(true){
if((i__40054_40126 < count__40053_40125)){
var vec__40063_40127 = chunk__40052_40124.cljs$core$IIndexed$_nth$arity$2(null,i__40054_40126);
var k_style_40128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40063_40127,(0),null);
var v_style_40129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40063_40127,(1),null);
node.style(cljs.core.name(k_style_40128),v_style_40129);


var G__40130 = seq__40051_40123;
var G__40131 = chunk__40052_40124;
var G__40132 = count__40053_40125;
var G__40133 = (i__40054_40126 + (1));
seq__40051_40123 = G__40130;
chunk__40052_40124 = G__40131;
count__40053_40125 = G__40132;
i__40054_40126 = G__40133;
continue;
} else {
var temp__5823__auto___40134__$1 = cljs.core.seq(seq__40051_40123);
if(temp__5823__auto___40134__$1){
var seq__40051_40135__$1 = temp__5823__auto___40134__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40051_40135__$1)){
var c__5568__auto___40136 = cljs.core.chunk_first(seq__40051_40135__$1);
var G__40137 = cljs.core.chunk_rest(seq__40051_40135__$1);
var G__40138 = c__5568__auto___40136;
var G__40139 = cljs.core.count(c__5568__auto___40136);
var G__40140 = (0);
seq__40051_40123 = G__40137;
chunk__40052_40124 = G__40138;
count__40053_40125 = G__40139;
i__40054_40126 = G__40140;
continue;
} else {
var vec__40066_40141 = cljs.core.first(seq__40051_40135__$1);
var k_style_40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40066_40141,(0),null);
var v_style_40143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40066_40141,(1),null);
node.style(cljs.core.name(k_style_40142),v_style_40143);


var G__40144 = cljs.core.next(seq__40051_40135__$1);
var G__40145 = null;
var G__40146 = (0);
var G__40147 = (0);
seq__40051_40123 = G__40144;
chunk__40052_40124 = G__40145;
count__40053_40125 = G__40146;
i__40054_40126 = G__40147;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_40121),v_40122);
}


var G__40148 = cljs.core.next(seq__39895_40114__$1);
var G__40149 = null;
var G__40150 = (0);
var G__40151 = (0);
seq__39895_40071 = G__40148;
chunk__39896_40072 = G__40149;
count__39897_40073 = G__40150;
i__39898_40074 = G__40151;
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
