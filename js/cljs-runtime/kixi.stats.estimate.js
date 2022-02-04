goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__42970){
var map__42971 = p__42970;
var map__42971__$1 = cljs.core.__destructure_map(map__42971);
var sum_squares = map__42971__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42971__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42971__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42971__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42971__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate42972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate42972 = (function (y_bar,p__42970,offset,ss_xy,x_bar,map__42971,sum_squares,slope,ss_x,meta42973){
this.y_bar = y_bar;
this.p__42970 = p__42970;
this.offset = offset;
this.ss_xy = ss_xy;
this.x_bar = x_bar;
this.map__42971 = map__42971;
this.sum_squares = sum_squares;
this.slope = slope;
this.ss_x = ss_x;
this.meta42973 = meta42973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate42972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42974,meta42973__$1){
var self__ = this;
var _42974__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate42972(self__.y_bar,self__.p__42970,self__.offset,self__.ss_xy,self__.x_bar,self__.map__42971,self__.sum_squares,self__.slope,self__.ss_x,meta42973__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate42972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42974){
var self__ = this;
var _42974__$1 = this;
return self__.meta42973;
}));

(kixi.stats.estimate.t_kixi$stats$estimate42972.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate42972.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate42972.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate42972.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"p__42970","p__42970",-950780306,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"map__42971","map__42971",106576091,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"meta42973","meta42973",-2123910128,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42972.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate42972.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate42972");

(kixi.stats.estimate.t_kixi$stats$estimate42972.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate42972");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate42972.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate42972 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate42972(y_bar__$1,p__42970__$1,offset__$1,ss_xy__$1,x_bar__$1,map__42971__$2,sum_squares__$1,slope__$1,ss_x__$1,meta42973){
return (new kixi.stats.estimate.t_kixi$stats$estimate42972(y_bar__$1,p__42970__$1,offset__$1,ss_xy__$1,x_bar__$1,map__42971__$2,sum_squares__$1,slope__$1,ss_x__$1,meta42973));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate42972(y_bar,p__42970,offset,ss_xy,x_bar,map__42971__$1,sum_squares,slope,ss_x,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__43021,x){
var map__43022 = p__43021;
var map__43022__$1 = cljs.core.__destructure_map(map__43022);
var sum_squares = map__43022__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__43031,x,alpha){
var map__43032 = p__43031;
var map__43032__$1 = cljs.core.__destructure_map(map__43032);
var sum_squares = map__43032__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43032__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate43034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate43034 = (function (x,p__43031,map__43032,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,meta43035){
this.x = x;
this.p__43031 = p__43031;
this.map__43032 = map__43032;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta43035 = meta43035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate43034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43036,meta43035__$1){
var self__ = this;
var _43036__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate43034(self__.x,self__.p__43031,self__.map__43032,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta43035__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate43034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43036){
var self__ = this;
var _43036__$1 = this;
return self__.meta43035;
}));

(kixi.stats.estimate.t_kixi$stats$estimate43034.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate43034.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate43034.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate43034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__43031","p__43031",-1108393151,null),new cljs.core.Symbol(null,"map__43032","map__43032",-1805879133,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta43035","meta43035",2139981837,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate43034.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate43034.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate43034");

(kixi.stats.estimate.t_kixi$stats$estimate43034.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate43034");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate43034.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate43034 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate43034(x__$1,p__43031__$1,map__43032__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta43035){
return (new kixi.stats.estimate.t_kixi$stats$estimate43034(x__$1,p__43031__$1,map__43032__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta43035));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate43034(x,p__43031,map__43032__$1,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__43053,x){
var map__43054 = p__43053;
var map__43054__$1 = cljs.core.__destructure_map(map__43054);
var sum_squares = map__43054__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__43059,x,alpha){
var map__43060 = p__43059;
var map__43060__$1 = cljs.core.__destructure_map(map__43060);
var sum_squares = map__43060__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43060__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate43061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate43061 = (function (x,map__43060,n,err,regression,df,t_crit,y_hat,sum_squares,p__43059,se,alpha,meta43062){
this.x = x;
this.map__43060 = map__43060;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.p__43059 = p__43059;
this.se = se;
this.alpha = alpha;
this.meta43062 = meta43062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate43061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43063,meta43062__$1){
var self__ = this;
var _43063__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate43061(self__.x,self__.map__43060,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.p__43059,self__.se,self__.alpha,meta43062__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate43061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43063){
var self__ = this;
var _43063__$1 = this;
return self__.meta43062;
}));

(kixi.stats.estimate.t_kixi$stats$estimate43061.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate43061.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate43061.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate43061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__43060","map__43060",-424108946,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"p__43059","p__43059",-1456228643,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta43062","meta43062",1775236297,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate43061.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate43061.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate43061");

(kixi.stats.estimate.t_kixi$stats$estimate43061.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate43061");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate43061.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate43061 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate43061(x__$1,map__43060__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,p__43059__$1,se__$1,alpha__$1,meta43062){
return (new kixi.stats.estimate.t_kixi$stats$estimate43061(x__$1,map__43060__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,p__43059__$1,se__$1,alpha__$1,meta43062));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate43061(x,map__43060__$1,n,err,regression,df,t_crit,y_hat,sum_squares,p__43059,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
