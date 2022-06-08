goog.provide('website_helpers.utils');
/**
 * If no vars are selected, all are!
 */
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
if(cljs.core.every_QMARK_((function (p1__65744_SHARP_){
return cljs.core.not(p1__65744_SHARP_);
}),cljs.core.vals(selections))){
return cljs.core.set(cljs.core.keys(selections));
} else {
return cljs.core.set((function (){var iter__4652__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__65745(s__65746){
return (new cljs.core.LazySeq(null,(function (){
var s__65746__$1 = s__65746;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65746__$1);
if(temp__5753__auto__){
var s__65746__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65746__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65746__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65748 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65747 = (0);
while(true){
if((i__65747 < size__4651__auto__)){
var vec__65749 = cljs.core._nth(c__4650__auto__,i__65747);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65749,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65749,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__65748,var$);

var G__65760 = (i__65747 + (1));
i__65747 = G__65760;
continue;
} else {
var G__65761 = (i__65747 + (1));
i__65747 = G__65761;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65748),website_helpers$utils$get_selected_vars_$_iter__65745(cljs.core.chunk_rest(s__65746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65748),null);
}
} else {
var vec__65752 = cljs.core.first(s__65746__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65752,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65752,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__65745(cljs.core.rest(s__65746__$2)));
} else {
var G__65762 = cljs.core.rest(s__65746__$2);
s__65746__$1 = G__65762;
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
return iter__4652__auto__(selections);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65755_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__65755_SHARP_,/=/);
}),param_strs));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars){
var url_params = website_helpers.utils.parse_params();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__65756(s__65757){
return (new cljs.core.LazySeq(null,(function (){
var s__65757__$1 = s__65757;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65757__$1);
if(temp__5753__auto__){
var s__65757__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65757__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65757__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65759 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65758 = (0);
while(true){
if((i__65758 < size__4651__auto__)){
var var$ = cljs.core._nth(c__4650__auto__,i__65758);
cljs.core.chunk_append(b__65759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(url_params,var$)], null));

var G__65763 = (i__65758 + (1));
i__65758 = G__65763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65759),website_helpers$utils$get_url_param_selections_$_iter__65756(cljs.core.chunk_rest(s__65757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65759),null);
}
} else {
var var$ = cljs.core.first(s__65757__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(url_params,var$)], null),website_helpers$utils$get_url_param_selections_$_iter__65756(cljs.core.rest(s__65757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(vars);
})());
});

//# sourceMappingURL=website_helpers.utils.js.map
