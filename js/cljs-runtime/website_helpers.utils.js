goog.provide('website_helpers.utils');
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__41787(s__41788){
return (new cljs.core.LazySeq(null,(function (){
var s__41788__$1 = s__41788;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41788__$1);
if(temp__5823__auto__){
var s__41788__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41788__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41788__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41790 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41789 = (0);
while(true){
if((i__41789 < size__5522__auto__)){
var vec__41794 = cljs.core._nth(c__5521__auto__,i__41789);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41794,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41794,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__41790,var$);

var G__41837 = (i__41789 + (1));
i__41789 = G__41837;
continue;
} else {
var G__41838 = (i__41789 + (1));
i__41789 = G__41838;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41790),website_helpers$utils$get_selected_vars_$_iter__41787(cljs.core.chunk_rest(s__41788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41790),null);
}
} else {
var vec__41797 = cljs.core.first(s__41788__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41797,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41797,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__41787(cljs.core.rest(s__41788__$2)));
} else {
var G__41839 = cljs.core.rest(s__41788__$2);
s__41788__$1 = G__41839;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$parse_params_$_iter__41805(s__41806){
return (new cljs.core.LazySeq(null,(function (){
var s__41806__$1 = s__41806;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41806__$1);
if(temp__5823__auto__){
var s__41806__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41806__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41806__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41808 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41807 = (0);
while(true){
if((i__41807 < size__5522__auto__)){
var vec__41811 = cljs.core._nth(c__5521__auto__,i__41807);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41811,(1),null);
cljs.core.chunk_append(b__41808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null));

var G__41844 = (i__41807 + (1));
i__41807 = G__41844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41808),website_helpers$utils$parse_params_$_iter__41805(cljs.core.chunk_rest(s__41806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41808),null);
}
} else {
var vec__41820 = cljs.core.first(s__41806__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null),website_helpers$utils$parse_params_$_iter__41805(cljs.core.rest(s__41806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41804_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__41804_SHARP_,/=/);
}),param_strs));
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__41824(s__41825){
return (new cljs.core.LazySeq(null,(function (){
var s__41825__$1 = s__41825;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41825__$1);
if(temp__5823__auto__){
var s__41825__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41825__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41825__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41827 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41826 = (0);
while(true){
if((i__41826 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__41826);
cljs.core.chunk_append(b__41827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__41850 = (i__41826 + (1));
i__41826 = G__41850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41827),website_helpers$utils$get_url_param_selections_$_iter__41824(cljs.core.chunk_rest(s__41825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41827),null);
}
} else {
var var$ = cljs.core.first(s__41825__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__41824(cljs.core.rest(s__41825__$2)));
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
