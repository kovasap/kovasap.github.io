goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43871 = arguments.length;
var i__4865__auto___43872 = (0);
while(true){
if((i__4865__auto___43872 < len__4864__auto___43871)){
args__4870__auto__.push((arguments[i__4865__auto___43872]));

var G__43873 = (i__4865__auto___43872 + (1));
i__4865__auto___43872 = G__43873;
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
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq43468){
var G__43469 = cljs.core.first(seq43468);
var seq43468__$1 = cljs.core.next(seq43468);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43469,seq43468__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__43874 = null;
var G__43874__0 = (function (){
return init;
});
var G__43874__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__43874__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__43874 = function(acc,x){
switch(arguments.length){
case 0:
return G__43874__0.call(this);
case 1:
return G__43874__1.call(this,acc);
case 2:
return G__43874__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43874.cljs$core$IFn$_invoke$arity$0 = G__43874__0;
G__43874.cljs$core$IFn$_invoke$arity$1 = G__43874__1;
G__43874.cljs$core$IFn$_invoke$arity$2 = G__43874__2;
return G__43874;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__43479_SHARP_){
var G__43487 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__43479_SHARP_) : rf.call(null,p1__43479_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43487) : f.call(null,G__43487));
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
var len__4864__auto___43875 = arguments.length;
var i__4865__auto___43876 = (0);
while(true){
if((i__4865__auto___43876 < len__4864__auto___43875)){
args__4870__auto__.push((arguments[i__4865__auto___43876]));

var G__43877 = (i__4865__auto___43876 + (1));
i__4865__auto___43876 = G__43877;
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
var G__43878 = null;
var G__43878__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__43878__1 = (function (p__43493){
var vec__43501 = p__43493;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43501,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43501,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43501,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43504 = (function (cells,fxs,n,k,dimensions,vec__43501,inc,margins,p__43493,f,meta43505){
this.cells = cells;
this.fxs = fxs;
this.n = n;
this.k = k;
this.dimensions = dimensions;
this.vec__43501 = vec__43501;
this.inc = inc;
this.margins = margins;
this.p__43493 = p__43493;
this.f = f;
this.meta43505 = meta43505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43506,meta43505__$1){
var self__ = this;
var _43506__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43504(self__.cells,self__.fxs,self__.n,self__.k,self__.dimensions,self__.vec__43501,self__.inc,self__.margins,self__.p__43493,self__.f,meta43505__$1));
}));

(kixi.stats.core.t_kixi$stats$core43504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43506){
var self__ = this;
var _43506__$1 = this;
return self__.meta43505;
}));

(kixi.stats.core.t_kixi$stats$core43504.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43504.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core43504.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core43504.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core43504.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core43504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"vec__43501","vec__43501",-1136889833,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"p__43493","p__43493",402219932,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta43505","meta43505",1636929153,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43504.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43504.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43504");

(kixi.stats.core.t_kixi$stats$core43504.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43504");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43504.
 */
kixi.stats.core.__GT_t_kixi$stats$core43504 = (function kixi$stats$core$__GT_t_kixi$stats$core43504(cells__$1,fxs__$1,n__$1,k__$1,dimensions__$1,vec__43501__$1,inc__$1,margins__$1,p__43493__$1,f__$1,meta43505){
return (new kixi.stats.core.t_kixi$stats$core43504(cells__$1,fxs__$1,n__$1,k__$1,dimensions__$1,vec__43501__$1,inc__$1,margins__$1,p__43493__$1,f__$1,meta43505));
});

}

return (new kixi.stats.core.t_kixi$stats$core43504(cells,fxs,n,k,dimensions,vec__43501,inc,margins,p__43493,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__43878__2 = (function (p__43492,x){
var vec__43494 = p__43492;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43494,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43494,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43494,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43497,fx){
var vec__43498 = p__43497;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__43878 = function(p__43492,x){
switch(arguments.length){
case 0:
return G__43878__0.call(this);
case 1:
return G__43878__1.call(this,p__43492);
case 2:
return G__43878__2.call(this,p__43492,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43878.cljs$core$IFn$_invoke$arity$0 = G__43878__0;
G__43878.cljs$core$IFn$_invoke$arity$1 = G__43878__1;
G__43878.cljs$core$IFn$_invoke$arity$2 = G__43878__2;
return G__43878;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq43488){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43488));
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
var kixi$stats$core$arithmetic_mean__1 = (function (p__43536){
var vec__43544 = p__43536;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43544,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43544,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__43535,e){
var vec__43537 = p__43535;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43537,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43537,(1),null);
var acc = vec__43537;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__43535,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__43535);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__43535,e);
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
var kixi$stats$core$geometric_mean__1 = (function (p__43548){
var vec__43553 = p__43548;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43553,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43553,(1),null);
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
var kixi$stats$core$geometric_mean__2 = (function (p__43547,e){
var vec__43549 = p__43547;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43549,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43549,(1),null);
var acc = vec__43549;
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
kixi$stats$core$geometric_mean = function(p__43547,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__43547);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__43547,e);
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
var kixi$stats$core$harmonic_mean__1 = (function (p__43603){
var vec__43610 = p__43603;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43610,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43610,(1),null);
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
var kixi$stats$core$harmonic_mean__2 = (function (p__43602,e){
var vec__43604 = p__43602;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43604,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43604,(1),null);
var acc = vec__43604;
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
kixi$stats$core$harmonic_mean = function(p__43602,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__43602);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__43602,e);
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
var kixi$stats$core$variance_s__1 = (function (p__43615){
var vec__43620 = p__43615;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43620,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43620,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43620,(2),null);
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
var kixi$stats$core$variance_s__2 = (function (p__43614,e){
var vec__43616 = p__43614;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43616,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43616,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43616,(2),null);
var acc = vec__43616;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__43614,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__43614);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__43614,e);
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
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__43623){
var vec__43624 = p__43623;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43624,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43624,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43624,(2),null);
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
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__43627){
var vec__43628 = p__43627;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43628,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43628,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43628,(2),null);
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
var kixi$stats$core$skewness_s__1 = (function (p__43632){
var vec__43636 = p__43632;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__43631,e){
var vec__43633 = p__43631;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(3),null);
var acc = vec__43633;
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
kixi$stats$core$skewness_s = function(p__43631,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__43631);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__43631,e);
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
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__43639){
var vec__43640 = p__43639;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(3),null);
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
var kixi$stats$core$kurtosis_s__1 = (function (p__43644){
var vec__43648 = p__43644;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43648,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43648,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43648,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43648,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43648,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__43643,e){
var vec__43645 = p__43643;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(4),null);
var acc = vec__43645;
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
kixi$stats$core$kurtosis_s = function(p__43643,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__43643);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__43643,e);
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
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__43651){
var vec__43652 = p__43651;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43652,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43652,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43652,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43652,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43652,(4),null);
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
var G__43906 = null;
var G__43906__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__43906__1 = (function (p__43656){
var vec__43660 = p__43656;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(3),null);
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
var G__43906__2 = (function (p__43655,e){
var vec__43657 = p__43655;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43657,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43657,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43657,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43657,(3),null);
var acc = vec__43657;
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
G__43906 = function(p__43655,e){
switch(arguments.length){
case 0:
return G__43906__0.call(this);
case 1:
return G__43906__1.call(this,p__43655);
case 2:
return G__43906__2.call(this,p__43655,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43906.cljs$core$IFn$_invoke$arity$0 = G__43906__0;
G__43906.cljs$core$IFn$_invoke$arity$1 = G__43906__1;
G__43906.cljs$core$IFn$_invoke$arity$2 = G__43906__2;
return G__43906;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__43663){
var vec__43664 = p__43663;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43664,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43664,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43664,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43664,(3),null);
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
var G__43907 = null;
var G__43907__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__43907__1 = (function (p__43668){
var vec__43672 = p__43668;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__43907__2 = (function (p__43667,e){
var vec__43669 = p__43667;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(5),null);
var acc = vec__43669;
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
G__43907 = function(p__43667,e){
switch(arguments.length){
case 0:
return G__43907__0.call(this);
case 1:
return G__43907__1.call(this,p__43667);
case 2:
return G__43907__2.call(this,p__43667,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43907.cljs$core$IFn$_invoke$arity$0 = G__43907__0;
G__43907.cljs$core$IFn$_invoke$arity$1 = G__43907__1;
G__43907.cljs$core$IFn$_invoke$arity$2 = G__43907__2;
return G__43907;
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
var G__43909 = null;
var G__43909__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__43909__1 = (function (p__43676){
var vec__43680 = p__43676;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43680,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43680,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43680,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43680,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__43909__2 = (function (p__43675,e){
var vec__43677 = p__43675;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(3),null);
var acc = vec__43677;
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
G__43909 = function(p__43675,e){
switch(arguments.length){
case 0:
return G__43909__0.call(this);
case 1:
return G__43909__1.call(this,p__43675);
case 2:
return G__43909__2.call(this,p__43675,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43909.cljs$core$IFn$_invoke$arity$0 = G__43909__0;
G__43909.cljs$core$IFn$_invoke$arity$1 = G__43909__1;
G__43909.cljs$core$IFn$_invoke$arity$2 = G__43909__2;
return G__43909;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__43687){
var vec__43689 = p__43687;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43689,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43689,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43689,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43689,(3),null);
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
var G__43912 = null;
var G__43912__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__43912__1 = (function (p__43695){
var vec__43700 = p__43695;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43700,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43700,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__43912__2 = (function (p__43694,e){
var vec__43697 = p__43694;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43697,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43697,(1),null);
var acc = vec__43697;
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
G__43912 = function(p__43694,e){
switch(arguments.length){
case 0:
return G__43912__0.call(this);
case 1:
return G__43912__1.call(this,p__43694);
case 2:
return G__43912__2.call(this,p__43694,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43912.cljs$core$IFn$_invoke$arity$0 = G__43912__0;
G__43912.cljs$core$IFn$_invoke$arity$1 = G__43912__1;
G__43912.cljs$core$IFn$_invoke$arity$2 = G__43912__2;
return G__43912;
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
var G__43913 = null;
var G__43913__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__43913__1 = (function (p__43712){
var vec__43717 = p__43712;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43717,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43717,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43717,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43717,(3),null);
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
var G__43913__2 = (function (p__43711,row){
var vec__43713 = p__43711;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43713,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43713,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43713,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43713,(3),null);
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
G__43913 = function(p__43711,row){
switch(arguments.length){
case 0:
return G__43913__0.call(this);
case 1:
return G__43913__1.call(this,p__43711);
case 2:
return G__43913__2.call(this,p__43711,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43913.cljs$core$IFn$_invoke$arity$0 = G__43913__0;
G__43913.cljs$core$IFn$_invoke$arity$1 = G__43913__1;
G__43913.cljs$core$IFn$_invoke$arity$2 = G__43913__2;
return G__43913;
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
var G__43739 = arguments.length;
switch (G__43739) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43740 = (function (fx,fy,sum_squares,meta43741){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43741 = meta43741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43742,meta43741__$1){
var self__ = this;
var _43742__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43740(self__.fx,self__.fy,self__.sum_squares,meta43741__$1));
}));

(kixi.stats.core.t_kixi$stats$core43740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43742){
var self__ = this;
var _43742__$1 = this;
return self__.meta43741;
}));

(kixi.stats.core.t_kixi$stats$core43740.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43740.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core43740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43741","meta43741",-725169338,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43740.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43740.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43740");

(kixi.stats.core.t_kixi$stats$core43740.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43740");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43740.
 */
kixi.stats.core.__GT_t_kixi$stats$core43740 = (function kixi$stats$core$__GT_t_kixi$stats$core43740(fx__$1,fy__$1,sum_squares__$1,meta43741){
return (new kixi.stats.core.t_kixi$stats$core43740(fx__$1,fy__$1,sum_squares__$1,meta43741));
});

}

return (new kixi.stats.core.t_kixi$stats$core43740(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43734_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__43734_SHARP_,x);
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
var G__43748 = arguments.length;
switch (G__43748) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core43749 = (function (fx,fy,sum_squares,meta43750){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43750 = meta43750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43751,meta43750__$1){
var self__ = this;
var _43751__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43749(self__.fx,self__.fy,self__.sum_squares,meta43750__$1));
}));

(kixi.stats.core.t_kixi$stats$core43749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43751){
var self__ = this;
var _43751__$1 = this;
return self__.meta43750;
}));

(kixi.stats.core.t_kixi$stats$core43749.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43749.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core43749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43750","meta43750",1433327186,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43749.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43749.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43749");

(kixi.stats.core.t_kixi$stats$core43749.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43749");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43749.
 */
kixi.stats.core.__GT_t_kixi$stats$core43749 = (function kixi$stats$core$__GT_t_kixi$stats$core43749(fx__$1,fy__$1,sum_squares__$1,meta43750){
return (new kixi.stats.core.t_kixi$stats$core43749(fx__$1,fy__$1,sum_squares__$1,meta43750));
});

}

return (new kixi.stats.core.t_kixi$stats$core43749(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43754 = (function (fx,fy,alpha,sum_squares,meta43755){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta43755 = meta43755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43756,meta43755__$1){
var self__ = this;
var _43756__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43754(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta43755__$1));
}));

(kixi.stats.core.t_kixi$stats$core43754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43756){
var self__ = this;
var _43756__$1 = this;
return self__.meta43755;
}));

(kixi.stats.core.t_kixi$stats$core43754.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43754.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core43754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43755","meta43755",1604204866,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43754.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43754.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43754");

(kixi.stats.core.t_kixi$stats$core43754.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43754");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43754.
 */
kixi.stats.core.__GT_t_kixi$stats$core43754 = (function kixi$stats$core$__GT_t_kixi$stats$core43754(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43755){
return (new kixi.stats.core.t_kixi$stats$core43754(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43755));
});

}

return (new kixi.stats.core.t_kixi$stats$core43754(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43744_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__43744_SHARP_,x,alpha);
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
var G__43759 = arguments.length;
switch (G__43759) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43760 = (function (fx,fy,sum_squares,meta43761){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43761 = meta43761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43762,meta43761__$1){
var self__ = this;
var _43762__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43760(self__.fx,self__.fy,self__.sum_squares,meta43761__$1));
}));

(kixi.stats.core.t_kixi$stats$core43760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43762){
var self__ = this;
var _43762__$1 = this;
return self__.meta43761;
}));

(kixi.stats.core.t_kixi$stats$core43760.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43760.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core43760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43761","meta43761",1405647890,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43760.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43760.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43760");

(kixi.stats.core.t_kixi$stats$core43760.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43760");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43760.
 */
kixi.stats.core.__GT_t_kixi$stats$core43760 = (function kixi$stats$core$__GT_t_kixi$stats$core43760(fx__$1,fy__$1,sum_squares__$1,meta43761){
return (new kixi.stats.core.t_kixi$stats$core43760(fx__$1,fy__$1,sum_squares__$1,meta43761));
});

}

return (new kixi.stats.core.t_kixi$stats$core43760(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43757_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__43757_SHARP_,x);
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
var G__43765 = arguments.length;
switch (G__43765) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core43766 = (function (fx,fy,sum_squares,meta43767){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43767 = meta43767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43768,meta43767__$1){
var self__ = this;
var _43768__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43766(self__.fx,self__.fy,self__.sum_squares,meta43767__$1));
}));

(kixi.stats.core.t_kixi$stats$core43766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43768){
var self__ = this;
var _43768__$1 = this;
return self__.meta43767;
}));

(kixi.stats.core.t_kixi$stats$core43766.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43766.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core43766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43767","meta43767",-1070474679,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43766.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43766.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43766");

(kixi.stats.core.t_kixi$stats$core43766.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43766");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43766.
 */
kixi.stats.core.__GT_t_kixi$stats$core43766 = (function kixi$stats$core$__GT_t_kixi$stats$core43766(fx__$1,fy__$1,sum_squares__$1,meta43767){
return (new kixi.stats.core.t_kixi$stats$core43766(fx__$1,fy__$1,sum_squares__$1,meta43767));
});

}

return (new kixi.stats.core.t_kixi$stats$core43766(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43772 = (function (fx,fy,alpha,sum_squares,meta43773){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta43773 = meta43773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43774,meta43773__$1){
var self__ = this;
var _43774__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43772(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta43773__$1));
}));

(kixi.stats.core.t_kixi$stats$core43772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43774){
var self__ = this;
var _43774__$1 = this;
return self__.meta43773;
}));

(kixi.stats.core.t_kixi$stats$core43772.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43772.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core43772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43773","meta43773",1674824517,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43772.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43772.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43772");

(kixi.stats.core.t_kixi$stats$core43772.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43772");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43772.
 */
kixi.stats.core.__GT_t_kixi$stats$core43772 = (function kixi$stats$core$__GT_t_kixi$stats$core43772(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43773){
return (new kixi.stats.core.t_kixi$stats$core43772(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43773));
});

}

return (new kixi.stats.core.t_kixi$stats$core43772(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43763_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__43763_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43935 = arguments.length;
var i__4865__auto___43936 = (0);
while(true){
if((i__4865__auto___43936 < len__4864__auto___43935)){
args__4870__auto__.push((arguments[i__4865__auto___43936]));

var G__43937 = (i__4865__auto___43936 + (1));
i__4865__auto___43936 = G__43937;
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
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq43775){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43775));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__43776){
var map__43777 = p__43776;
var map__43777__$1 = cljs.core.__destructure_map(map__43777);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43777__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43777__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__43778){
var vec__43779 = p__43778;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__43783){
var vec__43784 = p__43783;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43784,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43784,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43784,(2),null);
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
var G__43940 = null;
var G__43940__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__43940__1 = (function (p__43792){
var vec__43811 = p__43792;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__43940__2 = (function (p__43791,e){
var vec__43793 = p__43791;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(5),null);
var acc = vec__43793;
var x = (function (){var G__43798 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__43798 == null)){
return null;
} else {
return G__43798;
}
})();
var y = (function (){var G__43799 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__43799 == null)){
return null;
} else {
return G__43799;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__43802 = cx;
if(cljs.core.truth_(x)){
return (G__43802 + (1));
} else {
return G__43802;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__43803 = cy;
if(cljs.core.truth_(y)){
return (G__43803 + (1));
} else {
return G__43803;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__43804 = mx;
if(cljs.core.truth_(x)){
return (G__43804 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__43804;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__43805 = my;
if(cljs.core.truth_(y)){
return (G__43805 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__43805;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__43807 = ssx;
if(cljs.core.truth_(x)){
return (G__43807 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__43807;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__43809 = ssy;
if(cljs.core.truth_(y)){
return (G__43809 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__43809;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__43940 = function(p__43791,e){
switch(arguments.length){
case 0:
return G__43940__0.call(this);
case 1:
return G__43940__1.call(this,p__43791);
case 2:
return G__43940__2.call(this,p__43791,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43940.cljs$core$IFn$_invoke$arity$0 = G__43940__0;
G__43940.cljs$core$IFn$_invoke$arity$1 = G__43940__1;
G__43940.cljs$core$IFn$_invoke$arity$2 = G__43940__2;
return G__43940;
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
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__43820){
var map__43821 = p__43820;
var map__43821__$1 = cljs.core.__destructure_map(map__43821);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43821__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43821__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__43822){
var vec__43823 = p__43822;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43823,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43823,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__43826){
var vec__43827 = p__43826;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(2),null);
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
var G__43942 = null;
var G__43942__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__43942__1 = (function (p__43835){
var vec__43849 = p__43835;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43849,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43849,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43849,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43849,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43849,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43849,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__43942__2 = (function (p__43834,e){
var vec__43836 = p__43834;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(5),null);
var acc = vec__43836;
var x = (function (){var G__43839 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__43839 == null)){
return null;
} else {
return G__43839;
}
})();
var y = (function (){var G__43840 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__43840 == null)){
return null;
} else {
return G__43840;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__43842 = cx;
if(cljs.core.truth_(x)){
return (G__43842 + (1));
} else {
return G__43842;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__43843 = cy;
if(cljs.core.truth_(y)){
return (G__43843 + (1));
} else {
return G__43843;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__43844 = mx;
if(cljs.core.truth_(x)){
return (G__43844 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__43844;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__43845 = my;
if(cljs.core.truth_(y)){
return (G__43845 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__43845;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__43846 = ssx;
if(cljs.core.truth_(x)){
return (G__43846 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__43846;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__43847 = ssy;
if(cljs.core.truth_(y)){
return (G__43847 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__43847;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__43942 = function(p__43834,e){
switch(arguments.length){
case 0:
return G__43942__0.call(this);
case 1:
return G__43942__1.call(this,p__43834);
case 2:
return G__43942__2.call(this,p__43834,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43942.cljs$core$IFn$_invoke$arity$0 = G__43942__0;
G__43942.cljs$core$IFn$_invoke$arity$1 = G__43942__1;
G__43942.cljs$core$IFn$_invoke$arity$2 = G__43942__2;
return G__43942;
})()
});
/**
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__43945 = null;
var G__43945__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__43945__1 = (function (p__43856){
var vec__43863 = p__43856;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43863,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43863,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__43945__2 = (function (p__43855,e){
var vec__43858 = p__43855;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43858,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43858,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__43862 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__43862 + (1));
} else {
return G__43862;
}
})(),(d + (1))],null));
});
G__43945 = function(p__43855,e){
switch(arguments.length){
case 0:
return G__43945__0.call(this);
case 1:
return G__43945__1.call(this,p__43855);
case 2:
return G__43945__2.call(this,p__43855,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43945.cljs$core$IFn$_invoke$arity$0 = G__43945__0;
G__43945.cljs$core$IFn$_invoke$arity$1 = G__43945__1;
G__43945.cljs$core$IFn$_invoke$arity$2 = G__43945__2;
return G__43945;
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
