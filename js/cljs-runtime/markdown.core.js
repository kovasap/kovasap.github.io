goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__27096){
var map__27097 = p__27096;
var map__27097__$1 = cljs.core.__destructure_map(map__27097);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__27098 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__27099 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__27099);

try{var vec__27107 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27113,transformer){
var vec__27114 = p__27113;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27114,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27114,(1),null);
var G__27117 = text;
var G__27118 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__27117,G__27118) : transformer.call(null,G__27117,G__27118));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__27098);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27213 = arguments.length;
var i__5770__auto___27214 = (0);
while(true){
if((i__5770__auto___27214 < len__5769__auto___27213)){
args__5775__auto__.push((arguments[i__5770__auto___27214]));

var G__27215 = (i__5770__auto___27214 + (1));
i__5770__auto___27214 = G__27215;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq27126){
var G__27127 = cljs.core.first(seq27126);
var seq27126__$1 = cljs.core.next(seq27126);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27127,seq27126__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__27140_27225 = cljs.core.seq(lines);
var chunk__27141_27226 = null;
var count__27142_27227 = (0);
var i__27143_27228 = (0);
while(true){
if((i__27143_27228 < count__27142_27227)){
var line_27229 = chunk__27141_27226.cljs$core$IIndexed$_nth$arity$2(null,i__27143_27228);
markdown.links.parse_reference_link(line_27229,references);


var G__27230 = seq__27140_27225;
var G__27231 = chunk__27141_27226;
var G__27232 = count__27142_27227;
var G__27233 = (i__27143_27228 + (1));
seq__27140_27225 = G__27230;
chunk__27141_27226 = G__27231;
count__27142_27227 = G__27232;
i__27143_27228 = G__27233;
continue;
} else {
var temp__5804__auto___27234 = cljs.core.seq(seq__27140_27225);
if(temp__5804__auto___27234){
var seq__27140_27235__$1 = temp__5804__auto___27234;
if(cljs.core.chunked_seq_QMARK_(seq__27140_27235__$1)){
var c__5568__auto___27236 = cljs.core.chunk_first(seq__27140_27235__$1);
var G__27238 = cljs.core.chunk_rest(seq__27140_27235__$1);
var G__27239 = c__5568__auto___27236;
var G__27240 = cljs.core.count(c__5568__auto___27236);
var G__27241 = (0);
seq__27140_27225 = G__27238;
chunk__27141_27226 = G__27239;
count__27142_27227 = G__27240;
i__27143_27228 = G__27241;
continue;
} else {
var line_27242 = cljs.core.first(seq__27140_27235__$1);
markdown.links.parse_reference_link(line_27242,references);


var G__27243 = cljs.core.next(seq__27140_27235__$1);
var G__27244 = null;
var G__27245 = (0);
var G__27246 = (0);
seq__27140_27225 = G__27243;
chunk__27141_27226 = G__27244;
count__27142_27227 = G__27245;
i__27143_27228 = G__27246;
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
var seq__27148_27248 = cljs.core.seq(lines);
var chunk__27149_27249 = null;
var count__27150_27250 = (0);
var i__27151_27251 = (0);
while(true){
if((i__27151_27251 < count__27150_27250)){
var line_27252 = chunk__27149_27249.cljs$core$IIndexed$_nth$arity$2(null,i__27151_27251);
markdown.links.parse_footnote_link(line_27252,footnotes);


var G__27256 = seq__27148_27248;
var G__27257 = chunk__27149_27249;
var G__27258 = count__27150_27250;
var G__27259 = (i__27151_27251 + (1));
seq__27148_27248 = G__27256;
chunk__27149_27249 = G__27257;
count__27150_27250 = G__27258;
i__27151_27251 = G__27259;
continue;
} else {
var temp__5804__auto___27260 = cljs.core.seq(seq__27148_27248);
if(temp__5804__auto___27260){
var seq__27148_27261__$1 = temp__5804__auto___27260;
if(cljs.core.chunked_seq_QMARK_(seq__27148_27261__$1)){
var c__5568__auto___27262 = cljs.core.chunk_first(seq__27148_27261__$1);
var G__27263 = cljs.core.chunk_rest(seq__27148_27261__$1);
var G__27264 = c__5568__auto___27262;
var G__27265 = cljs.core.count(c__5568__auto___27262);
var G__27266 = (0);
seq__27148_27248 = G__27263;
chunk__27149_27249 = G__27264;
count__27150_27250 = G__27265;
i__27151_27251 = G__27266;
continue;
} else {
var line_27267 = cljs.core.first(seq__27148_27261__$1);
markdown.links.parse_footnote_link(line_27267,footnotes);


var G__27268 = cljs.core.next(seq__27148_27261__$1);
var G__27269 = null;
var G__27270 = (0);
var G__27271 = (0);
seq__27148_27248 = G__27268;
chunk__27149_27249 = G__27269;
count__27150_27250 = G__27270;
i__27151_27251 = G__27271;
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
var vec__27160 = cljs.core.split_with((function (p1__27155_SHARP_){
return cljs.core.not_empty(p1__27155_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__27164 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__27165 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__27166 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__27167 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__27166);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__27167);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__27168 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27168,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27168,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__27174_27272 = lines__$1;
var vec__27175_27273 = G__27174_27272;
var seq__27176_27274 = cljs.core.seq(vec__27175_27273);
var first__27177_27275 = cljs.core.first(seq__27176_27274);
var seq__27176_27276__$1 = cljs.core.next(seq__27176_27274);
var line_27277 = first__27177_27275;
var more_27278 = seq__27176_27276__$1;
var state_27279 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__27174_27281__$1 = G__27174_27272;
var state_27282__$1 = state_27279;
while(true){
var vec__27183_27283 = G__27174_27281__$1;
var seq__27184_27284 = cljs.core.seq(vec__27183_27283);
var first__27185_27285 = cljs.core.first(seq__27184_27284);
var seq__27184_27286__$1 = cljs.core.next(seq__27184_27284);
var line_27287__$1 = first__27185_27285;
var more_27288__$1 = seq__27184_27286__$1;
var state_27289__$2 = state_27282__$1;
var line_27290__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_27289__$2))?"":line_27287__$1);
var state_27291__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_27289__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_27289__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_27289__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_27289__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_27289__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_27288__$1))){
var G__27292 = more_27288__$1;
var G__27293 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_27290__$2,cljs.core.first(more_27288__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_27291__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_27290__$2.trim()));
G__27174_27281__$1 = G__27292;
state_27282__$1 = G__27293;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_27291__$3))),line_27290__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_27291__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__27165);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__27164);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27296 = arguments.length;
var i__5770__auto___27297 = (0);
while(true){
if((i__5770__auto___27297 < len__5769__auto___27296)){
args__5775__auto__.push((arguments[i__5770__auto___27297]));

var G__27298 = (i__5770__auto___27297 + (1));
i__5770__auto___27297 = G__27298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq27197){
var G__27198 = cljs.core.first(seq27197);
var seq27197__$1 = cljs.core.next(seq27197);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27198,seq27197__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27300 = arguments.length;
var i__5770__auto___27301 = (0);
while(true){
if((i__5770__auto___27301 < len__5769__auto___27300)){
args__5775__auto__.push((arguments[i__5770__auto___27301]));

var G__27303 = (i__5770__auto___27301 + (1));
i__5770__auto___27301 = G__27303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq27202){
var G__27203 = cljs.core.first(seq27202);
var seq27202__$1 = cljs.core.next(seq27202);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27203,seq27202__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27304 = arguments.length;
var i__5770__auto___27305 = (0);
while(true){
if((i__5770__auto___27305 < len__5769__auto___27304)){
args__5775__auto__.push((arguments[i__5770__auto___27305]));

var G__27306 = (i__5770__auto___27305 + (1));
i__5770__auto___27305 = G__27306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq27208){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27208));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27307 = arguments.length;
var i__5770__auto___27308 = (0);
while(true){
if((i__5770__auto___27308 < len__5769__auto___27307)){
args__5775__auto__.push((arguments[i__5770__auto___27308]));

var G__27310 = (i__5770__auto___27308 + (1));
i__5770__auto___27308 = G__27310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq27209){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27209));
}));


//# sourceMappingURL=markdown.core.js.map
