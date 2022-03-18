goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__26980__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__26980__auto__["add"]).call(o__26980__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__26980__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__26980__auto__["delete"]).call(o__26980__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__26980__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__26980__auto__["has"]).call(o__26980__auto__,value);
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
var G__29994 = data;
var target__26997__auto__ = G__29994;
if(cljs.core.truth_(target__26997__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29994)].join(''),"\n","target__26997__auto__"].join('')));
}

(target__26997__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__29994;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_30020 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_30020);
} else {
var seq__29998_30021 = cljs.core.seq(json_ml);
var chunk__29999_30022 = null;
var count__30000_30023 = (0);
var i__30001_30024 = (0);
while(true){
if((i__30001_30024 < count__30000_30023)){
var item_30026 = chunk__29999_30022.cljs$core$IIndexed$_nth$arity$2(null,i__30001_30024);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_30026,new_depth_budget_30020) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_30026,new_depth_budget_30020));


var G__30027 = seq__29998_30021;
var G__30028 = chunk__29999_30022;
var G__30029 = count__30000_30023;
var G__30030 = (i__30001_30024 + (1));
seq__29998_30021 = G__30027;
chunk__29999_30022 = G__30028;
count__30000_30023 = G__30029;
i__30001_30024 = G__30030;
continue;
} else {
var temp__5753__auto___30031 = cljs.core.seq(seq__29998_30021);
if(temp__5753__auto___30031){
var seq__29998_30032__$1 = temp__5753__auto___30031;
if(cljs.core.chunked_seq_QMARK_(seq__29998_30032__$1)){
var c__4638__auto___30033 = cljs.core.chunk_first(seq__29998_30032__$1);
var G__30034 = cljs.core.chunk_rest(seq__29998_30032__$1);
var G__30035 = c__4638__auto___30033;
var G__30036 = cljs.core.count(c__4638__auto___30033);
var G__30037 = (0);
seq__29998_30021 = G__30034;
chunk__29999_30022 = G__30035;
count__30000_30023 = G__30036;
i__30001_30024 = G__30037;
continue;
} else {
var item_30040 = cljs.core.first(seq__29998_30032__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_30040,new_depth_budget_30020) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_30040,new_depth_budget_30020));


var G__30042 = cljs.core.next(seq__29998_30032__$1);
var G__30043 = null;
var G__30044 = (0);
var G__30045 = (0);
seq__29998_30021 = G__30042;
chunk__29999_30022 = G__30043;
count__30000_30023 = G__30044;
i__30001_30024 = G__30045;
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
var remaining_depth_budget = (function (){var or__4212__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
