goog.provide('website_helpers.utils');
/**
 * If no vars are selected, all are!
 */
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
if(cljs.core.every_QMARK_((function (p1__45909_SHARP_){
return cljs.core.not(p1__45909_SHARP_);
}),cljs.core.vals(selections))){
return cljs.core.set(cljs.core.keys(selections));
} else {
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__45910(s__45911){
return (new cljs.core.LazySeq(null,(function (){
var s__45911__$1 = s__45911;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45911__$1);
if(temp__5804__auto__){
var s__45911__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45911__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45911__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45913 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45912 = (0);
while(true){
if((i__45912 < size__5522__auto__)){
var vec__45914 = cljs.core._nth(c__5521__auto__,i__45912);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45914,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45914,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__45913,var$);

var G__45935 = (i__45912 + (1));
i__45912 = G__45935;
continue;
} else {
var G__45936 = (i__45912 + (1));
i__45912 = G__45936;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45913),website_helpers$utils$get_selected_vars_$_iter__45910(cljs.core.chunk_rest(s__45911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45913),null);
}
} else {
var vec__45917 = cljs.core.first(s__45911__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45917,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45917,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__45910(cljs.core.rest(s__45911__$2)));
} else {
var G__45937 = cljs.core.rest(s__45911__$2);
s__45911__$1 = G__45937;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(selections);
})());
}
});
website_helpers.utils.my_md__GT_hiccup = (function website_helpers$utils$my_md__GT_hiccup(string){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.rest(cljs.core.rest(cljs.core.last(markdown_to_hiccup.core.component(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1(string))))));
});
website_helpers.utils.my_md__GT_hiccup("[Slipways](https://slipways.net/)");
website_helpers.utils.my_md__GT_hiccup("This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).");
/**
 * Parse URL parameters into a hashmap
 */
website_helpers.utils.parse_params = (function website_helpers$utils$parse_params(){
var url = window.location;
var param_strs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),/\&/);
if(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$parse_params_$_iter__45921(s__45922){
return (new cljs.core.LazySeq(null,(function (){
var s__45922__$1 = s__45922;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45922__$1);
if(temp__5804__auto__){
var s__45922__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45922__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45922__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45924 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45923 = (0);
while(true){
if((i__45923 < size__5522__auto__)){
var vec__45925 = cljs.core._nth(c__5521__auto__,i__45923);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45925,(1),null);
cljs.core.chunk_append(b__45924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null));

var G__45938 = (i__45923 + (1));
i__45923 = G__45938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45924),website_helpers$utils$parse_params_$_iter__45921(cljs.core.chunk_rest(s__45922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45924),null);
}
} else {
var vec__45928 = cljs.core.first(s__45922__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45928,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null),website_helpers$utils$parse_params_$_iter__45921(cljs.core.rest(s__45922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45920_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__45920_SHARP_,/=/);
}),param_strs));
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__45931(s__45932){
return (new cljs.core.LazySeq(null,(function (){
var s__45932__$1 = s__45932;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45932__$1);
if(temp__5804__auto__){
var s__45932__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45932__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45932__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45934 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45933 = (0);
while(true){
if((i__45933 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__45933);
cljs.core.chunk_append(b__45934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__45939 = (i__45933 + (1));
i__45933 = G__45939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45934),website_helpers$utils$get_url_param_selections_$_iter__45931(cljs.core.chunk_rest(s__45932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45934),null);
}
} else {
var var$ = cljs.core.first(s__45932__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__45931(cljs.core.rest(s__45932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vars);
})());
});

//# sourceMappingURL=website_helpers.utils.js.map
