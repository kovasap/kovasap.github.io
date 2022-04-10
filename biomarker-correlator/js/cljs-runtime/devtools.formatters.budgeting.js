goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__34424__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__34424__auto__["add"]).call(o__34424__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__34424__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__34424__auto__["delete"]).call(o__34424__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__34424__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__34424__auto__["has"]).call(o__34424__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__74204 = data;
var target__34429__auto__ = G__74204;
if(cljs.core.truth_(target__34429__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74204)].join(''),"\n","target__34429__auto__"].join('')));
}

(target__34429__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__74204;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_74227 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_74227);
} else {
var seq__74214_74228 = cljs.core.seq(json_ml);
var chunk__74215_74229 = null;
var count__74216_74230 = (0);
var i__74217_74231 = (0);
while(true){
if((i__74217_74231 < count__74216_74230)){
var item_74232 = chunk__74215_74229.cljs$core$IIndexed$_nth$arity$2(null,i__74217_74231);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_74232,new_depth_budget_74227) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_74232,new_depth_budget_74227));


var G__74233 = seq__74214_74228;
var G__74234 = chunk__74215_74229;
var G__74235 = count__74216_74230;
var G__74236 = (i__74217_74231 + (1));
seq__74214_74228 = G__74233;
chunk__74215_74229 = G__74234;
count__74216_74230 = G__74235;
i__74217_74231 = G__74236;
continue;
} else {
var temp__5753__auto___74237 = cljs.core.seq(seq__74214_74228);
if(temp__5753__auto___74237){
var seq__74214_74238__$1 = temp__5753__auto___74237;
if(cljs.core.chunked_seq_QMARK_(seq__74214_74238__$1)){
var c__4679__auto___74239 = cljs.core.chunk_first(seq__74214_74238__$1);
var G__74240 = cljs.core.chunk_rest(seq__74214_74238__$1);
var G__74241 = c__4679__auto___74239;
var G__74242 = cljs.core.count(c__4679__auto___74239);
var G__74243 = (0);
seq__74214_74228 = G__74240;
chunk__74215_74229 = G__74241;
count__74216_74230 = G__74242;
i__74217_74231 = G__74243;
continue;
} else {
var item_74244 = cljs.core.first(seq__74214_74238__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_74244,new_depth_budget_74227) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_74244,new_depth_budget_74227));


var G__74245 = cljs.core.next(seq__74214_74238__$1);
var G__74246 = null;
var G__74247 = (0);
var G__74248 = (0);
seq__74214_74228 = G__74245;
chunk__74215_74229 = G__74246;
count__74216_74230 = G__74247;
i__74217_74231 = G__74248;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5751__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5751__auto__)){
var initial_hierarchy_depth_budget = temp__5751__auto__;
var remaining_depth_budget = (function (){var or__4253__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
