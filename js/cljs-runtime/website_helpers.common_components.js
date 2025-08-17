goog.provide('website_helpers.common_components');
website_helpers.common_components.sync_url_params_BANG_ = (function website_helpers$common_components$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__27962 = cljs.core.seq(vars);
var chunk__27963 = null;
var count__27964 = (0);
var i__27965 = (0);
while(true){
if((i__27965 < count__27964)){
var vec__28013 = chunk__27963.cljs$core$IIndexed$_nth$arity$2(null,i__27965);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__28084 = seq__27962;
var G__28085 = chunk__27963;
var G__28086 = count__27964;
var G__28087 = (i__27965 + (1));
seq__27962 = G__28084;
chunk__27963 = G__28085;
count__27964 = G__28086;
i__27965 = G__28087;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27962);
if(temp__5825__auto__){
var seq__27962__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27962__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27962__$1);
var G__28104 = cljs.core.chunk_rest(seq__27962__$1);
var G__28105 = c__5568__auto__;
var G__28106 = cljs.core.count(c__5568__auto__);
var G__28107 = (0);
seq__27962 = G__28104;
chunk__27963 = G__28105;
count__27964 = G__28106;
i__27965 = G__28107;
continue;
} else {
var vec__28016 = cljs.core.first(seq__27962__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28016,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28016,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__28115 = cljs.core.next(seq__27962__$1);
var G__28117 = null;
var G__28118 = (0);
var G__28119 = (0);
seq__27962 = G__28115;
chunk__27963 = G__28117;
count__27964 = G__28118;
i__27965 = G__28119;
continue;
}
} else {
return null;
}
}
break;
}
});
website_helpers.common_components.input_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"7px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null);
website_helpers.common_components.dropdown_check_list = (function website_helpers$common_components$dropdown_check_list(vars,title,on_change){
var opened = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px"], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$common_components$dropdown_check_list_$_iter__28022(s__28023){
return (new cljs.core.LazySeq(null,(function (){
var s__28023__$1 = s__28023;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28023__$1);
if(temp__5825__auto__){
var s__28023__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28023__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28023__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28025 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28024 = (0);
while(true){
if((i__28024 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__28024);
cljs.core.chunk_append(b__28025,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__28024,var$,c__5521__auto__,size__5522__auto__,b__28025,s__28023__$2,temp__5825__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));

return (on_change.cljs$core$IFn$_invoke$arity$0 ? on_change.cljs$core$IFn$_invoke$arity$0() : on_change.call(null));
});})(i__28024,var$,c__5521__auto__,size__5522__auto__,b__28025,s__28023__$2,temp__5825__auto__,opened))
], null)], null),var$], null));

var G__28135 = (i__28024 + (1));
i__28024 = G__28135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28025),website_helpers$common_components$dropdown_check_list_$_iter__28022(cljs.core.chunk_rest(s__28023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28025),null);
}
} else {
var var$ = cljs.core.first(s__28023__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__28023__$2,temp__5825__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));

return (on_change.cljs$core$IFn$_invoke$arity$0 ? on_change.cljs$core$IFn$_invoke$arity$0() : on_change.call(null));
});})(var$,s__28023__$2,temp__5825__auto__,opened))
], null)], null),var$], null),website_helpers$common_components$dropdown_check_list_$_iter__28022(cljs.core.rest(s__28023__$2)));
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
