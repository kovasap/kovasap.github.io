goog.provide('sablono.util');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

var sablono$util$ToString$to_str$dyn_39765 = (function (x){
var x__5393__auto__ = (((x == null))?null:x);
var m__5394__auto__ = (sablono.util.to_str[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5394__auto__.call(null,x));
} else {
var m__5392__auto__ = (sablono.util.to_str["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5392__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
});
/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if((((!((x == null)))) && ((!((x.sablono$util$ToString$to_str$arity$1 == null)))))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
return sablono$util$ToString$to_str$dyn_39765(x);
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

var sablono$util$ToURI$to_uri$dyn_39766 = (function (x){
var x__5393__auto__ = (((x == null))?null:x);
var m__5394__auto__ = (sablono.util.to_uri[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5394__auto__.call(null,x));
} else {
var m__5392__auto__ = (sablono.util.to_uri["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5392__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
});
/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if((((!((x == null)))) && ((!((x.sablono$util$ToURI$to_uri$arity$1 == null)))))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
return sablono$util$ToURI$to_uri$dyn_39766(x);
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39767 = arguments.length;
var i__5770__auto___39768 = (0);
while(true){
if((i__5770__auto___39768 < len__5769__auto___39767)){
args__5775__auto__.push((arguments[i__5770__auto___39768]));

var G__39769 = (i__5770__auto___39768 + (1));
i__5770__auto___39768 = G__39769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
}));

(sablono.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.util.as_str.cljs$lang$applyTo = (function (seq39745){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39745));
}));

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (((typeof k === 'string') || ((k instanceof cljs.core.Symbol)))))){
var vec__39748 = cljs.core.name(k).split("-");
var seq__39749 = cljs.core.seq(vec__39748);
var first__39750 = cljs.core.first(seq__39749);
var seq__39749__$1 = cljs.core.next(seq__39749);
var first_word = first__39750;
var words = seq__39749__$1;
if(((cljs.core.empty_QMARK_(words)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__39752){
var vec__39753 = p__39752;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39753,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.util.camel_case(k),v], null);
})),m);
var G__39756 = m__$1;
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39756,new cljs.core.Keyword(null,"style","style",-496642736),sablono.util.camel_case_keys);
} else {
return G__39756;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq(x);
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),classes));
});
(cljs.core.Keyword.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
}));

(goog.Uri.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__5045__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath()))));
}
})())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1);
} else {
var base = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_);
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(((base).length) - (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
return [base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
}
}
}));

(sablono.util.ToString["null"] = true);

(sablono.util.to_str["null"] = (function (_){
return "";
}));

(sablono.util.ToString["number"] = true);

(sablono.util.to_str["number"] = (function (x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}));

(sablono.util.ToString["_"] = true);

(sablono.util.to_str["_"] = (function (x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}));
(goog.Uri.prototype.sablono$util$ToURI$ = cljs.core.PROTOCOL_SENTINEL);

(goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(sablono.util.ToURI["_"] = true);

(sablono.util.to_uri["_"] = (function (x){
return (new goog.Uri(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}));

//# sourceMappingURL=sablono.util.js.map
