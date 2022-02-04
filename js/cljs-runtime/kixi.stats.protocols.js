goog.provide('kixi.stats.protocols');

/**
 * @interface
 */
kixi.stats.protocols.PBounded = function(){};

var kixi$stats$protocols$PBounded$minimum$dyn_42446 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.minimum[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.minimum["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PBounded.minimum",this$);
}
}
});
/**
 * Returns the minimum x
 */
kixi.stats.protocols.minimum = (function kixi$stats$protocols$minimum(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PBounded$minimum$arity$1 == null)))))){
return this$.kixi$stats$protocols$PBounded$minimum$arity$1(this$);
} else {
return kixi$stats$protocols$PBounded$minimum$dyn_42446(this$);
}
});

var kixi$stats$protocols$PBounded$maximum$dyn_42447 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.maximum[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.maximum["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PBounded.maximum",this$);
}
}
});
/**
 * Returns the maximum x
 */
kixi.stats.protocols.maximum = (function kixi$stats$protocols$maximum(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PBounded$maximum$arity$1 == null)))))){
return this$.kixi$stats$protocols$PBounded$maximum$arity$1(this$);
} else {
return kixi$stats$protocols$PBounded$maximum$dyn_42447(this$);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PContingencyTable = function(){};

var kixi$stats$protocols$PContingencyTable$cell$dyn_42449 = (function (this$,coordinates){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.cell[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,coordinates) : m__4551__auto__.call(null,this$,coordinates));
} else {
var m__4549__auto__ = (kixi.stats.protocols.cell["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,coordinates) : m__4549__auto__.call(null,this$,coordinates));
} else {
throw cljs.core.missing_protocol("PContingencyTable.cell",this$);
}
}
});
/**
 * Returns the cell identified by `coordinates`, which must contain a label for each of the table's dimensions.
 */
kixi.stats.protocols.cell = (function kixi$stats$protocols$cell(this$,coordinates){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PContingencyTable$cell$arity$2 == null)))))){
return this$.kixi$stats$protocols$PContingencyTable$cell$arity$2(this$,coordinates);
} else {
return kixi$stats$protocols$PContingencyTable$cell$dyn_42449(this$,coordinates);
}
});

var kixi$stats$protocols$PContingencyTable$grand_total$dyn_42451 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.grand_total[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.grand_total["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PContingencyTable.grand-total",this$);
}
}
});
/**
 * Returns the grand total
 */
kixi.stats.protocols.grand_total = (function kixi$stats$protocols$grand_total(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 == null)))))){
return this$.kixi$stats$protocols$PContingencyTable$grand_total$arity$1(this$);
} else {
return kixi$stats$protocols$PContingencyTable$grand_total$dyn_42451(this$);
}
});

var kixi$stats$protocols$PContingencyTable$margin_totals$dyn_42452 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.margin_totals[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.margin_totals["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PContingencyTable.margin-totals",this$);
}
}
});
/**
 * Returns the totals for all levels of all factors
 */
kixi.stats.protocols.margin_totals = (function kixi$stats$protocols$margin_totals(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 == null)))))){
return this$.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1(this$);
} else {
return kixi$stats$protocols$PContingencyTable$margin_totals$dyn_42452(this$);
}
});

var kixi$stats$protocols$PContingencyTable$size$dyn_42456 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.size[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.size["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PContingencyTable.size",this$);
}
}
});
/**
 * Returns the table extent in each dimension
 */
kixi.stats.protocols.size = (function kixi$stats$protocols$size(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PContingencyTable$size$arity$1 == null)))))){
return this$.kixi$stats$protocols$PContingencyTable$size$arity$1(this$);
} else {
return kixi$stats$protocols$PContingencyTable$size$dyn_42456(this$);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PDependent = function(){};

var kixi$stats$protocols$PDependent$measure$dyn_42457 = (function (this$,x){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.measure[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4551__auto__.call(null,this$,x));
} else {
var m__4549__auto__ = (kixi.stats.protocols.measure["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4549__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("PDependent.measure",this$);
}
}
});
/**
 * Returns the value of a dependent variable at a given x
 */
kixi.stats.protocols.measure = (function kixi$stats$protocols$measure(this$,x){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PDependent$measure$arity$2 == null)))))){
return this$.kixi$stats$protocols$PDependent$measure$arity$2(this$,x);
} else {
return kixi$stats$protocols$PDependent$measure$dyn_42457(this$,x);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PDependentWithSignificance = function(){};

var kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$dyn_42458 = (function (this$,x,alpha){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.measure_with_significance[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,alpha) : m__4551__auto__.call(null,this$,x,alpha));
} else {
var m__4549__auto__ = (kixi.stats.protocols.measure_with_significance["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,alpha) : m__4549__auto__.call(null,this$,x,alpha));
} else {
throw cljs.core.missing_protocol("PDependentWithSignificance.measure-with-significance",this$);
}
}
});
/**
 * Returns the value of a dependent variable at a given x and significance level
 */
kixi.stats.protocols.measure_with_significance = (function kixi$stats$protocols$measure_with_significance(this$,x,alpha){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 == null)))))){
return this$.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3(this$,x,alpha);
} else {
return kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$dyn_42458(this$,x,alpha);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PDiscreteRandomVariable = function(){};

var kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$dyn_42459 = (function (this$,n,rng){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.sample_frequencies[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,n,rng) : m__4551__auto__.call(null,this$,n,rng));
} else {
var m__4549__auto__ = (kixi.stats.protocols.sample_frequencies["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,n,rng) : m__4549__auto__.call(null,this$,n,rng));
} else {
throw cljs.core.missing_protocol("PDiscreteRandomVariable.sample-frequencies",this$);
}
}
});
kixi.stats.protocols.sample_frequencies = (function kixi$stats$protocols$sample_frequencies(this$,n,rng){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 == null)))))){
return this$.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3(this$,n,rng);
} else {
return kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$dyn_42459(this$,n,rng);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PTestResult = function(){};

var kixi$stats$protocols$PTestResult$p_value$dyn_42462 = (function() {
var G__42463 = null;
var G__42463__1 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.p_value[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.p_value["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PTestResult.p-value",this$);
}
}
});
var G__42463__2 = (function (this$,alternative){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.p_value[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,alternative) : m__4551__auto__.call(null,this$,alternative));
} else {
var m__4549__auto__ = (kixi.stats.protocols.p_value["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,alternative) : m__4549__auto__.call(null,this$,alternative));
} else {
throw cljs.core.missing_protocol("PTestResult.p-value",this$);
}
}
});
G__42463 = function(this$,alternative){
switch(arguments.length){
case 1:
return G__42463__1.call(this,this$);
case 2:
return G__42463__2.call(this,this$,alternative);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42463.cljs$core$IFn$_invoke$arity$1 = G__42463__1;
G__42463.cljs$core$IFn$_invoke$arity$2 = G__42463__2;
return G__42463;
})()
;
/**
 * The p-value associated with this test result
 */
kixi.stats.protocols.p_value = (function kixi$stats$protocols$p_value(var_args){
var G__42425 = arguments.length;
switch (G__42425) {
case 1:
return kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PTestResult$p_value$arity$1 == null)))))){
return this$.kixi$stats$protocols$PTestResult$p_value$arity$1(this$);
} else {
return kixi$stats$protocols$PTestResult$p_value$dyn_42462(this$);
}
}));

(kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$2 = (function (this$,alternative){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PTestResult$p_value$arity$2 == null)))))){
return this$.kixi$stats$protocols$PTestResult$p_value$arity$2(this$,alternative);
} else {
return kixi$stats$protocols$PTestResult$p_value$dyn_42462(this$,alternative);
}
}));

(kixi.stats.protocols.p_value.cljs$lang$maxFixedArity = 2);


var kixi$stats$protocols$PTestResult$significant_QMARK_$dyn_42468 = (function() {
var G__42469 = null;
var G__42469__2 = (function (this$,alpha){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.significant_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,alpha) : m__4551__auto__.call(null,this$,alpha));
} else {
var m__4549__auto__ = (kixi.stats.protocols.significant_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,alpha) : m__4549__auto__.call(null,this$,alpha));
} else {
throw cljs.core.missing_protocol("PTestResult.significant?",this$);
}
}
});
var G__42469__3 = (function (this$,alpha,alternative){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.significant_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,alpha,alternative) : m__4551__auto__.call(null,this$,alpha,alternative));
} else {
var m__4549__auto__ = (kixi.stats.protocols.significant_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,alpha,alternative) : m__4549__auto__.call(null,this$,alpha,alternative));
} else {
throw cljs.core.missing_protocol("PTestResult.significant?",this$);
}
}
});
G__42469 = function(this$,alpha,alternative){
switch(arguments.length){
case 2:
return G__42469__2.call(this,this$,alpha);
case 3:
return G__42469__3.call(this,this$,alpha,alternative);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42469.cljs$core$IFn$_invoke$arity$2 = G__42469__2;
G__42469.cljs$core$IFn$_invoke$arity$3 = G__42469__3;
return G__42469;
})()
;
/**
 * Whether the result is significant at the given alpha
 */
kixi.stats.protocols.significant_QMARK_ = (function kixi$stats$protocols$significant_QMARK_(var_args){
var G__42427 = arguments.length;
switch (G__42427) {
case 2:
return kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (this$,alpha){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2 == null)))))){
return this$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2(this$,alpha);
} else {
return kixi$stats$protocols$PTestResult$significant_QMARK_$dyn_42468(this$,alpha);
}
}));

(kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (this$,alpha,alternative){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3 == null)))))){
return this$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3(this$,alpha,alternative);
} else {
return kixi$stats$protocols$PTestResult$significant_QMARK_$dyn_42468(this$,alpha,alternative);
}
}));

(kixi.stats.protocols.significant_QMARK_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
kixi.stats.protocols.PInterval = function(){};

var kixi$stats$protocols$PInterval$lower$dyn_42473 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.lower[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.lower["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PInterval.lower",this$);
}
}
});
/**
 * Returns the lower bound
 */
kixi.stats.protocols.lower = (function kixi$stats$protocols$lower(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PInterval$lower$arity$1 == null)))))){
return this$.kixi$stats$protocols$PInterval$lower$arity$1(this$);
} else {
return kixi$stats$protocols$PInterval$lower$dyn_42473(this$);
}
});

var kixi$stats$protocols$PInterval$upper$dyn_42475 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.upper[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.upper["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PInterval.upper",this$);
}
}
});
/**
 * Returns the upper bound
 */
kixi.stats.protocols.upper = (function kixi$stats$protocols$upper(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PInterval$upper$arity$1 == null)))))){
return this$.kixi$stats$protocols$PInterval$upper$arity$1(this$);
} else {
return kixi$stats$protocols$PInterval$upper$dyn_42475(this$);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PParameterised = function(){};

var kixi$stats$protocols$PParameterised$parameters$dyn_42477 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.parameters[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (kixi.stats.protocols.parameters["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PParameterised.parameters",this$);
}
}
});
/**
 * Returns the learned parameters
 */
kixi.stats.protocols.parameters = (function kixi$stats$protocols$parameters(this$){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PParameterised$parameters$arity$1 == null)))))){
return this$.kixi$stats$protocols$PParameterised$parameters$arity$1(this$);
} else {
return kixi$stats$protocols$PParameterised$parameters$dyn_42477(this$);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PQuantile = function(){};

var kixi$stats$protocols$PQuantile$cdf$dyn_42479 = (function (this$,x){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.cdf[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4551__auto__.call(null,this$,x));
} else {
var m__4549__auto__ = (kixi.stats.protocols.cdf["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4549__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("PQuantile.cdf",this$);
}
}
});
/**
 * Returns the cumulative probability for a given x
 */
kixi.stats.protocols.cdf = (function kixi$stats$protocols$cdf(this$,x){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PQuantile$cdf$arity$2 == null)))))){
return this$.kixi$stats$protocols$PQuantile$cdf$arity$2(this$,x);
} else {
return kixi$stats$protocols$PQuantile$cdf$dyn_42479(this$,x);
}
});

var kixi$stats$protocols$PQuantile$quantile$dyn_42481 = (function (this$,p){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.quantile[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4551__auto__.call(null,this$,p));
} else {
var m__4549__auto__ = (kixi.stats.protocols.quantile["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4549__auto__.call(null,this$,p));
} else {
throw cljs.core.missing_protocol("PQuantile.quantile",this$);
}
}
});
/**
 * Returns the x for a given cumulative probability
 */
kixi.stats.protocols.quantile = (function kixi$stats$protocols$quantile(this$,p){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PQuantile$quantile$arity$2 == null)))))){
return this$.kixi$stats$protocols$PQuantile$quantile$arity$2(this$,p);
} else {
return kixi$stats$protocols$PQuantile$quantile$dyn_42481(this$,p);
}
});


/**
 * @interface
 */
kixi.stats.protocols.PRandomVariable = function(){};

var kixi$stats$protocols$PRandomVariable$sample_1$dyn_42482 = (function (this$,rng){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.sample_1[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,rng) : m__4551__auto__.call(null,this$,rng));
} else {
var m__4549__auto__ = (kixi.stats.protocols.sample_1["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,rng) : m__4549__auto__.call(null,this$,rng));
} else {
throw cljs.core.missing_protocol("PRandomVariable.sample-1",this$);
}
}
});
kixi.stats.protocols.sample_1 = (function kixi$stats$protocols$sample_1(this$,rng){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 == null)))))){
return this$.kixi$stats$protocols$PRandomVariable$sample_1$arity$2(this$,rng);
} else {
return kixi$stats$protocols$PRandomVariable$sample_1$dyn_42482(this$,rng);
}
});

var kixi$stats$protocols$PRandomVariable$sample_n$dyn_42483 = (function (this$,n,rng){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (kixi.stats.protocols.sample_n[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,n,rng) : m__4551__auto__.call(null,this$,n,rng));
} else {
var m__4549__auto__ = (kixi.stats.protocols.sample_n["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,n,rng) : m__4549__auto__.call(null,this$,n,rng));
} else {
throw cljs.core.missing_protocol("PRandomVariable.sample-n",this$);
}
}
});
kixi.stats.protocols.sample_n = (function kixi$stats$protocols$sample_n(this$,n,rng){
if((((!((this$ == null)))) && ((!((this$.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 == null)))))){
return this$.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(this$,n,rng);
} else {
return kixi$stats$protocols$PRandomVariable$sample_n$dyn_42483(this$,n,rng);
}
});


//# sourceMappingURL=kixi.stats.protocols.js.map
