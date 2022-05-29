goog.provide('app.core');
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48753_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__48753_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._LT_),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48754_SHARP_){
return ((cljs.core.vector_QMARK_(p1__48754_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__48754_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
app.core.home_page = (function app$core$home_page(){
var aggregation_granularity = reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (p1__48755_SHARP_){
return malli.core.validate.cljs$core$IFn$_invoke$arity$2(app.time.PeriodIdTypes,p1__48755_SHARP_);
})], 0));
var p_values_rounded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
var map__48757 = cljs.core.deref(app.csv.csv_data);
var map__48757__$1 = cljs.core.__destructure_map(map__48757);
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
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
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUT DEBUG DATA"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUT PROCESSED DATA"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([processed_data], 0));

return new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.content","div.app.content",2048228731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Biomarker Correlator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This application calculates cross correlations between inputs and\n        biomarkers in an attempt to identify statistically significant\n        correlations. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Despite presenting like a website, there is no server\n        behind this app that data is sent to for analysis; everything is done\n        client side in the browser. Therefore, the page can be saved and run\n        offline as needed."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.youtube.com/watch?v=3N0e9Es1pv8"], null),"https://www.youtube.com/watch?v=3N0e9Es1pv8"], null)," for an overview of how this is useful."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Data Ingestion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Google Drive Integration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Once signed in and authorized, this application will search through\n        your Google Drive, find a folder named \"biomarker-correlator\", and then\n        process the files within that folder. Any CSV files with \"inputs\" in\n        the name will be treated as the input data files and any with \"biomarkers\"\n        in the name will be treated as the biomarker data files."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you are getting permissions issues, note that you need to be\n        whitelisted as this app is currently not verified with Google. Please\n        contact kovas[dot]palunas[at]gmail.com if you want to be whitelisted."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"authorize_button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),"Authorize"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"signout_button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),"Sign Out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.google_drive.populate_data_BANG_();
})], null),"Fetch Google Drive Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"Found files ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.google_drive.found_files))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Input validation: ",app.input_data_validation.get_validation_string(input_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Biomarker validation: ",app.input_data_validation.get_validation_string(biomarker_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cross data validation: ",app.input_data_validation.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_data,biomarker_data], 0))], null),app.aggregation.aggregation_section(aggregation_granularity,cljs.core.keys(data_by_aggregates)),app.timeline.timeline_for_page(processed_data,cljs.core.keys(data_by_aggregates)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not statistically significant results are displayed with greyed-out\n        text.  The score for each input is calculated as the number of\n        statistically significant correlations that are positive, minus the number\n        that are negative.  We need a spreadsheet (or something built in to the\n        app) that determines for each biomarker whether up is good or bad with\n        respect to calculating the score."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"p-values-rounded?","p-values-rounded?",-1239433302)], null),"Round p-values?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-values-rounded?","p-values-rounded?",-1239433302),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48756_SHARP_){
return cljs.core.reset_BANG_(p_values_rounded_QMARK_,p1__48756_SHARP_.target.checked);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(p_values_rounded_QMARK_),new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),cljs.core.deref(p_values_rounded_QMARK_)], null)], null),app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic(app.comparison_matrix_table.make_comparison_matrix_data(pairwise_correlations_for_table,input_correlations,p_values_rounded_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-make-datagrid-column","custom-make-datagrid-column",1791443794),app.comparison_matrix_table.make_datagrid_column], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_datagrid(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__48758(s__48759){
return (new cljs.core.LazySeq(null,(function (){
var s__48759__$1 = s__48759;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48759__$1);
if(temp__5753__auto__){
var s__48759__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48759__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48759__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48761 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48760 = (0);
while(true){
if((i__48760 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__48760);
cljs.core.chunk_append(b__48761,app.single_var_table.make_hiccup(sig_correlations));

var G__49024 = (i__48760 + (1));
i__48760 = G__49024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48761),app$core$home_page_$_iter__48758(cljs.core.chunk_rest(s__48759__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48761),null);
}
} else {
var sig_correlations = cljs.core.first(s__48759__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__48758(cljs.core.rest(s__48759__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(input_correlations));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__48762(s__48763){
return (new cljs.core.LazySeq(null,(function (){
var s__48763__$1 = s__48763;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48763__$1);
if(temp__5753__auto__){
var s__48763__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48763__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48763__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48765 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48764 = (0);
while(true){
if((i__48764 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__48764);
cljs.core.chunk_append(b__48765,app.single_var_table.make_hiccup(sig_correlations));

var G__49025 = (i__48764 + (1));
i__48764 = G__49025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48765),app$core$home_page_$_iter__48762(cljs.core.chunk_rest(s__48763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48765),null);
}
} else {
var sig_correlations = cljs.core.first(s__48763__$2);
return cljs.core.cons(app.single_var_table.make_hiccup(sig_correlations),app$core$home_page_$_iter__48762(cljs.core.rest(s__48763__$2)));
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
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
}));

(app.time.parse_date_range = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
}));

(app.time.date_to_timestamp = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
}));

(app.time.map_to_timestamp = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
}));

(app.time.timestamp_to_date_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
}));

(app.time.timestamp_to_full_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
}));

(app.time.get_period_range = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
}));

(app.time.parse_date = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
}));

(app.time.group_by_period = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
}));

(app.math.average = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
}));

(app.single_var_table.get_csv_values = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
}));

(app.single_var_table.get_one_var_timeseries_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
}));

(app.single_var_table.make_all_correlations = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
}));

(app.single_var_table.calc_counted_score = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
}));

(app.single_var_table.make_hiccup = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
}));

(app.single_var_table.get_significant_correlations = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
}));

(app.csv_data_processing.merge_rows_using_dates = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
}));

(app.csv_data_processing.add_timestamps = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
}));

(app.csv_data_processing.floatify_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
}));

(app.csv_data_processing.process_csv_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
}));

(app.biomarker_data.get_var_name = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
}));

(app.biomarker_data.add_hrs = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
}));

(app.biomarker_data.make_acm_plot = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
}));

(app.timeline.rows_to_events = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
}));

(app.timeline.ranges_to_events = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
}));

(app.timeline.get_unique_lanes = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
}));

(app.timeline.make_timeline = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
}));

(app.timeline.timeline_for_page = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
}));

(app.csv._standardize_keys = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
}));

(app.input_data_validation.get_all_data_validation_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
}));

(app.input_data_validation.get_validation_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
}));

(app.ui.maps_to_html = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
}));

(app.aggregation.combine_rows = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
}));

(app.aggregation.aggregate_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
}));

(app.aggregation.aggregation_section = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
}));

(app.stats.clean_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
}));

(app.stats.compute_correlations = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
}));

(app.stats.enliten = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
}));

(app.stats.calc_correlation = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
}));

(app.specs.make_hiccup = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
}));

(app.core.get_vars = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
}));

(app.comparison_matrix_table.make_comparison_matrix_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
}));

(app.comparison_matrix_table.add_aggregates = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = orig_fn__40476__auto__);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.ui","app.ui",-1105541323,null),new cljs.core.Symbol(null,"maps-to-html","maps-to-html",-541539065,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),new cljs.core.Symbol(null,"get-flat-biomarker-result-keys","get-flat-biomarker-result-keys",-2049940581,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),new cljs.core.Symbol(null,"get-all-data-validation-string","get-all-data-validation-string",-1361206755,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),new cljs.core.Symbol(null,"add-aggregates","add-aggregates",1165374252,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv","app.csv",1676676688,null),new cljs.core.Symbol(null,"-standardize-keys","-standardize-keys",-1001622265,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"get-csv-values","get-csv-values",1025959841,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"group-by-period","group-by-period",-822796806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null),new cljs.core.Symbol(null,"PeriodIdTypes","PeriodIdTypes",364588406,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"make-all-correlations","make-all-correlations",-354399926,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parse-date-range","parse-date-range",-921785304,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date-range","date-range",1703615044,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return\n  the first date unless it is unparsable, in which case will return the second.\n  If no 'to' is in the string, will just return the only date (if it is one).",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"get-one-var-timeseries-data","get-one-var-timeseries-data",-218445081,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),new cljs.core.Symbol(null,"make-comparison-matrix-data","make-comparison-matrix-data",-2779548,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),new cljs.core.Symbol(null,"get-validation-string","get-validation-string",1434627800,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.fromArray([(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null),app.time.parse_date_range);
}));

(app.time.parse_date_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48767 = type__40451__auto__;
var G__48768 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
var fexpr__48766 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48766.cljs$core$IFn$_invoke$arity$2 ? fexpr__48766.cljs$core$IFn$_invoke$arity$2(G__48767,G__48768) : fexpr__48766.call(null,G__48767,G__48768));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null))], null),app.time.parse_date_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null),app.time.date_to_timestamp);
}));

(app.time.date_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48770 = type__40451__auto__;
var G__48771 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
var fexpr__48769 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48769.cljs$core$IFn$_invoke$arity$2 ? fexpr__48769.cljs$core$IFn$_invoke$arity$2(G__48770,G__48771) : fexpr__48769.call(null,G__48770,G__48771));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null))], null),app.time.date_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null),app.time.map_to_timestamp);
}));

(app.time.map_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48773 = type__40451__auto__;
var G__48774 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
var fexpr__48772 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48772.cljs$core$IFn$_invoke$arity$2 ? fexpr__48772.cljs$core$IFn$_invoke$arity$2(G__48773,G__48774) : fexpr__48772.call(null,G__48773,G__48774));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null))], null),app.time.map_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null),app.time.timestamp_to_date_string);
}));

(app.time.timestamp_to_date_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48776 = type__40451__auto__;
var G__48777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
var fexpr__48775 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48775.cljs$core$IFn$_invoke$arity$2 ? fexpr__48775.cljs$core$IFn$_invoke$arity$2(G__48776,G__48777) : fexpr__48775.call(null,G__48776,G__48777));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_date_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null),app.time.timestamp_to_full_string);
}));

(app.time.timestamp_to_full_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48779 = type__40451__auto__;
var G__48780 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
var fexpr__48778 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48778.cljs$core$IFn$_invoke$arity$2 ? fexpr__48778.cljs$core$IFn$_invoke$arity$2(G__48779,G__48780) : fexpr__48778.call(null,G__48779,G__48780));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_full_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null),app.time.get_period_range);
}));

(app.time.get_period_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48782 = type__40451__auto__;
var G__48783 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
var fexpr__48781 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48781.cljs$core$IFn$_invoke$arity$2 ? fexpr__48781.cljs$core$IFn$_invoke$arity$2(G__48782,G__48783) : fexpr__48781.call(null,G__48782,G__48783));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null))], null),app.time.get_period_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null),app.time.parse_date);
}));

(app.time.parse_date = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48785 = type__40451__auto__;
var G__48786 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
var fexpr__48784 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48784.cljs$core$IFn$_invoke$arity$2 ? fexpr__48784.cljs$core$IFn$_invoke$arity$2(G__48785,G__48786) : fexpr__48784.call(null,G__48785,G__48786));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null))], null),app.time.parse_date));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null),app.time.group_by_period);
}));

(app.time.group_by_period = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48788 = type__40451__auto__;
var G__48789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
var fexpr__48787 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48787.cljs$core$IFn$_invoke$arity$2 ? fexpr__48787.cljs$core$IFn$_invoke$arity$2(G__48788,G__48789) : fexpr__48787.call(null,G__48788,G__48789));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null))], null),app.time.group_by_period));

console.log("..instrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null),app.math.average);
}));

(app.math.average = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48791 = type__40451__auto__;
var G__48792 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
var fexpr__48790 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48790.cljs$core$IFn$_invoke$arity$2 ? fexpr__48790.cljs$core$IFn$_invoke$arity$2(G__48791,G__48792) : fexpr__48790.call(null,G__48791,G__48792));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null))], null),app.math.average));

console.log("..instrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null),app.single_var_table.get_csv_values);
}));

(app.single_var_table.get_csv_values = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48794 = type__40451__auto__;
var G__48795 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
var fexpr__48793 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48793.cljs$core$IFn$_invoke$arity$2 ? fexpr__48793.cljs$core$IFn$_invoke$arity$2(G__48794,G__48795) : fexpr__48793.call(null,G__48794,G__48795));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null))], null),app.single_var_table.get_csv_values));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),app.single_var_table.get_one_var_timeseries_data);
}));

(app.single_var_table.get_one_var_timeseries_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48797 = type__40451__auto__;
var G__48798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
var fexpr__48796 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48796.cljs$core$IFn$_invoke$arity$2 ? fexpr__48796.cljs$core$IFn$_invoke$arity$2(G__48797,G__48798) : fexpr__48796.call(null,G__48797,G__48798));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null))], null),app.single_var_table.get_one_var_timeseries_data));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48800 = type__40451__auto__;
var G__48801 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
var fexpr__48799 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48799.cljs$core$IFn$_invoke$arity$2 ? fexpr__48799.cljs$core$IFn$_invoke$arity$2(G__48800,G__48801) : fexpr__48799.call(null,G__48800,G__48801));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),app.single_var_table.calc_counted_score);
}));

(app.single_var_table.calc_counted_score = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48803 = type__40451__auto__;
var G__48804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
var fexpr__48802 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48802.cljs$core$IFn$_invoke$arity$2 ? fexpr__48802.cljs$core$IFn$_invoke$arity$2(G__48803,G__48804) : fexpr__48802.call(null,G__48803,G__48804));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),app.single_var_table.calc_counted_score));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),app.single_var_table.make_hiccup);
}));

(app.single_var_table.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48806 = type__40451__auto__;
var G__48807 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
var fexpr__48805 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48805.cljs$core$IFn$_invoke$arity$2 ? fexpr__48805.cljs$core$IFn$_invoke$arity$2(G__48806,G__48807) : fexpr__48805.call(null,G__48806,G__48807));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null))], null),app.single_var_table.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48809 = type__40451__auto__;
var G__48810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
var fexpr__48808 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48808.cljs$core$IFn$_invoke$arity$2 ? fexpr__48808.cljs$core$IFn$_invoke$arity$2(G__48809,G__48810) : fexpr__48808.call(null,G__48809,G__48810));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),app.csv_data_processing.merge_rows_using_dates);
}));

(app.csv_data_processing.merge_rows_using_dates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48812 = type__40451__auto__;
var G__48813 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
var fexpr__48811 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48811.cljs$core$IFn$_invoke$arity$2 ? fexpr__48811.cljs$core$IFn$_invoke$arity$2(G__48812,G__48813) : fexpr__48811.call(null,G__48812,G__48813));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.merge_rows_using_dates));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),app.csv_data_processing.add_timestamps);
}));

(app.csv_data_processing.add_timestamps = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48815 = type__40451__auto__;
var G__48816 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
var fexpr__48814 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48814.cljs$core$IFn$_invoke$arity$2 ? fexpr__48814.cljs$core$IFn$_invoke$arity$2(G__48815,G__48816) : fexpr__48814.call(null,G__48815,G__48816));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.add_timestamps));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),app.csv_data_processing.floatify_data);
}));

(app.csv_data_processing.floatify_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48818 = type__40451__auto__;
var G__48819 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
var fexpr__48817 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48817.cljs$core$IFn$_invoke$arity$2 ? fexpr__48817.cljs$core$IFn$_invoke$arity$2(G__48818,G__48819) : fexpr__48817.call(null,G__48818,G__48819));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.floatify_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),app.csv_data_processing.process_csv_data);
}));

(app.csv_data_processing.process_csv_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48821 = type__40451__auto__;
var G__48822 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
var fexpr__48820 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48820.cljs$core$IFn$_invoke$arity$2 ? fexpr__48820.cljs$core$IFn$_invoke$arity$2(G__48821,G__48822) : fexpr__48820.call(null,G__48821,G__48822));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null))], null),app.csv_data_processing.process_csv_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48824 = type__40451__auto__;
var G__48825 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
var fexpr__48823 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48823.cljs$core$IFn$_invoke$arity$2 ? fexpr__48823.cljs$core$IFn$_invoke$arity$2(G__48824,G__48825) : fexpr__48823.call(null,G__48824,G__48825));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48827 = type__40451__auto__;
var G__48828 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
var fexpr__48826 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48826.cljs$core$IFn$_invoke$arity$2 ? fexpr__48826.cljs$core$IFn$_invoke$arity$2(G__48827,G__48828) : fexpr__48826.call(null,G__48827,G__48828));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48830 = type__40451__auto__;
var G__48831 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
var fexpr__48829 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48829.cljs$core$IFn$_invoke$arity$2 ? fexpr__48829.cljs$core$IFn$_invoke$arity$2(G__48830,G__48831) : fexpr__48829.call(null,G__48830,G__48831));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null),app.timeline.rows_to_events);
}));

(app.timeline.rows_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48833 = type__40451__auto__;
var G__48834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
var fexpr__48832 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48832.cljs$core$IFn$_invoke$arity$2 ? fexpr__48832.cljs$core$IFn$_invoke$arity$2(G__48833,G__48834) : fexpr__48832.call(null,G__48833,G__48834));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.rows_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null),app.timeline.ranges_to_events);
}));

(app.timeline.ranges_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48836 = type__40451__auto__;
var G__48837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
var fexpr__48835 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48835.cljs$core$IFn$_invoke$arity$2 ? fexpr__48835.cljs$core$IFn$_invoke$arity$2(G__48836,G__48837) : fexpr__48835.call(null,G__48836,G__48837));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.ranges_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null),app.timeline.get_unique_lanes);
}));

(app.timeline.get_unique_lanes = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48839 = type__40451__auto__;
var G__48840 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
var fexpr__48838 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48838.cljs$core$IFn$_invoke$arity$2 ? fexpr__48838.cljs$core$IFn$_invoke$arity$2(G__48839,G__48840) : fexpr__48838.call(null,G__48839,G__48840));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null))], null),app.timeline.get_unique_lanes));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null),app.timeline.make_timeline);
}));

(app.timeline.make_timeline = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48842 = type__40451__auto__;
var G__48843 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
var fexpr__48841 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48841.cljs$core$IFn$_invoke$arity$2 ? fexpr__48841.cljs$core$IFn$_invoke$arity$2(G__48842,G__48843) : fexpr__48841.call(null,G__48842,G__48843));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.make_timeline));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null),app.timeline.timeline_for_page);
}));

(app.timeline.timeline_for_page = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48845 = type__40451__auto__;
var G__48846 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
var fexpr__48844 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48844.cljs$core$IFn$_invoke$arity$2 ? fexpr__48844.cljs$core$IFn$_invoke$arity$2(G__48845,G__48846) : fexpr__48844.call(null,G__48845,G__48846));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.timeline_for_page));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null),app.csv._standardize_keys);
}));

(app.csv._standardize_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48848 = type__40451__auto__;
var G__48849 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
var fexpr__48847 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48847.cljs$core$IFn$_invoke$arity$2 ? fexpr__48847.cljs$core$IFn$_invoke$arity$2(G__48848,G__48849) : fexpr__48847.call(null,G__48848,G__48849));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null))], null),app.csv._standardize_keys));

console.log("..instrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null),app.input_data_validation.get_all_data_validation_string);
}));

(app.input_data_validation.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48851 = type__40451__auto__;
var G__48852 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
var fexpr__48850 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48850.cljs$core$IFn$_invoke$arity$2 ? fexpr__48850.cljs$core$IFn$_invoke$arity$2(G__48851,G__48852) : fexpr__48850.call(null,G__48851,G__48852));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null),app.input_data_validation.get_validation_string);
}));

(app.input_data_validation.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48854 = type__40451__auto__;
var G__48855 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
var fexpr__48853 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48853.cljs$core$IFn$_invoke$arity$2 ? fexpr__48853.cljs$core$IFn$_invoke$arity$2(G__48854,G__48855) : fexpr__48853.call(null,G__48854,G__48855));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),app.ui.maps_to_html);
}));

(app.ui.maps_to_html = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48857 = type__40451__auto__;
var G__48858 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
var fexpr__48856 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48856.cljs$core$IFn$_invoke$arity$2 ? fexpr__48856.cljs$core$IFn$_invoke$arity$2(G__48857,G__48858) : fexpr__48856.call(null,G__48857,G__48858));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null))], null),app.ui.maps_to_html));

console.log("..instrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null),app.aggregation.combine_rows);
}));

(app.aggregation.combine_rows = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48860 = type__40451__auto__;
var G__48861 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
var fexpr__48859 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48859.cljs$core$IFn$_invoke$arity$2 ? fexpr__48859.cljs$core$IFn$_invoke$arity$2(G__48860,G__48861) : fexpr__48859.call(null,G__48860,G__48861));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null))], null),app.aggregation.combine_rows));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null),app.aggregation.aggregate_data);
}));

(app.aggregation.aggregate_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48863 = type__40451__auto__;
var G__48864 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
var fexpr__48862 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48862.cljs$core$IFn$_invoke$arity$2 ? fexpr__48862.cljs$core$IFn$_invoke$arity$2(G__48863,G__48864) : fexpr__48862.call(null,G__48863,G__48864));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null))], null),app.aggregation.aggregate_data));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null),app.aggregation.aggregation_section);
}));

(app.aggregation.aggregation_section = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48866 = type__40451__auto__;
var G__48867 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
var fexpr__48865 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48865.cljs$core$IFn$_invoke$arity$2 ? fexpr__48865.cljs$core$IFn$_invoke$arity$2(G__48866,G__48867) : fexpr__48865.call(null,G__48866,G__48867));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.aggregation.aggregation_section));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null),app.stats.clean_data);
}));

(app.stats.clean_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48869 = type__40451__auto__;
var G__48870 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
var fexpr__48868 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48868.cljs$core$IFn$_invoke$arity$2 ? fexpr__48868.cljs$core$IFn$_invoke$arity$2(G__48869,G__48870) : fexpr__48868.call(null,G__48869,G__48870));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null))], null),app.stats.clean_data));

console.log("..instrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48872 = type__40451__auto__;
var G__48873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
var fexpr__48871 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48871.cljs$core$IFn$_invoke$arity$2 ? fexpr__48871.cljs$core$IFn$_invoke$arity$2(G__48872,G__48873) : fexpr__48871.call(null,G__48872,G__48873));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null),app.stats.enliten);
}));

(app.stats.enliten = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48875 = type__40451__auto__;
var G__48876 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
var fexpr__48874 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48874.cljs$core$IFn$_invoke$arity$2 ? fexpr__48874.cljs$core$IFn$_invoke$arity$2(G__48875,G__48876) : fexpr__48874.call(null,G__48875,G__48876));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null))], null),app.stats.enliten));

console.log("..instrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null),app.stats.calc_correlation);
}));

(app.stats.calc_correlation = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48878 = type__40451__auto__;
var G__48879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
var fexpr__48877 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48877.cljs$core$IFn$_invoke$arity$2 ? fexpr__48877.cljs$core$IFn$_invoke$arity$2(G__48878,G__48879) : fexpr__48877.call(null,G__48878,G__48879));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null))], null),app.stats.calc_correlation));

console.log("..instrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48881 = type__40451__auto__;
var G__48882 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
var fexpr__48880 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48880.cljs$core$IFn$_invoke$arity$2 ? fexpr__48880.cljs$core$IFn$_invoke$arity$2(G__48881,G__48882) : fexpr__48880.call(null,G__48881,G__48882));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null),app.core.get_vars);
}));

(app.core.get_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48884 = type__40451__auto__;
var G__48885 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
var fexpr__48883 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48883.cljs$core$IFn$_invoke$arity$2 ? fexpr__48883.cljs$core$IFn$_invoke$arity$2(G__48884,G__48885) : fexpr__48883.call(null,G__48884,G__48885));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null))], null),app.core.get_vars));

console.log("..instrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),app.comparison_matrix_table.make_comparison_matrix_data);
}));

(app.comparison_matrix_table.make_comparison_matrix_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48887 = type__40451__auto__;
var G__48888 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
var fexpr__48886 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48886.cljs$core$IFn$_invoke$arity$2 ? fexpr__48886.cljs$core$IFn$_invoke$arity$2(G__48887,G__48888) : fexpr__48886.call(null,G__48887,G__48888));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null))], null),app.comparison_matrix_table.make_comparison_matrix_data));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),app.comparison_matrix_table.add_aggregates);
}));

(app.comparison_matrix_table.add_aggregates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48890 = type__40451__auto__;
var G__48891 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
var fexpr__48889 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48889.cljs$core$IFn$_invoke$arity$2 ? fexpr__48889.cljs$core$IFn$_invoke$arity$2(G__48890,G__48891) : fexpr__48889.call(null,G__48890,G__48891));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.add_aggregates));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null),app.comparison_matrix_table.get_flat_biomarker_result_keys);
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48893 = type__40451__auto__;
var G__48894 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
var fexpr__48892 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48892.cljs$core$IFn$_invoke$arity$2 ? fexpr__48892.cljs$core$IFn$_invoke$arity$2(G__48893,G__48894) : fexpr__48892.call(null,G__48893,G__48894));
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
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
}));

(app.time.parse_date_range = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
}));

(app.time.date_to_timestamp = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
}));

(app.time.map_to_timestamp = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
}));

(app.time.timestamp_to_date_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
}));

(app.time.timestamp_to_full_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
}));

(app.time.get_period_range = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
}));

(app.time.parse_date = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
}));

(app.time.group_by_period = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
}));

(app.math.average = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
}));

(app.single_var_table.get_csv_values = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
}));

(app.single_var_table.get_one_var_timeseries_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
}));

(app.single_var_table.make_all_correlations = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
}));

(app.single_var_table.calc_counted_score = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
}));

(app.single_var_table.make_hiccup = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
}));

(app.single_var_table.get_significant_correlations = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
}));

(app.csv_data_processing.merge_rows_using_dates = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
}));

(app.csv_data_processing.add_timestamps = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
}));

(app.csv_data_processing.floatify_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
}));

(app.csv_data_processing.process_csv_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
}));

(app.biomarker_data.get_var_name = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
}));

(app.biomarker_data.add_hrs = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
}));

(app.biomarker_data.make_acm_plot = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
}));

(app.timeline.rows_to_events = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
}));

(app.timeline.ranges_to_events = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
}));

(app.timeline.get_unique_lanes = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
}));

(app.timeline.make_timeline = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
}));

(app.timeline.timeline_for_page = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
}));

(app.csv._standardize_keys = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
}));

(app.input_data_validation.get_all_data_validation_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
}));

(app.input_data_validation.get_validation_string = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
}));

(app.ui.maps_to_html = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
}));

(app.aggregation.combine_rows = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
}));

(app.aggregation.aggregate_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
}));

(app.aggregation.aggregation_section = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
}));

(app.stats.clean_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
}));

(app.stats.compute_correlations = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
}));

(app.stats.enliten = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
}));

(app.stats.calc_correlation = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
}));

(app.specs.make_hiccup = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
}));

(app.core.get_vars = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
}));

(app.comparison_matrix_table.make_comparison_matrix_data = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
}));

(app.comparison_matrix_table.add_aggregates = orig_fn__40476__auto__);

console.log("..unstrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__40476__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40475__40477__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40475__40477__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = orig_fn__40476__auto__);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.ui","app.ui",-1105541323,null),new cljs.core.Symbol(null,"maps-to-html","maps-to-html",-541539065,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"make-hiccup","make-hiccup",-2040101156,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),new cljs.core.Symbol(null,"get-flat-biomarker-result-keys","get-flat-biomarker-result-keys",-2049940581,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),new cljs.core.Symbol(null,"get-all-data-validation-string","get-all-data-validation-string",-1361206755,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),new cljs.core.Symbol(null,"add-aggregates","add-aggregates",1165374252,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.csv","app.csv",1676676688,null),new cljs.core.Symbol(null,"-standardize-keys","-standardize-keys",-1001622265,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"get-csv-values","get-csv-values",1025959841,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"group-by-period","group-by-period",-822796806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"period-type","period-type",-593306174,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null),new cljs.core.Symbol(null,"PeriodIdTypes","PeriodIdTypes",364588406,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"PeriodRange","PeriodRange",-600752474,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Symbol(null,"Timestamp","Timestamp",536786272,null)], null)], null)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"make-all-correlations","make-all-correlations",-354399926,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.time","app.time",-1018941024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parse-date-range","parse-date-range",-921785304,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date-range","date-range",1703615044,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return\n  the first date unless it is unparsable, in which case will return the second.\n  If no 'to' is in the string, will just return the only date (if it is one).",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Date","Date",946857020,null)], null),new cljs.core.Symbol(null,"VegaDate","VegaDate",791765031,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.single-var-table","app.single-var-table",-489991386,null),new cljs.core.Symbol(null,"get-one-var-timeseries-data","get-one-var-timeseries-data",-218445081,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.comparison-matrix-table","app.comparison-matrix-table",990026492,null),new cljs.core.Symbol(null,"make-comparison-matrix-data","make-comparison-matrix-data",-2779548,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"app.input-data-validation","app.input-data-validation",1744023635,null),new cljs.core.Symbol(null,"get-validation-string","get-validation-string",1434627800,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.fromArray([(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null),app.time.parse_date_range);
}));

(app.time.parse_date_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48896 = type__40451__auto__;
var G__48897 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));
var fexpr__48895 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48895.cljs$core$IFn$_invoke$arity$2 ? fexpr__48895.cljs$core$IFn$_invoke$arity$2(G__48896,G__48897) : fexpr__48895.call(null,G__48896,G__48897));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.VegaDate], null))], null),app.time.parse_date_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null));

return new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null),app.time.date_to_timestamp);
}));

(app.time.date_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48899 = type__40451__auto__;
var G__48900 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));
var fexpr__48898 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48898.cljs$core$IFn$_invoke$arity$2 ? fexpr__48898.cljs$core$IFn$_invoke$arity$2(G__48899,G__48900) : fexpr__48898.call(null,G__48899,G__48900));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),app.time.Timestamp], null))], null),app.time.date_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null));

return new cljs.core.Symbol("app.time","date-to-timestamp","app.time/date-to-timestamp",1007306734,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null),app.time.map_to_timestamp);
}));

(app.time.map_to_timestamp = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48902 = type__40451__auto__;
var G__48903 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));
var fexpr__48901 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48901.cljs$core$IFn$_invoke$arity$2 ? fexpr__48901.cljs$core$IFn$_invoke$arity$2(G__48902,G__48903) : fexpr__48901.call(null,G__48902,G__48903));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.VegaDate], null),app.time.Timestamp], null))], null),app.time.map_to_timestamp));

console.log("..instrumented",new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null));

return new cljs.core.Symbol("app.time","map-to-timestamp","app.time/map-to-timestamp",1308881601,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null),app.time.timestamp_to_date_string);
}));

(app.time.timestamp_to_date_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48905 = type__40451__auto__;
var G__48906 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));
var fexpr__48904 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48904.cljs$core$IFn$_invoke$arity$2 ? fexpr__48904.cljs$core$IFn$_invoke$arity$2(G__48905,G__48906) : fexpr__48904.call(null,G__48905,G__48906));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_date_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null));

return new cljs.core.Symbol("app.time","timestamp-to-date-string","app.time/timestamp-to-date-string",2120834441,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null),app.time.timestamp_to_full_string);
}));

(app.time.timestamp_to_full_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48908 = type__40451__auto__;
var G__48909 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));
var fexpr__48907 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48907.cljs$core$IFn$_invoke$arity$2 ? fexpr__48907.cljs$core$IFn$_invoke$arity$2(G__48908,G__48909) : fexpr__48907.call(null,G__48908,G__48909));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null))], null),app.time.timestamp_to_full_string));

console.log("..instrumented",new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null));

return new cljs.core.Symbol("app.time","timestamp-to-full-string","app.time/timestamp-to-full-string",-1998930793,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null),app.time.get_period_range);
}));

(app.time.get_period_range = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48911 = type__40451__auto__;
var G__48912 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));
var fexpr__48910 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48910.cljs$core$IFn$_invoke$arity$2 ? fexpr__48910.cljs$core$IFn$_invoke$arity$2(G__48911,G__48912) : fexpr__48910.call(null,G__48911,G__48912));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.PeriodIdTypes], null),app.time.PeriodRange], null))], null),app.time.get_period_range));

console.log("..instrumented",new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null));

return new cljs.core.Symbol("app.time","get-period-range","app.time/get-period-range",-532221828,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null),app.time.parse_date);
}));

(app.time.parse_date = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48914 = type__40451__auto__;
var G__48915 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));
var fexpr__48913 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48913.cljs$core$IFn$_invoke$arity$2 ? fexpr__48913.cljs$core$IFn$_invoke$arity$2(G__48914,G__48915) : fexpr__48913.call(null,G__48914,G__48915));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.time.VegaDate], null)], null))], null),app.time.parse_date));

console.log("..instrumented",new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null));

return new cljs.core.Symbol("app.time","parse-date","app.time/parse-date",1307686562,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null),app.time.group_by_period);
}));

(app.time.group_by_period = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48917 = type__40451__auto__;
var G__48918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));
var fexpr__48916 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48916.cljs$core$IFn$_invoke$arity$2 ? fexpr__48916.cljs$core$IFn$_invoke$arity$2(G__48917,G__48918) : fexpr__48916.call(null,G__48917,G__48918));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null),app.time.PeriodIdTypes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null)], null)], null))], null),app.time.group_by_period));

console.log("..instrumented",new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null));

return new cljs.core.Symbol("app.time","group-by-period","app.time/group-by-period",30301284,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null),app.math.average);
}));

(app.math.average = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48920 = type__40451__auto__;
var G__48921 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));
var fexpr__48919 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48919.cljs$core$IFn$_invoke$arity$2 ? fexpr__48919.cljs$core$IFn$_invoke$arity$2(G__48920,G__48921) : fexpr__48919.call(null,G__48920,G__48921));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null))], null),app.math.average));

console.log("..instrumented",new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null));

return new cljs.core.Symbol("app.math","average","app.math/average",-2095983036,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null),app.single_var_table.get_csv_values);
}));

(app.single_var_table.get_csv_values = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48923 = type__40451__auto__;
var G__48924 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));
var fexpr__48922 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48922.cljs$core$IFn$_invoke$arity$2 ? fexpr__48922.cljs$core$IFn$_invoke$arity$2(G__48923,G__48924) : fexpr__48922.call(null,G__48923,G__48924));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null))], null),app.single_var_table.get_csv_values));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null));

return new cljs.core.Symbol("app.single-var-table","get-csv-values","app.single-var-table/get-csv-values",162860081,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),app.single_var_table.get_one_var_timeseries_data);
}));

(app.single_var_table.get_one_var_timeseries_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48926 = type__40451__auto__;
var G__48927 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));
var fexpr__48925 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48925.cljs$core$IFn$_invoke$arity$2 ? fexpr__48925.cljs$core$IFn$_invoke$arity$2(G__48926,G__48927) : fexpr__48925.call(null,G__48926,G__48927));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.biomarker_data.TimeseriesData], null))], null),app.single_var_table.get_one_var_timeseries_data));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null));

return new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null),app.single_var_table.make_all_correlations);
}));

(app.single_var_table.make_all_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48929 = type__40451__auto__;
var G__48930 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));
var fexpr__48928 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48928.cljs$core$IFn$_invoke$arity$2 ? fexpr__48928.cljs$core$IFn$_invoke$arity$2(G__48929,G__48930) : fexpr__48928.call(null,G__48929,G__48930));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null)], null))], null),app.single_var_table.make_all_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null));

return new cljs.core.Symbol("app.single-var-table","make-all-correlations","app.single-var-table/make-all-correlations",-1642924838,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),app.single_var_table.calc_counted_score);
}));

(app.single_var_table.calc_counted_score = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48932 = type__40451__auto__;
var G__48933 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));
var fexpr__48931 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48931.cljs$core$IFn$_invoke$arity$2 ? fexpr__48931.cljs$core$IFn$_invoke$arity$2(G__48932,G__48933) : fexpr__48931.call(null,G__48932,G__48933));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),app.stats.PairwiseCorrelations], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),app.single_var_table.calc_counted_score));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null));

return new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),app.single_var_table.make_hiccup);
}));

(app.single_var_table.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48935 = type__40451__auto__;
var G__48936 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));
var fexpr__48934 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48934.cljs$core$IFn$_invoke$arity$2 ? fexpr__48934.cljs$core$IFn$_invoke$arity$2(G__48935,G__48936) : fexpr__48934.call(null,G__48935,G__48936));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.single_var_table.OneToManyCorrelation], null),app.specs.ReagentComponent], null))], null),app.single_var_table.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null));

return new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null),app.single_var_table.get_significant_correlations);
}));

(app.single_var_table.get_significant_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48938 = type__40451__auto__;
var G__48939 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));
var fexpr__48937 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48937.cljs$core$IFn$_invoke$arity$2 ? fexpr__48937.cljs$core$IFn$_invoke$arity$2(G__48938,G__48939) : fexpr__48937.call(null,G__48938,G__48939));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations,new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),app.single_var_table.OneToManyCorrelation], null))], null),app.single_var_table.get_significant_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null));

return new cljs.core.Symbol("app.single-var-table","get-significant-correlations","app.single-var-table/get-significant-correlations",-737968020,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),app.csv_data_processing.merge_rows_using_dates);
}));

(app.csv_data_processing.merge_rows_using_dates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48941 = type__40451__auto__;
var G__48942 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));
var fexpr__48940 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48940.cljs$core$IFn$_invoke$arity$2 ? fexpr__48940.cljs$core$IFn$_invoke$arity$2(G__48941,G__48942) : fexpr__48940.call(null,G__48941,G__48942));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.merge_rows_using_dates));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null));

return new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),app.csv_data_processing.add_timestamps);
}));

(app.csv_data_processing.add_timestamps = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48944 = type__40451__auto__;
var G__48945 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));
var fexpr__48943 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48943.cljs$core$IFn$_invoke$arity$2 ? fexpr__48943.cljs$core$IFn$_invoke$arity$2(G__48944,G__48945) : fexpr__48943.call(null,G__48944,G__48945));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.add_timestamps));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null));

return new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),app.csv_data_processing.floatify_data);
}));

(app.csv_data_processing.floatify_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48947 = type__40451__auto__;
var G__48948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));
var fexpr__48946 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48946.cljs$core$IFn$_invoke$arity$2 ? fexpr__48946.cljs$core$IFn$_invoke$arity$2(G__48947,G__48948) : fexpr__48946.call(null,G__48947,G__48948));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null))], null),app.csv_data_processing.floatify_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null));

return new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),app.csv_data_processing.process_csv_data);
}));

(app.csv_data_processing.process_csv_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48950 = type__40451__auto__;
var G__48951 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));
var fexpr__48949 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48949.cljs$core$IFn$_invoke$arity$2 ? fexpr__48949.cljs$core$IFn$_invoke$arity$2(G__48950,G__48951) : fexpr__48949.call(null,G__48950,G__48951));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null))], null),app.csv_data_processing.process_csv_data));

console.log("..instrumented",new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null));

return new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null),app.biomarker_data.get_var_name);
}));

(app.biomarker_data.get_var_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48953 = type__40451__auto__;
var G__48954 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));
var fexpr__48952 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48952.cljs$core$IFn$_invoke$arity$2 ? fexpr__48952.cljs$core$IFn$_invoke$arity$2(G__48953,G__48954) : fexpr__48952.call(null,G__48953,G__48954));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))], null),app.biomarker_data.get_var_name));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null));

return new cljs.core.Symbol("app.biomarker-data","get-var-name","app.biomarker-data/get-var-name",99435084,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null),app.biomarker_data.add_hrs);
}));

(app.biomarker_data.add_hrs = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48956 = type__40451__auto__;
var G__48957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));
var fexpr__48955 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48955.cljs$core$IFn$_invoke$arity$2 ? fexpr__48955.cljs$core$IFn$_invoke$arity$2(G__48956,G__48957) : fexpr__48955.call(null,G__48956,G__48957));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.biomarker_data.HazardRatioData], null)], null),app.biomarker_data.HRTimeseriesData], null))], null),app.biomarker_data.add_hrs));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null));

return new cljs.core.Symbol("app.biomarker-data","add-hrs","app.biomarker-data/add-hrs",-2127067559,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null),app.biomarker_data.make_acm_plot);
}));

(app.biomarker_data.make_acm_plot = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48959 = type__40451__auto__;
var G__48960 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));
var fexpr__48958 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48958.cljs$core$IFn$_invoke$arity$2 ? fexpr__48958.cljs$core$IFn$_invoke$arity$2(G__48959,G__48960) : fexpr__48958.call(null,G__48959,G__48960));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.biomarker_data.TimeseriesData,app.biomarker_data.BiomarkerData], null),app.specs.ReagentComponent], null))], null),app.biomarker_data.make_acm_plot));

console.log("..instrumented",new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null));

return new cljs.core.Symbol("app.biomarker-data","make-acm-plot","app.biomarker-data/make-acm-plot",-1440620661,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null),app.timeline.rows_to_events);
}));

(app.timeline.rows_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48962 = type__40451__auto__;
var G__48963 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));
var fexpr__48961 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48961.cljs$core$IFn$_invoke$arity$2 ? fexpr__48961.cljs$core$IFn$_invoke$arity$2(G__48962,G__48963) : fexpr__48961.call(null,G__48962,G__48963));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.rows_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null));

return new cljs.core.Symbol("app.timeline","rows-to-events","app.timeline/rows-to-events",-525324979,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null),app.timeline.ranges_to_events);
}));

(app.timeline.ranges_to_events = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48965 = type__40451__auto__;
var G__48966 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));
var fexpr__48964 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48964.cljs$core$IFn$_invoke$arity$2 ? fexpr__48964.cljs$core$IFn$_invoke$arity$2(G__48965,G__48966) : fexpr__48964.call(null,G__48965,G__48966));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null))], null),app.timeline.ranges_to_events));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null));

return new cljs.core.Symbol("app.timeline","ranges-to-events","app.timeline/ranges-to-events",250747142,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null),app.timeline.get_unique_lanes);
}));

(app.timeline.get_unique_lanes = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48968 = type__40451__auto__;
var G__48969 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));
var fexpr__48967 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48967.cljs$core$IFn$_invoke$arity$2 ? fexpr__48967.cljs$core$IFn$_invoke$arity$2(G__48968,G__48969) : fexpr__48967.call(null,G__48968,G__48969));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Lane], null)], null))], null),app.timeline.get_unique_lanes));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null));

return new cljs.core.Symbol("app.timeline","get-unique-lanes","app.timeline/get-unique-lanes",-1938843928,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null),app.timeline.make_timeline);
}));

(app.timeline.make_timeline = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48971 = type__40451__auto__;
var G__48972 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));
var fexpr__48970 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48970.cljs$core$IFn$_invoke$arity$2 ? fexpr__48970.cljs$core$IFn$_invoke$arity$2(G__48971,G__48972) : fexpr__48970.call(null,G__48971,G__48972));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.timeline.Event], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.make_timeline));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null));

return new cljs.core.Symbol("app.timeline","make-timeline","app.timeline/make-timeline",1565393329,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null),app.timeline.timeline_for_page);
}));

(app.timeline.timeline_for_page = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48974 = type__40451__auto__;
var G__48975 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));
var fexpr__48973 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48973.cljs$core$IFn$_invoke$arity$2 ? fexpr__48973.cljs$core$IFn$_invoke$arity$2(G__48974,G__48975) : fexpr__48973.call(null,G__48974,G__48975));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.timeline.timeline_for_page));

console.log("..instrumented",new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null));

return new cljs.core.Symbol("app.timeline","timeline-for-page","app.timeline/timeline-for-page",-1427048694,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null),app.csv._standardize_keys);
}));

(app.csv._standardize_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48977 = type__40451__auto__;
var G__48978 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));
var fexpr__48976 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48976.cljs$core$IFn$_invoke$arity$2 ? fexpr__48976.cljs$core$IFn$_invoke$arity$2(G__48977,G__48978) : fexpr__48976.call(null,G__48977,G__48978));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null))], null),app.csv._standardize_keys));

console.log("..instrumented",new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null));

return new cljs.core.Symbol("app.csv","-standardize-keys","app.csv/-standardize-keys",-1798306212,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null),app.input_data_validation.get_all_data_validation_string);
}));

(app.input_data_validation.get_all_data_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48980 = type__40451__auto__;
var G__48981 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));
var fexpr__48979 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48979.cljs$core$IFn$_invoke$arity$2 ? fexpr__48979.cljs$core$IFn$_invoke$arity$2(G__48980,G__48981) : fexpr__48979.call(null,G__48980,G__48981));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_all_data_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null));

return new cljs.core.Symbol("app.input-data-validation","get-all-data-validation-string","app.input-data-validation/get-all-data-validation-string",682009513,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null),app.input_data_validation.get_validation_string);
}));

(app.input_data_validation.get_validation_string = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48983 = type__40451__auto__;
var G__48984 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));
var fexpr__48982 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48982.cljs$core$IFn$_invoke$arity$2 ? fexpr__48982.cljs$core$IFn$_invoke$arity$2(G__48983,G__48984) : fexpr__48982.call(null,G__48983,G__48984));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),app.specs.Hiccup], null))], null),app.input_data_validation.get_validation_string));

console.log("..instrumented",new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null));

return new cljs.core.Symbol("app.input-data-validation","get-validation-string","app.input-data-validation/get-validation-string",-614093652,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),app.ui.maps_to_html);
}));

(app.ui.maps_to_html = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48986 = type__40451__auto__;
var G__48987 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));
var fexpr__48985 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48985.cljs$core$IFn$_invoke$arity$2 ? fexpr__48985.cljs$core$IFn$_invoke$arity$2(G__48986,G__48987) : fexpr__48985.call(null,G__48986,G__48987));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),app.specs.Hiccup], null))], null),app.ui.maps_to_html));

console.log("..instrumented",new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null));

return new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null),app.aggregation.combine_rows);
}));

(app.aggregation.combine_rows = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48989 = type__40451__auto__;
var G__48990 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));
var fexpr__48988 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48988.cljs$core$IFn$_invoke$arity$2 ? fexpr__48988.cljs$core$IFn$_invoke$arity$2(G__48989,G__48990) : fexpr__48988.call(null,G__48989,G__48990));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.csv_data_processing.ProcessedRow], null))], null),app.aggregation.combine_rows));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null));

return new cljs.core.Symbol("app.aggregation","combine-rows","app.aggregation/combine-rows",-1007903277,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null),app.aggregation.aggregate_data);
}));

(app.aggregation.aggregate_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48992 = type__40451__auto__;
var G__48993 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));
var fexpr__48991 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48991.cljs$core$IFn$_invoke$arity$2 ? fexpr__48991.cljs$core$IFn$_invoke$arity$2(G__48992,G__48993) : fexpr__48991.call(null,G__48992,G__48993));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null),app.time.PeriodIdTypes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),app.time.PeriodRange,app.csv_data_processing.ProcessedRow], null)], null))], null),app.aggregation.aggregate_data));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null));

return new cljs.core.Symbol("app.aggregation","aggregate-data","app.aggregation/aggregate-data",1286470681,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null),app.aggregation.aggregation_section);
}));

(app.aggregation.aggregation_section = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48995 = type__40451__auto__;
var G__48996 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));
var fexpr__48994 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48994.cljs$core$IFn$_invoke$arity$2 ? fexpr__48994.cljs$core$IFn$_invoke$arity$2(G__48995,G__48996) : fexpr__48994.call(null,G__48995,G__48996));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.time.PeriodRange], null)], null),app.specs.ReagentComponent], null))], null),app.aggregation.aggregation_section));

console.log("..instrumented",new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null));

return new cljs.core.Symbol("app.aggregation","aggregation-section","app.aggregation/aggregation-section",-1886008994,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null),app.stats.clean_data);
}));

(app.stats.clean_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__48998 = type__40451__auto__;
var G__48999 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));
var fexpr__48997 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__48997.cljs$core$IFn$_invoke$arity$2 ? fexpr__48997.cljs$core$IFn$_invoke$arity$2(G__48998,G__48999) : fexpr__48997.call(null,G__48998,G__48999));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairedData], null))], null),app.stats.clean_data));

console.log("..instrumented",new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null));

return new cljs.core.Symbol("app.stats","clean-data","app.stats/clean-data",-415603632,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null),app.stats.compute_correlations);
}));

(app.stats.compute_correlations = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49001 = type__40451__auto__;
var G__49002 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));
var fexpr__49000 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49000.cljs$core$IFn$_invoke$arity$2 ? fexpr__49000.cljs$core$IFn$_invoke$arity$2(G__49001,G__49002) : fexpr__49000.call(null,G__49001,G__49002));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.PairwiseCorrelations], null))], null),app.stats.compute_correlations));

console.log("..instrumented",new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null));

return new cljs.core.Symbol("app.stats","compute-correlations","app.stats/compute-correlations",-1090864316,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null),app.stats.enliten);
}));

(app.stats.enliten = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49004 = type__40451__auto__;
var G__49005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));
var fexpr__49003 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49003.cljs$core$IFn$_invoke$arity$2 ? fexpr__49003.cljs$core$IFn$_invoke$arity$2(G__49004,G__49005) : fexpr__49003.call(null,G__49004,G__49005));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelations], null),app.stats.PairwiseCorrelationsLite], null))], null),app.stats.enliten));

console.log("..instrumented",new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null));

return new cljs.core.Symbol("app.stats","enliten","app.stats/enliten",-143514198,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null),app.stats.calc_correlation);
}));

(app.stats.calc_correlation = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49007 = type__40451__auto__;
var G__49008 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));
var fexpr__49006 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49006.cljs$core$IFn$_invoke$arity$2 ? fexpr__49006.cljs$core$IFn$_invoke$arity$2(G__49007,G__49008) : fexpr__49006.call(null,G__49007,G__49008));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.ProcessedRow], null)], null),app.stats.CorrelationResults], null))], null),app.stats.calc_correlation));

console.log("..instrumented",new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null));

return new cljs.core.Symbol("app.stats","calc-correlation","app.stats/calc-correlation",-1900174739,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null),app.specs.make_hiccup);
}));

(app.specs.make_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49010 = type__40451__auto__;
var G__49011 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));
var fexpr__49009 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49009.cljs$core$IFn$_invoke$arity$2 ? fexpr__49009.cljs$core$IFn$_invoke$arity$2(G__49010,G__49011) : fexpr__49009.call(null,G__49010,G__49011));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),app.specs.Hiccup], null))], null),app.specs.make_hiccup));

console.log("..instrumented",new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null));

return new cljs.core.Symbol("app.specs","make-hiccup","app.specs/make-hiccup",2016545993,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null),app.core.get_vars);
}));

(app.core.get_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49013 = type__40451__auto__;
var G__49014 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));
var fexpr__49012 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49012.cljs$core$IFn$_invoke$arity$2 ? fexpr__49012.cljs$core$IFn$_invoke$arity$2(G__49013,G__49014) : fexpr__49012.call(null,G__49013,G__49014));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),app.csv_data_processing.DatedRow], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null))], null),app.core.get_vars));

console.log("..instrumented",new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null));

return new cljs.core.Symbol("app.core","get-vars","app.core/get-vars",920733976,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null),app.comparison_matrix_table.make_comparison_matrix_data);
}));

(app.comparison_matrix_table.make_comparison_matrix_data = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49016 = type__40451__auto__;
var G__49017 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));
var fexpr__49015 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49015.cljs$core$IFn$_invoke$arity$2 ? fexpr__49015.cljs$core$IFn$_invoke$arity$2(G__49016,G__49017) : fexpr__49015.call(null,G__49016,G__49017));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.stats.PairwiseCorrelationsLite,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null))], null),app.comparison_matrix_table.make_comparison_matrix_data));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null));

return new cljs.core.Symbol("app.comparison-matrix-table","make-comparison-matrix-data","app.comparison-matrix-table/make-comparison-matrix-data",699980707,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null),app.comparison_matrix_table.add_aggregates);
}));

(app.comparison_matrix_table.add_aggregates = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49019 = type__40451__auto__;
var G__49020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));
var fexpr__49018 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49018.cljs$core$IFn$_invoke$arity$2 ? fexpr__49018.cljs$core$IFn$_invoke$arity$2(G__49019,G__49020) : fexpr__49018.call(null,G__49019,G__49020));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),app.single_var_table.OneToManyCorrelation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.add_aggregates));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null));

return new cljs.core.Symbol("app.comparison-matrix-table","add-aggregates","app.comparison-matrix-table/add-aggregates",-1751431577,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__40453__40454__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40453__40454__auto__,new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null),app.comparison_matrix_table.get_flat_biomarker_result_keys);
}));

(app.comparison_matrix_table.get_flat_biomarker_result_keys = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__40451__auto__,data__40452__auto__){
var G__49022 = type__40451__auto__;
var G__49023 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__40452__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));
var fexpr__49021 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__49021.cljs$core$IFn$_invoke$arity$2 ? fexpr__49021.cljs$core$IFn$_invoke$arity$2(G__49022,G__49023) : fexpr__49021.call(null,G__49022,G__49023));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),app.comparison_matrix_table.get_flat_biomarker_result_keys));

console.log("..instrumented",new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null));

return new cljs.core.Symbol("app.comparison-matrix-table","get-flat-biomarker-result-keys","app.comparison-matrix-table/get-flat-biomarker-result-keys",1806374466,null);
})()
], true));

return app.core.mount_root();
});
goog.exportSymbol('app.core.init_BANG_', app.core.init_BANG_);

//# sourceMappingURL=app.core.js.map
