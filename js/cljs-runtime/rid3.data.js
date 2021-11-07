goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__38024 = opts;
var map__38024__$1 = cljs.core.__destructure_map(map__38024);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38025 = piece;
var map__38025__$1 = cljs.core.__destructure_map(map__38025);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__38027 = opts;
var map__38027__$1 = cljs.core.__destructure_map(map__38027);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38028 = piece;
var map__38028__$1 = cljs.core.__destructure_map(map__38028);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38028__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__38029 = opts;
var map__38029__$1 = cljs.core.__destructure_map(map__38029);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38029__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38030 = piece;
var map__38030__$1 = cljs.core.__destructure_map(map__38030);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38030__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var on_update = (function (){var or__4212__auto__ = did_mount;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var map__38031 = opts;
var map__38031__$1 = cljs.core.__destructure_map(map__38031);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38032 = piece;
var map__38032__$1 = cljs.core.__destructure_map(map__38032);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
var on_update = (function (){var or__4212__auto__ = did_update;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = did_mount;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
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
var map__38033 = opts;
var map__38033__$1 = cljs.core.__destructure_map(map__38033);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38033__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__38034 = opts;
var map__38034__$1 = cljs.core.__destructure_map(map__38034);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38034__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38035 = piece;
var map__38035__$1 = cljs.core.__destructure_map(map__38035);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__38036 = gup;
var map__38036__$1 = cljs.core.__destructure_map(map__38036);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38036__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38036__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
var on_enter = (function (){var or__4212__auto__ = enter_init;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = enter;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var G__38037 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__38038 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__38037,G__38038) : on_enter.call(null,G__38037,G__38038));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__38039 = opts;
var map__38039__$1 = cljs.core.__destructure_map(map__38039);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38039__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38040 = piece;
var map__38040__$1 = cljs.core.__destructure_map(map__38040);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38040__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38040__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__38041 = gup;
var map__38041__$1 = cljs.core.__destructure_map(map__38041);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__4212__auto__ = enter;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__38042 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__38043 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__38042,G__38043) : on_enter.call(null,G__38042,G__38043));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__38045 = opts;
var map__38045__$1 = cljs.core.__destructure_map(map__38045);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38045__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38046 = piece;
var map__38046__$1 = cljs.core.__destructure_map(map__38046);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__38047 = gup;
var map__38047__$1 = cljs.core.__destructure_map(map__38047);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var on_update = (function (){var or__4212__auto__ = gup_update;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var map__38050 = opts;
var map__38050__$1 = cljs.core.__destructure_map(map__38050);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__38051 = piece;
var map__38051__$1 = cljs.core.__destructure_map(map__38051);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__38052 = gup;
var map__38052__$1 = cljs.core.__destructure_map(map__38052);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on_exit = (function (){var or__4212__auto__ = exit;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
return (function (){var G__38055 = rid3.data.data_join(piece,opts,prev_classes).exit();
var G__38056 = ratom;
return (on_exit.cljs$core$IFn$_invoke$arity$2 ? on_exit.cljs$core$IFn$_invoke$arity$2(G__38055,G__38056) : on_exit.call(null,G__38055,G__38056));
})().remove();
});

//# sourceMappingURL=rid3.data.js.map
