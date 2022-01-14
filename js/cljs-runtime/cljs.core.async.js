goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32479 = arguments.length;
switch (G__32479) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32503 = (function (f,blockable,meta32504){
this.f = f;
this.blockable = blockable;
this.meta32504 = meta32504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32505,meta32504__$1){
var self__ = this;
var _32505__$1 = this;
return (new cljs.core.async.t_cljs$core$async32503(self__.f,self__.blockable,meta32504__$1));
}));

(cljs.core.async.t_cljs$core$async32503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32505){
var self__ = this;
var _32505__$1 = this;
return self__.meta32504;
}));

(cljs.core.async.t_cljs$core$async32503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32504","meta32504",-1533821445,null)], null);
}));

(cljs.core.async.t_cljs$core$async32503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32503");

(cljs.core.async.t_cljs$core$async32503.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32503.
 */
cljs.core.async.__GT_t_cljs$core$async32503 = (function cljs$core$async$__GT_t_cljs$core$async32503(f__$1,blockable__$1,meta32504){
return (new cljs.core.async.t_cljs$core$async32503(f__$1,blockable__$1,meta32504));
});

}

return (new cljs.core.async.t_cljs$core$async32503(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32556 = arguments.length;
switch (G__32556) {
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
var G__32579 = arguments.length;
switch (G__32579) {
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
var G__32595 = arguments.length;
switch (G__32595) {
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
var val_34701 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34701) : fn1.call(null,val_34701));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34701) : fn1.call(null,val_34701));
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
var G__32598 = arguments.length;
switch (G__32598) {
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
var n__4695__auto___34707 = n;
var x_34709 = (0);
while(true){
if((x_34709 < n__4695__auto___34707)){
(a[x_34709] = x_34709);

var G__34717 = (x_34709 + (1));
x_34709 = G__34717;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32602 = (function (flag,meta32603){
this.flag = flag;
this.meta32603 = meta32603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32604,meta32603__$1){
var self__ = this;
var _32604__$1 = this;
return (new cljs.core.async.t_cljs$core$async32602(self__.flag,meta32603__$1));
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32604){
var self__ = this;
var _32604__$1 = this;
return self__.meta32603;
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32603","meta32603",1685938552,null)], null);
}));

(cljs.core.async.t_cljs$core$async32602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32602");

(cljs.core.async.t_cljs$core$async32602.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32602.
 */
cljs.core.async.__GT_t_cljs$core$async32602 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32602(flag__$1,meta32603){
return (new cljs.core.async.t_cljs$core$async32602(flag__$1,meta32603));
});

}

return (new cljs.core.async.t_cljs$core$async32602(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32609 = (function (flag,cb,meta32610){
this.flag = flag;
this.cb = cb;
this.meta32610 = meta32610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32611,meta32610__$1){
var self__ = this;
var _32611__$1 = this;
return (new cljs.core.async.t_cljs$core$async32609(self__.flag,self__.cb,meta32610__$1));
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32611){
var self__ = this;
var _32611__$1 = this;
return self__.meta32610;
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32610","meta32610",-1148284560,null)], null);
}));

(cljs.core.async.t_cljs$core$async32609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32609");

(cljs.core.async.t_cljs$core$async32609.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32609.
 */
cljs.core.async.__GT_t_cljs$core$async32609 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32609(flag__$1,cb__$1,meta32610){
return (new cljs.core.async.t_cljs$core$async32609(flag__$1,cb__$1,meta32610));
});

}

return (new cljs.core.async.t_cljs$core$async32609(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32625_SHARP_){
var G__32627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32625_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32627) : fret.call(null,G__32627));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32626_SHARP_){
var G__32629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32626_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32629) : fret.call(null,G__32629));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34733 = (i + (1));
i = G__34733;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___34738 = arguments.length;
var i__4819__auto___34739 = (0);
while(true){
if((i__4819__auto___34739 < len__4818__auto___34738)){
args__4824__auto__.push((arguments[i__4819__auto___34739]));

var G__34742 = (i__4819__auto___34739 + (1));
i__4819__auto___34739 = G__34742;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32639){
var map__32640 = p__32639;
var map__32640__$1 = cljs.core.__destructure_map(map__32640);
var opts = map__32640__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32635){
var G__32636 = cljs.core.first(seq32635);
var seq32635__$1 = cljs.core.next(seq32635);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32636,seq32635__$1);
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
var G__32644 = arguments.length;
switch (G__32644) {
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
var c__32412__auto___34755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_32683){
var state_val_32684 = (state_32683[(1)]);
if((state_val_32684 === (7))){
var inst_32679 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32693_34757 = state_32683__$1;
(statearr_32693_34757[(2)] = inst_32679);

(statearr_32693_34757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (1))){
var state_32683__$1 = state_32683;
var statearr_32695_34758 = state_32683__$1;
(statearr_32695_34758[(2)] = null);

(statearr_32695_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (4))){
var inst_32660 = (state_32683[(7)]);
var inst_32660__$1 = (state_32683[(2)]);
var inst_32661 = (inst_32660__$1 == null);
var state_32683__$1 = (function (){var statearr_32703 = state_32683;
(statearr_32703[(7)] = inst_32660__$1);

return statearr_32703;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32705_34761 = state_32683__$1;
(statearr_32705_34761[(1)] = (5));

} else {
var statearr_32706_34762 = state_32683__$1;
(statearr_32706_34762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (13))){
var state_32683__$1 = state_32683;
var statearr_32708_34763 = state_32683__$1;
(statearr_32708_34763[(2)] = null);

(statearr_32708_34763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (6))){
var inst_32660 = (state_32683[(7)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32683__$1,(11),to,inst_32660);
} else {
if((state_val_32684 === (3))){
var inst_32681 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32683__$1,inst_32681);
} else {
if((state_val_32684 === (12))){
var state_32683__$1 = state_32683;
var statearr_32711_34765 = state_32683__$1;
(statearr_32711_34765[(2)] = null);

(statearr_32711_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (2))){
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32683__$1,(4),from);
} else {
if((state_val_32684 === (11))){
var inst_32670 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32670)){
var statearr_32713_34766 = state_32683__$1;
(statearr_32713_34766[(1)] = (12));

} else {
var statearr_32714_34767 = state_32683__$1;
(statearr_32714_34767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (9))){
var state_32683__$1 = state_32683;
var statearr_32715_34768 = state_32683__$1;
(statearr_32715_34768[(2)] = null);

(statearr_32715_34768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (5))){
var state_32683__$1 = state_32683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32717_34769 = state_32683__$1;
(statearr_32717_34769[(1)] = (8));

} else {
var statearr_32718_34770 = state_32683__$1;
(statearr_32718_34770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (14))){
var inst_32677 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32720_34771 = state_32683__$1;
(statearr_32720_34771[(2)] = inst_32677);

(statearr_32720_34771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (10))){
var inst_32667 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32722_34772 = state_32683__$1;
(statearr_32722_34772[(2)] = inst_32667);

(statearr_32722_34772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (8))){
var inst_32664 = cljs.core.async.close_BANG_(to);
var state_32683__$1 = state_32683;
var statearr_32725_34773 = state_32683__$1;
(statearr_32725_34773[(2)] = inst_32664);

(statearr_32725_34773[(1)] = (10));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_32746 = [null,null,null,null,null,null,null,null];
(statearr_32746[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_32746[(1)] = (1));

return statearr_32746;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_32683){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32683);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e32747){var ex__32078__auto__ = e32747;
var statearr_32748_34774 = state_32683;
(statearr_32748_34774[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32683[(4)]))){
var statearr_32750_34777 = state_32683;
(statearr_32750_34777[(1)] = cljs.core.first((state_32683[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34778 = state_32683;
state_32683 = G__34778;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_32683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_32683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_32751 = f__32413__auto__();
(statearr_32751[(6)] = c__32412__auto___34755);

return statearr_32751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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
var process = (function (p__32753){
var vec__32754 = p__32753;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32754,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32754,(1),null);
var job = vec__32754;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32412__auto___34784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_32761){
var state_val_32762 = (state_32761[(1)]);
if((state_val_32762 === (1))){
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32761__$1,(2),res,v);
} else {
if((state_val_32762 === (2))){
var inst_32758 = (state_32761[(2)]);
var inst_32759 = cljs.core.async.close_BANG_(res);
var state_32761__$1 = (function (){var statearr_32783 = state_32761;
(statearr_32783[(7)] = inst_32758);

return statearr_32783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32761__$1,inst_32759);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0 = (function (){
var statearr_32785 = [null,null,null,null,null,null,null,null];
(statearr_32785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__);

(statearr_32785[(1)] = (1));

return statearr_32785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1 = (function (state_32761){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32761);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e32786){var ex__32078__auto__ = e32786;
var statearr_32787_34785 = state_32761;
(statearr_32787_34785[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32761[(4)]))){
var statearr_32788_34786 = state_32761;
(statearr_32788_34786[(1)] = cljs.core.first((state_32761[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34787 = state_32761;
state_32761 = G__34787;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = function(state_32761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1.call(this,state_32761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_32789 = f__32413__auto__();
(statearr_32789[(6)] = c__32412__auto___34784);

return statearr_32789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32790){
var vec__32791 = p__32790;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(1),null);
var job = vec__32791;
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
var n__4695__auto___34788 = n;
var __34790 = (0);
while(true){
if((__34790 < n__4695__auto___34788)){
var G__32795_34791 = type;
var G__32795_34792__$1 = (((G__32795_34791 instanceof cljs.core.Keyword))?G__32795_34791.fqn:null);
switch (G__32795_34792__$1) {
case "compute":
var c__32412__auto___34794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34790,c__32412__auto___34794,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async){
return (function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = ((function (__34790,c__32412__auto___34794,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async){
return (function (state_32808){
var state_val_32809 = (state_32808[(1)]);
if((state_val_32809 === (1))){
var state_32808__$1 = state_32808;
var statearr_32810_34795 = state_32808__$1;
(statearr_32810_34795[(2)] = null);

(statearr_32810_34795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (2))){
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32808__$1,(4),jobs);
} else {
if((state_val_32809 === (3))){
var inst_32806 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32808__$1,inst_32806);
} else {
if((state_val_32809 === (4))){
var inst_32798 = (state_32808[(2)]);
var inst_32799 = process(inst_32798);
var state_32808__$1 = state_32808;
if(cljs.core.truth_(inst_32799)){
var statearr_32812_34799 = state_32808__$1;
(statearr_32812_34799[(1)] = (5));

} else {
var statearr_32813_34800 = state_32808__$1;
(statearr_32813_34800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (5))){
var state_32808__$1 = state_32808;
var statearr_32814_34801 = state_32808__$1;
(statearr_32814_34801[(2)] = null);

(statearr_32814_34801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (6))){
var state_32808__$1 = state_32808;
var statearr_32815_34803 = state_32808__$1;
(statearr_32815_34803[(2)] = null);

(statearr_32815_34803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (7))){
var inst_32804 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32816_34804 = state_32808__$1;
(statearr_32816_34804[(2)] = inst_32804);

(statearr_32816_34804[(1)] = (3));


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
});})(__34790,c__32412__auto___34794,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async))
;
return ((function (__34790,switch__32074__auto__,c__32412__auto___34794,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0 = (function (){
var statearr_32817 = [null,null,null,null,null,null,null];
(statearr_32817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__);

(statearr_32817[(1)] = (1));

return statearr_32817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1 = (function (state_32808){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32808);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e32819){var ex__32078__auto__ = e32819;
var statearr_32820_34805 = state_32808;
(statearr_32820_34805[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32808[(4)]))){
var statearr_32821_34806 = state_32808;
(statearr_32821_34806[(1)] = cljs.core.first((state_32808[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_32808;
state_32808 = G__34807;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = function(state_32808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1.call(this,state_32808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__;
})()
;})(__34790,switch__32074__auto__,c__32412__auto___34794,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async))
})();
var state__32414__auto__ = (function (){var statearr_32822 = f__32413__auto__();
(statearr_32822[(6)] = c__32412__auto___34794);

return statearr_32822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
});})(__34790,c__32412__auto___34794,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async))
);


break;
case "async":
var c__32412__auto___34810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34790,c__32412__auto___34810,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async){
return (function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = ((function (__34790,c__32412__auto___34810,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async){
return (function (state_32835){
var state_val_32836 = (state_32835[(1)]);
if((state_val_32836 === (1))){
var state_32835__$1 = state_32835;
var statearr_32838_34811 = state_32835__$1;
(statearr_32838_34811[(2)] = null);

(statearr_32838_34811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (2))){
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32835__$1,(4),jobs);
} else {
if((state_val_32836 === (3))){
var inst_32833 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32835__$1,inst_32833);
} else {
if((state_val_32836 === (4))){
var inst_32825 = (state_32835[(2)]);
var inst_32826 = async(inst_32825);
var state_32835__$1 = state_32835;
if(cljs.core.truth_(inst_32826)){
var statearr_32839_34812 = state_32835__$1;
(statearr_32839_34812[(1)] = (5));

} else {
var statearr_32840_34813 = state_32835__$1;
(statearr_32840_34813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (5))){
var state_32835__$1 = state_32835;
var statearr_32841_34815 = state_32835__$1;
(statearr_32841_34815[(2)] = null);

(statearr_32841_34815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (6))){
var state_32835__$1 = state_32835;
var statearr_32842_34816 = state_32835__$1;
(statearr_32842_34816[(2)] = null);

(statearr_32842_34816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (7))){
var inst_32831 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32843_34817 = state_32835__$1;
(statearr_32843_34817[(2)] = inst_32831);

(statearr_32843_34817[(1)] = (3));


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
});})(__34790,c__32412__auto___34810,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async))
;
return ((function (__34790,switch__32074__auto__,c__32412__auto___34810,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0 = (function (){
var statearr_32845 = [null,null,null,null,null,null,null];
(statearr_32845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__);

(statearr_32845[(1)] = (1));

return statearr_32845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1 = (function (state_32835){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32835);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e32846){var ex__32078__auto__ = e32846;
var statearr_32847_34825 = state_32835;
(statearr_32847_34825[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32835[(4)]))){
var statearr_32848_34826 = state_32835;
(statearr_32848_34826[(1)] = cljs.core.first((state_32835[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34827 = state_32835;
state_32835 = G__34827;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = function(state_32835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1.call(this,state_32835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__;
})()
;})(__34790,switch__32074__auto__,c__32412__auto___34810,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async))
})();
var state__32414__auto__ = (function (){var statearr_32849 = f__32413__auto__();
(statearr_32849[(6)] = c__32412__auto___34810);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
});})(__34790,c__32412__auto___34810,G__32795_34791,G__32795_34792__$1,n__4695__auto___34788,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32795_34792__$1)].join('')));

}

var G__34828 = (__34790 + (1));
__34790 = G__34828;
continue;
} else {
}
break;
}

var c__32412__auto___34830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_32872){
var state_val_32873 = (state_32872[(1)]);
if((state_val_32873 === (7))){
var inst_32868 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
var statearr_32875_34831 = state_32872__$1;
(statearr_32875_34831[(2)] = inst_32868);

(statearr_32875_34831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (1))){
var state_32872__$1 = state_32872;
var statearr_32876_34832 = state_32872__$1;
(statearr_32876_34832[(2)] = null);

(statearr_32876_34832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (4))){
var inst_32852 = (state_32872[(7)]);
var inst_32852__$1 = (state_32872[(2)]);
var inst_32853 = (inst_32852__$1 == null);
var state_32872__$1 = (function (){var statearr_32877 = state_32872;
(statearr_32877[(7)] = inst_32852__$1);

return statearr_32877;
})();
if(cljs.core.truth_(inst_32853)){
var statearr_32878_34833 = state_32872__$1;
(statearr_32878_34833[(1)] = (5));

} else {
var statearr_32879_34835 = state_32872__$1;
(statearr_32879_34835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (6))){
var inst_32852 = (state_32872[(7)]);
var inst_32858 = (state_32872[(8)]);
var inst_32858__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32860 = [inst_32852,inst_32858__$1];
var inst_32861 = (new cljs.core.PersistentVector(null,2,(5),inst_32859,inst_32860,null));
var state_32872__$1 = (function (){var statearr_32880 = state_32872;
(statearr_32880[(8)] = inst_32858__$1);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32872__$1,(8),jobs,inst_32861);
} else {
if((state_val_32873 === (3))){
var inst_32870 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32872__$1,inst_32870);
} else {
if((state_val_32873 === (2))){
var state_32872__$1 = state_32872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32872__$1,(4),from);
} else {
if((state_val_32873 === (9))){
var inst_32865 = (state_32872[(2)]);
var state_32872__$1 = (function (){var statearr_32882 = state_32872;
(statearr_32882[(9)] = inst_32865);

return statearr_32882;
})();
var statearr_32883_34839 = state_32872__$1;
(statearr_32883_34839[(2)] = null);

(statearr_32883_34839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (5))){
var inst_32856 = cljs.core.async.close_BANG_(jobs);
var state_32872__$1 = state_32872;
var statearr_32884_34841 = state_32872__$1;
(statearr_32884_34841[(2)] = inst_32856);

(statearr_32884_34841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (8))){
var inst_32858 = (state_32872[(8)]);
var inst_32863 = (state_32872[(2)]);
var state_32872__$1 = (function (){var statearr_32885 = state_32872;
(statearr_32885[(10)] = inst_32863);

return statearr_32885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32872__$1,(9),results,inst_32858);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0 = (function (){
var statearr_32886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__);

(statearr_32886[(1)] = (1));

return statearr_32886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1 = (function (state_32872){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32872);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e32887){var ex__32078__auto__ = e32887;
var statearr_32888_34844 = state_32872;
(statearr_32888_34844[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32872[(4)]))){
var statearr_32889_34845 = state_32872;
(statearr_32889_34845[(1)] = cljs.core.first((state_32872[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34846 = state_32872;
state_32872 = G__34846;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = function(state_32872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1.call(this,state_32872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_32891 = f__32413__auto__();
(statearr_32891[(6)] = c__32412__auto___34830);

return statearr_32891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


var c__32412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_32929){
var state_val_32930 = (state_32929[(1)]);
if((state_val_32930 === (7))){
var inst_32925 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
var statearr_32932_34849 = state_32929__$1;
(statearr_32932_34849[(2)] = inst_32925);

(statearr_32932_34849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (20))){
var state_32929__$1 = state_32929;
var statearr_32933_34850 = state_32929__$1;
(statearr_32933_34850[(2)] = null);

(statearr_32933_34850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (1))){
var state_32929__$1 = state_32929;
var statearr_32934_34852 = state_32929__$1;
(statearr_32934_34852[(2)] = null);

(statearr_32934_34852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (4))){
var inst_32894 = (state_32929[(7)]);
var inst_32894__$1 = (state_32929[(2)]);
var inst_32895 = (inst_32894__$1 == null);
var state_32929__$1 = (function (){var statearr_32935 = state_32929;
(statearr_32935[(7)] = inst_32894__$1);

return statearr_32935;
})();
if(cljs.core.truth_(inst_32895)){
var statearr_32936_34853 = state_32929__$1;
(statearr_32936_34853[(1)] = (5));

} else {
var statearr_32937_34854 = state_32929__$1;
(statearr_32937_34854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (15))){
var inst_32907 = (state_32929[(8)]);
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32929__$1,(18),to,inst_32907);
} else {
if((state_val_32930 === (21))){
var inst_32920 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
var statearr_32938_34858 = state_32929__$1;
(statearr_32938_34858[(2)] = inst_32920);

(statearr_32938_34858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (13))){
var inst_32922 = (state_32929[(2)]);
var state_32929__$1 = (function (){var statearr_32939 = state_32929;
(statearr_32939[(9)] = inst_32922);

return statearr_32939;
})();
var statearr_32940_34859 = state_32929__$1;
(statearr_32940_34859[(2)] = null);

(statearr_32940_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (6))){
var inst_32894 = (state_32929[(7)]);
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32929__$1,(11),inst_32894);
} else {
if((state_val_32930 === (17))){
var inst_32915 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
if(cljs.core.truth_(inst_32915)){
var statearr_32942_34860 = state_32929__$1;
(statearr_32942_34860[(1)] = (19));

} else {
var statearr_32943_34861 = state_32929__$1;
(statearr_32943_34861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (3))){
var inst_32927 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32929__$1,inst_32927);
} else {
if((state_val_32930 === (12))){
var inst_32904 = (state_32929[(10)]);
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32929__$1,(14),inst_32904);
} else {
if((state_val_32930 === (2))){
var state_32929__$1 = state_32929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32929__$1,(4),results);
} else {
if((state_val_32930 === (19))){
var state_32929__$1 = state_32929;
var statearr_32944_34862 = state_32929__$1;
(statearr_32944_34862[(2)] = null);

(statearr_32944_34862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (11))){
var inst_32904 = (state_32929[(2)]);
var state_32929__$1 = (function (){var statearr_32945 = state_32929;
(statearr_32945[(10)] = inst_32904);

return statearr_32945;
})();
var statearr_32946_34864 = state_32929__$1;
(statearr_32946_34864[(2)] = null);

(statearr_32946_34864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (9))){
var state_32929__$1 = state_32929;
var statearr_32947_34866 = state_32929__$1;
(statearr_32947_34866[(2)] = null);

(statearr_32947_34866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (5))){
var state_32929__$1 = state_32929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32949_34867 = state_32929__$1;
(statearr_32949_34867[(1)] = (8));

} else {
var statearr_32950_34868 = state_32929__$1;
(statearr_32950_34868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (14))){
var inst_32909 = (state_32929[(11)]);
var inst_32907 = (state_32929[(8)]);
var inst_32907__$1 = (state_32929[(2)]);
var inst_32908 = (inst_32907__$1 == null);
var inst_32909__$1 = cljs.core.not(inst_32908);
var state_32929__$1 = (function (){var statearr_32951 = state_32929;
(statearr_32951[(11)] = inst_32909__$1);

(statearr_32951[(8)] = inst_32907__$1);

return statearr_32951;
})();
if(inst_32909__$1){
var statearr_32952_34869 = state_32929__$1;
(statearr_32952_34869[(1)] = (15));

} else {
var statearr_32953_34870 = state_32929__$1;
(statearr_32953_34870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (16))){
var inst_32909 = (state_32929[(11)]);
var state_32929__$1 = state_32929;
var statearr_32954_34871 = state_32929__$1;
(statearr_32954_34871[(2)] = inst_32909);

(statearr_32954_34871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (10))){
var inst_32901 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
var statearr_32955_34872 = state_32929__$1;
(statearr_32955_34872[(2)] = inst_32901);

(statearr_32955_34872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (18))){
var inst_32912 = (state_32929[(2)]);
var state_32929__$1 = state_32929;
var statearr_32956_34873 = state_32929__$1;
(statearr_32956_34873[(2)] = inst_32912);

(statearr_32956_34873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32930 === (8))){
var inst_32898 = cljs.core.async.close_BANG_(to);
var state_32929__$1 = state_32929;
var statearr_32957_34874 = state_32929__$1;
(statearr_32957_34874[(2)] = inst_32898);

(statearr_32957_34874[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0 = (function (){
var statearr_32959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__);

(statearr_32959[(1)] = (1));

return statearr_32959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1 = (function (state_32929){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32929);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e32960){var ex__32078__auto__ = e32960;
var statearr_32961_34879 = state_32929;
(statearr_32961_34879[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32929[(4)]))){
var statearr_32962_34880 = state_32929;
(statearr_32962_34880[(1)] = cljs.core.first((state_32929[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34881 = state_32929;
state_32929 = G__34881;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__ = function(state_32929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1.call(this,state_32929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_32963 = f__32413__auto__();
(statearr_32963[(6)] = c__32412__auto__);

return statearr_32963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));

return c__32412__auto__;
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
var G__32966 = arguments.length;
switch (G__32966) {
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
var G__32969 = arguments.length;
switch (G__32969) {
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
var G__32972 = arguments.length;
switch (G__32972) {
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
var c__32412__auto___34896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_32999){
var state_val_33000 = (state_32999[(1)]);
if((state_val_33000 === (7))){
var inst_32994 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33001_34900 = state_32999__$1;
(statearr_33001_34900[(2)] = inst_32994);

(statearr_33001_34900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (1))){
var state_32999__$1 = state_32999;
var statearr_33002_34901 = state_32999__$1;
(statearr_33002_34901[(2)] = null);

(statearr_33002_34901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (4))){
var inst_32975 = (state_32999[(7)]);
var inst_32975__$1 = (state_32999[(2)]);
var inst_32976 = (inst_32975__$1 == null);
var state_32999__$1 = (function (){var statearr_33003 = state_32999;
(statearr_33003[(7)] = inst_32975__$1);

return statearr_33003;
})();
if(cljs.core.truth_(inst_32976)){
var statearr_33004_34902 = state_32999__$1;
(statearr_33004_34902[(1)] = (5));

} else {
var statearr_33005_34903 = state_32999__$1;
(statearr_33005_34903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (13))){
var state_32999__$1 = state_32999;
var statearr_33007_34904 = state_32999__$1;
(statearr_33007_34904[(2)] = null);

(statearr_33007_34904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (6))){
var inst_32975 = (state_32999[(7)]);
var inst_32981 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32975) : p.call(null,inst_32975));
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32981)){
var statearr_33008_34909 = state_32999__$1;
(statearr_33008_34909[(1)] = (9));

} else {
var statearr_33009_34910 = state_32999__$1;
(statearr_33009_34910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (3))){
var inst_32997 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32999__$1,inst_32997);
} else {
if((state_val_33000 === (12))){
var state_32999__$1 = state_32999;
var statearr_33010_34911 = state_32999__$1;
(statearr_33010_34911[(2)] = null);

(statearr_33010_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (2))){
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32999__$1,(4),ch);
} else {
if((state_val_33000 === (11))){
var inst_32975 = (state_32999[(7)]);
var inst_32985 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32999__$1,(8),inst_32985,inst_32975);
} else {
if((state_val_33000 === (9))){
var state_32999__$1 = state_32999;
var statearr_33011_34913 = state_32999__$1;
(statearr_33011_34913[(2)] = tc);

(statearr_33011_34913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (5))){
var inst_32978 = cljs.core.async.close_BANG_(tc);
var inst_32979 = cljs.core.async.close_BANG_(fc);
var state_32999__$1 = (function (){var statearr_33013 = state_32999;
(statearr_33013[(8)] = inst_32978);

return statearr_33013;
})();
var statearr_33014_34914 = state_32999__$1;
(statearr_33014_34914[(2)] = inst_32979);

(statearr_33014_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (14))){
var inst_32992 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33015_34915 = state_32999__$1;
(statearr_33015_34915[(2)] = inst_32992);

(statearr_33015_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (10))){
var state_32999__$1 = state_32999;
var statearr_33016_34916 = state_32999__$1;
(statearr_33016_34916[(2)] = fc);

(statearr_33016_34916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (8))){
var inst_32987 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32987)){
var statearr_33017_34923 = state_32999__$1;
(statearr_33017_34923[(1)] = (12));

} else {
var statearr_33018_34924 = state_32999__$1;
(statearr_33018_34924[(1)] = (13));

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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_33019 = [null,null,null,null,null,null,null,null,null];
(statearr_33019[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_33019[(1)] = (1));

return statearr_33019;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_32999){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_32999);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33020){var ex__32078__auto__ = e33020;
var statearr_33021_34929 = state_32999;
(statearr_33021_34929[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_32999[(4)]))){
var statearr_33022_34930 = state_32999;
(statearr_33022_34930[(1)] = cljs.core.first((state_32999[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34931 = state_32999;
state_32999 = G__34931;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_32999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_32999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33024 = f__32413__auto__();
(statearr_33024[(6)] = c__32412__auto___34896);

return statearr_33024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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
var c__32412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_33047){
var state_val_33048 = (state_33047[(1)]);
if((state_val_33048 === (7))){
var inst_33042 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33049_34938 = state_33047__$1;
(statearr_33049_34938[(2)] = inst_33042);

(statearr_33049_34938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (1))){
var inst_33025 = init;
var inst_33026 = inst_33025;
var state_33047__$1 = (function (){var statearr_33050 = state_33047;
(statearr_33050[(7)] = inst_33026);

return statearr_33050;
})();
var statearr_33051_34939 = state_33047__$1;
(statearr_33051_34939[(2)] = null);

(statearr_33051_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (4))){
var inst_33029 = (state_33047[(8)]);
var inst_33029__$1 = (state_33047[(2)]);
var inst_33030 = (inst_33029__$1 == null);
var state_33047__$1 = (function (){var statearr_33052 = state_33047;
(statearr_33052[(8)] = inst_33029__$1);

return statearr_33052;
})();
if(cljs.core.truth_(inst_33030)){
var statearr_33053_34940 = state_33047__$1;
(statearr_33053_34940[(1)] = (5));

} else {
var statearr_33054_34941 = state_33047__$1;
(statearr_33054_34941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (6))){
var inst_33026 = (state_33047[(7)]);
var inst_33033 = (state_33047[(9)]);
var inst_33029 = (state_33047[(8)]);
var inst_33033__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33026,inst_33029) : f.call(null,inst_33026,inst_33029));
var inst_33034 = cljs.core.reduced_QMARK_(inst_33033__$1);
var state_33047__$1 = (function (){var statearr_33056 = state_33047;
(statearr_33056[(9)] = inst_33033__$1);

return statearr_33056;
})();
if(inst_33034){
var statearr_33057_34943 = state_33047__$1;
(statearr_33057_34943[(1)] = (8));

} else {
var statearr_33058_34944 = state_33047__$1;
(statearr_33058_34944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (3))){
var inst_33044 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33047__$1,inst_33044);
} else {
if((state_val_33048 === (2))){
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33047__$1,(4),ch);
} else {
if((state_val_33048 === (9))){
var inst_33033 = (state_33047[(9)]);
var inst_33026 = inst_33033;
var state_33047__$1 = (function (){var statearr_33059 = state_33047;
(statearr_33059[(7)] = inst_33026);

return statearr_33059;
})();
var statearr_33060_34945 = state_33047__$1;
(statearr_33060_34945[(2)] = null);

(statearr_33060_34945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (5))){
var inst_33026 = (state_33047[(7)]);
var state_33047__$1 = state_33047;
var statearr_33061_34947 = state_33047__$1;
(statearr_33061_34947[(2)] = inst_33026);

(statearr_33061_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (10))){
var inst_33040 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33062_34948 = state_33047__$1;
(statearr_33062_34948[(2)] = inst_33040);

(statearr_33062_34948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (8))){
var inst_33033 = (state_33047[(9)]);
var inst_33036 = cljs.core.deref(inst_33033);
var state_33047__$1 = state_33047;
var statearr_33064_34950 = state_33047__$1;
(statearr_33064_34950[(2)] = inst_33036);

(statearr_33064_34950[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32075__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32075__auto____0 = (function (){
var statearr_33065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33065[(0)] = cljs$core$async$reduce_$_state_machine__32075__auto__);

(statearr_33065[(1)] = (1));

return statearr_33065;
});
var cljs$core$async$reduce_$_state_machine__32075__auto____1 = (function (state_33047){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_33047);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33066){var ex__32078__auto__ = e33066;
var statearr_33067_34952 = state_33047;
(statearr_33067_34952[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_33047[(4)]))){
var statearr_33068_34953 = state_33047;
(statearr_33068_34953[(1)] = cljs.core.first((state_33047[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_33047;
state_33047 = G__34954;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32075__auto__ = function(state_33047){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32075__auto____1.call(this,state_33047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32075__auto____0;
cljs$core$async$reduce_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32075__auto____1;
return cljs$core$async$reduce_$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33069 = f__32413__auto__();
(statearr_33069[(6)] = c__32412__auto__);

return statearr_33069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));

return c__32412__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_33076){
var state_val_33077 = (state_33076[(1)]);
if((state_val_33077 === (1))){
var inst_33071 = cljs.core.async.reduce(f__$1,init,ch);
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33076__$1,(2),inst_33071);
} else {
if((state_val_33077 === (2))){
var inst_33073 = (state_33076[(2)]);
var inst_33074 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33073) : f__$1.call(null,inst_33073));
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33076__$1,inst_33074);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32075__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32075__auto____0 = (function (){
var statearr_33078 = [null,null,null,null,null,null,null];
(statearr_33078[(0)] = cljs$core$async$transduce_$_state_machine__32075__auto__);

(statearr_33078[(1)] = (1));

return statearr_33078;
});
var cljs$core$async$transduce_$_state_machine__32075__auto____1 = (function (state_33076){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_33076);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33080){var ex__32078__auto__ = e33080;
var statearr_33081_34964 = state_33076;
(statearr_33081_34964[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_33076[(4)]))){
var statearr_33082_34970 = state_33076;
(statearr_33082_34970[(1)] = cljs.core.first((state_33076[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34974 = state_33076;
state_33076 = G__34974;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32075__auto__ = function(state_33076){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32075__auto____1.call(this,state_33076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32075__auto____0;
cljs$core$async$transduce_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32075__auto____1;
return cljs$core$async$transduce_$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33083 = f__32413__auto__();
(statearr_33083[(6)] = c__32412__auto__);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));

return c__32412__auto__;
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
var G__33085 = arguments.length;
switch (G__33085) {
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
var c__32412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_33111){
var state_val_33112 = (state_33111[(1)]);
if((state_val_33112 === (7))){
var inst_33093 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33114_34979 = state_33111__$1;
(statearr_33114_34979[(2)] = inst_33093);

(statearr_33114_34979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (1))){
var inst_33087 = cljs.core.seq(coll);
var inst_33088 = inst_33087;
var state_33111__$1 = (function (){var statearr_33115 = state_33111;
(statearr_33115[(7)] = inst_33088);

return statearr_33115;
})();
var statearr_33116_34983 = state_33111__$1;
(statearr_33116_34983[(2)] = null);

(statearr_33116_34983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (4))){
var inst_33088 = (state_33111[(7)]);
var inst_33091 = cljs.core.first(inst_33088);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33111__$1,(7),ch,inst_33091);
} else {
if((state_val_33112 === (13))){
var inst_33105 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33117_34987 = state_33111__$1;
(statearr_33117_34987[(2)] = inst_33105);

(statearr_33117_34987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (6))){
var inst_33096 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33096)){
var statearr_33118_34989 = state_33111__$1;
(statearr_33118_34989[(1)] = (8));

} else {
var statearr_33119_34990 = state_33111__$1;
(statearr_33119_34990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (3))){
var inst_33109 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33111__$1,inst_33109);
} else {
if((state_val_33112 === (12))){
var state_33111__$1 = state_33111;
var statearr_33121_34991 = state_33111__$1;
(statearr_33121_34991[(2)] = null);

(statearr_33121_34991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (2))){
var inst_33088 = (state_33111[(7)]);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33088)){
var statearr_33122_34996 = state_33111__$1;
(statearr_33122_34996[(1)] = (4));

} else {
var statearr_33123_34998 = state_33111__$1;
(statearr_33123_34998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (11))){
var inst_33102 = cljs.core.async.close_BANG_(ch);
var state_33111__$1 = state_33111;
var statearr_33124_35002 = state_33111__$1;
(statearr_33124_35002[(2)] = inst_33102);

(statearr_33124_35002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (9))){
var state_33111__$1 = state_33111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33125_35003 = state_33111__$1;
(statearr_33125_35003[(1)] = (11));

} else {
var statearr_33126_35004 = state_33111__$1;
(statearr_33126_35004[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (5))){
var inst_33088 = (state_33111[(7)]);
var state_33111__$1 = state_33111;
var statearr_33127_35005 = state_33111__$1;
(statearr_33127_35005[(2)] = inst_33088);

(statearr_33127_35005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (10))){
var inst_33107 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33128_35006 = state_33111__$1;
(statearr_33128_35006[(2)] = inst_33107);

(statearr_33128_35006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (8))){
var inst_33088 = (state_33111[(7)]);
var inst_33098 = cljs.core.next(inst_33088);
var inst_33088__$1 = inst_33098;
var state_33111__$1 = (function (){var statearr_33130 = state_33111;
(statearr_33130[(7)] = inst_33088__$1);

return statearr_33130;
})();
var statearr_33131_35015 = state_33111__$1;
(statearr_33131_35015[(2)] = null);

(statearr_33131_35015[(1)] = (2));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_33132 = [null,null,null,null,null,null,null,null];
(statearr_33132[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_33132[(1)] = (1));

return statearr_33132;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_33111){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_33111);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33133){var ex__32078__auto__ = e33133;
var statearr_33134_35019 = state_33111;
(statearr_33134_35019[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_33111[(4)]))){
var statearr_33135_35020 = state_33111;
(statearr_33135_35020[(1)] = cljs.core.first((state_33111[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35021 = state_33111;
state_33111 = G__35021;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_33111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_33111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33136 = f__32413__auto__();
(statearr_33136[(6)] = c__32412__auto__);

return statearr_33136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));

return c__32412__auto__;
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
var G__33139 = arguments.length;
switch (G__33139) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35026 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35026(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35029 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35029(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35033 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35033(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35034 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35034(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33144 = (function (ch,cs,meta33145){
this.ch = ch;
this.cs = cs;
this.meta33145 = meta33145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33146,meta33145__$1){
var self__ = this;
var _33146__$1 = this;
return (new cljs.core.async.t_cljs$core$async33144(self__.ch,self__.cs,meta33145__$1));
}));

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33146){
var self__ = this;
var _33146__$1 = this;
return self__.meta33145;
}));

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33144.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33145","meta33145",-1396745676,null)], null);
}));

(cljs.core.async.t_cljs$core$async33144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33144");

(cljs.core.async.t_cljs$core$async33144.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33144.
 */
cljs.core.async.__GT_t_cljs$core$async33144 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33144(ch__$1,cs__$1,meta33145){
return (new cljs.core.async.t_cljs$core$async33144(ch__$1,cs__$1,meta33145));
});

}

return (new cljs.core.async.t_cljs$core$async33144(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32412__auto___35045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_33285){
var state_val_33286 = (state_33285[(1)]);
if((state_val_33286 === (7))){
var inst_33281 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33287_35046 = state_33285__$1;
(statearr_33287_35046[(2)] = inst_33281);

(statearr_33287_35046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (20))){
var inst_33184 = (state_33285[(7)]);
var inst_33196 = cljs.core.first(inst_33184);
var inst_33197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33196,(0),null);
var inst_33198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33196,(1),null);
var state_33285__$1 = (function (){var statearr_33288 = state_33285;
(statearr_33288[(8)] = inst_33197);

return statearr_33288;
})();
if(cljs.core.truth_(inst_33198)){
var statearr_33289_35048 = state_33285__$1;
(statearr_33289_35048[(1)] = (22));

} else {
var statearr_33290_35050 = state_33285__$1;
(statearr_33290_35050[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (27))){
var inst_33228 = (state_33285[(9)]);
var inst_33226 = (state_33285[(10)]);
var inst_33233 = (state_33285[(11)]);
var inst_33151 = (state_33285[(12)]);
var inst_33233__$1 = cljs.core._nth(inst_33226,inst_33228);
var inst_33235 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33233__$1,inst_33151,done);
var state_33285__$1 = (function (){var statearr_33291 = state_33285;
(statearr_33291[(11)] = inst_33233__$1);

return statearr_33291;
})();
if(cljs.core.truth_(inst_33235)){
var statearr_33292_35054 = state_33285__$1;
(statearr_33292_35054[(1)] = (30));

} else {
var statearr_33293_35055 = state_33285__$1;
(statearr_33293_35055[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (1))){
var state_33285__$1 = state_33285;
var statearr_33296_35057 = state_33285__$1;
(statearr_33296_35057[(2)] = null);

(statearr_33296_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (24))){
var inst_33184 = (state_33285[(7)]);
var inst_33203 = (state_33285[(2)]);
var inst_33204 = cljs.core.next(inst_33184);
var inst_33162 = inst_33204;
var inst_33163 = null;
var inst_33164 = (0);
var inst_33165 = (0);
var state_33285__$1 = (function (){var statearr_33297 = state_33285;
(statearr_33297[(13)] = inst_33165);

(statearr_33297[(14)] = inst_33164);

(statearr_33297[(15)] = inst_33203);

(statearr_33297[(16)] = inst_33163);

(statearr_33297[(17)] = inst_33162);

return statearr_33297;
})();
var statearr_33298_35062 = state_33285__$1;
(statearr_33298_35062[(2)] = null);

(statearr_33298_35062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (39))){
var state_33285__$1 = state_33285;
var statearr_33302_35064 = state_33285__$1;
(statearr_33302_35064[(2)] = null);

(statearr_33302_35064[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (4))){
var inst_33151 = (state_33285[(12)]);
var inst_33151__$1 = (state_33285[(2)]);
var inst_33153 = (inst_33151__$1 == null);
var state_33285__$1 = (function (){var statearr_33303 = state_33285;
(statearr_33303[(12)] = inst_33151__$1);

return statearr_33303;
})();
if(cljs.core.truth_(inst_33153)){
var statearr_33304_35065 = state_33285__$1;
(statearr_33304_35065[(1)] = (5));

} else {
var statearr_33305_35066 = state_33285__$1;
(statearr_33305_35066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (15))){
var inst_33165 = (state_33285[(13)]);
var inst_33164 = (state_33285[(14)]);
var inst_33163 = (state_33285[(16)]);
var inst_33162 = (state_33285[(17)]);
var inst_33180 = (state_33285[(2)]);
var inst_33181 = (inst_33165 + (1));
var tmp33299 = inst_33164;
var tmp33300 = inst_33163;
var tmp33301 = inst_33162;
var inst_33162__$1 = tmp33301;
var inst_33163__$1 = tmp33300;
var inst_33164__$1 = tmp33299;
var inst_33165__$1 = inst_33181;
var state_33285__$1 = (function (){var statearr_33308 = state_33285;
(statearr_33308[(13)] = inst_33165__$1);

(statearr_33308[(14)] = inst_33164__$1);

(statearr_33308[(16)] = inst_33163__$1);

(statearr_33308[(18)] = inst_33180);

(statearr_33308[(17)] = inst_33162__$1);

return statearr_33308;
})();
var statearr_33310_35067 = state_33285__$1;
(statearr_33310_35067[(2)] = null);

(statearr_33310_35067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (21))){
var inst_33207 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33317_35068 = state_33285__$1;
(statearr_33317_35068[(2)] = inst_33207);

(statearr_33317_35068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (31))){
var inst_33233 = (state_33285[(11)]);
var inst_33239 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33233);
var state_33285__$1 = state_33285;
var statearr_33321_35069 = state_33285__$1;
(statearr_33321_35069[(2)] = inst_33239);

(statearr_33321_35069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (32))){
var inst_33225 = (state_33285[(19)]);
var inst_33227 = (state_33285[(20)]);
var inst_33228 = (state_33285[(9)]);
var inst_33226 = (state_33285[(10)]);
var inst_33241 = (state_33285[(2)]);
var inst_33242 = (inst_33228 + (1));
var tmp33311 = inst_33225;
var tmp33312 = inst_33227;
var tmp33313 = inst_33226;
var inst_33225__$1 = tmp33311;
var inst_33226__$1 = tmp33313;
var inst_33227__$1 = tmp33312;
var inst_33228__$1 = inst_33242;
var state_33285__$1 = (function (){var statearr_33322 = state_33285;
(statearr_33322[(19)] = inst_33225__$1);

(statearr_33322[(20)] = inst_33227__$1);

(statearr_33322[(9)] = inst_33228__$1);

(statearr_33322[(10)] = inst_33226__$1);

(statearr_33322[(21)] = inst_33241);

return statearr_33322;
})();
var statearr_33325_35074 = state_33285__$1;
(statearr_33325_35074[(2)] = null);

(statearr_33325_35074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (40))){
var inst_33254 = (state_33285[(22)]);
var inst_33258 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33254);
var state_33285__$1 = state_33285;
var statearr_33329_35075 = state_33285__$1;
(statearr_33329_35075[(2)] = inst_33258);

(statearr_33329_35075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (33))){
var inst_33245 = (state_33285[(23)]);
var inst_33247 = cljs.core.chunked_seq_QMARK_(inst_33245);
var state_33285__$1 = state_33285;
if(inst_33247){
var statearr_33333_35078 = state_33285__$1;
(statearr_33333_35078[(1)] = (36));

} else {
var statearr_33335_35079 = state_33285__$1;
(statearr_33335_35079[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (13))){
var inst_33174 = (state_33285[(24)]);
var inst_33177 = cljs.core.async.close_BANG_(inst_33174);
var state_33285__$1 = state_33285;
var statearr_33339_35082 = state_33285__$1;
(statearr_33339_35082[(2)] = inst_33177);

(statearr_33339_35082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (22))){
var inst_33197 = (state_33285[(8)]);
var inst_33200 = cljs.core.async.close_BANG_(inst_33197);
var state_33285__$1 = state_33285;
var statearr_33344_35083 = state_33285__$1;
(statearr_33344_35083[(2)] = inst_33200);

(statearr_33344_35083[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (36))){
var inst_33245 = (state_33285[(23)]);
var inst_33249 = cljs.core.chunk_first(inst_33245);
var inst_33250 = cljs.core.chunk_rest(inst_33245);
var inst_33251 = cljs.core.count(inst_33249);
var inst_33225 = inst_33250;
var inst_33226 = inst_33249;
var inst_33227 = inst_33251;
var inst_33228 = (0);
var state_33285__$1 = (function (){var statearr_33346 = state_33285;
(statearr_33346[(19)] = inst_33225);

(statearr_33346[(20)] = inst_33227);

(statearr_33346[(9)] = inst_33228);

(statearr_33346[(10)] = inst_33226);

return statearr_33346;
})();
var statearr_33349_35091 = state_33285__$1;
(statearr_33349_35091[(2)] = null);

(statearr_33349_35091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (41))){
var inst_33245 = (state_33285[(23)]);
var inst_33260 = (state_33285[(2)]);
var inst_33261 = cljs.core.next(inst_33245);
var inst_33225 = inst_33261;
var inst_33226 = null;
var inst_33227 = (0);
var inst_33228 = (0);
var state_33285__$1 = (function (){var statearr_33352 = state_33285;
(statearr_33352[(19)] = inst_33225);

(statearr_33352[(20)] = inst_33227);

(statearr_33352[(9)] = inst_33228);

(statearr_33352[(10)] = inst_33226);

(statearr_33352[(25)] = inst_33260);

return statearr_33352;
})();
var statearr_33353_35098 = state_33285__$1;
(statearr_33353_35098[(2)] = null);

(statearr_33353_35098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (43))){
var state_33285__$1 = state_33285;
var statearr_33357_35099 = state_33285__$1;
(statearr_33357_35099[(2)] = null);

(statearr_33357_35099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (29))){
var inst_33269 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33361_35100 = state_33285__$1;
(statearr_33361_35100[(2)] = inst_33269);

(statearr_33361_35100[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (44))){
var inst_33278 = (state_33285[(2)]);
var state_33285__$1 = (function (){var statearr_33363 = state_33285;
(statearr_33363[(26)] = inst_33278);

return statearr_33363;
})();
var statearr_33365_35101 = state_33285__$1;
(statearr_33365_35101[(2)] = null);

(statearr_33365_35101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (6))){
var inst_33217 = (state_33285[(27)]);
var inst_33216 = cljs.core.deref(cs);
var inst_33217__$1 = cljs.core.keys(inst_33216);
var inst_33218 = cljs.core.count(inst_33217__$1);
var inst_33219 = cljs.core.reset_BANG_(dctr,inst_33218);
var inst_33224 = cljs.core.seq(inst_33217__$1);
var inst_33225 = inst_33224;
var inst_33226 = null;
var inst_33227 = (0);
var inst_33228 = (0);
var state_33285__$1 = (function (){var statearr_33370 = state_33285;
(statearr_33370[(19)] = inst_33225);

(statearr_33370[(20)] = inst_33227);

(statearr_33370[(9)] = inst_33228);

(statearr_33370[(27)] = inst_33217__$1);

(statearr_33370[(10)] = inst_33226);

(statearr_33370[(28)] = inst_33219);

return statearr_33370;
})();
var statearr_33373_35102 = state_33285__$1;
(statearr_33373_35102[(2)] = null);

(statearr_33373_35102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (28))){
var inst_33225 = (state_33285[(19)]);
var inst_33245 = (state_33285[(23)]);
var inst_33245__$1 = cljs.core.seq(inst_33225);
var state_33285__$1 = (function (){var statearr_33376 = state_33285;
(statearr_33376[(23)] = inst_33245__$1);

return statearr_33376;
})();
if(inst_33245__$1){
var statearr_33378_35103 = state_33285__$1;
(statearr_33378_35103[(1)] = (33));

} else {
var statearr_33381_35104 = state_33285__$1;
(statearr_33381_35104[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (25))){
var inst_33227 = (state_33285[(20)]);
var inst_33228 = (state_33285[(9)]);
var inst_33230 = (inst_33228 < inst_33227);
var inst_33231 = inst_33230;
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33231)){
var statearr_33383_35105 = state_33285__$1;
(statearr_33383_35105[(1)] = (27));

} else {
var statearr_33387_35106 = state_33285__$1;
(statearr_33387_35106[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (34))){
var state_33285__$1 = state_33285;
var statearr_33389_35107 = state_33285__$1;
(statearr_33389_35107[(2)] = null);

(statearr_33389_35107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (17))){
var state_33285__$1 = state_33285;
var statearr_33393_35114 = state_33285__$1;
(statearr_33393_35114[(2)] = null);

(statearr_33393_35114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (3))){
var inst_33283 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33285__$1,inst_33283);
} else {
if((state_val_33286 === (12))){
var inst_33212 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33397_35115 = state_33285__$1;
(statearr_33397_35115[(2)] = inst_33212);

(statearr_33397_35115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (2))){
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33285__$1,(4),ch);
} else {
if((state_val_33286 === (23))){
var state_33285__$1 = state_33285;
var statearr_33402_35116 = state_33285__$1;
(statearr_33402_35116[(2)] = null);

(statearr_33402_35116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (35))){
var inst_33267 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33405_35117 = state_33285__$1;
(statearr_33405_35117[(2)] = inst_33267);

(statearr_33405_35117[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (19))){
var inst_33184 = (state_33285[(7)]);
var inst_33188 = cljs.core.chunk_first(inst_33184);
var inst_33189 = cljs.core.chunk_rest(inst_33184);
var inst_33190 = cljs.core.count(inst_33188);
var inst_33162 = inst_33189;
var inst_33163 = inst_33188;
var inst_33164 = inst_33190;
var inst_33165 = (0);
var state_33285__$1 = (function (){var statearr_33410 = state_33285;
(statearr_33410[(13)] = inst_33165);

(statearr_33410[(14)] = inst_33164);

(statearr_33410[(16)] = inst_33163);

(statearr_33410[(17)] = inst_33162);

return statearr_33410;
})();
var statearr_33412_35118 = state_33285__$1;
(statearr_33412_35118[(2)] = null);

(statearr_33412_35118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (11))){
var inst_33184 = (state_33285[(7)]);
var inst_33162 = (state_33285[(17)]);
var inst_33184__$1 = cljs.core.seq(inst_33162);
var state_33285__$1 = (function (){var statearr_33416 = state_33285;
(statearr_33416[(7)] = inst_33184__$1);

return statearr_33416;
})();
if(inst_33184__$1){
var statearr_33419_35119 = state_33285__$1;
(statearr_33419_35119[(1)] = (16));

} else {
var statearr_33421_35120 = state_33285__$1;
(statearr_33421_35120[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (9))){
var inst_33214 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33423_35121 = state_33285__$1;
(statearr_33423_35121[(2)] = inst_33214);

(statearr_33423_35121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (5))){
var inst_33159 = cljs.core.deref(cs);
var inst_33160 = cljs.core.seq(inst_33159);
var inst_33162 = inst_33160;
var inst_33163 = null;
var inst_33164 = (0);
var inst_33165 = (0);
var state_33285__$1 = (function (){var statearr_33427 = state_33285;
(statearr_33427[(13)] = inst_33165);

(statearr_33427[(14)] = inst_33164);

(statearr_33427[(16)] = inst_33163);

(statearr_33427[(17)] = inst_33162);

return statearr_33427;
})();
var statearr_33429_35122 = state_33285__$1;
(statearr_33429_35122[(2)] = null);

(statearr_33429_35122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (14))){
var state_33285__$1 = state_33285;
var statearr_33434_35123 = state_33285__$1;
(statearr_33434_35123[(2)] = null);

(statearr_33434_35123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (45))){
var inst_33275 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33438_35131 = state_33285__$1;
(statearr_33438_35131[(2)] = inst_33275);

(statearr_33438_35131[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (26))){
var inst_33217 = (state_33285[(27)]);
var inst_33271 = (state_33285[(2)]);
var inst_33272 = cljs.core.seq(inst_33217);
var state_33285__$1 = (function (){var statearr_33440 = state_33285;
(statearr_33440[(29)] = inst_33271);

return statearr_33440;
})();
if(inst_33272){
var statearr_33444_35132 = state_33285__$1;
(statearr_33444_35132[(1)] = (42));

} else {
var statearr_33445_35133 = state_33285__$1;
(statearr_33445_35133[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (16))){
var inst_33184 = (state_33285[(7)]);
var inst_33186 = cljs.core.chunked_seq_QMARK_(inst_33184);
var state_33285__$1 = state_33285;
if(inst_33186){
var statearr_33448_35134 = state_33285__$1;
(statearr_33448_35134[(1)] = (19));

} else {
var statearr_33451_35135 = state_33285__$1;
(statearr_33451_35135[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (38))){
var inst_33264 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33453_35136 = state_33285__$1;
(statearr_33453_35136[(2)] = inst_33264);

(statearr_33453_35136[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (30))){
var state_33285__$1 = state_33285;
var statearr_33457_35137 = state_33285__$1;
(statearr_33457_35137[(2)] = null);

(statearr_33457_35137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (10))){
var inst_33165 = (state_33285[(13)]);
var inst_33163 = (state_33285[(16)]);
var inst_33173 = cljs.core._nth(inst_33163,inst_33165);
var inst_33174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33173,(0),null);
var inst_33175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33173,(1),null);
var state_33285__$1 = (function (){var statearr_33462 = state_33285;
(statearr_33462[(24)] = inst_33174);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33175)){
var statearr_33463_35141 = state_33285__$1;
(statearr_33463_35141[(1)] = (13));

} else {
var statearr_33465_35142 = state_33285__$1;
(statearr_33465_35142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (18))){
var inst_33210 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33469_35143 = state_33285__$1;
(statearr_33469_35143[(2)] = inst_33210);

(statearr_33469_35143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (42))){
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33285__$1,(45),dchan);
} else {
if((state_val_33286 === (37))){
var inst_33254 = (state_33285[(22)]);
var inst_33245 = (state_33285[(23)]);
var inst_33151 = (state_33285[(12)]);
var inst_33254__$1 = cljs.core.first(inst_33245);
var inst_33255 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33254__$1,inst_33151,done);
var state_33285__$1 = (function (){var statearr_33475 = state_33285;
(statearr_33475[(22)] = inst_33254__$1);

return statearr_33475;
})();
if(cljs.core.truth_(inst_33255)){
var statearr_33476_35144 = state_33285__$1;
(statearr_33476_35144[(1)] = (39));

} else {
var statearr_33479_35145 = state_33285__$1;
(statearr_33479_35145[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (8))){
var inst_33165 = (state_33285[(13)]);
var inst_33164 = (state_33285[(14)]);
var inst_33167 = (inst_33165 < inst_33164);
var inst_33168 = inst_33167;
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33168)){
var statearr_33482_35146 = state_33285__$1;
(statearr_33482_35146[(1)] = (10));

} else {
var statearr_33483_35147 = state_33285__$1;
(statearr_33483_35147[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32075__auto__ = null;
var cljs$core$async$mult_$_state_machine__32075__auto____0 = (function (){
var statearr_33489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33489[(0)] = cljs$core$async$mult_$_state_machine__32075__auto__);

(statearr_33489[(1)] = (1));

return statearr_33489;
});
var cljs$core$async$mult_$_state_machine__32075__auto____1 = (function (state_33285){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_33285);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33493){var ex__32078__auto__ = e33493;
var statearr_33494_35151 = state_33285;
(statearr_33494_35151[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_33285[(4)]))){
var statearr_33496_35158 = state_33285;
(statearr_33496_35158[(1)] = cljs.core.first((state_33285[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35159 = state_33285;
state_33285 = G__35159;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32075__auto__ = function(state_33285){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32075__auto____1.call(this,state_33285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32075__auto____0;
cljs$core$async$mult_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32075__auto____1;
return cljs$core$async$mult_$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33501 = f__32413__auto__();
(statearr_33501[(6)] = c__32412__auto___35045);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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
var G__33511 = arguments.length;
switch (G__33511) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35161 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35161(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35162 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35162(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35163 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35163(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35164 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35164(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35165 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35165(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35167 = arguments.length;
var i__4819__auto___35168 = (0);
while(true){
if((i__4819__auto___35168 < len__4818__auto___35167)){
args__4824__auto__.push((arguments[i__4819__auto___35168]));

var G__35169 = (i__4819__auto___35168 + (1));
i__4819__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33562){
var map__33563 = p__33562;
var map__33563__$1 = cljs.core.__destructure_map(map__33563);
var opts = map__33563__$1;
var statearr_33564_35170 = state;
(statearr_33564_35170[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33565_35171 = state;
(statearr_33565_35171[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33566_35172 = state;
(statearr_33566_35172[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33558){
var G__33559 = cljs.core.first(seq33558);
var seq33558__$1 = cljs.core.next(seq33558);
var G__33560 = cljs.core.first(seq33558__$1);
var seq33558__$2 = cljs.core.next(seq33558__$1);
var G__33561 = cljs.core.first(seq33558__$2);
var seq33558__$3 = cljs.core.next(seq33558__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33559,G__33560,G__33561,seq33558__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33569 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33570){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33570 = meta33570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33571,meta33570__$1){
var self__ = this;
var _33571__$1 = this;
return (new cljs.core.async.t_cljs$core$async33569(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33570__$1));
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33571){
var self__ = this;
var _33571__$1 = this;
return self__.meta33570;
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33570","meta33570",-1683819759,null)], null);
}));

(cljs.core.async.t_cljs$core$async33569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33569");

(cljs.core.async.t_cljs$core$async33569.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33569.
 */
cljs.core.async.__GT_t_cljs$core$async33569 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33569(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33570){
return (new cljs.core.async.t_cljs$core$async33569(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33570));
});

}

return (new cljs.core.async.t_cljs$core$async33569(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32412__auto___35188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_33641){
var state_val_33642 = (state_33641[(1)]);
if((state_val_33642 === (7))){
var inst_33599 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
if(cljs.core.truth_(inst_33599)){
var statearr_33647_35189 = state_33641__$1;
(statearr_33647_35189[(1)] = (8));

} else {
var statearr_33652_35190 = state_33641__$1;
(statearr_33652_35190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (20))){
var inst_33592 = (state_33641[(7)]);
var state_33641__$1 = state_33641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33641__$1,(23),out,inst_33592);
} else {
if((state_val_33642 === (1))){
var inst_33575 = calc_state();
var inst_33576 = cljs.core.__destructure_map(inst_33575);
var inst_33577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33576,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33576,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33576,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33580 = inst_33575;
var state_33641__$1 = (function (){var statearr_33654 = state_33641;
(statearr_33654[(8)] = inst_33578);

(statearr_33654[(9)] = inst_33579);

(statearr_33654[(10)] = inst_33577);

(statearr_33654[(11)] = inst_33580);

return statearr_33654;
})();
var statearr_33655_35195 = state_33641__$1;
(statearr_33655_35195[(2)] = null);

(statearr_33655_35195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (24))){
var inst_33583 = (state_33641[(12)]);
var inst_33580 = inst_33583;
var state_33641__$1 = (function (){var statearr_33656 = state_33641;
(statearr_33656[(11)] = inst_33580);

return statearr_33656;
})();
var statearr_33661_35196 = state_33641__$1;
(statearr_33661_35196[(2)] = null);

(statearr_33661_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (4))){
var inst_33594 = (state_33641[(13)]);
var inst_33592 = (state_33641[(7)]);
var inst_33591 = (state_33641[(2)]);
var inst_33592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33591,(0),null);
var inst_33593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33591,(1),null);
var inst_33594__$1 = (inst_33592__$1 == null);
var state_33641__$1 = (function (){var statearr_33666 = state_33641;
(statearr_33666[(14)] = inst_33593);

(statearr_33666[(13)] = inst_33594__$1);

(statearr_33666[(7)] = inst_33592__$1);

return statearr_33666;
})();
if(cljs.core.truth_(inst_33594__$1)){
var statearr_33667_35197 = state_33641__$1;
(statearr_33667_35197[(1)] = (5));

} else {
var statearr_33668_35198 = state_33641__$1;
(statearr_33668_35198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (15))){
var inst_33615 = (state_33641[(15)]);
var inst_33584 = (state_33641[(16)]);
var inst_33615__$1 = cljs.core.empty_QMARK_(inst_33584);
var state_33641__$1 = (function (){var statearr_33669 = state_33641;
(statearr_33669[(15)] = inst_33615__$1);

return statearr_33669;
})();
if(inst_33615__$1){
var statearr_33673_35199 = state_33641__$1;
(statearr_33673_35199[(1)] = (17));

} else {
var statearr_33674_35200 = state_33641__$1;
(statearr_33674_35200[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (21))){
var inst_33583 = (state_33641[(12)]);
var inst_33580 = inst_33583;
var state_33641__$1 = (function (){var statearr_33676 = state_33641;
(statearr_33676[(11)] = inst_33580);

return statearr_33676;
})();
var statearr_33677_35201 = state_33641__$1;
(statearr_33677_35201[(2)] = null);

(statearr_33677_35201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (13))){
var inst_33606 = (state_33641[(2)]);
var inst_33607 = calc_state();
var inst_33580 = inst_33607;
var state_33641__$1 = (function (){var statearr_33681 = state_33641;
(statearr_33681[(17)] = inst_33606);

(statearr_33681[(11)] = inst_33580);

return statearr_33681;
})();
var statearr_33683_35202 = state_33641__$1;
(statearr_33683_35202[(2)] = null);

(statearr_33683_35202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (22))){
var inst_33635 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
var statearr_33684_35203 = state_33641__$1;
(statearr_33684_35203[(2)] = inst_33635);

(statearr_33684_35203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (6))){
var inst_33593 = (state_33641[(14)]);
var inst_33597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33593,change);
var state_33641__$1 = state_33641;
var statearr_33685_35204 = state_33641__$1;
(statearr_33685_35204[(2)] = inst_33597);

(statearr_33685_35204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (25))){
var state_33641__$1 = state_33641;
var statearr_33690_35205 = state_33641__$1;
(statearr_33690_35205[(2)] = null);

(statearr_33690_35205[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (17))){
var inst_33593 = (state_33641[(14)]);
var inst_33585 = (state_33641[(18)]);
var inst_33617 = (inst_33585.cljs$core$IFn$_invoke$arity$1 ? inst_33585.cljs$core$IFn$_invoke$arity$1(inst_33593) : inst_33585.call(null,inst_33593));
var inst_33618 = cljs.core.not(inst_33617);
var state_33641__$1 = state_33641;
var statearr_33691_35207 = state_33641__$1;
(statearr_33691_35207[(2)] = inst_33618);

(statearr_33691_35207[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (3))){
var inst_33639 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33641__$1,inst_33639);
} else {
if((state_val_33642 === (12))){
var state_33641__$1 = state_33641;
var statearr_33693_35209 = state_33641__$1;
(statearr_33693_35209[(2)] = null);

(statearr_33693_35209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (2))){
var inst_33583 = (state_33641[(12)]);
var inst_33580 = (state_33641[(11)]);
var inst_33583__$1 = cljs.core.__destructure_map(inst_33580);
var inst_33584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33583__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33583__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33583__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33641__$1 = (function (){var statearr_33694 = state_33641;
(statearr_33694[(12)] = inst_33583__$1);

(statearr_33694[(16)] = inst_33584);

(statearr_33694[(18)] = inst_33585);

return statearr_33694;
})();
return cljs.core.async.ioc_alts_BANG_(state_33641__$1,(4),inst_33586);
} else {
if((state_val_33642 === (23))){
var inst_33626 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
if(cljs.core.truth_(inst_33626)){
var statearr_33695_35210 = state_33641__$1;
(statearr_33695_35210[(1)] = (24));

} else {
var statearr_33696_35211 = state_33641__$1;
(statearr_33696_35211[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (19))){
var inst_33621 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
var statearr_33704_35212 = state_33641__$1;
(statearr_33704_35212[(2)] = inst_33621);

(statearr_33704_35212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (11))){
var inst_33593 = (state_33641[(14)]);
var inst_33603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33593);
var state_33641__$1 = state_33641;
var statearr_33706_35213 = state_33641__$1;
(statearr_33706_35213[(2)] = inst_33603);

(statearr_33706_35213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (9))){
var inst_33610 = (state_33641[(19)]);
var inst_33593 = (state_33641[(14)]);
var inst_33584 = (state_33641[(16)]);
var inst_33610__$1 = (inst_33584.cljs$core$IFn$_invoke$arity$1 ? inst_33584.cljs$core$IFn$_invoke$arity$1(inst_33593) : inst_33584.call(null,inst_33593));
var state_33641__$1 = (function (){var statearr_33707 = state_33641;
(statearr_33707[(19)] = inst_33610__$1);

return statearr_33707;
})();
if(cljs.core.truth_(inst_33610__$1)){
var statearr_33708_35214 = state_33641__$1;
(statearr_33708_35214[(1)] = (14));

} else {
var statearr_33712_35215 = state_33641__$1;
(statearr_33712_35215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (5))){
var inst_33594 = (state_33641[(13)]);
var state_33641__$1 = state_33641;
var statearr_33714_35216 = state_33641__$1;
(statearr_33714_35216[(2)] = inst_33594);

(statearr_33714_35216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (14))){
var inst_33610 = (state_33641[(19)]);
var state_33641__$1 = state_33641;
var statearr_33715_35217 = state_33641__$1;
(statearr_33715_35217[(2)] = inst_33610);

(statearr_33715_35217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (26))){
var inst_33631 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
var statearr_33720_35218 = state_33641__$1;
(statearr_33720_35218[(2)] = inst_33631);

(statearr_33720_35218[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (16))){
var inst_33623 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
if(cljs.core.truth_(inst_33623)){
var statearr_33721_35219 = state_33641__$1;
(statearr_33721_35219[(1)] = (20));

} else {
var statearr_33722_35220 = state_33641__$1;
(statearr_33722_35220[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (10))){
var inst_33637 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
var statearr_33723_35221 = state_33641__$1;
(statearr_33723_35221[(2)] = inst_33637);

(statearr_33723_35221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (18))){
var inst_33615 = (state_33641[(15)]);
var state_33641__$1 = state_33641;
var statearr_33728_35222 = state_33641__$1;
(statearr_33728_35222[(2)] = inst_33615);

(statearr_33728_35222[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (8))){
var inst_33592 = (state_33641[(7)]);
var inst_33601 = (inst_33592 == null);
var state_33641__$1 = state_33641;
if(cljs.core.truth_(inst_33601)){
var statearr_33729_35223 = state_33641__$1;
(statearr_33729_35223[(1)] = (11));

} else {
var statearr_33730_35224 = state_33641__$1;
(statearr_33730_35224[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32075__auto__ = null;
var cljs$core$async$mix_$_state_machine__32075__auto____0 = (function (){
var statearr_33732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33732[(0)] = cljs$core$async$mix_$_state_machine__32075__auto__);

(statearr_33732[(1)] = (1));

return statearr_33732;
});
var cljs$core$async$mix_$_state_machine__32075__auto____1 = (function (state_33641){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_33641);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33733){var ex__32078__auto__ = e33733;
var statearr_33734_35226 = state_33641;
(statearr_33734_35226[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_33641[(4)]))){
var statearr_33735_35227 = state_33641;
(statearr_33735_35227[(1)] = cljs.core.first((state_33641[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35228 = state_33641;
state_33641 = G__35228;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32075__auto__ = function(state_33641){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32075__auto____1.call(this,state_33641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32075__auto____0;
cljs$core$async$mix_$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32075__auto____1;
return cljs$core$async$mix_$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33743 = f__32413__auto__();
(statearr_33743[(6)] = c__32412__auto___35188);

return statearr_33743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35233 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35233(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35241 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35241(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35242 = (function() {
var G__35243 = null;
var G__35243__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35243__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35243 = function(p,v){
switch(arguments.length){
case 1:
return G__35243__1.call(this,p);
case 2:
return G__35243__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35243.cljs$core$IFn$_invoke$arity$1 = G__35243__1;
G__35243.cljs$core$IFn$_invoke$arity$2 = G__35243__2;
return G__35243;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33775 = arguments.length;
switch (G__33775) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35242(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35242(p,v);
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
var G__33782 = arguments.length;
switch (G__33782) {
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
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33780_SHARP_){
if(cljs.core.truth_((p1__33780_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33780_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33780_SHARP_.call(null,topic)))){
return p1__33780_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33780_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33788 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33789){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33789 = meta33789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33790,meta33789__$1){
var self__ = this;
var _33790__$1 = this;
return (new cljs.core.async.t_cljs$core$async33788(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33789__$1));
}));

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33790){
var self__ = this;
var _33790__$1 = this;
return self__.meta33789;
}));

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33789","meta33789",-76163425,null)], null);
}));

(cljs.core.async.t_cljs$core$async33788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33788");

(cljs.core.async.t_cljs$core$async33788.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33788.
 */
cljs.core.async.__GT_t_cljs$core$async33788 = (function cljs$core$async$__GT_t_cljs$core$async33788(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33789){
return (new cljs.core.async.t_cljs$core$async33788(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33789));
});

}

return (new cljs.core.async.t_cljs$core$async33788(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32412__auto___35267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_33864){
var state_val_33865 = (state_33864[(1)]);
if((state_val_33865 === (7))){
var inst_33860 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33866_35268 = state_33864__$1;
(statearr_33866_35268[(2)] = inst_33860);

(statearr_33866_35268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (20))){
var state_33864__$1 = state_33864;
var statearr_33867_35269 = state_33864__$1;
(statearr_33867_35269[(2)] = null);

(statearr_33867_35269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (1))){
var state_33864__$1 = state_33864;
var statearr_33868_35270 = state_33864__$1;
(statearr_33868_35270[(2)] = null);

(statearr_33868_35270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (24))){
var inst_33843 = (state_33864[(7)]);
var inst_33852 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33843);
var state_33864__$1 = state_33864;
var statearr_33869_35271 = state_33864__$1;
(statearr_33869_35271[(2)] = inst_33852);

(statearr_33869_35271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (4))){
var inst_33795 = (state_33864[(8)]);
var inst_33795__$1 = (state_33864[(2)]);
var inst_33796 = (inst_33795__$1 == null);
var state_33864__$1 = (function (){var statearr_33870 = state_33864;
(statearr_33870[(8)] = inst_33795__$1);

return statearr_33870;
})();
if(cljs.core.truth_(inst_33796)){
var statearr_33872_35272 = state_33864__$1;
(statearr_33872_35272[(1)] = (5));

} else {
var statearr_33873_35274 = state_33864__$1;
(statearr_33873_35274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (15))){
var inst_33837 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33875_35275 = state_33864__$1;
(statearr_33875_35275[(2)] = inst_33837);

(statearr_33875_35275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (21))){
var inst_33857 = (state_33864[(2)]);
var state_33864__$1 = (function (){var statearr_33876 = state_33864;
(statearr_33876[(9)] = inst_33857);

return statearr_33876;
})();
var statearr_33877_35277 = state_33864__$1;
(statearr_33877_35277[(2)] = null);

(statearr_33877_35277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (13))){
var inst_33819 = (state_33864[(10)]);
var inst_33821 = cljs.core.chunked_seq_QMARK_(inst_33819);
var state_33864__$1 = state_33864;
if(inst_33821){
var statearr_33878_35278 = state_33864__$1;
(statearr_33878_35278[(1)] = (16));

} else {
var statearr_33879_35279 = state_33864__$1;
(statearr_33879_35279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (22))){
var inst_33849 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
if(cljs.core.truth_(inst_33849)){
var statearr_33880_35280 = state_33864__$1;
(statearr_33880_35280[(1)] = (23));

} else {
var statearr_33881_35281 = state_33864__$1;
(statearr_33881_35281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (6))){
var inst_33845 = (state_33864[(11)]);
var inst_33843 = (state_33864[(7)]);
var inst_33795 = (state_33864[(8)]);
var inst_33843__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33795) : topic_fn.call(null,inst_33795));
var inst_33844 = cljs.core.deref(mults);
var inst_33845__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33844,inst_33843__$1);
var state_33864__$1 = (function (){var statearr_33883 = state_33864;
(statearr_33883[(11)] = inst_33845__$1);

(statearr_33883[(7)] = inst_33843__$1);

return statearr_33883;
})();
if(cljs.core.truth_(inst_33845__$1)){
var statearr_33884_35285 = state_33864__$1;
(statearr_33884_35285[(1)] = (19));

} else {
var statearr_33886_35286 = state_33864__$1;
(statearr_33886_35286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (25))){
var inst_33854 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33887_35287 = state_33864__$1;
(statearr_33887_35287[(2)] = inst_33854);

(statearr_33887_35287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (17))){
var inst_33819 = (state_33864[(10)]);
var inst_33828 = cljs.core.first(inst_33819);
var inst_33829 = cljs.core.async.muxch_STAR_(inst_33828);
var inst_33830 = cljs.core.async.close_BANG_(inst_33829);
var inst_33831 = cljs.core.next(inst_33819);
var inst_33805 = inst_33831;
var inst_33806 = null;
var inst_33807 = (0);
var inst_33808 = (0);
var state_33864__$1 = (function (){var statearr_33888 = state_33864;
(statearr_33888[(12)] = inst_33806);

(statearr_33888[(13)] = inst_33805);

(statearr_33888[(14)] = inst_33830);

(statearr_33888[(15)] = inst_33807);

(statearr_33888[(16)] = inst_33808);

return statearr_33888;
})();
var statearr_33889_35288 = state_33864__$1;
(statearr_33889_35288[(2)] = null);

(statearr_33889_35288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (3))){
var inst_33862 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33864__$1,inst_33862);
} else {
if((state_val_33865 === (12))){
var inst_33839 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33890_35289 = state_33864__$1;
(statearr_33890_35289[(2)] = inst_33839);

(statearr_33890_35289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (2))){
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33864__$1,(4),ch);
} else {
if((state_val_33865 === (23))){
var state_33864__$1 = state_33864;
var statearr_33893_35290 = state_33864__$1;
(statearr_33893_35290[(2)] = null);

(statearr_33893_35290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (19))){
var inst_33845 = (state_33864[(11)]);
var inst_33795 = (state_33864[(8)]);
var inst_33847 = cljs.core.async.muxch_STAR_(inst_33845);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33864__$1,(22),inst_33847,inst_33795);
} else {
if((state_val_33865 === (11))){
var inst_33805 = (state_33864[(13)]);
var inst_33819 = (state_33864[(10)]);
var inst_33819__$1 = cljs.core.seq(inst_33805);
var state_33864__$1 = (function (){var statearr_33894 = state_33864;
(statearr_33894[(10)] = inst_33819__$1);

return statearr_33894;
})();
if(inst_33819__$1){
var statearr_33895_35291 = state_33864__$1;
(statearr_33895_35291[(1)] = (13));

} else {
var statearr_33896_35292 = state_33864__$1;
(statearr_33896_35292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (9))){
var inst_33841 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33897_35293 = state_33864__$1;
(statearr_33897_35293[(2)] = inst_33841);

(statearr_33897_35293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (5))){
var inst_33802 = cljs.core.deref(mults);
var inst_33803 = cljs.core.vals(inst_33802);
var inst_33804 = cljs.core.seq(inst_33803);
var inst_33805 = inst_33804;
var inst_33806 = null;
var inst_33807 = (0);
var inst_33808 = (0);
var state_33864__$1 = (function (){var statearr_33898 = state_33864;
(statearr_33898[(12)] = inst_33806);

(statearr_33898[(13)] = inst_33805);

(statearr_33898[(15)] = inst_33807);

(statearr_33898[(16)] = inst_33808);

return statearr_33898;
})();
var statearr_33899_35294 = state_33864__$1;
(statearr_33899_35294[(2)] = null);

(statearr_33899_35294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (14))){
var state_33864__$1 = state_33864;
var statearr_33903_35299 = state_33864__$1;
(statearr_33903_35299[(2)] = null);

(statearr_33903_35299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (16))){
var inst_33819 = (state_33864[(10)]);
var inst_33823 = cljs.core.chunk_first(inst_33819);
var inst_33824 = cljs.core.chunk_rest(inst_33819);
var inst_33825 = cljs.core.count(inst_33823);
var inst_33805 = inst_33824;
var inst_33806 = inst_33823;
var inst_33807 = inst_33825;
var inst_33808 = (0);
var state_33864__$1 = (function (){var statearr_33904 = state_33864;
(statearr_33904[(12)] = inst_33806);

(statearr_33904[(13)] = inst_33805);

(statearr_33904[(15)] = inst_33807);

(statearr_33904[(16)] = inst_33808);

return statearr_33904;
})();
var statearr_33905_35300 = state_33864__$1;
(statearr_33905_35300[(2)] = null);

(statearr_33905_35300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (10))){
var inst_33806 = (state_33864[(12)]);
var inst_33805 = (state_33864[(13)]);
var inst_33807 = (state_33864[(15)]);
var inst_33808 = (state_33864[(16)]);
var inst_33813 = cljs.core._nth(inst_33806,inst_33808);
var inst_33814 = cljs.core.async.muxch_STAR_(inst_33813);
var inst_33815 = cljs.core.async.close_BANG_(inst_33814);
var inst_33816 = (inst_33808 + (1));
var tmp33900 = inst_33806;
var tmp33901 = inst_33805;
var tmp33902 = inst_33807;
var inst_33805__$1 = tmp33901;
var inst_33806__$1 = tmp33900;
var inst_33807__$1 = tmp33902;
var inst_33808__$1 = inst_33816;
var state_33864__$1 = (function (){var statearr_33906 = state_33864;
(statearr_33906[(12)] = inst_33806__$1);

(statearr_33906[(13)] = inst_33805__$1);

(statearr_33906[(15)] = inst_33807__$1);

(statearr_33906[(16)] = inst_33808__$1);

(statearr_33906[(17)] = inst_33815);

return statearr_33906;
})();
var statearr_33908_35301 = state_33864__$1;
(statearr_33908_35301[(2)] = null);

(statearr_33908_35301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (18))){
var inst_33834 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33910_35302 = state_33864__$1;
(statearr_33910_35302[(2)] = inst_33834);

(statearr_33910_35302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (8))){
var inst_33807 = (state_33864[(15)]);
var inst_33808 = (state_33864[(16)]);
var inst_33810 = (inst_33808 < inst_33807);
var inst_33811 = inst_33810;
var state_33864__$1 = state_33864;
if(cljs.core.truth_(inst_33811)){
var statearr_33911_35303 = state_33864__$1;
(statearr_33911_35303[(1)] = (10));

} else {
var statearr_33912_35304 = state_33864__$1;
(statearr_33912_35304[(1)] = (11));

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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_33913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33913[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_33913[(1)] = (1));

return statearr_33913;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_33864){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_33864);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e33918){var ex__32078__auto__ = e33918;
var statearr_33919_35310 = state_33864;
(statearr_33919_35310[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_33864[(4)]))){
var statearr_33920_35311 = state_33864;
(statearr_33920_35311[(1)] = cljs.core.first((state_33864[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35312 = state_33864;
state_33864 = G__35312;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_33864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_33864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_33921 = f__32413__auto__();
(statearr_33921[(6)] = c__32412__auto___35267);

return statearr_33921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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
var G__33925 = arguments.length;
switch (G__33925) {
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
var G__33933 = arguments.length;
switch (G__33933) {
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
var G__33935 = arguments.length;
switch (G__33935) {
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
var c__32412__auto___35322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34010){
var state_val_34011 = (state_34010[(1)]);
if((state_val_34011 === (7))){
var state_34010__$1 = state_34010;
var statearr_34012_35323 = state_34010__$1;
(statearr_34012_35323[(2)] = null);

(statearr_34012_35323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (1))){
var state_34010__$1 = state_34010;
var statearr_34013_35324 = state_34010__$1;
(statearr_34013_35324[(2)] = null);

(statearr_34013_35324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (4))){
var inst_33961 = (state_34010[(7)]);
var inst_33965 = (state_34010[(8)]);
var inst_33967 = (inst_33965 < inst_33961);
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_33967)){
var statearr_34018_35326 = state_34010__$1;
(statearr_34018_35326[(1)] = (6));

} else {
var statearr_34019_35327 = state_34010__$1;
(statearr_34019_35327[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (15))){
var inst_33996 = (state_34010[(9)]);
var inst_34001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33996);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34010__$1,(17),out,inst_34001);
} else {
if((state_val_34011 === (13))){
var inst_33996 = (state_34010[(9)]);
var inst_33996__$1 = (state_34010[(2)]);
var inst_33997 = cljs.core.some(cljs.core.nil_QMARK_,inst_33996__$1);
var state_34010__$1 = (function (){var statearr_34020 = state_34010;
(statearr_34020[(9)] = inst_33996__$1);

return statearr_34020;
})();
if(cljs.core.truth_(inst_33997)){
var statearr_34021_35329 = state_34010__$1;
(statearr_34021_35329[(1)] = (14));

} else {
var statearr_34022_35330 = state_34010__$1;
(statearr_34022_35330[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (6))){
var state_34010__$1 = state_34010;
var statearr_34023_35331 = state_34010__$1;
(statearr_34023_35331[(2)] = null);

(statearr_34023_35331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (17))){
var inst_34003 = (state_34010[(2)]);
var state_34010__$1 = (function (){var statearr_34029 = state_34010;
(statearr_34029[(10)] = inst_34003);

return statearr_34029;
})();
var statearr_34030_35332 = state_34010__$1;
(statearr_34030_35332[(2)] = null);

(statearr_34030_35332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (3))){
var inst_34008 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34010__$1,inst_34008);
} else {
if((state_val_34011 === (12))){
var _ = (function (){var statearr_34031 = state_34010;
(statearr_34031[(4)] = cljs.core.rest((state_34010[(4)])));

return statearr_34031;
})();
var state_34010__$1 = state_34010;
var ex34024 = (state_34010__$1[(2)]);
var statearr_34034_35333 = state_34010__$1;
(statearr_34034_35333[(5)] = ex34024);


if((ex34024 instanceof Object)){
var statearr_34035_35334 = state_34010__$1;
(statearr_34035_35334[(1)] = (11));

(statearr_34035_35334[(5)] = null);

} else {
throw ex34024;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (2))){
var inst_33956 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33961 = cnt;
var inst_33965 = (0);
var state_34010__$1 = (function (){var statearr_34038 = state_34010;
(statearr_34038[(11)] = inst_33956);

(statearr_34038[(7)] = inst_33961);

(statearr_34038[(8)] = inst_33965);

return statearr_34038;
})();
var statearr_34039_35335 = state_34010__$1;
(statearr_34039_35335[(2)] = null);

(statearr_34039_35335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (11))){
var inst_33972 = (state_34010[(2)]);
var inst_33976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34010__$1 = (function (){var statearr_34040 = state_34010;
(statearr_34040[(12)] = inst_33972);

return statearr_34040;
})();
var statearr_34041_35336 = state_34010__$1;
(statearr_34041_35336[(2)] = inst_33976);

(statearr_34041_35336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (9))){
var inst_33965 = (state_34010[(8)]);
var _ = (function (){var statearr_34042 = state_34010;
(statearr_34042[(4)] = cljs.core.cons((12),(state_34010[(4)])));

return statearr_34042;
})();
var inst_33982 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33965) : chs__$1.call(null,inst_33965));
var inst_33983 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33965) : done.call(null,inst_33965));
var inst_33984 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33982,inst_33983);
var ___$1 = (function (){var statearr_34043 = state_34010;
(statearr_34043[(4)] = cljs.core.rest((state_34010[(4)])));

return statearr_34043;
})();
var state_34010__$1 = state_34010;
var statearr_34044_35338 = state_34010__$1;
(statearr_34044_35338[(2)] = inst_33984);

(statearr_34044_35338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (5))){
var inst_33994 = (state_34010[(2)]);
var state_34010__$1 = (function (){var statearr_34045 = state_34010;
(statearr_34045[(13)] = inst_33994);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34010__$1,(13),dchan);
} else {
if((state_val_34011 === (14))){
var inst_33999 = cljs.core.async.close_BANG_(out);
var state_34010__$1 = state_34010;
var statearr_34046_35342 = state_34010__$1;
(statearr_34046_35342[(2)] = inst_33999);

(statearr_34046_35342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (16))){
var inst_34006 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34048_35343 = state_34010__$1;
(statearr_34048_35343[(2)] = inst_34006);

(statearr_34048_35343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (10))){
var inst_33965 = (state_34010[(8)]);
var inst_33987 = (state_34010[(2)]);
var inst_33988 = (inst_33965 + (1));
var inst_33965__$1 = inst_33988;
var state_34010__$1 = (function (){var statearr_34050 = state_34010;
(statearr_34050[(14)] = inst_33987);

(statearr_34050[(8)] = inst_33965__$1);

return statearr_34050;
})();
var statearr_34051_35344 = state_34010__$1;
(statearr_34051_35344[(2)] = null);

(statearr_34051_35344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (8))){
var inst_33992 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34052_35345 = state_34010__$1;
(statearr_34052_35345[(2)] = inst_33992);

(statearr_34052_35345[(1)] = (5));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34053[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34053[(1)] = (1));

return statearr_34053;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34010){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34010);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34055){var ex__32078__auto__ = e34055;
var statearr_34056_35346 = state_34010;
(statearr_34056_35346[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34010[(4)]))){
var statearr_34058_35347 = state_34010;
(statearr_34058_35347[(1)] = cljs.core.first((state_34010[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35348 = state_34010;
state_34010 = G__35348;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34062 = f__32413__auto__();
(statearr_34062[(6)] = c__32412__auto___35322);

return statearr_34062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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
var G__34065 = arguments.length;
switch (G__34065) {
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
var c__32412__auto___35350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34097){
var state_val_34098 = (state_34097[(1)]);
if((state_val_34098 === (7))){
var inst_34077 = (state_34097[(7)]);
var inst_34076 = (state_34097[(8)]);
var inst_34076__$1 = (state_34097[(2)]);
var inst_34077__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34076__$1,(0),null);
var inst_34078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34076__$1,(1),null);
var inst_34079 = (inst_34077__$1 == null);
var state_34097__$1 = (function (){var statearr_34099 = state_34097;
(statearr_34099[(7)] = inst_34077__$1);

(statearr_34099[(8)] = inst_34076__$1);

(statearr_34099[(9)] = inst_34078);

return statearr_34099;
})();
if(cljs.core.truth_(inst_34079)){
var statearr_34100_35352 = state_34097__$1;
(statearr_34100_35352[(1)] = (8));

} else {
var statearr_34101_35353 = state_34097__$1;
(statearr_34101_35353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (1))){
var inst_34066 = cljs.core.vec(chs);
var inst_34067 = inst_34066;
var state_34097__$1 = (function (){var statearr_34102 = state_34097;
(statearr_34102[(10)] = inst_34067);

return statearr_34102;
})();
var statearr_34103_35354 = state_34097__$1;
(statearr_34103_35354[(2)] = null);

(statearr_34103_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (4))){
var inst_34067 = (state_34097[(10)]);
var state_34097__$1 = state_34097;
return cljs.core.async.ioc_alts_BANG_(state_34097__$1,(7),inst_34067);
} else {
if((state_val_34098 === (6))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34108_35355 = state_34097__$1;
(statearr_34108_35355[(2)] = inst_34093);

(statearr_34108_35355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (3))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34097__$1,inst_34095);
} else {
if((state_val_34098 === (2))){
var inst_34067 = (state_34097[(10)]);
var inst_34069 = cljs.core.count(inst_34067);
var inst_34070 = (inst_34069 > (0));
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34070)){
var statearr_34111_35356 = state_34097__$1;
(statearr_34111_35356[(1)] = (4));

} else {
var statearr_34113_35357 = state_34097__$1;
(statearr_34113_35357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (11))){
var inst_34067 = (state_34097[(10)]);
var inst_34086 = (state_34097[(2)]);
var tmp34110 = inst_34067;
var inst_34067__$1 = tmp34110;
var state_34097__$1 = (function (){var statearr_34115 = state_34097;
(statearr_34115[(11)] = inst_34086);

(statearr_34115[(10)] = inst_34067__$1);

return statearr_34115;
})();
var statearr_34116_35362 = state_34097__$1;
(statearr_34116_35362[(2)] = null);

(statearr_34116_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (9))){
var inst_34077 = (state_34097[(7)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34097__$1,(11),out,inst_34077);
} else {
if((state_val_34098 === (5))){
var inst_34091 = cljs.core.async.close_BANG_(out);
var state_34097__$1 = state_34097;
var statearr_34119_35367 = state_34097__$1;
(statearr_34119_35367[(2)] = inst_34091);

(statearr_34119_35367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (10))){
var inst_34089 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34120_35369 = state_34097__$1;
(statearr_34120_35369[(2)] = inst_34089);

(statearr_34120_35369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (8))){
var inst_34077 = (state_34097[(7)]);
var inst_34076 = (state_34097[(8)]);
var inst_34078 = (state_34097[(9)]);
var inst_34067 = (state_34097[(10)]);
var inst_34081 = (function (){var cs = inst_34067;
var vec__34072 = inst_34076;
var v = inst_34077;
var c = inst_34078;
return (function (p1__34063_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34063_SHARP_);
});
})();
var inst_34082 = cljs.core.filterv(inst_34081,inst_34067);
var inst_34067__$1 = inst_34082;
var state_34097__$1 = (function (){var statearr_34124 = state_34097;
(statearr_34124[(10)] = inst_34067__$1);

return statearr_34124;
})();
var statearr_34125_35374 = state_34097__$1;
(statearr_34125_35374[(2)] = null);

(statearr_34125_35374[(1)] = (2));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34126[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34126[(1)] = (1));

return statearr_34126;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34097){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34097);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34127){var ex__32078__auto__ = e34127;
var statearr_34128_35376 = state_34097;
(statearr_34128_35376[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34097[(4)]))){
var statearr_34129_35377 = state_34097;
(statearr_34129_35377[(1)] = cljs.core.first((state_34097[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35378 = state_34097;
state_34097 = G__35378;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34130 = f__32413__auto__();
(statearr_34130[(6)] = c__32412__auto___35350);

return statearr_34130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
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
var G__34132 = arguments.length;
switch (G__34132) {
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
var c__32412__auto___35384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (7))){
var inst_34142 = (state_34164[(7)]);
var inst_34142__$1 = (state_34164[(2)]);
var inst_34143 = (inst_34142__$1 == null);
var inst_34144 = cljs.core.not(inst_34143);
var state_34164__$1 = (function (){var statearr_34166 = state_34164;
(statearr_34166[(7)] = inst_34142__$1);

return statearr_34166;
})();
if(inst_34144){
var statearr_34167_35385 = state_34164__$1;
(statearr_34167_35385[(1)] = (8));

} else {
var statearr_34168_35386 = state_34164__$1;
(statearr_34168_35386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (1))){
var inst_34137 = (0);
var state_34164__$1 = (function (){var statearr_34169 = state_34164;
(statearr_34169[(8)] = inst_34137);

return statearr_34169;
})();
var statearr_34170_35387 = state_34164__$1;
(statearr_34170_35387[(2)] = null);

(statearr_34170_35387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (4))){
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34164__$1,(7),ch);
} else {
if((state_val_34165 === (6))){
var inst_34156 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34171_35388 = state_34164__$1;
(statearr_34171_35388[(2)] = inst_34156);

(statearr_34171_35388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (3))){
var inst_34158 = (state_34164[(2)]);
var inst_34159 = cljs.core.async.close_BANG_(out);
var state_34164__$1 = (function (){var statearr_34172 = state_34164;
(statearr_34172[(9)] = inst_34158);

return statearr_34172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34164__$1,inst_34159);
} else {
if((state_val_34165 === (2))){
var inst_34137 = (state_34164[(8)]);
var inst_34139 = (inst_34137 < n);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34139)){
var statearr_34173_35389 = state_34164__$1;
(statearr_34173_35389[(1)] = (4));

} else {
var statearr_34174_35390 = state_34164__$1;
(statearr_34174_35390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (11))){
var inst_34137 = (state_34164[(8)]);
var inst_34147 = (state_34164[(2)]);
var inst_34148 = (inst_34137 + (1));
var inst_34137__$1 = inst_34148;
var state_34164__$1 = (function (){var statearr_34175 = state_34164;
(statearr_34175[(10)] = inst_34147);

(statearr_34175[(8)] = inst_34137__$1);

return statearr_34175;
})();
var statearr_34176_35391 = state_34164__$1;
(statearr_34176_35391[(2)] = null);

(statearr_34176_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (9))){
var state_34164__$1 = state_34164;
var statearr_34177_35392 = state_34164__$1;
(statearr_34177_35392[(2)] = null);

(statearr_34177_35392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (5))){
var state_34164__$1 = state_34164;
var statearr_34180_35393 = state_34164__$1;
(statearr_34180_35393[(2)] = null);

(statearr_34180_35393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (10))){
var inst_34153 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34181_35394 = state_34164__$1;
(statearr_34181_35394[(2)] = inst_34153);

(statearr_34181_35394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (8))){
var inst_34142 = (state_34164[(7)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34164__$1,(11),out,inst_34142);
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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34182[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34182[(1)] = (1));

return statearr_34182;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34164){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34164);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34183){var ex__32078__auto__ = e34183;
var statearr_34184_35395 = state_34164;
(statearr_34184_35395[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34164[(4)]))){
var statearr_34188_35396 = state_34164;
(statearr_34188_35396[(1)] = cljs.core.first((state_34164[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35397 = state_34164;
state_34164 = G__35397;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34189 = f__32413__auto__();
(statearr_34189[(6)] = c__32412__auto___35384);

return statearr_34189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34191 = (function (f,ch,meta34192){
this.f = f;
this.ch = ch;
this.meta34192 = meta34192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34193,meta34192__$1){
var self__ = this;
var _34193__$1 = this;
return (new cljs.core.async.t_cljs$core$async34191(self__.f,self__.ch,meta34192__$1));
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34193){
var self__ = this;
var _34193__$1 = this;
return self__.meta34192;
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34194 = (function (f,ch,meta34192,_,fn1,meta34195){
this.f = f;
this.ch = ch;
this.meta34192 = meta34192;
this._ = _;
this.fn1 = fn1;
this.meta34195 = meta34195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34196,meta34195__$1){
var self__ = this;
var _34196__$1 = this;
return (new cljs.core.async.t_cljs$core$async34194(self__.f,self__.ch,self__.meta34192,self__._,self__.fn1,meta34195__$1));
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34196){
var self__ = this;
var _34196__$1 = this;
return self__.meta34195;
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34190_SHARP_){
var G__34197 = (((p1__34190_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34190_SHARP_) : self__.f.call(null,p1__34190_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34197) : f1.call(null,G__34197));
});
}));

(cljs.core.async.t_cljs$core$async34194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34191","cljs.core.async/t_cljs$core$async34191",1235485391,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34195","meta34195",1859924080,null)], null);
}));

(cljs.core.async.t_cljs$core$async34194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34194");

(cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34194.
 */
cljs.core.async.__GT_t_cljs$core$async34194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34194(f__$1,ch__$1,meta34192__$1,___$2,fn1__$1,meta34195){
return (new cljs.core.async.t_cljs$core$async34194(f__$1,ch__$1,meta34192__$1,___$2,fn1__$1,meta34195));
});

}

return (new cljs.core.async.t_cljs$core$async34194(self__.f,self__.ch,self__.meta34192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34198 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34198) : self__.f.call(null,G__34198));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null)], null);
}));

(cljs.core.async.t_cljs$core$async34191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34191");

(cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34191.
 */
cljs.core.async.__GT_t_cljs$core$async34191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34191(f__$1,ch__$1,meta34192){
return (new cljs.core.async.t_cljs$core$async34191(f__$1,ch__$1,meta34192));
});

}

return (new cljs.core.async.t_cljs$core$async34191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34199 = (function (f,ch,meta34200){
this.f = f;
this.ch = ch;
this.meta34200 = meta34200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34201,meta34200__$1){
var self__ = this;
var _34201__$1 = this;
return (new cljs.core.async.t_cljs$core$async34199(self__.f,self__.ch,meta34200__$1));
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34201){
var self__ = this;
var _34201__$1 = this;
return self__.meta34200;
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34200","meta34200",-1220706268,null)], null);
}));

(cljs.core.async.t_cljs$core$async34199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34199");

(cljs.core.async.t_cljs$core$async34199.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34199.
 */
cljs.core.async.__GT_t_cljs$core$async34199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34199(f__$1,ch__$1,meta34200){
return (new cljs.core.async.t_cljs$core$async34199(f__$1,ch__$1,meta34200));
});

}

return (new cljs.core.async.t_cljs$core$async34199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34203 = (function (p,ch,meta34205){
this.p = p;
this.ch = ch;
this.meta34205 = meta34205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34207,meta34205__$1){
var self__ = this;
var _34207__$1 = this;
return (new cljs.core.async.t_cljs$core$async34203(self__.p,self__.ch,meta34205__$1));
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34207){
var self__ = this;
var _34207__$1 = this;
return self__.meta34205;
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34205","meta34205",-693548462,null)], null);
}));

(cljs.core.async.t_cljs$core$async34203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34203");

(cljs.core.async.t_cljs$core$async34203.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34203.
 */
cljs.core.async.__GT_t_cljs$core$async34203 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34203(p__$1,ch__$1,meta34205){
return (new cljs.core.async.t_cljs$core$async34203(p__$1,ch__$1,meta34205));
});

}

return (new cljs.core.async.t_cljs$core$async34203(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34214 = arguments.length;
switch (G__34214) {
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
var c__32412__auto___35417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34235){
var state_val_34236 = (state_34235[(1)]);
if((state_val_34236 === (7))){
var inst_34231 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
var statearr_34237_35418 = state_34235__$1;
(statearr_34237_35418[(2)] = inst_34231);

(statearr_34237_35418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (1))){
var state_34235__$1 = state_34235;
var statearr_34238_35419 = state_34235__$1;
(statearr_34238_35419[(2)] = null);

(statearr_34238_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (4))){
var inst_34217 = (state_34235[(7)]);
var inst_34217__$1 = (state_34235[(2)]);
var inst_34218 = (inst_34217__$1 == null);
var state_34235__$1 = (function (){var statearr_34253 = state_34235;
(statearr_34253[(7)] = inst_34217__$1);

return statearr_34253;
})();
if(cljs.core.truth_(inst_34218)){
var statearr_34254_35422 = state_34235__$1;
(statearr_34254_35422[(1)] = (5));

} else {
var statearr_34255_35425 = state_34235__$1;
(statearr_34255_35425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (6))){
var inst_34217 = (state_34235[(7)]);
var inst_34222 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34217) : p.call(null,inst_34217));
var state_34235__$1 = state_34235;
if(cljs.core.truth_(inst_34222)){
var statearr_34262_35426 = state_34235__$1;
(statearr_34262_35426[(1)] = (8));

} else {
var statearr_34263_35431 = state_34235__$1;
(statearr_34263_35431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (3))){
var inst_34233 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34235__$1,inst_34233);
} else {
if((state_val_34236 === (2))){
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34235__$1,(4),ch);
} else {
if((state_val_34236 === (11))){
var inst_34225 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
var statearr_34264_35432 = state_34235__$1;
(statearr_34264_35432[(2)] = inst_34225);

(statearr_34264_35432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (9))){
var state_34235__$1 = state_34235;
var statearr_34265_35433 = state_34235__$1;
(statearr_34265_35433[(2)] = null);

(statearr_34265_35433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (5))){
var inst_34220 = cljs.core.async.close_BANG_(out);
var state_34235__$1 = state_34235;
var statearr_34266_35434 = state_34235__$1;
(statearr_34266_35434[(2)] = inst_34220);

(statearr_34266_35434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (10))){
var inst_34228 = (state_34235[(2)]);
var state_34235__$1 = (function (){var statearr_34281 = state_34235;
(statearr_34281[(8)] = inst_34228);

return statearr_34281;
})();
var statearr_34282_35436 = state_34235__$1;
(statearr_34282_35436[(2)] = null);

(statearr_34282_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (8))){
var inst_34217 = (state_34235[(7)]);
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34235__$1,(11),out,inst_34217);
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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34289 = [null,null,null,null,null,null,null,null,null];
(statearr_34289[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34289[(1)] = (1));

return statearr_34289;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34235){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34235);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34290){var ex__32078__auto__ = e34290;
var statearr_34291_35442 = state_34235;
(statearr_34291_35442[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34235[(4)]))){
var statearr_34292_35443 = state_34235;
(statearr_34292_35443[(1)] = cljs.core.first((state_34235[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35444 = state_34235;
state_34235 = G__35444;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34295 = f__32413__auto__();
(statearr_34295[(6)] = c__32412__auto___35417);

return statearr_34295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34298 = arguments.length;
switch (G__34298) {
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
var c__32412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34363){
var state_val_34364 = (state_34363[(1)]);
if((state_val_34364 === (7))){
var inst_34359 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34365_35451 = state_34363__$1;
(statearr_34365_35451[(2)] = inst_34359);

(statearr_34365_35451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (20))){
var inst_34329 = (state_34363[(7)]);
var inst_34340 = (state_34363[(2)]);
var inst_34341 = cljs.core.next(inst_34329);
var inst_34315 = inst_34341;
var inst_34316 = null;
var inst_34317 = (0);
var inst_34318 = (0);
var state_34363__$1 = (function (){var statearr_34366 = state_34363;
(statearr_34366[(8)] = inst_34315);

(statearr_34366[(9)] = inst_34317);

(statearr_34366[(10)] = inst_34318);

(statearr_34366[(11)] = inst_34340);

(statearr_34366[(12)] = inst_34316);

return statearr_34366;
})();
var statearr_34367_35460 = state_34363__$1;
(statearr_34367_35460[(2)] = null);

(statearr_34367_35460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (1))){
var state_34363__$1 = state_34363;
var statearr_34368_35461 = state_34363__$1;
(statearr_34368_35461[(2)] = null);

(statearr_34368_35461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (4))){
var inst_34304 = (state_34363[(13)]);
var inst_34304__$1 = (state_34363[(2)]);
var inst_34305 = (inst_34304__$1 == null);
var state_34363__$1 = (function (){var statearr_34369 = state_34363;
(statearr_34369[(13)] = inst_34304__$1);

return statearr_34369;
})();
if(cljs.core.truth_(inst_34305)){
var statearr_34370_35464 = state_34363__$1;
(statearr_34370_35464[(1)] = (5));

} else {
var statearr_34371_35465 = state_34363__$1;
(statearr_34371_35465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (15))){
var state_34363__$1 = state_34363;
var statearr_34375_35469 = state_34363__$1;
(statearr_34375_35469[(2)] = null);

(statearr_34375_35469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (21))){
var state_34363__$1 = state_34363;
var statearr_34376_35470 = state_34363__$1;
(statearr_34376_35470[(2)] = null);

(statearr_34376_35470[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (13))){
var inst_34315 = (state_34363[(8)]);
var inst_34317 = (state_34363[(9)]);
var inst_34318 = (state_34363[(10)]);
var inst_34316 = (state_34363[(12)]);
var inst_34325 = (state_34363[(2)]);
var inst_34326 = (inst_34318 + (1));
var tmp34372 = inst_34315;
var tmp34373 = inst_34317;
var tmp34374 = inst_34316;
var inst_34315__$1 = tmp34372;
var inst_34316__$1 = tmp34374;
var inst_34317__$1 = tmp34373;
var inst_34318__$1 = inst_34326;
var state_34363__$1 = (function (){var statearr_34377 = state_34363;
(statearr_34377[(8)] = inst_34315__$1);

(statearr_34377[(9)] = inst_34317__$1);

(statearr_34377[(10)] = inst_34318__$1);

(statearr_34377[(14)] = inst_34325);

(statearr_34377[(12)] = inst_34316__$1);

return statearr_34377;
})();
var statearr_34378_35477 = state_34363__$1;
(statearr_34378_35477[(2)] = null);

(statearr_34378_35477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (22))){
var state_34363__$1 = state_34363;
var statearr_34379_35478 = state_34363__$1;
(statearr_34379_35478[(2)] = null);

(statearr_34379_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (6))){
var inst_34304 = (state_34363[(13)]);
var inst_34313 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34304) : f.call(null,inst_34304));
var inst_34314 = cljs.core.seq(inst_34313);
var inst_34315 = inst_34314;
var inst_34316 = null;
var inst_34317 = (0);
var inst_34318 = (0);
var state_34363__$1 = (function (){var statearr_34380 = state_34363;
(statearr_34380[(8)] = inst_34315);

(statearr_34380[(9)] = inst_34317);

(statearr_34380[(10)] = inst_34318);

(statearr_34380[(12)] = inst_34316);

return statearr_34380;
})();
var statearr_34381_35480 = state_34363__$1;
(statearr_34381_35480[(2)] = null);

(statearr_34381_35480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (17))){
var inst_34329 = (state_34363[(7)]);
var inst_34333 = cljs.core.chunk_first(inst_34329);
var inst_34334 = cljs.core.chunk_rest(inst_34329);
var inst_34335 = cljs.core.count(inst_34333);
var inst_34315 = inst_34334;
var inst_34316 = inst_34333;
var inst_34317 = inst_34335;
var inst_34318 = (0);
var state_34363__$1 = (function (){var statearr_34382 = state_34363;
(statearr_34382[(8)] = inst_34315);

(statearr_34382[(9)] = inst_34317);

(statearr_34382[(10)] = inst_34318);

(statearr_34382[(12)] = inst_34316);

return statearr_34382;
})();
var statearr_34383_35481 = state_34363__$1;
(statearr_34383_35481[(2)] = null);

(statearr_34383_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (3))){
var inst_34361 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34363__$1,inst_34361);
} else {
if((state_val_34364 === (12))){
var inst_34349 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34384_35482 = state_34363__$1;
(statearr_34384_35482[(2)] = inst_34349);

(statearr_34384_35482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (2))){
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34363__$1,(4),in$);
} else {
if((state_val_34364 === (23))){
var inst_34357 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34385_35483 = state_34363__$1;
(statearr_34385_35483[(2)] = inst_34357);

(statearr_34385_35483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (19))){
var inst_34344 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34386_35484 = state_34363__$1;
(statearr_34386_35484[(2)] = inst_34344);

(statearr_34386_35484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (11))){
var inst_34315 = (state_34363[(8)]);
var inst_34329 = (state_34363[(7)]);
var inst_34329__$1 = cljs.core.seq(inst_34315);
var state_34363__$1 = (function (){var statearr_34387 = state_34363;
(statearr_34387[(7)] = inst_34329__$1);

return statearr_34387;
})();
if(inst_34329__$1){
var statearr_34388_35485 = state_34363__$1;
(statearr_34388_35485[(1)] = (14));

} else {
var statearr_34389_35486 = state_34363__$1;
(statearr_34389_35486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (9))){
var inst_34351 = (state_34363[(2)]);
var inst_34352 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34363__$1 = (function (){var statearr_34390 = state_34363;
(statearr_34390[(15)] = inst_34351);

return statearr_34390;
})();
if(cljs.core.truth_(inst_34352)){
var statearr_34391_35487 = state_34363__$1;
(statearr_34391_35487[(1)] = (21));

} else {
var statearr_34392_35488 = state_34363__$1;
(statearr_34392_35488[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (5))){
var inst_34307 = cljs.core.async.close_BANG_(out);
var state_34363__$1 = state_34363;
var statearr_34393_35489 = state_34363__$1;
(statearr_34393_35489[(2)] = inst_34307);

(statearr_34393_35489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (14))){
var inst_34329 = (state_34363[(7)]);
var inst_34331 = cljs.core.chunked_seq_QMARK_(inst_34329);
var state_34363__$1 = state_34363;
if(inst_34331){
var statearr_34394_35494 = state_34363__$1;
(statearr_34394_35494[(1)] = (17));

} else {
var statearr_34395_35495 = state_34363__$1;
(statearr_34395_35495[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (16))){
var inst_34347 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34396_35500 = state_34363__$1;
(statearr_34396_35500[(2)] = inst_34347);

(statearr_34396_35500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (10))){
var inst_34318 = (state_34363[(10)]);
var inst_34316 = (state_34363[(12)]);
var inst_34323 = cljs.core._nth(inst_34316,inst_34318);
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34363__$1,(13),out,inst_34323);
} else {
if((state_val_34364 === (18))){
var inst_34329 = (state_34363[(7)]);
var inst_34338 = cljs.core.first(inst_34329);
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34363__$1,(20),out,inst_34338);
} else {
if((state_val_34364 === (8))){
var inst_34317 = (state_34363[(9)]);
var inst_34318 = (state_34363[(10)]);
var inst_34320 = (inst_34318 < inst_34317);
var inst_34321 = inst_34320;
var state_34363__$1 = state_34363;
if(cljs.core.truth_(inst_34321)){
var statearr_34405_35510 = state_34363__$1;
(statearr_34405_35510[(1)] = (10));

} else {
var statearr_34406_35511 = state_34363__$1;
(statearr_34406_35511[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32075__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32075__auto____0 = (function (){
var statearr_34410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34410[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32075__auto__);

(statearr_34410[(1)] = (1));

return statearr_34410;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32075__auto____1 = (function (state_34363){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34363);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34411){var ex__32078__auto__ = e34411;
var statearr_34412_35519 = state_34363;
(statearr_34412_35519[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34363[(4)]))){
var statearr_34413_35520 = state_34363;
(statearr_34413_35520[(1)] = cljs.core.first((state_34363[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_34363;
state_34363 = G__35521;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32075__auto__ = function(state_34363){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32075__auto____1.call(this,state_34363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32075__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32075__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34414 = f__32413__auto__();
(statearr_34414[(6)] = c__32412__auto__);

return statearr_34414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));

return c__32412__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34416 = arguments.length;
switch (G__34416) {
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
var G__34419 = arguments.length;
switch (G__34419) {
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
var G__34426 = arguments.length;
switch (G__34426) {
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
var c__32412__auto___35563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34452){
var state_val_34453 = (state_34452[(1)]);
if((state_val_34453 === (7))){
var inst_34447 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34454_35564 = state_34452__$1;
(statearr_34454_35564[(2)] = inst_34447);

(statearr_34454_35564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (1))){
var inst_34429 = null;
var state_34452__$1 = (function (){var statearr_34455 = state_34452;
(statearr_34455[(7)] = inst_34429);

return statearr_34455;
})();
var statearr_34456_35565 = state_34452__$1;
(statearr_34456_35565[(2)] = null);

(statearr_34456_35565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (4))){
var inst_34432 = (state_34452[(8)]);
var inst_34432__$1 = (state_34452[(2)]);
var inst_34433 = (inst_34432__$1 == null);
var inst_34434 = cljs.core.not(inst_34433);
var state_34452__$1 = (function (){var statearr_34457 = state_34452;
(statearr_34457[(8)] = inst_34432__$1);

return statearr_34457;
})();
if(inst_34434){
var statearr_34458_35570 = state_34452__$1;
(statearr_34458_35570[(1)] = (5));

} else {
var statearr_34459_35571 = state_34452__$1;
(statearr_34459_35571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (6))){
var state_34452__$1 = state_34452;
var statearr_34460_35575 = state_34452__$1;
(statearr_34460_35575[(2)] = null);

(statearr_34460_35575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (3))){
var inst_34449 = (state_34452[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(out);
var state_34452__$1 = (function (){var statearr_34461 = state_34452;
(statearr_34461[(9)] = inst_34449);

return statearr_34461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34452__$1,inst_34450);
} else {
if((state_val_34453 === (2))){
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34452__$1,(4),ch);
} else {
if((state_val_34453 === (11))){
var inst_34432 = (state_34452[(8)]);
var inst_34441 = (state_34452[(2)]);
var inst_34429 = inst_34432;
var state_34452__$1 = (function (){var statearr_34462 = state_34452;
(statearr_34462[(10)] = inst_34441);

(statearr_34462[(7)] = inst_34429);

return statearr_34462;
})();
var statearr_34463_35583 = state_34452__$1;
(statearr_34463_35583[(2)] = null);

(statearr_34463_35583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (9))){
var inst_34432 = (state_34452[(8)]);
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34452__$1,(11),out,inst_34432);
} else {
if((state_val_34453 === (5))){
var inst_34432 = (state_34452[(8)]);
var inst_34429 = (state_34452[(7)]);
var inst_34436 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34432,inst_34429);
var state_34452__$1 = state_34452;
if(inst_34436){
var statearr_34465_35597 = state_34452__$1;
(statearr_34465_35597[(1)] = (8));

} else {
var statearr_34466_35598 = state_34452__$1;
(statearr_34466_35598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (10))){
var inst_34444 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34467_35599 = state_34452__$1;
(statearr_34467_35599[(2)] = inst_34444);

(statearr_34467_35599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (8))){
var inst_34429 = (state_34452[(7)]);
var tmp34464 = inst_34429;
var inst_34429__$1 = tmp34464;
var state_34452__$1 = (function (){var statearr_34471 = state_34452;
(statearr_34471[(7)] = inst_34429__$1);

return statearr_34471;
})();
var statearr_34472_35608 = state_34452__$1;
(statearr_34472_35608[(2)] = null);

(statearr_34472_35608[(1)] = (2));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34473[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34473[(1)] = (1));

return statearr_34473;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34452){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34452);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34474){var ex__32078__auto__ = e34474;
var statearr_34475_35618 = state_34452;
(statearr_34475_35618[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34452[(4)]))){
var statearr_34476_35619 = state_34452;
(statearr_34476_35619[(1)] = cljs.core.first((state_34452[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35621 = state_34452;
state_34452 = G__35621;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34477 = f__32413__auto__();
(statearr_34477[(6)] = c__32412__auto___35563);

return statearr_34477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34489 = arguments.length;
switch (G__34489) {
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
var c__32412__auto___35633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34540){
var state_val_34541 = (state_34540[(1)]);
if((state_val_34541 === (7))){
var inst_34536 = (state_34540[(2)]);
var state_34540__$1 = state_34540;
var statearr_34552_35635 = state_34540__$1;
(statearr_34552_35635[(2)] = inst_34536);

(statearr_34552_35635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (1))){
var inst_34493 = (new Array(n));
var inst_34494 = inst_34493;
var inst_34495 = (0);
var state_34540__$1 = (function (){var statearr_34556 = state_34540;
(statearr_34556[(7)] = inst_34495);

(statearr_34556[(8)] = inst_34494);

return statearr_34556;
})();
var statearr_34561_35636 = state_34540__$1;
(statearr_34561_35636[(2)] = null);

(statearr_34561_35636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (4))){
var inst_34501 = (state_34540[(9)]);
var inst_34501__$1 = (state_34540[(2)]);
var inst_34503 = (inst_34501__$1 == null);
var inst_34504 = cljs.core.not(inst_34503);
var state_34540__$1 = (function (){var statearr_34562 = state_34540;
(statearr_34562[(9)] = inst_34501__$1);

return statearr_34562;
})();
if(inst_34504){
var statearr_34563_35644 = state_34540__$1;
(statearr_34563_35644[(1)] = (5));

} else {
var statearr_34564_35645 = state_34540__$1;
(statearr_34564_35645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (15))){
var inst_34530 = (state_34540[(2)]);
var state_34540__$1 = state_34540;
var statearr_34567_35647 = state_34540__$1;
(statearr_34567_35647[(2)] = inst_34530);

(statearr_34567_35647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (13))){
var state_34540__$1 = state_34540;
var statearr_34568_35648 = state_34540__$1;
(statearr_34568_35648[(2)] = null);

(statearr_34568_35648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (6))){
var inst_34495 = (state_34540[(7)]);
var inst_34526 = (inst_34495 > (0));
var state_34540__$1 = state_34540;
if(cljs.core.truth_(inst_34526)){
var statearr_34569_35649 = state_34540__$1;
(statearr_34569_35649[(1)] = (12));

} else {
var statearr_34570_35650 = state_34540__$1;
(statearr_34570_35650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (3))){
var inst_34538 = (state_34540[(2)]);
var state_34540__$1 = state_34540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34540__$1,inst_34538);
} else {
if((state_val_34541 === (12))){
var inst_34494 = (state_34540[(8)]);
var inst_34528 = cljs.core.vec(inst_34494);
var state_34540__$1 = state_34540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34540__$1,(15),out,inst_34528);
} else {
if((state_val_34541 === (2))){
var state_34540__$1 = state_34540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34540__$1,(4),ch);
} else {
if((state_val_34541 === (11))){
var inst_34520 = (state_34540[(2)]);
var inst_34521 = (new Array(n));
var inst_34494 = inst_34521;
var inst_34495 = (0);
var state_34540__$1 = (function (){var statearr_34571 = state_34540;
(statearr_34571[(7)] = inst_34495);

(statearr_34571[(8)] = inst_34494);

(statearr_34571[(10)] = inst_34520);

return statearr_34571;
})();
var statearr_34572_35657 = state_34540__$1;
(statearr_34572_35657[(2)] = null);

(statearr_34572_35657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (9))){
var inst_34494 = (state_34540[(8)]);
var inst_34518 = cljs.core.vec(inst_34494);
var state_34540__$1 = state_34540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34540__$1,(11),out,inst_34518);
} else {
if((state_val_34541 === (5))){
var inst_34495 = (state_34540[(7)]);
var inst_34494 = (state_34540[(8)]);
var inst_34501 = (state_34540[(9)]);
var inst_34510 = (state_34540[(11)]);
var inst_34509 = (inst_34494[inst_34495] = inst_34501);
var inst_34510__$1 = (inst_34495 + (1));
var inst_34511 = (inst_34510__$1 < n);
var state_34540__$1 = (function (){var statearr_34573 = state_34540;
(statearr_34573[(12)] = inst_34509);

(statearr_34573[(11)] = inst_34510__$1);

return statearr_34573;
})();
if(cljs.core.truth_(inst_34511)){
var statearr_34574_35663 = state_34540__$1;
(statearr_34574_35663[(1)] = (8));

} else {
var statearr_34575_35664 = state_34540__$1;
(statearr_34575_35664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (14))){
var inst_34533 = (state_34540[(2)]);
var inst_34534 = cljs.core.async.close_BANG_(out);
var state_34540__$1 = (function (){var statearr_34577 = state_34540;
(statearr_34577[(13)] = inst_34533);

return statearr_34577;
})();
var statearr_34578_35666 = state_34540__$1;
(statearr_34578_35666[(2)] = inst_34534);

(statearr_34578_35666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (10))){
var inst_34524 = (state_34540[(2)]);
var state_34540__$1 = state_34540;
var statearr_34579_35668 = state_34540__$1;
(statearr_34579_35668[(2)] = inst_34524);

(statearr_34579_35668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34541 === (8))){
var inst_34494 = (state_34540[(8)]);
var inst_34510 = (state_34540[(11)]);
var tmp34576 = inst_34494;
var inst_34494__$1 = tmp34576;
var inst_34495 = inst_34510;
var state_34540__$1 = (function (){var statearr_34580 = state_34540;
(statearr_34580[(7)] = inst_34495);

(statearr_34580[(8)] = inst_34494__$1);

return statearr_34580;
})();
var statearr_34581_35669 = state_34540__$1;
(statearr_34581_35669[(2)] = null);

(statearr_34581_35669[(1)] = (2));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34582[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34582[(1)] = (1));

return statearr_34582;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34540){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34540);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34583){var ex__32078__auto__ = e34583;
var statearr_34584_35672 = state_34540;
(statearr_34584_35672[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34540[(4)]))){
var statearr_34585_35673 = state_34540;
(statearr_34585_35673[(1)] = cljs.core.first((state_34540[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35674 = state_34540;
state_34540 = G__35674;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34586 = f__32413__auto__();
(statearr_34586[(6)] = c__32412__auto___35633);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34588 = arguments.length;
switch (G__34588) {
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
var c__32412__auto___35678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_34637){
var state_val_34647 = (state_34637[(1)]);
if((state_val_34647 === (7))){
var inst_34632 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34648_35683 = state_34637__$1;
(statearr_34648_35683[(2)] = inst_34632);

(statearr_34648_35683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (1))){
var inst_34591 = [];
var inst_34592 = inst_34591;
var inst_34593 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34637__$1 = (function (){var statearr_34649 = state_34637;
(statearr_34649[(7)] = inst_34593);

(statearr_34649[(8)] = inst_34592);

return statearr_34649;
})();
var statearr_34651_35692 = state_34637__$1;
(statearr_34651_35692[(2)] = null);

(statearr_34651_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (4))){
var inst_34596 = (state_34637[(9)]);
var inst_34596__$1 = (state_34637[(2)]);
var inst_34597 = (inst_34596__$1 == null);
var inst_34598 = cljs.core.not(inst_34597);
var state_34637__$1 = (function (){var statearr_34652 = state_34637;
(statearr_34652[(9)] = inst_34596__$1);

return statearr_34652;
})();
if(inst_34598){
var statearr_34653_35693 = state_34637__$1;
(statearr_34653_35693[(1)] = (5));

} else {
var statearr_34655_35694 = state_34637__$1;
(statearr_34655_35694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (15))){
var inst_34592 = (state_34637[(8)]);
var inst_34624 = cljs.core.vec(inst_34592);
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34637__$1,(18),out,inst_34624);
} else {
if((state_val_34647 === (13))){
var inst_34618 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34656_35701 = state_34637__$1;
(statearr_34656_35701[(2)] = inst_34618);

(statearr_34656_35701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (6))){
var inst_34592 = (state_34637[(8)]);
var inst_34620 = inst_34592.length;
var inst_34621 = (inst_34620 > (0));
var state_34637__$1 = state_34637;
if(cljs.core.truth_(inst_34621)){
var statearr_34657_35702 = state_34637__$1;
(statearr_34657_35702[(1)] = (15));

} else {
var statearr_34658_35703 = state_34637__$1;
(statearr_34658_35703[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (17))){
var inst_34629 = (state_34637[(2)]);
var inst_34630 = cljs.core.async.close_BANG_(out);
var state_34637__$1 = (function (){var statearr_34659 = state_34637;
(statearr_34659[(10)] = inst_34629);

return statearr_34659;
})();
var statearr_34660_35704 = state_34637__$1;
(statearr_34660_35704[(2)] = inst_34630);

(statearr_34660_35704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (3))){
var inst_34634 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34637__$1,inst_34634);
} else {
if((state_val_34647 === (12))){
var inst_34592 = (state_34637[(8)]);
var inst_34611 = cljs.core.vec(inst_34592);
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34637__$1,(14),out,inst_34611);
} else {
if((state_val_34647 === (2))){
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34637__$1,(4),ch);
} else {
if((state_val_34647 === (11))){
var inst_34596 = (state_34637[(9)]);
var inst_34600 = (state_34637[(11)]);
var inst_34592 = (state_34637[(8)]);
var inst_34608 = inst_34592.push(inst_34596);
var tmp34661 = inst_34592;
var inst_34592__$1 = tmp34661;
var inst_34593 = inst_34600;
var state_34637__$1 = (function (){var statearr_34662 = state_34637;
(statearr_34662[(7)] = inst_34593);

(statearr_34662[(12)] = inst_34608);

(statearr_34662[(8)] = inst_34592__$1);

return statearr_34662;
})();
var statearr_34663_35710 = state_34637__$1;
(statearr_34663_35710[(2)] = null);

(statearr_34663_35710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (9))){
var inst_34593 = (state_34637[(7)]);
var inst_34604 = cljs.core.keyword_identical_QMARK_(inst_34593,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34637__$1 = state_34637;
var statearr_34664_35715 = state_34637__$1;
(statearr_34664_35715[(2)] = inst_34604);

(statearr_34664_35715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (5))){
var inst_34601 = (state_34637[(13)]);
var inst_34596 = (state_34637[(9)]);
var inst_34593 = (state_34637[(7)]);
var inst_34600 = (state_34637[(11)]);
var inst_34600__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34596) : f.call(null,inst_34596));
var inst_34601__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34600__$1,inst_34593);
var state_34637__$1 = (function (){var statearr_34665 = state_34637;
(statearr_34665[(13)] = inst_34601__$1);

(statearr_34665[(11)] = inst_34600__$1);

return statearr_34665;
})();
if(inst_34601__$1){
var statearr_34666_35716 = state_34637__$1;
(statearr_34666_35716[(1)] = (8));

} else {
var statearr_34667_35717 = state_34637__$1;
(statearr_34667_35717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (14))){
var inst_34596 = (state_34637[(9)]);
var inst_34600 = (state_34637[(11)]);
var inst_34613 = (state_34637[(2)]);
var inst_34614 = [];
var inst_34615 = inst_34614.push(inst_34596);
var inst_34592 = inst_34614;
var inst_34593 = inst_34600;
var state_34637__$1 = (function (){var statearr_34668 = state_34637;
(statearr_34668[(14)] = inst_34613);

(statearr_34668[(7)] = inst_34593);

(statearr_34668[(15)] = inst_34615);

(statearr_34668[(8)] = inst_34592);

return statearr_34668;
})();
var statearr_34669_35719 = state_34637__$1;
(statearr_34669_35719[(2)] = null);

(statearr_34669_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (16))){
var state_34637__$1 = state_34637;
var statearr_34670_35724 = state_34637__$1;
(statearr_34670_35724[(2)] = null);

(statearr_34670_35724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (10))){
var inst_34606 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
if(cljs.core.truth_(inst_34606)){
var statearr_34671_35732 = state_34637__$1;
(statearr_34671_35732[(1)] = (11));

} else {
var statearr_34672_35735 = state_34637__$1;
(statearr_34672_35735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (18))){
var inst_34626 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34674_35736 = state_34637__$1;
(statearr_34674_35736[(2)] = inst_34626);

(statearr_34674_35736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (8))){
var inst_34601 = (state_34637[(13)]);
var state_34637__$1 = state_34637;
var statearr_34676_35742 = state_34637__$1;
(statearr_34676_35742[(2)] = inst_34601);

(statearr_34676_35742[(1)] = (10));


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
var cljs$core$async$state_machine__32075__auto__ = null;
var cljs$core$async$state_machine__32075__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34677[(0)] = cljs$core$async$state_machine__32075__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var cljs$core$async$state_machine__32075__auto____1 = (function (state_34637){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_34637);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e34678){var ex__32078__auto__ = e34678;
var statearr_34680_35757 = state_34637;
(statearr_34680_35757[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_34637[(4)]))){
var statearr_34681_35760 = state_34637;
(statearr_34681_35760[(1)] = cljs.core.first((state_34637[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35763 = state_34637;
state_34637 = G__35763;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
cljs$core$async$state_machine__32075__auto__ = function(state_34637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32075__auto____1.call(this,state_34637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32075__auto____0;
cljs$core$async$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32075__auto____1;
return cljs$core$async$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_34682 = f__32413__auto__();
(statearr_34682[(6)] = c__32412__auto___35678);

return statearr_34682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
