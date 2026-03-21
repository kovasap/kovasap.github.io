goog.provide('website_helpers.utils');
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__53662(s__53663){
return (new cljs.core.LazySeq(null,(function (){
var s__53663__$1 = s__53663;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53663__$1);
if(temp__5825__auto__){
var s__53663__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53663__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53663__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53665 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53664 = (0);
while(true){
if((i__53664 < size__5522__auto__)){
var vec__53666 = cljs.core._nth(c__5521__auto__,i__53664);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53666,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53666,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__53665,var$);

var G__53687 = (i__53664 + (1));
i__53664 = G__53687;
continue;
} else {
var G__53688 = (i__53664 + (1));
i__53664 = G__53688;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53665),website_helpers$utils$get_selected_vars_$_iter__53662(cljs.core.chunk_rest(s__53663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53665),null);
}
} else {
var vec__53669 = cljs.core.first(s__53663__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53669,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53669,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__53662(cljs.core.rest(s__53663__$2)));
} else {
var G__53689 = cljs.core.rest(s__53663__$2);
s__53663__$1 = G__53689;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$parse_params_$_iter__53673(s__53674){
return (new cljs.core.LazySeq(null,(function (){
var s__53674__$1 = s__53674;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53674__$1);
if(temp__5825__auto__){
var s__53674__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53674__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53674__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53676 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53675 = (0);
while(true){
if((i__53675 < size__5522__auto__)){
var vec__53677 = cljs.core._nth(c__5521__auto__,i__53675);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53677,(1),null);
cljs.core.chunk_append(b__53676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null));

var G__53690 = (i__53675 + (1));
i__53675 = G__53690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53676),website_helpers$utils$parse_params_$_iter__53673(cljs.core.chunk_rest(s__53674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53676),null);
}
} else {
var vec__53680 = cljs.core.first(s__53674__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53680,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53680,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null),website_helpers$utils$parse_params_$_iter__53673(cljs.core.rest(s__53674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53672_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__53672_SHARP_,/=/);
}),param_strs));
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__53683(s__53684){
return (new cljs.core.LazySeq(null,(function (){
var s__53684__$1 = s__53684;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53684__$1);
if(temp__5825__auto__){
var s__53684__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53684__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53684__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53686 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53685 = (0);
while(true){
if((i__53685 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__53685);
cljs.core.chunk_append(b__53686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__53691 = (i__53685 + (1));
i__53685 = G__53691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53686),website_helpers$utils$get_url_param_selections_$_iter__53683(cljs.core.chunk_rest(s__53684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53686),null);
}
} else {
var var$ = cljs.core.first(s__53684__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__53683(cljs.core.rest(s__53684__$2)));
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
