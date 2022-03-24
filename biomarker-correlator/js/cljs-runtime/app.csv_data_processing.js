goog.provide('app.csv_data_processing');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.csv-data-processing","dated-row","app.csv-data-processing/dated-row",-1658149389),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52444){
return cljs.core.map_QMARK_(G__52444);
}),(function (G__52444){
return cljs.core.contains_QMARK_(G__52444,new cljs.core.Keyword(null,"date","date",-1463434462));
})], null),(function (G__52444){
return ((cljs.core.map_QMARK_(G__52444)) && (cljs.core.contains_QMARK_(G__52444,new cljs.core.Keyword(null,"date","date",-1463434462))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"date","date",-1463434462)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-row","app.csv-data-processing/dated-row",-1658149389)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","dated-row","app.csv-data-processing/dated-row",-1658149389),new cljs.core.Keyword("app.csv-data-processing","dated-row","app.csv-data-processing/dated-row",-1658149389),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52445){
return cljs.core.coll_QMARK_(G__52445);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-row","app.csv-data-processing/dated-row",-1658149389))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.csv-data-processing","processed-row","app.csv-data-processing/processed-row",-291491147),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568),new cljs.core.Keyword("app.time","timestamp","app.time/timestamp",1639146865)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568),new cljs.core.Keyword("app.time","timestamp","app.time/timestamp",1639146865)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52446){
return cljs.core.map_QMARK_(G__52446);
}),(function (G__52446){
return cljs.core.contains_QMARK_(G__52446,new cljs.core.Keyword(null,"date","date",-1463434462));
}),(function (G__52446){
return cljs.core.contains_QMARK_(G__52446,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
})], null),(function (G__52446){
return ((cljs.core.map_QMARK_(G__52446)) && (((cljs.core.contains_QMARK_(G__52446,new cljs.core.Keyword(null,"date","date",-1463434462))) && (cljs.core.contains_QMARK_(G__52446,new cljs.core.Keyword(null,"timestamp","timestamp",579478971))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568),new cljs.core.Keyword("app.time","timestamp","app.time/timestamp",1639146865)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"date","date",-1463434462))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.csv-data-processing","processed-rows","app.csv-data-processing/processed-rows",-828469345),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","processed-row","app.csv-data-processing/processed-row",-291491147)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","processed-row","app.csv-data-processing/processed-row",-291491147),new cljs.core.Keyword("app.csv-data-processing","processed-row","app.csv-data-processing/processed-row",-291491147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52447){
return cljs.core.coll_QMARK_(G__52447);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","processed-row","app.csv-data-processing/processed-row",-291491147))], null),null));
app.csv_data_processing.DatedRows = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),app.time.Date], null)], null)], null);
app.csv_data_processing.ProcessedRows = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),app.time.Date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null)], null);
app.csv_data_processing.get_rows_by_dates = (function app$csv_data_processing$get_rows_by_dates(rows){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(row),row], null);
}),rows));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.csv-data-processing","merge-rows-using-dates","app.csv-data-processing/merge-rows-using-dates",-275125181,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52449){
return cljs.core.coll_QMARK_(G__52449);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),null,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),null,null,null));

/**
 * Merges N sequences of row maps (e.g. from different spreadsheets) using
 *   the :date field as the joining attribute.
 * @type {function(!cljs.core.ICollection): *}
 */
app.csv_data_processing.merge_rows_using_dates = (function app$csv_data_processing$merge_rows_using_dates(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52494 = arguments.length;
var i__4865__auto___52495 = (0);
while(true){
if((i__4865__auto___52495 < len__4864__auto___52494)){
args__4870__auto__.push((arguments[i__4865__auto___52495]));

var G__52497 = (i__4865__auto___52495 + (1));
i__4865__auto___52495 = G__52497;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.merge_rows_using_dates.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.merge_rows_using_dates.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
return cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function (row1,row2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row1,row2], 0));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.csv_data_processing.get_rows_by_dates,sets_of_rows)));
}));

(app.csv_data_processing.merge_rows_using_dates.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.csv_data_processing.merge_rows_using_dates.cljs$lang$applyTo = (function (seq52450){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52450));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.csv-data-processing","add-timestamps","app.csv-data-processing/add-timestamps",-88588026,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),null,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),null,null,null));

/**
 * @type {function(*): *}
 */
app.csv_data_processing.add_timestamps = (function app$csv_data_processing$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52452_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52452_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.map_to_timestamp(app.time.parse_date_range(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__52452_SHARP_))));
}),data);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.csv-data-processing","floatify-data","app.csv-data-processing/floatify-data",-399226101,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),null,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),null,null,null));

/**
 * @type {function(*): *}
 */
app.csv_data_processing.floatify_data = (function app$csv_data_processing$floatify_data(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52456_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52458){
var vec__52459 = p__52458;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null);
}),p1__52456_SHARP_));
}),data);
});
app.csv_data_processing.floatify_data(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null)], null));
app.csv_data_processing.get_all_data_validation_string = (function app$csv_data_processing$get_all_data_validation_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52507 = arguments.length;
var i__4865__auto___52508 = (0);
while(true){
if((i__4865__auto___52508 < len__4864__auto___52507)){
args__4870__auto__.push((arguments[i__4865__auto___52508]));

var G__52509 = (i__4865__auto___52508 + (1));
i__4865__auto___52508 = G__52509;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
var headers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52462_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),p1__52462_SHARP_);
}),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52463_SHARP_){
return cljs.core.keys(cljs.core.first(p1__52463_SHARP_));
}),sets_of_rows)));
var duplicate_headers = (function (){var iter__4652__auto__ = (function app$csv_data_processing$iter__52466(s__52467){
return (new cljs.core.LazySeq(null,(function (){
var s__52467__$1 = s__52467;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52467__$1);
if(temp__5753__auto__){
var s__52467__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52467__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52467__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52469 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52468 = (0);
while(true){
if((i__52468 < size__4651__auto__)){
var vec__52471 = cljs.core._nth(c__4650__auto__,i__52468);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52471,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52471,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__52469,id);

var G__52516 = (i__52468 + (1));
i__52468 = G__52516;
continue;
} else {
var G__52517 = (i__52468 + (1));
i__52468 = G__52517;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52469),app$csv_data_processing$iter__52466(cljs.core.chunk_rest(s__52467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52469),null);
}
} else {
var vec__52474 = cljs.core.first(s__52467__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52474,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52474,(1),null);
if((freq > (1))){
return cljs.core.cons(id,app$csv_data_processing$iter__52466(cljs.core.rest(s__52467__$2)));
} else {
var G__52518 = cljs.core.rest(s__52467__$2);
s__52467__$1 = G__52518;
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
return iter__4652__auto__(cljs.core.frequencies(headers));
})();
if(cljs.core.seq(duplicate_headers)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Some inputs headers were duplicated: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",duplicate_headers)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"Data validated successfully"], null);
}
}));

(app.csv_data_processing.get_all_data_validation_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.csv_data_processing.get_all_data_validation_string.cljs$lang$applyTo = (function (seq52464){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52464));
}));

app.csv_data_processing.get_validation_string = (function app$csv_data_processing$get_validation_string(rows){
var all_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),rows);
var unique_dates = cljs.core.set(all_dates);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(all_dates),cljs.core.count(unique_dates))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Repeated dates found in input!"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"Data validated successfully"], null);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.csv-data-processing","process-csv-data","app.csv-data-processing/process-csv-data",-281743776,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.csv-data-processing","processed-rows","app.csv-data-processing/processed-rows",-828469345)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52481){
return cljs.core.coll_QMARK_(G__52481);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sets-of-rows","sets-of-rows",-1307244051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.csv-data-processing","dated-rows","app.csv-data-processing/dated-rows",1832526570))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.csv-data-processing","processed-rows","app.csv-data-processing/processed-rows",-828469345),new cljs.core.Keyword("app.csv-data-processing","processed-rows","app.csv-data-processing/processed-rows",-828469345),null,null),new cljs.core.Keyword("app.csv-data-processing","processed-rows","app.csv-data-processing/processed-rows",-828469345),null,null,null));

/**
 * @type {function(!cljs.core.ICollection): *}
 */
app.csv_data_processing.process_csv_data = (function app$csv_data_processing$process_csv_data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52520 = arguments.length;
var i__4865__auto___52521 = (0);
while(true){
if((i__4865__auto___52521 < len__4864__auto___52520)){
args__4870__auto__.push((arguments[i__4865__auto___52521]));

var G__52522 = (i__4865__auto___52521 + (1));
i__4865__auto___52521 = G__52522;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
return app.csv_data_processing.floatify_data(app.csv_data_processing.add_timestamps(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.csv_data_processing.merge_rows_using_dates,sets_of_rows)));
}));

(app.csv_data_processing.process_csv_data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.csv_data_processing.process_csv_data.cljs$lang$applyTo = (function (seq52483){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52483));
}));

app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null)], null)], 0));

//# sourceMappingURL=app.csv_data_processing.js.map
