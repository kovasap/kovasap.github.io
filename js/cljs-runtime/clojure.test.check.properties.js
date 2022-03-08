goog.provide('clojure.test.check.properties');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.test.check.results.Result}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.properties.ErrorResult = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k38567,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__38582 = k38567;
var G__38582__$1 = (((G__38582 instanceof cljs.core.Keyword))?G__38582.fqn:null);
switch (G__38582__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38567,else__4505__auto__);

}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__38588){
var vec__38590 = p__38588;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38590,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38590,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#clojure.test.check.properties.ErrorResult{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38566){
var self__ = this;
var G__38566__$1 = this;
return (new cljs.core.RecordIter((0),G__38566__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-12654282 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$pass_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$result_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635),self__.error], null);
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38568,other38569){
var self__ = this;
var this38568__$1 = this;
return (((!((other38569 == null)))) && ((((this38568__$1.constructor === other38569.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38568__$1.error,other38569.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38568__$1.__extmap,other38569.__extmap)))))));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k38567){
var self__ = this;
var this__4509__auto____$1 = this;
var G__38673 = k38567;
var G__38673__$1 = (((G__38673 instanceof cljs.core.Keyword))?G__38673.fqn:null);
switch (G__38673__$1) {
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38567);

}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__38566){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__38679 = cljs.core.keyword_identical_QMARK_;
var expr__38680 = k__4511__auto__;
if(cljs.core.truth_((pred__38679.cljs$core$IFn$_invoke$arity$2 ? pred__38679.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__38680) : pred__38679.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__38680)))){
return (new clojure.test.check.properties.ErrorResult(G__38566,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__38566),null));
}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__38566){
var self__ = this;
var this__4501__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,G__38566,self__.__extmap,self__.__hash));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(clojure.test.check.properties.ErrorResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(clojure.test.check.properties.ErrorResult.cljs$lang$type = true);

(clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"clojure.test.check.properties/ErrorResult",null,(1),null));
}));

(clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"clojure.test.check.properties/ErrorResult");
}));

/**
 * Positional factory function for clojure.test.check.properties/ErrorResult.
 */
clojure.test.check.properties.__GT_ErrorResult = (function clojure$test$check$properties$__GT_ErrorResult(error){
return (new clojure.test.check.properties.ErrorResult(error,null,null,null));
});

/**
 * Factory function for clojure.test.check.properties/ErrorResult, taking a map of keywords to field values.
 */
clojure.test.check.properties.map__GT_ErrorResult = (function clojure$test$check$properties$map__GT_ErrorResult(G__38570){
var extmap__4542__auto__ = (function (){var G__38685 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38570,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__38570)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38685);
} else {
return G__38685;
}
})();
return (new clojure.test.check.properties.ErrorResult(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__38570),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

clojure.test.check.properties.exception_QMARK_ = (function clojure$test$check$properties$exception_QMARK_(x){
return (x instanceof Error);
});
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,args);
if(clojure.test.check.properties.exception_QMARK_(ret)){
throw ret;
} else {
return ret;
}
}catch (e38725){var ex = e38725;
return clojure.test.check.properties.__GT_ErrorResult(ex);
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
});
});
/**
 * A function version of `for-all`. Takes a sequence of N generators
 *   and a function of N args, and returns a property that calls the
 *   function with generated values and tests the return value for
 *   truthiness, like with `for-all`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/large-integer gen/large-integer]
 *          (fn [a b] (>= (+ a b) a)))
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap(clojure.test.check.properties.apply_gen(function$),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});

//# sourceMappingURL=clojure.test.check.properties.js.map
