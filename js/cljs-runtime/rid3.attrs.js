goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__39985_40113 = cljs.core.seq(attr_map);
var chunk__39986_40114 = null;
var count__39987_40115 = (0);
var i__39988_40116 = (0);
while(true){
if((i__39988_40116 < count__39987_40115)){
var vec__40054_40129 = chunk__39986_40114.cljs$core$IIndexed$_nth$arity$2(null,i__39988_40116);
var k_40130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40054_40129,(0),null);
var v_40131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40054_40129,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_40130),"style")){
var seq__40057_40134 = cljs.core.seq(v_40131);
var chunk__40058_40135 = null;
var count__40059_40136 = (0);
var i__40060_40137 = (0);
while(true){
if((i__40060_40137 < count__40059_40136)){
var vec__40071_40140 = chunk__40058_40135.cljs$core$IIndexed$_nth$arity$2(null,i__40060_40137);
var k_style_40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071_40140,(0),null);
var v_style_40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071_40140,(1),null);
node.style(cljs.core.name(k_style_40141),v_style_40142);


var G__40145 = seq__40057_40134;
var G__40146 = chunk__40058_40135;
var G__40147 = count__40059_40136;
var G__40148 = (i__40060_40137 + (1));
seq__40057_40134 = G__40145;
chunk__40058_40135 = G__40146;
count__40059_40136 = G__40147;
i__40060_40137 = G__40148;
continue;
} else {
var temp__5804__auto___40149 = cljs.core.seq(seq__40057_40134);
if(temp__5804__auto___40149){
var seq__40057_40151__$1 = temp__5804__auto___40149;
if(cljs.core.chunked_seq_QMARK_(seq__40057_40151__$1)){
var c__5568__auto___40153 = cljs.core.chunk_first(seq__40057_40151__$1);
var G__40154 = cljs.core.chunk_rest(seq__40057_40151__$1);
var G__40155 = c__5568__auto___40153;
var G__40156 = cljs.core.count(c__5568__auto___40153);
var G__40157 = (0);
seq__40057_40134 = G__40154;
chunk__40058_40135 = G__40155;
count__40059_40136 = G__40156;
i__40060_40137 = G__40157;
continue;
} else {
var vec__40078_40162 = cljs.core.first(seq__40057_40151__$1);
var k_style_40163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40078_40162,(0),null);
var v_style_40164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40078_40162,(1),null);
node.style(cljs.core.name(k_style_40163),v_style_40164);


var G__40165 = cljs.core.next(seq__40057_40151__$1);
var G__40166 = null;
var G__40167 = (0);
var G__40168 = (0);
seq__40057_40134 = G__40165;
chunk__40058_40135 = G__40166;
count__40059_40136 = G__40167;
i__40060_40137 = G__40168;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_40130),v_40131);
}


var G__40170 = seq__39985_40113;
var G__40171 = chunk__39986_40114;
var G__40172 = count__39987_40115;
var G__40173 = (i__39988_40116 + (1));
seq__39985_40113 = G__40170;
chunk__39986_40114 = G__40171;
count__39987_40115 = G__40172;
i__39988_40116 = G__40173;
continue;
} else {
var temp__5804__auto___40175 = cljs.core.seq(seq__39985_40113);
if(temp__5804__auto___40175){
var seq__39985_40178__$1 = temp__5804__auto___40175;
if(cljs.core.chunked_seq_QMARK_(seq__39985_40178__$1)){
var c__5568__auto___40180 = cljs.core.chunk_first(seq__39985_40178__$1);
var G__40181 = cljs.core.chunk_rest(seq__39985_40178__$1);
var G__40182 = c__5568__auto___40180;
var G__40183 = cljs.core.count(c__5568__auto___40180);
var G__40184 = (0);
seq__39985_40113 = G__40181;
chunk__39986_40114 = G__40182;
count__39987_40115 = G__40183;
i__39988_40116 = G__40184;
continue;
} else {
var vec__40081_40185 = cljs.core.first(seq__39985_40178__$1);
var k_40186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40081_40185,(0),null);
var v_40187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40081_40185,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_40186),"style")){
var seq__40084_40188 = cljs.core.seq(v_40187);
var chunk__40085_40189 = null;
var count__40086_40190 = (0);
var i__40087_40191 = (0);
while(true){
if((i__40087_40191 < count__40086_40190)){
var vec__40100_40192 = chunk__40085_40189.cljs$core$IIndexed$_nth$arity$2(null,i__40087_40191);
var k_style_40193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100_40192,(0),null);
var v_style_40194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100_40192,(1),null);
node.style(cljs.core.name(k_style_40193),v_style_40194);


var G__40196 = seq__40084_40188;
var G__40197 = chunk__40085_40189;
var G__40198 = count__40086_40190;
var G__40199 = (i__40087_40191 + (1));
seq__40084_40188 = G__40196;
chunk__40085_40189 = G__40197;
count__40086_40190 = G__40198;
i__40087_40191 = G__40199;
continue;
} else {
var temp__5804__auto___40201__$1 = cljs.core.seq(seq__40084_40188);
if(temp__5804__auto___40201__$1){
var seq__40084_40202__$1 = temp__5804__auto___40201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40084_40202__$1)){
var c__5568__auto___40203 = cljs.core.chunk_first(seq__40084_40202__$1);
var G__40204 = cljs.core.chunk_rest(seq__40084_40202__$1);
var G__40205 = c__5568__auto___40203;
var G__40206 = cljs.core.count(c__5568__auto___40203);
var G__40207 = (0);
seq__40084_40188 = G__40204;
chunk__40085_40189 = G__40205;
count__40086_40190 = G__40206;
i__40087_40191 = G__40207;
continue;
} else {
var vec__40104_40208 = cljs.core.first(seq__40084_40202__$1);
var k_style_40209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104_40208,(0),null);
var v_style_40210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104_40208,(1),null);
node.style(cljs.core.name(k_style_40209),v_style_40210);


var G__40211 = cljs.core.next(seq__40084_40202__$1);
var G__40212 = null;
var G__40213 = (0);
var G__40214 = (0);
seq__40084_40188 = G__40211;
chunk__40085_40189 = G__40212;
count__40086_40190 = G__40213;
i__40087_40191 = G__40214;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_40186),v_40187);
}


var G__40219 = cljs.core.next(seq__39985_40178__$1);
var G__40220 = null;
var G__40221 = (0);
var G__40222 = (0);
seq__39985_40113 = G__40219;
chunk__39986_40114 = G__40220;
count__39987_40115 = G__40221;
i__39988_40116 = G__40222;
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
