goog.provide('rid3.data');
rid3.data.data_join = (function rid3$data$data_join(piece,opts,prev_classes){
var map__41831 = opts;
var map__41831__$1 = cljs.core.__destructure_map(map__41831);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41831__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41831__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41832 = piece;
var map__41832__$1 = cljs.core.__destructure_map(map__41832);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var prepare_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var dataset = (cljs.core.truth_(prepare_dataset)?(prepare_dataset.cljs$core$IFn$_invoke$arity$1 ? prepare_dataset.cljs$core$IFn$_invoke$arity$1(ratom) : prepare_dataset.call(null,ratom)):cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.Keyword(null,"dataset","dataset",1159262238))));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
return node.select([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')).selectAll(tag).data(dataset,key_fn);
});
rid3.data.data_enter = (function rid3$data$data_enter(piece,opts,prev_classes){
var map__41842 = opts;
var map__41842__$1 = cljs.core.__destructure_map(map__41842);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41842__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41843 = piece;
var map__41843__$1 = cljs.core.__destructure_map(map__41843);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41843__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
});
rid3.data.did_mount_data_update = (function rid3$data$did_mount_data_update(piece,opts,prev_classes){
var map__41848 = opts;
var map__41848__$1 = cljs.core.__destructure_map(map__41848);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41848__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41849 = piece;
var map__41849__$1 = cljs.core.__destructure_map(map__41849);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41849__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
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
var map__41855 = opts;
var map__41855__$1 = cljs.core.__destructure_map(map__41855);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41856 = piece;
var map__41856__$1 = cljs.core.__destructure_map(map__41856);
var did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"did-mount","did-mount",918232960));
var did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"did-update","did-update",-2143702256));
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
var map__41862 = opts;
var map__41862__$1 = cljs.core.__destructure_map(map__41862);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
return rid3.data.data_join(piece,opts,prev_classes).exit().remove();
});
rid3.data.gup_data_enter_init = (function rid3$data$gup_data_enter_init(piece,opts,prev_classes){
var map__41863 = opts;
var map__41863__$1 = cljs.core.__destructure_map(map__41863);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41863__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41864 = piece;
var map__41864__$1 = cljs.core.__destructure_map(map__41864);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41865 = gup;
var map__41865__$1 = cljs.core.__destructure_map(map__41865);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41865__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var enter_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41865__$1,new cljs.core.Keyword(null,"enter-init","enter-init",545052618));
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
var G__41873 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__41874 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__41873,G__41874) : on_enter.call(null,G__41873,G__41874));
});
rid3.data.gup_data_enter = (function rid3$data$gup_data_enter(piece,opts,prev_classes){
var map__41877 = opts;
var map__41877__$1 = cljs.core.__destructure_map(map__41877);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41878 = piece;
var map__41878__$1 = cljs.core.__destructure_map(map__41878);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41878__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41878__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41879 = gup;
var map__41879__$1 = cljs.core.__destructure_map(map__41879);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41879__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var on_enter = (function (){var or__5045__auto__ = enter;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (node,ratom__$1){
return node;
});
}
})();
var G__41882 = rid3.data.data_join(piece,opts,prev_classes).enter().append(tag);
var G__41883 = ratom;
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(G__41882,G__41883) : on_enter.call(null,G__41882,G__41883));
});
rid3.data.gup_data_update = (function rid3$data$gup_data_update(piece,opts,prev_classes){
var map__41889 = opts;
var map__41889__$1 = cljs.core.__destructure_map(map__41889);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41889__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41890 = piece;
var map__41890__$1 = cljs.core.__destructure_map(map__41890);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41890__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41891 = gup;
var map__41891__$1 = cljs.core.__destructure_map(map__41891);
var gup_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41891__$1,new cljs.core.Keyword(null,"update","update",1045576396));
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
var map__41894 = opts;
var map__41894__$1 = cljs.core.__destructure_map(map__41894);
var ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41894__$1,new cljs.core.Keyword(null,"ratom","ratom",-126521267));
var map__41895 = piece;
var map__41895__$1 = cljs.core.__destructure_map(map__41895);
var gup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41895__$1,new cljs.core.Keyword(null,"gup","gup",-1273161250));
var map__41896 = gup;
var map__41896__$1 = cljs.core.__destructure_map(map__41896);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41896__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
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
