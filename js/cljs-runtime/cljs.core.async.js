goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36668 = arguments.length;
switch (G__36668) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36677 = (function (f,blockable,meta36678){
this.f = f;
this.blockable = blockable;
this.meta36678 = meta36678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36679,meta36678__$1){
var self__ = this;
var _36679__$1 = this;
return (new cljs.core.async.t_cljs$core$async36677(self__.f,self__.blockable,meta36678__$1));
}));

(cljs.core.async.t_cljs$core$async36677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36679){
var self__ = this;
var _36679__$1 = this;
return self__.meta36678;
}));

(cljs.core.async.t_cljs$core$async36677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36678","meta36678",-662359861,null)], null);
}));

(cljs.core.async.t_cljs$core$async36677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36677");

(cljs.core.async.t_cljs$core$async36677.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36677.
 */
cljs.core.async.__GT_t_cljs$core$async36677 = (function cljs$core$async$__GT_t_cljs$core$async36677(f__$1,blockable__$1,meta36678){
return (new cljs.core.async.t_cljs$core$async36677(f__$1,blockable__$1,meta36678));
});

}

return (new cljs.core.async.t_cljs$core$async36677(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36685 = arguments.length;
switch (G__36685) {
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
var G__36688 = arguments.length;
switch (G__36688) {
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
var G__36700 = arguments.length;
switch (G__36700) {
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
var val_39018 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39018) : fn1.call(null,val_39018));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39018) : fn1.call(null,val_39018));
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
var G__36706 = arguments.length;
switch (G__36706) {
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
var n__4741__auto___39024 = n;
var x_39025 = (0);
while(true){
if((x_39025 < n__4741__auto___39024)){
(a[x_39025] = x_39025);

var G__39026 = (x_39025 + (1));
x_39025 = G__39026;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36714 = (function (flag,meta36715){
this.flag = flag;
this.meta36715 = meta36715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36716,meta36715__$1){
var self__ = this;
var _36716__$1 = this;
return (new cljs.core.async.t_cljs$core$async36714(self__.flag,meta36715__$1));
}));

(cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36716){
var self__ = this;
var _36716__$1 = this;
return self__.meta36715;
}));

(cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36715","meta36715",-2019334521,null)], null);
}));

(cljs.core.async.t_cljs$core$async36714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36714");

(cljs.core.async.t_cljs$core$async36714.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36714.
 */
cljs.core.async.__GT_t_cljs$core$async36714 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36714(flag__$1,meta36715){
return (new cljs.core.async.t_cljs$core$async36714(flag__$1,meta36715));
});

}

return (new cljs.core.async.t_cljs$core$async36714(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36730 = (function (flag,cb,meta36731){
this.flag = flag;
this.cb = cb;
this.meta36731 = meta36731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36732,meta36731__$1){
var self__ = this;
var _36732__$1 = this;
return (new cljs.core.async.t_cljs$core$async36730(self__.flag,self__.cb,meta36731__$1));
}));

(cljs.core.async.t_cljs$core$async36730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36732){
var self__ = this;
var _36732__$1 = this;
return self__.meta36731;
}));

(cljs.core.async.t_cljs$core$async36730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36731","meta36731",-384014180,null)], null);
}));

(cljs.core.async.t_cljs$core$async36730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36730");

(cljs.core.async.t_cljs$core$async36730.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36730.
 */
cljs.core.async.__GT_t_cljs$core$async36730 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36730(flag__$1,cb__$1,meta36731){
return (new cljs.core.async.t_cljs$core$async36730(flag__$1,cb__$1,meta36731));
});

}

return (new cljs.core.async.t_cljs$core$async36730(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36739_SHARP_){
var G__36747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36739_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36747) : fret.call(null,G__36747));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36740_SHARP_){
var G__36748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36740_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36748) : fret.call(null,G__36748));
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
var G__39027 = (i + (1));
i = G__39027;
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
var len__4864__auto___39028 = arguments.length;
var i__4865__auto___39029 = (0);
while(true){
if((i__4865__auto___39029 < len__4864__auto___39028)){
args__4870__auto__.push((arguments[i__4865__auto___39029]));

var G__39030 = (i__4865__auto___39029 + (1));
i__4865__auto___39029 = G__39030;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36758){
var map__36759 = p__36758;
var map__36759__$1 = cljs.core.__destructure_map(map__36759);
var opts = map__36759__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36754){
var G__36755 = cljs.core.first(seq36754);
var seq36754__$1 = cljs.core.next(seq36754);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36755,seq36754__$1);
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
var G__36762 = arguments.length;
switch (G__36762) {
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
var c__26640__auto___39036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_36826){
var state_val_36827 = (state_36826[(1)]);
if((state_val_36827 === (7))){
var inst_36820 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
var statearr_36841_39037 = state_36826__$1;
(statearr_36841_39037[(2)] = inst_36820);

(statearr_36841_39037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (1))){
var state_36826__$1 = state_36826;
var statearr_36843_39038 = state_36826__$1;
(statearr_36843_39038[(2)] = null);

(statearr_36843_39038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (4))){
var inst_36794 = (state_36826[(7)]);
var inst_36794__$1 = (state_36826[(2)]);
var inst_36797 = (inst_36794__$1 == null);
var state_36826__$1 = (function (){var statearr_36847 = state_36826;
(statearr_36847[(7)] = inst_36794__$1);

return statearr_36847;
})();
if(cljs.core.truth_(inst_36797)){
var statearr_36849_39039 = state_36826__$1;
(statearr_36849_39039[(1)] = (5));

} else {
var statearr_36850_39040 = state_36826__$1;
(statearr_36850_39040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (13))){
var state_36826__$1 = state_36826;
var statearr_36852_39041 = state_36826__$1;
(statearr_36852_39041[(2)] = null);

(statearr_36852_39041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (6))){
var inst_36794 = (state_36826[(7)]);
var state_36826__$1 = state_36826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36826__$1,(11),to,inst_36794);
} else {
if((state_val_36827 === (3))){
var inst_36822 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36826__$1,inst_36822);
} else {
if((state_val_36827 === (12))){
var state_36826__$1 = state_36826;
var statearr_36854_39042 = state_36826__$1;
(statearr_36854_39042[(2)] = null);

(statearr_36854_39042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (2))){
var state_36826__$1 = state_36826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36826__$1,(4),from);
} else {
if((state_val_36827 === (11))){
var inst_36808 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
if(cljs.core.truth_(inst_36808)){
var statearr_36856_39043 = state_36826__$1;
(statearr_36856_39043[(1)] = (12));

} else {
var statearr_36857_39044 = state_36826__$1;
(statearr_36857_39044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (9))){
var state_36826__$1 = state_36826;
var statearr_36858_39046 = state_36826__$1;
(statearr_36858_39046[(2)] = null);

(statearr_36858_39046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (5))){
var state_36826__$1 = state_36826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36859_39047 = state_36826__$1;
(statearr_36859_39047[(1)] = (8));

} else {
var statearr_36860_39048 = state_36826__$1;
(statearr_36860_39048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (14))){
var inst_36818 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
var statearr_36861_39050 = state_36826__$1;
(statearr_36861_39050[(2)] = inst_36818);

(statearr_36861_39050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (10))){
var inst_36803 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
var statearr_36862_39051 = state_36826__$1;
(statearr_36862_39051[(2)] = inst_36803);

(statearr_36862_39051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (8))){
var inst_36800 = cljs.core.async.close_BANG_(to);
var state_36826__$1 = state_36826;
var statearr_36863_39052 = state_36826__$1;
(statearr_36863_39052[(2)] = inst_36800);

(statearr_36863_39052[(1)] = (10));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_36864 = [null,null,null,null,null,null,null,null];
(statearr_36864[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_36864[(1)] = (1));

return statearr_36864;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_36826){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_36826);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e36868){var ex__26559__auto__ = e36868;
var statearr_36869_39056 = state_36826;
(statearr_36869_39056[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_36826[(4)]))){
var statearr_36871_39057 = state_36826;
(statearr_36871_39057[(1)] = cljs.core.first((state_36826[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39062 = state_36826;
state_36826 = G__39062;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_36826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_36826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_36875 = f__26641__auto__();
(statearr_36875[(6)] = c__26640__auto___39036);

return statearr_36875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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
var process = (function (p__36903){
var vec__36904 = p__36903;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904,(1),null);
var job = vec__36904;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26640__auto___39070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_36911){
var state_val_36912 = (state_36911[(1)]);
if((state_val_36912 === (1))){
var state_36911__$1 = state_36911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36911__$1,(2),res,v);
} else {
if((state_val_36912 === (2))){
var inst_36908 = (state_36911[(2)]);
var inst_36909 = cljs.core.async.close_BANG_(res);
var state_36911__$1 = (function (){var statearr_36916 = state_36911;
(statearr_36916[(7)] = inst_36908);

return statearr_36916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36911__$1,inst_36909);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0 = (function (){
var statearr_36917 = [null,null,null,null,null,null,null,null];
(statearr_36917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__);

(statearr_36917[(1)] = (1));

return statearr_36917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1 = (function (state_36911){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_36911);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e36920){var ex__26559__auto__ = e36920;
var statearr_36921_39072 = state_36911;
(statearr_36921_39072[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_36911[(4)]))){
var statearr_36922_39073 = state_36911;
(statearr_36922_39073[(1)] = cljs.core.first((state_36911[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39074 = state_36911;
state_36911 = G__39074;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = function(state_36911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1.call(this,state_36911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_36927 = f__26641__auto__();
(statearr_36927[(6)] = c__26640__auto___39070);

return statearr_36927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36945){
var vec__36946 = p__36945;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(1),null);
var job = vec__36946;
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
var n__4741__auto___39082 = n;
var __39084 = (0);
while(true){
if((__39084 < n__4741__auto___39082)){
var G__36950_39085 = type;
var G__36950_39086__$1 = (((G__36950_39085 instanceof cljs.core.Keyword))?G__36950_39085.fqn:null);
switch (G__36950_39086__$1) {
case "compute":
var c__26640__auto___39088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39084,c__26640__auto___39088,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async){
return (function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = ((function (__39084,c__26640__auto___39088,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async){
return (function (state_36980){
var state_val_36981 = (state_36980[(1)]);
if((state_val_36981 === (1))){
var state_36980__$1 = state_36980;
var statearr_36997_39093 = state_36980__$1;
(statearr_36997_39093[(2)] = null);

(statearr_36997_39093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (2))){
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36980__$1,(4),jobs);
} else {
if((state_val_36981 === (3))){
var inst_36977 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36980__$1,inst_36977);
} else {
if((state_val_36981 === (4))){
var inst_36963 = (state_36980[(2)]);
var inst_36965 = process(inst_36963);
var state_36980__$1 = state_36980;
if(cljs.core.truth_(inst_36965)){
var statearr_37009_39094 = state_36980__$1;
(statearr_37009_39094[(1)] = (5));

} else {
var statearr_37011_39095 = state_36980__$1;
(statearr_37011_39095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (5))){
var state_36980__$1 = state_36980;
var statearr_37012_39096 = state_36980__$1;
(statearr_37012_39096[(2)] = null);

(statearr_37012_39096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (6))){
var state_36980__$1 = state_36980;
var statearr_37013_39097 = state_36980__$1;
(statearr_37013_39097[(2)] = null);

(statearr_37013_39097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (7))){
var inst_36975 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_37014_39098 = state_36980__$1;
(statearr_37014_39098[(2)] = inst_36975);

(statearr_37014_39098[(1)] = (3));


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
});})(__39084,c__26640__auto___39088,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async))
;
return ((function (__39084,switch__26555__auto__,c__26640__auto___39088,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0 = (function (){
var statearr_37016 = [null,null,null,null,null,null,null];
(statearr_37016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__);

(statearr_37016[(1)] = (1));

return statearr_37016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1 = (function (state_36980){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_36980);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37017){var ex__26559__auto__ = e37017;
var statearr_37018_39106 = state_36980;
(statearr_37018_39106[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_36980[(4)]))){
var statearr_37039_39108 = state_36980;
(statearr_37039_39108[(1)] = cljs.core.first((state_36980[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39112 = state_36980;
state_36980 = G__39112;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = function(state_36980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1.call(this,state_36980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__;
})()
;})(__39084,switch__26555__auto__,c__26640__auto___39088,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async))
})();
var state__26642__auto__ = (function (){var statearr_37040 = f__26641__auto__();
(statearr_37040[(6)] = c__26640__auto___39088);

return statearr_37040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
});})(__39084,c__26640__auto___39088,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async))
);


break;
case "async":
var c__26640__auto___39114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39084,c__26640__auto___39114,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async){
return (function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = ((function (__39084,c__26640__auto___39114,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async){
return (function (state_37053){
var state_val_37054 = (state_37053[(1)]);
if((state_val_37054 === (1))){
var state_37053__$1 = state_37053;
var statearr_37057_39118 = state_37053__$1;
(statearr_37057_39118[(2)] = null);

(statearr_37057_39118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (2))){
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37053__$1,(4),jobs);
} else {
if((state_val_37054 === (3))){
var inst_37051 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37053__$1,inst_37051);
} else {
if((state_val_37054 === (4))){
var inst_37043 = (state_37053[(2)]);
var inst_37044 = async(inst_37043);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_37044)){
var statearr_37058_39123 = state_37053__$1;
(statearr_37058_39123[(1)] = (5));

} else {
var statearr_37059_39124 = state_37053__$1;
(statearr_37059_39124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (5))){
var state_37053__$1 = state_37053;
var statearr_37060_39125 = state_37053__$1;
(statearr_37060_39125[(2)] = null);

(statearr_37060_39125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (6))){
var state_37053__$1 = state_37053;
var statearr_37065_39126 = state_37053__$1;
(statearr_37065_39126[(2)] = null);

(statearr_37065_39126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (7))){
var inst_37049 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37066_39127 = state_37053__$1;
(statearr_37066_39127[(2)] = inst_37049);

(statearr_37066_39127[(1)] = (3));


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
});})(__39084,c__26640__auto___39114,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async))
;
return ((function (__39084,switch__26555__auto__,c__26640__auto___39114,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0 = (function (){
var statearr_37067 = [null,null,null,null,null,null,null];
(statearr_37067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__);

(statearr_37067[(1)] = (1));

return statearr_37067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1 = (function (state_37053){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37053);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37068){var ex__26559__auto__ = e37068;
var statearr_37069_39130 = state_37053;
(statearr_37069_39130[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37053[(4)]))){
var statearr_37070_39131 = state_37053;
(statearr_37070_39131[(1)] = cljs.core.first((state_37053[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39132 = state_37053;
state_37053 = G__39132;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = function(state_37053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1.call(this,state_37053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__;
})()
;})(__39084,switch__26555__auto__,c__26640__auto___39114,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async))
})();
var state__26642__auto__ = (function (){var statearr_37075 = f__26641__auto__();
(statearr_37075[(6)] = c__26640__auto___39114);

return statearr_37075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
});})(__39084,c__26640__auto___39114,G__36950_39085,G__36950_39086__$1,n__4741__auto___39082,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36950_39086__$1)].join('')));

}

var G__39133 = (__39084 + (1));
__39084 = G__39133;
continue;
} else {
}
break;
}

var c__26640__auto___39134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37097){
var state_val_37098 = (state_37097[(1)]);
if((state_val_37098 === (7))){
var inst_37093 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
var statearr_37112_39135 = state_37097__$1;
(statearr_37112_39135[(2)] = inst_37093);

(statearr_37112_39135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (1))){
var state_37097__$1 = state_37097;
var statearr_37113_39136 = state_37097__$1;
(statearr_37113_39136[(2)] = null);

(statearr_37113_39136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (4))){
var inst_37078 = (state_37097[(7)]);
var inst_37078__$1 = (state_37097[(2)]);
var inst_37079 = (inst_37078__$1 == null);
var state_37097__$1 = (function (){var statearr_37114 = state_37097;
(statearr_37114[(7)] = inst_37078__$1);

return statearr_37114;
})();
if(cljs.core.truth_(inst_37079)){
var statearr_37115_39137 = state_37097__$1;
(statearr_37115_39137[(1)] = (5));

} else {
var statearr_37116_39138 = state_37097__$1;
(statearr_37116_39138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (6))){
var inst_37078 = (state_37097[(7)]);
var inst_37083 = (state_37097[(8)]);
var inst_37083__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37085 = [inst_37078,inst_37083__$1];
var inst_37086 = (new cljs.core.PersistentVector(null,2,(5),inst_37084,inst_37085,null));
var state_37097__$1 = (function (){var statearr_37120 = state_37097;
(statearr_37120[(8)] = inst_37083__$1);

return statearr_37120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37097__$1,(8),jobs,inst_37086);
} else {
if((state_val_37098 === (3))){
var inst_37095 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37097__$1,inst_37095);
} else {
if((state_val_37098 === (2))){
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37097__$1,(4),from);
} else {
if((state_val_37098 === (9))){
var inst_37090 = (state_37097[(2)]);
var state_37097__$1 = (function (){var statearr_37121 = state_37097;
(statearr_37121[(9)] = inst_37090);

return statearr_37121;
})();
var statearr_37123_39140 = state_37097__$1;
(statearr_37123_39140[(2)] = null);

(statearr_37123_39140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (5))){
var inst_37081 = cljs.core.async.close_BANG_(jobs);
var state_37097__$1 = state_37097;
var statearr_37124_39142 = state_37097__$1;
(statearr_37124_39142[(2)] = inst_37081);

(statearr_37124_39142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (8))){
var inst_37083 = (state_37097[(8)]);
var inst_37088 = (state_37097[(2)]);
var state_37097__$1 = (function (){var statearr_37125 = state_37097;
(statearr_37125[(10)] = inst_37088);

return statearr_37125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37097__$1,(9),results,inst_37083);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0 = (function (){
var statearr_37126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__);

(statearr_37126[(1)] = (1));

return statearr_37126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1 = (function (state_37097){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37097);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37127){var ex__26559__auto__ = e37127;
var statearr_37128_39143 = state_37097;
(statearr_37128_39143[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37097[(4)]))){
var statearr_37129_39144 = state_37097;
(statearr_37129_39144[(1)] = cljs.core.first((state_37097[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39145 = state_37097;
state_37097 = G__39145;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = function(state_37097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1.call(this,state_37097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37130 = f__26641__auto__();
(statearr_37130[(6)] = c__26640__auto___39134);

return statearr_37130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


var c__26640__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37184){
var state_val_37185 = (state_37184[(1)]);
if((state_val_37185 === (7))){
var inst_37180 = (state_37184[(2)]);
var state_37184__$1 = state_37184;
var statearr_37186_39146 = state_37184__$1;
(statearr_37186_39146[(2)] = inst_37180);

(statearr_37186_39146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (20))){
var state_37184__$1 = state_37184;
var statearr_37187_39147 = state_37184__$1;
(statearr_37187_39147[(2)] = null);

(statearr_37187_39147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (1))){
var state_37184__$1 = state_37184;
var statearr_37194_39148 = state_37184__$1;
(statearr_37194_39148[(2)] = null);

(statearr_37194_39148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (4))){
var inst_37136 = (state_37184[(7)]);
var inst_37136__$1 = (state_37184[(2)]);
var inst_37137 = (inst_37136__$1 == null);
var state_37184__$1 = (function (){var statearr_37195 = state_37184;
(statearr_37195[(7)] = inst_37136__$1);

return statearr_37195;
})();
if(cljs.core.truth_(inst_37137)){
var statearr_37196_39149 = state_37184__$1;
(statearr_37196_39149[(1)] = (5));

} else {
var statearr_37197_39150 = state_37184__$1;
(statearr_37197_39150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (15))){
var inst_37150 = (state_37184[(8)]);
var state_37184__$1 = state_37184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37184__$1,(18),to,inst_37150);
} else {
if((state_val_37185 === (21))){
var inst_37175 = (state_37184[(2)]);
var state_37184__$1 = state_37184;
var statearr_37198_39151 = state_37184__$1;
(statearr_37198_39151[(2)] = inst_37175);

(statearr_37198_39151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (13))){
var inst_37177 = (state_37184[(2)]);
var state_37184__$1 = (function (){var statearr_37199 = state_37184;
(statearr_37199[(9)] = inst_37177);

return statearr_37199;
})();
var statearr_37200_39152 = state_37184__$1;
(statearr_37200_39152[(2)] = null);

(statearr_37200_39152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (6))){
var inst_37136 = (state_37184[(7)]);
var state_37184__$1 = state_37184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37184__$1,(11),inst_37136);
} else {
if((state_val_37185 === (17))){
var inst_37170 = (state_37184[(2)]);
var state_37184__$1 = state_37184;
if(cljs.core.truth_(inst_37170)){
var statearr_37201_39154 = state_37184__$1;
(statearr_37201_39154[(1)] = (19));

} else {
var statearr_37202_39155 = state_37184__$1;
(statearr_37202_39155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (3))){
var inst_37182 = (state_37184[(2)]);
var state_37184__$1 = state_37184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37184__$1,inst_37182);
} else {
if((state_val_37185 === (12))){
var inst_37147 = (state_37184[(10)]);
var state_37184__$1 = state_37184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37184__$1,(14),inst_37147);
} else {
if((state_val_37185 === (2))){
var state_37184__$1 = state_37184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37184__$1,(4),results);
} else {
if((state_val_37185 === (19))){
var state_37184__$1 = state_37184;
var statearr_37208_39157 = state_37184__$1;
(statearr_37208_39157[(2)] = null);

(statearr_37208_39157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (11))){
var inst_37147 = (state_37184[(2)]);
var state_37184__$1 = (function (){var statearr_37210 = state_37184;
(statearr_37210[(10)] = inst_37147);

return statearr_37210;
})();
var statearr_37211_39158 = state_37184__$1;
(statearr_37211_39158[(2)] = null);

(statearr_37211_39158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (9))){
var state_37184__$1 = state_37184;
var statearr_37213_39159 = state_37184__$1;
(statearr_37213_39159[(2)] = null);

(statearr_37213_39159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (5))){
var state_37184__$1 = state_37184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37214_39160 = state_37184__$1;
(statearr_37214_39160[(1)] = (8));

} else {
var statearr_37216_39161 = state_37184__$1;
(statearr_37216_39161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (14))){
var inst_37150 = (state_37184[(8)]);
var inst_37164 = (state_37184[(11)]);
var inst_37150__$1 = (state_37184[(2)]);
var inst_37163 = (inst_37150__$1 == null);
var inst_37164__$1 = cljs.core.not(inst_37163);
var state_37184__$1 = (function (){var statearr_37217 = state_37184;
(statearr_37217[(8)] = inst_37150__$1);

(statearr_37217[(11)] = inst_37164__$1);

return statearr_37217;
})();
if(inst_37164__$1){
var statearr_37218_39162 = state_37184__$1;
(statearr_37218_39162[(1)] = (15));

} else {
var statearr_37219_39163 = state_37184__$1;
(statearr_37219_39163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (16))){
var inst_37164 = (state_37184[(11)]);
var state_37184__$1 = state_37184;
var statearr_37220_39164 = state_37184__$1;
(statearr_37220_39164[(2)] = inst_37164);

(statearr_37220_39164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (10))){
var inst_37143 = (state_37184[(2)]);
var state_37184__$1 = state_37184;
var statearr_37221_39165 = state_37184__$1;
(statearr_37221_39165[(2)] = inst_37143);

(statearr_37221_39165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (18))){
var inst_37167 = (state_37184[(2)]);
var state_37184__$1 = state_37184;
var statearr_37222_39166 = state_37184__$1;
(statearr_37222_39166[(2)] = inst_37167);

(statearr_37222_39166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37185 === (8))){
var inst_37140 = cljs.core.async.close_BANG_(to);
var state_37184__$1 = state_37184;
var statearr_37223_39167 = state_37184__$1;
(statearr_37223_39167[(2)] = inst_37140);

(statearr_37223_39167[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0 = (function (){
var statearr_37224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__);

(statearr_37224[(1)] = (1));

return statearr_37224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1 = (function (state_37184){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37184);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37225){var ex__26559__auto__ = e37225;
var statearr_37226_39168 = state_37184;
(statearr_37226_39168[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37184[(4)]))){
var statearr_37227_39169 = state_37184;
(statearr_37227_39169[(1)] = cljs.core.first((state_37184[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39170 = state_37184;
state_37184 = G__39170;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__ = function(state_37184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1.call(this,state_37184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37228 = f__26641__auto__();
(statearr_37228[(6)] = c__26640__auto__);

return statearr_37228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

return c__26640__auto__;
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
var G__37230 = arguments.length;
switch (G__37230) {
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
var G__37232 = arguments.length;
switch (G__37232) {
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
var G__37234 = arguments.length;
switch (G__37234) {
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
var c__26640__auto___39177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37262){
var state_val_37263 = (state_37262[(1)]);
if((state_val_37263 === (7))){
var inst_37258 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37264_39178 = state_37262__$1;
(statearr_37264_39178[(2)] = inst_37258);

(statearr_37264_39178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (1))){
var state_37262__$1 = state_37262;
var statearr_37265_39179 = state_37262__$1;
(statearr_37265_39179[(2)] = null);

(statearr_37265_39179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (4))){
var inst_37238 = (state_37262[(7)]);
var inst_37238__$1 = (state_37262[(2)]);
var inst_37239 = (inst_37238__$1 == null);
var state_37262__$1 = (function (){var statearr_37266 = state_37262;
(statearr_37266[(7)] = inst_37238__$1);

return statearr_37266;
})();
if(cljs.core.truth_(inst_37239)){
var statearr_37267_39180 = state_37262__$1;
(statearr_37267_39180[(1)] = (5));

} else {
var statearr_37268_39181 = state_37262__$1;
(statearr_37268_39181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (13))){
var state_37262__$1 = state_37262;
var statearr_37269_39182 = state_37262__$1;
(statearr_37269_39182[(2)] = null);

(statearr_37269_39182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (6))){
var inst_37238 = (state_37262[(7)]);
var inst_37245 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37238) : p.call(null,inst_37238));
var state_37262__$1 = state_37262;
if(cljs.core.truth_(inst_37245)){
var statearr_37270_39183 = state_37262__$1;
(statearr_37270_39183[(1)] = (9));

} else {
var statearr_37271_39188 = state_37262__$1;
(statearr_37271_39188[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (3))){
var inst_37260 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37262__$1,inst_37260);
} else {
if((state_val_37263 === (12))){
var state_37262__$1 = state_37262;
var statearr_37272_39189 = state_37262__$1;
(statearr_37272_39189[(2)] = null);

(statearr_37272_39189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (2))){
var state_37262__$1 = state_37262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37262__$1,(4),ch);
} else {
if((state_val_37263 === (11))){
var inst_37238 = (state_37262[(7)]);
var inst_37249 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37262__$1,(8),inst_37249,inst_37238);
} else {
if((state_val_37263 === (9))){
var state_37262__$1 = state_37262;
var statearr_37275_39191 = state_37262__$1;
(statearr_37275_39191[(2)] = tc);

(statearr_37275_39191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (5))){
var inst_37242 = cljs.core.async.close_BANG_(tc);
var inst_37243 = cljs.core.async.close_BANG_(fc);
var state_37262__$1 = (function (){var statearr_37276 = state_37262;
(statearr_37276[(8)] = inst_37242);

return statearr_37276;
})();
var statearr_37277_39202 = state_37262__$1;
(statearr_37277_39202[(2)] = inst_37243);

(statearr_37277_39202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (14))){
var inst_37256 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37278_39203 = state_37262__$1;
(statearr_37278_39203[(2)] = inst_37256);

(statearr_37278_39203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (10))){
var state_37262__$1 = state_37262;
var statearr_37279_39204 = state_37262__$1;
(statearr_37279_39204[(2)] = fc);

(statearr_37279_39204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (8))){
var inst_37251 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
if(cljs.core.truth_(inst_37251)){
var statearr_37280_39205 = state_37262__$1;
(statearr_37280_39205[(1)] = (12));

} else {
var statearr_37281_39206 = state_37262__$1;
(statearr_37281_39206[(1)] = (13));

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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_37282 = [null,null,null,null,null,null,null,null,null];
(statearr_37282[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_37282[(1)] = (1));

return statearr_37282;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_37262){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37262);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37283){var ex__26559__auto__ = e37283;
var statearr_37284_39207 = state_37262;
(statearr_37284_39207[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37262[(4)]))){
var statearr_37285_39209 = state_37262;
(statearr_37285_39209[(1)] = cljs.core.first((state_37262[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39210 = state_37262;
state_37262 = G__39210;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_37262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_37262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37286 = f__26641__auto__();
(statearr_37286[(6)] = c__26640__auto___39177);

return statearr_37286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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
var c__26640__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37308){
var state_val_37309 = (state_37308[(1)]);
if((state_val_37309 === (7))){
var inst_37304 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
var statearr_37310_39211 = state_37308__$1;
(statearr_37310_39211[(2)] = inst_37304);

(statearr_37310_39211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (1))){
var inst_37287 = init;
var inst_37288 = inst_37287;
var state_37308__$1 = (function (){var statearr_37311 = state_37308;
(statearr_37311[(7)] = inst_37288);

return statearr_37311;
})();
var statearr_37312_39213 = state_37308__$1;
(statearr_37312_39213[(2)] = null);

(statearr_37312_39213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (4))){
var inst_37291 = (state_37308[(8)]);
var inst_37291__$1 = (state_37308[(2)]);
var inst_37292 = (inst_37291__$1 == null);
var state_37308__$1 = (function (){var statearr_37313 = state_37308;
(statearr_37313[(8)] = inst_37291__$1);

return statearr_37313;
})();
if(cljs.core.truth_(inst_37292)){
var statearr_37314_39214 = state_37308__$1;
(statearr_37314_39214[(1)] = (5));

} else {
var statearr_37315_39215 = state_37308__$1;
(statearr_37315_39215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (6))){
var inst_37288 = (state_37308[(7)]);
var inst_37295 = (state_37308[(9)]);
var inst_37291 = (state_37308[(8)]);
var inst_37295__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37288,inst_37291) : f.call(null,inst_37288,inst_37291));
var inst_37296 = cljs.core.reduced_QMARK_(inst_37295__$1);
var state_37308__$1 = (function (){var statearr_37316 = state_37308;
(statearr_37316[(9)] = inst_37295__$1);

return statearr_37316;
})();
if(inst_37296){
var statearr_37317_39216 = state_37308__$1;
(statearr_37317_39216[(1)] = (8));

} else {
var statearr_37318_39217 = state_37308__$1;
(statearr_37318_39217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (3))){
var inst_37306 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37308__$1,inst_37306);
} else {
if((state_val_37309 === (2))){
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37308__$1,(4),ch);
} else {
if((state_val_37309 === (9))){
var inst_37295 = (state_37308[(9)]);
var inst_37288 = inst_37295;
var state_37308__$1 = (function (){var statearr_37319 = state_37308;
(statearr_37319[(7)] = inst_37288);

return statearr_37319;
})();
var statearr_37320_39218 = state_37308__$1;
(statearr_37320_39218[(2)] = null);

(statearr_37320_39218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (5))){
var inst_37288 = (state_37308[(7)]);
var state_37308__$1 = state_37308;
var statearr_37321_39220 = state_37308__$1;
(statearr_37321_39220[(2)] = inst_37288);

(statearr_37321_39220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (10))){
var inst_37302 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
var statearr_37322_39221 = state_37308__$1;
(statearr_37322_39221[(2)] = inst_37302);

(statearr_37322_39221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (8))){
var inst_37295 = (state_37308[(9)]);
var inst_37298 = cljs.core.deref(inst_37295);
var state_37308__$1 = state_37308;
var statearr_37323_39223 = state_37308__$1;
(statearr_37323_39223[(2)] = inst_37298);

(statearr_37323_39223[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26556__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26556__auto____0 = (function (){
var statearr_37324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37324[(0)] = cljs$core$async$reduce_$_state_machine__26556__auto__);

(statearr_37324[(1)] = (1));

return statearr_37324;
});
var cljs$core$async$reduce_$_state_machine__26556__auto____1 = (function (state_37308){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37308);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37325){var ex__26559__auto__ = e37325;
var statearr_37326_39224 = state_37308;
(statearr_37326_39224[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37308[(4)]))){
var statearr_37327_39225 = state_37308;
(statearr_37327_39225[(1)] = cljs.core.first((state_37308[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39226 = state_37308;
state_37308 = G__39226;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26556__auto__ = function(state_37308){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26556__auto____1.call(this,state_37308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26556__auto____0;
cljs$core$async$reduce_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26556__auto____1;
return cljs$core$async$reduce_$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37329 = f__26641__auto__();
(statearr_37329[(6)] = c__26640__auto__);

return statearr_37329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

return c__26640__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26640__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37342){
var state_val_37343 = (state_37342[(1)]);
if((state_val_37343 === (1))){
var inst_37337 = cljs.core.async.reduce(f__$1,init,ch);
var state_37342__$1 = state_37342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37342__$1,(2),inst_37337);
} else {
if((state_val_37343 === (2))){
var inst_37339 = (state_37342[(2)]);
var inst_37340 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37339) : f__$1.call(null,inst_37339));
var state_37342__$1 = state_37342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37342__$1,inst_37340);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26556__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26556__auto____0 = (function (){
var statearr_37345 = [null,null,null,null,null,null,null];
(statearr_37345[(0)] = cljs$core$async$transduce_$_state_machine__26556__auto__);

(statearr_37345[(1)] = (1));

return statearr_37345;
});
var cljs$core$async$transduce_$_state_machine__26556__auto____1 = (function (state_37342){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37342);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37349){var ex__26559__auto__ = e37349;
var statearr_37350_39227 = state_37342;
(statearr_37350_39227[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37342[(4)]))){
var statearr_37351_39228 = state_37342;
(statearr_37351_39228[(1)] = cljs.core.first((state_37342[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39229 = state_37342;
state_37342 = G__39229;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26556__auto__ = function(state_37342){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26556__auto____1.call(this,state_37342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26556__auto____0;
cljs$core$async$transduce_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26556__auto____1;
return cljs$core$async$transduce_$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37352 = f__26641__auto__();
(statearr_37352[(6)] = c__26640__auto__);

return statearr_37352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

return c__26640__auto__;
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
var G__37355 = arguments.length;
switch (G__37355) {
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
var c__26640__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37390){
var state_val_37391 = (state_37390[(1)]);
if((state_val_37391 === (7))){
var inst_37372 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37393_39235 = state_37390__$1;
(statearr_37393_39235[(2)] = inst_37372);

(statearr_37393_39235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (1))){
var inst_37366 = cljs.core.seq(coll);
var inst_37367 = inst_37366;
var state_37390__$1 = (function (){var statearr_37394 = state_37390;
(statearr_37394[(7)] = inst_37367);

return statearr_37394;
})();
var statearr_37395_39239 = state_37390__$1;
(statearr_37395_39239[(2)] = null);

(statearr_37395_39239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (4))){
var inst_37367 = (state_37390[(7)]);
var inst_37370 = cljs.core.first(inst_37367);
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37390__$1,(7),ch,inst_37370);
} else {
if((state_val_37391 === (13))){
var inst_37384 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37398_39240 = state_37390__$1;
(statearr_37398_39240[(2)] = inst_37384);

(statearr_37398_39240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (6))){
var inst_37375 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
if(cljs.core.truth_(inst_37375)){
var statearr_37400_39241 = state_37390__$1;
(statearr_37400_39241[(1)] = (8));

} else {
var statearr_37401_39242 = state_37390__$1;
(statearr_37401_39242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (3))){
var inst_37388 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37390__$1,inst_37388);
} else {
if((state_val_37391 === (12))){
var state_37390__$1 = state_37390;
var statearr_37402_39246 = state_37390__$1;
(statearr_37402_39246[(2)] = null);

(statearr_37402_39246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (2))){
var inst_37367 = (state_37390[(7)]);
var state_37390__$1 = state_37390;
if(cljs.core.truth_(inst_37367)){
var statearr_37403_39247 = state_37390__$1;
(statearr_37403_39247[(1)] = (4));

} else {
var statearr_37404_39248 = state_37390__$1;
(statearr_37404_39248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (11))){
var inst_37381 = cljs.core.async.close_BANG_(ch);
var state_37390__$1 = state_37390;
var statearr_37406_39250 = state_37390__$1;
(statearr_37406_39250[(2)] = inst_37381);

(statearr_37406_39250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (9))){
var state_37390__$1 = state_37390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37407_39252 = state_37390__$1;
(statearr_37407_39252[(1)] = (11));

} else {
var statearr_37408_39256 = state_37390__$1;
(statearr_37408_39256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (5))){
var inst_37367 = (state_37390[(7)]);
var state_37390__$1 = state_37390;
var statearr_37409_39257 = state_37390__$1;
(statearr_37409_39257[(2)] = inst_37367);

(statearr_37409_39257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (10))){
var inst_37386 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37410_39258 = state_37390__$1;
(statearr_37410_39258[(2)] = inst_37386);

(statearr_37410_39258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (8))){
var inst_37367 = (state_37390[(7)]);
var inst_37377 = cljs.core.next(inst_37367);
var inst_37367__$1 = inst_37377;
var state_37390__$1 = (function (){var statearr_37411 = state_37390;
(statearr_37411[(7)] = inst_37367__$1);

return statearr_37411;
})();
var statearr_37412_39259 = state_37390__$1;
(statearr_37412_39259[(2)] = null);

(statearr_37412_39259[(1)] = (2));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_37416 = [null,null,null,null,null,null,null,null];
(statearr_37416[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_37416[(1)] = (1));

return statearr_37416;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_37390){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37390);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37417){var ex__26559__auto__ = e37417;
var statearr_37418_39264 = state_37390;
(statearr_37418_39264[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37390[(4)]))){
var statearr_37419_39265 = state_37390;
(statearr_37419_39265[(1)] = cljs.core.first((state_37390[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39266 = state_37390;
state_37390 = G__39266;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_37390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_37390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37420 = f__26641__auto__();
(statearr_37420[(6)] = c__26640__auto__);

return statearr_37420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

return c__26640__auto__;
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
var G__37426 = arguments.length;
switch (G__37426) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39275 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_39275(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39288 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_39288(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39289 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_39289(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39294 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_39294(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37439 = (function (ch,cs,meta37440){
this.ch = ch;
this.cs = cs;
this.meta37440 = meta37440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37441,meta37440__$1){
var self__ = this;
var _37441__$1 = this;
return (new cljs.core.async.t_cljs$core$async37439(self__.ch,self__.cs,meta37440__$1));
}));

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37441){
var self__ = this;
var _37441__$1 = this;
return self__.meta37440;
}));

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37440","meta37440",248675519,null)], null);
}));

(cljs.core.async.t_cljs$core$async37439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37439");

(cljs.core.async.t_cljs$core$async37439.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37439.
 */
cljs.core.async.__GT_t_cljs$core$async37439 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37439(ch__$1,cs__$1,meta37440){
return (new cljs.core.async.t_cljs$core$async37439(ch__$1,cs__$1,meta37440));
});

}

return (new cljs.core.async.t_cljs$core$async37439(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26640__auto___39299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37594){
var state_val_37595 = (state_37594[(1)]);
if((state_val_37595 === (7))){
var inst_37586 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37597_39300 = state_37594__$1;
(statearr_37597_39300[(2)] = inst_37586);

(statearr_37597_39300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (20))){
var inst_37486 = (state_37594[(7)]);
var inst_37498 = cljs.core.first(inst_37486);
var inst_37499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37498,(0),null);
var inst_37500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37498,(1),null);
var state_37594__$1 = (function (){var statearr_37598 = state_37594;
(statearr_37598[(8)] = inst_37499);

return statearr_37598;
})();
if(cljs.core.truth_(inst_37500)){
var statearr_37599_39301 = state_37594__$1;
(statearr_37599_39301[(1)] = (22));

} else {
var statearr_37600_39302 = state_37594__$1;
(statearr_37600_39302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (27))){
var inst_37453 = (state_37594[(9)]);
var inst_37532 = (state_37594[(10)]);
var inst_37538 = (state_37594[(11)]);
var inst_37530 = (state_37594[(12)]);
var inst_37538__$1 = cljs.core._nth(inst_37530,inst_37532);
var inst_37539 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37538__$1,inst_37453,done);
var state_37594__$1 = (function (){var statearr_37608 = state_37594;
(statearr_37608[(11)] = inst_37538__$1);

return statearr_37608;
})();
if(cljs.core.truth_(inst_37539)){
var statearr_37609_39305 = state_37594__$1;
(statearr_37609_39305[(1)] = (30));

} else {
var statearr_37610_39306 = state_37594__$1;
(statearr_37610_39306[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (1))){
var state_37594__$1 = state_37594;
var statearr_37612_39307 = state_37594__$1;
(statearr_37612_39307[(2)] = null);

(statearr_37612_39307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (24))){
var inst_37486 = (state_37594[(7)]);
var inst_37506 = (state_37594[(2)]);
var inst_37507 = cljs.core.next(inst_37486);
var inst_37463 = inst_37507;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37594__$1 = (function (){var statearr_37613 = state_37594;
(statearr_37613[(13)] = inst_37463);

(statearr_37613[(14)] = inst_37465);

(statearr_37613[(15)] = inst_37506);

(statearr_37613[(16)] = inst_37466);

(statearr_37613[(17)] = inst_37464);

return statearr_37613;
})();
var statearr_37614_39308 = state_37594__$1;
(statearr_37614_39308[(2)] = null);

(statearr_37614_39308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (39))){
var state_37594__$1 = state_37594;
var statearr_37620_39309 = state_37594__$1;
(statearr_37620_39309[(2)] = null);

(statearr_37620_39309[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (4))){
var inst_37453 = (state_37594[(9)]);
var inst_37453__$1 = (state_37594[(2)]);
var inst_37454 = (inst_37453__$1 == null);
var state_37594__$1 = (function (){var statearr_37622 = state_37594;
(statearr_37622[(9)] = inst_37453__$1);

return statearr_37622;
})();
if(cljs.core.truth_(inst_37454)){
var statearr_37624_39310 = state_37594__$1;
(statearr_37624_39310[(1)] = (5));

} else {
var statearr_37625_39311 = state_37594__$1;
(statearr_37625_39311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (15))){
var inst_37463 = (state_37594[(13)]);
var inst_37465 = (state_37594[(14)]);
var inst_37466 = (state_37594[(16)]);
var inst_37464 = (state_37594[(17)]);
var inst_37482 = (state_37594[(2)]);
var inst_37483 = (inst_37466 + (1));
var tmp37617 = inst_37463;
var tmp37618 = inst_37465;
var tmp37619 = inst_37464;
var inst_37463__$1 = tmp37617;
var inst_37464__$1 = tmp37619;
var inst_37465__$1 = tmp37618;
var inst_37466__$1 = inst_37483;
var state_37594__$1 = (function (){var statearr_37627 = state_37594;
(statearr_37627[(13)] = inst_37463__$1);

(statearr_37627[(14)] = inst_37465__$1);

(statearr_37627[(16)] = inst_37466__$1);

(statearr_37627[(18)] = inst_37482);

(statearr_37627[(17)] = inst_37464__$1);

return statearr_37627;
})();
var statearr_37628_39314 = state_37594__$1;
(statearr_37628_39314[(2)] = null);

(statearr_37628_39314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (21))){
var inst_37510 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37634_39315 = state_37594__$1;
(statearr_37634_39315[(2)] = inst_37510);

(statearr_37634_39315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (31))){
var inst_37538 = (state_37594[(11)]);
var inst_37542 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37538);
var state_37594__$1 = state_37594;
var statearr_37646_39316 = state_37594__$1;
(statearr_37646_39316[(2)] = inst_37542);

(statearr_37646_39316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (32))){
var inst_37531 = (state_37594[(19)]);
var inst_37532 = (state_37594[(10)]);
var inst_37529 = (state_37594[(20)]);
var inst_37530 = (state_37594[(12)]);
var inst_37544 = (state_37594[(2)]);
var inst_37545 = (inst_37532 + (1));
var tmp37630 = inst_37531;
var tmp37631 = inst_37529;
var tmp37632 = inst_37530;
var inst_37529__$1 = tmp37631;
var inst_37530__$1 = tmp37632;
var inst_37531__$1 = tmp37630;
var inst_37532__$1 = inst_37545;
var state_37594__$1 = (function (){var statearr_37659 = state_37594;
(statearr_37659[(21)] = inst_37544);

(statearr_37659[(19)] = inst_37531__$1);

(statearr_37659[(10)] = inst_37532__$1);

(statearr_37659[(20)] = inst_37529__$1);

(statearr_37659[(12)] = inst_37530__$1);

return statearr_37659;
})();
var statearr_37660_39324 = state_37594__$1;
(statearr_37660_39324[(2)] = null);

(statearr_37660_39324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (40))){
var inst_37559 = (state_37594[(22)]);
var inst_37563 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37559);
var state_37594__$1 = state_37594;
var statearr_37661_39326 = state_37594__$1;
(statearr_37661_39326[(2)] = inst_37563);

(statearr_37661_39326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (33))){
var inst_37548 = (state_37594[(23)]);
var inst_37550 = cljs.core.chunked_seq_QMARK_(inst_37548);
var state_37594__$1 = state_37594;
if(inst_37550){
var statearr_37662_39328 = state_37594__$1;
(statearr_37662_39328[(1)] = (36));

} else {
var statearr_37663_39330 = state_37594__$1;
(statearr_37663_39330[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (13))){
var inst_37475 = (state_37594[(24)]);
var inst_37478 = cljs.core.async.close_BANG_(inst_37475);
var state_37594__$1 = state_37594;
var statearr_37664_39334 = state_37594__$1;
(statearr_37664_39334[(2)] = inst_37478);

(statearr_37664_39334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (22))){
var inst_37499 = (state_37594[(8)]);
var inst_37503 = cljs.core.async.close_BANG_(inst_37499);
var state_37594__$1 = state_37594;
var statearr_37666_39335 = state_37594__$1;
(statearr_37666_39335[(2)] = inst_37503);

(statearr_37666_39335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (36))){
var inst_37548 = (state_37594[(23)]);
var inst_37552 = cljs.core.chunk_first(inst_37548);
var inst_37553 = cljs.core.chunk_rest(inst_37548);
var inst_37554 = cljs.core.count(inst_37552);
var inst_37529 = inst_37553;
var inst_37530 = inst_37552;
var inst_37531 = inst_37554;
var inst_37532 = (0);
var state_37594__$1 = (function (){var statearr_37667 = state_37594;
(statearr_37667[(19)] = inst_37531);

(statearr_37667[(10)] = inst_37532);

(statearr_37667[(20)] = inst_37529);

(statearr_37667[(12)] = inst_37530);

return statearr_37667;
})();
var statearr_37668_39337 = state_37594__$1;
(statearr_37668_39337[(2)] = null);

(statearr_37668_39337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (41))){
var inst_37548 = (state_37594[(23)]);
var inst_37565 = (state_37594[(2)]);
var inst_37566 = cljs.core.next(inst_37548);
var inst_37529 = inst_37566;
var inst_37530 = null;
var inst_37531 = (0);
var inst_37532 = (0);
var state_37594__$1 = (function (){var statearr_37669 = state_37594;
(statearr_37669[(25)] = inst_37565);

(statearr_37669[(19)] = inst_37531);

(statearr_37669[(10)] = inst_37532);

(statearr_37669[(20)] = inst_37529);

(statearr_37669[(12)] = inst_37530);

return statearr_37669;
})();
var statearr_37670_39347 = state_37594__$1;
(statearr_37670_39347[(2)] = null);

(statearr_37670_39347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (43))){
var state_37594__$1 = state_37594;
var statearr_37679_39366 = state_37594__$1;
(statearr_37679_39366[(2)] = null);

(statearr_37679_39366[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (29))){
var inst_37574 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37693_39367 = state_37594__$1;
(statearr_37693_39367[(2)] = inst_37574);

(statearr_37693_39367[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (44))){
var inst_37583 = (state_37594[(2)]);
var state_37594__$1 = (function (){var statearr_37694 = state_37594;
(statearr_37694[(26)] = inst_37583);

return statearr_37694;
})();
var statearr_37695_39368 = state_37594__$1;
(statearr_37695_39368[(2)] = null);

(statearr_37695_39368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (6))){
var inst_37521 = (state_37594[(27)]);
var inst_37520 = cljs.core.deref(cs);
var inst_37521__$1 = cljs.core.keys(inst_37520);
var inst_37522 = cljs.core.count(inst_37521__$1);
var inst_37523 = cljs.core.reset_BANG_(dctr,inst_37522);
var inst_37528 = cljs.core.seq(inst_37521__$1);
var inst_37529 = inst_37528;
var inst_37530 = null;
var inst_37531 = (0);
var inst_37532 = (0);
var state_37594__$1 = (function (){var statearr_37696 = state_37594;
(statearr_37696[(28)] = inst_37523);

(statearr_37696[(19)] = inst_37531);

(statearr_37696[(10)] = inst_37532);

(statearr_37696[(27)] = inst_37521__$1);

(statearr_37696[(20)] = inst_37529);

(statearr_37696[(12)] = inst_37530);

return statearr_37696;
})();
var statearr_37697_39373 = state_37594__$1;
(statearr_37697_39373[(2)] = null);

(statearr_37697_39373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (28))){
var inst_37548 = (state_37594[(23)]);
var inst_37529 = (state_37594[(20)]);
var inst_37548__$1 = cljs.core.seq(inst_37529);
var state_37594__$1 = (function (){var statearr_37698 = state_37594;
(statearr_37698[(23)] = inst_37548__$1);

return statearr_37698;
})();
if(inst_37548__$1){
var statearr_37700_39379 = state_37594__$1;
(statearr_37700_39379[(1)] = (33));

} else {
var statearr_37702_39380 = state_37594__$1;
(statearr_37702_39380[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (25))){
var inst_37531 = (state_37594[(19)]);
var inst_37532 = (state_37594[(10)]);
var inst_37534 = (inst_37532 < inst_37531);
var inst_37535 = inst_37534;
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37535)){
var statearr_37703_39383 = state_37594__$1;
(statearr_37703_39383[(1)] = (27));

} else {
var statearr_37704_39384 = state_37594__$1;
(statearr_37704_39384[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (34))){
var state_37594__$1 = state_37594;
var statearr_37705_39385 = state_37594__$1;
(statearr_37705_39385[(2)] = null);

(statearr_37705_39385[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (17))){
var state_37594__$1 = state_37594;
var statearr_37706_39386 = state_37594__$1;
(statearr_37706_39386[(2)] = null);

(statearr_37706_39386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (3))){
var inst_37588 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37594__$1,inst_37588);
} else {
if((state_val_37595 === (12))){
var inst_37515 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37707_39390 = state_37594__$1;
(statearr_37707_39390[(2)] = inst_37515);

(statearr_37707_39390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (2))){
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37594__$1,(4),ch);
} else {
if((state_val_37595 === (23))){
var state_37594__$1 = state_37594;
var statearr_37708_39395 = state_37594__$1;
(statearr_37708_39395[(2)] = null);

(statearr_37708_39395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (35))){
var inst_37572 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37710_39396 = state_37594__$1;
(statearr_37710_39396[(2)] = inst_37572);

(statearr_37710_39396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (19))){
var inst_37486 = (state_37594[(7)]);
var inst_37490 = cljs.core.chunk_first(inst_37486);
var inst_37491 = cljs.core.chunk_rest(inst_37486);
var inst_37492 = cljs.core.count(inst_37490);
var inst_37463 = inst_37491;
var inst_37464 = inst_37490;
var inst_37465 = inst_37492;
var inst_37466 = (0);
var state_37594__$1 = (function (){var statearr_37711 = state_37594;
(statearr_37711[(13)] = inst_37463);

(statearr_37711[(14)] = inst_37465);

(statearr_37711[(16)] = inst_37466);

(statearr_37711[(17)] = inst_37464);

return statearr_37711;
})();
var statearr_37712_39404 = state_37594__$1;
(statearr_37712_39404[(2)] = null);

(statearr_37712_39404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (11))){
var inst_37486 = (state_37594[(7)]);
var inst_37463 = (state_37594[(13)]);
var inst_37486__$1 = cljs.core.seq(inst_37463);
var state_37594__$1 = (function (){var statearr_37713 = state_37594;
(statearr_37713[(7)] = inst_37486__$1);

return statearr_37713;
})();
if(inst_37486__$1){
var statearr_37714_39408 = state_37594__$1;
(statearr_37714_39408[(1)] = (16));

} else {
var statearr_37715_39409 = state_37594__$1;
(statearr_37715_39409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (9))){
var inst_37517 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37716_39410 = state_37594__$1;
(statearr_37716_39410[(2)] = inst_37517);

(statearr_37716_39410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (5))){
var inst_37461 = cljs.core.deref(cs);
var inst_37462 = cljs.core.seq(inst_37461);
var inst_37463 = inst_37462;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37594__$1 = (function (){var statearr_37718 = state_37594;
(statearr_37718[(13)] = inst_37463);

(statearr_37718[(14)] = inst_37465);

(statearr_37718[(16)] = inst_37466);

(statearr_37718[(17)] = inst_37464);

return statearr_37718;
})();
var statearr_37719_39420 = state_37594__$1;
(statearr_37719_39420[(2)] = null);

(statearr_37719_39420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (14))){
var state_37594__$1 = state_37594;
var statearr_37720_39427 = state_37594__$1;
(statearr_37720_39427[(2)] = null);

(statearr_37720_39427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (45))){
var inst_37580 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37721_39428 = state_37594__$1;
(statearr_37721_39428[(2)] = inst_37580);

(statearr_37721_39428[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (26))){
var inst_37521 = (state_37594[(27)]);
var inst_37576 = (state_37594[(2)]);
var inst_37577 = cljs.core.seq(inst_37521);
var state_37594__$1 = (function (){var statearr_37722 = state_37594;
(statearr_37722[(29)] = inst_37576);

return statearr_37722;
})();
if(inst_37577){
var statearr_37723_39430 = state_37594__$1;
(statearr_37723_39430[(1)] = (42));

} else {
var statearr_37724_39431 = state_37594__$1;
(statearr_37724_39431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (16))){
var inst_37486 = (state_37594[(7)]);
var inst_37488 = cljs.core.chunked_seq_QMARK_(inst_37486);
var state_37594__$1 = state_37594;
if(inst_37488){
var statearr_37725_39432 = state_37594__$1;
(statearr_37725_39432[(1)] = (19));

} else {
var statearr_37727_39433 = state_37594__$1;
(statearr_37727_39433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (38))){
var inst_37569 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37728_39434 = state_37594__$1;
(statearr_37728_39434[(2)] = inst_37569);

(statearr_37728_39434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (30))){
var state_37594__$1 = state_37594;
var statearr_37729_39435 = state_37594__$1;
(statearr_37729_39435[(2)] = null);

(statearr_37729_39435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (10))){
var inst_37466 = (state_37594[(16)]);
var inst_37464 = (state_37594[(17)]);
var inst_37474 = cljs.core._nth(inst_37464,inst_37466);
var inst_37475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37474,(0),null);
var inst_37476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37474,(1),null);
var state_37594__$1 = (function (){var statearr_37730 = state_37594;
(statearr_37730[(24)] = inst_37475);

return statearr_37730;
})();
if(cljs.core.truth_(inst_37476)){
var statearr_37731_39436 = state_37594__$1;
(statearr_37731_39436[(1)] = (13));

} else {
var statearr_37732_39437 = state_37594__$1;
(statearr_37732_39437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (18))){
var inst_37513 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37733_39438 = state_37594__$1;
(statearr_37733_39438[(2)] = inst_37513);

(statearr_37733_39438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (42))){
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37594__$1,(45),dchan);
} else {
if((state_val_37595 === (37))){
var inst_37453 = (state_37594[(9)]);
var inst_37559 = (state_37594[(22)]);
var inst_37548 = (state_37594[(23)]);
var inst_37559__$1 = cljs.core.first(inst_37548);
var inst_37560 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37559__$1,inst_37453,done);
var state_37594__$1 = (function (){var statearr_37735 = state_37594;
(statearr_37735[(22)] = inst_37559__$1);

return statearr_37735;
})();
if(cljs.core.truth_(inst_37560)){
var statearr_37736_39441 = state_37594__$1;
(statearr_37736_39441[(1)] = (39));

} else {
var statearr_37737_39442 = state_37594__$1;
(statearr_37737_39442[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (8))){
var inst_37465 = (state_37594[(14)]);
var inst_37466 = (state_37594[(16)]);
var inst_37468 = (inst_37466 < inst_37465);
var inst_37469 = inst_37468;
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37469)){
var statearr_37738_39443 = state_37594__$1;
(statearr_37738_39443[(1)] = (10));

} else {
var statearr_37739_39444 = state_37594__$1;
(statearr_37739_39444[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26556__auto__ = null;
var cljs$core$async$mult_$_state_machine__26556__auto____0 = (function (){
var statearr_37740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37740[(0)] = cljs$core$async$mult_$_state_machine__26556__auto__);

(statearr_37740[(1)] = (1));

return statearr_37740;
});
var cljs$core$async$mult_$_state_machine__26556__auto____1 = (function (state_37594){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37594);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37741){var ex__26559__auto__ = e37741;
var statearr_37742_39454 = state_37594;
(statearr_37742_39454[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37594[(4)]))){
var statearr_37743_39455 = state_37594;
(statearr_37743_39455[(1)] = cljs.core.first((state_37594[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39456 = state_37594;
state_37594 = G__39456;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26556__auto__ = function(state_37594){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26556__auto____1.call(this,state_37594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26556__auto____0;
cljs$core$async$mult_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26556__auto____1;
return cljs$core$async$mult_$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37745 = f__26641__auto__();
(statearr_37745[(6)] = c__26640__auto___39299);

return statearr_37745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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
var G__37747 = arguments.length;
switch (G__37747) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39459 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_39459(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39460 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_39460(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39461 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39461(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39462 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_39462(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39467 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39467(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39474 = arguments.length;
var i__4865__auto___39475 = (0);
while(true){
if((i__4865__auto___39475 < len__4864__auto___39474)){
args__4870__auto__.push((arguments[i__4865__auto___39475]));

var G__39476 = (i__4865__auto___39475 + (1));
i__4865__auto___39475 = G__39476;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37757){
var map__37758 = p__37757;
var map__37758__$1 = cljs.core.__destructure_map(map__37758);
var opts = map__37758__$1;
var statearr_37759_39478 = state;
(statearr_37759_39478[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37761_39485 = state;
(statearr_37761_39485[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_37762_39489 = state;
(statearr_37762_39489[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37753){
var G__37754 = cljs.core.first(seq37753);
var seq37753__$1 = cljs.core.next(seq37753);
var G__37755 = cljs.core.first(seq37753__$1);
var seq37753__$2 = cljs.core.next(seq37753__$1);
var G__37756 = cljs.core.first(seq37753__$2);
var seq37753__$3 = cljs.core.next(seq37753__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37754,G__37755,G__37756,seq37753__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37764 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37765){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37765 = meta37765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37766,meta37765__$1){
var self__ = this;
var _37766__$1 = this;
return (new cljs.core.async.t_cljs$core$async37764(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37765__$1));
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37766){
var self__ = this;
var _37766__$1 = this;
return self__.meta37765;
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37764.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37765","meta37765",779055176,null)], null);
}));

(cljs.core.async.t_cljs$core$async37764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37764");

(cljs.core.async.t_cljs$core$async37764.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37764.
 */
cljs.core.async.__GT_t_cljs$core$async37764 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37764(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37765){
return (new cljs.core.async.t_cljs$core$async37764(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37765));
});

}

return (new cljs.core.async.t_cljs$core$async37764(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26640__auto___39523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_37837){
var state_val_37838 = (state_37837[(1)]);
if((state_val_37838 === (7))){
var inst_37797 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
if(cljs.core.truth_(inst_37797)){
var statearr_37840_39524 = state_37837__$1;
(statearr_37840_39524[(1)] = (8));

} else {
var statearr_37841_39525 = state_37837__$1;
(statearr_37841_39525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (20))){
var inst_37790 = (state_37837[(7)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37837__$1,(23),out,inst_37790);
} else {
if((state_val_37838 === (1))){
var inst_37772 = calc_state();
var inst_37773 = cljs.core.__destructure_map(inst_37772);
var inst_37774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37773,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37773,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37773,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37777 = inst_37772;
var state_37837__$1 = (function (){var statearr_37842 = state_37837;
(statearr_37842[(8)] = inst_37777);

(statearr_37842[(9)] = inst_37775);

(statearr_37842[(10)] = inst_37776);

(statearr_37842[(11)] = inst_37774);

return statearr_37842;
})();
var statearr_37843_39526 = state_37837__$1;
(statearr_37843_39526[(2)] = null);

(statearr_37843_39526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (24))){
var inst_37781 = (state_37837[(12)]);
var inst_37777 = inst_37781;
var state_37837__$1 = (function (){var statearr_37844 = state_37837;
(statearr_37844[(8)] = inst_37777);

return statearr_37844;
})();
var statearr_37845_39527 = state_37837__$1;
(statearr_37845_39527[(2)] = null);

(statearr_37845_39527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (4))){
var inst_37790 = (state_37837[(7)]);
var inst_37792 = (state_37837[(13)]);
var inst_37789 = (state_37837[(2)]);
var inst_37790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37789,(0),null);
var inst_37791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37789,(1),null);
var inst_37792__$1 = (inst_37790__$1 == null);
var state_37837__$1 = (function (){var statearr_37847 = state_37837;
(statearr_37847[(7)] = inst_37790__$1);

(statearr_37847[(14)] = inst_37791);

(statearr_37847[(13)] = inst_37792__$1);

return statearr_37847;
})();
if(cljs.core.truth_(inst_37792__$1)){
var statearr_37848_39528 = state_37837__$1;
(statearr_37848_39528[(1)] = (5));

} else {
var statearr_37849_39529 = state_37837__$1;
(statearr_37849_39529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (15))){
var inst_37782 = (state_37837[(15)]);
var inst_37811 = (state_37837[(16)]);
var inst_37811__$1 = cljs.core.empty_QMARK_(inst_37782);
var state_37837__$1 = (function (){var statearr_37850 = state_37837;
(statearr_37850[(16)] = inst_37811__$1);

return statearr_37850;
})();
if(inst_37811__$1){
var statearr_37851_39531 = state_37837__$1;
(statearr_37851_39531[(1)] = (17));

} else {
var statearr_37852_39532 = state_37837__$1;
(statearr_37852_39532[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (21))){
var inst_37781 = (state_37837[(12)]);
var inst_37777 = inst_37781;
var state_37837__$1 = (function (){var statearr_37853 = state_37837;
(statearr_37853[(8)] = inst_37777);

return statearr_37853;
})();
var statearr_37854_39533 = state_37837__$1;
(statearr_37854_39533[(2)] = null);

(statearr_37854_39533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (13))){
var inst_37804 = (state_37837[(2)]);
var inst_37805 = calc_state();
var inst_37777 = inst_37805;
var state_37837__$1 = (function (){var statearr_37856 = state_37837;
(statearr_37856[(17)] = inst_37804);

(statearr_37856[(8)] = inst_37777);

return statearr_37856;
})();
var statearr_37857_39535 = state_37837__$1;
(statearr_37857_39535[(2)] = null);

(statearr_37857_39535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (22))){
var inst_37831 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37858_39538 = state_37837__$1;
(statearr_37858_39538[(2)] = inst_37831);

(statearr_37858_39538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (6))){
var inst_37791 = (state_37837[(14)]);
var inst_37795 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37791,change);
var state_37837__$1 = state_37837;
var statearr_37859_39539 = state_37837__$1;
(statearr_37859_39539[(2)] = inst_37795);

(statearr_37859_39539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (25))){
var state_37837__$1 = state_37837;
var statearr_37860_39540 = state_37837__$1;
(statearr_37860_39540[(2)] = null);

(statearr_37860_39540[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (17))){
var inst_37791 = (state_37837[(14)]);
var inst_37783 = (state_37837[(18)]);
var inst_37813 = (inst_37783.cljs$core$IFn$_invoke$arity$1 ? inst_37783.cljs$core$IFn$_invoke$arity$1(inst_37791) : inst_37783.call(null,inst_37791));
var inst_37814 = cljs.core.not(inst_37813);
var state_37837__$1 = state_37837;
var statearr_37861_39541 = state_37837__$1;
(statearr_37861_39541[(2)] = inst_37814);

(statearr_37861_39541[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (3))){
var inst_37835 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37837__$1,inst_37835);
} else {
if((state_val_37838 === (12))){
var state_37837__$1 = state_37837;
var statearr_37862_39547 = state_37837__$1;
(statearr_37862_39547[(2)] = null);

(statearr_37862_39547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (2))){
var inst_37781 = (state_37837[(12)]);
var inst_37777 = (state_37837[(8)]);
var inst_37781__$1 = cljs.core.__destructure_map(inst_37777);
var inst_37782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37781__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37781__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37781__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37837__$1 = (function (){var statearr_37864 = state_37837;
(statearr_37864[(12)] = inst_37781__$1);

(statearr_37864[(15)] = inst_37782);

(statearr_37864[(18)] = inst_37783);

return statearr_37864;
})();
return cljs.core.async.ioc_alts_BANG_(state_37837__$1,(4),inst_37784);
} else {
if((state_val_37838 === (23))){
var inst_37822 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
if(cljs.core.truth_(inst_37822)){
var statearr_37865_39548 = state_37837__$1;
(statearr_37865_39548[(1)] = (24));

} else {
var statearr_37866_39549 = state_37837__$1;
(statearr_37866_39549[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (19))){
var inst_37817 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37867_39551 = state_37837__$1;
(statearr_37867_39551[(2)] = inst_37817);

(statearr_37867_39551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (11))){
var inst_37791 = (state_37837[(14)]);
var inst_37801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37791);
var state_37837__$1 = state_37837;
var statearr_37868_39553 = state_37837__$1;
(statearr_37868_39553[(2)] = inst_37801);

(statearr_37868_39553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (9))){
var inst_37782 = (state_37837[(15)]);
var inst_37791 = (state_37837[(14)]);
var inst_37808 = (state_37837[(19)]);
var inst_37808__$1 = (inst_37782.cljs$core$IFn$_invoke$arity$1 ? inst_37782.cljs$core$IFn$_invoke$arity$1(inst_37791) : inst_37782.call(null,inst_37791));
var state_37837__$1 = (function (){var statearr_37869 = state_37837;
(statearr_37869[(19)] = inst_37808__$1);

return statearr_37869;
})();
if(cljs.core.truth_(inst_37808__$1)){
var statearr_37870_39554 = state_37837__$1;
(statearr_37870_39554[(1)] = (14));

} else {
var statearr_37871_39555 = state_37837__$1;
(statearr_37871_39555[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (5))){
var inst_37792 = (state_37837[(13)]);
var state_37837__$1 = state_37837;
var statearr_37873_39556 = state_37837__$1;
(statearr_37873_39556[(2)] = inst_37792);

(statearr_37873_39556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (14))){
var inst_37808 = (state_37837[(19)]);
var state_37837__$1 = state_37837;
var statearr_37874_39557 = state_37837__$1;
(statearr_37874_39557[(2)] = inst_37808);

(statearr_37874_39557[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (26))){
var inst_37827 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37875_39559 = state_37837__$1;
(statearr_37875_39559[(2)] = inst_37827);

(statearr_37875_39559[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (16))){
var inst_37819 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
if(cljs.core.truth_(inst_37819)){
var statearr_37876_39563 = state_37837__$1;
(statearr_37876_39563[(1)] = (20));

} else {
var statearr_37877_39564 = state_37837__$1;
(statearr_37877_39564[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (10))){
var inst_37833 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37878_39565 = state_37837__$1;
(statearr_37878_39565[(2)] = inst_37833);

(statearr_37878_39565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (18))){
var inst_37811 = (state_37837[(16)]);
var state_37837__$1 = state_37837;
var statearr_37881_39566 = state_37837__$1;
(statearr_37881_39566[(2)] = inst_37811);

(statearr_37881_39566[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (8))){
var inst_37790 = (state_37837[(7)]);
var inst_37799 = (inst_37790 == null);
var state_37837__$1 = state_37837;
if(cljs.core.truth_(inst_37799)){
var statearr_37882_39567 = state_37837__$1;
(statearr_37882_39567[(1)] = (11));

} else {
var statearr_37883_39568 = state_37837__$1;
(statearr_37883_39568[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__26556__auto__ = null;
var cljs$core$async$mix_$_state_machine__26556__auto____0 = (function (){
var statearr_37884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37884[(0)] = cljs$core$async$mix_$_state_machine__26556__auto__);

(statearr_37884[(1)] = (1));

return statearr_37884;
});
var cljs$core$async$mix_$_state_machine__26556__auto____1 = (function (state_37837){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_37837);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e37885){var ex__26559__auto__ = e37885;
var statearr_37886_39569 = state_37837;
(statearr_37886_39569[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_37837[(4)]))){
var statearr_37887_39570 = state_37837;
(statearr_37887_39570[(1)] = cljs.core.first((state_37837[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39583 = state_37837;
state_37837 = G__39583;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26556__auto__ = function(state_37837){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26556__auto____1.call(this,state_37837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26556__auto____0;
cljs$core$async$mix_$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26556__auto____1;
return cljs$core$async$mix_$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_37888 = f__26641__auto__();
(statearr_37888[(6)] = c__26640__auto___39523);

return statearr_37888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_39584 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_39584(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39585 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_39585(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39586 = (function() {
var G__39588 = null;
var G__39588__1 = (function (p){
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
var G__39588__2 = (function (p,v){
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
G__39588 = function(p,v){
switch(arguments.length){
case 1:
return G__39588__1.call(this,p);
case 2:
return G__39588__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39588.cljs$core$IFn$_invoke$arity$1 = G__39588__1;
G__39588.cljs$core$IFn$_invoke$arity$2 = G__39588__2;
return G__39588;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37897 = arguments.length;
switch (G__37897) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39586(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39586(p,v);
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
var G__37911 = arguments.length;
switch (G__37911) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37905_SHARP_){
if(cljs.core.truth_((p1__37905_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37905_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37905_SHARP_.call(null,topic)))){
return p1__37905_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37905_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37922 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37923){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37923 = meta37923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37924,meta37923__$1){
var self__ = this;
var _37924__$1 = this;
return (new cljs.core.async.t_cljs$core$async37922(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37923__$1));
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37924){
var self__ = this;
var _37924__$1 = this;
return self__.meta37923;
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37923","meta37923",-1105627342,null)], null);
}));

(cljs.core.async.t_cljs$core$async37922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37922");

(cljs.core.async.t_cljs$core$async37922.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37922.
 */
cljs.core.async.__GT_t_cljs$core$async37922 = (function cljs$core$async$__GT_t_cljs$core$async37922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37923){
return (new cljs.core.async.t_cljs$core$async37922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37923));
});

}

return (new cljs.core.async.t_cljs$core$async37922(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26640__auto___39602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38050){
var state_val_38051 = (state_38050[(1)]);
if((state_val_38051 === (7))){
var inst_38045 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38058_39606 = state_38050__$1;
(statearr_38058_39606[(2)] = inst_38045);

(statearr_38058_39606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (20))){
var state_38050__$1 = state_38050;
var statearr_38061_39607 = state_38050__$1;
(statearr_38061_39607[(2)] = null);

(statearr_38061_39607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (1))){
var state_38050__$1 = state_38050;
var statearr_38065_39608 = state_38050__$1;
(statearr_38065_39608[(2)] = null);

(statearr_38065_39608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (24))){
var inst_38026 = (state_38050[(7)]);
var inst_38037 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38026);
var state_38050__$1 = state_38050;
var statearr_38067_39609 = state_38050__$1;
(statearr_38067_39609[(2)] = inst_38037);

(statearr_38067_39609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (4))){
var inst_37952 = (state_38050[(8)]);
var inst_37952__$1 = (state_38050[(2)]);
var inst_37953 = (inst_37952__$1 == null);
var state_38050__$1 = (function (){var statearr_38071 = state_38050;
(statearr_38071[(8)] = inst_37952__$1);

return statearr_38071;
})();
if(cljs.core.truth_(inst_37953)){
var statearr_38072_39610 = state_38050__$1;
(statearr_38072_39610[(1)] = (5));

} else {
var statearr_38073_39614 = state_38050__$1;
(statearr_38073_39614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (15))){
var inst_38019 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38075_39615 = state_38050__$1;
(statearr_38075_39615[(2)] = inst_38019);

(statearr_38075_39615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (21))){
var inst_38042 = (state_38050[(2)]);
var state_38050__$1 = (function (){var statearr_38079 = state_38050;
(statearr_38079[(9)] = inst_38042);

return statearr_38079;
})();
var statearr_38081_39616 = state_38050__$1;
(statearr_38081_39616[(2)] = null);

(statearr_38081_39616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (13))){
var inst_37996 = (state_38050[(10)]);
var inst_38002 = cljs.core.chunked_seq_QMARK_(inst_37996);
var state_38050__$1 = state_38050;
if(inst_38002){
var statearr_38085_39617 = state_38050__$1;
(statearr_38085_39617[(1)] = (16));

} else {
var statearr_38086_39618 = state_38050__$1;
(statearr_38086_39618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (22))){
var inst_38034 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
if(cljs.core.truth_(inst_38034)){
var statearr_38088_39622 = state_38050__$1;
(statearr_38088_39622[(1)] = (23));

} else {
var statearr_38089_39623 = state_38050__$1;
(statearr_38089_39623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (6))){
var inst_38026 = (state_38050[(7)]);
var inst_38029 = (state_38050[(11)]);
var inst_37952 = (state_38050[(8)]);
var inst_38026__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37952) : topic_fn.call(null,inst_37952));
var inst_38028 = cljs.core.deref(mults);
var inst_38029__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38028,inst_38026__$1);
var state_38050__$1 = (function (){var statearr_38093 = state_38050;
(statearr_38093[(7)] = inst_38026__$1);

(statearr_38093[(11)] = inst_38029__$1);

return statearr_38093;
})();
if(cljs.core.truth_(inst_38029__$1)){
var statearr_38094_39624 = state_38050__$1;
(statearr_38094_39624[(1)] = (19));

} else {
var statearr_38096_39625 = state_38050__$1;
(statearr_38096_39625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (25))){
var inst_38039 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38097_39629 = state_38050__$1;
(statearr_38097_39629[(2)] = inst_38039);

(statearr_38097_39629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (17))){
var inst_37996 = (state_38050[(10)]);
var inst_38010 = cljs.core.first(inst_37996);
var inst_38011 = cljs.core.async.muxch_STAR_(inst_38010);
var inst_38012 = cljs.core.async.close_BANG_(inst_38011);
var inst_38013 = cljs.core.next(inst_37996);
var inst_37969 = inst_38013;
var inst_37970 = null;
var inst_37971 = (0);
var inst_37972 = (0);
var state_38050__$1 = (function (){var statearr_38099 = state_38050;
(statearr_38099[(12)] = inst_37970);

(statearr_38099[(13)] = inst_37971);

(statearr_38099[(14)] = inst_38012);

(statearr_38099[(15)] = inst_37969);

(statearr_38099[(16)] = inst_37972);

return statearr_38099;
})();
var statearr_38102_39631 = state_38050__$1;
(statearr_38102_39631[(2)] = null);

(statearr_38102_39631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (3))){
var inst_38047 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38050__$1,inst_38047);
} else {
if((state_val_38051 === (12))){
var inst_38021 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38106_39635 = state_38050__$1;
(statearr_38106_39635[(2)] = inst_38021);

(statearr_38106_39635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (2))){
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38050__$1,(4),ch);
} else {
if((state_val_38051 === (23))){
var state_38050__$1 = state_38050;
var statearr_38107_39636 = state_38050__$1;
(statearr_38107_39636[(2)] = null);

(statearr_38107_39636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (19))){
var inst_38029 = (state_38050[(11)]);
var inst_37952 = (state_38050[(8)]);
var inst_38032 = cljs.core.async.muxch_STAR_(inst_38029);
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38050__$1,(22),inst_38032,inst_37952);
} else {
if((state_val_38051 === (11))){
var inst_37996 = (state_38050[(10)]);
var inst_37969 = (state_38050[(15)]);
var inst_37996__$1 = cljs.core.seq(inst_37969);
var state_38050__$1 = (function (){var statearr_38109 = state_38050;
(statearr_38109[(10)] = inst_37996__$1);

return statearr_38109;
})();
if(inst_37996__$1){
var statearr_38111_39637 = state_38050__$1;
(statearr_38111_39637[(1)] = (13));

} else {
var statearr_38114_39638 = state_38050__$1;
(statearr_38114_39638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (9))){
var inst_38023 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38115_39639 = state_38050__$1;
(statearr_38115_39639[(2)] = inst_38023);

(statearr_38115_39639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (5))){
var inst_37965 = cljs.core.deref(mults);
var inst_37967 = cljs.core.vals(inst_37965);
var inst_37968 = cljs.core.seq(inst_37967);
var inst_37969 = inst_37968;
var inst_37970 = null;
var inst_37971 = (0);
var inst_37972 = (0);
var state_38050__$1 = (function (){var statearr_38120 = state_38050;
(statearr_38120[(12)] = inst_37970);

(statearr_38120[(13)] = inst_37971);

(statearr_38120[(15)] = inst_37969);

(statearr_38120[(16)] = inst_37972);

return statearr_38120;
})();
var statearr_38121_39640 = state_38050__$1;
(statearr_38121_39640[(2)] = null);

(statearr_38121_39640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (14))){
var state_38050__$1 = state_38050;
var statearr_38125_39641 = state_38050__$1;
(statearr_38125_39641[(2)] = null);

(statearr_38125_39641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (16))){
var inst_37996 = (state_38050[(10)]);
var inst_38004 = cljs.core.chunk_first(inst_37996);
var inst_38005 = cljs.core.chunk_rest(inst_37996);
var inst_38006 = cljs.core.count(inst_38004);
var inst_37969 = inst_38005;
var inst_37970 = inst_38004;
var inst_37971 = inst_38006;
var inst_37972 = (0);
var state_38050__$1 = (function (){var statearr_38127 = state_38050;
(statearr_38127[(12)] = inst_37970);

(statearr_38127[(13)] = inst_37971);

(statearr_38127[(15)] = inst_37969);

(statearr_38127[(16)] = inst_37972);

return statearr_38127;
})();
var statearr_38128_39642 = state_38050__$1;
(statearr_38128_39642[(2)] = null);

(statearr_38128_39642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (10))){
var inst_37970 = (state_38050[(12)]);
var inst_37971 = (state_38050[(13)]);
var inst_37969 = (state_38050[(15)]);
var inst_37972 = (state_38050[(16)]);
var inst_37978 = cljs.core._nth(inst_37970,inst_37972);
var inst_37979 = cljs.core.async.muxch_STAR_(inst_37978);
var inst_37980 = cljs.core.async.close_BANG_(inst_37979);
var inst_37981 = (inst_37972 + (1));
var tmp38122 = inst_37970;
var tmp38123 = inst_37971;
var tmp38124 = inst_37969;
var inst_37969__$1 = tmp38124;
var inst_37970__$1 = tmp38122;
var inst_37971__$1 = tmp38123;
var inst_37972__$1 = inst_37981;
var state_38050__$1 = (function (){var statearr_38134 = state_38050;
(statearr_38134[(12)] = inst_37970__$1);

(statearr_38134[(13)] = inst_37971__$1);

(statearr_38134[(17)] = inst_37980);

(statearr_38134[(15)] = inst_37969__$1);

(statearr_38134[(16)] = inst_37972__$1);

return statearr_38134;
})();
var statearr_38138_39643 = state_38050__$1;
(statearr_38138_39643[(2)] = null);

(statearr_38138_39643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (18))){
var inst_38016 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38139_39644 = state_38050__$1;
(statearr_38139_39644[(2)] = inst_38016);

(statearr_38139_39644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (8))){
var inst_37971 = (state_38050[(13)]);
var inst_37972 = (state_38050[(16)]);
var inst_37975 = (inst_37972 < inst_37971);
var inst_37976 = inst_37975;
var state_38050__$1 = state_38050;
if(cljs.core.truth_(inst_37976)){
var statearr_38140_39645 = state_38050__$1;
(statearr_38140_39645[(1)] = (10));

} else {
var statearr_38141_39646 = state_38050__$1;
(statearr_38141_39646[(1)] = (11));

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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38144[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38144[(1)] = (1));

return statearr_38144;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38050){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38050);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38146){var ex__26559__auto__ = e38146;
var statearr_38148_39647 = state_38050;
(statearr_38148_39647[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38050[(4)]))){
var statearr_38149_39648 = state_38050;
(statearr_38149_39648[(1)] = cljs.core.first((state_38050[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39649 = state_38050;
state_38050 = G__39649;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38155 = f__26641__auto__();
(statearr_38155[(6)] = c__26640__auto___39602);

return statearr_38155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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
var G__38157 = arguments.length;
switch (G__38157) {
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
var G__38163 = arguments.length;
switch (G__38163) {
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
var G__38170 = arguments.length;
switch (G__38170) {
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
var c__26640__auto___39655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38230){
var state_val_38231 = (state_38230[(1)]);
if((state_val_38231 === (7))){
var state_38230__$1 = state_38230;
var statearr_38236_39656 = state_38230__$1;
(statearr_38236_39656[(2)] = null);

(statearr_38236_39656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (1))){
var state_38230__$1 = state_38230;
var statearr_38238_39657 = state_38230__$1;
(statearr_38238_39657[(2)] = null);

(statearr_38238_39657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (4))){
var inst_38183 = (state_38230[(7)]);
var inst_38182 = (state_38230[(8)]);
var inst_38185 = (inst_38183 < inst_38182);
var state_38230__$1 = state_38230;
if(cljs.core.truth_(inst_38185)){
var statearr_38242_39658 = state_38230__$1;
(statearr_38242_39658[(1)] = (6));

} else {
var statearr_38243_39659 = state_38230__$1;
(statearr_38243_39659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (15))){
var inst_38213 = (state_38230[(9)]);
var inst_38218 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38213);
var state_38230__$1 = state_38230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38230__$1,(17),out,inst_38218);
} else {
if((state_val_38231 === (13))){
var inst_38213 = (state_38230[(9)]);
var inst_38213__$1 = (state_38230[(2)]);
var inst_38214 = cljs.core.some(cljs.core.nil_QMARK_,inst_38213__$1);
var state_38230__$1 = (function (){var statearr_38248 = state_38230;
(statearr_38248[(9)] = inst_38213__$1);

return statearr_38248;
})();
if(cljs.core.truth_(inst_38214)){
var statearr_38250_39660 = state_38230__$1;
(statearr_38250_39660[(1)] = (14));

} else {
var statearr_38251_39661 = state_38230__$1;
(statearr_38251_39661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (6))){
var state_38230__$1 = state_38230;
var statearr_38253_39662 = state_38230__$1;
(statearr_38253_39662[(2)] = null);

(statearr_38253_39662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (17))){
var inst_38221 = (state_38230[(2)]);
var state_38230__$1 = (function (){var statearr_38255 = state_38230;
(statearr_38255[(10)] = inst_38221);

return statearr_38255;
})();
var statearr_38256_39663 = state_38230__$1;
(statearr_38256_39663[(2)] = null);

(statearr_38256_39663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (3))){
var inst_38227 = (state_38230[(2)]);
var state_38230__$1 = state_38230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38230__$1,inst_38227);
} else {
if((state_val_38231 === (12))){
var _ = (function (){var statearr_38257 = state_38230;
(statearr_38257[(4)] = cljs.core.rest((state_38230[(4)])));

return statearr_38257;
})();
var state_38230__$1 = state_38230;
var ex38254 = (state_38230__$1[(2)]);
var statearr_38258_39664 = state_38230__$1;
(statearr_38258_39664[(5)] = ex38254);


if((ex38254 instanceof Object)){
var statearr_38260_39665 = state_38230__$1;
(statearr_38260_39665[(1)] = (11));

(statearr_38260_39665[(5)] = null);

} else {
throw ex38254;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (2))){
var inst_38181 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38182 = cnt;
var inst_38183 = (0);
var state_38230__$1 = (function (){var statearr_38266 = state_38230;
(statearr_38266[(11)] = inst_38181);

(statearr_38266[(7)] = inst_38183);

(statearr_38266[(8)] = inst_38182);

return statearr_38266;
})();
var statearr_38270_39666 = state_38230__$1;
(statearr_38270_39666[(2)] = null);

(statearr_38270_39666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (11))){
var inst_38190 = (state_38230[(2)]);
var inst_38192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38230__$1 = (function (){var statearr_38278 = state_38230;
(statearr_38278[(12)] = inst_38190);

return statearr_38278;
})();
var statearr_38280_39667 = state_38230__$1;
(statearr_38280_39667[(2)] = inst_38192);

(statearr_38280_39667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (9))){
var inst_38183 = (state_38230[(7)]);
var _ = (function (){var statearr_38284 = state_38230;
(statearr_38284[(4)] = cljs.core.cons((12),(state_38230[(4)])));

return statearr_38284;
})();
var inst_38198 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38183) : chs__$1.call(null,inst_38183));
var inst_38199 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38183) : done.call(null,inst_38183));
var inst_38200 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38198,inst_38199);
var ___$1 = (function (){var statearr_38285 = state_38230;
(statearr_38285[(4)] = cljs.core.rest((state_38230[(4)])));

return statearr_38285;
})();
var state_38230__$1 = state_38230;
var statearr_38286_39668 = state_38230__$1;
(statearr_38286_39668[(2)] = inst_38200);

(statearr_38286_39668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (5))){
var inst_38211 = (state_38230[(2)]);
var state_38230__$1 = (function (){var statearr_38287 = state_38230;
(statearr_38287[(13)] = inst_38211);

return statearr_38287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38230__$1,(13),dchan);
} else {
if((state_val_38231 === (14))){
var inst_38216 = cljs.core.async.close_BANG_(out);
var state_38230__$1 = state_38230;
var statearr_38296_39669 = state_38230__$1;
(statearr_38296_39669[(2)] = inst_38216);

(statearr_38296_39669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (16))){
var inst_38225 = (state_38230[(2)]);
var state_38230__$1 = state_38230;
var statearr_38300_39670 = state_38230__$1;
(statearr_38300_39670[(2)] = inst_38225);

(statearr_38300_39670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (10))){
var inst_38183 = (state_38230[(7)]);
var inst_38203 = (state_38230[(2)]);
var inst_38204 = (inst_38183 + (1));
var inst_38183__$1 = inst_38204;
var state_38230__$1 = (function (){var statearr_38302 = state_38230;
(statearr_38302[(14)] = inst_38203);

(statearr_38302[(7)] = inst_38183__$1);

return statearr_38302;
})();
var statearr_38303_39671 = state_38230__$1;
(statearr_38303_39671[(2)] = null);

(statearr_38303_39671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38231 === (8))){
var inst_38208 = (state_38230[(2)]);
var state_38230__$1 = state_38230;
var statearr_38307_39672 = state_38230__$1;
(statearr_38307_39672[(2)] = inst_38208);

(statearr_38307_39672[(1)] = (5));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38309[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38309[(1)] = (1));

return statearr_38309;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38230){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38230);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38310){var ex__26559__auto__ = e38310;
var statearr_38311_39677 = state_38230;
(statearr_38311_39677[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38230[(4)]))){
var statearr_38316_39678 = state_38230;
(statearr_38316_39678[(1)] = cljs.core.first((state_38230[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39679 = state_38230;
state_38230 = G__39679;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38318 = f__26641__auto__();
(statearr_38318[(6)] = c__26640__auto___39655);

return statearr_38318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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
var G__38321 = arguments.length;
switch (G__38321) {
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
var c__26640__auto___39682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38369){
var state_val_38370 = (state_38369[(1)]);
if((state_val_38370 === (7))){
var inst_38343 = (state_38369[(7)]);
var inst_38345 = (state_38369[(8)]);
var inst_38343__$1 = (state_38369[(2)]);
var inst_38345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38343__$1,(0),null);
var inst_38346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38343__$1,(1),null);
var inst_38347 = (inst_38345__$1 == null);
var state_38369__$1 = (function (){var statearr_38380 = state_38369;
(statearr_38380[(7)] = inst_38343__$1);

(statearr_38380[(9)] = inst_38346);

(statearr_38380[(8)] = inst_38345__$1);

return statearr_38380;
})();
if(cljs.core.truth_(inst_38347)){
var statearr_38384_39683 = state_38369__$1;
(statearr_38384_39683[(1)] = (8));

} else {
var statearr_38385_39684 = state_38369__$1;
(statearr_38385_39684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (1))){
var inst_38330 = cljs.core.vec(chs);
var inst_38331 = inst_38330;
var state_38369__$1 = (function (){var statearr_38387 = state_38369;
(statearr_38387[(10)] = inst_38331);

return statearr_38387;
})();
var statearr_38388_39692 = state_38369__$1;
(statearr_38388_39692[(2)] = null);

(statearr_38388_39692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (4))){
var inst_38331 = (state_38369[(10)]);
var state_38369__$1 = state_38369;
return cljs.core.async.ioc_alts_BANG_(state_38369__$1,(7),inst_38331);
} else {
if((state_val_38370 === (6))){
var inst_38365 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38392_39693 = state_38369__$1;
(statearr_38392_39693[(2)] = inst_38365);

(statearr_38392_39693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (3))){
var inst_38367 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38369__$1,inst_38367);
} else {
if((state_val_38370 === (2))){
var inst_38331 = (state_38369[(10)]);
var inst_38333 = cljs.core.count(inst_38331);
var inst_38334 = (inst_38333 > (0));
var state_38369__$1 = state_38369;
if(cljs.core.truth_(inst_38334)){
var statearr_38398_39695 = state_38369__$1;
(statearr_38398_39695[(1)] = (4));

} else {
var statearr_38400_39696 = state_38369__$1;
(statearr_38400_39696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (11))){
var inst_38331 = (state_38369[(10)]);
var inst_38358 = (state_38369[(2)]);
var tmp38394 = inst_38331;
var inst_38331__$1 = tmp38394;
var state_38369__$1 = (function (){var statearr_38401 = state_38369;
(statearr_38401[(11)] = inst_38358);

(statearr_38401[(10)] = inst_38331__$1);

return statearr_38401;
})();
var statearr_38402_39697 = state_38369__$1;
(statearr_38402_39697[(2)] = null);

(statearr_38402_39697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (9))){
var inst_38345 = (state_38369[(8)]);
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38369__$1,(11),out,inst_38345);
} else {
if((state_val_38370 === (5))){
var inst_38363 = cljs.core.async.close_BANG_(out);
var state_38369__$1 = state_38369;
var statearr_38408_39698 = state_38369__$1;
(statearr_38408_39698[(2)] = inst_38363);

(statearr_38408_39698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (10))){
var inst_38361 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38409_39702 = state_38369__$1;
(statearr_38409_39702[(2)] = inst_38361);

(statearr_38409_39702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (8))){
var inst_38343 = (state_38369[(7)]);
var inst_38346 = (state_38369[(9)]);
var inst_38345 = (state_38369[(8)]);
var inst_38331 = (state_38369[(10)]);
var inst_38353 = (function (){var cs = inst_38331;
var vec__38339 = inst_38343;
var v = inst_38345;
var c = inst_38346;
return (function (p1__38319_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38319_SHARP_);
});
})();
var inst_38354 = cljs.core.filterv(inst_38353,inst_38331);
var inst_38331__$1 = inst_38354;
var state_38369__$1 = (function (){var statearr_38410 = state_38369;
(statearr_38410[(10)] = inst_38331__$1);

return statearr_38410;
})();
var statearr_38415_39704 = state_38369__$1;
(statearr_38415_39704[(2)] = null);

(statearr_38415_39704[(1)] = (2));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38420[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38420[(1)] = (1));

return statearr_38420;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38369){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38369);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38421){var ex__26559__auto__ = e38421;
var statearr_38422_39705 = state_38369;
(statearr_38422_39705[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38369[(4)]))){
var statearr_38423_39706 = state_38369;
(statearr_38423_39706[(1)] = cljs.core.first((state_38369[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39708 = state_38369;
state_38369 = G__39708;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38428 = f__26641__auto__();
(statearr_38428[(6)] = c__26640__auto___39682);

return statearr_38428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
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
var G__38438 = arguments.length;
switch (G__38438) {
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
var c__26640__auto___39713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38466){
var state_val_38467 = (state_38466[(1)]);
if((state_val_38467 === (7))){
var inst_38444 = (state_38466[(7)]);
var inst_38444__$1 = (state_38466[(2)]);
var inst_38445 = (inst_38444__$1 == null);
var inst_38446 = cljs.core.not(inst_38445);
var state_38466__$1 = (function (){var statearr_38469 = state_38466;
(statearr_38469[(7)] = inst_38444__$1);

return statearr_38469;
})();
if(inst_38446){
var statearr_38470_39714 = state_38466__$1;
(statearr_38470_39714[(1)] = (8));

} else {
var statearr_38471_39715 = state_38466__$1;
(statearr_38471_39715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (1))){
var inst_38439 = (0);
var state_38466__$1 = (function (){var statearr_38472 = state_38466;
(statearr_38472[(8)] = inst_38439);

return statearr_38472;
})();
var statearr_38473_39716 = state_38466__$1;
(statearr_38473_39716[(2)] = null);

(statearr_38473_39716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (4))){
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38466__$1,(7),ch);
} else {
if((state_val_38467 === (6))){
var inst_38461 = (state_38466[(2)]);
var state_38466__$1 = state_38466;
var statearr_38474_39717 = state_38466__$1;
(statearr_38474_39717[(2)] = inst_38461);

(statearr_38474_39717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (3))){
var inst_38463 = (state_38466[(2)]);
var inst_38464 = cljs.core.async.close_BANG_(out);
var state_38466__$1 = (function (){var statearr_38475 = state_38466;
(statearr_38475[(9)] = inst_38463);

return statearr_38475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38466__$1,inst_38464);
} else {
if((state_val_38467 === (2))){
var inst_38439 = (state_38466[(8)]);
var inst_38441 = (inst_38439 < n);
var state_38466__$1 = state_38466;
if(cljs.core.truth_(inst_38441)){
var statearr_38478_39718 = state_38466__$1;
(statearr_38478_39718[(1)] = (4));

} else {
var statearr_38479_39719 = state_38466__$1;
(statearr_38479_39719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (11))){
var inst_38439 = (state_38466[(8)]);
var inst_38453 = (state_38466[(2)]);
var inst_38454 = (inst_38439 + (1));
var inst_38439__$1 = inst_38454;
var state_38466__$1 = (function (){var statearr_38480 = state_38466;
(statearr_38480[(10)] = inst_38453);

(statearr_38480[(8)] = inst_38439__$1);

return statearr_38480;
})();
var statearr_38481_39720 = state_38466__$1;
(statearr_38481_39720[(2)] = null);

(statearr_38481_39720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (9))){
var state_38466__$1 = state_38466;
var statearr_38482_39721 = state_38466__$1;
(statearr_38482_39721[(2)] = null);

(statearr_38482_39721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (5))){
var state_38466__$1 = state_38466;
var statearr_38483_39722 = state_38466__$1;
(statearr_38483_39722[(2)] = null);

(statearr_38483_39722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (10))){
var inst_38458 = (state_38466[(2)]);
var state_38466__$1 = state_38466;
var statearr_38484_39723 = state_38466__$1;
(statearr_38484_39723[(2)] = inst_38458);

(statearr_38484_39723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (8))){
var inst_38444 = (state_38466[(7)]);
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38466__$1,(11),out,inst_38444);
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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38485[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38485[(1)] = (1));

return statearr_38485;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38466){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38466);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38486){var ex__26559__auto__ = e38486;
var statearr_38489_39724 = state_38466;
(statearr_38489_39724[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38466[(4)]))){
var statearr_38490_39725 = state_38466;
(statearr_38490_39725[(1)] = cljs.core.first((state_38466[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39726 = state_38466;
state_38466 = G__39726;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38491 = f__26641__auto__();
(statearr_38491[(6)] = c__26640__auto___39713);

return statearr_38491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38493 = (function (f,ch,meta38494){
this.f = f;
this.ch = ch;
this.meta38494 = meta38494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38495,meta38494__$1){
var self__ = this;
var _38495__$1 = this;
return (new cljs.core.async.t_cljs$core$async38493(self__.f,self__.ch,meta38494__$1));
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38495){
var self__ = this;
var _38495__$1 = this;
return self__.meta38494;
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38496 = (function (f,ch,meta38494,_,fn1,meta38497){
this.f = f;
this.ch = ch;
this.meta38494 = meta38494;
this._ = _;
this.fn1 = fn1;
this.meta38497 = meta38497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38498,meta38497__$1){
var self__ = this;
var _38498__$1 = this;
return (new cljs.core.async.t_cljs$core$async38496(self__.f,self__.ch,self__.meta38494,self__._,self__.fn1,meta38497__$1));
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38498){
var self__ = this;
var _38498__$1 = this;
return self__.meta38497;
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38492_SHARP_){
var G__38501 = (((p1__38492_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38492_SHARP_) : self__.f.call(null,p1__38492_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38501) : f1.call(null,G__38501));
});
}));

(cljs.core.async.t_cljs$core$async38496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38494","meta38494",-1559812948,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38493","cljs.core.async/t_cljs$core$async38493",648954577,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38497","meta38497",-1378376723,null)], null);
}));

(cljs.core.async.t_cljs$core$async38496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38496");

(cljs.core.async.t_cljs$core$async38496.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38496.
 */
cljs.core.async.__GT_t_cljs$core$async38496 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38496(f__$1,ch__$1,meta38494__$1,___$2,fn1__$1,meta38497){
return (new cljs.core.async.t_cljs$core$async38496(f__$1,ch__$1,meta38494__$1,___$2,fn1__$1,meta38497));
});

}

return (new cljs.core.async.t_cljs$core$async38496(self__.f,self__.ch,self__.meta38494,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38502 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38502) : self__.f.call(null,G__38502));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38494","meta38494",-1559812948,null)], null);
}));

(cljs.core.async.t_cljs$core$async38493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38493");

(cljs.core.async.t_cljs$core$async38493.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38493.
 */
cljs.core.async.__GT_t_cljs$core$async38493 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38493(f__$1,ch__$1,meta38494){
return (new cljs.core.async.t_cljs$core$async38493(f__$1,ch__$1,meta38494));
});

}

return (new cljs.core.async.t_cljs$core$async38493(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38505 = (function (f,ch,meta38506){
this.f = f;
this.ch = ch;
this.meta38506 = meta38506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38507,meta38506__$1){
var self__ = this;
var _38507__$1 = this;
return (new cljs.core.async.t_cljs$core$async38505(self__.f,self__.ch,meta38506__$1));
}));

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38507){
var self__ = this;
var _38507__$1 = this;
return self__.meta38506;
}));

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38506","meta38506",-1372075866,null)], null);
}));

(cljs.core.async.t_cljs$core$async38505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38505");

(cljs.core.async.t_cljs$core$async38505.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38505.
 */
cljs.core.async.__GT_t_cljs$core$async38505 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38505(f__$1,ch__$1,meta38506){
return (new cljs.core.async.t_cljs$core$async38505(f__$1,ch__$1,meta38506));
});

}

return (new cljs.core.async.t_cljs$core$async38505(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38508 = (function (p,ch,meta38509){
this.p = p;
this.ch = ch;
this.meta38509 = meta38509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38510,meta38509__$1){
var self__ = this;
var _38510__$1 = this;
return (new cljs.core.async.t_cljs$core$async38508(self__.p,self__.ch,meta38509__$1));
}));

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38510){
var self__ = this;
var _38510__$1 = this;
return self__.meta38509;
}));

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38509","meta38509",1488434935,null)], null);
}));

(cljs.core.async.t_cljs$core$async38508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38508");

(cljs.core.async.t_cljs$core$async38508.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38508.
 */
cljs.core.async.__GT_t_cljs$core$async38508 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38508(p__$1,ch__$1,meta38509){
return (new cljs.core.async.t_cljs$core$async38508(p__$1,ch__$1,meta38509));
});

}

return (new cljs.core.async.t_cljs$core$async38508(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38526 = arguments.length;
switch (G__38526) {
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
var c__26640__auto___39742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38566){
var state_val_38567 = (state_38566[(1)]);
if((state_val_38567 === (7))){
var inst_38562 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38578_39743 = state_38566__$1;
(statearr_38578_39743[(2)] = inst_38562);

(statearr_38578_39743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (1))){
var state_38566__$1 = state_38566;
var statearr_38579_39744 = state_38566__$1;
(statearr_38579_39744[(2)] = null);

(statearr_38579_39744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (4))){
var inst_38548 = (state_38566[(7)]);
var inst_38548__$1 = (state_38566[(2)]);
var inst_38549 = (inst_38548__$1 == null);
var state_38566__$1 = (function (){var statearr_38580 = state_38566;
(statearr_38580[(7)] = inst_38548__$1);

return statearr_38580;
})();
if(cljs.core.truth_(inst_38549)){
var statearr_38581_39745 = state_38566__$1;
(statearr_38581_39745[(1)] = (5));

} else {
var statearr_38585_39746 = state_38566__$1;
(statearr_38585_39746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (6))){
var inst_38548 = (state_38566[(7)]);
var inst_38553 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38548) : p.call(null,inst_38548));
var state_38566__$1 = state_38566;
if(cljs.core.truth_(inst_38553)){
var statearr_38586_39747 = state_38566__$1;
(statearr_38586_39747[(1)] = (8));

} else {
var statearr_38587_39748 = state_38566__$1;
(statearr_38587_39748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (3))){
var inst_38564 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38566__$1,inst_38564);
} else {
if((state_val_38567 === (2))){
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38566__$1,(4),ch);
} else {
if((state_val_38567 === (11))){
var inst_38556 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38588_39749 = state_38566__$1;
(statearr_38588_39749[(2)] = inst_38556);

(statearr_38588_39749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (9))){
var state_38566__$1 = state_38566;
var statearr_38589_39750 = state_38566__$1;
(statearr_38589_39750[(2)] = null);

(statearr_38589_39750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (5))){
var inst_38551 = cljs.core.async.close_BANG_(out);
var state_38566__$1 = state_38566;
var statearr_38590_39751 = state_38566__$1;
(statearr_38590_39751[(2)] = inst_38551);

(statearr_38590_39751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (10))){
var inst_38559 = (state_38566[(2)]);
var state_38566__$1 = (function (){var statearr_38595 = state_38566;
(statearr_38595[(8)] = inst_38559);

return statearr_38595;
})();
var statearr_38596_39752 = state_38566__$1;
(statearr_38596_39752[(2)] = null);

(statearr_38596_39752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (8))){
var inst_38548 = (state_38566[(7)]);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38566__$1,(11),out,inst_38548);
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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38597 = [null,null,null,null,null,null,null,null,null];
(statearr_38597[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38597[(1)] = (1));

return statearr_38597;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38566){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38566);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38598){var ex__26559__auto__ = e38598;
var statearr_38599_39757 = state_38566;
(statearr_38599_39757[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38566[(4)]))){
var statearr_38600_39758 = state_38566;
(statearr_38600_39758[(1)] = cljs.core.first((state_38566[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39759 = state_38566;
state_38566 = G__39759;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38601 = f__26641__auto__();
(statearr_38601[(6)] = c__26640__auto___39742);

return statearr_38601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38607 = arguments.length;
switch (G__38607) {
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
var c__26640__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38673){
var state_val_38674 = (state_38673[(1)]);
if((state_val_38674 === (7))){
var inst_38669 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38677_39762 = state_38673__$1;
(statearr_38677_39762[(2)] = inst_38669);

(statearr_38677_39762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (20))){
var inst_38639 = (state_38673[(7)]);
var inst_38650 = (state_38673[(2)]);
var inst_38651 = cljs.core.next(inst_38639);
var inst_38625 = inst_38651;
var inst_38626 = null;
var inst_38627 = (0);
var inst_38628 = (0);
var state_38673__$1 = (function (){var statearr_38678 = state_38673;
(statearr_38678[(8)] = inst_38650);

(statearr_38678[(9)] = inst_38628);

(statearr_38678[(10)] = inst_38626);

(statearr_38678[(11)] = inst_38625);

(statearr_38678[(12)] = inst_38627);

return statearr_38678;
})();
var statearr_38679_39763 = state_38673__$1;
(statearr_38679_39763[(2)] = null);

(statearr_38679_39763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (1))){
var state_38673__$1 = state_38673;
var statearr_38680_39764 = state_38673__$1;
(statearr_38680_39764[(2)] = null);

(statearr_38680_39764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (4))){
var inst_38614 = (state_38673[(13)]);
var inst_38614__$1 = (state_38673[(2)]);
var inst_38615 = (inst_38614__$1 == null);
var state_38673__$1 = (function (){var statearr_38682 = state_38673;
(statearr_38682[(13)] = inst_38614__$1);

return statearr_38682;
})();
if(cljs.core.truth_(inst_38615)){
var statearr_38683_39767 = state_38673__$1;
(statearr_38683_39767[(1)] = (5));

} else {
var statearr_38685_39768 = state_38673__$1;
(statearr_38685_39768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (15))){
var state_38673__$1 = state_38673;
var statearr_38692_39769 = state_38673__$1;
(statearr_38692_39769[(2)] = null);

(statearr_38692_39769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (21))){
var state_38673__$1 = state_38673;
var statearr_38693_39770 = state_38673__$1;
(statearr_38693_39770[(2)] = null);

(statearr_38693_39770[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (13))){
var inst_38628 = (state_38673[(9)]);
var inst_38626 = (state_38673[(10)]);
var inst_38625 = (state_38673[(11)]);
var inst_38627 = (state_38673[(12)]);
var inst_38635 = (state_38673[(2)]);
var inst_38636 = (inst_38628 + (1));
var tmp38689 = inst_38626;
var tmp38690 = inst_38625;
var tmp38691 = inst_38627;
var inst_38625__$1 = tmp38690;
var inst_38626__$1 = tmp38689;
var inst_38627__$1 = tmp38691;
var inst_38628__$1 = inst_38636;
var state_38673__$1 = (function (){var statearr_38694 = state_38673;
(statearr_38694[(9)] = inst_38628__$1);

(statearr_38694[(10)] = inst_38626__$1);

(statearr_38694[(11)] = inst_38625__$1);

(statearr_38694[(12)] = inst_38627__$1);

(statearr_38694[(14)] = inst_38635);

return statearr_38694;
})();
var statearr_38695_39775 = state_38673__$1;
(statearr_38695_39775[(2)] = null);

(statearr_38695_39775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (22))){
var state_38673__$1 = state_38673;
var statearr_38696_39777 = state_38673__$1;
(statearr_38696_39777[(2)] = null);

(statearr_38696_39777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (6))){
var inst_38614 = (state_38673[(13)]);
var inst_38623 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38614) : f.call(null,inst_38614));
var inst_38624 = cljs.core.seq(inst_38623);
var inst_38625 = inst_38624;
var inst_38626 = null;
var inst_38627 = (0);
var inst_38628 = (0);
var state_38673__$1 = (function (){var statearr_38697 = state_38673;
(statearr_38697[(9)] = inst_38628);

(statearr_38697[(10)] = inst_38626);

(statearr_38697[(11)] = inst_38625);

(statearr_38697[(12)] = inst_38627);

return statearr_38697;
})();
var statearr_38698_39778 = state_38673__$1;
(statearr_38698_39778[(2)] = null);

(statearr_38698_39778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (17))){
var inst_38639 = (state_38673[(7)]);
var inst_38643 = cljs.core.chunk_first(inst_38639);
var inst_38644 = cljs.core.chunk_rest(inst_38639);
var inst_38645 = cljs.core.count(inst_38643);
var inst_38625 = inst_38644;
var inst_38626 = inst_38643;
var inst_38627 = inst_38645;
var inst_38628 = (0);
var state_38673__$1 = (function (){var statearr_38699 = state_38673;
(statearr_38699[(9)] = inst_38628);

(statearr_38699[(10)] = inst_38626);

(statearr_38699[(11)] = inst_38625);

(statearr_38699[(12)] = inst_38627);

return statearr_38699;
})();
var statearr_38700_39779 = state_38673__$1;
(statearr_38700_39779[(2)] = null);

(statearr_38700_39779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (3))){
var inst_38671 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38673__$1,inst_38671);
} else {
if((state_val_38674 === (12))){
var inst_38659 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38701_39780 = state_38673__$1;
(statearr_38701_39780[(2)] = inst_38659);

(statearr_38701_39780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (2))){
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38673__$1,(4),in$);
} else {
if((state_val_38674 === (23))){
var inst_38667 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38702_39781 = state_38673__$1;
(statearr_38702_39781[(2)] = inst_38667);

(statearr_38702_39781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (19))){
var inst_38654 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38703_39782 = state_38673__$1;
(statearr_38703_39782[(2)] = inst_38654);

(statearr_38703_39782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (11))){
var inst_38625 = (state_38673[(11)]);
var inst_38639 = (state_38673[(7)]);
var inst_38639__$1 = cljs.core.seq(inst_38625);
var state_38673__$1 = (function (){var statearr_38704 = state_38673;
(statearr_38704[(7)] = inst_38639__$1);

return statearr_38704;
})();
if(inst_38639__$1){
var statearr_38705_39783 = state_38673__$1;
(statearr_38705_39783[(1)] = (14));

} else {
var statearr_38706_39784 = state_38673__$1;
(statearr_38706_39784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (9))){
var inst_38661 = (state_38673[(2)]);
var inst_38662 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38673__$1 = (function (){var statearr_38711 = state_38673;
(statearr_38711[(15)] = inst_38661);

return statearr_38711;
})();
if(cljs.core.truth_(inst_38662)){
var statearr_38713_39785 = state_38673__$1;
(statearr_38713_39785[(1)] = (21));

} else {
var statearr_38714_39786 = state_38673__$1;
(statearr_38714_39786[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (5))){
var inst_38617 = cljs.core.async.close_BANG_(out);
var state_38673__$1 = state_38673;
var statearr_38717_39787 = state_38673__$1;
(statearr_38717_39787[(2)] = inst_38617);

(statearr_38717_39787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (14))){
var inst_38639 = (state_38673[(7)]);
var inst_38641 = cljs.core.chunked_seq_QMARK_(inst_38639);
var state_38673__$1 = state_38673;
if(inst_38641){
var statearr_38718_39788 = state_38673__$1;
(statearr_38718_39788[(1)] = (17));

} else {
var statearr_38719_39789 = state_38673__$1;
(statearr_38719_39789[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (16))){
var inst_38657 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38720_39790 = state_38673__$1;
(statearr_38720_39790[(2)] = inst_38657);

(statearr_38720_39790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (10))){
var inst_38628 = (state_38673[(9)]);
var inst_38626 = (state_38673[(10)]);
var inst_38633 = cljs.core._nth(inst_38626,inst_38628);
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38673__$1,(13),out,inst_38633);
} else {
if((state_val_38674 === (18))){
var inst_38639 = (state_38673[(7)]);
var inst_38648 = cljs.core.first(inst_38639);
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38673__$1,(20),out,inst_38648);
} else {
if((state_val_38674 === (8))){
var inst_38628 = (state_38673[(9)]);
var inst_38627 = (state_38673[(12)]);
var inst_38630 = (inst_38628 < inst_38627);
var inst_38631 = inst_38630;
var state_38673__$1 = state_38673;
if(cljs.core.truth_(inst_38631)){
var statearr_38723_39791 = state_38673__$1;
(statearr_38723_39791[(1)] = (10));

} else {
var statearr_38727_39792 = state_38673__$1;
(statearr_38727_39792[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26556__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26556__auto____0 = (function (){
var statearr_38728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26556__auto__);

(statearr_38728[(1)] = (1));

return statearr_38728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26556__auto____1 = (function (state_38673){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38673);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38729){var ex__26559__auto__ = e38729;
var statearr_38730_39793 = state_38673;
(statearr_38730_39793[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38673[(4)]))){
var statearr_38731_39794 = state_38673;
(statearr_38731_39794[(1)] = cljs.core.first((state_38673[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39795 = state_38673;
state_38673 = G__39795;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26556__auto__ = function(state_38673){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26556__auto____1.call(this,state_38673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26556__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26556__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38732 = f__26641__auto__();
(statearr_38732[(6)] = c__26640__auto__);

return statearr_38732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

return c__26640__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38734 = arguments.length;
switch (G__38734) {
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
var G__38736 = arguments.length;
switch (G__38736) {
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
var G__38746 = arguments.length;
switch (G__38746) {
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
var c__26640__auto___39800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38770){
var state_val_38771 = (state_38770[(1)]);
if((state_val_38771 === (7))){
var inst_38765 = (state_38770[(2)]);
var state_38770__$1 = state_38770;
var statearr_38772_39801 = state_38770__$1;
(statearr_38772_39801[(2)] = inst_38765);

(statearr_38772_39801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (1))){
var inst_38747 = null;
var state_38770__$1 = (function (){var statearr_38775 = state_38770;
(statearr_38775[(7)] = inst_38747);

return statearr_38775;
})();
var statearr_38776_39802 = state_38770__$1;
(statearr_38776_39802[(2)] = null);

(statearr_38776_39802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (4))){
var inst_38750 = (state_38770[(8)]);
var inst_38750__$1 = (state_38770[(2)]);
var inst_38751 = (inst_38750__$1 == null);
var inst_38752 = cljs.core.not(inst_38751);
var state_38770__$1 = (function (){var statearr_38777 = state_38770;
(statearr_38777[(8)] = inst_38750__$1);

return statearr_38777;
})();
if(inst_38752){
var statearr_38778_39803 = state_38770__$1;
(statearr_38778_39803[(1)] = (5));

} else {
var statearr_38779_39804 = state_38770__$1;
(statearr_38779_39804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (6))){
var state_38770__$1 = state_38770;
var statearr_38783_39805 = state_38770__$1;
(statearr_38783_39805[(2)] = null);

(statearr_38783_39805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (3))){
var inst_38767 = (state_38770[(2)]);
var inst_38768 = cljs.core.async.close_BANG_(out);
var state_38770__$1 = (function (){var statearr_38784 = state_38770;
(statearr_38784[(9)] = inst_38767);

return statearr_38784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38770__$1,inst_38768);
} else {
if((state_val_38771 === (2))){
var state_38770__$1 = state_38770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38770__$1,(4),ch);
} else {
if((state_val_38771 === (11))){
var inst_38750 = (state_38770[(8)]);
var inst_38759 = (state_38770[(2)]);
var inst_38747 = inst_38750;
var state_38770__$1 = (function (){var statearr_38785 = state_38770;
(statearr_38785[(10)] = inst_38759);

(statearr_38785[(7)] = inst_38747);

return statearr_38785;
})();
var statearr_38786_39806 = state_38770__$1;
(statearr_38786_39806[(2)] = null);

(statearr_38786_39806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (9))){
var inst_38750 = (state_38770[(8)]);
var state_38770__$1 = state_38770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38770__$1,(11),out,inst_38750);
} else {
if((state_val_38771 === (5))){
var inst_38747 = (state_38770[(7)]);
var inst_38750 = (state_38770[(8)]);
var inst_38754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38750,inst_38747);
var state_38770__$1 = state_38770;
if(inst_38754){
var statearr_38788_39814 = state_38770__$1;
(statearr_38788_39814[(1)] = (8));

} else {
var statearr_38789_39815 = state_38770__$1;
(statearr_38789_39815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (10))){
var inst_38762 = (state_38770[(2)]);
var state_38770__$1 = state_38770;
var statearr_38790_39816 = state_38770__$1;
(statearr_38790_39816[(2)] = inst_38762);

(statearr_38790_39816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38771 === (8))){
var inst_38747 = (state_38770[(7)]);
var tmp38787 = inst_38747;
var inst_38747__$1 = tmp38787;
var state_38770__$1 = (function (){var statearr_38791 = state_38770;
(statearr_38791[(7)] = inst_38747__$1);

return statearr_38791;
})();
var statearr_38792_39817 = state_38770__$1;
(statearr_38792_39817[(2)] = null);

(statearr_38792_39817[(1)] = (2));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38793[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38793[(1)] = (1));

return statearr_38793;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38770){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38770);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38794){var ex__26559__auto__ = e38794;
var statearr_38795_39818 = state_38770;
(statearr_38795_39818[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38770[(4)]))){
var statearr_38796_39819 = state_38770;
(statearr_38796_39819[(1)] = cljs.core.first((state_38770[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39823 = state_38770;
state_38770 = G__39823;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38797 = f__26641__auto__();
(statearr_38797[(6)] = c__26640__auto___39800);

return statearr_38797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38799 = arguments.length;
switch (G__38799) {
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
var c__26640__auto___39825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38837){
var state_val_38838 = (state_38837[(1)]);
if((state_val_38838 === (7))){
var inst_38833 = (state_38837[(2)]);
var state_38837__$1 = state_38837;
var statearr_38839_39826 = state_38837__$1;
(statearr_38839_39826[(2)] = inst_38833);

(statearr_38839_39826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (1))){
var inst_38800 = (new Array(n));
var inst_38801 = inst_38800;
var inst_38802 = (0);
var state_38837__$1 = (function (){var statearr_38840 = state_38837;
(statearr_38840[(7)] = inst_38801);

(statearr_38840[(8)] = inst_38802);

return statearr_38840;
})();
var statearr_38841_39827 = state_38837__$1;
(statearr_38841_39827[(2)] = null);

(statearr_38841_39827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (4))){
var inst_38805 = (state_38837[(9)]);
var inst_38805__$1 = (state_38837[(2)]);
var inst_38806 = (inst_38805__$1 == null);
var inst_38807 = cljs.core.not(inst_38806);
var state_38837__$1 = (function (){var statearr_38842 = state_38837;
(statearr_38842[(9)] = inst_38805__$1);

return statearr_38842;
})();
if(inst_38807){
var statearr_38843_39828 = state_38837__$1;
(statearr_38843_39828[(1)] = (5));

} else {
var statearr_38844_39829 = state_38837__$1;
(statearr_38844_39829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (15))){
var inst_38827 = (state_38837[(2)]);
var state_38837__$1 = state_38837;
var statearr_38845_39830 = state_38837__$1;
(statearr_38845_39830[(2)] = inst_38827);

(statearr_38845_39830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (13))){
var state_38837__$1 = state_38837;
var statearr_38846_39831 = state_38837__$1;
(statearr_38846_39831[(2)] = null);

(statearr_38846_39831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (6))){
var inst_38802 = (state_38837[(8)]);
var inst_38823 = (inst_38802 > (0));
var state_38837__$1 = state_38837;
if(cljs.core.truth_(inst_38823)){
var statearr_38847_39832 = state_38837__$1;
(statearr_38847_39832[(1)] = (12));

} else {
var statearr_38848_39833 = state_38837__$1;
(statearr_38848_39833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (3))){
var inst_38835 = (state_38837[(2)]);
var state_38837__$1 = state_38837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38837__$1,inst_38835);
} else {
if((state_val_38838 === (12))){
var inst_38801 = (state_38837[(7)]);
var inst_38825 = cljs.core.vec(inst_38801);
var state_38837__$1 = state_38837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38837__$1,(15),out,inst_38825);
} else {
if((state_val_38838 === (2))){
var state_38837__$1 = state_38837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38837__$1,(4),ch);
} else {
if((state_val_38838 === (11))){
var inst_38817 = (state_38837[(2)]);
var inst_38818 = (new Array(n));
var inst_38801 = inst_38818;
var inst_38802 = (0);
var state_38837__$1 = (function (){var statearr_38850 = state_38837;
(statearr_38850[(7)] = inst_38801);

(statearr_38850[(10)] = inst_38817);

(statearr_38850[(8)] = inst_38802);

return statearr_38850;
})();
var statearr_38851_39834 = state_38837__$1;
(statearr_38851_39834[(2)] = null);

(statearr_38851_39834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (9))){
var inst_38801 = (state_38837[(7)]);
var inst_38815 = cljs.core.vec(inst_38801);
var state_38837__$1 = state_38837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38837__$1,(11),out,inst_38815);
} else {
if((state_val_38838 === (5))){
var inst_38801 = (state_38837[(7)]);
var inst_38805 = (state_38837[(9)]);
var inst_38802 = (state_38837[(8)]);
var inst_38810 = (state_38837[(11)]);
var inst_38809 = (inst_38801[inst_38802] = inst_38805);
var inst_38810__$1 = (inst_38802 + (1));
var inst_38811 = (inst_38810__$1 < n);
var state_38837__$1 = (function (){var statearr_38852 = state_38837;
(statearr_38852[(12)] = inst_38809);

(statearr_38852[(11)] = inst_38810__$1);

return statearr_38852;
})();
if(cljs.core.truth_(inst_38811)){
var statearr_38853_39835 = state_38837__$1;
(statearr_38853_39835[(1)] = (8));

} else {
var statearr_38854_39836 = state_38837__$1;
(statearr_38854_39836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (14))){
var inst_38830 = (state_38837[(2)]);
var inst_38831 = cljs.core.async.close_BANG_(out);
var state_38837__$1 = (function (){var statearr_38856 = state_38837;
(statearr_38856[(13)] = inst_38830);

return statearr_38856;
})();
var statearr_38857_39837 = state_38837__$1;
(statearr_38857_39837[(2)] = inst_38831);

(statearr_38857_39837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (10))){
var inst_38821 = (state_38837[(2)]);
var state_38837__$1 = state_38837;
var statearr_38858_39838 = state_38837__$1;
(statearr_38858_39838[(2)] = inst_38821);

(statearr_38858_39838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (8))){
var inst_38801 = (state_38837[(7)]);
var inst_38810 = (state_38837[(11)]);
var tmp38855 = inst_38801;
var inst_38801__$1 = tmp38855;
var inst_38802 = inst_38810;
var state_38837__$1 = (function (){var statearr_38862 = state_38837;
(statearr_38862[(7)] = inst_38801__$1);

(statearr_38862[(8)] = inst_38802);

return statearr_38862;
})();
var statearr_38863_39840 = state_38837__$1;
(statearr_38863_39840[(2)] = null);

(statearr_38863_39840[(1)] = (2));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38864[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38864[(1)] = (1));

return statearr_38864;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38837){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38837);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38865){var ex__26559__auto__ = e38865;
var statearr_38866_39841 = state_38837;
(statearr_38866_39841[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38837[(4)]))){
var statearr_38867_39842 = state_38837;
(statearr_38867_39842[(1)] = cljs.core.first((state_38837[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39844 = state_38837;
state_38837 = G__39844;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38868 = f__26641__auto__();
(statearr_38868[(6)] = c__26640__auto___39825);

return statearr_38868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38874 = arguments.length;
switch (G__38874) {
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
var c__26640__auto___39846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_38919){
var state_val_38920 = (state_38919[(1)]);
if((state_val_38920 === (7))){
var inst_38915 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
var statearr_38921_39847 = state_38919__$1;
(statearr_38921_39847[(2)] = inst_38915);

(statearr_38921_39847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (1))){
var inst_38875 = [];
var inst_38876 = inst_38875;
var inst_38877 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38919__$1 = (function (){var statearr_38922 = state_38919;
(statearr_38922[(7)] = inst_38877);

(statearr_38922[(8)] = inst_38876);

return statearr_38922;
})();
var statearr_38923_39848 = state_38919__$1;
(statearr_38923_39848[(2)] = null);

(statearr_38923_39848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (4))){
var inst_38880 = (state_38919[(9)]);
var inst_38880__$1 = (state_38919[(2)]);
var inst_38881 = (inst_38880__$1 == null);
var inst_38882 = cljs.core.not(inst_38881);
var state_38919__$1 = (function (){var statearr_38924 = state_38919;
(statearr_38924[(9)] = inst_38880__$1);

return statearr_38924;
})();
if(inst_38882){
var statearr_38925_39849 = state_38919__$1;
(statearr_38925_39849[(1)] = (5));

} else {
var statearr_38926_39850 = state_38919__$1;
(statearr_38926_39850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (15))){
var inst_38876 = (state_38919[(8)]);
var inst_38907 = cljs.core.vec(inst_38876);
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38919__$1,(18),out,inst_38907);
} else {
if((state_val_38920 === (13))){
var inst_38902 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
var statearr_38927_39851 = state_38919__$1;
(statearr_38927_39851[(2)] = inst_38902);

(statearr_38927_39851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (6))){
var inst_38876 = (state_38919[(8)]);
var inst_38904 = inst_38876.length;
var inst_38905 = (inst_38904 > (0));
var state_38919__$1 = state_38919;
if(cljs.core.truth_(inst_38905)){
var statearr_38942_39852 = state_38919__$1;
(statearr_38942_39852[(1)] = (15));

} else {
var statearr_38943_39853 = state_38919__$1;
(statearr_38943_39853[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (17))){
var inst_38912 = (state_38919[(2)]);
var inst_38913 = cljs.core.async.close_BANG_(out);
var state_38919__$1 = (function (){var statearr_38950 = state_38919;
(statearr_38950[(10)] = inst_38912);

return statearr_38950;
})();
var statearr_38951_39854 = state_38919__$1;
(statearr_38951_39854[(2)] = inst_38913);

(statearr_38951_39854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (3))){
var inst_38917 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38919__$1,inst_38917);
} else {
if((state_val_38920 === (12))){
var inst_38876 = (state_38919[(8)]);
var inst_38895 = cljs.core.vec(inst_38876);
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38919__$1,(14),out,inst_38895);
} else {
if((state_val_38920 === (2))){
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38919__$1,(4),ch);
} else {
if((state_val_38920 === (11))){
var inst_38880 = (state_38919[(9)]);
var inst_38876 = (state_38919[(8)]);
var inst_38884 = (state_38919[(11)]);
var inst_38892 = inst_38876.push(inst_38880);
var tmp38952 = inst_38876;
var inst_38876__$1 = tmp38952;
var inst_38877 = inst_38884;
var state_38919__$1 = (function (){var statearr_38973 = state_38919;
(statearr_38973[(12)] = inst_38892);

(statearr_38973[(7)] = inst_38877);

(statearr_38973[(8)] = inst_38876__$1);

return statearr_38973;
})();
var statearr_38974_39855 = state_38919__$1;
(statearr_38974_39855[(2)] = null);

(statearr_38974_39855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (9))){
var inst_38877 = (state_38919[(7)]);
var inst_38888 = cljs.core.keyword_identical_QMARK_(inst_38877,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38919__$1 = state_38919;
var statearr_38975_39856 = state_38919__$1;
(statearr_38975_39856[(2)] = inst_38888);

(statearr_38975_39856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (5))){
var inst_38880 = (state_38919[(9)]);
var inst_38877 = (state_38919[(7)]);
var inst_38885 = (state_38919[(13)]);
var inst_38884 = (state_38919[(11)]);
var inst_38884__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38880) : f.call(null,inst_38880));
var inst_38885__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38884__$1,inst_38877);
var state_38919__$1 = (function (){var statearr_38978 = state_38919;
(statearr_38978[(13)] = inst_38885__$1);

(statearr_38978[(11)] = inst_38884__$1);

return statearr_38978;
})();
if(inst_38885__$1){
var statearr_38979_39857 = state_38919__$1;
(statearr_38979_39857[(1)] = (8));

} else {
var statearr_38981_39858 = state_38919__$1;
(statearr_38981_39858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (14))){
var inst_38880 = (state_38919[(9)]);
var inst_38884 = (state_38919[(11)]);
var inst_38897 = (state_38919[(2)]);
var inst_38898 = [];
var inst_38899 = inst_38898.push(inst_38880);
var inst_38876 = inst_38898;
var inst_38877 = inst_38884;
var state_38919__$1 = (function (){var statearr_38982 = state_38919;
(statearr_38982[(14)] = inst_38897);

(statearr_38982[(7)] = inst_38877);

(statearr_38982[(8)] = inst_38876);

(statearr_38982[(15)] = inst_38899);

return statearr_38982;
})();
var statearr_38983_39859 = state_38919__$1;
(statearr_38983_39859[(2)] = null);

(statearr_38983_39859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (16))){
var state_38919__$1 = state_38919;
var statearr_38984_39860 = state_38919__$1;
(statearr_38984_39860[(2)] = null);

(statearr_38984_39860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (10))){
var inst_38890 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
if(cljs.core.truth_(inst_38890)){
var statearr_38988_39864 = state_38919__$1;
(statearr_38988_39864[(1)] = (11));

} else {
var statearr_38989_39865 = state_38919__$1;
(statearr_38989_39865[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (18))){
var inst_38909 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
var statearr_38990_39866 = state_38919__$1;
(statearr_38990_39866[(2)] = inst_38909);

(statearr_38990_39866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (8))){
var inst_38885 = (state_38919[(13)]);
var state_38919__$1 = state_38919;
var statearr_38991_39867 = state_38919__$1;
(statearr_38991_39867[(2)] = inst_38885);

(statearr_38991_39867[(1)] = (10));


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
var cljs$core$async$state_machine__26556__auto__ = null;
var cljs$core$async$state_machine__26556__auto____0 = (function (){
var statearr_38992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38992[(0)] = cljs$core$async$state_machine__26556__auto__);

(statearr_38992[(1)] = (1));

return statearr_38992;
});
var cljs$core$async$state_machine__26556__auto____1 = (function (state_38919){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_38919);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e38993){var ex__26559__auto__ = e38993;
var statearr_38994_39868 = state_38919;
(statearr_38994_39868[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_38919[(4)]))){
var statearr_38995_39869 = state_38919;
(statearr_38995_39869[(1)] = cljs.core.first((state_38919[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39870 = state_38919;
state_38919 = G__39870;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
cljs$core$async$state_machine__26556__auto__ = function(state_38919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26556__auto____1.call(this,state_38919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26556__auto____0;
cljs$core$async$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26556__auto____1;
return cljs$core$async$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_38996 = f__26641__auto__();
(statearr_38996[(6)] = c__26640__auto___39846);

return statearr_38996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
