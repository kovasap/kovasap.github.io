goog.provide('app.time');
app.time.Date = new cljs.core.Keyword(null,"string","string",-1989541586);
app.time.Timestamp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),(0)], null)], null);
app.time.VegaDate = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
app.time.map_to_timestamp = (function app$time$map_to_timestamp(p__49026){
var map__49027 = p__49026;
var map__49027__$1 = cljs.core.__destructure_map(map__49027);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,date));
});
app.time.parse_date = (function app$time$parse_date(date_string){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(date_string),"/");
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(split))))){
return null;
} else {
var vec__49028 = split;
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49028,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49028,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49028,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),(month | (0)),new cljs.core.Keyword(null,"date","date",-1463434462),(day | (0)),new cljs.core.Keyword(null,"year","year",335913393),((function (){var G__49031 = cljs.core.count(year);
switch (G__49031) {
case (2):
return ["20",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');

break;
case (4):
return year;

break;
default:
return null;

}
})() | (0))], null);
}
});
/**
 * Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return
 *   the first date unless it is unparsable, in which case will return the second.
 *   If no 'to' is in the string, will just return the only date (if it is one).
 */
app.time.parse_date_range = (function app$time$parse_date_range(date_range){
var split_date = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_range," to ");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(split_date))){
return app.time.parse_date(cljs.core.first(split_date));
} else {
var vec__49032 = split_date;
var date1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49032,(0),null);
var date2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49032,(1),null);
var parsed1 = app.time.parse_date(date1);
var parsed2 = app.time.parse_date(date2);
if((parsed1 == null)){
return parsed2;
} else {
return parsed1;
}

}
});
clojure.string.split.cljs$core$IFn$_invoke$arity$2("4/4/4"," to ");
app.time.timestamp_to_full_string = (function app$time$timestamp_to_full_string(timestamp){
return cljs_time.coerce.to_string(cljs_time.coerce.from_long(timestamp));
});
app.time.timestamp_to_date_string = (function app$time$timestamp_to_date_string(timestamp){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs_time.coerce.to_string(cljs_time.coerce.from_long(timestamp)),"T"));
});
app.time.date_to_timestamp = (function app$time$date_to_timestamp(date){
return app.time.map_to_timestamp(app.time.parse_date_range(date));
});
app.time.PeriodIdTypes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"2-month","2-month",-1264344631),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"none","none",1333468478)], null);
/**
 * Start and end timestamps for a range of time.
 */
app.time.PeriodRange = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),app.time.Timestamp,app.time.Timestamp], null);
/**
 * Returns the period range in which the input timestamp falls.
 */
app.time.get_period_range = (function app$time$get_period_range(timestamp,period_type){
var date_time = cljs_time.coerce.from_long(timestamp);
var year = cljs_time.core.year(date_time);
var month = cljs_time.core.month(date_time);
var day = cljs_time.core.day(date_time);
var hour = cljs_time.core.hour(date_time);
var G__49035 = period_type;
var G__49035__$1 = (((G__49035 instanceof cljs.core.Keyword))?G__49035.fqn:null);
switch (G__49035__$1) {
case "none":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timestamp,timestamp], null);

break;
case "month":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1))),cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,(month + (1)),(1)))], null);

break;
case "2-month":
if(cljs.core.even_QMARK_(month)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,(month - (1)),(1))),cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,(month + (1)),(1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1))),cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,((2) + month),(1)))], null);
}

break;
case "year":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,(1),(1))),cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((year + (1)),(1),(1)))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49035__$1)].join('')));

}
});
app.time.group_by_period = (function app$time$group_by_period(data,period_type){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GROUP BY PERIOD"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([period_type], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49036_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.coerce.from_long,app.time.get_period_range(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(p1__49036_SHARP_),period_type));
}),data)], 0));

return cljs.core.group_by((function (p1__49037_SHARP_){
return app.time.get_period_range(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(p1__49037_SHARP_),period_type);
}),data);
});
app.time.group_by_period(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("1/1/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("1/5/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("1/6/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("2/6/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(4)], null)], null),new cljs.core.Keyword(null,"none","none",1333468478));

//# sourceMappingURL=app.time.js.map
