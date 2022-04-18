goog.provide('app.core');
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68909_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__68909_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._LT_),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68910_SHARP_){
return ((cljs.core.vector_QMARK_(p1__68910_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__68910_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
app.core.home_page = (function app$core$home_page(){
var aggregation_granularity = reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (p1__68914_SHARP_){
return malli.core.validate.cljs$core$IFn$_invoke$arity$2(app.time.PeriodIdTypes,p1__68914_SHARP_);
})], 0));
var p_values_rounded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
var map__68920 = cljs.core.deref(app.csv.csv_data);
var map__68920__$1 = cljs.core.__destructure_map(map__68920);
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68920__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68920__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68920__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68920__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
var inputs = app.core.get_vars(input_data);
var biomarkers = app.core.get_vars(biomarker_data);
var processed_data = app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data,biomarker_data], 0));
var data_by_aggregates = app.aggregation.aggregate_data(processed_data,cljs.core.deref(aggregation_granularity),app.math.average);
var aggregated_data = cljs.core.vals(data_by_aggregates);
var pairwise_correlations = app.stats.compute_correlations(inputs,biomarkers,aggregated_data);
var input_correlations = app.single_var_table.make_all_correlations(pairwise_correlations,aggregated_data,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816));
var biomarker_correlations = app.single_var_table.make_all_correlations(pairwise_correlations,aggregated_data,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),new cljs.core.Keyword(null,"input","input",556931961));
var pairwise_correlations_for_table = app.stats.enliten(pairwise_correlations);
var flat_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.flatten_map,pairwise_correlations_for_table);
var flat_results_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(flat_results);
return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.content","div.app.content",2048228731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Biomarker Correlator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This application calculates cross correlations between inputs and\n        biomarkers in an attempt to identify statistically significant\n        correlations. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Despite presenting like a website, there is no server\n        behind this app that data is sent to for analysis; everything is done\n        client side in the browser. Therefore, the page can be saved and run\n        offline as needed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Data Ingestion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Google Drive Integration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Once signed in and authorized, this application will search through\n        your Google Drive, find a folder named \"biomarker-correlator\", and then\n        process the files within that folder. Any CSV files with \"inputs\" in\n        the name will be treated as the input data files and any with \"biomarkers\"\n        in the name will be treated as the biomarker data files."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you are getting permissions issues, note that you need to be\n        whitelisted as this app is currently not verified with Google. Please\n        contact kovas[dot]palunas[at]gmail.com if you want to be whitelisted."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"authorize_button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),"Authorize"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"signout_button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),"Sign Out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.google_drive.populate_data_BANG_();
})], null),"Fetch Google Drive Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"Found files ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.google_drive.found_files))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Input validation: ",app.input_data_validation.get_validation_string(input_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Biomarker validation: ",app.input_data_validation.get_validation_string(biomarker_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cross data validation: ",app.input_data_validation.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data,biomarker_data], 0))], null),app.aggregation.aggregation_section(aggregation_granularity,cljs.core.keys(data_by_aggregates)),app.timeline.timeline_for_page(processed_data,cljs.core.keys(data_by_aggregates)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not statistically significant results are displayed with greyed-out\n        text.  The score for each input is calculated as the number of\n        statistically significant correlations that are positive, minus the number\n        that are negative.  We need a spreadsheet (or something built in to the\n        app) that determines for each biomarker whether up is good or bad with\n        respect to calculating the score."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"p-values-rounded?","p-values-rounded?",-1239433302)], null),"Round p-values?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-values-rounded?","p-values-rounded?",-1239433302),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__68917_SHARP_){
return cljs.core.reset_BANG_(p_values_rounded_QMARK_,p1__68917_SHARP_.target.checked);
}),new cljs.core.Keyword(null,"value","value",305978217),true,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),true], null)], null),app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic(app.comparison_matrix_table.make_comparison_matrix_data(pairwise_correlations_for_table,input_correlations,p_values_rounded_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-make-datagrid-column","custom-make-datagrid-column",1791443794),app.comparison_matrix_table.make_datagrid_column], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_datagrid(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__68924(s__68925){
return (new cljs.core.LazySeq(null,(function (){
var s__68925__$1 = s__68925;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__68925__$1);
if(temp__5753__auto__){
var s__68925__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68925__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68925__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68927 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68926 = (0);
while(true){
if((i__68926 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__68926);
cljs.core.chunk_append(b__68927,app.single_var_table.make_hiccup(sig_correlations));

var G__69461 = (i__68926 + (1));
i__68926 = G__69461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68927),app$core$home_page_$_iter__68924(cljs.core.chunk_rest(s__68925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68927),null);
}
} else {
var sig_correlations = cljs.core.first(s__68925__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__68924(cljs.core.rest(s__68925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(input_correlations));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__68930(s__68931){
return (new cljs.core.LazySeq(null,(function (){
var s__68931__$1 = s__68931;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__68931__$1);
if(temp__5753__auto__){
var s__68931__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68931__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68931__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68933 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68932 = (0);
while(true){
if((i__68932 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__68932);
cljs.core.chunk_append(b__68933,app.single_var_table.make_hiccup(sig_correlations));

var G__69462 = (i__68932 + (1));
i__68932 = G__69462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68933),app$core$home_page_$_iter__68930(cljs.core.chunk_rest(s__68931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68933),null);
}
} else {
var sig_correlations = cljs.core.first(s__68931__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__68930(cljs.core.rest(s__68931__$2)));
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
});
app.core.mount_root = (function app$core$mount_root(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.home_page], null),document.getElementById("app"));

return handleClientLoad();
});
app.core.refresh = (function app$core$refresh(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hot code Remount"], 0));

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.fromArray([(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
}));

(app.time.parse_date_range = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
}));

(app.time.date_to_timestamp = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
}));

(app.time.map_to_timestamp = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
}));

(app.time.timestamp_to_date_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
}));

(app.time.timestamp_to_full_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
}));

(app.time.get_period_range = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
}));

(app.time.parse_date = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
}));

(app.time.group_by_period = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
}));

(app.math.average = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
}));

(app.single_var_table.get_csv_values = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
}));

(app.single_var_table.get_one_var_timeseries_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
}));

(app.single_var_table.make_all_correlations = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
}));

(app.single_var_table.calc_counted_score = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
}));

(app.single_var_table.make_hiccup = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
}));

(app.single_var_table.get_significant_correlations = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
}));

(app.csv_data_processing.merge_rows_using_dates = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
}));

(app.csv_data_processing.add_timestamps = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
}));

(app.csv_data_processing.floatify_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
}));

(app.csv_data_processing.process_csv_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
} else {
return null;
}
})(),null,(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
}));

(app.biomarker_data.get_var_name = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
}));

(app.biomarker_data.add_hrs = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
}));

(app.biomarker_data.make_acm_plot = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
}));

(app.timeline.rows_to_events = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
}));

(app.timeline.ranges_to_events = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
}));

(app.timeline.get_unique_lanes = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
}));

(app.timeline.make_timeline = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
}));

(app.timeline.timeline_for_page = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
}));

(app.csv._standardize_keys = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
}));

(app.input_data_validation.get_all_data_validation_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
}));

(app.input_data_validation.get_validation_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
}));

(app.ui.maps_to_html = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
}));

(app.aggregation.combine_rows = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
}));

(app.aggregation.aggregate_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
}));

(app.aggregation.aggregation_section = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
}));

(app.stats.clean_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
}));

(app.stats.compute_correlations = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
}));

(app.stats.enliten = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
}));

(app.stats.calc_correlation = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
}));

(app.specs.make_hiccup = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
}));

(app.core.get_vars = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
}));

(app.comparison_matrix_table.make_comparison_matrix_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
}));

(app.comparison_matrix_table.add_aggregates = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
} else {
return null;
}
})()], true));

cljs.core.PersistentHashSet.createAsIfByAssoc([(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.specs","app.specs",384021979,null),new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.ui","app.ui",-1105541323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"maps-to-html","maps-to-html",-541539065,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"maps","maps",-71029607,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts collection of maps like\n  [{:col1 val1 :col2 val2} {:col1 val3 :col2 val4}]\n  to an HTML table.\n  \n  See https://stackoverflow.com/a/33458370 for ^{:key} map explanation.\n  ",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.Symbol("specs","Hiccup","specs/Hiccup",997018745,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a table like this:\n           Input\n        Aggregate 1\n        Aggregate 2\n  Biomarker | r | p | n\n  data      | 0 | 0 | 0\n  ...\n  ",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.Symbol("specs","ReagentComponent","specs/ReagentComponent",-1072943109,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-flat-biomarker-result-keys","get-flat-biomarker-result-keys",-2049940581,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter-func","filter-func",1579225169,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts {:input :i :biomarker :b :results {:slope 5.0}} to\n  {:input :i :b--slope 5.0}\n\n  Also adds blank columns like :b--blank that add spacing between each\n  biomarker in the final visualizations.\n  ",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"clean-data","clean-data",-1052461118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var1","var1",-1275717593,null),new cljs.core.Symbol(null,"var2","var2",224401682,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null)], null),new cljs.core.Symbol(null,"PairedData","PairedData",-127976159,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-vars","get-vars",-205083548,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Gets all variables (csv columns) from parsed csv maps besides the date.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"correlations","correlations",-2137399540,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sums up all postive correlations and all negatives correlations, then takes\n  the difference.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null)], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-all-data-validation-string","get-all-data-validation-string",-1361206755,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"date-to-timestamp","date-to-timestamp",2065727848,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ranges-to-events","ranges-to-events",301360784,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ranges","ranges",-766749087,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var-type","one-var-type",-412397558,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"many-var-type","many-var-type",578410339,null),new cljs.core.Symbol(null,"one-var-raw-data","one-var-raw-data",555715652,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"timeline-for-page","timeline-for-page",-1039362884,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"aggregate-ranges","aggregate-ranges",1647778724,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null)], null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-acm-plot","make-acm-plot",-196269751,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null),new cljs.core.Symbol(null,"bio-data","bio-data",1842952455,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null),new cljs.core.Symbol(null,"BiomarkerData","BiomarkerData",1377791739,null)], null),new cljs.core.Symbol("specs","ReagentComponent","specs/ReagentComponent",-1072943109,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-correlation","calc-correlation",-1536134913,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var1","var1",-1275717593,null),new cljs.core.Symbol(null,"var2","var2",224401682,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null)], null),new cljs.core.Symbol(null,"CorrelationResults","CorrelationResults",-11311847,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.math","app.math",-1829237435,null),new cljs.core.Symbol(null,"average","average",1148175359,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-hrs","add-hrs",-806622053,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null),new cljs.core.Symbol(null,"acm-data","acm-data",856269948,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds hazard ratios to personal data points for plotting purposes.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"HazardRatioData","HazardRatioData",1513549663,null)], null)], null),new cljs.core.Symbol(null,"HRTimeseriesData","HRTimeseriesData",1577978862,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-timeline","make-timeline",1145184863,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events","events",-861883568,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a react-svg-timeline from event data.\n  \n  https://github.com/netzwerg/react-svg-timeline",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-to-timestamp","map-to-timestamp",-1994834865,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"month","month",-319717006,null),new cljs.core.Symbol(null,"date","date",177097065,null),new cljs.core.Symbol(null,"year","year",1976444920,null)], null)], null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.aggregation","app.aggregation",-900552010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregate-data","aggregate-data",-2042941716,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null),new cljs.core.Symbol(null,"aggregation-fn","aggregation-fn",1000032117,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges data points in the input together if they fall inside the same time\n  window. The merged data point will use the earliest timestamp from all the points\n  in the same window.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null),new cljs.core.Symbol("time","PeriodIdTypes","time/PeriodIdTypes",367065633,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol("time","PeriodRange","time/PeriodRange",-738464815,null),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-aggregates","add-aggregates",1165374252,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-significant-correlations","input-significant-correlations",1633920401,null),new cljs.core.Symbol(null,"flat-map","flat-map",290994851,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"process-csv-data","process-csv-data",832595554,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges N sequences of row maps (e.g. from different spreadsheets) using\n  the :date field as the joining attribute."], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"rows-to-events","rows-to-events",-541848865,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-period-range","get-period-range",1599975922,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the period range in which the input timestamp falls.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null),new cljs.core.Symbol(null,"PeriodIdTypes","PeriodIdTypes",364588406,null)], null),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.aggregation","app.aggregation",-900552010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"combine-rows","combine-rows",-1669772216,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aggregation-fn","aggregation-fn",1000032117,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.aggregation","app.aggregation",-900552010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-section","aggregation-section",1432774371,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aggregation-granularity","aggregation-granularity",1797945104,null),new cljs.core.Symbol(null,"aggregate-ranges","aggregate-ranges",1647778724,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("time","PeriodRange","time/PeriodRange",-738464815,null)], null)], null),new cljs.core.Symbol("specs","ReagentComponent","specs/ReagentComponent",-1072943109,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-var-name","get-var-name",-1019029362,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv","app.csv",1676676688,null),cljs.core.with_meta(new cljs.core.Symbol(null,"-standardize-keys","-standardize-keys",-1001622265,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parsed-data","parsed-data",-402899125,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-unique-lanes","get-unique-lanes",-1151093382,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events","events",-861883568,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Lane","Lane",-652642128,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-csv-values","get-csv-values",1025959841,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"csv-data","csv-data",-294865515,null),new cljs.core.Symbol(null,"column-name","column-name",-2102912189,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Filters NaNs while getting the data.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"group-by-period","group-by-period",-822796806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null),new cljs.core.Symbol(null,"PeriodIdTypes","PeriodIdTypes",364588406,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-all-correlations","make-all-correlations",-354399926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"correlations","correlations",-2137399540,null),new cljs.core.Symbol(null,"csv-data","csv-data",-294865515,null),new cljs.core.Symbol(null,"one-var-type","one-var-type",-412397558,null),new cljs.core.Symbol(null,"many-var-type","many-var-type",578410339,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parse-date-range","parse-date-range",-921785304,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date-range","date-range",1703615044,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return\n  the first date unless it is unparsable, in which case will return the second.\n  If no 'to' is in the string, will just return the only date (if it is one).",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-one-var-timeseries-data","get-one-var-timeseries-data",-218445081,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.Symbol("biodata","TimeseriesData","biodata/TimeseriesData",-193357283,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"enliten","enliten",-1870304744,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pairwise-correlations","pairwise-correlations",1521534226,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"PairwiseCorrelations","PairwiseCorrelations",2041440480,null)], null),new cljs.core.Symbol(null,"PairwiseCorrelationsLite","PairwiseCorrelationsLite",-1382581423,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"timestamp-to-full-string","timestamp-to-full-string",-706478831,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"biomarkers","biomarkers",-627500280,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null)], null),new cljs.core.Symbol(null,"PairwiseCorrelations","PairwiseCorrelations",2041440480,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"timestamp-to-date-string","timestamp-to-date-string",-1183801841,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parse-date","parse-date",-1997835208,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date-string","date-string",-923104564,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-comparison-matrix-data","make-comparison-matrix-data",-2779548,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"input-significant-correlations","input-significant-correlations",1633920401,null),new cljs.core.Symbol(null,"p-values-rounded?","p-values-rounded?",401098225,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelationsLite","stats/PairwiseCorrelationsLite",-1811135248,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-validation-string","get-validation-string",1434627800,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.fromArray([(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null),app.time.parse_date_range);
}));

(app.time.parse_date_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__68971 = type__40667__auto__;
var G__68972 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
var fexpr__68970 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__68970.cljs$core$IFn$_invoke$arity$2 ? fexpr__68970.cljs$core$IFn$_invoke$arity$2(G__68971,G__68972) : fexpr__68970.call(null,G__68971,G__68972));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null))], null),app.time.parse_date_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null),app.time.date_to_timestamp);
}));

(app.time.date_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__68977 = type__40667__auto__;
var G__68978 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
var fexpr__68976 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__68976.cljs$core$IFn$_invoke$arity$2 ? fexpr__68976.cljs$core$IFn$_invoke$arity$2(G__68977,G__68978) : fexpr__68976.call(null,G__68977,G__68978));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null))], null),app.time.date_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null),app.time.map_to_timestamp);
}));

(app.time.map_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__68986 = type__40667__auto__;
var G__68987 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
var fexpr__68985 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__68985.cljs$core$IFn$_invoke$arity$2 ? fexpr__68985.cljs$core$IFn$_invoke$arity$2(G__68986,G__68987) : fexpr__68985.call(null,G__68986,G__68987));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null))], null),app.time.map_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null),app.time.timestamp_to_date_string);
}));

(app.time.timestamp_to_date_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__68992 = type__40667__auto__;
var G__68993 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
var fexpr__68991 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__68991.cljs$core$IFn$_invoke$arity$2 ? fexpr__68991.cljs$core$IFn$_invoke$arity$2(G__68992,G__68993) : fexpr__68991.call(null,G__68992,G__68993));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_date_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null),app.time.timestamp_to_full_string);
}));

(app.time.timestamp_to_full_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__68998 = type__40667__auto__;
var G__68999 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
var fexpr__68997 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__68997.cljs$core$IFn$_invoke$arity$2 ? fexpr__68997.cljs$core$IFn$_invoke$arity$2(G__68998,G__68999) : fexpr__68997.call(null,G__68998,G__68999));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_full_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null),app.time.get_period_range);
}));

(app.time.get_period_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69004 = type__40667__auto__;
var G__69005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
var fexpr__69003 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69003.cljs$core$IFn$_invoke$arity$2 ? fexpr__69003.cljs$core$IFn$_invoke$arity$2(G__69004,G__69005) : fexpr__69003.call(null,G__69004,G__69005));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null))], null),app.time.get_period_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null),app.time.parse_date);
}));

(app.time.parse_date = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69010 = type__40667__auto__;
var G__69011 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
var fexpr__69009 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69009.cljs$core$IFn$_invoke$arity$2 ? fexpr__69009.cljs$core$IFn$_invoke$arity$2(G__69010,G__69011) : fexpr__69009.call(null,G__69010,G__69011));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null))], null),app.time.parse_date));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null),app.time.group_by_period);
}));

(app.time.group_by_period = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69016 = type__40667__auto__;
var G__69017 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
var fexpr__69015 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69015.cljs$core$IFn$_invoke$arity$2 ? fexpr__69015.cljs$core$IFn$_invoke$arity$2(G__69016,G__69017) : fexpr__69015.call(null,G__69016,G__69017));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null))], null),app.time.group_by_period));

console.log("..instrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null),app.math.average);
}));

(app.math.average = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69022 = type__40667__auto__;
var G__69023 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
var fexpr__69021 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69021.cljs$core$IFn$_invoke$arity$2 ? fexpr__69021.cljs$core$IFn$_invoke$arity$2(G__69022,G__69023) : fexpr__69021.call(null,G__69022,G__69023));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null))], null),app.math.average));

console.log("..instrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null),app.single_var_table.get_csv_values);
}));

(app.single_var_table.get_csv_values = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69028 = type__40667__auto__;
var G__69029 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
var fexpr__69027 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69027.cljs$core$IFn$_invoke$arity$2 ? fexpr__69027.cljs$core$IFn$_invoke$arity$2(G__69028,G__69029) : fexpr__69027.call(null,G__69028,G__69029));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null))], null),app.single_var_table.get_csv_values));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),app.single_var_table.get_one_var_timeseries_data);
}));

(app.single_var_table.get_one_var_timeseries_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69034 = type__40667__auto__;
var G__69035 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
var fexpr__69033 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69033.cljs$core$IFn$_invoke$arity$2 ? fexpr__69033.cljs$core$IFn$_invoke$arity$2(G__69034,G__69035) : fexpr__69033.call(null,G__69034,G__69035));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null))], null),app.single_var_table.get_one_var_timeseries_data));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69043 = type__40667__auto__;
var G__69044 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
var fexpr__69042 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69042.cljs$core$IFn$_invoke$arity$2 ? fexpr__69042.cljs$core$IFn$_invoke$arity$2(G__69043,G__69044) : fexpr__69042.call(null,G__69043,G__69044));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),app.single_var_table.calc_counted_score);
}));

(app.single_var_table.calc_counted_score = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69049 = type__40667__auto__;
var G__69050 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
var fexpr__69048 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69048.cljs$core$IFn$_invoke$arity$2 ? fexpr__69048.cljs$core$IFn$_invoke$arity$2(G__69049,G__69050) : fexpr__69048.call(null,G__69049,G__69050));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),app.single_var_table.calc_counted_score));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),app.single_var_table.make_hiccup);
}));

(app.single_var_table.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69055 = type__40667__auto__;
var G__69056 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
var fexpr__69054 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69054.cljs$core$IFn$_invoke$arity$2 ? fexpr__69054.cljs$core$IFn$_invoke$arity$2(G__69055,G__69056) : fexpr__69054.call(null,G__69055,G__69056));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null))], null),app.single_var_table.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69061 = type__40667__auto__;
var G__69062 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
var fexpr__69060 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69060.cljs$core$IFn$_invoke$arity$2 ? fexpr__69060.cljs$core$IFn$_invoke$arity$2(G__69061,G__69062) : fexpr__69060.call(null,G__69061,G__69062));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),app.csv_data_processing.merge_rows_using_dates);
}));

(app.csv_data_processing.merge_rows_using_dates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69067 = type__40667__auto__;
var G__69068 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
var fexpr__69066 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69066.cljs$core$IFn$_invoke$arity$2 ? fexpr__69066.cljs$core$IFn$_invoke$arity$2(G__69067,G__69068) : fexpr__69066.call(null,G__69067,G__69068));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.merge_rows_using_dates));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),app.csv_data_processing.add_timestamps);
}));

(app.csv_data_processing.add_timestamps = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69073 = type__40667__auto__;
var G__69074 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
var fexpr__69072 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69072.cljs$core$IFn$_invoke$arity$2 ? fexpr__69072.cljs$core$IFn$_invoke$arity$2(G__69073,G__69074) : fexpr__69072.call(null,G__69073,G__69074));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.add_timestamps));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),app.csv_data_processing.floatify_data);
}));

(app.csv_data_processing.floatify_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69079 = type__40667__auto__;
var G__69080 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
var fexpr__69078 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69078.cljs$core$IFn$_invoke$arity$2 ? fexpr__69078.cljs$core$IFn$_invoke$arity$2(G__69079,G__69080) : fexpr__69078.call(null,G__69079,G__69080));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.floatify_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),app.csv_data_processing.process_csv_data);
}));

(app.csv_data_processing.process_csv_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69085 = type__40667__auto__;
var G__69086 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
var fexpr__69084 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69084.cljs$core$IFn$_invoke$arity$2 ? fexpr__69084.cljs$core$IFn$_invoke$arity$2(G__69085,G__69086) : fexpr__69084.call(null,G__69085,G__69086));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null))], null),app.csv_data_processing.process_csv_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,null,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69091 = type__40667__auto__;
var G__69092 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
var fexpr__69090 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69090.cljs$core$IFn$_invoke$arity$2 ? fexpr__69090.cljs$core$IFn$_invoke$arity$2(G__69091,G__69092) : fexpr__69090.call(null,G__69091,G__69092));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69100 = type__40667__auto__;
var G__69101 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
var fexpr__69099 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69099.cljs$core$IFn$_invoke$arity$2 ? fexpr__69099.cljs$core$IFn$_invoke$arity$2(G__69100,G__69101) : fexpr__69099.call(null,G__69100,G__69101));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69106 = type__40667__auto__;
var G__69107 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
var fexpr__69105 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69105.cljs$core$IFn$_invoke$arity$2 ? fexpr__69105.cljs$core$IFn$_invoke$arity$2(G__69106,G__69107) : fexpr__69105.call(null,G__69106,G__69107));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null),app.timeline.rows_to_events);
}));

(app.timeline.rows_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69112 = type__40667__auto__;
var G__69113 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
var fexpr__69111 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69111.cljs$core$IFn$_invoke$arity$2 ? fexpr__69111.cljs$core$IFn$_invoke$arity$2(G__69112,G__69113) : fexpr__69111.call(null,G__69112,G__69113));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.rows_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null),app.timeline.ranges_to_events);
}));

(app.timeline.ranges_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69118 = type__40667__auto__;
var G__69119 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
var fexpr__69117 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69117.cljs$core$IFn$_invoke$arity$2 ? fexpr__69117.cljs$core$IFn$_invoke$arity$2(G__69118,G__69119) : fexpr__69117.call(null,G__69118,G__69119));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.ranges_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null),app.timeline.get_unique_lanes);
}));

(app.timeline.get_unique_lanes = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69124 = type__40667__auto__;
var G__69125 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
var fexpr__69123 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69123.cljs$core$IFn$_invoke$arity$2 ? fexpr__69123.cljs$core$IFn$_invoke$arity$2(G__69124,G__69125) : fexpr__69123.call(null,G__69124,G__69125));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null))], null),app.timeline.get_unique_lanes));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null),app.timeline.make_timeline);
}));

(app.timeline.make_timeline = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69130 = type__40667__auto__;
var G__69131 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
var fexpr__69129 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69129.cljs$core$IFn$_invoke$arity$2 ? fexpr__69129.cljs$core$IFn$_invoke$arity$2(G__69130,G__69131) : fexpr__69129.call(null,G__69130,G__69131));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.make_timeline));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null),app.timeline.timeline_for_page);
}));

(app.timeline.timeline_for_page = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69136 = type__40667__auto__;
var G__69137 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
var fexpr__69135 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69135.cljs$core$IFn$_invoke$arity$2 ? fexpr__69135.cljs$core$IFn$_invoke$arity$2(G__69136,G__69137) : fexpr__69135.call(null,G__69136,G__69137));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.timeline_for_page));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null),app.csv._standardize_keys);
}));

(app.csv._standardize_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69145 = type__40667__auto__;
var G__69146 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
var fexpr__69144 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69144.cljs$core$IFn$_invoke$arity$2 ? fexpr__69144.cljs$core$IFn$_invoke$arity$2(G__69145,G__69146) : fexpr__69144.call(null,G__69145,G__69146));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null))], null),app.csv._standardize_keys));

console.log("..instrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null),app.input_data_validation.get_all_data_validation_string);
}));

(app.input_data_validation.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69151 = type__40667__auto__;
var G__69152 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
var fexpr__69150 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69150.cljs$core$IFn$_invoke$arity$2 ? fexpr__69150.cljs$core$IFn$_invoke$arity$2(G__69151,G__69152) : fexpr__69150.call(null,G__69151,G__69152));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null),app.input_data_validation.get_validation_string);
}));

(app.input_data_validation.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69157 = type__40667__auto__;
var G__69158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
var fexpr__69156 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69156.cljs$core$IFn$_invoke$arity$2 ? fexpr__69156.cljs$core$IFn$_invoke$arity$2(G__69157,G__69158) : fexpr__69156.call(null,G__69157,G__69158));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),app.ui.maps_to_html);
}));

(app.ui.maps_to_html = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69163 = type__40667__auto__;
var G__69164 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
var fexpr__69162 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69162.cljs$core$IFn$_invoke$arity$2 ? fexpr__69162.cljs$core$IFn$_invoke$arity$2(G__69163,G__69164) : fexpr__69162.call(null,G__69163,G__69164));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null))], null),app.ui.maps_to_html));

console.log("..instrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null),app.aggregation.combine_rows);
}));

(app.aggregation.combine_rows = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69166 = type__40667__auto__;
var G__69167 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
var fexpr__69165 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69165.cljs$core$IFn$_invoke$arity$2 ? fexpr__69165.cljs$core$IFn$_invoke$arity$2(G__69166,G__69167) : fexpr__69165.call(null,G__69166,G__69167));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null))], null),app.aggregation.combine_rows));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null),app.aggregation.aggregate_data);
}));

(app.aggregation.aggregate_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69169 = type__40667__auto__;
var G__69170 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
var fexpr__69168 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69168.cljs$core$IFn$_invoke$arity$2 ? fexpr__69168.cljs$core$IFn$_invoke$arity$2(G__69169,G__69170) : fexpr__69168.call(null,G__69169,G__69170));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null))], null),app.aggregation.aggregate_data));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null),app.aggregation.aggregation_section);
}));

(app.aggregation.aggregation_section = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69172 = type__40667__auto__;
var G__69173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
var fexpr__69171 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69171.cljs$core$IFn$_invoke$arity$2 ? fexpr__69171.cljs$core$IFn$_invoke$arity$2(G__69172,G__69173) : fexpr__69171.call(null,G__69172,G__69173));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.aggregation.aggregation_section));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null),app.stats.clean_data);
}));

(app.stats.clean_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69175 = type__40667__auto__;
var G__69176 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
var fexpr__69174 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69174.cljs$core$IFn$_invoke$arity$2 ? fexpr__69174.cljs$core$IFn$_invoke$arity$2(G__69175,G__69176) : fexpr__69174.call(null,G__69175,G__69176));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null))], null),app.stats.clean_data));

console.log("..instrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69178 = type__40667__auto__;
var G__69179 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
var fexpr__69177 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69177.cljs$core$IFn$_invoke$arity$2 ? fexpr__69177.cljs$core$IFn$_invoke$arity$2(G__69178,G__69179) : fexpr__69177.call(null,G__69178,G__69179));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null),app.stats.enliten);
}));

(app.stats.enliten = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69181 = type__40667__auto__;
var G__69182 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
var fexpr__69180 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69180.cljs$core$IFn$_invoke$arity$2 ? fexpr__69180.cljs$core$IFn$_invoke$arity$2(G__69181,G__69182) : fexpr__69180.call(null,G__69181,G__69182));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null))], null),app.stats.enliten));

console.log("..instrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null),app.stats.calc_correlation);
}));

(app.stats.calc_correlation = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69184 = type__40667__auto__;
var G__69185 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
var fexpr__69183 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69183.cljs$core$IFn$_invoke$arity$2 ? fexpr__69183.cljs$core$IFn$_invoke$arity$2(G__69184,G__69185) : fexpr__69183.call(null,G__69184,G__69185));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null))], null),app.stats.calc_correlation));

console.log("..instrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69187 = type__40667__auto__;
var G__69188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
var fexpr__69186 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69186.cljs$core$IFn$_invoke$arity$2 ? fexpr__69186.cljs$core$IFn$_invoke$arity$2(G__69187,G__69188) : fexpr__69186.call(null,G__69187,G__69188));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null),app.core.get_vars);
}));

(app.core.get_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69190 = type__40667__auto__;
var G__69191 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
var fexpr__69189 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69189.cljs$core$IFn$_invoke$arity$2 ? fexpr__69189.cljs$core$IFn$_invoke$arity$2(G__69190,G__69191) : fexpr__69189.call(null,G__69190,G__69191));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null))], null),app.core.get_vars));

console.log("..instrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),app.comparison_matrix_table.make_comparison_matrix_data);
}));

(app.comparison_matrix_table.make_comparison_matrix_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69193 = type__40667__auto__;
var G__69194 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
var fexpr__69192 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69192.cljs$core$IFn$_invoke$arity$2 ? fexpr__69192.cljs$core$IFn$_invoke$arity$2(G__69193,G__69194) : fexpr__69192.call(null,G__69193,G__69194));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null))], null),app.comparison_matrix_table.make_comparison_matrix_data));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),app.comparison_matrix_table.add_aggregates);
}));

(app.comparison_matrix_table.add_aggregates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69196 = type__40667__auto__;
var G__69197 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
var fexpr__69195 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69195.cljs$core$IFn$_invoke$arity$2 ? fexpr__69195.cljs$core$IFn$_invoke$arity$2(G__69196,G__69197) : fexpr__69195.call(null,G__69196,G__69197));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.add_aggregates));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null),app.comparison_matrix_table.get_flat_biomarker_result_keys);
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69199 = type__40667__auto__;
var G__69200 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
var fexpr__69198 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69198.cljs$core$IFn$_invoke$arity$2 ? fexpr__69198.cljs$core$IFn$_invoke$arity$2(G__69199,G__69200) : fexpr__69198.call(null,G__69199,G__69200));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.get_flat_biomarker_result_keys));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
})()
], true));

return app.core.mount_root();
});
app.core.init_BANG_ = (function app$core$init_BANG_(){
cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.fromArray([(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
}));

(app.time.parse_date_range = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
}));

(app.time.date_to_timestamp = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
}));

(app.time.map_to_timestamp = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
}));

(app.time.timestamp_to_date_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
}));

(app.time.timestamp_to_full_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
}));

(app.time.get_period_range = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
}));

(app.time.parse_date = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
}));

(app.time.group_by_period = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
}));

(app.math.average = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
}));

(app.single_var_table.get_csv_values = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
}));

(app.single_var_table.get_one_var_timeseries_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
}));

(app.single_var_table.make_all_correlations = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
}));

(app.single_var_table.calc_counted_score = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
}));

(app.single_var_table.make_hiccup = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
}));

(app.single_var_table.get_significant_correlations = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
}));

(app.csv_data_processing.merge_rows_using_dates = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
}));

(app.csv_data_processing.add_timestamps = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
}));

(app.csv_data_processing.floatify_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
}));

(app.csv_data_processing.process_csv_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
} else {
return null;
}
})(),null,(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
}));

(app.biomarker_data.get_var_name = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
}));

(app.biomarker_data.add_hrs = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
}));

(app.biomarker_data.make_acm_plot = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
}));

(app.timeline.rows_to_events = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
}));

(app.timeline.ranges_to_events = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
}));

(app.timeline.get_unique_lanes = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
}));

(app.timeline.make_timeline = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
}));

(app.timeline.timeline_for_page = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
}));

(app.csv._standardize_keys = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
}));

(app.input_data_validation.get_all_data_validation_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
}));

(app.input_data_validation.get_validation_string = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
}));

(app.ui.maps_to_html = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
}));

(app.aggregation.combine_rows = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
}));

(app.aggregation.aggregate_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
}));

(app.aggregation.aggregation_section = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
}));

(app.stats.clean_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
}));

(app.stats.compute_correlations = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
}));

(app.stats.enliten = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
}));

(app.stats.calc_correlation = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
}));

(app.specs.make_hiccup = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
}));

(app.core.get_vars = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
}));

(app.comparison_matrix_table.make_comparison_matrix_data = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
}));

(app.comparison_matrix_table.add_aggregates = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40692__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40691__40693__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40691__40693__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = orig_fn__40692__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
} else {
return null;
}
})()], true));

cljs.core.PersistentHashSet.createAsIfByAssoc([(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.specs","app.specs",384021979,null),new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.ui","app.ui",-1105541323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"maps-to-html","maps-to-html",-541539065,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"maps","maps",-71029607,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts collection of maps like\n  [{:col1 val1 :col2 val2} {:col1 val3 :col2 val4}]\n  to an HTML table.\n  \n  See https://stackoverflow.com/a/33458370 for ^{:key} map explanation.\n  ",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.Symbol("specs","Hiccup","specs/Hiccup",997018745,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a table like this:\n           Input\n        Aggregate 1\n        Aggregate 2\n  Biomarker | r | p | n\n  data      | 0 | 0 | 0\n  ...\n  ",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.Symbol("specs","ReagentComponent","specs/ReagentComponent",-1072943109,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-flat-biomarker-result-keys","get-flat-biomarker-result-keys",-2049940581,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter-func","filter-func",1579225169,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts {:input :i :biomarker :b :results {:slope 5.0}} to\n  {:input :i :b--slope 5.0}\n\n  Also adds blank columns like :b--blank that add spacing between each\n  biomarker in the final visualizations.\n  ",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"clean-data","clean-data",-1052461118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var1","var1",-1275717593,null),new cljs.core.Symbol(null,"var2","var2",224401682,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null)], null),new cljs.core.Symbol(null,"PairedData","PairedData",-127976159,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-vars","get-vars",-205083548,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Gets all variables (csv columns) from parsed csv maps besides the date.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"correlations","correlations",-2137399540,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sums up all postive correlations and all negatives correlations, then takes\n  the difference.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null)], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-all-data-validation-string","get-all-data-validation-string",-1361206755,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"date-to-timestamp","date-to-timestamp",2065727848,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ranges-to-events","ranges-to-events",301360784,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ranges","ranges",-766749087,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var-type","one-var-type",-412397558,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"many-var-type","many-var-type",578410339,null),new cljs.core.Symbol(null,"one-var-raw-data","one-var-raw-data",555715652,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"timeline-for-page","timeline-for-page",-1039362884,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"aggregate-ranges","aggregate-ranges",1647778724,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null)], null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-acm-plot","make-acm-plot",-196269751,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null),new cljs.core.Symbol(null,"bio-data","bio-data",1842952455,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null),new cljs.core.Symbol(null,"BiomarkerData","BiomarkerData",1377791739,null)], null),new cljs.core.Symbol("specs","ReagentComponent","specs/ReagentComponent",-1072943109,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-correlation","calc-correlation",-1536134913,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var1","var1",-1275717593,null),new cljs.core.Symbol(null,"var2","var2",224401682,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null)], null),new cljs.core.Symbol(null,"CorrelationResults","CorrelationResults",-11311847,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.math","app.math",-1829237435,null),new cljs.core.Symbol(null,"average","average",1148175359,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-hrs","add-hrs",-806622053,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null),new cljs.core.Symbol(null,"acm-data","acm-data",856269948,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds hazard ratios to personal data points for plotting purposes.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"HazardRatioData","HazardRatioData",1513549663,null)], null)], null),new cljs.core.Symbol(null,"HRTimeseriesData","HRTimeseriesData",1577978862,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-timeline","make-timeline",1145184863,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events","events",-861883568,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a react-svg-timeline from event data.\n  \n  https://github.com/netzwerg/react-svg-timeline",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-to-timestamp","map-to-timestamp",-1994834865,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"month","month",-319717006,null),new cljs.core.Symbol(null,"date","date",177097065,null),new cljs.core.Symbol(null,"year","year",1976444920,null)], null)], null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.aggregation","app.aggregation",-900552010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregate-data","aggregate-data",-2042941716,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null),new cljs.core.Symbol(null,"aggregation-fn","aggregation-fn",1000032117,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges data points in the input together if they fall inside the same time\n  window. The merged data point will use the earliest timestamp from all the points\n  in the same window.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null),new cljs.core.Symbol("time","PeriodIdTypes","time/PeriodIdTypes",367065633,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol("time","PeriodRange","time/PeriodRange",-738464815,null),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-aggregates","add-aggregates",1165374252,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-significant-correlations","input-significant-correlations",1633920401,null),new cljs.core.Symbol(null,"flat-map","flat-map",290994851,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"process-csv-data","process-csv-data",832595554,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sets-of-rows","sets-of-rows",333287476,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges N sequences of row maps (e.g. from different spreadsheets) using\n  the :date field as the joining attribute."], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"rows-to-events","rows-to-events",-541848865,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-period-range","get-period-range",1599975922,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the period range in which the input timestamp falls.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null),new cljs.core.Symbol(null,"PeriodIdTypes","PeriodIdTypes",364588406,null)], null),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.aggregation","app.aggregation",-900552010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"combine-rows","combine-rows",-1669772216,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aggregation-fn","aggregation-fn",1000032117,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null),new cljs.core.Symbol(null,"ProcessedRow","ProcessedRow",1961706439,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.aggregation","app.aggregation",-900552010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-section","aggregation-section",1432774371,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aggregation-granularity","aggregation-granularity",1797945104,null),new cljs.core.Symbol(null,"aggregate-ranges","aggregate-ranges",1647778724,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("time","PeriodRange","time/PeriodRange",-738464815,null)], null)], null),new cljs.core.Symbol("specs","ReagentComponent","specs/ReagentComponent",-1072943109,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.biomarker-data","app.biomarker-data",420683242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-var-name","get-var-name",-1019029362,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"personal-data","personal-data",60654159,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"TimeseriesData","TimeseriesData",-31656625,null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv","app.csv",1676676688,null),cljs.core.with_meta(new cljs.core.Symbol(null,"-standardize-keys","-standardize-keys",-1001622265,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parsed-data","parsed-data",-402899125,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.timeline","app.timeline",1622223403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-unique-lanes","get-unique-lanes",-1151093382,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events","events",-861883568,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Event","Event",1164777331,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"Lane","Lane",-652642128,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv-data-processing","app.csv-data-processing",32426567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-csv-values","get-csv-values",1025959841,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"csv-data","csv-data",-294865515,null),new cljs.core.Symbol(null,"column-name","column-name",-2102912189,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Filters NaNs while getting the data.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"group-by-period","group-by-period",-822796806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null),new cljs.core.Symbol(null,"PeriodIdTypes","PeriodIdTypes",364588406,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-all-correlations","make-all-correlations",-354399926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"correlations","correlations",-2137399540,null),new cljs.core.Symbol(null,"csv-data","csv-data",-294865515,null),new cljs.core.Symbol(null,"one-var-type","one-var-type",-412397558,null),new cljs.core.Symbol(null,"many-var-type","many-var-type",578410339,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelations","stats/PairwiseCorrelations",2133201729,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parse-date-range","parse-date-range",-921785304,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date-range","date-range",1703615044,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return\n  the first date unless it is unparsable, in which case will return the second.\n  If no 'to' is in the string, will just return the only date (if it is one).",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-one-var-timeseries-data","get-one-var-timeseries-data",-218445081,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.Symbol("biodata","TimeseriesData","biodata/TimeseriesData",-193357283,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"enliten","enliten",-1870304744,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pairwise-correlations","pairwise-correlations",1521534226,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"PairwiseCorrelations","PairwiseCorrelations",2041440480,null)], null),new cljs.core.Symbol(null,"PairwiseCorrelationsLite","PairwiseCorrelationsLite",-1382581423,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"timestamp-to-full-string","timestamp-to-full-string",-706478831,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.stats","app.stats",1790392152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"biomarkers","biomarkers",-627500280,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol("proc","ProcessedRow","proc/ProcessedRow",1956179501,null)], null)], null),new cljs.core.Symbol(null,"PairwiseCorrelations","PairwiseCorrelations",2041440480,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"timestamp-to-date-string","timestamp-to-date-string",-1183801841,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parse-date","parse-date",-1997835208,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date-string","date-string",-923104564,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-comparison-matrix-data","make-comparison-matrix-data",-2779548,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"input-significant-correlations","input-significant-correlations",1633920401,null),new cljs.core.Symbol(null,"p-values-rounded?","p-values-rounded?",401098225,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol("stats","PairwiseCorrelationsLite","stats/PairwiseCorrelationsLite",-1811135248,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"OneToManyCorrelation","OneToManyCorrelation",-948827535,null)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-validation-string","get-validation-string",1434627800,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Symbol(null,"DatedRow","DatedRow",-316639818,null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.fromArray([(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null),app.time.parse_date_range);
}));

(app.time.parse_date_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69265 = type__40667__auto__;
var G__69266 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
var fexpr__69264 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69264.cljs$core$IFn$_invoke$arity$2 ? fexpr__69264.cljs$core$IFn$_invoke$arity$2(G__69265,G__69266) : fexpr__69264.call(null,G__69265,G__69266));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null))], null),app.time.parse_date_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null),app.time.date_to_timestamp);
}));

(app.time.date_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69271 = type__40667__auto__;
var G__69272 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
var fexpr__69270 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69270.cljs$core$IFn$_invoke$arity$2 ? fexpr__69270.cljs$core$IFn$_invoke$arity$2(G__69271,G__69272) : fexpr__69270.call(null,G__69271,G__69272));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null))], null),app.time.date_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null),app.time.map_to_timestamp);
}));

(app.time.map_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69277 = type__40667__auto__;
var G__69278 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
var fexpr__69276 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69276.cljs$core$IFn$_invoke$arity$2 ? fexpr__69276.cljs$core$IFn$_invoke$arity$2(G__69277,G__69278) : fexpr__69276.call(null,G__69277,G__69278));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null))], null),app.time.map_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null),app.time.timestamp_to_date_string);
}));

(app.time.timestamp_to_date_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69283 = type__40667__auto__;
var G__69284 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
var fexpr__69282 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69282.cljs$core$IFn$_invoke$arity$2 ? fexpr__69282.cljs$core$IFn$_invoke$arity$2(G__69283,G__69284) : fexpr__69282.call(null,G__69283,G__69284));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_date_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null),app.time.timestamp_to_full_string);
}));

(app.time.timestamp_to_full_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69288 = type__40667__auto__;
var G__69290 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
var fexpr__69287 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69287.cljs$core$IFn$_invoke$arity$2 ? fexpr__69287.cljs$core$IFn$_invoke$arity$2(G__69288,G__69290) : fexpr__69287.call(null,G__69288,G__69290));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_full_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null),app.time.get_period_range);
}));

(app.time.get_period_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69295 = type__40667__auto__;
var G__69296 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
var fexpr__69294 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69294.cljs$core$IFn$_invoke$arity$2 ? fexpr__69294.cljs$core$IFn$_invoke$arity$2(G__69295,G__69296) : fexpr__69294.call(null,G__69295,G__69296));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null))], null),app.time.get_period_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null),app.time.parse_date);
}));

(app.time.parse_date = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69301 = type__40667__auto__;
var G__69302 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
var fexpr__69300 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69300.cljs$core$IFn$_invoke$arity$2 ? fexpr__69300.cljs$core$IFn$_invoke$arity$2(G__69301,G__69302) : fexpr__69300.call(null,G__69301,G__69302));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null))], null),app.time.parse_date));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null),app.time.group_by_period);
}));

(app.time.group_by_period = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69307 = type__40667__auto__;
var G__69308 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
var fexpr__69306 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69306.cljs$core$IFn$_invoke$arity$2 ? fexpr__69306.cljs$core$IFn$_invoke$arity$2(G__69307,G__69308) : fexpr__69306.call(null,G__69307,G__69308));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null))], null),app.time.group_by_period));

console.log("..instrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null),app.math.average);
}));

(app.math.average = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69313 = type__40667__auto__;
var G__69314 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
var fexpr__69312 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69312.cljs$core$IFn$_invoke$arity$2 ? fexpr__69312.cljs$core$IFn$_invoke$arity$2(G__69313,G__69314) : fexpr__69312.call(null,G__69313,G__69314));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null))], null),app.math.average));

console.log("..instrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null),app.single_var_table.get_csv_values);
}));

(app.single_var_table.get_csv_values = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69319 = type__40667__auto__;
var G__69320 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
var fexpr__69318 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69318.cljs$core$IFn$_invoke$arity$2 ? fexpr__69318.cljs$core$IFn$_invoke$arity$2(G__69319,G__69320) : fexpr__69318.call(null,G__69319,G__69320));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null))], null),app.single_var_table.get_csv_values));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),app.single_var_table.get_one_var_timeseries_data);
}));

(app.single_var_table.get_one_var_timeseries_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69325 = type__40667__auto__;
var G__69326 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
var fexpr__69324 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69324.cljs$core$IFn$_invoke$arity$2 ? fexpr__69324.cljs$core$IFn$_invoke$arity$2(G__69325,G__69326) : fexpr__69324.call(null,G__69325,G__69326));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null))], null),app.single_var_table.get_one_var_timeseries_data));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69331 = type__40667__auto__;
var G__69332 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
var fexpr__69330 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69330.cljs$core$IFn$_invoke$arity$2 ? fexpr__69330.cljs$core$IFn$_invoke$arity$2(G__69331,G__69332) : fexpr__69330.call(null,G__69331,G__69332));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),app.single_var_table.calc_counted_score);
}));

(app.single_var_table.calc_counted_score = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69337 = type__40667__auto__;
var G__69338 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
var fexpr__69336 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69336.cljs$core$IFn$_invoke$arity$2 ? fexpr__69336.cljs$core$IFn$_invoke$arity$2(G__69337,G__69338) : fexpr__69336.call(null,G__69337,G__69338));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),app.single_var_table.calc_counted_score));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),app.single_var_table.make_hiccup);
}));

(app.single_var_table.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69340 = type__40667__auto__;
var G__69341 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
var fexpr__69339 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69339.cljs$core$IFn$_invoke$arity$2 ? fexpr__69339.cljs$core$IFn$_invoke$arity$2(G__69340,G__69341) : fexpr__69339.call(null,G__69340,G__69341));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null))], null),app.single_var_table.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69348 = type__40667__auto__;
var G__69350 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
var fexpr__69346 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69346.cljs$core$IFn$_invoke$arity$2 ? fexpr__69346.cljs$core$IFn$_invoke$arity$2(G__69348,G__69350) : fexpr__69346.call(null,G__69348,G__69350));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),app.csv_data_processing.merge_rows_using_dates);
}));

(app.csv_data_processing.merge_rows_using_dates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69355 = type__40667__auto__;
var G__69356 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
var fexpr__69354 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69354.cljs$core$IFn$_invoke$arity$2 ? fexpr__69354.cljs$core$IFn$_invoke$arity$2(G__69355,G__69356) : fexpr__69354.call(null,G__69355,G__69356));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.merge_rows_using_dates));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),app.csv_data_processing.add_timestamps);
}));

(app.csv_data_processing.add_timestamps = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69361 = type__40667__auto__;
var G__69362 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
var fexpr__69360 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69360.cljs$core$IFn$_invoke$arity$2 ? fexpr__69360.cljs$core$IFn$_invoke$arity$2(G__69361,G__69362) : fexpr__69360.call(null,G__69361,G__69362));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.add_timestamps));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),app.csv_data_processing.floatify_data);
}));

(app.csv_data_processing.floatify_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69367 = type__40667__auto__;
var G__69368 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
var fexpr__69366 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69366.cljs$core$IFn$_invoke$arity$2 ? fexpr__69366.cljs$core$IFn$_invoke$arity$2(G__69367,G__69368) : fexpr__69366.call(null,G__69367,G__69368));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.floatify_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),app.csv_data_processing.process_csv_data);
}));

(app.csv_data_processing.process_csv_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69373 = type__40667__auto__;
var G__69374 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
var fexpr__69372 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69372.cljs$core$IFn$_invoke$arity$2 ? fexpr__69372.cljs$core$IFn$_invoke$arity$2(G__69373,G__69374) : fexpr__69372.call(null,G__69373,G__69374));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null))], null),app.csv_data_processing.process_csv_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,null,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69379 = type__40667__auto__;
var G__69380 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
var fexpr__69378 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69378.cljs$core$IFn$_invoke$arity$2 ? fexpr__69378.cljs$core$IFn$_invoke$arity$2(G__69379,G__69380) : fexpr__69378.call(null,G__69379,G__69380));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69385 = type__40667__auto__;
var G__69386 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
var fexpr__69384 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69384.cljs$core$IFn$_invoke$arity$2 ? fexpr__69384.cljs$core$IFn$_invoke$arity$2(G__69385,G__69386) : fexpr__69384.call(null,G__69385,G__69386));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69391 = type__40667__auto__;
var G__69392 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
var fexpr__69390 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69390.cljs$core$IFn$_invoke$arity$2 ? fexpr__69390.cljs$core$IFn$_invoke$arity$2(G__69391,G__69392) : fexpr__69390.call(null,G__69391,G__69392));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null),app.timeline.rows_to_events);
}));

(app.timeline.rows_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69397 = type__40667__auto__;
var G__69398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
var fexpr__69396 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69396.cljs$core$IFn$_invoke$arity$2 ? fexpr__69396.cljs$core$IFn$_invoke$arity$2(G__69397,G__69398) : fexpr__69396.call(null,G__69397,G__69398));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.rows_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null),app.timeline.ranges_to_events);
}));

(app.timeline.ranges_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69400 = type__40667__auto__;
var G__69401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
var fexpr__69399 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69399.cljs$core$IFn$_invoke$arity$2 ? fexpr__69399.cljs$core$IFn$_invoke$arity$2(G__69400,G__69401) : fexpr__69399.call(null,G__69400,G__69401));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.ranges_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null),app.timeline.get_unique_lanes);
}));

(app.timeline.get_unique_lanes = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69403 = type__40667__auto__;
var G__69404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
var fexpr__69402 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69402.cljs$core$IFn$_invoke$arity$2 ? fexpr__69402.cljs$core$IFn$_invoke$arity$2(G__69403,G__69404) : fexpr__69402.call(null,G__69403,G__69404));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null))], null),app.timeline.get_unique_lanes));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null),app.timeline.make_timeline);
}));

(app.timeline.make_timeline = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69406 = type__40667__auto__;
var G__69407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
var fexpr__69405 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69405.cljs$core$IFn$_invoke$arity$2 ? fexpr__69405.cljs$core$IFn$_invoke$arity$2(G__69406,G__69407) : fexpr__69405.call(null,G__69406,G__69407));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.make_timeline));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null),app.timeline.timeline_for_page);
}));

(app.timeline.timeline_for_page = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69409 = type__40667__auto__;
var G__69410 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
var fexpr__69408 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69408.cljs$core$IFn$_invoke$arity$2 ? fexpr__69408.cljs$core$IFn$_invoke$arity$2(G__69409,G__69410) : fexpr__69408.call(null,G__69409,G__69410));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.timeline_for_page));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null),app.csv._standardize_keys);
}));

(app.csv._standardize_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69412 = type__40667__auto__;
var G__69413 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
var fexpr__69411 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69411.cljs$core$IFn$_invoke$arity$2 ? fexpr__69411.cljs$core$IFn$_invoke$arity$2(G__69412,G__69413) : fexpr__69411.call(null,G__69412,G__69413));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null))], null),app.csv._standardize_keys));

console.log("..instrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null),app.input_data_validation.get_all_data_validation_string);
}));

(app.input_data_validation.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69415 = type__40667__auto__;
var G__69416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
var fexpr__69414 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69414.cljs$core$IFn$_invoke$arity$2 ? fexpr__69414.cljs$core$IFn$_invoke$arity$2(G__69415,G__69416) : fexpr__69414.call(null,G__69415,G__69416));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null),app.input_data_validation.get_validation_string);
}));

(app.input_data_validation.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69418 = type__40667__auto__;
var G__69419 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
var fexpr__69417 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69417.cljs$core$IFn$_invoke$arity$2 ? fexpr__69417.cljs$core$IFn$_invoke$arity$2(G__69418,G__69419) : fexpr__69417.call(null,G__69418,G__69419));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),app.ui.maps_to_html);
}));

(app.ui.maps_to_html = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69421 = type__40667__auto__;
var G__69422 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
var fexpr__69420 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69420.cljs$core$IFn$_invoke$arity$2 ? fexpr__69420.cljs$core$IFn$_invoke$arity$2(G__69421,G__69422) : fexpr__69420.call(null,G__69421,G__69422));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null))], null),app.ui.maps_to_html));

console.log("..instrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null),app.aggregation.combine_rows);
}));

(app.aggregation.combine_rows = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69424 = type__40667__auto__;
var G__69425 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
var fexpr__69423 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69423.cljs$core$IFn$_invoke$arity$2 ? fexpr__69423.cljs$core$IFn$_invoke$arity$2(G__69424,G__69425) : fexpr__69423.call(null,G__69424,G__69425));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null))], null),app.aggregation.combine_rows));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null),app.aggregation.aggregate_data);
}));

(app.aggregation.aggregate_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69427 = type__40667__auto__;
var G__69428 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
var fexpr__69426 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69426.cljs$core$IFn$_invoke$arity$2 ? fexpr__69426.cljs$core$IFn$_invoke$arity$2(G__69427,G__69428) : fexpr__69426.call(null,G__69427,G__69428));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null))], null),app.aggregation.aggregate_data));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null),app.aggregation.aggregation_section);
}));

(app.aggregation.aggregation_section = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69431 = type__40667__auto__;
var G__69432 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
var fexpr__69430 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69430.cljs$core$IFn$_invoke$arity$2 ? fexpr__69430.cljs$core$IFn$_invoke$arity$2(G__69431,G__69432) : fexpr__69430.call(null,G__69431,G__69432));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.aggregation.aggregation_section));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null),app.stats.clean_data);
}));

(app.stats.clean_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69435 = type__40667__auto__;
var G__69436 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
var fexpr__69434 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69434.cljs$core$IFn$_invoke$arity$2 ? fexpr__69434.cljs$core$IFn$_invoke$arity$2(G__69435,G__69436) : fexpr__69434.call(null,G__69435,G__69436));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null))], null),app.stats.clean_data));

console.log("..instrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69438 = type__40667__auto__;
var G__69439 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
var fexpr__69437 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69437.cljs$core$IFn$_invoke$arity$2 ? fexpr__69437.cljs$core$IFn$_invoke$arity$2(G__69438,G__69439) : fexpr__69437.call(null,G__69438,G__69439));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null),app.stats.enliten);
}));

(app.stats.enliten = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69441 = type__40667__auto__;
var G__69442 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
var fexpr__69440 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69440.cljs$core$IFn$_invoke$arity$2 ? fexpr__69440.cljs$core$IFn$_invoke$arity$2(G__69441,G__69442) : fexpr__69440.call(null,G__69441,G__69442));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null))], null),app.stats.enliten));

console.log("..instrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null),app.stats.calc_correlation);
}));

(app.stats.calc_correlation = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69444 = type__40667__auto__;
var G__69445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
var fexpr__69443 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69443.cljs$core$IFn$_invoke$arity$2 ? fexpr__69443.cljs$core$IFn$_invoke$arity$2(G__69444,G__69445) : fexpr__69443.call(null,G__69444,G__69445));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null))], null),app.stats.calc_correlation));

console.log("..instrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69447 = type__40667__auto__;
var G__69448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
var fexpr__69446 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69446.cljs$core$IFn$_invoke$arity$2 ? fexpr__69446.cljs$core$IFn$_invoke$arity$2(G__69447,G__69448) : fexpr__69446.call(null,G__69447,G__69448));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null),app.core.get_vars);
}));

(app.core.get_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69450 = type__40667__auto__;
var G__69451 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
var fexpr__69449 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69449.cljs$core$IFn$_invoke$arity$2 ? fexpr__69449.cljs$core$IFn$_invoke$arity$2(G__69450,G__69451) : fexpr__69449.call(null,G__69450,G__69451));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null))], null),app.core.get_vars));

console.log("..instrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),app.comparison_matrix_table.make_comparison_matrix_data);
}));

(app.comparison_matrix_table.make_comparison_matrix_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69453 = type__40667__auto__;
var G__69454 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
var fexpr__69452 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69452.cljs$core$IFn$_invoke$arity$2 ? fexpr__69452.cljs$core$IFn$_invoke$arity$2(G__69453,G__69454) : fexpr__69452.call(null,G__69453,G__69454));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null))], null),app.comparison_matrix_table.make_comparison_matrix_data));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),app.comparison_matrix_table.add_aggregates);
}));

(app.comparison_matrix_table.add_aggregates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69456 = type__40667__auto__;
var G__69457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
var fexpr__69455 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69455.cljs$core$IFn$_invoke$arity$2 ? fexpr__69455.cljs$core$IFn$_invoke$arity$2(G__69456,G__69457) : fexpr__69455.call(null,G__69456,G__69457));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.add_aggregates));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null),app.comparison_matrix_table.get_flat_biomarker_result_keys);
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__69459 = type__40667__auto__;
var G__69460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
var fexpr__69458 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__69458.cljs$core$IFn$_invoke$arity$2 ? fexpr__69458.cljs$core$IFn$_invoke$arity$2(G__69459,G__69460) : fexpr__69458.call(null,G__69459,G__69460));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.get_flat_biomarker_result_keys));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
})()
], true));

return app.core.mount_root();
});
goog.exportSymbol('app.core.init_BANG_', app.core.init_BANG_);

//# sourceMappingURL=app.core.js.map
