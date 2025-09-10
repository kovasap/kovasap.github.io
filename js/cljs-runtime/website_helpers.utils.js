goog.provide('website_helpers.utils');
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__29556(s__29557){
return (new cljs.core.LazySeq(null,(function (){
var s__29557__$1 = s__29557;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29557__$1);
if(temp__5804__auto__){
var s__29557__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29557__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29557__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29559 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29558 = (0);
while(true){
if((i__29558 < size__5522__auto__)){
var vec__29560 = cljs.core._nth(c__5521__auto__,i__29558);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__29559,var$);

var G__29616 = (i__29558 + (1));
i__29558 = G__29616;
continue;
} else {
var G__29617 = (i__29558 + (1));
i__29558 = G__29617;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29559),website_helpers$utils$get_selected_vars_$_iter__29556(cljs.core.chunk_rest(s__29557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29559),null);
}
} else {
var vec__29563 = cljs.core.first(s__29557__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29563,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29563,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__29556(cljs.core.rest(s__29557__$2)));
} else {
var G__29618 = cljs.core.rest(s__29557__$2);
s__29557__$1 = G__29618;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$parse_params_$_iter__29571(s__29572){
return (new cljs.core.LazySeq(null,(function (){
var s__29572__$1 = s__29572;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29572__$1);
if(temp__5804__auto__){
var s__29572__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29572__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29572__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29574 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29573 = (0);
while(true){
if((i__29573 < size__5522__auto__)){
var vec__29590 = cljs.core._nth(c__5521__auto__,i__29573);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29590,(1),null);
cljs.core.chunk_append(b__29574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null));

var G__29621 = (i__29573 + (1));
i__29573 = G__29621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29574),website_helpers$utils$parse_params_$_iter__29571(cljs.core.chunk_rest(s__29572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29574),null);
}
} else {
var vec__29594 = cljs.core.first(s__29572__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29594,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null),website_helpers$utils$parse_params_$_iter__29571(cljs.core.rest(s__29572__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29569_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29569_SHARP_,/=/);
}),param_strs));
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__29602(s__29603){
return (new cljs.core.LazySeq(null,(function (){
var s__29603__$1 = s__29603;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29603__$1);
if(temp__5804__auto__){
var s__29603__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29603__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29603__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29605 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29604 = (0);
while(true){
if((i__29604 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__29604);
cljs.core.chunk_append(b__29605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__29639 = (i__29604 + (1));
i__29604 = G__29639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29605),website_helpers$utils$get_url_param_selections_$_iter__29602(cljs.core.chunk_rest(s__29603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29605),null);
}
} else {
var var$ = cljs.core.first(s__29603__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__29602(cljs.core.rest(s__29603__$2)));
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
