goog.provide('app.time');
app.time.parse_date = (function app$time$parse_date(date_string){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(date_string),"/");
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(split))))){
return null;
} else {
var vec__53310 = split;
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53310,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53310,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53310,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),(month | (0)),new cljs.core.Keyword(null,"date","date",-1463434462),(day | (0)),new cljs.core.Keyword(null,"year","year",335913393),((function (){var G__53313 = cljs.core.count(year);
switch (G__53313) {
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
app.time.map_to_timestamp = (function app$time$map_to_timestamp(p__53314){
var map__53315 = p__53314;
var map__53315__$1 = cljs.core.__destructure_map(map__53315);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.coerce.to_long(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,date));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.time","date","app.time/date",1385695568),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
app.time.date = new cljs.core.Keyword(null,"string","string",-1989541586);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.time","timestamp","app.time/timestamp",1639146865),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol("cljs.core","pos?","cljs.core/pos?",-652182749,null)),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol("cljs.core","pos?","cljs.core/pos?",-652182749,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.pos_QMARK_], null),null));
app.time.timestamp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),(0)], null)], null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623),cljs.core.list(new cljs.core.Symbol("spec-tools.data-spec","spec","spec-tools.data-spec/spec",-1065546713,null),new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)], null)),spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"year","year",335913393),cljs.core.int_QMARK_], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.time","parse-date-range","app.time/parse-date-range",876179030,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.Keyword("app.time","date","app.time/date",1385695568)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.Keyword("app.time","date","app.time/date",1385695568)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-range","date-range",63083517)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.time","date","app.time/date",1385695568)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.Keyword("app.time","date","app.time/date",1385695568)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623),new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623),null,null),new cljs.core.Keyword("app.time","vega-date","app.time/vega-date",392585623),null,null,null));

/**
 * Converts a range like '1/1/2021 to 2/1/2021' into a single date. Will return
 *   the first date unless it is unparsable, in which case will return the second.
 *   If no 'to' is in the string, will just return the only date (if it is one).
 * @type {function(*): *}
 */
app.time.parse_date_range = (function app$time$parse_date_range(date_range){
var split_date = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_range," to ");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(split_date))){
return app.time.parse_date(cljs.core.first(split_date));
} else {
var vec__53327 = split_date;
var date1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327,(0),null);
var date2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327,(1),null);
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
