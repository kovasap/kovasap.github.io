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
var G__33582 = arguments.length;
switch (G__33582) {
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
var G__33584 = arguments.length;
switch (G__33584) {
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
var G__33589 = arguments.length;
switch (G__33589) {
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
var val_35982 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35982) : fn1.call(null,val_35982));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35982) : fn1.call(null,val_35982));
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
var G__33598 = arguments.length;
switch (G__33598) {
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
var n__5636__auto___35984 = n;
var x_35985 = (0);
while(true){
if((x_35985 < n__5636__auto___35984)){
(a[x_35985] = x_35985);

var G__35986 = (x_35985 + (1));
x_35985 = G__35986;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33600 = (function (flag,meta33601){
this.flag = flag;
this.meta33601 = meta33601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33602,meta33601__$1){
var self__ = this;
var _33602__$1 = this;
return (new cljs.core.async.t_cljs$core$async33600(self__.flag,meta33601__$1));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33602){
var self__ = this;
var _33602__$1 = this;
return self__.meta33601;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33601","meta33601",1934242518,null)], null);
}));

(cljs.core.async.t_cljs$core$async33600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33600");

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33600.
 */
cljs.core.async.__GT_t_cljs$core$async33600 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33600(flag__$1,meta33601){
return (new cljs.core.async.t_cljs$core$async33600(flag__$1,meta33601));
});

}

return (new cljs.core.async.t_cljs$core$async33600(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33607 = (function (flag,cb,meta33608){
this.flag = flag;
this.cb = cb;
this.meta33608 = meta33608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33609,meta33608__$1){
var self__ = this;
var _33609__$1 = this;
return (new cljs.core.async.t_cljs$core$async33607(self__.flag,self__.cb,meta33608__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33608","meta33608",2011096329,null)], null);
}));

(cljs.core.async.t_cljs$core$async33607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33607");

(cljs.core.async.t_cljs$core$async33607.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33607.
 */
cljs.core.async.__GT_t_cljs$core$async33607 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33607(flag__$1,cb__$1,meta33608){
return (new cljs.core.async.t_cljs$core$async33607(flag__$1,cb__$1,meta33608));
});

}

return (new cljs.core.async.t_cljs$core$async33607(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33610_SHARP_){
var G__33616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33610_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33616) : fret.call(null,G__33616));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33611_SHARP_){
var G__33617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33611_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33617) : fret.call(null,G__33617));
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
var G__35995 = (i + (1));
i = G__35995;
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
var len__5769__auto___35996 = arguments.length;
var i__5770__auto___35997 = (0);
while(true){
if((i__5770__auto___35997 < len__5769__auto___35996)){
args__5775__auto__.push((arguments[i__5770__auto___35997]));

var G__36002 = (i__5770__auto___35997 + (1));
i__5770__auto___35997 = G__36002;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33623){
var G__33624 = cljs.core.first(seq33623);
var seq33623__$1 = cljs.core.next(seq33623);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33624,seq33623__$1);
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
var G__33628 = arguments.length;
switch (G__33628) {
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
var c__33512__auto___36011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_33672){
var state_val_33676 = (state_33672[(1)]);
if((state_val_33676 === (7))){
var inst_33662 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33681_36012 = state_33672__$1;
(statearr_33681_36012[(2)] = inst_33662);

(statearr_33681_36012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (1))){
var state_33672__$1 = state_33672;
var statearr_33685_36015 = state_33672__$1;
(statearr_33685_36015[(2)] = null);

(statearr_33685_36015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (4))){
var inst_33634 = (state_33672[(7)]);
var inst_33634__$1 = (state_33672[(2)]);
var inst_33640 = (inst_33634__$1 == null);
var state_33672__$1 = (function (){var statearr_33686 = state_33672;
(statearr_33686[(7)] = inst_33634__$1);

return statearr_33686;
})();
if(cljs.core.truth_(inst_33640)){
var statearr_33690_36017 = state_33672__$1;
(statearr_33690_36017[(1)] = (5));

} else {
var statearr_33691_36018 = state_33672__$1;
(statearr_33691_36018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (13))){
var state_33672__$1 = state_33672;
var statearr_33695_36021 = state_33672__$1;
(statearr_33695_36021[(2)] = null);

(statearr_33695_36021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (6))){
var inst_33634 = (state_33672[(7)]);
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33672__$1,(11),to,inst_33634);
} else {
if((state_val_33676 === (3))){
var inst_33665 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33672__$1,inst_33665);
} else {
if((state_val_33676 === (12))){
var state_33672__$1 = state_33672;
var statearr_33706_36024 = state_33672__$1;
(statearr_33706_36024[(2)] = null);

(statearr_33706_36024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (2))){
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33672__$1,(4),from);
} else {
if((state_val_33676 === (11))){
var inst_33652 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
if(cljs.core.truth_(inst_33652)){
var statearr_33707_36027 = state_33672__$1;
(statearr_33707_36027[(1)] = (12));

} else {
var statearr_33708_36028 = state_33672__$1;
(statearr_33708_36028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (9))){
var state_33672__$1 = state_33672;
var statearr_33709_36030 = state_33672__$1;
(statearr_33709_36030[(2)] = null);

(statearr_33709_36030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (5))){
var state_33672__$1 = state_33672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33710_36031 = state_33672__$1;
(statearr_33710_36031[(1)] = (8));

} else {
var statearr_33711_36032 = state_33672__$1;
(statearr_33711_36032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (14))){
var inst_33660 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33712_36033 = state_33672__$1;
(statearr_33712_36033[(2)] = inst_33660);

(statearr_33712_36033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (10))){
var inst_33649 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33713_36034 = state_33672__$1;
(statearr_33713_36034[(2)] = inst_33649);

(statearr_33713_36034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (8))){
var inst_33646 = cljs.core.async.close_BANG_(to);
var state_33672__$1 = state_33672;
var statearr_33714_36035 = state_33672__$1;
(statearr_33714_36035[(2)] = inst_33646);

(statearr_33714_36035[(1)] = (10));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_33715 = [null,null,null,null,null,null,null,null];
(statearr_33715[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_33715[(1)] = (1));

return statearr_33715;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_33672){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_33672);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e33716){var ex__33218__auto__ = e33716;
var statearr_33717_36036 = state_33672;
(statearr_33717_36036[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_33672[(4)]))){
var statearr_33718_36037 = state_33672;
(statearr_33718_36037[(1)] = cljs.core.first((state_33672[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36038 = state_33672;
state_33672 = G__36038;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_33672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_33672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_33723 = f__33513__auto__();
(statearr_33723[(6)] = c__33512__auto___36011);

return statearr_33723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var process__$1 = (function (p__33727){
var vec__33728 = p__33727;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33728,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33728,(1),null);
var job = vec__33728;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33512__auto___36042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_33738){
var state_val_33739 = (state_33738[(1)]);
if((state_val_33739 === (1))){
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33738__$1,(2),res,v);
} else {
if((state_val_33739 === (2))){
var inst_33735 = (state_33738[(2)]);
var inst_33736 = cljs.core.async.close_BANG_(res);
var state_33738__$1 = (function (){var statearr_33740 = state_33738;
(statearr_33740[(7)] = inst_33735);

return statearr_33740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33738__$1,inst_33736);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0 = (function (){
var statearr_33741 = [null,null,null,null,null,null,null,null];
(statearr_33741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__);

(statearr_33741[(1)] = (1));

return statearr_33741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1 = (function (state_33738){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_33738);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e33742){var ex__33218__auto__ = e33742;
var statearr_33744_36043 = state_33738;
(statearr_33744_36043[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_33738[(4)]))){
var statearr_33747_36044 = state_33738;
(statearr_33747_36044[(1)] = cljs.core.first((state_33738[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36045 = state_33738;
state_33738 = G__36045;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = function(state_33738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1.call(this,state_33738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_33750 = f__33513__auto__();
(statearr_33750[(6)] = c__33512__auto___36042);

return statearr_33750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33751){
var vec__33756 = p__33751;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33756,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33756,(1),null);
var job = vec__33756;
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
var n__5636__auto___36046 = n;
var __36047 = (0);
while(true){
if((__36047 < n__5636__auto___36046)){
var G__33781_36048 = type;
var G__33781_36049__$1 = (((G__33781_36048 instanceof cljs.core.Keyword))?G__33781_36048.fqn:null);
switch (G__33781_36049__$1) {
case "compute":
var c__33512__auto___36051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36047,c__33512__auto___36051,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async){
return (function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = ((function (__36047,c__33512__auto___36051,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async){
return (function (state_33799){
var state_val_33800 = (state_33799[(1)]);
if((state_val_33800 === (1))){
var state_33799__$1 = state_33799;
var statearr_33804_36054 = state_33799__$1;
(statearr_33804_36054[(2)] = null);

(statearr_33804_36054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33800 === (2))){
var state_33799__$1 = state_33799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33799__$1,(4),jobs);
} else {
if((state_val_33800 === (3))){
var inst_33797 = (state_33799[(2)]);
var state_33799__$1 = state_33799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33799__$1,inst_33797);
} else {
if((state_val_33800 === (4))){
var inst_33789 = (state_33799[(2)]);
var inst_33790 = process__$1(inst_33789);
var state_33799__$1 = state_33799;
if(cljs.core.truth_(inst_33790)){
var statearr_33808_36055 = state_33799__$1;
(statearr_33808_36055[(1)] = (5));

} else {
var statearr_33811_36056 = state_33799__$1;
(statearr_33811_36056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33800 === (5))){
var state_33799__$1 = state_33799;
var statearr_33812_36057 = state_33799__$1;
(statearr_33812_36057[(2)] = null);

(statearr_33812_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33800 === (6))){
var state_33799__$1 = state_33799;
var statearr_33819_36058 = state_33799__$1;
(statearr_33819_36058[(2)] = null);

(statearr_33819_36058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33800 === (7))){
var inst_33795 = (state_33799[(2)]);
var state_33799__$1 = state_33799;
var statearr_33836_36059 = state_33799__$1;
(statearr_33836_36059[(2)] = inst_33795);

(statearr_33836_36059[(1)] = (3));


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
});})(__36047,c__33512__auto___36051,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async))
;
return ((function (__36047,switch__33214__auto__,c__33512__auto___36051,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0 = (function (){
var statearr_33839 = [null,null,null,null,null,null,null];
(statearr_33839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__);

(statearr_33839[(1)] = (1));

return statearr_33839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1 = (function (state_33799){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_33799);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e33841){var ex__33218__auto__ = e33841;
var statearr_33842_36061 = state_33799;
(statearr_33842_36061[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_33799[(4)]))){
var statearr_33843_36062 = state_33799;
(statearr_33843_36062[(1)] = cljs.core.first((state_33799[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36064 = state_33799;
state_33799 = G__36064;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = function(state_33799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1.call(this,state_33799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__;
})()
;})(__36047,switch__33214__auto__,c__33512__auto___36051,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async))
})();
var state__33514__auto__ = (function (){var statearr_33855 = f__33513__auto__();
(statearr_33855[(6)] = c__33512__auto___36051);

return statearr_33855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
});})(__36047,c__33512__auto___36051,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async))
);


break;
case "async":
var c__33512__auto___36066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36047,c__33512__auto___36066,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async){
return (function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = ((function (__36047,c__33512__auto___36066,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async){
return (function (state_33887){
var state_val_33888 = (state_33887[(1)]);
if((state_val_33888 === (1))){
var state_33887__$1 = state_33887;
var statearr_33906_36067 = state_33887__$1;
(statearr_33906_36067[(2)] = null);

(statearr_33906_36067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (2))){
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33887__$1,(4),jobs);
} else {
if((state_val_33888 === (3))){
var inst_33885 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33887__$1,inst_33885);
} else {
if((state_val_33888 === (4))){
var inst_33872 = (state_33887[(2)]);
var inst_33874 = async(inst_33872);
var state_33887__$1 = state_33887;
if(cljs.core.truth_(inst_33874)){
var statearr_33914_36068 = state_33887__$1;
(statearr_33914_36068[(1)] = (5));

} else {
var statearr_33915_36069 = state_33887__$1;
(statearr_33915_36069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (5))){
var state_33887__$1 = state_33887;
var statearr_33917_36070 = state_33887__$1;
(statearr_33917_36070[(2)] = null);

(statearr_33917_36070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (6))){
var state_33887__$1 = state_33887;
var statearr_33919_36071 = state_33887__$1;
(statearr_33919_36071[(2)] = null);

(statearr_33919_36071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (7))){
var inst_33879 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33920_36072 = state_33887__$1;
(statearr_33920_36072[(2)] = inst_33879);

(statearr_33920_36072[(1)] = (3));


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
});})(__36047,c__33512__auto___36066,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async))
;
return ((function (__36047,switch__33214__auto__,c__33512__auto___36066,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0 = (function (){
var statearr_33923 = [null,null,null,null,null,null,null];
(statearr_33923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__);

(statearr_33923[(1)] = (1));

return statearr_33923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1 = (function (state_33887){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_33887);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e33924){var ex__33218__auto__ = e33924;
var statearr_33925_36073 = state_33887;
(statearr_33925_36073[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_33887[(4)]))){
var statearr_33927_36074 = state_33887;
(statearr_33927_36074[(1)] = cljs.core.first((state_33887[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36076 = state_33887;
state_33887 = G__36076;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = function(state_33887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1.call(this,state_33887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__;
})()
;})(__36047,switch__33214__auto__,c__33512__auto___36066,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async))
})();
var state__33514__auto__ = (function (){var statearr_33936 = f__33513__auto__();
(statearr_33936[(6)] = c__33512__auto___36066);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
});})(__36047,c__33512__auto___36066,G__33781_36048,G__33781_36049__$1,n__5636__auto___36046,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33781_36049__$1)].join('')));

}

var G__36077 = (__36047 + (1));
__36047 = G__36077;
continue;
} else {
}
break;
}

var c__33512__auto___36078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_33965){
var state_val_33966 = (state_33965[(1)]);
if((state_val_33966 === (7))){
var inst_33961 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33970_36079 = state_33965__$1;
(statearr_33970_36079[(2)] = inst_33961);

(statearr_33970_36079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (1))){
var state_33965__$1 = state_33965;
var statearr_33971_36080 = state_33965__$1;
(statearr_33971_36080[(2)] = null);

(statearr_33971_36080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (4))){
var inst_33946 = (state_33965[(7)]);
var inst_33946__$1 = (state_33965[(2)]);
var inst_33947 = (inst_33946__$1 == null);
var state_33965__$1 = (function (){var statearr_33975 = state_33965;
(statearr_33975[(7)] = inst_33946__$1);

return statearr_33975;
})();
if(cljs.core.truth_(inst_33947)){
var statearr_33976_36082 = state_33965__$1;
(statearr_33976_36082[(1)] = (5));

} else {
var statearr_33977_36084 = state_33965__$1;
(statearr_33977_36084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (6))){
var inst_33951 = (state_33965[(8)]);
var inst_33946 = (state_33965[(7)]);
var inst_33951__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33953 = [inst_33946,inst_33951__$1];
var inst_33954 = (new cljs.core.PersistentVector(null,2,(5),inst_33952,inst_33953,null));
var state_33965__$1 = (function (){var statearr_33983 = state_33965;
(statearr_33983[(8)] = inst_33951__$1);

return statearr_33983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33965__$1,(8),jobs,inst_33954);
} else {
if((state_val_33966 === (3))){
var inst_33963 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33965__$1,inst_33963);
} else {
if((state_val_33966 === (2))){
var state_33965__$1 = state_33965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33965__$1,(4),from);
} else {
if((state_val_33966 === (9))){
var inst_33958 = (state_33965[(2)]);
var state_33965__$1 = (function (){var statearr_34000 = state_33965;
(statearr_34000[(9)] = inst_33958);

return statearr_34000;
})();
var statearr_34001_36089 = state_33965__$1;
(statearr_34001_36089[(2)] = null);

(statearr_34001_36089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (5))){
var inst_33949 = cljs.core.async.close_BANG_(jobs);
var state_33965__$1 = state_33965;
var statearr_34002_36090 = state_33965__$1;
(statearr_34002_36090[(2)] = inst_33949);

(statearr_34002_36090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (8))){
var inst_33951 = (state_33965[(8)]);
var inst_33956 = (state_33965[(2)]);
var state_33965__$1 = (function (){var statearr_34004 = state_33965;
(statearr_34004[(10)] = inst_33956);

return statearr_34004;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33965__$1,(9),results,inst_33951);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0 = (function (){
var statearr_34005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__);

(statearr_34005[(1)] = (1));

return statearr_34005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1 = (function (state_33965){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_33965);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34006){var ex__33218__auto__ = e34006;
var statearr_34007_36097 = state_33965;
(statearr_34007_36097[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_33965[(4)]))){
var statearr_34008_36098 = state_33965;
(statearr_34008_36098[(1)] = cljs.core.first((state_33965[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36099 = state_33965;
state_33965 = G__36099;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = function(state_33965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1.call(this,state_33965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34010 = f__33513__auto__();
(statearr_34010[(6)] = c__33512__auto___36078);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));


var c__33512__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34049){
var state_val_34050 = (state_34049[(1)]);
if((state_val_34050 === (7))){
var inst_34045 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34051_36100 = state_34049__$1;
(statearr_34051_36100[(2)] = inst_34045);

(statearr_34051_36100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (20))){
var state_34049__$1 = state_34049;
var statearr_34053_36101 = state_34049__$1;
(statearr_34053_36101[(2)] = null);

(statearr_34053_36101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (1))){
var state_34049__$1 = state_34049;
var statearr_34054_36103 = state_34049__$1;
(statearr_34054_36103[(2)] = null);

(statearr_34054_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (4))){
var inst_34013 = (state_34049[(7)]);
var inst_34013__$1 = (state_34049[(2)]);
var inst_34014 = (inst_34013__$1 == null);
var state_34049__$1 = (function (){var statearr_34055 = state_34049;
(statearr_34055[(7)] = inst_34013__$1);

return statearr_34055;
})();
if(cljs.core.truth_(inst_34014)){
var statearr_34056_36105 = state_34049__$1;
(statearr_34056_36105[(1)] = (5));

} else {
var statearr_34057_36106 = state_34049__$1;
(statearr_34057_36106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (15))){
var inst_34026 = (state_34049[(8)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34049__$1,(18),to,inst_34026);
} else {
if((state_val_34050 === (21))){
var inst_34040 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34058_36107 = state_34049__$1;
(statearr_34058_36107[(2)] = inst_34040);

(statearr_34058_36107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (13))){
var inst_34042 = (state_34049[(2)]);
var state_34049__$1 = (function (){var statearr_34060 = state_34049;
(statearr_34060[(9)] = inst_34042);

return statearr_34060;
})();
var statearr_34061_36108 = state_34049__$1;
(statearr_34061_36108[(2)] = null);

(statearr_34061_36108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (6))){
var inst_34013 = (state_34049[(7)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34049__$1,(11),inst_34013);
} else {
if((state_val_34050 === (17))){
var inst_34035 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34035)){
var statearr_34070_36109 = state_34049__$1;
(statearr_34070_36109[(1)] = (19));

} else {
var statearr_34075_36110 = state_34049__$1;
(statearr_34075_36110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (3))){
var inst_34047 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34049__$1,inst_34047);
} else {
if((state_val_34050 === (12))){
var inst_34023 = (state_34049[(10)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34049__$1,(14),inst_34023);
} else {
if((state_val_34050 === (2))){
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34049__$1,(4),results);
} else {
if((state_val_34050 === (19))){
var state_34049__$1 = state_34049;
var statearr_34085_36113 = state_34049__$1;
(statearr_34085_36113[(2)] = null);

(statearr_34085_36113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (11))){
var inst_34023 = (state_34049[(2)]);
var state_34049__$1 = (function (){var statearr_34086 = state_34049;
(statearr_34086[(10)] = inst_34023);

return statearr_34086;
})();
var statearr_34087_36114 = state_34049__$1;
(statearr_34087_36114[(2)] = null);

(statearr_34087_36114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (9))){
var state_34049__$1 = state_34049;
var statearr_34088_36115 = state_34049__$1;
(statearr_34088_36115[(2)] = null);

(statearr_34088_36115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (5))){
var state_34049__$1 = state_34049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34089_36116 = state_34049__$1;
(statearr_34089_36116[(1)] = (8));

} else {
var statearr_34090_36117 = state_34049__$1;
(statearr_34090_36117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (14))){
var inst_34028 = (state_34049[(11)]);
var inst_34026 = (state_34049[(8)]);
var inst_34026__$1 = (state_34049[(2)]);
var inst_34027 = (inst_34026__$1 == null);
var inst_34028__$1 = cljs.core.not(inst_34027);
var state_34049__$1 = (function (){var statearr_34092 = state_34049;
(statearr_34092[(11)] = inst_34028__$1);

(statearr_34092[(8)] = inst_34026__$1);

return statearr_34092;
})();
if(inst_34028__$1){
var statearr_34093_36118 = state_34049__$1;
(statearr_34093_36118[(1)] = (15));

} else {
var statearr_34094_36119 = state_34049__$1;
(statearr_34094_36119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (16))){
var inst_34028 = (state_34049[(11)]);
var state_34049__$1 = state_34049;
var statearr_34095_36120 = state_34049__$1;
(statearr_34095_36120[(2)] = inst_34028);

(statearr_34095_36120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (10))){
var inst_34020 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34096_36121 = state_34049__$1;
(statearr_34096_36121[(2)] = inst_34020);

(statearr_34096_36121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (18))){
var inst_34032 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34097_36122 = state_34049__$1;
(statearr_34097_36122[(2)] = inst_34032);

(statearr_34097_36122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (8))){
var inst_34017 = cljs.core.async.close_BANG_(to);
var state_34049__$1 = state_34049;
var statearr_34099_36123 = state_34049__$1;
(statearr_34099_36123[(2)] = inst_34017);

(statearr_34099_36123[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0 = (function (){
var statearr_34100 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__);

(statearr_34100[(1)] = (1));

return statearr_34100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1 = (function (state_34049){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34049);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34101){var ex__33218__auto__ = e34101;
var statearr_34102_36124 = state_34049;
(statearr_34102_36124[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34049[(4)]))){
var statearr_34103_36125 = state_34049;
(statearr_34103_36125[(1)] = cljs.core.first((state_34049[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36127 = state_34049;
state_34049 = G__36127;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__ = function(state_34049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1.call(this,state_34049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34105 = f__33513__auto__();
(statearr_34105[(6)] = c__33512__auto__);

return statearr_34105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));

return c__33512__auto__;
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
var G__34107 = arguments.length;
switch (G__34107) {
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
var G__34111 = arguments.length;
switch (G__34111) {
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
var G__34115 = arguments.length;
switch (G__34115) {
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
var c__33512__auto___36140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34142){
var state_val_34143 = (state_34142[(1)]);
if((state_val_34143 === (7))){
var inst_34138 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
var statearr_34145_36142 = state_34142__$1;
(statearr_34145_36142[(2)] = inst_34138);

(statearr_34145_36142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (1))){
var state_34142__$1 = state_34142;
var statearr_34146_36143 = state_34142__$1;
(statearr_34146_36143[(2)] = null);

(statearr_34146_36143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (4))){
var inst_34119 = (state_34142[(7)]);
var inst_34119__$1 = (state_34142[(2)]);
var inst_34120 = (inst_34119__$1 == null);
var state_34142__$1 = (function (){var statearr_34147 = state_34142;
(statearr_34147[(7)] = inst_34119__$1);

return statearr_34147;
})();
if(cljs.core.truth_(inst_34120)){
var statearr_34148_36145 = state_34142__$1;
(statearr_34148_36145[(1)] = (5));

} else {
var statearr_34149_36146 = state_34142__$1;
(statearr_34149_36146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (13))){
var state_34142__$1 = state_34142;
var statearr_34150_36147 = state_34142__$1;
(statearr_34150_36147[(2)] = null);

(statearr_34150_36147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (6))){
var inst_34119 = (state_34142[(7)]);
var inst_34125 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34119) : p.call(null,inst_34119));
var state_34142__$1 = state_34142;
if(cljs.core.truth_(inst_34125)){
var statearr_34152_36149 = state_34142__$1;
(statearr_34152_36149[(1)] = (9));

} else {
var statearr_34153_36150 = state_34142__$1;
(statearr_34153_36150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (3))){
var inst_34140 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34142__$1,inst_34140);
} else {
if((state_val_34143 === (12))){
var state_34142__$1 = state_34142;
var statearr_34154_36151 = state_34142__$1;
(statearr_34154_36151[(2)] = null);

(statearr_34154_36151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (2))){
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34142__$1,(4),ch);
} else {
if((state_val_34143 === (11))){
var inst_34119 = (state_34142[(7)]);
var inst_34129 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34142__$1,(8),inst_34129,inst_34119);
} else {
if((state_val_34143 === (9))){
var state_34142__$1 = state_34142;
var statearr_34155_36153 = state_34142__$1;
(statearr_34155_36153[(2)] = tc);

(statearr_34155_36153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (5))){
var inst_34122 = cljs.core.async.close_BANG_(tc);
var inst_34123 = cljs.core.async.close_BANG_(fc);
var state_34142__$1 = (function (){var statearr_34157 = state_34142;
(statearr_34157[(8)] = inst_34122);

return statearr_34157;
})();
var statearr_34158_36159 = state_34142__$1;
(statearr_34158_36159[(2)] = inst_34123);

(statearr_34158_36159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (14))){
var inst_34136 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
var statearr_34159_36164 = state_34142__$1;
(statearr_34159_36164[(2)] = inst_34136);

(statearr_34159_36164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (10))){
var state_34142__$1 = state_34142;
var statearr_34160_36166 = state_34142__$1;
(statearr_34160_36166[(2)] = fc);

(statearr_34160_36166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (8))){
var inst_34131 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
if(cljs.core.truth_(inst_34131)){
var statearr_34161_36167 = state_34142__$1;
(statearr_34161_36167[(1)] = (12));

} else {
var statearr_34162_36168 = state_34142__$1;
(statearr_34162_36168[(1)] = (13));

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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_34164 = [null,null,null,null,null,null,null,null,null];
(statearr_34164[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_34164[(1)] = (1));

return statearr_34164;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_34142){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34142);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34165){var ex__33218__auto__ = e34165;
var statearr_34166_36174 = state_34142;
(statearr_34166_36174[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34142[(4)]))){
var statearr_34167_36175 = state_34142;
(statearr_34167_36175[(1)] = cljs.core.first((state_34142[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36176 = state_34142;
state_34142 = G__36176;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_34142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_34142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34169 = f__33513__auto__();
(statearr_34169[(6)] = c__33512__auto___36140);

return statearr_34169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var c__33512__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34192){
var state_val_34193 = (state_34192[(1)]);
if((state_val_34193 === (7))){
var inst_34188 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
var statearr_34195_36186 = state_34192__$1;
(statearr_34195_36186[(2)] = inst_34188);

(statearr_34195_36186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (1))){
var inst_34170 = init;
var inst_34171 = inst_34170;
var state_34192__$1 = (function (){var statearr_34196 = state_34192;
(statearr_34196[(7)] = inst_34171);

return statearr_34196;
})();
var statearr_34197_36187 = state_34192__$1;
(statearr_34197_36187[(2)] = null);

(statearr_34197_36187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (4))){
var inst_34175 = (state_34192[(8)]);
var inst_34175__$1 = (state_34192[(2)]);
var inst_34176 = (inst_34175__$1 == null);
var state_34192__$1 = (function (){var statearr_34198 = state_34192;
(statearr_34198[(8)] = inst_34175__$1);

return statearr_34198;
})();
if(cljs.core.truth_(inst_34176)){
var statearr_34199_36188 = state_34192__$1;
(statearr_34199_36188[(1)] = (5));

} else {
var statearr_34200_36189 = state_34192__$1;
(statearr_34200_36189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (6))){
var inst_34175 = (state_34192[(8)]);
var inst_34171 = (state_34192[(7)]);
var inst_34179 = (state_34192[(9)]);
var inst_34179__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34171,inst_34175) : f.call(null,inst_34171,inst_34175));
var inst_34180 = cljs.core.reduced_QMARK_(inst_34179__$1);
var state_34192__$1 = (function (){var statearr_34201 = state_34192;
(statearr_34201[(9)] = inst_34179__$1);

return statearr_34201;
})();
if(inst_34180){
var statearr_34203_36194 = state_34192__$1;
(statearr_34203_36194[(1)] = (8));

} else {
var statearr_34204_36195 = state_34192__$1;
(statearr_34204_36195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (3))){
var inst_34190 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34192__$1,inst_34190);
} else {
if((state_val_34193 === (2))){
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34192__$1,(4),ch);
} else {
if((state_val_34193 === (9))){
var inst_34179 = (state_34192[(9)]);
var inst_34171 = inst_34179;
var state_34192__$1 = (function (){var statearr_34205 = state_34192;
(statearr_34205[(7)] = inst_34171);

return statearr_34205;
})();
var statearr_34206_36196 = state_34192__$1;
(statearr_34206_36196[(2)] = null);

(statearr_34206_36196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (5))){
var inst_34171 = (state_34192[(7)]);
var state_34192__$1 = state_34192;
var statearr_34207_36197 = state_34192__$1;
(statearr_34207_36197[(2)] = inst_34171);

(statearr_34207_36197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (10))){
var inst_34186 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
var statearr_34209_36202 = state_34192__$1;
(statearr_34209_36202[(2)] = inst_34186);

(statearr_34209_36202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (8))){
var inst_34179 = (state_34192[(9)]);
var inst_34182 = cljs.core.deref(inst_34179);
var state_34192__$1 = state_34192;
var statearr_34210_36203 = state_34192__$1;
(statearr_34210_36203[(2)] = inst_34182);

(statearr_34210_36203[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33215__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33215__auto____0 = (function (){
var statearr_34211 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34211[(0)] = cljs$core$async$reduce_$_state_machine__33215__auto__);

(statearr_34211[(1)] = (1));

return statearr_34211;
});
var cljs$core$async$reduce_$_state_machine__33215__auto____1 = (function (state_34192){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34192);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34212){var ex__33218__auto__ = e34212;
var statearr_34214_36206 = state_34192;
(statearr_34214_36206[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34192[(4)]))){
var statearr_34215_36207 = state_34192;
(statearr_34215_36207[(1)] = cljs.core.first((state_34192[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36209 = state_34192;
state_34192 = G__36209;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33215__auto__ = function(state_34192){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33215__auto____1.call(this,state_34192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33215__auto____0;
cljs$core$async$reduce_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33215__auto____1;
return cljs$core$async$reduce_$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34216 = f__33513__auto__();
(statearr_34216[(6)] = c__33512__auto__);

return statearr_34216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));

return c__33512__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33512__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34223){
var state_val_34224 = (state_34223[(1)]);
if((state_val_34224 === (1))){
var inst_34218 = cljs.core.async.reduce(f__$1,init,ch);
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34223__$1,(2),inst_34218);
} else {
if((state_val_34224 === (2))){
var inst_34220 = (state_34223[(2)]);
var inst_34221 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34220) : f__$1.call(null,inst_34220));
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34223__$1,inst_34221);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33215__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33215__auto____0 = (function (){
var statearr_34226 = [null,null,null,null,null,null,null];
(statearr_34226[(0)] = cljs$core$async$transduce_$_state_machine__33215__auto__);

(statearr_34226[(1)] = (1));

return statearr_34226;
});
var cljs$core$async$transduce_$_state_machine__33215__auto____1 = (function (state_34223){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34223);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34227){var ex__33218__auto__ = e34227;
var statearr_34228_36212 = state_34223;
(statearr_34228_36212[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34223[(4)]))){
var statearr_34229_36213 = state_34223;
(statearr_34229_36213[(1)] = cljs.core.first((state_34223[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36214 = state_34223;
state_34223 = G__36214;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33215__auto__ = function(state_34223){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33215__auto____1.call(this,state_34223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33215__auto____0;
cljs$core$async$transduce_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33215__auto____1;
return cljs$core$async$transduce_$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34230 = f__33513__auto__();
(statearr_34230[(6)] = c__33512__auto__);

return statearr_34230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));

return c__33512__auto__;
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
var G__34233 = arguments.length;
switch (G__34233) {
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
var c__33512__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34241 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34262_36217 = state_34259__$1;
(statearr_34262_36217[(2)] = inst_34241);

(statearr_34262_36217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var inst_34235 = cljs.core.seq(coll);
var inst_34236 = inst_34235;
var state_34259__$1 = (function (){var statearr_34263 = state_34259;
(statearr_34263[(7)] = inst_34236);

return statearr_34263;
})();
var statearr_34264_36223 = state_34259__$1;
(statearr_34264_36223[(2)] = null);

(statearr_34264_36223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var inst_34236 = (state_34259[(7)]);
var inst_34239 = cljs.core.first(inst_34236);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34259__$1,(7),ch,inst_34239);
} else {
if((state_val_34260 === (13))){
var inst_34253 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34266_36227 = state_34259__$1;
(statearr_34266_36227[(2)] = inst_34253);

(statearr_34266_36227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34244 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34244)){
var statearr_34267_36228 = state_34259__$1;
(statearr_34267_36228[(1)] = (8));

} else {
var statearr_34268_36229 = state_34259__$1;
(statearr_34268_36229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34259__$1,inst_34257);
} else {
if((state_val_34260 === (12))){
var state_34259__$1 = state_34259;
var statearr_34270_36233 = state_34259__$1;
(statearr_34270_36233[(2)] = null);

(statearr_34270_36233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (2))){
var inst_34236 = (state_34259[(7)]);
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34236)){
var statearr_34271_36234 = state_34259__$1;
(statearr_34271_36234[(1)] = (4));

} else {
var statearr_34272_36235 = state_34259__$1;
(statearr_34272_36235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (11))){
var inst_34250 = cljs.core.async.close_BANG_(ch);
var state_34259__$1 = state_34259;
var statearr_34273_36239 = state_34259__$1;
(statearr_34273_36239[(2)] = inst_34250);

(statearr_34273_36239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (9))){
var state_34259__$1 = state_34259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34274_36240 = state_34259__$1;
(statearr_34274_36240[(1)] = (11));

} else {
var statearr_34275_36241 = state_34259__$1;
(statearr_34275_36241[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var inst_34236 = (state_34259[(7)]);
var state_34259__$1 = state_34259;
var statearr_34277_36242 = state_34259__$1;
(statearr_34277_36242[(2)] = inst_34236);

(statearr_34277_36242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34278_36243 = state_34259__$1;
(statearr_34278_36243[(2)] = inst_34255);

(statearr_34278_36243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (8))){
var inst_34236 = (state_34259[(7)]);
var inst_34246 = cljs.core.next(inst_34236);
var inst_34236__$1 = inst_34246;
var state_34259__$1 = (function (){var statearr_34279 = state_34259;
(statearr_34279[(7)] = inst_34236__$1);

return statearr_34279;
})();
var statearr_34280_36247 = state_34259__$1;
(statearr_34280_36247[(2)] = null);

(statearr_34280_36247[(1)] = (2));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_34281 = [null,null,null,null,null,null,null,null];
(statearr_34281[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_34281[(1)] = (1));

return statearr_34281;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_34259){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34259);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34283){var ex__33218__auto__ = e34283;
var statearr_34284_36248 = state_34259;
(statearr_34284_36248[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34259[(4)]))){
var statearr_34285_36249 = state_34259;
(statearr_34285_36249[(1)] = cljs.core.first((state_34259[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36255 = state_34259;
state_34259 = G__36255;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34286 = f__33513__auto__();
(statearr_34286[(6)] = c__33512__auto__);

return statearr_34286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));

return c__33512__auto__;
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
var G__34290 = arguments.length;
switch (G__34290) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36285 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_36285(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36297 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_36297(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36306 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_36306(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36321 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_36321(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34304 = (function (ch,cs,meta34305){
this.ch = ch;
this.cs = cs;
this.meta34305 = meta34305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34306,meta34305__$1){
var self__ = this;
var _34306__$1 = this;
return (new cljs.core.async.t_cljs$core$async34304(self__.ch,self__.cs,meta34305__$1));
}));

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34306){
var self__ = this;
var _34306__$1 = this;
return self__.meta34305;
}));

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34305","meta34305",1943992026,null)], null);
}));

(cljs.core.async.t_cljs$core$async34304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34304");

(cljs.core.async.t_cljs$core$async34304.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34304.
 */
cljs.core.async.__GT_t_cljs$core$async34304 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34304(ch__$1,cs__$1,meta34305){
return (new cljs.core.async.t_cljs$core$async34304(ch__$1,cs__$1,meta34305));
});

}

return (new cljs.core.async.t_cljs$core$async34304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33512__auto___36366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34495){
var state_val_34496 = (state_34495[(1)]);
if((state_val_34496 === (7))){
var inst_34487 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34502_36375 = state_34495__$1;
(statearr_34502_36375[(2)] = inst_34487);

(statearr_34502_36375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (20))){
var inst_34372 = (state_34495[(7)]);
var inst_34388 = cljs.core.first(inst_34372);
var inst_34389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34388,(0),null);
var inst_34390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34388,(1),null);
var state_34495__$1 = (function (){var statearr_34507 = state_34495;
(statearr_34507[(8)] = inst_34389);

return statearr_34507;
})();
if(cljs.core.truth_(inst_34390)){
var statearr_34508_36379 = state_34495__$1;
(statearr_34508_36379[(1)] = (22));

} else {
var statearr_34511_36380 = state_34495__$1;
(statearr_34511_36380[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (27))){
var inst_34422 = (state_34495[(9)]);
var inst_34424 = (state_34495[(10)]);
var inst_34432 = (state_34495[(11)]);
var inst_34333 = (state_34495[(12)]);
var inst_34432__$1 = cljs.core._nth(inst_34422,inst_34424);
var inst_34434 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34432__$1,inst_34333,done);
var state_34495__$1 = (function (){var statearr_34517 = state_34495;
(statearr_34517[(11)] = inst_34432__$1);

return statearr_34517;
})();
if(cljs.core.truth_(inst_34434)){
var statearr_34518_36389 = state_34495__$1;
(statearr_34518_36389[(1)] = (30));

} else {
var statearr_34520_36390 = state_34495__$1;
(statearr_34520_36390[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (1))){
var state_34495__$1 = state_34495;
var statearr_34524_36391 = state_34495__$1;
(statearr_34524_36391[(2)] = null);

(statearr_34524_36391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (24))){
var inst_34372 = (state_34495[(7)]);
var inst_34396 = (state_34495[(2)]);
var inst_34397 = cljs.core.next(inst_34372);
var inst_34343 = inst_34397;
var inst_34344 = null;
var inst_34345 = (0);
var inst_34346 = (0);
var state_34495__$1 = (function (){var statearr_34526 = state_34495;
(statearr_34526[(13)] = inst_34345);

(statearr_34526[(14)] = inst_34344);

(statearr_34526[(15)] = inst_34346);

(statearr_34526[(16)] = inst_34396);

(statearr_34526[(17)] = inst_34343);

return statearr_34526;
})();
var statearr_34530_36397 = state_34495__$1;
(statearr_34530_36397[(2)] = null);

(statearr_34530_36397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (39))){
var state_34495__$1 = state_34495;
var statearr_34538_36398 = state_34495__$1;
(statearr_34538_36398[(2)] = null);

(statearr_34538_36398[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (4))){
var inst_34333 = (state_34495[(12)]);
var inst_34333__$1 = (state_34495[(2)]);
var inst_34334 = (inst_34333__$1 == null);
var state_34495__$1 = (function (){var statearr_34543 = state_34495;
(statearr_34543[(12)] = inst_34333__$1);

return statearr_34543;
})();
if(cljs.core.truth_(inst_34334)){
var statearr_34544_36400 = state_34495__$1;
(statearr_34544_36400[(1)] = (5));

} else {
var statearr_34546_36402 = state_34495__$1;
(statearr_34546_36402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (15))){
var inst_34345 = (state_34495[(13)]);
var inst_34344 = (state_34495[(14)]);
var inst_34346 = (state_34495[(15)]);
var inst_34343 = (state_34495[(17)]);
var inst_34365 = (state_34495[(2)]);
var inst_34368 = (inst_34346 + (1));
var tmp34532 = inst_34345;
var tmp34533 = inst_34344;
var tmp34534 = inst_34343;
var inst_34343__$1 = tmp34534;
var inst_34344__$1 = tmp34533;
var inst_34345__$1 = tmp34532;
var inst_34346__$1 = inst_34368;
var state_34495__$1 = (function (){var statearr_34552 = state_34495;
(statearr_34552[(13)] = inst_34345__$1);

(statearr_34552[(14)] = inst_34344__$1);

(statearr_34552[(15)] = inst_34346__$1);

(statearr_34552[(18)] = inst_34365);

(statearr_34552[(17)] = inst_34343__$1);

return statearr_34552;
})();
var statearr_34555_36405 = state_34495__$1;
(statearr_34555_36405[(2)] = null);

(statearr_34555_36405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (21))){
var inst_34400 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34562_36406 = state_34495__$1;
(statearr_34562_36406[(2)] = inst_34400);

(statearr_34562_36406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (31))){
var inst_34432 = (state_34495[(11)]);
var inst_34437 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34432);
var state_34495__$1 = state_34495;
var statearr_34566_36407 = state_34495__$1;
(statearr_34566_36407[(2)] = inst_34437);

(statearr_34566_36407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (32))){
var inst_34422 = (state_34495[(9)]);
var inst_34421 = (state_34495[(19)]);
var inst_34424 = (state_34495[(10)]);
var inst_34423 = (state_34495[(20)]);
var inst_34439 = (state_34495[(2)]);
var inst_34440 = (inst_34424 + (1));
var tmp34557 = inst_34422;
var tmp34558 = inst_34421;
var tmp34559 = inst_34423;
var inst_34421__$1 = tmp34558;
var inst_34422__$1 = tmp34557;
var inst_34423__$1 = tmp34559;
var inst_34424__$1 = inst_34440;
var state_34495__$1 = (function (){var statearr_34572 = state_34495;
(statearr_34572[(9)] = inst_34422__$1);

(statearr_34572[(19)] = inst_34421__$1);

(statearr_34572[(10)] = inst_34424__$1);

(statearr_34572[(21)] = inst_34439);

(statearr_34572[(20)] = inst_34423__$1);

return statearr_34572;
})();
var statearr_34576_36410 = state_34495__$1;
(statearr_34576_36410[(2)] = null);

(statearr_34576_36410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (40))){
var inst_34457 = (state_34495[(22)]);
var inst_34461 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34457);
var state_34495__$1 = state_34495;
var statearr_34579_36417 = state_34495__$1;
(statearr_34579_36417[(2)] = inst_34461);

(statearr_34579_36417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (33))){
var inst_34444 = (state_34495[(23)]);
var inst_34448 = cljs.core.chunked_seq_QMARK_(inst_34444);
var state_34495__$1 = state_34495;
if(inst_34448){
var statearr_34583_36425 = state_34495__$1;
(statearr_34583_36425[(1)] = (36));

} else {
var statearr_34585_36426 = state_34495__$1;
(statearr_34585_36426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (13))){
var inst_34359 = (state_34495[(24)]);
var inst_34362 = cljs.core.async.close_BANG_(inst_34359);
var state_34495__$1 = state_34495;
var statearr_34589_36427 = state_34495__$1;
(statearr_34589_36427[(2)] = inst_34362);

(statearr_34589_36427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (22))){
var inst_34389 = (state_34495[(8)]);
var inst_34393 = cljs.core.async.close_BANG_(inst_34389);
var state_34495__$1 = state_34495;
var statearr_34594_36429 = state_34495__$1;
(statearr_34594_36429[(2)] = inst_34393);

(statearr_34594_36429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (36))){
var inst_34444 = (state_34495[(23)]);
var inst_34451 = cljs.core.chunk_first(inst_34444);
var inst_34452 = cljs.core.chunk_rest(inst_34444);
var inst_34453 = cljs.core.count(inst_34451);
var inst_34421 = inst_34452;
var inst_34422 = inst_34451;
var inst_34423 = inst_34453;
var inst_34424 = (0);
var state_34495__$1 = (function (){var statearr_34600 = state_34495;
(statearr_34600[(9)] = inst_34422);

(statearr_34600[(19)] = inst_34421);

(statearr_34600[(10)] = inst_34424);

(statearr_34600[(20)] = inst_34423);

return statearr_34600;
})();
var statearr_34602_36437 = state_34495__$1;
(statearr_34602_36437[(2)] = null);

(statearr_34602_36437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (41))){
var inst_34444 = (state_34495[(23)]);
var inst_34463 = (state_34495[(2)]);
var inst_34464 = cljs.core.next(inst_34444);
var inst_34421 = inst_34464;
var inst_34422 = null;
var inst_34423 = (0);
var inst_34424 = (0);
var state_34495__$1 = (function (){var statearr_34610 = state_34495;
(statearr_34610[(25)] = inst_34463);

(statearr_34610[(9)] = inst_34422);

(statearr_34610[(19)] = inst_34421);

(statearr_34610[(10)] = inst_34424);

(statearr_34610[(20)] = inst_34423);

return statearr_34610;
})();
var statearr_34613_36449 = state_34495__$1;
(statearr_34613_36449[(2)] = null);

(statearr_34613_36449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (43))){
var state_34495__$1 = state_34495;
var statearr_34616_36455 = state_34495__$1;
(statearr_34616_36455[(2)] = null);

(statearr_34616_36455[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (29))){
var inst_34474 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34620_36456 = state_34495__$1;
(statearr_34620_36456[(2)] = inst_34474);

(statearr_34620_36456[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (44))){
var inst_34484 = (state_34495[(2)]);
var state_34495__$1 = (function (){var statearr_34622 = state_34495;
(statearr_34622[(26)] = inst_34484);

return statearr_34622;
})();
var statearr_34623_36461 = state_34495__$1;
(statearr_34623_36461[(2)] = null);

(statearr_34623_36461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (6))){
var inst_34413 = (state_34495[(27)]);
var inst_34412 = cljs.core.deref(cs);
var inst_34413__$1 = cljs.core.keys(inst_34412);
var inst_34414 = cljs.core.count(inst_34413__$1);
var inst_34415 = cljs.core.reset_BANG_(dctr,inst_34414);
var inst_34420 = cljs.core.seq(inst_34413__$1);
var inst_34421 = inst_34420;
var inst_34422 = null;
var inst_34423 = (0);
var inst_34424 = (0);
var state_34495__$1 = (function (){var statearr_34630 = state_34495;
(statearr_34630[(9)] = inst_34422);

(statearr_34630[(19)] = inst_34421);

(statearr_34630[(10)] = inst_34424);

(statearr_34630[(27)] = inst_34413__$1);

(statearr_34630[(20)] = inst_34423);

(statearr_34630[(28)] = inst_34415);

return statearr_34630;
})();
var statearr_34634_36463 = state_34495__$1;
(statearr_34634_36463[(2)] = null);

(statearr_34634_36463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (28))){
var inst_34421 = (state_34495[(19)]);
var inst_34444 = (state_34495[(23)]);
var inst_34444__$1 = cljs.core.seq(inst_34421);
var state_34495__$1 = (function (){var statearr_34638 = state_34495;
(statearr_34638[(23)] = inst_34444__$1);

return statearr_34638;
})();
if(inst_34444__$1){
var statearr_34640_36469 = state_34495__$1;
(statearr_34640_36469[(1)] = (33));

} else {
var statearr_34641_36470 = state_34495__$1;
(statearr_34641_36470[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (25))){
var inst_34424 = (state_34495[(10)]);
var inst_34423 = (state_34495[(20)]);
var inst_34427 = (inst_34424 < inst_34423);
var inst_34428 = inst_34427;
var state_34495__$1 = state_34495;
if(cljs.core.truth_(inst_34428)){
var statearr_34646_36475 = state_34495__$1;
(statearr_34646_36475[(1)] = (27));

} else {
var statearr_34647_36476 = state_34495__$1;
(statearr_34647_36476[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (34))){
var state_34495__$1 = state_34495;
var statearr_34649_36477 = state_34495__$1;
(statearr_34649_36477[(2)] = null);

(statearr_34649_36477[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (17))){
var state_34495__$1 = state_34495;
var statearr_34653_36478 = state_34495__$1;
(statearr_34653_36478[(2)] = null);

(statearr_34653_36478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (3))){
var inst_34489 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34495__$1,inst_34489);
} else {
if((state_val_34496 === (12))){
var inst_34406 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34658_36482 = state_34495__$1;
(statearr_34658_36482[(2)] = inst_34406);

(statearr_34658_36482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (2))){
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34495__$1,(4),ch);
} else {
if((state_val_34496 === (23))){
var state_34495__$1 = state_34495;
var statearr_34663_36485 = state_34495__$1;
(statearr_34663_36485[(2)] = null);

(statearr_34663_36485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (35))){
var inst_34472 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34667_36486 = state_34495__$1;
(statearr_34667_36486[(2)] = inst_34472);

(statearr_34667_36486[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (19))){
var inst_34372 = (state_34495[(7)]);
var inst_34377 = cljs.core.chunk_first(inst_34372);
var inst_34378 = cljs.core.chunk_rest(inst_34372);
var inst_34381 = cljs.core.count(inst_34377);
var inst_34343 = inst_34378;
var inst_34344 = inst_34377;
var inst_34345 = inst_34381;
var inst_34346 = (0);
var state_34495__$1 = (function (){var statearr_34668 = state_34495;
(statearr_34668[(13)] = inst_34345);

(statearr_34668[(14)] = inst_34344);

(statearr_34668[(15)] = inst_34346);

(statearr_34668[(17)] = inst_34343);

return statearr_34668;
})();
var statearr_34669_36494 = state_34495__$1;
(statearr_34669_36494[(2)] = null);

(statearr_34669_36494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (11))){
var inst_34372 = (state_34495[(7)]);
var inst_34343 = (state_34495[(17)]);
var inst_34372__$1 = cljs.core.seq(inst_34343);
var state_34495__$1 = (function (){var statearr_34670 = state_34495;
(statearr_34670[(7)] = inst_34372__$1);

return statearr_34670;
})();
if(inst_34372__$1){
var statearr_34671_36499 = state_34495__$1;
(statearr_34671_36499[(1)] = (16));

} else {
var statearr_34672_36506 = state_34495__$1;
(statearr_34672_36506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (9))){
var inst_34409 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34675_36513 = state_34495__$1;
(statearr_34675_36513[(2)] = inst_34409);

(statearr_34675_36513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (5))){
var inst_34341 = cljs.core.deref(cs);
var inst_34342 = cljs.core.seq(inst_34341);
var inst_34343 = inst_34342;
var inst_34344 = null;
var inst_34345 = (0);
var inst_34346 = (0);
var state_34495__$1 = (function (){var statearr_34676 = state_34495;
(statearr_34676[(13)] = inst_34345);

(statearr_34676[(14)] = inst_34344);

(statearr_34676[(15)] = inst_34346);

(statearr_34676[(17)] = inst_34343);

return statearr_34676;
})();
var statearr_34677_36526 = state_34495__$1;
(statearr_34677_36526[(2)] = null);

(statearr_34677_36526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (14))){
var state_34495__$1 = state_34495;
var statearr_34678_36527 = state_34495__$1;
(statearr_34678_36527[(2)] = null);

(statearr_34678_36527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (45))){
var inst_34481 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34679_36528 = state_34495__$1;
(statearr_34679_36528[(2)] = inst_34481);

(statearr_34679_36528[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (26))){
var inst_34413 = (state_34495[(27)]);
var inst_34477 = (state_34495[(2)]);
var inst_34478 = cljs.core.seq(inst_34413);
var state_34495__$1 = (function (){var statearr_34680 = state_34495;
(statearr_34680[(29)] = inst_34477);

return statearr_34680;
})();
if(inst_34478){
var statearr_34681_36529 = state_34495__$1;
(statearr_34681_36529[(1)] = (42));

} else {
var statearr_34682_36530 = state_34495__$1;
(statearr_34682_36530[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (16))){
var inst_34372 = (state_34495[(7)]);
var inst_34375 = cljs.core.chunked_seq_QMARK_(inst_34372);
var state_34495__$1 = state_34495;
if(inst_34375){
var statearr_34683_36541 = state_34495__$1;
(statearr_34683_36541[(1)] = (19));

} else {
var statearr_34684_36542 = state_34495__$1;
(statearr_34684_36542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (38))){
var inst_34469 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34685_36543 = state_34495__$1;
(statearr_34685_36543[(2)] = inst_34469);

(statearr_34685_36543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (30))){
var state_34495__$1 = state_34495;
var statearr_34686_36550 = state_34495__$1;
(statearr_34686_36550[(2)] = null);

(statearr_34686_36550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (10))){
var inst_34344 = (state_34495[(14)]);
var inst_34346 = (state_34495[(15)]);
var inst_34357 = cljs.core._nth(inst_34344,inst_34346);
var inst_34359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34357,(0),null);
var inst_34360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34357,(1),null);
var state_34495__$1 = (function (){var statearr_34687 = state_34495;
(statearr_34687[(24)] = inst_34359);

return statearr_34687;
})();
if(cljs.core.truth_(inst_34360)){
var statearr_34688_36571 = state_34495__$1;
(statearr_34688_36571[(1)] = (13));

} else {
var statearr_34689_36572 = state_34495__$1;
(statearr_34689_36572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (18))){
var inst_34403 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34690_36573 = state_34495__$1;
(statearr_34690_36573[(2)] = inst_34403);

(statearr_34690_36573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (42))){
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34495__$1,(45),dchan);
} else {
if((state_val_34496 === (37))){
var inst_34457 = (state_34495[(22)]);
var inst_34333 = (state_34495[(12)]);
var inst_34444 = (state_34495[(23)]);
var inst_34457__$1 = cljs.core.first(inst_34444);
var inst_34458 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34457__$1,inst_34333,done);
var state_34495__$1 = (function (){var statearr_34691 = state_34495;
(statearr_34691[(22)] = inst_34457__$1);

return statearr_34691;
})();
if(cljs.core.truth_(inst_34458)){
var statearr_34692_36590 = state_34495__$1;
(statearr_34692_36590[(1)] = (39));

} else {
var statearr_34693_36592 = state_34495__$1;
(statearr_34693_36592[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (8))){
var inst_34345 = (state_34495[(13)]);
var inst_34346 = (state_34495[(15)]);
var inst_34351 = (inst_34346 < inst_34345);
var inst_34352 = inst_34351;
var state_34495__$1 = state_34495;
if(cljs.core.truth_(inst_34352)){
var statearr_34694_36597 = state_34495__$1;
(statearr_34694_36597[(1)] = (10));

} else {
var statearr_34695_36602 = state_34495__$1;
(statearr_34695_36602[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33215__auto__ = null;
var cljs$core$async$mult_$_state_machine__33215__auto____0 = (function (){
var statearr_34698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34698[(0)] = cljs$core$async$mult_$_state_machine__33215__auto__);

(statearr_34698[(1)] = (1));

return statearr_34698;
});
var cljs$core$async$mult_$_state_machine__33215__auto____1 = (function (state_34495){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34495);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34703){var ex__33218__auto__ = e34703;
var statearr_34704_36613 = state_34495;
(statearr_34704_36613[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34495[(4)]))){
var statearr_34705_36614 = state_34495;
(statearr_34705_36614[(1)] = cljs.core.first((state_34495[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36615 = state_34495;
state_34495 = G__36615;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33215__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33215__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33215__auto____0;
cljs$core$async$mult_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33215__auto____1;
return cljs$core$async$mult_$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34711 = f__33513__auto__();
(statearr_34711[(6)] = c__33512__auto___36366);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var G__34720 = arguments.length;
switch (G__34720) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36619 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36619(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36626 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36626(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36628 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36628(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36633 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36633(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36634 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36634(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36636 = arguments.length;
var i__5770__auto___36637 = (0);
while(true){
if((i__5770__auto___36637 < len__5769__auto___36636)){
args__5775__auto__.push((arguments[i__5770__auto___36637]));

var G__36644 = (i__5770__auto___36637 + (1));
i__5770__auto___36637 = G__36644;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34781){
var map__34786 = p__34781;
var map__34786__$1 = cljs.core.__destructure_map(map__34786);
var opts = map__34786__$1;
var statearr_34787_36646 = state;
(statearr_34787_36646[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34792_36647 = state;
(statearr_34792_36647[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34796_36648 = state;
(statearr_34796_36648[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34776){
var G__34777 = cljs.core.first(seq34776);
var seq34776__$1 = cljs.core.next(seq34776);
var G__34778 = cljs.core.first(seq34776__$1);
var seq34776__$2 = cljs.core.next(seq34776__$1);
var G__34779 = cljs.core.first(seq34776__$2);
var seq34776__$3 = cljs.core.next(seq34776__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34777,G__34778,G__34779,seq34776__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34811 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34812){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34812 = meta34812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34813,meta34812__$1){
var self__ = this;
var _34813__$1 = this;
return (new cljs.core.async.t_cljs$core$async34811(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34812__$1));
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34813){
var self__ = this;
var _34813__$1 = this;
return self__.meta34812;
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34811.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34812","meta34812",-1415170476,null)], null);
}));

(cljs.core.async.t_cljs$core$async34811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34811");

(cljs.core.async.t_cljs$core$async34811.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34811.
 */
cljs.core.async.__GT_t_cljs$core$async34811 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34811(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34812){
return (new cljs.core.async.t_cljs$core$async34811(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34812));
});

}

return (new cljs.core.async.t_cljs$core$async34811(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33512__auto___36668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_34884){
var state_val_34885 = (state_34884[(1)]);
if((state_val_34885 === (7))){
var inst_34843 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
if(cljs.core.truth_(inst_34843)){
var statearr_34887_36670 = state_34884__$1;
(statearr_34887_36670[(1)] = (8));

} else {
var statearr_34888_36671 = state_34884__$1;
(statearr_34888_36671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (20))){
var inst_34836 = (state_34884[(7)]);
var state_34884__$1 = state_34884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34884__$1,(23),out,inst_34836);
} else {
if((state_val_34885 === (1))){
var inst_34819 = calc_state();
var inst_34820 = cljs.core.__destructure_map(inst_34819);
var inst_34821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34824 = inst_34819;
var state_34884__$1 = (function (){var statearr_34891 = state_34884;
(statearr_34891[(8)] = inst_34824);

(statearr_34891[(9)] = inst_34822);

(statearr_34891[(10)] = inst_34823);

(statearr_34891[(11)] = inst_34821);

return statearr_34891;
})();
var statearr_34892_36676 = state_34884__$1;
(statearr_34892_36676[(2)] = null);

(statearr_34892_36676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (24))){
var inst_34827 = (state_34884[(12)]);
var inst_34824 = inst_34827;
var state_34884__$1 = (function (){var statearr_34893 = state_34884;
(statearr_34893[(8)] = inst_34824);

return statearr_34893;
})();
var statearr_34894_36677 = state_34884__$1;
(statearr_34894_36677[(2)] = null);

(statearr_34894_36677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (4))){
var inst_34836 = (state_34884[(7)]);
var inst_34838 = (state_34884[(13)]);
var inst_34835 = (state_34884[(2)]);
var inst_34836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34835,(0),null);
var inst_34837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34835,(1),null);
var inst_34838__$1 = (inst_34836__$1 == null);
var state_34884__$1 = (function (){var statearr_34896 = state_34884;
(statearr_34896[(14)] = inst_34837);

(statearr_34896[(7)] = inst_34836__$1);

(statearr_34896[(13)] = inst_34838__$1);

return statearr_34896;
})();
if(cljs.core.truth_(inst_34838__$1)){
var statearr_34898_36678 = state_34884__$1;
(statearr_34898_36678[(1)] = (5));

} else {
var statearr_34899_36679 = state_34884__$1;
(statearr_34899_36679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (15))){
var inst_34857 = (state_34884[(15)]);
var inst_34828 = (state_34884[(16)]);
var inst_34857__$1 = cljs.core.empty_QMARK_(inst_34828);
var state_34884__$1 = (function (){var statearr_34900 = state_34884;
(statearr_34900[(15)] = inst_34857__$1);

return statearr_34900;
})();
if(inst_34857__$1){
var statearr_34901_36681 = state_34884__$1;
(statearr_34901_36681[(1)] = (17));

} else {
var statearr_34902_36682 = state_34884__$1;
(statearr_34902_36682[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (21))){
var inst_34827 = (state_34884[(12)]);
var inst_34824 = inst_34827;
var state_34884__$1 = (function (){var statearr_34903 = state_34884;
(statearr_34903[(8)] = inst_34824);

return statearr_34903;
})();
var statearr_34904_36683 = state_34884__$1;
(statearr_34904_36683[(2)] = null);

(statearr_34904_36683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (13))){
var inst_34850 = (state_34884[(2)]);
var inst_34851 = calc_state();
var inst_34824 = inst_34851;
var state_34884__$1 = (function (){var statearr_34905 = state_34884;
(statearr_34905[(8)] = inst_34824);

(statearr_34905[(17)] = inst_34850);

return statearr_34905;
})();
var statearr_34906_36686 = state_34884__$1;
(statearr_34906_36686[(2)] = null);

(statearr_34906_36686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (22))){
var inst_34877 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
var statearr_34907_36687 = state_34884__$1;
(statearr_34907_36687[(2)] = inst_34877);

(statearr_34907_36687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (6))){
var inst_34837 = (state_34884[(14)]);
var inst_34841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34837,change);
var state_34884__$1 = state_34884;
var statearr_34908_36688 = state_34884__$1;
(statearr_34908_36688[(2)] = inst_34841);

(statearr_34908_36688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (25))){
var state_34884__$1 = state_34884;
var statearr_34909_36691 = state_34884__$1;
(statearr_34909_36691[(2)] = null);

(statearr_34909_36691[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (17))){
var inst_34829 = (state_34884[(18)]);
var inst_34837 = (state_34884[(14)]);
var inst_34859 = (inst_34829.cljs$core$IFn$_invoke$arity$1 ? inst_34829.cljs$core$IFn$_invoke$arity$1(inst_34837) : inst_34829.call(null,inst_34837));
var inst_34860 = cljs.core.not(inst_34859);
var state_34884__$1 = state_34884;
var statearr_34912_36695 = state_34884__$1;
(statearr_34912_36695[(2)] = inst_34860);

(statearr_34912_36695[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (3))){
var inst_34881 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34884__$1,inst_34881);
} else {
if((state_val_34885 === (12))){
var state_34884__$1 = state_34884;
var statearr_34913_36697 = state_34884__$1;
(statearr_34913_36697[(2)] = null);

(statearr_34913_36697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (2))){
var inst_34824 = (state_34884[(8)]);
var inst_34827 = (state_34884[(12)]);
var inst_34827__$1 = cljs.core.__destructure_map(inst_34824);
var inst_34828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34827__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34827__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34827__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34884__$1 = (function (){var statearr_34918 = state_34884;
(statearr_34918[(18)] = inst_34829);

(statearr_34918[(16)] = inst_34828);

(statearr_34918[(12)] = inst_34827__$1);

return statearr_34918;
})();
return cljs.core.async.ioc_alts_BANG_(state_34884__$1,(4),inst_34830);
} else {
if((state_val_34885 === (23))){
var inst_34868 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
if(cljs.core.truth_(inst_34868)){
var statearr_34919_36702 = state_34884__$1;
(statearr_34919_36702[(1)] = (24));

} else {
var statearr_34920_36703 = state_34884__$1;
(statearr_34920_36703[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (19))){
var inst_34863 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
var statearr_34922_36706 = state_34884__$1;
(statearr_34922_36706[(2)] = inst_34863);

(statearr_34922_36706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (11))){
var inst_34837 = (state_34884[(14)]);
var inst_34847 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34837);
var state_34884__$1 = state_34884;
var statearr_34925_36711 = state_34884__$1;
(statearr_34925_36711[(2)] = inst_34847);

(statearr_34925_36711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (9))){
var inst_34837 = (state_34884[(14)]);
var inst_34828 = (state_34884[(16)]);
var inst_34854 = (state_34884[(19)]);
var inst_34854__$1 = (inst_34828.cljs$core$IFn$_invoke$arity$1 ? inst_34828.cljs$core$IFn$_invoke$arity$1(inst_34837) : inst_34828.call(null,inst_34837));
var state_34884__$1 = (function (){var statearr_34927 = state_34884;
(statearr_34927[(19)] = inst_34854__$1);

return statearr_34927;
})();
if(cljs.core.truth_(inst_34854__$1)){
var statearr_34929_36713 = state_34884__$1;
(statearr_34929_36713[(1)] = (14));

} else {
var statearr_34930_36715 = state_34884__$1;
(statearr_34930_36715[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (5))){
var inst_34838 = (state_34884[(13)]);
var state_34884__$1 = state_34884;
var statearr_34931_36716 = state_34884__$1;
(statearr_34931_36716[(2)] = inst_34838);

(statearr_34931_36716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (14))){
var inst_34854 = (state_34884[(19)]);
var state_34884__$1 = state_34884;
var statearr_34932_36719 = state_34884__$1;
(statearr_34932_36719[(2)] = inst_34854);

(statearr_34932_36719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (26))){
var inst_34873 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
var statearr_34936_36720 = state_34884__$1;
(statearr_34936_36720[(2)] = inst_34873);

(statearr_34936_36720[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (16))){
var inst_34865 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
if(cljs.core.truth_(inst_34865)){
var statearr_34937_36723 = state_34884__$1;
(statearr_34937_36723[(1)] = (20));

} else {
var statearr_34938_36724 = state_34884__$1;
(statearr_34938_36724[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (10))){
var inst_34879 = (state_34884[(2)]);
var state_34884__$1 = state_34884;
var statearr_34939_36725 = state_34884__$1;
(statearr_34939_36725[(2)] = inst_34879);

(statearr_34939_36725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (18))){
var inst_34857 = (state_34884[(15)]);
var state_34884__$1 = state_34884;
var statearr_34940_36726 = state_34884__$1;
(statearr_34940_36726[(2)] = inst_34857);

(statearr_34940_36726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34885 === (8))){
var inst_34836 = (state_34884[(7)]);
var inst_34845 = (inst_34836 == null);
var state_34884__$1 = state_34884;
if(cljs.core.truth_(inst_34845)){
var statearr_34941_36727 = state_34884__$1;
(statearr_34941_36727[(1)] = (11));

} else {
var statearr_34942_36728 = state_34884__$1;
(statearr_34942_36728[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__33215__auto__ = null;
var cljs$core$async$mix_$_state_machine__33215__auto____0 = (function (){
var statearr_34962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34962[(0)] = cljs$core$async$mix_$_state_machine__33215__auto__);

(statearr_34962[(1)] = (1));

return statearr_34962;
});
var cljs$core$async$mix_$_state_machine__33215__auto____1 = (function (state_34884){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_34884);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e34963){var ex__33218__auto__ = e34963;
var statearr_34964_36733 = state_34884;
(statearr_34964_36733[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_34884[(4)]))){
var statearr_34965_36734 = state_34884;
(statearr_34965_36734[(1)] = cljs.core.first((state_34884[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36737 = state_34884;
state_34884 = G__36737;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33215__auto__ = function(state_34884){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33215__auto____1.call(this,state_34884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33215__auto____0;
cljs$core$async$mix_$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33215__auto____1;
return cljs$core$async$mix_$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_34976 = f__33513__auto__();
(statearr_34976[(6)] = c__33512__auto___36668);

return statearr_34976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36741 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36741(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36744 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36744(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36750 = (function() {
var G__36751 = null;
var G__36751__1 = (function (p){
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
var G__36751__2 = (function (p,v){
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
G__36751 = function(p,v){
switch(arguments.length){
case 1:
return G__36751__1.call(this,p);
case 2:
return G__36751__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36751.cljs$core$IFn$_invoke$arity$1 = G__36751__1;
G__36751.cljs$core$IFn$_invoke$arity$2 = G__36751__2;
return G__36751;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34993 = arguments.length;
switch (G__34993) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36750(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36750(p,v);
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
var G__35003 = arguments.length;
switch (G__35003) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35001_SHARP_){
if(cljs.core.truth_((p1__35001_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35001_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35001_SHARP_.call(null,topic)))){
return p1__35001_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35001_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35004 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35005){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35005 = meta35005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35006,meta35005__$1){
var self__ = this;
var _35006__$1 = this;
return (new cljs.core.async.t_cljs$core$async35004(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35005__$1));
}));

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35006){
var self__ = this;
var _35006__$1 = this;
return self__.meta35005;
}));

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35005","meta35005",510100040,null)], null);
}));

(cljs.core.async.t_cljs$core$async35004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35004");

(cljs.core.async.t_cljs$core$async35004.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35004.
 */
cljs.core.async.__GT_t_cljs$core$async35004 = (function cljs$core$async$__GT_t_cljs$core$async35004(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35005){
return (new cljs.core.async.t_cljs$core$async35004(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35005));
});

}

return (new cljs.core.async.t_cljs$core$async35004(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33512__auto___36769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35090){
var state_val_35091 = (state_35090[(1)]);
if((state_val_35091 === (7))){
var inst_35086 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35092_36773 = state_35090__$1;
(statearr_35092_36773[(2)] = inst_35086);

(statearr_35092_36773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (20))){
var state_35090__$1 = state_35090;
var statearr_35093_36774 = state_35090__$1;
(statearr_35093_36774[(2)] = null);

(statearr_35093_36774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (1))){
var state_35090__$1 = state_35090;
var statearr_35094_36776 = state_35090__$1;
(statearr_35094_36776[(2)] = null);

(statearr_35094_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (24))){
var inst_35069 = (state_35090[(7)]);
var inst_35078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35069);
var state_35090__$1 = state_35090;
var statearr_35095_36777 = state_35090__$1;
(statearr_35095_36777[(2)] = inst_35078);

(statearr_35095_36777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (4))){
var inst_35016 = (state_35090[(8)]);
var inst_35016__$1 = (state_35090[(2)]);
var inst_35017 = (inst_35016__$1 == null);
var state_35090__$1 = (function (){var statearr_35100 = state_35090;
(statearr_35100[(8)] = inst_35016__$1);

return statearr_35100;
})();
if(cljs.core.truth_(inst_35017)){
var statearr_35101_36782 = state_35090__$1;
(statearr_35101_36782[(1)] = (5));

} else {
var statearr_35102_36784 = state_35090__$1;
(statearr_35102_36784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (15))){
var inst_35063 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35103_36789 = state_35090__$1;
(statearr_35103_36789[(2)] = inst_35063);

(statearr_35103_36789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (21))){
var inst_35083 = (state_35090[(2)]);
var state_35090__$1 = (function (){var statearr_35104 = state_35090;
(statearr_35104[(9)] = inst_35083);

return statearr_35104;
})();
var statearr_35105_36794 = state_35090__$1;
(statearr_35105_36794[(2)] = null);

(statearr_35105_36794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (13))){
var inst_35042 = (state_35090[(10)]);
var inst_35047 = cljs.core.chunked_seq_QMARK_(inst_35042);
var state_35090__$1 = state_35090;
if(inst_35047){
var statearr_35110_36798 = state_35090__$1;
(statearr_35110_36798[(1)] = (16));

} else {
var statearr_35111_36799 = state_35090__$1;
(statearr_35111_36799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (22))){
var inst_35075 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35075)){
var statearr_35112_36800 = state_35090__$1;
(statearr_35112_36800[(1)] = (23));

} else {
var statearr_35113_36805 = state_35090__$1;
(statearr_35113_36805[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (6))){
var inst_35016 = (state_35090[(8)]);
var inst_35071 = (state_35090[(11)]);
var inst_35069 = (state_35090[(7)]);
var inst_35069__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35016) : topic_fn.call(null,inst_35016));
var inst_35070 = cljs.core.deref(mults);
var inst_35071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35070,inst_35069__$1);
var state_35090__$1 = (function (){var statearr_35114 = state_35090;
(statearr_35114[(11)] = inst_35071__$1);

(statearr_35114[(7)] = inst_35069__$1);

return statearr_35114;
})();
if(cljs.core.truth_(inst_35071__$1)){
var statearr_35115_36809 = state_35090__$1;
(statearr_35115_36809[(1)] = (19));

} else {
var statearr_35116_36810 = state_35090__$1;
(statearr_35116_36810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (25))){
var inst_35080 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35117_36811 = state_35090__$1;
(statearr_35117_36811[(2)] = inst_35080);

(statearr_35117_36811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (17))){
var inst_35042 = (state_35090[(10)]);
var inst_35054 = cljs.core.first(inst_35042);
var inst_35055 = cljs.core.async.muxch_STAR_(inst_35054);
var inst_35056 = cljs.core.async.close_BANG_(inst_35055);
var inst_35057 = cljs.core.next(inst_35042);
var inst_35026 = inst_35057;
var inst_35027 = null;
var inst_35028 = (0);
var inst_35029 = (0);
var state_35090__$1 = (function (){var statearr_35118 = state_35090;
(statearr_35118[(12)] = inst_35026);

(statearr_35118[(13)] = inst_35027);

(statearr_35118[(14)] = inst_35056);

(statearr_35118[(15)] = inst_35029);

(statearr_35118[(16)] = inst_35028);

return statearr_35118;
})();
var statearr_35119_36815 = state_35090__$1;
(statearr_35119_36815[(2)] = null);

(statearr_35119_36815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (3))){
var inst_35088 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35090__$1,inst_35088);
} else {
if((state_val_35091 === (12))){
var inst_35065 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35120_36818 = state_35090__$1;
(statearr_35120_36818[(2)] = inst_35065);

(statearr_35120_36818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (2))){
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35090__$1,(4),ch);
} else {
if((state_val_35091 === (23))){
var state_35090__$1 = state_35090;
var statearr_35121_36823 = state_35090__$1;
(statearr_35121_36823[(2)] = null);

(statearr_35121_36823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (19))){
var inst_35016 = (state_35090[(8)]);
var inst_35071 = (state_35090[(11)]);
var inst_35073 = cljs.core.async.muxch_STAR_(inst_35071);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35090__$1,(22),inst_35073,inst_35016);
} else {
if((state_val_35091 === (11))){
var inst_35026 = (state_35090[(12)]);
var inst_35042 = (state_35090[(10)]);
var inst_35042__$1 = cljs.core.seq(inst_35026);
var state_35090__$1 = (function (){var statearr_35124 = state_35090;
(statearr_35124[(10)] = inst_35042__$1);

return statearr_35124;
})();
if(inst_35042__$1){
var statearr_35125_36826 = state_35090__$1;
(statearr_35125_36826[(1)] = (13));

} else {
var statearr_35126_36827 = state_35090__$1;
(statearr_35126_36827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (9))){
var inst_35067 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35127_36828 = state_35090__$1;
(statearr_35127_36828[(2)] = inst_35067);

(statearr_35127_36828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (5))){
var inst_35023 = cljs.core.deref(mults);
var inst_35024 = cljs.core.vals(inst_35023);
var inst_35025 = cljs.core.seq(inst_35024);
var inst_35026 = inst_35025;
var inst_35027 = null;
var inst_35028 = (0);
var inst_35029 = (0);
var state_35090__$1 = (function (){var statearr_35128 = state_35090;
(statearr_35128[(12)] = inst_35026);

(statearr_35128[(13)] = inst_35027);

(statearr_35128[(15)] = inst_35029);

(statearr_35128[(16)] = inst_35028);

return statearr_35128;
})();
var statearr_35132_36833 = state_35090__$1;
(statearr_35132_36833[(2)] = null);

(statearr_35132_36833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (14))){
var state_35090__$1 = state_35090;
var statearr_35136_36834 = state_35090__$1;
(statearr_35136_36834[(2)] = null);

(statearr_35136_36834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (16))){
var inst_35042 = (state_35090[(10)]);
var inst_35049 = cljs.core.chunk_first(inst_35042);
var inst_35050 = cljs.core.chunk_rest(inst_35042);
var inst_35051 = cljs.core.count(inst_35049);
var inst_35026 = inst_35050;
var inst_35027 = inst_35049;
var inst_35028 = inst_35051;
var inst_35029 = (0);
var state_35090__$1 = (function (){var statearr_35137 = state_35090;
(statearr_35137[(12)] = inst_35026);

(statearr_35137[(13)] = inst_35027);

(statearr_35137[(15)] = inst_35029);

(statearr_35137[(16)] = inst_35028);

return statearr_35137;
})();
var statearr_35138_36837 = state_35090__$1;
(statearr_35138_36837[(2)] = null);

(statearr_35138_36837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (10))){
var inst_35026 = (state_35090[(12)]);
var inst_35027 = (state_35090[(13)]);
var inst_35029 = (state_35090[(15)]);
var inst_35028 = (state_35090[(16)]);
var inst_35035 = cljs.core._nth(inst_35027,inst_35029);
var inst_35036 = cljs.core.async.muxch_STAR_(inst_35035);
var inst_35037 = cljs.core.async.close_BANG_(inst_35036);
var inst_35038 = (inst_35029 + (1));
var tmp35133 = inst_35026;
var tmp35134 = inst_35027;
var tmp35135 = inst_35028;
var inst_35026__$1 = tmp35133;
var inst_35027__$1 = tmp35134;
var inst_35028__$1 = tmp35135;
var inst_35029__$1 = inst_35038;
var state_35090__$1 = (function (){var statearr_35139 = state_35090;
(statearr_35139[(17)] = inst_35037);

(statearr_35139[(12)] = inst_35026__$1);

(statearr_35139[(13)] = inst_35027__$1);

(statearr_35139[(15)] = inst_35029__$1);

(statearr_35139[(16)] = inst_35028__$1);

return statearr_35139;
})();
var statearr_35140_36840 = state_35090__$1;
(statearr_35140_36840[(2)] = null);

(statearr_35140_36840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (18))){
var inst_35060 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35141_36845 = state_35090__$1;
(statearr_35141_36845[(2)] = inst_35060);

(statearr_35141_36845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (8))){
var inst_35029 = (state_35090[(15)]);
var inst_35028 = (state_35090[(16)]);
var inst_35032 = (inst_35029 < inst_35028);
var inst_35033 = inst_35032;
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35033)){
var statearr_35142_36846 = state_35090__$1;
(statearr_35142_36846[(1)] = (10));

} else {
var statearr_35143_36847 = state_35090__$1;
(statearr_35143_36847[(1)] = (11));

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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35144[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35144[(1)] = (1));

return statearr_35144;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35090){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35090);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35145){var ex__33218__auto__ = e35145;
var statearr_35146_36849 = state_35090;
(statearr_35146_36849[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35090[(4)]))){
var statearr_35147_36853 = state_35090;
(statearr_35147_36853[(1)] = cljs.core.first((state_35090[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36854 = state_35090;
state_35090 = G__36854;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35148 = f__33513__auto__();
(statearr_35148[(6)] = c__33512__auto___36769);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var G__35150 = arguments.length;
switch (G__35150) {
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
var G__35152 = arguments.length;
switch (G__35152) {
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
var G__35154 = arguments.length;
switch (G__35154) {
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
var c__33512__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35201){
var state_val_35202 = (state_35201[(1)]);
if((state_val_35202 === (7))){
var state_35201__$1 = state_35201;
var statearr_35203_36875 = state_35201__$1;
(statearr_35203_36875[(2)] = null);

(statearr_35203_36875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (1))){
var state_35201__$1 = state_35201;
var statearr_35205_36876 = state_35201__$1;
(statearr_35205_36876[(2)] = null);

(statearr_35205_36876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (4))){
var inst_35159 = (state_35201[(7)]);
var inst_35158 = (state_35201[(8)]);
var inst_35161 = (inst_35159 < inst_35158);
var state_35201__$1 = state_35201;
if(cljs.core.truth_(inst_35161)){
var statearr_35209_36880 = state_35201__$1;
(statearr_35209_36880[(1)] = (6));

} else {
var statearr_35210_36882 = state_35201__$1;
(statearr_35210_36882[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (15))){
var inst_35187 = (state_35201[(9)]);
var inst_35192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35187);
var state_35201__$1 = state_35201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35201__$1,(17),out,inst_35192);
} else {
if((state_val_35202 === (13))){
var inst_35187 = (state_35201[(9)]);
var inst_35187__$1 = (state_35201[(2)]);
var inst_35188 = cljs.core.some(cljs.core.nil_QMARK_,inst_35187__$1);
var state_35201__$1 = (function (){var statearr_35211 = state_35201;
(statearr_35211[(9)] = inst_35187__$1);

return statearr_35211;
})();
if(cljs.core.truth_(inst_35188)){
var statearr_35212_36887 = state_35201__$1;
(statearr_35212_36887[(1)] = (14));

} else {
var statearr_35213_36888 = state_35201__$1;
(statearr_35213_36888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (6))){
var state_35201__$1 = state_35201;
var statearr_35214_36889 = state_35201__$1;
(statearr_35214_36889[(2)] = null);

(statearr_35214_36889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (17))){
var inst_35194 = (state_35201[(2)]);
var state_35201__$1 = (function (){var statearr_35216 = state_35201;
(statearr_35216[(10)] = inst_35194);

return statearr_35216;
})();
var statearr_35217_36892 = state_35201__$1;
(statearr_35217_36892[(2)] = null);

(statearr_35217_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (3))){
var inst_35199 = (state_35201[(2)]);
var state_35201__$1 = state_35201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35201__$1,inst_35199);
} else {
if((state_val_35202 === (12))){
var _ = (function (){var statearr_35218 = state_35201;
(statearr_35218[(4)] = cljs.core.rest((state_35201[(4)])));

return statearr_35218;
})();
var state_35201__$1 = state_35201;
var ex35215 = (state_35201__$1[(2)]);
var statearr_35219_36900 = state_35201__$1;
(statearr_35219_36900[(5)] = ex35215);


if((ex35215 instanceof Object)){
var statearr_35234_36901 = state_35201__$1;
(statearr_35234_36901[(1)] = (11));

(statearr_35234_36901[(5)] = null);

} else {
throw ex35215;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (2))){
var inst_35157 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35158 = cnt;
var inst_35159 = (0);
var state_35201__$1 = (function (){var statearr_35249 = state_35201;
(statearr_35249[(7)] = inst_35159);

(statearr_35249[(11)] = inst_35157);

(statearr_35249[(8)] = inst_35158);

return statearr_35249;
})();
var statearr_35256_36905 = state_35201__$1;
(statearr_35256_36905[(2)] = null);

(statearr_35256_36905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (11))){
var inst_35166 = (state_35201[(2)]);
var inst_35167 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35201__$1 = (function (){var statearr_35263 = state_35201;
(statearr_35263[(12)] = inst_35166);

return statearr_35263;
})();
var statearr_35264_36907 = state_35201__$1;
(statearr_35264_36907[(2)] = inst_35167);

(statearr_35264_36907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (9))){
var inst_35159 = (state_35201[(7)]);
var _ = (function (){var statearr_35265 = state_35201;
(statearr_35265[(4)] = cljs.core.cons((12),(state_35201[(4)])));

return statearr_35265;
})();
var inst_35173 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35159) : chs__$1.call(null,inst_35159));
var inst_35174 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35159) : done.call(null,inst_35159));
var inst_35175 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35173,inst_35174);
var ___$1 = (function (){var statearr_35266 = state_35201;
(statearr_35266[(4)] = cljs.core.rest((state_35201[(4)])));

return statearr_35266;
})();
var state_35201__$1 = state_35201;
var statearr_35269_36911 = state_35201__$1;
(statearr_35269_36911[(2)] = inst_35175);

(statearr_35269_36911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (5))){
var inst_35185 = (state_35201[(2)]);
var state_35201__$1 = (function (){var statearr_35270 = state_35201;
(statearr_35270[(13)] = inst_35185);

return statearr_35270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35201__$1,(13),dchan);
} else {
if((state_val_35202 === (14))){
var inst_35190 = cljs.core.async.close_BANG_(out);
var state_35201__$1 = state_35201;
var statearr_35271_36913 = state_35201__$1;
(statearr_35271_36913[(2)] = inst_35190);

(statearr_35271_36913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (16))){
var inst_35197 = (state_35201[(2)]);
var state_35201__$1 = state_35201;
var statearr_35273_36915 = state_35201__$1;
(statearr_35273_36915[(2)] = inst_35197);

(statearr_35273_36915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (10))){
var inst_35159 = (state_35201[(7)]);
var inst_35178 = (state_35201[(2)]);
var inst_35179 = (inst_35159 + (1));
var inst_35159__$1 = inst_35179;
var state_35201__$1 = (function (){var statearr_35274 = state_35201;
(statearr_35274[(7)] = inst_35159__$1);

(statearr_35274[(14)] = inst_35178);

return statearr_35274;
})();
var statearr_35275_36919 = state_35201__$1;
(statearr_35275_36919[(2)] = null);

(statearr_35275_36919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35202 === (8))){
var inst_35183 = (state_35201[(2)]);
var state_35201__$1 = state_35201;
var statearr_35276_36920 = state_35201__$1;
(statearr_35276_36920[(2)] = inst_35183);

(statearr_35276_36920[(1)] = (5));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35277[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35277[(1)] = (1));

return statearr_35277;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35201){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35201);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35281){var ex__33218__auto__ = e35281;
var statearr_35282_36921 = state_35201;
(statearr_35282_36921[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35201[(4)]))){
var statearr_35283_36922 = state_35201;
(statearr_35283_36922[(1)] = cljs.core.first((state_35201[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36923 = state_35201;
state_35201 = G__36923;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35284 = f__33513__auto__();
(statearr_35284[(6)] = c__33512__auto___36874);

return statearr_35284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var G__35287 = arguments.length;
switch (G__35287) {
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
var c__33512__auto___36926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35319){
var state_val_35320 = (state_35319[(1)]);
if((state_val_35320 === (7))){
var inst_35298 = (state_35319[(7)]);
var inst_35299 = (state_35319[(8)]);
var inst_35298__$1 = (state_35319[(2)]);
var inst_35299__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35298__$1,(0),null);
var inst_35300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35298__$1,(1),null);
var inst_35301 = (inst_35299__$1 == null);
var state_35319__$1 = (function (){var statearr_35321 = state_35319;
(statearr_35321[(7)] = inst_35298__$1);

(statearr_35321[(9)] = inst_35300);

(statearr_35321[(8)] = inst_35299__$1);

return statearr_35321;
})();
if(cljs.core.truth_(inst_35301)){
var statearr_35322_36927 = state_35319__$1;
(statearr_35322_36927[(1)] = (8));

} else {
var statearr_35323_36928 = state_35319__$1;
(statearr_35323_36928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (1))){
var inst_35288 = cljs.core.vec(chs);
var inst_35289 = inst_35288;
var state_35319__$1 = (function (){var statearr_35324 = state_35319;
(statearr_35324[(10)] = inst_35289);

return statearr_35324;
})();
var statearr_35325_36929 = state_35319__$1;
(statearr_35325_36929[(2)] = null);

(statearr_35325_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (4))){
var inst_35289 = (state_35319[(10)]);
var state_35319__$1 = state_35319;
return cljs.core.async.ioc_alts_BANG_(state_35319__$1,(7),inst_35289);
} else {
if((state_val_35320 === (6))){
var inst_35315 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
var statearr_35326_36931 = state_35319__$1;
(statearr_35326_36931[(2)] = inst_35315);

(statearr_35326_36931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (3))){
var inst_35317 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35319__$1,inst_35317);
} else {
if((state_val_35320 === (2))){
var inst_35289 = (state_35319[(10)]);
var inst_35291 = cljs.core.count(inst_35289);
var inst_35292 = (inst_35291 > (0));
var state_35319__$1 = state_35319;
if(cljs.core.truth_(inst_35292)){
var statearr_35328_36932 = state_35319__$1;
(statearr_35328_36932[(1)] = (4));

} else {
var statearr_35329_36937 = state_35319__$1;
(statearr_35329_36937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (11))){
var inst_35289 = (state_35319[(10)]);
var inst_35308 = (state_35319[(2)]);
var tmp35327 = inst_35289;
var inst_35289__$1 = tmp35327;
var state_35319__$1 = (function (){var statearr_35330 = state_35319;
(statearr_35330[(10)] = inst_35289__$1);

(statearr_35330[(11)] = inst_35308);

return statearr_35330;
})();
var statearr_35331_36941 = state_35319__$1;
(statearr_35331_36941[(2)] = null);

(statearr_35331_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (9))){
var inst_35299 = (state_35319[(8)]);
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35319__$1,(11),out,inst_35299);
} else {
if((state_val_35320 === (5))){
var inst_35313 = cljs.core.async.close_BANG_(out);
var state_35319__$1 = state_35319;
var statearr_35332_36945 = state_35319__$1;
(statearr_35332_36945[(2)] = inst_35313);

(statearr_35332_36945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (10))){
var inst_35311 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
var statearr_35335_36947 = state_35319__$1;
(statearr_35335_36947[(2)] = inst_35311);

(statearr_35335_36947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (8))){
var inst_35298 = (state_35319[(7)]);
var inst_35289 = (state_35319[(10)]);
var inst_35300 = (state_35319[(9)]);
var inst_35299 = (state_35319[(8)]);
var inst_35303 = (function (){var cs = inst_35289;
var vec__35294 = inst_35298;
var v = inst_35299;
var c = inst_35300;
return (function (p1__35285_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35285_SHARP_);
});
})();
var inst_35304 = cljs.core.filterv(inst_35303,inst_35289);
var inst_35289__$1 = inst_35304;
var state_35319__$1 = (function (){var statearr_35345 = state_35319;
(statearr_35345[(10)] = inst_35289__$1);

return statearr_35345;
})();
var statearr_35346_36948 = state_35319__$1;
(statearr_35346_36948[(2)] = null);

(statearr_35346_36948[(1)] = (2));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35347[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35347[(1)] = (1));

return statearr_35347;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35319){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35319);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35348){var ex__33218__auto__ = e35348;
var statearr_35349_36949 = state_35319;
(statearr_35349_36949[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35319[(4)]))){
var statearr_35350_36952 = state_35319;
(statearr_35350_36952[(1)] = cljs.core.first((state_35319[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36955 = state_35319;
state_35319 = G__36955;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35351 = f__33513__auto__();
(statearr_35351[(6)] = c__33512__auto___36926);

return statearr_35351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var G__35353 = arguments.length;
switch (G__35353) {
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
var c__33512__auto___36965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35377){
var state_val_35378 = (state_35377[(1)]);
if((state_val_35378 === (7))){
var inst_35359 = (state_35377[(7)]);
var inst_35359__$1 = (state_35377[(2)]);
var inst_35360 = (inst_35359__$1 == null);
var inst_35361 = cljs.core.not(inst_35360);
var state_35377__$1 = (function (){var statearr_35379 = state_35377;
(statearr_35379[(7)] = inst_35359__$1);

return statearr_35379;
})();
if(inst_35361){
var statearr_35380_36968 = state_35377__$1;
(statearr_35380_36968[(1)] = (8));

} else {
var statearr_35381_36970 = state_35377__$1;
(statearr_35381_36970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (1))){
var inst_35354 = (0);
var state_35377__$1 = (function (){var statearr_35382 = state_35377;
(statearr_35382[(8)] = inst_35354);

return statearr_35382;
})();
var statearr_35384_36977 = state_35377__$1;
(statearr_35384_36977[(2)] = null);

(statearr_35384_36977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (4))){
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35377__$1,(7),ch);
} else {
if((state_val_35378 === (6))){
var inst_35372 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35386_36979 = state_35377__$1;
(statearr_35386_36979[(2)] = inst_35372);

(statearr_35386_36979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (3))){
var inst_35374 = (state_35377[(2)]);
var inst_35375 = cljs.core.async.close_BANG_(out);
var state_35377__$1 = (function (){var statearr_35387 = state_35377;
(statearr_35387[(9)] = inst_35374);

return statearr_35387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35377__$1,inst_35375);
} else {
if((state_val_35378 === (2))){
var inst_35354 = (state_35377[(8)]);
var inst_35356 = (inst_35354 < n);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35356)){
var statearr_35390_36985 = state_35377__$1;
(statearr_35390_36985[(1)] = (4));

} else {
var statearr_35391_36988 = state_35377__$1;
(statearr_35391_36988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (11))){
var inst_35354 = (state_35377[(8)]);
var inst_35364 = (state_35377[(2)]);
var inst_35365 = (inst_35354 + (1));
var inst_35354__$1 = inst_35365;
var state_35377__$1 = (function (){var statearr_35392 = state_35377;
(statearr_35392[(8)] = inst_35354__$1);

(statearr_35392[(10)] = inst_35364);

return statearr_35392;
})();
var statearr_35393_36996 = state_35377__$1;
(statearr_35393_36996[(2)] = null);

(statearr_35393_36996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (9))){
var state_35377__$1 = state_35377;
var statearr_35395_37001 = state_35377__$1;
(statearr_35395_37001[(2)] = null);

(statearr_35395_37001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (5))){
var state_35377__$1 = state_35377;
var statearr_35397_37002 = state_35377__$1;
(statearr_35397_37002[(2)] = null);

(statearr_35397_37002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (10))){
var inst_35369 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35398_37004 = state_35377__$1;
(statearr_35398_37004[(2)] = inst_35369);

(statearr_35398_37004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (8))){
var inst_35359 = (state_35377[(7)]);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35377__$1,(11),out,inst_35359);
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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35400[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35400[(1)] = (1));

return statearr_35400;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35377){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35377);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35402){var ex__33218__auto__ = e35402;
var statearr_35403_37013 = state_35377;
(statearr_35403_37013[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35377[(4)]))){
var statearr_35404_37017 = state_35377;
(statearr_35404_37017[(1)] = cljs.core.first((state_35377[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37018 = state_35377;
state_35377 = G__37018;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35405 = f__33513__auto__();
(statearr_35405[(6)] = c__33512__auto___36965);

return statearr_35405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35407 = (function (f,ch,meta35408){
this.f = f;
this.ch = ch;
this.meta35408 = meta35408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35409,meta35408__$1){
var self__ = this;
var _35409__$1 = this;
return (new cljs.core.async.t_cljs$core$async35407(self__.f,self__.ch,meta35408__$1));
}));

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35409){
var self__ = this;
var _35409__$1 = this;
return self__.meta35408;
}));

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35410 = (function (f,ch,meta35408,_,fn1,meta35411){
this.f = f;
this.ch = ch;
this.meta35408 = meta35408;
this._ = _;
this.fn1 = fn1;
this.meta35411 = meta35411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35412,meta35411__$1){
var self__ = this;
var _35412__$1 = this;
return (new cljs.core.async.t_cljs$core$async35410(self__.f,self__.ch,self__.meta35408,self__._,self__.fn1,meta35411__$1));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35412){
var self__ = this;
var _35412__$1 = this;
return self__.meta35411;
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35406_SHARP_){
var G__35416 = (((p1__35406_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35406_SHARP_) : self__.f.call(null,p1__35406_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35416) : f1.call(null,G__35416));
});
}));

(cljs.core.async.t_cljs$core$async35410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35408","meta35408",1149793499,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35407","cljs.core.async/t_cljs$core$async35407",2064273477,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35411","meta35411",-2003753180,null)], null);
}));

(cljs.core.async.t_cljs$core$async35410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35410");

(cljs.core.async.t_cljs$core$async35410.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35410.
 */
cljs.core.async.__GT_t_cljs$core$async35410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35410(f__$1,ch__$1,meta35408__$1,___$2,fn1__$1,meta35411){
return (new cljs.core.async.t_cljs$core$async35410(f__$1,ch__$1,meta35408__$1,___$2,fn1__$1,meta35411));
});

}

return (new cljs.core.async.t_cljs$core$async35410(self__.f,self__.ch,self__.meta35408,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35430 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35430) : self__.f.call(null,G__35430));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35408","meta35408",1149793499,null)], null);
}));

(cljs.core.async.t_cljs$core$async35407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35407");

(cljs.core.async.t_cljs$core$async35407.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35407.
 */
cljs.core.async.__GT_t_cljs$core$async35407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35407(f__$1,ch__$1,meta35408){
return (new cljs.core.async.t_cljs$core$async35407(f__$1,ch__$1,meta35408));
});

}

return (new cljs.core.async.t_cljs$core$async35407(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35441 = (function (f,ch,meta35442){
this.f = f;
this.ch = ch;
this.meta35442 = meta35442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35443,meta35442__$1){
var self__ = this;
var _35443__$1 = this;
return (new cljs.core.async.t_cljs$core$async35441(self__.f,self__.ch,meta35442__$1));
}));

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35443){
var self__ = this;
var _35443__$1 = this;
return self__.meta35442;
}));

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35442","meta35442",721544951,null)], null);
}));

(cljs.core.async.t_cljs$core$async35441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35441");

(cljs.core.async.t_cljs$core$async35441.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35441.
 */
cljs.core.async.__GT_t_cljs$core$async35441 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35441(f__$1,ch__$1,meta35442){
return (new cljs.core.async.t_cljs$core$async35441(f__$1,ch__$1,meta35442));
});

}

return (new cljs.core.async.t_cljs$core$async35441(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35463 = (function (p,ch,meta35464){
this.p = p;
this.ch = ch;
this.meta35464 = meta35464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35465,meta35464__$1){
var self__ = this;
var _35465__$1 = this;
return (new cljs.core.async.t_cljs$core$async35463(self__.p,self__.ch,meta35464__$1));
}));

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35465){
var self__ = this;
var _35465__$1 = this;
return self__.meta35464;
}));

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35464","meta35464",-1742580376,null)], null);
}));

(cljs.core.async.t_cljs$core$async35463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35463");

(cljs.core.async.t_cljs$core$async35463.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35463.
 */
cljs.core.async.__GT_t_cljs$core$async35463 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35463(p__$1,ch__$1,meta35464){
return (new cljs.core.async.t_cljs$core$async35463(p__$1,ch__$1,meta35464));
});

}

return (new cljs.core.async.t_cljs$core$async35463(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35467 = arguments.length;
switch (G__35467) {
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
var c__33512__auto___37054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35488){
var state_val_35489 = (state_35488[(1)]);
if((state_val_35489 === (7))){
var inst_35484 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35492_37055 = state_35488__$1;
(statearr_35492_37055[(2)] = inst_35484);

(statearr_35492_37055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (1))){
var state_35488__$1 = state_35488;
var statearr_35493_37056 = state_35488__$1;
(statearr_35493_37056[(2)] = null);

(statearr_35493_37056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (4))){
var inst_35470 = (state_35488[(7)]);
var inst_35470__$1 = (state_35488[(2)]);
var inst_35471 = (inst_35470__$1 == null);
var state_35488__$1 = (function (){var statearr_35494 = state_35488;
(statearr_35494[(7)] = inst_35470__$1);

return statearr_35494;
})();
if(cljs.core.truth_(inst_35471)){
var statearr_35495_37057 = state_35488__$1;
(statearr_35495_37057[(1)] = (5));

} else {
var statearr_35496_37058 = state_35488__$1;
(statearr_35496_37058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (6))){
var inst_35470 = (state_35488[(7)]);
var inst_35475 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35470) : p.call(null,inst_35470));
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35475)){
var statearr_35498_37060 = state_35488__$1;
(statearr_35498_37060[(1)] = (8));

} else {
var statearr_35500_37061 = state_35488__$1;
(statearr_35500_37061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (3))){
var inst_35486 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35488__$1,inst_35486);
} else {
if((state_val_35489 === (2))){
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35488__$1,(4),ch);
} else {
if((state_val_35489 === (11))){
var inst_35478 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35510_37062 = state_35488__$1;
(statearr_35510_37062[(2)] = inst_35478);

(statearr_35510_37062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (9))){
var state_35488__$1 = state_35488;
var statearr_35512_37063 = state_35488__$1;
(statearr_35512_37063[(2)] = null);

(statearr_35512_37063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (5))){
var inst_35473 = cljs.core.async.close_BANG_(out);
var state_35488__$1 = state_35488;
var statearr_35513_37064 = state_35488__$1;
(statearr_35513_37064[(2)] = inst_35473);

(statearr_35513_37064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (10))){
var inst_35481 = (state_35488[(2)]);
var state_35488__$1 = (function (){var statearr_35514 = state_35488;
(statearr_35514[(8)] = inst_35481);

return statearr_35514;
})();
var statearr_35515_37065 = state_35488__$1;
(statearr_35515_37065[(2)] = null);

(statearr_35515_37065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (8))){
var inst_35470 = (state_35488[(7)]);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35488__$1,(11),out,inst_35470);
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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35517 = [null,null,null,null,null,null,null,null,null];
(statearr_35517[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35517[(1)] = (1));

return statearr_35517;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35488){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35488);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35518){var ex__33218__auto__ = e35518;
var statearr_35519_37066 = state_35488;
(statearr_35519_37066[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35488[(4)]))){
var statearr_35520_37067 = state_35488;
(statearr_35520_37067[(1)] = cljs.core.first((state_35488[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37068 = state_35488;
state_35488 = G__37068;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35521 = f__33513__auto__();
(statearr_35521[(6)] = c__33512__auto___37054);

return statearr_35521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35523 = arguments.length;
switch (G__35523) {
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
var c__33512__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35587){
var state_val_35588 = (state_35587[(1)]);
if((state_val_35588 === (7))){
var inst_35583 = (state_35587[(2)]);
var state_35587__$1 = state_35587;
var statearr_35590_37070 = state_35587__$1;
(statearr_35590_37070[(2)] = inst_35583);

(statearr_35590_37070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (20))){
var inst_35551 = (state_35587[(7)]);
var inst_35564 = (state_35587[(2)]);
var inst_35565 = cljs.core.next(inst_35551);
var inst_35537 = inst_35565;
var inst_35538 = null;
var inst_35539 = (0);
var inst_35540 = (0);
var state_35587__$1 = (function (){var statearr_35591 = state_35587;
(statearr_35591[(8)] = inst_35564);

(statearr_35591[(9)] = inst_35539);

(statearr_35591[(10)] = inst_35538);

(statearr_35591[(11)] = inst_35540);

(statearr_35591[(12)] = inst_35537);

return statearr_35591;
})();
var statearr_35592_37072 = state_35587__$1;
(statearr_35592_37072[(2)] = null);

(statearr_35592_37072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (1))){
var state_35587__$1 = state_35587;
var statearr_35593_37076 = state_35587__$1;
(statearr_35593_37076[(2)] = null);

(statearr_35593_37076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (4))){
var inst_35526 = (state_35587[(13)]);
var inst_35526__$1 = (state_35587[(2)]);
var inst_35527 = (inst_35526__$1 == null);
var state_35587__$1 = (function (){var statearr_35603 = state_35587;
(statearr_35603[(13)] = inst_35526__$1);

return statearr_35603;
})();
if(cljs.core.truth_(inst_35527)){
var statearr_35604_37077 = state_35587__$1;
(statearr_35604_37077[(1)] = (5));

} else {
var statearr_35605_37078 = state_35587__$1;
(statearr_35605_37078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (15))){
var state_35587__$1 = state_35587;
var statearr_35609_37083 = state_35587__$1;
(statearr_35609_37083[(2)] = null);

(statearr_35609_37083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (21))){
var state_35587__$1 = state_35587;
var statearr_35610_37084 = state_35587__$1;
(statearr_35610_37084[(2)] = null);

(statearr_35610_37084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (13))){
var inst_35539 = (state_35587[(9)]);
var inst_35538 = (state_35587[(10)]);
var inst_35540 = (state_35587[(11)]);
var inst_35537 = (state_35587[(12)]);
var inst_35547 = (state_35587[(2)]);
var inst_35548 = (inst_35540 + (1));
var tmp35606 = inst_35539;
var tmp35607 = inst_35538;
var tmp35608 = inst_35537;
var inst_35537__$1 = tmp35608;
var inst_35538__$1 = tmp35607;
var inst_35539__$1 = tmp35606;
var inst_35540__$1 = inst_35548;
var state_35587__$1 = (function (){var statearr_35612 = state_35587;
(statearr_35612[(9)] = inst_35539__$1);

(statearr_35612[(14)] = inst_35547);

(statearr_35612[(10)] = inst_35538__$1);

(statearr_35612[(11)] = inst_35540__$1);

(statearr_35612[(12)] = inst_35537__$1);

return statearr_35612;
})();
var statearr_35613_37087 = state_35587__$1;
(statearr_35613_37087[(2)] = null);

(statearr_35613_37087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (22))){
var state_35587__$1 = state_35587;
var statearr_35614_37088 = state_35587__$1;
(statearr_35614_37088[(2)] = null);

(statearr_35614_37088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (6))){
var inst_35526 = (state_35587[(13)]);
var inst_35535 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35526) : f.call(null,inst_35526));
var inst_35536 = cljs.core.seq(inst_35535);
var inst_35537 = inst_35536;
var inst_35538 = null;
var inst_35539 = (0);
var inst_35540 = (0);
var state_35587__$1 = (function (){var statearr_35615 = state_35587;
(statearr_35615[(9)] = inst_35539);

(statearr_35615[(10)] = inst_35538);

(statearr_35615[(11)] = inst_35540);

(statearr_35615[(12)] = inst_35537);

return statearr_35615;
})();
var statearr_35616_37089 = state_35587__$1;
(statearr_35616_37089[(2)] = null);

(statearr_35616_37089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (17))){
var inst_35551 = (state_35587[(7)]);
var inst_35557 = cljs.core.chunk_first(inst_35551);
var inst_35558 = cljs.core.chunk_rest(inst_35551);
var inst_35559 = cljs.core.count(inst_35557);
var inst_35537 = inst_35558;
var inst_35538 = inst_35557;
var inst_35539 = inst_35559;
var inst_35540 = (0);
var state_35587__$1 = (function (){var statearr_35617 = state_35587;
(statearr_35617[(9)] = inst_35539);

(statearr_35617[(10)] = inst_35538);

(statearr_35617[(11)] = inst_35540);

(statearr_35617[(12)] = inst_35537);

return statearr_35617;
})();
var statearr_35618_37090 = state_35587__$1;
(statearr_35618_37090[(2)] = null);

(statearr_35618_37090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (3))){
var inst_35585 = (state_35587[(2)]);
var state_35587__$1 = state_35587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35587__$1,inst_35585);
} else {
if((state_val_35588 === (12))){
var inst_35573 = (state_35587[(2)]);
var state_35587__$1 = state_35587;
var statearr_35619_37091 = state_35587__$1;
(statearr_35619_37091[(2)] = inst_35573);

(statearr_35619_37091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (2))){
var state_35587__$1 = state_35587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35587__$1,(4),in$);
} else {
if((state_val_35588 === (23))){
var inst_35581 = (state_35587[(2)]);
var state_35587__$1 = state_35587;
var statearr_35620_37092 = state_35587__$1;
(statearr_35620_37092[(2)] = inst_35581);

(statearr_35620_37092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (19))){
var inst_35568 = (state_35587[(2)]);
var state_35587__$1 = state_35587;
var statearr_35621_37093 = state_35587__$1;
(statearr_35621_37093[(2)] = inst_35568);

(statearr_35621_37093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (11))){
var inst_35537 = (state_35587[(12)]);
var inst_35551 = (state_35587[(7)]);
var inst_35551__$1 = cljs.core.seq(inst_35537);
var state_35587__$1 = (function (){var statearr_35622 = state_35587;
(statearr_35622[(7)] = inst_35551__$1);

return statearr_35622;
})();
if(inst_35551__$1){
var statearr_35625_37094 = state_35587__$1;
(statearr_35625_37094[(1)] = (14));

} else {
var statearr_35626_37095 = state_35587__$1;
(statearr_35626_37095[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (9))){
var inst_35575 = (state_35587[(2)]);
var inst_35576 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35587__$1 = (function (){var statearr_35627 = state_35587;
(statearr_35627[(15)] = inst_35575);

return statearr_35627;
})();
if(cljs.core.truth_(inst_35576)){
var statearr_35628_37096 = state_35587__$1;
(statearr_35628_37096[(1)] = (21));

} else {
var statearr_35629_37097 = state_35587__$1;
(statearr_35629_37097[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (5))){
var inst_35529 = cljs.core.async.close_BANG_(out);
var state_35587__$1 = state_35587;
var statearr_35630_37098 = state_35587__$1;
(statearr_35630_37098[(2)] = inst_35529);

(statearr_35630_37098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (14))){
var inst_35551 = (state_35587[(7)]);
var inst_35554 = cljs.core.chunked_seq_QMARK_(inst_35551);
var state_35587__$1 = state_35587;
if(inst_35554){
var statearr_35632_37099 = state_35587__$1;
(statearr_35632_37099[(1)] = (17));

} else {
var statearr_35633_37100 = state_35587__$1;
(statearr_35633_37100[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (16))){
var inst_35571 = (state_35587[(2)]);
var state_35587__$1 = state_35587;
var statearr_35635_37101 = state_35587__$1;
(statearr_35635_37101[(2)] = inst_35571);

(statearr_35635_37101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35588 === (10))){
var inst_35538 = (state_35587[(10)]);
var inst_35540 = (state_35587[(11)]);
var inst_35545 = cljs.core._nth(inst_35538,inst_35540);
var state_35587__$1 = state_35587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35587__$1,(13),out,inst_35545);
} else {
if((state_val_35588 === (18))){
var inst_35551 = (state_35587[(7)]);
var inst_35562 = cljs.core.first(inst_35551);
var state_35587__$1 = state_35587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35587__$1,(20),out,inst_35562);
} else {
if((state_val_35588 === (8))){
var inst_35539 = (state_35587[(9)]);
var inst_35540 = (state_35587[(11)]);
var inst_35542 = (inst_35540 < inst_35539);
var inst_35543 = inst_35542;
var state_35587__$1 = state_35587;
if(cljs.core.truth_(inst_35543)){
var statearr_35636_37102 = state_35587__$1;
(statearr_35636_37102[(1)] = (10));

} else {
var statearr_35637_37103 = state_35587__$1;
(statearr_35637_37103[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33215__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33215__auto____0 = (function (){
var statearr_35638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35638[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33215__auto__);

(statearr_35638[(1)] = (1));

return statearr_35638;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33215__auto____1 = (function (state_35587){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35587);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35639){var ex__33218__auto__ = e35639;
var statearr_35640_37104 = state_35587;
(statearr_35640_37104[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35587[(4)]))){
var statearr_35648_37105 = state_35587;
(statearr_35648_37105[(1)] = cljs.core.first((state_35587[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37106 = state_35587;
state_35587 = G__37106;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33215__auto__ = function(state_35587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33215__auto____1.call(this,state_35587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33215__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33215__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35650 = f__33513__auto__();
(statearr_35650[(6)] = c__33512__auto__);

return statearr_35650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));

return c__33512__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35661 = arguments.length;
switch (G__35661) {
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
var G__35674 = arguments.length;
switch (G__35674) {
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
var G__35679 = arguments.length;
switch (G__35679) {
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
var c__33512__auto___37115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35709){
var state_val_35710 = (state_35709[(1)]);
if((state_val_35710 === (7))){
var inst_35703 = (state_35709[(2)]);
var state_35709__$1 = state_35709;
var statearr_35715_37120 = state_35709__$1;
(statearr_35715_37120[(2)] = inst_35703);

(statearr_35715_37120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (1))){
var inst_35685 = null;
var state_35709__$1 = (function (){var statearr_35716 = state_35709;
(statearr_35716[(7)] = inst_35685);

return statearr_35716;
})();
var statearr_35717_37127 = state_35709__$1;
(statearr_35717_37127[(2)] = null);

(statearr_35717_37127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (4))){
var inst_35688 = (state_35709[(8)]);
var inst_35688__$1 = (state_35709[(2)]);
var inst_35689 = (inst_35688__$1 == null);
var inst_35690 = cljs.core.not(inst_35689);
var state_35709__$1 = (function (){var statearr_35718 = state_35709;
(statearr_35718[(8)] = inst_35688__$1);

return statearr_35718;
})();
if(inst_35690){
var statearr_35719_37128 = state_35709__$1;
(statearr_35719_37128[(1)] = (5));

} else {
var statearr_35720_37129 = state_35709__$1;
(statearr_35720_37129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (6))){
var state_35709__$1 = state_35709;
var statearr_35721_37133 = state_35709__$1;
(statearr_35721_37133[(2)] = null);

(statearr_35721_37133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (3))){
var inst_35705 = (state_35709[(2)]);
var inst_35707 = cljs.core.async.close_BANG_(out);
var state_35709__$1 = (function (){var statearr_35723 = state_35709;
(statearr_35723[(9)] = inst_35705);

return statearr_35723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35709__$1,inst_35707);
} else {
if((state_val_35710 === (2))){
var state_35709__$1 = state_35709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35709__$1,(4),ch);
} else {
if((state_val_35710 === (11))){
var inst_35688 = (state_35709[(8)]);
var inst_35697 = (state_35709[(2)]);
var inst_35685 = inst_35688;
var state_35709__$1 = (function (){var statearr_35724 = state_35709;
(statearr_35724[(7)] = inst_35685);

(statearr_35724[(10)] = inst_35697);

return statearr_35724;
})();
var statearr_35732_37137 = state_35709__$1;
(statearr_35732_37137[(2)] = null);

(statearr_35732_37137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (9))){
var inst_35688 = (state_35709[(8)]);
var state_35709__$1 = state_35709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35709__$1,(11),out,inst_35688);
} else {
if((state_val_35710 === (5))){
var inst_35688 = (state_35709[(8)]);
var inst_35685 = (state_35709[(7)]);
var inst_35692 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35688,inst_35685);
var state_35709__$1 = state_35709;
if(inst_35692){
var statearr_35734_37141 = state_35709__$1;
(statearr_35734_37141[(1)] = (8));

} else {
var statearr_35736_37142 = state_35709__$1;
(statearr_35736_37142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (10))){
var inst_35700 = (state_35709[(2)]);
var state_35709__$1 = state_35709;
var statearr_35737_37143 = state_35709__$1;
(statearr_35737_37143[(2)] = inst_35700);

(statearr_35737_37143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (8))){
var inst_35685 = (state_35709[(7)]);
var tmp35733 = inst_35685;
var inst_35685__$1 = tmp35733;
var state_35709__$1 = (function (){var statearr_35738 = state_35709;
(statearr_35738[(7)] = inst_35685__$1);

return statearr_35738;
})();
var statearr_35739_37144 = state_35709__$1;
(statearr_35739_37144[(2)] = null);

(statearr_35739_37144[(1)] = (2));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35740[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35740[(1)] = (1));

return statearr_35740;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35709){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35709);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35743){var ex__33218__auto__ = e35743;
var statearr_35744_37146 = state_35709;
(statearr_35744_37146[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35709[(4)]))){
var statearr_35745_37147 = state_35709;
(statearr_35745_37147[(1)] = cljs.core.first((state_35709[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37153 = state_35709;
state_35709 = G__37153;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35748 = f__33513__auto__();
(statearr_35748[(6)] = c__33512__auto___37115);

return statearr_35748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35751 = arguments.length;
switch (G__35751) {
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
var c__33512__auto___37165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35790){
var state_val_35791 = (state_35790[(1)]);
if((state_val_35791 === (7))){
var inst_35786 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35792_37166 = state_35790__$1;
(statearr_35792_37166[(2)] = inst_35786);

(statearr_35792_37166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (1))){
var inst_35753 = (new Array(n));
var inst_35754 = inst_35753;
var inst_35755 = (0);
var state_35790__$1 = (function (){var statearr_35793 = state_35790;
(statearr_35793[(7)] = inst_35754);

(statearr_35793[(8)] = inst_35755);

return statearr_35793;
})();
var statearr_35798_37167 = state_35790__$1;
(statearr_35798_37167[(2)] = null);

(statearr_35798_37167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (4))){
var inst_35758 = (state_35790[(9)]);
var inst_35758__$1 = (state_35790[(2)]);
var inst_35759 = (inst_35758__$1 == null);
var inst_35760 = cljs.core.not(inst_35759);
var state_35790__$1 = (function (){var statearr_35799 = state_35790;
(statearr_35799[(9)] = inst_35758__$1);

return statearr_35799;
})();
if(inst_35760){
var statearr_35800_37168 = state_35790__$1;
(statearr_35800_37168[(1)] = (5));

} else {
var statearr_35801_37169 = state_35790__$1;
(statearr_35801_37169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (15))){
var inst_35780 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35802_37170 = state_35790__$1;
(statearr_35802_37170[(2)] = inst_35780);

(statearr_35802_37170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (13))){
var state_35790__$1 = state_35790;
var statearr_35804_37171 = state_35790__$1;
(statearr_35804_37171[(2)] = null);

(statearr_35804_37171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (6))){
var inst_35755 = (state_35790[(8)]);
var inst_35776 = (inst_35755 > (0));
var state_35790__$1 = state_35790;
if(cljs.core.truth_(inst_35776)){
var statearr_35805_37178 = state_35790__$1;
(statearr_35805_37178[(1)] = (12));

} else {
var statearr_35806_37179 = state_35790__$1;
(statearr_35806_37179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (3))){
var inst_35788 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35790__$1,inst_35788);
} else {
if((state_val_35791 === (12))){
var inst_35754 = (state_35790[(7)]);
var inst_35778 = cljs.core.vec(inst_35754);
var state_35790__$1 = state_35790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35790__$1,(15),out,inst_35778);
} else {
if((state_val_35791 === (2))){
var state_35790__$1 = state_35790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35790__$1,(4),ch);
} else {
if((state_val_35791 === (11))){
var inst_35770 = (state_35790[(2)]);
var inst_35771 = (new Array(n));
var inst_35754 = inst_35771;
var inst_35755 = (0);
var state_35790__$1 = (function (){var statearr_35816 = state_35790;
(statearr_35816[(7)] = inst_35754);

(statearr_35816[(10)] = inst_35770);

(statearr_35816[(8)] = inst_35755);

return statearr_35816;
})();
var statearr_35817_37180 = state_35790__$1;
(statearr_35817_37180[(2)] = null);

(statearr_35817_37180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (9))){
var inst_35754 = (state_35790[(7)]);
var inst_35768 = cljs.core.vec(inst_35754);
var state_35790__$1 = state_35790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35790__$1,(11),out,inst_35768);
} else {
if((state_val_35791 === (5))){
var inst_35754 = (state_35790[(7)]);
var inst_35758 = (state_35790[(9)]);
var inst_35755 = (state_35790[(8)]);
var inst_35763 = (state_35790[(11)]);
var inst_35762 = (inst_35754[inst_35755] = inst_35758);
var inst_35763__$1 = (inst_35755 + (1));
var inst_35764 = (inst_35763__$1 < n);
var state_35790__$1 = (function (){var statearr_35822 = state_35790;
(statearr_35822[(12)] = inst_35762);

(statearr_35822[(11)] = inst_35763__$1);

return statearr_35822;
})();
if(cljs.core.truth_(inst_35764)){
var statearr_35823_37181 = state_35790__$1;
(statearr_35823_37181[(1)] = (8));

} else {
var statearr_35824_37182 = state_35790__$1;
(statearr_35824_37182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (14))){
var inst_35783 = (state_35790[(2)]);
var inst_35784 = cljs.core.async.close_BANG_(out);
var state_35790__$1 = (function (){var statearr_35826 = state_35790;
(statearr_35826[(13)] = inst_35783);

return statearr_35826;
})();
var statearr_35827_37189 = state_35790__$1;
(statearr_35827_37189[(2)] = inst_35784);

(statearr_35827_37189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (10))){
var inst_35774 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35834_37190 = state_35790__$1;
(statearr_35834_37190[(2)] = inst_35774);

(statearr_35834_37190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (8))){
var inst_35754 = (state_35790[(7)]);
var inst_35763 = (state_35790[(11)]);
var tmp35825 = inst_35754;
var inst_35754__$1 = tmp35825;
var inst_35755 = inst_35763;
var state_35790__$1 = (function (){var statearr_35835 = state_35790;
(statearr_35835[(7)] = inst_35754__$1);

(statearr_35835[(8)] = inst_35755);

return statearr_35835;
})();
var statearr_35836_37191 = state_35790__$1;
(statearr_35836_37191[(2)] = null);

(statearr_35836_37191[(1)] = (2));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35843[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35843[(1)] = (1));

return statearr_35843;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35790){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35790);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35844){var ex__33218__auto__ = e35844;
var statearr_35845_37192 = state_35790;
(statearr_35845_37192[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35790[(4)]))){
var statearr_35846_37193 = state_35790;
(statearr_35846_37193[(1)] = cljs.core.first((state_35790[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37194 = state_35790;
state_35790 = G__37194;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35848 = f__33513__auto__();
(statearr_35848[(6)] = c__33512__auto___37165);

return statearr_35848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
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
var c__33512__auto___37207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_35906){
var state_val_35907 = (state_35906[(1)]);
if((state_val_35907 === (7))){
var inst_35902 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35909_37210 = state_35906__$1;
(statearr_35909_37210[(2)] = inst_35902);

(statearr_35909_37210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (1))){
var inst_35857 = [];
var inst_35858 = inst_35857;
var inst_35859 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35906__$1 = (function (){var statearr_35910 = state_35906;
(statearr_35910[(7)] = inst_35858);

(statearr_35910[(8)] = inst_35859);

return statearr_35910;
})();
var statearr_35912_37211 = state_35906__$1;
(statearr_35912_37211[(2)] = null);

(statearr_35912_37211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (4))){
var inst_35862 = (state_35906[(9)]);
var inst_35862__$1 = (state_35906[(2)]);
var inst_35863 = (inst_35862__$1 == null);
var inst_35864 = cljs.core.not(inst_35863);
var state_35906__$1 = (function (){var statearr_35913 = state_35906;
(statearr_35913[(9)] = inst_35862__$1);

return statearr_35913;
})();
if(inst_35864){
var statearr_35914_37212 = state_35906__$1;
(statearr_35914_37212[(1)] = (5));

} else {
var statearr_35920_37213 = state_35906__$1;
(statearr_35920_37213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (15))){
var inst_35858 = (state_35906[(7)]);
var inst_35894 = cljs.core.vec(inst_35858);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35906__$1,(18),out,inst_35894);
} else {
if((state_val_35907 === (13))){
var inst_35889 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35921_37214 = state_35906__$1;
(statearr_35921_37214[(2)] = inst_35889);

(statearr_35921_37214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (6))){
var inst_35858 = (state_35906[(7)]);
var inst_35891 = inst_35858.length;
var inst_35892 = (inst_35891 > (0));
var state_35906__$1 = state_35906;
if(cljs.core.truth_(inst_35892)){
var statearr_35922_37217 = state_35906__$1;
(statearr_35922_37217[(1)] = (15));

} else {
var statearr_35923_37218 = state_35906__$1;
(statearr_35923_37218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (17))){
var inst_35899 = (state_35906[(2)]);
var inst_35900 = cljs.core.async.close_BANG_(out);
var state_35906__$1 = (function (){var statearr_35924 = state_35906;
(statearr_35924[(10)] = inst_35899);

return statearr_35924;
})();
var statearr_35925_37219 = state_35906__$1;
(statearr_35925_37219[(2)] = inst_35900);

(statearr_35925_37219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (3))){
var inst_35904 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35906__$1,inst_35904);
} else {
if((state_val_35907 === (12))){
var inst_35858 = (state_35906[(7)]);
var inst_35882 = cljs.core.vec(inst_35858);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35906__$1,(14),out,inst_35882);
} else {
if((state_val_35907 === (2))){
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35906__$1,(4),ch);
} else {
if((state_val_35907 === (11))){
var inst_35862 = (state_35906[(9)]);
var inst_35858 = (state_35906[(7)]);
var inst_35871 = (state_35906[(11)]);
var inst_35879 = inst_35858.push(inst_35862);
var tmp35926 = inst_35858;
var inst_35858__$1 = tmp35926;
var inst_35859 = inst_35871;
var state_35906__$1 = (function (){var statearr_35931 = state_35906;
(statearr_35931[(12)] = inst_35879);

(statearr_35931[(7)] = inst_35858__$1);

(statearr_35931[(8)] = inst_35859);

return statearr_35931;
})();
var statearr_35932_37223 = state_35906__$1;
(statearr_35932_37223[(2)] = null);

(statearr_35932_37223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (9))){
var inst_35859 = (state_35906[(8)]);
var inst_35875 = cljs.core.keyword_identical_QMARK_(inst_35859,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35906__$1 = state_35906;
var statearr_35933_37225 = state_35906__$1;
(statearr_35933_37225[(2)] = inst_35875);

(statearr_35933_37225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (5))){
var inst_35872 = (state_35906[(13)]);
var inst_35862 = (state_35906[(9)]);
var inst_35871 = (state_35906[(11)]);
var inst_35859 = (state_35906[(8)]);
var inst_35871__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35862) : f.call(null,inst_35862));
var inst_35872__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35871__$1,inst_35859);
var state_35906__$1 = (function (){var statearr_35934 = state_35906;
(statearr_35934[(13)] = inst_35872__$1);

(statearr_35934[(11)] = inst_35871__$1);

return statearr_35934;
})();
if(inst_35872__$1){
var statearr_35935_37226 = state_35906__$1;
(statearr_35935_37226[(1)] = (8));

} else {
var statearr_35936_37227 = state_35906__$1;
(statearr_35936_37227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (14))){
var inst_35862 = (state_35906[(9)]);
var inst_35871 = (state_35906[(11)]);
var inst_35884 = (state_35906[(2)]);
var inst_35885 = [];
var inst_35886 = inst_35885.push(inst_35862);
var inst_35858 = inst_35885;
var inst_35859 = inst_35871;
var state_35906__$1 = (function (){var statearr_35944 = state_35906;
(statearr_35944[(14)] = inst_35886);

(statearr_35944[(7)] = inst_35858);

(statearr_35944[(15)] = inst_35884);

(statearr_35944[(8)] = inst_35859);

return statearr_35944;
})();
var statearr_35945_37230 = state_35906__$1;
(statearr_35945_37230[(2)] = null);

(statearr_35945_37230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (16))){
var state_35906__$1 = state_35906;
var statearr_35949_37232 = state_35906__$1;
(statearr_35949_37232[(2)] = null);

(statearr_35949_37232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (10))){
var inst_35877 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
if(cljs.core.truth_(inst_35877)){
var statearr_35950_37233 = state_35906__$1;
(statearr_35950_37233[(1)] = (11));

} else {
var statearr_35951_37234 = state_35906__$1;
(statearr_35951_37234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (18))){
var inst_35896 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35952_37236 = state_35906__$1;
(statearr_35952_37236[(2)] = inst_35896);

(statearr_35952_37236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (8))){
var inst_35872 = (state_35906[(13)]);
var state_35906__$1 = state_35906;
var statearr_35953_37237 = state_35906__$1;
(statearr_35953_37237[(2)] = inst_35872);

(statearr_35953_37237[(1)] = (10));


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
var cljs$core$async$state_machine__33215__auto__ = null;
var cljs$core$async$state_machine__33215__auto____0 = (function (){
var statearr_35954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35954[(0)] = cljs$core$async$state_machine__33215__auto__);

(statearr_35954[(1)] = (1));

return statearr_35954;
});
var cljs$core$async$state_machine__33215__auto____1 = (function (state_35906){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_35906);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e35955){var ex__33218__auto__ = e35955;
var statearr_35956_37238 = state_35906;
(statearr_35956_37238[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_35906[(4)]))){
var statearr_35957_37239 = state_35906;
(statearr_35957_37239[(1)] = cljs.core.first((state_35906[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37246 = state_35906;
state_35906 = G__37246;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
cljs$core$async$state_machine__33215__auto__ = function(state_35906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33215__auto____1.call(this,state_35906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33215__auto____0;
cljs$core$async$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33215__auto____1;
return cljs$core$async$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_35961 = f__33513__auto__();
(statearr_35961[(6)] = c__33512__auto___37207);

return statearr_35961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
