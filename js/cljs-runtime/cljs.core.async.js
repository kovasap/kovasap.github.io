goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58715 = arguments.length;
switch (G__58715) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58721 = (function (f,blockable,meta58722){
this.f = f;
this.blockable = blockable;
this.meta58722 = meta58722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58723,meta58722__$1){
var self__ = this;
var _58723__$1 = this;
return (new cljs.core.async.t_cljs$core$async58721(self__.f,self__.blockable,meta58722__$1));
}));

(cljs.core.async.t_cljs$core$async58721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58723){
var self__ = this;
var _58723__$1 = this;
return self__.meta58722;
}));

(cljs.core.async.t_cljs$core$async58721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58722","meta58722",515868629,null)], null);
}));

(cljs.core.async.t_cljs$core$async58721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58721");

(cljs.core.async.t_cljs$core$async58721.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58721.
 */
cljs.core.async.__GT_t_cljs$core$async58721 = (function cljs$core$async$__GT_t_cljs$core$async58721(f__$1,blockable__$1,meta58722){
return (new cljs.core.async.t_cljs$core$async58721(f__$1,blockable__$1,meta58722));
});

}

return (new cljs.core.async.t_cljs$core$async58721(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58752 = arguments.length;
switch (G__58752) {
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
var G__58760 = arguments.length;
switch (G__58760) {
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
var G__58769 = arguments.length;
switch (G__58769) {
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
var val_60924 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60924) : fn1.call(null,val_60924));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60924) : fn1.call(null,val_60924));
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
var G__58772 = arguments.length;
switch (G__58772) {
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
var n__4741__auto___60931 = n;
var x_60932 = (0);
while(true){
if((x_60932 < n__4741__auto___60931)){
(a[x_60932] = x_60932);

var G__60933 = (x_60932 + (1));
x_60932 = G__60933;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58777 = (function (flag,meta58778){
this.flag = flag;
this.meta58778 = meta58778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58779,meta58778__$1){
var self__ = this;
var _58779__$1 = this;
return (new cljs.core.async.t_cljs$core$async58777(self__.flag,meta58778__$1));
}));

(cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58779){
var self__ = this;
var _58779__$1 = this;
return self__.meta58778;
}));

(cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58778","meta58778",1885217281,null)], null);
}));

(cljs.core.async.t_cljs$core$async58777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58777");

(cljs.core.async.t_cljs$core$async58777.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58777.
 */
cljs.core.async.__GT_t_cljs$core$async58777 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58777(flag__$1,meta58778){
return (new cljs.core.async.t_cljs$core$async58777(flag__$1,meta58778));
});

}

return (new cljs.core.async.t_cljs$core$async58777(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58788 = (function (flag,cb,meta58789){
this.flag = flag;
this.cb = cb;
this.meta58789 = meta58789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58790,meta58789__$1){
var self__ = this;
var _58790__$1 = this;
return (new cljs.core.async.t_cljs$core$async58788(self__.flag,self__.cb,meta58789__$1));
}));

(cljs.core.async.t_cljs$core$async58788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58790){
var self__ = this;
var _58790__$1 = this;
return self__.meta58789;
}));

(cljs.core.async.t_cljs$core$async58788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58789","meta58789",388786451,null)], null);
}));

(cljs.core.async.t_cljs$core$async58788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58788");

(cljs.core.async.t_cljs$core$async58788.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58788.
 */
cljs.core.async.__GT_t_cljs$core$async58788 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58788(flag__$1,cb__$1,meta58789){
return (new cljs.core.async.t_cljs$core$async58788(flag__$1,cb__$1,meta58789));
});

}

return (new cljs.core.async.t_cljs$core$async58788(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58791_SHARP_){
var G__58794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58791_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58794) : fret.call(null,G__58794));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58792_SHARP_){
var G__58795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58792_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58795) : fret.call(null,G__58795));
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
var G__60958 = (i + (1));
i = G__60958;
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
var len__4864__auto___60959 = arguments.length;
var i__4865__auto___60960 = (0);
while(true){
if((i__4865__auto___60960 < len__4864__auto___60959)){
args__4870__auto__.push((arguments[i__4865__auto___60960]));

var G__60961 = (i__4865__auto___60960 + (1));
i__4865__auto___60960 = G__60961;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58798){
var map__58799 = p__58798;
var map__58799__$1 = cljs.core.__destructure_map(map__58799);
var opts = map__58799__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58796){
var G__58797 = cljs.core.first(seq58796);
var seq58796__$1 = cljs.core.next(seq58796);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58797,seq58796__$1);
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
var G__58801 = arguments.length;
switch (G__58801) {
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
var c__47406__auto___60967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_58827){
var state_val_58828 = (state_58827[(1)]);
if((state_val_58828 === (7))){
var inst_58823 = (state_58827[(2)]);
var state_58827__$1 = state_58827;
var statearr_58829_60969 = state_58827__$1;
(statearr_58829_60969[(2)] = inst_58823);

(statearr_58829_60969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (1))){
var state_58827__$1 = state_58827;
var statearr_58830_60971 = state_58827__$1;
(statearr_58830_60971[(2)] = null);

(statearr_58830_60971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (4))){
var inst_58806 = (state_58827[(7)]);
var inst_58806__$1 = (state_58827[(2)]);
var inst_58807 = (inst_58806__$1 == null);
var state_58827__$1 = (function (){var statearr_58831 = state_58827;
(statearr_58831[(7)] = inst_58806__$1);

return statearr_58831;
})();
if(cljs.core.truth_(inst_58807)){
var statearr_58832_60972 = state_58827__$1;
(statearr_58832_60972[(1)] = (5));

} else {
var statearr_58834_60973 = state_58827__$1;
(statearr_58834_60973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (13))){
var state_58827__$1 = state_58827;
var statearr_58838_60975 = state_58827__$1;
(statearr_58838_60975[(2)] = null);

(statearr_58838_60975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (6))){
var inst_58806 = (state_58827[(7)]);
var state_58827__$1 = state_58827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58827__$1,(11),to,inst_58806);
} else {
if((state_val_58828 === (3))){
var inst_58825 = (state_58827[(2)]);
var state_58827__$1 = state_58827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58827__$1,inst_58825);
} else {
if((state_val_58828 === (12))){
var state_58827__$1 = state_58827;
var statearr_58839_60976 = state_58827__$1;
(statearr_58839_60976[(2)] = null);

(statearr_58839_60976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (2))){
var state_58827__$1 = state_58827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58827__$1,(4),from);
} else {
if((state_val_58828 === (11))){
var inst_58816 = (state_58827[(2)]);
var state_58827__$1 = state_58827;
if(cljs.core.truth_(inst_58816)){
var statearr_58840_60977 = state_58827__$1;
(statearr_58840_60977[(1)] = (12));

} else {
var statearr_58841_60978 = state_58827__$1;
(statearr_58841_60978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (9))){
var state_58827__$1 = state_58827;
var statearr_58842_60979 = state_58827__$1;
(statearr_58842_60979[(2)] = null);

(statearr_58842_60979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (5))){
var state_58827__$1 = state_58827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58843_60980 = state_58827__$1;
(statearr_58843_60980[(1)] = (8));

} else {
var statearr_58844_60981 = state_58827__$1;
(statearr_58844_60981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (14))){
var inst_58821 = (state_58827[(2)]);
var state_58827__$1 = state_58827;
var statearr_58845_60982 = state_58827__$1;
(statearr_58845_60982[(2)] = inst_58821);

(statearr_58845_60982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (10))){
var inst_58813 = (state_58827[(2)]);
var state_58827__$1 = state_58827;
var statearr_58846_60983 = state_58827__$1;
(statearr_58846_60983[(2)] = inst_58813);

(statearr_58846_60983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58828 === (8))){
var inst_58810 = cljs.core.async.close_BANG_(to);
var state_58827__$1 = state_58827;
var statearr_58848_60985 = state_58827__$1;
(statearr_58848_60985[(2)] = inst_58810);

(statearr_58848_60985[(1)] = (10));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_58849 = [null,null,null,null,null,null,null,null];
(statearr_58849[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_58849[(1)] = (1));

return statearr_58849;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_58827){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_58827);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e58850){var ex__47131__auto__ = e58850;
var statearr_58851_60986 = state_58827;
(statearr_58851_60986[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_58827[(4)]))){
var statearr_58852_60988 = state_58827;
(statearr_58852_60988[(1)] = cljs.core.first((state_58827[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60990 = state_58827;
state_58827 = G__60990;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_58827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_58827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_58853 = f__47407__auto__();
(statearr_58853[(6)] = c__47406__auto___60967);

return statearr_58853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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
var process = (function (p__58854){
var vec__58857 = p__58854;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58857,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58857,(1),null);
var job = vec__58857;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47406__auto___60991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_58864){
var state_val_58865 = (state_58864[(1)]);
if((state_val_58865 === (1))){
var state_58864__$1 = state_58864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58864__$1,(2),res,v);
} else {
if((state_val_58865 === (2))){
var inst_58861 = (state_58864[(2)]);
var inst_58862 = cljs.core.async.close_BANG_(res);
var state_58864__$1 = (function (){var statearr_58866 = state_58864;
(statearr_58866[(7)] = inst_58861);

return statearr_58866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58864__$1,inst_58862);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0 = (function (){
var statearr_58867 = [null,null,null,null,null,null,null,null];
(statearr_58867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__);

(statearr_58867[(1)] = (1));

return statearr_58867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1 = (function (state_58864){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_58864);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e58871){var ex__47131__auto__ = e58871;
var statearr_58872_60996 = state_58864;
(statearr_58872_60996[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_58864[(4)]))){
var statearr_58873_60997 = state_58864;
(statearr_58873_60997[(1)] = cljs.core.first((state_58864[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60998 = state_58864;
state_58864 = G__60998;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = function(state_58864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1.call(this,state_58864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_58875 = f__47407__auto__();
(statearr_58875[(6)] = c__47406__auto___60991);

return statearr_58875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58878){
var vec__58880 = p__58878;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58880,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58880,(1),null);
var job = vec__58880;
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
var n__4741__auto___60999 = n;
var __61000 = (0);
while(true){
if((__61000 < n__4741__auto___60999)){
var G__58883_61001 = type;
var G__58883_61002__$1 = (((G__58883_61001 instanceof cljs.core.Keyword))?G__58883_61001.fqn:null);
switch (G__58883_61002__$1) {
case "compute":
var c__47406__auto___61004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61000,c__47406__auto___61004,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async){
return (function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = ((function (__61000,c__47406__auto___61004,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async){
return (function (state_58899){
var state_val_58900 = (state_58899[(1)]);
if((state_val_58900 === (1))){
var state_58899__$1 = state_58899;
var statearr_58901_61005 = state_58899__$1;
(statearr_58901_61005[(2)] = null);

(statearr_58901_61005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58900 === (2))){
var state_58899__$1 = state_58899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58899__$1,(4),jobs);
} else {
if((state_val_58900 === (3))){
var inst_58897 = (state_58899[(2)]);
var state_58899__$1 = state_58899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58899__$1,inst_58897);
} else {
if((state_val_58900 === (4))){
var inst_58889 = (state_58899[(2)]);
var inst_58890 = process(inst_58889);
var state_58899__$1 = state_58899;
if(cljs.core.truth_(inst_58890)){
var statearr_58902_61006 = state_58899__$1;
(statearr_58902_61006[(1)] = (5));

} else {
var statearr_58903_61007 = state_58899__$1;
(statearr_58903_61007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58900 === (5))){
var state_58899__$1 = state_58899;
var statearr_58904_61008 = state_58899__$1;
(statearr_58904_61008[(2)] = null);

(statearr_58904_61008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58900 === (6))){
var state_58899__$1 = state_58899;
var statearr_58906_61009 = state_58899__$1;
(statearr_58906_61009[(2)] = null);

(statearr_58906_61009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58900 === (7))){
var inst_58895 = (state_58899[(2)]);
var state_58899__$1 = state_58899;
var statearr_58907_61010 = state_58899__$1;
(statearr_58907_61010[(2)] = inst_58895);

(statearr_58907_61010[(1)] = (3));


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
});})(__61000,c__47406__auto___61004,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async))
;
return ((function (__61000,switch__47127__auto__,c__47406__auto___61004,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0 = (function (){
var statearr_58908 = [null,null,null,null,null,null,null];
(statearr_58908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__);

(statearr_58908[(1)] = (1));

return statearr_58908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1 = (function (state_58899){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_58899);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e58909){var ex__47131__auto__ = e58909;
var statearr_58910_61012 = state_58899;
(statearr_58910_61012[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_58899[(4)]))){
var statearr_58912_61013 = state_58899;
(statearr_58912_61013[(1)] = cljs.core.first((state_58899[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61015 = state_58899;
state_58899 = G__61015;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = function(state_58899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1.call(this,state_58899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__;
})()
;})(__61000,switch__47127__auto__,c__47406__auto___61004,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async))
})();
var state__47408__auto__ = (function (){var statearr_58913 = f__47407__auto__();
(statearr_58913[(6)] = c__47406__auto___61004);

return statearr_58913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
});})(__61000,c__47406__auto___61004,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async))
);


break;
case "async":
var c__47406__auto___61016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61000,c__47406__auto___61016,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async){
return (function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = ((function (__61000,c__47406__auto___61016,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async){
return (function (state_58926){
var state_val_58927 = (state_58926[(1)]);
if((state_val_58927 === (1))){
var state_58926__$1 = state_58926;
var statearr_58928_61017 = state_58926__$1;
(statearr_58928_61017[(2)] = null);

(statearr_58928_61017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58927 === (2))){
var state_58926__$1 = state_58926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58926__$1,(4),jobs);
} else {
if((state_val_58927 === (3))){
var inst_58924 = (state_58926[(2)]);
var state_58926__$1 = state_58926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58926__$1,inst_58924);
} else {
if((state_val_58927 === (4))){
var inst_58916 = (state_58926[(2)]);
var inst_58917 = async(inst_58916);
var state_58926__$1 = state_58926;
if(cljs.core.truth_(inst_58917)){
var statearr_58930_61018 = state_58926__$1;
(statearr_58930_61018[(1)] = (5));

} else {
var statearr_58933_61019 = state_58926__$1;
(statearr_58933_61019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58927 === (5))){
var state_58926__$1 = state_58926;
var statearr_58934_61020 = state_58926__$1;
(statearr_58934_61020[(2)] = null);

(statearr_58934_61020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58927 === (6))){
var state_58926__$1 = state_58926;
var statearr_58935_61021 = state_58926__$1;
(statearr_58935_61021[(2)] = null);

(statearr_58935_61021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58927 === (7))){
var inst_58922 = (state_58926[(2)]);
var state_58926__$1 = state_58926;
var statearr_58936_61022 = state_58926__$1;
(statearr_58936_61022[(2)] = inst_58922);

(statearr_58936_61022[(1)] = (3));


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
});})(__61000,c__47406__auto___61016,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async))
;
return ((function (__61000,switch__47127__auto__,c__47406__auto___61016,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0 = (function (){
var statearr_58937 = [null,null,null,null,null,null,null];
(statearr_58937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__);

(statearr_58937[(1)] = (1));

return statearr_58937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1 = (function (state_58926){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_58926);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e58938){var ex__47131__auto__ = e58938;
var statearr_58939_61023 = state_58926;
(statearr_58939_61023[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_58926[(4)]))){
var statearr_58940_61024 = state_58926;
(statearr_58940_61024[(1)] = cljs.core.first((state_58926[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61029 = state_58926;
state_58926 = G__61029;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = function(state_58926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1.call(this,state_58926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__;
})()
;})(__61000,switch__47127__auto__,c__47406__auto___61016,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async))
})();
var state__47408__auto__ = (function (){var statearr_58941 = f__47407__auto__();
(statearr_58941[(6)] = c__47406__auto___61016);

return statearr_58941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
});})(__61000,c__47406__auto___61016,G__58883_61001,G__58883_61002__$1,n__4741__auto___60999,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58883_61002__$1)].join('')));

}

var G__61033 = (__61000 + (1));
__61000 = G__61033;
continue;
} else {
}
break;
}

var c__47406__auto___61034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_58967){
var state_val_58968 = (state_58967[(1)]);
if((state_val_58968 === (7))){
var inst_58963 = (state_58967[(2)]);
var state_58967__$1 = state_58967;
var statearr_58969_61035 = state_58967__$1;
(statearr_58969_61035[(2)] = inst_58963);

(statearr_58969_61035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58968 === (1))){
var state_58967__$1 = state_58967;
var statearr_58970_61036 = state_58967__$1;
(statearr_58970_61036[(2)] = null);

(statearr_58970_61036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58968 === (4))){
var inst_58948 = (state_58967[(7)]);
var inst_58948__$1 = (state_58967[(2)]);
var inst_58949 = (inst_58948__$1 == null);
var state_58967__$1 = (function (){var statearr_58971 = state_58967;
(statearr_58971[(7)] = inst_58948__$1);

return statearr_58971;
})();
if(cljs.core.truth_(inst_58949)){
var statearr_58972_61039 = state_58967__$1;
(statearr_58972_61039[(1)] = (5));

} else {
var statearr_58973_61043 = state_58967__$1;
(statearr_58973_61043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58968 === (6))){
var inst_58948 = (state_58967[(7)]);
var inst_58953 = (state_58967[(8)]);
var inst_58953__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58955 = [inst_58948,inst_58953__$1];
var inst_58956 = (new cljs.core.PersistentVector(null,2,(5),inst_58954,inst_58955,null));
var state_58967__$1 = (function (){var statearr_58974 = state_58967;
(statearr_58974[(8)] = inst_58953__$1);

return statearr_58974;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58967__$1,(8),jobs,inst_58956);
} else {
if((state_val_58968 === (3))){
var inst_58965 = (state_58967[(2)]);
var state_58967__$1 = state_58967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58967__$1,inst_58965);
} else {
if((state_val_58968 === (2))){
var state_58967__$1 = state_58967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58967__$1,(4),from);
} else {
if((state_val_58968 === (9))){
var inst_58960 = (state_58967[(2)]);
var state_58967__$1 = (function (){var statearr_58977 = state_58967;
(statearr_58977[(9)] = inst_58960);

return statearr_58977;
})();
var statearr_58978_61047 = state_58967__$1;
(statearr_58978_61047[(2)] = null);

(statearr_58978_61047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58968 === (5))){
var inst_58951 = cljs.core.async.close_BANG_(jobs);
var state_58967__$1 = state_58967;
var statearr_58979_61048 = state_58967__$1;
(statearr_58979_61048[(2)] = inst_58951);

(statearr_58979_61048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58968 === (8))){
var inst_58953 = (state_58967[(8)]);
var inst_58958 = (state_58967[(2)]);
var state_58967__$1 = (function (){var statearr_58980 = state_58967;
(statearr_58980[(10)] = inst_58958);

return statearr_58980;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58967__$1,(9),results,inst_58953);
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
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0 = (function (){
var statearr_58985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__);

(statearr_58985[(1)] = (1));

return statearr_58985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1 = (function (state_58967){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_58967);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e58986){var ex__47131__auto__ = e58986;
var statearr_58987_61052 = state_58967;
(statearr_58987_61052[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_58967[(4)]))){
var statearr_58989_61053 = state_58967;
(statearr_58989_61053[(1)] = cljs.core.first((state_58967[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61059 = state_58967;
state_58967 = G__61059;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = function(state_58967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1.call(this,state_58967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_58990 = f__47407__auto__();
(statearr_58990[(6)] = c__47406__auto___61034);

return statearr_58990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


var c__47406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59028){
var state_val_59029 = (state_59028[(1)]);
if((state_val_59029 === (7))){
var inst_59024 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59032_61064 = state_59028__$1;
(statearr_59032_61064[(2)] = inst_59024);

(statearr_59032_61064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (20))){
var state_59028__$1 = state_59028;
var statearr_59033_61065 = state_59028__$1;
(statearr_59033_61065[(2)] = null);

(statearr_59033_61065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (1))){
var state_59028__$1 = state_59028;
var statearr_59034_61069 = state_59028__$1;
(statearr_59034_61069[(2)] = null);

(statearr_59034_61069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (4))){
var inst_58993 = (state_59028[(7)]);
var inst_58993__$1 = (state_59028[(2)]);
var inst_58994 = (inst_58993__$1 == null);
var state_59028__$1 = (function (){var statearr_59035 = state_59028;
(statearr_59035[(7)] = inst_58993__$1);

return statearr_59035;
})();
if(cljs.core.truth_(inst_58994)){
var statearr_59037_61070 = state_59028__$1;
(statearr_59037_61070[(1)] = (5));

} else {
var statearr_59039_61071 = state_59028__$1;
(statearr_59039_61071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (15))){
var inst_59006 = (state_59028[(8)]);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59028__$1,(18),to,inst_59006);
} else {
if((state_val_59029 === (21))){
var inst_59019 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59044_61075 = state_59028__$1;
(statearr_59044_61075[(2)] = inst_59019);

(statearr_59044_61075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (13))){
var inst_59021 = (state_59028[(2)]);
var state_59028__$1 = (function (){var statearr_59045 = state_59028;
(statearr_59045[(9)] = inst_59021);

return statearr_59045;
})();
var statearr_59046_61076 = state_59028__$1;
(statearr_59046_61076[(2)] = null);

(statearr_59046_61076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (6))){
var inst_58993 = (state_59028[(7)]);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59028__$1,(11),inst_58993);
} else {
if((state_val_59029 === (17))){
var inst_59014 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
if(cljs.core.truth_(inst_59014)){
var statearr_59049_61080 = state_59028__$1;
(statearr_59049_61080[(1)] = (19));

} else {
var statearr_59050_61082 = state_59028__$1;
(statearr_59050_61082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (3))){
var inst_59026 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59028__$1,inst_59026);
} else {
if((state_val_59029 === (12))){
var inst_59003 = (state_59028[(10)]);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59028__$1,(14),inst_59003);
} else {
if((state_val_59029 === (2))){
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59028__$1,(4),results);
} else {
if((state_val_59029 === (19))){
var state_59028__$1 = state_59028;
var statearr_59051_61084 = state_59028__$1;
(statearr_59051_61084[(2)] = null);

(statearr_59051_61084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (11))){
var inst_59003 = (state_59028[(2)]);
var state_59028__$1 = (function (){var statearr_59052 = state_59028;
(statearr_59052[(10)] = inst_59003);

return statearr_59052;
})();
var statearr_59053_61086 = state_59028__$1;
(statearr_59053_61086[(2)] = null);

(statearr_59053_61086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (9))){
var state_59028__$1 = state_59028;
var statearr_59055_61087 = state_59028__$1;
(statearr_59055_61087[(2)] = null);

(statearr_59055_61087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (5))){
var state_59028__$1 = state_59028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59057_61088 = state_59028__$1;
(statearr_59057_61088[(1)] = (8));

} else {
var statearr_59058_61089 = state_59028__$1;
(statearr_59058_61089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (14))){
var inst_59008 = (state_59028[(11)]);
var inst_59006 = (state_59028[(8)]);
var inst_59006__$1 = (state_59028[(2)]);
var inst_59007 = (inst_59006__$1 == null);
var inst_59008__$1 = cljs.core.not(inst_59007);
var state_59028__$1 = (function (){var statearr_59059 = state_59028;
(statearr_59059[(11)] = inst_59008__$1);

(statearr_59059[(8)] = inst_59006__$1);

return statearr_59059;
})();
if(inst_59008__$1){
var statearr_59060_61090 = state_59028__$1;
(statearr_59060_61090[(1)] = (15));

} else {
var statearr_59061_61091 = state_59028__$1;
(statearr_59061_61091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (16))){
var inst_59008 = (state_59028[(11)]);
var state_59028__$1 = state_59028;
var statearr_59062_61092 = state_59028__$1;
(statearr_59062_61092[(2)] = inst_59008);

(statearr_59062_61092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (10))){
var inst_59000 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59063_61093 = state_59028__$1;
(statearr_59063_61093[(2)] = inst_59000);

(statearr_59063_61093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (18))){
var inst_59011 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59064_61094 = state_59028__$1;
(statearr_59064_61094[(2)] = inst_59011);

(statearr_59064_61094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (8))){
var inst_58997 = cljs.core.async.close_BANG_(to);
var state_59028__$1 = state_59028;
var statearr_59065_61095 = state_59028__$1;
(statearr_59065_61095[(2)] = inst_58997);

(statearr_59065_61095[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0 = (function (){
var statearr_59066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__);

(statearr_59066[(1)] = (1));

return statearr_59066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1 = (function (state_59028){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59028);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59067){var ex__47131__auto__ = e59067;
var statearr_59068_61096 = state_59028;
(statearr_59068_61096[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59028[(4)]))){
var statearr_59069_61097 = state_59028;
(statearr_59069_61097[(1)] = cljs.core.first((state_59028[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61098 = state_59028;
state_59028 = G__61098;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__ = function(state_59028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1.call(this,state_59028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59070 = f__47407__auto__();
(statearr_59070[(6)] = c__47406__auto__);

return statearr_59070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));

return c__47406__auto__;
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
var G__59072 = arguments.length;
switch (G__59072) {
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
var G__59074 = arguments.length;
switch (G__59074) {
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
var G__59083 = arguments.length;
switch (G__59083) {
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
var c__47406__auto___61110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59119){
var state_val_59120 = (state_59119[(1)]);
if((state_val_59120 === (7))){
var inst_59115 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
var statearr_59124_61113 = state_59119__$1;
(statearr_59124_61113[(2)] = inst_59115);

(statearr_59124_61113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (1))){
var state_59119__$1 = state_59119;
var statearr_59125_61115 = state_59119__$1;
(statearr_59125_61115[(2)] = null);

(statearr_59125_61115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (4))){
var inst_59096 = (state_59119[(7)]);
var inst_59096__$1 = (state_59119[(2)]);
var inst_59097 = (inst_59096__$1 == null);
var state_59119__$1 = (function (){var statearr_59126 = state_59119;
(statearr_59126[(7)] = inst_59096__$1);

return statearr_59126;
})();
if(cljs.core.truth_(inst_59097)){
var statearr_59130_61119 = state_59119__$1;
(statearr_59130_61119[(1)] = (5));

} else {
var statearr_59131_61120 = state_59119__$1;
(statearr_59131_61120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (13))){
var state_59119__$1 = state_59119;
var statearr_59132_61121 = state_59119__$1;
(statearr_59132_61121[(2)] = null);

(statearr_59132_61121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (6))){
var inst_59096 = (state_59119[(7)]);
var inst_59102 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59096) : p.call(null,inst_59096));
var state_59119__$1 = state_59119;
if(cljs.core.truth_(inst_59102)){
var statearr_59137_61122 = state_59119__$1;
(statearr_59137_61122[(1)] = (9));

} else {
var statearr_59138_61123 = state_59119__$1;
(statearr_59138_61123[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (3))){
var inst_59117 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59119__$1,inst_59117);
} else {
if((state_val_59120 === (12))){
var state_59119__$1 = state_59119;
var statearr_59139_61125 = state_59119__$1;
(statearr_59139_61125[(2)] = null);

(statearr_59139_61125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (2))){
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59119__$1,(4),ch);
} else {
if((state_val_59120 === (11))){
var inst_59096 = (state_59119[(7)]);
var inst_59106 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59119__$1,(8),inst_59106,inst_59096);
} else {
if((state_val_59120 === (9))){
var state_59119__$1 = state_59119;
var statearr_59143_61130 = state_59119__$1;
(statearr_59143_61130[(2)] = tc);

(statearr_59143_61130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (5))){
var inst_59099 = cljs.core.async.close_BANG_(tc);
var inst_59100 = cljs.core.async.close_BANG_(fc);
var state_59119__$1 = (function (){var statearr_59144 = state_59119;
(statearr_59144[(8)] = inst_59099);

return statearr_59144;
})();
var statearr_59145_61134 = state_59119__$1;
(statearr_59145_61134[(2)] = inst_59100);

(statearr_59145_61134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (14))){
var inst_59113 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
var statearr_59146_61137 = state_59119__$1;
(statearr_59146_61137[(2)] = inst_59113);

(statearr_59146_61137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (10))){
var state_59119__$1 = state_59119;
var statearr_59147_61139 = state_59119__$1;
(statearr_59147_61139[(2)] = fc);

(statearr_59147_61139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (8))){
var inst_59108 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
if(cljs.core.truth_(inst_59108)){
var statearr_59148_61140 = state_59119__$1;
(statearr_59148_61140[(1)] = (12));

} else {
var statearr_59149_61141 = state_59119__$1;
(statearr_59149_61141[(1)] = (13));

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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_59152 = [null,null,null,null,null,null,null,null,null];
(statearr_59152[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_59152[(1)] = (1));

return statearr_59152;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_59119){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59119);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59153){var ex__47131__auto__ = e59153;
var statearr_59154_61157 = state_59119;
(statearr_59154_61157[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59119[(4)]))){
var statearr_59155_61158 = state_59119;
(statearr_59155_61158[(1)] = cljs.core.first((state_59119[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61159 = state_59119;
state_59119 = G__61159;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_59119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_59119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59159 = f__47407__auto__();
(statearr_59159[(6)] = c__47406__auto___61110);

return statearr_59159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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
var c__47406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59190){
var state_val_59191 = (state_59190[(1)]);
if((state_val_59191 === (7))){
var inst_59186 = (state_59190[(2)]);
var state_59190__$1 = state_59190;
var statearr_59192_61163 = state_59190__$1;
(statearr_59192_61163[(2)] = inst_59186);

(statearr_59192_61163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (1))){
var inst_59168 = init;
var inst_59169 = inst_59168;
var state_59190__$1 = (function (){var statearr_59193 = state_59190;
(statearr_59193[(7)] = inst_59169);

return statearr_59193;
})();
var statearr_59194_61164 = state_59190__$1;
(statearr_59194_61164[(2)] = null);

(statearr_59194_61164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (4))){
var inst_59172 = (state_59190[(8)]);
var inst_59172__$1 = (state_59190[(2)]);
var inst_59173 = (inst_59172__$1 == null);
var state_59190__$1 = (function (){var statearr_59195 = state_59190;
(statearr_59195[(8)] = inst_59172__$1);

return statearr_59195;
})();
if(cljs.core.truth_(inst_59173)){
var statearr_59196_61165 = state_59190__$1;
(statearr_59196_61165[(1)] = (5));

} else {
var statearr_59197_61166 = state_59190__$1;
(statearr_59197_61166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (6))){
var inst_59172 = (state_59190[(8)]);
var inst_59169 = (state_59190[(7)]);
var inst_59176 = (state_59190[(9)]);
var inst_59176__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59169,inst_59172) : f.call(null,inst_59169,inst_59172));
var inst_59177 = cljs.core.reduced_QMARK_(inst_59176__$1);
var state_59190__$1 = (function (){var statearr_59200 = state_59190;
(statearr_59200[(9)] = inst_59176__$1);

return statearr_59200;
})();
if(inst_59177){
var statearr_59201_61167 = state_59190__$1;
(statearr_59201_61167[(1)] = (8));

} else {
var statearr_59208_61168 = state_59190__$1;
(statearr_59208_61168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (3))){
var inst_59188 = (state_59190[(2)]);
var state_59190__$1 = state_59190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59190__$1,inst_59188);
} else {
if((state_val_59191 === (2))){
var state_59190__$1 = state_59190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59190__$1,(4),ch);
} else {
if((state_val_59191 === (9))){
var inst_59176 = (state_59190[(9)]);
var inst_59169 = inst_59176;
var state_59190__$1 = (function (){var statearr_59210 = state_59190;
(statearr_59210[(7)] = inst_59169);

return statearr_59210;
})();
var statearr_59211_61175 = state_59190__$1;
(statearr_59211_61175[(2)] = null);

(statearr_59211_61175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (5))){
var inst_59169 = (state_59190[(7)]);
var state_59190__$1 = state_59190;
var statearr_59212_61176 = state_59190__$1;
(statearr_59212_61176[(2)] = inst_59169);

(statearr_59212_61176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (10))){
var inst_59183 = (state_59190[(2)]);
var state_59190__$1 = state_59190;
var statearr_59213_61177 = state_59190__$1;
(statearr_59213_61177[(2)] = inst_59183);

(statearr_59213_61177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59191 === (8))){
var inst_59176 = (state_59190[(9)]);
var inst_59179 = cljs.core.deref(inst_59176);
var state_59190__$1 = state_59190;
var statearr_59214_61178 = state_59190__$1;
(statearr_59214_61178[(2)] = inst_59179);

(statearr_59214_61178[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__47128__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47128__auto____0 = (function (){
var statearr_59215 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59215[(0)] = cljs$core$async$reduce_$_state_machine__47128__auto__);

(statearr_59215[(1)] = (1));

return statearr_59215;
});
var cljs$core$async$reduce_$_state_machine__47128__auto____1 = (function (state_59190){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59190);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59216){var ex__47131__auto__ = e59216;
var statearr_59217_61192 = state_59190;
(statearr_59217_61192[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59190[(4)]))){
var statearr_59218_61193 = state_59190;
(statearr_59218_61193[(1)] = cljs.core.first((state_59190[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61200 = state_59190;
state_59190 = G__61200;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47128__auto__ = function(state_59190){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47128__auto____1.call(this,state_59190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47128__auto____0;
cljs$core$async$reduce_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47128__auto____1;
return cljs$core$async$reduce_$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59219 = f__47407__auto__();
(statearr_59219[(6)] = c__47406__auto__);

return statearr_59219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));

return c__47406__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59226){
var state_val_59227 = (state_59226[(1)]);
if((state_val_59227 === (1))){
var inst_59221 = cljs.core.async.reduce(f__$1,init,ch);
var state_59226__$1 = state_59226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59226__$1,(2),inst_59221);
} else {
if((state_val_59227 === (2))){
var inst_59223 = (state_59226[(2)]);
var inst_59224 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59223) : f__$1.call(null,inst_59223));
var state_59226__$1 = state_59226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59226__$1,inst_59224);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47128__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47128__auto____0 = (function (){
var statearr_59234 = [null,null,null,null,null,null,null];
(statearr_59234[(0)] = cljs$core$async$transduce_$_state_machine__47128__auto__);

(statearr_59234[(1)] = (1));

return statearr_59234;
});
var cljs$core$async$transduce_$_state_machine__47128__auto____1 = (function (state_59226){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59226);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59235){var ex__47131__auto__ = e59235;
var statearr_59236_61208 = state_59226;
(statearr_59236_61208[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59226[(4)]))){
var statearr_59237_61212 = state_59226;
(statearr_59237_61212[(1)] = cljs.core.first((state_59226[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61216 = state_59226;
state_59226 = G__61216;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47128__auto__ = function(state_59226){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47128__auto____1.call(this,state_59226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47128__auto____0;
cljs$core$async$transduce_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47128__auto____1;
return cljs$core$async$transduce_$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59238 = f__47407__auto__();
(statearr_59238[(6)] = c__47406__auto__);

return statearr_59238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));

return c__47406__auto__;
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
var G__59244 = arguments.length;
switch (G__59244) {
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
var c__47406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59278){
var state_val_59279 = (state_59278[(1)]);
if((state_val_59279 === (7))){
var inst_59259 = (state_59278[(2)]);
var state_59278__$1 = state_59278;
var statearr_59281_61221 = state_59278__$1;
(statearr_59281_61221[(2)] = inst_59259);

(statearr_59281_61221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (1))){
var inst_59252 = cljs.core.seq(coll);
var inst_59254 = inst_59252;
var state_59278__$1 = (function (){var statearr_59282 = state_59278;
(statearr_59282[(7)] = inst_59254);

return statearr_59282;
})();
var statearr_59283_61231 = state_59278__$1;
(statearr_59283_61231[(2)] = null);

(statearr_59283_61231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (4))){
var inst_59254 = (state_59278[(7)]);
var inst_59257 = cljs.core.first(inst_59254);
var state_59278__$1 = state_59278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59278__$1,(7),ch,inst_59257);
} else {
if((state_val_59279 === (13))){
var inst_59271 = (state_59278[(2)]);
var state_59278__$1 = state_59278;
var statearr_59298_61232 = state_59278__$1;
(statearr_59298_61232[(2)] = inst_59271);

(statearr_59298_61232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (6))){
var inst_59262 = (state_59278[(2)]);
var state_59278__$1 = state_59278;
if(cljs.core.truth_(inst_59262)){
var statearr_59308_61233 = state_59278__$1;
(statearr_59308_61233[(1)] = (8));

} else {
var statearr_59313_61234 = state_59278__$1;
(statearr_59313_61234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (3))){
var inst_59275 = (state_59278[(2)]);
var state_59278__$1 = state_59278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59278__$1,inst_59275);
} else {
if((state_val_59279 === (12))){
var state_59278__$1 = state_59278;
var statearr_59314_61235 = state_59278__$1;
(statearr_59314_61235[(2)] = null);

(statearr_59314_61235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (2))){
var inst_59254 = (state_59278[(7)]);
var state_59278__$1 = state_59278;
if(cljs.core.truth_(inst_59254)){
var statearr_59315_61236 = state_59278__$1;
(statearr_59315_61236[(1)] = (4));

} else {
var statearr_59316_61237 = state_59278__$1;
(statearr_59316_61237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (11))){
var inst_59268 = cljs.core.async.close_BANG_(ch);
var state_59278__$1 = state_59278;
var statearr_59317_61238 = state_59278__$1;
(statearr_59317_61238[(2)] = inst_59268);

(statearr_59317_61238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (9))){
var state_59278__$1 = state_59278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59319_61239 = state_59278__$1;
(statearr_59319_61239[(1)] = (11));

} else {
var statearr_59321_61240 = state_59278__$1;
(statearr_59321_61240[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (5))){
var inst_59254 = (state_59278[(7)]);
var state_59278__$1 = state_59278;
var statearr_59326_61241 = state_59278__$1;
(statearr_59326_61241[(2)] = inst_59254);

(statearr_59326_61241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (10))){
var inst_59273 = (state_59278[(2)]);
var state_59278__$1 = state_59278;
var statearr_59327_61243 = state_59278__$1;
(statearr_59327_61243[(2)] = inst_59273);

(statearr_59327_61243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59279 === (8))){
var inst_59254 = (state_59278[(7)]);
var inst_59264 = cljs.core.next(inst_59254);
var inst_59254__$1 = inst_59264;
var state_59278__$1 = (function (){var statearr_59329 = state_59278;
(statearr_59329[(7)] = inst_59254__$1);

return statearr_59329;
})();
var statearr_59330_61247 = state_59278__$1;
(statearr_59330_61247[(2)] = null);

(statearr_59330_61247[(1)] = (2));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_59333 = [null,null,null,null,null,null,null,null];
(statearr_59333[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_59333[(1)] = (1));

return statearr_59333;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_59278){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59278);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59336){var ex__47131__auto__ = e59336;
var statearr_59337_61248 = state_59278;
(statearr_59337_61248[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59278[(4)]))){
var statearr_59338_61249 = state_59278;
(statearr_59338_61249[(1)] = cljs.core.first((state_59278[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61250 = state_59278;
state_59278 = G__61250;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_59278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_59278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59343 = f__47407__auto__();
(statearr_59343[(6)] = c__47406__auto__);

return statearr_59343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));

return c__47406__auto__;
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
var G__59370 = arguments.length;
switch (G__59370) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_61253 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_61253(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61258 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_61258(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61263 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_61263(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61266 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_61266(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59436 = (function (ch,cs,meta59437){
this.ch = ch;
this.cs = cs;
this.meta59437 = meta59437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59438,meta59437__$1){
var self__ = this;
var _59438__$1 = this;
return (new cljs.core.async.t_cljs$core$async59436(self__.ch,self__.cs,meta59437__$1));
}));

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59438){
var self__ = this;
var _59438__$1 = this;
return self__.meta59437;
}));

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59436.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59437","meta59437",-631634718,null)], null);
}));

(cljs.core.async.t_cljs$core$async59436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59436");

(cljs.core.async.t_cljs$core$async59436.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59436.
 */
cljs.core.async.__GT_t_cljs$core$async59436 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59436(ch__$1,cs__$1,meta59437){
return (new cljs.core.async.t_cljs$core$async59436(ch__$1,cs__$1,meta59437));
});

}

return (new cljs.core.async.t_cljs$core$async59436(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47406__auto___61273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59592){
var state_val_59593 = (state_59592[(1)]);
if((state_val_59593 === (7))){
var inst_59588 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59594_61274 = state_59592__$1;
(statearr_59594_61274[(2)] = inst_59588);

(statearr_59594_61274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (20))){
var inst_59483 = (state_59592[(7)]);
var inst_59500 = cljs.core.first(inst_59483);
var inst_59501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59500,(0),null);
var inst_59503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59500,(1),null);
var state_59592__$1 = (function (){var statearr_59595 = state_59592;
(statearr_59595[(8)] = inst_59501);

return statearr_59595;
})();
if(cljs.core.truth_(inst_59503)){
var statearr_59596_61275 = state_59592__$1;
(statearr_59596_61275[(1)] = (22));

} else {
var statearr_59597_61276 = state_59592__$1;
(statearr_59597_61276[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (27))){
var inst_59532 = (state_59592[(9)]);
var inst_59534 = (state_59592[(10)]);
var inst_59443 = (state_59592[(11)]);
var inst_59540 = (state_59592[(12)]);
var inst_59540__$1 = cljs.core._nth(inst_59532,inst_59534);
var inst_59541 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59540__$1,inst_59443,done);
var state_59592__$1 = (function (){var statearr_59599 = state_59592;
(statearr_59599[(12)] = inst_59540__$1);

return statearr_59599;
})();
if(cljs.core.truth_(inst_59541)){
var statearr_59600_61277 = state_59592__$1;
(statearr_59600_61277[(1)] = (30));

} else {
var statearr_59601_61279 = state_59592__$1;
(statearr_59601_61279[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (1))){
var state_59592__$1 = state_59592;
var statearr_59602_61281 = state_59592__$1;
(statearr_59602_61281[(2)] = null);

(statearr_59602_61281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (24))){
var inst_59483 = (state_59592[(7)]);
var inst_59508 = (state_59592[(2)]);
var inst_59509 = cljs.core.next(inst_59483);
var inst_59453 = inst_59509;
var inst_59454 = null;
var inst_59455 = (0);
var inst_59456 = (0);
var state_59592__$1 = (function (){var statearr_59603 = state_59592;
(statearr_59603[(13)] = inst_59508);

(statearr_59603[(14)] = inst_59456);

(statearr_59603[(15)] = inst_59455);

(statearr_59603[(16)] = inst_59453);

(statearr_59603[(17)] = inst_59454);

return statearr_59603;
})();
var statearr_59604_61284 = state_59592__$1;
(statearr_59604_61284[(2)] = null);

(statearr_59604_61284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (39))){
var state_59592__$1 = state_59592;
var statearr_59612_61285 = state_59592__$1;
(statearr_59612_61285[(2)] = null);

(statearr_59612_61285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (4))){
var inst_59443 = (state_59592[(11)]);
var inst_59443__$1 = (state_59592[(2)]);
var inst_59444 = (inst_59443__$1 == null);
var state_59592__$1 = (function (){var statearr_59617 = state_59592;
(statearr_59617[(11)] = inst_59443__$1);

return statearr_59617;
})();
if(cljs.core.truth_(inst_59444)){
var statearr_59622_61286 = state_59592__$1;
(statearr_59622_61286[(1)] = (5));

} else {
var statearr_59623_61287 = state_59592__$1;
(statearr_59623_61287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (15))){
var inst_59456 = (state_59592[(14)]);
var inst_59455 = (state_59592[(15)]);
var inst_59453 = (state_59592[(16)]);
var inst_59454 = (state_59592[(17)]);
var inst_59479 = (state_59592[(2)]);
var inst_59480 = (inst_59456 + (1));
var tmp59605 = inst_59455;
var tmp59606 = inst_59453;
var tmp59607 = inst_59454;
var inst_59453__$1 = tmp59606;
var inst_59454__$1 = tmp59607;
var inst_59455__$1 = tmp59605;
var inst_59456__$1 = inst_59480;
var state_59592__$1 = (function (){var statearr_59624 = state_59592;
(statearr_59624[(14)] = inst_59456__$1);

(statearr_59624[(18)] = inst_59479);

(statearr_59624[(15)] = inst_59455__$1);

(statearr_59624[(16)] = inst_59453__$1);

(statearr_59624[(17)] = inst_59454__$1);

return statearr_59624;
})();
var statearr_59625_61289 = state_59592__$1;
(statearr_59625_61289[(2)] = null);

(statearr_59625_61289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (21))){
var inst_59512 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59629_61290 = state_59592__$1;
(statearr_59629_61290[(2)] = inst_59512);

(statearr_59629_61290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (31))){
var inst_59540 = (state_59592[(12)]);
var inst_59544 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59540);
var state_59592__$1 = state_59592;
var statearr_59630_61295 = state_59592__$1;
(statearr_59630_61295[(2)] = inst_59544);

(statearr_59630_61295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (32))){
var inst_59533 = (state_59592[(19)]);
var inst_59532 = (state_59592[(9)]);
var inst_59534 = (state_59592[(10)]);
var inst_59531 = (state_59592[(20)]);
var inst_59546 = (state_59592[(2)]);
var inst_59547 = (inst_59534 + (1));
var tmp59626 = inst_59533;
var tmp59627 = inst_59532;
var tmp59628 = inst_59531;
var inst_59531__$1 = tmp59628;
var inst_59532__$1 = tmp59627;
var inst_59533__$1 = tmp59626;
var inst_59534__$1 = inst_59547;
var state_59592__$1 = (function (){var statearr_59631 = state_59592;
(statearr_59631[(19)] = inst_59533__$1);

(statearr_59631[(9)] = inst_59532__$1);

(statearr_59631[(21)] = inst_59546);

(statearr_59631[(10)] = inst_59534__$1);

(statearr_59631[(20)] = inst_59531__$1);

return statearr_59631;
})();
var statearr_59638_61297 = state_59592__$1;
(statearr_59638_61297[(2)] = null);

(statearr_59638_61297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (40))){
var inst_59561 = (state_59592[(22)]);
var inst_59565 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59561);
var state_59592__$1 = state_59592;
var statearr_59639_61298 = state_59592__$1;
(statearr_59639_61298[(2)] = inst_59565);

(statearr_59639_61298[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (33))){
var inst_59550 = (state_59592[(23)]);
var inst_59552 = cljs.core.chunked_seq_QMARK_(inst_59550);
var state_59592__$1 = state_59592;
if(inst_59552){
var statearr_59640_61299 = state_59592__$1;
(statearr_59640_61299[(1)] = (36));

} else {
var statearr_59641_61300 = state_59592__$1;
(statearr_59641_61300[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (13))){
var inst_59469 = (state_59592[(24)]);
var inst_59476 = cljs.core.async.close_BANG_(inst_59469);
var state_59592__$1 = state_59592;
var statearr_59642_61305 = state_59592__$1;
(statearr_59642_61305[(2)] = inst_59476);

(statearr_59642_61305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (22))){
var inst_59501 = (state_59592[(8)]);
var inst_59505 = cljs.core.async.close_BANG_(inst_59501);
var state_59592__$1 = state_59592;
var statearr_59643_61306 = state_59592__$1;
(statearr_59643_61306[(2)] = inst_59505);

(statearr_59643_61306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (36))){
var inst_59550 = (state_59592[(23)]);
var inst_59556 = cljs.core.chunk_first(inst_59550);
var inst_59557 = cljs.core.chunk_rest(inst_59550);
var inst_59558 = cljs.core.count(inst_59556);
var inst_59531 = inst_59557;
var inst_59532 = inst_59556;
var inst_59533 = inst_59558;
var inst_59534 = (0);
var state_59592__$1 = (function (){var statearr_59644 = state_59592;
(statearr_59644[(19)] = inst_59533);

(statearr_59644[(9)] = inst_59532);

(statearr_59644[(10)] = inst_59534);

(statearr_59644[(20)] = inst_59531);

return statearr_59644;
})();
var statearr_59645_61307 = state_59592__$1;
(statearr_59645_61307[(2)] = null);

(statearr_59645_61307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (41))){
var inst_59550 = (state_59592[(23)]);
var inst_59567 = (state_59592[(2)]);
var inst_59568 = cljs.core.next(inst_59550);
var inst_59531 = inst_59568;
var inst_59532 = null;
var inst_59533 = (0);
var inst_59534 = (0);
var state_59592__$1 = (function (){var statearr_59646 = state_59592;
(statearr_59646[(19)] = inst_59533);

(statearr_59646[(25)] = inst_59567);

(statearr_59646[(9)] = inst_59532);

(statearr_59646[(10)] = inst_59534);

(statearr_59646[(20)] = inst_59531);

return statearr_59646;
})();
var statearr_59647_61308 = state_59592__$1;
(statearr_59647_61308[(2)] = null);

(statearr_59647_61308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (43))){
var state_59592__$1 = state_59592;
var statearr_59648_61309 = state_59592__$1;
(statearr_59648_61309[(2)] = null);

(statearr_59648_61309[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (29))){
var inst_59576 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59649_61310 = state_59592__$1;
(statearr_59649_61310[(2)] = inst_59576);

(statearr_59649_61310[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (44))){
var inst_59585 = (state_59592[(2)]);
var state_59592__$1 = (function (){var statearr_59650 = state_59592;
(statearr_59650[(26)] = inst_59585);

return statearr_59650;
})();
var statearr_59651_61311 = state_59592__$1;
(statearr_59651_61311[(2)] = null);

(statearr_59651_61311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (6))){
var inst_59522 = (state_59592[(27)]);
var inst_59521 = cljs.core.deref(cs);
var inst_59522__$1 = cljs.core.keys(inst_59521);
var inst_59523 = cljs.core.count(inst_59522__$1);
var inst_59525 = cljs.core.reset_BANG_(dctr,inst_59523);
var inst_59530 = cljs.core.seq(inst_59522__$1);
var inst_59531 = inst_59530;
var inst_59532 = null;
var inst_59533 = (0);
var inst_59534 = (0);
var state_59592__$1 = (function (){var statearr_59652 = state_59592;
(statearr_59652[(19)] = inst_59533);

(statearr_59652[(28)] = inst_59525);

(statearr_59652[(9)] = inst_59532);

(statearr_59652[(27)] = inst_59522__$1);

(statearr_59652[(10)] = inst_59534);

(statearr_59652[(20)] = inst_59531);

return statearr_59652;
})();
var statearr_59653_61319 = state_59592__$1;
(statearr_59653_61319[(2)] = null);

(statearr_59653_61319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (28))){
var inst_59531 = (state_59592[(20)]);
var inst_59550 = (state_59592[(23)]);
var inst_59550__$1 = cljs.core.seq(inst_59531);
var state_59592__$1 = (function (){var statearr_59654 = state_59592;
(statearr_59654[(23)] = inst_59550__$1);

return statearr_59654;
})();
if(inst_59550__$1){
var statearr_59655_61320 = state_59592__$1;
(statearr_59655_61320[(1)] = (33));

} else {
var statearr_59656_61321 = state_59592__$1;
(statearr_59656_61321[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (25))){
var inst_59533 = (state_59592[(19)]);
var inst_59534 = (state_59592[(10)]);
var inst_59537 = (inst_59534 < inst_59533);
var inst_59538 = inst_59537;
var state_59592__$1 = state_59592;
if(cljs.core.truth_(inst_59538)){
var statearr_59657_61325 = state_59592__$1;
(statearr_59657_61325[(1)] = (27));

} else {
var statearr_59658_61326 = state_59592__$1;
(statearr_59658_61326[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (34))){
var state_59592__$1 = state_59592;
var statearr_59659_61330 = state_59592__$1;
(statearr_59659_61330[(2)] = null);

(statearr_59659_61330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (17))){
var state_59592__$1 = state_59592;
var statearr_59660_61331 = state_59592__$1;
(statearr_59660_61331[(2)] = null);

(statearr_59660_61331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (3))){
var inst_59590 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59592__$1,inst_59590);
} else {
if((state_val_59593 === (12))){
var inst_59517 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59661_61335 = state_59592__$1;
(statearr_59661_61335[(2)] = inst_59517);

(statearr_59661_61335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (2))){
var state_59592__$1 = state_59592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59592__$1,(4),ch);
} else {
if((state_val_59593 === (23))){
var state_59592__$1 = state_59592;
var statearr_59662_61336 = state_59592__$1;
(statearr_59662_61336[(2)] = null);

(statearr_59662_61336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (35))){
var inst_59574 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59663_61345 = state_59592__$1;
(statearr_59663_61345[(2)] = inst_59574);

(statearr_59663_61345[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (19))){
var inst_59483 = (state_59592[(7)]);
var inst_59491 = cljs.core.chunk_first(inst_59483);
var inst_59493 = cljs.core.chunk_rest(inst_59483);
var inst_59494 = cljs.core.count(inst_59491);
var inst_59453 = inst_59493;
var inst_59454 = inst_59491;
var inst_59455 = inst_59494;
var inst_59456 = (0);
var state_59592__$1 = (function (){var statearr_59664 = state_59592;
(statearr_59664[(14)] = inst_59456);

(statearr_59664[(15)] = inst_59455);

(statearr_59664[(16)] = inst_59453);

(statearr_59664[(17)] = inst_59454);

return statearr_59664;
})();
var statearr_59665_61347 = state_59592__$1;
(statearr_59665_61347[(2)] = null);

(statearr_59665_61347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (11))){
var inst_59483 = (state_59592[(7)]);
var inst_59453 = (state_59592[(16)]);
var inst_59483__$1 = cljs.core.seq(inst_59453);
var state_59592__$1 = (function (){var statearr_59666 = state_59592;
(statearr_59666[(7)] = inst_59483__$1);

return statearr_59666;
})();
if(inst_59483__$1){
var statearr_59667_61348 = state_59592__$1;
(statearr_59667_61348[(1)] = (16));

} else {
var statearr_59668_61350 = state_59592__$1;
(statearr_59668_61350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (9))){
var inst_59519 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59669_61352 = state_59592__$1;
(statearr_59669_61352[(2)] = inst_59519);

(statearr_59669_61352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (5))){
var inst_59451 = cljs.core.deref(cs);
var inst_59452 = cljs.core.seq(inst_59451);
var inst_59453 = inst_59452;
var inst_59454 = null;
var inst_59455 = (0);
var inst_59456 = (0);
var state_59592__$1 = (function (){var statearr_59670 = state_59592;
(statearr_59670[(14)] = inst_59456);

(statearr_59670[(15)] = inst_59455);

(statearr_59670[(16)] = inst_59453);

(statearr_59670[(17)] = inst_59454);

return statearr_59670;
})();
var statearr_59671_61353 = state_59592__$1;
(statearr_59671_61353[(2)] = null);

(statearr_59671_61353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (14))){
var state_59592__$1 = state_59592;
var statearr_59672_61354 = state_59592__$1;
(statearr_59672_61354[(2)] = null);

(statearr_59672_61354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (45))){
var inst_59582 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59673_61355 = state_59592__$1;
(statearr_59673_61355[(2)] = inst_59582);

(statearr_59673_61355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (26))){
var inst_59522 = (state_59592[(27)]);
var inst_59578 = (state_59592[(2)]);
var inst_59579 = cljs.core.seq(inst_59522);
var state_59592__$1 = (function (){var statearr_59674 = state_59592;
(statearr_59674[(29)] = inst_59578);

return statearr_59674;
})();
if(inst_59579){
var statearr_59675_61357 = state_59592__$1;
(statearr_59675_61357[(1)] = (42));

} else {
var statearr_59676_61359 = state_59592__$1;
(statearr_59676_61359[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (16))){
var inst_59483 = (state_59592[(7)]);
var inst_59489 = cljs.core.chunked_seq_QMARK_(inst_59483);
var state_59592__$1 = state_59592;
if(inst_59489){
var statearr_59677_61360 = state_59592__$1;
(statearr_59677_61360[(1)] = (19));

} else {
var statearr_59678_61362 = state_59592__$1;
(statearr_59678_61362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (38))){
var inst_59571 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59679_61363 = state_59592__$1;
(statearr_59679_61363[(2)] = inst_59571);

(statearr_59679_61363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (30))){
var state_59592__$1 = state_59592;
var statearr_59680_61365 = state_59592__$1;
(statearr_59680_61365[(2)] = null);

(statearr_59680_61365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (10))){
var inst_59456 = (state_59592[(14)]);
var inst_59454 = (state_59592[(17)]);
var inst_59468 = cljs.core._nth(inst_59454,inst_59456);
var inst_59469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59468,(0),null);
var inst_59470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59468,(1),null);
var state_59592__$1 = (function (){var statearr_59681 = state_59592;
(statearr_59681[(24)] = inst_59469);

return statearr_59681;
})();
if(cljs.core.truth_(inst_59470)){
var statearr_59682_61369 = state_59592__$1;
(statearr_59682_61369[(1)] = (13));

} else {
var statearr_59683_61370 = state_59592__$1;
(statearr_59683_61370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (18))){
var inst_59515 = (state_59592[(2)]);
var state_59592__$1 = state_59592;
var statearr_59684_61371 = state_59592__$1;
(statearr_59684_61371[(2)] = inst_59515);

(statearr_59684_61371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (42))){
var state_59592__$1 = state_59592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59592__$1,(45),dchan);
} else {
if((state_val_59593 === (37))){
var inst_59561 = (state_59592[(22)]);
var inst_59443 = (state_59592[(11)]);
var inst_59550 = (state_59592[(23)]);
var inst_59561__$1 = cljs.core.first(inst_59550);
var inst_59562 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59561__$1,inst_59443,done);
var state_59592__$1 = (function (){var statearr_59685 = state_59592;
(statearr_59685[(22)] = inst_59561__$1);

return statearr_59685;
})();
if(cljs.core.truth_(inst_59562)){
var statearr_59686_61372 = state_59592__$1;
(statearr_59686_61372[(1)] = (39));

} else {
var statearr_59687_61373 = state_59592__$1;
(statearr_59687_61373[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59593 === (8))){
var inst_59456 = (state_59592[(14)]);
var inst_59455 = (state_59592[(15)]);
var inst_59458 = (inst_59456 < inst_59455);
var inst_59459 = inst_59458;
var state_59592__$1 = state_59592;
if(cljs.core.truth_(inst_59459)){
var statearr_59688_61374 = state_59592__$1;
(statearr_59688_61374[(1)] = (10));

} else {
var statearr_59689_61375 = state_59592__$1;
(statearr_59689_61375[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__47128__auto__ = null;
var cljs$core$async$mult_$_state_machine__47128__auto____0 = (function (){
var statearr_59690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59690[(0)] = cljs$core$async$mult_$_state_machine__47128__auto__);

(statearr_59690[(1)] = (1));

return statearr_59690;
});
var cljs$core$async$mult_$_state_machine__47128__auto____1 = (function (state_59592){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59592);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59691){var ex__47131__auto__ = e59691;
var statearr_59692_61376 = state_59592;
(statearr_59692_61376[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59592[(4)]))){
var statearr_59693_61377 = state_59592;
(statearr_59693_61377[(1)] = cljs.core.first((state_59592[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61378 = state_59592;
state_59592 = G__61378;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47128__auto__ = function(state_59592){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47128__auto____1.call(this,state_59592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47128__auto____0;
cljs$core$async$mult_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47128__auto____1;
return cljs$core$async$mult_$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59694 = f__47407__auto__();
(statearr_59694[(6)] = c__47406__auto___61273);

return statearr_59694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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
var G__59696 = arguments.length;
switch (G__59696) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_61384 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_61384(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61385 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_61385(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61395 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61395(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61396 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_61396(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61403 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61403(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61407 = arguments.length;
var i__4865__auto___61408 = (0);
while(true){
if((i__4865__auto___61408 < len__4864__auto___61407)){
args__4870__auto__.push((arguments[i__4865__auto___61408]));

var G__61409 = (i__4865__auto___61408 + (1));
i__4865__auto___61408 = G__61409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59703){
var map__59704 = p__59703;
var map__59704__$1 = cljs.core.__destructure_map(map__59704);
var opts = map__59704__$1;
var statearr_59705_61410 = state;
(statearr_59705_61410[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59706_61411 = state;
(statearr_59706_61411[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_59707_61412 = state;
(statearr_59707_61412[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59699){
var G__59700 = cljs.core.first(seq59699);
var seq59699__$1 = cljs.core.next(seq59699);
var G__59701 = cljs.core.first(seq59699__$1);
var seq59699__$2 = cljs.core.next(seq59699__$1);
var G__59702 = cljs.core.first(seq59699__$2);
var seq59699__$3 = cljs.core.next(seq59699__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59700,G__59701,G__59702,seq59699__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59710 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59711){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59711 = meta59711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59712,meta59711__$1){
var self__ = this;
var _59712__$1 = this;
return (new cljs.core.async.t_cljs$core$async59710(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59711__$1));
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59712){
var self__ = this;
var _59712__$1 = this;
return self__.meta59711;
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59710.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59711","meta59711",158397480,null)], null);
}));

(cljs.core.async.t_cljs$core$async59710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59710");

(cljs.core.async.t_cljs$core$async59710.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59710.
 */
cljs.core.async.__GT_t_cljs$core$async59710 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59710(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59711){
return (new cljs.core.async.t_cljs$core$async59710(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59711));
});

}

return (new cljs.core.async.t_cljs$core$async59710(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47406__auto___61422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59788){
var state_val_59789 = (state_59788[(1)]);
if((state_val_59789 === (7))){
var inst_59748 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
if(cljs.core.truth_(inst_59748)){
var statearr_59790_61423 = state_59788__$1;
(statearr_59790_61423[(1)] = (8));

} else {
var statearr_59791_61424 = state_59788__$1;
(statearr_59791_61424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (20))){
var inst_59741 = (state_59788[(7)]);
var state_59788__$1 = state_59788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59788__$1,(23),out,inst_59741);
} else {
if((state_val_59789 === (1))){
var inst_59723 = calc_state();
var inst_59724 = cljs.core.__destructure_map(inst_59723);
var inst_59725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59724,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59724,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59724,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59729 = inst_59723;
var state_59788__$1 = (function (){var statearr_59792 = state_59788;
(statearr_59792[(8)] = inst_59725);

(statearr_59792[(9)] = inst_59727);

(statearr_59792[(10)] = inst_59729);

(statearr_59792[(11)] = inst_59726);

return statearr_59792;
})();
var statearr_59793_61426 = state_59788__$1;
(statearr_59793_61426[(2)] = null);

(statearr_59793_61426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (24))){
var inst_59732 = (state_59788[(12)]);
var inst_59729 = inst_59732;
var state_59788__$1 = (function (){var statearr_59794 = state_59788;
(statearr_59794[(10)] = inst_59729);

return statearr_59794;
})();
var statearr_59795_61427 = state_59788__$1;
(statearr_59795_61427[(2)] = null);

(statearr_59795_61427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (4))){
var inst_59743 = (state_59788[(13)]);
var inst_59741 = (state_59788[(7)]);
var inst_59740 = (state_59788[(2)]);
var inst_59741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59740,(0),null);
var inst_59742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59740,(1),null);
var inst_59743__$1 = (inst_59741__$1 == null);
var state_59788__$1 = (function (){var statearr_59796 = state_59788;
(statearr_59796[(14)] = inst_59742);

(statearr_59796[(13)] = inst_59743__$1);

(statearr_59796[(7)] = inst_59741__$1);

return statearr_59796;
})();
if(cljs.core.truth_(inst_59743__$1)){
var statearr_59797_61428 = state_59788__$1;
(statearr_59797_61428[(1)] = (5));

} else {
var statearr_59798_61429 = state_59788__$1;
(statearr_59798_61429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (15))){
var inst_59762 = (state_59788[(15)]);
var inst_59733 = (state_59788[(16)]);
var inst_59762__$1 = cljs.core.empty_QMARK_(inst_59733);
var state_59788__$1 = (function (){var statearr_59799 = state_59788;
(statearr_59799[(15)] = inst_59762__$1);

return statearr_59799;
})();
if(inst_59762__$1){
var statearr_59800_61430 = state_59788__$1;
(statearr_59800_61430[(1)] = (17));

} else {
var statearr_59801_61431 = state_59788__$1;
(statearr_59801_61431[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (21))){
var inst_59732 = (state_59788[(12)]);
var inst_59729 = inst_59732;
var state_59788__$1 = (function (){var statearr_59802 = state_59788;
(statearr_59802[(10)] = inst_59729);

return statearr_59802;
})();
var statearr_59803_61432 = state_59788__$1;
(statearr_59803_61432[(2)] = null);

(statearr_59803_61432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (13))){
var inst_59755 = (state_59788[(2)]);
var inst_59756 = calc_state();
var inst_59729 = inst_59756;
var state_59788__$1 = (function (){var statearr_59804 = state_59788;
(statearr_59804[(10)] = inst_59729);

(statearr_59804[(17)] = inst_59755);

return statearr_59804;
})();
var statearr_59805_61433 = state_59788__$1;
(statearr_59805_61433[(2)] = null);

(statearr_59805_61433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (22))){
var inst_59782 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
var statearr_59806_61434 = state_59788__$1;
(statearr_59806_61434[(2)] = inst_59782);

(statearr_59806_61434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (6))){
var inst_59742 = (state_59788[(14)]);
var inst_59746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59742,change);
var state_59788__$1 = state_59788;
var statearr_59807_61435 = state_59788__$1;
(statearr_59807_61435[(2)] = inst_59746);

(statearr_59807_61435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (25))){
var state_59788__$1 = state_59788;
var statearr_59808_61436 = state_59788__$1;
(statearr_59808_61436[(2)] = null);

(statearr_59808_61436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (17))){
var inst_59734 = (state_59788[(18)]);
var inst_59742 = (state_59788[(14)]);
var inst_59764 = (inst_59734.cljs$core$IFn$_invoke$arity$1 ? inst_59734.cljs$core$IFn$_invoke$arity$1(inst_59742) : inst_59734.call(null,inst_59742));
var inst_59765 = cljs.core.not(inst_59764);
var state_59788__$1 = state_59788;
var statearr_59811_61437 = state_59788__$1;
(statearr_59811_61437[(2)] = inst_59765);

(statearr_59811_61437[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (3))){
var inst_59786 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59788__$1,inst_59786);
} else {
if((state_val_59789 === (12))){
var state_59788__$1 = state_59788;
var statearr_59813_61442 = state_59788__$1;
(statearr_59813_61442[(2)] = null);

(statearr_59813_61442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (2))){
var inst_59729 = (state_59788[(10)]);
var inst_59732 = (state_59788[(12)]);
var inst_59732__$1 = cljs.core.__destructure_map(inst_59729);
var inst_59733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59788__$1 = (function (){var statearr_59814 = state_59788;
(statearr_59814[(18)] = inst_59734);

(statearr_59814[(12)] = inst_59732__$1);

(statearr_59814[(16)] = inst_59733);

return statearr_59814;
})();
return cljs.core.async.ioc_alts_BANG_(state_59788__$1,(4),inst_59735);
} else {
if((state_val_59789 === (23))){
var inst_59773 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
if(cljs.core.truth_(inst_59773)){
var statearr_59817_61444 = state_59788__$1;
(statearr_59817_61444[(1)] = (24));

} else {
var statearr_59818_61445 = state_59788__$1;
(statearr_59818_61445[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (19))){
var inst_59768 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
var statearr_59819_61446 = state_59788__$1;
(statearr_59819_61446[(2)] = inst_59768);

(statearr_59819_61446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (11))){
var inst_59742 = (state_59788[(14)]);
var inst_59752 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59742);
var state_59788__$1 = state_59788;
var statearr_59820_61447 = state_59788__$1;
(statearr_59820_61447[(2)] = inst_59752);

(statearr_59820_61447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (9))){
var inst_59742 = (state_59788[(14)]);
var inst_59733 = (state_59788[(16)]);
var inst_59759 = (state_59788[(19)]);
var inst_59759__$1 = (inst_59733.cljs$core$IFn$_invoke$arity$1 ? inst_59733.cljs$core$IFn$_invoke$arity$1(inst_59742) : inst_59733.call(null,inst_59742));
var state_59788__$1 = (function (){var statearr_59823 = state_59788;
(statearr_59823[(19)] = inst_59759__$1);

return statearr_59823;
})();
if(cljs.core.truth_(inst_59759__$1)){
var statearr_59824_61448 = state_59788__$1;
(statearr_59824_61448[(1)] = (14));

} else {
var statearr_59825_61449 = state_59788__$1;
(statearr_59825_61449[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (5))){
var inst_59743 = (state_59788[(13)]);
var state_59788__$1 = state_59788;
var statearr_59826_61450 = state_59788__$1;
(statearr_59826_61450[(2)] = inst_59743);

(statearr_59826_61450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (14))){
var inst_59759 = (state_59788[(19)]);
var state_59788__$1 = state_59788;
var statearr_59830_61451 = state_59788__$1;
(statearr_59830_61451[(2)] = inst_59759);

(statearr_59830_61451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (26))){
var inst_59778 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
var statearr_59831_61452 = state_59788__$1;
(statearr_59831_61452[(2)] = inst_59778);

(statearr_59831_61452[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (16))){
var inst_59770 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
if(cljs.core.truth_(inst_59770)){
var statearr_59832_61454 = state_59788__$1;
(statearr_59832_61454[(1)] = (20));

} else {
var statearr_59833_61455 = state_59788__$1;
(statearr_59833_61455[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (10))){
var inst_59784 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
var statearr_59835_61456 = state_59788__$1;
(statearr_59835_61456[(2)] = inst_59784);

(statearr_59835_61456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (18))){
var inst_59762 = (state_59788[(15)]);
var state_59788__$1 = state_59788;
var statearr_59839_61457 = state_59788__$1;
(statearr_59839_61457[(2)] = inst_59762);

(statearr_59839_61457[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (8))){
var inst_59741 = (state_59788[(7)]);
var inst_59750 = (inst_59741 == null);
var state_59788__$1 = state_59788;
if(cljs.core.truth_(inst_59750)){
var statearr_59848_61458 = state_59788__$1;
(statearr_59848_61458[(1)] = (11));

} else {
var statearr_59849_61459 = state_59788__$1;
(statearr_59849_61459[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__47128__auto__ = null;
var cljs$core$async$mix_$_state_machine__47128__auto____0 = (function (){
var statearr_59850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59850[(0)] = cljs$core$async$mix_$_state_machine__47128__auto__);

(statearr_59850[(1)] = (1));

return statearr_59850;
});
var cljs$core$async$mix_$_state_machine__47128__auto____1 = (function (state_59788){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59788);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e59851){var ex__47131__auto__ = e59851;
var statearr_59852_61464 = state_59788;
(statearr_59852_61464[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59788[(4)]))){
var statearr_59853_61465 = state_59788;
(statearr_59853_61465[(1)] = cljs.core.first((state_59788[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61466 = state_59788;
state_59788 = G__61466;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47128__auto__ = function(state_59788){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47128__auto____1.call(this,state_59788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47128__auto____0;
cljs$core$async$mix_$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47128__auto____1;
return cljs$core$async$mix_$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_59854 = f__47407__auto__();
(statearr_59854[(6)] = c__47406__auto___61422);

return statearr_59854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_61467 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_61467(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61468 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_61468(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61469 = (function() {
var G__61470 = null;
var G__61470__1 = (function (p){
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
var G__61470__2 = (function (p,v){
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
G__61470 = function(p,v){
switch(arguments.length){
case 1:
return G__61470__1.call(this,p);
case 2:
return G__61470__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61470.cljs$core$IFn$_invoke$arity$1 = G__61470__1;
G__61470.cljs$core$IFn$_invoke$arity$2 = G__61470__2;
return G__61470;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59875 = arguments.length;
switch (G__59875) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61469(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61469(p,v);
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
var G__59886 = arguments.length;
switch (G__59886) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59884_SHARP_){
if(cljs.core.truth_((p1__59884_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59884_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59884_SHARP_.call(null,topic)))){
return p1__59884_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59884_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59890 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59891){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59891 = meta59891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59892,meta59891__$1){
var self__ = this;
var _59892__$1 = this;
return (new cljs.core.async.t_cljs$core$async59890(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59891__$1));
}));

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59892){
var self__ = this;
var _59892__$1 = this;
return self__.meta59891;
}));

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59891","meta59891",-1848570755,null)], null);
}));

(cljs.core.async.t_cljs$core$async59890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59890");

(cljs.core.async.t_cljs$core$async59890.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59890.
 */
cljs.core.async.__GT_t_cljs$core$async59890 = (function cljs$core$async$__GT_t_cljs$core$async59890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59891){
return (new cljs.core.async.t_cljs$core$async59890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59891));
});

}

return (new cljs.core.async.t_cljs$core$async59890(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47406__auto___61481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_59983){
var state_val_59984 = (state_59983[(1)]);
if((state_val_59984 === (7))){
var inst_59979 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
var statearr_59986_61482 = state_59983__$1;
(statearr_59986_61482[(2)] = inst_59979);

(statearr_59986_61482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (20))){
var state_59983__$1 = state_59983;
var statearr_59987_61483 = state_59983__$1;
(statearr_59987_61483[(2)] = null);

(statearr_59987_61483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (1))){
var state_59983__$1 = state_59983;
var statearr_59988_61484 = state_59983__$1;
(statearr_59988_61484[(2)] = null);

(statearr_59988_61484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (24))){
var inst_59962 = (state_59983[(7)]);
var inst_59971 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59962);
var state_59983__$1 = state_59983;
var statearr_59990_61485 = state_59983__$1;
(statearr_59990_61485[(2)] = inst_59971);

(statearr_59990_61485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (4))){
var inst_59911 = (state_59983[(8)]);
var inst_59911__$1 = (state_59983[(2)]);
var inst_59912 = (inst_59911__$1 == null);
var state_59983__$1 = (function (){var statearr_59991 = state_59983;
(statearr_59991[(8)] = inst_59911__$1);

return statearr_59991;
})();
if(cljs.core.truth_(inst_59912)){
var statearr_59994_61486 = state_59983__$1;
(statearr_59994_61486[(1)] = (5));

} else {
var statearr_59996_61487 = state_59983__$1;
(statearr_59996_61487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (15))){
var inst_59956 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
var statearr_59998_61488 = state_59983__$1;
(statearr_59998_61488[(2)] = inst_59956);

(statearr_59998_61488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (21))){
var inst_59976 = (state_59983[(2)]);
var state_59983__$1 = (function (){var statearr_60007 = state_59983;
(statearr_60007[(9)] = inst_59976);

return statearr_60007;
})();
var statearr_60012_61489 = state_59983__$1;
(statearr_60012_61489[(2)] = null);

(statearr_60012_61489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (13))){
var inst_59936 = (state_59983[(10)]);
var inst_59938 = cljs.core.chunked_seq_QMARK_(inst_59936);
var state_59983__$1 = state_59983;
if(inst_59938){
var statearr_60021_61494 = state_59983__$1;
(statearr_60021_61494[(1)] = (16));

} else {
var statearr_60022_61495 = state_59983__$1;
(statearr_60022_61495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (22))){
var inst_59968 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
if(cljs.core.truth_(inst_59968)){
var statearr_60023_61496 = state_59983__$1;
(statearr_60023_61496[(1)] = (23));

} else {
var statearr_60024_61497 = state_59983__$1;
(statearr_60024_61497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (6))){
var inst_59964 = (state_59983[(11)]);
var inst_59911 = (state_59983[(8)]);
var inst_59962 = (state_59983[(7)]);
var inst_59962__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59911) : topic_fn.call(null,inst_59911));
var inst_59963 = cljs.core.deref(mults);
var inst_59964__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59963,inst_59962__$1);
var state_59983__$1 = (function (){var statearr_60026 = state_59983;
(statearr_60026[(11)] = inst_59964__$1);

(statearr_60026[(7)] = inst_59962__$1);

return statearr_60026;
})();
if(cljs.core.truth_(inst_59964__$1)){
var statearr_60027_61499 = state_59983__$1;
(statearr_60027_61499[(1)] = (19));

} else {
var statearr_60028_61500 = state_59983__$1;
(statearr_60028_61500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (25))){
var inst_59973 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
var statearr_60029_61501 = state_59983__$1;
(statearr_60029_61501[(2)] = inst_59973);

(statearr_60029_61501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (17))){
var inst_59936 = (state_59983[(10)]);
var inst_59945 = cljs.core.first(inst_59936);
var inst_59947 = cljs.core.async.muxch_STAR_(inst_59945);
var inst_59948 = cljs.core.async.close_BANG_(inst_59947);
var inst_59950 = cljs.core.next(inst_59936);
var inst_59921 = inst_59950;
var inst_59922 = null;
var inst_59923 = (0);
var inst_59924 = (0);
var state_59983__$1 = (function (){var statearr_60030 = state_59983;
(statearr_60030[(12)] = inst_59922);

(statearr_60030[(13)] = inst_59923);

(statearr_60030[(14)] = inst_59948);

(statearr_60030[(15)] = inst_59924);

(statearr_60030[(16)] = inst_59921);

return statearr_60030;
})();
var statearr_60031_61502 = state_59983__$1;
(statearr_60031_61502[(2)] = null);

(statearr_60031_61502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (3))){
var inst_59981 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59983__$1,inst_59981);
} else {
if((state_val_59984 === (12))){
var inst_59958 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
var statearr_60033_61503 = state_59983__$1;
(statearr_60033_61503[(2)] = inst_59958);

(statearr_60033_61503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (2))){
var state_59983__$1 = state_59983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59983__$1,(4),ch);
} else {
if((state_val_59984 === (23))){
var state_59983__$1 = state_59983;
var statearr_60034_61504 = state_59983__$1;
(statearr_60034_61504[(2)] = null);

(statearr_60034_61504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (19))){
var inst_59964 = (state_59983[(11)]);
var inst_59911 = (state_59983[(8)]);
var inst_59966 = cljs.core.async.muxch_STAR_(inst_59964);
var state_59983__$1 = state_59983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59983__$1,(22),inst_59966,inst_59911);
} else {
if((state_val_59984 === (11))){
var inst_59936 = (state_59983[(10)]);
var inst_59921 = (state_59983[(16)]);
var inst_59936__$1 = cljs.core.seq(inst_59921);
var state_59983__$1 = (function (){var statearr_60043 = state_59983;
(statearr_60043[(10)] = inst_59936__$1);

return statearr_60043;
})();
if(inst_59936__$1){
var statearr_60048_61505 = state_59983__$1;
(statearr_60048_61505[(1)] = (13));

} else {
var statearr_60049_61506 = state_59983__$1;
(statearr_60049_61506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (9))){
var inst_59960 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
var statearr_60058_61507 = state_59983__$1;
(statearr_60058_61507[(2)] = inst_59960);

(statearr_60058_61507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (5))){
var inst_59918 = cljs.core.deref(mults);
var inst_59919 = cljs.core.vals(inst_59918);
var inst_59920 = cljs.core.seq(inst_59919);
var inst_59921 = inst_59920;
var inst_59922 = null;
var inst_59923 = (0);
var inst_59924 = (0);
var state_59983__$1 = (function (){var statearr_60060 = state_59983;
(statearr_60060[(12)] = inst_59922);

(statearr_60060[(13)] = inst_59923);

(statearr_60060[(15)] = inst_59924);

(statearr_60060[(16)] = inst_59921);

return statearr_60060;
})();
var statearr_60061_61508 = state_59983__$1;
(statearr_60061_61508[(2)] = null);

(statearr_60061_61508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (14))){
var state_59983__$1 = state_59983;
var statearr_60065_61509 = state_59983__$1;
(statearr_60065_61509[(2)] = null);

(statearr_60065_61509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (16))){
var inst_59936 = (state_59983[(10)]);
var inst_59940 = cljs.core.chunk_first(inst_59936);
var inst_59941 = cljs.core.chunk_rest(inst_59936);
var inst_59942 = cljs.core.count(inst_59940);
var inst_59921 = inst_59941;
var inst_59922 = inst_59940;
var inst_59923 = inst_59942;
var inst_59924 = (0);
var state_59983__$1 = (function (){var statearr_60066 = state_59983;
(statearr_60066[(12)] = inst_59922);

(statearr_60066[(13)] = inst_59923);

(statearr_60066[(15)] = inst_59924);

(statearr_60066[(16)] = inst_59921);

return statearr_60066;
})();
var statearr_60067_61510 = state_59983__$1;
(statearr_60067_61510[(2)] = null);

(statearr_60067_61510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (10))){
var inst_59922 = (state_59983[(12)]);
var inst_59923 = (state_59983[(13)]);
var inst_59924 = (state_59983[(15)]);
var inst_59921 = (state_59983[(16)]);
var inst_59929 = cljs.core._nth(inst_59922,inst_59924);
var inst_59931 = cljs.core.async.muxch_STAR_(inst_59929);
var inst_59932 = cljs.core.async.close_BANG_(inst_59931);
var inst_59933 = (inst_59924 + (1));
var tmp60062 = inst_59922;
var tmp60063 = inst_59923;
var tmp60064 = inst_59921;
var inst_59921__$1 = tmp60064;
var inst_59922__$1 = tmp60062;
var inst_59923__$1 = tmp60063;
var inst_59924__$1 = inst_59933;
var state_59983__$1 = (function (){var statearr_60069 = state_59983;
(statearr_60069[(12)] = inst_59922__$1);

(statearr_60069[(13)] = inst_59923__$1);

(statearr_60069[(17)] = inst_59932);

(statearr_60069[(15)] = inst_59924__$1);

(statearr_60069[(16)] = inst_59921__$1);

return statearr_60069;
})();
var statearr_60070_61511 = state_59983__$1;
(statearr_60070_61511[(2)] = null);

(statearr_60070_61511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (18))){
var inst_59953 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
var statearr_60071_61512 = state_59983__$1;
(statearr_60071_61512[(2)] = inst_59953);

(statearr_60071_61512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59984 === (8))){
var inst_59923 = (state_59983[(13)]);
var inst_59924 = (state_59983[(15)]);
var inst_59926 = (inst_59924 < inst_59923);
var inst_59927 = inst_59926;
var state_59983__$1 = state_59983;
if(cljs.core.truth_(inst_59927)){
var statearr_60072_61513 = state_59983__$1;
(statearr_60072_61513[(1)] = (10));

} else {
var statearr_60073_61523 = state_59983__$1;
(statearr_60073_61523[(1)] = (11));

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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60075[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60075[(1)] = (1));

return statearr_60075;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_59983){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_59983);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60076){var ex__47131__auto__ = e60076;
var statearr_60077_61543 = state_59983;
(statearr_60077_61543[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_59983[(4)]))){
var statearr_60078_61544 = state_59983;
(statearr_60078_61544[(1)] = cljs.core.first((state_59983[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61545 = state_59983;
state_59983 = G__61545;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_59983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_59983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60079 = f__47407__auto__();
(statearr_60079[(6)] = c__47406__auto___61481);

return statearr_60079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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
var G__60081 = arguments.length;
switch (G__60081) {
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
var G__60084 = arguments.length;
switch (G__60084) {
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
var G__60087 = arguments.length;
switch (G__60087) {
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
var c__47406__auto___61574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60131){
var state_val_60132 = (state_60131[(1)]);
if((state_val_60132 === (7))){
var state_60131__$1 = state_60131;
var statearr_60134_61575 = state_60131__$1;
(statearr_60134_61575[(2)] = null);

(statearr_60134_61575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (1))){
var state_60131__$1 = state_60131;
var statearr_60135_61576 = state_60131__$1;
(statearr_60135_61576[(2)] = null);

(statearr_60135_61576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (4))){
var inst_60092 = (state_60131[(7)]);
var inst_60091 = (state_60131[(8)]);
var inst_60094 = (inst_60092 < inst_60091);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60094)){
var statearr_60136_61580 = state_60131__$1;
(statearr_60136_61580[(1)] = (6));

} else {
var statearr_60137_61581 = state_60131__$1;
(statearr_60137_61581[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (15))){
var inst_60117 = (state_60131[(9)]);
var inst_60122 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60117);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60131__$1,(17),out,inst_60122);
} else {
if((state_val_60132 === (13))){
var inst_60117 = (state_60131[(9)]);
var inst_60117__$1 = (state_60131[(2)]);
var inst_60118 = cljs.core.some(cljs.core.nil_QMARK_,inst_60117__$1);
var state_60131__$1 = (function (){var statearr_60138 = state_60131;
(statearr_60138[(9)] = inst_60117__$1);

return statearr_60138;
})();
if(cljs.core.truth_(inst_60118)){
var statearr_60139_61582 = state_60131__$1;
(statearr_60139_61582[(1)] = (14));

} else {
var statearr_60140_61583 = state_60131__$1;
(statearr_60140_61583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (6))){
var state_60131__$1 = state_60131;
var statearr_60142_61584 = state_60131__$1;
(statearr_60142_61584[(2)] = null);

(statearr_60142_61584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (17))){
var inst_60124 = (state_60131[(2)]);
var state_60131__$1 = (function (){var statearr_60144 = state_60131;
(statearr_60144[(10)] = inst_60124);

return statearr_60144;
})();
var statearr_60145_61585 = state_60131__$1;
(statearr_60145_61585[(2)] = null);

(statearr_60145_61585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (3))){
var inst_60129 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60131__$1,inst_60129);
} else {
if((state_val_60132 === (12))){
var _ = (function (){var statearr_60146 = state_60131;
(statearr_60146[(4)] = cljs.core.rest((state_60131[(4)])));

return statearr_60146;
})();
var state_60131__$1 = state_60131;
var ex60143 = (state_60131__$1[(2)]);
var statearr_60147_61586 = state_60131__$1;
(statearr_60147_61586[(5)] = ex60143);


if((ex60143 instanceof Object)){
var statearr_60148_61587 = state_60131__$1;
(statearr_60148_61587[(1)] = (11));

(statearr_60148_61587[(5)] = null);

} else {
throw ex60143;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (2))){
var inst_60090 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60091 = cnt;
var inst_60092 = (0);
var state_60131__$1 = (function (){var statearr_60149 = state_60131;
(statearr_60149[(7)] = inst_60092);

(statearr_60149[(8)] = inst_60091);

(statearr_60149[(11)] = inst_60090);

return statearr_60149;
})();
var statearr_60150_61588 = state_60131__$1;
(statearr_60150_61588[(2)] = null);

(statearr_60150_61588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (11))){
var inst_60096 = (state_60131[(2)]);
var inst_60097 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60131__$1 = (function (){var statearr_60152 = state_60131;
(statearr_60152[(12)] = inst_60096);

return statearr_60152;
})();
var statearr_60153_61589 = state_60131__$1;
(statearr_60153_61589[(2)] = inst_60097);

(statearr_60153_61589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (9))){
var inst_60092 = (state_60131[(7)]);
var _ = (function (){var statearr_60154 = state_60131;
(statearr_60154[(4)] = cljs.core.cons((12),(state_60131[(4)])));

return statearr_60154;
})();
var inst_60103 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60092) : chs__$1.call(null,inst_60092));
var inst_60104 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60092) : done.call(null,inst_60092));
var inst_60105 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60103,inst_60104);
var ___$1 = (function (){var statearr_60155 = state_60131;
(statearr_60155[(4)] = cljs.core.rest((state_60131[(4)])));

return statearr_60155;
})();
var state_60131__$1 = state_60131;
var statearr_60156_61597 = state_60131__$1;
(statearr_60156_61597[(2)] = inst_60105);

(statearr_60156_61597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (5))){
var inst_60115 = (state_60131[(2)]);
var state_60131__$1 = (function (){var statearr_60157 = state_60131;
(statearr_60157[(13)] = inst_60115);

return statearr_60157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60131__$1,(13),dchan);
} else {
if((state_val_60132 === (14))){
var inst_60120 = cljs.core.async.close_BANG_(out);
var state_60131__$1 = state_60131;
var statearr_60158_61601 = state_60131__$1;
(statearr_60158_61601[(2)] = inst_60120);

(statearr_60158_61601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (16))){
var inst_60127 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60159_61602 = state_60131__$1;
(statearr_60159_61602[(2)] = inst_60127);

(statearr_60159_61602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (10))){
var inst_60092 = (state_60131[(7)]);
var inst_60108 = (state_60131[(2)]);
var inst_60109 = (inst_60092 + (1));
var inst_60092__$1 = inst_60109;
var state_60131__$1 = (function (){var statearr_60161 = state_60131;
(statearr_60161[(7)] = inst_60092__$1);

(statearr_60161[(14)] = inst_60108);

return statearr_60161;
})();
var statearr_60162_61606 = state_60131__$1;
(statearr_60162_61606[(2)] = null);

(statearr_60162_61606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (8))){
var inst_60113 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60163_61607 = state_60131__$1;
(statearr_60163_61607[(2)] = inst_60113);

(statearr_60163_61607[(1)] = (5));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60164[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60164[(1)] = (1));

return statearr_60164;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60131){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60131);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60165){var ex__47131__auto__ = e60165;
var statearr_60166_61611 = state_60131;
(statearr_60166_61611[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60131[(4)]))){
var statearr_60167_61612 = state_60131;
(statearr_60167_61612[(1)] = cljs.core.first((state_60131[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61613 = state_60131;
state_60131 = G__61613;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60168 = f__47407__auto__();
(statearr_60168[(6)] = c__47406__auto___61574);

return statearr_60168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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
var G__60172 = arguments.length;
switch (G__60172) {
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
var c__47406__auto___61618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60205){
var state_val_60206 = (state_60205[(1)]);
if((state_val_60206 === (7))){
var inst_60184 = (state_60205[(7)]);
var inst_60183 = (state_60205[(8)]);
var inst_60183__$1 = (state_60205[(2)]);
var inst_60184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60183__$1,(0),null);
var inst_60185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60183__$1,(1),null);
var inst_60187 = (inst_60184__$1 == null);
var state_60205__$1 = (function (){var statearr_60207 = state_60205;
(statearr_60207[(7)] = inst_60184__$1);

(statearr_60207[(9)] = inst_60185);

(statearr_60207[(8)] = inst_60183__$1);

return statearr_60207;
})();
if(cljs.core.truth_(inst_60187)){
var statearr_60208_61620 = state_60205__$1;
(statearr_60208_61620[(1)] = (8));

} else {
var statearr_60209_61621 = state_60205__$1;
(statearr_60209_61621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (1))){
var inst_60173 = cljs.core.vec(chs);
var inst_60174 = inst_60173;
var state_60205__$1 = (function (){var statearr_60210 = state_60205;
(statearr_60210[(10)] = inst_60174);

return statearr_60210;
})();
var statearr_60211_61625 = state_60205__$1;
(statearr_60211_61625[(2)] = null);

(statearr_60211_61625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (4))){
var inst_60174 = (state_60205[(10)]);
var state_60205__$1 = state_60205;
return cljs.core.async.ioc_alts_BANG_(state_60205__$1,(7),inst_60174);
} else {
if((state_val_60206 === (6))){
var inst_60201 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60213_61640 = state_60205__$1;
(statearr_60213_61640[(2)] = inst_60201);

(statearr_60213_61640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (3))){
var inst_60203 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60205__$1,inst_60203);
} else {
if((state_val_60206 === (2))){
var inst_60174 = (state_60205[(10)]);
var inst_60176 = cljs.core.count(inst_60174);
var inst_60177 = (inst_60176 > (0));
var state_60205__$1 = state_60205;
if(cljs.core.truth_(inst_60177)){
var statearr_60215_61650 = state_60205__$1;
(statearr_60215_61650[(1)] = (4));

} else {
var statearr_60216_61651 = state_60205__$1;
(statearr_60216_61651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (11))){
var inst_60174 = (state_60205[(10)]);
var inst_60194 = (state_60205[(2)]);
var tmp60214 = inst_60174;
var inst_60174__$1 = tmp60214;
var state_60205__$1 = (function (){var statearr_60217 = state_60205;
(statearr_60217[(11)] = inst_60194);

(statearr_60217[(10)] = inst_60174__$1);

return statearr_60217;
})();
var statearr_60218_61652 = state_60205__$1;
(statearr_60218_61652[(2)] = null);

(statearr_60218_61652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (9))){
var inst_60184 = (state_60205[(7)]);
var state_60205__$1 = state_60205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60205__$1,(11),out,inst_60184);
} else {
if((state_val_60206 === (5))){
var inst_60199 = cljs.core.async.close_BANG_(out);
var state_60205__$1 = state_60205;
var statearr_60219_61653 = state_60205__$1;
(statearr_60219_61653[(2)] = inst_60199);

(statearr_60219_61653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (10))){
var inst_60197 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60221_61654 = state_60205__$1;
(statearr_60221_61654[(2)] = inst_60197);

(statearr_60221_61654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (8))){
var inst_60184 = (state_60205[(7)]);
var inst_60185 = (state_60205[(9)]);
var inst_60174 = (state_60205[(10)]);
var inst_60183 = (state_60205[(8)]);
var inst_60189 = (function (){var cs = inst_60174;
var vec__60179 = inst_60183;
var v = inst_60184;
var c = inst_60185;
return (function (p1__60170_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60170_SHARP_);
});
})();
var inst_60190 = cljs.core.filterv(inst_60189,inst_60174);
var inst_60174__$1 = inst_60190;
var state_60205__$1 = (function (){var statearr_60222 = state_60205;
(statearr_60222[(10)] = inst_60174__$1);

return statearr_60222;
})();
var statearr_60223_61655 = state_60205__$1;
(statearr_60223_61655[(2)] = null);

(statearr_60223_61655[(1)] = (2));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60224[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60224[(1)] = (1));

return statearr_60224;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60205){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60205);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60225){var ex__47131__auto__ = e60225;
var statearr_60226_61656 = state_60205;
(statearr_60226_61656[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60205[(4)]))){
var statearr_60227_61657 = state_60205;
(statearr_60227_61657[(1)] = cljs.core.first((state_60205[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61664 = state_60205;
state_60205 = G__61664;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60229 = f__47407__auto__();
(statearr_60229[(6)] = c__47406__auto___61618);

return statearr_60229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
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
var G__60231 = arguments.length;
switch (G__60231) {
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
var c__47406__auto___61666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60256){
var state_val_60257 = (state_60256[(1)]);
if((state_val_60257 === (7))){
var inst_60238 = (state_60256[(7)]);
var inst_60238__$1 = (state_60256[(2)]);
var inst_60239 = (inst_60238__$1 == null);
var inst_60240 = cljs.core.not(inst_60239);
var state_60256__$1 = (function (){var statearr_60259 = state_60256;
(statearr_60259[(7)] = inst_60238__$1);

return statearr_60259;
})();
if(inst_60240){
var statearr_60260_61667 = state_60256__$1;
(statearr_60260_61667[(1)] = (8));

} else {
var statearr_60261_61668 = state_60256__$1;
(statearr_60261_61668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (1))){
var inst_60233 = (0);
var state_60256__$1 = (function (){var statearr_60262 = state_60256;
(statearr_60262[(8)] = inst_60233);

return statearr_60262;
})();
var statearr_60263_61669 = state_60256__$1;
(statearr_60263_61669[(2)] = null);

(statearr_60263_61669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (4))){
var state_60256__$1 = state_60256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60256__$1,(7),ch);
} else {
if((state_val_60257 === (6))){
var inst_60251 = (state_60256[(2)]);
var state_60256__$1 = state_60256;
var statearr_60264_61670 = state_60256__$1;
(statearr_60264_61670[(2)] = inst_60251);

(statearr_60264_61670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (3))){
var inst_60253 = (state_60256[(2)]);
var inst_60254 = cljs.core.async.close_BANG_(out);
var state_60256__$1 = (function (){var statearr_60265 = state_60256;
(statearr_60265[(9)] = inst_60253);

return statearr_60265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60256__$1,inst_60254);
} else {
if((state_val_60257 === (2))){
var inst_60233 = (state_60256[(8)]);
var inst_60235 = (inst_60233 < n);
var state_60256__$1 = state_60256;
if(cljs.core.truth_(inst_60235)){
var statearr_60266_61677 = state_60256__$1;
(statearr_60266_61677[(1)] = (4));

} else {
var statearr_60267_61678 = state_60256__$1;
(statearr_60267_61678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (11))){
var inst_60233 = (state_60256[(8)]);
var inst_60243 = (state_60256[(2)]);
var inst_60244 = (inst_60233 + (1));
var inst_60233__$1 = inst_60244;
var state_60256__$1 = (function (){var statearr_60269 = state_60256;
(statearr_60269[(8)] = inst_60233__$1);

(statearr_60269[(10)] = inst_60243);

return statearr_60269;
})();
var statearr_60270_61679 = state_60256__$1;
(statearr_60270_61679[(2)] = null);

(statearr_60270_61679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (9))){
var state_60256__$1 = state_60256;
var statearr_60271_61680 = state_60256__$1;
(statearr_60271_61680[(2)] = null);

(statearr_60271_61680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (5))){
var state_60256__$1 = state_60256;
var statearr_60272_61681 = state_60256__$1;
(statearr_60272_61681[(2)] = null);

(statearr_60272_61681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (10))){
var inst_60248 = (state_60256[(2)]);
var state_60256__$1 = state_60256;
var statearr_60273_61682 = state_60256__$1;
(statearr_60273_61682[(2)] = inst_60248);

(statearr_60273_61682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60257 === (8))){
var inst_60238 = (state_60256[(7)]);
var state_60256__$1 = state_60256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60256__$1,(11),out,inst_60238);
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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60274[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60274[(1)] = (1));

return statearr_60274;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60256){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60256);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60275){var ex__47131__auto__ = e60275;
var statearr_60276_61685 = state_60256;
(statearr_60276_61685[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60256[(4)]))){
var statearr_60277_61686 = state_60256;
(statearr_60277_61686[(1)] = cljs.core.first((state_60256[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61687 = state_60256;
state_60256 = G__61687;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60279 = f__47407__auto__();
(statearr_60279[(6)] = c__47406__auto___61666);

return statearr_60279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60281 = (function (f,ch,meta60282){
this.f = f;
this.ch = ch;
this.meta60282 = meta60282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60283,meta60282__$1){
var self__ = this;
var _60283__$1 = this;
return (new cljs.core.async.t_cljs$core$async60281(self__.f,self__.ch,meta60282__$1));
}));

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60283){
var self__ = this;
var _60283__$1 = this;
return self__.meta60282;
}));

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60285 = (function (f,ch,meta60282,_,fn1,meta60286){
this.f = f;
this.ch = ch;
this.meta60282 = meta60282;
this._ = _;
this.fn1 = fn1;
this.meta60286 = meta60286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60287,meta60286__$1){
var self__ = this;
var _60287__$1 = this;
return (new cljs.core.async.t_cljs$core$async60285(self__.f,self__.ch,self__.meta60282,self__._,self__.fn1,meta60286__$1));
}));

(cljs.core.async.t_cljs$core$async60285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60287){
var self__ = this;
var _60287__$1 = this;
return self__.meta60286;
}));

(cljs.core.async.t_cljs$core$async60285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__60280_SHARP_){
var G__60289 = (((p1__60280_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__60280_SHARP_) : self__.f.call(null,p1__60280_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__60289) : f1.call(null,G__60289));
});
}));

(cljs.core.async.t_cljs$core$async60285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60282","meta60282",1984470101,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60281","cljs.core.async/t_cljs$core$async60281",-651390149,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60286","meta60286",992378372,null)], null);
}));

(cljs.core.async.t_cljs$core$async60285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60285");

(cljs.core.async.t_cljs$core$async60285.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60285.
 */
cljs.core.async.__GT_t_cljs$core$async60285 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60285(f__$1,ch__$1,meta60282__$1,___$2,fn1__$1,meta60286){
return (new cljs.core.async.t_cljs$core$async60285(f__$1,ch__$1,meta60282__$1,___$2,fn1__$1,meta60286));
});

}

return (new cljs.core.async.t_cljs$core$async60285(self__.f,self__.ch,self__.meta60282,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__60291 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60291) : self__.f.call(null,G__60291));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async60281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60282","meta60282",1984470101,null)], null);
}));

(cljs.core.async.t_cljs$core$async60281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60281");

(cljs.core.async.t_cljs$core$async60281.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60281.
 */
cljs.core.async.__GT_t_cljs$core$async60281 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60281(f__$1,ch__$1,meta60282){
return (new cljs.core.async.t_cljs$core$async60281(f__$1,ch__$1,meta60282));
});

}

return (new cljs.core.async.t_cljs$core$async60281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60292 = (function (f,ch,meta60293){
this.f = f;
this.ch = ch;
this.meta60293 = meta60293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60294,meta60293__$1){
var self__ = this;
var _60294__$1 = this;
return (new cljs.core.async.t_cljs$core$async60292(self__.f,self__.ch,meta60293__$1));
}));

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60294){
var self__ = this;
var _60294__$1 = this;
return self__.meta60293;
}));

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async60292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60293","meta60293",267710467,null)], null);
}));

(cljs.core.async.t_cljs$core$async60292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60292");

(cljs.core.async.t_cljs$core$async60292.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60292.
 */
cljs.core.async.__GT_t_cljs$core$async60292 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60292(f__$1,ch__$1,meta60293){
return (new cljs.core.async.t_cljs$core$async60292(f__$1,ch__$1,meta60293));
});

}

return (new cljs.core.async.t_cljs$core$async60292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60297 = (function (p,ch,meta60298){
this.p = p;
this.ch = ch;
this.meta60298 = meta60298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60299,meta60298__$1){
var self__ = this;
var _60299__$1 = this;
return (new cljs.core.async.t_cljs$core$async60297(self__.p,self__.ch,meta60298__$1));
}));

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60299){
var self__ = this;
var _60299__$1 = this;
return self__.meta60298;
}));

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60298","meta60298",732240713,null)], null);
}));

(cljs.core.async.t_cljs$core$async60297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60297");

(cljs.core.async.t_cljs$core$async60297.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60297.
 */
cljs.core.async.__GT_t_cljs$core$async60297 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60297(p__$1,ch__$1,meta60298){
return (new cljs.core.async.t_cljs$core$async60297(p__$1,ch__$1,meta60298));
});

}

return (new cljs.core.async.t_cljs$core$async60297(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__60303 = arguments.length;
switch (G__60303) {
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
var c__47406__auto___61708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60325){
var state_val_60326 = (state_60325[(1)]);
if((state_val_60326 === (7))){
var inst_60321 = (state_60325[(2)]);
var state_60325__$1 = state_60325;
var statearr_60327_61709 = state_60325__$1;
(statearr_60327_61709[(2)] = inst_60321);

(statearr_60327_61709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (1))){
var state_60325__$1 = state_60325;
var statearr_60328_61710 = state_60325__$1;
(statearr_60328_61710[(2)] = null);

(statearr_60328_61710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (4))){
var inst_60307 = (state_60325[(7)]);
var inst_60307__$1 = (state_60325[(2)]);
var inst_60308 = (inst_60307__$1 == null);
var state_60325__$1 = (function (){var statearr_60329 = state_60325;
(statearr_60329[(7)] = inst_60307__$1);

return statearr_60329;
})();
if(cljs.core.truth_(inst_60308)){
var statearr_60330_61717 = state_60325__$1;
(statearr_60330_61717[(1)] = (5));

} else {
var statearr_60331_61718 = state_60325__$1;
(statearr_60331_61718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (6))){
var inst_60307 = (state_60325[(7)]);
var inst_60312 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60307) : p.call(null,inst_60307));
var state_60325__$1 = state_60325;
if(cljs.core.truth_(inst_60312)){
var statearr_60333_61719 = state_60325__$1;
(statearr_60333_61719[(1)] = (8));

} else {
var statearr_60334_61720 = state_60325__$1;
(statearr_60334_61720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (3))){
var inst_60323 = (state_60325[(2)]);
var state_60325__$1 = state_60325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60325__$1,inst_60323);
} else {
if((state_val_60326 === (2))){
var state_60325__$1 = state_60325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60325__$1,(4),ch);
} else {
if((state_val_60326 === (11))){
var inst_60315 = (state_60325[(2)]);
var state_60325__$1 = state_60325;
var statearr_60335_61723 = state_60325__$1;
(statearr_60335_61723[(2)] = inst_60315);

(statearr_60335_61723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (9))){
var state_60325__$1 = state_60325;
var statearr_60336_61725 = state_60325__$1;
(statearr_60336_61725[(2)] = null);

(statearr_60336_61725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (5))){
var inst_60310 = cljs.core.async.close_BANG_(out);
var state_60325__$1 = state_60325;
var statearr_60337_61728 = state_60325__$1;
(statearr_60337_61728[(2)] = inst_60310);

(statearr_60337_61728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (10))){
var inst_60318 = (state_60325[(2)]);
var state_60325__$1 = (function (){var statearr_60338 = state_60325;
(statearr_60338[(8)] = inst_60318);

return statearr_60338;
})();
var statearr_60339_61729 = state_60325__$1;
(statearr_60339_61729[(2)] = null);

(statearr_60339_61729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60326 === (8))){
var inst_60307 = (state_60325[(7)]);
var state_60325__$1 = state_60325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60325__$1,(11),out,inst_60307);
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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60341 = [null,null,null,null,null,null,null,null,null];
(statearr_60341[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60341[(1)] = (1));

return statearr_60341;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60325){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60325);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60342){var ex__47131__auto__ = e60342;
var statearr_60343_61738 = state_60325;
(statearr_60343_61738[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60325[(4)]))){
var statearr_60344_61739 = state_60325;
(statearr_60344_61739[(1)] = cljs.core.first((state_60325[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61743 = state_60325;
state_60325 = G__61743;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60345 = f__47407__auto__();
(statearr_60345[(6)] = c__47406__auto___61708);

return statearr_60345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60348 = arguments.length;
switch (G__60348) {
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
var c__47406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60413){
var state_val_60414 = (state_60413[(1)]);
if((state_val_60414 === (7))){
var inst_60408 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
var statearr_60415_61748 = state_60413__$1;
(statearr_60415_61748[(2)] = inst_60408);

(statearr_60415_61748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (20))){
var inst_60377 = (state_60413[(7)]);
var inst_60388 = (state_60413[(2)]);
var inst_60389 = cljs.core.next(inst_60377);
var inst_60363 = inst_60389;
var inst_60364 = null;
var inst_60365 = (0);
var inst_60366 = (0);
var state_60413__$1 = (function (){var statearr_60416 = state_60413;
(statearr_60416[(8)] = inst_60363);

(statearr_60416[(9)] = inst_60364);

(statearr_60416[(10)] = inst_60365);

(statearr_60416[(11)] = inst_60366);

(statearr_60416[(12)] = inst_60388);

return statearr_60416;
})();
var statearr_60417_61756 = state_60413__$1;
(statearr_60417_61756[(2)] = null);

(statearr_60417_61756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (1))){
var state_60413__$1 = state_60413;
var statearr_60418_61757 = state_60413__$1;
(statearr_60418_61757[(2)] = null);

(statearr_60418_61757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (4))){
var inst_60352 = (state_60413[(13)]);
var inst_60352__$1 = (state_60413[(2)]);
var inst_60353 = (inst_60352__$1 == null);
var state_60413__$1 = (function (){var statearr_60419 = state_60413;
(statearr_60419[(13)] = inst_60352__$1);

return statearr_60419;
})();
if(cljs.core.truth_(inst_60353)){
var statearr_60422_61761 = state_60413__$1;
(statearr_60422_61761[(1)] = (5));

} else {
var statearr_60423_61762 = state_60413__$1;
(statearr_60423_61762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (15))){
var state_60413__$1 = state_60413;
var statearr_60427_61763 = state_60413__$1;
(statearr_60427_61763[(2)] = null);

(statearr_60427_61763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (21))){
var state_60413__$1 = state_60413;
var statearr_60428_61764 = state_60413__$1;
(statearr_60428_61764[(2)] = null);

(statearr_60428_61764[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (13))){
var inst_60363 = (state_60413[(8)]);
var inst_60364 = (state_60413[(9)]);
var inst_60365 = (state_60413[(10)]);
var inst_60366 = (state_60413[(11)]);
var inst_60373 = (state_60413[(2)]);
var inst_60374 = (inst_60366 + (1));
var tmp60424 = inst_60363;
var tmp60425 = inst_60364;
var tmp60426 = inst_60365;
var inst_60363__$1 = tmp60424;
var inst_60364__$1 = tmp60425;
var inst_60365__$1 = tmp60426;
var inst_60366__$1 = inst_60374;
var state_60413__$1 = (function (){var statearr_60429 = state_60413;
(statearr_60429[(8)] = inst_60363__$1);

(statearr_60429[(9)] = inst_60364__$1);

(statearr_60429[(10)] = inst_60365__$1);

(statearr_60429[(14)] = inst_60373);

(statearr_60429[(11)] = inst_60366__$1);

return statearr_60429;
})();
var statearr_60430_61769 = state_60413__$1;
(statearr_60430_61769[(2)] = null);

(statearr_60430_61769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (22))){
var state_60413__$1 = state_60413;
var statearr_60431_61775 = state_60413__$1;
(statearr_60431_61775[(2)] = null);

(statearr_60431_61775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (6))){
var inst_60352 = (state_60413[(13)]);
var inst_60361 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60352) : f.call(null,inst_60352));
var inst_60362 = cljs.core.seq(inst_60361);
var inst_60363 = inst_60362;
var inst_60364 = null;
var inst_60365 = (0);
var inst_60366 = (0);
var state_60413__$1 = (function (){var statearr_60432 = state_60413;
(statearr_60432[(8)] = inst_60363);

(statearr_60432[(9)] = inst_60364);

(statearr_60432[(10)] = inst_60365);

(statearr_60432[(11)] = inst_60366);

return statearr_60432;
})();
var statearr_60433_61779 = state_60413__$1;
(statearr_60433_61779[(2)] = null);

(statearr_60433_61779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (17))){
var inst_60377 = (state_60413[(7)]);
var inst_60381 = cljs.core.chunk_first(inst_60377);
var inst_60382 = cljs.core.chunk_rest(inst_60377);
var inst_60383 = cljs.core.count(inst_60381);
var inst_60363 = inst_60382;
var inst_60364 = inst_60381;
var inst_60365 = inst_60383;
var inst_60366 = (0);
var state_60413__$1 = (function (){var statearr_60434 = state_60413;
(statearr_60434[(8)] = inst_60363);

(statearr_60434[(9)] = inst_60364);

(statearr_60434[(10)] = inst_60365);

(statearr_60434[(11)] = inst_60366);

return statearr_60434;
})();
var statearr_60435_61787 = state_60413__$1;
(statearr_60435_61787[(2)] = null);

(statearr_60435_61787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (3))){
var inst_60410 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60413__$1,inst_60410);
} else {
if((state_val_60414 === (12))){
var inst_60398 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
var statearr_60436_61788 = state_60413__$1;
(statearr_60436_61788[(2)] = inst_60398);

(statearr_60436_61788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (2))){
var state_60413__$1 = state_60413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60413__$1,(4),in$);
} else {
if((state_val_60414 === (23))){
var inst_60406 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
var statearr_60438_61790 = state_60413__$1;
(statearr_60438_61790[(2)] = inst_60406);

(statearr_60438_61790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (19))){
var inst_60392 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
var statearr_60440_61791 = state_60413__$1;
(statearr_60440_61791[(2)] = inst_60392);

(statearr_60440_61791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (11))){
var inst_60363 = (state_60413[(8)]);
var inst_60377 = (state_60413[(7)]);
var inst_60377__$1 = cljs.core.seq(inst_60363);
var state_60413__$1 = (function (){var statearr_60441 = state_60413;
(statearr_60441[(7)] = inst_60377__$1);

return statearr_60441;
})();
if(inst_60377__$1){
var statearr_60442_61795 = state_60413__$1;
(statearr_60442_61795[(1)] = (14));

} else {
var statearr_60443_61797 = state_60413__$1;
(statearr_60443_61797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (9))){
var inst_60400 = (state_60413[(2)]);
var inst_60401 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60413__$1 = (function (){var statearr_60444 = state_60413;
(statearr_60444[(15)] = inst_60400);

return statearr_60444;
})();
if(cljs.core.truth_(inst_60401)){
var statearr_60445_61798 = state_60413__$1;
(statearr_60445_61798[(1)] = (21));

} else {
var statearr_60446_61800 = state_60413__$1;
(statearr_60446_61800[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (5))){
var inst_60355 = cljs.core.async.close_BANG_(out);
var state_60413__$1 = state_60413;
var statearr_60447_61801 = state_60413__$1;
(statearr_60447_61801[(2)] = inst_60355);

(statearr_60447_61801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (14))){
var inst_60377 = (state_60413[(7)]);
var inst_60379 = cljs.core.chunked_seq_QMARK_(inst_60377);
var state_60413__$1 = state_60413;
if(inst_60379){
var statearr_60448_61802 = state_60413__$1;
(statearr_60448_61802[(1)] = (17));

} else {
var statearr_60449_61803 = state_60413__$1;
(statearr_60449_61803[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (16))){
var inst_60396 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
var statearr_60450_61805 = state_60413__$1;
(statearr_60450_61805[(2)] = inst_60396);

(statearr_60450_61805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (10))){
var inst_60364 = (state_60413[(9)]);
var inst_60366 = (state_60413[(11)]);
var inst_60371 = cljs.core._nth(inst_60364,inst_60366);
var state_60413__$1 = state_60413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60413__$1,(13),out,inst_60371);
} else {
if((state_val_60414 === (18))){
var inst_60377 = (state_60413[(7)]);
var inst_60386 = cljs.core.first(inst_60377);
var state_60413__$1 = state_60413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60413__$1,(20),out,inst_60386);
} else {
if((state_val_60414 === (8))){
var inst_60365 = (state_60413[(10)]);
var inst_60366 = (state_60413[(11)]);
var inst_60368 = (inst_60366 < inst_60365);
var inst_60369 = inst_60368;
var state_60413__$1 = state_60413;
if(cljs.core.truth_(inst_60369)){
var statearr_60451_61807 = state_60413__$1;
(statearr_60451_61807[(1)] = (10));

} else {
var statearr_60452_61808 = state_60413__$1;
(statearr_60452_61808[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47128__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47128__auto____0 = (function (){
var statearr_60456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60456[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47128__auto__);

(statearr_60456[(1)] = (1));

return statearr_60456;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47128__auto____1 = (function (state_60413){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60413);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60457){var ex__47131__auto__ = e60457;
var statearr_60458_61809 = state_60413;
(statearr_60458_61809[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60413[(4)]))){
var statearr_60459_61810 = state_60413;
(statearr_60459_61810[(1)] = cljs.core.first((state_60413[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61816 = state_60413;
state_60413 = G__61816;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47128__auto__ = function(state_60413){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47128__auto____1.call(this,state_60413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47128__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47128__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60463 = f__47407__auto__();
(statearr_60463[(6)] = c__47406__auto__);

return statearr_60463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));

return c__47406__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60468 = arguments.length;
switch (G__60468) {
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
var G__60474 = arguments.length;
switch (G__60474) {
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
var G__60483 = arguments.length;
switch (G__60483) {
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
var c__47406__auto___61842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60513){
var state_val_60514 = (state_60513[(1)]);
if((state_val_60514 === (7))){
var inst_60508 = (state_60513[(2)]);
var state_60513__$1 = state_60513;
var statearr_60519_61843 = state_60513__$1;
(statearr_60519_61843[(2)] = inst_60508);

(statearr_60519_61843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (1))){
var inst_60489 = null;
var state_60513__$1 = (function (){var statearr_60520 = state_60513;
(statearr_60520[(7)] = inst_60489);

return statearr_60520;
})();
var statearr_60523_61852 = state_60513__$1;
(statearr_60523_61852[(2)] = null);

(statearr_60523_61852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (4))){
var inst_60492 = (state_60513[(8)]);
var inst_60492__$1 = (state_60513[(2)]);
var inst_60493 = (inst_60492__$1 == null);
var inst_60494 = cljs.core.not(inst_60493);
var state_60513__$1 = (function (){var statearr_60525 = state_60513;
(statearr_60525[(8)] = inst_60492__$1);

return statearr_60525;
})();
if(inst_60494){
var statearr_60527_61861 = state_60513__$1;
(statearr_60527_61861[(1)] = (5));

} else {
var statearr_60528_61863 = state_60513__$1;
(statearr_60528_61863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (6))){
var state_60513__$1 = state_60513;
var statearr_60531_61864 = state_60513__$1;
(statearr_60531_61864[(2)] = null);

(statearr_60531_61864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (3))){
var inst_60510 = (state_60513[(2)]);
var inst_60511 = cljs.core.async.close_BANG_(out);
var state_60513__$1 = (function (){var statearr_60533 = state_60513;
(statearr_60533[(9)] = inst_60510);

return statearr_60533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60513__$1,inst_60511);
} else {
if((state_val_60514 === (2))){
var state_60513__$1 = state_60513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60513__$1,(4),ch);
} else {
if((state_val_60514 === (11))){
var inst_60492 = (state_60513[(8)]);
var inst_60502 = (state_60513[(2)]);
var inst_60489 = inst_60492;
var state_60513__$1 = (function (){var statearr_60537 = state_60513;
(statearr_60537[(10)] = inst_60502);

(statearr_60537[(7)] = inst_60489);

return statearr_60537;
})();
var statearr_60539_61866 = state_60513__$1;
(statearr_60539_61866[(2)] = null);

(statearr_60539_61866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (9))){
var inst_60492 = (state_60513[(8)]);
var state_60513__$1 = state_60513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60513__$1,(11),out,inst_60492);
} else {
if((state_val_60514 === (5))){
var inst_60492 = (state_60513[(8)]);
var inst_60489 = (state_60513[(7)]);
var inst_60496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60492,inst_60489);
var state_60513__$1 = state_60513;
if(inst_60496){
var statearr_60544_61867 = state_60513__$1;
(statearr_60544_61867[(1)] = (8));

} else {
var statearr_60547_61868 = state_60513__$1;
(statearr_60547_61868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (10))){
var inst_60505 = (state_60513[(2)]);
var state_60513__$1 = state_60513;
var statearr_60548_61869 = state_60513__$1;
(statearr_60548_61869[(2)] = inst_60505);

(statearr_60548_61869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60514 === (8))){
var inst_60489 = (state_60513[(7)]);
var tmp60541 = inst_60489;
var inst_60489__$1 = tmp60541;
var state_60513__$1 = (function (){var statearr_60550 = state_60513;
(statearr_60550[(7)] = inst_60489__$1);

return statearr_60550;
})();
var statearr_60551_61870 = state_60513__$1;
(statearr_60551_61870[(2)] = null);

(statearr_60551_61870[(1)] = (2));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60555[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60555[(1)] = (1));

return statearr_60555;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60513){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60513);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60557){var ex__47131__auto__ = e60557;
var statearr_60559_61872 = state_60513;
(statearr_60559_61872[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60513[(4)]))){
var statearr_60562_61873 = state_60513;
(statearr_60562_61873[(1)] = cljs.core.first((state_60513[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61875 = state_60513;
state_60513 = G__61875;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60564 = f__47407__auto__();
(statearr_60564[(6)] = c__47406__auto___61842);

return statearr_60564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60572 = arguments.length;
switch (G__60572) {
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
var c__47406__auto___61879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60624){
var state_val_60625 = (state_60624[(1)]);
if((state_val_60625 === (7))){
var inst_60618 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
var statearr_60632_61881 = state_60624__$1;
(statearr_60632_61881[(2)] = inst_60618);

(statearr_60632_61881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (1))){
var inst_60580 = (new Array(n));
var inst_60581 = inst_60580;
var inst_60582 = (0);
var state_60624__$1 = (function (){var statearr_60636 = state_60624;
(statearr_60636[(7)] = inst_60581);

(statearr_60636[(8)] = inst_60582);

return statearr_60636;
})();
var statearr_60638_61893 = state_60624__$1;
(statearr_60638_61893[(2)] = null);

(statearr_60638_61893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (4))){
var inst_60585 = (state_60624[(9)]);
var inst_60585__$1 = (state_60624[(2)]);
var inst_60587 = (inst_60585__$1 == null);
var inst_60588 = cljs.core.not(inst_60587);
var state_60624__$1 = (function (){var statearr_60644 = state_60624;
(statearr_60644[(9)] = inst_60585__$1);

return statearr_60644;
})();
if(inst_60588){
var statearr_60647_61911 = state_60624__$1;
(statearr_60647_61911[(1)] = (5));

} else {
var statearr_60648_61913 = state_60624__$1;
(statearr_60648_61913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (15))){
var inst_60612 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
var statearr_60650_61936 = state_60624__$1;
(statearr_60650_61936[(2)] = inst_60612);

(statearr_60650_61936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (13))){
var state_60624__$1 = state_60624;
var statearr_60654_61941 = state_60624__$1;
(statearr_60654_61941[(2)] = null);

(statearr_60654_61941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (6))){
var inst_60582 = (state_60624[(8)]);
var inst_60607 = (inst_60582 > (0));
var state_60624__$1 = state_60624;
if(cljs.core.truth_(inst_60607)){
var statearr_60658_61951 = state_60624__$1;
(statearr_60658_61951[(1)] = (12));

} else {
var statearr_60660_61953 = state_60624__$1;
(statearr_60660_61953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (3))){
var inst_60620 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60624__$1,inst_60620);
} else {
if((state_val_60625 === (12))){
var inst_60581 = (state_60624[(7)]);
var inst_60610 = cljs.core.vec(inst_60581);
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60624__$1,(15),out,inst_60610);
} else {
if((state_val_60625 === (2))){
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60624__$1,(4),ch);
} else {
if((state_val_60625 === (11))){
var inst_60601 = (state_60624[(2)]);
var inst_60602 = (new Array(n));
var inst_60581 = inst_60602;
var inst_60582 = (0);
var state_60624__$1 = (function (){var statearr_60670 = state_60624;
(statearr_60670[(7)] = inst_60581);

(statearr_60670[(8)] = inst_60582);

(statearr_60670[(10)] = inst_60601);

return statearr_60670;
})();
var statearr_60672_61984 = state_60624__$1;
(statearr_60672_61984[(2)] = null);

(statearr_60672_61984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (9))){
var inst_60581 = (state_60624[(7)]);
var inst_60599 = cljs.core.vec(inst_60581);
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60624__$1,(11),out,inst_60599);
} else {
if((state_val_60625 === (5))){
var inst_60581 = (state_60624[(7)]);
var inst_60593 = (state_60624[(11)]);
var inst_60582 = (state_60624[(8)]);
var inst_60585 = (state_60624[(9)]);
var inst_60590 = (inst_60581[inst_60582] = inst_60585);
var inst_60593__$1 = (inst_60582 + (1));
var inst_60594 = (inst_60593__$1 < n);
var state_60624__$1 = (function (){var statearr_60678 = state_60624;
(statearr_60678[(12)] = inst_60590);

(statearr_60678[(11)] = inst_60593__$1);

return statearr_60678;
})();
if(cljs.core.truth_(inst_60594)){
var statearr_60681_61986 = state_60624__$1;
(statearr_60681_61986[(1)] = (8));

} else {
var statearr_60683_61992 = state_60624__$1;
(statearr_60683_61992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (14))){
var inst_60615 = (state_60624[(2)]);
var inst_60616 = cljs.core.async.close_BANG_(out);
var state_60624__$1 = (function (){var statearr_60686 = state_60624;
(statearr_60686[(13)] = inst_60615);

return statearr_60686;
})();
var statearr_60689_61998 = state_60624__$1;
(statearr_60689_61998[(2)] = inst_60616);

(statearr_60689_61998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (10))){
var inst_60605 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
var statearr_60691_62003 = state_60624__$1;
(statearr_60691_62003[(2)] = inst_60605);

(statearr_60691_62003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (8))){
var inst_60581 = (state_60624[(7)]);
var inst_60593 = (state_60624[(11)]);
var tmp60684 = inst_60581;
var inst_60581__$1 = tmp60684;
var inst_60582 = inst_60593;
var state_60624__$1 = (function (){var statearr_60696 = state_60624;
(statearr_60696[(7)] = inst_60581__$1);

(statearr_60696[(8)] = inst_60582);

return statearr_60696;
})();
var statearr_60697_62005 = state_60624__$1;
(statearr_60697_62005[(2)] = null);

(statearr_60697_62005[(1)] = (2));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60702[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60702[(1)] = (1));

return statearr_60702;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60624){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60624);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60704){var ex__47131__auto__ = e60704;
var statearr_60705_62008 = state_60624;
(statearr_60705_62008[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60624[(4)]))){
var statearr_60709_62010 = state_60624;
(statearr_60709_62010[(1)] = cljs.core.first((state_60624[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62011 = state_60624;
state_60624 = G__62011;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60714 = f__47407__auto__();
(statearr_60714[(6)] = c__47406__auto___61879);

return statearr_60714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60723 = arguments.length;
switch (G__60723) {
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
var c__47406__auto___62019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_60787){
var state_val_60788 = (state_60787[(1)]);
if((state_val_60788 === (7))){
var inst_60780 = (state_60787[(2)]);
var state_60787__$1 = state_60787;
var statearr_60793_62027 = state_60787__$1;
(statearr_60793_62027[(2)] = inst_60780);

(statearr_60793_62027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (1))){
var inst_60734 = [];
var inst_60736 = inst_60734;
var inst_60737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60787__$1 = (function (){var statearr_60795 = state_60787;
(statearr_60795[(7)] = inst_60737);

(statearr_60795[(8)] = inst_60736);

return statearr_60795;
})();
var statearr_60799_62040 = state_60787__$1;
(statearr_60799_62040[(2)] = null);

(statearr_60799_62040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (4))){
var inst_60740 = (state_60787[(9)]);
var inst_60740__$1 = (state_60787[(2)]);
var inst_60741 = (inst_60740__$1 == null);
var inst_60742 = cljs.core.not(inst_60741);
var state_60787__$1 = (function (){var statearr_60801 = state_60787;
(statearr_60801[(9)] = inst_60740__$1);

return statearr_60801;
})();
if(inst_60742){
var statearr_60805_62045 = state_60787__$1;
(statearr_60805_62045[(1)] = (5));

} else {
var statearr_60806_62046 = state_60787__$1;
(statearr_60806_62046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (15))){
var inst_60736 = (state_60787[(8)]);
var inst_60772 = cljs.core.vec(inst_60736);
var state_60787__$1 = state_60787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60787__$1,(18),out,inst_60772);
} else {
if((state_val_60788 === (13))){
var inst_60766 = (state_60787[(2)]);
var state_60787__$1 = state_60787;
var statearr_60811_62058 = state_60787__$1;
(statearr_60811_62058[(2)] = inst_60766);

(statearr_60811_62058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (6))){
var inst_60736 = (state_60787[(8)]);
var inst_60768 = inst_60736.length;
var inst_60769 = (inst_60768 > (0));
var state_60787__$1 = state_60787;
if(cljs.core.truth_(inst_60769)){
var statearr_60815_62069 = state_60787__$1;
(statearr_60815_62069[(1)] = (15));

} else {
var statearr_60817_62074 = state_60787__$1;
(statearr_60817_62074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (17))){
var inst_60777 = (state_60787[(2)]);
var inst_60778 = cljs.core.async.close_BANG_(out);
var state_60787__$1 = (function (){var statearr_60821 = state_60787;
(statearr_60821[(10)] = inst_60777);

return statearr_60821;
})();
var statearr_60822_62075 = state_60787__$1;
(statearr_60822_62075[(2)] = inst_60778);

(statearr_60822_62075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (3))){
var inst_60782 = (state_60787[(2)]);
var state_60787__$1 = state_60787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60787__$1,inst_60782);
} else {
if((state_val_60788 === (12))){
var inst_60736 = (state_60787[(8)]);
var inst_60756 = cljs.core.vec(inst_60736);
var state_60787__$1 = state_60787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60787__$1,(14),out,inst_60756);
} else {
if((state_val_60788 === (2))){
var state_60787__$1 = state_60787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60787__$1,(4),ch);
} else {
if((state_val_60788 === (11))){
var inst_60740 = (state_60787[(9)]);
var inst_60736 = (state_60787[(8)]);
var inst_60744 = (state_60787[(11)]);
var inst_60753 = inst_60736.push(inst_60740);
var tmp60823 = inst_60736;
var inst_60736__$1 = tmp60823;
var inst_60737 = inst_60744;
var state_60787__$1 = (function (){var statearr_60824 = state_60787;
(statearr_60824[(12)] = inst_60753);

(statearr_60824[(7)] = inst_60737);

(statearr_60824[(8)] = inst_60736__$1);

return statearr_60824;
})();
var statearr_60825_62080 = state_60787__$1;
(statearr_60825_62080[(2)] = null);

(statearr_60825_62080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (9))){
var inst_60737 = (state_60787[(7)]);
var inst_60749 = cljs.core.keyword_identical_QMARK_(inst_60737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_60787__$1 = state_60787;
var statearr_60826_62083 = state_60787__$1;
(statearr_60826_62083[(2)] = inst_60749);

(statearr_60826_62083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (5))){
var inst_60737 = (state_60787[(7)]);
var inst_60746 = (state_60787[(13)]);
var inst_60740 = (state_60787[(9)]);
var inst_60744 = (state_60787[(11)]);
var inst_60744__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60740) : f.call(null,inst_60740));
var inst_60746__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60744__$1,inst_60737);
var state_60787__$1 = (function (){var statearr_60827 = state_60787;
(statearr_60827[(13)] = inst_60746__$1);

(statearr_60827[(11)] = inst_60744__$1);

return statearr_60827;
})();
if(inst_60746__$1){
var statearr_60828_62092 = state_60787__$1;
(statearr_60828_62092[(1)] = (8));

} else {
var statearr_60829_62093 = state_60787__$1;
(statearr_60829_62093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (14))){
var inst_60740 = (state_60787[(9)]);
var inst_60744 = (state_60787[(11)]);
var inst_60759 = (state_60787[(2)]);
var inst_60762 = [];
var inst_60763 = inst_60762.push(inst_60740);
var inst_60736 = inst_60762;
var inst_60737 = inst_60744;
var state_60787__$1 = (function (){var statearr_60830 = state_60787;
(statearr_60830[(14)] = inst_60759);

(statearr_60830[(7)] = inst_60737);

(statearr_60830[(8)] = inst_60736);

(statearr_60830[(15)] = inst_60763);

return statearr_60830;
})();
var statearr_60833_62104 = state_60787__$1;
(statearr_60833_62104[(2)] = null);

(statearr_60833_62104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (16))){
var state_60787__$1 = state_60787;
var statearr_60834_62105 = state_60787__$1;
(statearr_60834_62105[(2)] = null);

(statearr_60834_62105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (10))){
var inst_60751 = (state_60787[(2)]);
var state_60787__$1 = state_60787;
if(cljs.core.truth_(inst_60751)){
var statearr_60835_62106 = state_60787__$1;
(statearr_60835_62106[(1)] = (11));

} else {
var statearr_60836_62107 = state_60787__$1;
(statearr_60836_62107[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (18))){
var inst_60774 = (state_60787[(2)]);
var state_60787__$1 = state_60787;
var statearr_60837_62108 = state_60787__$1;
(statearr_60837_62108[(2)] = inst_60774);

(statearr_60837_62108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60788 === (8))){
var inst_60746 = (state_60787[(13)]);
var state_60787__$1 = state_60787;
var statearr_60842_62109 = state_60787__$1;
(statearr_60842_62109[(2)] = inst_60746);

(statearr_60842_62109[(1)] = (10));


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
var cljs$core$async$state_machine__47128__auto__ = null;
var cljs$core$async$state_machine__47128__auto____0 = (function (){
var statearr_60847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60847[(0)] = cljs$core$async$state_machine__47128__auto__);

(statearr_60847[(1)] = (1));

return statearr_60847;
});
var cljs$core$async$state_machine__47128__auto____1 = (function (state_60787){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_60787);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e60849){var ex__47131__auto__ = e60849;
var statearr_60850_62110 = state_60787;
(statearr_60850_62110[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_60787[(4)]))){
var statearr_60851_62111 = state_60787;
(statearr_60851_62111[(1)] = cljs.core.first((state_60787[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62112 = state_60787;
state_60787 = G__62112;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
cljs$core$async$state_machine__47128__auto__ = function(state_60787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47128__auto____1.call(this,state_60787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47128__auto____0;
cljs$core$async$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47128__auto____1;
return cljs$core$async$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_60852 = f__47407__auto__();
(statearr_60852[(6)] = c__47406__auto___62019);

return statearr_60852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
