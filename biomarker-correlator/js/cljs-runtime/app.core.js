goog.provide('app.core');
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__75757_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__75757_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._LT_),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__75761_SHARP_){
return ((cljs.core.vector_QMARK_(p1__75761_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__75761_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
app.core.home_page = (function app$core$home_page(){
var aggregation_granularity = reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (p1__75765_SHARP_){
return malli.core.validate.cljs$core$IFn$_invoke$arity$2(app.time.PeriodIdTypes,p1__75765_SHARP_);
})], 0));
var p_values_rounded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
var map__75780 = cljs.core.deref(app.csv.csv_data);
var map__75780__$1 = cljs.core.__destructure_map(map__75780);
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75780__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75780__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75780__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75780__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
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
})], null),"Fetch Google Drive Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"Found files ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.google_drive.found_files))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Input validation: ",app.input_data_validation.get_validation_string(input_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Biomarker validation: ",app.input_data_validation.get_validation_string(biomarker_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cross data validation: ",app.input_data_validation.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data,biomarker_data], 0))], null),app.aggregation.aggregation_section(aggregation_granularity,cljs.core.keys(data_by_aggregates)),app.timeline.timeline_for_page(processed_data,cljs.core.keys(data_by_aggregates)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not statistically significant results are displayed with greyed-out\n        text.  The score for each input is calculated as the number of\n        statistically significant correlations that are positive, minus the number\n        that are negative.  We need a spreadsheet (or something built in to the\n        app) that determines for each biomarker whether up is good or bad with\n        respect to calculating the score."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"p-values-rounded?","p-values-rounded?",-1239433302)], null),"Round p-values?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-values-rounded?","p-values-rounded?",-1239433302),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__75779_SHARP_){
return cljs.core.reset_BANG_(p_values_rounded_QMARK_,p1__75779_SHARP_.target.checked);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(p_values_rounded_QMARK_),new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),cljs.core.deref(p_values_rounded_QMARK_)], null)], null),app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic(app.comparison_matrix_table.make_comparison_matrix_data(pairwise_correlations_for_table,input_correlations,p_values_rounded_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-make-datagrid-column","custom-make-datagrid-column",1791443794),app.comparison_matrix_table.make_datagrid_column], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_datagrid(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__75781(s__75782){
return (new cljs.core.LazySeq(null,(function (){
var s__75782__$1 = s__75782;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75782__$1);
if(temp__5753__auto__){
var s__75782__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75782__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75782__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75784 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75783 = (0);
while(true){
if((i__75783 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__75783);
cljs.core.chunk_append(b__75784,app.single_var_table.make_hiccup(sig_correlations));

var G__76316 = (i__75783 + (1));
i__75783 = G__76316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75784),app$core$home_page_$_iter__75781(cljs.core.chunk_rest(s__75782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75784),null);
}
} else {
var sig_correlations = cljs.core.first(s__75782__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__75781(cljs.core.rest(s__75782__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(input_correlations));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__75790(s__75791){
return (new cljs.core.LazySeq(null,(function (){
var s__75791__$1 = s__75791;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75791__$1);
if(temp__5753__auto__){
var s__75791__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75791__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75791__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75793 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75792 = (0);
while(true){
if((i__75792 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__75792);
cljs.core.chunk_append(b__75793,app.single_var_table.make_hiccup(sig_correlations));

var G__76317 = (i__75792 + (1));
i__75792 = G__76317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75793),app$core$home_page_$_iter__75790(cljs.core.chunk_rest(s__75791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75793),null);
}
} else {
var sig_correlations = cljs.core.first(s__75791__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__75790(cljs.core.rest(s__75791__$2)));
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
var G__75799 = type__40667__auto__;
var G__75800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
var fexpr__75798 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75798.cljs$core$IFn$_invoke$arity$2 ? fexpr__75798.cljs$core$IFn$_invoke$arity$2(G__75799,G__75800) : fexpr__75798.call(null,G__75799,G__75800));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null))], null),app.time.parse_date_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null),app.time.date_to_timestamp);
}));

(app.time.date_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75802 = type__40667__auto__;
var G__75803 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
var fexpr__75801 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75801.cljs$core$IFn$_invoke$arity$2 ? fexpr__75801.cljs$core$IFn$_invoke$arity$2(G__75802,G__75803) : fexpr__75801.call(null,G__75802,G__75803));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null))], null),app.time.date_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null),app.time.map_to_timestamp);
}));

(app.time.map_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75805 = type__40667__auto__;
var G__75806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
var fexpr__75804 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75804.cljs$core$IFn$_invoke$arity$2 ? fexpr__75804.cljs$core$IFn$_invoke$arity$2(G__75805,G__75806) : fexpr__75804.call(null,G__75805,G__75806));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null))], null),app.time.map_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null),app.time.timestamp_to_date_string);
}));

(app.time.timestamp_to_date_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75808 = type__40667__auto__;
var G__75809 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
var fexpr__75807 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75807.cljs$core$IFn$_invoke$arity$2 ? fexpr__75807.cljs$core$IFn$_invoke$arity$2(G__75808,G__75809) : fexpr__75807.call(null,G__75808,G__75809));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_date_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null),app.time.timestamp_to_full_string);
}));

(app.time.timestamp_to_full_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75814 = type__40667__auto__;
var G__75815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
var fexpr__75813 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75813.cljs$core$IFn$_invoke$arity$2 ? fexpr__75813.cljs$core$IFn$_invoke$arity$2(G__75814,G__75815) : fexpr__75813.call(null,G__75814,G__75815));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_full_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null),app.time.get_period_range);
}));

(app.time.get_period_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75818 = type__40667__auto__;
var G__75820 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
var fexpr__75816 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75816.cljs$core$IFn$_invoke$arity$2 ? fexpr__75816.cljs$core$IFn$_invoke$arity$2(G__75818,G__75820) : fexpr__75816.call(null,G__75818,G__75820));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null))], null),app.time.get_period_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null),app.time.parse_date);
}));

(app.time.parse_date = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75826 = type__40667__auto__;
var G__75827 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
var fexpr__75825 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75825.cljs$core$IFn$_invoke$arity$2 ? fexpr__75825.cljs$core$IFn$_invoke$arity$2(G__75826,G__75827) : fexpr__75825.call(null,G__75826,G__75827));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null))], null),app.time.parse_date));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null),app.time.group_by_period);
}));

(app.time.group_by_period = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75832 = type__40667__auto__;
var G__75833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
var fexpr__75831 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75831.cljs$core$IFn$_invoke$arity$2 ? fexpr__75831.cljs$core$IFn$_invoke$arity$2(G__75832,G__75833) : fexpr__75831.call(null,G__75832,G__75833));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null))], null),app.time.group_by_period));

console.log("..instrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null),app.math.average);
}));

(app.math.average = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75838 = type__40667__auto__;
var G__75839 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
var fexpr__75837 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75837.cljs$core$IFn$_invoke$arity$2 ? fexpr__75837.cljs$core$IFn$_invoke$arity$2(G__75838,G__75839) : fexpr__75837.call(null,G__75838,G__75839));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null))], null),app.math.average));

console.log("..instrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null),app.single_var_table.get_csv_values);
}));

(app.single_var_table.get_csv_values = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75844 = type__40667__auto__;
var G__75845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
var fexpr__75843 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75843.cljs$core$IFn$_invoke$arity$2 ? fexpr__75843.cljs$core$IFn$_invoke$arity$2(G__75844,G__75845) : fexpr__75843.call(null,G__75844,G__75845));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null))], null),app.single_var_table.get_csv_values));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),app.single_var_table.get_one_var_timeseries_data);
}));

(app.single_var_table.get_one_var_timeseries_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75850 = type__40667__auto__;
var G__75851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
var fexpr__75849 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75849.cljs$core$IFn$_invoke$arity$2 ? fexpr__75849.cljs$core$IFn$_invoke$arity$2(G__75850,G__75851) : fexpr__75849.call(null,G__75850,G__75851));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null))], null),app.single_var_table.get_one_var_timeseries_data));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75856 = type__40667__auto__;
var G__75857 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
var fexpr__75855 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75855.cljs$core$IFn$_invoke$arity$2 ? fexpr__75855.cljs$core$IFn$_invoke$arity$2(G__75856,G__75857) : fexpr__75855.call(null,G__75856,G__75857));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),app.single_var_table.calc_counted_score);
}));

(app.single_var_table.calc_counted_score = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75862 = type__40667__auto__;
var G__75863 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
var fexpr__75861 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75861.cljs$core$IFn$_invoke$arity$2 ? fexpr__75861.cljs$core$IFn$_invoke$arity$2(G__75862,G__75863) : fexpr__75861.call(null,G__75862,G__75863));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),app.single_var_table.calc_counted_score));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),app.single_var_table.make_hiccup);
}));

(app.single_var_table.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75868 = type__40667__auto__;
var G__75869 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
var fexpr__75867 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75867.cljs$core$IFn$_invoke$arity$2 ? fexpr__75867.cljs$core$IFn$_invoke$arity$2(G__75868,G__75869) : fexpr__75867.call(null,G__75868,G__75869));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null))], null),app.single_var_table.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75874 = type__40667__auto__;
var G__75875 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
var fexpr__75873 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75873.cljs$core$IFn$_invoke$arity$2 ? fexpr__75873.cljs$core$IFn$_invoke$arity$2(G__75874,G__75875) : fexpr__75873.call(null,G__75874,G__75875));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),app.csv_data_processing.merge_rows_using_dates);
}));

(app.csv_data_processing.merge_rows_using_dates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75880 = type__40667__auto__;
var G__75881 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
var fexpr__75879 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75879.cljs$core$IFn$_invoke$arity$2 ? fexpr__75879.cljs$core$IFn$_invoke$arity$2(G__75880,G__75881) : fexpr__75879.call(null,G__75880,G__75881));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.merge_rows_using_dates));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),app.csv_data_processing.add_timestamps);
}));

(app.csv_data_processing.add_timestamps = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75886 = type__40667__auto__;
var G__75887 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
var fexpr__75885 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75885.cljs$core$IFn$_invoke$arity$2 ? fexpr__75885.cljs$core$IFn$_invoke$arity$2(G__75886,G__75887) : fexpr__75885.call(null,G__75886,G__75887));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.add_timestamps));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),app.csv_data_processing.floatify_data);
}));

(app.csv_data_processing.floatify_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75892 = type__40667__auto__;
var G__75893 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
var fexpr__75891 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75891.cljs$core$IFn$_invoke$arity$2 ? fexpr__75891.cljs$core$IFn$_invoke$arity$2(G__75892,G__75893) : fexpr__75891.call(null,G__75892,G__75893));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.floatify_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),app.csv_data_processing.process_csv_data);
}));

(app.csv_data_processing.process_csv_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75898 = type__40667__auto__;
var G__75899 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
var fexpr__75897 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75897.cljs$core$IFn$_invoke$arity$2 ? fexpr__75897.cljs$core$IFn$_invoke$arity$2(G__75898,G__75899) : fexpr__75897.call(null,G__75898,G__75899));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null))], null),app.csv_data_processing.process_csv_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,null,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75904 = type__40667__auto__;
var G__75905 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
var fexpr__75903 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75903.cljs$core$IFn$_invoke$arity$2 ? fexpr__75903.cljs$core$IFn$_invoke$arity$2(G__75904,G__75905) : fexpr__75903.call(null,G__75904,G__75905));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75910 = type__40667__auto__;
var G__75911 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
var fexpr__75909 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75909.cljs$core$IFn$_invoke$arity$2 ? fexpr__75909.cljs$core$IFn$_invoke$arity$2(G__75910,G__75911) : fexpr__75909.call(null,G__75910,G__75911));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75916 = type__40667__auto__;
var G__75917 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
var fexpr__75915 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75915.cljs$core$IFn$_invoke$arity$2 ? fexpr__75915.cljs$core$IFn$_invoke$arity$2(G__75916,G__75917) : fexpr__75915.call(null,G__75916,G__75917));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null),app.timeline.rows_to_events);
}));

(app.timeline.rows_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75922 = type__40667__auto__;
var G__75923 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
var fexpr__75921 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75921.cljs$core$IFn$_invoke$arity$2 ? fexpr__75921.cljs$core$IFn$_invoke$arity$2(G__75922,G__75923) : fexpr__75921.call(null,G__75922,G__75923));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.rows_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null),app.timeline.ranges_to_events);
}));

(app.timeline.ranges_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75928 = type__40667__auto__;
var G__75929 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
var fexpr__75927 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75927.cljs$core$IFn$_invoke$arity$2 ? fexpr__75927.cljs$core$IFn$_invoke$arity$2(G__75928,G__75929) : fexpr__75927.call(null,G__75928,G__75929));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.ranges_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null),app.timeline.get_unique_lanes);
}));

(app.timeline.get_unique_lanes = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75934 = type__40667__auto__;
var G__75935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
var fexpr__75933 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75933.cljs$core$IFn$_invoke$arity$2 ? fexpr__75933.cljs$core$IFn$_invoke$arity$2(G__75934,G__75935) : fexpr__75933.call(null,G__75934,G__75935));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null))], null),app.timeline.get_unique_lanes));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null),app.timeline.make_timeline);
}));

(app.timeline.make_timeline = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75940 = type__40667__auto__;
var G__75941 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
var fexpr__75939 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75939.cljs$core$IFn$_invoke$arity$2 ? fexpr__75939.cljs$core$IFn$_invoke$arity$2(G__75940,G__75941) : fexpr__75939.call(null,G__75940,G__75941));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.make_timeline));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null),app.timeline.timeline_for_page);
}));

(app.timeline.timeline_for_page = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75946 = type__40667__auto__;
var G__75947 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
var fexpr__75945 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75945.cljs$core$IFn$_invoke$arity$2 ? fexpr__75945.cljs$core$IFn$_invoke$arity$2(G__75946,G__75947) : fexpr__75945.call(null,G__75946,G__75947));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.timeline_for_page));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null),app.csv._standardize_keys);
}));

(app.csv._standardize_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75952 = type__40667__auto__;
var G__75953 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
var fexpr__75951 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75951.cljs$core$IFn$_invoke$arity$2 ? fexpr__75951.cljs$core$IFn$_invoke$arity$2(G__75952,G__75953) : fexpr__75951.call(null,G__75952,G__75953));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null))], null),app.csv._standardize_keys));

console.log("..instrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null),app.input_data_validation.get_all_data_validation_string);
}));

(app.input_data_validation.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75958 = type__40667__auto__;
var G__75959 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
var fexpr__75957 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75957.cljs$core$IFn$_invoke$arity$2 ? fexpr__75957.cljs$core$IFn$_invoke$arity$2(G__75958,G__75959) : fexpr__75957.call(null,G__75958,G__75959));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null),app.input_data_validation.get_validation_string);
}));

(app.input_data_validation.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75964 = type__40667__auto__;
var G__75965 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
var fexpr__75963 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75963.cljs$core$IFn$_invoke$arity$2 ? fexpr__75963.cljs$core$IFn$_invoke$arity$2(G__75964,G__75965) : fexpr__75963.call(null,G__75964,G__75965));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),app.ui.maps_to_html);
}));

(app.ui.maps_to_html = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75970 = type__40667__auto__;
var G__75971 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
var fexpr__75969 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75969.cljs$core$IFn$_invoke$arity$2 ? fexpr__75969.cljs$core$IFn$_invoke$arity$2(G__75970,G__75971) : fexpr__75969.call(null,G__75970,G__75971));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null))], null),app.ui.maps_to_html));

console.log("..instrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null),app.aggregation.combine_rows);
}));

(app.aggregation.combine_rows = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75976 = type__40667__auto__;
var G__75977 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
var fexpr__75975 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75975.cljs$core$IFn$_invoke$arity$2 ? fexpr__75975.cljs$core$IFn$_invoke$arity$2(G__75976,G__75977) : fexpr__75975.call(null,G__75976,G__75977));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null))], null),app.aggregation.combine_rows));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null),app.aggregation.aggregate_data);
}));

(app.aggregation.aggregate_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75981 = type__40667__auto__;
var G__75982 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
var fexpr__75979 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75979.cljs$core$IFn$_invoke$arity$2 ? fexpr__75979.cljs$core$IFn$_invoke$arity$2(G__75981,G__75982) : fexpr__75979.call(null,G__75981,G__75982));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null))], null),app.aggregation.aggregate_data));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null),app.aggregation.aggregation_section);
}));

(app.aggregation.aggregation_section = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75987 = type__40667__auto__;
var G__75989 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
var fexpr__75985 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75985.cljs$core$IFn$_invoke$arity$2 ? fexpr__75985.cljs$core$IFn$_invoke$arity$2(G__75987,G__75989) : fexpr__75985.call(null,G__75987,G__75989));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.aggregation.aggregation_section));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null),app.stats.clean_data);
}));

(app.stats.clean_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75991 = type__40667__auto__;
var G__75992 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
var fexpr__75990 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75990.cljs$core$IFn$_invoke$arity$2 ? fexpr__75990.cljs$core$IFn$_invoke$arity$2(G__75991,G__75992) : fexpr__75990.call(null,G__75991,G__75992));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null))], null),app.stats.clean_data));

console.log("..instrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__75997 = type__40667__auto__;
var G__75998 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
var fexpr__75996 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__75996.cljs$core$IFn$_invoke$arity$2 ? fexpr__75996.cljs$core$IFn$_invoke$arity$2(G__75997,G__75998) : fexpr__75996.call(null,G__75997,G__75998));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null),app.stats.enliten);
}));

(app.stats.enliten = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76003 = type__40667__auto__;
var G__76004 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
var fexpr__76002 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76002.cljs$core$IFn$_invoke$arity$2 ? fexpr__76002.cljs$core$IFn$_invoke$arity$2(G__76003,G__76004) : fexpr__76002.call(null,G__76003,G__76004));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null))], null),app.stats.enliten));

console.log("..instrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null),app.stats.calc_correlation);
}));

(app.stats.calc_correlation = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76009 = type__40667__auto__;
var G__76010 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
var fexpr__76008 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76008.cljs$core$IFn$_invoke$arity$2 ? fexpr__76008.cljs$core$IFn$_invoke$arity$2(G__76009,G__76010) : fexpr__76008.call(null,G__76009,G__76010));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null))], null),app.stats.calc_correlation));

console.log("..instrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76015 = type__40667__auto__;
var G__76016 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
var fexpr__76014 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76014.cljs$core$IFn$_invoke$arity$2 ? fexpr__76014.cljs$core$IFn$_invoke$arity$2(G__76015,G__76016) : fexpr__76014.call(null,G__76015,G__76016));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null),app.core.get_vars);
}));

(app.core.get_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76021 = type__40667__auto__;
var G__76022 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
var fexpr__76020 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76020.cljs$core$IFn$_invoke$arity$2 ? fexpr__76020.cljs$core$IFn$_invoke$arity$2(G__76021,G__76022) : fexpr__76020.call(null,G__76021,G__76022));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null))], null),app.core.get_vars));

console.log("..instrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),app.comparison_matrix_table.make_comparison_matrix_data);
}));

(app.comparison_matrix_table.make_comparison_matrix_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76027 = type__40667__auto__;
var G__76028 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
var fexpr__76026 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76026.cljs$core$IFn$_invoke$arity$2 ? fexpr__76026.cljs$core$IFn$_invoke$arity$2(G__76027,G__76028) : fexpr__76026.call(null,G__76027,G__76028));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null))], null),app.comparison_matrix_table.make_comparison_matrix_data));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),app.comparison_matrix_table.add_aggregates);
}));

(app.comparison_matrix_table.add_aggregates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76033 = type__40667__auto__;
var G__76034 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
var fexpr__76032 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76032.cljs$core$IFn$_invoke$arity$2 ? fexpr__76032.cljs$core$IFn$_invoke$arity$2(G__76033,G__76034) : fexpr__76032.call(null,G__76033,G__76034));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.add_aggregates));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null),app.comparison_matrix_table.get_flat_biomarker_result_keys);
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76039 = type__40667__auto__;
var G__76040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
var fexpr__76038 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76038.cljs$core$IFn$_invoke$arity$2 ? fexpr__76038.cljs$core$IFn$_invoke$arity$2(G__76039,G__76040) : fexpr__76038.call(null,G__76039,G__76040));
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
var G__76057 = type__40667__auto__;
var G__76058 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
var fexpr__76056 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76056.cljs$core$IFn$_invoke$arity$2 ? fexpr__76056.cljs$core$IFn$_invoke$arity$2(G__76057,G__76058) : fexpr__76056.call(null,G__76057,G__76058));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null))], null),app.time.parse_date_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null),app.time.date_to_timestamp);
}));

(app.time.date_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76060 = type__40667__auto__;
var G__76061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
var fexpr__76059 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76059.cljs$core$IFn$_invoke$arity$2 ? fexpr__76059.cljs$core$IFn$_invoke$arity$2(G__76060,G__76061) : fexpr__76059.call(null,G__76060,G__76061));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null))], null),app.time.date_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null),app.time.map_to_timestamp);
}));

(app.time.map_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76066 = type__40667__auto__;
var G__76067 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
var fexpr__76065 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76065.cljs$core$IFn$_invoke$arity$2 ? fexpr__76065.cljs$core$IFn$_invoke$arity$2(G__76066,G__76067) : fexpr__76065.call(null,G__76066,G__76067));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null))], null),app.time.map_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null),app.time.timestamp_to_date_string);
}));

(app.time.timestamp_to_date_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76072 = type__40667__auto__;
var G__76073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
var fexpr__76071 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76071.cljs$core$IFn$_invoke$arity$2 ? fexpr__76071.cljs$core$IFn$_invoke$arity$2(G__76072,G__76073) : fexpr__76071.call(null,G__76072,G__76073));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_date_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null),app.time.timestamp_to_full_string);
}));

(app.time.timestamp_to_full_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76078 = type__40667__auto__;
var G__76079 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
var fexpr__76077 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76077.cljs$core$IFn$_invoke$arity$2 ? fexpr__76077.cljs$core$IFn$_invoke$arity$2(G__76078,G__76079) : fexpr__76077.call(null,G__76078,G__76079));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_full_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null),app.time.get_period_range);
}));

(app.time.get_period_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76084 = type__40667__auto__;
var G__76085 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
var fexpr__76083 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76083.cljs$core$IFn$_invoke$arity$2 ? fexpr__76083.cljs$core$IFn$_invoke$arity$2(G__76084,G__76085) : fexpr__76083.call(null,G__76084,G__76085));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null))], null),app.time.get_period_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null),app.time.parse_date);
}));

(app.time.parse_date = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76090 = type__40667__auto__;
var G__76091 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
var fexpr__76089 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76089.cljs$core$IFn$_invoke$arity$2 ? fexpr__76089.cljs$core$IFn$_invoke$arity$2(G__76090,G__76091) : fexpr__76089.call(null,G__76090,G__76091));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null))], null),app.time.parse_date));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null),app.time.group_by_period);
}));

(app.time.group_by_period = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76096 = type__40667__auto__;
var G__76097 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
var fexpr__76094 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76094.cljs$core$IFn$_invoke$arity$2 ? fexpr__76094.cljs$core$IFn$_invoke$arity$2(G__76096,G__76097) : fexpr__76094.call(null,G__76096,G__76097));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null))], null),app.time.group_by_period));

console.log("..instrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null),app.math.average);
}));

(app.math.average = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76102 = type__40667__auto__;
var G__76103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
var fexpr__76101 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76101.cljs$core$IFn$_invoke$arity$2 ? fexpr__76101.cljs$core$IFn$_invoke$arity$2(G__76102,G__76103) : fexpr__76101.call(null,G__76102,G__76103));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null))], null),app.math.average));

console.log("..instrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null),app.single_var_table.get_csv_values);
}));

(app.single_var_table.get_csv_values = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76108 = type__40667__auto__;
var G__76109 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
var fexpr__76107 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76107.cljs$core$IFn$_invoke$arity$2 ? fexpr__76107.cljs$core$IFn$_invoke$arity$2(G__76108,G__76109) : fexpr__76107.call(null,G__76108,G__76109));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null))], null),app.single_var_table.get_csv_values));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),app.single_var_table.get_one_var_timeseries_data);
}));

(app.single_var_table.get_one_var_timeseries_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76114 = type__40667__auto__;
var G__76115 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
var fexpr__76113 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76113.cljs$core$IFn$_invoke$arity$2 ? fexpr__76113.cljs$core$IFn$_invoke$arity$2(G__76114,G__76115) : fexpr__76113.call(null,G__76114,G__76115));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null))], null),app.single_var_table.get_one_var_timeseries_data));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76120 = type__40667__auto__;
var G__76121 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
var fexpr__76119 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76119.cljs$core$IFn$_invoke$arity$2 ? fexpr__76119.cljs$core$IFn$_invoke$arity$2(G__76120,G__76121) : fexpr__76119.call(null,G__76120,G__76121));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),app.single_var_table.calc_counted_score);
}));

(app.single_var_table.calc_counted_score = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76126 = type__40667__auto__;
var G__76127 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
var fexpr__76125 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76125.cljs$core$IFn$_invoke$arity$2 ? fexpr__76125.cljs$core$IFn$_invoke$arity$2(G__76126,G__76127) : fexpr__76125.call(null,G__76126,G__76127));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),app.single_var_table.calc_counted_score));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),app.single_var_table.make_hiccup);
}));

(app.single_var_table.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76132 = type__40667__auto__;
var G__76133 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
var fexpr__76131 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76131.cljs$core$IFn$_invoke$arity$2 ? fexpr__76131.cljs$core$IFn$_invoke$arity$2(G__76132,G__76133) : fexpr__76131.call(null,G__76132,G__76133));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null))], null),app.single_var_table.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76138 = type__40667__auto__;
var G__76139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
var fexpr__76137 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76137.cljs$core$IFn$_invoke$arity$2 ? fexpr__76137.cljs$core$IFn$_invoke$arity$2(G__76138,G__76139) : fexpr__76137.call(null,G__76138,G__76139));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),app.csv_data_processing.merge_rows_using_dates);
}));

(app.csv_data_processing.merge_rows_using_dates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76144 = type__40667__auto__;
var G__76145 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
var fexpr__76143 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76143.cljs$core$IFn$_invoke$arity$2 ? fexpr__76143.cljs$core$IFn$_invoke$arity$2(G__76144,G__76145) : fexpr__76143.call(null,G__76144,G__76145));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.merge_rows_using_dates));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),app.csv_data_processing.add_timestamps);
}));

(app.csv_data_processing.add_timestamps = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76153 = type__40667__auto__;
var G__76154 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
var fexpr__76152 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76152.cljs$core$IFn$_invoke$arity$2 ? fexpr__76152.cljs$core$IFn$_invoke$arity$2(G__76153,G__76154) : fexpr__76152.call(null,G__76153,G__76154));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.add_timestamps));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),app.csv_data_processing.floatify_data);
}));

(app.csv_data_processing.floatify_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76159 = type__40667__auto__;
var G__76160 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
var fexpr__76158 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76158.cljs$core$IFn$_invoke$arity$2 ? fexpr__76158.cljs$core$IFn$_invoke$arity$2(G__76159,G__76160) : fexpr__76158.call(null,G__76159,G__76160));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.floatify_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),app.csv_data_processing.process_csv_data);
}));

(app.csv_data_processing.process_csv_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76165 = type__40667__auto__;
var G__76166 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
var fexpr__76164 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76164.cljs$core$IFn$_invoke$arity$2 ? fexpr__76164.cljs$core$IFn$_invoke$arity$2(G__76165,G__76166) : fexpr__76164.call(null,G__76165,G__76166));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null))], null),app.csv_data_processing.process_csv_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,null,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76174 = type__40667__auto__;
var G__76175 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
var fexpr__76173 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76173.cljs$core$IFn$_invoke$arity$2 ? fexpr__76173.cljs$core$IFn$_invoke$arity$2(G__76174,G__76175) : fexpr__76173.call(null,G__76174,G__76175));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76180 = type__40667__auto__;
var G__76181 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
var fexpr__76179 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76179.cljs$core$IFn$_invoke$arity$2 ? fexpr__76179.cljs$core$IFn$_invoke$arity$2(G__76180,G__76181) : fexpr__76179.call(null,G__76180,G__76181));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76186 = type__40667__auto__;
var G__76187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
var fexpr__76185 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76185.cljs$core$IFn$_invoke$arity$2 ? fexpr__76185.cljs$core$IFn$_invoke$arity$2(G__76186,G__76187) : fexpr__76185.call(null,G__76186,G__76187));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null),app.timeline.rows_to_events);
}));

(app.timeline.rows_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76192 = type__40667__auto__;
var G__76193 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
var fexpr__76191 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76191.cljs$core$IFn$_invoke$arity$2 ? fexpr__76191.cljs$core$IFn$_invoke$arity$2(G__76192,G__76193) : fexpr__76191.call(null,G__76192,G__76193));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.rows_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null),app.timeline.ranges_to_events);
}));

(app.timeline.ranges_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76198 = type__40667__auto__;
var G__76199 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
var fexpr__76197 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76197.cljs$core$IFn$_invoke$arity$2 ? fexpr__76197.cljs$core$IFn$_invoke$arity$2(G__76198,G__76199) : fexpr__76197.call(null,G__76198,G__76199));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.ranges_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null),app.timeline.get_unique_lanes);
}));

(app.timeline.get_unique_lanes = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76204 = type__40667__auto__;
var G__76205 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
var fexpr__76203 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76203.cljs$core$IFn$_invoke$arity$2 ? fexpr__76203.cljs$core$IFn$_invoke$arity$2(G__76204,G__76205) : fexpr__76203.call(null,G__76204,G__76205));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null))], null),app.timeline.get_unique_lanes));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null),app.timeline.make_timeline);
}));

(app.timeline.make_timeline = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76210 = type__40667__auto__;
var G__76211 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
var fexpr__76209 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76209.cljs$core$IFn$_invoke$arity$2 ? fexpr__76209.cljs$core$IFn$_invoke$arity$2(G__76210,G__76211) : fexpr__76209.call(null,G__76210,G__76211));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.make_timeline));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null),app.timeline.timeline_for_page);
}));

(app.timeline.timeline_for_page = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76216 = type__40667__auto__;
var G__76217 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
var fexpr__76215 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76215.cljs$core$IFn$_invoke$arity$2 ? fexpr__76215.cljs$core$IFn$_invoke$arity$2(G__76216,G__76217) : fexpr__76215.call(null,G__76216,G__76217));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.timeline_for_page));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null),app.csv._standardize_keys);
}));

(app.csv._standardize_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76222 = type__40667__auto__;
var G__76223 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
var fexpr__76221 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76221.cljs$core$IFn$_invoke$arity$2 ? fexpr__76221.cljs$core$IFn$_invoke$arity$2(G__76222,G__76223) : fexpr__76221.call(null,G__76222,G__76223));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null))], null),app.csv._standardize_keys));

console.log("..instrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null),app.input_data_validation.get_all_data_validation_string);
}));

(app.input_data_validation.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76228 = type__40667__auto__;
var G__76229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
var fexpr__76227 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76227.cljs$core$IFn$_invoke$arity$2 ? fexpr__76227.cljs$core$IFn$_invoke$arity$2(G__76228,G__76229) : fexpr__76227.call(null,G__76228,G__76229));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null),app.input_data_validation.get_validation_string);
}));

(app.input_data_validation.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76234 = type__40667__auto__;
var G__76235 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
var fexpr__76233 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76233.cljs$core$IFn$_invoke$arity$2 ? fexpr__76233.cljs$core$IFn$_invoke$arity$2(G__76234,G__76235) : fexpr__76233.call(null,G__76234,G__76235));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),app.ui.maps_to_html);
}));

(app.ui.maps_to_html = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76240 = type__40667__auto__;
var G__76241 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
var fexpr__76239 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76239.cljs$core$IFn$_invoke$arity$2 ? fexpr__76239.cljs$core$IFn$_invoke$arity$2(G__76240,G__76241) : fexpr__76239.call(null,G__76240,G__76241));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null))], null),app.ui.maps_to_html));

console.log("..instrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null),app.aggregation.combine_rows);
}));

(app.aggregation.combine_rows = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76246 = type__40667__auto__;
var G__76247 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
var fexpr__76245 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76245.cljs$core$IFn$_invoke$arity$2 ? fexpr__76245.cljs$core$IFn$_invoke$arity$2(G__76246,G__76247) : fexpr__76245.call(null,G__76246,G__76247));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null))], null),app.aggregation.combine_rows));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null),app.aggregation.aggregate_data);
}));

(app.aggregation.aggregate_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76252 = type__40667__auto__;
var G__76253 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
var fexpr__76251 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76251.cljs$core$IFn$_invoke$arity$2 ? fexpr__76251.cljs$core$IFn$_invoke$arity$2(G__76252,G__76253) : fexpr__76251.call(null,G__76252,G__76253));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null))], null),app.aggregation.aggregate_data));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null),app.aggregation.aggregation_section);
}));

(app.aggregation.aggregation_section = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76261 = type__40667__auto__;
var G__76262 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
var fexpr__76260 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76260.cljs$core$IFn$_invoke$arity$2 ? fexpr__76260.cljs$core$IFn$_invoke$arity$2(G__76261,G__76262) : fexpr__76260.call(null,G__76261,G__76262));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.aggregation.aggregation_section));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null),app.stats.clean_data);
}));

(app.stats.clean_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76267 = type__40667__auto__;
var G__76268 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
var fexpr__76266 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76266.cljs$core$IFn$_invoke$arity$2 ? fexpr__76266.cljs$core$IFn$_invoke$arity$2(G__76267,G__76268) : fexpr__76266.call(null,G__76267,G__76268));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null))], null),app.stats.clean_data));

console.log("..instrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76273 = type__40667__auto__;
var G__76274 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
var fexpr__76272 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76272.cljs$core$IFn$_invoke$arity$2 ? fexpr__76272.cljs$core$IFn$_invoke$arity$2(G__76273,G__76274) : fexpr__76272.call(null,G__76273,G__76274));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null),app.stats.enliten);
}));

(app.stats.enliten = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76279 = type__40667__auto__;
var G__76280 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
var fexpr__76278 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76278.cljs$core$IFn$_invoke$arity$2 ? fexpr__76278.cljs$core$IFn$_invoke$arity$2(G__76279,G__76280) : fexpr__76278.call(null,G__76279,G__76280));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null))], null),app.stats.enliten));

console.log("..instrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null),app.stats.calc_correlation);
}));

(app.stats.calc_correlation = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76288 = type__40667__auto__;
var G__76289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
var fexpr__76287 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76287.cljs$core$IFn$_invoke$arity$2 ? fexpr__76287.cljs$core$IFn$_invoke$arity$2(G__76288,G__76289) : fexpr__76287.call(null,G__76288,G__76289));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null))], null),app.stats.calc_correlation));

console.log("..instrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76294 = type__40667__auto__;
var G__76295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
var fexpr__76293 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76293.cljs$core$IFn$_invoke$arity$2 ? fexpr__76293.cljs$core$IFn$_invoke$arity$2(G__76294,G__76295) : fexpr__76293.call(null,G__76294,G__76295));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null),app.core.get_vars);
}));

(app.core.get_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76300 = type__40667__auto__;
var G__76301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
var fexpr__76299 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76299.cljs$core$IFn$_invoke$arity$2 ? fexpr__76299.cljs$core$IFn$_invoke$arity$2(G__76300,G__76301) : fexpr__76299.call(null,G__76300,G__76301));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null))], null),app.core.get_vars));

console.log("..instrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),app.comparison_matrix_table.make_comparison_matrix_data);
}));

(app.comparison_matrix_table.make_comparison_matrix_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76306 = type__40667__auto__;
var G__76307 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
var fexpr__76305 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76305.cljs$core$IFn$_invoke$arity$2 ? fexpr__76305.cljs$core$IFn$_invoke$arity$2(G__76306,G__76307) : fexpr__76305.call(null,G__76306,G__76307));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null))], null),app.comparison_matrix_table.make_comparison_matrix_data));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),app.comparison_matrix_table.add_aggregates);
}));

(app.comparison_matrix_table.add_aggregates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76309 = type__40667__auto__;
var G__76310 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
var fexpr__76308 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76308.cljs$core$IFn$_invoke$arity$2 ? fexpr__76308.cljs$core$IFn$_invoke$arity$2(G__76309,G__76310) : fexpr__76308.call(null,G__76309,G__76310));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.add_aggregates));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40669__40670__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40669__40670__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null),app.comparison_matrix_table.get_flat_biomarker_result_keys);
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40667__auto__,data__40668__auto__){
var G__76312 = type__40667__auto__;
var G__76313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40668__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
var fexpr__76311 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__76311.cljs$core$IFn$_invoke$arity$2 ? fexpr__76311.cljs$core$IFn$_invoke$arity$2(G__76312,G__76313) : fexpr__76311.call(null,G__76312,G__76313));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.get_flat_biomarker_result_keys));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
})()
], true));

return app.core.mount_root();
});
goog.exportSymbol('app.core.init_BANG_', app.core.init_BANG_);

//# sourceMappingURL=app.core.js.map
