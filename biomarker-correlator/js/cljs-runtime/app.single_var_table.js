goog.provide('app.single_var_table');
app.single_var_table.OneToManyCorrelation = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168),new cljs.core.Keyword(null,"double","double",884886883)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.CorrelationResults], null)], null)], null)], null)], null);
app.single_var_table.aggregate_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acm-score","acm-score",-1488232861),null,new cljs.core.Keyword(null,"score","score",-1963588780),null,new cljs.core.Keyword(null,"average","average",-492356168),null], null), null);
/**
 * Filter row maps from the input that show statistically insignificant
 *   correlations
 */
app.single_var_table.filter_insignificant = (function app$single_var_table$filter_insignificant(rows){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__75571_SHARP_){
return (new cljs.core.Keyword(null,"p-value","p-value",1434023819).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__75571_SHARP_)) < app.stats.p_value_cutoff);
}),rows);
});
/**
 * Sums up all postive correlations and all negatives correlations, then takes
 *   the difference.
 */
app.single_var_table.calc_counted_score = (function app$single_var_table$calc_counted_score(correlations){
if((correlations == null)){
return (0);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75572_SHARP_){
if((new cljs.core.Keyword(null,"correlation","correlation",-975773207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__75572_SHARP_)) < (0))){
return (-1);
} else {
return (1);
}
}),correlations));
}
});
app.single_var_table.get_significant_correlations = (function app$single_var_table$get_significant_correlations(data,one_var_type,one_var,many_var_type,one_var_raw_data){
var one_var_significant_correlations = (function (){var G__75573 = cljs.core.group_by(one_var_type,app.single_var_table.filter_insignificant(data));
return (one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(G__75573) : one_var.call(null,G__75573));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"one-var","one-var",65273568),one_var,new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),app.single_var_table.calc_counted_score(one_var_significant_correlations),new cljs.core.Keyword(null,"average","average",-492356168),app.math.round(app.math.average(one_var_raw_data))], null),new cljs.core.Keyword(null,"correlations","correlations",517036229),(function (){var iter__4652__auto__ = (function app$single_var_table$get_significant_correlations_$_iter__75577(s__75578){
return (new cljs.core.LazySeq(null,(function (){
var s__75578__$1 = s__75578;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75578__$1);
if(temp__5753__auto__){
var s__75578__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75578__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75578__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75580 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75579 = (0);
while(true){
if((i__75579 < size__4651__auto__)){
var correlation = cljs.core._nth(c__4650__auto__,i__75579);
cljs.core.chunk_append(b__75580,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var_type.cljs$core$IFn$_invoke$arity$1 ? many_var_type.cljs$core$IFn$_invoke$arity$1(correlation) : many_var_type.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null));

var G__75677 = (i__75579 + (1));
i__75579 = G__75677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75580),app$single_var_table$get_significant_correlations_$_iter__75577(cljs.core.chunk_rest(s__75578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75580),null);
}
} else {
var correlation = cljs.core.first(s__75578__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var_type.cljs$core$IFn$_invoke$arity$1 ? many_var_type.cljs$core$IFn$_invoke$arity$1(correlation) : many_var_type.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null),app$single_var_table$get_significant_correlations_$_iter__75577(cljs.core.rest(s__75578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(one_var_significant_correlations);
})()], null);
});
/**
 * Filters NaNs while getting the data.
 */
app.single_var_table.get_csv_values = (function app$single_var_table$get_csv_values(csv_data,column_name){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function app$single_var_table$get_csv_values_$_iter__75587(s__75588){
return (new cljs.core.LazySeq(null,(function (){
var s__75588__$1 = s__75588;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75588__$1);
if(temp__5753__auto__){
var s__75588__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75588__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75588__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75590 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75589 = (0);
while(true){
if((i__75589 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__75589);
var value = (column_name.cljs$core$IFn$_invoke$arity$1 ? column_name.cljs$core$IFn$_invoke$arity$1(row) : column_name.call(null,row));
if((((!((value == null)))) && (cljs.core.not(isNaN(value))))){
cljs.core.chunk_append(b__75590,value);

var G__75681 = (i__75589 + (1));
i__75589 = G__75681;
continue;
} else {
var G__75682 = (i__75589 + (1));
i__75589 = G__75682;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75590),app$single_var_table$get_csv_values_$_iter__75587(cljs.core.chunk_rest(s__75588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75590),null);
}
} else {
var row = cljs.core.first(s__75588__$2);
var value = (column_name.cljs$core$IFn$_invoke$arity$1 ? column_name.cljs$core$IFn$_invoke$arity$1(row) : column_name.call(null,row));
if((((!((value == null)))) && (cljs.core.not(isNaN(value))))){
return cljs.core.cons(value,app$single_var_table$get_csv_values_$_iter__75587(cljs.core.rest(s__75588__$2)));
} else {
var G__75684 = cljs.core.rest(s__75588__$2);
s__75588__$1 = G__75684;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(csv_data);
})());
});
app.single_var_table.make_all_correlations = (function app$single_var_table$make_all_correlations(correlations,csv_data,one_var_type,many_var_type){
var unique_one_vars = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75591_SHARP_){
return (one_var_type.cljs$core$IFn$_invoke$arity$1 ? one_var_type.cljs$core$IFn$_invoke$arity$1(p1__75591_SHARP_) : one_var_type.call(null,p1__75591_SHARP_));
}),correlations));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$single_var_table$make_all_correlations_$_iter__75595(s__75596){
return (new cljs.core.LazySeq(null,(function (){
var s__75596__$1 = s__75596;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75596__$1);
if(temp__5753__auto__){
var s__75596__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75596__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75596__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75598 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75597 = (0);
while(true){
if((i__75597 < size__4651__auto__)){
var one_var = cljs.core._nth(c__4650__auto__,i__75597);
cljs.core.chunk_append(b__75598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [one_var,app.single_var_table.get_significant_correlations(correlations,one_var_type,one_var,many_var_type,app.single_var_table.get_csv_values(csv_data,one_var))], null));

var G__75693 = (i__75597 + (1));
i__75597 = G__75693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75598),app$single_var_table$make_all_correlations_$_iter__75595(cljs.core.chunk_rest(s__75596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75598),null);
}
} else {
var one_var = cljs.core.first(s__75596__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [one_var,app.single_var_table.get_significant_correlations(correlations,one_var_type,one_var,many_var_type,app.single_var_table.get_csv_values(csv_data,one_var))], null),app$single_var_table$make_all_correlations_$_iter__75595(cljs.core.rest(s__75596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(unique_one_vars);
})());
});
app.single_var_table.table_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlation","correlation",-975773207),new cljs.core.Keyword(null,"rounded-p-value","rounded-p-value",1372746415),new cljs.core.Keyword(null,"datapoints","datapoints",-1250577876)], null);
app.single_var_table.get_one_var_timeseries_data = (function app$single_var_table$get_one_var_timeseries_data(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75600_SHARP_){
return cljs.core.select_keys(p1__75600_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null));
}),new cljs.core.Keyword(null,"raw-data","raw-data",617791828).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data)))));
});
/**
 * Creates a table like this:
 *         Input
 *      Aggregate 1
 *      Aggregate 2
 *   Biomarker | r | p | n
 *   data      | 0 | 0 | 0
 *   ...
 *   
 */
app.single_var_table.make_hiccup = (function app$single_var_table$make_hiccup(data){
var one_var = new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),one_var], null),one_var], null),", Counted score of ",new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289).cljs$core$IFn$_invoke$arity$1(data)),", Average value ",new cljs.core.Keyword(null,"average","average",-492356168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289).cljs$core$IFn$_invoke$arity$1(data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),((cljs.core.contains_QMARK_(app.biomarker_data.data,one_var))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),app.biomarker_data.make_acm_plot(app.single_var_table.get_one_var_timeseries_data(data),(one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(app.biomarker_data.data) : one_var.call(null,app.biomarker_data.data))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1((one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(app.biomarker_data.data) : one_var.call(null,app.biomarker_data.data)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Source: ",new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1((one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(app.biomarker_data.data) : one_var.call(null,app.biomarker_data.data)))], null)], null):"No data found for this metric.")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Correlate"], null),(function (){var iter__4652__auto__ = (function app$single_var_table$make_hiccup_$_iter__75611(s__75612){
return (new cljs.core.LazySeq(null,(function (){
var s__75612__$1 = s__75612;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75612__$1);
if(temp__5753__auto__){
var s__75612__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75612__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75612__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75614 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75613 = (0);
while(true){
if((i__75613 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__75613);
cljs.core.chunk_append(b__75614,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null));

var G__75702 = (i__75613 + (1));
i__75613 = G__75702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75614),app$single_var_table$make_hiccup_$_iter__75611(cljs.core.chunk_rest(s__75612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75614),null);
}
} else {
var k = cljs.core.first(s__75612__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null),app$single_var_table$make_hiccup_$_iter__75611(cljs.core.rest(s__75612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys((function (p1__75603_SHARP_){
return cljs.core.select_keys(p1__75603_SHARP_,app.single_var_table.table_keys);
})(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data))))));
})()], null),(function (){var iter__4652__auto__ = (function app$single_var_table$make_hiccup_$_iter__75619(s__75620){
return (new cljs.core.LazySeq(null,(function (){
var s__75620__$1 = s__75620;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75620__$1);
if(temp__5753__auto__){
var s__75620__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75620__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75620__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75622 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75621 = (0);
while(true){
if((i__75621 < size__4651__auto__)){
var correlations = cljs.core._nth(c__4650__auto__,i__75621);
cljs.core.chunk_append(b__75622,(function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"scatterplot","scatterplot",2135008985).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (i__75621,mvar,correlations,c__4650__auto__,size__4651__auto__,b__75622,s__75620__$2,temp__5753__auto__,one_var){
return (function app$single_var_table$make_hiccup_$_iter__75619_$_iter__75623(s__75624){
return (new cljs.core.LazySeq(null,((function (i__75621,mvar,correlations,c__4650__auto__,size__4651__auto__,b__75622,s__75620__$2,temp__5753__auto__,one_var){
return (function (){
var s__75624__$1 = s__75624;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__75624__$1);
if(temp__5753__auto____$1){
var s__75624__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75624__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__75624__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__75626 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__75625 = (0);
while(true){
if((i__75625 < size__4651__auto____$1)){
var vec__75632 = cljs.core._nth(c__4650__auto____$1,i__75625);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75632,(1),null);
cljs.core.chunk_append(b__75626,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__75713 = (i__75625 + (1));
i__75625 = G__75713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75626),app$single_var_table$make_hiccup_$_iter__75619_$_iter__75623(cljs.core.chunk_rest(s__75624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75626),null);
}
} else {
var vec__75635 = cljs.core.first(s__75624__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75635,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75635,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$single_var_table$make_hiccup_$_iter__75619_$_iter__75623(cljs.core.rest(s__75624__$2)));
}
} else {
return null;
}
break;
}
});})(i__75621,mvar,correlations,c__4650__auto__,size__4651__auto__,b__75622,s__75620__$2,temp__5753__auto__,one_var))
,null,null));
});})(i__75621,mvar,correlations,c__4650__auto__,size__4651__auto__,b__75622,s__75620__$2,temp__5753__auto__,one_var))
;
return iter__4652__auto__(cljs.core.select_keys(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),app.single_var_table.table_keys));
})()], null);
})());

var G__75719 = (i__75621 + (1));
i__75621 = G__75719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75622),app$single_var_table$make_hiccup_$_iter__75619(cljs.core.chunk_rest(s__75620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75622),null);
}
} else {
var correlations = cljs.core.first(s__75620__$2);
return cljs.core.cons((function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"scatterplot","scatterplot",2135008985).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (mvar,correlations,s__75620__$2,temp__5753__auto__,one_var){
return (function app$single_var_table$make_hiccup_$_iter__75619_$_iter__75639(s__75640){
return (new cljs.core.LazySeq(null,(function (){
var s__75640__$1 = s__75640;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__75640__$1);
if(temp__5753__auto____$1){
var s__75640__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75640__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75640__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75642 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75641 = (0);
while(true){
if((i__75641 < size__4651__auto__)){
var vec__75651 = cljs.core._nth(c__4650__auto__,i__75641);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75651,(1),null);
cljs.core.chunk_append(b__75642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__75728 = (i__75641 + (1));
i__75641 = G__75728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75642),app$single_var_table$make_hiccup_$_iter__75619_$_iter__75639(cljs.core.chunk_rest(s__75640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75642),null);
}
} else {
var vec__75655 = cljs.core.first(s__75640__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75655,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$single_var_table$make_hiccup_$_iter__75619_$_iter__75639(cljs.core.rest(s__75640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(mvar,correlations,s__75620__$2,temp__5753__auto__,one_var))
;
return iter__4652__auto__(cljs.core.select_keys(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),app.single_var_table.table_keys));
})()], null);
})(),app$single_var_table$make_hiccup_$_iter__75619(cljs.core.rest(s__75620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__75604_SHARP_){
return new cljs.core.Keyword(null,"correlation","correlation",-975773207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__75604_SHARP_));
}),new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data)));
})()], null)], null)], null);
});

//# sourceMappingURL=app.single_var_table.js.map
