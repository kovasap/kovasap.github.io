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

var malli$registry$Registry$_schema$dyn_37951 = (function (this$,type){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (malli.registry._schema[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4551__auto__.call(null,this$,type));
} else {
var m__4549__auto__ = (malli.registry._schema["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4549__auto__.call(null,this$,type));
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
return malli$registry$Registry$_schema$dyn_37951(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_37955 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (malli.registry._schemas[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (malli.registry._schemas["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
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
return malli$registry$Registry$_schemas$dyn_37955(this$);
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37744 = (function (m,fm,meta37745){
this.m = m;
this.fm = fm;
this.meta37745 = meta37745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37746,meta37745__$1){
var self__ = this;
var _37746__$1 = this;
return (new malli.registry.t_malli$registry37744(self__.m,self__.fm,meta37745__$1));
}));

(malli.registry.t_malli$registry37744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37746){
var self__ = this;
var _37746__$1 = this;
return self__.meta37745;
}));

(malli.registry.t_malli$registry37744.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37744.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry37744.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry37744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta37745","meta37745",1010594250,null)], null);
}));

(malli.registry.t_malli$registry37744.cljs$lang$type = true);

(malli.registry.t_malli$registry37744.cljs$lang$ctorStr = "malli.registry/t_malli$registry37744");

(malli.registry.t_malli$registry37744.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37744");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37744.
 */
malli.registry.__GT_t_malli$registry37744 = (function malli$registry$fast_registry_$___GT_t_malli$registry37744(m__$1,fm__$1,meta37745){
return (new malli.registry.t_malli$registry37744(m__$1,fm__$1,meta37745));
});

}

return (new malli.registry.t_malli$registry37744(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37778 = (function (m,meta37779){
this.m = m;
this.meta37779 = meta37779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37780,meta37779__$1){
var self__ = this;
var _37780__$1 = this;
return (new malli.registry.t_malli$registry37778(self__.m,meta37779__$1));
}));

(malli.registry.t_malli$registry37778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37780){
var self__ = this;
var _37780__$1 = this;
return self__.meta37779;
}));

(malli.registry.t_malli$registry37778.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37778.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry37778.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry37778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta37779","meta37779",-2072690147,null)], null);
}));

(malli.registry.t_malli$registry37778.cljs$lang$type = true);

(malli.registry.t_malli$registry37778.cljs$lang$ctorStr = "malli.registry/t_malli$registry37778");

(malli.registry.t_malli$registry37778.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37778");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37778.
 */
malli.registry.__GT_t_malli$registry37778 = (function malli$registry$simple_registry_$___GT_t_malli$registry37778(m__$1,meta37779){
return (new malli.registry.t_malli$registry37778(m__$1,meta37779));
});

}

return (new malli.registry.t_malli$registry37778(m,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37824 = (function (meta37825){
this.meta37825 = meta37825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37826,meta37825__$1){
var self__ = this;
var _37826__$1 = this;
return (new malli.registry.t_malli$registry37824(meta37825__$1));
}));

(malli.registry.t_malli$registry37824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37826){
var self__ = this;
var _37826__$1 = this;
return self__.meta37825;
}));

(malli.registry.t_malli$registry37824.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37824.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry37824.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry37824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37825","meta37825",-1121028042,null)], null);
}));

(malli.registry.t_malli$registry37824.cljs$lang$type = true);

(malli.registry.t_malli$registry37824.cljs$lang$ctorStr = "malli.registry/t_malli$registry37824");

(malli.registry.t_malli$registry37824.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37824");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37824.
 */
malli.registry.__GT_t_malli$registry37824 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry37824(meta37825){
return (new malli.registry.t_malli$registry37824(meta37825));
});

}

return (new malli.registry.t_malli$registry37824(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37962 = arguments.length;
var i__4865__auto___37963 = (0);
while(true){
if((i__4865__auto___37963 < len__4864__auto___37962)){
args__4870__auto__.push((arguments[i__4865__auto___37963]));

var G__37965 = (i__4865__auto___37963 + (1));
i__4865__auto___37963 = G__37965;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37875 = (function (_QMARK_registries,registries,meta37876){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta37876 = meta37876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37877,meta37876__$1){
var self__ = this;
var _37877__$1 = this;
return (new malli.registry.t_malli$registry37875(self__._QMARK_registries,self__.registries,meta37876__$1));
}));

(malli.registry.t_malli$registry37875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37877){
var self__ = this;
var _37877__$1 = this;
return self__.meta37876;
}));

(malli.registry.t_malli$registry37875.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37875.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__37848_SHARP_){
return malli.registry._schema(p1__37848_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry37875.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry37875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta37876","meta37876",-1046379616,null)], null);
}));

(malli.registry.t_malli$registry37875.cljs$lang$type = true);

(malli.registry.t_malli$registry37875.cljs$lang$ctorStr = "malli.registry/t_malli$registry37875");

(malli.registry.t_malli$registry37875.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37875");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37875.
 */
malli.registry.__GT_t_malli$registry37875 = (function malli$registry$__GT_t_malli$registry37875(_QMARK_registries__$1,registries__$1,meta37876){
return (new malli.registry.t_malli$registry37875(_QMARK_registries__$1,registries__$1,meta37876));
});

}

return (new malli.registry.t_malli$registry37875(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq37852){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37852));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37905 = (function (db,meta37906){
this.db = db;
this.meta37906 = meta37906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37907,meta37906__$1){
var self__ = this;
var _37907__$1 = this;
return (new malli.registry.t_malli$registry37905(self__.db,meta37906__$1));
}));

(malli.registry.t_malli$registry37905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37907){
var self__ = this;
var _37907__$1 = this;
return self__.meta37906;
}));

(malli.registry.t_malli$registry37905.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37905.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry37905.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry37905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta37906","meta37906",162099084,null)], null);
}));

(malli.registry.t_malli$registry37905.cljs$lang$type = true);

(malli.registry.t_malli$registry37905.cljs$lang$ctorStr = "malli.registry/t_malli$registry37905");

(malli.registry.t_malli$registry37905.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37905");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37905.
 */
malli.registry.__GT_t_malli$registry37905 = (function malli$registry$mutable_registry_$___GT_t_malli$registry37905(db__$1,meta37906){
return (new malli.registry.t_malli$registry37905(db__$1,meta37906));
});

}

return (new malli.registry.t_malli$registry37905(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37930 = (function (meta37931){
this.meta37931 = meta37931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37932,meta37931__$1){
var self__ = this;
var _37932__$1 = this;
return (new malli.registry.t_malli$registry37930(meta37931__$1));
}));

(malli.registry.t_malli$registry37930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37932){
var self__ = this;
var _37932__$1 = this;
return self__.meta37931;
}));

(malli.registry.t_malli$registry37930.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37930.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry37930.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry37930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37931","meta37931",50015976,null)], null);
}));

(malli.registry.t_malli$registry37930.cljs$lang$type = true);

(malli.registry.t_malli$registry37930.cljs$lang$ctorStr = "malli.registry/t_malli$registry37930");

(malli.registry.t_malli$registry37930.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37930");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37930.
 */
malli.registry.__GT_t_malli$registry37930 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry37930(meta37931){
return (new malli.registry.t_malli$registry37930(meta37931));
});

}

return (new malli.registry.t_malli$registry37930(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry37940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry37940 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta37941){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta37941 = meta37941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry37940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37942,meta37941__$1){
var self__ = this;
var _37942__$1 = this;
return (new malli.registry.t_malli$registry37940(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta37941__$1));
}));

(malli.registry.t_malli$registry37940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37942){
var self__ = this;
var _37942__$1 = this;
return self__.meta37941;
}));

(malli.registry.t_malli$registry37940.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry37940.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = (function (){var fexpr__37943 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__37943.cljs$core$IFn$_invoke$arity$1 ? fexpr__37943.cljs$core$IFn$_invoke$arity$1(name) : fexpr__37943.call(null,name));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (function (){var G__37944 = name;
var G__37945 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__37944,G__37945) : self__.provider.call(null,G__37944,G__37945));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry37940.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry37940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta37941","meta37941",-97570058,null)], null);
}));

(malli.registry.t_malli$registry37940.cljs$lang$type = true);

(malli.registry.t_malli$registry37940.cljs$lang$ctorStr = "malli.registry/t_malli$registry37940");

(malli.registry.t_malli$registry37940.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry37940");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry37940.
 */
malli.registry.__GT_t_malli$registry37940 = (function malli$registry$lazy_registry_$___GT_t_malli$registry37940(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta37941){
return (new malli.registry.t_malli$registry37940(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta37941));
});

}

return (new malli.registry.t_malli$registry37940(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
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
