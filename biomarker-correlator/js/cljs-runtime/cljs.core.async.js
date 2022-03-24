goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41822 = arguments.length;
switch (G__41822) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41824 = (function (f,blockable,meta41825){
this.f = f;
this.blockable = blockable;
this.meta41825 = meta41825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41826,meta41825__$1){
var self__ = this;
var _41826__$1 = this;
return (new cljs.core.async.t_cljs$core$async41824(self__.f,self__.blockable,meta41825__$1));
}));

(cljs.core.async.t_cljs$core$async41824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41826){
var self__ = this;
var _41826__$1 = this;
return self__.meta41825;
}));

(cljs.core.async.t_cljs$core$async41824.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41825","meta41825",1987510281,null)], null);
}));

(cljs.core.async.t_cljs$core$async41824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41824");

(cljs.core.async.t_cljs$core$async41824.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41824.
 */
cljs.core.async.__GT_t_cljs$core$async41824 = (function cljs$core$async$__GT_t_cljs$core$async41824(f__$1,blockable__$1,meta41825){
return (new cljs.core.async.t_cljs$core$async41824(f__$1,blockable__$1,meta41825));
});

}

return (new cljs.core.async.t_cljs$core$async41824(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41836 = arguments.length;
switch (G__41836) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41845 = arguments.length;
switch (G__41845) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41856 = arguments.length;
switch (G__41856) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44072 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44072) : fn1.call(null,val_44072));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44072) : fn1.call(null,val_44072));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41859 = arguments.length;
switch (G__41859) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___44074 = n;
var x_44075 = (0);
while(true){
if((x_44075 < n__4741__auto___44074)){
(a[x_44075] = x_44075);

var G__44076 = (x_44075 + (1));
x_44075 = G__44076;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41860 = (function (flag,meta41861){
this.flag = flag;
this.meta41861 = meta41861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41862,meta41861__$1){
var self__ = this;
var _41862__$1 = this;
return (new cljs.core.async.t_cljs$core$async41860(self__.flag,meta41861__$1));
}));

(cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41862){
var self__ = this;
var _41862__$1 = this;
return self__.meta41861;
}));

(cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41861","meta41861",-1063960854,null)], null);
}));

(cljs.core.async.t_cljs$core$async41860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41860");

(cljs.core.async.t_cljs$core$async41860.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41860.
 */
cljs.core.async.__GT_t_cljs$core$async41860 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41860(flag__$1,meta41861){
return (new cljs.core.async.t_cljs$core$async41860(flag__$1,meta41861));
});

}

return (new cljs.core.async.t_cljs$core$async41860(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41863 = (function (flag,cb,meta41864){
this.flag = flag;
this.cb = cb;
this.meta41864 = meta41864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41865,meta41864__$1){
var self__ = this;
var _41865__$1 = this;
return (new cljs.core.async.t_cljs$core$async41863(self__.flag,self__.cb,meta41864__$1));
}));

(cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41865){
var self__ = this;
var _41865__$1 = this;
return self__.meta41864;
}));

(cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41864","meta41864",-294670320,null)], null);
}));

(cljs.core.async.t_cljs$core$async41863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41863");

(cljs.core.async.t_cljs$core$async41863.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41863.
 */
cljs.core.async.__GT_t_cljs$core$async41863 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41863(flag__$1,cb__$1,meta41864){
return (new cljs.core.async.t_cljs$core$async41863(flag__$1,cb__$1,meta41864));
});

}

return (new cljs.core.async.t_cljs$core$async41863(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41867_SHARP_){
var G__41878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41867_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41878) : fret.call(null,G__41878));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41868_SHARP_){
var G__41879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41868_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41879) : fret.call(null,G__41879));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44085 = (i + (1));
i = G__44085;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44086 = arguments.length;
var i__4865__auto___44087 = (0);
while(true){
if((i__4865__auto___44087 < len__4864__auto___44086)){
args__4870__auto__.push((arguments[i__4865__auto___44087]));

var G__44088 = (i__4865__auto___44087 + (1));
i__4865__auto___44087 = G__44088;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41886){
var map__41887 = p__41886;
var map__41887__$1 = cljs.core.__destructure_map(map__41887);
var opts = map__41887__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41880){
var G__41881 = cljs.core.first(seq41880);
var seq41880__$1 = cljs.core.next(seq41880);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41881,seq41880__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41912 = arguments.length;
switch (G__41912) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41753__auto___44090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_41963){
var state_val_41966 = (state_41963[(1)]);
if((state_val_41966 === (7))){
var inst_41956 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41972_44091 = state_41963__$1;
(statearr_41972_44091[(2)] = inst_41956);

(statearr_41972_44091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (1))){
var state_41963__$1 = state_41963;
var statearr_41976_44092 = state_41963__$1;
(statearr_41976_44092[(2)] = null);

(statearr_41976_44092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (4))){
var inst_41931 = (state_41963[(7)]);
var inst_41931__$1 = (state_41963[(2)]);
var inst_41937 = (inst_41931__$1 == null);
var state_41963__$1 = (function (){var statearr_41977 = state_41963;
(statearr_41977[(7)] = inst_41931__$1);

return statearr_41977;
})();
if(cljs.core.truth_(inst_41937)){
var statearr_41978_44093 = state_41963__$1;
(statearr_41978_44093[(1)] = (5));

} else {
var statearr_41979_44094 = state_41963__$1;
(statearr_41979_44094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (13))){
var state_41963__$1 = state_41963;
var statearr_41981_44095 = state_41963__$1;
(statearr_41981_44095[(2)] = null);

(statearr_41981_44095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (6))){
var inst_41931 = (state_41963[(7)]);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41963__$1,(11),to,inst_41931);
} else {
if((state_val_41966 === (3))){
var inst_41959 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41963__$1,inst_41959);
} else {
if((state_val_41966 === (12))){
var state_41963__$1 = state_41963;
var statearr_41984_44096 = state_41963__$1;
(statearr_41984_44096[(2)] = null);

(statearr_41984_44096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (2))){
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41963__$1,(4),from);
} else {
if((state_val_41966 === (11))){
var inst_41949 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
if(cljs.core.truth_(inst_41949)){
var statearr_41987_44097 = state_41963__$1;
(statearr_41987_44097[(1)] = (12));

} else {
var statearr_41988_44098 = state_41963__$1;
(statearr_41988_44098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (9))){
var state_41963__$1 = state_41963;
var statearr_41990_44099 = state_41963__$1;
(statearr_41990_44099[(2)] = null);

(statearr_41990_44099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (5))){
var state_41963__$1 = state_41963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41991_44100 = state_41963__$1;
(statearr_41991_44100[(1)] = (8));

} else {
var statearr_41992_44101 = state_41963__$1;
(statearr_41992_44101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (14))){
var inst_41954 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41993_44102 = state_41963__$1;
(statearr_41993_44102[(2)] = inst_41954);

(statearr_41993_44102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (10))){
var inst_41946 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41994_44103 = state_41963__$1;
(statearr_41994_44103[(2)] = inst_41946);

(statearr_41994_44103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41966 === (8))){
var inst_41941 = cljs.core.async.close_BANG_(to);
var state_41963__$1 = state_41963;
var statearr_41999_44104 = state_41963__$1;
(statearr_41999_44104[(2)] = inst_41941);

(statearr_41999_44104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_42000 = [null,null,null,null,null,null,null,null];
(statearr_42000[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_42000[(1)] = (1));

return statearr_42000;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_41963){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_41963);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42002){var ex__41542__auto__ = e42002;
var statearr_42003_44105 = state_41963;
(statearr_42003_44105[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_41963[(4)]))){
var statearr_42004_44106 = state_41963;
(statearr_42004_44106[(1)] = cljs.core.first((state_41963[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44107 = state_41963;
state_41963 = G__44107;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_41963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_41963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42005 = f__41754__auto__();
(statearr_42005[(6)] = c__41753__auto___44090);

return statearr_42005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__42016){
var vec__42017 = p__42016;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42017,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42017,(1),null);
var job = vec__42017;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41753__auto___44109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42025){
var state_val_42026 = (state_42025[(1)]);
if((state_val_42026 === (1))){
var state_42025__$1 = state_42025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42025__$1,(2),res,v);
} else {
if((state_val_42026 === (2))){
var inst_42022 = (state_42025[(2)]);
var inst_42023 = cljs.core.async.close_BANG_(res);
var state_42025__$1 = (function (){var statearr_42029 = state_42025;
(statearr_42029[(7)] = inst_42022);

return statearr_42029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42025__$1,inst_42023);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0 = (function (){
var statearr_42030 = [null,null,null,null,null,null,null,null];
(statearr_42030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__);

(statearr_42030[(1)] = (1));

return statearr_42030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1 = (function (state_42025){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42025);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42036){var ex__41542__auto__ = e42036;
var statearr_42041_44110 = state_42025;
(statearr_42041_44110[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42025[(4)]))){
var statearr_42045_44111 = state_42025;
(statearr_42045_44111[(1)] = cljs.core.first((state_42025[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44112 = state_42025;
state_42025 = G__44112;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = function(state_42025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1.call(this,state_42025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42058 = f__41754__auto__();
(statearr_42058[(6)] = c__41753__auto___44109);

return statearr_42058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42063){
var vec__42064 = p__42063;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42064,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42064,(1),null);
var job = vec__42064;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___44113 = n;
var __44114 = (0);
while(true){
if((__44114 < n__4741__auto___44113)){
var G__42076_44116 = type;
var G__42076_44117__$1 = (((G__42076_44116 instanceof cljs.core.Keyword))?G__42076_44116.fqn:null);
switch (G__42076_44117__$1) {
case "compute":
var c__41753__auto___44120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44114,c__41753__auto___44120,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async){
return (function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = ((function (__44114,c__41753__auto___44120,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async){
return (function (state_42103){
var state_val_42104 = (state_42103[(1)]);
if((state_val_42104 === (1))){
var state_42103__$1 = state_42103;
var statearr_42106_44123 = state_42103__$1;
(statearr_42106_44123[(2)] = null);

(statearr_42106_44123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (2))){
var state_42103__$1 = state_42103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42103__$1,(4),jobs);
} else {
if((state_val_42104 === (3))){
var inst_42101 = (state_42103[(2)]);
var state_42103__$1 = state_42103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42103__$1,inst_42101);
} else {
if((state_val_42104 === (4))){
var inst_42091 = (state_42103[(2)]);
var inst_42094 = process(inst_42091);
var state_42103__$1 = state_42103;
if(cljs.core.truth_(inst_42094)){
var statearr_42111_44125 = state_42103__$1;
(statearr_42111_44125[(1)] = (5));

} else {
var statearr_42117_44126 = state_42103__$1;
(statearr_42117_44126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (5))){
var state_42103__$1 = state_42103;
var statearr_42126_44128 = state_42103__$1;
(statearr_42126_44128[(2)] = null);

(statearr_42126_44128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (6))){
var state_42103__$1 = state_42103;
var statearr_42131_44129 = state_42103__$1;
(statearr_42131_44129[(2)] = null);

(statearr_42131_44129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (7))){
var inst_42099 = (state_42103[(2)]);
var state_42103__$1 = state_42103;
var statearr_42132_44130 = state_42103__$1;
(statearr_42132_44130[(2)] = inst_42099);

(statearr_42132_44130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44114,c__41753__auto___44120,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async))
;
return ((function (__44114,switch__41538__auto__,c__41753__auto___44120,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0 = (function (){
var statearr_42134 = [null,null,null,null,null,null,null];
(statearr_42134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__);

(statearr_42134[(1)] = (1));

return statearr_42134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1 = (function (state_42103){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42103);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42140){var ex__41542__auto__ = e42140;
var statearr_42145_44131 = state_42103;
(statearr_42145_44131[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42103[(4)]))){
var statearr_42153_44132 = state_42103;
(statearr_42153_44132[(1)] = cljs.core.first((state_42103[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44135 = state_42103;
state_42103 = G__44135;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = function(state_42103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1.call(this,state_42103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__;
})()
;})(__44114,switch__41538__auto__,c__41753__auto___44120,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async))
})();
var state__41755__auto__ = (function (){var statearr_42159 = f__41754__auto__();
(statearr_42159[(6)] = c__41753__auto___44120);

return statearr_42159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
});})(__44114,c__41753__auto___44120,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async))
);


break;
case "async":
var c__41753__auto___44136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44114,c__41753__auto___44136,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async){
return (function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = ((function (__44114,c__41753__auto___44136,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async){
return (function (state_42193){
var state_val_42194 = (state_42193[(1)]);
if((state_val_42194 === (1))){
var state_42193__$1 = state_42193;
var statearr_42204_44138 = state_42193__$1;
(statearr_42204_44138[(2)] = null);

(statearr_42204_44138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (2))){
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42193__$1,(4),jobs);
} else {
if((state_val_42194 === (3))){
var inst_42187 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42193__$1,inst_42187);
} else {
if((state_val_42194 === (4))){
var inst_42173 = (state_42193[(2)]);
var inst_42175 = async(inst_42173);
var state_42193__$1 = state_42193;
if(cljs.core.truth_(inst_42175)){
var statearr_42217_44150 = state_42193__$1;
(statearr_42217_44150[(1)] = (5));

} else {
var statearr_42218_44151 = state_42193__$1;
(statearr_42218_44151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (5))){
var state_42193__$1 = state_42193;
var statearr_42220_44153 = state_42193__$1;
(statearr_42220_44153[(2)] = null);

(statearr_42220_44153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (6))){
var state_42193__$1 = state_42193;
var statearr_42221_44155 = state_42193__$1;
(statearr_42221_44155[(2)] = null);

(statearr_42221_44155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (7))){
var inst_42184 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
var statearr_42223_44156 = state_42193__$1;
(statearr_42223_44156[(2)] = inst_42184);

(statearr_42223_44156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44114,c__41753__auto___44136,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async))
;
return ((function (__44114,switch__41538__auto__,c__41753__auto___44136,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0 = (function (){
var statearr_42224 = [null,null,null,null,null,null,null];
(statearr_42224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__);

(statearr_42224[(1)] = (1));

return statearr_42224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1 = (function (state_42193){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42193);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42225){var ex__41542__auto__ = e42225;
var statearr_42226_44159 = state_42193;
(statearr_42226_44159[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42193[(4)]))){
var statearr_42227_44160 = state_42193;
(statearr_42227_44160[(1)] = cljs.core.first((state_42193[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44162 = state_42193;
state_42193 = G__44162;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = function(state_42193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1.call(this,state_42193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__;
})()
;})(__44114,switch__41538__auto__,c__41753__auto___44136,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async))
})();
var state__41755__auto__ = (function (){var statearr_42236 = f__41754__auto__();
(statearr_42236[(6)] = c__41753__auto___44136);

return statearr_42236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
});})(__44114,c__41753__auto___44136,G__42076_44116,G__42076_44117__$1,n__4741__auto___44113,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42076_44117__$1)].join('')));

}

var G__44163 = (__44114 + (1));
__44114 = G__44163;
continue;
} else {
}
break;
}

var c__41753__auto___44164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42264){
var state_val_42265 = (state_42264[(1)]);
if((state_val_42265 === (7))){
var inst_42260 = (state_42264[(2)]);
var state_42264__$1 = state_42264;
var statearr_42267_44165 = state_42264__$1;
(statearr_42267_44165[(2)] = inst_42260);

(statearr_42267_44165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (1))){
var state_42264__$1 = state_42264;
var statearr_42268_44166 = state_42264__$1;
(statearr_42268_44166[(2)] = null);

(statearr_42268_44166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (4))){
var inst_42245 = (state_42264[(7)]);
var inst_42245__$1 = (state_42264[(2)]);
var inst_42246 = (inst_42245__$1 == null);
var state_42264__$1 = (function (){var statearr_42269 = state_42264;
(statearr_42269[(7)] = inst_42245__$1);

return statearr_42269;
})();
if(cljs.core.truth_(inst_42246)){
var statearr_42270_44167 = state_42264__$1;
(statearr_42270_44167[(1)] = (5));

} else {
var statearr_42271_44168 = state_42264__$1;
(statearr_42271_44168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (6))){
var inst_42245 = (state_42264[(7)]);
var inst_42250 = (state_42264[(8)]);
var inst_42250__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42252 = [inst_42245,inst_42250__$1];
var inst_42253 = (new cljs.core.PersistentVector(null,2,(5),inst_42251,inst_42252,null));
var state_42264__$1 = (function (){var statearr_42272 = state_42264;
(statearr_42272[(8)] = inst_42250__$1);

return statearr_42272;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42264__$1,(8),jobs,inst_42253);
} else {
if((state_val_42265 === (3))){
var inst_42262 = (state_42264[(2)]);
var state_42264__$1 = state_42264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42264__$1,inst_42262);
} else {
if((state_val_42265 === (2))){
var state_42264__$1 = state_42264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42264__$1,(4),from);
} else {
if((state_val_42265 === (9))){
var inst_42257 = (state_42264[(2)]);
var state_42264__$1 = (function (){var statearr_42273 = state_42264;
(statearr_42273[(9)] = inst_42257);

return statearr_42273;
})();
var statearr_42275_44169 = state_42264__$1;
(statearr_42275_44169[(2)] = null);

(statearr_42275_44169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (5))){
var inst_42248 = cljs.core.async.close_BANG_(jobs);
var state_42264__$1 = state_42264;
var statearr_42276_44170 = state_42264__$1;
(statearr_42276_44170[(2)] = inst_42248);

(statearr_42276_44170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (8))){
var inst_42250 = (state_42264[(8)]);
var inst_42255 = (state_42264[(2)]);
var state_42264__$1 = (function (){var statearr_42277 = state_42264;
(statearr_42277[(10)] = inst_42255);

return statearr_42277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42264__$1,(9),results,inst_42250);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0 = (function (){
var statearr_42278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__);

(statearr_42278[(1)] = (1));

return statearr_42278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1 = (function (state_42264){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42264);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42279){var ex__41542__auto__ = e42279;
var statearr_42280_44171 = state_42264;
(statearr_42280_44171[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42264[(4)]))){
var statearr_42281_44172 = state_42264;
(statearr_42281_44172[(1)] = cljs.core.first((state_42264[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44173 = state_42264;
state_42264 = G__44173;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = function(state_42264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1.call(this,state_42264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42283 = f__41754__auto__();
(statearr_42283[(6)] = c__41753__auto___44164);

return statearr_42283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


var c__41753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42322){
var state_val_42323 = (state_42322[(1)]);
if((state_val_42323 === (7))){
var inst_42317 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42324_44174 = state_42322__$1;
(statearr_42324_44174[(2)] = inst_42317);

(statearr_42324_44174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (20))){
var state_42322__$1 = state_42322;
var statearr_42325_44175 = state_42322__$1;
(statearr_42325_44175[(2)] = null);

(statearr_42325_44175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (1))){
var state_42322__$1 = state_42322;
var statearr_42326_44176 = state_42322__$1;
(statearr_42326_44176[(2)] = null);

(statearr_42326_44176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (4))){
var inst_42286 = (state_42322[(7)]);
var inst_42286__$1 = (state_42322[(2)]);
var inst_42287 = (inst_42286__$1 == null);
var state_42322__$1 = (function (){var statearr_42327 = state_42322;
(statearr_42327[(7)] = inst_42286__$1);

return statearr_42327;
})();
if(cljs.core.truth_(inst_42287)){
var statearr_42328_44177 = state_42322__$1;
(statearr_42328_44177[(1)] = (5));

} else {
var statearr_42329_44178 = state_42322__$1;
(statearr_42329_44178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (15))){
var inst_42299 = (state_42322[(8)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42322__$1,(18),to,inst_42299);
} else {
if((state_val_42323 === (21))){
var inst_42312 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42330_44179 = state_42322__$1;
(statearr_42330_44179[(2)] = inst_42312);

(statearr_42330_44179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (13))){
var inst_42314 = (state_42322[(2)]);
var state_42322__$1 = (function (){var statearr_42332 = state_42322;
(statearr_42332[(9)] = inst_42314);

return statearr_42332;
})();
var statearr_42333_44182 = state_42322__$1;
(statearr_42333_44182[(2)] = null);

(statearr_42333_44182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (6))){
var inst_42286 = (state_42322[(7)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42322__$1,(11),inst_42286);
} else {
if((state_val_42323 === (17))){
var inst_42307 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
if(cljs.core.truth_(inst_42307)){
var statearr_42334_44183 = state_42322__$1;
(statearr_42334_44183[(1)] = (19));

} else {
var statearr_42335_44184 = state_42322__$1;
(statearr_42335_44184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (3))){
var inst_42319 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42322__$1,inst_42319);
} else {
if((state_val_42323 === (12))){
var inst_42296 = (state_42322[(10)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42322__$1,(14),inst_42296);
} else {
if((state_val_42323 === (2))){
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42322__$1,(4),results);
} else {
if((state_val_42323 === (19))){
var state_42322__$1 = state_42322;
var statearr_42336_44187 = state_42322__$1;
(statearr_42336_44187[(2)] = null);

(statearr_42336_44187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (11))){
var inst_42296 = (state_42322[(2)]);
var state_42322__$1 = (function (){var statearr_42338 = state_42322;
(statearr_42338[(10)] = inst_42296);

return statearr_42338;
})();
var statearr_42339_44188 = state_42322__$1;
(statearr_42339_44188[(2)] = null);

(statearr_42339_44188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (9))){
var state_42322__$1 = state_42322;
var statearr_42340_44190 = state_42322__$1;
(statearr_42340_44190[(2)] = null);

(statearr_42340_44190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (5))){
var state_42322__$1 = state_42322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42341_44191 = state_42322__$1;
(statearr_42341_44191[(1)] = (8));

} else {
var statearr_42342_44192 = state_42322__$1;
(statearr_42342_44192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (14))){
var inst_42299 = (state_42322[(8)]);
var inst_42301 = (state_42322[(11)]);
var inst_42299__$1 = (state_42322[(2)]);
var inst_42300 = (inst_42299__$1 == null);
var inst_42301__$1 = cljs.core.not(inst_42300);
var state_42322__$1 = (function (){var statearr_42343 = state_42322;
(statearr_42343[(8)] = inst_42299__$1);

(statearr_42343[(11)] = inst_42301__$1);

return statearr_42343;
})();
if(inst_42301__$1){
var statearr_42344_44194 = state_42322__$1;
(statearr_42344_44194[(1)] = (15));

} else {
var statearr_42345_44195 = state_42322__$1;
(statearr_42345_44195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (16))){
var inst_42301 = (state_42322[(11)]);
var state_42322__$1 = state_42322;
var statearr_42346_44196 = state_42322__$1;
(statearr_42346_44196[(2)] = inst_42301);

(statearr_42346_44196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (10))){
var inst_42293 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42347_44197 = state_42322__$1;
(statearr_42347_44197[(2)] = inst_42293);

(statearr_42347_44197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (18))){
var inst_42304 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42349_44198 = state_42322__$1;
(statearr_42349_44198[(2)] = inst_42304);

(statearr_42349_44198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (8))){
var inst_42290 = cljs.core.async.close_BANG_(to);
var state_42322__$1 = state_42322;
var statearr_42350_44199 = state_42322__$1;
(statearr_42350_44199[(2)] = inst_42290);

(statearr_42350_44199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0 = (function (){
var statearr_42351 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__);

(statearr_42351[(1)] = (1));

return statearr_42351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1 = (function (state_42322){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42322);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42352){var ex__41542__auto__ = e42352;
var statearr_42353_44200 = state_42322;
(statearr_42353_44200[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42322[(4)]))){
var statearr_42354_44201 = state_42322;
(statearr_42354_44201[(1)] = cljs.core.first((state_42322[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44202 = state_42322;
state_42322 = G__44202;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__ = function(state_42322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1.call(this,state_42322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42355 = f__41754__auto__();
(statearr_42355[(6)] = c__41753__auto__);

return statearr_42355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));

return c__41753__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42358 = arguments.length;
switch (G__42358) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42361 = arguments.length;
switch (G__42361) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42364 = arguments.length;
switch (G__42364) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41753__auto___44224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42391){
var state_val_42392 = (state_42391[(1)]);
if((state_val_42392 === (7))){
var inst_42387 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
var statearr_42393_44227 = state_42391__$1;
(statearr_42393_44227[(2)] = inst_42387);

(statearr_42393_44227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (1))){
var state_42391__$1 = state_42391;
var statearr_42394_44230 = state_42391__$1;
(statearr_42394_44230[(2)] = null);

(statearr_42394_44230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (4))){
var inst_42367 = (state_42391[(7)]);
var inst_42367__$1 = (state_42391[(2)]);
var inst_42369 = (inst_42367__$1 == null);
var state_42391__$1 = (function (){var statearr_42395 = state_42391;
(statearr_42395[(7)] = inst_42367__$1);

return statearr_42395;
})();
if(cljs.core.truth_(inst_42369)){
var statearr_42397_44231 = state_42391__$1;
(statearr_42397_44231[(1)] = (5));

} else {
var statearr_42398_44232 = state_42391__$1;
(statearr_42398_44232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (13))){
var state_42391__$1 = state_42391;
var statearr_42399_44234 = state_42391__$1;
(statearr_42399_44234[(2)] = null);

(statearr_42399_44234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (6))){
var inst_42367 = (state_42391[(7)]);
var inst_42374 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42367) : p.call(null,inst_42367));
var state_42391__$1 = state_42391;
if(cljs.core.truth_(inst_42374)){
var statearr_42400_44243 = state_42391__$1;
(statearr_42400_44243[(1)] = (9));

} else {
var statearr_42401_44245 = state_42391__$1;
(statearr_42401_44245[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (3))){
var inst_42389 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42391__$1,inst_42389);
} else {
if((state_val_42392 === (12))){
var state_42391__$1 = state_42391;
var statearr_42402_44246 = state_42391__$1;
(statearr_42402_44246[(2)] = null);

(statearr_42402_44246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (2))){
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42391__$1,(4),ch);
} else {
if((state_val_42392 === (11))){
var inst_42367 = (state_42391[(7)]);
var inst_42378 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42391__$1,(8),inst_42378,inst_42367);
} else {
if((state_val_42392 === (9))){
var state_42391__$1 = state_42391;
var statearr_42403_44248 = state_42391__$1;
(statearr_42403_44248[(2)] = tc);

(statearr_42403_44248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (5))){
var inst_42371 = cljs.core.async.close_BANG_(tc);
var inst_42372 = cljs.core.async.close_BANG_(fc);
var state_42391__$1 = (function (){var statearr_42405 = state_42391;
(statearr_42405[(8)] = inst_42371);

return statearr_42405;
})();
var statearr_42406_44251 = state_42391__$1;
(statearr_42406_44251[(2)] = inst_42372);

(statearr_42406_44251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (14))){
var inst_42385 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
var statearr_42407_44253 = state_42391__$1;
(statearr_42407_44253[(2)] = inst_42385);

(statearr_42407_44253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (10))){
var state_42391__$1 = state_42391;
var statearr_42408_44254 = state_42391__$1;
(statearr_42408_44254[(2)] = fc);

(statearr_42408_44254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (8))){
var inst_42380 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
if(cljs.core.truth_(inst_42380)){
var statearr_42409_44260 = state_42391__$1;
(statearr_42409_44260[(1)] = (12));

} else {
var statearr_42410_44261 = state_42391__$1;
(statearr_42410_44261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_42411 = [null,null,null,null,null,null,null,null,null];
(statearr_42411[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_42411[(1)] = (1));

return statearr_42411;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_42391){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42391);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42412){var ex__41542__auto__ = e42412;
var statearr_42413_44262 = state_42391;
(statearr_42413_44262[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42391[(4)]))){
var statearr_42415_44263 = state_42391;
(statearr_42415_44263[(1)] = cljs.core.first((state_42391[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44264 = state_42391;
state_42391 = G__44264;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_42391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_42391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42416 = f__41754__auto__();
(statearr_42416[(6)] = c__41753__auto___44224);

return statearr_42416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42439){
var state_val_42440 = (state_42439[(1)]);
if((state_val_42440 === (7))){
var inst_42435 = (state_42439[(2)]);
var state_42439__$1 = state_42439;
var statearr_42441_44266 = state_42439__$1;
(statearr_42441_44266[(2)] = inst_42435);

(statearr_42441_44266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (1))){
var inst_42417 = init;
var inst_42418 = inst_42417;
var state_42439__$1 = (function (){var statearr_42442 = state_42439;
(statearr_42442[(7)] = inst_42418);

return statearr_42442;
})();
var statearr_42443_44268 = state_42439__$1;
(statearr_42443_44268[(2)] = null);

(statearr_42443_44268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (4))){
var inst_42421 = (state_42439[(8)]);
var inst_42421__$1 = (state_42439[(2)]);
var inst_42422 = (inst_42421__$1 == null);
var state_42439__$1 = (function (){var statearr_42444 = state_42439;
(statearr_42444[(8)] = inst_42421__$1);

return statearr_42444;
})();
if(cljs.core.truth_(inst_42422)){
var statearr_42445_44273 = state_42439__$1;
(statearr_42445_44273[(1)] = (5));

} else {
var statearr_42446_44274 = state_42439__$1;
(statearr_42446_44274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (6))){
var inst_42421 = (state_42439[(8)]);
var inst_42418 = (state_42439[(7)]);
var inst_42425 = (state_42439[(9)]);
var inst_42425__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42418,inst_42421) : f.call(null,inst_42418,inst_42421));
var inst_42427 = cljs.core.reduced_QMARK_(inst_42425__$1);
var state_42439__$1 = (function (){var statearr_42448 = state_42439;
(statearr_42448[(9)] = inst_42425__$1);

return statearr_42448;
})();
if(inst_42427){
var statearr_42449_44276 = state_42439__$1;
(statearr_42449_44276[(1)] = (8));

} else {
var statearr_42450_44277 = state_42439__$1;
(statearr_42450_44277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (3))){
var inst_42437 = (state_42439[(2)]);
var state_42439__$1 = state_42439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42439__$1,inst_42437);
} else {
if((state_val_42440 === (2))){
var state_42439__$1 = state_42439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42439__$1,(4),ch);
} else {
if((state_val_42440 === (9))){
var inst_42425 = (state_42439[(9)]);
var inst_42418 = inst_42425;
var state_42439__$1 = (function (){var statearr_42451 = state_42439;
(statearr_42451[(7)] = inst_42418);

return statearr_42451;
})();
var statearr_42452_44278 = state_42439__$1;
(statearr_42452_44278[(2)] = null);

(statearr_42452_44278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (5))){
var inst_42418 = (state_42439[(7)]);
var state_42439__$1 = state_42439;
var statearr_42453_44279 = state_42439__$1;
(statearr_42453_44279[(2)] = inst_42418);

(statearr_42453_44279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (10))){
var inst_42433 = (state_42439[(2)]);
var state_42439__$1 = state_42439;
var statearr_42454_44280 = state_42439__$1;
(statearr_42454_44280[(2)] = inst_42433);

(statearr_42454_44280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42440 === (8))){
var inst_42425 = (state_42439[(9)]);
var inst_42429 = cljs.core.deref(inst_42425);
var state_42439__$1 = state_42439;
var statearr_42455_44281 = state_42439__$1;
(statearr_42455_44281[(2)] = inst_42429);

(statearr_42455_44281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__41539__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41539__auto____0 = (function (){
var statearr_42457 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42457[(0)] = cljs$core$async$reduce_$_state_machine__41539__auto__);

(statearr_42457[(1)] = (1));

return statearr_42457;
});
var cljs$core$async$reduce_$_state_machine__41539__auto____1 = (function (state_42439){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42439);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42458){var ex__41542__auto__ = e42458;
var statearr_42459_44283 = state_42439;
(statearr_42459_44283[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42439[(4)]))){
var statearr_42460_44284 = state_42439;
(statearr_42460_44284[(1)] = cljs.core.first((state_42439[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44285 = state_42439;
state_42439 = G__44285;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41539__auto__ = function(state_42439){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41539__auto____1.call(this,state_42439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41539__auto____0;
cljs$core$async$reduce_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41539__auto____1;
return cljs$core$async$reduce_$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42461 = f__41754__auto__();
(statearr_42461[(6)] = c__41753__auto__);

return statearr_42461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));

return c__41753__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42468){
var state_val_42469 = (state_42468[(1)]);
if((state_val_42469 === (1))){
var inst_42463 = cljs.core.async.reduce(f__$1,init,ch);
var state_42468__$1 = state_42468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42468__$1,(2),inst_42463);
} else {
if((state_val_42469 === (2))){
var inst_42465 = (state_42468[(2)]);
var inst_42466 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42465) : f__$1.call(null,inst_42465));
var state_42468__$1 = state_42468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42468__$1,inst_42466);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41539__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41539__auto____0 = (function (){
var statearr_42470 = [null,null,null,null,null,null,null];
(statearr_42470[(0)] = cljs$core$async$transduce_$_state_machine__41539__auto__);

(statearr_42470[(1)] = (1));

return statearr_42470;
});
var cljs$core$async$transduce_$_state_machine__41539__auto____1 = (function (state_42468){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42468);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42471){var ex__41542__auto__ = e42471;
var statearr_42472_44294 = state_42468;
(statearr_42472_44294[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42468[(4)]))){
var statearr_42474_44295 = state_42468;
(statearr_42474_44295[(1)] = cljs.core.first((state_42468[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44298 = state_42468;
state_42468 = G__44298;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41539__auto__ = function(state_42468){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41539__auto____1.call(this,state_42468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41539__auto____0;
cljs$core$async$transduce_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41539__auto____1;
return cljs$core$async$transduce_$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42475 = f__41754__auto__();
(statearr_42475[(6)] = c__41753__auto__);

return statearr_42475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));

return c__41753__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__42477 = arguments.length;
switch (G__42477) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42503){
var state_val_42504 = (state_42503[(1)]);
if((state_val_42504 === (7))){
var inst_42485 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42505_44304 = state_42503__$1;
(statearr_42505_44304[(2)] = inst_42485);

(statearr_42505_44304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (1))){
var inst_42479 = cljs.core.seq(coll);
var inst_42480 = inst_42479;
var state_42503__$1 = (function (){var statearr_42506 = state_42503;
(statearr_42506[(7)] = inst_42480);

return statearr_42506;
})();
var statearr_42507_44305 = state_42503__$1;
(statearr_42507_44305[(2)] = null);

(statearr_42507_44305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (4))){
var inst_42480 = (state_42503[(7)]);
var inst_42483 = cljs.core.first(inst_42480);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42503__$1,(7),ch,inst_42483);
} else {
if((state_val_42504 === (13))){
var inst_42497 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42509_44306 = state_42503__$1;
(statearr_42509_44306[(2)] = inst_42497);

(statearr_42509_44306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (6))){
var inst_42488 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
if(cljs.core.truth_(inst_42488)){
var statearr_42510_44309 = state_42503__$1;
(statearr_42510_44309[(1)] = (8));

} else {
var statearr_42511_44310 = state_42503__$1;
(statearr_42511_44310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (3))){
var inst_42501 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42503__$1,inst_42501);
} else {
if((state_val_42504 === (12))){
var state_42503__$1 = state_42503;
var statearr_42512_44311 = state_42503__$1;
(statearr_42512_44311[(2)] = null);

(statearr_42512_44311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (2))){
var inst_42480 = (state_42503[(7)]);
var state_42503__$1 = state_42503;
if(cljs.core.truth_(inst_42480)){
var statearr_42513_44312 = state_42503__$1;
(statearr_42513_44312[(1)] = (4));

} else {
var statearr_42514_44313 = state_42503__$1;
(statearr_42514_44313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (11))){
var inst_42494 = cljs.core.async.close_BANG_(ch);
var state_42503__$1 = state_42503;
var statearr_42515_44314 = state_42503__$1;
(statearr_42515_44314[(2)] = inst_42494);

(statearr_42515_44314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (9))){
var state_42503__$1 = state_42503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42517_44315 = state_42503__$1;
(statearr_42517_44315[(1)] = (11));

} else {
var statearr_42518_44316 = state_42503__$1;
(statearr_42518_44316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (5))){
var inst_42480 = (state_42503[(7)]);
var state_42503__$1 = state_42503;
var statearr_42519_44317 = state_42503__$1;
(statearr_42519_44317[(2)] = inst_42480);

(statearr_42519_44317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (10))){
var inst_42499 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42520_44318 = state_42503__$1;
(statearr_42520_44318[(2)] = inst_42499);

(statearr_42520_44318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (8))){
var inst_42480 = (state_42503[(7)]);
var inst_42490 = cljs.core.next(inst_42480);
var inst_42480__$1 = inst_42490;
var state_42503__$1 = (function (){var statearr_42521 = state_42503;
(statearr_42521[(7)] = inst_42480__$1);

return statearr_42521;
})();
var statearr_42522_44328 = state_42503__$1;
(statearr_42522_44328[(2)] = null);

(statearr_42522_44328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_42523 = [null,null,null,null,null,null,null,null];
(statearr_42523[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_42523[(1)] = (1));

return statearr_42523;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_42503){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42503);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42524){var ex__41542__auto__ = e42524;
var statearr_42525_44329 = state_42503;
(statearr_42525_44329[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42503[(4)]))){
var statearr_42526_44330 = state_42503;
(statearr_42526_44330[(1)] = cljs.core.first((state_42503[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44331 = state_42503;
state_42503 = G__44331;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_42503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_42503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42528 = f__41754__auto__();
(statearr_42528[(6)] = c__41753__auto__);

return statearr_42528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));

return c__41753__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42530 = arguments.length;
switch (G__42530) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_44340 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44340(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44341 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44341(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44353 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44353(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44354 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44354(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42535 = (function (ch,cs,meta42536){
this.ch = ch;
this.cs = cs;
this.meta42536 = meta42536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42537,meta42536__$1){
var self__ = this;
var _42537__$1 = this;
return (new cljs.core.async.t_cljs$core$async42535(self__.ch,self__.cs,meta42536__$1));
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42537){
var self__ = this;
var _42537__$1 = this;
return self__.meta42536;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42536","meta42536",-1043537521,null)], null);
}));

(cljs.core.async.t_cljs$core$async42535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42535");

(cljs.core.async.t_cljs$core$async42535.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42535.
 */
cljs.core.async.__GT_t_cljs$core$async42535 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42535(ch__$1,cs__$1,meta42536){
return (new cljs.core.async.t_cljs$core$async42535(ch__$1,cs__$1,meta42536));
});

}

return (new cljs.core.async.t_cljs$core$async42535(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41753__auto___44370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_42677){
var state_val_42678 = (state_42677[(1)]);
if((state_val_42678 === (7))){
var inst_42671 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42679_44371 = state_42677__$1;
(statearr_42679_44371[(2)] = inst_42671);

(statearr_42679_44371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (20))){
var inst_42576 = (state_42677[(7)]);
var inst_42588 = cljs.core.first(inst_42576);
var inst_42589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42588,(0),null);
var inst_42590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42588,(1),null);
var state_42677__$1 = (function (){var statearr_42680 = state_42677;
(statearr_42680[(8)] = inst_42589);

return statearr_42680;
})();
if(cljs.core.truth_(inst_42590)){
var statearr_42681_44372 = state_42677__$1;
(statearr_42681_44372[(1)] = (22));

} else {
var statearr_42682_44373 = state_42677__$1;
(statearr_42682_44373[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (27))){
var inst_42618 = (state_42677[(9)]);
var inst_42543 = (state_42677[(10)]);
var inst_42625 = (state_42677[(11)]);
var inst_42620 = (state_42677[(12)]);
var inst_42625__$1 = cljs.core._nth(inst_42618,inst_42620);
var inst_42626 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42625__$1,inst_42543,done);
var state_42677__$1 = (function (){var statearr_42683 = state_42677;
(statearr_42683[(11)] = inst_42625__$1);

return statearr_42683;
})();
if(cljs.core.truth_(inst_42626)){
var statearr_42684_44386 = state_42677__$1;
(statearr_42684_44386[(1)] = (30));

} else {
var statearr_42685_44387 = state_42677__$1;
(statearr_42685_44387[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (1))){
var state_42677__$1 = state_42677;
var statearr_42686_44388 = state_42677__$1;
(statearr_42686_44388[(2)] = null);

(statearr_42686_44388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (24))){
var inst_42576 = (state_42677[(7)]);
var inst_42595 = (state_42677[(2)]);
var inst_42596 = cljs.core.next(inst_42576);
var inst_42554 = inst_42596;
var inst_42555 = null;
var inst_42556 = (0);
var inst_42557 = (0);
var state_42677__$1 = (function (){var statearr_42687 = state_42677;
(statearr_42687[(13)] = inst_42554);

(statearr_42687[(14)] = inst_42556);

(statearr_42687[(15)] = inst_42555);

(statearr_42687[(16)] = inst_42595);

(statearr_42687[(17)] = inst_42557);

return statearr_42687;
})();
var statearr_42690_44392 = state_42677__$1;
(statearr_42690_44392[(2)] = null);

(statearr_42690_44392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (39))){
var state_42677__$1 = state_42677;
var statearr_42695_44393 = state_42677__$1;
(statearr_42695_44393[(2)] = null);

(statearr_42695_44393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (4))){
var inst_42543 = (state_42677[(10)]);
var inst_42543__$1 = (state_42677[(2)]);
var inst_42545 = (inst_42543__$1 == null);
var state_42677__$1 = (function (){var statearr_42699 = state_42677;
(statearr_42699[(10)] = inst_42543__$1);

return statearr_42699;
})();
if(cljs.core.truth_(inst_42545)){
var statearr_42703_44394 = state_42677__$1;
(statearr_42703_44394[(1)] = (5));

} else {
var statearr_42704_44395 = state_42677__$1;
(statearr_42704_44395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (15))){
var inst_42554 = (state_42677[(13)]);
var inst_42556 = (state_42677[(14)]);
var inst_42555 = (state_42677[(15)]);
var inst_42557 = (state_42677[(17)]);
var inst_42572 = (state_42677[(2)]);
var inst_42573 = (inst_42557 + (1));
var tmp42692 = inst_42554;
var tmp42693 = inst_42556;
var tmp42694 = inst_42555;
var inst_42554__$1 = tmp42692;
var inst_42555__$1 = tmp42694;
var inst_42556__$1 = tmp42693;
var inst_42557__$1 = inst_42573;
var state_42677__$1 = (function (){var statearr_42705 = state_42677;
(statearr_42705[(13)] = inst_42554__$1);

(statearr_42705[(14)] = inst_42556__$1);

(statearr_42705[(18)] = inst_42572);

(statearr_42705[(15)] = inst_42555__$1);

(statearr_42705[(17)] = inst_42557__$1);

return statearr_42705;
})();
var statearr_42706_44403 = state_42677__$1;
(statearr_42706_44403[(2)] = null);

(statearr_42706_44403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (21))){
var inst_42599 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42711_44404 = state_42677__$1;
(statearr_42711_44404[(2)] = inst_42599);

(statearr_42711_44404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (31))){
var inst_42625 = (state_42677[(11)]);
var inst_42629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42625);
var state_42677__$1 = state_42677;
var statearr_42715_44405 = state_42677__$1;
(statearr_42715_44405[(2)] = inst_42629);

(statearr_42715_44405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (32))){
var inst_42618 = (state_42677[(9)]);
var inst_42620 = (state_42677[(12)]);
var inst_42617 = (state_42677[(19)]);
var inst_42619 = (state_42677[(20)]);
var inst_42631 = (state_42677[(2)]);
var inst_42632 = (inst_42620 + (1));
var tmp42707 = inst_42618;
var tmp42708 = inst_42617;
var tmp42709 = inst_42619;
var inst_42617__$1 = tmp42708;
var inst_42618__$1 = tmp42707;
var inst_42619__$1 = tmp42709;
var inst_42620__$1 = inst_42632;
var state_42677__$1 = (function (){var statearr_42720 = state_42677;
(statearr_42720[(21)] = inst_42631);

(statearr_42720[(9)] = inst_42618__$1);

(statearr_42720[(12)] = inst_42620__$1);

(statearr_42720[(19)] = inst_42617__$1);

(statearr_42720[(20)] = inst_42619__$1);

return statearr_42720;
})();
var statearr_42721_44406 = state_42677__$1;
(statearr_42721_44406[(2)] = null);

(statearr_42721_44406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (40))){
var inst_42644 = (state_42677[(22)]);
var inst_42648 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42644);
var state_42677__$1 = state_42677;
var statearr_42725_44410 = state_42677__$1;
(statearr_42725_44410[(2)] = inst_42648);

(statearr_42725_44410[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (33))){
var inst_42635 = (state_42677[(23)]);
var inst_42637 = cljs.core.chunked_seq_QMARK_(inst_42635);
var state_42677__$1 = state_42677;
if(inst_42637){
var statearr_42728_44411 = state_42677__$1;
(statearr_42728_44411[(1)] = (36));

} else {
var statearr_42729_44412 = state_42677__$1;
(statearr_42729_44412[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (13))){
var inst_42566 = (state_42677[(24)]);
var inst_42569 = cljs.core.async.close_BANG_(inst_42566);
var state_42677__$1 = state_42677;
var statearr_42733_44413 = state_42677__$1;
(statearr_42733_44413[(2)] = inst_42569);

(statearr_42733_44413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (22))){
var inst_42589 = (state_42677[(8)]);
var inst_42592 = cljs.core.async.close_BANG_(inst_42589);
var state_42677__$1 = state_42677;
var statearr_42735_44421 = state_42677__$1;
(statearr_42735_44421[(2)] = inst_42592);

(statearr_42735_44421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (36))){
var inst_42635 = (state_42677[(23)]);
var inst_42639 = cljs.core.chunk_first(inst_42635);
var inst_42640 = cljs.core.chunk_rest(inst_42635);
var inst_42641 = cljs.core.count(inst_42639);
var inst_42617 = inst_42640;
var inst_42618 = inst_42639;
var inst_42619 = inst_42641;
var inst_42620 = (0);
var state_42677__$1 = (function (){var statearr_42740 = state_42677;
(statearr_42740[(9)] = inst_42618);

(statearr_42740[(12)] = inst_42620);

(statearr_42740[(19)] = inst_42617);

(statearr_42740[(20)] = inst_42619);

return statearr_42740;
})();
var statearr_42741_44422 = state_42677__$1;
(statearr_42741_44422[(2)] = null);

(statearr_42741_44422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (41))){
var inst_42635 = (state_42677[(23)]);
var inst_42650 = (state_42677[(2)]);
var inst_42651 = cljs.core.next(inst_42635);
var inst_42617 = inst_42651;
var inst_42618 = null;
var inst_42619 = (0);
var inst_42620 = (0);
var state_42677__$1 = (function (){var statearr_42745 = state_42677;
(statearr_42745[(9)] = inst_42618);

(statearr_42745[(25)] = inst_42650);

(statearr_42745[(12)] = inst_42620);

(statearr_42745[(19)] = inst_42617);

(statearr_42745[(20)] = inst_42619);

return statearr_42745;
})();
var statearr_42747_44423 = state_42677__$1;
(statearr_42747_44423[(2)] = null);

(statearr_42747_44423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (43))){
var state_42677__$1 = state_42677;
var statearr_42751_44424 = state_42677__$1;
(statearr_42751_44424[(2)] = null);

(statearr_42751_44424[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (29))){
var inst_42659 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42753_44425 = state_42677__$1;
(statearr_42753_44425[(2)] = inst_42659);

(statearr_42753_44425[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (44))){
var inst_42668 = (state_42677[(2)]);
var state_42677__$1 = (function (){var statearr_42757 = state_42677;
(statearr_42757[(26)] = inst_42668);

return statearr_42757;
})();
var statearr_42758_44428 = state_42677__$1;
(statearr_42758_44428[(2)] = null);

(statearr_42758_44428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (6))){
var inst_42609 = (state_42677[(27)]);
var inst_42608 = cljs.core.deref(cs);
var inst_42609__$1 = cljs.core.keys(inst_42608);
var inst_42610 = cljs.core.count(inst_42609__$1);
var inst_42611 = cljs.core.reset_BANG_(dctr,inst_42610);
var inst_42616 = cljs.core.seq(inst_42609__$1);
var inst_42617 = inst_42616;
var inst_42618 = null;
var inst_42619 = (0);
var inst_42620 = (0);
var state_42677__$1 = (function (){var statearr_42763 = state_42677;
(statearr_42763[(27)] = inst_42609__$1);

(statearr_42763[(9)] = inst_42618);

(statearr_42763[(12)] = inst_42620);

(statearr_42763[(19)] = inst_42617);

(statearr_42763[(20)] = inst_42619);

(statearr_42763[(28)] = inst_42611);

return statearr_42763;
})();
var statearr_42764_44429 = state_42677__$1;
(statearr_42764_44429[(2)] = null);

(statearr_42764_44429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (28))){
var inst_42635 = (state_42677[(23)]);
var inst_42617 = (state_42677[(19)]);
var inst_42635__$1 = cljs.core.seq(inst_42617);
var state_42677__$1 = (function (){var statearr_42768 = state_42677;
(statearr_42768[(23)] = inst_42635__$1);

return statearr_42768;
})();
if(inst_42635__$1){
var statearr_42770_44430 = state_42677__$1;
(statearr_42770_44430[(1)] = (33));

} else {
var statearr_42771_44431 = state_42677__$1;
(statearr_42771_44431[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (25))){
var inst_42620 = (state_42677[(12)]);
var inst_42619 = (state_42677[(20)]);
var inst_42622 = (inst_42620 < inst_42619);
var inst_42623 = inst_42622;
var state_42677__$1 = state_42677;
if(cljs.core.truth_(inst_42623)){
var statearr_42773_44434 = state_42677__$1;
(statearr_42773_44434[(1)] = (27));

} else {
var statearr_42776_44435 = state_42677__$1;
(statearr_42776_44435[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (34))){
var state_42677__$1 = state_42677;
var statearr_42778_44439 = state_42677__$1;
(statearr_42778_44439[(2)] = null);

(statearr_42778_44439[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (17))){
var state_42677__$1 = state_42677;
var statearr_42780_44440 = state_42677__$1;
(statearr_42780_44440[(2)] = null);

(statearr_42780_44440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (3))){
var inst_42673 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42677__$1,inst_42673);
} else {
if((state_val_42678 === (12))){
var inst_42604 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42784_44441 = state_42677__$1;
(statearr_42784_44441[(2)] = inst_42604);

(statearr_42784_44441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (2))){
var state_42677__$1 = state_42677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42677__$1,(4),ch);
} else {
if((state_val_42678 === (23))){
var state_42677__$1 = state_42677;
var statearr_42789_44443 = state_42677__$1;
(statearr_42789_44443[(2)] = null);

(statearr_42789_44443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (35))){
var inst_42657 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42790_44444 = state_42677__$1;
(statearr_42790_44444[(2)] = inst_42657);

(statearr_42790_44444[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (19))){
var inst_42576 = (state_42677[(7)]);
var inst_42580 = cljs.core.chunk_first(inst_42576);
var inst_42581 = cljs.core.chunk_rest(inst_42576);
var inst_42582 = cljs.core.count(inst_42580);
var inst_42554 = inst_42581;
var inst_42555 = inst_42580;
var inst_42556 = inst_42582;
var inst_42557 = (0);
var state_42677__$1 = (function (){var statearr_42795 = state_42677;
(statearr_42795[(13)] = inst_42554);

(statearr_42795[(14)] = inst_42556);

(statearr_42795[(15)] = inst_42555);

(statearr_42795[(17)] = inst_42557);

return statearr_42795;
})();
var statearr_42796_44446 = state_42677__$1;
(statearr_42796_44446[(2)] = null);

(statearr_42796_44446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (11))){
var inst_42554 = (state_42677[(13)]);
var inst_42576 = (state_42677[(7)]);
var inst_42576__$1 = cljs.core.seq(inst_42554);
var state_42677__$1 = (function (){var statearr_42798 = state_42677;
(statearr_42798[(7)] = inst_42576__$1);

return statearr_42798;
})();
if(inst_42576__$1){
var statearr_42800_44447 = state_42677__$1;
(statearr_42800_44447[(1)] = (16));

} else {
var statearr_42802_44448 = state_42677__$1;
(statearr_42802_44448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (9))){
var inst_42606 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42804_44461 = state_42677__$1;
(statearr_42804_44461[(2)] = inst_42606);

(statearr_42804_44461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (5))){
var inst_42552 = cljs.core.deref(cs);
var inst_42553 = cljs.core.seq(inst_42552);
var inst_42554 = inst_42553;
var inst_42555 = null;
var inst_42556 = (0);
var inst_42557 = (0);
var state_42677__$1 = (function (){var statearr_42806 = state_42677;
(statearr_42806[(13)] = inst_42554);

(statearr_42806[(14)] = inst_42556);

(statearr_42806[(15)] = inst_42555);

(statearr_42806[(17)] = inst_42557);

return statearr_42806;
})();
var statearr_42810_44465 = state_42677__$1;
(statearr_42810_44465[(2)] = null);

(statearr_42810_44465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (14))){
var state_42677__$1 = state_42677;
var statearr_42812_44466 = state_42677__$1;
(statearr_42812_44466[(2)] = null);

(statearr_42812_44466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (45))){
var inst_42665 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42815_44467 = state_42677__$1;
(statearr_42815_44467[(2)] = inst_42665);

(statearr_42815_44467[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (26))){
var inst_42609 = (state_42677[(27)]);
var inst_42661 = (state_42677[(2)]);
var inst_42662 = cljs.core.seq(inst_42609);
var state_42677__$1 = (function (){var statearr_42818 = state_42677;
(statearr_42818[(29)] = inst_42661);

return statearr_42818;
})();
if(inst_42662){
var statearr_42819_44472 = state_42677__$1;
(statearr_42819_44472[(1)] = (42));

} else {
var statearr_42820_44473 = state_42677__$1;
(statearr_42820_44473[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (16))){
var inst_42576 = (state_42677[(7)]);
var inst_42578 = cljs.core.chunked_seq_QMARK_(inst_42576);
var state_42677__$1 = state_42677;
if(inst_42578){
var statearr_42824_44474 = state_42677__$1;
(statearr_42824_44474[(1)] = (19));

} else {
var statearr_42825_44475 = state_42677__$1;
(statearr_42825_44475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (38))){
var inst_42654 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42828_44476 = state_42677__$1;
(statearr_42828_44476[(2)] = inst_42654);

(statearr_42828_44476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (30))){
var state_42677__$1 = state_42677;
var statearr_42832_44477 = state_42677__$1;
(statearr_42832_44477[(2)] = null);

(statearr_42832_44477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (10))){
var inst_42555 = (state_42677[(15)]);
var inst_42557 = (state_42677[(17)]);
var inst_42565 = cljs.core._nth(inst_42555,inst_42557);
var inst_42566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42565,(0),null);
var inst_42567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42565,(1),null);
var state_42677__$1 = (function (){var statearr_42834 = state_42677;
(statearr_42834[(24)] = inst_42566);

return statearr_42834;
})();
if(cljs.core.truth_(inst_42567)){
var statearr_42838_44481 = state_42677__$1;
(statearr_42838_44481[(1)] = (13));

} else {
var statearr_42839_44482 = state_42677__$1;
(statearr_42839_44482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (18))){
var inst_42602 = (state_42677[(2)]);
var state_42677__$1 = state_42677;
var statearr_42841_44487 = state_42677__$1;
(statearr_42841_44487[(2)] = inst_42602);

(statearr_42841_44487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (42))){
var state_42677__$1 = state_42677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42677__$1,(45),dchan);
} else {
if((state_val_42678 === (37))){
var inst_42635 = (state_42677[(23)]);
var inst_42644 = (state_42677[(22)]);
var inst_42543 = (state_42677[(10)]);
var inst_42644__$1 = cljs.core.first(inst_42635);
var inst_42645 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42644__$1,inst_42543,done);
var state_42677__$1 = (function (){var statearr_42847 = state_42677;
(statearr_42847[(22)] = inst_42644__$1);

return statearr_42847;
})();
if(cljs.core.truth_(inst_42645)){
var statearr_42848_44494 = state_42677__$1;
(statearr_42848_44494[(1)] = (39));

} else {
var statearr_42850_44495 = state_42677__$1;
(statearr_42850_44495[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42678 === (8))){
var inst_42556 = (state_42677[(14)]);
var inst_42557 = (state_42677[(17)]);
var inst_42559 = (inst_42557 < inst_42556);
var inst_42560 = inst_42559;
var state_42677__$1 = state_42677;
if(cljs.core.truth_(inst_42560)){
var statearr_42853_44496 = state_42677__$1;
(statearr_42853_44496[(1)] = (10));

} else {
var statearr_42855_44497 = state_42677__$1;
(statearr_42855_44497[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__41539__auto__ = null;
var cljs$core$async$mult_$_state_machine__41539__auto____0 = (function (){
var statearr_42861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42861[(0)] = cljs$core$async$mult_$_state_machine__41539__auto__);

(statearr_42861[(1)] = (1));

return statearr_42861;
});
var cljs$core$async$mult_$_state_machine__41539__auto____1 = (function (state_42677){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_42677);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e42864){var ex__41542__auto__ = e42864;
var statearr_42866_44523 = state_42677;
(statearr_42866_44523[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_42677[(4)]))){
var statearr_42867_44524 = state_42677;
(statearr_42867_44524[(1)] = cljs.core.first((state_42677[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44525 = state_42677;
state_42677 = G__44525;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41539__auto__ = function(state_42677){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41539__auto____1.call(this,state_42677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41539__auto____0;
cljs$core$async$mult_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41539__auto____1;
return cljs$core$async$mult_$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_42872 = f__41754__auto__();
(statearr_42872[(6)] = c__41753__auto___44370);

return statearr_42872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42878 = arguments.length;
switch (G__42878) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44527 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44527(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44528 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44528(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44542 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44542(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44543 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44543(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44544 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44544(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44554 = arguments.length;
var i__4865__auto___44555 = (0);
while(true){
if((i__4865__auto___44555 < len__4864__auto___44554)){
args__4870__auto__.push((arguments[i__4865__auto___44555]));

var G__44556 = (i__4865__auto___44555 + (1));
i__4865__auto___44555 = G__44556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42946){
var map__42947 = p__42946;
var map__42947__$1 = cljs.core.__destructure_map(map__42947);
var opts = map__42947__$1;
var statearr_42948_44557 = state;
(statearr_42948_44557[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42954_44558 = state;
(statearr_42954_44558[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_42957_44559 = state;
(statearr_42957_44559[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42936){
var G__42937 = cljs.core.first(seq42936);
var seq42936__$1 = cljs.core.next(seq42936);
var G__42938 = cljs.core.first(seq42936__$1);
var seq42936__$2 = cljs.core.next(seq42936__$1);
var G__42939 = cljs.core.first(seq42936__$2);
var seq42936__$3 = cljs.core.next(seq42936__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42937,G__42938,G__42939,seq42936__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42959 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42960){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42960 = meta42960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42961,meta42960__$1){
var self__ = this;
var _42961__$1 = this;
return (new cljs.core.async.t_cljs$core$async42959(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42960__$1));
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42961){
var self__ = this;
var _42961__$1 = this;
return self__.meta42960;
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42959.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42960","meta42960",1339802673,null)], null);
}));

(cljs.core.async.t_cljs$core$async42959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42959");

(cljs.core.async.t_cljs$core$async42959.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42959.
 */
cljs.core.async.__GT_t_cljs$core$async42959 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42959(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42960){
return (new cljs.core.async.t_cljs$core$async42959(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42960));
});

}

return (new cljs.core.async.t_cljs$core$async42959(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41753__auto___44595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43040){
var state_val_43041 = (state_43040[(1)]);
if((state_val_43041 === (7))){
var inst_42991 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_42991)){
var statearr_43042_44596 = state_43040__$1;
(statearr_43042_44596[(1)] = (8));

} else {
var statearr_43043_44597 = state_43040__$1;
(statearr_43043_44597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (20))){
var inst_42984 = (state_43040[(7)]);
var state_43040__$1 = state_43040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43040__$1,(23),out,inst_42984);
} else {
if((state_val_43041 === (1))){
var inst_42967 = calc_state();
var inst_42968 = cljs.core.__destructure_map(inst_42967);
var inst_42969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42968,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42968,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42968,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42972 = inst_42967;
var state_43040__$1 = (function (){var statearr_43052 = state_43040;
(statearr_43052[(8)] = inst_42971);

(statearr_43052[(9)] = inst_42969);

(statearr_43052[(10)] = inst_42970);

(statearr_43052[(11)] = inst_42972);

return statearr_43052;
})();
var statearr_43053_44598 = state_43040__$1;
(statearr_43053_44598[(2)] = null);

(statearr_43053_44598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (24))){
var inst_42975 = (state_43040[(12)]);
var inst_42972 = inst_42975;
var state_43040__$1 = (function (){var statearr_43054 = state_43040;
(statearr_43054[(11)] = inst_42972);

return statearr_43054;
})();
var statearr_43055_44599 = state_43040__$1;
(statearr_43055_44599[(2)] = null);

(statearr_43055_44599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (4))){
var inst_42984 = (state_43040[(7)]);
var inst_42986 = (state_43040[(13)]);
var inst_42983 = (state_43040[(2)]);
var inst_42984__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42983,(0),null);
var inst_42985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42983,(1),null);
var inst_42986__$1 = (inst_42984__$1 == null);
var state_43040__$1 = (function (){var statearr_43060 = state_43040;
(statearr_43060[(7)] = inst_42984__$1);

(statearr_43060[(14)] = inst_42985);

(statearr_43060[(13)] = inst_42986__$1);

return statearr_43060;
})();
if(cljs.core.truth_(inst_42986__$1)){
var statearr_43061_44600 = state_43040__$1;
(statearr_43061_44600[(1)] = (5));

} else {
var statearr_43062_44601 = state_43040__$1;
(statearr_43062_44601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (15))){
var inst_43009 = (state_43040[(15)]);
var inst_42976 = (state_43040[(16)]);
var inst_43009__$1 = cljs.core.empty_QMARK_(inst_42976);
var state_43040__$1 = (function (){var statearr_43067 = state_43040;
(statearr_43067[(15)] = inst_43009__$1);

return statearr_43067;
})();
if(inst_43009__$1){
var statearr_43068_44602 = state_43040__$1;
(statearr_43068_44602[(1)] = (17));

} else {
var statearr_43069_44603 = state_43040__$1;
(statearr_43069_44603[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (21))){
var inst_42975 = (state_43040[(12)]);
var inst_42972 = inst_42975;
var state_43040__$1 = (function (){var statearr_43070 = state_43040;
(statearr_43070[(11)] = inst_42972);

return statearr_43070;
})();
var statearr_43071_44604 = state_43040__$1;
(statearr_43071_44604[(2)] = null);

(statearr_43071_44604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (13))){
var inst_43002 = (state_43040[(2)]);
var inst_43003 = calc_state();
var inst_42972 = inst_43003;
var state_43040__$1 = (function (){var statearr_43075 = state_43040;
(statearr_43075[(17)] = inst_43002);

(statearr_43075[(11)] = inst_42972);

return statearr_43075;
})();
var statearr_43076_44605 = state_43040__$1;
(statearr_43076_44605[(2)] = null);

(statearr_43076_44605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (22))){
var inst_43034 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43078_44606 = state_43040__$1;
(statearr_43078_44606[(2)] = inst_43034);

(statearr_43078_44606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (6))){
var inst_42985 = (state_43040[(14)]);
var inst_42989 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42985,change);
var state_43040__$1 = state_43040;
var statearr_43079_44607 = state_43040__$1;
(statearr_43079_44607[(2)] = inst_42989);

(statearr_43079_44607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (25))){
var state_43040__$1 = state_43040;
var statearr_43080_44608 = state_43040__$1;
(statearr_43080_44608[(2)] = null);

(statearr_43080_44608[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (17))){
var inst_42985 = (state_43040[(14)]);
var inst_42977 = (state_43040[(18)]);
var inst_43011 = (inst_42977.cljs$core$IFn$_invoke$arity$1 ? inst_42977.cljs$core$IFn$_invoke$arity$1(inst_42985) : inst_42977.call(null,inst_42985));
var inst_43012 = cljs.core.not(inst_43011);
var state_43040__$1 = state_43040;
var statearr_43082_44609 = state_43040__$1;
(statearr_43082_44609[(2)] = inst_43012);

(statearr_43082_44609[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (3))){
var inst_43038 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43040__$1,inst_43038);
} else {
if((state_val_43041 === (12))){
var state_43040__$1 = state_43040;
var statearr_43083_44611 = state_43040__$1;
(statearr_43083_44611[(2)] = null);

(statearr_43083_44611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (2))){
var inst_42975 = (state_43040[(12)]);
var inst_42972 = (state_43040[(11)]);
var inst_42975__$1 = cljs.core.__destructure_map(inst_42972);
var inst_42976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42975__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42975__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42975__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43040__$1 = (function (){var statearr_43084 = state_43040;
(statearr_43084[(12)] = inst_42975__$1);

(statearr_43084[(18)] = inst_42977);

(statearr_43084[(16)] = inst_42976);

return statearr_43084;
})();
return cljs.core.async.ioc_alts_BANG_(state_43040__$1,(4),inst_42978);
} else {
if((state_val_43041 === (23))){
var inst_43024 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_43024)){
var statearr_43092_44616 = state_43040__$1;
(statearr_43092_44616[(1)] = (24));

} else {
var statearr_43093_44617 = state_43040__$1;
(statearr_43093_44617[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (19))){
var inst_43019 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43095_44618 = state_43040__$1;
(statearr_43095_44618[(2)] = inst_43019);

(statearr_43095_44618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (11))){
var inst_42985 = (state_43040[(14)]);
var inst_42999 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42985);
var state_43040__$1 = state_43040;
var statearr_43096_44619 = state_43040__$1;
(statearr_43096_44619[(2)] = inst_42999);

(statearr_43096_44619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (9))){
var inst_42985 = (state_43040[(14)]);
var inst_42976 = (state_43040[(16)]);
var inst_43006 = (state_43040[(19)]);
var inst_43006__$1 = (inst_42976.cljs$core$IFn$_invoke$arity$1 ? inst_42976.cljs$core$IFn$_invoke$arity$1(inst_42985) : inst_42976.call(null,inst_42985));
var state_43040__$1 = (function (){var statearr_43100 = state_43040;
(statearr_43100[(19)] = inst_43006__$1);

return statearr_43100;
})();
if(cljs.core.truth_(inst_43006__$1)){
var statearr_43101_44620 = state_43040__$1;
(statearr_43101_44620[(1)] = (14));

} else {
var statearr_43103_44621 = state_43040__$1;
(statearr_43103_44621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (5))){
var inst_42986 = (state_43040[(13)]);
var state_43040__$1 = state_43040;
var statearr_43104_44622 = state_43040__$1;
(statearr_43104_44622[(2)] = inst_42986);

(statearr_43104_44622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (14))){
var inst_43006 = (state_43040[(19)]);
var state_43040__$1 = state_43040;
var statearr_43108_44627 = state_43040__$1;
(statearr_43108_44627[(2)] = inst_43006);

(statearr_43108_44627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (26))){
var inst_43029 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43110_44628 = state_43040__$1;
(statearr_43110_44628[(2)] = inst_43029);

(statearr_43110_44628[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (16))){
var inst_43021 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_43021)){
var statearr_43111_44629 = state_43040__$1;
(statearr_43111_44629[(1)] = (20));

} else {
var statearr_43112_44630 = state_43040__$1;
(statearr_43112_44630[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (10))){
var inst_43036 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43113_44631 = state_43040__$1;
(statearr_43113_44631[(2)] = inst_43036);

(statearr_43113_44631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (18))){
var inst_43009 = (state_43040[(15)]);
var state_43040__$1 = state_43040;
var statearr_43117_44632 = state_43040__$1;
(statearr_43117_44632[(2)] = inst_43009);

(statearr_43117_44632[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (8))){
var inst_42984 = (state_43040[(7)]);
var inst_42993 = (inst_42984 == null);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_42993)){
var statearr_43119_44633 = state_43040__$1;
(statearr_43119_44633[(1)] = (11));

} else {
var statearr_43120_44634 = state_43040__$1;
(statearr_43120_44634[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__41539__auto__ = null;
var cljs$core$async$mix_$_state_machine__41539__auto____0 = (function (){
var statearr_43122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43122[(0)] = cljs$core$async$mix_$_state_machine__41539__auto__);

(statearr_43122[(1)] = (1));

return statearr_43122;
});
var cljs$core$async$mix_$_state_machine__41539__auto____1 = (function (state_43040){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43040);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43123){var ex__41542__auto__ = e43123;
var statearr_43124_44635 = state_43040;
(statearr_43124_44635[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43040[(4)]))){
var statearr_43125_44636 = state_43040;
(statearr_43125_44636[(1)] = cljs.core.first((state_43040[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44637 = state_43040;
state_43040 = G__44637;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41539__auto__ = function(state_43040){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41539__auto____1.call(this,state_43040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41539__auto____0;
cljs$core$async$mix_$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41539__auto____1;
return cljs$core$async$mix_$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43126 = f__41754__auto__();
(statearr_43126[(6)] = c__41753__auto___44595);

return statearr_43126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44643 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44643(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44645 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44645(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44646 = (function() {
var G__44647 = null;
var G__44647__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44647__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44647 = function(p,v){
switch(arguments.length){
case 1:
return G__44647__1.call(this,p);
case 2:
return G__44647__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44647.cljs$core$IFn$_invoke$arity$1 = G__44647__1;
G__44647.cljs$core$IFn$_invoke$arity$2 = G__44647__2;
return G__44647;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43157 = arguments.length;
switch (G__43157) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44646(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44646(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43168 = arguments.length;
switch (G__43168) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43162_SHARP_){
if(cljs.core.truth_((p1__43162_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43162_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43162_SHARP_.call(null,topic)))){
return p1__43162_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43162_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43173 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43174){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43174 = meta43174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43175,meta43174__$1){
var self__ = this;
var _43175__$1 = this;
return (new cljs.core.async.t_cljs$core$async43173(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43174__$1));
}));

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43175){
var self__ = this;
var _43175__$1 = this;
return self__.meta43174;
}));

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43174","meta43174",-736320955,null)], null);
}));

(cljs.core.async.t_cljs$core$async43173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43173");

(cljs.core.async.t_cljs$core$async43173.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43173.
 */
cljs.core.async.__GT_t_cljs$core$async43173 = (function cljs$core$async$__GT_t_cljs$core$async43173(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43174){
return (new cljs.core.async.t_cljs$core$async43173(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43174));
});

}

return (new cljs.core.async.t_cljs$core$async43173(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41753__auto___44655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43254){
var state_val_43255 = (state_43254[(1)]);
if((state_val_43255 === (7))){
var inst_43248 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
var statearr_43256_44656 = state_43254__$1;
(statearr_43256_44656[(2)] = inst_43248);

(statearr_43256_44656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (20))){
var state_43254__$1 = state_43254;
var statearr_43257_44657 = state_43254__$1;
(statearr_43257_44657[(2)] = null);

(statearr_43257_44657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (1))){
var state_43254__$1 = state_43254;
var statearr_43258_44658 = state_43254__$1;
(statearr_43258_44658[(2)] = null);

(statearr_43258_44658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (24))){
var inst_43231 = (state_43254[(7)]);
var inst_43240 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43231);
var state_43254__$1 = state_43254;
var statearr_43259_44659 = state_43254__$1;
(statearr_43259_44659[(2)] = inst_43240);

(statearr_43259_44659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (4))){
var inst_43183 = (state_43254[(8)]);
var inst_43183__$1 = (state_43254[(2)]);
var inst_43184 = (inst_43183__$1 == null);
var state_43254__$1 = (function (){var statearr_43260 = state_43254;
(statearr_43260[(8)] = inst_43183__$1);

return statearr_43260;
})();
if(cljs.core.truth_(inst_43184)){
var statearr_43261_44660 = state_43254__$1;
(statearr_43261_44660[(1)] = (5));

} else {
var statearr_43262_44661 = state_43254__$1;
(statearr_43262_44661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (15))){
var inst_43225 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
var statearr_43263_44662 = state_43254__$1;
(statearr_43263_44662[(2)] = inst_43225);

(statearr_43263_44662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (21))){
var inst_43245 = (state_43254[(2)]);
var state_43254__$1 = (function (){var statearr_43264 = state_43254;
(statearr_43264[(9)] = inst_43245);

return statearr_43264;
})();
var statearr_43265_44663 = state_43254__$1;
(statearr_43265_44663[(2)] = null);

(statearr_43265_44663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (13))){
var inst_43207 = (state_43254[(10)]);
var inst_43209 = cljs.core.chunked_seq_QMARK_(inst_43207);
var state_43254__$1 = state_43254;
if(inst_43209){
var statearr_43266_44664 = state_43254__$1;
(statearr_43266_44664[(1)] = (16));

} else {
var statearr_43267_44665 = state_43254__$1;
(statearr_43267_44665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (22))){
var inst_43237 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
if(cljs.core.truth_(inst_43237)){
var statearr_43268_44666 = state_43254__$1;
(statearr_43268_44666[(1)] = (23));

} else {
var statearr_43269_44667 = state_43254__$1;
(statearr_43269_44667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (6))){
var inst_43183 = (state_43254[(8)]);
var inst_43233 = (state_43254[(11)]);
var inst_43231 = (state_43254[(7)]);
var inst_43231__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43183) : topic_fn.call(null,inst_43183));
var inst_43232 = cljs.core.deref(mults);
var inst_43233__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43232,inst_43231__$1);
var state_43254__$1 = (function (){var statearr_43270 = state_43254;
(statearr_43270[(11)] = inst_43233__$1);

(statearr_43270[(7)] = inst_43231__$1);

return statearr_43270;
})();
if(cljs.core.truth_(inst_43233__$1)){
var statearr_43271_44668 = state_43254__$1;
(statearr_43271_44668[(1)] = (19));

} else {
var statearr_43272_44669 = state_43254__$1;
(statearr_43272_44669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (25))){
var inst_43242 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
var statearr_43273_44670 = state_43254__$1;
(statearr_43273_44670[(2)] = inst_43242);

(statearr_43273_44670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (17))){
var inst_43207 = (state_43254[(10)]);
var inst_43216 = cljs.core.first(inst_43207);
var inst_43217 = cljs.core.async.muxch_STAR_(inst_43216);
var inst_43218 = cljs.core.async.close_BANG_(inst_43217);
var inst_43219 = cljs.core.next(inst_43207);
var inst_43193 = inst_43219;
var inst_43194 = null;
var inst_43195 = (0);
var inst_43196 = (0);
var state_43254__$1 = (function (){var statearr_43274 = state_43254;
(statearr_43274[(12)] = inst_43194);

(statearr_43274[(13)] = inst_43218);

(statearr_43274[(14)] = inst_43193);

(statearr_43274[(15)] = inst_43195);

(statearr_43274[(16)] = inst_43196);

return statearr_43274;
})();
var statearr_43275_44672 = state_43254__$1;
(statearr_43275_44672[(2)] = null);

(statearr_43275_44672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (3))){
var inst_43250 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43254__$1,inst_43250);
} else {
if((state_val_43255 === (12))){
var inst_43227 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
var statearr_43276_44673 = state_43254__$1;
(statearr_43276_44673[(2)] = inst_43227);

(statearr_43276_44673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (2))){
var state_43254__$1 = state_43254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43254__$1,(4),ch);
} else {
if((state_val_43255 === (23))){
var state_43254__$1 = state_43254;
var statearr_43277_44677 = state_43254__$1;
(statearr_43277_44677[(2)] = null);

(statearr_43277_44677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (19))){
var inst_43183 = (state_43254[(8)]);
var inst_43233 = (state_43254[(11)]);
var inst_43235 = cljs.core.async.muxch_STAR_(inst_43233);
var state_43254__$1 = state_43254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43254__$1,(22),inst_43235,inst_43183);
} else {
if((state_val_43255 === (11))){
var inst_43207 = (state_43254[(10)]);
var inst_43193 = (state_43254[(14)]);
var inst_43207__$1 = cljs.core.seq(inst_43193);
var state_43254__$1 = (function (){var statearr_43278 = state_43254;
(statearr_43278[(10)] = inst_43207__$1);

return statearr_43278;
})();
if(inst_43207__$1){
var statearr_43279_44682 = state_43254__$1;
(statearr_43279_44682[(1)] = (13));

} else {
var statearr_43280_44683 = state_43254__$1;
(statearr_43280_44683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (9))){
var inst_43229 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
var statearr_43281_44684 = state_43254__$1;
(statearr_43281_44684[(2)] = inst_43229);

(statearr_43281_44684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (5))){
var inst_43190 = cljs.core.deref(mults);
var inst_43191 = cljs.core.vals(inst_43190);
var inst_43192 = cljs.core.seq(inst_43191);
var inst_43193 = inst_43192;
var inst_43194 = null;
var inst_43195 = (0);
var inst_43196 = (0);
var state_43254__$1 = (function (){var statearr_43282 = state_43254;
(statearr_43282[(12)] = inst_43194);

(statearr_43282[(14)] = inst_43193);

(statearr_43282[(15)] = inst_43195);

(statearr_43282[(16)] = inst_43196);

return statearr_43282;
})();
var statearr_43283_44689 = state_43254__$1;
(statearr_43283_44689[(2)] = null);

(statearr_43283_44689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (14))){
var state_43254__$1 = state_43254;
var statearr_43287_44690 = state_43254__$1;
(statearr_43287_44690[(2)] = null);

(statearr_43287_44690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (16))){
var inst_43207 = (state_43254[(10)]);
var inst_43211 = cljs.core.chunk_first(inst_43207);
var inst_43212 = cljs.core.chunk_rest(inst_43207);
var inst_43213 = cljs.core.count(inst_43211);
var inst_43193 = inst_43212;
var inst_43194 = inst_43211;
var inst_43195 = inst_43213;
var inst_43196 = (0);
var state_43254__$1 = (function (){var statearr_43288 = state_43254;
(statearr_43288[(12)] = inst_43194);

(statearr_43288[(14)] = inst_43193);

(statearr_43288[(15)] = inst_43195);

(statearr_43288[(16)] = inst_43196);

return statearr_43288;
})();
var statearr_43289_44691 = state_43254__$1;
(statearr_43289_44691[(2)] = null);

(statearr_43289_44691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (10))){
var inst_43194 = (state_43254[(12)]);
var inst_43193 = (state_43254[(14)]);
var inst_43195 = (state_43254[(15)]);
var inst_43196 = (state_43254[(16)]);
var inst_43201 = cljs.core._nth(inst_43194,inst_43196);
var inst_43202 = cljs.core.async.muxch_STAR_(inst_43201);
var inst_43203 = cljs.core.async.close_BANG_(inst_43202);
var inst_43204 = (inst_43196 + (1));
var tmp43284 = inst_43194;
var tmp43285 = inst_43193;
var tmp43286 = inst_43195;
var inst_43193__$1 = tmp43285;
var inst_43194__$1 = tmp43284;
var inst_43195__$1 = tmp43286;
var inst_43196__$1 = inst_43204;
var state_43254__$1 = (function (){var statearr_43290 = state_43254;
(statearr_43290[(12)] = inst_43194__$1);

(statearr_43290[(17)] = inst_43203);

(statearr_43290[(14)] = inst_43193__$1);

(statearr_43290[(15)] = inst_43195__$1);

(statearr_43290[(16)] = inst_43196__$1);

return statearr_43290;
})();
var statearr_43291_44692 = state_43254__$1;
(statearr_43291_44692[(2)] = null);

(statearr_43291_44692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (18))){
var inst_43222 = (state_43254[(2)]);
var state_43254__$1 = state_43254;
var statearr_43292_44693 = state_43254__$1;
(statearr_43292_44693[(2)] = inst_43222);

(statearr_43292_44693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43255 === (8))){
var inst_43195 = (state_43254[(15)]);
var inst_43196 = (state_43254[(16)]);
var inst_43198 = (inst_43196 < inst_43195);
var inst_43199 = inst_43198;
var state_43254__$1 = state_43254;
if(cljs.core.truth_(inst_43199)){
var statearr_43293_44694 = state_43254__$1;
(statearr_43293_44694[(1)] = (10));

} else {
var statearr_43294_44695 = state_43254__$1;
(statearr_43294_44695[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43296[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43296[(1)] = (1));

return statearr_43296;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43254){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43254);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43298){var ex__41542__auto__ = e43298;
var statearr_43299_44697 = state_43254;
(statearr_43299_44697[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43254[(4)]))){
var statearr_43300_44698 = state_43254;
(statearr_43300_44698[(1)] = cljs.core.first((state_43254[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44699 = state_43254;
state_43254 = G__44699;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43301 = f__41754__auto__();
(statearr_43301[(6)] = c__41753__auto___44655);

return statearr_43301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43303 = arguments.length;
switch (G__43303) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43307 = arguments.length;
switch (G__43307) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43309 = arguments.length;
switch (G__43309) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__41753__auto___44703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43354){
var state_val_43355 = (state_43354[(1)]);
if((state_val_43355 === (7))){
var state_43354__$1 = state_43354;
var statearr_43356_44708 = state_43354__$1;
(statearr_43356_44708[(2)] = null);

(statearr_43356_44708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (1))){
var state_43354__$1 = state_43354;
var statearr_43357_44709 = state_43354__$1;
(statearr_43357_44709[(2)] = null);

(statearr_43357_44709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (4))){
var inst_43314 = (state_43354[(7)]);
var inst_43315 = (state_43354[(8)]);
var inst_43317 = (inst_43315 < inst_43314);
var state_43354__$1 = state_43354;
if(cljs.core.truth_(inst_43317)){
var statearr_43358_44711 = state_43354__$1;
(statearr_43358_44711[(1)] = (6));

} else {
var statearr_43359_44712 = state_43354__$1;
(statearr_43359_44712[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (15))){
var inst_43340 = (state_43354[(9)]);
var inst_43345 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43340);
var state_43354__$1 = state_43354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43354__$1,(17),out,inst_43345);
} else {
if((state_val_43355 === (13))){
var inst_43340 = (state_43354[(9)]);
var inst_43340__$1 = (state_43354[(2)]);
var inst_43341 = cljs.core.some(cljs.core.nil_QMARK_,inst_43340__$1);
var state_43354__$1 = (function (){var statearr_43360 = state_43354;
(statearr_43360[(9)] = inst_43340__$1);

return statearr_43360;
})();
if(cljs.core.truth_(inst_43341)){
var statearr_43361_44713 = state_43354__$1;
(statearr_43361_44713[(1)] = (14));

} else {
var statearr_43362_44714 = state_43354__$1;
(statearr_43362_44714[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (6))){
var state_43354__$1 = state_43354;
var statearr_43363_44715 = state_43354__$1;
(statearr_43363_44715[(2)] = null);

(statearr_43363_44715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (17))){
var inst_43347 = (state_43354[(2)]);
var state_43354__$1 = (function (){var statearr_43367 = state_43354;
(statearr_43367[(10)] = inst_43347);

return statearr_43367;
})();
var statearr_43368_44716 = state_43354__$1;
(statearr_43368_44716[(2)] = null);

(statearr_43368_44716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (3))){
var inst_43352 = (state_43354[(2)]);
var state_43354__$1 = state_43354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43354__$1,inst_43352);
} else {
if((state_val_43355 === (12))){
var _ = (function (){var statearr_43369 = state_43354;
(statearr_43369[(4)] = cljs.core.rest((state_43354[(4)])));

return statearr_43369;
})();
var state_43354__$1 = state_43354;
var ex43366 = (state_43354__$1[(2)]);
var statearr_43370_44717 = state_43354__$1;
(statearr_43370_44717[(5)] = ex43366);


if((ex43366 instanceof Object)){
var statearr_43375_44718 = state_43354__$1;
(statearr_43375_44718[(1)] = (11));

(statearr_43375_44718[(5)] = null);

} else {
throw ex43366;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (2))){
var inst_43313 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43314 = cnt;
var inst_43315 = (0);
var state_43354__$1 = (function (){var statearr_43376 = state_43354;
(statearr_43376[(11)] = inst_43313);

(statearr_43376[(7)] = inst_43314);

(statearr_43376[(8)] = inst_43315);

return statearr_43376;
})();
var statearr_43378_44720 = state_43354__$1;
(statearr_43378_44720[(2)] = null);

(statearr_43378_44720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (11))){
var inst_43319 = (state_43354[(2)]);
var inst_43320 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43354__$1 = (function (){var statearr_43379 = state_43354;
(statearr_43379[(12)] = inst_43319);

return statearr_43379;
})();
var statearr_43380_44721 = state_43354__$1;
(statearr_43380_44721[(2)] = inst_43320);

(statearr_43380_44721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (9))){
var inst_43315 = (state_43354[(8)]);
var _ = (function (){var statearr_43382 = state_43354;
(statearr_43382[(4)] = cljs.core.cons((12),(state_43354[(4)])));

return statearr_43382;
})();
var inst_43326 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43315) : chs__$1.call(null,inst_43315));
var inst_43327 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43315) : done.call(null,inst_43315));
var inst_43328 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43326,inst_43327);
var ___$1 = (function (){var statearr_43384 = state_43354;
(statearr_43384[(4)] = cljs.core.rest((state_43354[(4)])));

return statearr_43384;
})();
var state_43354__$1 = state_43354;
var statearr_43385_44723 = state_43354__$1;
(statearr_43385_44723[(2)] = inst_43328);

(statearr_43385_44723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (5))){
var inst_43338 = (state_43354[(2)]);
var state_43354__$1 = (function (){var statearr_43386 = state_43354;
(statearr_43386[(13)] = inst_43338);

return statearr_43386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43354__$1,(13),dchan);
} else {
if((state_val_43355 === (14))){
var inst_43343 = cljs.core.async.close_BANG_(out);
var state_43354__$1 = state_43354;
var statearr_43389_44727 = state_43354__$1;
(statearr_43389_44727[(2)] = inst_43343);

(statearr_43389_44727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (16))){
var inst_43350 = (state_43354[(2)]);
var state_43354__$1 = state_43354;
var statearr_43390_44728 = state_43354__$1;
(statearr_43390_44728[(2)] = inst_43350);

(statearr_43390_44728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (10))){
var inst_43315 = (state_43354[(8)]);
var inst_43331 = (state_43354[(2)]);
var inst_43332 = (inst_43315 + (1));
var inst_43315__$1 = inst_43332;
var state_43354__$1 = (function (){var statearr_43391 = state_43354;
(statearr_43391[(14)] = inst_43331);

(statearr_43391[(8)] = inst_43315__$1);

return statearr_43391;
})();
var statearr_43392_44729 = state_43354__$1;
(statearr_43392_44729[(2)] = null);

(statearr_43392_44729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43355 === (8))){
var inst_43336 = (state_43354[(2)]);
var state_43354__$1 = state_43354;
var statearr_43393_44732 = state_43354__$1;
(statearr_43393_44732[(2)] = inst_43336);

(statearr_43393_44732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43397[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43397[(1)] = (1));

return statearr_43397;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43354){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43354);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43398){var ex__41542__auto__ = e43398;
var statearr_43399_44733 = state_43354;
(statearr_43399_44733[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43354[(4)]))){
var statearr_43400_44734 = state_43354;
(statearr_43400_44734[(1)] = cljs.core.first((state_43354[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44735 = state_43354;
state_43354 = G__44735;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43401 = f__41754__auto__();
(statearr_43401[(6)] = c__41753__auto___44703);

return statearr_43401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43404 = arguments.length;
switch (G__43404) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41753__auto___44737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43455){
var state_val_43456 = (state_43455[(1)]);
if((state_val_43456 === (7))){
var inst_43428 = (state_43455[(7)]);
var inst_43429 = (state_43455[(8)]);
var inst_43428__$1 = (state_43455[(2)]);
var inst_43429__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43428__$1,(0),null);
var inst_43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43428__$1,(1),null);
var inst_43431 = (inst_43429__$1 == null);
var state_43455__$1 = (function (){var statearr_43457 = state_43455;
(statearr_43457[(7)] = inst_43428__$1);

(statearr_43457[(9)] = inst_43430);

(statearr_43457[(8)] = inst_43429__$1);

return statearr_43457;
})();
if(cljs.core.truth_(inst_43431)){
var statearr_43462_44738 = state_43455__$1;
(statearr_43462_44738[(1)] = (8));

} else {
var statearr_43466_44739 = state_43455__$1;
(statearr_43466_44739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (1))){
var inst_43405 = cljs.core.vec(chs);
var inst_43412 = inst_43405;
var state_43455__$1 = (function (){var statearr_43467 = state_43455;
(statearr_43467[(10)] = inst_43412);

return statearr_43467;
})();
var statearr_43471_44740 = state_43455__$1;
(statearr_43471_44740[(2)] = null);

(statearr_43471_44740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (4))){
var inst_43412 = (state_43455[(10)]);
var state_43455__$1 = state_43455;
return cljs.core.async.ioc_alts_BANG_(state_43455__$1,(7),inst_43412);
} else {
if((state_val_43456 === (6))){
var inst_43445 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43472_44741 = state_43455__$1;
(statearr_43472_44741[(2)] = inst_43445);

(statearr_43472_44741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (3))){
var inst_43447 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43455__$1,inst_43447);
} else {
if((state_val_43456 === (2))){
var inst_43412 = (state_43455[(10)]);
var inst_43415 = cljs.core.count(inst_43412);
var inst_43416 = (inst_43415 > (0));
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43416)){
var statearr_43477_44742 = state_43455__$1;
(statearr_43477_44742[(1)] = (4));

} else {
var statearr_43478_44743 = state_43455__$1;
(statearr_43478_44743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (11))){
var inst_43412 = (state_43455[(10)]);
var inst_43438 = (state_43455[(2)]);
var tmp43473 = inst_43412;
var inst_43412__$1 = tmp43473;
var state_43455__$1 = (function (){var statearr_43479 = state_43455;
(statearr_43479[(10)] = inst_43412__$1);

(statearr_43479[(11)] = inst_43438);

return statearr_43479;
})();
var statearr_43480_44744 = state_43455__$1;
(statearr_43480_44744[(2)] = null);

(statearr_43480_44744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (9))){
var inst_43429 = (state_43455[(8)]);
var state_43455__$1 = state_43455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43455__$1,(11),out,inst_43429);
} else {
if((state_val_43456 === (5))){
var inst_43443 = cljs.core.async.close_BANG_(out);
var state_43455__$1 = state_43455;
var statearr_43481_44745 = state_43455__$1;
(statearr_43481_44745[(2)] = inst_43443);

(statearr_43481_44745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (10))){
var inst_43441 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43483_44746 = state_43455__$1;
(statearr_43483_44746[(2)] = inst_43441);

(statearr_43483_44746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (8))){
var inst_43428 = (state_43455[(7)]);
var inst_43412 = (state_43455[(10)]);
var inst_43430 = (state_43455[(9)]);
var inst_43429 = (state_43455[(8)]);
var inst_43433 = (function (){var cs = inst_43412;
var vec__43418 = inst_43428;
var v = inst_43429;
var c = inst_43430;
return (function (p1__43402_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43402_SHARP_);
});
})();
var inst_43434 = cljs.core.filterv(inst_43433,inst_43412);
var inst_43412__$1 = inst_43434;
var state_43455__$1 = (function (){var statearr_43487 = state_43455;
(statearr_43487[(10)] = inst_43412__$1);

return statearr_43487;
})();
var statearr_43488_44747 = state_43455__$1;
(statearr_43488_44747[(2)] = null);

(statearr_43488_44747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43489[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43489[(1)] = (1));

return statearr_43489;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43455){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43455);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43490){var ex__41542__auto__ = e43490;
var statearr_43491_44748 = state_43455;
(statearr_43491_44748[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43455[(4)]))){
var statearr_43492_44749 = state_43455;
(statearr_43492_44749[(1)] = cljs.core.first((state_43455[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44750 = state_43455;
state_43455 = G__44750;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43493 = f__41754__auto__();
(statearr_43493[(6)] = c__41753__auto___44737);

return statearr_43493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43496 = arguments.length;
switch (G__43496) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41753__auto___44753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43526){
var state_val_43527 = (state_43526[(1)]);
if((state_val_43527 === (7))){
var inst_43507 = (state_43526[(7)]);
var inst_43507__$1 = (state_43526[(2)]);
var inst_43508 = (inst_43507__$1 == null);
var inst_43509 = cljs.core.not(inst_43508);
var state_43526__$1 = (function (){var statearr_43529 = state_43526;
(statearr_43529[(7)] = inst_43507__$1);

return statearr_43529;
})();
if(inst_43509){
var statearr_43530_44757 = state_43526__$1;
(statearr_43530_44757[(1)] = (8));

} else {
var statearr_43531_44758 = state_43526__$1;
(statearr_43531_44758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (1))){
var inst_43502 = (0);
var state_43526__$1 = (function (){var statearr_43532 = state_43526;
(statearr_43532[(8)] = inst_43502);

return statearr_43532;
})();
var statearr_43533_44759 = state_43526__$1;
(statearr_43533_44759[(2)] = null);

(statearr_43533_44759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (4))){
var state_43526__$1 = state_43526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43526__$1,(7),ch);
} else {
if((state_val_43527 === (6))){
var inst_43520 = (state_43526[(2)]);
var state_43526__$1 = state_43526;
var statearr_43534_44760 = state_43526__$1;
(statearr_43534_44760[(2)] = inst_43520);

(statearr_43534_44760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (3))){
var inst_43522 = (state_43526[(2)]);
var inst_43523 = cljs.core.async.close_BANG_(out);
var state_43526__$1 = (function (){var statearr_43535 = state_43526;
(statearr_43535[(9)] = inst_43522);

return statearr_43535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43526__$1,inst_43523);
} else {
if((state_val_43527 === (2))){
var inst_43502 = (state_43526[(8)]);
var inst_43504 = (inst_43502 < n);
var state_43526__$1 = state_43526;
if(cljs.core.truth_(inst_43504)){
var statearr_43536_44761 = state_43526__$1;
(statearr_43536_44761[(1)] = (4));

} else {
var statearr_43537_44762 = state_43526__$1;
(statearr_43537_44762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (11))){
var inst_43502 = (state_43526[(8)]);
var inst_43512 = (state_43526[(2)]);
var inst_43513 = (inst_43502 + (1));
var inst_43502__$1 = inst_43513;
var state_43526__$1 = (function (){var statearr_43538 = state_43526;
(statearr_43538[(10)] = inst_43512);

(statearr_43538[(8)] = inst_43502__$1);

return statearr_43538;
})();
var statearr_43539_44763 = state_43526__$1;
(statearr_43539_44763[(2)] = null);

(statearr_43539_44763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (9))){
var state_43526__$1 = state_43526;
var statearr_43540_44764 = state_43526__$1;
(statearr_43540_44764[(2)] = null);

(statearr_43540_44764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (5))){
var state_43526__$1 = state_43526;
var statearr_43541_44765 = state_43526__$1;
(statearr_43541_44765[(2)] = null);

(statearr_43541_44765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (10))){
var inst_43517 = (state_43526[(2)]);
var state_43526__$1 = state_43526;
var statearr_43542_44766 = state_43526__$1;
(statearr_43542_44766[(2)] = inst_43517);

(statearr_43542_44766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43527 === (8))){
var inst_43507 = (state_43526[(7)]);
var state_43526__$1 = state_43526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43526__$1,(11),out,inst_43507);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43544[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43544[(1)] = (1));

return statearr_43544;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43526){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43526);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43546){var ex__41542__auto__ = e43546;
var statearr_43547_44767 = state_43526;
(statearr_43547_44767[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43526[(4)]))){
var statearr_43548_44768 = state_43526;
(statearr_43548_44768[(1)] = cljs.core.first((state_43526[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44769 = state_43526;
state_43526 = G__44769;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43549 = f__41754__auto__();
(statearr_43549[(6)] = c__41753__auto___44753);

return statearr_43549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43552 = (function (f,ch,meta43553){
this.f = f;
this.ch = ch;
this.meta43553 = meta43553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43554,meta43553__$1){
var self__ = this;
var _43554__$1 = this;
return (new cljs.core.async.t_cljs$core$async43552(self__.f,self__.ch,meta43553__$1));
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43554){
var self__ = this;
var _43554__$1 = this;
return self__.meta43553;
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43559 = (function (f,ch,meta43553,_,fn1,meta43560){
this.f = f;
this.ch = ch;
this.meta43553 = meta43553;
this._ = _;
this.fn1 = fn1;
this.meta43560 = meta43560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43561,meta43560__$1){
var self__ = this;
var _43561__$1 = this;
return (new cljs.core.async.t_cljs$core$async43559(self__.f,self__.ch,self__.meta43553,self__._,self__.fn1,meta43560__$1));
}));

(cljs.core.async.t_cljs$core$async43559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43561){
var self__ = this;
var _43561__$1 = this;
return self__.meta43560;
}));

(cljs.core.async.t_cljs$core$async43559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43550_SHARP_){
var G__43562 = (((p1__43550_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43550_SHARP_) : self__.f.call(null,p1__43550_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43562) : f1.call(null,G__43562));
});
}));

(cljs.core.async.t_cljs$core$async43559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43553","meta43553",1832970777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43552","cljs.core.async/t_cljs$core$async43552",-1985355051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43560","meta43560",1740301009,null)], null);
}));

(cljs.core.async.t_cljs$core$async43559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43559");

(cljs.core.async.t_cljs$core$async43559.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43559.
 */
cljs.core.async.__GT_t_cljs$core$async43559 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43559(f__$1,ch__$1,meta43553__$1,___$2,fn1__$1,meta43560){
return (new cljs.core.async.t_cljs$core$async43559(f__$1,ch__$1,meta43553__$1,___$2,fn1__$1,meta43560));
});

}

return (new cljs.core.async.t_cljs$core$async43559(self__.f,self__.ch,self__.meta43553,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43563 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43563) : self__.f.call(null,G__43563));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43553","meta43553",1832970777,null)], null);
}));

(cljs.core.async.t_cljs$core$async43552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43552");

(cljs.core.async.t_cljs$core$async43552.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43552.
 */
cljs.core.async.__GT_t_cljs$core$async43552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43552(f__$1,ch__$1,meta43553){
return (new cljs.core.async.t_cljs$core$async43552(f__$1,ch__$1,meta43553));
});

}

return (new cljs.core.async.t_cljs$core$async43552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43571 = (function (f,ch,meta43572){
this.f = f;
this.ch = ch;
this.meta43572 = meta43572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43573,meta43572__$1){
var self__ = this;
var _43573__$1 = this;
return (new cljs.core.async.t_cljs$core$async43571(self__.f,self__.ch,meta43572__$1));
}));

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43573){
var self__ = this;
var _43573__$1 = this;
return self__.meta43572;
}));

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43572","meta43572",-519116167,null)], null);
}));

(cljs.core.async.t_cljs$core$async43571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43571");

(cljs.core.async.t_cljs$core$async43571.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43571.
 */
cljs.core.async.__GT_t_cljs$core$async43571 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43571(f__$1,ch__$1,meta43572){
return (new cljs.core.async.t_cljs$core$async43571(f__$1,ch__$1,meta43572));
});

}

return (new cljs.core.async.t_cljs$core$async43571(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43579 = (function (p,ch,meta43580){
this.p = p;
this.ch = ch;
this.meta43580 = meta43580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43581,meta43580__$1){
var self__ = this;
var _43581__$1 = this;
return (new cljs.core.async.t_cljs$core$async43579(self__.p,self__.ch,meta43580__$1));
}));

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43581){
var self__ = this;
var _43581__$1 = this;
return self__.meta43580;
}));

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43580","meta43580",-870506125,null)], null);
}));

(cljs.core.async.t_cljs$core$async43579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43579");

(cljs.core.async.t_cljs$core$async43579.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43579.
 */
cljs.core.async.__GT_t_cljs$core$async43579 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43579(p__$1,ch__$1,meta43580){
return (new cljs.core.async.t_cljs$core$async43579(p__$1,ch__$1,meta43580));
});

}

return (new cljs.core.async.t_cljs$core$async43579(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43591 = arguments.length;
switch (G__43591) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41753__auto___44793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43612){
var state_val_43613 = (state_43612[(1)]);
if((state_val_43613 === (7))){
var inst_43608 = (state_43612[(2)]);
var state_43612__$1 = state_43612;
var statearr_43614_44794 = state_43612__$1;
(statearr_43614_44794[(2)] = inst_43608);

(statearr_43614_44794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (1))){
var state_43612__$1 = state_43612;
var statearr_43615_44795 = state_43612__$1;
(statearr_43615_44795[(2)] = null);

(statearr_43615_44795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (4))){
var inst_43594 = (state_43612[(7)]);
var inst_43594__$1 = (state_43612[(2)]);
var inst_43595 = (inst_43594__$1 == null);
var state_43612__$1 = (function (){var statearr_43617 = state_43612;
(statearr_43617[(7)] = inst_43594__$1);

return statearr_43617;
})();
if(cljs.core.truth_(inst_43595)){
var statearr_43618_44796 = state_43612__$1;
(statearr_43618_44796[(1)] = (5));

} else {
var statearr_43620_44797 = state_43612__$1;
(statearr_43620_44797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (6))){
var inst_43594 = (state_43612[(7)]);
var inst_43599 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43594) : p.call(null,inst_43594));
var state_43612__$1 = state_43612;
if(cljs.core.truth_(inst_43599)){
var statearr_43621_44798 = state_43612__$1;
(statearr_43621_44798[(1)] = (8));

} else {
var statearr_43622_44799 = state_43612__$1;
(statearr_43622_44799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (3))){
var inst_43610 = (state_43612[(2)]);
var state_43612__$1 = state_43612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43612__$1,inst_43610);
} else {
if((state_val_43613 === (2))){
var state_43612__$1 = state_43612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43612__$1,(4),ch);
} else {
if((state_val_43613 === (11))){
var inst_43602 = (state_43612[(2)]);
var state_43612__$1 = state_43612;
var statearr_43623_44800 = state_43612__$1;
(statearr_43623_44800[(2)] = inst_43602);

(statearr_43623_44800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (9))){
var state_43612__$1 = state_43612;
var statearr_43627_44801 = state_43612__$1;
(statearr_43627_44801[(2)] = null);

(statearr_43627_44801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (5))){
var inst_43597 = cljs.core.async.close_BANG_(out);
var state_43612__$1 = state_43612;
var statearr_43628_44802 = state_43612__$1;
(statearr_43628_44802[(2)] = inst_43597);

(statearr_43628_44802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (10))){
var inst_43605 = (state_43612[(2)]);
var state_43612__$1 = (function (){var statearr_43629 = state_43612;
(statearr_43629[(8)] = inst_43605);

return statearr_43629;
})();
var statearr_43630_44803 = state_43612__$1;
(statearr_43630_44803[(2)] = null);

(statearr_43630_44803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (8))){
var inst_43594 = (state_43612[(7)]);
var state_43612__$1 = state_43612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43612__$1,(11),out,inst_43594);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43631 = [null,null,null,null,null,null,null,null,null];
(statearr_43631[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43631[(1)] = (1));

return statearr_43631;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43612){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43612);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43632){var ex__41542__auto__ = e43632;
var statearr_43633_44804 = state_43612;
(statearr_43633_44804[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43612[(4)]))){
var statearr_43634_44805 = state_43612;
(statearr_43634_44805[(1)] = cljs.core.first((state_43612[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44806 = state_43612;
state_43612 = G__44806;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43635 = f__41754__auto__();
(statearr_43635[(6)] = c__41753__auto___44793);

return statearr_43635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43637 = arguments.length;
switch (G__43637) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43699){
var state_val_43700 = (state_43699[(1)]);
if((state_val_43700 === (7))){
var inst_43695 = (state_43699[(2)]);
var state_43699__$1 = state_43699;
var statearr_43701_44808 = state_43699__$1;
(statearr_43701_44808[(2)] = inst_43695);

(statearr_43701_44808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (20))){
var inst_43665 = (state_43699[(7)]);
var inst_43676 = (state_43699[(2)]);
var inst_43677 = cljs.core.next(inst_43665);
var inst_43651 = inst_43677;
var inst_43652 = null;
var inst_43653 = (0);
var inst_43654 = (0);
var state_43699__$1 = (function (){var statearr_43702 = state_43699;
(statearr_43702[(8)] = inst_43651);

(statearr_43702[(9)] = inst_43676);

(statearr_43702[(10)] = inst_43653);

(statearr_43702[(11)] = inst_43652);

(statearr_43702[(12)] = inst_43654);

return statearr_43702;
})();
var statearr_43703_44809 = state_43699__$1;
(statearr_43703_44809[(2)] = null);

(statearr_43703_44809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (1))){
var state_43699__$1 = state_43699;
var statearr_43704_44810 = state_43699__$1;
(statearr_43704_44810[(2)] = null);

(statearr_43704_44810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (4))){
var inst_43640 = (state_43699[(13)]);
var inst_43640__$1 = (state_43699[(2)]);
var inst_43641 = (inst_43640__$1 == null);
var state_43699__$1 = (function (){var statearr_43705 = state_43699;
(statearr_43705[(13)] = inst_43640__$1);

return statearr_43705;
})();
if(cljs.core.truth_(inst_43641)){
var statearr_43706_44811 = state_43699__$1;
(statearr_43706_44811[(1)] = (5));

} else {
var statearr_43707_44812 = state_43699__$1;
(statearr_43707_44812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (15))){
var state_43699__$1 = state_43699;
var statearr_43711_44813 = state_43699__$1;
(statearr_43711_44813[(2)] = null);

(statearr_43711_44813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (21))){
var state_43699__$1 = state_43699;
var statearr_43712_44814 = state_43699__$1;
(statearr_43712_44814[(2)] = null);

(statearr_43712_44814[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (13))){
var inst_43651 = (state_43699[(8)]);
var inst_43653 = (state_43699[(10)]);
var inst_43652 = (state_43699[(11)]);
var inst_43654 = (state_43699[(12)]);
var inst_43661 = (state_43699[(2)]);
var inst_43662 = (inst_43654 + (1));
var tmp43708 = inst_43651;
var tmp43709 = inst_43653;
var tmp43710 = inst_43652;
var inst_43651__$1 = tmp43708;
var inst_43652__$1 = tmp43710;
var inst_43653__$1 = tmp43709;
var inst_43654__$1 = inst_43662;
var state_43699__$1 = (function (){var statearr_43713 = state_43699;
(statearr_43713[(8)] = inst_43651__$1);

(statearr_43713[(14)] = inst_43661);

(statearr_43713[(10)] = inst_43653__$1);

(statearr_43713[(11)] = inst_43652__$1);

(statearr_43713[(12)] = inst_43654__$1);

return statearr_43713;
})();
var statearr_43714_44818 = state_43699__$1;
(statearr_43714_44818[(2)] = null);

(statearr_43714_44818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (22))){
var state_43699__$1 = state_43699;
var statearr_43715_44823 = state_43699__$1;
(statearr_43715_44823[(2)] = null);

(statearr_43715_44823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (6))){
var inst_43640 = (state_43699[(13)]);
var inst_43649 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43640) : f.call(null,inst_43640));
var inst_43650 = cljs.core.seq(inst_43649);
var inst_43651 = inst_43650;
var inst_43652 = null;
var inst_43653 = (0);
var inst_43654 = (0);
var state_43699__$1 = (function (){var statearr_43716 = state_43699;
(statearr_43716[(8)] = inst_43651);

(statearr_43716[(10)] = inst_43653);

(statearr_43716[(11)] = inst_43652);

(statearr_43716[(12)] = inst_43654);

return statearr_43716;
})();
var statearr_43717_44828 = state_43699__$1;
(statearr_43717_44828[(2)] = null);

(statearr_43717_44828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (17))){
var inst_43665 = (state_43699[(7)]);
var inst_43669 = cljs.core.chunk_first(inst_43665);
var inst_43670 = cljs.core.chunk_rest(inst_43665);
var inst_43671 = cljs.core.count(inst_43669);
var inst_43651 = inst_43670;
var inst_43652 = inst_43669;
var inst_43653 = inst_43671;
var inst_43654 = (0);
var state_43699__$1 = (function (){var statearr_43719 = state_43699;
(statearr_43719[(8)] = inst_43651);

(statearr_43719[(10)] = inst_43653);

(statearr_43719[(11)] = inst_43652);

(statearr_43719[(12)] = inst_43654);

return statearr_43719;
})();
var statearr_43720_44831 = state_43699__$1;
(statearr_43720_44831[(2)] = null);

(statearr_43720_44831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (3))){
var inst_43697 = (state_43699[(2)]);
var state_43699__$1 = state_43699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43699__$1,inst_43697);
} else {
if((state_val_43700 === (12))){
var inst_43685 = (state_43699[(2)]);
var state_43699__$1 = state_43699;
var statearr_43721_44832 = state_43699__$1;
(statearr_43721_44832[(2)] = inst_43685);

(statearr_43721_44832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (2))){
var state_43699__$1 = state_43699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43699__$1,(4),in$);
} else {
if((state_val_43700 === (23))){
var inst_43693 = (state_43699[(2)]);
var state_43699__$1 = state_43699;
var statearr_43722_44833 = state_43699__$1;
(statearr_43722_44833[(2)] = inst_43693);

(statearr_43722_44833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (19))){
var inst_43680 = (state_43699[(2)]);
var state_43699__$1 = state_43699;
var statearr_43726_44837 = state_43699__$1;
(statearr_43726_44837[(2)] = inst_43680);

(statearr_43726_44837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (11))){
var inst_43651 = (state_43699[(8)]);
var inst_43665 = (state_43699[(7)]);
var inst_43665__$1 = cljs.core.seq(inst_43651);
var state_43699__$1 = (function (){var statearr_43727 = state_43699;
(statearr_43727[(7)] = inst_43665__$1);

return statearr_43727;
})();
if(inst_43665__$1){
var statearr_43728_44838 = state_43699__$1;
(statearr_43728_44838[(1)] = (14));

} else {
var statearr_43730_44839 = state_43699__$1;
(statearr_43730_44839[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (9))){
var inst_43687 = (state_43699[(2)]);
var inst_43688 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43699__$1 = (function (){var statearr_43734 = state_43699;
(statearr_43734[(15)] = inst_43687);

return statearr_43734;
})();
if(cljs.core.truth_(inst_43688)){
var statearr_43735_44840 = state_43699__$1;
(statearr_43735_44840[(1)] = (21));

} else {
var statearr_43736_44841 = state_43699__$1;
(statearr_43736_44841[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (5))){
var inst_43643 = cljs.core.async.close_BANG_(out);
var state_43699__$1 = state_43699;
var statearr_43737_44842 = state_43699__$1;
(statearr_43737_44842[(2)] = inst_43643);

(statearr_43737_44842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (14))){
var inst_43665 = (state_43699[(7)]);
var inst_43667 = cljs.core.chunked_seq_QMARK_(inst_43665);
var state_43699__$1 = state_43699;
if(inst_43667){
var statearr_43738_44846 = state_43699__$1;
(statearr_43738_44846[(1)] = (17));

} else {
var statearr_43739_44847 = state_43699__$1;
(statearr_43739_44847[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (16))){
var inst_43683 = (state_43699[(2)]);
var state_43699__$1 = state_43699;
var statearr_43740_44848 = state_43699__$1;
(statearr_43740_44848[(2)] = inst_43683);

(statearr_43740_44848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43700 === (10))){
var inst_43652 = (state_43699[(11)]);
var inst_43654 = (state_43699[(12)]);
var inst_43659 = cljs.core._nth(inst_43652,inst_43654);
var state_43699__$1 = state_43699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43699__$1,(13),out,inst_43659);
} else {
if((state_val_43700 === (18))){
var inst_43665 = (state_43699[(7)]);
var inst_43674 = cljs.core.first(inst_43665);
var state_43699__$1 = state_43699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43699__$1,(20),out,inst_43674);
} else {
if((state_val_43700 === (8))){
var inst_43653 = (state_43699[(10)]);
var inst_43654 = (state_43699[(12)]);
var inst_43656 = (inst_43654 < inst_43653);
var inst_43657 = inst_43656;
var state_43699__$1 = state_43699;
if(cljs.core.truth_(inst_43657)){
var statearr_43741_44849 = state_43699__$1;
(statearr_43741_44849[(1)] = (10));

} else {
var statearr_43742_44850 = state_43699__$1;
(statearr_43742_44850[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41539__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41539__auto____0 = (function (){
var statearr_43743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43743[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41539__auto__);

(statearr_43743[(1)] = (1));

return statearr_43743;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41539__auto____1 = (function (state_43699){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43699);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43744){var ex__41542__auto__ = e43744;
var statearr_43745_44854 = state_43699;
(statearr_43745_44854[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43699[(4)]))){
var statearr_43746_44855 = state_43699;
(statearr_43746_44855[(1)] = cljs.core.first((state_43699[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44856 = state_43699;
state_43699 = G__44856;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41539__auto__ = function(state_43699){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41539__auto____1.call(this,state_43699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41539__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41539__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43761 = f__41754__auto__();
(statearr_43761[(6)] = c__41753__auto__);

return statearr_43761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));

return c__41753__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43769 = arguments.length;
switch (G__43769) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43791 = arguments.length;
switch (G__43791) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43796 = arguments.length;
switch (G__43796) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41753__auto___44870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43823){
var state_val_43824 = (state_43823[(1)]);
if((state_val_43824 === (7))){
var inst_43818 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43825_44871 = state_43823__$1;
(statearr_43825_44871[(2)] = inst_43818);

(statearr_43825_44871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (1))){
var inst_43797 = null;
var state_43823__$1 = (function (){var statearr_43826 = state_43823;
(statearr_43826[(7)] = inst_43797);

return statearr_43826;
})();
var statearr_43827_44872 = state_43823__$1;
(statearr_43827_44872[(2)] = null);

(statearr_43827_44872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (4))){
var inst_43803 = (state_43823[(8)]);
var inst_43803__$1 = (state_43823[(2)]);
var inst_43804 = (inst_43803__$1 == null);
var inst_43805 = cljs.core.not(inst_43804);
var state_43823__$1 = (function (){var statearr_43828 = state_43823;
(statearr_43828[(8)] = inst_43803__$1);

return statearr_43828;
})();
if(inst_43805){
var statearr_43829_44883 = state_43823__$1;
(statearr_43829_44883[(1)] = (5));

} else {
var statearr_43830_44884 = state_43823__$1;
(statearr_43830_44884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (6))){
var state_43823__$1 = state_43823;
var statearr_43831_44885 = state_43823__$1;
(statearr_43831_44885[(2)] = null);

(statearr_43831_44885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (3))){
var inst_43820 = (state_43823[(2)]);
var inst_43821 = cljs.core.async.close_BANG_(out);
var state_43823__$1 = (function (){var statearr_43832 = state_43823;
(statearr_43832[(9)] = inst_43820);

return statearr_43832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43823__$1,inst_43821);
} else {
if((state_val_43824 === (2))){
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43823__$1,(4),ch);
} else {
if((state_val_43824 === (11))){
var inst_43803 = (state_43823[(8)]);
var inst_43812 = (state_43823[(2)]);
var inst_43797 = inst_43803;
var state_43823__$1 = (function (){var statearr_43833 = state_43823;
(statearr_43833[(7)] = inst_43797);

(statearr_43833[(10)] = inst_43812);

return statearr_43833;
})();
var statearr_43834_44886 = state_43823__$1;
(statearr_43834_44886[(2)] = null);

(statearr_43834_44886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (9))){
var inst_43803 = (state_43823[(8)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43823__$1,(11),out,inst_43803);
} else {
if((state_val_43824 === (5))){
var inst_43797 = (state_43823[(7)]);
var inst_43803 = (state_43823[(8)]);
var inst_43807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43803,inst_43797);
var state_43823__$1 = state_43823;
if(inst_43807){
var statearr_43836_44891 = state_43823__$1;
(statearr_43836_44891[(1)] = (8));

} else {
var statearr_43837_44892 = state_43823__$1;
(statearr_43837_44892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (10))){
var inst_43815 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43838_44893 = state_43823__$1;
(statearr_43838_44893[(2)] = inst_43815);

(statearr_43838_44893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (8))){
var inst_43797 = (state_43823[(7)]);
var tmp43835 = inst_43797;
var inst_43797__$1 = tmp43835;
var state_43823__$1 = (function (){var statearr_43839 = state_43823;
(statearr_43839[(7)] = inst_43797__$1);

return statearr_43839;
})();
var statearr_43840_44894 = state_43823__$1;
(statearr_43840_44894[(2)] = null);

(statearr_43840_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43841[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43841[(1)] = (1));

return statearr_43841;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43823){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43823);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43842){var ex__41542__auto__ = e43842;
var statearr_43843_44895 = state_43823;
(statearr_43843_44895[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43823[(4)]))){
var statearr_43844_44896 = state_43823;
(statearr_43844_44896[(1)] = cljs.core.first((state_43823[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44897 = state_43823;
state_43823 = G__44897;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43845 = f__41754__auto__();
(statearr_43845[(6)] = c__41753__auto___44870);

return statearr_43845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43847 = arguments.length;
switch (G__43847) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41753__auto___44899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43885){
var state_val_43886 = (state_43885[(1)]);
if((state_val_43886 === (7))){
var inst_43881 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43895_44906 = state_43885__$1;
(statearr_43895_44906[(2)] = inst_43881);

(statearr_43895_44906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (1))){
var inst_43848 = (new Array(n));
var inst_43849 = inst_43848;
var inst_43850 = (0);
var state_43885__$1 = (function (){var statearr_43899 = state_43885;
(statearr_43899[(7)] = inst_43849);

(statearr_43899[(8)] = inst_43850);

return statearr_43899;
})();
var statearr_43900_44907 = state_43885__$1;
(statearr_43900_44907[(2)] = null);

(statearr_43900_44907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (4))){
var inst_43853 = (state_43885[(9)]);
var inst_43853__$1 = (state_43885[(2)]);
var inst_43854 = (inst_43853__$1 == null);
var inst_43855 = cljs.core.not(inst_43854);
var state_43885__$1 = (function (){var statearr_43901 = state_43885;
(statearr_43901[(9)] = inst_43853__$1);

return statearr_43901;
})();
if(inst_43855){
var statearr_43902_44908 = state_43885__$1;
(statearr_43902_44908[(1)] = (5));

} else {
var statearr_43903_44909 = state_43885__$1;
(statearr_43903_44909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (15))){
var inst_43875 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43904_44910 = state_43885__$1;
(statearr_43904_44910[(2)] = inst_43875);

(statearr_43904_44910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (13))){
var state_43885__$1 = state_43885;
var statearr_43905_44911 = state_43885__$1;
(statearr_43905_44911[(2)] = null);

(statearr_43905_44911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (6))){
var inst_43850 = (state_43885[(8)]);
var inst_43871 = (inst_43850 > (0));
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43871)){
var statearr_43906_44912 = state_43885__$1;
(statearr_43906_44912[(1)] = (12));

} else {
var statearr_43907_44913 = state_43885__$1;
(statearr_43907_44913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (3))){
var inst_43883 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43885__$1,inst_43883);
} else {
if((state_val_43886 === (12))){
var inst_43849 = (state_43885[(7)]);
var inst_43873 = cljs.core.vec(inst_43849);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43885__$1,(15),out,inst_43873);
} else {
if((state_val_43886 === (2))){
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43885__$1,(4),ch);
} else {
if((state_val_43886 === (11))){
var inst_43865 = (state_43885[(2)]);
var inst_43866 = (new Array(n));
var inst_43849 = inst_43866;
var inst_43850 = (0);
var state_43885__$1 = (function (){var statearr_43908 = state_43885;
(statearr_43908[(7)] = inst_43849);

(statearr_43908[(10)] = inst_43865);

(statearr_43908[(8)] = inst_43850);

return statearr_43908;
})();
var statearr_43909_44921 = state_43885__$1;
(statearr_43909_44921[(2)] = null);

(statearr_43909_44921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (9))){
var inst_43849 = (state_43885[(7)]);
var inst_43863 = cljs.core.vec(inst_43849);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43885__$1,(11),out,inst_43863);
} else {
if((state_val_43886 === (5))){
var inst_43849 = (state_43885[(7)]);
var inst_43853 = (state_43885[(9)]);
var inst_43858 = (state_43885[(11)]);
var inst_43850 = (state_43885[(8)]);
var inst_43857 = (inst_43849[inst_43850] = inst_43853);
var inst_43858__$1 = (inst_43850 + (1));
var inst_43859 = (inst_43858__$1 < n);
var state_43885__$1 = (function (){var statearr_43910 = state_43885;
(statearr_43910[(11)] = inst_43858__$1);

(statearr_43910[(12)] = inst_43857);

return statearr_43910;
})();
if(cljs.core.truth_(inst_43859)){
var statearr_43911_44923 = state_43885__$1;
(statearr_43911_44923[(1)] = (8));

} else {
var statearr_43912_44924 = state_43885__$1;
(statearr_43912_44924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (14))){
var inst_43878 = (state_43885[(2)]);
var inst_43879 = cljs.core.async.close_BANG_(out);
var state_43885__$1 = (function (){var statearr_43914 = state_43885;
(statearr_43914[(13)] = inst_43878);

return statearr_43914;
})();
var statearr_43915_44925 = state_43885__$1;
(statearr_43915_44925[(2)] = inst_43879);

(statearr_43915_44925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (10))){
var inst_43869 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43916_44927 = state_43885__$1;
(statearr_43916_44927[(2)] = inst_43869);

(statearr_43916_44927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (8))){
var inst_43849 = (state_43885[(7)]);
var inst_43858 = (state_43885[(11)]);
var tmp43913 = inst_43849;
var inst_43849__$1 = tmp43913;
var inst_43850 = inst_43858;
var state_43885__$1 = (function (){var statearr_43917 = state_43885;
(statearr_43917[(7)] = inst_43849__$1);

(statearr_43917[(8)] = inst_43850);

return statearr_43917;
})();
var statearr_43918_44928 = state_43885__$1;
(statearr_43918_44928[(2)] = null);

(statearr_43918_44928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_43921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43921[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_43921[(1)] = (1));

return statearr_43921;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43885){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43885);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e43922){var ex__41542__auto__ = e43922;
var statearr_43923_44930 = state_43885;
(statearr_43923_44930[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43885[(4)]))){
var statearr_43926_44931 = state_43885;
(statearr_43926_44931[(1)] = cljs.core.first((state_43885[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44932 = state_43885;
state_43885 = G__44932;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_43931 = f__41754__auto__();
(statearr_43931[(6)] = c__41753__auto___44899);

return statearr_43931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43933 = arguments.length;
switch (G__43933) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41753__auto___44942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_43978){
var state_val_43979 = (state_43978[(1)]);
if((state_val_43979 === (7))){
var inst_43974 = (state_43978[(2)]);
var state_43978__$1 = state_43978;
var statearr_43983_44952 = state_43978__$1;
(statearr_43983_44952[(2)] = inst_43974);

(statearr_43983_44952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (1))){
var inst_43934 = [];
var inst_43935 = inst_43934;
var inst_43936 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43978__$1 = (function (){var statearr_43984 = state_43978;
(statearr_43984[(7)] = inst_43936);

(statearr_43984[(8)] = inst_43935);

return statearr_43984;
})();
var statearr_43985_44954 = state_43978__$1;
(statearr_43985_44954[(2)] = null);

(statearr_43985_44954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (4))){
var inst_43939 = (state_43978[(9)]);
var inst_43939__$1 = (state_43978[(2)]);
var inst_43940 = (inst_43939__$1 == null);
var inst_43941 = cljs.core.not(inst_43940);
var state_43978__$1 = (function (){var statearr_43986 = state_43978;
(statearr_43986[(9)] = inst_43939__$1);

return statearr_43986;
})();
if(inst_43941){
var statearr_43987_44957 = state_43978__$1;
(statearr_43987_44957[(1)] = (5));

} else {
var statearr_43988_44958 = state_43978__$1;
(statearr_43988_44958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (15))){
var inst_43935 = (state_43978[(8)]);
var inst_43966 = cljs.core.vec(inst_43935);
var state_43978__$1 = state_43978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43978__$1,(18),out,inst_43966);
} else {
if((state_val_43979 === (13))){
var inst_43961 = (state_43978[(2)]);
var state_43978__$1 = state_43978;
var statearr_43989_44959 = state_43978__$1;
(statearr_43989_44959[(2)] = inst_43961);

(statearr_43989_44959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (6))){
var inst_43935 = (state_43978[(8)]);
var inst_43963 = inst_43935.length;
var inst_43964 = (inst_43963 > (0));
var state_43978__$1 = state_43978;
if(cljs.core.truth_(inst_43964)){
var statearr_43990_44960 = state_43978__$1;
(statearr_43990_44960[(1)] = (15));

} else {
var statearr_43991_44961 = state_43978__$1;
(statearr_43991_44961[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (17))){
var inst_43971 = (state_43978[(2)]);
var inst_43972 = cljs.core.async.close_BANG_(out);
var state_43978__$1 = (function (){var statearr_43995 = state_43978;
(statearr_43995[(10)] = inst_43971);

return statearr_43995;
})();
var statearr_44000_44962 = state_43978__$1;
(statearr_44000_44962[(2)] = inst_43972);

(statearr_44000_44962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (3))){
var inst_43976 = (state_43978[(2)]);
var state_43978__$1 = state_43978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43978__$1,inst_43976);
} else {
if((state_val_43979 === (12))){
var inst_43935 = (state_43978[(8)]);
var inst_43954 = cljs.core.vec(inst_43935);
var state_43978__$1 = state_43978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43978__$1,(14),out,inst_43954);
} else {
if((state_val_43979 === (2))){
var state_43978__$1 = state_43978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43978__$1,(4),ch);
} else {
if((state_val_43979 === (11))){
var inst_43939 = (state_43978[(9)]);
var inst_43943 = (state_43978[(11)]);
var inst_43935 = (state_43978[(8)]);
var inst_43951 = inst_43935.push(inst_43939);
var tmp44004 = inst_43935;
var inst_43935__$1 = tmp44004;
var inst_43936 = inst_43943;
var state_43978__$1 = (function (){var statearr_44008 = state_43978;
(statearr_44008[(7)] = inst_43936);

(statearr_44008[(12)] = inst_43951);

(statearr_44008[(8)] = inst_43935__$1);

return statearr_44008;
})();
var statearr_44009_44965 = state_43978__$1;
(statearr_44009_44965[(2)] = null);

(statearr_44009_44965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (9))){
var inst_43936 = (state_43978[(7)]);
var inst_43947 = cljs.core.keyword_identical_QMARK_(inst_43936,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43978__$1 = state_43978;
var statearr_44017_44966 = state_43978__$1;
(statearr_44017_44966[(2)] = inst_43947);

(statearr_44017_44966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (5))){
var inst_43936 = (state_43978[(7)]);
var inst_43939 = (state_43978[(9)]);
var inst_43943 = (state_43978[(11)]);
var inst_43944 = (state_43978[(13)]);
var inst_43943__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43939) : f.call(null,inst_43939));
var inst_43944__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43943__$1,inst_43936);
var state_43978__$1 = (function (){var statearr_44021 = state_43978;
(statearr_44021[(11)] = inst_43943__$1);

(statearr_44021[(13)] = inst_43944__$1);

return statearr_44021;
})();
if(inst_43944__$1){
var statearr_44022_44968 = state_43978__$1;
(statearr_44022_44968[(1)] = (8));

} else {
var statearr_44023_44969 = state_43978__$1;
(statearr_44023_44969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (14))){
var inst_43939 = (state_43978[(9)]);
var inst_43943 = (state_43978[(11)]);
var inst_43956 = (state_43978[(2)]);
var inst_43957 = [];
var inst_43958 = inst_43957.push(inst_43939);
var inst_43935 = inst_43957;
var inst_43936 = inst_43943;
var state_43978__$1 = (function (){var statearr_44024 = state_43978;
(statearr_44024[(14)] = inst_43958);

(statearr_44024[(15)] = inst_43956);

(statearr_44024[(7)] = inst_43936);

(statearr_44024[(8)] = inst_43935);

return statearr_44024;
})();
var statearr_44028_44971 = state_43978__$1;
(statearr_44028_44971[(2)] = null);

(statearr_44028_44971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (16))){
var state_43978__$1 = state_43978;
var statearr_44033_44976 = state_43978__$1;
(statearr_44033_44976[(2)] = null);

(statearr_44033_44976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (10))){
var inst_43949 = (state_43978[(2)]);
var state_43978__$1 = state_43978;
if(cljs.core.truth_(inst_43949)){
var statearr_44037_44990 = state_43978__$1;
(statearr_44037_44990[(1)] = (11));

} else {
var statearr_44041_44991 = state_43978__$1;
(statearr_44041_44991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (18))){
var inst_43968 = (state_43978[(2)]);
var state_43978__$1 = state_43978;
var statearr_44042_44992 = state_43978__$1;
(statearr_44042_44992[(2)] = inst_43968);

(statearr_44042_44992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43979 === (8))){
var inst_43944 = (state_43978[(13)]);
var state_43978__$1 = state_43978;
var statearr_44047_44999 = state_43978__$1;
(statearr_44047_44999[(2)] = inst_43944);

(statearr_44047_44999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41539__auto__ = null;
var cljs$core$async$state_machine__41539__auto____0 = (function (){
var statearr_44048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44048[(0)] = cljs$core$async$state_machine__41539__auto__);

(statearr_44048[(1)] = (1));

return statearr_44048;
});
var cljs$core$async$state_machine__41539__auto____1 = (function (state_43978){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_43978);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e44051){var ex__41542__auto__ = e44051;
var statearr_44052_45003 = state_43978;
(statearr_44052_45003[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_43978[(4)]))){
var statearr_44053_45005 = state_43978;
(statearr_44053_45005[(1)] = cljs.core.first((state_43978[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45009 = state_43978;
state_43978 = G__45009;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
cljs$core$async$state_machine__41539__auto__ = function(state_43978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41539__auto____1.call(this,state_43978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41539__auto____0;
cljs$core$async$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41539__auto____1;
return cljs$core$async$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_44054 = f__41754__auto__();
(statearr_44054[(6)] = c__41753__auto___44942);

return statearr_44054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
