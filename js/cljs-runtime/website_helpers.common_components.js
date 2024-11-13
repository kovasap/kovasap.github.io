goog.provide('website_helpers.common_components');
website_helpers.common_components.sync_url_params_BANG_ = (function website_helpers$common_components$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__49716 = cljs.core.seq(vars);
var chunk__49717 = null;
var count__49718 = (0);
var i__49719 = (0);
while(true){
if((i__49719 < count__49718)){
var vec__49726 = chunk__49717.cljs$core$IIndexed$_nth$arity$2(null,i__49719);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49726,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49726,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__49736 = seq__49716;
var G__49737 = chunk__49717;
var G__49738 = count__49718;
var G__49739 = (i__49719 + (1));
seq__49716 = G__49736;
chunk__49717 = G__49737;
count__49718 = G__49738;
i__49719 = G__49739;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49716);
if(temp__5804__auto__){
var seq__49716__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49716__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49716__$1);
var G__49740 = cljs.core.chunk_rest(seq__49716__$1);
var G__49741 = c__5568__auto__;
var G__49742 = cljs.core.count(c__5568__auto__);
var G__49743 = (0);
seq__49716 = G__49740;
chunk__49717 = G__49741;
count__49718 = G__49742;
i__49719 = G__49743;
continue;
} else {
var vec__49729 = cljs.core.first(seq__49716__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__49744 = cljs.core.next(seq__49716__$1);
var G__49745 = null;
var G__49746 = (0);
var G__49747 = (0);
seq__49716 = G__49744;
chunk__49717 = G__49745;
count__49718 = G__49746;
i__49719 = G__49747;
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
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$common_components$dropdown_check_list_$_iter__49732(s__49733){
return (new cljs.core.LazySeq(null,(function (){
var s__49733__$1 = s__49733;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49733__$1);
if(temp__5804__auto__){
var s__49733__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49733__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49733__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49735 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49734 = (0);
while(true){
if((i__49734 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__49734);
cljs.core.chunk_append(b__49735,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__49734,var$,c__5521__auto__,size__5522__auto__,b__49735,s__49733__$2,temp__5804__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(i__49734,var$,c__5521__auto__,size__5522__auto__,b__49735,s__49733__$2,temp__5804__auto__,opened))
], null)], null),var$], null));

var G__49748 = (i__49734 + (1));
i__49734 = G__49748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49735),website_helpers$common_components$dropdown_check_list_$_iter__49732(cljs.core.chunk_rest(s__49733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49735),null);
}
} else {
var var$ = cljs.core.first(s__49733__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__49733__$2,temp__5804__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(var$,s__49733__$2,temp__5804__auto__,opened))
], null)], null),var$], null),website_helpers$common_components$dropdown_check_list_$_iter__49732(cljs.core.rest(s__49733__$2)));
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
