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

var malli$registry$Registry$_schema$dyn_43834 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_43834(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_43835 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_43835(this$);
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43703 = (function (m,fm,meta43704){
this.m = m;
this.fm = fm;
this.meta43704 = meta43704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43705,meta43704__$1){
var self__ = this;
var _43705__$1 = this;
return (new malli.registry.t_malli$registry43703(self__.m,self__.fm,meta43704__$1));
}));

(malli.registry.t_malli$registry43703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43705){
var self__ = this;
var _43705__$1 = this;
return self__.meta43704;
}));

(malli.registry.t_malli$registry43703.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43703.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry43703.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry43703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta43704","meta43704",1350227336,null)], null);
}));

(malli.registry.t_malli$registry43703.cljs$lang$type = true);

(malli.registry.t_malli$registry43703.cljs$lang$ctorStr = "malli.registry/t_malli$registry43703");

(malli.registry.t_malli$registry43703.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43703");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43703.
 */
malli.registry.__GT_t_malli$registry43703 = (function malli$registry$fast_registry_$___GT_t_malli$registry43703(m__$1,fm__$1,meta43704){
return (new malli.registry.t_malli$registry43703(m__$1,fm__$1,meta43704));
});

}

return (new malli.registry.t_malli$registry43703(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43709 = (function (m,meta43710){
this.m = m;
this.meta43710 = meta43710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43711,meta43710__$1){
var self__ = this;
var _43711__$1 = this;
return (new malli.registry.t_malli$registry43709(self__.m,meta43710__$1));
}));

(malli.registry.t_malli$registry43709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43711){
var self__ = this;
var _43711__$1 = this;
return self__.meta43710;
}));

(malli.registry.t_malli$registry43709.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43709.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry43709.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry43709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta43710","meta43710",1492249281,null)], null);
}));

(malli.registry.t_malli$registry43709.cljs$lang$type = true);

(malli.registry.t_malli$registry43709.cljs$lang$ctorStr = "malli.registry/t_malli$registry43709");

(malli.registry.t_malli$registry43709.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43709");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43709.
 */
malli.registry.__GT_t_malli$registry43709 = (function malli$registry$simple_registry_$___GT_t_malli$registry43709(m__$1,meta43710){
return (new malli.registry.t_malli$registry43709(m__$1,meta43710));
});

}

return (new malli.registry.t_malli$registry43709(m,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43721 = (function (meta43722){
this.meta43722 = meta43722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43723,meta43722__$1){
var self__ = this;
var _43723__$1 = this;
return (new malli.registry.t_malli$registry43721(meta43722__$1));
}));

(malli.registry.t_malli$registry43721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43723){
var self__ = this;
var _43723__$1 = this;
return self__.meta43722;
}));

(malli.registry.t_malli$registry43721.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43721.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry43721.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry43721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43722","meta43722",1025321634,null)], null);
}));

(malli.registry.t_malli$registry43721.cljs$lang$type = true);

(malli.registry.t_malli$registry43721.cljs$lang$ctorStr = "malli.registry/t_malli$registry43721");

(malli.registry.t_malli$registry43721.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43721");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43721.
 */
malli.registry.__GT_t_malli$registry43721 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry43721(meta43722){
return (new malli.registry.t_malli$registry43721(meta43722));
});

}

return (new malli.registry.t_malli$registry43721(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43858 = arguments.length;
var i__5770__auto___43859 = (0);
while(true){
if((i__5770__auto___43859 < len__5769__auto___43858)){
args__5775__auto__.push((arguments[i__5770__auto___43859]));

var G__43866 = (i__5770__auto___43859 + (1));
i__5770__auto___43859 = G__43866;
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43735 = (function (_QMARK_registries,registries,meta43736){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta43736 = meta43736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43737,meta43736__$1){
var self__ = this;
var _43737__$1 = this;
return (new malli.registry.t_malli$registry43735(self__._QMARK_registries,self__.registries,meta43736__$1));
}));

(malli.registry.t_malli$registry43735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43737){
var self__ = this;
var _43737__$1 = this;
return self__.meta43736;
}));

(malli.registry.t_malli$registry43735.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43735.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__43730_SHARP_){
return malli.registry._schema(p1__43730_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry43735.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry43735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta43736","meta43736",-1767522732,null)], null);
}));

(malli.registry.t_malli$registry43735.cljs$lang$type = true);

(malli.registry.t_malli$registry43735.cljs$lang$ctorStr = "malli.registry/t_malli$registry43735");

(malli.registry.t_malli$registry43735.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43735");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43735.
 */
malli.registry.__GT_t_malli$registry43735 = (function malli$registry$__GT_t_malli$registry43735(_QMARK_registries__$1,registries__$1,meta43736){
return (new malli.registry.t_malli$registry43735(_QMARK_registries__$1,registries__$1,meta43736));
});

}

return (new malli.registry.t_malli$registry43735(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq43732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43732));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43763 = (function (db,meta43764){
this.db = db;
this.meta43764 = meta43764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43765,meta43764__$1){
var self__ = this;
var _43765__$1 = this;
return (new malli.registry.t_malli$registry43763(self__.db,meta43764__$1));
}));

(malli.registry.t_malli$registry43763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43765){
var self__ = this;
var _43765__$1 = this;
return self__.meta43764;
}));

(malli.registry.t_malli$registry43763.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43763.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry43763.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry43763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta43764","meta43764",33681365,null)], null);
}));

(malli.registry.t_malli$registry43763.cljs$lang$type = true);

(malli.registry.t_malli$registry43763.cljs$lang$ctorStr = "malli.registry/t_malli$registry43763");

(malli.registry.t_malli$registry43763.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43763");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43763.
 */
malli.registry.__GT_t_malli$registry43763 = (function malli$registry$mutable_registry_$___GT_t_malli$registry43763(db__$1,meta43764){
return (new malli.registry.t_malli$registry43763(db__$1,meta43764));
});

}

return (new malli.registry.t_malli$registry43763(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43778 = (function (meta43779){
this.meta43779 = meta43779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43780,meta43779__$1){
var self__ = this;
var _43780__$1 = this;
return (new malli.registry.t_malli$registry43778(meta43779__$1));
}));

(malli.registry.t_malli$registry43778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43780){
var self__ = this;
var _43780__$1 = this;
return self__.meta43779;
}));

(malli.registry.t_malli$registry43778.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43778.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry43778.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry43778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43779","meta43779",2138440198,null)], null);
}));

(malli.registry.t_malli$registry43778.cljs$lang$type = true);

(malli.registry.t_malli$registry43778.cljs$lang$ctorStr = "malli.registry/t_malli$registry43778");

(malli.registry.t_malli$registry43778.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43778");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43778.
 */
malli.registry.__GT_t_malli$registry43778 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry43778(meta43779){
return (new malli.registry.t_malli$registry43778(meta43779));
});

}

return (new malli.registry.t_malli$registry43778(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry43807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43807 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta43808){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta43808 = meta43808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43809,meta43808__$1){
var self__ = this;
var _43809__$1 = this;
return (new malli.registry.t_malli$registry43807(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta43808__$1));
}));

(malli.registry.t_malli$registry43807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43809){
var self__ = this;
var _43809__$1 = this;
return self__.meta43808;
}));

(malli.registry.t_malli$registry43807.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43807.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = (function (){var fexpr__43816 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__43816.cljs$core$IFn$_invoke$arity$1 ? fexpr__43816.cljs$core$IFn$_invoke$arity$1(name) : fexpr__43816.call(null,name));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5823__auto__ = (function (){var G__43818 = name;
var G__43819 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__43818,G__43819) : self__.provider.call(null,G__43818,G__43819));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var schema = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry43807.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry43807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta43808","meta43808",-1543559137,null)], null);
}));

(malli.registry.t_malli$registry43807.cljs$lang$type = true);

(malli.registry.t_malli$registry43807.cljs$lang$ctorStr = "malli.registry/t_malli$registry43807");

(malli.registry.t_malli$registry43807.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry43807");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43807.
 */
malli.registry.__GT_t_malli$registry43807 = (function malli$registry$lazy_registry_$___GT_t_malli$registry43807(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta43808){
return (new malli.registry.t_malli$registry43807(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta43808));
});

}

return (new malli.registry.t_malli$registry43807(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
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
