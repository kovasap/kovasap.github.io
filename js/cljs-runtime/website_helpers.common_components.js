goog.provide('website_helpers.common_components');
website_helpers.common_components.sync_url_params_BANG_ = (function website_helpers$common_components$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__61366 = cljs.core.seq(vars);
var chunk__61367 = null;
var count__61368 = (0);
var i__61369 = (0);
while(true){
if((i__61369 < count__61368)){
var vec__61376 = chunk__61367.cljs$core$IIndexed$_nth$arity$2(null,i__61369);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61376,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61376,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__61386 = seq__61366;
var G__61387 = chunk__61367;
var G__61388 = count__61368;
var G__61389 = (i__61369 + (1));
seq__61366 = G__61386;
chunk__61367 = G__61387;
count__61368 = G__61388;
i__61369 = G__61389;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61366);
if(temp__5753__auto__){
var seq__61366__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61366__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61366__$1);
var G__61390 = cljs.core.chunk_rest(seq__61366__$1);
var G__61391 = c__4679__auto__;
var G__61392 = cljs.core.count(c__4679__auto__);
var G__61393 = (0);
seq__61366 = G__61390;
chunk__61367 = G__61391;
count__61368 = G__61392;
i__61369 = G__61393;
continue;
} else {
var vec__61379 = cljs.core.first(seq__61366__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61379,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61379,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__61394 = cljs.core.next(seq__61366__$1);
var G__61395 = null;
var G__61396 = (0);
var G__61397 = (0);
seq__61366 = G__61394;
chunk__61367 = G__61395;
count__61368 = G__61396;
i__61369 = G__61397;
continue;
}
} else {
return null;
}
}
break;
}
});
website_helpers.common_components.dropdown_check_list = (function website_helpers$common_components$dropdown_check_list(vars,title){
var opened = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__4652__auto__ = (function website_helpers$common_components$dropdown_check_list_$_iter__61382(s__61383){
return (new cljs.core.LazySeq(null,(function (){
var s__61383__$1 = s__61383;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61383__$1);
if(temp__5753__auto__){
var s__61383__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61383__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__61383__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__61385 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__61384 = (0);
while(true){
if((i__61384 < size__4651__auto__)){
var var$ = cljs.core._nth(c__4650__auto__,i__61384);
cljs.core.chunk_append(b__61385,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__61384,var$,c__4650__auto__,size__4651__auto__,b__61385,s__61383__$2,temp__5753__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(i__61384,var$,c__4650__auto__,size__4651__auto__,b__61385,s__61383__$2,temp__5753__auto__,opened))
], null)], null),var$], null));

var G__61404 = (i__61384 + (1));
i__61384 = G__61404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61385),website_helpers$common_components$dropdown_check_list_$_iter__61382(cljs.core.chunk_rest(s__61383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61385),null);
}
} else {
var var$ = cljs.core.first(s__61383__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__61383__$2,temp__5753__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(var$,s__61383__$2,temp__5753__auto__,opened))
], null)], null),var$], null),website_helpers$common_components$dropdown_check_list_$_iter__61382(cljs.core.rest(s__61383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(vars))));
})())], null);
});
});

//# sourceMappingURL=website_helpers.common_components.js.map