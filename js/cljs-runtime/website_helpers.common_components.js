goog.provide('website_helpers.common_components');
website_helpers.common_components.sync_url_params_BANG_ = (function website_helpers$common_components$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__39639 = cljs.core.seq(vars);
var chunk__39640 = null;
var count__39641 = (0);
var i__39642 = (0);
while(true){
if((i__39642 < count__39641)){
var vec__39666 = chunk__39640.cljs$core$IIndexed$_nth$arity$2(null,i__39642);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39666,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39666,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__39701 = seq__39639;
var G__39702 = chunk__39640;
var G__39703 = count__39641;
var G__39704 = (i__39642 + (1));
seq__39639 = G__39701;
chunk__39640 = G__39702;
count__39641 = G__39703;
i__39642 = G__39704;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39639);
if(temp__5823__auto__){
var seq__39639__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39639__$1);
var G__39705 = cljs.core.chunk_rest(seq__39639__$1);
var G__39706 = c__5568__auto__;
var G__39707 = cljs.core.count(c__5568__auto__);
var G__39708 = (0);
seq__39639 = G__39705;
chunk__39640 = G__39706;
count__39641 = G__39707;
i__39642 = G__39708;
continue;
} else {
var vec__39673 = cljs.core.first(seq__39639__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__39718 = cljs.core.next(seq__39639__$1);
var G__39719 = null;
var G__39720 = (0);
var G__39721 = (0);
seq__39639 = G__39718;
chunk__39640 = G__39719;
count__39641 = G__39720;
i__39642 = G__39721;
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
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$common_components$dropdown_check_list_$_iter__39688(s__39689){
return (new cljs.core.LazySeq(null,(function (){
var s__39689__$1 = s__39689;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__39689__$1);
if(temp__5823__auto__){
var s__39689__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39689__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39689__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39691 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39690 = (0);
while(true){
if((i__39690 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__39690);
cljs.core.chunk_append(b__39691,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__39690,var$,c__5521__auto__,size__5522__auto__,b__39691,s__39689__$2,temp__5823__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(i__39690,var$,c__5521__auto__,size__5522__auto__,b__39691,s__39689__$2,temp__5823__auto__,opened))
], null)], null),var$], null));

var G__39722 = (i__39690 + (1));
i__39690 = G__39722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39691),website_helpers$common_components$dropdown_check_list_$_iter__39688(cljs.core.chunk_rest(s__39689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39691),null);
}
} else {
var var$ = cljs.core.first(s__39689__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__39689__$2,temp__5823__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));
});})(var$,s__39689__$2,temp__5823__auto__,opened))
], null)], null),var$], null),website_helpers$common_components$dropdown_check_list_$_iter__39688(cljs.core.rest(s__39689__$2)));
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
