goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__41832 = opts;
var map__41832__$1 = cljs.core.__destructure_map(map__41832);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41833 = piece;
var map__41833__$1 = cljs.core.__destructure_map(map__41833);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41833__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41833__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41833__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41833__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__41837 = opts;
var map__41837__$1 = cljs.core.__destructure_map(map__41837);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41837__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41838 = piece;
var map__41838__$1 = cljs.core.__destructure_map(map__41838);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41838__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__41843 = opts;
var map__41843__$1 = cljs.core.__destructure_map(map__41843);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41843__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41844 = piece;
var map__41844__$1 = cljs.core.__destructure_map(map__41844);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41844__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var on_update = (function (){var or__5045__auto__ = did_mount;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var ref = rid3.data.data_join(piece,opts,prev_classes);
return (on_update.cljs$core$IFn$_invoke$arity$2 ? on_update.cljs$core$IFn$_invoke$arity$2(ref,ratom) : on_update.call(null,ref,ratom));
});
rid3.data.did_update_data_update = (function rid3$data$did_update_data_update(piece,opts,prev_classes){
var map__41845 = opts;
var map__41845__$1 = cljs.core.__destructure_map(map__41845);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41845__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41846 = piece;
var map__41846__$1 = cljs.core.__destructure_map(map__41846);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41846__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41846__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
var on_update = (function (){var or__5045__auto__ = did_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = did_mount;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var ref = rid3.data.data_join(piece,opts,prev_classes);
return (on_update.cljs$core$IFn$_invoke$arity$2 ? on_update.cljs$core$IFn$_invoke$arity$2(ref,ratom) : on_update.call(null,ref,ratom));
});
rid3.data.data_exit = (function rid3$data$data_exit(piece,opts,prev_classes){
var map__41847 = opts;
var map__41847__$1 = cljs.core.__destructure_map(map__41847);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41847__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__41853 = opts;
var map__41853__$1 = cljs.core.__destructure_map(map__41853);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41853__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41854 = piece;
var map__41854__$1 = cljs.core.__destructure_map(map__41854);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41854__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41854__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41855 = gup;
var map__41855__$1 = cljs.core.__destructure_map(map__41855);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
var on_enter = (function (){var or__5045__auto__ = enter_init;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = enter;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var G__41863 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__41864 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__41863,G__41864) : on_enter.call(null,G__41863,G__41864));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__41869 = opts;
var map__41869__$1 = cljs.core.__destructure_map(map__41869);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41870 = piece;
var map__41870__$1 = cljs.core.__destructure_map(map__41870);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41871 = gup;
var map__41871__$1 = cljs.core.__destructure_map(map__41871);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__5045__auto__ = enter;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__41875 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__41876 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__41875,G__41876) : on_enter.call(null,G__41875,G__41876));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__41880 = opts;
var map__41880__$1 = cljs.core.__destructure_map(map__41880);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41880__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41881 = piece;
var map__41881__$1 = cljs.core.__destructure_map(map__41881);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41881__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41882 = gup;
var map__41882__$1 = cljs.core.__destructure_map(map__41882);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41882__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var on_update = (function (){var or__5045__auto__ = gup_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var ref = rid3.data.data_join(piece,opts,prev_classes);
return (on_update.cljs$core$IFn$_invoke$arity$2 ? on_update.cljs$core$IFn$_invoke$arity$2(ref,ratom) : on_update.call(null,ref,ratom));
});
rid3.data.gup_data_exit = (function rid3$data$gup_data_exit(piece,opts,prev_classes){
var map__41893 = opts;
var map__41893__$1 = cljs.core.__destructure_map(map__41893);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41893__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41894 = piece;
var map__41894__$1 = cljs.core.__destructure_map(map__41894);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41894__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41895 = gup;
var map__41895__$1 = cljs.core.__destructure_map(map__41895);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41895__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on_exit = (function (){var or__5045__auto__ = exit;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
return (function (){var G__41899 = rid3.data.data_join(piece,opts,prev_classes).exit();
var G__41900 = ratom;
return (on_exit.cljs$core$IFn$_invoke$arity$2 ? on_exit.cljs$core$IFn$_invoke$arity$2(G__41899,G__41900) : on_exit.call(null,G__41899,G__41900));
})().remove();
});

//# sourceMappingURL=rid3.data.js.map
