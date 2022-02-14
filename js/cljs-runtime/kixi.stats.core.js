goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43767 = arguments.length;
var i__4865__auto___43768 = (0);
while(true){
if((i__4865__auto___43768 < len__4864__auto___43767)){
args__4870__auto__.push((arguments[i__4865__auto___43768]));

var G__43769 = (i__4865__auto___43768 + (1));
i__4865__auto___43768 = G__43769;
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
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq43119){
var G__43120 = cljs.core.first(seq43119);
var seq43119__$1 = cljs.core.next(seq43119);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43120,seq43119__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__43775 = null;
var G__43775__0 = (function (){
return init;
});
var G__43775__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__43775__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__43775 = function(acc,x){
switch(arguments.length){
case 0:
return G__43775__0.call(this);
case 1:
return G__43775__1.call(this,acc);
case 2:
return G__43775__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43775.cljs$core$IFn$_invoke$arity$0 = G__43775__0;
G__43775.cljs$core$IFn$_invoke$arity$1 = G__43775__1;
G__43775.cljs$core$IFn$_invoke$arity$2 = G__43775__2;
return G__43775;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__43138_SHARP_){
var G__43139 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__43138_SHARP_) : rf.call(null,p1__43138_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43139) : f.call(null,G__43139));
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
var len__4864__auto___43778 = arguments.length;
var i__4865__auto___43779 = (0);
while(true){
if((i__4865__auto___43779 < len__4864__auto___43778)){
args__4870__auto__.push((arguments[i__4865__auto___43779]));

var G__43780 = (i__4865__auto___43779 + (1));
i__4865__auto___43779 = G__43780;
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
var G__43781 = null;
var G__43781__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__43781__1 = (function (p__43160){
var vec__43175 = p__43160;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43175,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43175,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43175,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43181 = (function (cells,p__43160,fxs,n,vec__43175,k,dimensions,inc,margins,f,meta43182){
this.cells = cells;
this.p__43160 = p__43160;
this.fxs = fxs;
this.n = n;
this.vec__43175 = vec__43175;
this.k = k;
this.dimensions = dimensions;
this.inc = inc;
this.margins = margins;
this.f = f;
this.meta43182 = meta43182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43183,meta43182__$1){
var self__ = this;
var _43183__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43181(self__.cells,self__.p__43160,self__.fxs,self__.n,self__.vec__43175,self__.k,self__.dimensions,self__.inc,self__.margins,self__.f,meta43182__$1));
}));

(kixi.stats.core.t_kixi$stats$core43181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43183){
var self__ = this;
var _43183__$1 = this;
return self__.meta43182;
}));

(kixi.stats.core.t_kixi$stats$core43181.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43181.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core43181.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core43181.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core43181.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core43181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"p__43160","p__43160",-1699591131,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__43175","vec__43175",719622578,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta43182","meta43182",-1208130999,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43181.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43181.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43181");

(kixi.stats.core.t_kixi$stats$core43181.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43181");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43181.
 */
kixi.stats.core.__GT_t_kixi$stats$core43181 = (function kixi$stats$core$__GT_t_kixi$stats$core43181(cells__$1,p__43160__$1,fxs__$1,n__$1,vec__43175__$1,k__$1,dimensions__$1,inc__$1,margins__$1,f__$1,meta43182){
return (new kixi.stats.core.t_kixi$stats$core43181(cells__$1,p__43160__$1,fxs__$1,n__$1,vec__43175__$1,k__$1,dimensions__$1,inc__$1,margins__$1,f__$1,meta43182));
});

}

return (new kixi.stats.core.t_kixi$stats$core43181(cells,p__43160,fxs,n,vec__43175,k,dimensions,inc,margins,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__43781__2 = (function (p__43159,x){
var vec__43166 = p__43159;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43166,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43166,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43166,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43170,fx){
var vec__43172 = p__43170;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43172,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43172,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__43781 = function(p__43159,x){
switch(arguments.length){
case 0:
return G__43781__0.call(this);
case 1:
return G__43781__1.call(this,p__43159);
case 2:
return G__43781__2.call(this,p__43159,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43781.cljs$core$IFn$_invoke$arity$0 = G__43781__0;
G__43781.cljs$core$IFn$_invoke$arity$1 = G__43781__1;
G__43781.cljs$core$IFn$_invoke$arity$2 = G__43781__2;
return G__43781;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq43146){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43146));
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
var kixi$stats$core$arithmetic_mean__1 = (function (p__43207){
var vec__43215 = p__43207;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43215,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43215,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__43206,e){
var vec__43209 = p__43206;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43209,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43209,(1),null);
var acc = vec__43209;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__43206,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__43206);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__43206,e);
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
var kixi$stats$core$geometric_mean__1 = (function (p__43223){
var vec__43229 = p__43223;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43229,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43229,(1),null);
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
var kixi$stats$core$geometric_mean__2 = (function (p__43222,e){
var vec__43224 = p__43222;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43224,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43224,(1),null);
var acc = vec__43224;
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
kixi$stats$core$geometric_mean = function(p__43222,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__43222);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__43222,e);
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
var kixi$stats$core$harmonic_mean__1 = (function (p__43236){
var vec__43244 = p__43236;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43244,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43244,(1),null);
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
var kixi$stats$core$harmonic_mean__2 = (function (p__43235,e){
var vec__43238 = p__43235;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43238,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43238,(1),null);
var acc = vec__43238;
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
kixi$stats$core$harmonic_mean = function(p__43235,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__43235);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__43235,e);
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
var kixi$stats$core$variance_s__1 = (function (p__43254){
var vec__43264 = p__43254;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43264,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43264,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43264,(2),null);
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
var kixi$stats$core$variance_s__2 = (function (p__43253,e){
var vec__43259 = p__43253;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(2),null);
var acc = vec__43259;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__43253,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__43253);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__43253,e);
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
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__43290){
var vec__43295 = p__43290;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43295,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43295,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43295,(2),null);
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
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__43314){
var vec__43324 = p__43314;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324,(2),null);
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
var kixi$stats$core$skewness_s__1 = (function (p__43348){
var vec__43371 = p__43348;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43371,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43371,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43371,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43371,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__43347,e){
var vec__43360 = p__43347;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(3),null);
var acc = vec__43360;
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
kixi$stats$core$skewness_s = function(p__43347,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__43347);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__43347,e);
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
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__43379){
var vec__43381 = p__43379;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43381,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43381,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43381,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43381,(3),null);
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
var kixi$stats$core$kurtosis_s__1 = (function (p__43390){
var vec__43404 = p__43390;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43404,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43404,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43404,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43404,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43404,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__43389,e){
var vec__43393 = p__43389;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43393,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43393,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43393,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43393,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43393,(4),null);
var acc = vec__43393;
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
kixi$stats$core$kurtosis_s = function(p__43389,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__43389);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__43389,e);
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
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__43411){
var vec__43415 = p__43411;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43415,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43415,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43415,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43415,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43415,(4),null);
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
var G__43820 = null;
var G__43820__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__43820__1 = (function (p__43429){
var vec__43437 = p__43429;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43437,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43437,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43437,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43437,(3),null);
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
var G__43820__2 = (function (p__43428,e){
var vec__43430 = p__43428;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43430,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43430,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43430,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43430,(3),null);
var acc = vec__43430;
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
G__43820 = function(p__43428,e){
switch(arguments.length){
case 0:
return G__43820__0.call(this);
case 1:
return G__43820__1.call(this,p__43428);
case 2:
return G__43820__2.call(this,p__43428,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43820.cljs$core$IFn$_invoke$arity$0 = G__43820__0;
G__43820.cljs$core$IFn$_invoke$arity$1 = G__43820__1;
G__43820.cljs$core$IFn$_invoke$arity$2 = G__43820__2;
return G__43820;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__43444){
var vec__43445 = p__43444;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43445,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43445,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43445,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43445,(3),null);
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
var G__43835 = null;
var G__43835__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__43835__1 = (function (p__43452){
var vec__43464 = p__43452;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__43835__2 = (function (p__43451,e){
var vec__43457 = p__43451;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43457,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43457,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43457,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43457,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43457,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43457,(5),null);
var acc = vec__43457;
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
G__43835 = function(p__43451,e){
switch(arguments.length){
case 0:
return G__43835__0.call(this);
case 1:
return G__43835__1.call(this,p__43451);
case 2:
return G__43835__2.call(this,p__43451,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43835.cljs$core$IFn$_invoke$arity$0 = G__43835__0;
G__43835.cljs$core$IFn$_invoke$arity$1 = G__43835__1;
G__43835.cljs$core$IFn$_invoke$arity$2 = G__43835__2;
return G__43835;
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
var G__43840 = null;
var G__43840__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__43840__1 = (function (p__43469){
var vec__43479 = p__43469;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__43840__2 = (function (p__43468,e){
var vec__43473 = p__43468;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(3),null);
var acc = vec__43473;
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
G__43840 = function(p__43468,e){
switch(arguments.length){
case 0:
return G__43840__0.call(this);
case 1:
return G__43840__1.call(this,p__43468);
case 2:
return G__43840__2.call(this,p__43468,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43840.cljs$core$IFn$_invoke$arity$0 = G__43840__0;
G__43840.cljs$core$IFn$_invoke$arity$1 = G__43840__1;
G__43840.cljs$core$IFn$_invoke$arity$2 = G__43840__2;
return G__43840;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__43485){
var vec__43486 = p__43485;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(3),null);
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
var G__43848 = null;
var G__43848__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__43848__1 = (function (p__43493){
var vec__43497 = p__43493;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43497,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43497,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__43848__2 = (function (p__43492,e){
var vec__43494 = p__43492;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43494,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43494,(1),null);
var acc = vec__43494;
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
G__43848 = function(p__43492,e){
switch(arguments.length){
case 0:
return G__43848__0.call(this);
case 1:
return G__43848__1.call(this,p__43492);
case 2:
return G__43848__2.call(this,p__43492,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43848.cljs$core$IFn$_invoke$arity$0 = G__43848__0;
G__43848.cljs$core$IFn$_invoke$arity$1 = G__43848__1;
G__43848.cljs$core$IFn$_invoke$arity$2 = G__43848__2;
return G__43848;
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
var G__43863 = null;
var G__43863__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__43863__1 = (function (p__43507){
var vec__43515 = p__43507;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43515,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43515,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43515,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43515,(3),null);
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
var G__43863__2 = (function (p__43506,row){
var vec__43512 = p__43506;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43512,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43512,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43512,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43512,(3),null);
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
G__43863 = function(p__43506,row){
switch(arguments.length){
case 0:
return G__43863__0.call(this);
case 1:
return G__43863__1.call(this,p__43506);
case 2:
return G__43863__2.call(this,p__43506,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43863.cljs$core$IFn$_invoke$arity$0 = G__43863__0;
G__43863.cljs$core$IFn$_invoke$arity$1 = G__43863__1;
G__43863.cljs$core$IFn$_invoke$arity$2 = G__43863__2;
return G__43863;
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
var G__43527 = arguments.length;
switch (G__43527) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43528 = (function (fx,fy,sum_squares,meta43529){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43529 = meta43529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43530,meta43529__$1){
var self__ = this;
var _43530__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43528(self__.fx,self__.fy,self__.sum_squares,meta43529__$1));
}));

(kixi.stats.core.t_kixi$stats$core43528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43530){
var self__ = this;
var _43530__$1 = this;
return self__.meta43529;
}));

(kixi.stats.core.t_kixi$stats$core43528.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43528.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core43528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43529","meta43529",-711660278,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43528.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43528.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43528");

(kixi.stats.core.t_kixi$stats$core43528.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43528");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43528.
 */
kixi.stats.core.__GT_t_kixi$stats$core43528 = (function kixi$stats$core$__GT_t_kixi$stats$core43528(fx__$1,fy__$1,sum_squares__$1,meta43529){
return (new kixi.stats.core.t_kixi$stats$core43528(fx__$1,fy__$1,sum_squares__$1,meta43529));
});

}

return (new kixi.stats.core.t_kixi$stats$core43528(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43525_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__43525_SHARP_,x);
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
var G__43537 = arguments.length;
switch (G__43537) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core43538 = (function (fx,fy,sum_squares,meta43539){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43539 = meta43539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43540,meta43539__$1){
var self__ = this;
var _43540__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43538(self__.fx,self__.fy,self__.sum_squares,meta43539__$1));
}));

(kixi.stats.core.t_kixi$stats$core43538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43540){
var self__ = this;
var _43540__$1 = this;
return self__.meta43539;
}));

(kixi.stats.core.t_kixi$stats$core43538.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43538.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core43538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43539","meta43539",-270625434,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43538.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43538.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43538");

(kixi.stats.core.t_kixi$stats$core43538.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43538");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43538.
 */
kixi.stats.core.__GT_t_kixi$stats$core43538 = (function kixi$stats$core$__GT_t_kixi$stats$core43538(fx__$1,fy__$1,sum_squares__$1,meta43539){
return (new kixi.stats.core.t_kixi$stats$core43538(fx__$1,fy__$1,sum_squares__$1,meta43539));
});

}

return (new kixi.stats.core.t_kixi$stats$core43538(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43545 = (function (fx,fy,alpha,sum_squares,meta43546){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta43546 = meta43546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43547,meta43546__$1){
var self__ = this;
var _43547__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43545(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta43546__$1));
}));

(kixi.stats.core.t_kixi$stats$core43545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43547){
var self__ = this;
var _43547__$1 = this;
return self__.meta43546;
}));

(kixi.stats.core.t_kixi$stats$core43545.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43545.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core43545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43546","meta43546",-472440663,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43545.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43545.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43545");

(kixi.stats.core.t_kixi$stats$core43545.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43545");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43545.
 */
kixi.stats.core.__GT_t_kixi$stats$core43545 = (function kixi$stats$core$__GT_t_kixi$stats$core43545(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43546){
return (new kixi.stats.core.t_kixi$stats$core43545(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43546));
});

}

return (new kixi.stats.core.t_kixi$stats$core43545(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43534_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__43534_SHARP_,x,alpha);
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
var G__43560 = arguments.length;
switch (G__43560) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43563 = (function (fx,fy,sum_squares,meta43564){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43564 = meta43564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43565,meta43564__$1){
var self__ = this;
var _43565__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43563(self__.fx,self__.fy,self__.sum_squares,meta43564__$1));
}));

(kixi.stats.core.t_kixi$stats$core43563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43565){
var self__ = this;
var _43565__$1 = this;
return self__.meta43564;
}));

(kixi.stats.core.t_kixi$stats$core43563.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43563.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core43563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43564","meta43564",-974146579,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43563.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43563.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43563");

(kixi.stats.core.t_kixi$stats$core43563.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43563");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43563.
 */
kixi.stats.core.__GT_t_kixi$stats$core43563 = (function kixi$stats$core$__GT_t_kixi$stats$core43563(fx__$1,fy__$1,sum_squares__$1,meta43564){
return (new kixi.stats.core.t_kixi$stats$core43563(fx__$1,fy__$1,sum_squares__$1,meta43564));
});

}

return (new kixi.stats.core.t_kixi$stats$core43563(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43557_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__43557_SHARP_,x);
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
var G__43571 = arguments.length;
switch (G__43571) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core43572 = (function (fx,fy,sum_squares,meta43573){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta43573 = meta43573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43574,meta43573__$1){
var self__ = this;
var _43574__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43572(self__.fx,self__.fy,self__.sum_squares,meta43573__$1));
}));

(kixi.stats.core.t_kixi$stats$core43572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43574){
var self__ = this;
var _43574__$1 = this;
return self__.meta43573;
}));

(kixi.stats.core.t_kixi$stats$core43572.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43572.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core43572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43573","meta43573",253711676,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43572.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43572.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43572");

(kixi.stats.core.t_kixi$stats$core43572.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43572");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43572.
 */
kixi.stats.core.__GT_t_kixi$stats$core43572 = (function kixi$stats$core$__GT_t_kixi$stats$core43572(fx__$1,fy__$1,sum_squares__$1,meta43573){
return (new kixi.stats.core.t_kixi$stats$core43572(fx__$1,fy__$1,sum_squares__$1,meta43573));
});

}

return (new kixi.stats.core.t_kixi$stats$core43572(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core43582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core43582 = (function (fx,fy,alpha,sum_squares,meta43583){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta43583 = meta43583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core43582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43584,meta43583__$1){
var self__ = this;
var _43584__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core43582(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta43583__$1));
}));

(kixi.stats.core.t_kixi$stats$core43582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43584){
var self__ = this;
var _43584__$1 = this;
return self__.meta43583;
}));

(kixi.stats.core.t_kixi$stats$core43582.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core43582.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core43582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta43583","meta43583",1609047766,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core43582.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core43582.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core43582");

(kixi.stats.core.t_kixi$stats$core43582.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"kixi.stats.core/t_kixi$stats$core43582");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core43582.
 */
kixi.stats.core.__GT_t_kixi$stats$core43582 = (function kixi$stats$core$__GT_t_kixi$stats$core43582(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43583){
return (new kixi.stats.core.t_kixi$stats$core43582(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta43583));
});

}

return (new kixi.stats.core.t_kixi$stats$core43582(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__43568_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__43568_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43890 = arguments.length;
var i__4865__auto___43891 = (0);
while(true){
if((i__4865__auto___43891 < len__4864__auto___43890)){
args__4870__auto__.push((arguments[i__4865__auto___43891]));

var G__43893 = (i__4865__auto___43891 + (1));
i__4865__auto___43891 = G__43893;
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
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq43596){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43596));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__43602){
var map__43603 = p__43602;
var map__43603__$1 = cljs.core.__destructure_map(map__43603);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43603__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43603__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__43609){
var vec__43610 = p__43609;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43610,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43610,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__43614){
var vec__43615 = p__43614;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43615,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43615,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43615,(2),null);
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
var G__43898 = null;
var G__43898__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__43898__1 = (function (p__43630){
var vec__43649 = p__43630;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__43898__2 = (function (p__43629,e){
var vec__43631 = p__43629;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(5),null);
var acc = vec__43631;
var x = (function (){var G__43636 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__43636 == null)){
return null;
} else {
return G__43636;
}
})();
var y = (function (){var G__43637 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__43637 == null)){
return null;
} else {
return G__43637;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__43639 = cx;
if(cljs.core.truth_(x)){
return (G__43639 + (1));
} else {
return G__43639;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__43641 = cy;
if(cljs.core.truth_(y)){
return (G__43641 + (1));
} else {
return G__43641;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__43643 = mx;
if(cljs.core.truth_(x)){
return (G__43643 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__43643;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__43644 = my;
if(cljs.core.truth_(y)){
return (G__43644 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__43644;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__43645 = ssx;
if(cljs.core.truth_(x)){
return (G__43645 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__43645;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__43647 = ssy;
if(cljs.core.truth_(y)){
return (G__43647 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__43647;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__43898 = function(p__43629,e){
switch(arguments.length){
case 0:
return G__43898__0.call(this);
case 1:
return G__43898__1.call(this,p__43629);
case 2:
return G__43898__2.call(this,p__43629,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43898.cljs$core$IFn$_invoke$arity$0 = G__43898__0;
G__43898.cljs$core$IFn$_invoke$arity$1 = G__43898__1;
G__43898.cljs$core$IFn$_invoke$arity$2 = G__43898__2;
return G__43898;
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
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__43657){
var map__43658 = p__43657;
var map__43658__$1 = cljs.core.__destructure_map(map__43658);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43658__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43658__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__43664){
var vec__43665 = p__43664;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43665,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43665,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__43668){
var vec__43669 = p__43668;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669,(2),null);
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
var G__43912 = null;
var G__43912__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__43912__1 = (function (p__43676){
var vec__43693 = p__43676;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__43912__2 = (function (p__43675,e){
var vec__43677 = p__43675;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43677,(5),null);
var acc = vec__43677;
var x = (function (){var G__43680 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__43680 == null)){
return null;
} else {
return G__43680;
}
})();
var y = (function (){var G__43682 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__43682 == null)){
return null;
} else {
return G__43682;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__43684 = cx;
if(cljs.core.truth_(x)){
return (G__43684 + (1));
} else {
return G__43684;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__43685 = cy;
if(cljs.core.truth_(y)){
return (G__43685 + (1));
} else {
return G__43685;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__43687 = mx;
if(cljs.core.truth_(x)){
return (G__43687 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__43687;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__43688 = my;
if(cljs.core.truth_(y)){
return (G__43688 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__43688;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__43689 = ssx;
if(cljs.core.truth_(x)){
return (G__43689 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__43689;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__43691 = ssy;
if(cljs.core.truth_(y)){
return (G__43691 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__43691;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__43912 = function(p__43675,e){
switch(arguments.length){
case 0:
return G__43912__0.call(this);
case 1:
return G__43912__1.call(this,p__43675);
case 2:
return G__43912__2.call(this,p__43675,e);
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
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__43926 = null;
var G__43926__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__43926__1 = (function (p__43698){
var vec__43706 = p__43698;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43706,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43706,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__43926__2 = (function (p__43697,e){
var vec__43699 = p__43697;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43699,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43699,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__43705 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__43705 + (1));
} else {
return G__43705;
}
})(),(d + (1))],null));
});
G__43926 = function(p__43697,e){
switch(arguments.length){
case 0:
return G__43926__0.call(this);
case 1:
return G__43926__1.call(this,p__43697);
case 2:
return G__43926__2.call(this,p__43697,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43926.cljs$core$IFn$_invoke$arity$0 = G__43926__0;
G__43926.cljs$core$IFn$_invoke$arity$1 = G__43926__1;
G__43926.cljs$core$IFn$_invoke$arity$2 = G__43926__2;
return G__43926;
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
