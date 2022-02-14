goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__42107){
var map__42108 = p__42107;
var map__42108__$1 = cljs.core.__destructure_map(map__42108);
var sum_squares = map__42108__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42108__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42108__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42108__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42108__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate42110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate42110 = (function (y_bar,offset,ss_xy,x_bar,map__42108,sum_squares,slope,p__42107,ss_x,meta42111){
this.y_bar = y_bar;
this.offset = offset;
this.ss_xy = ss_xy;
this.x_bar = x_bar;
this.map__42108 = map__42108;
this.sum_squares = sum_squares;
this.slope = slope;
this.p__42107 = p__42107;
this.ss_x = ss_x;
this.meta42111 = meta42111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate42110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42112,meta42111__$1){
var self__ = this;
var _42112__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate42110(self__.y_bar,self__.offset,self__.ss_xy,self__.x_bar,self__.map__42108,self__.sum_squares,self__.slope,self__.p__42107,self__.ss_x,meta42111__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate42110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42112){
var self__ = this;
var _42112__$1 = this;
return self__.meta42111;
}));

(kixi.stats.estimate.t_kixi$stats$estimate42110.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate42110.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate42110.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate42110.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"map__42108","map__42108",-1710057386,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"p__42107","p__42107",899665309,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"meta42111","meta42111",-516545670,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42110.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate42110.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate42110");

(kixi.stats.estimate.t_kixi$stats$estimate42110.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate42110");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate42110.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate42110 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate42110(y_bar__$1,offset__$1,ss_xy__$1,x_bar__$1,map__42108__$2,sum_squares__$1,slope__$1,p__42107__$1,ss_x__$1,meta42111){
return (new kixi.stats.estimate.t_kixi$stats$estimate42110(y_bar__$1,offset__$1,ss_xy__$1,x_bar__$1,map__42108__$2,sum_squares__$1,slope__$1,p__42107__$1,ss_x__$1,meta42111));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate42110(y_bar,offset,ss_xy,x_bar,map__42108__$1,sum_squares,slope,p__42107,ss_x,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__42143,x){
var map__42144 = p__42143;
var map__42144__$1 = cljs.core.__destructure_map(map__42144);
var sum_squares = map__42144__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__42154,x,alpha){
var map__42155 = p__42154;
var map__42155__$1 = cljs.core.__destructure_map(map__42155);
var sum_squares = map__42155__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42155__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate42157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate42157 = (function (x,n,err,regression,df,p__42154,t_crit,map__42155,y_hat,sum_squares,se,alpha,meta42158){
this.x = x;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.p__42154 = p__42154;
this.t_crit = t_crit;
this.map__42155 = map__42155;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta42158 = meta42158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate42157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42159,meta42158__$1){
var self__ = this;
var _42159__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate42157(self__.x,self__.n,self__.err,self__.regression,self__.df,self__.p__42154,self__.t_crit,self__.map__42155,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta42158__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate42157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42159){
var self__ = this;
var _42159__$1 = this;
return self__.meta42158;
}));

(kixi.stats.estimate.t_kixi$stats$estimate42157.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate42157.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42157.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"p__42154","p__42154",-291164524,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"map__42155","map__42155",-1749608618,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta42158","meta42158",531420975,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42157.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate42157.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate42157");

(kixi.stats.estimate.t_kixi$stats$estimate42157.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate42157");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate42157.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate42157 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate42157(x__$1,n__$1,err__$1,regression__$1,df__$1,p__42154__$1,t_crit__$1,map__42155__$2,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta42158){
return (new kixi.stats.estimate.t_kixi$stats$estimate42157(x__$1,n__$1,err__$1,regression__$1,df__$1,p__42154__$1,t_crit__$1,map__42155__$2,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta42158));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate42157(x,n,err,regression,df,p__42154,t_crit,map__42155__$1,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__42165,x){
var map__42166 = p__42165;
var map__42166__$1 = cljs.core.__destructure_map(map__42166);
var sum_squares = map__42166__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__42167,x,alpha){
var map__42168 = p__42167;
var map__42168__$1 = cljs.core.__destructure_map(map__42168);
var sum_squares = map__42168__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42168__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate42169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate42169 = (function (x,map__42168,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,p__42167,meta42170){
this.x = x;
this.map__42168 = map__42168;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.p__42167 = p__42167;
this.meta42170 = meta42170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate42169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42171,meta42170__$1){
var self__ = this;
var _42171__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate42169(self__.x,self__.map__42168,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,self__.p__42167,meta42170__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate42169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42171){
var self__ = this;
var _42171__$1 = this;
return self__.meta42170;
}));

(kixi.stats.estimate.t_kixi$stats$estimate42169.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate42169.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42169.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__42168","map__42168",1269519817,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"p__42167","p__42167",-1352091874,null),new cljs.core.Symbol(null,"meta42170","meta42170",1442395139,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate42169.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate42169.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate42169");

(kixi.stats.estimate.t_kixi$stats$estimate42169.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate42169");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate42169.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate42169 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate42169(x__$1,map__42168__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,p__42167__$1,meta42170){
return (new kixi.stats.estimate.t_kixi$stats$estimate42169(x__$1,map__42168__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,p__42167__$1,meta42170));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate42169(x,map__42168__$1,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,p__42167,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
