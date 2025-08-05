goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__82123){
var map__82125 = p__82123;
var map__82125__$1 = cljs.core.__destructure_map(map__82125);
var sum_squares = map__82125__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82125__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82125__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82125__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82125__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate82155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate82155 = (function (p__82123,y_bar,offset,ss_xy,x_bar,sum_squares,slope,ss_x,map__82125,meta82156){
this.p__82123 = p__82123;
this.y_bar = y_bar;
this.offset = offset;
this.ss_xy = ss_xy;
this.x_bar = x_bar;
this.sum_squares = sum_squares;
this.slope = slope;
this.ss_x = ss_x;
this.map__82125 = map__82125;
this.meta82156 = meta82156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate82155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82157,meta82156__$1){
var self__ = this;
var _82157__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate82155(self__.p__82123,self__.y_bar,self__.offset,self__.ss_xy,self__.x_bar,self__.sum_squares,self__.slope,self__.ss_x,self__.map__82125,meta82156__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate82155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82157){
var self__ = this;
var _82157__$1 = this;
return self__.meta82156;
}));

(kixi.stats.estimate.t_kixi$stats$estimate82155.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate82155.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate82155.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate82155.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__82123","p__82123",2002032448,null),new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"map__82125","map__82125",155896830,null),new cljs.core.Symbol(null,"meta82156","meta82156",1474222582,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82155.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate82155.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate82155");

(kixi.stats.estimate.t_kixi$stats$estimate82155.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate82155");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate82155.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate82155 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate82155(p__82123__$1,y_bar__$1,offset__$1,ss_xy__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,map__82125__$2,meta82156){
return (new kixi.stats.estimate.t_kixi$stats$estimate82155(p__82123__$1,y_bar__$1,offset__$1,ss_xy__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,map__82125__$2,meta82156));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate82155(p__82123,y_bar,offset,ss_xy,x_bar,sum_squares,slope,ss_x,map__82125__$1,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__82180,x){
var map__82187 = p__82180;
var map__82187__$1 = cljs.core.__destructure_map(map__82187);
var sum_squares = map__82187__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82187__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82187__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82187__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82187__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82187__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82187__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__82191,x,alpha){
var map__82192 = p__82191;
var map__82192__$1 = cljs.core.__destructure_map(map__82192);
var sum_squares = map__82192__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82192__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate82193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate82193 = (function (x,map__82192,n,err,regression,df,t_crit,y_hat,p__82191,sum_squares,se,alpha,meta82194){
this.x = x;
this.map__82192 = map__82192;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.p__82191 = p__82191;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta82194 = meta82194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate82193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82195,meta82194__$1){
var self__ = this;
var _82195__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate82193(self__.x,self__.map__82192,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.p__82191,self__.sum_squares,self__.se,self__.alpha,meta82194__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate82193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82195){
var self__ = this;
var _82195__$1 = this;
return self__.meta82194;
}));

(kixi.stats.estimate.t_kixi$stats$estimate82193.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate82193.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82193.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__82192","map__82192",-1591215231,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"p__82191","p__82191",447680281,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta82194","meta82194",1323422236,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82193.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate82193.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate82193");

(kixi.stats.estimate.t_kixi$stats$estimate82193.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate82193");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate82193.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate82193 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate82193(x__$1,map__82192__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,p__82191__$1,sum_squares__$1,se__$1,alpha__$1,meta82194){
return (new kixi.stats.estimate.t_kixi$stats$estimate82193(x__$1,map__82192__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,p__82191__$1,sum_squares__$1,se__$1,alpha__$1,meta82194));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate82193(x,map__82192__$1,n,err,regression,df,t_crit,y_hat,p__82191,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__82214,x){
var map__82215 = p__82214;
var map__82215__$1 = cljs.core.__destructure_map(map__82215);
var sum_squares = map__82215__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82215__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82215__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82215__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82215__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82215__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82215__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__82222,x,alpha){
var map__82223 = p__82222;
var map__82223__$1 = cljs.core.__destructure_map(map__82223);
var sum_squares = map__82223__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82223__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate82228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate82228 = (function (x,map__82223,p__82222,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,meta82229){
this.x = x;
this.map__82223 = map__82223;
this.p__82222 = p__82222;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta82229 = meta82229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate82228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82230,meta82229__$1){
var self__ = this;
var _82230__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate82228(self__.x,self__.map__82223,self__.p__82222,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta82229__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate82228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82230){
var self__ = this;
var _82230__$1 = this;
return self__.meta82229;
}));

(kixi.stats.estimate.t_kixi$stats$estimate82228.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate82228.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82228.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__82223","map__82223",-1981657241,null),new cljs.core.Symbol(null,"p__82222","p__82222",1447659566,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta82229","meta82229",470694290,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate82228.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate82228.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate82228");

(kixi.stats.estimate.t_kixi$stats$estimate82228.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate82228");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate82228.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate82228 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate82228(x__$1,map__82223__$2,p__82222__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta82229){
return (new kixi.stats.estimate.t_kixi$stats$estimate82228(x__$1,map__82223__$2,p__82222__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta82229));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate82228(x,map__82223__$1,p__82222,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
