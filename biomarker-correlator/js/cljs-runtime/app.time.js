goog.provide('app.time');
app.time.Date = new cljs.core.Keyword(null,"string","string",-1989541586);
app.time.Timestamp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),(0)], null)], null);
app.time.VegaDate = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
app.time.map_to_timestamp = (function app$time$map_to_timestamp(p__60085){
var map__60086 = p__60085;
var map__60086__$1 = cljs.core.__destructure_map(map__60086);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60086__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60086__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60086__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,date));
});
app.time.parse_date = (function app$time$parse_date(date_string){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(date_string),"/");
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(split))))){
return null;
} else {
var vec__60087 = split;
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60087,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60087,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60087,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),(month | (0)),new cljs.core.Keyword(null,"date","date",-1463434462),(day | (0)),new cljs.core.Keyword(null,"year","year",335913393),((function (){var G__60090 = cljs.core.count(year);
switch (G__60090) {
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
var vec__60100 = split_date;
var date1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(0),null);
var date2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(1),null);
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
app.time.date_to_timestamp = (function app$time$date_to_timestamp(date){
return app.time.map_to_timestamp(app.time.parse_date_range(date));
});
app.time.PeriodIdTypes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"2-month","2-month",-1264344631),new cljs.core.Keyword(null,"year","year",335913393)], null);
app.time.get_period_id = (function app$time$get_period_id(timestamp,period_type){
var date_time = cljs_time.coerce.from_long(timestamp);
var year = cljs_time.core.year(date_time);
var month = cljs_time.core.month(date_time);
var day = cljs_time.core.day(date_time);
var hour = cljs_time.core.hour(date_time);
var G__60104 = period_type;
var G__60104__$1 = (((G__60104 instanceof cljs.core.Keyword))?G__60104.fqn:null);
switch (G__60104__$1) {
case "month":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');

break;
case "2-month":
return [((cljs.core.even_QMARK_(month))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((month - (1))),"+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"+",cljs.core.str.cljs$core$IFn$_invoke$arity$1((month + (1)))].join('')),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');

break;
case "year":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(year);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60104__$1)].join('')));

}
});
app.time.group_by_period = (function app$time$group_by_period(data,period_type){
return cljs.core.group_by((function (p1__60105_SHARP_){
return app.time.get_period_id(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(p1__60105_SHARP_),period_type);
}),data);
});
app.time.group_by_period(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("1/1/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("1/5/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("1/6/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp("2/6/00"),new cljs.core.Keyword(null,"a","a",-2123407586),(4)], null)], null),new cljs.core.Keyword(null,"month","month",-1960248533));

//# sourceMappingURL=app.time.js.map
