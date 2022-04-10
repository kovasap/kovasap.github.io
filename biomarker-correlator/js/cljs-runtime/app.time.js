goog.provide('app.time');
app.time.parse_date = (function app$time$parse_date(date_string){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(date_string),"/");
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(split))))){
return null;
} else {
var vec__81639 = split;
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81639,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81639,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81639,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),(month | (0)),new cljs.core.Keyword(null,"date","date",-1463434462),(day | (0)),new cljs.core.Keyword(null,"year","year",335913393),((function (){var G__81642 = cljs.core.count(year);
switch (G__81642) {
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
app.time.map_to_timestamp = (function app$time$map_to_timestamp(p__81643){
var map__81644 = p__81643;
var map__81644__$1 = cljs.core.__destructure_map(map__81644);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81644__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81644__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81644__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,date));
});
app.time.Date = new cljs.core.Keyword(null,"string","string",-1989541586);
app.time.Timestamp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),(0)], null)], null);
app.time.VegaDate = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
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
var vec__81646 = split_date;
var date1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81646,(0),null);
var date2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81646,(1),null);
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

//# sourceMappingURL=app.time.js.map
