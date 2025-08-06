goog.provide('markdown_to_hiccup.decode');
markdown_to_hiccup.decode.decode_string = (function markdown_to_hiccup$decode$decode_string(var_args){
var G__26279 = arguments.length;
switch (G__26279) {
case 1:
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return goog.string.unescapeEntities(s);
}));

(markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2 = (function (s,transform_fn){
var decoded = markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1(s);
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(decoded) : transform_fn.call(null,decoded));
}));

(markdown_to_hiccup.decode.decode_string.cljs$lang$maxFixedArity = 2);

markdown_to_hiccup.decode.encode_string = (function markdown_to_hiccup$decode$encode_string(s){
throw "No yet implemented.".Exception();
});
markdown_to_hiccup.decode.decode_iseq = (function markdown_to_hiccup$decode$decode_iseq(var_args){
var G__26289 = arguments.length;
switch (G__26289) {
case 1:
return markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1 = (function (iseq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(markdown_to_hiccup.decode.decode,cljs.core.seq(iseq));
}));

(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2 = (function (iseq,transform_str_fn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26287_SHARP_){
return (markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$2 ? markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$2(p1__26287_SHARP_,transform_str_fn) : markdown_to_hiccup.decode.decode.call(null,p1__26287_SHARP_,transform_str_fn));
}),cljs.core.seq(iseq));
}));

(markdown_to_hiccup.decode.decode_iseq.cljs$lang$maxFixedArity = 2);

markdown_to_hiccup.decode.dispatch = (function markdown_to_hiccup$decode$dispatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26307 = arguments.length;
var i__5770__auto___26308 = (0);
while(true){
if((i__5770__auto___26308 < len__5769__auto___26307)){
args__5775__auto__.push((arguments[i__5770__auto___26308]));

var G__26309 = (i__5770__auto___26308 + (1));
i__5770__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){

if(cljs.core.map_QMARK_(x)){
var or__5045__auto__ = new cljs.core.Keyword(null,"decode-type","decode-type",-1943601402).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("markdown-to-hiccup.decode","map","markdown-to-hiccup.decode/map",1547761649);
}
} else {
if(cljs.core.vector_QMARK_(x)){
return new cljs.core.Keyword("markdown-to-hiccup.decode","vector","markdown-to-hiccup.decode/vector",1979814818);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword("markdown-to-hiccup.decode","string","markdown-to-hiccup.decode/string",-2048172350);
} else {
return new cljs.core.Keyword("markdown-to-hiccup.decode","pass","markdown-to-hiccup.decode/pass",1096198285);

}
}
}
}));

(markdown_to_hiccup.decode.dispatch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.decode.dispatch.cljs$lang$applyTo = (function (seq26292){
var G__26293 = cljs.core.first(seq26292);
var seq26292__$1 = cljs.core.next(seq26292);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26293,seq26292__$1);
}));

if((typeof markdown_to_hiccup !== 'undefined') && (typeof markdown_to_hiccup.decode !== 'undefined') && (typeof markdown_to_hiccup.decode.decode !== 'undefined')){
} else {
markdown_to_hiccup.decode.decode = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26297 = cljs.core.get_global_hierarchy;
return (fexpr__26297.cljs$core$IFn$_invoke$arity$0 ? fexpr__26297.cljs$core$IFn$_invoke$arity$0() : fexpr__26297.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("markdown-to-hiccup.decode","decode"),markdown_to_hiccup.decode.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","string","markdown-to-hiccup.decode/string",-2048172350),(function() {
var G__26311 = null;
var G__26311__1 = (function (s){
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1(s);
});
var G__26311__2 = (function (s,transform){
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2(s,transform);
});
G__26311 = function(s,transform){
switch(arguments.length){
case 1:
return G__26311__1.call(this,s);
case 2:
return G__26311__2.call(this,s,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26311.cljs$core$IFn$_invoke$arity$1 = G__26311__1;
G__26311.cljs$core$IFn$_invoke$arity$2 = G__26311__2;
return G__26311;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","map","markdown-to-hiccup.decode/map",1547761649),(function() {
var G__26312 = null;
var G__26312__1 = (function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1(m));
});
var G__26312__2 = (function (m,transform){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2(m,transform));
});
G__26312 = function(m,transform){
switch(arguments.length){
case 1:
return G__26312__1.call(this,m);
case 2:
return G__26312__2.call(this,m,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26312.cljs$core$IFn$_invoke$arity$1 = G__26312__1;
G__26312.cljs$core$IFn$_invoke$arity$2 = G__26312__2;
return G__26312;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","vector","markdown-to-hiccup.decode/vector",1979814818),(function() {
var G__26313 = null;
var G__26313__1 = (function (v){
return cljs.core.vec(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1(v));
});
var G__26313__2 = (function (v,transform){
return cljs.core.vec(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2(v,transform));
});
G__26313 = function(v,transform){
switch(arguments.length){
case 1:
return G__26313__1.call(this,v);
case 2:
return G__26313__2.call(this,v,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26313.cljs$core$IFn$_invoke$arity$1 = G__26313__1;
G__26313.cljs$core$IFn$_invoke$arity$2 = G__26313__2;
return G__26313;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","pass","markdown-to-hiccup.decode/pass",1096198285),(function() {
var G__26314 = null;
var G__26314__1 = (function (x){
return cljs.core.identity(x);
});
var G__26314__2 = (function (x,f){
return cljs.core.identity(x);
});
G__26314 = function(x,f){
switch(arguments.length){
case 1:
return G__26314__1.call(this,x);
case 2:
return G__26314__2.call(this,x,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26314.cljs$core$IFn$_invoke$arity$1 = G__26314__1;
G__26314.cljs$core$IFn$_invoke$arity$2 = G__26314__2;
return G__26314;
})()
);

//# sourceMappingURL=markdown_to_hiccup.decode.js.map
