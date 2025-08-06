goog.provide('website_helpers.common_components');
website_helpers.common_components.sync_url_params_BANG_ = (function website_helpers$common_components$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__26978 = cljs.core.seq(vars);
var chunk__26979 = null;
var count__26980 = (0);
var i__26981 = (0);
while(true){
if((i__26981 < count__26980)){
var vec__27006 = chunk__26979.cljs$core$IIndexed$_nth$arity$2(null,i__26981);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__27049 = seq__26978;
var G__27050 = chunk__26979;
var G__27051 = count__26980;
var G__27052 = (i__26981 + (1));
seq__26978 = G__27049;
chunk__26979 = G__27050;
count__26980 = G__27051;
i__26981 = G__27052;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26978);
if(temp__5804__auto__){
var seq__26978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26978__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26978__$1);
var G__27053 = cljs.core.chunk_rest(seq__26978__$1);
var G__27054 = c__5568__auto__;
var G__27055 = cljs.core.count(c__5568__auto__);
var G__27056 = (0);
seq__26978 = G__27053;
chunk__26979 = G__27054;
count__26980 = G__27055;
i__26981 = G__27056;
continue;
} else {
var vec__27018 = cljs.core.first(seq__26978__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__27057 = cljs.core.next(seq__26978__$1);
var G__27058 = null;
var G__27059 = (0);
var G__27060 = (0);
seq__26978 = G__27057;
chunk__26979 = G__27058;
count__26980 = G__27059;
i__26981 = G__27060;
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px"], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$common_components$dropdown_check_list_$_iter__27026(s__27027){
return (new cljs.core.LazySeq(null,(function (){
var s__27027__$1 = s__27027;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27027__$1);
if(temp__5804__auto__){
var s__27027__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27027__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27027__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27029 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27028 = (0);
while(true){
if((i__27028 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__27028);
cljs.core.chunk_append(b__27029,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27028,var$,c__5521__auto__,size__5522__auto__,b__27029,s__27027__$2,temp__5804__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(i__27028,var$,c__5521__auto__,size__5522__auto__,b__27029,s__27027__$2,temp__5804__auto__,opened))
], null)], null),var$], null));

var G__27066 = (i__27028 + (1));
i__27028 = G__27066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27029),website_helpers$common_components$dropdown_check_list_$_iter__27026(cljs.core.chunk_rest(s__27027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27029),null);
}
} else {
var var$ = cljs.core.first(s__27027__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__27027__$2,temp__5804__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(var$,s__27027__$2,temp__5804__auto__,opened))
], null)], null),var$], null),website_helpers$common_components$dropdown_check_list_$_iter__27026(cljs.core.rest(s__27027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(vars))));
})())], null);
});
});

//# sourceMappingURL=website_helpers.common_components.js.map
