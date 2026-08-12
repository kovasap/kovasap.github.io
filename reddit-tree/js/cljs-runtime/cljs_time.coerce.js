goog.provide('cljs_time.coerce');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_41353 = (function (obj){
var x__4509__auto__ = (((obj == null))?null:obj);
var m__4510__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4510__auto__.call(null,obj));
} else {
var m__4508__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4508__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_41353(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__41270 = millis;
if((G__41270 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__41270) : goog.date.UtcDateTime.fromTimestamp.call(null,G__41270));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4611__auto__ = (function cljs_time$coerce$from_string_$_iter__41278(s__41279){
return (new cljs.core.LazySeq(null,(function (){
var s__41279__$1 = s__41279;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41279__$1);
if(temp__5753__auto__){
var s__41279__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41279__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41279__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41281 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41280 = (0);
while(true){
if((i__41280 < size__4610__auto__)){
var f = cljs.core._nth(c__4609__auto__,i__41280);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e41282){if((e41282 instanceof Error)){
var _ = e41282;
return null;
} else {
throw e41282;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__41281,d);

var G__41365 = (i__41280 + (1));
i__41280 = G__41365;
continue;
} else {
var G__41366 = (i__41280 + (1));
i__41280 = G__41366;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41281),cljs_time$coerce$from_string_$_iter__41278(cljs.core.chunk_rest(s__41279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41281),null);
}
} else {
var f = cljs.core.first(s__41279__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e41286){if((e41286 instanceof Error)){
var _ = e41286;
return null;
} else {
throw e41286;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__41278(cljs.core.rest(s__41279__$2)));
} else {
var G__41367 = cljs.core.rest(s__41279__$2);
s__41279__$1 = G__41367;
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
return iter__4611__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__41302 = date;
var G__41302__$1 = (((G__41302 == null))?null:G__41302.getTime());
if((G__41302__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__41302__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__41306 = obj;
var G__41306__$1 = (((G__41306 == null))?null:cljs_time.coerce.to_date_time(G__41306));
if((G__41306__$1 == null)){
return null;
} else {
return G__41306__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4210__auto__ = millis;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4210__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__41313 = obj;
var G__41313__$1 = (((G__41313 == null))?null:cljs_time.coerce.to_date_time(G__41313));
var G__41313__$2 = (((G__41313__$1 == null))?null:G__41313__$1.getTime());
if((G__41313__$2 == null)){
return null;
} else {
return (new Date(G__41313__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__41316 = obj;
var G__41316__$1 = (((G__41316 == null))?null:cljs_time.coerce.to_date_time(G__41316));
if((G__41316__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__41316__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var dt = temp__5751__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var dt = temp__5751__auto__;
var G__41320 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__41320.setHours(dt.getHours());

G__41320.setMinutes(dt.getMinutes());

G__41320.setSeconds(dt.getSeconds());

G__41320.setMilliseconds(dt.getMilliseconds());

return G__41320;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

goog.object.set(cljs_time.coerce.to_date_time,"null",(function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

goog.object.set(cljs_time.coerce.to_date_time,"number",(function (long$){
return cljs_time.coerce.from_long(long$);
}));

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

goog.object.set(cljs_time.coerce.to_date_time,"string",(function (string){
return cljs_time.coerce.from_string(string);
}));

//# sourceMappingURL=cljs_time.coerce.js.map
