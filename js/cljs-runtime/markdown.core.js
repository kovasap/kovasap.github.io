goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__49233){
var map__49234 = p__49233;
var map__49234__$1 = cljs.core.__destructure_map(map__49234);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49234__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49234__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49234__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__49235 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__49236 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__49236);

try{var vec__49237 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49240,transformer){
var vec__49241 = p__49240;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(1),null);
var G__49244 = text;
var G__49245 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__49244,G__49245) : transformer.call(null,G__49244,G__49245));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__49235);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49286 = arguments.length;
var i__4865__auto___49287 = (0);
while(true){
if((i__4865__auto___49287 < len__4864__auto___49286)){
args__4870__auto__.push((arguments[i__4865__auto___49287]));

var G__49288 = (i__4865__auto___49287 + (1));
i__4865__auto___49287 = G__49288;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq49246){
var G__49247 = cljs.core.first(seq49246);
var seq49246__$1 = cljs.core.next(seq49246);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49247,seq49246__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__49248_49289 = cljs.core.seq(lines);
var chunk__49249_49290 = null;
var count__49250_49291 = (0);
var i__49251_49292 = (0);
while(true){
if((i__49251_49292 < count__49250_49291)){
var line_49293 = chunk__49249_49290.cljs$core$IIndexed$_nth$arity$2(null,i__49251_49292);
markdown.links.parse_reference_link(line_49293,references);


var G__49294 = seq__49248_49289;
var G__49295 = chunk__49249_49290;
var G__49296 = count__49250_49291;
var G__49297 = (i__49251_49292 + (1));
seq__49248_49289 = G__49294;
chunk__49249_49290 = G__49295;
count__49250_49291 = G__49296;
i__49251_49292 = G__49297;
continue;
} else {
var temp__5753__auto___49298 = cljs.core.seq(seq__49248_49289);
if(temp__5753__auto___49298){
var seq__49248_49299__$1 = temp__5753__auto___49298;
if(cljs.core.chunked_seq_QMARK_(seq__49248_49299__$1)){
var c__4679__auto___49300 = cljs.core.chunk_first(seq__49248_49299__$1);
var G__49301 = cljs.core.chunk_rest(seq__49248_49299__$1);
var G__49302 = c__4679__auto___49300;
var G__49303 = cljs.core.count(c__4679__auto___49300);
var G__49304 = (0);
seq__49248_49289 = G__49301;
chunk__49249_49290 = G__49302;
count__49250_49291 = G__49303;
i__49251_49292 = G__49304;
continue;
} else {
var line_49305 = cljs.core.first(seq__49248_49299__$1);
markdown.links.parse_reference_link(line_49305,references);


var G__49306 = cljs.core.next(seq__49248_49299__$1);
var G__49307 = null;
var G__49308 = (0);
var G__49309 = (0);
seq__49248_49289 = G__49306;
chunk__49249_49290 = G__49307;
count__49250_49291 = G__49308;
i__49251_49292 = G__49309;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__49252_49311 = cljs.core.seq(lines);
var chunk__49253_49312 = null;
var count__49254_49313 = (0);
var i__49255_49314 = (0);
while(true){
if((i__49255_49314 < count__49254_49313)){
var line_49315 = chunk__49253_49312.cljs$core$IIndexed$_nth$arity$2(null,i__49255_49314);
markdown.links.parse_footnote_link(line_49315,footnotes);


var G__49316 = seq__49252_49311;
var G__49317 = chunk__49253_49312;
var G__49318 = count__49254_49313;
var G__49319 = (i__49255_49314 + (1));
seq__49252_49311 = G__49316;
chunk__49253_49312 = G__49317;
count__49254_49313 = G__49318;
i__49255_49314 = G__49319;
continue;
} else {
var temp__5753__auto___49320 = cljs.core.seq(seq__49252_49311);
if(temp__5753__auto___49320){
var seq__49252_49321__$1 = temp__5753__auto___49320;
if(cljs.core.chunked_seq_QMARK_(seq__49252_49321__$1)){
var c__4679__auto___49322 = cljs.core.chunk_first(seq__49252_49321__$1);
var G__49323 = cljs.core.chunk_rest(seq__49252_49321__$1);
var G__49324 = c__4679__auto___49322;
var G__49325 = cljs.core.count(c__4679__auto___49322);
var G__49326 = (0);
seq__49252_49311 = G__49323;
chunk__49253_49312 = G__49324;
count__49254_49313 = G__49325;
i__49255_49314 = G__49326;
continue;
} else {
var line_49327 = cljs.core.first(seq__49252_49321__$1);
markdown.links.parse_footnote_link(line_49327,footnotes);


var G__49328 = cljs.core.next(seq__49252_49321__$1);
var G__49329 = null;
var G__49330 = (0);
var G__49331 = (0);
seq__49252_49311 = G__49328;
chunk__49253_49312 = G__49329;
count__49254_49313 = G__49330;
i__49255_49314 = G__49331;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__49257 = cljs.core.split_with((function (p1__49256_SHARP_){
return cljs.core.not_empty(p1__49256_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__49260 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__49261 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__49262 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__49263 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__49262);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__49263);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__49264 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49264,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49264,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__49270_49332 = lines__$1;
var vec__49271_49333 = G__49270_49332;
var seq__49272_49334 = cljs.core.seq(vec__49271_49333);
var first__49273_49335 = cljs.core.first(seq__49272_49334);
var seq__49272_49336__$1 = cljs.core.next(seq__49272_49334);
var line_49337 = first__49273_49335;
var more_49338 = seq__49272_49336__$1;
var state_49339 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__49270_49340__$1 = G__49270_49332;
var state_49341__$1 = state_49339;
while(true){
var vec__49277_49342 = G__49270_49340__$1;
var seq__49278_49343 = cljs.core.seq(vec__49277_49342);
var first__49279_49344 = cljs.core.first(seq__49278_49343);
var seq__49278_49345__$1 = cljs.core.next(seq__49278_49343);
var line_49346__$1 = first__49279_49344;
var more_49347__$1 = seq__49278_49345__$1;
var state_49348__$2 = state_49341__$1;
var line_49349__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_49348__$2))?"":line_49346__$1);
var state_49350__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_49348__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_49348__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_49348__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_49348__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_49348__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_49347__$1))){
var G__49351 = more_49347__$1;
var G__49352 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_49349__$2,cljs.core.first(more_49347__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_49350__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_49349__$2.trim()));
G__49270_49340__$1 = G__49351;
state_49341__$1 = G__49352;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_49350__$3))),line_49349__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_49350__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__49261);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__49260);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49354 = arguments.length;
var i__4865__auto___49355 = (0);
while(true){
if((i__4865__auto___49355 < len__4864__auto___49354)){
args__4870__auto__.push((arguments[i__4865__auto___49355]));

var G__49356 = (i__4865__auto___49355 + (1));
i__4865__auto___49355 = G__49356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq49280){
var G__49281 = cljs.core.first(seq49280);
var seq49280__$1 = cljs.core.next(seq49280);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49281,seq49280__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49358 = arguments.length;
var i__4865__auto___49359 = (0);
while(true){
if((i__4865__auto___49359 < len__4864__auto___49358)){
args__4870__auto__.push((arguments[i__4865__auto___49359]));

var G__49360 = (i__4865__auto___49359 + (1));
i__4865__auto___49359 = G__49360;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq49282){
var G__49283 = cljs.core.first(seq49282);
var seq49282__$1 = cljs.core.next(seq49282);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49283,seq49282__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49361 = arguments.length;
var i__4865__auto___49362 = (0);
while(true){
if((i__4865__auto___49362 < len__4864__auto___49361)){
args__4870__auto__.push((arguments[i__4865__auto___49362]));

var G__49363 = (i__4865__auto___49362 + (1));
i__4865__auto___49362 = G__49363;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq49284){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49284));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49364 = arguments.length;
var i__4865__auto___49365 = (0);
while(true){
if((i__4865__auto___49365 < len__4864__auto___49364)){
args__4870__auto__.push((arguments[i__4865__auto___49365]));

var G__49366 = (i__4865__auto___49365 + (1));
i__4865__auto___49365 = G__49366;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq49285){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49285));
}));


//# sourceMappingURL=markdown.core.js.map
