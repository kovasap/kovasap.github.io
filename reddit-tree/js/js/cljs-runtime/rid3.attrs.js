goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__37947_38162 = cljs.core.seq(attr_map);
var chunk__37948_38164 = null;
var count__37949_38165 = (0);
var i__37950_38166 = (0);
while(true){
if((i__37950_38166 < count__37949_38165)){
var vec__38052_38170 = chunk__37948_38164.cljs$core$IIndexed$_nth$arity$2(null,i__37950_38166);
var k_38171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052_38170,(0),null);
var v_38172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052_38170,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_38171),"style")){
var seq__38056_38175 = cljs.core.seq(v_38172);
var chunk__38057_38176 = null;
var count__38058_38177 = (0);
var i__38059_38178 = (0);
while(true){
if((i__38059_38178 < count__38058_38177)){
var vec__38080_38180 = chunk__38057_38176.cljs$core$IIndexed$_nth$arity$2(null,i__38059_38178);
var k_style_38181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080_38180,(0),null);
var v_style_38182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080_38180,(1),null);
node.style(cljs.core.name(k_style_38181),v_style_38182);


var G__38185 = seq__38056_38175;
var G__38186 = chunk__38057_38176;
var G__38187 = count__38058_38177;
var G__38188 = (i__38059_38178 + (1));
seq__38056_38175 = G__38185;
chunk__38057_38176 = G__38186;
count__38058_38177 = G__38187;
i__38059_38178 = G__38188;
continue;
} else {
var temp__5753__auto___38189 = cljs.core.seq(seq__38056_38175);
if(temp__5753__auto___38189){
var seq__38056_38190__$1 = temp__5753__auto___38189;
if(cljs.core.chunked_seq_QMARK_(seq__38056_38190__$1)){
var c__4638__auto___38193 = cljs.core.chunk_first(seq__38056_38190__$1);
var G__38194 = cljs.core.chunk_rest(seq__38056_38190__$1);
var G__38195 = c__4638__auto___38193;
var G__38196 = cljs.core.count(c__4638__auto___38193);
var G__38197 = (0);
seq__38056_38175 = G__38194;
chunk__38057_38176 = G__38195;
count__38058_38177 = G__38196;
i__38059_38178 = G__38197;
continue;
} else {
var vec__38092_38198 = cljs.core.first(seq__38056_38190__$1);
var k_style_38199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38092_38198,(0),null);
var v_style_38200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38092_38198,(1),null);
node.style(cljs.core.name(k_style_38199),v_style_38200);


var G__38203 = cljs.core.next(seq__38056_38190__$1);
var G__38204 = null;
var G__38205 = (0);
var G__38206 = (0);
seq__38056_38175 = G__38203;
chunk__38057_38176 = G__38204;
count__38058_38177 = G__38205;
i__38059_38178 = G__38206;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_38171),v_38172);
}


var G__38207 = seq__37947_38162;
var G__38208 = chunk__37948_38164;
var G__38209 = count__37949_38165;
var G__38210 = (i__37950_38166 + (1));
seq__37947_38162 = G__38207;
chunk__37948_38164 = G__38208;
count__37949_38165 = G__38209;
i__37950_38166 = G__38210;
continue;
} else {
var temp__5753__auto___38211 = cljs.core.seq(seq__37947_38162);
if(temp__5753__auto___38211){
var seq__37947_38212__$1 = temp__5753__auto___38211;
if(cljs.core.chunked_seq_QMARK_(seq__37947_38212__$1)){
var c__4638__auto___38213 = cljs.core.chunk_first(seq__37947_38212__$1);
var G__38215 = cljs.core.chunk_rest(seq__37947_38212__$1);
var G__38216 = c__4638__auto___38213;
var G__38217 = cljs.core.count(c__4638__auto___38213);
var G__38218 = (0);
seq__37947_38162 = G__38215;
chunk__37948_38164 = G__38216;
count__37949_38165 = G__38217;
i__37950_38166 = G__38218;
continue;
} else {
var vec__38105_38219 = cljs.core.first(seq__37947_38212__$1);
var k_38220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105_38219,(0),null);
var v_38221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105_38219,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_38220),"style")){
var seq__38116_38225 = cljs.core.seq(v_38221);
var chunk__38117_38226 = null;
var count__38118_38227 = (0);
var i__38119_38228 = (0);
while(true){
if((i__38119_38228 < count__38118_38227)){
var vec__38138_38230 = chunk__38117_38226.cljs$core$IIndexed$_nth$arity$2(null,i__38119_38228);
var k_style_38231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38138_38230,(0),null);
var v_style_38232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38138_38230,(1),null);
node.style(cljs.core.name(k_style_38231),v_style_38232);


var G__38235 = seq__38116_38225;
var G__38236 = chunk__38117_38226;
var G__38237 = count__38118_38227;
var G__38238 = (i__38119_38228 + (1));
seq__38116_38225 = G__38235;
chunk__38117_38226 = G__38236;
count__38118_38227 = G__38237;
i__38119_38228 = G__38238;
continue;
} else {
var temp__5753__auto___38240__$1 = cljs.core.seq(seq__38116_38225);
if(temp__5753__auto___38240__$1){
var seq__38116_38241__$1 = temp__5753__auto___38240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38116_38241__$1)){
var c__4638__auto___38242 = cljs.core.chunk_first(seq__38116_38241__$1);
var G__38243 = cljs.core.chunk_rest(seq__38116_38241__$1);
var G__38244 = c__4638__auto___38242;
var G__38245 = cljs.core.count(c__4638__auto___38242);
var G__38246 = (0);
seq__38116_38225 = G__38243;
chunk__38117_38226 = G__38244;
count__38118_38227 = G__38245;
i__38119_38228 = G__38246;
continue;
} else {
var vec__38148_38247 = cljs.core.first(seq__38116_38241__$1);
var k_style_38248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148_38247,(0),null);
var v_style_38249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148_38247,(1),null);
node.style(cljs.core.name(k_style_38248),v_style_38249);


var G__38252 = cljs.core.next(seq__38116_38241__$1);
var G__38253 = null;
var G__38254 = (0);
var G__38255 = (0);
seq__38116_38225 = G__38252;
chunk__38117_38226 = G__38253;
count__38118_38227 = G__38254;
i__38119_38228 = G__38255;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_38220),v_38221);
}


var G__38256 = cljs.core.next(seq__37947_38212__$1);
var G__38257 = null;
var G__38258 = (0);
var G__38259 = (0);
seq__37947_38162 = G__38256;
chunk__37948_38164 = G__38257;
count__37949_38165 = G__38258;
i__37950_38166 = G__38259;
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
