goog.provide('website_helpers.global');
website_helpers.global.num_recently_modified_notes_to_highlight = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
website_helpers.global.num_recently_created_notes_to_highlight = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
website_helpers.global.show_unselected_nodes_in_graph_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
website_helpers.global.include_home_node_in_graph_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
website_helpers.global.graph_update_num = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
website_helpers.global.url_params = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
website_helpers.global.notes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.test_data.notes);
website_helpers.global.get_all_note_categories = (function website_helpers$global$get_all_note_categories(notes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"categories","categories",178386610),notes));
});
website_helpers.global.category_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
website_helpers.global.sync_category_selections_BANG_ = (function website_helpers$global$sync_category_selections_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.graph_update_num,cljs.core.inc);

return cljs.core.reset_BANG_(website_helpers.global.category_selections,website_helpers.utils.get_url_param_selections(website_helpers.global.get_all_note_categories(cljs.core.deref(website_helpers.global.notes)),website_helpers.global.url_params));
});
website_helpers.global.set_global_notes = (function website_helpers$global$set_global_notes(new_notes){
cljs.core.reset_BANG_(website_helpers.global.notes,new_notes);

return website_helpers.global.sync_category_selections_BANG_();
});
goog.exportSymbol('website_helpers.global.set_global_notes', website_helpers.global.set_global_notes);

//# sourceMappingURL=website_helpers.global.js.map
