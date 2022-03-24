goog.provide('app.comparison_matrix_table');
/**
 * Converts {:input :i :biomarker :b :results {:slope 5.0}} to
 *   {:input :i :b--slope 5.0}
 *   
 */
app.comparison_matrix_table.get_biomarker_regression_result_keys = (function app$comparison_matrix_table$get_biomarker_regression_result_keys(m){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlation","app.specs/pairwise-correlation",369083018),ghostwheel.core._EQ__GT_,new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)], null);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(m)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$comparison_matrix_table$get_biomarker_regression_result_keys_$_iter__57550(s__57551){
return (new cljs.core.LazySeq(null,(function (){
var s__57551__$1 = s__57551;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__57551__$1);
if(temp__5753__auto__){
var s__57551__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57551__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__57551__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__57553 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__57552 = (0);
while(true){
if((i__57552 < size__4651__auto__)){
var vec__57555 = cljs.core._nth(c__4650__auto__,i__57552);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57555,(1),null);
cljs.core.chunk_append(b__57553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("--",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null))),v], null));

var G__57588 = (i__57552 + (1));
i__57552 = G__57588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57553),app$comparison_matrix_table$get_biomarker_regression_result_keys_$_iter__57550(cljs.core.chunk_rest(s__57551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57553),null);
}
} else {
var vec__57559 = cljs.core.first(s__57551__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57559,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("--",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null))),v], null),app$comparison_matrix_table$get_biomarker_regression_result_keys_$_iter__57550(cljs.core.rest(s__57551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(m));
})()));
});
app.comparison_matrix_table.make_per_input_row = (function app$comparison_matrix_table$make_per_input_row(same_input_results){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.comparison_matrix_table.get_biomarker_regression_result_keys,same_input_results));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword(null,"flat-map","flat-map",-1349536676),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword(null,"flat-map","flat-map",-1349536676),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword(null,"flat-map","flat-map",-1349536676)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword(null,"flat-map","flat-map",-1349536676),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677),null,null),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677),null,null,null));

/**
 * @type {function(*, *): *}
 */
app.comparison_matrix_table.add_aggregates = (function app$comparison_matrix_table$add_aggregates(input_significant_correlations,flat_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flat_map,new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__57575 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(flat_map);
return (fexpr__57575.cljs$core$IFn$_invoke$arity$1 ? fexpr__57575.cljs$core$IFn$_invoke$arity$1(input_significant_correlations) : fexpr__57575.call(null,input_significant_correlations));
})())], 0));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"input-significant-correlations","input-significant-correlations",-6611126),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677),null,null),new cljs.core.Keyword("app.specs","maps","app.specs/maps",2146115677),null,null,null));

/**
 * @type {function(*, *): *}
 */
app.comparison_matrix_table.make_comparison_matrix_data = (function app$comparison_matrix_table$make_comparison_matrix_data(results,input_significant_correlations){
var rows_by_input = cljs.core.group_by(new cljs.core.Keyword(null,"input","input",556931961),results);
var per_input_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57576_SHARP_){
return app.comparison_matrix_table.add_aggregates(input_significant_correlations,app.comparison_matrix_table.make_per_input_row(p1__57576_SHARP_));
}),cljs.core.vals(rows_by_input));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57577_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (a,b){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),a)){
return (-1);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),b)){
return (-1);
} else {
return cljs.core.compare(a,b);

}
}
})),p1__57577_SHARP_);
}),per_input_results);
});
/**
 * Generates a react-data-grid column 
 *   https://github.com/adazzle/react-data-grid/blob/929911c506919e96bd12e48ea5de68ec9511ca10/src/types.ts#L7
 */
app.comparison_matrix_table.make_datagrid_column = (function app$comparison_matrix_table$make_datagrid_column(k){
var vec__57584 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/\-\-/);
var biomarker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57584,(0),null);
var stat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57584,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cellClass","cellClass",-262516937),(function (row){
var clj_row = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var pval_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("--",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarker,"p-value"], null)));
if(((pval_key.cljs$core$IFn$_invoke$arity$1 ? pval_key.cljs$core$IFn$_invoke$arity$1(clj_row) : pval_key.call(null,clj_row)) == null)){
return "";
} else {
if(((pval_key.cljs$core$IFn$_invoke$arity$1 ? pval_key.cljs$core$IFn$_invoke$arity$1(clj_row) : pval_key.call(null,clj_row)) < app.stats.p_value_cutoff)){
return "";
} else {
return "has-text-grey-lighter";

}
}
}),new cljs.core.Keyword(null,"frozen","frozen",-1824610372),((cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),null], null), null),app.single_var_table.aggregate_names),k))?true:false)], null);
});

//# sourceMappingURL=app.comparison_matrix_table.js.map
