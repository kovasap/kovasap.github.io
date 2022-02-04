goog.provide('kixi.stats.test');
kixi.stats.test.p_value = kixi.stats.protocols.p_value;
kixi.stats.test.significant_QMARK_ = kixi.stats.protocols.significant_QMARK_;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {kixi.stats.protocols.PTestResult}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
kixi.stats.test.TestResult = (function (statistic,distribution,h1,__meta,__extmap,__hash){
this.statistic = statistic;
this.distribution = distribution;
this.h1 = h1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$p_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (kixi.stats.test.p_value.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.test.p_value.cljs$core$IFn$_invoke$arity$2(this$__$1,self__.h1) : kixi.stats.test.p_value.call(null,this$__$1,self__.h1));
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$p_value$arity$2 = (function (this$,alternate){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = self__.statistic;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = self__.distribution;
if(cljs.core.truth_(and__4251__auto____$1)){
return alternate;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__43246 = alternate;
var G__43246__$1 = (((G__43246 instanceof cljs.core.Keyword))?G__43246.fqn:null);
switch (G__43246__$1) {
case "<>":
return kixi.stats.math.clamp(((2) * (function (){var G__43253 = self__.distribution;
var G__43254 = (- kixi.stats.math.abs(self__.statistic));
return (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(G__43253,G__43254) : kixi.stats.distribution.cdf.call(null,G__43253,G__43254));
})()),0.0,1.0);

break;
case "<":
return (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(self__.distribution,self__.statistic) : kixi.stats.distribution.cdf.call(null,self__.distribution,self__.statistic));

break;
case ">":
return ((1) - (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(self__.distribution,self__.statistic) : kixi.stats.distribution.cdf.call(null,self__.distribution,self__.statistic)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43246__$1)].join('')));

}
} else {
return null;
}
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2 = (function (this$,alpha){
var self__ = this;
var this$__$1 = this;
var G__43255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,alpha,self__.h1], null);
return (kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43255) : kixi.stats.test.significant_QMARK_.call(null,G__43255));
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3 = (function (this$,alpha,alternate){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = self__.statistic;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = self__.distribution;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = alpha;
if(cljs.core.truth_(and__4251__auto____$2)){
return alternate;
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var critical = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3(self__.distribution,alpha,alternate);
var G__43260 = alternate;
var G__43260__$1 = (((G__43260 instanceof cljs.core.Keyword))?G__43260.fqn:null);
switch (G__43260__$1) {
case "<>":
return (kixi.stats.math.abs(self__.statistic) > critical);

break;
case "<":
return (self__.statistic < critical);

break;
case ">":
return (self__.statistic > critical);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43260__$1)].join('')));

}
} else {
return null;
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k43237,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__43262 = k43237;
var G__43262__$1 = (((G__43262 instanceof cljs.core.Keyword))?G__43262.fqn:null);
switch (G__43262__$1) {
case "statistic":
return self__.statistic;

break;
case "distribution":
return self__.distribution;

break;
case "h1":
return self__.h1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43237,else__4505__auto__);

}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__43276){
var vec__43277 = p__43276;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#kixi.stats.test.TestResult{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"statistic","statistic",-788899134),self__.statistic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distribution","distribution",-284555369),self__.distribution],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h1","h1",-1896887462),self__.h1],null))], null),self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43236){
var self__ = this;
var G__43236__$1 = this;
return (new cljs.core.RecordIter((0),G__43236__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statistic","statistic",-788899134),new cljs.core.Keyword(null,"distribution","distribution",-284555369),new cljs.core.Keyword(null,"h1","h1",-1896887462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,self__.__extmap,self__.__hash));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1240870390 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43238,other43239){
var self__ = this;
var this43238__$1 = this;
return (((!((other43239 == null)))) && ((((this43238__$1.constructor === other43239.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43238__$1.statistic,other43239.statistic)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43238__$1.distribution,other43239.distribution)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43238__$1.h1,other43239.h1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43238__$1.__extmap,other43239.__extmap)))))))))));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statistic","statistic",-788899134),null,new cljs.core.Keyword(null,"distribution","distribution",-284555369),null,new cljs.core.Keyword(null,"h1","h1",-1896887462),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k43237){
var self__ = this;
var this__4509__auto____$1 = this;
var G__43310 = k43237;
var G__43310__$1 = (((G__43310 instanceof cljs.core.Keyword))?G__43310.fqn:null);
switch (G__43310__$1) {
case "statistic":
case "distribution":
case "h1":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43237);

}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__43236){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__43317 = cljs.core.keyword_identical_QMARK_;
var expr__43318 = k__4511__auto__;
if(cljs.core.truth_((pred__43317.cljs$core$IFn$_invoke$arity$2 ? pred__43317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statistic","statistic",-788899134),expr__43318) : pred__43317.call(null,new cljs.core.Keyword(null,"statistic","statistic",-788899134),expr__43318)))){
return (new kixi.stats.test.TestResult(G__43236,self__.distribution,self__.h1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43317.cljs$core$IFn$_invoke$arity$2 ? pred__43317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"distribution","distribution",-284555369),expr__43318) : pred__43317.call(null,new cljs.core.Keyword(null,"distribution","distribution",-284555369),expr__43318)))){
return (new kixi.stats.test.TestResult(self__.statistic,G__43236,self__.h1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43317.cljs$core$IFn$_invoke$arity$2 ? pred__43317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__43318) : pred__43317.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__43318)))){
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,G__43236,self__.__meta,self__.__extmap,null));
} else {
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__43236),null));
}
}
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"statistic","statistic",-788899134),self__.statistic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"distribution","distribution",-284555369),self__.distribution,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h1","h1",-1896887462),self__.h1,null))], null),self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__43236){
var self__ = this;
var this__4501__auto____$1 = this;
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,G__43236,self__.__extmap,self__.__hash));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(kixi.stats.test.TestResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statistic","statistic",851632393,null),new cljs.core.Symbol(null,"distribution","distribution",1355976158,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null)], null);
}));

(kixi.stats.test.TestResult.cljs$lang$type = true);

(kixi.stats.test.TestResult.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"kixi.stats.test/TestResult",null,(1),null));
}));

(kixi.stats.test.TestResult.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"kixi.stats.test/TestResult");
}));

/**
 * Positional factory function for kixi.stats.test/TestResult.
 */
kixi.stats.test.__GT_TestResult = (function kixi$stats$test$__GT_TestResult(statistic,distribution,h1){
return (new kixi.stats.test.TestResult(statistic,distribution,h1,null,null,null));
});

/**
 * Factory function for kixi.stats.test/TestResult, taking a map of keywords to field values.
 */
kixi.stats.test.map__GT_TestResult = (function kixi$stats$test$map__GT_TestResult(G__43240){
var extmap__4542__auto__ = (function (){var G__43340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43240,new cljs.core.Keyword(null,"statistic","statistic",-788899134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"distribution","distribution",-284555369),new cljs.core.Keyword(null,"h1","h1",-1896887462)], 0));
if(cljs.core.record_QMARK_(G__43240)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43340);
} else {
return G__43340;
}
})();
return (new kixi.stats.test.TestResult(new cljs.core.Keyword(null,"statistic","statistic",-788899134).cljs$core$IFn$_invoke$arity$1(G__43240),new cljs.core.Keyword(null,"distribution","distribution",-284555369).cljs$core$IFn$_invoke$arity$1(G__43240),new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(G__43240),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

kixi.stats.test.test_result = (function kixi$stats$test$test_result(var_args){
var G__43343 = arguments.length;
switch (G__43343) {
case 2:
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2 = (function (statistic,distribution){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3(statistic,distribution,new cljs.core.Keyword(null,"<>","<>",1280186386));
}));

(kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3 = (function (statistic,distribution,alternate){
return kixi.stats.test.__GT_TestResult(statistic,distribution,alternate);
}));

(kixi.stats.test.test_result.cljs$lang$maxFixedArity = 3);

/**
 * Calculates the X^2 test of independence for a given contingency table.
 *   See kixi.stats.core/cross-tabulate
 */
kixi.stats.test.chi_squared_test = (function kixi$stats$test$chi_squared_test(table){
var margins = kixi.stats.protocols.margin_totals(table);
var size = kixi.stats.protocols.size(table);
var factors = cljs.core.count(size);
var total = kixi.stats.math.pow(kixi.stats.protocols.grand_total(table),(factors - (1)));
var dof = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,size),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,size));
var stat = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__43355){
var vec__43357 = p__43355;
var levels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43357,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43357,(1),null);
var cell = kixi.stats.protocols.cell(table,levels);
var e = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,counts) / total);
return (acc + (kixi.stats.math.sq((e - cell)) / e));
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map,cljs.core.vector),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,margins)));
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3(stat,kixi.stats.distribution.chi_squared(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),dof], null)),new cljs.core.Keyword(null,">",">",-555517146));
});
/**
 * Calculates the z-test of statistical significance for a sample mean.
 *   mu: the population mean
 *   sd: the population standard deviation
 *   mean: the sample mean
 *   n: the sample size
 *   See also: kixi.stats.core/simple-z-test
 */
kixi.stats.test.simple_z_test = (function kixi$stats$test$simple_z_test(p__43363,p__43364){
var map__43365 = p__43363;
var map__43365__$1 = cljs.core.__destructure_map(map__43365);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43365__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43365__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var map__43366 = p__43364;
var map__43366__$1 = cljs.core.__destructure_map(map__43366);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43366__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43366__$1,new cljs.core.Keyword(null,"n","n",562130025));
if((((n > (0))) && ((sd > (0))))){
var z = ((mean - mu) / (sd / kixi.stats.math.sqrt(n)));
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(z,kixi.stats.distribution.normal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"location","location",1815599388),0.0,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0], null)));
} else {
return null;
}
});
/**
 * Calculates the z-test of statistical significance between two sample means.
 *   Requires the mean, sd and sample size (n) of both samples.
 *   See also: kixi.stats.core/z-test
 */
kixi.stats.test.z_test = (function kixi$stats$test$z_test(p__43368,p__43369){
var map__43370 = p__43368;
var map__43370__$1 = cljs.core.__destructure_map(map__43370);
var mean_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43370__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43370__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43370__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__43371 = p__43369;
var map__43371__$1 = cljs.core.__destructure_map(map__43371);
var mean_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sd_xy = (function (){var and__4251__auto__ = (n_x > (0));
if(and__4251__auto__){
var and__4251__auto____$1 = (n_y > (0));
if(and__4251__auto____$1){
return kixi.stats.math.sqrt(((kixi.stats.math.sq(sd_x) / n_x) + (kixi.stats.math.sq(sd_y) / n_y)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var z = (function (){var and__4251__auto__ = sd_xy;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (sd_xy > (0));
if(and__4251__auto____$1){
return ((mean_x - mean_y) / sd_xy);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(z)){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(z,kixi.stats.distribution.normal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"location","location",1815599388),0.0,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0], null)));
} else {
return null;
}
});
/**
 * Calculates Welch's unequal variances t-test of statistical significance.
 *   Requires the mean, sd and sample size (n) of both samples.
 *   See also: kixi.stats.core/t-test
 */
kixi.stats.test.t_test = (function kixi$stats$test$t_test(p__43383,p__43384){
var map__43386 = p__43383;
var map__43386__$1 = cljs.core.__destructure_map(map__43386);
var mean_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__43387 = p__43384;
var map__43387__$1 = cljs.core.__destructure_map(map__43387);
var mean_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43387__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43387__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43387__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sd_ab = (function (){var and__4251__auto__ = (n_a > (0));
if(and__4251__auto__){
var and__4251__auto____$1 = (n_b > (0));
if(and__4251__auto____$1){
return ((kixi.stats.math.sq(sd_a) / n_a) + (kixi.stats.math.sq(sd_b) / n_b));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var t = (function (){var and__4251__auto__ = sd_ab;
if(cljs.core.truth_(and__4251__auto__)){
return ((mean_a - mean_b) / kixi.stats.math.sqrt(sd_ab));
} else {
return and__4251__auto__;
}
})();
var dof = (function (){var and__4251__auto__ = (n_a > (1));
if(and__4251__auto__){
var and__4251__auto____$1 = (n_b > (1));
if(and__4251__auto____$1){
return (kixi.stats.math.sq(sd_ab) / ((kixi.stats.math.pow(sd_a,(4)) / ((n_a * n_a) * (n_a - (1)))) + (kixi.stats.math.pow(sd_b,(4)) / ((n_b * n_b) * (n_b - (1))))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = t;
if(cljs.core.truth_(and__4251__auto__)){
return dof;
} else {
return and__4251__auto__;
}
})())){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(t,kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),dof], null)));
} else {
return null;
}
});
/**
 * Calculates the t-test of statistical significance for a sample mean.
 *   mu: the population mean
 *   sd: the population standard deviation
 *   mean: the sample mean
 *   n: the sample size
 *   See also: kixi.stats.core/simple-t-test
 */
kixi.stats.test.simple_t_test = (function kixi$stats$test$simple_t_test(p__43390,p__43391){
var map__43394 = p__43390;
var map__43394__$1 = cljs.core.__destructure_map(map__43394);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43394__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43394__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var map__43395 = p__43391;
var map__43395__$1 = cljs.core.__destructure_map(map__43395);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43395__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43395__$1,new cljs.core.Keyword(null,"n","n",562130025));
var dof = (n - (1));
var t = (function (){var and__4251__auto__ = (sd > (0));
if(and__4251__auto__){
var and__4251__auto____$1 = (n > (0));
if(and__4251__auto____$1){
return ((mean - mu) / (sd / kixi.stats.math.sqrt(n)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = t;
if(cljs.core.truth_(and__4251__auto__)){
return (dof > (0));
} else {
return and__4251__auto__;
}
})())){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(t,kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),dof], null)));
} else {
return null;
}
});

//# sourceMappingURL=kixi.stats.test.js.map
