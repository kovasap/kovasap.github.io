goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__39428 = opts;
var map__39428__$1 = cljs.core.__destructure_map(map__39428);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39428__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39428__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39429 = piece;
var map__39429__$1 = cljs.core.__destructure_map(map__39429);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39429__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39429__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39429__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39429__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__39433 = opts;
var map__39433__$1 = cljs.core.__destructure_map(map__39433);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39434 = piece;
var map__39434__$1 = cljs.core.__destructure_map(map__39434);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39434__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__39442 = opts;
var map__39442__$1 = cljs.core.__destructure_map(map__39442);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39442__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39443 = piece;
var map__39443__$1 = cljs.core.__destructure_map(map__39443);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39443__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var map__39450 = opts;
var map__39450__$1 = cljs.core.__destructure_map(map__39450);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39450__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39451 = piece;
var map__39451__$1 = cljs.core.__destructure_map(map__39451);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39451__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39451__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
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
var map__39452 = opts;
var map__39452__$1 = cljs.core.__destructure_map(map__39452);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39452__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__39455 = opts;
var map__39455__$1 = cljs.core.__destructure_map(map__39455);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39455__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39456 = piece;
var map__39456__$1 = cljs.core.__destructure_map(map__39456);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39456__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39456__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__39457 = gup;
var map__39457__$1 = cljs.core.__destructure_map(map__39457);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
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
var G__39461 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__39462 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__39461,G__39462) : on_enter.call(null,G__39461,G__39462));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__39463 = opts;
var map__39463__$1 = cljs.core.__destructure_map(map__39463);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39463__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39464 = piece;
var map__39464__$1 = cljs.core.__destructure_map(map__39464);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__39465 = gup;
var map__39465__$1 = cljs.core.__destructure_map(map__39465);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39465__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__4212__auto__ = enter;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__39469 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__39470 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__39469,G__39470) : on_enter.call(null,G__39469,G__39470));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__39476 = opts;
var map__39476__$1 = cljs.core.__destructure_map(map__39476);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39476__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39477 = piece;
var map__39477__$1 = cljs.core.__destructure_map(map__39477);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39477__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__39478 = gup;
var map__39478__$1 = cljs.core.__destructure_map(map__39478);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39478__$1,new cljs.core.Keyword(null,"update","update",1045576396));
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
var map__39479 = opts;
var map__39479__$1 = cljs.core.__destructure_map(map__39479);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39479__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__39480 = piece;
var map__39480__$1 = cljs.core.__destructure_map(map__39480);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39480__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__39481 = gup;
var map__39481__$1 = cljs.core.__destructure_map(map__39481);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on_exit = (function (){var or__4212__auto__ = exit;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
return (function (){var G__39485 = rid3.data.data_join(piece,opts,prev_classes).exit();
var G__39486 = ratom;
return (on_exit.cljs$core$IFn$_invoke$arity$2 ? on_exit.cljs$core$IFn$_invoke$arity$2(G__39485,G__39486) : on_exit.call(null,G__39485,G__39486));
})().remove();
});

//# sourceMappingURL=rid3.data.js.map
