goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__39818){
var map__39819 = p__39818;
var map__39819__$1 = cljs.core.__destructure_map(map__39819);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__39823 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__39824 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__39824);

try{var vec__39825 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39828,transformer){
var vec__39829 = p__39828;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39829,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39829,(1),null);
var G__39832 = text;
var G__39833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__39832,G__39833) : transformer.call(null,G__39832,G__39833));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39825,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39825,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__39823);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39888 = arguments.length;
var i__5770__auto___39889 = (0);
while(true){
if((i__5770__auto___39889 < len__5769__auto___39888)){
args__5775__auto__.push((arguments[i__5770__auto___39889]));

var G__39890 = (i__5770__auto___39889 + (1));
i__5770__auto___39889 = G__39890;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq39834){
var G__39835 = cljs.core.first(seq39834);
var seq39834__$1 = cljs.core.next(seq39834);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39835,seq39834__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__39836_39891 = cljs.core.seq(lines);
var chunk__39837_39892 = null;
var count__39838_39893 = (0);
var i__39839_39894 = (0);
while(true){
if((i__39839_39894 < count__39838_39893)){
var line_39899 = chunk__39837_39892.cljs$core$IIndexed$_nth$arity$2(null,i__39839_39894);
markdown.links.parse_reference_link(line_39899,references);


var G__39900 = seq__39836_39891;
var G__39901 = chunk__39837_39892;
var G__39902 = count__39838_39893;
var G__39903 = (i__39839_39894 + (1));
seq__39836_39891 = G__39900;
chunk__39837_39892 = G__39901;
count__39838_39893 = G__39902;
i__39839_39894 = G__39903;
continue;
} else {
var temp__5823__auto___39904 = cljs.core.seq(seq__39836_39891);
if(temp__5823__auto___39904){
var seq__39836_39905__$1 = temp__5823__auto___39904;
if(cljs.core.chunked_seq_QMARK_(seq__39836_39905__$1)){
var c__5568__auto___39906 = cljs.core.chunk_first(seq__39836_39905__$1);
var G__39907 = cljs.core.chunk_rest(seq__39836_39905__$1);
var G__39908 = c__5568__auto___39906;
var G__39909 = cljs.core.count(c__5568__auto___39906);
var G__39910 = (0);
seq__39836_39891 = G__39907;
chunk__39837_39892 = G__39908;
count__39838_39893 = G__39909;
i__39839_39894 = G__39910;
continue;
} else {
var line_39911 = cljs.core.first(seq__39836_39905__$1);
markdown.links.parse_reference_link(line_39911,references);


var G__39912 = cljs.core.next(seq__39836_39905__$1);
var G__39913 = null;
var G__39914 = (0);
var G__39915 = (0);
seq__39836_39891 = G__39912;
chunk__39837_39892 = G__39913;
count__39838_39893 = G__39914;
i__39839_39894 = G__39915;
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
var seq__39840_39919 = cljs.core.seq(lines);
var chunk__39841_39920 = null;
var count__39842_39921 = (0);
var i__39843_39922 = (0);
while(true){
if((i__39843_39922 < count__39842_39921)){
var line_39927 = chunk__39841_39920.cljs$core$IIndexed$_nth$arity$2(null,i__39843_39922);
markdown.links.parse_footnote_link(line_39927,footnotes);


var G__39928 = seq__39840_39919;
var G__39929 = chunk__39841_39920;
var G__39930 = count__39842_39921;
var G__39931 = (i__39843_39922 + (1));
seq__39840_39919 = G__39928;
chunk__39841_39920 = G__39929;
count__39842_39921 = G__39930;
i__39843_39922 = G__39931;
continue;
} else {
var temp__5823__auto___39932 = cljs.core.seq(seq__39840_39919);
if(temp__5823__auto___39932){
var seq__39840_39933__$1 = temp__5823__auto___39932;
if(cljs.core.chunked_seq_QMARK_(seq__39840_39933__$1)){
var c__5568__auto___39934 = cljs.core.chunk_first(seq__39840_39933__$1);
var G__39935 = cljs.core.chunk_rest(seq__39840_39933__$1);
var G__39936 = c__5568__auto___39934;
var G__39937 = cljs.core.count(c__5568__auto___39934);
var G__39938 = (0);
seq__39840_39919 = G__39935;
chunk__39841_39920 = G__39936;
count__39842_39921 = G__39937;
i__39843_39922 = G__39938;
continue;
} else {
var line_39942 = cljs.core.first(seq__39840_39933__$1);
markdown.links.parse_footnote_link(line_39942,footnotes);


var G__39943 = cljs.core.next(seq__39840_39933__$1);
var G__39944 = null;
var G__39945 = (0);
var G__39946 = (0);
seq__39840_39919 = G__39943;
chunk__39841_39920 = G__39944;
count__39842_39921 = G__39945;
i__39843_39922 = G__39946;
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
var vec__39846 = cljs.core.split_with((function (p1__39845_SHARP_){
return cljs.core.not_empty(p1__39845_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39846,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39846,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__39849 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__39850 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__39851 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__39852 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__39851);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__39852);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__39853 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39853,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39853,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__39863_39952 = lines__$1;
var vec__39864_39953 = G__39863_39952;
var seq__39865_39954 = cljs.core.seq(vec__39864_39953);
var first__39866_39955 = cljs.core.first(seq__39865_39954);
var seq__39865_39956__$1 = cljs.core.next(seq__39865_39954);
var line_39957 = first__39866_39955;
var more_39958 = seq__39865_39956__$1;
var state_39959 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__39863_39964__$1 = G__39863_39952;
var state_39965__$1 = state_39959;
while(true){
var vec__39872_39966 = G__39863_39964__$1;
var seq__39873_39967 = cljs.core.seq(vec__39872_39966);
var first__39874_39968 = cljs.core.first(seq__39873_39967);
var seq__39873_39969__$1 = cljs.core.next(seq__39873_39967);
var line_39970__$1 = first__39874_39968;
var more_39971__$1 = seq__39873_39969__$1;
var state_39972__$2 = state_39965__$1;
var line_39973__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_39972__$2))?"":line_39970__$1);
var state_39974__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39972__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39972__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_39972__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_39972__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_39972__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_39971__$1))){
var G__39978 = more_39971__$1;
var G__39979 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_39973__$2,cljs.core.first(more_39971__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_39974__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_39973__$2.trim()));
G__39863_39964__$1 = G__39978;
state_39965__$1 = G__39979;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_39974__$3))),line_39973__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_39974__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__39850);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__39849);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39982 = arguments.length;
var i__5770__auto___39987 = (0);
while(true){
if((i__5770__auto___39987 < len__5769__auto___39982)){
args__5775__auto__.push((arguments[i__5770__auto___39987]));

var G__39988 = (i__5770__auto___39987 + (1));
i__5770__auto___39987 = G__39988;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq39878){
var G__39879 = cljs.core.first(seq39878);
var seq39878__$1 = cljs.core.next(seq39878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39879,seq39878__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39999 = arguments.length;
var i__5770__auto___40000 = (0);
while(true){
if((i__5770__auto___40000 < len__5769__auto___39999)){
args__5775__auto__.push((arguments[i__5770__auto___40000]));

var G__40001 = (i__5770__auto___40000 + (1));
i__5770__auto___40000 = G__40001;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq39880){
var G__39882 = cljs.core.first(seq39880);
var seq39880__$1 = cljs.core.next(seq39880);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39882,seq39880__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40002 = arguments.length;
var i__5770__auto___40003 = (0);
while(true){
if((i__5770__auto___40003 < len__5769__auto___40002)){
args__5775__auto__.push((arguments[i__5770__auto___40003]));

var G__40004 = (i__5770__auto___40003 + (1));
i__5770__auto___40003 = G__40004;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq39883){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39883));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40005 = arguments.length;
var i__5770__auto___40006 = (0);
while(true){
if((i__5770__auto___40006 < len__5769__auto___40005)){
args__5775__auto__.push((arguments[i__5770__auto___40006]));

var G__40007 = (i__5770__auto___40006 + (1));
i__5770__auto___40006 = G__40007;
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
