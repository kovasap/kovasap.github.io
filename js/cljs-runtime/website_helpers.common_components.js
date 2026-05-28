goog.provide('website_helpers.common_components');
website_helpers.common_components.input_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"7px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null);
website_helpers.common_components.dropdown_select_list = (function website_helpers$common_components$dropdown_select_list(vars,title,on_change,input_type){
var opened = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px"], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$common_components$dropdown_select_list_$_iter__20590(s__20591){
return (new cljs.core.LazySeq(null,(function (){
var s__20591__$1 = s__20591;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20591__$1);
if(temp__5823__auto__){
var s__20591__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20591__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20591__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20593 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20592 = (0);
while(true){
if((i__20592 < size__5522__auto__)){
var vec__20594 = cljs.core._nth(c__5521__auto__,i__20592);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594,(1),null);
cljs.core.chunk_append(b__20593,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(v)?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__20592,vec__20594,k,v,c__5521__auto__,size__5522__auto__,b__20593,s__20591__$2,temp__5823__auto__,opened){
return (function (_){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(k,v) : on_change.call(null,k,v));
});})(i__20592,vec__20594,k,v,c__5521__auto__,size__5522__auto__,b__20593,s__20591__$2,temp__5823__auto__,opened))
], null)], null),k], null));

var G__20604 = (i__20592 + (1));
i__20592 = G__20604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20593),website_helpers$common_components$dropdown_select_list_$_iter__20590(cljs.core.chunk_rest(s__20591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20593),null);
}
} else {
var vec__20597 = cljs.core.first(s__20591__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20597,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(v)?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__20597,k,v,s__20591__$2,temp__5823__auto__,opened){
return (function (_){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(k,v) : on_change.call(null,k,v));
});})(vec__20597,k,v,s__20591__$2,temp__5823__auto__,opened))
], null)], null),k], null),website_helpers$common_components$dropdown_select_list_$_iter__20590(cljs.core.rest(s__20591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__20600){
var vec__20601 = p__20600;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20601,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20601,(1),null);
return k;
}),cljs.core.deref(vars)));
})())], null);
});
});

//# sourceMappingURL=website_helpers.common_components.js.map
