goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__39806){
var map__39807 = p__39806;
var map__39807__$1 = cljs.core.__destructure_map(map__39807);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__39811 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__39812 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__39812);

try{var vec__39813 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39816,transformer){
var vec__39817 = p__39816;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39817,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39817,(1),null);
var G__39820 = text;
var G__39821 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__39820,G__39821) : transformer.call(null,G__39820,G__39821));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__39811);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39891 = arguments.length;
var i__5770__auto___39892 = (0);
while(true){
if((i__5770__auto___39892 < len__5769__auto___39891)){
args__5775__auto__.push((arguments[i__5770__auto___39892]));

var G__39893 = (i__5770__auto___39892 + (1));
i__5770__auto___39892 = G__39893;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq39822){
var G__39823 = cljs.core.first(seq39822);
var seq39822__$1 = cljs.core.next(seq39822);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39823,seq39822__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__39824_39894 = cljs.core.seq(lines);
var chunk__39825_39895 = null;
var count__39826_39896 = (0);
var i__39827_39897 = (0);
while(true){
if((i__39827_39897 < count__39826_39896)){
var line_39898 = chunk__39825_39895.cljs$core$IIndexed$_nth$arity$2(null,i__39827_39897);
markdown.links.parse_reference_link(line_39898,references);


var G__39899 = seq__39824_39894;
var G__39900 = chunk__39825_39895;
var G__39901 = count__39826_39896;
var G__39902 = (i__39827_39897 + (1));
seq__39824_39894 = G__39899;
chunk__39825_39895 = G__39900;
count__39826_39896 = G__39901;
i__39827_39897 = G__39902;
continue;
} else {
var temp__5804__auto___39903 = cljs.core.seq(seq__39824_39894);
if(temp__5804__auto___39903){
var seq__39824_39904__$1 = temp__5804__auto___39903;
if(cljs.core.chunked_seq_QMARK_(seq__39824_39904__$1)){
var c__5568__auto___39905 = cljs.core.chunk_first(seq__39824_39904__$1);
var G__39906 = cljs.core.chunk_rest(seq__39824_39904__$1);
var G__39907 = c__5568__auto___39905;
var G__39908 = cljs.core.count(c__5568__auto___39905);
var G__39909 = (0);
seq__39824_39894 = G__39906;
chunk__39825_39895 = G__39907;
count__39826_39896 = G__39908;
i__39827_39897 = G__39909;
continue;
} else {
var line_39910 = cljs.core.first(seq__39824_39904__$1);
markdown.links.parse_reference_link(line_39910,references);


var G__39911 = cljs.core.next(seq__39824_39904__$1);
var G__39912 = null;
var G__39913 = (0);
var G__39914 = (0);
seq__39824_39894 = G__39911;
chunk__39825_39895 = G__39912;
count__39826_39896 = G__39913;
i__39827_39897 = G__39914;
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
var seq__39833_39915 = cljs.core.seq(lines);
var chunk__39834_39916 = null;
var count__39835_39917 = (0);
var i__39836_39918 = (0);
while(true){
if((i__39836_39918 < count__39835_39917)){
var line_39919 = chunk__39834_39916.cljs$core$IIndexed$_nth$arity$2(null,i__39836_39918);
markdown.links.parse_footnote_link(line_39919,footnotes);


var G__39920 = seq__39833_39915;
var G__39921 = chunk__39834_39916;
var G__39922 = count__39835_39917;
var G__39923 = (i__39836_39918 + (1));
seq__39833_39915 = G__39920;
chunk__39834_39916 = G__39921;
count__39835_39917 = G__39922;
i__39836_39918 = G__39923;
continue;
} else {
var temp__5804__auto___39924 = cljs.core.seq(seq__39833_39915);
if(temp__5804__auto___39924){
var seq__39833_39925__$1 = temp__5804__auto___39924;
if(cljs.core.chunked_seq_QMARK_(seq__39833_39925__$1)){
var c__5568__auto___39926 = cljs.core.chunk_first(seq__39833_39925__$1);
var G__39927 = cljs.core.chunk_rest(seq__39833_39925__$1);
var G__39928 = c__5568__auto___39926;
var G__39929 = cljs.core.count(c__5568__auto___39926);
var G__39930 = (0);
seq__39833_39915 = G__39927;
chunk__39834_39916 = G__39928;
count__39835_39917 = G__39929;
i__39836_39918 = G__39930;
continue;
} else {
var line_39931 = cljs.core.first(seq__39833_39925__$1);
markdown.links.parse_footnote_link(line_39931,footnotes);


var G__39932 = cljs.core.next(seq__39833_39925__$1);
var G__39933 = null;
var G__39934 = (0);
var G__39935 = (0);
seq__39833_39915 = G__39932;
chunk__39834_39916 = G__39933;
count__39835_39917 = G__39934;
i__39836_39918 = G__39935;
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
var vec__39839 = cljs.core.split_with((function (p1__39838_SHARP_){
return cljs.core.not_empty(p1__39838_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39839,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39839,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__39843 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__39844 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__39845 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__39846 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__39845);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__39846);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__39851 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39851,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39851,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__39857_39936 = lines__$1;
var vec__39859_39937 = G__39857_39936;
var seq__39860_39938 = cljs.core.seq(vec__39859_39937);
var first__39861_39939 = cljs.core.first(seq__39860_39938);
var seq__39860_39940__$1 = cljs.core.next(seq__39860_39938);
var line_39941 = first__39861_39939;
var more_39942 = seq__39860_39940__$1;
var state_39943 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__39857_39944__$1 = G__39857_39936;
var state_39945__$1 = state_39943;
while(true){
var vec__39871_39946 = G__39857_39944__$1;
var seq__39872_39947 = cljs.core.seq(vec__39871_39946);
var first__39873_39948 = cljs.core.first(seq__39872_39947);
var seq__39872_39949__$1 = cljs.core.next(seq__39872_39947);
var line_39950__$1 = first__39873_39948;
var more_39951__$1 = seq__39872_39949__$1;
var state_39952__$2 = state_39945__$1;
var line_39953__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_39952__$2))?"":line_39950__$1);
var state_39954__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39952__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39952__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_39952__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_39952__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_39952__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_39951__$1))){
var G__39956 = more_39951__$1;
var G__39957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_39953__$2,cljs.core.first(more_39951__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_39954__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_39953__$2.trim()));
G__39857_39944__$1 = G__39956;
state_39945__$1 = G__39957;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_39954__$3))),line_39953__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_39954__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__39844);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__39843);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39958 = arguments.length;
var i__5770__auto___39959 = (0);
while(true){
if((i__5770__auto___39959 < len__5769__auto___39958)){
args__5775__auto__.push((arguments[i__5770__auto___39959]));

var G__39960 = (i__5770__auto___39959 + (1));
i__5770__auto___39959 = G__39960;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq39874){
var G__39875 = cljs.core.first(seq39874);
var seq39874__$1 = cljs.core.next(seq39874);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39875,seq39874__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39961 = arguments.length;
var i__5770__auto___39962 = (0);
while(true){
if((i__5770__auto___39962 < len__5769__auto___39961)){
args__5775__auto__.push((arguments[i__5770__auto___39962]));

var G__39963 = (i__5770__auto___39962 + (1));
i__5770__auto___39962 = G__39963;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq39877){
var G__39878 = cljs.core.first(seq39877);
var seq39877__$1 = cljs.core.next(seq39877);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39878,seq39877__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39965 = arguments.length;
var i__5770__auto___39966 = (0);
while(true){
if((i__5770__auto___39966 < len__5769__auto___39965)){
args__5775__auto__.push((arguments[i__5770__auto___39966]));

var G__39967 = (i__5770__auto___39966 + (1));
i__5770__auto___39966 = G__39967;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq39886){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39886));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39968 = arguments.length;
var i__5770__auto___39969 = (0);
while(true){
if((i__5770__auto___39969 < len__5769__auto___39968)){
args__5775__auto__.push((arguments[i__5770__auto___39969]));

var G__39970 = (i__5770__auto___39969 + (1));
i__5770__auto___39969 = G__39970;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq39887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39887));
}));


//# sourceMappingURL=markdown.core.js.map
