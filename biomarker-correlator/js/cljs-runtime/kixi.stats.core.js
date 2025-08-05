goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82810 = arguments.length;
var i__4865__auto___82812 = (0);
while(true){
if((i__4865__auto___82812 < len__4864__auto___82810)){
args__4870__auto__.push((arguments[i__4865__auto___82812]));

var G__82814 = (i__4865__auto___82812 + (1));
i__4865__auto___82812 = G__82814;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (x){
if((x == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,args);
}
});
}));

(kixi.stats.core.somef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq82471){
var G__82472 = cljs.core.first(seq82471);
var seq82471__$1 = cljs.core.next(seq82471);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82472,seq82471__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__82815 = null;
var G__82815__0 = (function (){
return init;
});
var G__82815__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__82815__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__82815 = function(acc,x){
switch(arguments.length){
case 0:
return G__82815__0.call(this);
case 1:
return G__82815__1.call(this,acc);
case 2:
return G__82815__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82815.cljs$core$IFn$_invoke$arity$0 = G__82815__0;
G__82815.cljs$core$IFn$_invoke$arity$1 = G__82815__1;
G__82815.cljs$core$IFn$_invoke$arity$2 = G__82815__2;
return G__82815;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__82473_SHARP_){
var G__82474 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__82473_SHARP_) : rf.call(null,p1__82473_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__82474) : f.call(null,G__82474));
}));
});
/**
 * Given a sequence of n functions, each of which returns a categorical value
 *   (e.g. keyword or string) of a factor, calculates an n-dimensional contingency table
 *   implementing PContingencyTable. This can be passed to kixi.stats.test/chi-squared-test
 *   to determine if the relationship between factors is significant.
 *   See also: kixi.stats.core/chi-squared-test
 */
kixi.stats.core.cross_tabulate = (function kixi$stats$core$cross_tabulate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82816 = arguments.length;
var i__4865__auto___82817 = (0);
while(true){
if((i__4865__auto___82817 < len__4864__auto___82816)){
args__4870__auto__.push((arguments[i__4865__auto___82817]));

var G__82818 = (i__4865__auto___82817 + (1));
i__4865__auto___82817 = G__82818;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic = (function (fxs){
var f = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,fxs);
var k = cljs.core.count(fxs);
var inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
return (function() {
var G__82819 = null;
var G__82819__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__82819__1 = (function (p__82477){
var vec__82485 = p__82477;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82485,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82485,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82485,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core82488 = (function (cells,fxs,vec__82485,n,k,p__82477,dimensions,inc,margins,f,meta82489){
this.cells = cells;
this.fxs = fxs;
this.vec__82485 = vec__82485;
this.n = n;
this.k = k;
this.p__82477 = p__82477;
this.dimensions = dimensions;
this.inc = inc;
this.margins = margins;
this.f = f;
this.meta82489 = meta82489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82490,meta82489__$1){
var self__ = this;
var _82490__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82488(self__.cells,self__.fxs,self__.vec__82485,self__.n,self__.k,self__.p__82477,self__.dimensions,self__.inc,self__.margins,self__.f,meta82489__$1));
}));

(kixi.stats.core.t_kixi$stats$core82488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82490){
var self__ = this;
var _82490__$1 = this;
return self__.meta82489;
}));

(kixi.stats.core.t_kixi$stats$core82488.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82488.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core82488.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core82488.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core82488.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core82488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"vec__82485","vec__82485",19304076,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"p__82477","p__82477",709593142,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta82489","meta82489",1135784364,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82488.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82488.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82488");

(kixi.stats.core.t_kixi$stats$core82488.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82488");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82488.
 */
kixi.stats.core.__GT_t_kixi$stats$core82488 = (function kixi$stats$core$__GT_t_kixi$stats$core82488(cells__$1,fxs__$1,vec__82485__$1,n__$1,k__$1,p__82477__$1,dimensions__$1,inc__$1,margins__$1,f__$1,meta82489){
return (new kixi.stats.core.t_kixi$stats$core82488(cells__$1,fxs__$1,vec__82485__$1,n__$1,k__$1,p__82477__$1,dimensions__$1,inc__$1,margins__$1,f__$1,meta82489));
});

}

return (new kixi.stats.core.t_kixi$stats$core82488(cells,fxs,vec__82485,n,k,p__82477,dimensions,inc,margins,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__82819__2 = (function (p__82476,x){
var vec__82478 = p__82476;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82478,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82478,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82478,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__82481,fx){
var vec__82482 = p__82481;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82482,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82482,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__82819 = function(p__82476,x){
switch(arguments.length){
case 0:
return G__82819__0.call(this);
case 1:
return G__82819__1.call(this,p__82476);
case 2:
return G__82819__2.call(this,p__82476,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82819.cljs$core$IFn$_invoke$arity$0 = G__82819__0;
G__82819.cljs$core$IFn$_invoke$arity$1 = G__82819__1;
G__82819.cljs$core$IFn$_invoke$arity$2 = G__82819__2;
return G__82819;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq82475){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82475));
}));

/**
 * Calculates the count of inputs.
 */
kixi.stats.core.count = (function() {
var kixi$stats$core$count = null;
var kixi$stats$core$count__0 = (function (){
return (0);
});
var kixi$stats$core$count__1 = (function (n){
return n;
});
var kixi$stats$core$count__2 = (function (n,_){
return (n + (1));
});
kixi$stats$core$count = function(n,_){
switch(arguments.length){
case 0:
return kixi$stats$core$count__0.call(this);
case 1:
return kixi$stats$core$count__1.call(this,n);
case 2:
return kixi$stats$core$count__2.call(this,n,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$count.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$count__0;
kixi$stats$core$count.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$count__1;
kixi$stats$core$count.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$count__2;
return kixi$stats$core$count;
})()
;
/**
 * Calculates the arithmetic mean of numeric inputs.
 */
kixi.stats.core.arithmetic_mean = (function() {
var kixi$stats$core$arithmetic_mean = null;
var kixi$stats$core$arithmetic_mean__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,(0)], null);
});
var kixi$stats$core$arithmetic_mean__1 = (function (p__82492){
var vec__82496 = p__82492;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82496,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82496,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__82491,e){
var vec__82493 = p__82491;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82493,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82493,(1),null);
var acc = vec__82493;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__82491,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__82491);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__82491,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$arithmetic_mean.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$arithmetic_mean__0;
kixi$stats$core$arithmetic_mean.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$arithmetic_mean__1;
kixi$stats$core$arithmetic_mean.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$arithmetic_mean__2;
return kixi$stats$core$arithmetic_mean;
})()
;
/**
 * Alias for arithmetic-mean.
 */
kixi.stats.core.mean = kixi.stats.core.arithmetic_mean;
/**
 * Calculates the geometric mean of numeric inputs. Defined only for positive numbers.
 */
kixi.stats.core.geometric_mean = (function() {
var kixi$stats$core$geometric_mean = null;
var kixi$stats$core$geometric_mean__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
});
var kixi$stats$core$geometric_mean__1 = (function (p__82500){
var vec__82504 = p__82500;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82504,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82504,(1),null);
if((c === (0))){
return null;
} else {
if((s === (0))){
return 0.0;
} else {
return kixi.stats.math.root(s,c);
}
}
});
var kixi$stats$core$geometric_mean__2 = (function (p__82499,e){
var vec__82501 = p__82499;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82501,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82501,(1),null);
var acc = vec__82501;
if((e == null)){
return acc;
} else {
if((e < (0))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s * e),(c + (1))], null);

}
}
});
kixi$stats$core$geometric_mean = function(p__82499,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__82499);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__82499,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$geometric_mean.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$geometric_mean__0;
kixi$stats$core$geometric_mean.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$geometric_mean__1;
kixi$stats$core$geometric_mean.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$geometric_mean__2;
return kixi$stats$core$geometric_mean;
})()
;
/**
 * Calculates the harmonic mean of numeric inputs.
 */
kixi.stats.core.harmonic_mean = (function() {
var kixi$stats$core$harmonic_mean = null;
var kixi$stats$core$harmonic_mean__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var kixi$stats$core$harmonic_mean__1 = (function (p__82508){
var vec__82512 = p__82508;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82512,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82512,(1),null);
if((c === (0))){
return null;
} else {
if((s === (0))){
return 0.0;
} else {
return (c / s);
}
}
});
var kixi$stats$core$harmonic_mean__2 = (function (p__82507,e){
var vec__82509 = p__82507;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82509,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82509,(1),null);
var acc = vec__82509;
if((e == null)){
return acc;
} else {
if((e === (0))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(c + (1))], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + ((1) / e)),(c + (1))], null);

}
}
});
kixi$stats$core$harmonic_mean = function(p__82507,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__82507);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__82507,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$harmonic_mean.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$harmonic_mean__0;
kixi$stats$core$harmonic_mean.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$harmonic_mean__1;
kixi$stats$core$harmonic_mean.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$harmonic_mean__2;
return kixi$stats$core$harmonic_mean;
})()
;
/**
 * Estimates an unbiased variance of numeric inputs.
 */
kixi.stats.core.variance_s = (function() {
var kixi$stats$core$variance_s = null;
var kixi$stats$core$variance_s__0 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.0,0.0], null);
});
var kixi$stats$core$variance_s__1 = (function (p__82517){
var vec__82521 = p__82517;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82521,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82521,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82521,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
if((c_SINGLEQUOTE_ > (0))){
return (ss / c_SINGLEQUOTE_);
} else {
return (0);
}
}
});
var kixi$stats$core$variance_s__2 = (function (p__82516,e){
var vec__82518 = p__82516;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82518,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82518,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82518,(2),null);
var acc = vec__82518;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__82516,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__82516);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__82516,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$variance_s.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$variance_s__0;
kixi$stats$core$variance_s.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$variance_s__1;
kixi$stats$core$variance_s.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$variance_s__2;
return kixi$stats$core$variance_s;
})()
;
/**
 * Alias for variance-s.
 */
kixi.stats.core.variance = kixi.stats.core.variance_s;
/**
 * Calculates the population variance of numeric inputs.
 */
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__82525){
var vec__82526 = p__82525;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82526,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82526,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82526,(2),null);
if((c === (0))){
return null;
} else {
return (ss / c);
}
}));
/**
 * Estimates the sample standard deviation of numeric inputs.
 */
kixi.stats.core.standard_deviation_s = kixi.stats.core.post_complete(kixi.stats.core.variance_s,kixi.stats.core.somef(kixi.stats.math.sqrt));
/**
 * Alias for standard-deviation-s.
 */
kixi.stats.core.standard_deviation = kixi.stats.core.standard_deviation_s;
/**
 * Calculates the population standard deviation of numeric inputs.
 */
kixi.stats.core.standard_deviation_p = kixi.stats.core.post_complete(kixi.stats.core.variance_p,kixi.stats.core.somef(kixi.stats.math.sqrt));
/**
 * Calculates the standard error of sample means.
 */
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__82534){
var vec__82535 = p__82534;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82535,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82535,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82535,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
if((c_SINGLEQUOTE_ > (0))){
return kixi.stats.math.sqrt(((ss / c_SINGLEQUOTE_) / c));
} else {
return (0);
}
}
}));
/**
 * Alias for standard-error-s
 */
kixi.stats.core.standard_error = kixi.stats.core.standard_error_s;
/**
 * Estimates the sample skewness of numeric inputs.
 *   See https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance.
 */
kixi.stats.core.skewness_s = (function() {
var kixi$stats$core$skewness_s = null;
var kixi$stats$core$skewness_s__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var kixi$stats$core$skewness_s__1 = (function (p__82540){
var vec__82545 = p__82540;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82545,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82545,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82545,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82545,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__82539,e){
var vec__82542 = p__82539;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82542,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82542,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82542,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82542,(3),null);
var acc = vec__82542;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var d = (e__$1 - m1);
var dc = (d / c_SINGLEQUOTE_);
var m1_SINGLEQUOTE_ = (m1 + dc);
var m2_SINGLEQUOTE_ = (m2 + (kixi.stats.math.sq(d) * (c / c_SINGLEQUOTE_)));
var m3_SINGLEQUOTE_ = ((m3 + (((kixi.stats.math.pow(d,(3)) * (c_SINGLEQUOTE_ - (1))) * (c_SINGLEQUOTE_ - (2))) / kixi.stats.math.sq(c_SINGLEQUOTE_))) + (((-3) * m2) * dc));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m1_SINGLEQUOTE_,m2_SINGLEQUOTE_,m3_SINGLEQUOTE_], null);
}
});
kixi$stats$core$skewness_s = function(p__82539,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__82539);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__82539,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$skewness_s.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$skewness_s__0;
kixi$stats$core$skewness_s.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$skewness_s__1;
kixi$stats$core$skewness_s.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$skewness_s__2;
return kixi$stats$core$skewness_s;
})()
;
/**
 * Alias for skewness-s.
 */
kixi.stats.core.skewness = kixi.stats.core.skewness_s;
/**
 * Calculates the population skewness of numeric inputs.
 *   See: http://www.real-statistics.com/descriptive-statistics/symmetry-skewness-kurtosis.
 */
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__82553){
var vec__82554 = p__82553;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82554,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82554,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82554,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82554,(3),null);
var d = kixi.stats.math.pow(m2,1.5);
if((d === (0))){
return null;
} else {
return ((kixi.stats.math.sqrt(c) * m3) / d);
}
}));
/**
 * Estimates the sample kurtosis of numeric inputs.
 *   See https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance
 *   and http://www.real-statistics.com/descriptive-statistics/symmetry-skewness-kurtosis.
 */
kixi.stats.core.kurtosis_s = (function() {
var kixi$stats$core$kurtosis_s = null;
var kixi$stats$core$kurtosis_s__0 = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0], null);
});
var kixi$stats$core$kurtosis_s__1 = (function (p__82559){
var vec__82563 = p__82559;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82563,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82563,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82563,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82563,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82563,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__82558,e){
var vec__82560 = p__82558;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82560,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82560,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82560,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82560,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82560,(4),null);
var acc = vec__82560;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var d = (e__$1 - m1);
var dc = (d / c_SINGLEQUOTE_);
var m1_SINGLEQUOTE_ = (m1 + dc);
var m2_SINGLEQUOTE_ = (m2 + (kixi.stats.math.sq(d) * (c / c_SINGLEQUOTE_)));
var m3_SINGLEQUOTE_ = ((m3 + (((kixi.stats.math.pow(d,(3)) * (c_SINGLEQUOTE_ - (1))) * (c_SINGLEQUOTE_ - (2))) / kixi.stats.math.sq(c_SINGLEQUOTE_))) + (((-3) * m2) * dc));
var m4_SINGLEQUOTE_ = (((m4 + (((kixi.stats.math.pow(d,(4)) * (c_SINGLEQUOTE_ - (1))) * ((kixi.stats.math.sq(c_SINGLEQUOTE_) + ((-3) * c_SINGLEQUOTE_)) + (3))) / kixi.stats.math.pow(c_SINGLEQUOTE_,(3)))) + (((6) * m2) * kixi.stats.math.sq(dc))) + (((-4) * m3) * dc));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m1_SINGLEQUOTE_,m2_SINGLEQUOTE_,m3_SINGLEQUOTE_,m4_SINGLEQUOTE_], null);
}
});
kixi$stats$core$kurtosis_s = function(p__82558,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__82558);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__82558,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$kurtosis_s.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$kurtosis_s__0;
kixi$stats$core$kurtosis_s.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$kurtosis_s__1;
kixi$stats$core$kurtosis_s.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$kurtosis_s__2;
return kixi$stats$core$kurtosis_s;
})()
;
/**
 * Alias for kurtosis-s.
 */
kixi.stats.core.kurtosis = kixi.stats.core.kurtosis_s;
/**
 * Calculates the population kurtosis of numeric inputs.
 *   See http://www.macroption.com/kurtosis-formula/
 */
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__82566){
var vec__82567 = p__82566;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82567,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82567,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82567,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82567,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82567,(4),null);
if((m2 === (0))){
return null;
} else {
return (((c * m4) / kixi.stats.math.sq(m2)) - (3));
}
}));
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, estimates the unbiased covariance of those functions over
 *   inputs.
 * 
 *   Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no
 *   inputs have both x and y, returns nil.
 */
kixi.stats.core.covariance_s = (function kixi$stats$core$covariance_s(fx,fy){
return (function() {
var G__82855 = null;
var G__82855__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__82855__1 = (function (p__82573){
var vec__82577 = p__82573;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82577,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82577,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82577,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82577,(3),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
if((c_SINGLEQUOTE_ > (0))){
return (ss / c_SINGLEQUOTE_);
} else {
return (0);
}
}
});
var G__82855__2 = (function (p__82572,e){
var vec__82574 = p__82572;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82574,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82574,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82574,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82574,(3),null);
var acc = vec__82574;
var x = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((x == null)) || ((y == null)))){
return acc;
} else {
var x__$1 = x;
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var mx_SINGLEQUOTE_ = (mx + ((x__$1 - mx) / c_SINGLEQUOTE_));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,(ss + ((x__$1 - mx_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__82855 = function(p__82572,e){
switch(arguments.length){
case 0:
return G__82855__0.call(this);
case 1:
return G__82855__1.call(this,p__82572);
case 2:
return G__82855__2.call(this,p__82572,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82855.cljs$core$IFn$_invoke$arity$0 = G__82855__0;
G__82855.cljs$core$IFn$_invoke$arity$1 = G__82855__1;
G__82855.cljs$core$IFn$_invoke$arity$2 = G__82855__2;
return G__82855;
})()
});
/**
 * Alias for covariance-s
 */
kixi.stats.core.covariance = kixi.stats.core.covariance_s;
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, estimates the population covariance of those functions over
 *   inputs.
 * 
 *   Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no
 *   inputs have both x and y, returns nil.
 */
kixi.stats.core.covariance_p = (function kixi$stats$core$covariance_p(fx,fy){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__82580){
var vec__82581 = p__82580;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82581,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82581,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82581,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82581,(3),null);
if((c === (0))){
return null;
} else {
return (ss / c);
}
}));
});
/**
 * Given a map of key names to functions that extract values for those keys
 *   from an input, computes the covariance for each of the n^2 key pairs.
 *   For example:
 * 
 *    (covariance-matrix {:name-length #(.length (:name %))
 *                        :age         :age
 *                        :num-cats    (comp count :cats)})
 * 
 *   will, when reduced, return a map like:
 * 
 *    {[:name-length :age]      0.56
 *     [:name-length :num-cats] 0.95
 *     ...}
 */
kixi.stats.core.covariance_matrix = (function kixi$stats$core$covariance_matrix(kvs){
return redux.core.fuse_matrix(kixi.stats.core.covariance,kvs);
});
/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, estimates the unbiased linear correlation coefficient between fx and
 *   fy over inputs. Ignores any records where fx or fy are nil. If there are no
 *   records with values for fx and fy, the correlation is nil. See
 *   http://mathworld.wolfram.com/CorrelationCoefficient.html.
 */
kixi.stats.core.correlation = (function kixi$stats$core$correlation(fx,fy){
return (function() {
var G__82862 = null;
var G__82862__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__82862__1 = (function (p__82585){
var vec__82589 = p__82585;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__82862__2 = (function (p__82584,e){
var vec__82586 = p__82584;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82586,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82586,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82586,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82586,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82586,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82586,(5),null);
var acc = vec__82586;
var x = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((x == null)) || ((y == null)))){
return acc;
} else {
var x__$1 = x;
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var mx_SINGLEQUOTE_ = (mx + ((x__$1 - mx) / c_SINGLEQUOTE_));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,(ssx + ((x__$1 - mx_SINGLEQUOTE_) * (x__$1 - mx))),(ssy + ((y__$1 - my_SINGLEQUOTE_) * (y__$1 - my))),(ssxy + ((x__$1 - mx_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__82862 = function(p__82584,e){
switch(arguments.length){
case 0:
return G__82862__0.call(this);
case 1:
return G__82862__1.call(this,p__82584);
case 2:
return G__82862__2.call(this,p__82584,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82862.cljs$core$IFn$_invoke$arity$0 = G__82862__0;
G__82862.cljs$core$IFn$_invoke$arity$1 = G__82862__1;
G__82862.cljs$core$IFn$_invoke$arity$2 = G__82862__2;
return G__82862;
})()
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, estimates
 *   the coefficient of determination R^2.
 *   This is the fraction of variance in y explained by the model.
 */
kixi.stats.core.r_squared = (function kixi$stats$core$r_squared(fy_hat,fy){
return (function() {
var G__82881 = null;
var G__82881__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__82881__1 = (function (p__82593){
var vec__82597 = p__82593;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82597,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82597,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82597,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82597,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__82881__2 = (function (p__82592,e){
var vec__82594 = p__82592;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82594,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82594,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82594,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82594,(3),null);
var acc = vec__82594;
var y_hat = (fy_hat.cljs$core$IFn$_invoke$arity$1 ? fy_hat.cljs$core$IFn$_invoke$arity$1(e) : fy_hat.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((y_hat == null)) || ((y == null)))){
return acc;
} else {
var r = (y - y_hat);
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,my_SINGLEQUOTE_,(ssr + (r * r)),(ssy + ((y__$1 - my_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__82881 = function(p__82592,e){
switch(arguments.length){
case 0:
return G__82881__0.call(this);
case 1:
return G__82881__1.call(this,p__82592);
case 2:
return G__82881__2.call(this,p__82592,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82881.cljs$core$IFn$_invoke$arity$0 = G__82881__0;
G__82881.cljs$core$IFn$_invoke$arity$1 = G__82881__1;
G__82881.cljs$core$IFn$_invoke$arity$2 = G__82881__2;
return G__82881;
})()
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, and a constant k
 *   equal to the number of terms in the model, estimates the adjusted
 *   coefficient of determination R^2 using Wherry's Formula-1.
 *   This is the fraction of variance in y explained by the model,
 *   adjusted for the number of terms in the model.
 *   https://stats.stackexchange.com/questions/48703/what-is-the-adjusted-r-squared-formula-in-lm-in-r-and-how-should-it-be-interpret
 */
kixi.stats.core.adjusted_r_squared = (function kixi$stats$core$adjusted_r_squared(fy_hat,fy,k){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__82600){
var vec__82601 = p__82600;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82601,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82601,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82601,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82601,(3),null);
if((((ssy > (0))) && ((((c - k) - (1)) > (0))))){
return ((1) - (((ssr / ssy) * (c - (1))) / ((c - k) - (1))));
} else {
return null;
}
}));
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, calculates
 *   the mean squared error of the estimate.
 */
kixi.stats.core.mse = (function kixi$stats$core$mse(fy_hat,fy){
return (function() {
var G__82894 = null;
var G__82894__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__82894__1 = (function (p__82605){
var vec__82609 = p__82605;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82609,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82609,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__82894__2 = (function (p__82604,e){
var vec__82606 = p__82604;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82606,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82606,(1),null);
var acc = vec__82606;
var y_hat = (fy_hat.cljs$core$IFn$_invoke$arity$1 ? fy_hat.cljs$core$IFn$_invoke$arity$1(e) : fy_hat.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((y_hat == null)) || ((y == null)))){
return acc;
} else {
var se = kixi.stats.math.sq((y - y_hat));
var c_SINGLEQUOTE_ = (c + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,(mse + ((se - mse) / c_SINGLEQUOTE_))], null);
}
});
G__82894 = function(p__82604,e){
switch(arguments.length){
case 0:
return G__82894__0.call(this);
case 1:
return G__82894__1.call(this,p__82604);
case 2:
return G__82894__2.call(this,p__82604,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82894.cljs$core$IFn$_invoke$arity$0 = G__82894__0;
G__82894.cljs$core$IFn$_invoke$arity$1 = G__82894__1;
G__82894.cljs$core$IFn$_invoke$arity$2 = G__82894__2;
return G__82894;
})()
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, calculates
 *   the root mean squared error of the estimate.
 */
kixi.stats.core.rmse = (function kixi$stats$core$rmse(fy_hat,fy){
return kixi.stats.core.post_complete(kixi.stats.core.mse(fy_hat,fy),kixi.stats.core.somef(kixi.stats.math.sqrt));
});
/**
 * Given a map of key names to functions that extract values for those keys
 *   from an input, computes the correlation for each of the n^2 key pairs.
 *   For example:
 * 
 *    (correlation-matrix {:name-length #(.length (:name %))
 *                         :age         :age
 *                         :num-cats    (comp count :cats)})
 * 
 *   will, when reduced, return a map like:
 * 
 *    {[:name-length :age]      0.56
 *     [:name-length :num-cats] 0.95
 *     ...}
 */
kixi.stats.core.correlation_matrix = (function kixi$stats$core$correlation_matrix(kvs){
return redux.core.fuse_matrix(kixi.stats.core.correlation,kvs);
});
/**
 * Cramer's Phi is the intercorrelation of two discrete variables and may be used with variables having two or more levels. It gives a value between 0 and +1 (inclusive).
 *   Given two functions: (fx input) and (fy input), each of which returns a the relevant discrete value.
 */
kixi.stats.core.cramers_v = (function kixi$stats$core$cramers_v(fx,fy){
return (function() {
var G__82900 = null;
var G__82900__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__82900__1 = (function (p__82614){
var vec__82621 = p__82614;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82621,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82621,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82621,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82621,(3),null);
var r = cljs.core.count(f1);
var r_tilde = (((n > (1)))?(r - (kixi.stats.math.sq((r - (1))) / (n - (1)))):null);
var k = cljs.core.count(f2);
var k_tilde = (((n > (1)))?(k - (kixi.stats.math.sq((k - (1))) / (n - (1)))):null);
var chi_squared = cljs.core.reduce_kv((function (acc,k__$1,v){
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(f1,cljs.core.first(k__$1));
var n2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(f2,cljs.core.last(k__$1));
var n12 = v;
return (acc + (kixi.stats.math.sq((n12 - ((n1 * n2) / n))) / ((n1 * n2) / n)));
}),(0),f12);
if(cljs.core.truth_((function (){var and__4251__auto__ = r_tilde;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = k_tilde;
if(cljs.core.truth_(and__4251__auto____$1)){
return (((r_tilde > (1))) && ((k_tilde > (1))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return kixi.stats.math.sqrt(((chi_squared / n) / (function (){var x__4339__auto__ = (r_tilde - (1));
var y__4340__auto__ = (k_tilde - (1));
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})()));
} else {
return null;
}
});
var G__82900__2 = (function (p__82613,row){
var vec__82615 = p__82613;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82615,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82615,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82615,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82615,(3),null);
var k1 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(row) : fx.call(null,row));
var k2 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(row) : fy.call(null,row));
var k12 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null);
var increment_count = (function (m,k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
var f1_SINGLEQUOTE_ = increment_count(f1,k1);
var f2_SINGLEQUOTE_ = increment_count(f2,k2);
var f12_SINGLEQUOTE_ = increment_count(f12,k12);
var n_SINGLEQUOTE_ = (n + (1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f1_SINGLEQUOTE_,f2_SINGLEQUOTE_,f12_SINGLEQUOTE_,n_SINGLEQUOTE_], null);
});
G__82900 = function(p__82613,row){
switch(arguments.length){
case 0:
return G__82900__0.call(this);
case 1:
return G__82900__1.call(this,p__82613);
case 2:
return G__82900__2.call(this,p__82613,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82900.cljs$core$IFn$_invoke$arity$0 = G__82900__0;
G__82900.cljs$core$IFn$_invoke$arity$1 = G__82900__1;
G__82900.cljs$core$IFn$_invoke$arity$2 = G__82900__2;
return G__82900;
})()
});
kixi.stats.core.sum_squares = kixi.stats.digest.sum_squares;
/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, calculates a least squares linear model between fx and fy over inputs.
 *   Returns a vector containing the coefficients: offset and slope.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the linear relationship is nil. See
 *   https://en.wikipedia.org/wiki/Simple_linear_regression.
 */
kixi.stats.core.simple_linear_regression = (function kixi$stats$core$simple_linear_regression(fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),kixi.stats.estimate.simple_linear_regression);
});
/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_standard_error = (function kixi$stats$core$regression_standard_error(var_args){
var G__82631 = arguments.length;
switch (G__82631) {
case 2:
return kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core82632 = (function (fx,fy,sum_squares,meta82633){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta82633 = meta82633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82634,meta82633__$1){
var self__ = this;
var _82634__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82632(self__.fx,self__.fy,self__.sum_squares,meta82633__$1));
}));

(kixi.stats.core.t_kixi$stats$core82632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82634){
var self__ = this;
var _82634__$1 = this;
return self__.meta82633;
}));

(kixi.stats.core.t_kixi$stats$core82632.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82632.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core82632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta82633","meta82633",22019418,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82632.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82632.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82632");

(kixi.stats.core.t_kixi$stats$core82632.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82632");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82632.
 */
kixi.stats.core.__GT_t_kixi$stats$core82632 = (function kixi$stats$core$__GT_t_kixi$stats$core82632(fx__$1,fy__$1,sum_squares__$1,meta82633){
return (new kixi.stats.core.t_kixi$stats$core82632(fx__$1,fy__$1,sum_squares__$1,meta82633));
});

}

return (new kixi.stats.core.t_kixi$stats$core82632(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__82629_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__82629_SHARP_,x);
}));
}));

(kixi.stats.core.regression_standard_error.cljs$lang$maxFixedArity = 3);

/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_confidence_interval = (function kixi$stats$core$regression_confidence_interval(var_args){
var G__82639 = arguments.length;
switch (G__82639) {
case 2:
return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core82643 = (function (fx,fy,sum_squares,meta82644){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta82644 = meta82644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82645,meta82644__$1){
var self__ = this;
var _82645__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82643(self__.fx,self__.fy,self__.sum_squares,meta82644__$1));
}));

(kixi.stats.core.t_kixi$stats$core82643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82645){
var self__ = this;
var _82645__$1 = this;
return self__.meta82644;
}));

(kixi.stats.core.t_kixi$stats$core82643.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82643.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core82643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta82644","meta82644",-1156269101,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82643.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82643.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82643");

(kixi.stats.core.t_kixi$stats$core82643.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82643");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82643.
 */
kixi.stats.core.__GT_t_kixi$stats$core82643 = (function kixi$stats$core$__GT_t_kixi$stats$core82643(fx__$1,fy__$1,sum_squares__$1,meta82644){
return (new kixi.stats.core.t_kixi$stats$core82643(fx__$1,fy__$1,sum_squares__$1,meta82644));
});

}

return (new kixi.stats.core.t_kixi$stats$core82643(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core82651 = (function (fx,fy,alpha,sum_squares,meta82652){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta82652 = meta82652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82653,meta82652__$1){
var self__ = this;
var _82653__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82651(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta82652__$1));
}));

(kixi.stats.core.t_kixi$stats$core82651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82653){
var self__ = this;
var _82653__$1 = this;
return self__.meta82652;
}));

(kixi.stats.core.t_kixi$stats$core82651.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82651.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core82651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta82652","meta82652",-2096571702,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82651.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82651.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82651");

(kixi.stats.core.t_kixi$stats$core82651.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82651");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82651.
 */
kixi.stats.core.__GT_t_kixi$stats$core82651 = (function kixi$stats$core$__GT_t_kixi$stats$core82651(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta82652){
return (new kixi.stats.core.t_kixi$stats$core82651(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta82652));
});

}

return (new kixi.stats.core.t_kixi$stats$core82651(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__82635_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__82635_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_prediction_standard_error = (function kixi$stats$core$regression_prediction_standard_error(var_args){
var G__82665 = arguments.length;
switch (G__82665) {
case 2:
return kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if(cljs.core.truth_(sum_squares)){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core82667 = (function (fx,fy,sum_squares,meta82668){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta82668 = meta82668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82669,meta82668__$1){
var self__ = this;
var _82669__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82667(self__.fx,self__.fy,self__.sum_squares,meta82668__$1));
}));

(kixi.stats.core.t_kixi$stats$core82667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82669){
var self__ = this;
var _82669__$1 = this;
return self__.meta82668;
}));

(kixi.stats.core.t_kixi$stats$core82667.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82667.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core82667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta82668","meta82668",509249030,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82667.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82667.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82667");

(kixi.stats.core.t_kixi$stats$core82667.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82667");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82667.
 */
kixi.stats.core.__GT_t_kixi$stats$core82667 = (function kixi$stats$core$__GT_t_kixi$stats$core82667(fx__$1,fy__$1,sum_squares__$1,meta82668){
return (new kixi.stats.core.t_kixi$stats$core82667(fx__$1,fy__$1,sum_squares__$1,meta82668));
});

}

return (new kixi.stats.core.t_kixi$stats$core82667(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__82662_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__82662_SHARP_,x);
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$lang$maxFixedArity = 3);

/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_prediction_confidence_interval = (function kixi$stats$core$regression_prediction_confidence_interval(var_args){
var G__82678 = arguments.length;
switch (G__82678) {
case 2:
return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core82683 = (function (fx,fy,sum_squares,meta82684){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta82684 = meta82684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82685,meta82684__$1){
var self__ = this;
var _82685__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82683(self__.fx,self__.fy,self__.sum_squares,meta82684__$1));
}));

(kixi.stats.core.t_kixi$stats$core82683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82685){
var self__ = this;
var _82685__$1 = this;
return self__.meta82684;
}));

(kixi.stats.core.t_kixi$stats$core82683.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82683.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core82683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta82684","meta82684",-1815813127,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82683.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82683.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82683");

(kixi.stats.core.t_kixi$stats$core82683.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82683");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82683.
 */
kixi.stats.core.__GT_t_kixi$stats$core82683 = (function kixi$stats$core$__GT_t_kixi$stats$core82683(fx__$1,fy__$1,sum_squares__$1,meta82684){
return (new kixi.stats.core.t_kixi$stats$core82683(fx__$1,fy__$1,sum_squares__$1,meta82684));
});

}

return (new kixi.stats.core.t_kixi$stats$core82683(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core82690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core82690 = (function (fx,fy,alpha,sum_squares,meta82691){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta82691 = meta82691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core82690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82692,meta82691__$1){
var self__ = this;
var _82692__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core82690(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta82691__$1));
}));

(kixi.stats.core.t_kixi$stats$core82690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82692){
var self__ = this;
var _82692__$1 = this;
return self__.meta82691;
}));

(kixi.stats.core.t_kixi$stats$core82690.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core82690.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core82690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta82691","meta82691",1385433578,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core82690.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core82690.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core82690");

(kixi.stats.core.t_kixi$stats$core82690.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core82690");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core82690.
 */
kixi.stats.core.__GT_t_kixi$stats$core82690 = (function kixi$stats$core$__GT_t_kixi$stats$core82690(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta82691){
return (new kixi.stats.core.t_kixi$stats$core82690(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta82691));
});

}

return (new kixi.stats.core.t_kixi$stats$core82690(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__82676_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__82676_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82932 = arguments.length;
var i__4865__auto___82933 = (0);
while(true){
if((i__4865__auto___82933 < len__4864__auto___82932)){
args__4870__auto__.push((arguments[i__4865__auto___82933]));

var G__82934 = (i__4865__auto___82933 + (1));
i__4865__auto___82933 = G__82934;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic = (function (fxs){
return kixi.stats.core.post_complete(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.cross_tabulate,fxs),kixi.stats.test.chi_squared_test);
}));

(kixi.stats.core.chi_squared_test.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq82696){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82696));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__82705){
var map__82706 = p__82705;
var map__82706__$1 = cljs.core.__destructure_map(map__82706);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82706__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82706__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__82711){
var vec__82712 = p__82711;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82712,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82712,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__82715){
var vec__82716 = p__82715;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
var var$ = (((c_SINGLEQUOTE_ > (0)))?(ss / c_SINGLEQUOTE_):(0));
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt(var$)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),m,new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
}
});
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, performs the t test of mean significance of those functions over
 *   inputs.
 *   Ignores only inputs where both `(fx input)` and `(fy input)` are nil.
 */
kixi.stats.core.t_test = (function kixi$stats$core$t_test(fx,fy){
return (function() {
var G__82945 = null;
var G__82945__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__82945__1 = (function (p__82720){
var vec__82736 = p__82720;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__82945__2 = (function (p__82719,e){
var vec__82721 = p__82719;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82721,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82721,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82721,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82721,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82721,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82721,(5),null);
var acc = vec__82721;
var x = (function (){var G__82724 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__82724 == null)){
return null;
} else {
return G__82724;
}
})();
var y = (function (){var G__82725 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__82725 == null)){
return null;
} else {
return G__82725;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__82726 = cx;
if(cljs.core.truth_(x)){
return (G__82726 + (1));
} else {
return G__82726;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__82727 = cy;
if(cljs.core.truth_(y)){
return (G__82727 + (1));
} else {
return G__82727;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__82731 = mx;
if(cljs.core.truth_(x)){
return (G__82731 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__82731;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__82732 = my;
if(cljs.core.truth_(y)){
return (G__82732 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__82732;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__82733 = ssx;
if(cljs.core.truth_(x)){
return (G__82733 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__82733;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__82734 = ssy;
if(cljs.core.truth_(y)){
return (G__82734 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__82734;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__82945 = function(p__82719,e){
switch(arguments.length){
case 0:
return G__82945__0.call(this);
case 1:
return G__82945__1.call(this,p__82719);
case 2:
return G__82945__2.call(this,p__82719,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82945.cljs$core$IFn$_invoke$arity$0 = G__82945__0;
G__82945.cljs$core$IFn$_invoke$arity$1 = G__82945__1;
G__82945.cljs$core$IFn$_invoke$arity$2 = G__82945__2;
return G__82945;
})()
});
/**
 * Performs a simple z test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__82746){
var map__82747 = p__82746;
var map__82747__$1 = cljs.core.__destructure_map(map__82747);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82747__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82747__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__82750){
var vec__82751 = p__82750;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82751,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82751,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__82754){
var vec__82755 = p__82754;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82755,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82755,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82755,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
var var$ = (((c_SINGLEQUOTE_ > (0)))?(ss / c_SINGLEQUOTE_):(0));
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt(var$)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),m,new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
}
});
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, performs the z-test of mean significance of those functions over
 *   inputs.
 * 
 *   Ignores only inputs where both `(fx input)` and `(fy input)` are nil.
 */
kixi.stats.core.z_test = (function kixi$stats$core$z_test(fx,fy){
return (function() {
var G__82958 = null;
var G__82958__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__82958__1 = (function (p__82760){
var vec__82778 = p__82760;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82778,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82778,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82778,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82778,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82778,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82778,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__82958__2 = (function (p__82759,e){
var vec__82761 = p__82759;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82761,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82761,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82761,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82761,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82761,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82761,(5),null);
var acc = vec__82761;
var x = (function (){var G__82764 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__82764 == null)){
return null;
} else {
return G__82764;
}
})();
var y = (function (){var G__82768 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__82768 == null)){
return null;
} else {
return G__82768;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__82769 = cx;
if(cljs.core.truth_(x)){
return (G__82769 + (1));
} else {
return G__82769;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__82770 = cy;
if(cljs.core.truth_(y)){
return (G__82770 + (1));
} else {
return G__82770;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__82771 = mx;
if(cljs.core.truth_(x)){
return (G__82771 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__82771;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__82772 = my;
if(cljs.core.truth_(y)){
return (G__82772 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__82772;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__82773 = ssx;
if(cljs.core.truth_(x)){
return (G__82773 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__82773;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__82774 = ssy;
if(cljs.core.truth_(y)){
return (G__82774 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__82774;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__82958 = function(p__82759,e){
switch(arguments.length){
case 0:
return G__82958__0.call(this);
case 1:
return G__82958__1.call(this,p__82759);
case 2:
return G__82958__2.call(this,p__82759,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82958.cljs$core$IFn$_invoke$arity$0 = G__82958__0;
G__82958.cljs$core$IFn$_invoke$arity$1 = G__82958__1;
G__82958.cljs$core$IFn$_invoke$arity$2 = G__82958__2;
return G__82958;
})()
});
/**
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__82962 = null;
var G__82962__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__82962__1 = (function (p__82782){
var vec__82795 = p__82782;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82795,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82795,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__82962__2 = (function (p__82781,e){
var vec__82783 = p__82781;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82783,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82783,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__82794 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__82794 + (1));
} else {
return G__82794;
}
})(),(d + (1))],null));
});
G__82962 = function(p__82781,e){
switch(arguments.length){
case 0:
return G__82962__0.call(this);
case 1:
return G__82962__1.call(this,p__82781);
case 2:
return G__82962__2.call(this,p__82781,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82962.cljs$core$IFn$_invoke$arity$0 = G__82962__0;
G__82962.cljs$core$IFn$_invoke$arity$1 = G__82962__1;
G__82962.cljs$core$IFn$_invoke$arity$2 = G__82962__2;
return G__82962;
})()
});
/**
 * Alias for proportion
 */
kixi.stats.core.share = kixi.stats.core.proportion;
/**
 * Like clojure.core/min, but transducer and nil-friendly.
 */
kixi.stats.core.min = (function() {
var kixi$stats$core$min = null;
var kixi$stats$core$min__0 = (function (){
return kixi.stats.math.infinity;
});
var kixi$stats$core$min__1 = (function (acc){
if(kixi.stats.math.infinite_QMARK_(acc)){
return null;
} else {
return acc;
}
});
var kixi$stats$core$min__2 = (function (acc,e){
if((e == null)){
return acc;
} else {
var e__$1 = e;
var x__4339__auto__ = acc;
var y__4340__auto__ = e__$1;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
}
});
kixi$stats$core$min = function(acc,e){
switch(arguments.length){
case 0:
return kixi$stats$core$min__0.call(this);
case 1:
return kixi$stats$core$min__1.call(this,acc);
case 2:
return kixi$stats$core$min__2.call(this,acc,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$min.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$min__0;
kixi$stats$core$min.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$min__1;
kixi$stats$core$min.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$min__2;
return kixi$stats$core$min;
})()
;
/**
 * Like clojure.core/max, but transducer and nil-friendly.
 */
kixi.stats.core.max = (function() {
var kixi$stats$core$max = null;
var kixi$stats$core$max__0 = (function (){
return kixi.stats.math.negative_infinity;
});
var kixi$stats$core$max__1 = (function (acc){
if(kixi.stats.math.infinite_QMARK_(acc)){
return null;
} else {
return acc;
}
});
var kixi$stats$core$max__2 = (function (acc,e){
if((e == null)){
return acc;
} else {
var e__$1 = e;
var x__4336__auto__ = acc;
var y__4337__auto__ = e__$1;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}
});
kixi$stats$core$max = function(acc,e){
switch(arguments.length){
case 0:
return kixi$stats$core$max__0.call(this);
case 1:
return kixi$stats$core$max__1.call(this,acc);
case 2:
return kixi$stats$core$max__2.call(this,acc,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$max.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$max__0;
kixi$stats$core$max.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$max__1;
kixi$stats$core$max.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$max__2;
return kixi$stats$core$max;
})()
;

//# sourceMappingURL=kixi.stats.core.js.map
