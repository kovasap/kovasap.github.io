goog.provide('spec_tools.core');
spec_tools.core.registry = (function spec_tools$core$registry(var_args){
var G__47270 = arguments.length;
switch (G__47270) {
case 0:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.alpha.registry();
}));

(spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1 = (function (re){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47267_SHARP_){
return cljs.core.re_matches(re,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__47267_SHARP_)),(1)));
}),cljs.spec.alpha.registry()));
}));

(spec_tools.core.registry.cljs$lang$maxFixedArity = 1);

/**
 * Finds recursively a spec implementation from the registry
 */
spec_tools.core.get_spec = (function spec_tools$core$get_spec(name){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),name);
if(cljs.core.truth_(temp__5751__auto__)){
var spec = temp__5751__auto__;
if((spec instanceof cljs.core.Keyword)){
return (spec_tools.core.get_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.get_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.get_spec.call(null,spec));
} else {
return spec;
}
} else {
return null;
}
});
/**
 * Returns a spec from a spec name or spec. Throws exception
 *   if no spec was found.
 */
spec_tools.core.coerce_spec = (function spec_tools$core$coerce_spec(name_or_spec){
var or__4253__auto__ = (function (){var and__4251__auto__ = (spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(name_or_spec) : spec_tools.core.spec_QMARK_.call(null,name_or_spec));
if(cljs.core.truth_(and__4251__auto__)){
return name_or_spec;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = spec_tools.core.get_spec(name_or_spec);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't coerce to spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_or_spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name-or-spec","name-or-spec",-1287260145),name_or_spec], null));
}
}
});
/**
 * Writes specs into a string that can be read by the reader.
 *   TODO: Should optionally write the related Registry entries.
 */
spec_tools.core.serialize = (function spec_tools$core$serialize(spec){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.form(spec)], 0));
});
/**
 * Reads specs from a string.
 *   TODO: Should optionally read the related Registry entries.
 */
spec_tools.core.deserialize = (function spec_tools$core$deserialize(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
spec_tools.core._STAR_dynamic_conforming_STAR_ = null;

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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.core.DynamicConforming = (function (transformer,encode_QMARK_,spec_transformed,__meta,__extmap,__hash){
this.transformer = transformer;
this.encode_QMARK_ = encode_QMARK_;
this.spec_transformed = spec_transformed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.core.DynamicConforming.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k47288,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__47293 = k47288;
var G__47293__$1 = (((G__47293 instanceof cljs.core.Keyword))?G__47293.fqn:null);
switch (G__47293__$1) {
case "transformer":
return self__.transformer;

break;
case "encode?":
return self__.encode_QMARK_;

break;
case "spec-transformed":
return self__.spec_transformed;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47288,else__4505__auto__);

}
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__47295){
var vec__47297 = p__47295;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47297,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47297,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#spec-tools.core.DynamicConforming{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"encode?","encode?",-640109139),self__.encode_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320),self__.spec_transformed],null))], null),self__.__extmap));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47287){
var self__ = this;
var G__47287__$1 = this;
return (new cljs.core.RecordIter((0),G__47287__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"encode?","encode?",-640109139),new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new spec_tools.core.DynamicConforming(self__.transformer,self__.encode_QMARK_,self__.spec_transformed,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2112817358 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47289,other47290){
var self__ = this;
var this47289__$1 = this;
return (((!((other47290 == null)))) && ((((this47289__$1.constructor === other47290.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47289__$1.transformer,other47290.transformer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47289__$1.encode_QMARK_,other47290.encode_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47289__$1.spec_transformed,other47290.spec_transformed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47289__$1.__extmap,other47290.__extmap)))))))))));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"encode?","encode?",-640109139),null,new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new spec_tools.core.DynamicConforming(self__.transformer,self__.encode_QMARK_,self__.spec_transformed,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k47288){
var self__ = this;
var this__4509__auto____$1 = this;
var G__47321 = k47288;
var G__47321__$1 = (((G__47321 instanceof cljs.core.Keyword))?G__47321.fqn:null);
switch (G__47321__$1) {
case "transformer":
case "encode?":
case "spec-transformed":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47288);

}
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__47287){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__47326 = cljs.core.keyword_identical_QMARK_;
var expr__47327 = k__4511__auto__;
if(cljs.core.truth_((pred__47326.cljs$core$IFn$_invoke$arity$2 ? pred__47326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__47327) : pred__47326.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__47327)))){
return (new spec_tools.core.DynamicConforming(G__47287,self__.encode_QMARK_,self__.spec_transformed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47326.cljs$core$IFn$_invoke$arity$2 ? pred__47326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"encode?","encode?",-640109139),expr__47327) : pred__47326.call(null,new cljs.core.Keyword(null,"encode?","encode?",-640109139),expr__47327)))){
return (new spec_tools.core.DynamicConforming(self__.transformer,G__47287,self__.spec_transformed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47326.cljs$core$IFn$_invoke$arity$2 ? pred__47326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320),expr__47327) : pred__47326.call(null,new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320),expr__47327)))){
return (new spec_tools.core.DynamicConforming(self__.transformer,self__.encode_QMARK_,G__47287,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.core.DynamicConforming(self__.transformer,self__.encode_QMARK_,self__.spec_transformed,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__47287),null));
}
}
}
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"encode?","encode?",-640109139),self__.encode_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320),self__.spec_transformed,null))], null),self__.__extmap));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__47287){
var self__ = this;
var this__4501__auto____$1 = this;
return (new spec_tools.core.DynamicConforming(self__.transformer,self__.encode_QMARK_,self__.spec_transformed,G__47287,self__.__extmap,self__.__hash));
}));

(spec_tools.core.DynamicConforming.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(spec_tools.core.DynamicConforming.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transformer","transformer",147060907,null),new cljs.core.Symbol(null,"encode?","encode?",1000422388,null),new cljs.core.Symbol(null,"spec-transformed","spec-transformed",181209207,null)], null);
}));

(spec_tools.core.DynamicConforming.cljs$lang$type = true);

(spec_tools.core.DynamicConforming.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"spec-tools.core/DynamicConforming",null,(1),null));
}));

(spec_tools.core.DynamicConforming.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"spec-tools.core/DynamicConforming");
}));

/**
 * Positional factory function for spec-tools.core/DynamicConforming.
 */
spec_tools.core.__GT_DynamicConforming = (function spec_tools$core$__GT_DynamicConforming(transformer,encode_QMARK_,spec_transformed){
return (new spec_tools.core.DynamicConforming(transformer,encode_QMARK_,spec_transformed,null,null,null));
});

/**
 * Factory function for spec-tools.core/DynamicConforming, taking a map of keywords to field values.
 */
spec_tools.core.map__GT_DynamicConforming = (function spec_tools$core$map__GT_DynamicConforming(G__47291){
var extmap__4542__auto__ = (function (){var G__47341 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47291,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"encode?","encode?",-640109139),new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320)], 0));
if(cljs.core.record_QMARK_(G__47291)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47341);
} else {
return G__47341;
}
})();
return (new spec_tools.core.DynamicConforming(new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__47291),new cljs.core.Keyword(null,"encode?","encode?",-640109139).cljs$core$IFn$_invoke$arity$1(G__47291),new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320).cljs$core$IFn$_invoke$arity$1(G__47291),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
 * @interface
 */
spec_tools.core.Coercion = function(){};

var spec_tools$core$Coercion$_coerce$dyn_47778 = (function (this$,value,transformer,options){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (spec_tools.core._coerce[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,value,transformer,options) : m__4551__auto__.call(null,this$,value,transformer,options));
} else {
var m__4549__auto__ = (spec_tools.core._coerce["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,value,transformer,options) : m__4549__auto__.call(null,this$,value,transformer,options));
} else {
throw cljs.core.missing_protocol("Coercion.-coerce",this$);
}
}
});
spec_tools.core._coerce = (function spec_tools$core$_coerce(this$,value,transformer,options){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Coercion$_coerce$arity$4 == null)))))){
return this$.spec_tools$core$Coercion$_coerce$arity$4(this$,value,transformer,options);
} else {
return spec_tools$core$Coercion$_coerce$dyn_47778(this$,value,transformer,options);
}
});


/**
 * @interface
 */
spec_tools.core.Transformer = function(){};

var spec_tools$core$Transformer$_name$dyn_47780 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (spec_tools.core._name[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (spec_tools.core._name["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Transformer.-name",this$);
}
}
});
spec_tools.core._name = (function spec_tools$core$_name(this$){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_name$arity$1 == null)))))){
return this$.spec_tools$core$Transformer$_name$arity$1(this$);
} else {
return spec_tools$core$Transformer$_name$dyn_47780(this$);
}
});

var spec_tools$core$Transformer$_options$dyn_47784 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (spec_tools.core._options[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (spec_tools.core._options["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Transformer.-options",this$);
}
}
});
spec_tools.core._options = (function spec_tools$core$_options(this$){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_options$arity$1 == null)))))){
return this$.spec_tools$core$Transformer$_options$arity$1(this$);
} else {
return spec_tools$core$Transformer$_options$dyn_47784(this$);
}
});

var spec_tools$core$Transformer$_encoder$dyn_47785 = (function (this$,spec,value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (spec_tools.core._encoder[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4551__auto__.call(null,this$,spec,value));
} else {
var m__4549__auto__ = (spec_tools.core._encoder["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4549__auto__.call(null,this$,spec,value));
} else {
throw cljs.core.missing_protocol("Transformer.-encoder",this$);
}
}
});
spec_tools.core._encoder = (function spec_tools$core$_encoder(this$,spec,value){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_encoder$arity$3 == null)))))){
return this$.spec_tools$core$Transformer$_encoder$arity$3(this$,spec,value);
} else {
return spec_tools$core$Transformer$_encoder$dyn_47785(this$,spec,value);
}
});

var spec_tools$core$Transformer$_decoder$dyn_47786 = (function (this$,spec,value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (spec_tools.core._decoder[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4551__auto__.call(null,this$,spec,value));
} else {
var m__4549__auto__ = (spec_tools.core._decoder["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4549__auto__.call(null,this$,spec,value));
} else {
throw cljs.core.missing_protocol("Transformer.-decoder",this$);
}
}
});
spec_tools.core._decoder = (function spec_tools$core$_decoder(this$,spec,value){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_decoder$arity$3 == null)))))){
return this$.spec_tools$core$Transformer$_decoder$arity$3(this$,spec,value);
} else {
return spec_tools$core$Transformer$_decoder$dyn_47786(this$,spec,value);
}
});

/**
 * Returns a Transformer instance out of options map or Transformer instances.
 *   Available options:
 * 
 *   | Key                | Description
 *   |--------------------|-----------------
 *   | `:name`            | Name of the transformer
 *   | `:encoders`        | Map of type `type -> transform`
 *   | `:decoders`        | Map of type `type -> transform`
 *   | `:default-encoder` | Default `transform` for encoding
 *   | `:default-decoder` | Default `transform` for decoding
 * 
 *   Example of a JSON type-transformer:
 * 
 *   ```clojure
 *   (require '[spec-tools.core :as st])
 *   (require '[spec-tools.transform :as stt])
 * 
 *   (def json-transformer
 *  (type-transformer
 *    {:name :json
 *     :decoders stt/json-type-decoders
 *     :encoders stt/json-type-encoders
 *     :default-encoder stt/any->any}))
 *   ```
 * 
 *   Composed Strict JSON Transformer:
 * 
 *   ```clojure
 *   (def strict-json-transformer
 *  (st/type-transformer
 *    st/json-transformer
 *    st/strip-extra-keys-transformer
 *    st/strip-extra-values-transformer))
 *   ```
 */
spec_tools.core.type_transformer = (function spec_tools$core$type_transformer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47789 = arguments.length;
var i__4865__auto___47790 = (0);
while(true){
if((i__4865__auto___47790 < len__4864__auto___47789)){
args__4870__auto__.push((arguments[i__4865__auto___47790]));

var G__47791 = (i__4865__auto___47790 + (1));
i__4865__auto___47790 = G__47791;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic = (function (options_or_transformers){
var __GT_opts = (function (p1__47372_SHARP_){
if((((!((p1__47372_SHARP_ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__47372_SHARP_.spec_tools$core$Transformer$))))?true:(((!p1__47372_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(spec_tools.core.Transformer,p1__47372_SHARP_):false)):cljs.core.native_satisfies_QMARK_(spec_tools.core.Transformer,p1__47372_SHARP_))){
return spec_tools.core._options(p1__47372_SHARP_);
} else {
return p1__47372_SHARP_;
}
});
var map__47381 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(spec_tools.impl.deep_merge,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_opts,options_or_transformers));
var map__47381__$1 = cljs.core.__destructure_map(map__47381);
var options = map__47381__$1;
var transformer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var encoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47381__$1,new cljs.core.Keyword(null,"encoders","encoders",-111722908));
var decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47381__$1,new cljs.core.Keyword(null,"decoders","decoders",1132818244));
var default_encoder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47381__$1,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207));
var default_decoder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47381__$1,new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161));
var encode_key = (function (){var G__47388 = transformer_name;
var G__47388__$1 = (((G__47388 == null))?null:cljs.core.name(G__47388));
var G__47388__$2 = (((G__47388__$1 == null))?null:["encode/",G__47388__$1].join(''));
if((G__47388__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__47388__$2);
}
})();
var decode_key = (function (){var G__47391 = transformer_name;
var G__47391__$1 = (((G__47391 == null))?null:cljs.core.name(G__47391));
var G__47391__$2 = (((G__47391__$1 == null))?null:["decode/",G__47391__$1].join(''));
if((G__47391__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__47391__$2);
}
})();
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core47392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core47392 = (function (options,encoders,decoders,map__47381,default_decoder,transformer_name,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,meta47393){
this.options = options;
this.encoders = encoders;
this.decoders = decoders;
this.map__47381 = map__47381;
this.default_decoder = default_decoder;
this.transformer_name = transformer_name;
this.encode_key = encode_key;
this.decode_key = decode_key;
this.__GT_opts = __GT_opts;
this.default_encoder = default_encoder;
this.options_or_transformers = options_or_transformers;
this.meta47393 = meta47393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(spec_tools.core.t_spec_tools$core47392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47394,meta47393__$1){
var self__ = this;
var _47394__$1 = this;
return (new spec_tools.core.t_spec_tools$core47392(self__.options,self__.encoders,self__.decoders,self__.map__47381,self__.default_decoder,self__.transformer_name,self__.encode_key,self__.decode_key,self__.__GT_opts,self__.default_encoder,self__.options_or_transformers,meta47393__$1));
}));

(spec_tools.core.t_spec_tools$core47392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47394){
var self__ = this;
var _47394__$1 = this;
return self__.meta47393;
}));

(spec_tools.core.t_spec_tools$core47392.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.t_spec_tools$core47392.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.transformer_name;
}));

(spec_tools.core.t_spec_tools$core47392.prototype.spec_tools$core$Transformer$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(spec_tools.core.t_spec_tools$core47392.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,self__.encode_key);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.encoders,spec_tools.parse.type_dispatch_value(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(temp__5753__auto__)){
var e = temp__5753__auto__;
return (function (this$,x){
var _STAR_dynamic_conforming_STAR__orig_val__47406 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47407 = spec_tools.core.__GT_DynamicConforming(null,false,null);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47407);

try{return (e.cljs$core$IFn$_invoke$arity$2 ? e.cljs$core$IFn$_invoke$arity$2(this$,x) : e.call(null,this$,x));
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47406);
}});
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return self__.default_encoder;
}
}
}));

(spec_tools.core.t_spec_tools$core47392.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,self__.decode_key);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.decoders,spec_tools.parse.type_dispatch_value(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return self__.default_decoder;
}
}
}));

(spec_tools.core.t_spec_tools$core47392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"encoders","encoders",1528808619,null),new cljs.core.Symbol(null,"decoders","decoders",-1521617525,null),new cljs.core.Symbol(null,"map__47381","map__47381",-790192595,null),new cljs.core.Symbol(null,"default-decoder","default-decoder",-1846078608,null),new cljs.core.Symbol(null,"transformer-name","transformer-name",1500736595,null),new cljs.core.Symbol(null,"encode-key","encode-key",61285653,null),new cljs.core.Symbol(null,"decode-key","decode-key",-1250072619,null),new cljs.core.Symbol(null,"->opts","->opts",-1799002948,null),new cljs.core.Symbol(null,"default-encoder","default-encoder",1758072734,null),new cljs.core.Symbol(null,"options-or-transformers","options-or-transformers",878001150,null),new cljs.core.Symbol(null,"meta47393","meta47393",-1516470110,null)], null);
}));

(spec_tools.core.t_spec_tools$core47392.cljs$lang$type = true);

(spec_tools.core.t_spec_tools$core47392.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core47392");

(spec_tools.core.t_spec_tools$core47392.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"spec-tools.core/t_spec_tools$core47392");
}));

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core47392.
 */
spec_tools.core.__GT_t_spec_tools$core47392 = (function spec_tools$core$__GT_t_spec_tools$core47392(options__$1,encoders__$1,decoders__$1,map__47381__$2,default_decoder__$1,transformer_name__$1,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta47393){
return (new spec_tools.core.t_spec_tools$core47392(options__$1,encoders__$1,decoders__$1,map__47381__$2,default_decoder__$1,transformer_name__$1,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta47393));
});

}

return (new spec_tools.core.t_spec_tools$core47392(options,encoders,decoders,map__47381__$1,default_decoder,transformer_name,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,cljs.core.PersistentArrayMap.EMPTY));
}));

(spec_tools.core.type_transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(spec_tools.core.type_transformer.cljs$lang$applyTo = (function (seq47375){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47375));
}));

/**
 * Transformer that transforms data between JSON and EDN.
 */
spec_tools.core.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.json_type_decoders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),spec_tools.transform.json_type_encoders,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),spec_tools.transform.any__GT_any], null)], 0));
/**
 * Transformer that transforms data between Strings and EDN.
 */
spec_tools.core.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.string_type_decoders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),spec_tools.transform.string_type_encoders,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),spec_tools.transform.any__GT_any], null)], 0));
/**
 * Transformer that drop extra keys from `s/keys` specs.
 */
spec_tools.core.strip_extra_keys_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","strip-extra-keys","spec-tools.core/strip-extra-keys",-1640458075),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.strip_extra_keys_type_decoders], null)], 0));
/**
 * Transformer that drop extra values from `s/tuple` specs.
 */
spec_tools.core.strip_extra_values_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","strip-extra-values","spec-tools.core/strip-extra-values",368120531),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.strip_extra_values_type_decoders], null)], 0));
/**
 * Transformer that fails on extra keys in `s/keys` specs.
 */
spec_tools.core.fail_on_extra_keys_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","fail-on-extra-keys","spec-tools.core/fail-on-extra-keys",-434971052),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.fail_on_extra_keys_type_decoders], null)], 0));
/**
 * Like `clojure.core.alpha/explain` but supports transformers
 */
spec_tools.core.explain = (function spec_tools$core$explain(var_args){
var G__47428 = arguments.length;
switch (G__47428) {
case 2:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_dynamic_conforming_STAR__orig_val__47431 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47432 = spec_tools.core.__GT_DynamicConforming(transformer,false,null);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47432);

try{return cljs.spec.alpha.explain((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47431);
}}));

(spec_tools.core.explain.cljs$lang$maxFixedArity = 3);

/**
 * Like `clojure.core.alpha/explain-data` but supports transformers
 */
spec_tools.core.explain_data = (function spec_tools$core$explain_data(var_args){
var G__47435 = arguments.length;
switch (G__47435) {
case 2:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_dynamic_conforming_STAR__orig_val__47436 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47437 = spec_tools.core.__GT_DynamicConforming(transformer,false,null);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47437);

try{return cljs.spec.alpha.explain_data((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47436);
}}));

(spec_tools.core.explain_data.cljs$lang$maxFixedArity = 3);

/**
 * Given a spec and a value, returns the possibly destructured value
 * or ::s/invalid
 */
spec_tools.core.conform = (function spec_tools$core$conform(var_args){
var G__47441 = arguments.length;
switch (G__47441) {
case 2:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_dynamic_conforming_STAR__orig_val__47442 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47443 = spec_tools.core.__GT_DynamicConforming(transformer,false,null);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47443);

try{return cljs.spec.alpha.conform((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47442);
}}));

(spec_tools.core.conform.cljs$lang$maxFixedArity = 3);

/**
 * Given a spec and a value, returns the possibly destructured value
 * or fails with ex-info with :type of ::conform. ex-data also contains
 * :problems, :spec and :value. call s/unform on the result to get the
 * actual conformed value.
 */
spec_tools.core.conform_BANG_ = (function spec_tools$core$conform_BANG_(var_args){
var G__47447 = arguments.length;
switch (G__47447) {
case 2:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_dynamic_conforming_STAR__orig_val__47454 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47455 = spec_tools.core.__GT_DynamicConforming(transformer,false,null);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47455);

try{var spec_SINGLEQUOTE_ = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var conformed = cljs.spec.alpha.conform(spec_SINGLEQUOTE_,value);
if((!(cljs.spec.alpha.invalid_QMARK_(conformed)))){
return conformed;
} else {
var problems = cljs.spec.alpha.explain_data(spec_SINGLEQUOTE_,value);
var data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("spec-tools.core","conform","spec-tools.core/conform",-97557480),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(problems),new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"value","value",305978217),value], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec conform error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),data);
}
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47454);
}}));

(spec_tools.core.conform_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Coerces the value using a [[Transformer]]. Returns original value for
 *   those parts of the value that can't be trasformed.
 */
spec_tools.core.coerce = (function spec_tools$core$coerce(var_args){
var G__47462 = arguments.length;
switch (G__47462) {
case 3:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4(spec,value,transformer,null);
}));

(spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4 = (function (spec,value,transformer,options){
return spec_tools.core._coerce((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value,transformer,options);
}));

(spec_tools.core.coerce.cljs$lang$maxFixedArity = 4);

/**
 * Decodes a value using a [[Transformer]] from external format to a value
 *   defined by the spec. First, calls [[coerce]] and returns the value if it's
 *   valid - otherwise, calls [[conform]] & [[unform]]. You can also provide a
 *   spec to validate the decoded value after transformation. Returns `::s/invalid`
 *   if the value can't be decoded to conform the spec.
 */
spec_tools.core.decode = (function spec_tools$core$decode(var_args){
var G__47468 = arguments.length;
switch (G__47468) {
case 2:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$4(spec,value,transformer,null);
}));

(spec_tools.core.decode.cljs$core$IFn$_invoke$arity$4 = (function (spec,value,transformer,spec_transformed){
var spec__$1 = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var _STAR_dynamic_conforming_STAR__orig_val__47471 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47472 = spec_tools.core.__GT_DynamicConforming(transformer,false,spec_transformed);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47472);

try{var conformed = cljs.spec.alpha.conform(spec__$1,value);
if(cljs.spec.alpha.invalid_QMARK_(conformed)){
return conformed;
} else {
if(cljs.core.truth_(spec_transformed)){
return cljs.spec.alpha.unform(spec_transformed,conformed);
} else {
return cljs.spec.alpha.unform(spec__$1,conformed);
}
}
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47471);
}}
}));

(spec_tools.core.decode.cljs$lang$maxFixedArity = 4);

/**
 * Transforms a value (using a [[Transformer]]) from external
 *   format into a value defined by the spec. You can also provide a
 *   spec to validate the encoded value after transformation.
 *   On error, returns `::s/invalid`.
 */
spec_tools.core.encode = (function spec_tools$core$encode(var_args){
var G__47476 = arguments.length;
switch (G__47476) {
case 3:
return spec_tools.core.encode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return spec_tools.core.encode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.encode.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
return spec_tools.core.encode.cljs$core$IFn$_invoke$arity$4(spec,value,transformer,null);
}));

(spec_tools.core.encode.cljs$core$IFn$_invoke$arity$4 = (function (spec,value,transformer,spec_transformed){
var _STAR_dynamic_conforming_STAR__orig_val__47478 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47479 = spec_tools.core.__GT_DynamicConforming(transformer,true,spec_transformed);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47479);

try{var spec__$1 = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var conformed = cljs.spec.alpha.conform(spec__$1,value);
if(cljs.spec.alpha.invalid_QMARK_(conformed)){
return conformed;
} else {
if(cljs.core.truth_(spec_transformed)){
return cljs.spec.alpha.unform(spec_transformed,conformed);
} else {
return cljs.spec.alpha.unform(spec__$1,conformed);
}
}
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47478);
}}));

(spec_tools.core.encode.cljs$lang$maxFixedArity = 4);

/**
 * Best effort to drop recursively all extra keys out of a keys spec value.
 */
spec_tools.core.select_spec = (function spec_tools$core$select_spec(spec,value){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec,value,spec_tools.core.strip_extra_keys_transformer);
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.walk !== 'undefined')){
} else {
spec_tools.core.walk = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47481 = cljs.core.get_global_hierarchy;
return (fexpr__47481.cljs$core$IFn$_invoke$arity$0 ? fexpr__47481.cljs$core$IFn$_invoke$arity$0() : fexpr__47481.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.core","walk"),(function (p__47482,_,___$1,___$2){
var map__47483 = p__47482;
var map__47483__$1 = cljs.core.__destructure_map(map__47483);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return spec_tools.parse.type_dispatch_value(type);
}),new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940),(function (spec,value,accept,options){
if(cljs.core.truth_((function (){var and__4251__auto__ = (spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.spec_QMARK_.call(null,spec));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4251__auto__;
}
})())){
var G__47484 = spec;
var G__47485 = value;
var G__47486 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"skip?","skip?",1467795012),true);
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(G__47484,G__47485,G__47486) : accept.call(null,G__47484,G__47485,G__47486));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (p__47487,value,accept,options){
var map__47490 = p__47487;
var map__47490__$1 = cljs.core.__destructure_map(map__47490);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,item){
var transformed = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
var valid_QMARK_ = (function (){var G__47497 = item;
var G__47497__$1 = (((G__47497 == null))?null:new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__47497));
if((G__47497__$1 == null)){
return null;
} else {
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(G__47497__$1,transformed);
}
})();
if(cljs.core.truth_(valid_QMARK_)){
return cljs.core.reduced(transformed);
} else {
return transformed;
}
}),value,items);
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (p__47499,value,accept,options){
var map__47500 = p__47499;
var map__47500__$1 = cljs.core.__destructure_map(map__47500);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47500__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,item){
var transformed = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
return transformed;
}),value,items);
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nilable","nilable",1842307102),(function (p__47501,value,accept,options){
var map__47502 = p__47501;
var map__47502__$1 = cljs.core.__destructure_map(map__47502);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47502__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,value,options) : accept.call(null,item,value,options));
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__47503,value,accept,options){
var map__47504 = p__47503;
var map__47504__$1 = cljs.core.__destructure_map(map__47504);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47504__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
if(cljs.core.sequential_QMARK_(value)){
var f = ((cljs.core.seq_QMARK_(value))?cljs.core.reverse:cljs.core.identity);
var G__47506 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(value),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
}),value));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47506) : f.call(null,G__47506));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (p__47514,value,accept,options){
var map__47515 = p__47514;
var map__47515__$1 = cljs.core.__destructure_map(map__47515);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(value),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__47525){
var vec__47528 = p__47525;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47528,(1),null);
if((i < cljs.core.count(items))){
var G__47531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,i);
if((G__47531 == null)){
return null;
} else {
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(G__47531,v,options) : accept.call(null,G__47531,v,options));
}
} else {
return v;
}
}))),value);
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__47534,value,accept,options){
var map__47535 = p__47534;
var map__47535__$1 = cljs.core.__destructure_map(map__47535);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47535__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
if(((cljs.core.set_QMARK_(value)) || (cljs.core.sequential_QMARK_(value)))){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
}),value));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__47538,value,accept,options){
var map__47539 = p__47538;
var map__47539__$1 = cljs.core.__destructure_map(map__47539);
var key__GT_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47539__$1,new cljs.core.Keyword("spec-tools.parse","key->spec","spec-tools.parse/key->spec",1347735257));
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce_kv((function (acc,k,v){
var spec = ((cljs.core.qualified_keyword_QMARK_(k))?cljs.spec.alpha.get_spec(k):cljs.spec.alpha.get_spec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(key__GT_spec,k)));
var value__$1 = (cljs.core.truth_(spec)?(accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(spec,v,options) : accept.call(null,spec,v,options)):v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,value__$1);
}),value,value);
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (p__47542,data,accept,options){
var map__47544 = p__47542;
var map__47544__$1 = cljs.core.__destructure_map(map__47544);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47544__$1,new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47544__$1,new cljs.core.Keyword("spec-tools.parse","value","spec-tools.parse/value",-492706501));
if(cljs.core.map_QMARK_(data)){
return cljs.core.reduce_kv((function (acc,k,v){
var k_SINGLEQUOTE_ = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(key,k,options) : accept.call(null,key,k,options));
var v_SINGLEQUOTE_ = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(value,v,options) : accept.call(null,value,v,options));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v_SINGLEQUOTE_);
}),cljs.core.empty(data),data);
} else {
return data;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),(function (p__47546,data,accept,options){
var map__47547 = p__47546;
var map__47547__$1 = cljs.core.__destructure_map(map__47547);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47547__$1,new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47547__$1,new cljs.core.Keyword("spec-tools.parse","dispatch","spec-tools.parse/dispatch",1593226563));
var dispatch_key = (function (p1__47545_SHARP_){
var or__4253__auto__ = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(p1__47545_SHARP_) : key.call(null,p1__47545_SHARP_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var fexpr__47548 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key));
return (fexpr__47548.cljs$core$IFn$_invoke$arity$1 ? fexpr__47548.cljs$core$IFn$_invoke$arity$1(p1__47545_SHARP_) : fexpr__47548.call(null,p1__47545_SHARP_));
}
})(data);
var dispatch_spec = (function (){var or__4253__auto__ = (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(dispatch_key) : dispatch.call(null,dispatch_key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__47549 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dispatch_key);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47549) : dispatch.call(null,G__47549));
}
})();
return spec_tools.core.walk.cljs$core$IFn$_invoke$arity$4(spec_tools.parse.parse_spec.cljs$core$IFn$_invoke$arity$1(dispatch_spec),data,accept,options);
}));
spec_tools.core.extra_spec_map = (function spec_tools$core$extra_spec_map(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47550){
var vec__47551 = p__47550;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47551,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("spec-tools.parse",cljs.core.namespace(k))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"spec","spec",347520401)], 0)));
});
spec_tools.core.fail_on_invoke = (function spec_tools$core$fail_on_invoke(spec){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't invoke spec with a non-function predicate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
});
spec_tools.core.leaf_QMARK_ = (function spec_tools$core$leaf_QMARK_(spec){
return new cljs.core.Keyword(null,"leaf?","leaf?",445442965).cljs$core$IFn$_invoke$arity$1((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)));
});
/**
 * Dynamic conforming can't walk over composite specs like s/and & s/or.
 *   So, we'll use the first type. Examples:
 * 
 *   `[:and [:int :string]]` -> `:int`
 *   `[:or [:string :keyword]]` -> `:string`
 */
spec_tools.core.decompose_spec_type = (function spec_tools$core$decompose_spec_type(spec){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.sequential_QMARK_(type)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second));
} else {
return spec;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {spec_tools.core.Coercion}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.core.Spec = (function (spec,form,type,__meta,__extmap,__hash){
this.spec = spec;
this.form = form;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k47560,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__47570 = k47560;
var G__47570__$1 = (((G__47570 instanceof cljs.core.Keyword))?G__47570.fqn:null);
switch (G__47570__$1) {
case "spec":
return self__.spec;

break;
case "form":
return self__.form;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47560,else__4505__auto__);

}
}));

(spec_tools.core.Spec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__47572){
var vec__47573 = p__47572;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47573,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47573,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(spec_tools.core.Spec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#spec-tools.core.Spec{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
}));

(spec_tools.core.Spec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47559){
var self__ = this;
var G__47559__$1 = this;
return (new cljs.core.RecordIter((0),G__47559__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.core.Spec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.core.Spec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.core.Spec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(spec_tools.core.Spec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (344961240 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(spec_tools.core.Spec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47561,other47562){
var self__ = this;
var this47561__$1 = this;
return (((!((other47562 == null)))) && ((((this47561__$1.constructor === other47562.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47561__$1.spec,other47562.spec)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47561__$1.form,other47562.form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47561__$1.type,other47562.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47561__$1.__extmap,other47562.__extmap)))))))))));
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var map__47586 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var map__47586__$1 = cljs.core.__destructure_map(map__47586);
var transformer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47586__$1,new cljs.core.Keyword(null,"transformer","transformer",-1493470620));
var encode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47586__$1,new cljs.core.Keyword(null,"encode?","encode?",-640109139));
var spec_transformed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47586__$1,new cljs.core.Keyword(null,"spec-transformed","spec-transformed",-1459322320));
var temp__5751__auto__ = (cljs.core.truth_(transformer)?(function (){var G__47588 = transformer;
var G__47589 = spec_tools.core.decompose_spec_type(this$__$1);
var G__47590 = x;
var fexpr__47587 = (cljs.core.truth_(encode_QMARK_)?spec_tools.core._encoder:spec_tools.core._decoder);
return (fexpr__47587.cljs$core$IFn$_invoke$arity$3 ? fexpr__47587.cljs$core$IFn$_invoke$arity$3(G__47588,G__47589,G__47590) : fexpr__47587.call(null,G__47588,G__47589,G__47590));
})():null);
if(cljs.core.truth_(temp__5751__auto__)){
var transform = temp__5751__auto__;
var transformed = (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(this$__$1,x) : transform.call(null,this$__$1,x));
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.spec.alpha.invalid_QMARK_(transformed);
if(and__4251__auto__){
return transformed;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var conformed = (cljs.core.truth_(spec_transformed)?(function (){var _STAR_dynamic_conforming_STAR__orig_val__47591 = spec_tools.core._STAR_dynamic_conforming_STAR_;
var _STAR_dynamic_conforming_STAR__temp_val__47592 = spec_tools.core.__GT_DynamicConforming(null,encode_QMARK_,null);
(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__temp_val__47592);

try{return cljs.spec.alpha.conform(spec_transformed,transformed);
}finally {(spec_tools.core._STAR_dynamic_conforming_STAR_ = _STAR_dynamic_conforming_STAR__orig_val__47591);
}})():cljs.spec.alpha.conform(self__.spec,transformed));
var or__4253__auto____$1 = (function (){var and__4251__auto__ = spec_transformed;
if(cljs.core.truth_(and__4251__auto__)){
return conformed;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var and__4251__auto__ = encode_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.spec.alpha.invalid_QMARK_(conformed);
if(and__4251__auto____$1){
var and__4251__auto____$2 = spec_tools.core.leaf_QMARK_(this$__$1);
if(cljs.core.truth_(and__4251__auto____$2)){
return transformed;
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return conformed;
}
}
}
} else {
return cljs.spec.alpha.conform(self__.spec,x);
}
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform(self__.spec,x);
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
var problems = (cljs.core.truth_((function (){var or__4253__auto__ = cljs.spec.alpha.spec_QMARK_(self__.spec);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_(self__.spec);
}
})())?(function (){var conformed = this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x);
var vec__47593 = ((cljs.spec.alpha.invalid_QMARK_(conformed))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.invalid_QMARK_(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2(this$__$1,x)),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.spec.alpha.unform(self__.spec,conformed)], null));
var explain_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47593,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47593,(1),null);
if(cljs.core.truth_(explain_QMARK_)){
return cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize_STAR_(self__.spec),path,via,in$,val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
})():((cljs.spec.alpha.invalid_QMARK_(this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null):null));
var spec_reason = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(this$__$1);
var with_reason = (function (problem){
var G__47596 = problem;
if(cljs.core.truth_(spec_reason)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47596,new cljs.core.Keyword(null,"reason","reason",-2070751759),spec_reason);
} else {
return G__47596;
}
});
if(cljs.core.truth_(problems)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(with_reason,problems);
} else {
return null;
}
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (this$,overrides,path,rmap){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var gen = temp__5751__auto__;
return (gen.cljs$core$IFn$_invoke$arity$0 ? gen.cljs$core$IFn$_invoke$arity$0() : gen.call(null));
} else {
var or__4253__auto__ = cljs.spec.gen.alpha.gen_for_pred(self__.spec);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.gen_STAR_((function (){var or__4253__auto____$1 = cljs.spec.alpha.spec_QMARK_(self__.spec);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.spec.alpha.specize_STAR_(self__.spec);
}
})(),overrides,path,rmap);
}
}
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (this$,gfn){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"gen","gen",142575302),gfn);
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),self__.form], null),spec_tools.core.extra_spec_map(this$__$1)], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)))));
}));

(spec_tools.core.Spec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"spec","spec",347520401),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(spec_tools.core.Spec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k47560){
var self__ = this;
var this__4509__auto____$1 = this;
var G__47607 = k47560;
var G__47607__$1 = (((G__47607 instanceof cljs.core.Keyword))?G__47607.fqn:null);
switch (G__47607__$1) {
case "spec":
case "form":
case "type":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47560);

}
}));

(spec_tools.core.Spec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__47559){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__47608 = cljs.core.keyword_identical_QMARK_;
var expr__47609 = k__4511__auto__;
if(cljs.core.truth_((pred__47608.cljs$core$IFn$_invoke$arity$2 ? pred__47608.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"spec","spec",347520401),expr__47609) : pred__47608.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__47609)))){
return (new spec_tools.core.Spec(G__47559,self__.form,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47608.cljs$core$IFn$_invoke$arity$2 ? pred__47608.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__47609) : pred__47608.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__47609)))){
return (new spec_tools.core.Spec(self__.spec,G__47559,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47608.cljs$core$IFn$_invoke$arity$2 ? pred__47608.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__47609) : pred__47608.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__47609)))){
return (new spec_tools.core.Spec(self__.spec,self__.form,G__47559,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__47559),null));
}
}
}
}));

(spec_tools.core.Spec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null))], null),self__.__extmap));
}));

(spec_tools.core.Spec.prototype.spec_tools$core$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.spec_tools$core$Coercion$_coerce$arity$4 = (function (this$,value,transformer,options){
var self__ = this;
var this$__$1 = this;
var specify = (function (x){
while(true){
if((x instanceof cljs.core.Keyword)){
var G__47857 = cljs.spec.alpha.get_spec(x);
x = G__47857;
continue;
} else {
if(cljs.core.truth_((spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : spec_tools.core.spec_QMARK_.call(null,x)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(x))){
var G__47620 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null);
return (spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1(G__47620) : spec_tools.core.create_spec.call(null,G__47620));
} else {
if(cljs.core.map_QMARK_(x)){
if(cljs.core.qualified_keyword_QMARK_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x))){
var G__47858 = cljs.spec.alpha.get_spec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x));
x = G__47858;
continue;
} else {
var G__47622 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.any_QMARK_));
return (spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1(G__47622) : spec_tools.core.create_spec.call(null,G__47622));
}
} else {
return null;
}
}
}
}
break;
}
});
var transformed = (function (){var temp__5751__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = transformer;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4251__auto__;
}
})())?spec_tools.core._decoder(transformer,this$__$1,value):null);
if(cljs.core.truth_(temp__5751__auto__)){
var transform = temp__5751__auto__;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(this$__$1,value) : transform.call(null,this$__$1,value));
} else {
return value;
}
})();
return spec_tools.core.walk.cljs$core$IFn$_invoke$arity$4(this$__$1,transformed,(function (p1__47555_SHARP_,p2__47556_SHARP_,p3__47557_SHARP_){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4(specify(p1__47555_SHARP_),p2__47556_SHARP_,transformer,p3__47557_SHARP_);
}),options);
}));

(spec_tools.core.Spec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__47559){
var self__ = this;
var this__4501__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,G__47559,self__.__extmap,self__.__hash));
}));

(spec_tools.core.Spec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(spec_tools.core.Spec.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
if(cljs.core.ifn_QMARK_(self__.spec)){
return (self__.spec.cljs$core$IFn$_invoke$arity$1 ? self__.spec.cljs$core$IFn$_invoke$arity$1(x) : self__.spec.call(null,x));
} else {
return spec_tools.core.fail_on_invoke(this$);
}
}));

(spec_tools.core.Spec.prototype.apply = (function (self__,args47567){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47567)));
}));

(spec_tools.core.Spec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
if(cljs.core.ifn_QMARK_(self__.spec)){
return (self__.spec.cljs$core$IFn$_invoke$arity$1 ? self__.spec.cljs$core$IFn$_invoke$arity$1(x) : self__.spec.call(null,x));
} else {
return spec_tools.core.fail_on_invoke(this$);
}
}));

(spec_tools.core.Spec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null);
}));

(spec_tools.core.Spec.cljs$lang$type = true);

(spec_tools.core.Spec.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"spec-tools.core/Spec",null,(1),null));
}));

(spec_tools.core.Spec.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"spec-tools.core/Spec");
}));

/**
 * Positional factory function for spec-tools.core/Spec.
 */
spec_tools.core.__GT_Spec = (function spec_tools$core$__GT_Spec(spec,form,type){
return (new spec_tools.core.Spec(spec,form,type,null,null,null));
});

/**
 * Factory function for spec-tools.core/Spec, taking a map of keywords to field values.
 */
spec_tools.core.map__GT_Spec = (function spec_tools$core$map__GT_Spec(G__47566){
var extmap__4542__auto__ = (function (){var G__47640 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47566,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348)], 0));
if(cljs.core.record_QMARK_(G__47566)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47640);
} else {
return G__47640;
}
})();
return (new spec_tools.core.Spec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__47566),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__47566),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__47566),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

spec_tools.core.spec_QMARK_ = (function spec_tools$core$spec_QMARK_(x){
if((x instanceof spec_tools.core.Spec)){
return x;
} else {
return null;
}
});
/**
 * Returns a spec name. Like the private clojure.spec.alpha/spec-name
 */
spec_tools.core.spec_name = (function spec_tools$core$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = spec_tools.core.spec_QMARK_(spec);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(spec);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;

}
}
}
}
});
/**
 * Returns a spec description.
 */
spec_tools.core.spec_description = (function spec_tools$core$spec_description(spec){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(spec))){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(spec);
} else {
return null;
}
});
/**
 * Creates a Spec instance from a map containing the following keys:
 * 
 *         :spec  the wrapped spec predicate (default to `any?`)
 *         :form  source code of the spec predicate, if :spec is a spec,
 *                :form is read with `s/form` out of it. For non-spec
 *                preds, spec-tools.form/resolve-form is called, if still
 *                not available, spec-creation will fail.
 *         :type  optional type for the spec. if not set, will be auto-
 *                resolved via spec-tools.parse/parse-spec (optional)
 *       :reason  reason to be added to problems with s/explain (optional)
 *          :gen  generator function for the spec (optional)
 *         :name  name of the spec (optional)
 *  :description  description of the spec (optional)
 *        :xx/yy  any qualified keys can be added (optional)
 */
spec_tools.core.create_spec = (function spec_tools$core$create_spec(p__47667){
var map__47668 = p__47667;
var map__47668__$1 = cljs.core.__destructure_map(map__47668);
var m = map__47668__$1;
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47668__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47668__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47668__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
if(cljs.core.qualified_keyword_QMARK_(spec)){
if(cljs.core.truth_(spec_tools.core.get_spec(spec))){
} else {
throw (new Error(["Assert failed: ",[" Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),"\n","(get-spec spec)"].join('')));
}
} else {
}

var spec__$1 = (function (){var or__4253__auto__ = spec;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.any_QMARK_;
}
})();
var spec__$2 = ((cljs.core.qualified_keyword_QMARK_(spec__$1))?spec_tools.core.get_spec(spec__$1):(((spec__$1 instanceof cljs.core.Symbol))?spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec__$1):spec__$1
));
var form__$1 = (function (){var or__4253__auto__ = ((cljs.core.qualified_keyword_QMARK_(form))?cljs.spec.alpha.form(form):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = form;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var form__$1 = cljs.spec.alpha.form(spec__$2);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form__$1,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))))){
return form__$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec__$2);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
}
}
}
}
})();
var info = spec_tools.parse.parse_spec.cljs$core$IFn$_invoke$arity$1(form__$1);
var type__$1 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"type","type",1174270348)))?type:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info));
var name = new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec__$2));
var record = spec_tools.core.map__GT_Spec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,info,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$2,new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965),spec_tools.parse.leaf_type_QMARK_(type__$1)], null)], 0)));
var G__47680 = record;
if(cljs.core.truth_(name)){
return cljs.core.with_meta(G__47680,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name], null));
} else {
return G__47680;
}
});
spec_tools.core.into_spec = (function spec_tools$core$into_spec(x){
while(true){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(x))){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
var G__47876 = cljs.spec.alpha.get_spec(x);
x = G__47876;
continue;
} else {
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null));

}
}
break;
}
});
spec_tools.core.map_spec_keys = (function spec_tools$core$map_spec_keys(spec){
var spec__$1 = (function (){var or__4253__auto__ = ((cljs.core.qualified_keyword_QMARK_(spec))?cljs.spec.alpha.form(spec):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return spec;
}
})();
var info = spec_tools.parse.parse_spec.cljs$core$IFn$_invoke$arity$1(spec__$1);
return cljs.core.select_keys(info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),new cljs.core.Keyword("spec-tools.parse","keys-req","spec-tools.parse/keys-req",-1559250753),new cljs.core.Keyword("spec-tools.parse","keys-opt","spec-tools.parse/keys-opt",-1090203455)], null));
});
spec_tools.core.merge_impl = (function spec_tools$core$merge_impl(forms,spec_form,merge_spec){
var form_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.core.map_spec_keys,forms);
var spec = (function (){
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core47710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core47710 = (function (forms,spec_form,merge_spec,form_keys,meta47711){
this.forms = forms;
this.spec_form = spec_form;
this.merge_spec = merge_spec;
this.form_keys = form_keys;
this.meta47711 = meta47711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(spec_tools.core.t_spec_tools$core47710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47712,meta47711__$1){
var self__ = this;
var _47712__$1 = this;
return (new spec_tools.core.t_spec_tools$core47710(self__.forms,self__.spec_form,self__.merge_spec,self__.form_keys,meta47711__$1));
}));

(spec_tools.core.t_spec_tools$core47710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47712){
var self__ = this;
var _47712__$1 = this;
return self__.meta47711;
}));

(spec_tools.core.t_spec_tools$core47710.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.t_spec_tools$core47710.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var conformed_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47704_SHARP_){
return cljs.spec.alpha.conform(p1__47704_SHARP_,x);
}),self__.forms);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),null], null), null),conformed_vals))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,x,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__47705_SHARP_,p2__47706_SHARP_){
return cljs.core.select_keys(p1__47705_SHARP_,p2__47706_SHARP_);
}),conformed_vals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),self__.form_keys)));
}
}));

(spec_tools.core.t_spec_tools$core47710.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.merge_spec,x);
}));

(spec_tools.core.t_spec_tools$core47710.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.merge_spec,path,via,in$,x);
}));

(spec_tools.core.t_spec_tools$core47710.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.merge_spec,overrides,path,rmap);
}));

(spec_tools.core.t_spec_tools$core47710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"spec-form","spec-form",-871386429,null),new cljs.core.Symbol(null,"merge-spec","merge-spec",-1220518501,null),new cljs.core.Symbol(null,"form-keys","form-keys",1839414472,null),new cljs.core.Symbol(null,"meta47711","meta47711",-516887886,null)], null);
}));

(spec_tools.core.t_spec_tools$core47710.cljs$lang$type = true);

(spec_tools.core.t_spec_tools$core47710.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core47710");

(spec_tools.core.t_spec_tools$core47710.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"spec-tools.core/t_spec_tools$core47710");
}));

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core47710.
 */
spec_tools.core.__GT_t_spec_tools$core47710 = (function spec_tools$core$merge_impl_$___GT_t_spec_tools$core47710(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta47711){
return (new spec_tools.core.t_spec_tools$core47710(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta47711));
});

}

return (new spec_tools.core.t_spec_tools$core47710(forms,spec_form,merge_spec,form_keys,cljs.core.PersistentArrayMap.EMPTY));
})()
;
return spec_tools.core.create_spec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"form","form",-1624062471),spec_form,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,clojure.set.union,form_keys)], 0)));
});

//# sourceMappingURL=spec_tools.core.js.map
