goog.provide('kixi.stats.math');
kixi.stats.math.PI = Math.PI;
kixi.stats.math.abs = (function kixi$stats$math$abs(x){
var G__41710 = x;
if((x < (0))){
return (- G__41710);
} else {
return G__41710;
}
});
kixi.stats.math.sqrt = (function kixi$stats$math$sqrt(x){
return Math.sqrt(x);
});
kixi.stats.math.sq = (function kixi$stats$math$sq(x){
return (x * x);
});
kixi.stats.math.pow = (function kixi$stats$math$pow(x,n){
return Math.pow(x,n);
});
kixi.stats.math.root = (function kixi$stats$math$root(x,n){
return kixi.stats.math.pow(x,((1) / n));
});
kixi.stats.math.log = (function kixi$stats$math$log(x){
return Math.log(x);
});
kixi.stats.math.log1p = (function kixi$stats$math$log1p(x){
return Math.log((x + (1)));
});
kixi.stats.math.exp = (function kixi$stats$math$exp(x){
return Math.exp(x);
});
kixi.stats.math.cos = (function kixi$stats$math$cos(x){
return Math.cos(x);
});
kixi.stats.math.clamp = (function kixi$stats$math$clamp(x,lower,upper){
var x__4339__auto__ = (function (){var x__4336__auto__ = x;
var y__4337__auto__ = lower;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4340__auto__ = upper;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
});
kixi.stats.math.sin = (function kixi$stats$math$sin(x){
return Math.sin(x);
});
kixi.stats.math.tan = (function kixi$stats$math$tan(x){
return Math.tan(x);
});
kixi.stats.math.atan = (function kixi$stats$math$atan(x){
return Math.atan(x);
});
kixi.stats.math.ceil = (function kixi$stats$math$ceil(x){
return Math.ceil(x);
});
kixi.stats.math.floor = (function kixi$stats$math$floor(x){
return Math.floor(x);
});
kixi.stats.math.equal = (function kixi$stats$math$equal(x,y,e){
return (kixi.stats.math.abs((y - x)) <= e);
});
kixi.stats.math.infinity = Infinity;
kixi.stats.math.negative_infinity = -Infinity;
kixi.stats.math.infinite_QMARK_ = (function kixi$stats$math$infinite_QMARK_(x){
return cljs.core.not(isFinite(x));
});
kixi.stats.math.SQRT_2_PI = 2.5066282746310007;
kixi.stats.math.HALF_LOG_2_PI = (0.5 * kixi.stats.math.log((2.0 * kixi.stats.math.PI)));
kixi.stats.math.LANCZOS = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),3.6899182659531625E-6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),-2.6190838401581408E-5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),8.441822398385275E-5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),-1.643181065367639E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),2.1743961811521265E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),-2.1026444172410488E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),1.580887032249125E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),-9.837447530487956E-5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),4.652362892704858E-5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),3.399464998481189E-5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),-0.4919138160976202], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),14.136097974741746], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),-59.59796035547549], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),57.15623566586292], null)], null);
kixi.stats.math.A = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [6.116095104481416E-9,6.247308301164655E-9], null);
kixi.stats.math.B = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.9575583661463974E-10,-6.077618957228252E-8,9.926418406727737E-7,-6.4304548177935305E-6,-8.514194324403149E-6,4.939449793824468E-4,0.026620534842894922,0.203610414066807], null);
kixi.stats.math.P = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.343529937408594E-15,-1.2494415722763663E-13,1.5728330277104463E-12,4.686843322948848E-11,6.820161668496171E-10,6.8716741130671986E-9,6.116095104481416E-9], null);
kixi.stats.math.Q = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.6923694661863613E-4,0.004956830093825887,0.054642130860422966,0.3056961078365221], null);
kixi.stats.math.C = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.056338416977607E-7,1.133027231981696E-6,-1.2504934821426706E-6,-2.013485478078824E-5,1.280502823881162E-4,-2.1524167411495098E-4,-0.0011651675918590652,0.0072189432466631,-0.009621971527876973,-0.04219773455554433,0.16653861138229148,-0.04200263503409524,-0.6558780715202539], null);
kixi.stats.math.CA = -0.42278433509846713;
kixi.stats.math.CB = 0.5772156649015329;
/**
 * The Lanczos constant
 */
kixi.stats.math.LANCZOS_G = ((607) / (128));
/**
 * Computes the Lanczos approximation to the Gamma function
 */
kixi.stats.math.lanczos_approximation = (function kixi$stats$math$lanczos_approximation(x){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__41804){
var vec__41805 = p__41804;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(1),null);
return (sum + (l / (x + i)));
}),0.0,kixi.stats.math.LANCZOS) + 0.9999999999999971);
});
/**
 * Computes the function `(dec (/ 1 (gamma (inc x))))`
 *   for -0.5 <= x <= 0.5
 */
kixi.stats.math.inv_gamma_1pm1 = (function kixi$stats$math$inv_gamma_1pm1(x){
var t = (((x <= 0.5))?x:((x - 0.5) - 0.5));
if((t < (0))){
var vec__41809 = kixi.stats.math.A;
var a0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41809,(0),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41809,(1),null);
var b = ((t * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (b,b_SINGLEQUOTE_){
return ((t * b) + b_SINGLEQUOTE_);
}),kixi.stats.math.B)) + (1));
var c = (kixi.stats.math.CA + (t * cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,c_SINGLEQUOTE_){
return ((t * c) + c_SINGLEQUOTE_);
}),((a0 + (a1 * t)) / b),kixi.stats.math.C)));
if((x > 0.5)){
return (t * (c / x));
} else {
return (x * (c + (1)));
}
} else {
var p = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p,p_SINGLEQUOTE_){
return ((t * p) + p_SINGLEQUOTE_);
}),kixi.stats.math.P);
var q = ((t * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (q,q_SINGLEQUOTE_){
return ((t * q) + q_SINGLEQUOTE_);
}),kixi.stats.math.Q)) + (1));
var c = (kixi.stats.math.CB + (t * cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,c_SINGLEQUOTE_){
return ((t * c) + c_SINGLEQUOTE_);
}),(p / q),kixi.stats.math.C)));
if((x > 0.5)){
return ((t / x) * (c - (1)));
} else {
return (x * c);
}
}
});
/**
 * Computes the function `(ln (gamma (inc x)))`
 *   for -0.5 <= x <= 0.5
 */
kixi.stats.math.log_gamma_1p = (function kixi$stats$math$log_gamma_1p(x){
return (- kixi.stats.math.log1p(kixi.stats.math.inv_gamma_1pm1(x)));
});
/**
 * Computes the value of ln(Γx)
 */
kixi.stats.math.log_gamma = (function kixi$stats$math$log_gamma(x){
if((x < 0.5)){
return (kixi.stats.math.log_gamma_1p(x) - kixi.stats.math.log(x));
} else {
if((x <= 2.5)){
return kixi.stats.math.log_gamma_1p((x - (1)));
} else {
if((x <= 8.0)){
var n = (kixi.stats.math.floor((x - 1.5)) | (0));
return (kixi.stats.math.log_gamma_1p((x - (n + (1)))) + (function (){var i = (1);
var p = 1.0;
while(true){
if((i <= n)){
var G__41969 = (i + (1));
var G__41970 = (p * (x - i));
i = G__41969;
p = G__41970;
continue;
} else {
return kixi.stats.math.log(p);
}
break;
}
})());
} else {
var t = ((x + kixi.stats.math.LANCZOS_G) + 0.5);
return (((((x + 0.5) * kixi.stats.math.log(t)) - t) + kixi.stats.math.HALF_LOG_2_PI) + kixi.stats.math.log((kixi.stats.math.lanczos_approximation(x) / x)));

}
}
}
});
/**
 * Computes the value of Γx
 */
kixi.stats.math.gamma = (function kixi$stats$math$gamma(x){
var abs_x = kixi.stats.math.abs(x);
if((abs_x <= (20))){
if((x >= (1))){
var t = (x - (1));
var p = (1);
while(true){
if((t > 1.5)){
var G__41971 = (t - (1));
var G__41972 = (p * t);
t = G__41971;
p = G__41972;
continue;
} else {
return (p / (kixi.stats.math.inv_gamma_1pm1(t) + (1)));
}
break;
}
} else {
var t = (x + (1));
var p = x;
while(true){
if((t < 0.5)){
var G__41973 = (t + (1));
var G__41974 = (p * t);
t = G__41973;
p = G__41974;
continue;
} else {
return ((1) / (p * (kixi.stats.math.inv_gamma_1pm1((t - (1))) + (1))));
}
break;
}
}
} else {
var y = ((abs_x + kixi.stats.math.LANCZOS_G) + 0.5);
var abs_g = ((((kixi.stats.math.SQRT_2_PI / abs_x) * kixi.stats.math.pow(y,(abs_x + 0.5))) * kixi.stats.math.exp((- y))) * kixi.stats.math.lanczos_approximation(abs_x));
if((x > (0))){
return abs_g;
} else {
return ((- kixi.stats.math.PI) / ((x * abs_g) * kixi.stats.math.sin((kixi.stats.math.PI * x))));
}
}
});
/**
 * Computes the lower regularized incomplete gamma function P(a,x)
 */
kixi.stats.math.lower_regularized_gamma = (function kixi$stats$math$lower_regularized_gamma(a,x){
if((((x >= (0))) && ((a > (0))))){
var max_iter = (kixi.stats.math.floor(((((kixi.stats.math.log((((a >= (1)))?a:((1) / a))) * 8.5) + (0.4 * a)) + (17)) + (1))) | (0));
if((x < (a + (1)))){
var i = (1);
var ap = a;
var del = ((1) / ap);
var sum = ((1) / ap);
while(true){
if((i < max_iter)){
var ap__$1 = (ap + (1));
var del__$1 = (del * (x / ap__$1));
var G__41977 = (i + (1));
var G__41978 = ap__$1;
var G__41979 = del__$1;
var G__41980 = (sum + del__$1);
i = G__41977;
ap = G__41978;
del = G__41979;
sum = G__41980;
continue;
} else {
return (sum * kixi.stats.math.exp((((a * kixi.stats.math.log(x)) - x) - kixi.stats.math.log_gamma(a))));
}
break;
}
} else {
var i = (1);
var b = ((x + (1)) - a);
var c = ((1) / 1.0E-30);
var d = ((1) / b);
var h = ((1) / b);
while(true){
var an = ((- i) * (i - a));
var b__$1 = (b + (2));
var d__$1 = ((an * d) + b__$1);
var c__$1 = (b__$1 + (an / c));
var d__$2 = ((1) / d__$1);
var h__$1 = ((h * d__$2) * c__$1);
if((i < max_iter)){
var G__41984 = (i + (1));
var G__41985 = b__$1;
var G__41986 = c__$1;
var G__41987 = d__$2;
var G__41988 = h__$1;
i = G__41984;
b = G__41985;
c = G__41986;
d = G__41987;
h = G__41988;
continue;
} else {
return ((1) - (h__$1 * kixi.stats.math.exp((((a * kixi.stats.math.log(x)) - x) - kixi.stats.math.log_gamma(a)))));
}
break;
}
}
} else {
return null;
}
});
/**
 * Returns the inverse of the lower regularized incomplete gamma function
 */
kixi.stats.math.gamma_pinv = (function kixi$stats$math$gamma_pinv(p,a){
if((p >= 1.0)){
var x__4336__auto__ = 100.0;
var y__4337__auto__ = (a + (100.0 * kixi.stats.math.sqrt(a)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
} else {
if((p <= 0.0)){
return 0.0;
} else {
var gln = kixi.stats.math.log_gamma(a);
var a1 = (a - (1));
var lna1 = kixi.stats.math.log(a1);
var afac = kixi.stats.math.exp(((a1 * (lna1 - (1))) - gln));
var EPS = 1.0E-8;
var x = (((a > (1)))?(function (){var pp = (((p < 0.5))?p:((1) - p));
var t = kixi.stats.math.sqrt(((-2) * kixi.stats.math.log(pp)));
var x = (((2.30753 + (0.27061 * t)) / ((1) + (t * (0.99229 + (0.04481 * t))))) - t);
var x__$1 = (((p < 0.5))?(- x):x);
var x__4336__auto__ = 0.001;
var y__4337__auto__ = (a * kixi.stats.math.pow((((1) - ((1) / ((9) * a))) - (x__$1 / ((3) * kixi.stats.math.sqrt(a)))),(3)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():(function (){var t = ((1) - (a * (0.253 + (0.12 * a))));
if((p < t)){
return kixi.stats.math.pow((p / t),((1) / a));
} else {
return ((1) - kixi.stats.math.log(((1) - ((p - t) / ((1) - t)))));
}
})());
var j = (0);
var x__$1 = x;
while(true){
if((x__$1 <= 0.0)){
return 0.0;
} else {
var err = (kixi.stats.math.lower_regularized_gamma(a,x__$1) - p);
var t = (((a > (1)))?(afac * kixi.stats.math.exp(((a1 * (kixi.stats.math.log(x__$1) - lna1)) - (x__$1 - a1)))):kixi.stats.math.exp((((a1 * kixi.stats.math.log(x__$1)) - gln) - x__$1)));
var u = (err / t);
var t__$1 = (u / ((1) - (0.5 * (function (){var x__4339__auto__ = (1);
var y__4340__auto__ = (u * (((a - (1)) / x__$1) - (1)));
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})())));
var x__$2 = (x__$1 - t__$1);
var x__$3 = (((x__$2 <= (0)))?(0.5 * (x__$2 + t__$1)):x__$2);
if((((kixi.stats.math.abs(t__$1) < (EPS * x__$3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(11))))){
return x__$3;
} else {
var G__41993 = (j + (1));
var G__41994 = x__$3;
j = G__41993;
x__$1 = G__41994;
continue;
}
}
break;
}

}
}
});
/**
 * Computes the log of the beta function
 */
kixi.stats.math.log_beta = (function kixi$stats$math$log_beta(a,b){
return ((kixi.stats.math.log_gamma(a) + kixi.stats.math.log_gamma(b)) - kixi.stats.math.log_gamma((a + b)));
});
/**
 * Computes the beta function
 */
kixi.stats.math.beta = (function kixi$stats$math$beta(a,b){
if((((a > (0))) && ((b > (0))))){
if(((a + b) > (170))){
return kixi.stats.math.exp(kixi.stats.math.log_beta(a,b));
} else {
return ((kixi.stats.math.gamma(a) * kixi.stats.math.gamma(b)) / kixi.stats.math.gamma((a + b)));
}
} else {
return null;
}
});
/**
 * Evaluates the continued fraction for the incomplete beta function.
 *   Modified Lentz's method
 */
kixi.stats.math.betacf = (function kixi$stats$math$betacf(x,a,b){
var fpmin = 1.0E-30;
var check = (function (x__$1){
if((kixi.stats.math.abs(x__$1) < fpmin)){
return fpmin;
} else {
return x__$1;
}
});
var qab = (a + b);
var qap = (a + (1));
var qam = (a - (1));
var d = ((1) / check(((1) - ((x * qab) / qap))));
var m = (1);
var h = d;
var c = (1);
var d__$1 = d;
while(true){
var m2 = ((2) * m);
var aa = ((m * (b - m)) * (x / ((qam + m2) * (a + m2))));
var d__$2 = ((1) / check(((1) + (aa * d__$1))));
var c__$1 = check(((1) + (aa / c)));
var h__$1 = ((h * d__$2) * c__$1);
var aa__$1 = (((- (a + m)) * (qab + m)) * (x / ((a + m2) * (qap + m2))));
var d__$3 = ((1) / check(((1) + (aa__$1 * d__$2))));
var c__$2 = check(((1) + (aa__$1 / c__$1)));
var del = (d__$3 * c__$2);
var h__$2 = (h__$1 * del);
if((((kixi.stats.math.abs(del) < 3.0E-7)) || ((m >= (100))))){
return h__$2;
} else {
var G__42000 = (m + (1));
var G__42001 = h__$2;
var G__42002 = c__$2;
var G__42003 = d__$3;
m = G__42000;
h = G__42001;
c = G__42002;
d__$1 = G__42003;
continue;
}
break;
}
});
/**
 * Returns the incomplete beta function I_x(a,b)
 */
kixi.stats.math.ibeta = (function kixi$stats$math$ibeta(x,a,b){
if(((((0) <= x)) && ((x <= (1))))){
var bt = (((((x === (0))) || ((x === (1)))))?(0):kixi.stats.math.exp(((((kixi.stats.math.log_gamma((a + b)) - kixi.stats.math.log_gamma(a)) - kixi.stats.math.log_gamma(b)) + (a * kixi.stats.math.log(x))) + (b * kixi.stats.math.log(((1) - x))))));
if((x < ((a + (1)) / ((a + b) + (2))))){
return (bt * (kixi.stats.math.betacf(x,a,b) / a));
} else {
return ((1) - (bt * (kixi.stats.math.betacf(((1) - x),b,a) / b)));
}
} else {
return null;
}
});
/**
 * Returns the inverse of the incomplete beta function
 */
kixi.stats.math.ibetainv = (function kixi$stats$math$ibetainv(p,a,b){
if((p <= (0))){
return 0.0;
} else {
if((p >= (1))){
return 1.0;
} else {
var eps = 1.0E-8;
var a1 = (a - (1));
var b1 = (b - (1));
var x = (((((a >= (1))) && ((b >= (1)))))?(function (){var pp = (((p < 0.5))?p:((1) - p));
var t = kixi.stats.math.sqrt(((-2) * kixi.stats.math.log(pp)));
var x = (((2.30753 + (t * 0.27061)) / ((t * (0.99229 + (t * 0.04481))) + (1))) - t);
var x__$1 = (((p < 0.5))?(- x):x);
var al = ((kixi.stats.math.sq(x__$1) - (3)) / (6));
var h = ((2) / (((1) / (((2) * a) - (1))) + ((1) / (((2) * b) - (1)))));
var w = (((x__$1 * kixi.stats.math.sqrt((al + h))) / h) - ((((1) / (((2) * b) - (1))) - ((1) / (((2) * a) - (1)))) * ((al + ((5) / (6))) + ((-2) / ((3) * h)))));
return (a / (a + (b * kixi.stats.math.exp(((2) * w)))));
})():(function (){var lna = kixi.stats.math.log((a / (a + b)));
var lnb = kixi.stats.math.log((b / (a + b)));
var t = (kixi.stats.math.exp((a * lna)) / a);
var u = (kixi.stats.math.exp((b * lnb)) / b);
var w = (t + u);
if((p < (t / w))){
return kixi.stats.math.pow(((a * w) * p),((1) / a));
} else {
return ((1) - kixi.stats.math.pow(((b * w) * ((1) - p)),((1) / b)));
}
})());
var afac = ((kixi.stats.math.log_gamma((a + b)) - kixi.stats.math.log_gamma(a)) - kixi.stats.math.log_gamma(b));
var j = (0);
var x__$1 = x;
while(true){
if((((x__$1 === (0))) || ((((x__$1 === (1))) || ((j >= (10))))))){
return x__$1;
} else {
var err = (kixi.stats.math.ibeta(x__$1,a,b) - p);
var t = kixi.stats.math.exp((((a1 * kixi.stats.math.log(x__$1)) + (b1 * kixi.stats.math.log(((1) - x__$1)))) + afac));
var u = (err / t);
var t__$1 = (u / ((1) - (0.5 * (function (){var x__4339__auto__ = (1);
var y__4340__auto__ = (u * ((a1 / x__$1) - (b1 / ((1) - x__$1))));
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})())));
var x__$2 = (x__$1 - t__$1);
var x__$3 = (((x__$2 <= (0)))?(0.5 * (x__$2 + t__$1)):(((x__$2 >= (1)))?(0.5 * ((x__$2 + t__$1) + (1))):x__$2
));
if((((j > (0))) && ((kixi.stats.math.abs(t__$1) < (eps * x__$3))))){
return x__$3;
} else {
var G__42014 = (j + (1));
var G__42015 = x__$3;
j = G__42014;
x__$1 = G__42015;
continue;
}
}
break;
}

}
}
});
/**
 * Computes the error function
 */
kixi.stats.math.erf = (function kixi$stats$math$erf(x){
var x_SINGLEQUOTE_ = kixi.stats.math.abs(x);
var t = ((2) / (x_SINGLEQUOTE_ + (2)));
var ty = (((4) * t) - (2));
var vec__41930 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41933,cof){
var vec__41934 = p__41933;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41934,(0),null);
var dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41934,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(((ty * d) - dd) + cof),d],null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.8E-17,1.21E-16,-9.4E-17,-1.523E-15,7.106E-15,3.81E-16,-1.12708E-13,3.13092E-13,8.94487E-13,-6.886027E-12,2.394038E-12,9.6467911E-11,-2.27365122E-10,-9.91364156E-10,5.059343495E-9,6.529054439E-9,-8.5238095915E-8,1.5626441722E-8,1.30365583558E-6,-1.624290004647E-6,-2.0278578112534E-5,4.2523324806907E-5,3.66839497852761E-4,-9.46595344482036E-4,-0.00956151478680863,0.019476473204185836,0.6419697923564902], null));
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41930,(0),null);
var dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41930,(1),null);
var cof = -1.3026537197817094;
var res = (t * kixi.stats.math.exp(((((- x_SINGLEQUOTE_) * x_SINGLEQUOTE_) + (0.5 * ((ty * d) + cof))) + (- dd))));
if((x < (0))){
return (res - (1));
} else {
return ((1) - res);
}
});
/**
 * Computes the complementary error function
 */
kixi.stats.math.erfc = (function kixi$stats$math$erfc(x){
return ((1) - kixi.stats.math.erf(x));
});
/**
 * Computes the inverse of the complementary error function
 */
kixi.stats.math.erfcinv = (function kixi$stats$math$erfcinv(p){
if((p >= (2))){
return (-100);
} else {
if((p <= (0))){
return (100);
} else {
var pp = (((p < (1)))?p:((2) - p));
var t = kixi.stats.math.sqrt(((-2) * kixi.stats.math.log((pp * 0.5))));
var x = (-0.70711 * ((((0.27061 * t) + 2.30753) / ((1) + (t * ((0.04481 * t) + 0.99229)))) - t));
var x__$1 = (function (){var j = (0);
var x__$1 = x;
while(true){
if((j < (2))){
var err = (kixi.stats.math.erfc(x__$1) - pp);
var G__42031 = (j + (1));
var G__42032 = (x__$1 + (err / ((1.1283791670955126 * kixi.stats.math.exp(((- x__$1) * x__$1))) - (x__$1 * err))));
j = G__42031;
x__$1 = G__42032;
continue;
} else {
return x__$1;
}
break;
}
})();
if((p < (1))){
return x__$1;
} else {
return (- x__$1);
}

}
}
});

//# sourceMappingURL=kixi.stats.math.js.map
