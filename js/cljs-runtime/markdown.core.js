goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__39800){
var map__39801 = p__39800;
var map__39801__$1 = cljs.core.__destructure_map(map__39801);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39801__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39801__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39801__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__39802 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__39803 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__39803);

try{var vec__39804 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39812,transformer){
var vec__39813 = p__39812;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(1),null);
var G__39816 = text;
var G__39817 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__39816,G__39817) : transformer.call(null,G__39816,G__39817));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39804,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39804,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__39802);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39892 = arguments.length;
var i__5770__auto___39893 = (0);
while(true){
if((i__5770__auto___39893 < len__5769__auto___39892)){
args__5775__auto__.push((arguments[i__5770__auto___39893]));

var G__39894 = (i__5770__auto___39893 + (1));
i__5770__auto___39893 = G__39894;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq39826){
var G__39827 = cljs.core.first(seq39826);
var seq39826__$1 = cljs.core.next(seq39826);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39827,seq39826__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__39829_39895 = cljs.core.seq(lines);
var chunk__39830_39896 = null;
var count__39831_39897 = (0);
var i__39832_39898 = (0);
while(true){
if((i__39832_39898 < count__39831_39897)){
var line_39899 = chunk__39830_39896.cljs$core$IIndexed$_nth$arity$2(null,i__39832_39898);
markdown.links.parse_reference_link(line_39899,references);


var G__39900 = seq__39829_39895;
var G__39901 = chunk__39830_39896;
var G__39902 = count__39831_39897;
var G__39903 = (i__39832_39898 + (1));
seq__39829_39895 = G__39900;
chunk__39830_39896 = G__39901;
count__39831_39897 = G__39902;
i__39832_39898 = G__39903;
continue;
} else {
var temp__5804__auto___39904 = cljs.core.seq(seq__39829_39895);
if(temp__5804__auto___39904){
var seq__39829_39905__$1 = temp__5804__auto___39904;
if(cljs.core.chunked_seq_QMARK_(seq__39829_39905__$1)){
var c__5568__auto___39906 = cljs.core.chunk_first(seq__39829_39905__$1);
var G__39907 = cljs.core.chunk_rest(seq__39829_39905__$1);
var G__39908 = c__5568__auto___39906;
var G__39909 = cljs.core.count(c__5568__auto___39906);
var G__39910 = (0);
seq__39829_39895 = G__39907;
chunk__39830_39896 = G__39908;
count__39831_39897 = G__39909;
i__39832_39898 = G__39910;
continue;
} else {
var line_39911 = cljs.core.first(seq__39829_39905__$1);
markdown.links.parse_reference_link(line_39911,references);


var G__39912 = cljs.core.next(seq__39829_39905__$1);
var G__39913 = null;
var G__39914 = (0);
var G__39915 = (0);
seq__39829_39895 = G__39912;
chunk__39830_39896 = G__39913;
count__39831_39897 = G__39914;
i__39832_39898 = G__39915;
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
var seq__39835_39916 = cljs.core.seq(lines);
var chunk__39836_39917 = null;
var count__39837_39918 = (0);
var i__39838_39919 = (0);
while(true){
if((i__39838_39919 < count__39837_39918)){
var line_39920 = chunk__39836_39917.cljs$core$IIndexed$_nth$arity$2(null,i__39838_39919);
markdown.links.parse_footnote_link(line_39920,footnotes);


var G__39921 = seq__39835_39916;
var G__39922 = chunk__39836_39917;
var G__39923 = count__39837_39918;
var G__39924 = (i__39838_39919 + (1));
seq__39835_39916 = G__39921;
chunk__39836_39917 = G__39922;
count__39837_39918 = G__39923;
i__39838_39919 = G__39924;
continue;
} else {
var temp__5804__auto___39925 = cljs.core.seq(seq__39835_39916);
if(temp__5804__auto___39925){
var seq__39835_39926__$1 = temp__5804__auto___39925;
if(cljs.core.chunked_seq_QMARK_(seq__39835_39926__$1)){
var c__5568__auto___39927 = cljs.core.chunk_first(seq__39835_39926__$1);
var G__39928 = cljs.core.chunk_rest(seq__39835_39926__$1);
var G__39929 = c__5568__auto___39927;
var G__39930 = cljs.core.count(c__5568__auto___39927);
var G__39931 = (0);
seq__39835_39916 = G__39928;
chunk__39836_39917 = G__39929;
count__39837_39918 = G__39930;
i__39838_39919 = G__39931;
continue;
} else {
var line_39932 = cljs.core.first(seq__39835_39926__$1);
markdown.links.parse_footnote_link(line_39932,footnotes);


var G__39933 = cljs.core.next(seq__39835_39926__$1);
var G__39934 = null;
var G__39935 = (0);
var G__39936 = (0);
seq__39835_39916 = G__39933;
chunk__39836_39917 = G__39934;
count__39837_39918 = G__39935;
i__39838_39919 = G__39936;
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
var vec__39846 = cljs.core.split_with((function (p1__39842_SHARP_){
return cljs.core.not_empty(p1__39842_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39846,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39846,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__39851 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__39852 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__39853 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__39854 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__39853);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__39854);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__39855 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39855,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39855,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__39861_39938 = lines__$1;
var vec__39862_39939 = G__39861_39938;
var seq__39863_39940 = cljs.core.seq(vec__39862_39939);
var first__39864_39941 = cljs.core.first(seq__39863_39940);
var seq__39863_39942__$1 = cljs.core.next(seq__39863_39940);
var line_39943 = first__39864_39941;
var more_39944 = seq__39863_39942__$1;
var state_39945 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__39861_39948__$1 = G__39861_39938;
var state_39949__$1 = state_39945;
while(true){
var vec__39872_39950 = G__39861_39948__$1;
var seq__39873_39952 = cljs.core.seq(vec__39872_39950);
var first__39874_39953 = cljs.core.first(seq__39873_39952);
var seq__39873_39954__$1 = cljs.core.next(seq__39873_39952);
var line_39955__$1 = first__39874_39953;
var more_39956__$1 = seq__39873_39954__$1;
var state_39957__$2 = state_39949__$1;
var line_39958__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_39957__$2))?"":line_39955__$1);
var state_39959__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39957__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39957__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_39957__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_39957__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_39957__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_39956__$1))){
var G__39960 = more_39956__$1;
var G__39961 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_39958__$2,cljs.core.first(more_39956__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_39959__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_39958__$2.trim()));
G__39861_39948__$1 = G__39960;
state_39949__$1 = G__39961;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_39959__$3))),line_39958__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_39959__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__39852);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__39851);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
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

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq39879){
var G__39880 = cljs.core.first(seq39879);
var seq39879__$1 = cljs.core.next(seq39879);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39880,seq39879__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
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

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq39884){
var G__39885 = cljs.core.first(seq39884);
var seq39884__$1 = cljs.core.next(seq39884);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39885,seq39884__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39971 = arguments.length;
var i__5770__auto___39972 = (0);
while(true){
if((i__5770__auto___39972 < len__5769__auto___39971)){
args__5775__auto__.push((arguments[i__5770__auto___39972]));

var G__39973 = (i__5770__auto___39972 + (1));
i__5770__auto___39972 = G__39973;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq39889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39889));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39975 = arguments.length;
var i__5770__auto___39976 = (0);
while(true){
if((i__5770__auto___39976 < len__5769__auto___39975)){
args__5775__auto__.push((arguments[i__5770__auto___39976]));

var G__39977 = (i__5770__auto___39976 + (1));
i__5770__auto___39976 = G__39977;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq39890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39890));
}));


//# sourceMappingURL=markdown.core.js.map
