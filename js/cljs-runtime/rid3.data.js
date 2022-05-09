goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__42115 = opts;
var map__42115__$1 = cljs.core.__destructure_map(map__42115);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42115__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42116 = piece;
var map__42116__$1 = cljs.core.__destructure_map(map__42116);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42116__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42116__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42116__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42116__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__42117 = opts;
var map__42117__$1 = cljs.core.__destructure_map(map__42117);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42117__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42118 = piece;
var map__42118__$1 = cljs.core.__destructure_map(map__42118);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42118__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__42119 = opts;
var map__42119__$1 = cljs.core.__destructure_map(map__42119);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42119__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42120 = piece;
var map__42120__$1 = cljs.core.__destructure_map(map__42120);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42120__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var on_update = (function (){var or__4253__auto__ = did_mount;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var map__42121 = opts;
var map__42121__$1 = cljs.core.__destructure_map(map__42121);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42122 = piece;
var map__42122__$1 = cljs.core.__destructure_map(map__42122);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42122__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42122__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
var on_update = (function (){var or__4253__auto__ = did_update;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = did_mount;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
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
var map__42123 = opts;
var map__42123__$1 = cljs.core.__destructure_map(map__42123);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42123__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__42124 = opts;
var map__42124__$1 = cljs.core.__destructure_map(map__42124);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42124__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42125 = piece;
var map__42125__$1 = cljs.core.__destructure_map(map__42125);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42125__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42125__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__42126 = gup;
var map__42126__$1 = cljs.core.__destructure_map(map__42126);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42126__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42126__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
var on_enter = (function (){var or__4253__auto__ = enter_init;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = enter;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (function (node,ratom__$1){
return node;
});
}
}
})();
var G__42128 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__42129 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__42128,G__42129) : on_enter.call(null,G__42128,G__42129));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__42130 = opts;
var map__42130__$1 = cljs.core.__destructure_map(map__42130);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42130__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42131 = piece;
var map__42131__$1 = cljs.core.__destructure_map(map__42131);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42131__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42131__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__42132 = gup;
var map__42132__$1 = cljs.core.__destructure_map(map__42132);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42132__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__4253__auto__ = enter;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__42134 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__42135 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__42134,G__42135) : on_enter.call(null,G__42134,G__42135));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__42140 = opts;
var map__42140__$1 = cljs.core.__destructure_map(map__42140);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42141 = piece;
var map__42141__$1 = cljs.core.__destructure_map(map__42141);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42141__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__42142 = gup;
var map__42142__$1 = cljs.core.__destructure_map(map__42142);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42142__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var on_update = (function (){var or__4253__auto__ = gup_update;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var map__42151 = opts;
var map__42151__$1 = cljs.core.__destructure_map(map__42151);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__42152 = piece;
var map__42152__$1 = cljs.core.__destructure_map(map__42152);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42152__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__42153 = gup;
var map__42153__$1 = cljs.core.__destructure_map(map__42153);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on_exit = (function (){var or__4253__auto__ = exit;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
return (function (){var G__42154 = rid3.data.data_join(piece,opts,prev_classes).exit();
var G__42155 = ratom;
return (on_exit.cljs$core$IFn$_invoke$arity$2 ? on_exit.cljs$core$IFn$_invoke$arity$2(G__42154,G__42155) : on_exit.call(null,G__42154,G__42155));
})().remove();
});

//# sourceMappingURL=rid3.data.js.map
