goog.provide('app.utils');
app.utils.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"], null);
app.utils.parse_date = (function app$utils$parse_date(date_string){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(date_string),"/");
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(split))))){
return null;
} else {
var vec__45131 = split;
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),(month | (0)),new cljs.core.Keyword(null,"date","date",-1463434462),(day | (0)),new cljs.core.Keyword(null,"year","year",335913393),((function (){var G__45136 = cljs.core.count(year);
switch (G__45136) {
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
app.utils.map_to_timestamp = (function app$utils$map_to_timestamp(p__45147){
var map__45148 = p__45147;
var map__45148__$1 = cljs.core.__destructure_map(map__45148);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,date));
});
/**
 * Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return
 *   the first date unless it is unparsable, in which case will return the second
 */
app.utils.parse_date_range = (function app$utils$parse_date_range(date_range){
var vec__45149 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_range," to ");
var date1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(0),null);
var date2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(1),null);
var parsed1 = app.utils.parse_date(date1);
var parsed2 = app.utils.parse_date(date2);
if((parsed1 == null)){
return parsed2;
} else {
return parsed1;
}
});

//# sourceMappingURL=app.utils.js.map
