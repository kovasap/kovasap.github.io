goog.provide('website_helpers.utils');
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__47554(s__47555){
return (new cljs.core.LazySeq(null,(function (){
var s__47555__$1 = s__47555;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47555__$1);
if(temp__5804__auto__){
var s__47555__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47555__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47555__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47557 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47556 = (0);
while(true){
if((i__47556 < size__5522__auto__)){
var vec__47558 = cljs.core._nth(c__5521__auto__,i__47556);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47558,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47558,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__47557,var$);

var G__47579 = (i__47556 + (1));
i__47556 = G__47579;
continue;
} else {
var G__47580 = (i__47556 + (1));
i__47556 = G__47580;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47557),website_helpers$utils$get_selected_vars_$_iter__47554(cljs.core.chunk_rest(s__47555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47557),null);
}
} else {
var vec__47561 = cljs.core.first(s__47555__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47561,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47561,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__47554(cljs.core.rest(s__47555__$2)));
} else {
var G__47581 = cljs.core.rest(s__47555__$2);
s__47555__$1 = G__47581;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$parse_params_$_iter__47565(s__47566){
return (new cljs.core.LazySeq(null,(function (){
var s__47566__$1 = s__47566;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47566__$1);
if(temp__5804__auto__){
var s__47566__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47566__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47566__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47568 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47567 = (0);
while(true){
if((i__47567 < size__5522__auto__)){
var vec__47569 = cljs.core._nth(c__5521__auto__,i__47567);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47569,(1),null);
cljs.core.chunk_append(b__47568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null));

var G__47582 = (i__47567 + (1));
i__47567 = G__47582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47568),website_helpers$utils$parse_params_$_iter__47565(cljs.core.chunk_rest(s__47566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47568),null);
}
} else {
var vec__47572 = cljs.core.first(s__47566__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47572,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null),website_helpers$utils$parse_params_$_iter__47565(cljs.core.rest(s__47566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47564_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47564_SHARP_,/=/);
}),param_strs));
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__47575(s__47576){
return (new cljs.core.LazySeq(null,(function (){
var s__47576__$1 = s__47576;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47576__$1);
if(temp__5804__auto__){
var s__47576__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47576__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47576__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47578 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47577 = (0);
while(true){
if((i__47577 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__47577);
cljs.core.chunk_append(b__47578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__47583 = (i__47577 + (1));
i__47577 = G__47583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47578),website_helpers$utils$get_url_param_selections_$_iter__47575(cljs.core.chunk_rest(s__47576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47578),null);
}
} else {
var var$ = cljs.core.first(s__47576__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__47575(cljs.core.rest(s__47576__$2)));
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
