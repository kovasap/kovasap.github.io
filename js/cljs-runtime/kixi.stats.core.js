goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45585 = arguments.length;
var i__4865__auto___45586 = (0);
while(true){
if((i__4865__auto___45586 < len__4864__auto___45585)){
args__4870__auto__.push((arguments[i__4865__auto___45586]));

var G__45587 = (i__4865__auto___45586 + (1));
i__4865__auto___45586 = G__45587;
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
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq45001){
var G__45002 = cljs.core.first(seq45001);
var seq45001__$1 = cljs.core.next(seq45001);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45002,seq45001__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__45588 = null;
var G__45588__0 = (function (){
return init;
});
var G__45588__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__45588__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__45588 = function(acc,x){
switch(arguments.length){
case 0:
return G__45588__0.call(this);
case 1:
return G__45588__1.call(this,acc);
case 2:
return G__45588__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45588.cljs$core$IFn$_invoke$arity$0 = G__45588__0;
G__45588.cljs$core$IFn$_invoke$arity$1 = G__45588__1;
G__45588.cljs$core$IFn$_invoke$arity$2 = G__45588__2;
return G__45588;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__45007_SHARP_){
var G__45014 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__45007_SHARP_) : rf.call(null,p1__45007_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45014) : f.call(null,G__45014));
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
var len__4864__auto___45589 = arguments.length;
var i__4865__auto___45590 = (0);
while(true){
if((i__4865__auto___45590 < len__4864__auto___45589)){
args__4870__auto__.push((arguments[i__4865__auto___45590]));

var G__45591 = (i__4865__auto___45590 + (1));
i__4865__auto___45590 = G__45591;
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
var G__45592 = null;
var G__45592__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__45592__1 = (function (p__45038){
var vec__45047 = p__45038;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45047,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45047,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45047,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core45050 = (function (p__45038,cells,fxs,n,k,dimensions,inc,vec__45047,margins,f,meta45051){
this.p__45038 = p__45038;
this.cells = cells;
this.fxs = fxs;
this.n = n;
this.k = k;
this.dimensions = dimensions;
this.inc = inc;
this.vec__45047 = vec__45047;
this.margins = margins;
this.f = f;
this.meta45051 = meta45051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45052,meta45051__$1){
var self__ = this;
var _45052__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45050(self__.p__45038,self__.cells,self__.fxs,self__.n,self__.k,self__.dimensions,self__.inc,self__.vec__45047,self__.margins,self__.f,meta45051__$1));
}));

(kixi.stats.core.t_kixi$stats$core45050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45052){
var self__ = this;
var _45052__$1 = this;
return self__.meta45051;
}));

(kixi.stats.core.t_kixi$stats$core45050.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45050.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core45050.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core45050.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core45050.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core45050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__45038","p__45038",-168852160,null),new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"vec__45047","vec__45047",-605495718,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta45051","meta45051",2135541094,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45050.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45050.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45050");

(kixi.stats.core.t_kixi$stats$core45050.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45050");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45050.
 */
kixi.stats.core.__GT_t_kixi$stats$core45050 = (function kixi$stats$core$__GT_t_kixi$stats$core45050(p__45038__$1,cells__$1,fxs__$1,n__$1,k__$1,dimensions__$1,inc__$1,vec__45047__$1,margins__$1,f__$1,meta45051){
return (new kixi.stats.core.t_kixi$stats$core45050(p__45038__$1,cells__$1,fxs__$1,n__$1,k__$1,dimensions__$1,inc__$1,vec__45047__$1,margins__$1,f__$1,meta45051));
});

}

return (new kixi.stats.core.t_kixi$stats$core45050(p__45038,cells,fxs,n,k,dimensions,inc,vec__45047,margins,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__45592__2 = (function (p__45037,x){
var vec__45039 = p__45037;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45039,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45039,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45039,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__45043,fx){
var vec__45044 = p__45043;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45044,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45044,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__45592 = function(p__45037,x){
switch(arguments.length){
case 0:
return G__45592__0.call(this);
case 1:
return G__45592__1.call(this,p__45037);
case 2:
return G__45592__2.call(this,p__45037,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45592.cljs$core$IFn$_invoke$arity$0 = G__45592__0;
G__45592.cljs$core$IFn$_invoke$arity$1 = G__45592__1;
G__45592.cljs$core$IFn$_invoke$arity$2 = G__45592__2;
return G__45592;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq45022){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45022));
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
var kixi$stats$core$arithmetic_mean__1 = (function (p__45077){
var vec__45084 = p__45077;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45084,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45084,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__45076,e){
var vec__45079 = p__45076;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45079,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45079,(1),null);
var acc = vec__45079;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__45076,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__45076);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__45076,e);
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
var kixi$stats$core$geometric_mean__1 = (function (p__45090){
var vec__45097 = p__45090;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(1),null);
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
var kixi$stats$core$geometric_mean__2 = (function (p__45089,e){
var vec__45092 = p__45089;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45092,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45092,(1),null);
var acc = vec__45092;
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
kixi$stats$core$geometric_mean = function(p__45089,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__45089);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__45089,e);
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
var kixi$stats$core$harmonic_mean__1 = (function (p__45103){
var vec__45109 = p__45103;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(1),null);
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
var kixi$stats$core$harmonic_mean__2 = (function (p__45102,e){
var vec__45104 = p__45102;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45104,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45104,(1),null);
var acc = vec__45104;
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
kixi$stats$core$harmonic_mean = function(p__45102,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__45102);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__45102,e);
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
var kixi$stats$core$variance_s__1 = (function (p__45114){
var vec__45121 = p__45114;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45121,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45121,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45121,(2),null);
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
var kixi$stats$core$variance_s__2 = (function (p__45113,e){
var vec__45116 = p__45113;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45116,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45116,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45116,(2),null);
var acc = vec__45116;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__45113,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__45113);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__45113,e);
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
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__45127){
var vec__45128 = p__45127;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128,(2),null);
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
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__45133){
var vec__45135 = p__45133;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45135,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45135,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45135,(2),null);
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
var kixi$stats$core$skewness_s__1 = (function (p__45140){
var vec__45150 = p__45140;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__45139,e){
var vec__45142 = p__45139;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(3),null);
var acc = vec__45142;
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
kixi$stats$core$skewness_s = function(p__45139,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__45139);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__45139,e);
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
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__45157){
var vec__45158 = p__45157;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45158,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45158,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45158,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45158,(3),null);
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
var kixi$stats$core$kurtosis_s__1 = (function (p__45165){
var vec__45179 = p__45165;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__45164,e){
var vec__45168 = p__45164;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(4),null);
var acc = vec__45168;
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
kixi$stats$core$kurtosis_s = function(p__45164,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__45164);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__45164,e);
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
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__45190){
var vec__45191 = p__45190;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(4),null);
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
var G__45613 = null;
var G__45613__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__45613__1 = (function (p__45201){
var vec__45207 = p__45201;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45207,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45207,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45207,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45207,(3),null);
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
var G__45613__2 = (function (p__45200,e){
var vec__45203 = p__45200;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45203,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45203,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45203,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45203,(3),null);
var acc = vec__45203;
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
G__45613 = function(p__45200,e){
switch(arguments.length){
case 0:
return G__45613__0.call(this);
case 1:
return G__45613__1.call(this,p__45200);
case 2:
return G__45613__2.call(this,p__45200,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45613.cljs$core$IFn$_invoke$arity$0 = G__45613__0;
G__45613.cljs$core$IFn$_invoke$arity$1 = G__45613__1;
G__45613.cljs$core$IFn$_invoke$arity$2 = G__45613__2;
return G__45613;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__45212){
var vec__45213 = p__45212;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213,(3),null);
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
var G__45617 = null;
var G__45617__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__45617__1 = (function (p__45219){
var vec__45230 = p__45219;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__45617__2 = (function (p__45218,e){
var vec__45220 = p__45218;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45220,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45220,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45220,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45220,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45220,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45220,(5),null);
var acc = vec__45220;
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
G__45617 = function(p__45218,e){
switch(arguments.length){
case 0:
return G__45617__0.call(this);
case 1:
return G__45617__1.call(this,p__45218);
case 2:
return G__45617__2.call(this,p__45218,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45617.cljs$core$IFn$_invoke$arity$0 = G__45617__0;
G__45617.cljs$core$IFn$_invoke$arity$1 = G__45617__1;
G__45617.cljs$core$IFn$_invoke$arity$2 = G__45617__2;
return G__45617;
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
var G__45620 = null;
var G__45620__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__45620__1 = (function (p__45235){
var vec__45241 = p__45235;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__45620__2 = (function (p__45234,e){
var vec__45236 = p__45234;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(3),null);
var acc = vec__45236;
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
G__45620 = function(p__45234,e){
switch(arguments.length){
case 0:
return G__45620__0.call(this);
case 1:
return G__45620__1.call(this,p__45234);
case 2:
return G__45620__2.call(this,p__45234,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45620.cljs$core$IFn$_invoke$arity$0 = G__45620__0;
G__45620.cljs$core$IFn$_invoke$arity$1 = G__45620__1;
G__45620.cljs$core$IFn$_invoke$arity$2 = G__45620__2;
return G__45620;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__45250){
var vec__45251 = p__45250;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(3),null);
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
var G__45625 = null;
var G__45625__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__45625__1 = (function (p__45259){
var vec__45265 = p__45259;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45265,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45265,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__45625__2 = (function (p__45258,e){
var vec__45260 = p__45258;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45260,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45260,(1),null);
var acc = vec__45260;
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
G__45625 = function(p__45258,e){
switch(arguments.length){
case 0:
return G__45625__0.call(this);
case 1:
return G__45625__1.call(this,p__45258);
case 2:
return G__45625__2.call(this,p__45258,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45625.cljs$core$IFn$_invoke$arity$0 = G__45625__0;
G__45625.cljs$core$IFn$_invoke$arity$1 = G__45625__1;
G__45625.cljs$core$IFn$_invoke$arity$2 = G__45625__2;
return G__45625;
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
var G__45627 = null;
var G__45627__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__45627__1 = (function (p__45276){
var vec__45281 = p__45276;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45281,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45281,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45281,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45281,(3),null);
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
var G__45627__2 = (function (p__45275,row){
var vec__45278 = p__45275;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(3),null);
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
G__45627 = function(p__45275,row){
switch(arguments.length){
case 0:
return G__45627__0.call(this);
case 1:
return G__45627__1.call(this,p__45275);
case 2:
return G__45627__2.call(this,p__45275,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45627.cljs$core$IFn$_invoke$arity$0 = G__45627__0;
G__45627.cljs$core$IFn$_invoke$arity$1 = G__45627__1;
G__45627.cljs$core$IFn$_invoke$arity$2 = G__45627__2;
return G__45627;
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
var G__45302 = arguments.length;
switch (G__45302) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core45305 = (function (fx,fy,sum_squares,meta45306){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta45306 = meta45306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45307,meta45306__$1){
var self__ = this;
var _45307__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45305(self__.fx,self__.fy,self__.sum_squares,meta45306__$1));
}));

(kixi.stats.core.t_kixi$stats$core45305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45307){
var self__ = this;
var _45307__$1 = this;
return self__.meta45306;
}));

(kixi.stats.core.t_kixi$stats$core45305.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45305.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core45305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta45306","meta45306",-432743301,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45305.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45305.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45305");

(kixi.stats.core.t_kixi$stats$core45305.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45305");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45305.
 */
kixi.stats.core.__GT_t_kixi$stats$core45305 = (function kixi$stats$core$__GT_t_kixi$stats$core45305(fx__$1,fy__$1,sum_squares__$1,meta45306){
return (new kixi.stats.core.t_kixi$stats$core45305(fx__$1,fy__$1,sum_squares__$1,meta45306));
});

}

return (new kixi.stats.core.t_kixi$stats$core45305(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__45299_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__45299_SHARP_,x);
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
var G__45310 = arguments.length;
switch (G__45310) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core45311 = (function (fx,fy,sum_squares,meta45312){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta45312 = meta45312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45313,meta45312__$1){
var self__ = this;
var _45313__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45311(self__.fx,self__.fy,self__.sum_squares,meta45312__$1));
}));

(kixi.stats.core.t_kixi$stats$core45311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45313){
var self__ = this;
var _45313__$1 = this;
return self__.meta45312;
}));

(kixi.stats.core.t_kixi$stats$core45311.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45311.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core45311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta45312","meta45312",503023181,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45311.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45311.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45311");

(kixi.stats.core.t_kixi$stats$core45311.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45311");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45311.
 */
kixi.stats.core.__GT_t_kixi$stats$core45311 = (function kixi$stats$core$__GT_t_kixi$stats$core45311(fx__$1,fy__$1,sum_squares__$1,meta45312){
return (new kixi.stats.core.t_kixi$stats$core45311(fx__$1,fy__$1,sum_squares__$1,meta45312));
});

}

return (new kixi.stats.core.t_kixi$stats$core45311(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core45323 = (function (fx,fy,alpha,sum_squares,meta45324){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta45324 = meta45324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45325,meta45324__$1){
var self__ = this;
var _45325__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45323(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta45324__$1));
}));

(kixi.stats.core.t_kixi$stats$core45323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45325){
var self__ = this;
var _45325__$1 = this;
return self__.meta45324;
}));

(kixi.stats.core.t_kixi$stats$core45323.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45323.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core45323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta45324","meta45324",495678629,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45323.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45323.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45323");

(kixi.stats.core.t_kixi$stats$core45323.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45323");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45323.
 */
kixi.stats.core.__GT_t_kixi$stats$core45323 = (function kixi$stats$core$__GT_t_kixi$stats$core45323(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta45324){
return (new kixi.stats.core.t_kixi$stats$core45323(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta45324));
});

}

return (new kixi.stats.core.t_kixi$stats$core45323(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__45308_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__45308_SHARP_,x,alpha);
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
var G__45347 = arguments.length;
switch (G__45347) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core45351 = (function (fx,fy,sum_squares,meta45352){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta45352 = meta45352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45353,meta45352__$1){
var self__ = this;
var _45353__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45351(self__.fx,self__.fy,self__.sum_squares,meta45352__$1));
}));

(kixi.stats.core.t_kixi$stats$core45351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45353){
var self__ = this;
var _45353__$1 = this;
return self__.meta45352;
}));

(kixi.stats.core.t_kixi$stats$core45351.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45351.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core45351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta45352","meta45352",-2130570475,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45351.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45351.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45351");

(kixi.stats.core.t_kixi$stats$core45351.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45351");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45351.
 */
kixi.stats.core.__GT_t_kixi$stats$core45351 = (function kixi$stats$core$__GT_t_kixi$stats$core45351(fx__$1,fy__$1,sum_squares__$1,meta45352){
return (new kixi.stats.core.t_kixi$stats$core45351(fx__$1,fy__$1,sum_squares__$1,meta45352));
});

}

return (new kixi.stats.core.t_kixi$stats$core45351(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__45344_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__45344_SHARP_,x);
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
var G__45408 = arguments.length;
switch (G__45408) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core45428 = (function (fx,fy,sum_squares,meta45429){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta45429 = meta45429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45430,meta45429__$1){
var self__ = this;
var _45430__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45428(self__.fx,self__.fy,self__.sum_squares,meta45429__$1));
}));

(kixi.stats.core.t_kixi$stats$core45428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45430){
var self__ = this;
var _45430__$1 = this;
return self__.meta45429;
}));

(kixi.stats.core.t_kixi$stats$core45428.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45428.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core45428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta45429","meta45429",347395808,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45428.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45428.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45428");

(kixi.stats.core.t_kixi$stats$core45428.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45428");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45428.
 */
kixi.stats.core.__GT_t_kixi$stats$core45428 = (function kixi$stats$core$__GT_t_kixi$stats$core45428(fx__$1,fy__$1,sum_squares__$1,meta45429){
return (new kixi.stats.core.t_kixi$stats$core45428(fx__$1,fy__$1,sum_squares__$1,meta45429));
});

}

return (new kixi.stats.core.t_kixi$stats$core45428(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core45463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core45463 = (function (fx,fy,alpha,sum_squares,meta45464){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta45464 = meta45464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core45463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45465,meta45464__$1){
var self__ = this;
var _45465__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core45463(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta45464__$1));
}));

(kixi.stats.core.t_kixi$stats$core45463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45465){
var self__ = this;
var _45465__$1 = this;
return self__.meta45464;
}));

(kixi.stats.core.t_kixi$stats$core45463.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core45463.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core45463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta45464","meta45464",-1044473421,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core45463.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core45463.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core45463");

(kixi.stats.core.t_kixi$stats$core45463.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core45463");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core45463.
 */
kixi.stats.core.__GT_t_kixi$stats$core45463 = (function kixi$stats$core$__GT_t_kixi$stats$core45463(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta45464){
return (new kixi.stats.core.t_kixi$stats$core45463(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta45464));
});

}

return (new kixi.stats.core.t_kixi$stats$core45463(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__45401_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__45401_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45655 = arguments.length;
var i__4865__auto___45656 = (0);
while(true){
if((i__4865__auto___45656 < len__4864__auto___45655)){
args__4870__auto__.push((arguments[i__4865__auto___45656]));

var G__45657 = (i__4865__auto___45656 + (1));
i__4865__auto___45656 = G__45657;
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
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq45484){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45484));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__45491){
var map__45492 = p__45491;
var map__45492__$1 = cljs.core.__destructure_map(map__45492);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__45493){
var vec__45494 = p__45493;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__45498){
var vec__45499 = p__45498;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45499,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45499,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45499,(2),null);
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
var G__45662 = null;
var G__45662__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__45662__1 = (function (p__45506){
var vec__45524 = p__45506;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45524,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45524,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45524,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45524,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45524,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45524,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__45662__2 = (function (p__45505,e){
var vec__45507 = p__45505;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45507,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45507,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45507,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45507,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45507,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45507,(5),null);
var acc = vec__45507;
var x = (function (){var G__45513 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__45513 == null)){
return null;
} else {
return G__45513;
}
})();
var y = (function (){var G__45514 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__45514 == null)){
return null;
} else {
return G__45514;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__45516 = cx;
if(cljs.core.truth_(x)){
return (G__45516 + (1));
} else {
return G__45516;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__45517 = cy;
if(cljs.core.truth_(y)){
return (G__45517 + (1));
} else {
return G__45517;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__45518 = mx;
if(cljs.core.truth_(x)){
return (G__45518 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__45518;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__45520 = my;
if(cljs.core.truth_(y)){
return (G__45520 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__45520;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__45522 = ssx;
if(cljs.core.truth_(x)){
return (G__45522 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__45522;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__45523 = ssy;
if(cljs.core.truth_(y)){
return (G__45523 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__45523;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__45662 = function(p__45505,e){
switch(arguments.length){
case 0:
return G__45662__0.call(this);
case 1:
return G__45662__1.call(this,p__45505);
case 2:
return G__45662__2.call(this,p__45505,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45662.cljs$core$IFn$_invoke$arity$0 = G__45662__0;
G__45662.cljs$core$IFn$_invoke$arity$1 = G__45662__1;
G__45662.cljs$core$IFn$_invoke$arity$2 = G__45662__2;
return G__45662;
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
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__45527){
var map__45528 = p__45527;
var map__45528__$1 = cljs.core.__destructure_map(map__45528);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45528__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45528__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__45531){
var vec__45532 = p__45531;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__45535){
var vec__45536 = p__45535;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(2),null);
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
var G__45665 = null;
var G__45665__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__45665__1 = (function (p__45552){
var vec__45573 = p__45552;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__45665__2 = (function (p__45551,e){
var vec__45553 = p__45551;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(5),null);
var acc = vec__45553;
var x = (function (){var G__45556 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__45556 == null)){
return null;
} else {
return G__45556;
}
})();
var y = (function (){var G__45559 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__45559 == null)){
return null;
} else {
return G__45559;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__45564 = cx;
if(cljs.core.truth_(x)){
return (G__45564 + (1));
} else {
return G__45564;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__45565 = cy;
if(cljs.core.truth_(y)){
return (G__45565 + (1));
} else {
return G__45565;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__45566 = mx;
if(cljs.core.truth_(x)){
return (G__45566 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__45566;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__45567 = my;
if(cljs.core.truth_(y)){
return (G__45567 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__45567;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__45568 = ssx;
if(cljs.core.truth_(x)){
return (G__45568 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__45568;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__45569 = ssy;
if(cljs.core.truth_(y)){
return (G__45569 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__45569;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__45665 = function(p__45551,e){
switch(arguments.length){
case 0:
return G__45665__0.call(this);
case 1:
return G__45665__1.call(this,p__45551);
case 2:
return G__45665__2.call(this,p__45551,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45665.cljs$core$IFn$_invoke$arity$0 = G__45665__0;
G__45665.cljs$core$IFn$_invoke$arity$1 = G__45665__1;
G__45665.cljs$core$IFn$_invoke$arity$2 = G__45665__2;
return G__45665;
})()
});
/**
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__45670 = null;
var G__45670__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__45670__1 = (function (p__45577){
var vec__45582 = p__45577;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45582,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45582,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__45670__2 = (function (p__45576,e){
var vec__45578 = p__45576;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45578,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45578,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__45581 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__45581 + (1));
} else {
return G__45581;
}
})(),(d + (1))],null));
});
G__45670 = function(p__45576,e){
switch(arguments.length){
case 0:
return G__45670__0.call(this);
case 1:
return G__45670__1.call(this,p__45576);
case 2:
return G__45670__2.call(this,p__45576,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45670.cljs$core$IFn$_invoke$arity$0 = G__45670__0;
G__45670.cljs$core$IFn$_invoke$arity$1 = G__45670__1;
G__45670.cljs$core$IFn$_invoke$arity$2 = G__45670__2;
return G__45670;
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
