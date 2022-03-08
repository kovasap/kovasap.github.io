goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__44783){
var map__44784 = p__44783;
var map__44784__$1 = cljs.core.__destructure_map(map__44784);
var sum_squares = map__44784__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate44785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate44785 = (function (map__44784,p__44783,y_bar,offset,ss_xy,x_bar,sum_squares,slope,ss_x,meta44786){
this.map__44784 = map__44784;
this.p__44783 = p__44783;
this.y_bar = y_bar;
this.offset = offset;
this.ss_xy = ss_xy;
this.x_bar = x_bar;
this.sum_squares = sum_squares;
this.slope = slope;
this.ss_x = ss_x;
this.meta44786 = meta44786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate44785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44787,meta44786__$1){
var self__ = this;
var _44787__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate44785(self__.map__44784,self__.p__44783,self__.y_bar,self__.offset,self__.ss_xy,self__.x_bar,self__.sum_squares,self__.slope,self__.ss_x,meta44786__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate44785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44787){
var self__ = this;
var _44787__$1 = this;
return self__.meta44786;
}));

(kixi.stats.estimate.t_kixi$stats$estimate44785.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate44785.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate44785.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate44785.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__44784","map__44784",1327462529,null),new cljs.core.Symbol(null,"p__44783","p__44783",-193945117,null),new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"meta44786","meta44786",-308171473,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44785.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate44785.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate44785");

(kixi.stats.estimate.t_kixi$stats$estimate44785.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate44785");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate44785.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate44785 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate44785(map__44784__$2,p__44783__$1,y_bar__$1,offset__$1,ss_xy__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta44786){
return (new kixi.stats.estimate.t_kixi$stats$estimate44785(map__44784__$2,p__44783__$1,y_bar__$1,offset__$1,ss_xy__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta44786));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate44785(map__44784__$1,p__44783,y_bar,offset,ss_xy,x_bar,sum_squares,slope,ss_x,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__44820,x){
var map__44822 = p__44820;
var map__44822__$1 = cljs.core.__destructure_map(map__44822);
var sum_squares = map__44822__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__44839,x,alpha){
var map__44840 = p__44839;
var map__44840__$1 = cljs.core.__destructure_map(map__44840);
var sum_squares = map__44840__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44840__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate44845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate44845 = (function (x,p__44839,n,err,regression,df,t_crit,y_hat,map__44840,sum_squares,se,alpha,meta44846){
this.x = x;
this.p__44839 = p__44839;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.map__44840 = map__44840;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta44846 = meta44846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate44845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44847,meta44846__$1){
var self__ = this;
var _44847__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate44845(self__.x,self__.p__44839,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.map__44840,self__.sum_squares,self__.se,self__.alpha,meta44846__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate44845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44847){
var self__ = this;
var _44847__$1 = this;
return self__.meta44846;
}));

(kixi.stats.estimate.t_kixi$stats$estimate44845.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate44845.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44845.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__44839","p__44839",-1569085918,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"map__44840","map__44840",-231869351,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta44846","meta44846",751222271,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44845.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate44845.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate44845");

(kixi.stats.estimate.t_kixi$stats$estimate44845.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate44845");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate44845.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate44845 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate44845(x__$1,p__44839__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,map__44840__$2,sum_squares__$1,se__$1,alpha__$1,meta44846){
return (new kixi.stats.estimate.t_kixi$stats$estimate44845(x__$1,p__44839__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,map__44840__$2,sum_squares__$1,se__$1,alpha__$1,meta44846));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate44845(x,p__44839,n,err,regression,df,t_crit,y_hat,map__44840__$1,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__44905,x){
var map__44906 = p__44905;
var map__44906__$1 = cljs.core.__destructure_map(map__44906);
var sum_squares = map__44906__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__44911,x,alpha){
var map__44914 = p__44911;
var map__44914__$1 = cljs.core.__destructure_map(map__44914);
var sum_squares = map__44914__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44914__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate44915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate44915 = (function (x,n,err,p__44911,regression,df,t_crit,y_hat,map__44914,sum_squares,se,alpha,meta44916){
this.x = x;
this.n = n;
this.err = err;
this.p__44911 = p__44911;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.map__44914 = map__44914;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta44916 = meta44916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate44915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44917,meta44916__$1){
var self__ = this;
var _44917__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate44915(self__.x,self__.n,self__.err,self__.p__44911,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.map__44914,self__.sum_squares,self__.se,self__.alpha,meta44916__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate44915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44917){
var self__ = this;
var _44917__$1 = this;
return self__.meta44916;
}));

(kixi.stats.estimate.t_kixi$stats$estimate44915.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate44915.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44915.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"p__44911","p__44911",-237898062,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"map__44914","map__44914",1820164442,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta44916","meta44916",-704931142,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate44915.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate44915.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate44915");

(kixi.stats.estimate.t_kixi$stats$estimate44915.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.estimate/t_kixi$stats$estimate44915");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate44915.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate44915 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate44915(x__$1,n__$1,err__$1,p__44911__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,map__44914__$2,sum_squares__$1,se__$1,alpha__$1,meta44916){
return (new kixi.stats.estimate.t_kixi$stats$estimate44915(x__$1,n__$1,err__$1,p__44911__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,map__44914__$2,sum_squares__$1,se__$1,alpha__$1,meta44916));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate44915(x,n,err,p__44911,regression,df,t_crit,y_hat,map__44914__$1,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
