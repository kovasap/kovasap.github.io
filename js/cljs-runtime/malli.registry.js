goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_43800 = (function (this$,type){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.registry._schema[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5394__auto__.call(null,this$,type));
} else {
var m__5392__auto__ = (malli.registry._schema["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5392__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_43800(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_43801 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.registry._schemas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (malli.registry._schemas["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_43801(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43694 = (function (m,fm,meta43695){
this.m = m;
this.fm = fm;
this.meta43695 = meta43695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43696,meta43695__$1){
var self__ = this;
var _43696__$1 = this;
return (new malli.registry.t_malli$registry43694(self__.m,self__.fm,meta43695__$1));
}));

(malli.registry.t_malli$registry43694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43696){
var self__ = this;
var _43696__$1 = this;
return self__.meta43695;
}));

(malli.registry.t_malli$registry43694.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43694.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry43694.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry43694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta43695","meta43695",299992293,null)], null);
}));

(malli.registry.t_malli$registry43694.cljs$lang$type = true);

(malli.registry.t_malli$registry43694.cljs$lang$ctorStr = "malli.registry/t_malli$registry43694");

(malli.registry.t_malli$registry43694.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43694");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43694.
 */
malli.registry.__GT_t_malli$registry43694 = (function malli$registry$fast_registry_$___GT_t_malli$registry43694(m__$1,fm__$1,meta43695){
return (new malli.registry.t_malli$registry43694(m__$1,fm__$1,meta43695));
});

}

return (new malli.registry.t_malli$registry43694(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43708 = (function (m,meta43709){
this.m = m;
this.meta43709 = meta43709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43710,meta43709__$1){
var self__ = this;
var _43710__$1 = this;
return (new malli.registry.t_malli$registry43708(self__.m,meta43709__$1));
}));

(malli.registry.t_malli$registry43708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43710){
var self__ = this;
var _43710__$1 = this;
return self__.meta43709;
}));

(malli.registry.t_malli$registry43708.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43708.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry43708.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry43708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta43709","meta43709",1369298650,null)], null);
}));

(malli.registry.t_malli$registry43708.cljs$lang$type = true);

(malli.registry.t_malli$registry43708.cljs$lang$ctorStr = "malli.registry/t_malli$registry43708");

(malli.registry.t_malli$registry43708.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43708");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43708.
 */
malli.registry.__GT_t_malli$registry43708 = (function malli$registry$simple_registry_$___GT_t_malli$registry43708(m__$1,meta43709){
return (new malli.registry.t_malli$registry43708(m__$1,meta43709));
});

}

return (new malli.registry.t_malli$registry43708(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43725 = (function (meta43726){
this.meta43726 = meta43726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43727,meta43726__$1){
var self__ = this;
var _43727__$1 = this;
return (new malli.registry.t_malli$registry43725(meta43726__$1));
}));

(malli.registry.t_malli$registry43725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43727){
var self__ = this;
var _43727__$1 = this;
return self__.meta43726;
}));

(malli.registry.t_malli$registry43725.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43725.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry43725.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry43725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43726","meta43726",1363307071,null)], null);
}));

(malli.registry.t_malli$registry43725.cljs$lang$type = true);

(malli.registry.t_malli$registry43725.cljs$lang$ctorStr = "malli.registry/t_malli$registry43725");

(malli.registry.t_malli$registry43725.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43725");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43725.
 */
malli.registry.__GT_t_malli$registry43725 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry43725(meta43726){
return (new malli.registry.t_malli$registry43725(meta43726));
});

}

return (new malli.registry.t_malli$registry43725(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43823 = arguments.length;
var i__5770__auto___43825 = (0);
while(true){
if((i__5770__auto___43825 < len__5769__auto___43823)){
args__5775__auto__.push((arguments[i__5770__auto___43825]));

var G__43826 = (i__5770__auto___43825 + (1));
i__5770__auto___43825 = G__43826;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43742 = (function (_QMARK_registries,registries,meta43743){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta43743 = meta43743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43744,meta43743__$1){
var self__ = this;
var _43744__$1 = this;
return (new malli.registry.t_malli$registry43742(self__._QMARK_registries,self__.registries,meta43743__$1));
}));

(malli.registry.t_malli$registry43742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43744){
var self__ = this;
var _43744__$1 = this;
return self__.meta43743;
}));

(malli.registry.t_malli$registry43742.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43742.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__43737_SHARP_){
return malli.registry._schema(p1__43737_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry43742.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry43742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta43743","meta43743",-532845631,null)], null);
}));

(malli.registry.t_malli$registry43742.cljs$lang$type = true);

(malli.registry.t_malli$registry43742.cljs$lang$ctorStr = "malli.registry/t_malli$registry43742");

(malli.registry.t_malli$registry43742.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43742");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43742.
 */
malli.registry.__GT_t_malli$registry43742 = (function malli$registry$__GT_t_malli$registry43742(_QMARK_registries__$1,registries__$1,meta43743){
return (new malli.registry.t_malli$registry43742(_QMARK_registries__$1,registries__$1,meta43743));
});

}

return (new malli.registry.t_malli$registry43742(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq43739){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43739));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43758 = (function (db,meta43759){
this.db = db;
this.meta43759 = meta43759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43760,meta43759__$1){
var self__ = this;
var _43760__$1 = this;
return (new malli.registry.t_malli$registry43758(self__.db,meta43759__$1));
}));

(malli.registry.t_malli$registry43758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43760){
var self__ = this;
var _43760__$1 = this;
return self__.meta43759;
}));

(malli.registry.t_malli$registry43758.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43758.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry43758.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry43758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta43759","meta43759",-417897355,null)], null);
}));

(malli.registry.t_malli$registry43758.cljs$lang$type = true);

(malli.registry.t_malli$registry43758.cljs$lang$ctorStr = "malli.registry/t_malli$registry43758");

(malli.registry.t_malli$registry43758.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43758");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43758.
 */
malli.registry.__GT_t_malli$registry43758 = (function malli$registry$mutable_registry_$___GT_t_malli$registry43758(db__$1,meta43759){
return (new malli.registry.t_malli$registry43758(db__$1,meta43759));
});

}

return (new malli.registry.t_malli$registry43758(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43769 = (function (meta43770){
this.meta43770 = meta43770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43771,meta43770__$1){
var self__ = this;
var _43771__$1 = this;
return (new malli.registry.t_malli$registry43769(meta43770__$1));
}));

(malli.registry.t_malli$registry43769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43771){
var self__ = this;
var _43771__$1 = this;
return self__.meta43770;
}));

(malli.registry.t_malli$registry43769.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43769.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry43769.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry43769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43770","meta43770",-2035702269,null)], null);
}));

(malli.registry.t_malli$registry43769.cljs$lang$type = true);

(malli.registry.t_malli$registry43769.cljs$lang$ctorStr = "malli.registry/t_malli$registry43769");

(malli.registry.t_malli$registry43769.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43769");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43769.
 */
malli.registry.__GT_t_malli$registry43769 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry43769(meta43770){
return (new malli.registry.t_malli$registry43769(meta43770));
});

}

return (new malli.registry.t_malli$registry43769(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43787 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta43788){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta43788 = meta43788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43789,meta43788__$1){
var self__ = this;
var _43789__$1 = this;
return (new malli.registry.t_malli$registry43787(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta43788__$1));
}));

(malli.registry.t_malli$registry43787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43789){
var self__ = this;
var _43789__$1 = this;
return self__.meta43788;
}));

(malli.registry.t_malli$registry43787.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43787.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = (function (){var fexpr__43790 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__43790.cljs$core$IFn$_invoke$arity$1 ? fexpr__43790.cljs$core$IFn$_invoke$arity$1(name) : fexpr__43790.call(null,name));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (function (){var G__43791 = name;
var G__43792 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__43791,G__43792) : self__.provider.call(null,G__43791,G__43792));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry43787.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry43787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta43788","meta43788",1777958746,null)], null);
}));

(malli.registry.t_malli$registry43787.cljs$lang$type = true);

(malli.registry.t_malli$registry43787.cljs$lang$ctorStr = "malli.registry/t_malli$registry43787");

(malli.registry.t_malli$registry43787.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43787");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43787.
 */
malli.registry.__GT_t_malli$registry43787 = (function malli$registry$lazy_registry_$___GT_t_malli$registry43787(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta43788){
return (new malli.registry.t_malli$registry43787(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta43788));
});

}

return (new malli.registry.t_malli$registry43787(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
