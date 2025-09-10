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

var malli$registry$Registry$_schema$dyn_31572 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_31572(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_31573 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_31573(this$);
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31450 = (function (m,fm,meta31451){
this.m = m;
this.fm = fm;
this.meta31451 = meta31451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31452,meta31451__$1){
var self__ = this;
var _31452__$1 = this;
return (new malli.registry.t_malli$registry31450(self__.m,self__.fm,meta31451__$1));
}));

(malli.registry.t_malli$registry31450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31452){
var self__ = this;
var _31452__$1 = this;
return self__.meta31451;
}));

(malli.registry.t_malli$registry31450.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31450.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry31450.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry31450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta31451","meta31451",73060290,null)], null);
}));

(malli.registry.t_malli$registry31450.cljs$lang$type = true);

(malli.registry.t_malli$registry31450.cljs$lang$ctorStr = "malli.registry/t_malli$registry31450");

(malli.registry.t_malli$registry31450.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31450");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31450.
 */
malli.registry.__GT_t_malli$registry31450 = (function malli$registry$fast_registry_$___GT_t_malli$registry31450(m__$1,fm__$1,meta31451){
return (new malli.registry.t_malli$registry31450(m__$1,fm__$1,meta31451));
});

}

return (new malli.registry.t_malli$registry31450(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31469 = (function (m,meta31470){
this.m = m;
this.meta31470 = meta31470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31471,meta31470__$1){
var self__ = this;
var _31471__$1 = this;
return (new malli.registry.t_malli$registry31469(self__.m,meta31470__$1));
}));

(malli.registry.t_malli$registry31469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31471){
var self__ = this;
var _31471__$1 = this;
return self__.meta31470;
}));

(malli.registry.t_malli$registry31469.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31469.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry31469.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry31469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta31470","meta31470",-895257945,null)], null);
}));

(malli.registry.t_malli$registry31469.cljs$lang$type = true);

(malli.registry.t_malli$registry31469.cljs$lang$ctorStr = "malli.registry/t_malli$registry31469");

(malli.registry.t_malli$registry31469.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31469");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31469.
 */
malli.registry.__GT_t_malli$registry31469 = (function malli$registry$simple_registry_$___GT_t_malli$registry31469(m__$1,meta31470){
return (new malli.registry.t_malli$registry31469(m__$1,meta31470));
});

}

return (new malli.registry.t_malli$registry31469(m,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31494 = (function (meta31495){
this.meta31495 = meta31495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31496,meta31495__$1){
var self__ = this;
var _31496__$1 = this;
return (new malli.registry.t_malli$registry31494(meta31495__$1));
}));

(malli.registry.t_malli$registry31494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31496){
var self__ = this;
var _31496__$1 = this;
return self__.meta31495;
}));

(malli.registry.t_malli$registry31494.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31494.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry31494.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry31494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31495","meta31495",-1530575937,null)], null);
}));

(malli.registry.t_malli$registry31494.cljs$lang$type = true);

(malli.registry.t_malli$registry31494.cljs$lang$ctorStr = "malli.registry/t_malli$registry31494");

(malli.registry.t_malli$registry31494.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31494");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31494.
 */
malli.registry.__GT_t_malli$registry31494 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry31494(meta31495){
return (new malli.registry.t_malli$registry31494(meta31495));
});

}

return (new malli.registry.t_malli$registry31494(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31599 = arguments.length;
var i__5770__auto___31600 = (0);
while(true){
if((i__5770__auto___31600 < len__5769__auto___31599)){
args__5775__auto__.push((arguments[i__5770__auto___31600]));

var G__31602 = (i__5770__auto___31600 + (1));
i__5770__auto___31600 = G__31602;
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31501 = (function (_QMARK_registries,registries,meta31502){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta31502 = meta31502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31503,meta31502__$1){
var self__ = this;
var _31503__$1 = this;
return (new malli.registry.t_malli$registry31501(self__._QMARK_registries,self__.registries,meta31502__$1));
}));

(malli.registry.t_malli$registry31501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31503){
var self__ = this;
var _31503__$1 = this;
return self__.meta31502;
}));

(malli.registry.t_malli$registry31501.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31501.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__31499_SHARP_){
return malli.registry._schema(p1__31499_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry31501.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry31501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta31502","meta31502",-792714068,null)], null);
}));

(malli.registry.t_malli$registry31501.cljs$lang$type = true);

(malli.registry.t_malli$registry31501.cljs$lang$ctorStr = "malli.registry/t_malli$registry31501");

(malli.registry.t_malli$registry31501.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31501");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31501.
 */
malli.registry.__GT_t_malli$registry31501 = (function malli$registry$__GT_t_malli$registry31501(_QMARK_registries__$1,registries__$1,meta31502){
return (new malli.registry.t_malli$registry31501(_QMARK_registries__$1,registries__$1,meta31502));
});

}

return (new malli.registry.t_malli$registry31501(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq31500){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31500));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31518 = (function (db,meta31519){
this.db = db;
this.meta31519 = meta31519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31520,meta31519__$1){
var self__ = this;
var _31520__$1 = this;
return (new malli.registry.t_malli$registry31518(self__.db,meta31519__$1));
}));

(malli.registry.t_malli$registry31518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31520){
var self__ = this;
var _31520__$1 = this;
return self__.meta31519;
}));

(malli.registry.t_malli$registry31518.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31518.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry31518.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry31518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta31519","meta31519",1196958079,null)], null);
}));

(malli.registry.t_malli$registry31518.cljs$lang$type = true);

(malli.registry.t_malli$registry31518.cljs$lang$ctorStr = "malli.registry/t_malli$registry31518");

(malli.registry.t_malli$registry31518.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31518");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31518.
 */
malli.registry.__GT_t_malli$registry31518 = (function malli$registry$mutable_registry_$___GT_t_malli$registry31518(db__$1,meta31519){
return (new malli.registry.t_malli$registry31518(db__$1,meta31519));
});

}

return (new malli.registry.t_malli$registry31518(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31541 = (function (meta31542){
this.meta31542 = meta31542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31543,meta31542__$1){
var self__ = this;
var _31543__$1 = this;
return (new malli.registry.t_malli$registry31541(meta31542__$1));
}));

(malli.registry.t_malli$registry31541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31543){
var self__ = this;
var _31543__$1 = this;
return self__.meta31542;
}));

(malli.registry.t_malli$registry31541.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31541.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry31541.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry31541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31542","meta31542",173895790,null)], null);
}));

(malli.registry.t_malli$registry31541.cljs$lang$type = true);

(malli.registry.t_malli$registry31541.cljs$lang$ctorStr = "malli.registry/t_malli$registry31541");

(malli.registry.t_malli$registry31541.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31541");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31541.
 */
malli.registry.__GT_t_malli$registry31541 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry31541(meta31542){
return (new malli.registry.t_malli$registry31541(meta31542));
});

}

return (new malli.registry.t_malli$registry31541(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry31554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31554 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta31555){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta31555 = meta31555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31556,meta31555__$1){
var self__ = this;
var _31556__$1 = this;
return (new malli.registry.t_malli$registry31554(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta31555__$1));
}));

(malli.registry.t_malli$registry31554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31556){
var self__ = this;
var _31556__$1 = this;
return self__.meta31555;
}));

(malli.registry.t_malli$registry31554.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31554.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = (function (){var fexpr__31559 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__31559.cljs$core$IFn$_invoke$arity$1 ? fexpr__31559.cljs$core$IFn$_invoke$arity$1(name) : fexpr__31559.call(null,name));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (function (){var G__31561 = name;
var G__31562 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__31561,G__31562) : self__.provider.call(null,G__31561,G__31562));
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

(malli.registry.t_malli$registry31554.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry31554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta31555","meta31555",-1613734171,null)], null);
}));

(malli.registry.t_malli$registry31554.cljs$lang$type = true);

(malli.registry.t_malli$registry31554.cljs$lang$ctorStr = "malli.registry/t_malli$registry31554");

(malli.registry.t_malli$registry31554.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31554");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31554.
 */
malli.registry.__GT_t_malli$registry31554 = (function malli$registry$lazy_registry_$___GT_t_malli$registry31554(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta31555){
return (new malli.registry.t_malli$registry31554(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta31555));
});

}

return (new malli.registry.t_malli$registry31554(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
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
