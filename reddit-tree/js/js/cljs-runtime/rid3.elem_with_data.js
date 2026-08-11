goog.provide('rid3.elem_with_data');
rid3.elem_with_data.piece_did_mount = (function rid3$elem_with_data$piece_did_mount(piece,opts,prev_classes){
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"id","id",-1388402092));
var selector = rid3.util.node_selector(id,prev_classes);
var node = d3.select(selector);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(piece,new cljs.core.Keyword(null,"class","class",-2030961996));
var gup_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(piece,new cljs.core.Keyword(null,"gup","gup",-1273161250));
node.append("g").attr("class",class$);

if(cljs.core.truth_(gup_QMARK_)){
rid3.data.gup_data_exit(piece,opts,prev_classes);

rid3.data.gup_data_update(piece,opts,prev_classes);

return rid3.data.gup_data_enter_init(piece,opts,prev_classes);
} else {
rid3.data.data_enter(piece,opts,prev_classes);

rid3.data.did_mount_data_update(piece,opts,prev_classes);

return rid3.data.data_exit(piece,opts,prev_classes);
}
});
rid3.elem_with_data.piece_did_update = (function rid3$elem_with_data$piece_did_update(piece,opts,prev_classes){
var gup_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(piece,new cljs.core.Keyword(null,"gup","gup",-1273161250));
if(cljs.core.truth_(gup_QMARK_)){
rid3.data.gup_data_exit(piece,opts,prev_classes);

rid3.data.gup_data_update(piece,opts,prev_classes);

return rid3.data.gup_data_enter(piece,opts,prev_classes);
} else {
rid3.data.data_enter(piece,opts,prev_classes);

rid3.data.did_update_data_update(piece,opts,prev_classes);

return rid3.data.data_exit(piece,opts,prev_classes);
}
});

//# sourceMappingURL=rid3.elem_with_data.js.map
