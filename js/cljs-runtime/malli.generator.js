goog.provide('malli.generator');



/**
 * @interface
 */
malli.generator.Generator = function(){};

var malli$generator$Generator$_generator$dyn_50030 = (function (this$,options){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.generator._generator[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5394__auto__.call(null,this$,options));
} else {
var m__5392__auto__ = (malli.generator._generator["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5392__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("Generator.-generator",this$);
}
}
});
/**
 * returns generator for schema
 */
malli.generator._generator = (function malli$generator$_generator(this$,options){
if((((!((this$ == null)))) && ((!((this$.malli$generator$Generator$_generator$arity$2 == null)))))){
return this$.malli$generator$Generator$_generator$arity$2(this$,options);
} else {
return malli$generator$Generator$_generator$dyn_50030(this$,options);
}
});

malli.generator._random = (function malli$generator$_random(seed){
if(cljs.core.truth_(seed)){
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed);
} else {
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
}
});
malli.generator._recur = (function malli$generator$_recur(schema,p__49717){
var map__49718 = p__49717;
var map__49718__$1 = cljs.core.__destructure_map(map__49718);
var options = map__49718__$1;
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49718__$1,new cljs.core.Keyword("malli.generator","recursion","malli.generator/recursion",-1990755879));
var recursion_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49718__$1,new cljs.core.Keyword("malli.generator","recursion-limit","malli.generator/recursion-limit",-999000531),(4));
var form = malli.core.form.cljs$core$IFn$_invoke$arity$1(schema);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(recursion,form,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i <= recursion_limit),cljs.core.update.cljs$core$IFn$_invoke$arity$5(options,new cljs.core.Keyword("malli.generator","recursion","malli.generator/recursion",-1990755879),cljs.core.assoc,form,(i + (1)))], null);
});
malli.generator._maybe_recur = (function malli$generator$_maybe_recur(schema,options){
var vec__49729 = malli.generator._recur(schema,options);
var recur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729,(1),null);
if(cljs.core.truth_(recur)){
return options__$1;
} else {
return null;
}
});
malli.generator._min_max = (function malli$generator$_min_max(schema,options){
var map__49736 = malli.core.properties.cljs$core$IFn$_invoke$arity$2(schema,options);
var map__49736__$1 = cljs.core.__destructure_map(map__49736);
var gen_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword("gen","min","gen/min",444569458));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword("gen","max","gen/max",61264228));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = gen_min;
if(cljs.core.truth_(and__5043__auto____$1)){
return (gen_min < min);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-property","malli.generator/invalid-property",-418941875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("gen","min","gen/min",444569458),new cljs.core.Keyword(null,"value","value",305978217),gen_min,new cljs.core.Keyword(null,"min","min",444991522),min], null));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = max;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = gen_max;
if(cljs.core.truth_(and__5043__auto____$1)){
return (gen_max > max);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-property","malli.generator/invalid-property",-418941875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("gen","max","gen/max",61264228),new cljs.core.Keyword(null,"value","value",305978217),gen_min,new cljs.core.Keyword(null,"max","max",61366548),min], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(function (){var or__5045__auto__ = gen_min;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return min;
}
})(),new cljs.core.Keyword(null,"max","max",61366548),(function (){var or__5045__auto__ = gen_max;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return max;
}
})()], null);
});
malli.generator._double_gen = (function malli$generator$_double_gen(options){
return clojure.test.check.generators.double_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),false,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null),options], 0)));
});
malli.generator._string_gen = (function malli$generator$_string_gen(schema,options){
var map__49745 = malli.generator._min_max(schema,options);
var map__49745__$1 = cljs.core.__destructure_map(map__49745);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5043__auto__;
}
})())){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.char$,min));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return max;
} else {
return and__5043__auto__;
}
})())){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.char$,min,max));
} else {
if(cljs.core.truth_(min)){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.char$,min,((2) * min)));
} else {
if(cljs.core.truth_(max)){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.char$,(0),max));
} else {
return clojure.test.check.generators.string_alphanumeric;

}
}
}
}
});
malli.generator._coll_gen = (function malli$generator$_coll_gen(schema,f,options){
var map__49750 = malli.generator._min_max(schema,options);
var map__49750__$1 = cljs.core.__destructure_map(map__49750);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vec__49751 = malli.generator._recur(schema,options);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49751,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49751,(1),null);
var child = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
var gen = (cljs.core.truth_(continue$)?(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options__$1) : malli.generator.generator.call(null,child,options__$1)):null);
return clojure.test.check.generators.fmap(f,((cljs.core.not(gen))?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.any,(0),(0)):(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5043__auto__;
}
})())?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(gen,min):(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return max;
} else {
return and__5043__auto__;
}
})())?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(gen,min,max):(cljs.core.truth_(min)?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(gen,min,((2) * min)):(cljs.core.truth_(max)?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(gen,(0),max):clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(gen)
))))));
});
malli.generator._coll_distinct_gen = (function malli$generator$_coll_distinct_gen(schema,f,options){
var map__49761 = malli.generator._min_max(schema,options);
var map__49761__$1 = cljs.core.__destructure_map(map__49761);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49761__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49761__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vec__49762 = malli.generator._recur(schema,options);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49762,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49762,(1),null);
var child = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
var gen = (cljs.core.truth_(continue$)?(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options__$1) : malli.generator.generator.call(null,child,options__$1)):null);
return clojure.test.check.generators.fmap(f,(cljs.core.truth_(gen)?clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),min,new cljs.core.Keyword(null,"max-elements","max-elements",433034073),max,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.any,(0),(0))));
});
malli.generator._or_gen = (function malli$generator$_or_gen(schema,options){
return clojure.test.check.generators.one_of(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49766_SHARP_){
var G__49768 = malli.generator._maybe_recur(p1__49766_SHARP_,options);
if((G__49768 == null)){
return null;
} else {
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__49766_SHARP_,G__49768) : malli.generator.generator.call(null,p1__49766_SHARP_,G__49768));
}
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
});
malli.generator._multi_gen = (function malli$generator$_multi_gen(schema,options){
return clojure.test.check.generators.one_of(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49778_SHARP_){
var G__49780 = malli.generator._maybe_recur(cljs.core.last(p1__49778_SHARP_),options);
if((G__49780 == null)){
return null;
} else {
var G__49782 = cljs.core.last(p1__49778_SHARP_);
var G__49783 = G__49780;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49782,G__49783) : malli.generator.generator.call(null,G__49782,G__49783));
}
}),malli.core.entries.cljs$core$IFn$_invoke$arity$2(schema,options)));
});
malli.generator._map_gen = (function malli$generator$_map_gen(schema,options){
var entries = malli.core.entries.cljs$core$IFn$_invoke$arity$1(schema);
var vec__49793 = malli.generator._recur(schema,options);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49793,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49793,(1),null);
var value_gen = (function (k,s){
return clojure.test.check.generators.fmap((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(s,options__$1) : malli.generator.generator.call(null,s,options__$1)));
});
var gen_req = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49802){
var vec__49804 = p__49802;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49804,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49804,(1),null);
return value_gen(k,s);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49786_SHARP_){
return new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(cljs.core.last(p1__49786_SHARP_)));
}),entries)));
var gen_opt = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49810){
var vec__49811 = p__49810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49811,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49811,(1),null);
return clojure.test.check.generators.one_of(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.return$(null)], null),(cljs.core.truth_(continue$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_gen(k,s)], null):null)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49787_SHARP_){
return new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(cljs.core.last(p1__49787_SHARP_)));
}),entries)));
return clojure.test.check.generators.fmap((function (p__49815){
var vec__49816 = p__49815;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49816,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49816,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,opt));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_req,gen_opt], 0)));
});
malli.generator._map_of_gen = (function malli$generator$_map_of_gen(schema,options){
var map__49823 = malli.generator._min_max(schema,options);
var map__49823__$1 = cljs.core.__destructure_map(map__49823);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vec__49824 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49820_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__49820_SHARP_,options) : malli.generator.generator.call(null,p1__49820_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options));
var k_gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(0),null);
var v_gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(1),null);
var opts = (cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),min], null):(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return max;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),min,new cljs.core.Keyword(null,"max-elements","max-elements",433034073),max], null):(cljs.core.truth_(min)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),min], null):(cljs.core.truth_(max)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-elements","max-elements",433034073),max], null):cljs.core.PersistentArrayMap.EMPTY
))));
return clojure.test.check.generators.fmap((function (p1__49821_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__49821_SHARP_);
}),clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_gen,v_gen], 0)),opts));
});
malli.generator._ref_gen = (function malli$generator$_ref_gen(schema,options){
var gen_STAR_ = (new cljs.core.Delay((function (){
var G__49833 = malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(schema);
var G__49834 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49833,G__49834) : malli.generator.generator.call(null,G__49833,G__49834));
}),null));
return clojure.test.check.generators.__GT_Generator((function (rnd,size){
var fexpr__49836 = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gen_STAR_));
return (fexpr__49836.cljs$core$IFn$_invoke$arity$2 ? fexpr__49836.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__49836.call(null,rnd,size));
}));
});
malli.generator.__EQ__GT__gen = (function malli$generator$__EQ__GT__gen(schema,options){
var output_generator = (function (){var G__49840 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(schema));
var G__49841 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49840,G__49841) : malli.generator.generator.call(null,G__49840,G__49841));
})();
return clojure.test.check.generators.return$(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null),(function() { 
var G__50091__delegate = function (_){
return (malli.generator.generate.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generate.cljs$core$IFn$_invoke$arity$2(output_generator,options) : malli.generator.generate.call(null,output_generator,options));
};
var G__50091 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__50092__i = 0, G__50092__a = new Array(arguments.length -  0);
while (G__50092__i < G__50092__a.length) {G__50092__a[G__50092__i] = arguments[G__50092__i + 0]; ++G__50092__i;}
  _ = new cljs.core.IndexedSeq(G__50092__a,0,null);
} 
return G__50091__delegate.call(this,_);};
G__50091.cljs$lang$maxFixedArity = 0;
G__50091.cljs$lang$applyTo = (function (arglist__50093){
var _ = cljs.core.seq(arglist__50093);
return G__50091__delegate(_);
});
G__50091.cljs$core$IFn$_invoke$arity$variadic = G__50091__delegate;
return G__50091;
})()
));
});
malli.generator._function_gen = (function malli$generator$_function_gen(schema,options){
return clojure.test.check.generators.return$(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"gen","gen",142575302),(function (p1__49843_SHARP_){
return (malli.generator.generate.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generate.cljs$core$IFn$_invoke$arity$2(p1__49843_SHARP_,options) : malli.generator.generate.call(null,p1__49843_SHARP_,options));
})], null),options));
});
malli.generator._regex_generator = (function malli$generator$_regex_generator(schema,options){
if(cljs.core.truth_(malli.core._regex_op_QMARK_(schema))){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(schema,options) : malli.generator.generator.call(null,schema,options));
} else {
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(schema,options) : malli.generator.generator.call(null,schema,options))], 0));
}
});
malli.generator.entry__GT_schema = (function malli$generator$entry__GT_schema(e){
if(cljs.core.vector_QMARK_(e)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,(2));
} else {
return e;
}
});
malli.generator._cat_gen = (function malli$generator$_cat_gen(schema,options){
return clojure.test.check.generators.fmap((function (p1__49847_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__49847_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49846_SHARP_){
return malli.generator._regex_generator(malli.generator.entry__GT_schema(p1__49846_SHARP_),options);
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options))));
});
malli.generator._alt_gen = (function malli$generator$_alt_gen(schema,options){
return clojure.test.check.generators.one_of(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (e){
var child = malli.generator.entry__GT_schema(e);
var G__49852 = malli.generator._maybe_recur(child,options);
if((G__49852 == null)){
return null;
} else {
return malli.generator._regex_generator(child,G__49852);
}
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
});
malli.generator.__QMARK__gen = (function malli$generator$__QMARK__gen(schema,options){
var child = malli.core._get(schema,(0),null);
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)),clojure.test.check.generators.return$(cljs.core.List.EMPTY)], null));
} else {
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)),(0),(1));
}
});
malli.generator.__STAR__gen = (function malli$generator$__STAR__gen(schema,options){
var child = malli.core._get(schema,(0),null);
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.fmap((function (p1__49854_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__49854_SHARP_);
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options))));
} else {
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)));
}
});
malli.generator._repeat_gen = (function malli$generator$_repeat_gen(schema,options){
var child = malli.core._get(schema,(0),null);
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.fmap((function (p1__49856_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__49856_SHARP_);
}),malli.generator._coll_gen(schema,cljs.core.identity,options));
} else {
return malli.generator._coll_gen(schema,cljs.core.identity,options);
}
});
malli.generator._qualified_ident_gen = (function malli$generator$_qualified_ident_gen(schema,mk_value_with_ns,value_with_ns_gen_size,pred,gen){
var temp__5802__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(temp__5802__auto__)){
var namespace_unparsed = temp__5802__auto__;
return clojure.test.check.generators.fmap((function (k){
var G__49862 = cljs.core.name(namespace_unparsed);
var G__49863 = cljs.core.name(k);
return (mk_value_with_ns.cljs$core$IFn$_invoke$arity$2 ? mk_value_with_ns.cljs$core$IFn$_invoke$arity$2(G__49862,G__49863) : mk_value_with_ns.call(null,G__49862,G__49863));
}),value_with_ns_gen_size);
} else {
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,gen);
}
});
malli.generator._qualified_keyword_gen = (function malli$generator$_qualified_keyword_gen(schema){
return malli.generator._qualified_ident_gen(schema,cljs.core.keyword,clojure.test.check.generators.keyword,cljs.core.qualified_keyword_QMARK_,clojure.test.check.generators.keyword_ns);
});
malli.generator._qualified_symbol_gen = (function malli$generator$_qualified_symbol_gen(schema){
return malli.generator._qualified_ident_gen(schema,cljs.core.symbol,clojure.test.check.generators.symbol,cljs.core.qualified_symbol_QMARK_,clojure.test.check.generators.symbol_ns);
});
if((typeof malli !== 'undefined') && (typeof malli.generator !== 'undefined') && (typeof malli.generator._schema_generator !== 'undefined')){
} else {
malli.generator._schema_generator = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49868 = cljs.core.get_global_hierarchy;
return (fexpr__49868.cljs$core$IFn$_invoke$arity$0 ? fexpr__49868.cljs$core$IFn$_invoke$arity$0() : fexpr__49868.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.generator","-schema-generator"),(function (schema,options){
return malli.core.type.cljs$core$IFn$_invoke$arity$2(schema,options);
}),new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734),(function (schema,options){
return cljs.spec.gen.alpha.gen_for_pred(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (schema,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)) + (1))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (schema,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (schema,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)) - (1))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (schema,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (schema,options){
return clojure.test.check.generators.return$(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (schema,options){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((function (p1__49878_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__49878_SHARP_,cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
}),clojure.test.check.generators.any_printable,(100));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),(function (_,___$1){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),1.0E-5], null)),clojure.test.check.generators.s_pos_int], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),(function (_,___$1){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),-1.0E-4], null)),clojure.test.check.generators.s_neg_int], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (schema,options){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options),cljs.spec.gen.alpha.gen_for_pred(cljs.core.any_QMARK_),(100));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (schema,options){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options),(function (){var G__49882 = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options));
var G__49883 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49882,G__49883) : malli.generator.generator.call(null,G__49882,G__49883));
})(),(100));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (schema,options){
return malli.generator._or_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"orn","orn",738436484),(function (schema,options){
return malli.generator._or_gen(malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"or","or",235744169),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema)),options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (schema,options){
var G__49886 = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
var G__49887 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49886,G__49887) : malli.generator.generator.call(null,G__49886,G__49887));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (schema,options){
return malli.generator._map_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (schema,options){
return malli.generator._map_of_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (schema,options){
return malli.generator._multi_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (schema,options){
return malli.generator._coll_gen(schema,cljs.core.identity,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (schema,options){
return malli.generator._coll_gen(schema,cljs.core.identity,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (schema,options){
return malli.generator._coll_distinct_gen(schema,cljs.core.set,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (schema,options){
return clojure.test.check.generators.elements(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (schema,options){
var vec__49891 = malli.generator._recur(schema,options);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49891,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49891,(1),null);
return clojure.test.check.generators.one_of(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.return$(null)], null),(cljs.core.truth_(continue$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49894 = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options__$1));
var G__49895 = options__$1;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49894,G__49895) : malli.generator.generator.call(null,G__49894,G__49895));
})()], null):null)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (schema,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49897_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__49897_SHARP_,options) : malli.generator.generator.call(null,p1__49897_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"any","any",1705907423),(function (_,___$1){
return cljs.spec.gen.alpha.gen_for_pred(cljs.core.any_QMARK_);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_,___$1){
return clojure.test.check.generators.return$(null);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (schema,options){
return malli.generator._string_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int","int",-1741416922),(function (schema,options){
return clojure.test.check.generators.large_integer_STAR_(malli.generator._min_max(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"double","double",884886883),(function (schema,options){
return clojure.test.check.generators.double_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var props = malli.core.properties.cljs$core$IFn$_invoke$arity$2(schema,options);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("gen","infinite?","gen/infinite?",-2017652832),false),new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("gen","NaN?","gen/NaN?",-1917993267),false)], null);
})(),malli.generator._min_max(schema,options)], 0)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_,___$1){
return clojure.test.check.generators.boolean$;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (_,___$1){
return clojure.test.check.generators.keyword;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (_,___$1){
return clojure.test.check.generators.symbol;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),(function (schema,_){
return malli.generator._qualified_keyword_gen(schema);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),(function (schema,_){
return malli.generator._qualified_symbol_gen(schema);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (_,___$1){
return clojure.test.check.generators.uuid;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=>","=>",1841166128),(function (schema,options){
return malli.generator.__EQ__GT__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (schema,options){
return malli.generator._function_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(function (_,___$1){
return clojure.test.check.generators.keyword;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (schema,options){
return malli.generator._ref_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (schema,options){
var G__49913 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__49914 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49913,G__49914) : malli.generator.generator.call(null,G__49913,G__49914));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (schema,options){
var G__49915 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__49916 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49915,G__49916) : malli.generator.generator.call(null,G__49915,G__49916));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (schema,options){
var G__49921 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__49922 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49921,G__49922) : malli.generator.generator.call(null,G__49921,G__49922));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (schema,options){
var G__49924 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__49925 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49924,G__49925) : malli.generator.generator.call(null,G__49924,G__49925));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),(function (schema,options){
var G__49928 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__49929 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49928,G__49929) : malli.generator.generator.call(null,G__49928,G__49929));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cat","cat",-1457810207),(function (schema,options){
return malli.generator._cat_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"catn","catn",-48807277),(function (schema,options){
return malli.generator._cat_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alt","alt",-3214426),(function (schema,options){
return malli.generator._alt_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"altn","altn",1717854417),(function (schema,options){
return malli.generator._alt_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"?","?",-1703165233),(function (schema,options){
return malli.generator.__QMARK__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"*","*",-1294732318),(function (schema,options){
return malli.generator.__STAR__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"+","+",1913524883),(function (schema,options){
return clojure.test.check.generators.not_empty(malli.generator.__STAR__gen(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"repeat","repeat",832692087),(function (schema,options){
return malli.generator._repeat_gen(schema,options);
}));
malli.generator._create_from_elements = (function malli$generator$_create_from_elements(props){
var G__49936 = new cljs.core.Keyword("gen","elements","gen/elements",657813311).cljs$core$IFn$_invoke$arity$1(props);
if((G__49936 == null)){
return null;
} else {
return clojure.test.check.generators.elements(G__49936);
}
});
malli.generator._create_from_gen = (function malli$generator$_create_from_gen(props,schema,options){
var or__5045__auto__ = new cljs.core.Keyword("gen","gen","gen/gen",142743606).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("gen","elements","gen/elements",657813311).cljs$core$IFn$_invoke$arity$1(props))){
return null;
} else {
if((((!((schema == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema.malli$generator$Generator$))))?true:(((!schema.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.generator.Generator,schema):false)):cljs.core.native_satisfies_QMARK_(malli.generator.Generator,schema))){
return malli.generator._generator(schema,options);
} else {
return malli.generator._schema_generator.cljs$core$IFn$_invoke$arity$2(schema,options);
}
}
}
});
malli.generator._create_from_schema = (function malli$generator$_create_from_schema(props,options){
var G__49949 = new cljs.core.Keyword("gen","schema","gen/schema",-1582038959).cljs$core$IFn$_invoke$arity$1(props);
if((G__49949 == null)){
return null;
} else {
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__49949,options) : malli.generator.generator.call(null,G__49949,options));
}
});
malli.generator._create_from_fmap = (function malli$generator$_create_from_fmap(props,schema,options){
var temp__5808__auto__ = new cljs.core.Keyword("gen","fmap","gen/fmap",-1585733563).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5808__auto__ == null)){
return null;
} else {
var fmap = temp__5808__auto__;
return clojure.test.check.generators.fmap(malli.core.eval.cljs$core$IFn$_invoke$arity$2(fmap,(function (){var or__5045__auto__ = options;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(schema);
}
})()),(function (){var or__5045__auto__ = malli.generator._create_from_elements(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = malli.generator._create_from_schema(props,options);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = malli.generator._create_from_gen(props,schema,options);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return clojure.test.check.generators.return$(null);
}
}
}
})());
}
});
malli.generator._create = (function malli$generator$_create(schema,options){
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)], 0));
var or__5045__auto__ = malli.generator._create_from_fmap(props,schema,options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = malli.generator._create_from_elements(props);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = malli.generator._create_from_schema(props,options);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = malli.generator._create_from_gen(props,schema,options);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","no-generator","malli.generator/no-generator",934332770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
}
}
}
}
});
malli.generator.generator = (function malli$generator$generator(var_args){
var G__49961 = arguments.length;
switch (G__49961) {
case 1:
return malli.generator.generator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.generator.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._cached(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),new cljs.core.Keyword(null,"generator","generator",-572962281),(function (p1__49959_SHARP_){
return malli.generator._create(p1__49959_SHARP_,options);
}));
}));

(malli.generator.generator.cljs$lang$maxFixedArity = 2);

malli.generator.generate = (function malli$generator$generate(var_args){
var G__49970 = arguments.length;
switch (G__49970) {
case 1:
return malli.generator.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.generate.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_gen_or_schema){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,null);
}));

(malli.generator.generate.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_gen_or_schema,p__49974){
var map__49975 = p__49974;
var map__49975__$1 = cljs.core.__destructure_map(map__49975);
var options = map__49975__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49975__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49975__$1,new cljs.core.Keyword(null,"size","size",1098693007),(30));
var gen = ((clojure.test.check.generators.generator_QMARK_(_QMARK_gen_or_schema))?_QMARK_gen_or_schema:malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,options));
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(gen,malli.generator._random(seed),size));
}));

(malli.generator.generate.cljs$lang$maxFixedArity = 2);

malli.generator.sample = (function malli$generator$sample(var_args){
var G__49981 = arguments.length;
switch (G__49981) {
case 1:
return malli.generator.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.sample.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_gen_or_schema){
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,null);
}));

(malli.generator.sample.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_gen_or_schema,p__49982){
var map__49983 = p__49982;
var map__49983__$1 = cljs.core.__destructure_map(map__49983);
var options = map__49983__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49983__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49983__$1,new cljs.core.Keyword(null,"size","size",1098693007),(10));
var gen = ((clojure.test.check.generators.generator_QMARK_(_QMARK_gen_or_schema))?_QMARK_gen_or_schema:malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,options));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__49977_SHARP_,p2__49978_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(gen,p1__49977_SHARP_,p2__49978_SHARP_));
}),clojure.test.check.generators.lazy_random_states(malli.generator._random(seed)),clojure.test.check.generators.make_size_range_seq(size)));
}));

(malli.generator.sample.cljs$lang$maxFixedArity = 2);

malli.generator.function_checker = (function malli$generator$function_checker(var_args){
var G__49990 = arguments.length;
switch (G__49990) {
case 1:
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.function_checker.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,p__49991){
var map__49996 = p__49991;
var map__49996__$1 = cljs.core.__destructure_map(map__49996);
var options = map__49996__$1;
var _EQ__GT_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49996__$1,new cljs.core.Keyword("malli.generator","=>iterations","malli.generator/=>iterations",-1726832707),(100));
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var check = (function (schema__$1){
var map__49997 = malli.core._function_info(schema__$1);
var map__49997__$1 = cljs.core.__destructure_map(map__49997);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49997__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49997__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var input_generator = malli.generator.generator.cljs$core$IFn$_invoke$arity$2(input,options);
var output_validator = malli.core.validator.cljs$core$IFn$_invoke$arity$2(output,options);
var validate = (function (f,args){
var G__49998 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
return (output_validator.cljs$core$IFn$_invoke$arity$1 ? output_validator.cljs$core$IFn$_invoke$arity$1(G__49998) : output_validator.call(null,G__49998));
});
return (function (f){
var map__49999 = clojure.test.check.quick_check(_EQ__GT_iterations,clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_generator], null),(function (p1__49985_SHARP_){
return validate(f,p1__49985_SHARP_);
})));
var map__49999__$1 = cljs.core.__destructure_map(map__49999);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49999__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var shrunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49999__$1,new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412));
var smallest = cljs.core.first(new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(shrunk));
if(result === true){
return null;
} else {
var explain_input = malli.core.explain.cljs$core$IFn$_invoke$arity$2(input,smallest);
var response = (cljs.core.truth_(explain_input)?null:(function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,smallest);
}catch (e50002){if((e50002 instanceof Error)){
var e = e50002;
return e;
} else {
throw e50002;

}
}})());
var explain_output = (cljs.core.truth_(explain_input)?null:malli.core.explain.cljs$core$IFn$_invoke$arity$2(output,response));
var G__50003 = shrunk;
var G__50003__$1 = (cljs.core.truth_(explain_input)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50003,new cljs.core.Keyword("malli.generator","explain-input","malli.generator/explain-input",-480505211),explain_input):G__50003);
var G__50003__$2 = (cljs.core.truth_(explain_output)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50003__$1,new cljs.core.Keyword("malli.generator","explain-output","malli.generator/explain-output",-2096857927),explain_output):G__50003__$1);
if(cljs.core.truth_(cljs.core.ex_message(result))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50003__$2,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.ex_message),new cljs.core.Keyword(null,"result-data","result-data",-1724248844));
} else {
return G__50003__$2;
}
}
});
});
var pred__50004 = cljs.core._EQ_;
var expr__50005 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
if(cljs.core.truth_((pred__50004.cljs$core$IFn$_invoke$arity$2 ? pred__50004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=>","=>",1841166128),expr__50005) : pred__50004.call(null,new cljs.core.Keyword(null,"=>","=>",1841166128),expr__50005)))){
return check(schema);
} else {
if(cljs.core.truth_((pred__50004.cljs$core$IFn$_invoke$arity$2 ? pred__50004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"function","function",-2127255473),expr__50005) : pred__50004.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__50005)))){
var checkers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49987_SHARP_){
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2(p1__49987_SHARP_,options);
}),malli.core._children(schema));
return (function (x){
return cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49988_SHARP_){
return (p1__49988_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49988_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__49988_SHARP_.call(null,x));
}),checkers));
});
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-function-schema","malli.generator/invalid-function-schema",-1857583937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core._type(schema)], null));
}
}
}));

(malli.generator.function_checker.cljs$lang$maxFixedArity = 2);

malli.generator.check = (function malli$generator$check(var_args){
var G__50015 = arguments.length;
switch (G__50015) {
case 2:
return malli.generator.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.generator.check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.check.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.generator.check.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.generator.check.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.core.explain.cljs$core$IFn$_invoke$arity$2(malli.core._update_options(schema,(function (p1__50013_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50013_SHARP_,new cljs.core.Keyword("malli.core","function-checker","malli.core/function-checker",-792030936),malli.generator.function_checker);
})),f);
}));

(malli.generator.check.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=malli.generator.js.map
