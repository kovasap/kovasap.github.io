goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33570 = arguments.length;
switch (G__33570) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33571 = (function (f,blockable,meta33572){
this.f = f;
this.blockable = blockable;
this.meta33572 = meta33572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33573,meta33572__$1){
var self__ = this;
var _33573__$1 = this;
return (new cljs.core.async.t_cljs$core$async33571(self__.f,self__.blockable,meta33572__$1));
}));

(cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33573){
var self__ = this;
var _33573__$1 = this;
return self__.meta33572;
}));

(cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33572","meta33572",-970150834,null)], null);
}));

(cljs.core.async.t_cljs$core$async33571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33571");

(cljs.core.async.t_cljs$core$async33571.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33571.
 */
cljs.core.async.__GT_t_cljs$core$async33571 = (function cljs$core$async$__GT_t_cljs$core$async33571(f__$1,blockable__$1,meta33572){
return (new cljs.core.async.t_cljs$core$async33571(f__$1,blockable__$1,meta33572));
});

}

return (new cljs.core.async.t_cljs$core$async33571(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33580 = arguments.length;
switch (G__33580) {
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
var G__33582 = arguments.length;
switch (G__33582) {
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
var G__33584 = arguments.length;
switch (G__33584) {
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
var val_36015 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36015) : fn1.call(null,val_36015));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36015) : fn1.call(null,val_36015));
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
var G__33599 = arguments.length;
switch (G__33599) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___36019 = n;
var x_36020 = (0);
while(true){
if((x_36020 < n__5636__auto___36019)){
(a[x_36020] = x_36020);

var G__36022 = (x_36020 + (1));
x_36020 = G__36022;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33607 = (function (flag,meta33608){
this.flag = flag;
this.meta33608 = meta33608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33609,meta33608__$1){
var self__ = this;
var _33609__$1 = this;
return (new cljs.core.async.t_cljs$core$async33607(self__.flag,meta33608__$1));
}));

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33609){
var self__ = this;
var _33609__$1 = this;
return self__.meta33608;
}));

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33608","meta33608",2011096329,null)], null);
}));

(cljs.core.async.t_cljs$core$async33607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33607");

(cljs.core.async.t_cljs$core$async33607.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33607.
 */
cljs.core.async.__GT_t_cljs$core$async33607 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33607(flag__$1,meta33608){
return (new cljs.core.async.t_cljs$core$async33607(flag__$1,meta33608));
});

}

return (new cljs.core.async.t_cljs$core$async33607(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33614 = (function (flag,cb,meta33615){
this.flag = flag;
this.cb = cb;
this.meta33615 = meta33615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33616,meta33615__$1){
var self__ = this;
var _33616__$1 = this;
return (new cljs.core.async.t_cljs$core$async33614(self__.flag,self__.cb,meta33615__$1));
}));

(cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33616){
var self__ = this;
var _33616__$1 = this;
return self__.meta33615;
}));

(cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33615","meta33615",-1603099409,null)], null);
}));

(cljs.core.async.t_cljs$core$async33614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33614");

(cljs.core.async.t_cljs$core$async33614.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33614.
 */
cljs.core.async.__GT_t_cljs$core$async33614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33614(flag__$1,cb__$1,meta33615){
return (new cljs.core.async.t_cljs$core$async33614(flag__$1,cb__$1,meta33615));
});

}

return (new cljs.core.async.t_cljs$core$async33614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33617_SHARP_){
var G__33619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33617_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33619) : fret.call(null,G__33619));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33618_SHARP_){
var G__33620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33618_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33620) : fret.call(null,G__33620));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36030 = (i + (1));
i = G__36030;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___36033 = arguments.length;
var i__5770__auto___36034 = (0);
while(true){
if((i__5770__auto___36034 < len__5769__auto___36033)){
args__5775__auto__.push((arguments[i__5770__auto___36034]));

var G__36035 = (i__5770__auto___36034 + (1));
i__5770__auto___36034 = G__36035;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33625){
var map__33626 = p__33625;
var map__33626__$1 = cljs.core.__destructure_map(map__33626);
var opts = map__33626__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33622){
var G__33623 = cljs.core.first(seq33622);
var seq33622__$1 = cljs.core.next(seq33622);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33623,seq33622__$1);
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
var G__33630 = arguments.length;
switch (G__33630) {
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
var c__33480__auto___36038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_33672){
var state_val_33674 = (state_33672[(1)]);
if((state_val_33674 === (7))){
var inst_33668 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33679_36040 = state_33672__$1;
(statearr_33679_36040[(2)] = inst_33668);

(statearr_33679_36040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (1))){
var state_33672__$1 = state_33672;
var statearr_33680_36041 = state_33672__$1;
(statearr_33680_36041[(2)] = null);

(statearr_33680_36041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (4))){
var inst_33651 = (state_33672[(7)]);
var inst_33651__$1 = (state_33672[(2)]);
var inst_33652 = (inst_33651__$1 == null);
var state_33672__$1 = (function (){var statearr_33681 = state_33672;
(statearr_33681[(7)] = inst_33651__$1);

return statearr_33681;
})();
if(cljs.core.truth_(inst_33652)){
var statearr_33682_36042 = state_33672__$1;
(statearr_33682_36042[(1)] = (5));

} else {
var statearr_33683_36043 = state_33672__$1;
(statearr_33683_36043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (13))){
var state_33672__$1 = state_33672;
var statearr_33684_36044 = state_33672__$1;
(statearr_33684_36044[(2)] = null);

(statearr_33684_36044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (6))){
var inst_33651 = (state_33672[(7)]);
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33672__$1,(11),to,inst_33651);
} else {
if((state_val_33674 === (3))){
var inst_33670 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33672__$1,inst_33670);
} else {
if((state_val_33674 === (12))){
var state_33672__$1 = state_33672;
var statearr_33688_36045 = state_33672__$1;
(statearr_33688_36045[(2)] = null);

(statearr_33688_36045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (2))){
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33672__$1,(4),from);
} else {
if((state_val_33674 === (11))){
var inst_33661 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
if(cljs.core.truth_(inst_33661)){
var statearr_33692_36047 = state_33672__$1;
(statearr_33692_36047[(1)] = (12));

} else {
var statearr_33693_36048 = state_33672__$1;
(statearr_33693_36048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (9))){
var state_33672__$1 = state_33672;
var statearr_33694_36050 = state_33672__$1;
(statearr_33694_36050[(2)] = null);

(statearr_33694_36050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (5))){
var state_33672__$1 = state_33672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33695_36053 = state_33672__$1;
(statearr_33695_36053[(1)] = (8));

} else {
var statearr_33697_36054 = state_33672__$1;
(statearr_33697_36054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (14))){
var inst_33666 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33699_36055 = state_33672__$1;
(statearr_33699_36055[(2)] = inst_33666);

(statearr_33699_36055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (10))){
var inst_33658 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33700_36056 = state_33672__$1;
(statearr_33700_36056[(2)] = inst_33658);

(statearr_33700_36056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (8))){
var inst_33655 = cljs.core.async.close_BANG_(to);
var state_33672__$1 = state_33672;
var statearr_33701_36057 = state_33672__$1;
(statearr_33701_36057[(2)] = inst_33655);

(statearr_33701_36057[(1)] = (10));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_33705 = [null,null,null,null,null,null,null,null];
(statearr_33705[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_33705[(1)] = (1));

return statearr_33705;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_33672){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_33672);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e33706){var ex__33295__auto__ = e33706;
var statearr_33707_36058 = state_33672;
(statearr_33707_36058[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_33672[(4)]))){
var statearr_33710_36061 = state_33672;
(statearr_33710_36061[(1)] = cljs.core.first((state_33672[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36064 = state_33672;
state_33672 = G__36064;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_33672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_33672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_33719 = f__33481__auto__();
(statearr_33719[(6)] = c__33480__auto___36038);

return statearr_33719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
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
var process__$1 = (function (p__33720){
var vec__33721 = p__33720;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(1),null);
var job = vec__33721;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33480__auto___36065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_33728){
var state_val_33729 = (state_33728[(1)]);
if((state_val_33729 === (1))){
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33728__$1,(2),res,v);
} else {
if((state_val_33729 === (2))){
var inst_33725 = (state_33728[(2)]);
var inst_33726 = cljs.core.async.close_BANG_(res);
var state_33728__$1 = (function (){var statearr_33731 = state_33728;
(statearr_33731[(7)] = inst_33725);

return statearr_33731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33728__$1,inst_33726);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0 = (function (){
var statearr_33732 = [null,null,null,null,null,null,null,null];
(statearr_33732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__);

(statearr_33732[(1)] = (1));

return statearr_33732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1 = (function (state_33728){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_33728);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e33733){var ex__33295__auto__ = e33733;
var statearr_33734_36066 = state_33728;
(statearr_33734_36066[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_33728[(4)]))){
var statearr_33735_36067 = state_33728;
(statearr_33735_36067[(1)] = cljs.core.first((state_33728[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36068 = state_33728;
state_33728 = G__36068;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_33736 = f__33481__auto__();
(statearr_33736[(6)] = c__33480__auto___36065);

return statearr_33736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33737){
var vec__33738 = p__33737;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33738,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33738,(1),null);
var job = vec__33738;
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
var n__5636__auto___36071 = n;
var __36072 = (0);
while(true){
if((__36072 < n__5636__auto___36071)){
var G__33741_36073 = type;
var G__33741_36074__$1 = (((G__33741_36073 instanceof cljs.core.Keyword))?G__33741_36073.fqn:null);
switch (G__33741_36074__$1) {
case "compute":
var c__33480__auto___36076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36072,c__33480__auto___36076,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async){
return (function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = ((function (__36072,c__33480__auto___36076,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async){
return (function (state_33758){
var state_val_33759 = (state_33758[(1)]);
if((state_val_33759 === (1))){
var state_33758__$1 = state_33758;
var statearr_33772_36081 = state_33758__$1;
(statearr_33772_36081[(2)] = null);

(statearr_33772_36081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (2))){
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33758__$1,(4),jobs);
} else {
if((state_val_33759 === (3))){
var inst_33756 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33758__$1,inst_33756);
} else {
if((state_val_33759 === (4))){
var inst_33748 = (state_33758[(2)]);
var inst_33749 = process__$1(inst_33748);
var state_33758__$1 = state_33758;
if(cljs.core.truth_(inst_33749)){
var statearr_33787_36086 = state_33758__$1;
(statearr_33787_36086[(1)] = (5));

} else {
var statearr_33788_36087 = state_33758__$1;
(statearr_33788_36087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (5))){
var state_33758__$1 = state_33758;
var statearr_33789_36088 = state_33758__$1;
(statearr_33789_36088[(2)] = null);

(statearr_33789_36088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (6))){
var state_33758__$1 = state_33758;
var statearr_33790_36089 = state_33758__$1;
(statearr_33790_36089[(2)] = null);

(statearr_33790_36089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (7))){
var inst_33754 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33792_36090 = state_33758__$1;
(statearr_33792_36090[(2)] = inst_33754);

(statearr_33792_36090[(1)] = (3));


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
});})(__36072,c__33480__auto___36076,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async))
;
return ((function (__36072,switch__33291__auto__,c__33480__auto___36076,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0 = (function (){
var statearr_33795 = [null,null,null,null,null,null,null];
(statearr_33795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__);

(statearr_33795[(1)] = (1));

return statearr_33795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1 = (function (state_33758){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_33758);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e33796){var ex__33295__auto__ = e33796;
var statearr_33798_36098 = state_33758;
(statearr_33798_36098[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_33758[(4)]))){
var statearr_33799_36099 = state_33758;
(statearr_33799_36099[(1)] = cljs.core.first((state_33758[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36100 = state_33758;
state_33758 = G__36100;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = function(state_33758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1.call(this,state_33758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__;
})()
;})(__36072,switch__33291__auto__,c__33480__auto___36076,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async))
})();
var state__33482__auto__ = (function (){var statearr_33800 = f__33481__auto__();
(statearr_33800[(6)] = c__33480__auto___36076);

return statearr_33800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
});})(__36072,c__33480__auto___36076,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async))
);


break;
case "async":
var c__33480__auto___36104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36072,c__33480__auto___36104,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async){
return (function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = ((function (__36072,c__33480__auto___36104,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async){
return (function (state_33816){
var state_val_33817 = (state_33816[(1)]);
if((state_val_33817 === (1))){
var state_33816__$1 = state_33816;
var statearr_33822_36108 = state_33816__$1;
(statearr_33822_36108[(2)] = null);

(statearr_33822_36108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (2))){
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33816__$1,(4),jobs);
} else {
if((state_val_33817 === (3))){
var inst_33814 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33816__$1,inst_33814);
} else {
if((state_val_33817 === (4))){
var inst_33806 = (state_33816[(2)]);
var inst_33807 = async(inst_33806);
var state_33816__$1 = state_33816;
if(cljs.core.truth_(inst_33807)){
var statearr_33844_36109 = state_33816__$1;
(statearr_33844_36109[(1)] = (5));

} else {
var statearr_33845_36110 = state_33816__$1;
(statearr_33845_36110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (5))){
var state_33816__$1 = state_33816;
var statearr_33846_36114 = state_33816__$1;
(statearr_33846_36114[(2)] = null);

(statearr_33846_36114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (6))){
var state_33816__$1 = state_33816;
var statearr_33849_36115 = state_33816__$1;
(statearr_33849_36115[(2)] = null);

(statearr_33849_36115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (7))){
var inst_33812 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33855_36116 = state_33816__$1;
(statearr_33855_36116[(2)] = inst_33812);

(statearr_33855_36116[(1)] = (3));


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
});})(__36072,c__33480__auto___36104,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async))
;
return ((function (__36072,switch__33291__auto__,c__33480__auto___36104,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0 = (function (){
var statearr_33865 = [null,null,null,null,null,null,null];
(statearr_33865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__);

(statearr_33865[(1)] = (1));

return statearr_33865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1 = (function (state_33816){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_33816);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e33873){var ex__33295__auto__ = e33873;
var statearr_33874_36117 = state_33816;
(statearr_33874_36117[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_33816[(4)]))){
var statearr_33880_36121 = state_33816;
(statearr_33880_36121[(1)] = cljs.core.first((state_33816[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36123 = state_33816;
state_33816 = G__36123;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = function(state_33816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1.call(this,state_33816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__;
})()
;})(__36072,switch__33291__auto__,c__33480__auto___36104,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async))
})();
var state__33482__auto__ = (function (){var statearr_33882 = f__33481__auto__();
(statearr_33882[(6)] = c__33480__auto___36104);

return statearr_33882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
});})(__36072,c__33480__auto___36104,G__33741_36073,G__33741_36074__$1,n__5636__auto___36071,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33741_36074__$1)].join('')));

}

var G__36127 = (__36072 + (1));
__36072 = G__36127;
continue;
} else {
}
break;
}

var c__33480__auto___36128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_33929){
var state_val_33930 = (state_33929[(1)]);
if((state_val_33930 === (7))){
var inst_33924 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
var statearr_33932_36129 = state_33929__$1;
(statearr_33932_36129[(2)] = inst_33924);

(statearr_33932_36129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (1))){
var state_33929__$1 = state_33929;
var statearr_33935_36130 = state_33929__$1;
(statearr_33935_36130[(2)] = null);

(statearr_33935_36130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (4))){
var inst_33891 = (state_33929[(7)]);
var inst_33891__$1 = (state_33929[(2)]);
var inst_33896 = (inst_33891__$1 == null);
var state_33929__$1 = (function (){var statearr_33936 = state_33929;
(statearr_33936[(7)] = inst_33891__$1);

return statearr_33936;
})();
if(cljs.core.truth_(inst_33896)){
var statearr_33938_36133 = state_33929__$1;
(statearr_33938_36133[(1)] = (5));

} else {
var statearr_33940_36134 = state_33929__$1;
(statearr_33940_36134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (6))){
var inst_33902 = (state_33929[(8)]);
var inst_33891 = (state_33929[(7)]);
var inst_33902__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33915 = [inst_33891,inst_33902__$1];
var inst_33916 = (new cljs.core.PersistentVector(null,2,(5),inst_33914,inst_33915,null));
var state_33929__$1 = (function (){var statearr_33941 = state_33929;
(statearr_33941[(8)] = inst_33902__$1);

return statearr_33941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33929__$1,(8),jobs,inst_33916);
} else {
if((state_val_33930 === (3))){
var inst_33926 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33929__$1,inst_33926);
} else {
if((state_val_33930 === (2))){
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33929__$1,(4),from);
} else {
if((state_val_33930 === (9))){
var inst_33921 = (state_33929[(2)]);
var state_33929__$1 = (function (){var statearr_33946 = state_33929;
(statearr_33946[(9)] = inst_33921);

return statearr_33946;
})();
var statearr_33947_36141 = state_33929__$1;
(statearr_33947_36141[(2)] = null);

(statearr_33947_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (5))){
var inst_33899 = cljs.core.async.close_BANG_(jobs);
var state_33929__$1 = state_33929;
var statearr_33948_36142 = state_33929__$1;
(statearr_33948_36142[(2)] = inst_33899);

(statearr_33948_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (8))){
var inst_33902 = (state_33929[(8)]);
var inst_33918 = (state_33929[(2)]);
var state_33929__$1 = (function (){var statearr_33949 = state_33929;
(statearr_33949[(10)] = inst_33918);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33929__$1,(9),results,inst_33902);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0 = (function (){
var statearr_33950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__);

(statearr_33950[(1)] = (1));

return statearr_33950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1 = (function (state_33929){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_33929);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e33951){var ex__33295__auto__ = e33951;
var statearr_33952_36150 = state_33929;
(statearr_33952_36150[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_33929[(4)]))){
var statearr_33957_36151 = state_33929;
(statearr_33957_36151[(1)] = cljs.core.first((state_33929[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36152 = state_33929;
state_33929 = G__36152;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = function(state_33929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1.call(this,state_33929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_33969 = f__33481__auto__();
(statearr_33969[(6)] = c__33480__auto___36128);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


var c__33480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34014){
var state_val_34015 = (state_34014[(1)]);
if((state_val_34015 === (7))){
var inst_34010 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34018_36153 = state_34014__$1;
(statearr_34018_36153[(2)] = inst_34010);

(statearr_34018_36153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (20))){
var state_34014__$1 = state_34014;
var statearr_34020_36154 = state_34014__$1;
(statearr_34020_36154[(2)] = null);

(statearr_34020_36154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (1))){
var state_34014__$1 = state_34014;
var statearr_34021_36156 = state_34014__$1;
(statearr_34021_36156[(2)] = null);

(statearr_34021_36156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (4))){
var inst_33977 = (state_34014[(7)]);
var inst_33977__$1 = (state_34014[(2)]);
var inst_33978 = (inst_33977__$1 == null);
var state_34014__$1 = (function (){var statearr_34022 = state_34014;
(statearr_34022[(7)] = inst_33977__$1);

return statearr_34022;
})();
if(cljs.core.truth_(inst_33978)){
var statearr_34023_36157 = state_34014__$1;
(statearr_34023_36157[(1)] = (5));

} else {
var statearr_34024_36159 = state_34014__$1;
(statearr_34024_36159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (15))){
var inst_33991 = (state_34014[(8)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34014__$1,(18),to,inst_33991);
} else {
if((state_val_34015 === (21))){
var inst_34005 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34025_36161 = state_34014__$1;
(statearr_34025_36161[(2)] = inst_34005);

(statearr_34025_36161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (13))){
var inst_34007 = (state_34014[(2)]);
var state_34014__$1 = (function (){var statearr_34027 = state_34014;
(statearr_34027[(9)] = inst_34007);

return statearr_34027;
})();
var statearr_34029_36163 = state_34014__$1;
(statearr_34029_36163[(2)] = null);

(statearr_34029_36163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (6))){
var inst_33977 = (state_34014[(7)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34014__$1,(11),inst_33977);
} else {
if((state_val_34015 === (17))){
var inst_34000 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_34000)){
var statearr_34030_36165 = state_34014__$1;
(statearr_34030_36165[(1)] = (19));

} else {
var statearr_34031_36166 = state_34014__$1;
(statearr_34031_36166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (3))){
var inst_34012 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34014__$1,inst_34012);
} else {
if((state_val_34015 === (12))){
var inst_33987 = (state_34014[(10)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34014__$1,(14),inst_33987);
} else {
if((state_val_34015 === (2))){
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34014__$1,(4),results);
} else {
if((state_val_34015 === (19))){
var state_34014__$1 = state_34014;
var statearr_34035_36168 = state_34014__$1;
(statearr_34035_36168[(2)] = null);

(statearr_34035_36168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (11))){
var inst_33987 = (state_34014[(2)]);
var state_34014__$1 = (function (){var statearr_34045 = state_34014;
(statearr_34045[(10)] = inst_33987);

return statearr_34045;
})();
var statearr_34050_36173 = state_34014__$1;
(statearr_34050_36173[(2)] = null);

(statearr_34050_36173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (9))){
var state_34014__$1 = state_34014;
var statearr_34059_36179 = state_34014__$1;
(statearr_34059_36179[(2)] = null);

(statearr_34059_36179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (5))){
var state_34014__$1 = state_34014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34060_36180 = state_34014__$1;
(statearr_34060_36180[(1)] = (8));

} else {
var statearr_34061_36181 = state_34014__$1;
(statearr_34061_36181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (14))){
var inst_33991 = (state_34014[(8)]);
var inst_33993 = (state_34014[(11)]);
var inst_33991__$1 = (state_34014[(2)]);
var inst_33992 = (inst_33991__$1 == null);
var inst_33993__$1 = cljs.core.not(inst_33992);
var state_34014__$1 = (function (){var statearr_34062 = state_34014;
(statearr_34062[(8)] = inst_33991__$1);

(statearr_34062[(11)] = inst_33993__$1);

return statearr_34062;
})();
if(inst_33993__$1){
var statearr_34063_36183 = state_34014__$1;
(statearr_34063_36183[(1)] = (15));

} else {
var statearr_34064_36184 = state_34014__$1;
(statearr_34064_36184[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (16))){
var inst_33993 = (state_34014[(11)]);
var state_34014__$1 = state_34014;
var statearr_34065_36185 = state_34014__$1;
(statearr_34065_36185[(2)] = inst_33993);

(statearr_34065_36185[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (10))){
var inst_33984 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34067_36186 = state_34014__$1;
(statearr_34067_36186[(2)] = inst_33984);

(statearr_34067_36186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (18))){
var inst_33997 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34068_36187 = state_34014__$1;
(statearr_34068_36187[(2)] = inst_33997);

(statearr_34068_36187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (8))){
var inst_33981 = cljs.core.async.close_BANG_(to);
var state_34014__$1 = state_34014;
var statearr_34069_36192 = state_34014__$1;
(statearr_34069_36192[(2)] = inst_33981);

(statearr_34069_36192[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1 = (function (state_34014){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34014);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34071){var ex__33295__auto__ = e34071;
var statearr_34072_36193 = state_34014;
(statearr_34072_36193[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34014[(4)]))){
var statearr_34073_36194 = state_34014;
(statearr_34073_36194[(1)] = cljs.core.first((state_34014[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36195 = state_34014;
state_34014 = G__36195;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__ = function(state_34014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1.call(this,state_34014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33292__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34075 = f__33481__auto__();
(statearr_34075[(6)] = c__33480__auto__);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

return c__33480__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34077 = arguments.length;
switch (G__34077) {
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
var G__34100 = arguments.length;
switch (G__34100) {
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
var G__34104 = arguments.length;
switch (G__34104) {
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
var c__33480__auto___36218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34131){
var state_val_34132 = (state_34131[(1)]);
if((state_val_34132 === (7))){
var inst_34127 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34133_36219 = state_34131__$1;
(statearr_34133_36219[(2)] = inst_34127);

(statearr_34133_36219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (1))){
var state_34131__$1 = state_34131;
var statearr_34134_36223 = state_34131__$1;
(statearr_34134_36223[(2)] = null);

(statearr_34134_36223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (4))){
var inst_34107 = (state_34131[(7)]);
var inst_34107__$1 = (state_34131[(2)]);
var inst_34108 = (inst_34107__$1 == null);
var state_34131__$1 = (function (){var statearr_34135 = state_34131;
(statearr_34135[(7)] = inst_34107__$1);

return statearr_34135;
})();
if(cljs.core.truth_(inst_34108)){
var statearr_34136_36225 = state_34131__$1;
(statearr_34136_36225[(1)] = (5));

} else {
var statearr_34138_36226 = state_34131__$1;
(statearr_34138_36226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (13))){
var state_34131__$1 = state_34131;
var statearr_34139_36227 = state_34131__$1;
(statearr_34139_36227[(2)] = null);

(statearr_34139_36227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (6))){
var inst_34107 = (state_34131[(7)]);
var inst_34114 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34107) : p.call(null,inst_34107));
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34114)){
var statearr_34140_36228 = state_34131__$1;
(statearr_34140_36228[(1)] = (9));

} else {
var statearr_34141_36229 = state_34131__$1;
(statearr_34141_36229[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (3))){
var inst_34129 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34131__$1,inst_34129);
} else {
if((state_val_34132 === (12))){
var state_34131__$1 = state_34131;
var statearr_34142_36231 = state_34131__$1;
(statearr_34142_36231[(2)] = null);

(statearr_34142_36231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (2))){
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34131__$1,(4),ch);
} else {
if((state_val_34132 === (11))){
var inst_34107 = (state_34131[(7)]);
var inst_34118 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34131__$1,(8),inst_34118,inst_34107);
} else {
if((state_val_34132 === (9))){
var state_34131__$1 = state_34131;
var statearr_34144_36233 = state_34131__$1;
(statearr_34144_36233[(2)] = tc);

(statearr_34144_36233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (5))){
var inst_34110 = cljs.core.async.close_BANG_(tc);
var inst_34111 = cljs.core.async.close_BANG_(fc);
var state_34131__$1 = (function (){var statearr_34145 = state_34131;
(statearr_34145[(8)] = inst_34110);

return statearr_34145;
})();
var statearr_34146_36238 = state_34131__$1;
(statearr_34146_36238[(2)] = inst_34111);

(statearr_34146_36238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (14))){
var inst_34125 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34147_36243 = state_34131__$1;
(statearr_34147_36243[(2)] = inst_34125);

(statearr_34147_36243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (10))){
var state_34131__$1 = state_34131;
var statearr_34148_36253 = state_34131__$1;
(statearr_34148_36253[(2)] = fc);

(statearr_34148_36253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (8))){
var inst_34120 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34120)){
var statearr_34149_36254 = state_34131__$1;
(statearr_34149_36254[(1)] = (12));

} else {
var statearr_34150_36255 = state_34131__$1;
(statearr_34150_36255[(1)] = (13));

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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_34151 = [null,null,null,null,null,null,null,null,null];
(statearr_34151[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_34151[(1)] = (1));

return statearr_34151;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_34131){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34131);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34153){var ex__33295__auto__ = e34153;
var statearr_34154_36263 = state_34131;
(statearr_34154_36263[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34131[(4)]))){
var statearr_34155_36264 = state_34131;
(statearr_34155_36264[(1)] = cljs.core.first((state_34131[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36265 = state_34131;
state_34131 = G__36265;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_34131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_34131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34156 = f__33481__auto__();
(statearr_34156[(6)] = c__33480__auto___36218);

return statearr_34156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
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
var c__33480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34179){
var state_val_34180 = (state_34179[(1)]);
if((state_val_34180 === (7))){
var inst_34175 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34182_36284 = state_34179__$1;
(statearr_34182_36284[(2)] = inst_34175);

(statearr_34182_36284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (1))){
var inst_34158 = init;
var inst_34159 = inst_34158;
var state_34179__$1 = (function (){var statearr_34183 = state_34179;
(statearr_34183[(7)] = inst_34159);

return statearr_34183;
})();
var statearr_34184_36296 = state_34179__$1;
(statearr_34184_36296[(2)] = null);

(statearr_34184_36296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (4))){
var inst_34162 = (state_34179[(8)]);
var inst_34162__$1 = (state_34179[(2)]);
var inst_34163 = (inst_34162__$1 == null);
var state_34179__$1 = (function (){var statearr_34185 = state_34179;
(statearr_34185[(8)] = inst_34162__$1);

return statearr_34185;
})();
if(cljs.core.truth_(inst_34163)){
var statearr_34186_36312 = state_34179__$1;
(statearr_34186_36312[(1)] = (5));

} else {
var statearr_34187_36313 = state_34179__$1;
(statearr_34187_36313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (6))){
var inst_34166 = (state_34179[(9)]);
var inst_34159 = (state_34179[(7)]);
var inst_34162 = (state_34179[(8)]);
var inst_34166__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34159,inst_34162) : f.call(null,inst_34159,inst_34162));
var inst_34167 = cljs.core.reduced_QMARK_(inst_34166__$1);
var state_34179__$1 = (function (){var statearr_34188 = state_34179;
(statearr_34188[(9)] = inst_34166__$1);

return statearr_34188;
})();
if(inst_34167){
var statearr_34190_36320 = state_34179__$1;
(statearr_34190_36320[(1)] = (8));

} else {
var statearr_34191_36324 = state_34179__$1;
(statearr_34191_36324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (3))){
var inst_34177 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34179__$1,inst_34177);
} else {
if((state_val_34180 === (2))){
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34179__$1,(4),ch);
} else {
if((state_val_34180 === (9))){
var inst_34166 = (state_34179[(9)]);
var inst_34159 = inst_34166;
var state_34179__$1 = (function (){var statearr_34192 = state_34179;
(statearr_34192[(7)] = inst_34159);

return statearr_34192;
})();
var statearr_34193_36332 = state_34179__$1;
(statearr_34193_36332[(2)] = null);

(statearr_34193_36332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (5))){
var inst_34159 = (state_34179[(7)]);
var state_34179__$1 = state_34179;
var statearr_34195_36340 = state_34179__$1;
(statearr_34195_36340[(2)] = inst_34159);

(statearr_34195_36340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (10))){
var inst_34173 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34196_36348 = state_34179__$1;
(statearr_34196_36348[(2)] = inst_34173);

(statearr_34196_36348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (8))){
var inst_34166 = (state_34179[(9)]);
var inst_34169 = cljs.core.deref(inst_34166);
var state_34179__$1 = state_34179;
var statearr_34197_36357 = state_34179__$1;
(statearr_34197_36357[(2)] = inst_34169);

(statearr_34197_36357[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33292__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33292__auto____0 = (function (){
var statearr_34198 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34198[(0)] = cljs$core$async$reduce_$_state_machine__33292__auto__);

(statearr_34198[(1)] = (1));

return statearr_34198;
});
var cljs$core$async$reduce_$_state_machine__33292__auto____1 = (function (state_34179){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34179);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34200){var ex__33295__auto__ = e34200;
var statearr_34201_36368 = state_34179;
(statearr_34201_36368[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34179[(4)]))){
var statearr_34202_36369 = state_34179;
(statearr_34202_36369[(1)] = cljs.core.first((state_34179[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36370 = state_34179;
state_34179 = G__36370;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33292__auto__ = function(state_34179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33292__auto____1.call(this,state_34179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33292__auto____0;
cljs$core$async$reduce_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33292__auto____1;
return cljs$core$async$reduce_$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34203 = f__33481__auto__();
(statearr_34203[(6)] = c__33480__auto__);

return statearr_34203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

return c__33480__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34210){
var state_val_34211 = (state_34210[(1)]);
if((state_val_34211 === (1))){
var inst_34205 = cljs.core.async.reduce(f__$1,init,ch);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34210__$1,(2),inst_34205);
} else {
if((state_val_34211 === (2))){
var inst_34207 = (state_34210[(2)]);
var inst_34208 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34207) : f__$1.call(null,inst_34207));
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34210__$1,inst_34208);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33292__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33292__auto____0 = (function (){
var statearr_34213 = [null,null,null,null,null,null,null];
(statearr_34213[(0)] = cljs$core$async$transduce_$_state_machine__33292__auto__);

(statearr_34213[(1)] = (1));

return statearr_34213;
});
var cljs$core$async$transduce_$_state_machine__33292__auto____1 = (function (state_34210){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34210);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34214){var ex__33295__auto__ = e34214;
var statearr_34215_36379 = state_34210;
(statearr_34215_36379[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34210[(4)]))){
var statearr_34216_36380 = state_34210;
(statearr_34216_36380[(1)] = cljs.core.first((state_34210[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36381 = state_34210;
state_34210 = G__36381;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33292__auto__ = function(state_34210){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33292__auto____1.call(this,state_34210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33292__auto____0;
cljs$core$async$transduce_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33292__auto____1;
return cljs$core$async$transduce_$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34217 = f__33481__auto__();
(statearr_34217[(6)] = c__33480__auto__);

return statearr_34217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

return c__33480__auto__;
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
var G__34220 = arguments.length;
switch (G__34220) {
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
var c__33480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34246){
var state_val_34247 = (state_34246[(1)]);
if((state_val_34247 === (7))){
var inst_34228 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34249_36387 = state_34246__$1;
(statearr_34249_36387[(2)] = inst_34228);

(statearr_34249_36387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (1))){
var inst_34222 = cljs.core.seq(coll);
var inst_34223 = inst_34222;
var state_34246__$1 = (function (){var statearr_34250 = state_34246;
(statearr_34250[(7)] = inst_34223);

return statearr_34250;
})();
var statearr_34251_36395 = state_34246__$1;
(statearr_34251_36395[(2)] = null);

(statearr_34251_36395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (4))){
var inst_34223 = (state_34246[(7)]);
var inst_34226 = cljs.core.first(inst_34223);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34246__$1,(7),ch,inst_34226);
} else {
if((state_val_34247 === (13))){
var inst_34240 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34253_36398 = state_34246__$1;
(statearr_34253_36398[(2)] = inst_34240);

(statearr_34253_36398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (6))){
var inst_34231 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34231)){
var statearr_34254_36400 = state_34246__$1;
(statearr_34254_36400[(1)] = (8));

} else {
var statearr_34255_36402 = state_34246__$1;
(statearr_34255_36402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (3))){
var inst_34244 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34246__$1,inst_34244);
} else {
if((state_val_34247 === (12))){
var state_34246__$1 = state_34246;
var statearr_34257_36403 = state_34246__$1;
(statearr_34257_36403[(2)] = null);

(statearr_34257_36403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (2))){
var inst_34223 = (state_34246[(7)]);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34223)){
var statearr_34258_36404 = state_34246__$1;
(statearr_34258_36404[(1)] = (4));

} else {
var statearr_34259_36405 = state_34246__$1;
(statearr_34259_36405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (11))){
var inst_34237 = cljs.core.async.close_BANG_(ch);
var state_34246__$1 = state_34246;
var statearr_34260_36409 = state_34246__$1;
(statearr_34260_36409[(2)] = inst_34237);

(statearr_34260_36409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (9))){
var state_34246__$1 = state_34246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34261_36411 = state_34246__$1;
(statearr_34261_36411[(1)] = (11));

} else {
var statearr_34262_36412 = state_34246__$1;
(statearr_34262_36412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (5))){
var inst_34223 = (state_34246[(7)]);
var state_34246__$1 = state_34246;
var statearr_34264_36413 = state_34246__$1;
(statearr_34264_36413[(2)] = inst_34223);

(statearr_34264_36413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (10))){
var inst_34242 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34265_36415 = state_34246__$1;
(statearr_34265_36415[(2)] = inst_34242);

(statearr_34265_36415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (8))){
var inst_34223 = (state_34246[(7)]);
var inst_34233 = cljs.core.next(inst_34223);
var inst_34223__$1 = inst_34233;
var state_34246__$1 = (function (){var statearr_34266 = state_34246;
(statearr_34266[(7)] = inst_34223__$1);

return statearr_34266;
})();
var statearr_34267_36416 = state_34246__$1;
(statearr_34267_36416[(2)] = null);

(statearr_34267_36416[(1)] = (2));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_34269 = [null,null,null,null,null,null,null,null];
(statearr_34269[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_34269[(1)] = (1));

return statearr_34269;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_34246){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34246);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34270){var ex__33295__auto__ = e34270;
var statearr_34271_36420 = state_34246;
(statearr_34271_36420[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34246[(4)]))){
var statearr_34272_36421 = state_34246;
(statearr_34272_36421[(1)] = cljs.core.first((state_34246[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36422 = state_34246;
state_34246 = G__36422;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_34246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_34246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34273 = f__33481__auto__();
(statearr_34273[(6)] = c__33480__auto__);

return statearr_34273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

return c__33480__auto__;
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
var G__34277 = arguments.length;
switch (G__34277) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36432 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36432(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36437 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36437(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36439 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36439(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36446 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36446(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34284 = (function (ch,cs,meta34285){
this.ch = ch;
this.cs = cs;
this.meta34285 = meta34285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34286,meta34285__$1){
var self__ = this;
var _34286__$1 = this;
return (new cljs.core.async.t_cljs$core$async34284(self__.ch,self__.cs,meta34285__$1));
}));

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34286){
var self__ = this;
var _34286__$1 = this;
return self__.meta34285;
}));

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34285","meta34285",-849061741,null)], null);
}));

(cljs.core.async.t_cljs$core$async34284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34284");

(cljs.core.async.t_cljs$core$async34284.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34284.
 */
cljs.core.async.__GT_t_cljs$core$async34284 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34284(ch__$1,cs__$1,meta34285){
return (new cljs.core.async.t_cljs$core$async34284(ch__$1,cs__$1,meta34285));
});

}

return (new cljs.core.async.t_cljs$core$async34284(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33480__auto___36459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34426){
var state_val_34427 = (state_34426[(1)]);
if((state_val_34427 === (7))){
var inst_34422 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34428_36464 = state_34426__$1;
(statearr_34428_36464[(2)] = inst_34422);

(statearr_34428_36464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (20))){
var inst_34323 = (state_34426[(7)]);
var inst_34336 = cljs.core.first(inst_34323);
var inst_34337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34336,(0),null);
var inst_34338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34336,(1),null);
var state_34426__$1 = (function (){var statearr_34431 = state_34426;
(statearr_34431[(8)] = inst_34337);

return statearr_34431;
})();
if(cljs.core.truth_(inst_34338)){
var statearr_34432_36465 = state_34426__$1;
(statearr_34432_36465[(1)] = (22));

} else {
var statearr_34433_36466 = state_34426__$1;
(statearr_34433_36466[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (27))){
var inst_34373 = (state_34426[(9)]);
var inst_34291 = (state_34426[(10)]);
var inst_34368 = (state_34426[(11)]);
var inst_34366 = (state_34426[(12)]);
var inst_34373__$1 = cljs.core._nth(inst_34366,inst_34368);
var inst_34374 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34373__$1,inst_34291,done);
var state_34426__$1 = (function (){var statearr_34434 = state_34426;
(statearr_34434[(9)] = inst_34373__$1);

return statearr_34434;
})();
if(cljs.core.truth_(inst_34374)){
var statearr_34435_36467 = state_34426__$1;
(statearr_34435_36467[(1)] = (30));

} else {
var statearr_34436_36468 = state_34426__$1;
(statearr_34436_36468[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (1))){
var state_34426__$1 = state_34426;
var statearr_34437_36474 = state_34426__$1;
(statearr_34437_36474[(2)] = null);

(statearr_34437_36474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (24))){
var inst_34323 = (state_34426[(7)]);
var inst_34343 = (state_34426[(2)]);
var inst_34344 = cljs.core.next(inst_34323);
var inst_34301 = inst_34344;
var inst_34302 = null;
var inst_34303 = (0);
var inst_34304 = (0);
var state_34426__$1 = (function (){var statearr_34438 = state_34426;
(statearr_34438[(13)] = inst_34301);

(statearr_34438[(14)] = inst_34302);

(statearr_34438[(15)] = inst_34303);

(statearr_34438[(16)] = inst_34343);

(statearr_34438[(17)] = inst_34304);

return statearr_34438;
})();
var statearr_34439_36486 = state_34426__$1;
(statearr_34439_36486[(2)] = null);

(statearr_34439_36486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (39))){
var state_34426__$1 = state_34426;
var statearr_34445_36487 = state_34426__$1;
(statearr_34445_36487[(2)] = null);

(statearr_34445_36487[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (4))){
var inst_34291 = (state_34426[(10)]);
var inst_34291__$1 = (state_34426[(2)]);
var inst_34293 = (inst_34291__$1 == null);
var state_34426__$1 = (function (){var statearr_34446 = state_34426;
(statearr_34446[(10)] = inst_34291__$1);

return statearr_34446;
})();
if(cljs.core.truth_(inst_34293)){
var statearr_34447_36492 = state_34426__$1;
(statearr_34447_36492[(1)] = (5));

} else {
var statearr_34448_36493 = state_34426__$1;
(statearr_34448_36493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (15))){
var inst_34301 = (state_34426[(13)]);
var inst_34302 = (state_34426[(14)]);
var inst_34303 = (state_34426[(15)]);
var inst_34304 = (state_34426[(17)]);
var inst_34319 = (state_34426[(2)]);
var inst_34320 = (inst_34304 + (1));
var tmp34440 = inst_34301;
var tmp34441 = inst_34302;
var tmp34442 = inst_34303;
var inst_34301__$1 = tmp34440;
var inst_34302__$1 = tmp34441;
var inst_34303__$1 = tmp34442;
var inst_34304__$1 = inst_34320;
var state_34426__$1 = (function (){var statearr_34449 = state_34426;
(statearr_34449[(13)] = inst_34301__$1);

(statearr_34449[(14)] = inst_34302__$1);

(statearr_34449[(18)] = inst_34319);

(statearr_34449[(15)] = inst_34303__$1);

(statearr_34449[(17)] = inst_34304__$1);

return statearr_34449;
})();
var statearr_34450_36498 = state_34426__$1;
(statearr_34450_36498[(2)] = null);

(statearr_34450_36498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (21))){
var inst_34347 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34454_36499 = state_34426__$1;
(statearr_34454_36499[(2)] = inst_34347);

(statearr_34454_36499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (31))){
var inst_34373 = (state_34426[(9)]);
var inst_34378 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34373);
var state_34426__$1 = state_34426;
var statearr_34455_36500 = state_34426__$1;
(statearr_34455_36500[(2)] = inst_34378);

(statearr_34455_36500[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (32))){
var inst_34365 = (state_34426[(19)]);
var inst_34367 = (state_34426[(20)]);
var inst_34368 = (state_34426[(11)]);
var inst_34366 = (state_34426[(12)]);
var inst_34380 = (state_34426[(2)]);
var inst_34381 = (inst_34368 + (1));
var tmp34451 = inst_34365;
var tmp34452 = inst_34367;
var tmp34453 = inst_34366;
var inst_34365__$1 = tmp34451;
var inst_34366__$1 = tmp34453;
var inst_34367__$1 = tmp34452;
var inst_34368__$1 = inst_34381;
var state_34426__$1 = (function (){var statearr_34456 = state_34426;
(statearr_34456[(21)] = inst_34380);

(statearr_34456[(19)] = inst_34365__$1);

(statearr_34456[(20)] = inst_34367__$1);

(statearr_34456[(11)] = inst_34368__$1);

(statearr_34456[(12)] = inst_34366__$1);

return statearr_34456;
})();
var statearr_34457_36506 = state_34426__$1;
(statearr_34457_36506[(2)] = null);

(statearr_34457_36506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (40))){
var inst_34393 = (state_34426[(22)]);
var inst_34397 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34393);
var state_34426__$1 = state_34426;
var statearr_34458_36507 = state_34426__$1;
(statearr_34458_36507[(2)] = inst_34397);

(statearr_34458_36507[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (33))){
var inst_34384 = (state_34426[(23)]);
var inst_34386 = cljs.core.chunked_seq_QMARK_(inst_34384);
var state_34426__$1 = state_34426;
if(inst_34386){
var statearr_34462_36509 = state_34426__$1;
(statearr_34462_36509[(1)] = (36));

} else {
var statearr_34463_36510 = state_34426__$1;
(statearr_34463_36510[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (13))){
var inst_34313 = (state_34426[(24)]);
var inst_34316 = cljs.core.async.close_BANG_(inst_34313);
var state_34426__$1 = state_34426;
var statearr_34467_36512 = state_34426__$1;
(statearr_34467_36512[(2)] = inst_34316);

(statearr_34467_36512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (22))){
var inst_34337 = (state_34426[(8)]);
var inst_34340 = cljs.core.async.close_BANG_(inst_34337);
var state_34426__$1 = state_34426;
var statearr_34471_36517 = state_34426__$1;
(statearr_34471_36517[(2)] = inst_34340);

(statearr_34471_36517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (36))){
var inst_34384 = (state_34426[(23)]);
var inst_34388 = cljs.core.chunk_first(inst_34384);
var inst_34389 = cljs.core.chunk_rest(inst_34384);
var inst_34390 = cljs.core.count(inst_34388);
var inst_34365 = inst_34389;
var inst_34366 = inst_34388;
var inst_34367 = inst_34390;
var inst_34368 = (0);
var state_34426__$1 = (function (){var statearr_34472 = state_34426;
(statearr_34472[(19)] = inst_34365);

(statearr_34472[(20)] = inst_34367);

(statearr_34472[(11)] = inst_34368);

(statearr_34472[(12)] = inst_34366);

return statearr_34472;
})();
var statearr_34473_36518 = state_34426__$1;
(statearr_34473_36518[(2)] = null);

(statearr_34473_36518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (41))){
var inst_34384 = (state_34426[(23)]);
var inst_34399 = (state_34426[(2)]);
var inst_34401 = cljs.core.next(inst_34384);
var inst_34365 = inst_34401;
var inst_34366 = null;
var inst_34367 = (0);
var inst_34368 = (0);
var state_34426__$1 = (function (){var statearr_34475 = state_34426;
(statearr_34475[(19)] = inst_34365);

(statearr_34475[(20)] = inst_34367);

(statearr_34475[(11)] = inst_34368);

(statearr_34475[(25)] = inst_34399);

(statearr_34475[(12)] = inst_34366);

return statearr_34475;
})();
var statearr_34478_36524 = state_34426__$1;
(statearr_34478_36524[(2)] = null);

(statearr_34478_36524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (43))){
var state_34426__$1 = state_34426;
var statearr_34480_36530 = state_34426__$1;
(statearr_34480_36530[(2)] = null);

(statearr_34480_36530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (29))){
var inst_34409 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34482_36541 = state_34426__$1;
(statearr_34482_36541[(2)] = inst_34409);

(statearr_34482_36541[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (44))){
var inst_34419 = (state_34426[(2)]);
var state_34426__$1 = (function (){var statearr_34486 = state_34426;
(statearr_34486[(26)] = inst_34419);

return statearr_34486;
})();
var statearr_34487_36547 = state_34426__$1;
(statearr_34487_36547[(2)] = null);

(statearr_34487_36547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (6))){
var inst_34357 = (state_34426[(27)]);
var inst_34356 = cljs.core.deref(cs);
var inst_34357__$1 = cljs.core.keys(inst_34356);
var inst_34358 = cljs.core.count(inst_34357__$1);
var inst_34359 = cljs.core.reset_BANG_(dctr,inst_34358);
var inst_34364 = cljs.core.seq(inst_34357__$1);
var inst_34365 = inst_34364;
var inst_34366 = null;
var inst_34367 = (0);
var inst_34368 = (0);
var state_34426__$1 = (function (){var statearr_34492 = state_34426;
(statearr_34492[(28)] = inst_34359);

(statearr_34492[(19)] = inst_34365);

(statearr_34492[(27)] = inst_34357__$1);

(statearr_34492[(20)] = inst_34367);

(statearr_34492[(11)] = inst_34368);

(statearr_34492[(12)] = inst_34366);

return statearr_34492;
})();
var statearr_34494_36550 = state_34426__$1;
(statearr_34494_36550[(2)] = null);

(statearr_34494_36550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (28))){
var inst_34384 = (state_34426[(23)]);
var inst_34365 = (state_34426[(19)]);
var inst_34384__$1 = cljs.core.seq(inst_34365);
var state_34426__$1 = (function (){var statearr_34497 = state_34426;
(statearr_34497[(23)] = inst_34384__$1);

return statearr_34497;
})();
if(inst_34384__$1){
var statearr_34499_36555 = state_34426__$1;
(statearr_34499_36555[(1)] = (33));

} else {
var statearr_34500_36562 = state_34426__$1;
(statearr_34500_36562[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (25))){
var inst_34367 = (state_34426[(20)]);
var inst_34368 = (state_34426[(11)]);
var inst_34370 = (inst_34368 < inst_34367);
var inst_34371 = inst_34370;
var state_34426__$1 = state_34426;
if(cljs.core.truth_(inst_34371)){
var statearr_34502_36563 = state_34426__$1;
(statearr_34502_36563[(1)] = (27));

} else {
var statearr_34504_36564 = state_34426__$1;
(statearr_34504_36564[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (34))){
var state_34426__$1 = state_34426;
var statearr_34507_36569 = state_34426__$1;
(statearr_34507_36569[(2)] = null);

(statearr_34507_36569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (17))){
var state_34426__$1 = state_34426;
var statearr_34509_36572 = state_34426__$1;
(statearr_34509_36572[(2)] = null);

(statearr_34509_36572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (3))){
var inst_34424 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34426__$1,inst_34424);
} else {
if((state_val_34427 === (12))){
var inst_34352 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34513_36584 = state_34426__$1;
(statearr_34513_36584[(2)] = inst_34352);

(statearr_34513_36584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (2))){
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34426__$1,(4),ch);
} else {
if((state_val_34427 === (23))){
var state_34426__$1 = state_34426;
var statearr_34515_36590 = state_34426__$1;
(statearr_34515_36590[(2)] = null);

(statearr_34515_36590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (35))){
var inst_34407 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34519_36591 = state_34426__$1;
(statearr_34519_36591[(2)] = inst_34407);

(statearr_34519_36591[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (19))){
var inst_34323 = (state_34426[(7)]);
var inst_34328 = cljs.core.chunk_first(inst_34323);
var inst_34329 = cljs.core.chunk_rest(inst_34323);
var inst_34330 = cljs.core.count(inst_34328);
var inst_34301 = inst_34329;
var inst_34302 = inst_34328;
var inst_34303 = inst_34330;
var inst_34304 = (0);
var state_34426__$1 = (function (){var statearr_34523 = state_34426;
(statearr_34523[(13)] = inst_34301);

(statearr_34523[(14)] = inst_34302);

(statearr_34523[(15)] = inst_34303);

(statearr_34523[(17)] = inst_34304);

return statearr_34523;
})();
var statearr_34525_36599 = state_34426__$1;
(statearr_34525_36599[(2)] = null);

(statearr_34525_36599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (11))){
var inst_34301 = (state_34426[(13)]);
var inst_34323 = (state_34426[(7)]);
var inst_34323__$1 = cljs.core.seq(inst_34301);
var state_34426__$1 = (function (){var statearr_34527 = state_34426;
(statearr_34527[(7)] = inst_34323__$1);

return statearr_34527;
})();
if(inst_34323__$1){
var statearr_34531_36607 = state_34426__$1;
(statearr_34531_36607[(1)] = (16));

} else {
var statearr_34532_36609 = state_34426__$1;
(statearr_34532_36609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (9))){
var inst_34354 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34534_36616 = state_34426__$1;
(statearr_34534_36616[(2)] = inst_34354);

(statearr_34534_36616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (5))){
var inst_34299 = cljs.core.deref(cs);
var inst_34300 = cljs.core.seq(inst_34299);
var inst_34301 = inst_34300;
var inst_34302 = null;
var inst_34303 = (0);
var inst_34304 = (0);
var state_34426__$1 = (function (){var statearr_34538 = state_34426;
(statearr_34538[(13)] = inst_34301);

(statearr_34538[(14)] = inst_34302);

(statearr_34538[(15)] = inst_34303);

(statearr_34538[(17)] = inst_34304);

return statearr_34538;
})();
var statearr_34539_36617 = state_34426__$1;
(statearr_34539_36617[(2)] = null);

(statearr_34539_36617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (14))){
var state_34426__$1 = state_34426;
var statearr_34541_36618 = state_34426__$1;
(statearr_34541_36618[(2)] = null);

(statearr_34541_36618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (45))){
var inst_34416 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34545_36619 = state_34426__$1;
(statearr_34545_36619[(2)] = inst_34416);

(statearr_34545_36619[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (26))){
var inst_34357 = (state_34426[(27)]);
var inst_34411 = (state_34426[(2)]);
var inst_34412 = cljs.core.seq(inst_34357);
var state_34426__$1 = (function (){var statearr_34547 = state_34426;
(statearr_34547[(29)] = inst_34411);

return statearr_34547;
})();
if(inst_34412){
var statearr_34550_36622 = state_34426__$1;
(statearr_34550_36622[(1)] = (42));

} else {
var statearr_34551_36623 = state_34426__$1;
(statearr_34551_36623[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (16))){
var inst_34323 = (state_34426[(7)]);
var inst_34325 = cljs.core.chunked_seq_QMARK_(inst_34323);
var state_34426__$1 = state_34426;
if(inst_34325){
var statearr_34553_36624 = state_34426__$1;
(statearr_34553_36624[(1)] = (19));

} else {
var statearr_34555_36625 = state_34426__$1;
(statearr_34555_36625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (38))){
var inst_34404 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34558_36626 = state_34426__$1;
(statearr_34558_36626[(2)] = inst_34404);

(statearr_34558_36626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (30))){
var state_34426__$1 = state_34426;
var statearr_34560_36629 = state_34426__$1;
(statearr_34560_36629[(2)] = null);

(statearr_34560_36629[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (10))){
var inst_34302 = (state_34426[(14)]);
var inst_34304 = (state_34426[(17)]);
var inst_34312 = cljs.core._nth(inst_34302,inst_34304);
var inst_34313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34312,(0),null);
var inst_34314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34312,(1),null);
var state_34426__$1 = (function (){var statearr_34564 = state_34426;
(statearr_34564[(24)] = inst_34313);

return statearr_34564;
})();
if(cljs.core.truth_(inst_34314)){
var statearr_34567_36630 = state_34426__$1;
(statearr_34567_36630[(1)] = (13));

} else {
var statearr_34568_36631 = state_34426__$1;
(statearr_34568_36631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (18))){
var inst_34350 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34570_36634 = state_34426__$1;
(statearr_34570_36634[(2)] = inst_34350);

(statearr_34570_36634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (42))){
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34426__$1,(45),dchan);
} else {
if((state_val_34427 === (37))){
var inst_34384 = (state_34426[(23)]);
var inst_34393 = (state_34426[(22)]);
var inst_34291 = (state_34426[(10)]);
var inst_34393__$1 = cljs.core.first(inst_34384);
var inst_34394 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34393__$1,inst_34291,done);
var state_34426__$1 = (function (){var statearr_34575 = state_34426;
(statearr_34575[(22)] = inst_34393__$1);

return statearr_34575;
})();
if(cljs.core.truth_(inst_34394)){
var statearr_34576_36636 = state_34426__$1;
(statearr_34576_36636[(1)] = (39));

} else {
var statearr_34579_36637 = state_34426__$1;
(statearr_34579_36637[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (8))){
var inst_34303 = (state_34426[(15)]);
var inst_34304 = (state_34426[(17)]);
var inst_34306 = (inst_34304 < inst_34303);
var inst_34307 = inst_34306;
var state_34426__$1 = state_34426;
if(cljs.core.truth_(inst_34307)){
var statearr_34582_36638 = state_34426__$1;
(statearr_34582_36638[(1)] = (10));

} else {
var statearr_34584_36639 = state_34426__$1;
(statearr_34584_36639[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33292__auto__ = null;
var cljs$core$async$mult_$_state_machine__33292__auto____0 = (function (){
var statearr_34590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34590[(0)] = cljs$core$async$mult_$_state_machine__33292__auto__);

(statearr_34590[(1)] = (1));

return statearr_34590;
});
var cljs$core$async$mult_$_state_machine__33292__auto____1 = (function (state_34426){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34426);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34593){var ex__33295__auto__ = e34593;
var statearr_34595_36640 = state_34426;
(statearr_34595_36640[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34426[(4)]))){
var statearr_34596_36641 = state_34426;
(statearr_34596_36641[(1)] = cljs.core.first((state_34426[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36642 = state_34426;
state_34426 = G__36642;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33292__auto__ = function(state_34426){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33292__auto____1.call(this,state_34426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33292__auto____0;
cljs$core$async$mult_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33292__auto____1;
return cljs$core$async$mult_$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34600 = f__33481__auto__();
(statearr_34600[(6)] = c__33480__auto___36459);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
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
var G__34607 = arguments.length;
switch (G__34607) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36648 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36648(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36651 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36651(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36653 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36653(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36654 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36654(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36657 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36657(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36660 = arguments.length;
var i__5770__auto___36661 = (0);
while(true){
if((i__5770__auto___36661 < len__5769__auto___36660)){
args__5775__auto__.push((arguments[i__5770__auto___36661]));

var G__36667 = (i__5770__auto___36661 + (1));
i__5770__auto___36661 = G__36667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34676){
var map__34678 = p__34676;
var map__34678__$1 = cljs.core.__destructure_map(map__34678);
var opts = map__34678__$1;
var statearr_34679_36668 = state;
(statearr_34679_36668[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34683_36669 = state;
(statearr_34683_36669[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34685_36670 = state;
(statearr_34685_36670[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34664){
var G__34666 = cljs.core.first(seq34664);
var seq34664__$1 = cljs.core.next(seq34664);
var G__34667 = cljs.core.first(seq34664__$1);
var seq34664__$2 = cljs.core.next(seq34664__$1);
var G__34668 = cljs.core.first(seq34664__$2);
var seq34664__$3 = cljs.core.next(seq34664__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34666,G__34667,G__34668,seq34664__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34706 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34707){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34707 = meta34707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34708,meta34707__$1){
var self__ = this;
var _34708__$1 = this;
return (new cljs.core.async.t_cljs$core$async34706(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34707__$1));
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34708){
var self__ = this;
var _34708__$1 = this;
return self__.meta34707;
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34706.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34707","meta34707",1697968944,null)], null);
}));

(cljs.core.async.t_cljs$core$async34706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34706");

(cljs.core.async.t_cljs$core$async34706.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34706.
 */
cljs.core.async.__GT_t_cljs$core$async34706 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34706(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34707){
return (new cljs.core.async.t_cljs$core$async34706(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34707));
});

}

return (new cljs.core.async.t_cljs$core$async34706(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33480__auto___36687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_34805){
var state_val_34806 = (state_34805[(1)]);
if((state_val_34806 === (7))){
var inst_34761 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34761)){
var statearr_34811_36688 = state_34805__$1;
(statearr_34811_36688[(1)] = (8));

} else {
var statearr_34812_36689 = state_34805__$1;
(statearr_34812_36689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (20))){
var inst_34753 = (state_34805[(7)]);
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34805__$1,(23),out,inst_34753);
} else {
if((state_val_34806 === (1))){
var inst_34729 = calc_state();
var inst_34730 = cljs.core.__destructure_map(inst_34729);
var inst_34731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34730,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34730,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34730,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34734 = inst_34729;
var state_34805__$1 = (function (){var statearr_34817 = state_34805;
(statearr_34817[(8)] = inst_34734);

(statearr_34817[(9)] = inst_34731);

(statearr_34817[(10)] = inst_34732);

(statearr_34817[(11)] = inst_34733);

return statearr_34817;
})();
var statearr_34818_36693 = state_34805__$1;
(statearr_34818_36693[(2)] = null);

(statearr_34818_36693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (24))){
var inst_34737 = (state_34805[(12)]);
var inst_34734 = inst_34737;
var state_34805__$1 = (function (){var statearr_34820 = state_34805;
(statearr_34820[(8)] = inst_34734);

return statearr_34820;
})();
var statearr_34821_36695 = state_34805__$1;
(statearr_34821_36695[(2)] = null);

(statearr_34821_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (4))){
var inst_34753 = (state_34805[(7)]);
var inst_34756 = (state_34805[(13)]);
var inst_34752 = (state_34805[(2)]);
var inst_34753__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34752,(0),null);
var inst_34754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34752,(1),null);
var inst_34756__$1 = (inst_34753__$1 == null);
var state_34805__$1 = (function (){var statearr_34822 = state_34805;
(statearr_34822[(7)] = inst_34753__$1);

(statearr_34822[(14)] = inst_34754);

(statearr_34822[(13)] = inst_34756__$1);

return statearr_34822;
})();
if(cljs.core.truth_(inst_34756__$1)){
var statearr_34823_36696 = state_34805__$1;
(statearr_34823_36696[(1)] = (5));

} else {
var statearr_34824_36697 = state_34805__$1;
(statearr_34824_36697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (15))){
var inst_34775 = (state_34805[(15)]);
var inst_34738 = (state_34805[(16)]);
var inst_34775__$1 = cljs.core.empty_QMARK_(inst_34738);
var state_34805__$1 = (function (){var statearr_34829 = state_34805;
(statearr_34829[(15)] = inst_34775__$1);

return statearr_34829;
})();
if(inst_34775__$1){
var statearr_34833_36699 = state_34805__$1;
(statearr_34833_36699[(1)] = (17));

} else {
var statearr_34835_36701 = state_34805__$1;
(statearr_34835_36701[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (21))){
var inst_34737 = (state_34805[(12)]);
var inst_34734 = inst_34737;
var state_34805__$1 = (function (){var statearr_34836 = state_34805;
(statearr_34836[(8)] = inst_34734);

return statearr_34836;
})();
var statearr_34837_36702 = state_34805__$1;
(statearr_34837_36702[(2)] = null);

(statearr_34837_36702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (13))){
var inst_34768 = (state_34805[(2)]);
var inst_34769 = calc_state();
var inst_34734 = inst_34769;
var state_34805__$1 = (function (){var statearr_34839 = state_34805;
(statearr_34839[(17)] = inst_34768);

(statearr_34839[(8)] = inst_34734);

return statearr_34839;
})();
var statearr_34842_36703 = state_34805__$1;
(statearr_34842_36703[(2)] = null);

(statearr_34842_36703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (22))){
var inst_34798 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34844_36704 = state_34805__$1;
(statearr_34844_36704[(2)] = inst_34798);

(statearr_34844_36704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (6))){
var inst_34754 = (state_34805[(14)]);
var inst_34759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34754,change);
var state_34805__$1 = state_34805;
var statearr_34848_36705 = state_34805__$1;
(statearr_34848_36705[(2)] = inst_34759);

(statearr_34848_36705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (25))){
var state_34805__$1 = state_34805;
var statearr_34850_36706 = state_34805__$1;
(statearr_34850_36706[(2)] = null);

(statearr_34850_36706[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (17))){
var inst_34743 = (state_34805[(18)]);
var inst_34754 = (state_34805[(14)]);
var inst_34777 = (inst_34743.cljs$core$IFn$_invoke$arity$1 ? inst_34743.cljs$core$IFn$_invoke$arity$1(inst_34754) : inst_34743.call(null,inst_34754));
var inst_34778 = cljs.core.not(inst_34777);
var state_34805__$1 = state_34805;
var statearr_34851_36709 = state_34805__$1;
(statearr_34851_36709[(2)] = inst_34778);

(statearr_34851_36709[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (3))){
var inst_34803 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34805__$1,inst_34803);
} else {
if((state_val_34806 === (12))){
var state_34805__$1 = state_34805;
var statearr_34856_36710 = state_34805__$1;
(statearr_34856_36710[(2)] = null);

(statearr_34856_36710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (2))){
var inst_34737 = (state_34805[(12)]);
var inst_34734 = (state_34805[(8)]);
var inst_34737__$1 = cljs.core.__destructure_map(inst_34734);
var inst_34738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34737__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34737__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34737__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34805__$1 = (function (){var statearr_34857 = state_34805;
(statearr_34857[(12)] = inst_34737__$1);

(statearr_34857[(16)] = inst_34738);

(statearr_34857[(18)] = inst_34743);

return statearr_34857;
})();
return cljs.core.async.ioc_alts_BANG_(state_34805__$1,(4),inst_34744);
} else {
if((state_val_34806 === (23))){
var inst_34789 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34789)){
var statearr_34859_36711 = state_34805__$1;
(statearr_34859_36711[(1)] = (24));

} else {
var statearr_34860_36712 = state_34805__$1;
(statearr_34860_36712[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (19))){
var inst_34781 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34861_36713 = state_34805__$1;
(statearr_34861_36713[(2)] = inst_34781);

(statearr_34861_36713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (11))){
var inst_34754 = (state_34805[(14)]);
var inst_34765 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34754);
var state_34805__$1 = state_34805;
var statearr_34862_36714 = state_34805__$1;
(statearr_34862_36714[(2)] = inst_34765);

(statearr_34862_36714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (9))){
var inst_34772 = (state_34805[(19)]);
var inst_34738 = (state_34805[(16)]);
var inst_34754 = (state_34805[(14)]);
var inst_34772__$1 = (inst_34738.cljs$core$IFn$_invoke$arity$1 ? inst_34738.cljs$core$IFn$_invoke$arity$1(inst_34754) : inst_34738.call(null,inst_34754));
var state_34805__$1 = (function (){var statearr_34870 = state_34805;
(statearr_34870[(19)] = inst_34772__$1);

return statearr_34870;
})();
if(cljs.core.truth_(inst_34772__$1)){
var statearr_34871_36715 = state_34805__$1;
(statearr_34871_36715[(1)] = (14));

} else {
var statearr_34873_36716 = state_34805__$1;
(statearr_34873_36716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (5))){
var inst_34756 = (state_34805[(13)]);
var state_34805__$1 = state_34805;
var statearr_34874_36717 = state_34805__$1;
(statearr_34874_36717[(2)] = inst_34756);

(statearr_34874_36717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (14))){
var inst_34772 = (state_34805[(19)]);
var state_34805__$1 = state_34805;
var statearr_34875_36718 = state_34805__$1;
(statearr_34875_36718[(2)] = inst_34772);

(statearr_34875_36718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (26))){
var inst_34794 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34879_36719 = state_34805__$1;
(statearr_34879_36719[(2)] = inst_34794);

(statearr_34879_36719[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (16))){
var inst_34783 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34783)){
var statearr_34881_36720 = state_34805__$1;
(statearr_34881_36720[(1)] = (20));

} else {
var statearr_34882_36721 = state_34805__$1;
(statearr_34882_36721[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (10))){
var inst_34800 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34886_36722 = state_34805__$1;
(statearr_34886_36722[(2)] = inst_34800);

(statearr_34886_36722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (18))){
var inst_34775 = (state_34805[(15)]);
var state_34805__$1 = state_34805;
var statearr_34888_36723 = state_34805__$1;
(statearr_34888_36723[(2)] = inst_34775);

(statearr_34888_36723[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (8))){
var inst_34753 = (state_34805[(7)]);
var inst_34763 = (inst_34753 == null);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34763)){
var statearr_34889_36724 = state_34805__$1;
(statearr_34889_36724[(1)] = (11));

} else {
var statearr_34890_36725 = state_34805__$1;
(statearr_34890_36725[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__33292__auto__ = null;
var cljs$core$async$mix_$_state_machine__33292__auto____0 = (function (){
var statearr_34895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34895[(0)] = cljs$core$async$mix_$_state_machine__33292__auto__);

(statearr_34895[(1)] = (1));

return statearr_34895;
});
var cljs$core$async$mix_$_state_machine__33292__auto____1 = (function (state_34805){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_34805);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e34896){var ex__33295__auto__ = e34896;
var statearr_34897_36727 = state_34805;
(statearr_34897_36727[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_34805[(4)]))){
var statearr_34898_36728 = state_34805;
(statearr_34898_36728[(1)] = cljs.core.first((state_34805[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36729 = state_34805;
state_34805 = G__36729;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33292__auto__ = function(state_34805){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33292__auto____1.call(this,state_34805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33292__auto____0;
cljs$core$async$mix_$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33292__auto____1;
return cljs$core$async$mix_$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_34900 = f__33481__auto__();
(statearr_34900[(6)] = c__33480__auto___36687);

return statearr_34900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36731 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36731(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36733 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36733(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36737 = (function() {
var G__36738 = null;
var G__36738__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36738__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36738 = function(p,v){
switch(arguments.length){
case 1:
return G__36738__1.call(this,p);
case 2:
return G__36738__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36738.cljs$core$IFn$_invoke$arity$1 = G__36738__1;
G__36738.cljs$core$IFn$_invoke$arity$2 = G__36738__2;
return G__36738;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34927 = arguments.length;
switch (G__34927) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36737(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36737(p,v);
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
var G__34932 = arguments.length;
switch (G__34932) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34930_SHARP_){
if(cljs.core.truth_((p1__34930_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34930_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34930_SHARP_.call(null,topic)))){
return p1__34930_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34930_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34933 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34934){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34934 = meta34934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34935,meta34934__$1){
var self__ = this;
var _34935__$1 = this;
return (new cljs.core.async.t_cljs$core$async34933(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34934__$1));
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34935){
var self__ = this;
var _34935__$1 = this;
return self__.meta34934;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34934","meta34934",549643707,null)], null);
}));

(cljs.core.async.t_cljs$core$async34933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34933");

(cljs.core.async.t_cljs$core$async34933.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34933.
 */
cljs.core.async.__GT_t_cljs$core$async34933 = (function cljs$core$async$__GT_t_cljs$core$async34933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34934){
return (new cljs.core.async.t_cljs$core$async34933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34934));
});

}

return (new cljs.core.async.t_cljs$core$async34933(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33480__auto___36760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35009){
var state_val_35010 = (state_35009[(1)]);
if((state_val_35010 === (7))){
var inst_35005 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35012_36761 = state_35009__$1;
(statearr_35012_36761[(2)] = inst_35005);

(statearr_35012_36761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (20))){
var state_35009__$1 = state_35009;
var statearr_35014_36763 = state_35009__$1;
(statearr_35014_36763[(2)] = null);

(statearr_35014_36763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (1))){
var state_35009__$1 = state_35009;
var statearr_35015_36764 = state_35009__$1;
(statearr_35015_36764[(2)] = null);

(statearr_35015_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (24))){
var inst_34988 = (state_35009[(7)]);
var inst_34997 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34988);
var state_35009__$1 = state_35009;
var statearr_35016_36765 = state_35009__$1;
(statearr_35016_36765[(2)] = inst_34997);

(statearr_35016_36765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (4))){
var inst_34938 = (state_35009[(8)]);
var inst_34938__$1 = (state_35009[(2)]);
var inst_34939 = (inst_34938__$1 == null);
var state_35009__$1 = (function (){var statearr_35017 = state_35009;
(statearr_35017[(8)] = inst_34938__$1);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_35018_36768 = state_35009__$1;
(statearr_35018_36768[(1)] = (5));

} else {
var statearr_35019_36769 = state_35009__$1;
(statearr_35019_36769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (15))){
var inst_34982 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35020_36770 = state_35009__$1;
(statearr_35020_36770[(2)] = inst_34982);

(statearr_35020_36770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (21))){
var inst_35002 = (state_35009[(2)]);
var state_35009__$1 = (function (){var statearr_35022 = state_35009;
(statearr_35022[(9)] = inst_35002);

return statearr_35022;
})();
var statearr_35024_36771 = state_35009__$1;
(statearr_35024_36771[(2)] = null);

(statearr_35024_36771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (13))){
var inst_34962 = (state_35009[(10)]);
var inst_34965 = cljs.core.chunked_seq_QMARK_(inst_34962);
var state_35009__$1 = state_35009;
if(inst_34965){
var statearr_35025_36775 = state_35009__$1;
(statearr_35025_36775[(1)] = (16));

} else {
var statearr_35026_36776 = state_35009__$1;
(statearr_35026_36776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (22))){
var inst_34994 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
if(cljs.core.truth_(inst_34994)){
var statearr_35027_36777 = state_35009__$1;
(statearr_35027_36777[(1)] = (23));

} else {
var statearr_35028_36778 = state_35009__$1;
(statearr_35028_36778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (6))){
var inst_34988 = (state_35009[(7)]);
var inst_34990 = (state_35009[(11)]);
var inst_34938 = (state_35009[(8)]);
var inst_34988__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34938) : topic_fn.call(null,inst_34938));
var inst_34989 = cljs.core.deref(mults);
var inst_34990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34989,inst_34988__$1);
var state_35009__$1 = (function (){var statearr_35029 = state_35009;
(statearr_35029[(7)] = inst_34988__$1);

(statearr_35029[(11)] = inst_34990__$1);

return statearr_35029;
})();
if(cljs.core.truth_(inst_34990__$1)){
var statearr_35030_36779 = state_35009__$1;
(statearr_35030_36779[(1)] = (19));

} else {
var statearr_35031_36780 = state_35009__$1;
(statearr_35031_36780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (25))){
var inst_34999 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35032_36781 = state_35009__$1;
(statearr_35032_36781[(2)] = inst_34999);

(statearr_35032_36781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (17))){
var inst_34962 = (state_35009[(10)]);
var inst_34973 = cljs.core.first(inst_34962);
var inst_34974 = cljs.core.async.muxch_STAR_(inst_34973);
var inst_34975 = cljs.core.async.close_BANG_(inst_34974);
var inst_34976 = cljs.core.next(inst_34962);
var inst_34948 = inst_34976;
var inst_34949 = null;
var inst_34950 = (0);
var inst_34951 = (0);
var state_35009__$1 = (function (){var statearr_35033 = state_35009;
(statearr_35033[(12)] = inst_34951);

(statearr_35033[(13)] = inst_34975);

(statearr_35033[(14)] = inst_34950);

(statearr_35033[(15)] = inst_34949);

(statearr_35033[(16)] = inst_34948);

return statearr_35033;
})();
var statearr_35034_36784 = state_35009__$1;
(statearr_35034_36784[(2)] = null);

(statearr_35034_36784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (3))){
var inst_35007 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35009__$1,inst_35007);
} else {
if((state_val_35010 === (12))){
var inst_34984 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35037_36785 = state_35009__$1;
(statearr_35037_36785[(2)] = inst_34984);

(statearr_35037_36785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (2))){
var state_35009__$1 = state_35009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35009__$1,(4),ch);
} else {
if((state_val_35010 === (23))){
var state_35009__$1 = state_35009;
var statearr_35038_36792 = state_35009__$1;
(statearr_35038_36792[(2)] = null);

(statearr_35038_36792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (19))){
var inst_34990 = (state_35009[(11)]);
var inst_34938 = (state_35009[(8)]);
var inst_34992 = cljs.core.async.muxch_STAR_(inst_34990);
var state_35009__$1 = state_35009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35009__$1,(22),inst_34992,inst_34938);
} else {
if((state_val_35010 === (11))){
var inst_34962 = (state_35009[(10)]);
var inst_34948 = (state_35009[(16)]);
var inst_34962__$1 = cljs.core.seq(inst_34948);
var state_35009__$1 = (function (){var statearr_35043 = state_35009;
(statearr_35043[(10)] = inst_34962__$1);

return statearr_35043;
})();
if(inst_34962__$1){
var statearr_35044_36797 = state_35009__$1;
(statearr_35044_36797[(1)] = (13));

} else {
var statearr_35045_36799 = state_35009__$1;
(statearr_35045_36799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (9))){
var inst_34986 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35047_36800 = state_35009__$1;
(statearr_35047_36800[(2)] = inst_34986);

(statearr_35047_36800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (5))){
var inst_34945 = cljs.core.deref(mults);
var inst_34946 = cljs.core.vals(inst_34945);
var inst_34947 = cljs.core.seq(inst_34946);
var inst_34948 = inst_34947;
var inst_34949 = null;
var inst_34950 = (0);
var inst_34951 = (0);
var state_35009__$1 = (function (){var statearr_35050 = state_35009;
(statearr_35050[(12)] = inst_34951);

(statearr_35050[(14)] = inst_34950);

(statearr_35050[(15)] = inst_34949);

(statearr_35050[(16)] = inst_34948);

return statearr_35050;
})();
var statearr_35051_36804 = state_35009__$1;
(statearr_35051_36804[(2)] = null);

(statearr_35051_36804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (14))){
var state_35009__$1 = state_35009;
var statearr_35057_36805 = state_35009__$1;
(statearr_35057_36805[(2)] = null);

(statearr_35057_36805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (16))){
var inst_34962 = (state_35009[(10)]);
var inst_34968 = cljs.core.chunk_first(inst_34962);
var inst_34969 = cljs.core.chunk_rest(inst_34962);
var inst_34970 = cljs.core.count(inst_34968);
var inst_34948 = inst_34969;
var inst_34949 = inst_34968;
var inst_34950 = inst_34970;
var inst_34951 = (0);
var state_35009__$1 = (function (){var statearr_35058 = state_35009;
(statearr_35058[(12)] = inst_34951);

(statearr_35058[(14)] = inst_34950);

(statearr_35058[(15)] = inst_34949);

(statearr_35058[(16)] = inst_34948);

return statearr_35058;
})();
var statearr_35062_36809 = state_35009__$1;
(statearr_35062_36809[(2)] = null);

(statearr_35062_36809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (10))){
var inst_34951 = (state_35009[(12)]);
var inst_34950 = (state_35009[(14)]);
var inst_34949 = (state_35009[(15)]);
var inst_34948 = (state_35009[(16)]);
var inst_34956 = cljs.core._nth(inst_34949,inst_34951);
var inst_34957 = cljs.core.async.muxch_STAR_(inst_34956);
var inst_34958 = cljs.core.async.close_BANG_(inst_34957);
var inst_34959 = (inst_34951 + (1));
var tmp35054 = inst_34950;
var tmp35055 = inst_34949;
var tmp35056 = inst_34948;
var inst_34948__$1 = tmp35056;
var inst_34949__$1 = tmp35055;
var inst_34950__$1 = tmp35054;
var inst_34951__$1 = inst_34959;
var state_35009__$1 = (function (){var statearr_35063 = state_35009;
(statearr_35063[(12)] = inst_34951__$1);

(statearr_35063[(17)] = inst_34958);

(statearr_35063[(14)] = inst_34950__$1);

(statearr_35063[(15)] = inst_34949__$1);

(statearr_35063[(16)] = inst_34948__$1);

return statearr_35063;
})();
var statearr_35064_36813 = state_35009__$1;
(statearr_35064_36813[(2)] = null);

(statearr_35064_36813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (18))){
var inst_34979 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35065_36815 = state_35009__$1;
(statearr_35065_36815[(2)] = inst_34979);

(statearr_35065_36815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (8))){
var inst_34951 = (state_35009[(12)]);
var inst_34950 = (state_35009[(14)]);
var inst_34953 = (inst_34951 < inst_34950);
var inst_34954 = inst_34953;
var state_35009__$1 = state_35009;
if(cljs.core.truth_(inst_34954)){
var statearr_35073_36818 = state_35009__$1;
(statearr_35073_36818[(1)] = (10));

} else {
var statearr_35074_36822 = state_35009__$1;
(statearr_35074_36822[(1)] = (11));

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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35087[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35087[(1)] = (1));

return statearr_35087;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35009){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35009);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35088){var ex__33295__auto__ = e35088;
var statearr_35089_36825 = state_35009;
(statearr_35089_36825[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35009[(4)]))){
var statearr_35090_36826 = state_35009;
(statearr_35090_36826[(1)] = cljs.core.first((state_35009[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36827 = state_35009;
state_35009 = G__36827;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35101 = f__33481__auto__();
(statearr_35101[(6)] = c__33480__auto___36760);

return statearr_35101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
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
var G__35106 = arguments.length;
switch (G__35106) {
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
var G__35112 = arguments.length;
switch (G__35112) {
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
var G__35120 = arguments.length;
switch (G__35120) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33480__auto___36842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35172){
var state_val_35173 = (state_35172[(1)]);
if((state_val_35173 === (7))){
var state_35172__$1 = state_35172;
var statearr_35174_36843 = state_35172__$1;
(statearr_35174_36843[(2)] = null);

(statearr_35174_36843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (1))){
var state_35172__$1 = state_35172;
var statearr_35175_36844 = state_35172__$1;
(statearr_35175_36844[(2)] = null);

(statearr_35175_36844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (4))){
var inst_35126 = (state_35172[(7)]);
var inst_35125 = (state_35172[(8)]);
var inst_35128 = (inst_35126 < inst_35125);
var state_35172__$1 = state_35172;
if(cljs.core.truth_(inst_35128)){
var statearr_35176_36845 = state_35172__$1;
(statearr_35176_36845[(1)] = (6));

} else {
var statearr_35177_36846 = state_35172__$1;
(statearr_35177_36846[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (15))){
var inst_35155 = (state_35172[(9)]);
var inst_35163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35155);
var state_35172__$1 = state_35172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35172__$1,(17),out,inst_35163);
} else {
if((state_val_35173 === (13))){
var inst_35155 = (state_35172[(9)]);
var inst_35155__$1 = (state_35172[(2)]);
var inst_35156 = cljs.core.some(cljs.core.nil_QMARK_,inst_35155__$1);
var state_35172__$1 = (function (){var statearr_35178 = state_35172;
(statearr_35178[(9)] = inst_35155__$1);

return statearr_35178;
})();
if(cljs.core.truth_(inst_35156)){
var statearr_35179_36847 = state_35172__$1;
(statearr_35179_36847[(1)] = (14));

} else {
var statearr_35180_36848 = state_35172__$1;
(statearr_35180_36848[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (6))){
var state_35172__$1 = state_35172;
var statearr_35181_36849 = state_35172__$1;
(statearr_35181_36849[(2)] = null);

(statearr_35181_36849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (17))){
var inst_35165 = (state_35172[(2)]);
var state_35172__$1 = (function (){var statearr_35188 = state_35172;
(statearr_35188[(10)] = inst_35165);

return statearr_35188;
})();
var statearr_35190_36850 = state_35172__$1;
(statearr_35190_36850[(2)] = null);

(statearr_35190_36850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (3))){
var inst_35170 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35172__$1,inst_35170);
} else {
if((state_val_35173 === (12))){
var _ = (function (){var statearr_35192 = state_35172;
(statearr_35192[(4)] = cljs.core.rest((state_35172[(4)])));

return statearr_35192;
})();
var state_35172__$1 = state_35172;
var ex35187 = (state_35172__$1[(2)]);
var statearr_35193_36851 = state_35172__$1;
(statearr_35193_36851[(5)] = ex35187);


if((ex35187 instanceof Object)){
var statearr_35194_36852 = state_35172__$1;
(statearr_35194_36852[(1)] = (11));

(statearr_35194_36852[(5)] = null);

} else {
throw ex35187;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (2))){
var inst_35124 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35125 = cnt;
var inst_35126 = (0);
var state_35172__$1 = (function (){var statearr_35200 = state_35172;
(statearr_35200[(7)] = inst_35126);

(statearr_35200[(11)] = inst_35124);

(statearr_35200[(8)] = inst_35125);

return statearr_35200;
})();
var statearr_35201_36856 = state_35172__$1;
(statearr_35201_36856[(2)] = null);

(statearr_35201_36856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (11))){
var inst_35132 = (state_35172[(2)]);
var inst_35133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35172__$1 = (function (){var statearr_35202 = state_35172;
(statearr_35202[(12)] = inst_35132);

return statearr_35202;
})();
var statearr_35203_36857 = state_35172__$1;
(statearr_35203_36857[(2)] = inst_35133);

(statearr_35203_36857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (9))){
var inst_35126 = (state_35172[(7)]);
var _ = (function (){var statearr_35204 = state_35172;
(statearr_35204[(4)] = cljs.core.cons((12),(state_35172[(4)])));

return statearr_35204;
})();
var inst_35140 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35126) : chs__$1.call(null,inst_35126));
var inst_35141 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35126) : done.call(null,inst_35126));
var inst_35142 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35140,inst_35141);
var ___$1 = (function (){var statearr_35205 = state_35172;
(statearr_35205[(4)] = cljs.core.rest((state_35172[(4)])));

return statearr_35205;
})();
var state_35172__$1 = state_35172;
var statearr_35206_36861 = state_35172__$1;
(statearr_35206_36861[(2)] = inst_35142);

(statearr_35206_36861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (5))){
var inst_35152 = (state_35172[(2)]);
var state_35172__$1 = (function (){var statearr_35207 = state_35172;
(statearr_35207[(13)] = inst_35152);

return statearr_35207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35172__$1,(13),dchan);
} else {
if((state_val_35173 === (14))){
var inst_35161 = cljs.core.async.close_BANG_(out);
var state_35172__$1 = state_35172;
var statearr_35208_36862 = state_35172__$1;
(statearr_35208_36862[(2)] = inst_35161);

(statearr_35208_36862[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (16))){
var inst_35168 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35209_36863 = state_35172__$1;
(statearr_35209_36863[(2)] = inst_35168);

(statearr_35209_36863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (10))){
var inst_35126 = (state_35172[(7)]);
var inst_35145 = (state_35172[(2)]);
var inst_35146 = (inst_35126 + (1));
var inst_35126__$1 = inst_35146;
var state_35172__$1 = (function (){var statearr_35214 = state_35172;
(statearr_35214[(14)] = inst_35145);

(statearr_35214[(7)] = inst_35126__$1);

return statearr_35214;
})();
var statearr_35215_36864 = state_35172__$1;
(statearr_35215_36864[(2)] = null);

(statearr_35215_36864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (8))){
var inst_35150 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35216_36869 = state_35172__$1;
(statearr_35216_36869[(2)] = inst_35150);

(statearr_35216_36869[(1)] = (5));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35221[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35221[(1)] = (1));

return statearr_35221;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35172){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35172);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35222){var ex__33295__auto__ = e35222;
var statearr_35223_36870 = state_35172;
(statearr_35223_36870[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35172[(4)]))){
var statearr_35224_36871 = state_35172;
(statearr_35224_36871[(1)] = cljs.core.first((state_35172[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_35172;
state_35172 = G__36872;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35225 = f__33481__auto__();
(statearr_35225[(6)] = c__33480__auto___36842);

return statearr_35225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

}

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
var G__35228 = arguments.length;
switch (G__35228) {
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
var c__33480__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35265){
var state_val_35266 = (state_35265[(1)]);
if((state_val_35266 === (7))){
var inst_35241 = (state_35265[(7)]);
var inst_35245 = (state_35265[(8)]);
var inst_35241__$1 = (state_35265[(2)]);
var inst_35245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35241__$1,(0),null);
var inst_35246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35241__$1,(1),null);
var inst_35247 = (inst_35245__$1 == null);
var state_35265__$1 = (function (){var statearr_35267 = state_35265;
(statearr_35267[(7)] = inst_35241__$1);

(statearr_35267[(8)] = inst_35245__$1);

(statearr_35267[(9)] = inst_35246);

return statearr_35267;
})();
if(cljs.core.truth_(inst_35247)){
var statearr_35268_36879 = state_35265__$1;
(statearr_35268_36879[(1)] = (8));

} else {
var statearr_35269_36880 = state_35265__$1;
(statearr_35269_36880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (1))){
var inst_35231 = cljs.core.vec(chs);
var inst_35232 = inst_35231;
var state_35265__$1 = (function (){var statearr_35270 = state_35265;
(statearr_35270[(10)] = inst_35232);

return statearr_35270;
})();
var statearr_35271_36883 = state_35265__$1;
(statearr_35271_36883[(2)] = null);

(statearr_35271_36883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (4))){
var inst_35232 = (state_35265[(10)]);
var state_35265__$1 = state_35265;
return cljs.core.async.ioc_alts_BANG_(state_35265__$1,(7),inst_35232);
} else {
if((state_val_35266 === (6))){
var inst_35261 = (state_35265[(2)]);
var state_35265__$1 = state_35265;
var statearr_35272_36885 = state_35265__$1;
(statearr_35272_36885[(2)] = inst_35261);

(statearr_35272_36885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (3))){
var inst_35263 = (state_35265[(2)]);
var state_35265__$1 = state_35265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35265__$1,inst_35263);
} else {
if((state_val_35266 === (2))){
var inst_35232 = (state_35265[(10)]);
var inst_35234 = cljs.core.count(inst_35232);
var inst_35235 = (inst_35234 > (0));
var state_35265__$1 = state_35265;
if(cljs.core.truth_(inst_35235)){
var statearr_35274_36890 = state_35265__$1;
(statearr_35274_36890[(1)] = (4));

} else {
var statearr_35275_36891 = state_35265__$1;
(statearr_35275_36891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (11))){
var inst_35232 = (state_35265[(10)]);
var inst_35254 = (state_35265[(2)]);
var tmp35273 = inst_35232;
var inst_35232__$1 = tmp35273;
var state_35265__$1 = (function (){var statearr_35276 = state_35265;
(statearr_35276[(10)] = inst_35232__$1);

(statearr_35276[(11)] = inst_35254);

return statearr_35276;
})();
var statearr_35277_36894 = state_35265__$1;
(statearr_35277_36894[(2)] = null);

(statearr_35277_36894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (9))){
var inst_35245 = (state_35265[(8)]);
var state_35265__$1 = state_35265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35265__$1,(11),out,inst_35245);
} else {
if((state_val_35266 === (5))){
var inst_35259 = cljs.core.async.close_BANG_(out);
var state_35265__$1 = state_35265;
var statearr_35278_36896 = state_35265__$1;
(statearr_35278_36896[(2)] = inst_35259);

(statearr_35278_36896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (10))){
var inst_35257 = (state_35265[(2)]);
var state_35265__$1 = state_35265;
var statearr_35279_36897 = state_35265__$1;
(statearr_35279_36897[(2)] = inst_35257);

(statearr_35279_36897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (8))){
var inst_35241 = (state_35265[(7)]);
var inst_35245 = (state_35265[(8)]);
var inst_35232 = (state_35265[(10)]);
var inst_35246 = (state_35265[(9)]);
var inst_35249 = (function (){var cs = inst_35232;
var vec__35237 = inst_35241;
var v = inst_35245;
var c = inst_35246;
return (function (p1__35226_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35226_SHARP_);
});
})();
var inst_35250 = cljs.core.filterv(inst_35249,inst_35232);
var inst_35232__$1 = inst_35250;
var state_35265__$1 = (function (){var statearr_35280 = state_35265;
(statearr_35280[(10)] = inst_35232__$1);

return statearr_35280;
})();
var statearr_35281_36898 = state_35265__$1;
(statearr_35281_36898[(2)] = null);

(statearr_35281_36898[(1)] = (2));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35282[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35282[(1)] = (1));

return statearr_35282;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35265){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35265);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35283){var ex__33295__auto__ = e35283;
var statearr_35284_36903 = state_35265;
(statearr_35284_36903[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35265[(4)]))){
var statearr_35285_36904 = state_35265;
(statearr_35285_36904[(1)] = cljs.core.first((state_35265[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_35265;
state_35265 = G__36905;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35287 = f__33481__auto__();
(statearr_35287[(6)] = c__33480__auto___36874);

return statearr_35287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
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
var G__35292 = arguments.length;
switch (G__35292) {
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
var c__33480__auto___36909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35316){
var state_val_35317 = (state_35316[(1)]);
if((state_val_35317 === (7))){
var inst_35298 = (state_35316[(7)]);
var inst_35298__$1 = (state_35316[(2)]);
var inst_35299 = (inst_35298__$1 == null);
var inst_35300 = cljs.core.not(inst_35299);
var state_35316__$1 = (function (){var statearr_35322 = state_35316;
(statearr_35322[(7)] = inst_35298__$1);

return statearr_35322;
})();
if(inst_35300){
var statearr_35323_36912 = state_35316__$1;
(statearr_35323_36912[(1)] = (8));

} else {
var statearr_35324_36913 = state_35316__$1;
(statearr_35324_36913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (1))){
var inst_35293 = (0);
var state_35316__$1 = (function (){var statearr_35325 = state_35316;
(statearr_35325[(8)] = inst_35293);

return statearr_35325;
})();
var statearr_35326_36914 = state_35316__$1;
(statearr_35326_36914[(2)] = null);

(statearr_35326_36914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (4))){
var state_35316__$1 = state_35316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35316__$1,(7),ch);
} else {
if((state_val_35317 === (6))){
var inst_35311 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35327_36917 = state_35316__$1;
(statearr_35327_36917[(2)] = inst_35311);

(statearr_35327_36917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (3))){
var inst_35313 = (state_35316[(2)]);
var inst_35314 = cljs.core.async.close_BANG_(out);
var state_35316__$1 = (function (){var statearr_35328 = state_35316;
(statearr_35328[(9)] = inst_35313);

return statearr_35328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35316__$1,inst_35314);
} else {
if((state_val_35317 === (2))){
var inst_35293 = (state_35316[(8)]);
var inst_35295 = (inst_35293 < n);
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35295)){
var statearr_35329_36919 = state_35316__$1;
(statearr_35329_36919[(1)] = (4));

} else {
var statearr_35330_36921 = state_35316__$1;
(statearr_35330_36921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (11))){
var inst_35293 = (state_35316[(8)]);
var inst_35303 = (state_35316[(2)]);
var inst_35304 = (inst_35293 + (1));
var inst_35293__$1 = inst_35304;
var state_35316__$1 = (function (){var statearr_35331 = state_35316;
(statearr_35331[(8)] = inst_35293__$1);

(statearr_35331[(10)] = inst_35303);

return statearr_35331;
})();
var statearr_35332_36922 = state_35316__$1;
(statearr_35332_36922[(2)] = null);

(statearr_35332_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (9))){
var state_35316__$1 = state_35316;
var statearr_35333_36923 = state_35316__$1;
(statearr_35333_36923[(2)] = null);

(statearr_35333_36923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (5))){
var state_35316__$1 = state_35316;
var statearr_35334_36924 = state_35316__$1;
(statearr_35334_36924[(2)] = null);

(statearr_35334_36924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (10))){
var inst_35308 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35335_36925 = state_35316__$1;
(statearr_35335_36925[(2)] = inst_35308);

(statearr_35335_36925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (8))){
var inst_35298 = (state_35316[(7)]);
var state_35316__$1 = state_35316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35316__$1,(11),out,inst_35298);
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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35336[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35336[(1)] = (1));

return statearr_35336;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35316){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35316);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35337){var ex__33295__auto__ = e35337;
var statearr_35338_36926 = state_35316;
(statearr_35338_36926[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35316[(4)]))){
var statearr_35339_36927 = state_35316;
(statearr_35339_36927[(1)] = cljs.core.first((state_35316[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36928 = state_35316;
state_35316 = G__36928;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35348 = f__33481__auto__();
(statearr_35348[(6)] = c__33480__auto___36909);

return statearr_35348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35362 = (function (f,ch,meta35363){
this.f = f;
this.ch = ch;
this.meta35363 = meta35363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35364,meta35363__$1){
var self__ = this;
var _35364__$1 = this;
return (new cljs.core.async.t_cljs$core$async35362(self__.f,self__.ch,meta35363__$1));
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35364){
var self__ = this;
var _35364__$1 = this;
return self__.meta35363;
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35386 = (function (f,ch,meta35363,_,fn1,meta35387){
this.f = f;
this.ch = ch;
this.meta35363 = meta35363;
this._ = _;
this.fn1 = fn1;
this.meta35387 = meta35387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35388,meta35387__$1){
var self__ = this;
var _35388__$1 = this;
return (new cljs.core.async.t_cljs$core$async35386(self__.f,self__.ch,self__.meta35363,self__._,self__.fn1,meta35387__$1));
}));

(cljs.core.async.t_cljs$core$async35386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35388){
var self__ = this;
var _35388__$1 = this;
return self__.meta35387;
}));

(cljs.core.async.t_cljs$core$async35386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35355_SHARP_){
var G__35394 = (((p1__35355_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35355_SHARP_) : self__.f.call(null,p1__35355_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35394) : f1.call(null,G__35394));
});
}));

(cljs.core.async.t_cljs$core$async35386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35363","meta35363",-1414275677,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35362","cljs.core.async/t_cljs$core$async35362",1250695594,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35387","meta35387",-575724370,null)], null);
}));

(cljs.core.async.t_cljs$core$async35386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35386");

(cljs.core.async.t_cljs$core$async35386.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35386.
 */
cljs.core.async.__GT_t_cljs$core$async35386 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35386(f__$1,ch__$1,meta35363__$1,___$2,fn1__$1,meta35387){
return (new cljs.core.async.t_cljs$core$async35386(f__$1,ch__$1,meta35363__$1,___$2,fn1__$1,meta35387));
});

}

return (new cljs.core.async.t_cljs$core$async35386(self__.f,self__.ch,self__.meta35363,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35395 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35395) : self__.f.call(null,G__35395));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35363","meta35363",-1414275677,null)], null);
}));

(cljs.core.async.t_cljs$core$async35362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35362");

(cljs.core.async.t_cljs$core$async35362.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35362.
 */
cljs.core.async.__GT_t_cljs$core$async35362 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35362(f__$1,ch__$1,meta35363){
return (new cljs.core.async.t_cljs$core$async35362(f__$1,ch__$1,meta35363));
});

}

return (new cljs.core.async.t_cljs$core$async35362(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35396 = (function (f,ch,meta35397){
this.f = f;
this.ch = ch;
this.meta35397 = meta35397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35398,meta35397__$1){
var self__ = this;
var _35398__$1 = this;
return (new cljs.core.async.t_cljs$core$async35396(self__.f,self__.ch,meta35397__$1));
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35398){
var self__ = this;
var _35398__$1 = this;
return self__.meta35397;
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35397","meta35397",-575033888,null)], null);
}));

(cljs.core.async.t_cljs$core$async35396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35396");

(cljs.core.async.t_cljs$core$async35396.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35396.
 */
cljs.core.async.__GT_t_cljs$core$async35396 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35396(f__$1,ch__$1,meta35397){
return (new cljs.core.async.t_cljs$core$async35396(f__$1,ch__$1,meta35397));
});

}

return (new cljs.core.async.t_cljs$core$async35396(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35410 = (function (p,ch,meta35411){
this.p = p;
this.ch = ch;
this.meta35411 = meta35411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35412,meta35411__$1){
var self__ = this;
var _35412__$1 = this;
return (new cljs.core.async.t_cljs$core$async35410(self__.p,self__.ch,meta35411__$1));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35412){
var self__ = this;
var _35412__$1 = this;
return self__.meta35411;
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35411","meta35411",-2003753180,null)], null);
}));

(cljs.core.async.t_cljs$core$async35410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35410");

(cljs.core.async.t_cljs$core$async35410.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35410.
 */
cljs.core.async.__GT_t_cljs$core$async35410 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35410(p__$1,ch__$1,meta35411){
return (new cljs.core.async.t_cljs$core$async35410(p__$1,ch__$1,meta35411));
});

}

return (new cljs.core.async.t_cljs$core$async35410(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35416 = arguments.length;
switch (G__35416) {
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
var c__33480__auto___36950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35443){
var state_val_35444 = (state_35443[(1)]);
if((state_val_35444 === (7))){
var inst_35439 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35445_36955 = state_35443__$1;
(statearr_35445_36955[(2)] = inst_35439);

(statearr_35445_36955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (1))){
var state_35443__$1 = state_35443;
var statearr_35446_36960 = state_35443__$1;
(statearr_35446_36960[(2)] = null);

(statearr_35446_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (4))){
var inst_35423 = (state_35443[(7)]);
var inst_35423__$1 = (state_35443[(2)]);
var inst_35424 = (inst_35423__$1 == null);
var state_35443__$1 = (function (){var statearr_35447 = state_35443;
(statearr_35447[(7)] = inst_35423__$1);

return statearr_35447;
})();
if(cljs.core.truth_(inst_35424)){
var statearr_35448_36961 = state_35443__$1;
(statearr_35448_36961[(1)] = (5));

} else {
var statearr_35449_36962 = state_35443__$1;
(statearr_35449_36962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (6))){
var inst_35423 = (state_35443[(7)]);
var inst_35429 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35423) : p.call(null,inst_35423));
var state_35443__$1 = state_35443;
if(cljs.core.truth_(inst_35429)){
var statearr_35450_36965 = state_35443__$1;
(statearr_35450_36965[(1)] = (8));

} else {
var statearr_35451_36967 = state_35443__$1;
(statearr_35451_36967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (3))){
var inst_35441 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35443__$1,inst_35441);
} else {
if((state_val_35444 === (2))){
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35443__$1,(4),ch);
} else {
if((state_val_35444 === (11))){
var inst_35433 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35452_36968 = state_35443__$1;
(statearr_35452_36968[(2)] = inst_35433);

(statearr_35452_36968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (9))){
var state_35443__$1 = state_35443;
var statearr_35453_36969 = state_35443__$1;
(statearr_35453_36969[(2)] = null);

(statearr_35453_36969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (5))){
var inst_35426 = cljs.core.async.close_BANG_(out);
var state_35443__$1 = state_35443;
var statearr_35457_36970 = state_35443__$1;
(statearr_35457_36970[(2)] = inst_35426);

(statearr_35457_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (10))){
var inst_35436 = (state_35443[(2)]);
var state_35443__$1 = (function (){var statearr_35458 = state_35443;
(statearr_35458[(8)] = inst_35436);

return statearr_35458;
})();
var statearr_35459_36971 = state_35443__$1;
(statearr_35459_36971[(2)] = null);

(statearr_35459_36971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (8))){
var inst_35423 = (state_35443[(7)]);
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35443__$1,(11),out,inst_35423);
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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35460 = [null,null,null,null,null,null,null,null,null];
(statearr_35460[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35460[(1)] = (1));

return statearr_35460;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35443){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35443);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35461){var ex__33295__auto__ = e35461;
var statearr_35462_36977 = state_35443;
(statearr_35462_36977[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35443[(4)]))){
var statearr_35466_36978 = state_35443;
(statearr_35466_36978[(1)] = cljs.core.first((state_35443[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36980 = state_35443;
state_35443 = G__36980;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35477 = f__33481__auto__();
(statearr_35477[(6)] = c__33480__auto___36950);

return statearr_35477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35486 = arguments.length;
switch (G__35486) {
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
var c__33480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35570){
var state_val_35571 = (state_35570[(1)]);
if((state_val_35571 === (7))){
var inst_35566 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35572_36991 = state_35570__$1;
(statearr_35572_36991[(2)] = inst_35566);

(statearr_35572_36991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (20))){
var inst_35536 = (state_35570[(7)]);
var inst_35547 = (state_35570[(2)]);
var inst_35548 = cljs.core.next(inst_35536);
var inst_35522 = inst_35548;
var inst_35523 = null;
var inst_35524 = (0);
var inst_35525 = (0);
var state_35570__$1 = (function (){var statearr_35573 = state_35570;
(statearr_35573[(8)] = inst_35524);

(statearr_35573[(9)] = inst_35525);

(statearr_35573[(10)] = inst_35547);

(statearr_35573[(11)] = inst_35523);

(statearr_35573[(12)] = inst_35522);

return statearr_35573;
})();
var statearr_35574_36993 = state_35570__$1;
(statearr_35574_36993[(2)] = null);

(statearr_35574_36993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (1))){
var state_35570__$1 = state_35570;
var statearr_35575_36998 = state_35570__$1;
(statearr_35575_36998[(2)] = null);

(statearr_35575_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (4))){
var inst_35509 = (state_35570[(13)]);
var inst_35509__$1 = (state_35570[(2)]);
var inst_35510 = (inst_35509__$1 == null);
var state_35570__$1 = (function (){var statearr_35576 = state_35570;
(statearr_35576[(13)] = inst_35509__$1);

return statearr_35576;
})();
if(cljs.core.truth_(inst_35510)){
var statearr_35577_36999 = state_35570__$1;
(statearr_35577_36999[(1)] = (5));

} else {
var statearr_35578_37000 = state_35570__$1;
(statearr_35578_37000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (15))){
var state_35570__$1 = state_35570;
var statearr_35582_37001 = state_35570__$1;
(statearr_35582_37001[(2)] = null);

(statearr_35582_37001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (21))){
var state_35570__$1 = state_35570;
var statearr_35583_37002 = state_35570__$1;
(statearr_35583_37002[(2)] = null);

(statearr_35583_37002[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (13))){
var inst_35524 = (state_35570[(8)]);
var inst_35525 = (state_35570[(9)]);
var inst_35523 = (state_35570[(11)]);
var inst_35522 = (state_35570[(12)]);
var inst_35532 = (state_35570[(2)]);
var inst_35533 = (inst_35525 + (1));
var tmp35579 = inst_35524;
var tmp35580 = inst_35523;
var tmp35581 = inst_35522;
var inst_35522__$1 = tmp35581;
var inst_35523__$1 = tmp35580;
var inst_35524__$1 = tmp35579;
var inst_35525__$1 = inst_35533;
var state_35570__$1 = (function (){var statearr_35584 = state_35570;
(statearr_35584[(8)] = inst_35524__$1);

(statearr_35584[(9)] = inst_35525__$1);

(statearr_35584[(11)] = inst_35523__$1);

(statearr_35584[(12)] = inst_35522__$1);

(statearr_35584[(14)] = inst_35532);

return statearr_35584;
})();
var statearr_35587_37003 = state_35570__$1;
(statearr_35587_37003[(2)] = null);

(statearr_35587_37003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (22))){
var state_35570__$1 = state_35570;
var statearr_35588_37004 = state_35570__$1;
(statearr_35588_37004[(2)] = null);

(statearr_35588_37004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (6))){
var inst_35509 = (state_35570[(13)]);
var inst_35520 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35509) : f.call(null,inst_35509));
var inst_35521 = cljs.core.seq(inst_35520);
var inst_35522 = inst_35521;
var inst_35523 = null;
var inst_35524 = (0);
var inst_35525 = (0);
var state_35570__$1 = (function (){var statearr_35589 = state_35570;
(statearr_35589[(8)] = inst_35524);

(statearr_35589[(9)] = inst_35525);

(statearr_35589[(11)] = inst_35523);

(statearr_35589[(12)] = inst_35522);

return statearr_35589;
})();
var statearr_35591_37005 = state_35570__$1;
(statearr_35591_37005[(2)] = null);

(statearr_35591_37005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (17))){
var inst_35536 = (state_35570[(7)]);
var inst_35540 = cljs.core.chunk_first(inst_35536);
var inst_35541 = cljs.core.chunk_rest(inst_35536);
var inst_35542 = cljs.core.count(inst_35540);
var inst_35522 = inst_35541;
var inst_35523 = inst_35540;
var inst_35524 = inst_35542;
var inst_35525 = (0);
var state_35570__$1 = (function (){var statearr_35602 = state_35570;
(statearr_35602[(8)] = inst_35524);

(statearr_35602[(9)] = inst_35525);

(statearr_35602[(11)] = inst_35523);

(statearr_35602[(12)] = inst_35522);

return statearr_35602;
})();
var statearr_35603_37007 = state_35570__$1;
(statearr_35603_37007[(2)] = null);

(statearr_35603_37007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (3))){
var inst_35568 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35570__$1,inst_35568);
} else {
if((state_val_35571 === (12))){
var inst_35556 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35605_37008 = state_35570__$1;
(statearr_35605_37008[(2)] = inst_35556);

(statearr_35605_37008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (2))){
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35570__$1,(4),in$);
} else {
if((state_val_35571 === (23))){
var inst_35564 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35607_37012 = state_35570__$1;
(statearr_35607_37012[(2)] = inst_35564);

(statearr_35607_37012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (19))){
var inst_35551 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35608_37013 = state_35570__$1;
(statearr_35608_37013[(2)] = inst_35551);

(statearr_35608_37013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (11))){
var inst_35536 = (state_35570[(7)]);
var inst_35522 = (state_35570[(12)]);
var inst_35536__$1 = cljs.core.seq(inst_35522);
var state_35570__$1 = (function (){var statearr_35609 = state_35570;
(statearr_35609[(7)] = inst_35536__$1);

return statearr_35609;
})();
if(inst_35536__$1){
var statearr_35610_37014 = state_35570__$1;
(statearr_35610_37014[(1)] = (14));

} else {
var statearr_35611_37015 = state_35570__$1;
(statearr_35611_37015[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (9))){
var inst_35558 = (state_35570[(2)]);
var inst_35559 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35570__$1 = (function (){var statearr_35612 = state_35570;
(statearr_35612[(15)] = inst_35558);

return statearr_35612;
})();
if(cljs.core.truth_(inst_35559)){
var statearr_35613_37016 = state_35570__$1;
(statearr_35613_37016[(1)] = (21));

} else {
var statearr_35614_37017 = state_35570__$1;
(statearr_35614_37017[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (5))){
var inst_35512 = cljs.core.async.close_BANG_(out);
var state_35570__$1 = state_35570;
var statearr_35615_37018 = state_35570__$1;
(statearr_35615_37018[(2)] = inst_35512);

(statearr_35615_37018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (14))){
var inst_35536 = (state_35570[(7)]);
var inst_35538 = cljs.core.chunked_seq_QMARK_(inst_35536);
var state_35570__$1 = state_35570;
if(inst_35538){
var statearr_35616_37019 = state_35570__$1;
(statearr_35616_37019[(1)] = (17));

} else {
var statearr_35617_37020 = state_35570__$1;
(statearr_35617_37020[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (16))){
var inst_35554 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35618_37021 = state_35570__$1;
(statearr_35618_37021[(2)] = inst_35554);

(statearr_35618_37021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (10))){
var inst_35525 = (state_35570[(9)]);
var inst_35523 = (state_35570[(11)]);
var inst_35530 = cljs.core._nth(inst_35523,inst_35525);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35570__$1,(13),out,inst_35530);
} else {
if((state_val_35571 === (18))){
var inst_35536 = (state_35570[(7)]);
var inst_35545 = cljs.core.first(inst_35536);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35570__$1,(20),out,inst_35545);
} else {
if((state_val_35571 === (8))){
var inst_35524 = (state_35570[(8)]);
var inst_35525 = (state_35570[(9)]);
var inst_35527 = (inst_35525 < inst_35524);
var inst_35528 = inst_35527;
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35528)){
var statearr_35621_37028 = state_35570__$1;
(statearr_35621_37028[(1)] = (10));

} else {
var statearr_35622_37030 = state_35570__$1;
(statearr_35622_37030[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33292__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33292__auto____0 = (function (){
var statearr_35624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35624[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33292__auto__);

(statearr_35624[(1)] = (1));

return statearr_35624;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33292__auto____1 = (function (state_35570){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35570);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35625){var ex__33295__auto__ = e35625;
var statearr_35626_37032 = state_35570;
(statearr_35626_37032[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35570[(4)]))){
var statearr_35627_37033 = state_35570;
(statearr_35627_37033[(1)] = cljs.core.first((state_35570[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37034 = state_35570;
state_35570 = G__37034;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33292__auto__ = function(state_35570){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33292__auto____1.call(this,state_35570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33292__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33292__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35628 = f__33481__auto__();
(statearr_35628[(6)] = c__33480__auto__);

return statearr_35628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

return c__33480__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35639 = arguments.length;
switch (G__35639) {
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
var G__35642 = arguments.length;
switch (G__35642) {
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
var G__35646 = arguments.length;
switch (G__35646) {
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
var c__33480__auto___37038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35672){
var state_val_35673 = (state_35672[(1)]);
if((state_val_35673 === (7))){
var inst_35667 = (state_35672[(2)]);
var state_35672__$1 = state_35672;
var statearr_35681_37040 = state_35672__$1;
(statearr_35681_37040[(2)] = inst_35667);

(statearr_35681_37040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (1))){
var inst_35649 = null;
var state_35672__$1 = (function (){var statearr_35683 = state_35672;
(statearr_35683[(7)] = inst_35649);

return statearr_35683;
})();
var statearr_35684_37041 = state_35672__$1;
(statearr_35684_37041[(2)] = null);

(statearr_35684_37041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (4))){
var inst_35652 = (state_35672[(8)]);
var inst_35652__$1 = (state_35672[(2)]);
var inst_35653 = (inst_35652__$1 == null);
var inst_35654 = cljs.core.not(inst_35653);
var state_35672__$1 = (function (){var statearr_35694 = state_35672;
(statearr_35694[(8)] = inst_35652__$1);

return statearr_35694;
})();
if(inst_35654){
var statearr_35695_37046 = state_35672__$1;
(statearr_35695_37046[(1)] = (5));

} else {
var statearr_35696_37047 = state_35672__$1;
(statearr_35696_37047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (6))){
var state_35672__$1 = state_35672;
var statearr_35697_37048 = state_35672__$1;
(statearr_35697_37048[(2)] = null);

(statearr_35697_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (3))){
var inst_35669 = (state_35672[(2)]);
var inst_35670 = cljs.core.async.close_BANG_(out);
var state_35672__$1 = (function (){var statearr_35702 = state_35672;
(statearr_35702[(9)] = inst_35669);

return statearr_35702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35672__$1,inst_35670);
} else {
if((state_val_35673 === (2))){
var state_35672__$1 = state_35672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35672__$1,(4),ch);
} else {
if((state_val_35673 === (11))){
var inst_35652 = (state_35672[(8)]);
var inst_35661 = (state_35672[(2)]);
var inst_35649 = inst_35652;
var state_35672__$1 = (function (){var statearr_35710 = state_35672;
(statearr_35710[(7)] = inst_35649);

(statearr_35710[(10)] = inst_35661);

return statearr_35710;
})();
var statearr_35711_37053 = state_35672__$1;
(statearr_35711_37053[(2)] = null);

(statearr_35711_37053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (9))){
var inst_35652 = (state_35672[(8)]);
var state_35672__$1 = state_35672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35672__$1,(11),out,inst_35652);
} else {
if((state_val_35673 === (5))){
var inst_35649 = (state_35672[(7)]);
var inst_35652 = (state_35672[(8)]);
var inst_35656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35652,inst_35649);
var state_35672__$1 = state_35672;
if(inst_35656){
var statearr_35714_37060 = state_35672__$1;
(statearr_35714_37060[(1)] = (8));

} else {
var statearr_35715_37064 = state_35672__$1;
(statearr_35715_37064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (10))){
var inst_35664 = (state_35672[(2)]);
var state_35672__$1 = state_35672;
var statearr_35716_37065 = state_35672__$1;
(statearr_35716_37065[(2)] = inst_35664);

(statearr_35716_37065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35673 === (8))){
var inst_35649 = (state_35672[(7)]);
var tmp35713 = inst_35649;
var inst_35649__$1 = tmp35713;
var state_35672__$1 = (function (){var statearr_35719 = state_35672;
(statearr_35719[(7)] = inst_35649__$1);

return statearr_35719;
})();
var statearr_35723_37071 = state_35672__$1;
(statearr_35723_37071[(2)] = null);

(statearr_35723_37071[(1)] = (2));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35726[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35726[(1)] = (1));

return statearr_35726;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35672){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35672);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35727){var ex__33295__auto__ = e35727;
var statearr_35728_37076 = state_35672;
(statearr_35728_37076[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35672[(4)]))){
var statearr_35729_37077 = state_35672;
(statearr_35729_37077[(1)] = cljs.core.first((state_35672[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_35672;
state_35672 = G__37082;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35734 = f__33481__auto__();
(statearr_35734[(6)] = c__33480__auto___37038);

return statearr_35734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35737 = arguments.length;
switch (G__35737) {
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
var c__33480__auto___37087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35786){
var state_val_35787 = (state_35786[(1)]);
if((state_val_35787 === (7))){
var inst_35780 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
var statearr_35790_37090 = state_35786__$1;
(statearr_35790_37090[(2)] = inst_35780);

(statearr_35790_37090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (1))){
var inst_35746 = (new Array(n));
var inst_35748 = inst_35746;
var inst_35749 = (0);
var state_35786__$1 = (function (){var statearr_35791 = state_35786;
(statearr_35791[(7)] = inst_35749);

(statearr_35791[(8)] = inst_35748);

return statearr_35791;
})();
var statearr_35793_37092 = state_35786__$1;
(statearr_35793_37092[(2)] = null);

(statearr_35793_37092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (4))){
var inst_35752 = (state_35786[(9)]);
var inst_35752__$1 = (state_35786[(2)]);
var inst_35753 = (inst_35752__$1 == null);
var inst_35754 = cljs.core.not(inst_35753);
var state_35786__$1 = (function (){var statearr_35795 = state_35786;
(statearr_35795[(9)] = inst_35752__$1);

return statearr_35795;
})();
if(inst_35754){
var statearr_35796_37097 = state_35786__$1;
(statearr_35796_37097[(1)] = (5));

} else {
var statearr_35797_37099 = state_35786__$1;
(statearr_35797_37099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (15))){
var inst_35774 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
var statearr_35798_37100 = state_35786__$1;
(statearr_35798_37100[(2)] = inst_35774);

(statearr_35798_37100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (13))){
var state_35786__$1 = state_35786;
var statearr_35799_37101 = state_35786__$1;
(statearr_35799_37101[(2)] = null);

(statearr_35799_37101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (6))){
var inst_35749 = (state_35786[(7)]);
var inst_35770 = (inst_35749 > (0));
var state_35786__$1 = state_35786;
if(cljs.core.truth_(inst_35770)){
var statearr_35800_37106 = state_35786__$1;
(statearr_35800_37106[(1)] = (12));

} else {
var statearr_35801_37107 = state_35786__$1;
(statearr_35801_37107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (3))){
var inst_35782 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35786__$1,inst_35782);
} else {
if((state_val_35787 === (12))){
var inst_35748 = (state_35786[(8)]);
var inst_35772 = cljs.core.vec(inst_35748);
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35786__$1,(15),out,inst_35772);
} else {
if((state_val_35787 === (2))){
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35786__$1,(4),ch);
} else {
if((state_val_35787 === (11))){
var inst_35764 = (state_35786[(2)]);
var inst_35765 = (new Array(n));
var inst_35748 = inst_35765;
var inst_35749 = (0);
var state_35786__$1 = (function (){var statearr_35806 = state_35786;
(statearr_35806[(10)] = inst_35764);

(statearr_35806[(7)] = inst_35749);

(statearr_35806[(8)] = inst_35748);

return statearr_35806;
})();
var statearr_35808_37116 = state_35786__$1;
(statearr_35808_37116[(2)] = null);

(statearr_35808_37116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (9))){
var inst_35748 = (state_35786[(8)]);
var inst_35762 = cljs.core.vec(inst_35748);
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35786__$1,(11),out,inst_35762);
} else {
if((state_val_35787 === (5))){
var inst_35749 = (state_35786[(7)]);
var inst_35757 = (state_35786[(11)]);
var inst_35752 = (state_35786[(9)]);
var inst_35748 = (state_35786[(8)]);
var inst_35756 = (inst_35748[inst_35749] = inst_35752);
var inst_35757__$1 = (inst_35749 + (1));
var inst_35758 = (inst_35757__$1 < n);
var state_35786__$1 = (function (){var statearr_35818 = state_35786;
(statearr_35818[(11)] = inst_35757__$1);

(statearr_35818[(12)] = inst_35756);

return statearr_35818;
})();
if(cljs.core.truth_(inst_35758)){
var statearr_35819_37126 = state_35786__$1;
(statearr_35819_37126[(1)] = (8));

} else {
var statearr_35820_37127 = state_35786__$1;
(statearr_35820_37127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (14))){
var inst_35777 = (state_35786[(2)]);
var inst_35778 = cljs.core.async.close_BANG_(out);
var state_35786__$1 = (function (){var statearr_35826 = state_35786;
(statearr_35826[(13)] = inst_35777);

return statearr_35826;
})();
var statearr_35827_37128 = state_35786__$1;
(statearr_35827_37128[(2)] = inst_35778);

(statearr_35827_37128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (10))){
var inst_35768 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
var statearr_35828_37133 = state_35786__$1;
(statearr_35828_37133[(2)] = inst_35768);

(statearr_35828_37133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (8))){
var inst_35757 = (state_35786[(11)]);
var inst_35748 = (state_35786[(8)]);
var tmp35821 = inst_35748;
var inst_35748__$1 = tmp35821;
var inst_35749 = inst_35757;
var state_35786__$1 = (function (){var statearr_35835 = state_35786;
(statearr_35835[(7)] = inst_35749);

(statearr_35835[(8)] = inst_35748__$1);

return statearr_35835;
})();
var statearr_35836_37135 = state_35786__$1;
(statearr_35836_37135[(2)] = null);

(statearr_35836_37135[(1)] = (2));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35843[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35843[(1)] = (1));

return statearr_35843;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35786){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35786);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35844){var ex__33295__auto__ = e35844;
var statearr_35845_37139 = state_35786;
(statearr_35845_37139[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35786[(4)]))){
var statearr_35846_37140 = state_35786;
(statearr_35846_37140[(1)] = cljs.core.first((state_35786[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37141 = state_35786;
state_35786 = G__37141;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35848 = f__33481__auto__();
(statearr_35848[(6)] = c__33480__auto___37087);

return statearr_35848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35851 = arguments.length;
switch (G__35851) {
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
var c__33480__auto___37144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_35913){
var state_val_35914 = (state_35913[(1)]);
if((state_val_35914 === (7))){
var inst_35909 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35915_37147 = state_35913__$1;
(statearr_35915_37147[(2)] = inst_35909);

(statearr_35915_37147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (1))){
var inst_35862 = [];
var inst_35863 = inst_35862;
var inst_35864 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35913__$1 = (function (){var statearr_35916 = state_35913;
(statearr_35916[(7)] = inst_35863);

(statearr_35916[(8)] = inst_35864);

return statearr_35916;
})();
var statearr_35917_37148 = state_35913__$1;
(statearr_35917_37148[(2)] = null);

(statearr_35917_37148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (4))){
var inst_35868 = (state_35913[(9)]);
var inst_35868__$1 = (state_35913[(2)]);
var inst_35869 = (inst_35868__$1 == null);
var inst_35870 = cljs.core.not(inst_35869);
var state_35913__$1 = (function (){var statearr_35918 = state_35913;
(statearr_35918[(9)] = inst_35868__$1);

return statearr_35918;
})();
if(inst_35870){
var statearr_35920_37149 = state_35913__$1;
(statearr_35920_37149[(1)] = (5));

} else {
var statearr_35924_37150 = state_35913__$1;
(statearr_35924_37150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (15))){
var inst_35863 = (state_35913[(7)]);
var inst_35901 = cljs.core.vec(inst_35863);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35913__$1,(18),out,inst_35901);
} else {
if((state_val_35914 === (13))){
var inst_35891 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35925_37151 = state_35913__$1;
(statearr_35925_37151[(2)] = inst_35891);

(statearr_35925_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (6))){
var inst_35863 = (state_35913[(7)]);
var inst_35893 = inst_35863.length;
var inst_35894 = (inst_35893 > (0));
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35894)){
var statearr_35926_37155 = state_35913__$1;
(statearr_35926_37155[(1)] = (15));

} else {
var statearr_35931_37156 = state_35913__$1;
(statearr_35931_37156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (17))){
var inst_35906 = (state_35913[(2)]);
var inst_35907 = cljs.core.async.close_BANG_(out);
var state_35913__$1 = (function (){var statearr_35938 = state_35913;
(statearr_35938[(10)] = inst_35906);

return statearr_35938;
})();
var statearr_35939_37157 = state_35913__$1;
(statearr_35939_37157[(2)] = inst_35907);

(statearr_35939_37157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (3))){
var inst_35911 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35913__$1,inst_35911);
} else {
if((state_val_35914 === (12))){
var inst_35863 = (state_35913[(7)]);
var inst_35884 = cljs.core.vec(inst_35863);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35913__$1,(14),out,inst_35884);
} else {
if((state_val_35914 === (2))){
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35913__$1,(4),ch);
} else {
if((state_val_35914 === (11))){
var inst_35872 = (state_35913[(11)]);
var inst_35863 = (state_35913[(7)]);
var inst_35868 = (state_35913[(9)]);
var inst_35881 = inst_35863.push(inst_35868);
var tmp35940 = inst_35863;
var inst_35863__$1 = tmp35940;
var inst_35864 = inst_35872;
var state_35913__$1 = (function (){var statearr_35941 = state_35913;
(statearr_35941[(12)] = inst_35881);

(statearr_35941[(7)] = inst_35863__$1);

(statearr_35941[(8)] = inst_35864);

return statearr_35941;
})();
var statearr_35945_37165 = state_35913__$1;
(statearr_35945_37165[(2)] = null);

(statearr_35945_37165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (9))){
var inst_35864 = (state_35913[(8)]);
var inst_35877 = cljs.core.keyword_identical_QMARK_(inst_35864,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35913__$1 = state_35913;
var statearr_35946_37166 = state_35913__$1;
(statearr_35946_37166[(2)] = inst_35877);

(statearr_35946_37166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (5))){
var inst_35872 = (state_35913[(11)]);
var inst_35873 = (state_35913[(13)]);
var inst_35868 = (state_35913[(9)]);
var inst_35864 = (state_35913[(8)]);
var inst_35872__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35868) : f.call(null,inst_35868));
var inst_35873__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35872__$1,inst_35864);
var state_35913__$1 = (function (){var statearr_35947 = state_35913;
(statearr_35947[(11)] = inst_35872__$1);

(statearr_35947[(13)] = inst_35873__$1);

return statearr_35947;
})();
if(inst_35873__$1){
var statearr_35948_37167 = state_35913__$1;
(statearr_35948_37167[(1)] = (8));

} else {
var statearr_35949_37168 = state_35913__$1;
(statearr_35949_37168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (14))){
var inst_35872 = (state_35913[(11)]);
var inst_35868 = (state_35913[(9)]);
var inst_35886 = (state_35913[(2)]);
var inst_35887 = [];
var inst_35888 = inst_35887.push(inst_35868);
var inst_35863 = inst_35887;
var inst_35864 = inst_35872;
var state_35913__$1 = (function (){var statearr_35950 = state_35913;
(statearr_35950[(14)] = inst_35888);

(statearr_35950[(15)] = inst_35886);

(statearr_35950[(7)] = inst_35863);

(statearr_35950[(8)] = inst_35864);

return statearr_35950;
})();
var statearr_35951_37176 = state_35913__$1;
(statearr_35951_37176[(2)] = null);

(statearr_35951_37176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (16))){
var state_35913__$1 = state_35913;
var statearr_35952_37177 = state_35913__$1;
(statearr_35952_37177[(2)] = null);

(statearr_35952_37177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (10))){
var inst_35879 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35879)){
var statearr_35953_37182 = state_35913__$1;
(statearr_35953_37182[(1)] = (11));

} else {
var statearr_35954_37183 = state_35913__$1;
(statearr_35954_37183[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (18))){
var inst_35903 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35955_37191 = state_35913__$1;
(statearr_35955_37191[(2)] = inst_35903);

(statearr_35955_37191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (8))){
var inst_35873 = (state_35913[(13)]);
var state_35913__$1 = state_35913;
var statearr_35956_37192 = state_35913__$1;
(statearr_35956_37192[(2)] = inst_35873);

(statearr_35956_37192[(1)] = (10));


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
var cljs$core$async$state_machine__33292__auto__ = null;
var cljs$core$async$state_machine__33292__auto____0 = (function (){
var statearr_35957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35957[(0)] = cljs$core$async$state_machine__33292__auto__);

(statearr_35957[(1)] = (1));

return statearr_35957;
});
var cljs$core$async$state_machine__33292__auto____1 = (function (state_35913){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_35913);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e35958){var ex__33295__auto__ = e35958;
var statearr_35959_37193 = state_35913;
(statearr_35959_37193[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_35913[(4)]))){
var statearr_35960_37194 = state_35913;
(statearr_35960_37194[(1)] = cljs.core.first((state_35913[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37195 = state_35913;
state_35913 = G__37195;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
cljs$core$async$state_machine__33292__auto__ = function(state_35913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33292__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33292__auto____1.call(this,state_35913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33292__auto____0;
cljs$core$async$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33292__auto____1;
return cljs$core$async$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_35961 = f__33481__auto__();
(statearr_35961[(6)] = c__33480__auto___37144);

return statearr_35961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
