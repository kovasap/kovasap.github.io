goog.provide('clojure.test.check.results');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

var clojure$test$check$results$Result$pass_QMARK_$dyn_37560 = (function (result){
var x__4550__auto__ = (((result == null))?null:result);
var m__4551__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4551__auto__.call(null,result));
} else {
var m__4549__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4549__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
});
/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
return clojure$test$check$results$Result$pass_QMARK_$dyn_37560(result);
}
});

var clojure$test$check$results$Result$result_data$dyn_37564 = (function (result){
var x__4550__auto__ = (((result == null))?null:result);
var m__4551__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4551__auto__.call(null,result));
} else {
var m__4549__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4549__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
});
/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
return clojure$test$check$results$Result$result_data$dyn_37564(result);
}
});

(clojure.test.check.results.Result["_"] = true);

(clojure.test.check.results.pass_QMARK_["_"] = (function (this$){
return cljs.core.boolean$(this$);
}));

(clojure.test.check.results.result_data["_"] = (function (this$){
return null;
}));

(clojure.test.check.results.Result["null"] = true);

(clojure.test.check.results.pass_QMARK_["null"] = (function (this$){
return false;
}));

(clojure.test.check.results.result_data["null"] = (function (this$){
return null;
}));

//# sourceMappingURL=clojure.test.check.results.js.map
