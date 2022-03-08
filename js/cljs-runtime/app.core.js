goog.provide('app.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.core","input","app.core/input",1847346117),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.core","biomarker","app.core/biomarker",-782979460),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.core","pairwise-correlations","app.core/pairwise-correlations",-1110926441),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","input","app.core/input",1847346117),new cljs.core.Keyword("app.core","biomarker","app.core/biomarker",-782979460),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","input","app.core/input",1847346117),new cljs.core.Keyword("app.core","biomarker","app.core/biomarker",-782979460),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","input","app.core/input",1847346117),new cljs.core.Keyword("app.core","biomarker","app.core/biomarker",-782979460),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58369){
return cljs.core.map_QMARK_(G__58369);
}),(function (G__58369){
return cljs.core.contains_QMARK_(G__58369,new cljs.core.Keyword(null,"input","input",556931961));
}),(function (G__58369){
return cljs.core.contains_QMARK_(G__58369,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816));
}),(function (G__58369){
return cljs.core.contains_QMARK_(G__58369,new cljs.core.Keyword(null,"regression-results","regression-results",224318376));
})], null),(function (G__58369){
return ((cljs.core.map_QMARK_(G__58369)) && (((cljs.core.contains_QMARK_(G__58369,new cljs.core.Keyword(null,"input","input",556931961))) && (((cljs.core.contains_QMARK_(G__58369,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816))) && (cljs.core.contains_QMARK_(G__58369,new cljs.core.Keyword(null,"regression-results","regression-results",224318376))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","input","app.core/input",1847346117),new cljs.core.Keyword("app.core","biomarker","app.core/biomarker",-782979460),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),new cljs.core.Keyword(null,"regression-results","regression-results",224318376)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"input","input",556931961))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"regression-results","regression-results",224318376)))], null),null])),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58368){
return cljs.core.coll_QMARK_(G__58368);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","input","app.core/input",1847346117),new cljs.core.Keyword("app.core","biomarker","app.core/biomarker",-782979460),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null)))], null),null));
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58374_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__58374_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._LT_),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58375_SHARP_){
return ((cljs.core.vector_QMARK_(p1__58375_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__58375_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
app.core.home_page = (function app$core$home_page(){
var map__58377 = cljs.core.deref(app.csv.csv_data);
var map__58377__$1 = cljs.core.__destructure_map(map__58377);
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
var inputs = app.core.get_vars(input_data);
var biomarkers = app.core.get_vars(biomarker_data);
var processed_data = app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data,biomarker_data], 0));
var pairwise_correlations = app.stats.compute_correlations(inputs,biomarkers,processed_data);
var input_correlations = app.single_var_table.make_all_correlations(pairwise_correlations,processed_data,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816));
var biomarker_correlations = app.single_var_table.make_all_correlations(pairwise_correlations,processed_data,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),new cljs.core.Keyword(null,"input","input",556931961));
var pairwise_correlations_for_table = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58376_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(p1__58376_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression-results","regression-results",224318376)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"scatterplot","scatterplot",2135008985),new cljs.core.Keyword(null,"raw-data","raw-data",617791828));
}),pairwise_correlations);
var flat_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.flatten_map,pairwise_correlations_for_table);
var flat_results_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(flat_results);
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.content","div.app.content",2048228731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Biomarker Correlator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This application calculates cross correlations between inputs and\n      biomarkers in an attempt to identify statistically significant\n      correlations. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Despite presenting like a website, there is no server\n      behind this app that data is sent to for analysis; everything is done\n      client side in the browser. Therefore, the page can be saved and run\n      offline as needed."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Input validation: ",app.csv_data_processing.get_validation_string(input_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Biomarker validation: ",app.csv_data_processing.get_validation_string(biomarker_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cross data validation: ",app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data,biomarker_data], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not statistically significant results are displayed with greyed-out\n      text.  The score for each input is calculated as the number of\n      statistically significant correlations that are positive, minus the number\n      that are negative.  We need a spreadsheet (or something built in to the\n      app) that determines for each biomarker whether up is good or bad with\n      respect to calculating the score."], null),app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic(app.comparison_matrix_table.make_comparison_matrix_data(pairwise_correlations_for_table,input_correlations),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-make-datagrid-column","custom-make-datagrid-column",1791443794),app.comparison_matrix_table.make_datagrid_column], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_datagrid(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__58378(s__58379){
return (new cljs.core.LazySeq(null,(function (){
var s__58379__$1 = s__58379;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58379__$1);
if(temp__5753__auto__){
var s__58379__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58379__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__58379__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__58381 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__58380 = (0);
while(true){
if((i__58380 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__58380);
cljs.core.chunk_append(b__58381,app.single_var_table.make_hiccup(sig_correlations));

var G__58388 = (i__58380 + (1));
i__58380 = G__58388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),app$core$home_page_$_iter__58378(cljs.core.chunk_rest(s__58379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),null);
}
} else {
var sig_correlations = cljs.core.first(s__58379__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__58378(cljs.core.rest(s__58379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(input_correlations));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__58382(s__58383){
return (new cljs.core.LazySeq(null,(function (){
var s__58383__$1 = s__58383;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58383__$1);
if(temp__5753__auto__){
var s__58383__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58383__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__58383__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__58385 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__58384 = (0);
while(true){
if((i__58384 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__58384);
cljs.core.chunk_append(b__58385,app.single_var_table.make_hiccup(sig_correlations));

var G__58389 = (i__58384 + (1));
i__58384 = G__58389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58385),app$core$home_page_$_iter__58382(cljs.core.chunk_rest(s__58383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58385),null);
}
} else {
var sig_correlations = cljs.core.first(s__58383__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__58382(cljs.core.rest(s__58383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(biomarker_correlations));
})())], null)], null);
});
app.core.mount_root = (function app$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.home_page], null),document.getElementById("app"));
});
app.core.refresh = (function app$core$refresh(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hot code Remount"], 0));

cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
}));

(app.single_var_table.make_all_correlations = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
}));

(app.single_var_table.get_significant_correlations = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
}));

(app.biomarker_data.get_var_name = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
}));

(app.biomarker_data.add_hrs = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
}));

(app.biomarker_data.make_acm_plot = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
}));

(app.stats.compute_correlations = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
}));

(app.specs.make_hiccup = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null));
}));

(app.csv_data_processing.get_validation_string = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null));

return new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__43982__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43981__43983__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43981__43983__auto__,new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null));
}));

(app.csv_data_processing.get_all_data_validation_string = orig_fn__43982__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null));

return new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null);
} else {
return null;
}
})()], null));


cljs.core.PersistentHashSet.createAsIfByAssoc([(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var-type","one-var-type",-412397558,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"many-var-type","many-var-type",578410339,null),new cljs.core.Symbol(null,"one-var-raw-data","one-var-raw-data",555715652,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Symbol(null,"float?","float?",673884616,null)], null)], null),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.float_QMARK_], null)], null),app.core.OneToManyCorrelation], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.float_QMARK_], null)], null),app.core.OneToManyCorrelation], null)], null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-all-data-validation-string","get-all-data-validation-string",-1361206755,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRows","DatedRows",-855163111,null)], null)], null),new cljs.core.Symbol("specs","Hiccup","specs/Hiccup",997018745,null)], null),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.core.DatedRows], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.core.DatedRows], null)], null),app.specs.Hiccup], null)], null));

return new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-all-correlations","make-all-correlations",-354399926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"correlations","correlations",-2137399540,null),new cljs.core.Symbol(null,"csv-data","csv-data",-294865515,null),new cljs.core.Symbol(null,"one-var-type","one-var-type",-412397558,null),new cljs.core.Symbol(null,"many-var-type","many-var-type",578410339,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null),new cljs.core.Symbol("proc","ProcessedRows","proc/ProcessedRows",1344500332,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,app.csv_data_processing.ProcessedRows,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),app.core.OneToManyCorrelation], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,app.csv_data_processing.ProcessedRows,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),app.core.OneToManyCorrelation], null)], null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-var-name","get-var-name",-1019029362,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-hrs","add-hrs",-806622053,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null),new cljs.core.Symbol(null,"acm-data","acm-data",856269948,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds hazard ratios to personal data points for plotting purposes.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"HazardRatioData","HazardRatioData",1513549663,null)], null)], null),new cljs.core.Symbol(null,"HRTimeseriesData","HRTimeseriesData",1577978862,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.core.HazardRatioData], null)], null),app.core.HRTimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.core.HazardRatioData], null)], null),app.core.HRTimeseriesData], null)], null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-validation-string","get-validation-string",1434627800,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DatedRows","DatedRows",-855163111,null)], null),new cljs.core.Symbol("specs","Hiccup","specs/Hiccup",997018745,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.DatedRows], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.DatedRows], null),app.specs.Hiccup], null)], null));

return new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.specs","app.specs",384021979,null),new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.core.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.core.Hiccup], null)], null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"biomarkers","biomarkers",-627500280,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null)], null),new cljs.core.Symbol("proc","ProcessedRows","proc/ProcessedRows",1344500332,null)], null),new cljs.core.Symbol(null,"PairwiseCorrelations","PairwiseCorrelations",2041440480,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.keyword_QMARK_], null),app.csv_data_processing.ProcessedRows], null),app.core.PairwiseCorrelations], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.keyword_QMARK_], null),app.csv_data_processing.ProcessedRows], null),app.core.PairwiseCorrelations], null)], null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-acm-plot","make-acm-plot",-196269751,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null),new cljs.core.Symbol(null,"bio-data","bio-data",1842952455,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null),new cljs.core.Symbol(null,"BiomarkerData","BiomarkerData",1377791739,null)], null),new cljs.core.Symbol("specs","Hiccup","specs/Hiccup",997018745,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData,app.core.BiomarkerData], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData,app.core.BiomarkerData], null),app.specs.Hiccup], null)], null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,app.csv_data_processing.ProcessedRows,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),app.core.OneToManyCorrelation], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.float_QMARK_], null)], null),app.core.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.core.HazardRatioData], null)], null),app.core.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.TimeseriesData,app.core.BiomarkerData], null),app.specs.Hiccup], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.keyword_QMARK_], null),app.csv_data_processing.ProcessedRows], null),app.core.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.core.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null),app.csv_data_processing.get_validation_string);
}));

(app.csv_data_processing.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.core.DatedRows], null),app.specs.Hiccup], null))], null),app.csv_data_processing.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null));

return new cljs.core.Symbol("app.csv-data-processing","get-validation-string","app.csv-data-processing/get-validation-string",-1945229626,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__43960__43961__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43960__43961__auto__,new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null),app.csv_data_processing.get_all_data_validation_string);
}));

(app.csv_data_processing.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.core.DatedRows], null)], null),app.specs.Hiccup], null))], null),app.csv_data_processing.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null));

return new cljs.core.Symbol("app.csv-data-processing","get-all-data-validation-string","app.csv-data-processing/get-all-data-validation-string",2034903571,null);
})()
], null));


return app.core.mount_root();
});
app.core.init_BANG_ = (function app$core$init_BANG_(){
return app.core.mount_root();
});
goog.exportSymbol('app.core.init_BANG_', app.core.init_BANG_);

//# sourceMappingURL=app.core.js.map
