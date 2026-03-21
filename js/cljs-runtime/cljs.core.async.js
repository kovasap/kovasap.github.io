goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33562 = arguments.length;
switch (G__33562) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33563 = (function (f,blockable,meta33564){
this.f = f;
this.blockable = blockable;
this.meta33564 = meta33564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33565,meta33564__$1){
var self__ = this;
var _33565__$1 = this;
return (new cljs.core.async.t_cljs$core$async33563(self__.f,self__.blockable,meta33564__$1));
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33565){
var self__ = this;
var _33565__$1 = this;
return self__.meta33564;
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33564","meta33564",281542893,null)], null);
}));

(cljs.core.async.t_cljs$core$async33563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33563");

(cljs.core.async.t_cljs$core$async33563.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33563.
 */
cljs.core.async.__GT_t_cljs$core$async33563 = (function cljs$core$async$__GT_t_cljs$core$async33563(f__$1,blockable__$1,meta33564){
return (new cljs.core.async.t_cljs$core$async33563(f__$1,blockable__$1,meta33564));
});

}

return (new cljs.core.async.t_cljs$core$async33563(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33572 = arguments.length;
switch (G__33572) {
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
var G__33579 = arguments.length;
switch (G__33579) {
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
var G__33588 = arguments.length;
switch (G__33588) {
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
var val_36070 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36070) : fn1.call(null,val_36070));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36070) : fn1.call(null,val_36070));
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
var G__33597 = arguments.length;
switch (G__33597) {
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
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
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
var n__5636__auto___36079 = n;
var x_36080 = (0);
while(true){
if((x_36080 < n__5636__auto___36079)){
(a[x_36080] = x_36080);

var G__36081 = (x_36080 + (1));
x_36080 = G__36081;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33598 = (function (flag,meta33599){
this.flag = flag;
this.meta33599 = meta33599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33600,meta33599__$1){
var self__ = this;
var _33600__$1 = this;
return (new cljs.core.async.t_cljs$core$async33598(self__.flag,meta33599__$1));
}));

(cljs.core.async.t_cljs$core$async33598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33600){
var self__ = this;
var _33600__$1 = this;
return self__.meta33599;
}));

(cljs.core.async.t_cljs$core$async33598.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33598.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33599","meta33599",1300458360,null)], null);
}));

(cljs.core.async.t_cljs$core$async33598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33598");

(cljs.core.async.t_cljs$core$async33598.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33598.
 */
cljs.core.async.__GT_t_cljs$core$async33598 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33598(flag__$1,meta33599){
return (new cljs.core.async.t_cljs$core$async33598(flag__$1,meta33599));
});

}

return (new cljs.core.async.t_cljs$core$async33598(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33602 = (function (flag,cb,meta33603){
this.flag = flag;
this.cb = cb;
this.meta33603 = meta33603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33604,meta33603__$1){
var self__ = this;
var _33604__$1 = this;
return (new cljs.core.async.t_cljs$core$async33602(self__.flag,self__.cb,meta33603__$1));
}));

(cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33604){
var self__ = this;
var _33604__$1 = this;
return self__.meta33603;
}));

(cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33603","meta33603",-2033330971,null)], null);
}));

(cljs.core.async.t_cljs$core$async33602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33602");

(cljs.core.async.t_cljs$core$async33602.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33602.
 */
cljs.core.async.__GT_t_cljs$core$async33602 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33602(flag__$1,cb__$1,meta33603){
return (new cljs.core.async.t_cljs$core$async33602(flag__$1,cb__$1,meta33603));
});

}

return (new cljs.core.async.t_cljs$core$async33602(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33621_SHARP_){
var G__33632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33621_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33632) : fret.call(null,G__33632));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33622_SHARP_){
var G__33633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33622_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33633) : fret.call(null,G__33633));
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
var G__36140 = (i + (1));
i = G__36140;
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
var temp__5823__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var len__5769__auto___36152 = arguments.length;
var i__5770__auto___36153 = (0);
while(true){
if((i__5770__auto___36153 < len__5769__auto___36152)){
args__5775__auto__.push((arguments[i__5770__auto___36153]));

var G__36154 = (i__5770__auto___36153 + (1));
i__5770__auto___36153 = G__36154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33643){
var map__33644 = p__33643;
var map__33644__$1 = cljs.core.__destructure_map(map__33644);
var opts = map__33644__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33636){
var G__33637 = cljs.core.first(seq33636);
var seq33636__$1 = cljs.core.next(seq33636);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33637,seq33636__$1);
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
var G__33659 = arguments.length;
switch (G__33659) {
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
var c__33479__auto___36172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_33704){
var state_val_33706 = (state_33704[(1)]);
if((state_val_33706 === (7))){
var inst_33696 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
var statearr_33716_36173 = state_33704__$1;
(statearr_33716_36173[(2)] = inst_33696);

(statearr_33716_36173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (1))){
var state_33704__$1 = state_33704;
var statearr_33717_36174 = state_33704__$1;
(statearr_33717_36174[(2)] = null);

(statearr_33717_36174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (4))){
var inst_33674 = (state_33704[(7)]);
var inst_33674__$1 = (state_33704[(2)]);
var inst_33675 = (inst_33674__$1 == null);
var state_33704__$1 = (function (){var statearr_33719 = state_33704;
(statearr_33719[(7)] = inst_33674__$1);

return statearr_33719;
})();
if(cljs.core.truth_(inst_33675)){
var statearr_33721_36178 = state_33704__$1;
(statearr_33721_36178[(1)] = (5));

} else {
var statearr_33722_36179 = state_33704__$1;
(statearr_33722_36179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (13))){
var state_33704__$1 = state_33704;
var statearr_33724_36180 = state_33704__$1;
(statearr_33724_36180[(2)] = null);

(statearr_33724_36180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (6))){
var inst_33674 = (state_33704[(7)]);
var state_33704__$1 = state_33704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33704__$1,(11),to,inst_33674);
} else {
if((state_val_33706 === (3))){
var inst_33698 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33704__$1,inst_33698);
} else {
if((state_val_33706 === (12))){
var state_33704__$1 = state_33704;
var statearr_33735_36182 = state_33704__$1;
(statearr_33735_36182[(2)] = null);

(statearr_33735_36182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (2))){
var state_33704__$1 = state_33704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33704__$1,(4),from);
} else {
if((state_val_33706 === (11))){
var inst_33688 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
if(cljs.core.truth_(inst_33688)){
var statearr_33753_36184 = state_33704__$1;
(statearr_33753_36184[(1)] = (12));

} else {
var statearr_33754_36185 = state_33704__$1;
(statearr_33754_36185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (9))){
var state_33704__$1 = state_33704;
var statearr_33755_36186 = state_33704__$1;
(statearr_33755_36186[(2)] = null);

(statearr_33755_36186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (5))){
var state_33704__$1 = state_33704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33757_36187 = state_33704__$1;
(statearr_33757_36187[(1)] = (8));

} else {
var statearr_33764_36189 = state_33704__$1;
(statearr_33764_36189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (14))){
var inst_33694 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
var statearr_33766_36190 = state_33704__$1;
(statearr_33766_36190[(2)] = inst_33694);

(statearr_33766_36190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (10))){
var inst_33683 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
var statearr_33767_36194 = state_33704__$1;
(statearr_33767_36194[(2)] = inst_33683);

(statearr_33767_36194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (8))){
var inst_33678 = cljs.core.async.close_BANG_(to);
var state_33704__$1 = state_33704;
var statearr_33769_36196 = state_33704__$1;
(statearr_33769_36196[(2)] = inst_33678);

(statearr_33769_36196[(1)] = (10));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_33771 = [null,null,null,null,null,null,null,null];
(statearr_33771[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_33771[(1)] = (1));

return statearr_33771;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_33704){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_33704);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e33772){var ex__33207__auto__ = e33772;
var statearr_33776_36198 = state_33704;
(statearr_33776_36198[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_33704[(4)]))){
var statearr_33778_36199 = state_33704;
(statearr_33778_36199[(1)] = cljs.core.first((state_33704[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36201 = state_33704;
state_33704 = G__36201;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_33704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_33704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_33779 = f__33480__auto__();
(statearr_33779[(6)] = c__33479__auto___36172);

return statearr_33779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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
var process__$1 = (function (p__33803){
var vec__33804 = p__33803;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(1),null);
var job = vec__33804;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33479__auto___36204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_33812){
var state_val_33813 = (state_33812[(1)]);
if((state_val_33813 === (1))){
var state_33812__$1 = state_33812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33812__$1,(2),res,v);
} else {
if((state_val_33813 === (2))){
var inst_33809 = (state_33812[(2)]);
var inst_33810 = cljs.core.async.close_BANG_(res);
var state_33812__$1 = (function (){var statearr_33838 = state_33812;
(statearr_33838[(7)] = inst_33809);

return statearr_33838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33812__$1,inst_33810);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_33848 = [null,null,null,null,null,null,null,null];
(statearr_33848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_33848[(1)] = (1));

return statearr_33848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_33812){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_33812);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e33870){var ex__33207__auto__ = e33870;
var statearr_33873_36207 = state_33812;
(statearr_33873_36207[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_33812[(4)]))){
var statearr_33880_36208 = state_33812;
(statearr_33880_36208[(1)] = cljs.core.first((state_33812[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36210 = state_33812;
state_33812 = G__36210;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_33812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_33812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_33885 = f__33480__auto__();
(statearr_33885[(6)] = c__33479__auto___36204);

return statearr_33885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33886){
var vec__33887 = p__33886;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33887,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33887,(1),null);
var job = vec__33887;
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
var n__5636__auto___36212 = n;
var __36213 = (0);
while(true){
if((__36213 < n__5636__auto___36212)){
var G__33891_36214 = type;
var G__33891_36215__$1 = (((G__33891_36214 instanceof cljs.core.Keyword))?G__33891_36214.fqn:null);
switch (G__33891_36215__$1) {
case "compute":
var c__33479__auto___36217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36213,c__33479__auto___36217,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async){
return (function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = ((function (__36213,c__33479__auto___36217,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async){
return (function (state_33905){
var state_val_33906 = (state_33905[(1)]);
if((state_val_33906 === (1))){
var state_33905__$1 = state_33905;
var statearr_33908_36219 = state_33905__$1;
(statearr_33908_36219[(2)] = null);

(statearr_33908_36219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (2))){
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33905__$1,(4),jobs);
} else {
if((state_val_33906 === (3))){
var inst_33903 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33905__$1,inst_33903);
} else {
if((state_val_33906 === (4))){
var inst_33895 = (state_33905[(2)]);
var inst_33896 = process__$1(inst_33895);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33896)){
var statearr_33913_36221 = state_33905__$1;
(statearr_33913_36221[(1)] = (5));

} else {
var statearr_33918_36224 = state_33905__$1;
(statearr_33918_36224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (5))){
var state_33905__$1 = state_33905;
var statearr_33923_36225 = state_33905__$1;
(statearr_33923_36225[(2)] = null);

(statearr_33923_36225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (6))){
var state_33905__$1 = state_33905;
var statearr_33925_36226 = state_33905__$1;
(statearr_33925_36226[(2)] = null);

(statearr_33925_36226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (7))){
var inst_33901 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33927_36227 = state_33905__$1;
(statearr_33927_36227[(2)] = inst_33901);

(statearr_33927_36227[(1)] = (3));


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
});})(__36213,c__33479__auto___36217,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async))
;
return ((function (__36213,switch__33203__auto__,c__33479__auto___36217,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_33936 = [null,null,null,null,null,null,null];
(statearr_33936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_33936[(1)] = (1));

return statearr_33936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_33905){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_33905);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e33941){var ex__33207__auto__ = e33941;
var statearr_33946_36228 = state_33905;
(statearr_33946_36228[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_33905[(4)]))){
var statearr_33951_36229 = state_33905;
(statearr_33951_36229[(1)] = cljs.core.first((state_33905[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36230 = state_33905;
state_33905 = G__36230;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_33905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_33905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
;})(__36213,switch__33203__auto__,c__33479__auto___36217,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async))
})();
var state__33481__auto__ = (function (){var statearr_33952 = f__33480__auto__();
(statearr_33952[(6)] = c__33479__auto___36217);

return statearr_33952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
});})(__36213,c__33479__auto___36217,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async))
);


break;
case "async":
var c__33479__auto___36231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36213,c__33479__auto___36231,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async){
return (function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = ((function (__36213,c__33479__auto___36231,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async){
return (function (state_33966){
var state_val_33967 = (state_33966[(1)]);
if((state_val_33967 === (1))){
var state_33966__$1 = state_33966;
var statearr_33968_36232 = state_33966__$1;
(statearr_33968_36232[(2)] = null);

(statearr_33968_36232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (2))){
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33966__$1,(4),jobs);
} else {
if((state_val_33967 === (3))){
var inst_33963 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33966__$1,inst_33963);
} else {
if((state_val_33967 === (4))){
var inst_33955 = (state_33966[(2)]);
var inst_33956 = async(inst_33955);
var state_33966__$1 = state_33966;
if(cljs.core.truth_(inst_33956)){
var statearr_33969_36235 = state_33966__$1;
(statearr_33969_36235[(1)] = (5));

} else {
var statearr_33970_36237 = state_33966__$1;
(statearr_33970_36237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (5))){
var state_33966__$1 = state_33966;
var statearr_33971_36238 = state_33966__$1;
(statearr_33971_36238[(2)] = null);

(statearr_33971_36238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (6))){
var state_33966__$1 = state_33966;
var statearr_33973_36239 = state_33966__$1;
(statearr_33973_36239[(2)] = null);

(statearr_33973_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (7))){
var inst_33961 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
var statearr_33974_36240 = state_33966__$1;
(statearr_33974_36240[(2)] = inst_33961);

(statearr_33974_36240[(1)] = (3));


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
});})(__36213,c__33479__auto___36231,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async))
;
return ((function (__36213,switch__33203__auto__,c__33479__auto___36231,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_33975 = [null,null,null,null,null,null,null];
(statearr_33975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_33975[(1)] = (1));

return statearr_33975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_33966){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_33966);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e33976){var ex__33207__auto__ = e33976;
var statearr_33977_36242 = state_33966;
(statearr_33977_36242[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_33966[(4)]))){
var statearr_33978_36244 = state_33966;
(statearr_33978_36244[(1)] = cljs.core.first((state_33966[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36246 = state_33966;
state_33966 = G__36246;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_33966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_33966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
;})(__36213,switch__33203__auto__,c__33479__auto___36231,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async))
})();
var state__33481__auto__ = (function (){var statearr_33980 = f__33480__auto__();
(statearr_33980[(6)] = c__33479__auto___36231);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
});})(__36213,c__33479__auto___36231,G__33891_36214,G__33891_36215__$1,n__5636__auto___36212,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33891_36215__$1)].join('')));

}

var G__36247 = (__36213 + (1));
__36213 = G__36247;
continue;
} else {
}
break;
}

var c__33479__auto___36248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34004){
var state_val_34005 = (state_34004[(1)]);
if((state_val_34005 === (7))){
var inst_33998 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34006_36249 = state_34004__$1;
(statearr_34006_36249[(2)] = inst_33998);

(statearr_34006_36249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (1))){
var state_34004__$1 = state_34004;
var statearr_34007_36250 = state_34004__$1;
(statearr_34007_36250[(2)] = null);

(statearr_34007_36250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (4))){
var inst_33983 = (state_34004[(7)]);
var inst_33983__$1 = (state_34004[(2)]);
var inst_33984 = (inst_33983__$1 == null);
var state_34004__$1 = (function (){var statearr_34009 = state_34004;
(statearr_34009[(7)] = inst_33983__$1);

return statearr_34009;
})();
if(cljs.core.truth_(inst_33984)){
var statearr_34010_36251 = state_34004__$1;
(statearr_34010_36251[(1)] = (5));

} else {
var statearr_34011_36252 = state_34004__$1;
(statearr_34011_36252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (6))){
var inst_33988 = (state_34004[(8)]);
var inst_33983 = (state_34004[(7)]);
var inst_33988__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33990 = [inst_33983,inst_33988__$1];
var inst_33991 = (new cljs.core.PersistentVector(null,2,(5),inst_33989,inst_33990,null));
var state_34004__$1 = (function (){var statearr_34012 = state_34004;
(statearr_34012[(8)] = inst_33988__$1);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34004__$1,(8),jobs,inst_33991);
} else {
if((state_val_34005 === (3))){
var inst_34000 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34004__$1,inst_34000);
} else {
if((state_val_34005 === (2))){
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34004__$1,(4),from);
} else {
if((state_val_34005 === (9))){
var inst_33995 = (state_34004[(2)]);
var state_34004__$1 = (function (){var statearr_34013 = state_34004;
(statearr_34013[(9)] = inst_33995);

return statearr_34013;
})();
var statearr_34014_36253 = state_34004__$1;
(statearr_34014_36253[(2)] = null);

(statearr_34014_36253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (5))){
var inst_33986 = cljs.core.async.close_BANG_(jobs);
var state_34004__$1 = state_34004;
var statearr_34016_36255 = state_34004__$1;
(statearr_34016_36255[(2)] = inst_33986);

(statearr_34016_36255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (8))){
var inst_33988 = (state_34004[(8)]);
var inst_33993 = (state_34004[(2)]);
var state_34004__$1 = (function (){var statearr_34017 = state_34004;
(statearr_34017[(10)] = inst_33993);

return statearr_34017;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34004__$1,(9),results,inst_33988);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_34018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_34018[(1)] = (1));

return statearr_34018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_34004){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34004);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34019){var ex__33207__auto__ = e34019;
var statearr_34020_36266 = state_34004;
(statearr_34020_36266[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34004[(4)]))){
var statearr_34021_36267 = state_34004;
(statearr_34021_36267[(1)] = cljs.core.first((state_34004[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36268 = state_34004;
state_34004 = G__36268;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_34004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_34004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34022 = f__33480__auto__();
(statearr_34022[(6)] = c__33479__auto___36248);

return statearr_34022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


var c__33479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34061){
var state_val_34063 = (state_34061[(1)]);
if((state_val_34063 === (7))){
var inst_34057 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34064_36269 = state_34061__$1;
(statearr_34064_36269[(2)] = inst_34057);

(statearr_34064_36269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (20))){
var state_34061__$1 = state_34061;
var statearr_34065_36270 = state_34061__$1;
(statearr_34065_36270[(2)] = null);

(statearr_34065_36270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (1))){
var state_34061__$1 = state_34061;
var statearr_34066_36271 = state_34061__$1;
(statearr_34066_36271[(2)] = null);

(statearr_34066_36271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (4))){
var inst_34026 = (state_34061[(7)]);
var inst_34026__$1 = (state_34061[(2)]);
var inst_34027 = (inst_34026__$1 == null);
var state_34061__$1 = (function (){var statearr_34068 = state_34061;
(statearr_34068[(7)] = inst_34026__$1);

return statearr_34068;
})();
if(cljs.core.truth_(inst_34027)){
var statearr_34069_36279 = state_34061__$1;
(statearr_34069_36279[(1)] = (5));

} else {
var statearr_34070_36282 = state_34061__$1;
(statearr_34070_36282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (15))){
var inst_34039 = (state_34061[(8)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34061__$1,(18),to,inst_34039);
} else {
if((state_val_34063 === (21))){
var inst_34052 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34071_36288 = state_34061__$1;
(statearr_34071_36288[(2)] = inst_34052);

(statearr_34071_36288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (13))){
var inst_34054 = (state_34061[(2)]);
var state_34061__$1 = (function (){var statearr_34072 = state_34061;
(statearr_34072[(9)] = inst_34054);

return statearr_34072;
})();
var statearr_34074_36294 = state_34061__$1;
(statearr_34074_36294[(2)] = null);

(statearr_34074_36294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (6))){
var inst_34026 = (state_34061[(7)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34061__$1,(11),inst_34026);
} else {
if((state_val_34063 === (17))){
var inst_34047 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
if(cljs.core.truth_(inst_34047)){
var statearr_34075_36301 = state_34061__$1;
(statearr_34075_36301[(1)] = (19));

} else {
var statearr_34076_36304 = state_34061__$1;
(statearr_34076_36304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (3))){
var inst_34059 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34061__$1,inst_34059);
} else {
if((state_val_34063 === (12))){
var inst_34036 = (state_34061[(10)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34061__$1,(14),inst_34036);
} else {
if((state_val_34063 === (2))){
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34061__$1,(4),results);
} else {
if((state_val_34063 === (19))){
var state_34061__$1 = state_34061;
var statearr_34077_36310 = state_34061__$1;
(statearr_34077_36310[(2)] = null);

(statearr_34077_36310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (11))){
var inst_34036 = (state_34061[(2)]);
var state_34061__$1 = (function (){var statearr_34078 = state_34061;
(statearr_34078[(10)] = inst_34036);

return statearr_34078;
})();
var statearr_34080_36312 = state_34061__$1;
(statearr_34080_36312[(2)] = null);

(statearr_34080_36312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (9))){
var state_34061__$1 = state_34061;
var statearr_34081_36313 = state_34061__$1;
(statearr_34081_36313[(2)] = null);

(statearr_34081_36313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (5))){
var state_34061__$1 = state_34061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34082_36314 = state_34061__$1;
(statearr_34082_36314[(1)] = (8));

} else {
var statearr_34083_36315 = state_34061__$1;
(statearr_34083_36315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (14))){
var inst_34039 = (state_34061[(8)]);
var inst_34041 = (state_34061[(11)]);
var inst_34039__$1 = (state_34061[(2)]);
var inst_34040 = (inst_34039__$1 == null);
var inst_34041__$1 = cljs.core.not(inst_34040);
var state_34061__$1 = (function (){var statearr_34084 = state_34061;
(statearr_34084[(8)] = inst_34039__$1);

(statearr_34084[(11)] = inst_34041__$1);

return statearr_34084;
})();
if(inst_34041__$1){
var statearr_34085_36321 = state_34061__$1;
(statearr_34085_36321[(1)] = (15));

} else {
var statearr_34086_36322 = state_34061__$1;
(statearr_34086_36322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (16))){
var inst_34041 = (state_34061[(11)]);
var state_34061__$1 = state_34061;
var statearr_34088_36323 = state_34061__$1;
(statearr_34088_36323[(2)] = inst_34041);

(statearr_34088_36323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (10))){
var inst_34033 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34089_36324 = state_34061__$1;
(statearr_34089_36324[(2)] = inst_34033);

(statearr_34089_36324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (18))){
var inst_34044 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34090_36325 = state_34061__$1;
(statearr_34090_36325[(2)] = inst_34044);

(statearr_34090_36325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (8))){
var inst_34030 = cljs.core.async.close_BANG_(to);
var state_34061__$1 = state_34061;
var statearr_34091_36326 = state_34061__$1;
(statearr_34091_36326[(2)] = inst_34030);

(statearr_34091_36326[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_34093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_34093[(1)] = (1));

return statearr_34093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_34061){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34061);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34094){var ex__33207__auto__ = e34094;
var statearr_34095_36328 = state_34061;
(statearr_34095_36328[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34061[(4)]))){
var statearr_34096_36329 = state_34061;
(statearr_34096_36329[(1)] = cljs.core.first((state_34061[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36330 = state_34061;
state_34061 = G__36330;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34097 = f__33480__auto__();
(statearr_34097[(6)] = c__33479__auto__);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));

return c__33479__auto__;
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
var G__34100 = arguments.length;
switch (G__34100) {
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
var G__34104 = arguments.length;
switch (G__34104) {
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
var G__34107 = arguments.length;
switch (G__34107) {
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
var c__33479__auto___36375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34135){
var state_val_34136 = (state_34135[(1)]);
if((state_val_34136 === (7))){
var inst_34131 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34138_36389 = state_34135__$1;
(statearr_34138_36389[(2)] = inst_34131);

(statearr_34138_36389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (1))){
var state_34135__$1 = state_34135;
var statearr_34139_36390 = state_34135__$1;
(statearr_34139_36390[(2)] = null);

(statearr_34139_36390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (4))){
var inst_34111 = (state_34135[(7)]);
var inst_34111__$1 = (state_34135[(2)]);
var inst_34112 = (inst_34111__$1 == null);
var state_34135__$1 = (function (){var statearr_34140 = state_34135;
(statearr_34140[(7)] = inst_34111__$1);

return statearr_34140;
})();
if(cljs.core.truth_(inst_34112)){
var statearr_34141_36395 = state_34135__$1;
(statearr_34141_36395[(1)] = (5));

} else {
var statearr_34142_36396 = state_34135__$1;
(statearr_34142_36396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (13))){
var state_34135__$1 = state_34135;
var statearr_34143_36397 = state_34135__$1;
(statearr_34143_36397[(2)] = null);

(statearr_34143_36397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (6))){
var inst_34111 = (state_34135[(7)]);
var inst_34118 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34111) : p.call(null,inst_34111));
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34118)){
var statearr_34145_36404 = state_34135__$1;
(statearr_34145_36404[(1)] = (9));

} else {
var statearr_34146_36405 = state_34135__$1;
(statearr_34146_36405[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (3))){
var inst_34133 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34135__$1,inst_34133);
} else {
if((state_val_34136 === (12))){
var state_34135__$1 = state_34135;
var statearr_34147_36411 = state_34135__$1;
(statearr_34147_36411[(2)] = null);

(statearr_34147_36411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (2))){
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34135__$1,(4),ch);
} else {
if((state_val_34136 === (11))){
var inst_34111 = (state_34135[(7)]);
var inst_34122 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34135__$1,(8),inst_34122,inst_34111);
} else {
if((state_val_34136 === (9))){
var state_34135__$1 = state_34135;
var statearr_34148_36418 = state_34135__$1;
(statearr_34148_36418[(2)] = tc);

(statearr_34148_36418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (5))){
var inst_34114 = cljs.core.async.close_BANG_(tc);
var inst_34115 = cljs.core.async.close_BANG_(fc);
var state_34135__$1 = (function (){var statearr_34150 = state_34135;
(statearr_34150[(8)] = inst_34114);

return statearr_34150;
})();
var statearr_34151_36419 = state_34135__$1;
(statearr_34151_36419[(2)] = inst_34115);

(statearr_34151_36419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (14))){
var inst_34129 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34152_36420 = state_34135__$1;
(statearr_34152_36420[(2)] = inst_34129);

(statearr_34152_36420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (10))){
var state_34135__$1 = state_34135;
var statearr_34153_36423 = state_34135__$1;
(statearr_34153_36423[(2)] = fc);

(statearr_34153_36423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (8))){
var inst_34124 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34124)){
var statearr_34154_36425 = state_34135__$1;
(statearr_34154_36425[(1)] = (12));

} else {
var statearr_34155_36426 = state_34135__$1;
(statearr_34155_36426[(1)] = (13));

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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_34157 = [null,null,null,null,null,null,null,null,null];
(statearr_34157[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_34157[(1)] = (1));

return statearr_34157;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_34135){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34135);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34158){var ex__33207__auto__ = e34158;
var statearr_34159_36432 = state_34135;
(statearr_34159_36432[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34135[(4)]))){
var statearr_34160_36433 = state_34135;
(statearr_34160_36433[(1)] = cljs.core.first((state_34135[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36435 = state_34135;
state_34135 = G__36435;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_34135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_34135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34161 = f__33480__auto__();
(statearr_34161[(6)] = c__33479__auto___36375);

return statearr_34161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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
var c__33479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34185){
var state_val_34186 = (state_34185[(1)]);
if((state_val_34186 === (7))){
var inst_34181 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34188_36437 = state_34185__$1;
(statearr_34188_36437[(2)] = inst_34181);

(statearr_34188_36437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (1))){
var inst_34163 = init;
var inst_34164 = inst_34163;
var state_34185__$1 = (function (){var statearr_34189 = state_34185;
(statearr_34189[(7)] = inst_34164);

return statearr_34189;
})();
var statearr_34190_36438 = state_34185__$1;
(statearr_34190_36438[(2)] = null);

(statearr_34190_36438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (4))){
var inst_34168 = (state_34185[(8)]);
var inst_34168__$1 = (state_34185[(2)]);
var inst_34169 = (inst_34168__$1 == null);
var state_34185__$1 = (function (){var statearr_34191 = state_34185;
(statearr_34191[(8)] = inst_34168__$1);

return statearr_34191;
})();
if(cljs.core.truth_(inst_34169)){
var statearr_34193_36439 = state_34185__$1;
(statearr_34193_36439[(1)] = (5));

} else {
var statearr_34194_36440 = state_34185__$1;
(statearr_34194_36440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (6))){
var inst_34164 = (state_34185[(7)]);
var inst_34168 = (state_34185[(8)]);
var inst_34172 = (state_34185[(9)]);
var inst_34172__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34164,inst_34168) : f.call(null,inst_34164,inst_34168));
var inst_34173 = cljs.core.reduced_QMARK_(inst_34172__$1);
var state_34185__$1 = (function (){var statearr_34195 = state_34185;
(statearr_34195[(9)] = inst_34172__$1);

return statearr_34195;
})();
if(inst_34173){
var statearr_34196_36441 = state_34185__$1;
(statearr_34196_36441[(1)] = (8));

} else {
var statearr_34197_36443 = state_34185__$1;
(statearr_34197_36443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (3))){
var inst_34183 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34185__$1,inst_34183);
} else {
if((state_val_34186 === (2))){
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34185__$1,(4),ch);
} else {
if((state_val_34186 === (9))){
var inst_34172 = (state_34185[(9)]);
var inst_34164 = inst_34172;
var state_34185__$1 = (function (){var statearr_34199 = state_34185;
(statearr_34199[(7)] = inst_34164);

return statearr_34199;
})();
var statearr_34200_36444 = state_34185__$1;
(statearr_34200_36444[(2)] = null);

(statearr_34200_36444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (5))){
var inst_34164 = (state_34185[(7)]);
var state_34185__$1 = state_34185;
var statearr_34201_36445 = state_34185__$1;
(statearr_34201_36445[(2)] = inst_34164);

(statearr_34201_36445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (10))){
var inst_34179 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34202_36450 = state_34185__$1;
(statearr_34202_36450[(2)] = inst_34179);

(statearr_34202_36450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (8))){
var inst_34172 = (state_34185[(9)]);
var inst_34175 = cljs.core.deref(inst_34172);
var state_34185__$1 = state_34185;
var statearr_34203_36452 = state_34185__$1;
(statearr_34203_36452[(2)] = inst_34175);

(statearr_34203_36452[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33204__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33204__auto____0 = (function (){
var statearr_34205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34205[(0)] = cljs$core$async$reduce_$_state_machine__33204__auto__);

(statearr_34205[(1)] = (1));

return statearr_34205;
});
var cljs$core$async$reduce_$_state_machine__33204__auto____1 = (function (state_34185){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34185);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34206){var ex__33207__auto__ = e34206;
var statearr_34207_36456 = state_34185;
(statearr_34207_36456[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34185[(4)]))){
var statearr_34208_36458 = state_34185;
(statearr_34208_36458[(1)] = cljs.core.first((state_34185[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36462 = state_34185;
state_34185 = G__36462;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33204__auto__ = function(state_34185){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33204__auto____1.call(this,state_34185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33204__auto____0;
cljs$core$async$reduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33204__auto____1;
return cljs$core$async$reduce_$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34209 = f__33480__auto__();
(statearr_34209[(6)] = c__33479__auto__);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));

return c__33479__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34216){
var state_val_34217 = (state_34216[(1)]);
if((state_val_34217 === (1))){
var inst_34211 = cljs.core.async.reduce(f__$1,init,ch);
var state_34216__$1 = state_34216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34216__$1,(2),inst_34211);
} else {
if((state_val_34217 === (2))){
var inst_34213 = (state_34216[(2)]);
var inst_34214 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34213) : f__$1.call(null,inst_34213));
var state_34216__$1 = state_34216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34216__$1,inst_34214);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33204__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33204__auto____0 = (function (){
var statearr_34221 = [null,null,null,null,null,null,null];
(statearr_34221[(0)] = cljs$core$async$transduce_$_state_machine__33204__auto__);

(statearr_34221[(1)] = (1));

return statearr_34221;
});
var cljs$core$async$transduce_$_state_machine__33204__auto____1 = (function (state_34216){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34216);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34222){var ex__33207__auto__ = e34222;
var statearr_34223_36471 = state_34216;
(statearr_34223_36471[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34216[(4)]))){
var statearr_34224_36472 = state_34216;
(statearr_34224_36472[(1)] = cljs.core.first((state_34216[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36473 = state_34216;
state_34216 = G__36473;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33204__auto__ = function(state_34216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33204__auto____1.call(this,state_34216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33204__auto____0;
cljs$core$async$transduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33204__auto____1;
return cljs$core$async$transduce_$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34225 = f__33480__auto__();
(statearr_34225[(6)] = c__33479__auto__);

return statearr_34225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));

return c__33479__auto__;
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
var G__34229 = arguments.length;
switch (G__34229) {
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
var c__33479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34254){
var state_val_34255 = (state_34254[(1)]);
if((state_val_34255 === (7))){
var inst_34236 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
var statearr_34258_36481 = state_34254__$1;
(statearr_34258_36481[(2)] = inst_34236);

(statearr_34258_36481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (1))){
var inst_34230 = cljs.core.seq(coll);
var inst_34231 = inst_34230;
var state_34254__$1 = (function (){var statearr_34259 = state_34254;
(statearr_34259[(7)] = inst_34231);

return statearr_34259;
})();
var statearr_34260_36486 = state_34254__$1;
(statearr_34260_36486[(2)] = null);

(statearr_34260_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (4))){
var inst_34231 = (state_34254[(7)]);
var inst_34234 = cljs.core.first(inst_34231);
var state_34254__$1 = state_34254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34254__$1,(7),ch,inst_34234);
} else {
if((state_val_34255 === (13))){
var inst_34248 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
var statearr_34261_36491 = state_34254__$1;
(statearr_34261_36491[(2)] = inst_34248);

(statearr_34261_36491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (6))){
var inst_34239 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
if(cljs.core.truth_(inst_34239)){
var statearr_34262_36495 = state_34254__$1;
(statearr_34262_36495[(1)] = (8));

} else {
var statearr_34263_36496 = state_34254__$1;
(statearr_34263_36496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (3))){
var inst_34252 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34254__$1,inst_34252);
} else {
if((state_val_34255 === (12))){
var state_34254__$1 = state_34254;
var statearr_34264_36497 = state_34254__$1;
(statearr_34264_36497[(2)] = null);

(statearr_34264_36497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (2))){
var inst_34231 = (state_34254[(7)]);
var state_34254__$1 = state_34254;
if(cljs.core.truth_(inst_34231)){
var statearr_34265_36498 = state_34254__$1;
(statearr_34265_36498[(1)] = (4));

} else {
var statearr_34266_36499 = state_34254__$1;
(statearr_34266_36499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (11))){
var inst_34245 = cljs.core.async.close_BANG_(ch);
var state_34254__$1 = state_34254;
var statearr_34268_36500 = state_34254__$1;
(statearr_34268_36500[(2)] = inst_34245);

(statearr_34268_36500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (9))){
var state_34254__$1 = state_34254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34271_36501 = state_34254__$1;
(statearr_34271_36501[(1)] = (11));

} else {
var statearr_34272_36502 = state_34254__$1;
(statearr_34272_36502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (5))){
var inst_34231 = (state_34254[(7)]);
var state_34254__$1 = state_34254;
var statearr_34276_36511 = state_34254__$1;
(statearr_34276_36511[(2)] = inst_34231);

(statearr_34276_36511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (10))){
var inst_34250 = (state_34254[(2)]);
var state_34254__$1 = state_34254;
var statearr_34280_36512 = state_34254__$1;
(statearr_34280_36512[(2)] = inst_34250);

(statearr_34280_36512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (8))){
var inst_34231 = (state_34254[(7)]);
var inst_34241 = cljs.core.next(inst_34231);
var inst_34231__$1 = inst_34241;
var state_34254__$1 = (function (){var statearr_34281 = state_34254;
(statearr_34281[(7)] = inst_34231__$1);

return statearr_34281;
})();
var statearr_34282_36513 = state_34254__$1;
(statearr_34282_36513[(2)] = null);

(statearr_34282_36513[(1)] = (2));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_34284 = [null,null,null,null,null,null,null,null];
(statearr_34284[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_34284[(1)] = (1));

return statearr_34284;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_34254){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34254);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34288){var ex__33207__auto__ = e34288;
var statearr_34290_36518 = state_34254;
(statearr_34290_36518[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34254[(4)]))){
var statearr_34293_36520 = state_34254;
(statearr_34293_36520[(1)] = cljs.core.first((state_34254[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36521 = state_34254;
state_34254 = G__36521;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_34254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_34254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34299 = f__33480__auto__();
(statearr_34299[(6)] = c__33479__auto__);

return statearr_34299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));

return c__33479__auto__;
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
var G__34317 = arguments.length;
switch (G__34317) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36529 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_36529(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36530 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_36530(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36532 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_36532(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36533 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_36533(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34402 = (function (ch,cs,meta34403){
this.ch = ch;
this.cs = cs;
this.meta34403 = meta34403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34404,meta34403__$1){
var self__ = this;
var _34404__$1 = this;
return (new cljs.core.async.t_cljs$core$async34402(self__.ch,self__.cs,meta34403__$1));
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34404){
var self__ = this;
var _34404__$1 = this;
return self__.meta34403;
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34403","meta34403",-156362418,null)], null);
}));

(cljs.core.async.t_cljs$core$async34402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34402");

(cljs.core.async.t_cljs$core$async34402.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34402.
 */
cljs.core.async.__GT_t_cljs$core$async34402 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34402(ch__$1,cs__$1,meta34403){
return (new cljs.core.async.t_cljs$core$async34402(ch__$1,cs__$1,meta34403));
});

}

return (new cljs.core.async.t_cljs$core$async34402(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33479__auto___36542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34603){
var state_val_34604 = (state_34603[(1)]);
if((state_val_34604 === (7))){
var inst_34599 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34605_36543 = state_34603__$1;
(statearr_34605_36543[(2)] = inst_34599);

(statearr_34605_36543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (20))){
var inst_34491 = (state_34603[(7)]);
var inst_34511 = cljs.core.first(inst_34491);
var inst_34512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34511,(0),null);
var inst_34513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34511,(1),null);
var state_34603__$1 = (function (){var statearr_34606 = state_34603;
(statearr_34606[(8)] = inst_34512);

return statearr_34606;
})();
if(cljs.core.truth_(inst_34513)){
var statearr_34607_36544 = state_34603__$1;
(statearr_34607_36544[(1)] = (22));

} else {
var statearr_34608_36545 = state_34603__$1;
(statearr_34608_36545[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (27))){
var inst_34544 = (state_34603[(9)]);
var inst_34546 = (state_34603[(10)]);
var inst_34551 = (state_34603[(11)]);
var inst_34448 = (state_34603[(12)]);
var inst_34551__$1 = cljs.core._nth(inst_34544,inst_34546);
var inst_34552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34551__$1,inst_34448,done);
var state_34603__$1 = (function (){var statearr_34609 = state_34603;
(statearr_34609[(11)] = inst_34551__$1);

return statearr_34609;
})();
if(cljs.core.truth_(inst_34552)){
var statearr_34610_36548 = state_34603__$1;
(statearr_34610_36548[(1)] = (30));

} else {
var statearr_34611_36549 = state_34603__$1;
(statearr_34611_36549[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (1))){
var state_34603__$1 = state_34603;
var statearr_34612_36550 = state_34603__$1;
(statearr_34612_36550[(2)] = null);

(statearr_34612_36550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (24))){
var inst_34491 = (state_34603[(7)]);
var inst_34521 = (state_34603[(2)]);
var inst_34522 = cljs.core.next(inst_34491);
var inst_34461 = inst_34522;
var inst_34462 = null;
var inst_34463 = (0);
var inst_34464 = (0);
var state_34603__$1 = (function (){var statearr_34613 = state_34603;
(statearr_34613[(13)] = inst_34461);

(statearr_34613[(14)] = inst_34464);

(statearr_34613[(15)] = inst_34463);

(statearr_34613[(16)] = inst_34462);

(statearr_34613[(17)] = inst_34521);

return statearr_34613;
})();
var statearr_34614_36551 = state_34603__$1;
(statearr_34614_36551[(2)] = null);

(statearr_34614_36551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (39))){
var state_34603__$1 = state_34603;
var statearr_34618_36552 = state_34603__$1;
(statearr_34618_36552[(2)] = null);

(statearr_34618_36552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (4))){
var inst_34448 = (state_34603[(12)]);
var inst_34448__$1 = (state_34603[(2)]);
var inst_34450 = (inst_34448__$1 == null);
var state_34603__$1 = (function (){var statearr_34619 = state_34603;
(statearr_34619[(12)] = inst_34448__$1);

return statearr_34619;
})();
if(cljs.core.truth_(inst_34450)){
var statearr_34620_36553 = state_34603__$1;
(statearr_34620_36553[(1)] = (5));

} else {
var statearr_34621_36554 = state_34603__$1;
(statearr_34621_36554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (15))){
var inst_34461 = (state_34603[(13)]);
var inst_34464 = (state_34603[(14)]);
var inst_34463 = (state_34603[(15)]);
var inst_34462 = (state_34603[(16)]);
var inst_34484 = (state_34603[(2)]);
var inst_34485 = (inst_34464 + (1));
var tmp34615 = inst_34461;
var tmp34616 = inst_34463;
var tmp34617 = inst_34462;
var inst_34461__$1 = tmp34615;
var inst_34462__$1 = tmp34617;
var inst_34463__$1 = tmp34616;
var inst_34464__$1 = inst_34485;
var state_34603__$1 = (function (){var statearr_34624 = state_34603;
(statearr_34624[(13)] = inst_34461__$1);

(statearr_34624[(14)] = inst_34464__$1);

(statearr_34624[(15)] = inst_34463__$1);

(statearr_34624[(16)] = inst_34462__$1);

(statearr_34624[(18)] = inst_34484);

return statearr_34624;
})();
var statearr_34625_36555 = state_34603__$1;
(statearr_34625_36555[(2)] = null);

(statearr_34625_36555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (21))){
var inst_34525 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34637_36556 = state_34603__$1;
(statearr_34637_36556[(2)] = inst_34525);

(statearr_34637_36556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (31))){
var inst_34551 = (state_34603[(11)]);
var inst_34555 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34551);
var state_34603__$1 = state_34603;
var statearr_34639_36557 = state_34603__$1;
(statearr_34639_36557[(2)] = inst_34555);

(statearr_34639_36557[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (32))){
var inst_34543 = (state_34603[(19)]);
var inst_34544 = (state_34603[(9)]);
var inst_34546 = (state_34603[(10)]);
var inst_34545 = (state_34603[(20)]);
var inst_34557 = (state_34603[(2)]);
var inst_34558 = (inst_34546 + (1));
var tmp34630 = inst_34543;
var tmp34631 = inst_34544;
var tmp34632 = inst_34545;
var inst_34543__$1 = tmp34630;
var inst_34544__$1 = tmp34631;
var inst_34545__$1 = tmp34632;
var inst_34546__$1 = inst_34558;
var state_34603__$1 = (function (){var statearr_34644 = state_34603;
(statearr_34644[(19)] = inst_34543__$1);

(statearr_34644[(9)] = inst_34544__$1);

(statearr_34644[(10)] = inst_34546__$1);

(statearr_34644[(20)] = inst_34545__$1);

(statearr_34644[(21)] = inst_34557);

return statearr_34644;
})();
var statearr_34648_36558 = state_34603__$1;
(statearr_34648_36558[(2)] = null);

(statearr_34648_36558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (40))){
var inst_34571 = (state_34603[(22)]);
var inst_34576 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34571);
var state_34603__$1 = state_34603;
var statearr_34650_36561 = state_34603__$1;
(statearr_34650_36561[(2)] = inst_34576);

(statearr_34650_36561[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (33))){
var inst_34561 = (state_34603[(23)]);
var inst_34563 = cljs.core.chunked_seq_QMARK_(inst_34561);
var state_34603__$1 = state_34603;
if(inst_34563){
var statearr_34654_36562 = state_34603__$1;
(statearr_34654_36562[(1)] = (36));

} else {
var statearr_34656_36563 = state_34603__$1;
(statearr_34656_36563[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (13))){
var inst_34477 = (state_34603[(24)]);
var inst_34480 = cljs.core.async.close_BANG_(inst_34477);
var state_34603__$1 = state_34603;
var statearr_34660_36567 = state_34603__$1;
(statearr_34660_36567[(2)] = inst_34480);

(statearr_34660_36567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (22))){
var inst_34512 = (state_34603[(8)]);
var inst_34518 = cljs.core.async.close_BANG_(inst_34512);
var state_34603__$1 = state_34603;
var statearr_34662_36568 = state_34603__$1;
(statearr_34662_36568[(2)] = inst_34518);

(statearr_34662_36568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (36))){
var inst_34561 = (state_34603[(23)]);
var inst_34565 = cljs.core.chunk_first(inst_34561);
var inst_34566 = cljs.core.chunk_rest(inst_34561);
var inst_34567 = cljs.core.count(inst_34565);
var inst_34543 = inst_34566;
var inst_34544 = inst_34565;
var inst_34545 = inst_34567;
var inst_34546 = (0);
var state_34603__$1 = (function (){var statearr_34667 = state_34603;
(statearr_34667[(19)] = inst_34543);

(statearr_34667[(9)] = inst_34544);

(statearr_34667[(10)] = inst_34546);

(statearr_34667[(20)] = inst_34545);

return statearr_34667;
})();
var statearr_34668_36570 = state_34603__$1;
(statearr_34668_36570[(2)] = null);

(statearr_34668_36570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (41))){
var inst_34561 = (state_34603[(23)]);
var inst_34578 = (state_34603[(2)]);
var inst_34579 = cljs.core.next(inst_34561);
var inst_34543 = inst_34579;
var inst_34544 = null;
var inst_34545 = (0);
var inst_34546 = (0);
var state_34603__$1 = (function (){var statearr_34670 = state_34603;
(statearr_34670[(19)] = inst_34543);

(statearr_34670[(9)] = inst_34544);

(statearr_34670[(25)] = inst_34578);

(statearr_34670[(10)] = inst_34546);

(statearr_34670[(20)] = inst_34545);

return statearr_34670;
})();
var statearr_34671_36572 = state_34603__$1;
(statearr_34671_36572[(2)] = null);

(statearr_34671_36572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (43))){
var state_34603__$1 = state_34603;
var statearr_34672_36574 = state_34603__$1;
(statearr_34672_36574[(2)] = null);

(statearr_34672_36574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (29))){
var inst_34587 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34677_36575 = state_34603__$1;
(statearr_34677_36575[(2)] = inst_34587);

(statearr_34677_36575[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (44))){
var inst_34596 = (state_34603[(2)]);
var state_34603__$1 = (function (){var statearr_34681 = state_34603;
(statearr_34681[(26)] = inst_34596);

return statearr_34681;
})();
var statearr_34683_36577 = state_34603__$1;
(statearr_34683_36577[(2)] = null);

(statearr_34683_36577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (6))){
var inst_34535 = (state_34603[(27)]);
var inst_34534 = cljs.core.deref(cs);
var inst_34535__$1 = cljs.core.keys(inst_34534);
var inst_34536 = cljs.core.count(inst_34535__$1);
var inst_34537 = cljs.core.reset_BANG_(dctr,inst_34536);
var inst_34542 = cljs.core.seq(inst_34535__$1);
var inst_34543 = inst_34542;
var inst_34544 = null;
var inst_34545 = (0);
var inst_34546 = (0);
var state_34603__$1 = (function (){var statearr_34688 = state_34603;
(statearr_34688[(27)] = inst_34535__$1);

(statearr_34688[(19)] = inst_34543);

(statearr_34688[(9)] = inst_34544);

(statearr_34688[(10)] = inst_34546);

(statearr_34688[(20)] = inst_34545);

(statearr_34688[(28)] = inst_34537);

return statearr_34688;
})();
var statearr_34689_36580 = state_34603__$1;
(statearr_34689_36580[(2)] = null);

(statearr_34689_36580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (28))){
var inst_34543 = (state_34603[(19)]);
var inst_34561 = (state_34603[(23)]);
var inst_34561__$1 = cljs.core.seq(inst_34543);
var state_34603__$1 = (function (){var statearr_34693 = state_34603;
(statearr_34693[(23)] = inst_34561__$1);

return statearr_34693;
})();
if(inst_34561__$1){
var statearr_34695_36581 = state_34603__$1;
(statearr_34695_36581[(1)] = (33));

} else {
var statearr_34696_36582 = state_34603__$1;
(statearr_34696_36582[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (25))){
var inst_34546 = (state_34603[(10)]);
var inst_34545 = (state_34603[(20)]);
var inst_34548 = (inst_34546 < inst_34545);
var inst_34549 = inst_34548;
var state_34603__$1 = state_34603;
if(cljs.core.truth_(inst_34549)){
var statearr_34697_36583 = state_34603__$1;
(statearr_34697_36583[(1)] = (27));

} else {
var statearr_34698_36584 = state_34603__$1;
(statearr_34698_36584[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (34))){
var state_34603__$1 = state_34603;
var statearr_34703_36586 = state_34603__$1;
(statearr_34703_36586[(2)] = null);

(statearr_34703_36586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (17))){
var state_34603__$1 = state_34603;
var statearr_34704_36588 = state_34603__$1;
(statearr_34704_36588[(2)] = null);

(statearr_34704_36588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (3))){
var inst_34601 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34603__$1,inst_34601);
} else {
if((state_val_34604 === (12))){
var inst_34530 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34706_36589 = state_34603__$1;
(statearr_34706_36589[(2)] = inst_34530);

(statearr_34706_36589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (2))){
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34603__$1,(4),ch);
} else {
if((state_val_34604 === (23))){
var state_34603__$1 = state_34603;
var statearr_34707_36590 = state_34603__$1;
(statearr_34707_36590[(2)] = null);

(statearr_34707_36590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (35))){
var inst_34585 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34708_36592 = state_34603__$1;
(statearr_34708_36592[(2)] = inst_34585);

(statearr_34708_36592[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (19))){
var inst_34491 = (state_34603[(7)]);
var inst_34499 = cljs.core.chunk_first(inst_34491);
var inst_34501 = cljs.core.chunk_rest(inst_34491);
var inst_34502 = cljs.core.count(inst_34499);
var inst_34461 = inst_34501;
var inst_34462 = inst_34499;
var inst_34463 = inst_34502;
var inst_34464 = (0);
var state_34603__$1 = (function (){var statearr_34709 = state_34603;
(statearr_34709[(13)] = inst_34461);

(statearr_34709[(14)] = inst_34464);

(statearr_34709[(15)] = inst_34463);

(statearr_34709[(16)] = inst_34462);

return statearr_34709;
})();
var statearr_34714_36599 = state_34603__$1;
(statearr_34714_36599[(2)] = null);

(statearr_34714_36599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (11))){
var inst_34461 = (state_34603[(13)]);
var inst_34491 = (state_34603[(7)]);
var inst_34491__$1 = cljs.core.seq(inst_34461);
var state_34603__$1 = (function (){var statearr_34719 = state_34603;
(statearr_34719[(7)] = inst_34491__$1);

return statearr_34719;
})();
if(inst_34491__$1){
var statearr_34720_36600 = state_34603__$1;
(statearr_34720_36600[(1)] = (16));

} else {
var statearr_34721_36601 = state_34603__$1;
(statearr_34721_36601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (9))){
var inst_34532 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34722_36604 = state_34603__$1;
(statearr_34722_36604[(2)] = inst_34532);

(statearr_34722_36604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (5))){
var inst_34458 = cljs.core.deref(cs);
var inst_34459 = cljs.core.seq(inst_34458);
var inst_34461 = inst_34459;
var inst_34462 = null;
var inst_34463 = (0);
var inst_34464 = (0);
var state_34603__$1 = (function (){var statearr_34727 = state_34603;
(statearr_34727[(13)] = inst_34461);

(statearr_34727[(14)] = inst_34464);

(statearr_34727[(15)] = inst_34463);

(statearr_34727[(16)] = inst_34462);

return statearr_34727;
})();
var statearr_34728_36608 = state_34603__$1;
(statearr_34728_36608[(2)] = null);

(statearr_34728_36608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (14))){
var state_34603__$1 = state_34603;
var statearr_34733_36610 = state_34603__$1;
(statearr_34733_36610[(2)] = null);

(statearr_34733_36610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (45))){
var inst_34593 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34734_36611 = state_34603__$1;
(statearr_34734_36611[(2)] = inst_34593);

(statearr_34734_36611[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (26))){
var inst_34535 = (state_34603[(27)]);
var inst_34589 = (state_34603[(2)]);
var inst_34590 = cljs.core.seq(inst_34535);
var state_34603__$1 = (function (){var statearr_34739 = state_34603;
(statearr_34739[(29)] = inst_34589);

return statearr_34739;
})();
if(inst_34590){
var statearr_34740_36615 = state_34603__$1;
(statearr_34740_36615[(1)] = (42));

} else {
var statearr_34741_36616 = state_34603__$1;
(statearr_34741_36616[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (16))){
var inst_34491 = (state_34603[(7)]);
var inst_34497 = cljs.core.chunked_seq_QMARK_(inst_34491);
var state_34603__$1 = state_34603;
if(inst_34497){
var statearr_34742_36621 = state_34603__$1;
(statearr_34742_36621[(1)] = (19));

} else {
var statearr_34744_36622 = state_34603__$1;
(statearr_34744_36622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (38))){
var inst_34582 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34745_36623 = state_34603__$1;
(statearr_34745_36623[(2)] = inst_34582);

(statearr_34745_36623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (30))){
var state_34603__$1 = state_34603;
var statearr_34746_36630 = state_34603__$1;
(statearr_34746_36630[(2)] = null);

(statearr_34746_36630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (10))){
var inst_34464 = (state_34603[(14)]);
var inst_34462 = (state_34603[(16)]);
var inst_34475 = cljs.core._nth(inst_34462,inst_34464);
var inst_34477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34475,(0),null);
var inst_34478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34475,(1),null);
var state_34603__$1 = (function (){var statearr_34751 = state_34603;
(statearr_34751[(24)] = inst_34477);

return statearr_34751;
})();
if(cljs.core.truth_(inst_34478)){
var statearr_34755_36631 = state_34603__$1;
(statearr_34755_36631[(1)] = (13));

} else {
var statearr_34757_36632 = state_34603__$1;
(statearr_34757_36632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (18))){
var inst_34528 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34758_36633 = state_34603__$1;
(statearr_34758_36633[(2)] = inst_34528);

(statearr_34758_36633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (42))){
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34603__$1,(45),dchan);
} else {
if((state_val_34604 === (37))){
var inst_34571 = (state_34603[(22)]);
var inst_34561 = (state_34603[(23)]);
var inst_34448 = (state_34603[(12)]);
var inst_34571__$1 = cljs.core.first(inst_34561);
var inst_34572 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34571__$1,inst_34448,done);
var state_34603__$1 = (function (){var statearr_34763 = state_34603;
(statearr_34763[(22)] = inst_34571__$1);

return statearr_34763;
})();
if(cljs.core.truth_(inst_34572)){
var statearr_34767_36634 = state_34603__$1;
(statearr_34767_36634[(1)] = (39));

} else {
var statearr_34768_36635 = state_34603__$1;
(statearr_34768_36635[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (8))){
var inst_34464 = (state_34603[(14)]);
var inst_34463 = (state_34603[(15)]);
var inst_34466 = (inst_34464 < inst_34463);
var inst_34467 = inst_34466;
var state_34603__$1 = state_34603;
if(cljs.core.truth_(inst_34467)){
var statearr_34770_36636 = state_34603__$1;
(statearr_34770_36636[(1)] = (10));

} else {
var statearr_34771_36637 = state_34603__$1;
(statearr_34771_36637[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33204__auto__ = null;
var cljs$core$async$mult_$_state_machine__33204__auto____0 = (function (){
var statearr_34776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34776[(0)] = cljs$core$async$mult_$_state_machine__33204__auto__);

(statearr_34776[(1)] = (1));

return statearr_34776;
});
var cljs$core$async$mult_$_state_machine__33204__auto____1 = (function (state_34603){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34603);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34777){var ex__33207__auto__ = e34777;
var statearr_34778_36641 = state_34603;
(statearr_34778_36641[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34603[(4)]))){
var statearr_34779_36642 = state_34603;
(statearr_34779_36642[(1)] = cljs.core.first((state_34603[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36644 = state_34603;
state_34603 = G__36644;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33204__auto__ = function(state_34603){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33204__auto____1.call(this,state_34603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33204__auto____0;
cljs$core$async$mult_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33204__auto____1;
return cljs$core$async$mult_$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34784 = f__33480__auto__();
(statearr_34784[(6)] = c__33479__auto___36542);

return statearr_34784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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
var G__34787 = arguments.length;
switch (G__34787) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36655 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36655(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36660 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36660(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36661 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36661(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36662 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36662(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36671 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36671(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36674 = arguments.length;
var i__5770__auto___36675 = (0);
while(true){
if((i__5770__auto___36675 < len__5769__auto___36674)){
args__5775__auto__.push((arguments[i__5770__auto___36675]));

var G__36676 = (i__5770__auto___36675 + (1));
i__5770__auto___36675 = G__36676;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34800){
var map__34801 = p__34800;
var map__34801__$1 = cljs.core.__destructure_map(map__34801);
var opts = map__34801__$1;
var statearr_34802_36678 = state;
(statearr_34802_36678[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34803_36680 = state;
(statearr_34803_36680[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_34804_36681 = state;
(statearr_34804_36681[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34794){
var G__34795 = cljs.core.first(seq34794);
var seq34794__$1 = cljs.core.next(seq34794);
var G__34796 = cljs.core.first(seq34794__$1);
var seq34794__$2 = cljs.core.next(seq34794__$1);
var G__34797 = cljs.core.first(seq34794__$2);
var seq34794__$3 = cljs.core.next(seq34794__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34795,G__34796,G__34797,seq34794__$3);
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
var c__33479__auto___36699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_34925){
var state_val_34926 = (state_34925[(1)]);
if((state_val_34926 === (7))){
var inst_34881 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34881)){
var statearr_34927_36700 = state_34925__$1;
(statearr_34927_36700[(1)] = (8));

} else {
var statearr_34928_36701 = state_34925__$1;
(statearr_34928_36701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (20))){
var inst_34874 = (state_34925[(7)]);
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34925__$1,(23),out,inst_34874);
} else {
if((state_val_34926 === (1))){
var inst_34851 = calc_state();
var inst_34852 = cljs.core.__destructure_map(inst_34851);
var inst_34853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34852,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34852,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34852,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34859 = inst_34851;
var state_34925__$1 = (function (){var statearr_34933 = state_34925;
(statearr_34933[(8)] = inst_34857);

(statearr_34933[(9)] = inst_34858);

(statearr_34933[(10)] = inst_34859);

(statearr_34933[(11)] = inst_34853);

return statearr_34933;
})();
var statearr_34936_36704 = state_34925__$1;
(statearr_34936_36704[(2)] = null);

(statearr_34936_36704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (24))){
var inst_34862 = (state_34925[(12)]);
var inst_34859 = inst_34862;
var state_34925__$1 = (function (){var statearr_34938 = state_34925;
(statearr_34938[(10)] = inst_34859);

return statearr_34938;
})();
var statearr_34939_36707 = state_34925__$1;
(statearr_34939_36707[(2)] = null);

(statearr_34939_36707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (4))){
var inst_34876 = (state_34925[(13)]);
var inst_34874 = (state_34925[(7)]);
var inst_34873 = (state_34925[(2)]);
var inst_34874__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34873,(0),null);
var inst_34875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34873,(1),null);
var inst_34876__$1 = (inst_34874__$1 == null);
var state_34925__$1 = (function (){var statearr_34941 = state_34925;
(statearr_34941[(13)] = inst_34876__$1);

(statearr_34941[(14)] = inst_34875);

(statearr_34941[(7)] = inst_34874__$1);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34876__$1)){
var statearr_34942_36709 = state_34925__$1;
(statearr_34942_36709[(1)] = (5));

} else {
var statearr_34943_36711 = state_34925__$1;
(statearr_34943_36711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (15))){
var inst_34863 = (state_34925[(15)]);
var inst_34895 = (state_34925[(16)]);
var inst_34895__$1 = cljs.core.empty_QMARK_(inst_34863);
var state_34925__$1 = (function (){var statearr_34944 = state_34925;
(statearr_34944[(16)] = inst_34895__$1);

return statearr_34944;
})();
if(inst_34895__$1){
var statearr_34945_36713 = state_34925__$1;
(statearr_34945_36713[(1)] = (17));

} else {
var statearr_34946_36714 = state_34925__$1;
(statearr_34946_36714[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (21))){
var inst_34862 = (state_34925[(12)]);
var inst_34859 = inst_34862;
var state_34925__$1 = (function (){var statearr_34947 = state_34925;
(statearr_34947[(10)] = inst_34859);

return statearr_34947;
})();
var statearr_34948_36722 = state_34925__$1;
(statearr_34948_36722[(2)] = null);

(statearr_34948_36722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (13))){
var inst_34888 = (state_34925[(2)]);
var inst_34889 = calc_state();
var inst_34859 = inst_34889;
var state_34925__$1 = (function (){var statearr_34949 = state_34925;
(statearr_34949[(10)] = inst_34859);

(statearr_34949[(17)] = inst_34888);

return statearr_34949;
})();
var statearr_34950_36723 = state_34925__$1;
(statearr_34950_36723[(2)] = null);

(statearr_34950_36723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (22))){
var inst_34919 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34953_36724 = state_34925__$1;
(statearr_34953_36724[(2)] = inst_34919);

(statearr_34953_36724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (6))){
var inst_34875 = (state_34925[(14)]);
var inst_34879 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34875,change);
var state_34925__$1 = state_34925;
var statearr_34954_36725 = state_34925__$1;
(statearr_34954_36725[(2)] = inst_34879);

(statearr_34954_36725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (25))){
var state_34925__$1 = state_34925;
var statearr_34955_36726 = state_34925__$1;
(statearr_34955_36726[(2)] = null);

(statearr_34955_36726[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (17))){
var inst_34875 = (state_34925[(14)]);
var inst_34864 = (state_34925[(18)]);
var inst_34897 = (inst_34864.cljs$core$IFn$_invoke$arity$1 ? inst_34864.cljs$core$IFn$_invoke$arity$1(inst_34875) : inst_34864.call(null,inst_34875));
var inst_34898 = cljs.core.not(inst_34897);
var state_34925__$1 = state_34925;
var statearr_34958_36727 = state_34925__$1;
(statearr_34958_36727[(2)] = inst_34898);

(statearr_34958_36727[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (3))){
var inst_34923 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34925__$1,inst_34923);
} else {
if((state_val_34926 === (12))){
var state_34925__$1 = state_34925;
var statearr_34962_36728 = state_34925__$1;
(statearr_34962_36728[(2)] = null);

(statearr_34962_36728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (2))){
var inst_34862 = (state_34925[(12)]);
var inst_34859 = (state_34925[(10)]);
var inst_34862__$1 = cljs.core.__destructure_map(inst_34859);
var inst_34863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34862__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34862__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34862__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34925__$1 = (function (){var statearr_34963 = state_34925;
(statearr_34963[(15)] = inst_34863);

(statearr_34963[(12)] = inst_34862__$1);

(statearr_34963[(18)] = inst_34864);

return statearr_34963;
})();
return cljs.core.async.ioc_alts_BANG_(state_34925__$1,(4),inst_34865);
} else {
if((state_val_34926 === (23))){
var inst_34906 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34906)){
var statearr_34964_36731 = state_34925__$1;
(statearr_34964_36731[(1)] = (24));

} else {
var statearr_34965_36732 = state_34925__$1;
(statearr_34965_36732[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (19))){
var inst_34901 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34966_36733 = state_34925__$1;
(statearr_34966_36733[(2)] = inst_34901);

(statearr_34966_36733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (11))){
var inst_34875 = (state_34925[(14)]);
var inst_34885 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34875);
var state_34925__$1 = state_34925;
var statearr_34967_36735 = state_34925__$1;
(statearr_34967_36735[(2)] = inst_34885);

(statearr_34967_36735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (9))){
var inst_34863 = (state_34925[(15)]);
var inst_34892 = (state_34925[(19)]);
var inst_34875 = (state_34925[(14)]);
var inst_34892__$1 = (inst_34863.cljs$core$IFn$_invoke$arity$1 ? inst_34863.cljs$core$IFn$_invoke$arity$1(inst_34875) : inst_34863.call(null,inst_34875));
var state_34925__$1 = (function (){var statearr_34968 = state_34925;
(statearr_34968[(19)] = inst_34892__$1);

return statearr_34968;
})();
if(cljs.core.truth_(inst_34892__$1)){
var statearr_34969_36739 = state_34925__$1;
(statearr_34969_36739[(1)] = (14));

} else {
var statearr_34970_36740 = state_34925__$1;
(statearr_34970_36740[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (5))){
var inst_34876 = (state_34925[(13)]);
var state_34925__$1 = state_34925;
var statearr_34971_36741 = state_34925__$1;
(statearr_34971_36741[(2)] = inst_34876);

(statearr_34971_36741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (14))){
var inst_34892 = (state_34925[(19)]);
var state_34925__$1 = state_34925;
var statearr_34972_36743 = state_34925__$1;
(statearr_34972_36743[(2)] = inst_34892);

(statearr_34972_36743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (26))){
var inst_34912 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34973_36745 = state_34925__$1;
(statearr_34973_36745[(2)] = inst_34912);

(statearr_34973_36745[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (16))){
var inst_34903 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34903)){
var statearr_34978_36746 = state_34925__$1;
(statearr_34978_36746[(1)] = (20));

} else {
var statearr_34979_36747 = state_34925__$1;
(statearr_34979_36747[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (10))){
var inst_34921 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34981_36749 = state_34925__$1;
(statearr_34981_36749[(2)] = inst_34921);

(statearr_34981_36749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (18))){
var inst_34895 = (state_34925[(16)]);
var state_34925__$1 = state_34925;
var statearr_34982_36755 = state_34925__$1;
(statearr_34982_36755[(2)] = inst_34895);

(statearr_34982_36755[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (8))){
var inst_34874 = (state_34925[(7)]);
var inst_34883 = (inst_34874 == null);
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34883)){
var statearr_34984_36756 = state_34925__$1;
(statearr_34984_36756[(1)] = (11));

} else {
var statearr_34986_36757 = state_34925__$1;
(statearr_34986_36757[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__33204__auto__ = null;
var cljs$core$async$mix_$_state_machine__33204__auto____0 = (function (){
var statearr_34987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34987[(0)] = cljs$core$async$mix_$_state_machine__33204__auto__);

(statearr_34987[(1)] = (1));

return statearr_34987;
});
var cljs$core$async$mix_$_state_machine__33204__auto____1 = (function (state_34925){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34925);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34988){var ex__33207__auto__ = e34988;
var statearr_34989_36758 = state_34925;
(statearr_34989_36758[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34925[(4)]))){
var statearr_34991_36759 = state_34925;
(statearr_34991_36759[(1)] = cljs.core.first((state_34925[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36760 = state_34925;
state_34925 = G__36760;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33204__auto__ = function(state_34925){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33204__auto____1.call(this,state_34925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33204__auto____0;
cljs$core$async$mix_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33204__auto____1;
return cljs$core$async$mix_$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_34996 = f__33480__auto__();
(statearr_34996[(6)] = c__33479__auto___36699);

return statearr_34996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36761 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36761(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36763 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36763(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36765 = (function() {
var G__36766 = null;
var G__36766__1 = (function (p){
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
var G__36766__2 = (function (p,v){
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
G__36766 = function(p,v){
switch(arguments.length){
case 1:
return G__36766__1.call(this,p);
case 2:
return G__36766__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36766.cljs$core$IFn$_invoke$arity$1 = G__36766__1;
G__36766.cljs$core$IFn$_invoke$arity$2 = G__36766__2;
return G__36766;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35011 = arguments.length;
switch (G__35011) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36765(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36765(p,v);
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
var G__35014 = arguments.length;
switch (G__35014) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35012_SHARP_){
if(cljs.core.truth_((p1__35012_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35012_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35012_SHARP_.call(null,topic)))){
return p1__35012_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35012_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35016 = meta35016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35017,meta35016__$1){
var self__ = this;
var _35017__$1 = this;
return (new cljs.core.async.t_cljs$core$async35015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35016__$1));
}));

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35017){
var self__ = this;
var _35017__$1 = this;
return self__.meta35016;
}));

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35016","meta35016",-554254299,null)], null);
}));

(cljs.core.async.t_cljs$core$async35015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35015");

(cljs.core.async.t_cljs$core$async35015.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35015.
 */
cljs.core.async.__GT_t_cljs$core$async35015 = (function cljs$core$async$__GT_t_cljs$core$async35015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35016){
return (new cljs.core.async.t_cljs$core$async35015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35016));
});

}

return (new cljs.core.async.t_cljs$core$async35015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33479__auto___36773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35093){
var state_val_35094 = (state_35093[(1)]);
if((state_val_35094 === (7))){
var inst_35086 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35095_36775 = state_35093__$1;
(statearr_35095_36775[(2)] = inst_35086);

(statearr_35095_36775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (20))){
var state_35093__$1 = state_35093;
var statearr_35096_36779 = state_35093__$1;
(statearr_35096_36779[(2)] = null);

(statearr_35096_36779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (1))){
var state_35093__$1 = state_35093;
var statearr_35097_36780 = state_35093__$1;
(statearr_35097_36780[(2)] = null);

(statearr_35097_36780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (24))){
var inst_35069 = (state_35093[(7)]);
var inst_35078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35069);
var state_35093__$1 = state_35093;
var statearr_35102_36781 = state_35093__$1;
(statearr_35102_36781[(2)] = inst_35078);

(statearr_35102_36781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (4))){
var inst_35020 = (state_35093[(8)]);
var inst_35020__$1 = (state_35093[(2)]);
var inst_35021 = (inst_35020__$1 == null);
var state_35093__$1 = (function (){var statearr_35103 = state_35093;
(statearr_35103[(8)] = inst_35020__$1);

return statearr_35103;
})();
if(cljs.core.truth_(inst_35021)){
var statearr_35104_36782 = state_35093__$1;
(statearr_35104_36782[(1)] = (5));

} else {
var statearr_35105_36783 = state_35093__$1;
(statearr_35105_36783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (15))){
var inst_35063 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35106_36784 = state_35093__$1;
(statearr_35106_36784[(2)] = inst_35063);

(statearr_35106_36784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (21))){
var inst_35083 = (state_35093[(2)]);
var state_35093__$1 = (function (){var statearr_35107 = state_35093;
(statearr_35107[(9)] = inst_35083);

return statearr_35107;
})();
var statearr_35108_36785 = state_35093__$1;
(statearr_35108_36785[(2)] = null);

(statearr_35108_36785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (13))){
var inst_35045 = (state_35093[(10)]);
var inst_35047 = cljs.core.chunked_seq_QMARK_(inst_35045);
var state_35093__$1 = state_35093;
if(inst_35047){
var statearr_35109_36786 = state_35093__$1;
(statearr_35109_36786[(1)] = (16));

} else {
var statearr_35110_36787 = state_35093__$1;
(statearr_35110_36787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (22))){
var inst_35075 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
if(cljs.core.truth_(inst_35075)){
var statearr_35111_36788 = state_35093__$1;
(statearr_35111_36788[(1)] = (23));

} else {
var statearr_35112_36789 = state_35093__$1;
(statearr_35112_36789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (6))){
var inst_35020 = (state_35093[(8)]);
var inst_35071 = (state_35093[(11)]);
var inst_35069 = (state_35093[(7)]);
var inst_35069__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35020) : topic_fn.call(null,inst_35020));
var inst_35070 = cljs.core.deref(mults);
var inst_35071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35070,inst_35069__$1);
var state_35093__$1 = (function (){var statearr_35113 = state_35093;
(statearr_35113[(11)] = inst_35071__$1);

(statearr_35113[(7)] = inst_35069__$1);

return statearr_35113;
})();
if(cljs.core.truth_(inst_35071__$1)){
var statearr_35114_36790 = state_35093__$1;
(statearr_35114_36790[(1)] = (19));

} else {
var statearr_35115_36791 = state_35093__$1;
(statearr_35115_36791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (25))){
var inst_35080 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35116_36794 = state_35093__$1;
(statearr_35116_36794[(2)] = inst_35080);

(statearr_35116_36794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (17))){
var inst_35045 = (state_35093[(10)]);
var inst_35054 = cljs.core.first(inst_35045);
var inst_35055 = cljs.core.async.muxch_STAR_(inst_35054);
var inst_35056 = cljs.core.async.close_BANG_(inst_35055);
var inst_35057 = cljs.core.next(inst_35045);
var inst_35030 = inst_35057;
var inst_35031 = null;
var inst_35032 = (0);
var inst_35033 = (0);
var state_35093__$1 = (function (){var statearr_35117 = state_35093;
(statearr_35117[(12)] = inst_35033);

(statearr_35117[(13)] = inst_35032);

(statearr_35117[(14)] = inst_35056);

(statearr_35117[(15)] = inst_35030);

(statearr_35117[(16)] = inst_35031);

return statearr_35117;
})();
var statearr_35118_36802 = state_35093__$1;
(statearr_35118_36802[(2)] = null);

(statearr_35118_36802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (3))){
var inst_35088 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35093__$1,inst_35088);
} else {
if((state_val_35094 === (12))){
var inst_35065 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35133_36808 = state_35093__$1;
(statearr_35133_36808[(2)] = inst_35065);

(statearr_35133_36808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (2))){
var state_35093__$1 = state_35093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35093__$1,(4),ch);
} else {
if((state_val_35094 === (23))){
var state_35093__$1 = state_35093;
var statearr_35140_36809 = state_35093__$1;
(statearr_35140_36809[(2)] = null);

(statearr_35140_36809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (19))){
var inst_35020 = (state_35093[(8)]);
var inst_35071 = (state_35093[(11)]);
var inst_35073 = cljs.core.async.muxch_STAR_(inst_35071);
var state_35093__$1 = state_35093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35093__$1,(22),inst_35073,inst_35020);
} else {
if((state_val_35094 === (11))){
var inst_35030 = (state_35093[(15)]);
var inst_35045 = (state_35093[(10)]);
var inst_35045__$1 = cljs.core.seq(inst_35030);
var state_35093__$1 = (function (){var statearr_35141 = state_35093;
(statearr_35141[(10)] = inst_35045__$1);

return statearr_35141;
})();
if(inst_35045__$1){
var statearr_35142_36813 = state_35093__$1;
(statearr_35142_36813[(1)] = (13));

} else {
var statearr_35143_36814 = state_35093__$1;
(statearr_35143_36814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (9))){
var inst_35067 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35144_36816 = state_35093__$1;
(statearr_35144_36816[(2)] = inst_35067);

(statearr_35144_36816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (5))){
var inst_35027 = cljs.core.deref(mults);
var inst_35028 = cljs.core.vals(inst_35027);
var inst_35029 = cljs.core.seq(inst_35028);
var inst_35030 = inst_35029;
var inst_35031 = null;
var inst_35032 = (0);
var inst_35033 = (0);
var state_35093__$1 = (function (){var statearr_35159 = state_35093;
(statearr_35159[(12)] = inst_35033);

(statearr_35159[(13)] = inst_35032);

(statearr_35159[(15)] = inst_35030);

(statearr_35159[(16)] = inst_35031);

return statearr_35159;
})();
var statearr_35160_36820 = state_35093__$1;
(statearr_35160_36820[(2)] = null);

(statearr_35160_36820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (14))){
var state_35093__$1 = state_35093;
var statearr_35170_36821 = state_35093__$1;
(statearr_35170_36821[(2)] = null);

(statearr_35170_36821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (16))){
var inst_35045 = (state_35093[(10)]);
var inst_35049 = cljs.core.chunk_first(inst_35045);
var inst_35050 = cljs.core.chunk_rest(inst_35045);
var inst_35051 = cljs.core.count(inst_35049);
var inst_35030 = inst_35050;
var inst_35031 = inst_35049;
var inst_35032 = inst_35051;
var inst_35033 = (0);
var state_35093__$1 = (function (){var statearr_35171 = state_35093;
(statearr_35171[(12)] = inst_35033);

(statearr_35171[(13)] = inst_35032);

(statearr_35171[(15)] = inst_35030);

(statearr_35171[(16)] = inst_35031);

return statearr_35171;
})();
var statearr_35172_36825 = state_35093__$1;
(statearr_35172_36825[(2)] = null);

(statearr_35172_36825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (10))){
var inst_35033 = (state_35093[(12)]);
var inst_35032 = (state_35093[(13)]);
var inst_35030 = (state_35093[(15)]);
var inst_35031 = (state_35093[(16)]);
var inst_35039 = cljs.core._nth(inst_35031,inst_35033);
var inst_35040 = cljs.core.async.muxch_STAR_(inst_35039);
var inst_35041 = cljs.core.async.close_BANG_(inst_35040);
var inst_35042 = (inst_35033 + (1));
var tmp35161 = inst_35032;
var tmp35162 = inst_35030;
var tmp35163 = inst_35031;
var inst_35030__$1 = tmp35162;
var inst_35031__$1 = tmp35163;
var inst_35032__$1 = tmp35161;
var inst_35033__$1 = inst_35042;
var state_35093__$1 = (function (){var statearr_35175 = state_35093;
(statearr_35175[(12)] = inst_35033__$1);

(statearr_35175[(13)] = inst_35032__$1);

(statearr_35175[(15)] = inst_35030__$1);

(statearr_35175[(16)] = inst_35031__$1);

(statearr_35175[(17)] = inst_35041);

return statearr_35175;
})();
var statearr_35176_36830 = state_35093__$1;
(statearr_35176_36830[(2)] = null);

(statearr_35176_36830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (18))){
var inst_35060 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35177_36831 = state_35093__$1;
(statearr_35177_36831[(2)] = inst_35060);

(statearr_35177_36831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35094 === (8))){
var inst_35033 = (state_35093[(12)]);
var inst_35032 = (state_35093[(13)]);
var inst_35036 = (inst_35033 < inst_35032);
var inst_35037 = inst_35036;
var state_35093__$1 = state_35093;
if(cljs.core.truth_(inst_35037)){
var statearr_35178_36832 = state_35093__$1;
(statearr_35178_36832[(1)] = (10));

} else {
var statearr_35180_36833 = state_35093__$1;
(statearr_35180_36833[(1)] = (11));

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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35181[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35181[(1)] = (1));

return statearr_35181;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35093){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35093);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35182){var ex__33207__auto__ = e35182;
var statearr_35183_36834 = state_35093;
(statearr_35183_36834[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35093[(4)]))){
var statearr_35184_36835 = state_35093;
(statearr_35184_36835[(1)] = cljs.core.first((state_35093[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36838 = state_35093;
state_35093 = G__36838;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35188 = f__33480__auto__();
(statearr_35188[(6)] = c__33479__auto___36773);

return statearr_35188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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
var G__35190 = arguments.length;
switch (G__35190) {
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
var G__35192 = arguments.length;
switch (G__35192) {
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
var G__35194 = arguments.length;
switch (G__35194) {
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
var c__33479__auto___36848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35248){
var state_val_35249 = (state_35248[(1)]);
if((state_val_35249 === (7))){
var state_35248__$1 = state_35248;
var statearr_35250_36852 = state_35248__$1;
(statearr_35250_36852[(2)] = null);

(statearr_35250_36852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (1))){
var state_35248__$1 = state_35248;
var statearr_35251_36854 = state_35248__$1;
(statearr_35251_36854[(2)] = null);

(statearr_35251_36854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (4))){
var inst_35205 = (state_35248[(7)]);
var inst_35206 = (state_35248[(8)]);
var inst_35208 = (inst_35206 < inst_35205);
var state_35248__$1 = state_35248;
if(cljs.core.truth_(inst_35208)){
var statearr_35252_36855 = state_35248__$1;
(statearr_35252_36855[(1)] = (6));

} else {
var statearr_35253_36856 = state_35248__$1;
(statearr_35253_36856[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (15))){
var inst_35234 = (state_35248[(9)]);
var inst_35239 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35234);
var state_35248__$1 = state_35248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35248__$1,(17),out,inst_35239);
} else {
if((state_val_35249 === (13))){
var inst_35234 = (state_35248[(9)]);
var inst_35234__$1 = (state_35248[(2)]);
var inst_35235 = cljs.core.some(cljs.core.nil_QMARK_,inst_35234__$1);
var state_35248__$1 = (function (){var statearr_35254 = state_35248;
(statearr_35254[(9)] = inst_35234__$1);

return statearr_35254;
})();
if(cljs.core.truth_(inst_35235)){
var statearr_35255_36860 = state_35248__$1;
(statearr_35255_36860[(1)] = (14));

} else {
var statearr_35256_36861 = state_35248__$1;
(statearr_35256_36861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (6))){
var state_35248__$1 = state_35248;
var statearr_35258_36862 = state_35248__$1;
(statearr_35258_36862[(2)] = null);

(statearr_35258_36862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (17))){
var inst_35241 = (state_35248[(2)]);
var state_35248__$1 = (function (){var statearr_35265 = state_35248;
(statearr_35265[(10)] = inst_35241);

return statearr_35265;
})();
var statearr_35266_36863 = state_35248__$1;
(statearr_35266_36863[(2)] = null);

(statearr_35266_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (3))){
var inst_35246 = (state_35248[(2)]);
var state_35248__$1 = state_35248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35248__$1,inst_35246);
} else {
if((state_val_35249 === (12))){
var _ = (function (){var statearr_35269 = state_35248;
(statearr_35269[(4)] = cljs.core.rest((state_35248[(4)])));

return statearr_35269;
})();
var state_35248__$1 = state_35248;
var ex35264 = (state_35248__$1[(2)]);
var statearr_35270_36866 = state_35248__$1;
(statearr_35270_36866[(5)] = ex35264);


if((ex35264 instanceof Object)){
var statearr_35271_36867 = state_35248__$1;
(statearr_35271_36867[(1)] = (11));

(statearr_35271_36867[(5)] = null);

} else {
throw ex35264;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (2))){
var inst_35199 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35205 = cnt;
var inst_35206 = (0);
var state_35248__$1 = (function (){var statearr_35272 = state_35248;
(statearr_35272[(7)] = inst_35205);

(statearr_35272[(11)] = inst_35199);

(statearr_35272[(8)] = inst_35206);

return statearr_35272;
})();
var statearr_35273_36868 = state_35248__$1;
(statearr_35273_36868[(2)] = null);

(statearr_35273_36868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (11))){
var inst_35213 = (state_35248[(2)]);
var inst_35214 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35248__$1 = (function (){var statearr_35274 = state_35248;
(statearr_35274[(12)] = inst_35213);

return statearr_35274;
})();
var statearr_35275_36873 = state_35248__$1;
(statearr_35275_36873[(2)] = inst_35214);

(statearr_35275_36873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (9))){
var inst_35206 = (state_35248[(8)]);
var _ = (function (){var statearr_35276 = state_35248;
(statearr_35276[(4)] = cljs.core.cons((12),(state_35248[(4)])));

return statearr_35276;
})();
var inst_35220 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35206) : chs__$1.call(null,inst_35206));
var inst_35221 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35206) : done.call(null,inst_35206));
var inst_35222 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35220,inst_35221);
var ___$1 = (function (){var statearr_35277 = state_35248;
(statearr_35277[(4)] = cljs.core.rest((state_35248[(4)])));

return statearr_35277;
})();
var state_35248__$1 = state_35248;
var statearr_35278_36874 = state_35248__$1;
(statearr_35278_36874[(2)] = inst_35222);

(statearr_35278_36874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (5))){
var inst_35232 = (state_35248[(2)]);
var state_35248__$1 = (function (){var statearr_35282 = state_35248;
(statearr_35282[(13)] = inst_35232);

return statearr_35282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35248__$1,(13),dchan);
} else {
if((state_val_35249 === (14))){
var inst_35237 = cljs.core.async.close_BANG_(out);
var state_35248__$1 = state_35248;
var statearr_35283_36879 = state_35248__$1;
(statearr_35283_36879[(2)] = inst_35237);

(statearr_35283_36879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (16))){
var inst_35244 = (state_35248[(2)]);
var state_35248__$1 = state_35248;
var statearr_35284_36880 = state_35248__$1;
(statearr_35284_36880[(2)] = inst_35244);

(statearr_35284_36880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (10))){
var inst_35206 = (state_35248[(8)]);
var inst_35225 = (state_35248[(2)]);
var inst_35226 = (inst_35206 + (1));
var inst_35206__$1 = inst_35226;
var state_35248__$1 = (function (){var statearr_35285 = state_35248;
(statearr_35285[(14)] = inst_35225);

(statearr_35285[(8)] = inst_35206__$1);

return statearr_35285;
})();
var statearr_35286_36881 = state_35248__$1;
(statearr_35286_36881[(2)] = null);

(statearr_35286_36881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35249 === (8))){
var inst_35230 = (state_35248[(2)]);
var state_35248__$1 = state_35248;
var statearr_35287_36882 = state_35248__$1;
(statearr_35287_36882[(2)] = inst_35230);

(statearr_35287_36882[(1)] = (5));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35298[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35298[(1)] = (1));

return statearr_35298;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35248){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35248);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35302){var ex__33207__auto__ = e35302;
var statearr_35303_36887 = state_35248;
(statearr_35303_36887[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35248[(4)]))){
var statearr_35304_36888 = state_35248;
(statearr_35304_36888[(1)] = cljs.core.first((state_35248[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36890 = state_35248;
state_35248 = G__36890;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35312 = f__33480__auto__();
(statearr_35312[(6)] = c__33479__auto___36848);

return statearr_35312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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
var G__35321 = arguments.length;
switch (G__35321) {
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
var c__33479__auto___36896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35369){
var state_val_35370 = (state_35369[(1)]);
if((state_val_35370 === (7))){
var inst_35349 = (state_35369[(7)]);
var inst_35348 = (state_35369[(8)]);
var inst_35348__$1 = (state_35369[(2)]);
var inst_35349__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35348__$1,(0),null);
var inst_35350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35348__$1,(1),null);
var inst_35351 = (inst_35349__$1 == null);
var state_35369__$1 = (function (){var statearr_35371 = state_35369;
(statearr_35371[(7)] = inst_35349__$1);

(statearr_35371[(9)] = inst_35350);

(statearr_35371[(8)] = inst_35348__$1);

return statearr_35371;
})();
if(cljs.core.truth_(inst_35351)){
var statearr_35372_36897 = state_35369__$1;
(statearr_35372_36897[(1)] = (8));

} else {
var statearr_35373_36898 = state_35369__$1;
(statearr_35373_36898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (1))){
var inst_35336 = cljs.core.vec(chs);
var inst_35337 = inst_35336;
var state_35369__$1 = (function (){var statearr_35374 = state_35369;
(statearr_35374[(10)] = inst_35337);

return statearr_35374;
})();
var statearr_35375_36900 = state_35369__$1;
(statearr_35375_36900[(2)] = null);

(statearr_35375_36900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (4))){
var inst_35337 = (state_35369[(10)]);
var state_35369__$1 = state_35369;
return cljs.core.async.ioc_alts_BANG_(state_35369__$1,(7),inst_35337);
} else {
if((state_val_35370 === (6))){
var inst_35365 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
var statearr_35376_36901 = state_35369__$1;
(statearr_35376_36901[(2)] = inst_35365);

(statearr_35376_36901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (3))){
var inst_35367 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35369__$1,inst_35367);
} else {
if((state_val_35370 === (2))){
var inst_35337 = (state_35369[(10)]);
var inst_35341 = cljs.core.count(inst_35337);
var inst_35342 = (inst_35341 > (0));
var state_35369__$1 = state_35369;
if(cljs.core.truth_(inst_35342)){
var statearr_35378_36903 = state_35369__$1;
(statearr_35378_36903[(1)] = (4));

} else {
var statearr_35379_36905 = state_35369__$1;
(statearr_35379_36905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (11))){
var inst_35337 = (state_35369[(10)]);
var inst_35358 = (state_35369[(2)]);
var tmp35377 = inst_35337;
var inst_35337__$1 = tmp35377;
var state_35369__$1 = (function (){var statearr_35380 = state_35369;
(statearr_35380[(10)] = inst_35337__$1);

(statearr_35380[(11)] = inst_35358);

return statearr_35380;
})();
var statearr_35381_36912 = state_35369__$1;
(statearr_35381_36912[(2)] = null);

(statearr_35381_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (9))){
var inst_35349 = (state_35369[(7)]);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35369__$1,(11),out,inst_35349);
} else {
if((state_val_35370 === (5))){
var inst_35363 = cljs.core.async.close_BANG_(out);
var state_35369__$1 = state_35369;
var statearr_35384_36913 = state_35369__$1;
(statearr_35384_36913[(2)] = inst_35363);

(statearr_35384_36913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (10))){
var inst_35361 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
var statearr_35385_36914 = state_35369__$1;
(statearr_35385_36914[(2)] = inst_35361);

(statearr_35385_36914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (8))){
var inst_35349 = (state_35369[(7)]);
var inst_35350 = (state_35369[(9)]);
var inst_35348 = (state_35369[(8)]);
var inst_35337 = (state_35369[(10)]);
var inst_35353 = (function (){var cs = inst_35337;
var vec__35344 = inst_35348;
var v = inst_35349;
var c = inst_35350;
return (function (p1__35316_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35316_SHARP_);
});
})();
var inst_35354 = cljs.core.filterv(inst_35353,inst_35337);
var inst_35337__$1 = inst_35354;
var state_35369__$1 = (function (){var statearr_35397 = state_35369;
(statearr_35397[(10)] = inst_35337__$1);

return statearr_35397;
})();
var statearr_35398_36916 = state_35369__$1;
(statearr_35398_36916[(2)] = null);

(statearr_35398_36916[(1)] = (2));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35400[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35400[(1)] = (1));

return statearr_35400;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35369){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35369);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35402){var ex__33207__auto__ = e35402;
var statearr_35403_36917 = state_35369;
(statearr_35403_36917[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35369[(4)]))){
var statearr_35404_36918 = state_35369;
(statearr_35404_36918[(1)] = cljs.core.first((state_35369[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36921 = state_35369;
state_35369 = G__36921;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35405 = f__33480__auto__();
(statearr_35405[(6)] = c__33479__auto___36896);

return statearr_35405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
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
var G__35407 = arguments.length;
switch (G__35407) {
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
var c__33479__auto___36930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35433){
var state_val_35434 = (state_35433[(1)]);
if((state_val_35434 === (7))){
var inst_35413 = (state_35433[(7)]);
var inst_35413__$1 = (state_35433[(2)]);
var inst_35414 = (inst_35413__$1 == null);
var inst_35415 = cljs.core.not(inst_35414);
var state_35433__$1 = (function (){var statearr_35436 = state_35433;
(statearr_35436[(7)] = inst_35413__$1);

return statearr_35436;
})();
if(inst_35415){
var statearr_35437_36935 = state_35433__$1;
(statearr_35437_36935[(1)] = (8));

} else {
var statearr_35438_36936 = state_35433__$1;
(statearr_35438_36936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (1))){
var inst_35408 = (0);
var state_35433__$1 = (function (){var statearr_35439 = state_35433;
(statearr_35439[(8)] = inst_35408);

return statearr_35439;
})();
var statearr_35440_36937 = state_35433__$1;
(statearr_35440_36937[(2)] = null);

(statearr_35440_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (4))){
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35433__$1,(7),ch);
} else {
if((state_val_35434 === (6))){
var inst_35428 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35450_36938 = state_35433__$1;
(statearr_35450_36938[(2)] = inst_35428);

(statearr_35450_36938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (3))){
var inst_35430 = (state_35433[(2)]);
var inst_35431 = cljs.core.async.close_BANG_(out);
var state_35433__$1 = (function (){var statearr_35451 = state_35433;
(statearr_35451[(9)] = inst_35430);

return statearr_35451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35433__$1,inst_35431);
} else {
if((state_val_35434 === (2))){
var inst_35408 = (state_35433[(8)]);
var inst_35410 = (inst_35408 < n);
var state_35433__$1 = state_35433;
if(cljs.core.truth_(inst_35410)){
var statearr_35453_36939 = state_35433__$1;
(statearr_35453_36939[(1)] = (4));

} else {
var statearr_35454_36940 = state_35433__$1;
(statearr_35454_36940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (11))){
var inst_35408 = (state_35433[(8)]);
var inst_35419 = (state_35433[(2)]);
var inst_35421 = (inst_35408 + (1));
var inst_35408__$1 = inst_35421;
var state_35433__$1 = (function (){var statearr_35455 = state_35433;
(statearr_35455[(10)] = inst_35419);

(statearr_35455[(8)] = inst_35408__$1);

return statearr_35455;
})();
var statearr_35456_36942 = state_35433__$1;
(statearr_35456_36942[(2)] = null);

(statearr_35456_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (9))){
var state_35433__$1 = state_35433;
var statearr_35457_36943 = state_35433__$1;
(statearr_35457_36943[(2)] = null);

(statearr_35457_36943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (5))){
var state_35433__$1 = state_35433;
var statearr_35458_36949 = state_35433__$1;
(statearr_35458_36949[(2)] = null);

(statearr_35458_36949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (10))){
var inst_35425 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35459_36952 = state_35433__$1;
(statearr_35459_36952[(2)] = inst_35425);

(statearr_35459_36952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (8))){
var inst_35413 = (state_35433[(7)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35433__$1,(11),out,inst_35413);
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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35460[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35460[(1)] = (1));

return statearr_35460;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35433){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35433);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35461){var ex__33207__auto__ = e35461;
var statearr_35462_36953 = state_35433;
(statearr_35462_36953[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35433[(4)]))){
var statearr_35463_36954 = state_35433;
(statearr_35463_36954[(1)] = cljs.core.first((state_35433[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36955 = state_35433;
state_35433 = G__36955;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35464 = f__33480__auto__();
(statearr_35464[(6)] = c__33479__auto___36930);

return statearr_35464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35469 = (function (f,ch,meta35470){
this.f = f;
this.ch = ch;
this.meta35470 = meta35470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35471,meta35470__$1){
var self__ = this;
var _35471__$1 = this;
return (new cljs.core.async.t_cljs$core$async35469(self__.f,self__.ch,meta35470__$1));
}));

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35471){
var self__ = this;
var _35471__$1 = this;
return self__.meta35470;
}));

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35480 = (function (f,ch,meta35470,_,fn1,meta35481){
this.f = f;
this.ch = ch;
this.meta35470 = meta35470;
this._ = _;
this.fn1 = fn1;
this.meta35481 = meta35481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35482,meta35481__$1){
var self__ = this;
var _35482__$1 = this;
return (new cljs.core.async.t_cljs$core$async35480(self__.f,self__.ch,self__.meta35470,self__._,self__.fn1,meta35481__$1));
}));

(cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35482){
var self__ = this;
var _35482__$1 = this;
return self__.meta35481;
}));

(cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35467_SHARP_){
var G__35497 = (((p1__35467_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35467_SHARP_) : self__.f.call(null,p1__35467_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35497) : f1.call(null,G__35497));
});
}));

(cljs.core.async.t_cljs$core$async35480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35470","meta35470",-267503992,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35469","cljs.core.async/t_cljs$core$async35469",-1913280253,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35481","meta35481",1072846353,null)], null);
}));

(cljs.core.async.t_cljs$core$async35480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35480");

(cljs.core.async.t_cljs$core$async35480.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35480.
 */
cljs.core.async.__GT_t_cljs$core$async35480 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35480(f__$1,ch__$1,meta35470__$1,___$2,fn1__$1,meta35481){
return (new cljs.core.async.t_cljs$core$async35480(f__$1,ch__$1,meta35470__$1,___$2,fn1__$1,meta35481));
});

}

return (new cljs.core.async.t_cljs$core$async35480(self__.f,self__.ch,self__.meta35470,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35508 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35508) : self__.f.call(null,G__35508));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35470","meta35470",-267503992,null)], null);
}));

(cljs.core.async.t_cljs$core$async35469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35469");

(cljs.core.async.t_cljs$core$async35469.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35469.
 */
cljs.core.async.__GT_t_cljs$core$async35469 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35469(f__$1,ch__$1,meta35470){
return (new cljs.core.async.t_cljs$core$async35469(f__$1,ch__$1,meta35470));
});

}

return (new cljs.core.async.t_cljs$core$async35469(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35519 = (function (f,ch,meta35520){
this.f = f;
this.ch = ch;
this.meta35520 = meta35520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35521,meta35520__$1){
var self__ = this;
var _35521__$1 = this;
return (new cljs.core.async.t_cljs$core$async35519(self__.f,self__.ch,meta35520__$1));
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35521){
var self__ = this;
var _35521__$1 = this;
return self__.meta35520;
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35520","meta35520",460302218,null)], null);
}));

(cljs.core.async.t_cljs$core$async35519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35519");

(cljs.core.async.t_cljs$core$async35519.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35519.
 */
cljs.core.async.__GT_t_cljs$core$async35519 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35519(f__$1,ch__$1,meta35520){
return (new cljs.core.async.t_cljs$core$async35519(f__$1,ch__$1,meta35520));
});

}

return (new cljs.core.async.t_cljs$core$async35519(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35535 = (function (p,ch,meta35536){
this.p = p;
this.ch = ch;
this.meta35536 = meta35536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35537,meta35536__$1){
var self__ = this;
var _35537__$1 = this;
return (new cljs.core.async.t_cljs$core$async35535(self__.p,self__.ch,meta35536__$1));
}));

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35537){
var self__ = this;
var _35537__$1 = this;
return self__.meta35536;
}));

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35536","meta35536",-712634143,null)], null);
}));

(cljs.core.async.t_cljs$core$async35535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35535");

(cljs.core.async.t_cljs$core$async35535.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35535.
 */
cljs.core.async.__GT_t_cljs$core$async35535 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35535(p__$1,ch__$1,meta35536){
return (new cljs.core.async.t_cljs$core$async35535(p__$1,ch__$1,meta35536));
});

}

return (new cljs.core.async.t_cljs$core$async35535(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35552 = arguments.length;
switch (G__35552) {
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
var c__33479__auto___36976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35586){
var state_val_35587 = (state_35586[(1)]);
if((state_val_35587 === (7))){
var inst_35582 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35594_36984 = state_35586__$1;
(statearr_35594_36984[(2)] = inst_35582);

(statearr_35594_36984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (1))){
var state_35586__$1 = state_35586;
var statearr_35595_36985 = state_35586__$1;
(statearr_35595_36985[(2)] = null);

(statearr_35595_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (4))){
var inst_35562 = (state_35586[(7)]);
var inst_35562__$1 = (state_35586[(2)]);
var inst_35563 = (inst_35562__$1 == null);
var state_35586__$1 = (function (){var statearr_35597 = state_35586;
(statearr_35597[(7)] = inst_35562__$1);

return statearr_35597;
})();
if(cljs.core.truth_(inst_35563)){
var statearr_35598_36986 = state_35586__$1;
(statearr_35598_36986[(1)] = (5));

} else {
var statearr_35599_36987 = state_35586__$1;
(statearr_35599_36987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (6))){
var inst_35562 = (state_35586[(7)]);
var inst_35573 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35562) : p.call(null,inst_35562));
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35573)){
var statearr_35601_36988 = state_35586__$1;
(statearr_35601_36988[(1)] = (8));

} else {
var statearr_35602_36989 = state_35586__$1;
(statearr_35602_36989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (3))){
var inst_35584 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35586__$1,inst_35584);
} else {
if((state_val_35587 === (2))){
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35586__$1,(4),ch);
} else {
if((state_val_35587 === (11))){
var inst_35576 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35603_36990 = state_35586__$1;
(statearr_35603_36990[(2)] = inst_35576);

(statearr_35603_36990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (9))){
var state_35586__$1 = state_35586;
var statearr_35609_36991 = state_35586__$1;
(statearr_35609_36991[(2)] = null);

(statearr_35609_36991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (5))){
var inst_35565 = cljs.core.async.close_BANG_(out);
var state_35586__$1 = state_35586;
var statearr_35615_36994 = state_35586__$1;
(statearr_35615_36994[(2)] = inst_35565);

(statearr_35615_36994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (10))){
var inst_35579 = (state_35586[(2)]);
var state_35586__$1 = (function (){var statearr_35616 = state_35586;
(statearr_35616[(8)] = inst_35579);

return statearr_35616;
})();
var statearr_35617_36997 = state_35586__$1;
(statearr_35617_36997[(2)] = null);

(statearr_35617_36997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (8))){
var inst_35562 = (state_35586[(7)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35586__$1,(11),out,inst_35562);
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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35618 = [null,null,null,null,null,null,null,null,null];
(statearr_35618[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35618[(1)] = (1));

return statearr_35618;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35586){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35586);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35620){var ex__33207__auto__ = e35620;
var statearr_35621_36998 = state_35586;
(statearr_35621_36998[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35586[(4)]))){
var statearr_35623_36999 = state_35586;
(statearr_35623_36999[(1)] = cljs.core.first((state_35586[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_35586;
state_35586 = G__37000;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35629 = f__33480__auto__();
(statearr_35629[(6)] = c__33479__auto___36976);

return statearr_35629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35631 = arguments.length;
switch (G__35631) {
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
var c__33479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35710){
var state_val_35711 = (state_35710[(1)]);
if((state_val_35711 === (7))){
var inst_35703 = (state_35710[(2)]);
var state_35710__$1 = state_35710;
var statearr_35712_37010 = state_35710__$1;
(statearr_35712_37010[(2)] = inst_35703);

(statearr_35712_37010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (20))){
var inst_35673 = (state_35710[(7)]);
var inst_35684 = (state_35710[(2)]);
var inst_35685 = cljs.core.next(inst_35673);
var inst_35656 = inst_35685;
var inst_35657 = null;
var inst_35658 = (0);
var inst_35659 = (0);
var state_35710__$1 = (function (){var statearr_35713 = state_35710;
(statearr_35713[(8)] = inst_35659);

(statearr_35713[(9)] = inst_35684);

(statearr_35713[(10)] = inst_35657);

(statearr_35713[(11)] = inst_35658);

(statearr_35713[(12)] = inst_35656);

return statearr_35713;
})();
var statearr_35714_37013 = state_35710__$1;
(statearr_35714_37013[(2)] = null);

(statearr_35714_37013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (1))){
var state_35710__$1 = state_35710;
var statearr_35715_37014 = state_35710__$1;
(statearr_35715_37014[(2)] = null);

(statearr_35715_37014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (4))){
var inst_35638 = (state_35710[(13)]);
var inst_35638__$1 = (state_35710[(2)]);
var inst_35639 = (inst_35638__$1 == null);
var state_35710__$1 = (function (){var statearr_35716 = state_35710;
(statearr_35716[(13)] = inst_35638__$1);

return statearr_35716;
})();
if(cljs.core.truth_(inst_35639)){
var statearr_35717_37016 = state_35710__$1;
(statearr_35717_37016[(1)] = (5));

} else {
var statearr_35718_37017 = state_35710__$1;
(statearr_35718_37017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (15))){
var state_35710__$1 = state_35710;
var statearr_35722_37018 = state_35710__$1;
(statearr_35722_37018[(2)] = null);

(statearr_35722_37018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (21))){
var state_35710__$1 = state_35710;
var statearr_35723_37019 = state_35710__$1;
(statearr_35723_37019[(2)] = null);

(statearr_35723_37019[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (13))){
var inst_35659 = (state_35710[(8)]);
var inst_35657 = (state_35710[(10)]);
var inst_35658 = (state_35710[(11)]);
var inst_35656 = (state_35710[(12)]);
var inst_35669 = (state_35710[(2)]);
var inst_35670 = (inst_35659 + (1));
var tmp35719 = inst_35657;
var tmp35720 = inst_35658;
var tmp35721 = inst_35656;
var inst_35656__$1 = tmp35721;
var inst_35657__$1 = tmp35719;
var inst_35658__$1 = tmp35720;
var inst_35659__$1 = inst_35670;
var state_35710__$1 = (function (){var statearr_35724 = state_35710;
(statearr_35724[(8)] = inst_35659__$1);

(statearr_35724[(14)] = inst_35669);

(statearr_35724[(10)] = inst_35657__$1);

(statearr_35724[(11)] = inst_35658__$1);

(statearr_35724[(12)] = inst_35656__$1);

return statearr_35724;
})();
var statearr_35725_37020 = state_35710__$1;
(statearr_35725_37020[(2)] = null);

(statearr_35725_37020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (22))){
var state_35710__$1 = state_35710;
var statearr_35726_37022 = state_35710__$1;
(statearr_35726_37022[(2)] = null);

(statearr_35726_37022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (6))){
var inst_35638 = (state_35710[(13)]);
var inst_35654 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35638) : f.call(null,inst_35638));
var inst_35655 = cljs.core.seq(inst_35654);
var inst_35656 = inst_35655;
var inst_35657 = null;
var inst_35658 = (0);
var inst_35659 = (0);
var state_35710__$1 = (function (){var statearr_35727 = state_35710;
(statearr_35727[(8)] = inst_35659);

(statearr_35727[(10)] = inst_35657);

(statearr_35727[(11)] = inst_35658);

(statearr_35727[(12)] = inst_35656);

return statearr_35727;
})();
var statearr_35728_37024 = state_35710__$1;
(statearr_35728_37024[(2)] = null);

(statearr_35728_37024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (17))){
var inst_35673 = (state_35710[(7)]);
var inst_35677 = cljs.core.chunk_first(inst_35673);
var inst_35678 = cljs.core.chunk_rest(inst_35673);
var inst_35679 = cljs.core.count(inst_35677);
var inst_35656 = inst_35678;
var inst_35657 = inst_35677;
var inst_35658 = inst_35679;
var inst_35659 = (0);
var state_35710__$1 = (function (){var statearr_35729 = state_35710;
(statearr_35729[(8)] = inst_35659);

(statearr_35729[(10)] = inst_35657);

(statearr_35729[(11)] = inst_35658);

(statearr_35729[(12)] = inst_35656);

return statearr_35729;
})();
var statearr_35730_37026 = state_35710__$1;
(statearr_35730_37026[(2)] = null);

(statearr_35730_37026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (3))){
var inst_35705 = (state_35710[(2)]);
var state_35710__$1 = state_35710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35710__$1,inst_35705);
} else {
if((state_val_35711 === (12))){
var inst_35693 = (state_35710[(2)]);
var state_35710__$1 = state_35710;
var statearr_35731_37029 = state_35710__$1;
(statearr_35731_37029[(2)] = inst_35693);

(statearr_35731_37029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (2))){
var state_35710__$1 = state_35710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35710__$1,(4),in$);
} else {
if((state_val_35711 === (23))){
var inst_35701 = (state_35710[(2)]);
var state_35710__$1 = state_35710;
var statearr_35733_37030 = state_35710__$1;
(statearr_35733_37030[(2)] = inst_35701);

(statearr_35733_37030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (19))){
var inst_35688 = (state_35710[(2)]);
var state_35710__$1 = state_35710;
var statearr_35734_37032 = state_35710__$1;
(statearr_35734_37032[(2)] = inst_35688);

(statearr_35734_37032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (11))){
var inst_35673 = (state_35710[(7)]);
var inst_35656 = (state_35710[(12)]);
var inst_35673__$1 = cljs.core.seq(inst_35656);
var state_35710__$1 = (function (){var statearr_35738 = state_35710;
(statearr_35738[(7)] = inst_35673__$1);

return statearr_35738;
})();
if(inst_35673__$1){
var statearr_35739_37036 = state_35710__$1;
(statearr_35739_37036[(1)] = (14));

} else {
var statearr_35740_37037 = state_35710__$1;
(statearr_35740_37037[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (9))){
var inst_35695 = (state_35710[(2)]);
var inst_35696 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35710__$1 = (function (){var statearr_35741 = state_35710;
(statearr_35741[(15)] = inst_35695);

return statearr_35741;
})();
if(cljs.core.truth_(inst_35696)){
var statearr_35742_37038 = state_35710__$1;
(statearr_35742_37038[(1)] = (21));

} else {
var statearr_35743_37039 = state_35710__$1;
(statearr_35743_37039[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (5))){
var inst_35645 = cljs.core.async.close_BANG_(out);
var state_35710__$1 = state_35710;
var statearr_35744_37041 = state_35710__$1;
(statearr_35744_37041[(2)] = inst_35645);

(statearr_35744_37041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (14))){
var inst_35673 = (state_35710[(7)]);
var inst_35675 = cljs.core.chunked_seq_QMARK_(inst_35673);
var state_35710__$1 = state_35710;
if(inst_35675){
var statearr_35748_37042 = state_35710__$1;
(statearr_35748_37042[(1)] = (17));

} else {
var statearr_35749_37043 = state_35710__$1;
(statearr_35749_37043[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (16))){
var inst_35691 = (state_35710[(2)]);
var state_35710__$1 = state_35710;
var statearr_35750_37044 = state_35710__$1;
(statearr_35750_37044[(2)] = inst_35691);

(statearr_35750_37044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35711 === (10))){
var inst_35659 = (state_35710[(8)]);
var inst_35657 = (state_35710[(10)]);
var inst_35667 = cljs.core._nth(inst_35657,inst_35659);
var state_35710__$1 = state_35710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35710__$1,(13),out,inst_35667);
} else {
if((state_val_35711 === (18))){
var inst_35673 = (state_35710[(7)]);
var inst_35682 = cljs.core.first(inst_35673);
var state_35710__$1 = state_35710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35710__$1,(20),out,inst_35682);
} else {
if((state_val_35711 === (8))){
var inst_35659 = (state_35710[(8)]);
var inst_35658 = (state_35710[(11)]);
var inst_35664 = (inst_35659 < inst_35658);
var inst_35665 = inst_35664;
var state_35710__$1 = state_35710;
if(cljs.core.truth_(inst_35665)){
var statearr_35751_37047 = state_35710__$1;
(statearr_35751_37047[(1)] = (10));

} else {
var statearr_35752_37048 = state_35710__$1;
(statearr_35752_37048[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_35753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35753[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__);

(statearr_35753[(1)] = (1));

return statearr_35753;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____1 = (function (state_35710){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35710);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35754){var ex__33207__auto__ = e35754;
var statearr_35755_37051 = state_35710;
(statearr_35755_37051[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35710[(4)]))){
var statearr_35757_37053 = state_35710;
(statearr_35757_37053[(1)] = cljs.core.first((state_35710[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37054 = state_35710;
state_35710 = G__37054;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__ = function(state_35710){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____1.call(this,state_35710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35758 = f__33480__auto__();
(statearr_35758[(6)] = c__33479__auto__);

return statearr_35758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));

return c__33479__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35760 = arguments.length;
switch (G__35760) {
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
var G__35770 = arguments.length;
switch (G__35770) {
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
var G__35774 = arguments.length;
switch (G__35774) {
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
var c__33479__auto___37067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35798){
var state_val_35799 = (state_35798[(1)]);
if((state_val_35799 === (7))){
var inst_35793 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35800_37068 = state_35798__$1;
(statearr_35800_37068[(2)] = inst_35793);

(statearr_35800_37068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (1))){
var inst_35775 = null;
var state_35798__$1 = (function (){var statearr_35801 = state_35798;
(statearr_35801[(7)] = inst_35775);

return statearr_35801;
})();
var statearr_35802_37069 = state_35798__$1;
(statearr_35802_37069[(2)] = null);

(statearr_35802_37069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (4))){
var inst_35778 = (state_35798[(8)]);
var inst_35778__$1 = (state_35798[(2)]);
var inst_35779 = (inst_35778__$1 == null);
var inst_35780 = cljs.core.not(inst_35779);
var state_35798__$1 = (function (){var statearr_35803 = state_35798;
(statearr_35803[(8)] = inst_35778__$1);

return statearr_35803;
})();
if(inst_35780){
var statearr_35804_37070 = state_35798__$1;
(statearr_35804_37070[(1)] = (5));

} else {
var statearr_35805_37071 = state_35798__$1;
(statearr_35805_37071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (6))){
var state_35798__$1 = state_35798;
var statearr_35806_37072 = state_35798__$1;
(statearr_35806_37072[(2)] = null);

(statearr_35806_37072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (3))){
var inst_35795 = (state_35798[(2)]);
var inst_35796 = cljs.core.async.close_BANG_(out);
var state_35798__$1 = (function (){var statearr_35807 = state_35798;
(statearr_35807[(9)] = inst_35795);

return statearr_35807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35798__$1,inst_35796);
} else {
if((state_val_35799 === (2))){
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35798__$1,(4),ch);
} else {
if((state_val_35799 === (11))){
var inst_35778 = (state_35798[(8)]);
var inst_35787 = (state_35798[(2)]);
var inst_35775 = inst_35778;
var state_35798__$1 = (function (){var statearr_35808 = state_35798;
(statearr_35808[(7)] = inst_35775);

(statearr_35808[(10)] = inst_35787);

return statearr_35808;
})();
var statearr_35809_37073 = state_35798__$1;
(statearr_35809_37073[(2)] = null);

(statearr_35809_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (9))){
var inst_35778 = (state_35798[(8)]);
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35798__$1,(11),out,inst_35778);
} else {
if((state_val_35799 === (5))){
var inst_35775 = (state_35798[(7)]);
var inst_35778 = (state_35798[(8)]);
var inst_35782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35778,inst_35775);
var state_35798__$1 = state_35798;
if(inst_35782){
var statearr_35815_37074 = state_35798__$1;
(statearr_35815_37074[(1)] = (8));

} else {
var statearr_35816_37075 = state_35798__$1;
(statearr_35816_37075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (10))){
var inst_35790 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35817_37076 = state_35798__$1;
(statearr_35817_37076[(2)] = inst_35790);

(statearr_35817_37076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (8))){
var inst_35775 = (state_35798[(7)]);
var tmp35811 = inst_35775;
var inst_35775__$1 = tmp35811;
var state_35798__$1 = (function (){var statearr_35818 = state_35798;
(statearr_35818[(7)] = inst_35775__$1);

return statearr_35818;
})();
var statearr_35819_37077 = state_35798__$1;
(statearr_35819_37077[(2)] = null);

(statearr_35819_37077[(1)] = (2));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35823[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35823[(1)] = (1));

return statearr_35823;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35798){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35798);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35824){var ex__33207__auto__ = e35824;
var statearr_35825_37080 = state_35798;
(statearr_35825_37080[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35798[(4)]))){
var statearr_35826_37081 = state_35798;
(statearr_35826_37081[(1)] = cljs.core.first((state_35798[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_35798;
state_35798 = G__37082;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35827 = f__33480__auto__();
(statearr_35827[(6)] = c__33479__auto___37067);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35829 = arguments.length;
switch (G__35829) {
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
var c__33479__auto___37084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35868){
var state_val_35872 = (state_35868[(1)]);
if((state_val_35872 === (7))){
var inst_35864 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35873_37085 = state_35868__$1;
(statearr_35873_37085[(2)] = inst_35864);

(statearr_35873_37085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (1))){
var inst_35831 = (new Array(n));
var inst_35832 = inst_35831;
var inst_35833 = (0);
var state_35868__$1 = (function (){var statearr_35874 = state_35868;
(statearr_35874[(7)] = inst_35833);

(statearr_35874[(8)] = inst_35832);

return statearr_35874;
})();
var statearr_35875_37086 = state_35868__$1;
(statearr_35875_37086[(2)] = null);

(statearr_35875_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (4))){
var inst_35836 = (state_35868[(9)]);
var inst_35836__$1 = (state_35868[(2)]);
var inst_35837 = (inst_35836__$1 == null);
var inst_35838 = cljs.core.not(inst_35837);
var state_35868__$1 = (function (){var statearr_35876 = state_35868;
(statearr_35876[(9)] = inst_35836__$1);

return statearr_35876;
})();
if(inst_35838){
var statearr_35877_37088 = state_35868__$1;
(statearr_35877_37088[(1)] = (5));

} else {
var statearr_35878_37089 = state_35868__$1;
(statearr_35878_37089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (15))){
var inst_35858 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35879_37090 = state_35868__$1;
(statearr_35879_37090[(2)] = inst_35858);

(statearr_35879_37090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (13))){
var state_35868__$1 = state_35868;
var statearr_35880_37091 = state_35868__$1;
(statearr_35880_37091[(2)] = null);

(statearr_35880_37091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (6))){
var inst_35833 = (state_35868[(7)]);
var inst_35854 = (inst_35833 > (0));
var state_35868__$1 = state_35868;
if(cljs.core.truth_(inst_35854)){
var statearr_35881_37092 = state_35868__$1;
(statearr_35881_37092[(1)] = (12));

} else {
var statearr_35882_37093 = state_35868__$1;
(statearr_35882_37093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (3))){
var inst_35866 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35868__$1,inst_35866);
} else {
if((state_val_35872 === (12))){
var inst_35832 = (state_35868[(8)]);
var inst_35856 = cljs.core.vec(inst_35832);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35868__$1,(15),out,inst_35856);
} else {
if((state_val_35872 === (2))){
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35868__$1,(4),ch);
} else {
if((state_val_35872 === (11))){
var inst_35848 = (state_35868[(2)]);
var inst_35849 = (new Array(n));
var inst_35832 = inst_35849;
var inst_35833 = (0);
var state_35868__$1 = (function (){var statearr_35883 = state_35868;
(statearr_35883[(7)] = inst_35833);

(statearr_35883[(8)] = inst_35832);

(statearr_35883[(10)] = inst_35848);

return statearr_35883;
})();
var statearr_35884_37094 = state_35868__$1;
(statearr_35884_37094[(2)] = null);

(statearr_35884_37094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (9))){
var inst_35832 = (state_35868[(8)]);
var inst_35846 = cljs.core.vec(inst_35832);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35868__$1,(11),out,inst_35846);
} else {
if((state_val_35872 === (5))){
var inst_35841 = (state_35868[(11)]);
var inst_35833 = (state_35868[(7)]);
var inst_35832 = (state_35868[(8)]);
var inst_35836 = (state_35868[(9)]);
var inst_35840 = (inst_35832[inst_35833] = inst_35836);
var inst_35841__$1 = (inst_35833 + (1));
var inst_35842 = (inst_35841__$1 < n);
var state_35868__$1 = (function (){var statearr_35885 = state_35868;
(statearr_35885[(11)] = inst_35841__$1);

(statearr_35885[(12)] = inst_35840);

return statearr_35885;
})();
if(cljs.core.truth_(inst_35842)){
var statearr_35886_37102 = state_35868__$1;
(statearr_35886_37102[(1)] = (8));

} else {
var statearr_35887_37103 = state_35868__$1;
(statearr_35887_37103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (14))){
var inst_35861 = (state_35868[(2)]);
var inst_35862 = cljs.core.async.close_BANG_(out);
var state_35868__$1 = (function (){var statearr_35890 = state_35868;
(statearr_35890[(13)] = inst_35861);

return statearr_35890;
})();
var statearr_35891_37104 = state_35868__$1;
(statearr_35891_37104[(2)] = inst_35862);

(statearr_35891_37104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (10))){
var inst_35852 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35894_37106 = state_35868__$1;
(statearr_35894_37106[(2)] = inst_35852);

(statearr_35894_37106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35872 === (8))){
var inst_35841 = (state_35868[(11)]);
var inst_35832 = (state_35868[(8)]);
var tmp35888 = inst_35832;
var inst_35832__$1 = tmp35888;
var inst_35833 = inst_35841;
var state_35868__$1 = (function (){var statearr_35895 = state_35868;
(statearr_35895[(7)] = inst_35833);

(statearr_35895[(8)] = inst_35832__$1);

return statearr_35895;
})();
var statearr_35896_37110 = state_35868__$1;
(statearr_35896_37110[(2)] = null);

(statearr_35896_37110[(1)] = (2));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35897[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35897[(1)] = (1));

return statearr_35897;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35868){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35868);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35898){var ex__33207__auto__ = e35898;
var statearr_35899_37114 = state_35868;
(statearr_35899_37114[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35868[(4)]))){
var statearr_35900_37115 = state_35868;
(statearr_35900_37115[(1)] = cljs.core.first((state_35868[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37120 = state_35868;
state_35868 = G__37120;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35901 = f__33480__auto__();
(statearr_35901[(6)] = c__33479__auto___37084);

return statearr_35901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35903 = arguments.length;
switch (G__35903) {
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
var c__33479__auto___37125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_35956){
var state_val_35957 = (state_35956[(1)]);
if((state_val_35957 === (7))){
var inst_35952 = (state_35956[(2)]);
var state_35956__$1 = state_35956;
var statearr_35958_37127 = state_35956__$1;
(statearr_35958_37127[(2)] = inst_35952);

(statearr_35958_37127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (1))){
var inst_35904 = [];
var inst_35905 = inst_35904;
var inst_35906 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35956__$1 = (function (){var statearr_35959 = state_35956;
(statearr_35959[(7)] = inst_35906);

(statearr_35959[(8)] = inst_35905);

return statearr_35959;
})();
var statearr_35960_37129 = state_35956__$1;
(statearr_35960_37129[(2)] = null);

(statearr_35960_37129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (4))){
var inst_35909 = (state_35956[(9)]);
var inst_35909__$1 = (state_35956[(2)]);
var inst_35910 = (inst_35909__$1 == null);
var inst_35911 = cljs.core.not(inst_35910);
var state_35956__$1 = (function (){var statearr_35961 = state_35956;
(statearr_35961[(9)] = inst_35909__$1);

return statearr_35961;
})();
if(inst_35911){
var statearr_35962_37133 = state_35956__$1;
(statearr_35962_37133[(1)] = (5));

} else {
var statearr_35963_37134 = state_35956__$1;
(statearr_35963_37134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (15))){
var inst_35905 = (state_35956[(8)]);
var inst_35940 = cljs.core.vec(inst_35905);
var state_35956__$1 = state_35956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35956__$1,(18),out,inst_35940);
} else {
if((state_val_35957 === (13))){
var inst_35935 = (state_35956[(2)]);
var state_35956__$1 = state_35956;
var statearr_35964_37135 = state_35956__$1;
(statearr_35964_37135[(2)] = inst_35935);

(statearr_35964_37135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (6))){
var inst_35905 = (state_35956[(8)]);
var inst_35937 = inst_35905.length;
var inst_35938 = (inst_35937 > (0));
var state_35956__$1 = state_35956;
if(cljs.core.truth_(inst_35938)){
var statearr_35965_37136 = state_35956__$1;
(statearr_35965_37136[(1)] = (15));

} else {
var statearr_35966_37137 = state_35956__$1;
(statearr_35966_37137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (17))){
var inst_35945 = (state_35956[(2)]);
var inst_35950 = cljs.core.async.close_BANG_(out);
var state_35956__$1 = (function (){var statearr_35967 = state_35956;
(statearr_35967[(10)] = inst_35945);

return statearr_35967;
})();
var statearr_35968_37138 = state_35956__$1;
(statearr_35968_37138[(2)] = inst_35950);

(statearr_35968_37138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (3))){
var inst_35954 = (state_35956[(2)]);
var state_35956__$1 = state_35956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35956__$1,inst_35954);
} else {
if((state_val_35957 === (12))){
var inst_35905 = (state_35956[(8)]);
var inst_35928 = cljs.core.vec(inst_35905);
var state_35956__$1 = state_35956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35956__$1,(14),out,inst_35928);
} else {
if((state_val_35957 === (2))){
var state_35956__$1 = state_35956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35956__$1,(4),ch);
} else {
if((state_val_35957 === (11))){
var inst_35909 = (state_35956[(9)]);
var inst_35905 = (state_35956[(8)]);
var inst_35913 = (state_35956[(11)]);
var inst_35925 = inst_35905.push(inst_35909);
var tmp35969 = inst_35905;
var inst_35905__$1 = tmp35969;
var inst_35906 = inst_35913;
var state_35956__$1 = (function (){var statearr_35972 = state_35956;
(statearr_35972[(7)] = inst_35906);

(statearr_35972[(12)] = inst_35925);

(statearr_35972[(8)] = inst_35905__$1);

return statearr_35972;
})();
var statearr_35973_37139 = state_35956__$1;
(statearr_35973_37139[(2)] = null);

(statearr_35973_37139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (9))){
var inst_35906 = (state_35956[(7)]);
var inst_35917 = cljs.core.keyword_identical_QMARK_(inst_35906,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35956__$1 = state_35956;
var statearr_35974_37140 = state_35956__$1;
(statearr_35974_37140[(2)] = inst_35917);

(statearr_35974_37140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (5))){
var inst_35914 = (state_35956[(13)]);
var inst_35909 = (state_35956[(9)]);
var inst_35906 = (state_35956[(7)]);
var inst_35913 = (state_35956[(11)]);
var inst_35913__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35909) : f.call(null,inst_35909));
var inst_35914__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35913__$1,inst_35906);
var state_35956__$1 = (function (){var statearr_35975 = state_35956;
(statearr_35975[(13)] = inst_35914__$1);

(statearr_35975[(11)] = inst_35913__$1);

return statearr_35975;
})();
if(inst_35914__$1){
var statearr_35976_37143 = state_35956__$1;
(statearr_35976_37143[(1)] = (8));

} else {
var statearr_35981_37144 = state_35956__$1;
(statearr_35981_37144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (14))){
var inst_35909 = (state_35956[(9)]);
var inst_35913 = (state_35956[(11)]);
var inst_35930 = (state_35956[(2)]);
var inst_35931 = [];
var inst_35932 = inst_35931.push(inst_35909);
var inst_35905 = inst_35931;
var inst_35906 = inst_35913;
var state_35956__$1 = (function (){var statearr_35982 = state_35956;
(statearr_35982[(14)] = inst_35932);

(statearr_35982[(7)] = inst_35906);

(statearr_35982[(8)] = inst_35905);

(statearr_35982[(15)] = inst_35930);

return statearr_35982;
})();
var statearr_35983_37145 = state_35956__$1;
(statearr_35983_37145[(2)] = null);

(statearr_35983_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (16))){
var state_35956__$1 = state_35956;
var statearr_35984_37146 = state_35956__$1;
(statearr_35984_37146[(2)] = null);

(statearr_35984_37146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (10))){
var inst_35919 = (state_35956[(2)]);
var state_35956__$1 = state_35956;
if(cljs.core.truth_(inst_35919)){
var statearr_35986_37147 = state_35956__$1;
(statearr_35986_37147[(1)] = (11));

} else {
var statearr_35987_37148 = state_35956__$1;
(statearr_35987_37148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (18))){
var inst_35942 = (state_35956[(2)]);
var state_35956__$1 = state_35956;
var statearr_35988_37149 = state_35956__$1;
(statearr_35988_37149[(2)] = inst_35942);

(statearr_35988_37149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35957 === (8))){
var inst_35914 = (state_35956[(13)]);
var state_35956__$1 = state_35956;
var statearr_35990_37150 = state_35956__$1;
(statearr_35990_37150[(2)] = inst_35914);

(statearr_35990_37150[(1)] = (10));


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
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35992[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35992[(1)] = (1));

return statearr_35992;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35956){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35956);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35993){var ex__33207__auto__ = e35993;
var statearr_35994_37166 = state_35956;
(statearr_35994_37166[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35956[(4)]))){
var statearr_35995_37167 = state_35956;
(statearr_35995_37167[(1)] = cljs.core.first((state_35956[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37168 = state_35956;
state_35956 = G__37168;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_35997 = f__33480__auto__();
(statearr_35997[(6)] = c__33479__auto___37125);

return statearr_35997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
