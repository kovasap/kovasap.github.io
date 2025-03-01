goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__29599 = opts;
var map__29599__$1 = cljs.core.__destructure_map(map__29599);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29599__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29600 = piece;
var map__29600__$1 = cljs.core.__destructure_map(map__29600);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__29608 = opts;
var map__29608__$1 = cljs.core.__destructure_map(map__29608);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29608__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29609 = piece;
var map__29609__$1 = cljs.core.__destructure_map(map__29609);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29609__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__29612 = opts;
var map__29612__$1 = cljs.core.__destructure_map(map__29612);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29612__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29613 = piece;
var map__29613__$1 = cljs.core.__destructure_map(map__29613);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29613__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var map__29619 = opts;
var map__29619__$1 = cljs.core.__destructure_map(map__29619);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29619__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29620 = piece;
var map__29620__$1 = cljs.core.__destructure_map(map__29620);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29620__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29620__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
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
var map__29625 = opts;
var map__29625__$1 = cljs.core.__destructure_map(map__29625);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29625__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__29629 = opts;
var map__29629__$1 = cljs.core.__destructure_map(map__29629);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29629__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29630 = piece;
var map__29630__$1 = cljs.core.__destructure_map(map__29630);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29630__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29630__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__29631 = gup;
var map__29631__$1 = cljs.core.__destructure_map(map__29631);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29631__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29631__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
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
var G__29632 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__29633 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__29632,G__29633) : on_enter.call(null,G__29632,G__29633));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__29634 = opts;
var map__29634__$1 = cljs.core.__destructure_map(map__29634);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29634__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29635 = piece;
var map__29635__$1 = cljs.core.__destructure_map(map__29635);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29635__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29635__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__29636 = gup;
var map__29636__$1 = cljs.core.__destructure_map(map__29636);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29636__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__5045__auto__ = enter;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__29637 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__29638 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__29637,G__29638) : on_enter.call(null,G__29637,G__29638));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__29640 = opts;
var map__29640__$1 = cljs.core.__destructure_map(map__29640);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29640__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29642 = piece;
var map__29642__$1 = cljs.core.__destructure_map(map__29642);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29642__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__29643 = gup;
var map__29643__$1 = cljs.core.__destructure_map(map__29643);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29643__$1,new cljs.core.Keyword(null,"update","update",1045576396));
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
var map__29647 = opts;
var map__29647__$1 = cljs.core.__destructure_map(map__29647);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29647__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__29648 = piece;
var map__29648__$1 = cljs.core.__destructure_map(map__29648);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29648__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__29649 = gup;
var map__29649__$1 = cljs.core.__destructure_map(map__29649);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on_exit = (function (){var or__5045__auto__ = exit;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
return (function (){var G__29650 = rid3.data.data_join(piece,opts,prev_classes).exit();
var G__29651 = ratom;
return (on_exit.cljs$core$IFn$_invoke$arity$2 ? on_exit.cljs$core$IFn$_invoke$arity$2(G__29650,G__29651) : on_exit.call(null,G__29650,G__29651));
})().remove();
});

//# sourceMappingURL=rid3.data.js.map
