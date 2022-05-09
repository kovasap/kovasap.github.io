goog.provide('rid3.attrs');
rid3.attrs.attrs = (function rid3$attrs$attrs(node,attr_map){
var seq__41735_41906 = cljs.core.seq(attr_map);
var chunk__41736_41907 = null;
var count__41737_41908 = (0);
var i__41738_41909 = (0);
while(true){
if((i__41738_41909 < count__41737_41908)){
var vec__41827_41910 = chunk__41736_41907.cljs$core$IIndexed$_nth$arity$2(null,i__41738_41909);
var k_41911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41827_41910,(0),null);
var v_41912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41827_41910,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_41911),"style")){
var seq__41834_41913 = cljs.core.seq(v_41912);
var chunk__41835_41914 = null;
var count__41836_41915 = (0);
var i__41837_41916 = (0);
while(true){
if((i__41837_41916 < count__41836_41915)){
var vec__41857_41917 = chunk__41835_41914.cljs$core$IIndexed$_nth$arity$2(null,i__41837_41916);
var k_style_41918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41857_41917,(0),null);
var v_style_41919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41857_41917,(1),null);
node.style(cljs.core.name(k_style_41918),v_style_41919);


var G__41920 = seq__41834_41913;
var G__41921 = chunk__41835_41914;
var G__41922 = count__41836_41915;
var G__41923 = (i__41837_41916 + (1));
seq__41834_41913 = G__41920;
chunk__41835_41914 = G__41921;
count__41836_41915 = G__41922;
i__41837_41916 = G__41923;
continue;
} else {
var temp__5753__auto___41924 = cljs.core.seq(seq__41834_41913);
if(temp__5753__auto___41924){
var seq__41834_41925__$1 = temp__5753__auto___41924;
if(cljs.core.chunked_seq_QMARK_(seq__41834_41925__$1)){
var c__4679__auto___41926 = cljs.core.chunk_first(seq__41834_41925__$1);
var G__41927 = cljs.core.chunk_rest(seq__41834_41925__$1);
var G__41928 = c__4679__auto___41926;
var G__41929 = cljs.core.count(c__4679__auto___41926);
var G__41930 = (0);
seq__41834_41913 = G__41927;
chunk__41835_41914 = G__41928;
count__41836_41915 = G__41929;
i__41837_41916 = G__41930;
continue;
} else {
var vec__41867_41931 = cljs.core.first(seq__41834_41925__$1);
var k_style_41932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41867_41931,(0),null);
var v_style_41933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41867_41931,(1),null);
node.style(cljs.core.name(k_style_41932),v_style_41933);


var G__41935 = cljs.core.next(seq__41834_41925__$1);
var G__41936 = null;
var G__41937 = (0);
var G__41938 = (0);
seq__41834_41913 = G__41935;
chunk__41835_41914 = G__41936;
count__41836_41915 = G__41937;
i__41837_41916 = G__41938;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_41911),v_41912);
}


var G__41939 = seq__41735_41906;
var G__41940 = chunk__41736_41907;
var G__41941 = count__41737_41908;
var G__41942 = (i__41738_41909 + (1));
seq__41735_41906 = G__41939;
chunk__41736_41907 = G__41940;
count__41737_41908 = G__41941;
i__41738_41909 = G__41942;
continue;
} else {
var temp__5753__auto___41943 = cljs.core.seq(seq__41735_41906);
if(temp__5753__auto___41943){
var seq__41735_41944__$1 = temp__5753__auto___41943;
if(cljs.core.chunked_seq_QMARK_(seq__41735_41944__$1)){
var c__4679__auto___41946 = cljs.core.chunk_first(seq__41735_41944__$1);
var G__41950 = cljs.core.chunk_rest(seq__41735_41944__$1);
var G__41951 = c__4679__auto___41946;
var G__41952 = cljs.core.count(c__4679__auto___41946);
var G__41953 = (0);
seq__41735_41906 = G__41950;
chunk__41736_41907 = G__41951;
count__41737_41908 = G__41952;
i__41738_41909 = G__41953;
continue;
} else {
var vec__41877_41954 = cljs.core.first(seq__41735_41944__$1);
var k_41955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41877_41954,(0),null);
var v_41956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41877_41954,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k_41955),"style")){
var seq__41883_41958 = cljs.core.seq(v_41956);
var chunk__41884_41959 = null;
var count__41885_41960 = (0);
var i__41886_41961 = (0);
while(true){
if((i__41886_41961 < count__41885_41960)){
var vec__41900_41962 = chunk__41884_41959.cljs$core$IIndexed$_nth$arity$2(null,i__41886_41961);
var k_style_41963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41900_41962,(0),null);
var v_style_41964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41900_41962,(1),null);
node.style(cljs.core.name(k_style_41963),v_style_41964);


var G__41965 = seq__41883_41958;
var G__41966 = chunk__41884_41959;
var G__41967 = count__41885_41960;
var G__41968 = (i__41886_41961 + (1));
seq__41883_41958 = G__41965;
chunk__41884_41959 = G__41966;
count__41885_41960 = G__41967;
i__41886_41961 = G__41968;
continue;
} else {
var temp__5753__auto___41969__$1 = cljs.core.seq(seq__41883_41958);
if(temp__5753__auto___41969__$1){
var seq__41883_41970__$1 = temp__5753__auto___41969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41883_41970__$1)){
var c__4679__auto___41971 = cljs.core.chunk_first(seq__41883_41970__$1);
var G__41972 = cljs.core.chunk_rest(seq__41883_41970__$1);
var G__41973 = c__4679__auto___41971;
var G__41974 = cljs.core.count(c__4679__auto___41971);
var G__41975 = (0);
seq__41883_41958 = G__41972;
chunk__41884_41959 = G__41973;
count__41885_41960 = G__41974;
i__41886_41961 = G__41975;
continue;
} else {
var vec__41903_41976 = cljs.core.first(seq__41883_41970__$1);
var k_style_41977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41903_41976,(0),null);
var v_style_41978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41903_41976,(1),null);
node.style(cljs.core.name(k_style_41977),v_style_41978);


var G__41979 = cljs.core.next(seq__41883_41970__$1);
var G__41980 = null;
var G__41981 = (0);
var G__41982 = (0);
seq__41883_41958 = G__41979;
chunk__41884_41959 = G__41980;
count__41885_41960 = G__41981;
i__41886_41961 = G__41982;
continue;
}
} else {
}
}
break;
}
} else {
node.attr(cljs.core.name(k_41955),v_41956);
}


var G__41986 = cljs.core.next(seq__41735_41944__$1);
var G__41987 = null;
var G__41988 = (0);
var G__41989 = (0);
seq__41735_41906 = G__41986;
chunk__41736_41907 = G__41987;
count__41737_41908 = G__41988;
i__41738_41909 = G__41989;
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
