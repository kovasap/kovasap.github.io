goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__39954 = opts;
var map__39954__$1 = cljs.core.__destructure_map(map__39954);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39954__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39955 = piece;
var map__39955__$1 = cljs.core.__destructure_map(map__39955);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__39977 = opts;
var map__39977__$1 = cljs.core.__destructure_map(map__39977);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39977__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39978 = piece;
var map__39978__$1 = cljs.core.__destructure_map(map__39978);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39978__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__39991 = opts;
var map__39991__$1 = cljs.core.__destructure_map(map__39991);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39991__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39992 = piece;
var map__39992__$1 = cljs.core.__destructure_map(map__39992);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39992__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var map__39997 = opts;
var map__39997__$1 = cljs.core.__destructure_map(map__39997);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39997__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39998 = piece;
var map__39998__$1 = cljs.core.__destructure_map(map__39998);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39998__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39998__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
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
var map__40018 = opts;
var map__40018__$1 = cljs.core.__destructure_map(map__40018);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__40020 = opts;
var map__40020__$1 = cljs.core.__destructure_map(map__40020);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40020__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__40021 = piece;
var map__40021__$1 = cljs.core.__destructure_map(map__40021);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40021__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40021__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__40022 = gup;
var map__40022__$1 = cljs.core.__destructure_map(map__40022);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40022__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40022__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
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
var G__40027 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__40028 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__40027,G__40028) : on_enter.call(null,G__40027,G__40028));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__40036 = opts;
var map__40036__$1 = cljs.core.__destructure_map(map__40036);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__40037 = piece;
var map__40037__$1 = cljs.core.__destructure_map(map__40037);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40037__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40037__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__40038 = gup;
var map__40038__$1 = cljs.core.__destructure_map(map__40038);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40038__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__4212__auto__ = enter;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__40039 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__40040 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__40039,G__40040) : on_enter.call(null,G__40039,G__40040));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__40041 = opts;
var map__40041__$1 = cljs.core.__destructure_map(map__40041);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40041__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__40042 = piece;
var map__40042__$1 = cljs.core.__destructure_map(map__40042);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40042__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__40043 = gup;
var map__40043__$1 = cljs.core.__destructure_map(map__40043);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40043__$1,new cljs.core.Keyword(null,"update","update",1045576396));
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
var map__40044 = opts;
var map__40044__$1 = cljs.core.__destructure_map(map__40044);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40044__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__40045 = piece;
var map__40045__$1 = cljs.core.__destructure_map(map__40045);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40045__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__40046 = gup;
var map__40046__$1 = cljs.core.__destructure_map(map__40046);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40046__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on_exit = (function (){var or__4212__auto__ = exit;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
return (function (){var G__40047 = rid3.data.data_join(piece,opts,prev_classes).exit();
var G__40048 = ratom;
return (on_exit.cljs$core$IFn$_invoke$arity$2 ? on_exit.cljs$core$IFn$_invoke$arity$2(G__40047,G__40048) : on_exit.call(null,G__40047,G__40048));
})().remove();
});

//# sourceMappingURL=rid3.data.js.map
