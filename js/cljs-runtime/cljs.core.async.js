goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32847 = arguments.length;
switch (G__32847) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32848 = (function (f,blockable,meta32849){
this.f = f;
this.blockable = blockable;
this.meta32849 = meta32849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32850,meta32849__$1){
var self__ = this;
var _32850__$1 = this;
return (new cljs.core.async.t_cljs$core$async32848(self__.f,self__.blockable,meta32849__$1));
}));

(cljs.core.async.t_cljs$core$async32848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32850){
var self__ = this;
var _32850__$1 = this;
return self__.meta32849;
}));

(cljs.core.async.t_cljs$core$async32848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32849","meta32849",-96537344,null)], null);
}));

(cljs.core.async.t_cljs$core$async32848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32848");

(cljs.core.async.t_cljs$core$async32848.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32848.
 */
cljs.core.async.__GT_t_cljs$core$async32848 = (function cljs$core$async$__GT_t_cljs$core$async32848(f__$1,blockable__$1,meta32849){
return (new cljs.core.async.t_cljs$core$async32848(f__$1,blockable__$1,meta32849));
});

}

return (new cljs.core.async.t_cljs$core$async32848(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32853 = arguments.length;
switch (G__32853) {
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
var G__32859 = arguments.length;
switch (G__32859) {
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
var G__32864 = arguments.length;
switch (G__32864) {
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
var val_35111 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35111) : fn1.call(null,val_35111));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35111) : fn1.call(null,val_35111));
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
var G__32875 = arguments.length;
switch (G__32875) {
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
var n__4741__auto___35115 = n;
var x_35116 = (0);
while(true){
if((x_35116 < n__4741__auto___35115)){
(a[x_35116] = x_35116);

var G__35118 = (x_35116 + (1));
x_35116 = G__35118;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32882 = (function (flag,meta32883){
this.flag = flag;
this.meta32883 = meta32883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32884,meta32883__$1){
var self__ = this;
var _32884__$1 = this;
return (new cljs.core.async.t_cljs$core$async32882(self__.flag,meta32883__$1));
}));

(cljs.core.async.t_cljs$core$async32882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32884){
var self__ = this;
var _32884__$1 = this;
return self__.meta32883;
}));

(cljs.core.async.t_cljs$core$async32882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32883","meta32883",-1492443350,null)], null);
}));

(cljs.core.async.t_cljs$core$async32882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32882");

(cljs.core.async.t_cljs$core$async32882.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32882.
 */
cljs.core.async.__GT_t_cljs$core$async32882 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32882(flag__$1,meta32883){
return (new cljs.core.async.t_cljs$core$async32882(flag__$1,meta32883));
});

}

return (new cljs.core.async.t_cljs$core$async32882(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32885 = (function (flag,cb,meta32886){
this.flag = flag;
this.cb = cb;
this.meta32886 = meta32886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32887,meta32886__$1){
var self__ = this;
var _32887__$1 = this;
return (new cljs.core.async.t_cljs$core$async32885(self__.flag,self__.cb,meta32886__$1));
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32887){
var self__ = this;
var _32887__$1 = this;
return self__.meta32886;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32886","meta32886",-585827044,null)], null);
}));

(cljs.core.async.t_cljs$core$async32885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32885");

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32885.
 */
cljs.core.async.__GT_t_cljs$core$async32885 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32885(flag__$1,cb__$1,meta32886){
return (new cljs.core.async.t_cljs$core$async32885(flag__$1,cb__$1,meta32886));
});

}

return (new cljs.core.async.t_cljs$core$async32885(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32891_SHARP_){
var G__32893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32891_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32893) : fret.call(null,G__32893));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32892_SHARP_){
var G__32894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32892_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32894) : fret.call(null,G__32894));
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
var G__35136 = (i + (1));
i = G__35136;
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
var len__4864__auto___35148 = arguments.length;
var i__4865__auto___35149 = (0);
while(true){
if((i__4865__auto___35149 < len__4864__auto___35148)){
args__4870__auto__.push((arguments[i__4865__auto___35149]));

var G__35150 = (i__4865__auto___35149 + (1));
i__4865__auto___35149 = G__35150;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32906){
var map__32907 = p__32906;
var map__32907__$1 = cljs.core.__destructure_map(map__32907);
var opts = map__32907__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32901){
var G__32902 = cljs.core.first(seq32901);
var seq32901__$1 = cljs.core.next(seq32901);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32902,seq32901__$1);
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
var G__32918 = arguments.length;
switch (G__32918) {
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
var c__32787__auto___35159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_32948){
var state_val_32949 = (state_32948[(1)]);
if((state_val_32949 === (7))){
var inst_32944 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32950_35167 = state_32948__$1;
(statearr_32950_35167[(2)] = inst_32944);

(statearr_32950_35167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (1))){
var state_32948__$1 = state_32948;
var statearr_32951_35169 = state_32948__$1;
(statearr_32951_35169[(2)] = null);

(statearr_32951_35169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (4))){
var inst_32927 = (state_32948[(7)]);
var inst_32927__$1 = (state_32948[(2)]);
var inst_32928 = (inst_32927__$1 == null);
var state_32948__$1 = (function (){var statearr_32952 = state_32948;
(statearr_32952[(7)] = inst_32927__$1);

return statearr_32952;
})();
if(cljs.core.truth_(inst_32928)){
var statearr_32953_35171 = state_32948__$1;
(statearr_32953_35171[(1)] = (5));

} else {
var statearr_32954_35172 = state_32948__$1;
(statearr_32954_35172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (13))){
var state_32948__$1 = state_32948;
var statearr_32955_35173 = state_32948__$1;
(statearr_32955_35173[(2)] = null);

(statearr_32955_35173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (6))){
var inst_32927 = (state_32948[(7)]);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32948__$1,(11),to,inst_32927);
} else {
if((state_val_32949 === (3))){
var inst_32946 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32948__$1,inst_32946);
} else {
if((state_val_32949 === (12))){
var state_32948__$1 = state_32948;
var statearr_32956_35178 = state_32948__$1;
(statearr_32956_35178[(2)] = null);

(statearr_32956_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (2))){
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32948__$1,(4),from);
} else {
if((state_val_32949 === (11))){
var inst_32937 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
if(cljs.core.truth_(inst_32937)){
var statearr_32959_35180 = state_32948__$1;
(statearr_32959_35180[(1)] = (12));

} else {
var statearr_32961_35181 = state_32948__$1;
(statearr_32961_35181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (9))){
var state_32948__$1 = state_32948;
var statearr_32962_35182 = state_32948__$1;
(statearr_32962_35182[(2)] = null);

(statearr_32962_35182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (5))){
var state_32948__$1 = state_32948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32963_35183 = state_32948__$1;
(statearr_32963_35183[(1)] = (8));

} else {
var statearr_32965_35184 = state_32948__$1;
(statearr_32965_35184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (14))){
var inst_32942 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32967_35185 = state_32948__$1;
(statearr_32967_35185[(2)] = inst_32942);

(statearr_32967_35185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (10))){
var inst_32934 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32968_35188 = state_32948__$1;
(statearr_32968_35188[(2)] = inst_32934);

(statearr_32968_35188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (8))){
var inst_32931 = cljs.core.async.close_BANG_(to);
var state_32948__$1 = state_32948;
var statearr_32969_35189 = state_32948__$1;
(statearr_32969_35189[(2)] = inst_32931);

(statearr_32969_35189[(1)] = (10));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_32972 = [null,null,null,null,null,null,null,null];
(statearr_32972[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_32972[(1)] = (1));

return statearr_32972;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_32948){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_32948);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e32973){var ex__32489__auto__ = e32973;
var statearr_32974_35195 = state_32948;
(statearr_32974_35195[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_32948[(4)]))){
var statearr_32975_35196 = state_32948;
(statearr_32975_35196[(1)] = cljs.core.first((state_32948[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35197 = state_32948;
state_32948 = G__35197;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_32948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_32948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_32979 = f__32788__auto__();
(statearr_32979[(6)] = c__32787__auto___35159);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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
var process = (function (p__32991){
var vec__32992 = p__32991;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32992,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32992,(1),null);
var job = vec__32992;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32787__auto___35199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_32999){
var state_val_33000 = (state_32999[(1)]);
if((state_val_33000 === (1))){
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32999__$1,(2),res,v);
} else {
if((state_val_33000 === (2))){
var inst_32996 = (state_32999[(2)]);
var inst_32997 = cljs.core.async.close_BANG_(res);
var state_32999__$1 = (function (){var statearr_33001 = state_32999;
(statearr_33001[(7)] = inst_32996);

return statearr_33001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32999__$1,inst_32997);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0 = (function (){
var statearr_33002 = [null,null,null,null,null,null,null,null];
(statearr_33002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__);

(statearr_33002[(1)] = (1));

return statearr_33002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1 = (function (state_32999){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_32999);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33003){var ex__32489__auto__ = e33003;
var statearr_33004_35204 = state_32999;
(statearr_33004_35204[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_32999[(4)]))){
var statearr_33005_35205 = state_32999;
(statearr_33005_35205[(1)] = cljs.core.first((state_32999[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35206 = state_32999;
state_32999 = G__35206;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = function(state_32999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1.call(this,state_32999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33006 = f__32788__auto__();
(statearr_33006[(6)] = c__32787__auto___35199);

return statearr_33006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33016){
var vec__33019 = p__33016;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33019,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33019,(1),null);
var job = vec__33019;
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
var n__4741__auto___35207 = n;
var __35208 = (0);
while(true){
if((__35208 < n__4741__auto___35207)){
var G__33040_35209 = type;
var G__33040_35210__$1 = (((G__33040_35209 instanceof cljs.core.Keyword))?G__33040_35209.fqn:null);
switch (G__33040_35210__$1) {
case "compute":
var c__32787__auto___35212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35208,c__32787__auto___35212,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async){
return (function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = ((function (__35208,c__32787__auto___35212,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async){
return (function (state_33053){
var state_val_33055 = (state_33053[(1)]);
if((state_val_33055 === (1))){
var state_33053__$1 = state_33053;
var statearr_33057_35213 = state_33053__$1;
(statearr_33057_35213[(2)] = null);

(statearr_33057_35213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (2))){
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33053__$1,(4),jobs);
} else {
if((state_val_33055 === (3))){
var inst_33051 = (state_33053[(2)]);
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33053__$1,inst_33051);
} else {
if((state_val_33055 === (4))){
var inst_33043 = (state_33053[(2)]);
var inst_33044 = process(inst_33043);
var state_33053__$1 = state_33053;
if(cljs.core.truth_(inst_33044)){
var statearr_33061_35215 = state_33053__$1;
(statearr_33061_35215[(1)] = (5));

} else {
var statearr_33062_35216 = state_33053__$1;
(statearr_33062_35216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (5))){
var state_33053__$1 = state_33053;
var statearr_33063_35217 = state_33053__$1;
(statearr_33063_35217[(2)] = null);

(statearr_33063_35217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (6))){
var state_33053__$1 = state_33053;
var statearr_33066_35218 = state_33053__$1;
(statearr_33066_35218[(2)] = null);

(statearr_33066_35218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (7))){
var inst_33049 = (state_33053[(2)]);
var state_33053__$1 = state_33053;
var statearr_33067_35220 = state_33053__$1;
(statearr_33067_35220[(2)] = inst_33049);

(statearr_33067_35220[(1)] = (3));


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
});})(__35208,c__32787__auto___35212,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async))
;
return ((function (__35208,switch__32485__auto__,c__32787__auto___35212,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0 = (function (){
var statearr_33068 = [null,null,null,null,null,null,null];
(statearr_33068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__);

(statearr_33068[(1)] = (1));

return statearr_33068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1 = (function (state_33053){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33053);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33073){var ex__32489__auto__ = e33073;
var statearr_33074_35227 = state_33053;
(statearr_33074_35227[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33053[(4)]))){
var statearr_33075_35228 = state_33053;
(statearr_33075_35228[(1)] = cljs.core.first((state_33053[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35229 = state_33053;
state_33053 = G__35229;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = function(state_33053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1.call(this,state_33053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__;
})()
;})(__35208,switch__32485__auto__,c__32787__auto___35212,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async))
})();
var state__32789__auto__ = (function (){var statearr_33076 = f__32788__auto__();
(statearr_33076[(6)] = c__32787__auto___35212);

return statearr_33076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
});})(__35208,c__32787__auto___35212,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async))
);


break;
case "async":
var c__32787__auto___35231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35208,c__32787__auto___35231,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async){
return (function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = ((function (__35208,c__32787__auto___35231,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async){
return (function (state_33107){
var state_val_33108 = (state_33107[(1)]);
if((state_val_33108 === (1))){
var state_33107__$1 = state_33107;
var statearr_33119_35234 = state_33107__$1;
(statearr_33119_35234[(2)] = null);

(statearr_33119_35234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (2))){
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33107__$1,(4),jobs);
} else {
if((state_val_33108 === (3))){
var inst_33101 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33107__$1,inst_33101);
} else {
if((state_val_33108 === (4))){
var inst_33088 = (state_33107[(2)]);
var inst_33090 = async(inst_33088);
var state_33107__$1 = state_33107;
if(cljs.core.truth_(inst_33090)){
var statearr_33124_35235 = state_33107__$1;
(statearr_33124_35235[(1)] = (5));

} else {
var statearr_33126_35236 = state_33107__$1;
(statearr_33126_35236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (5))){
var state_33107__$1 = state_33107;
var statearr_33133_35237 = state_33107__$1;
(statearr_33133_35237[(2)] = null);

(statearr_33133_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (6))){
var state_33107__$1 = state_33107;
var statearr_33140_35238 = state_33107__$1;
(statearr_33140_35238[(2)] = null);

(statearr_33140_35238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (7))){
var inst_33097 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33146_35239 = state_33107__$1;
(statearr_33146_35239[(2)] = inst_33097);

(statearr_33146_35239[(1)] = (3));


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
});})(__35208,c__32787__auto___35231,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async))
;
return ((function (__35208,switch__32485__auto__,c__32787__auto___35231,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0 = (function (){
var statearr_33152 = [null,null,null,null,null,null,null];
(statearr_33152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__);

(statearr_33152[(1)] = (1));

return statearr_33152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1 = (function (state_33107){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33107);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33158){var ex__32489__auto__ = e33158;
var statearr_33160_35242 = state_33107;
(statearr_33160_35242[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33107[(4)]))){
var statearr_33167_35243 = state_33107;
(statearr_33167_35243[(1)] = cljs.core.first((state_33107[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35246 = state_33107;
state_33107 = G__35246;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = function(state_33107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1.call(this,state_33107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__;
})()
;})(__35208,switch__32485__auto__,c__32787__auto___35231,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async))
})();
var state__32789__auto__ = (function (){var statearr_33175 = f__32788__auto__();
(statearr_33175[(6)] = c__32787__auto___35231);

return statearr_33175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
});})(__35208,c__32787__auto___35231,G__33040_35209,G__33040_35210__$1,n__4741__auto___35207,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33040_35210__$1)].join('')));

}

var G__35247 = (__35208 + (1));
__35208 = G__35247;
continue;
} else {
}
break;
}

var c__32787__auto___35248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33201){
var state_val_33202 = (state_33201[(1)]);
if((state_val_33202 === (7))){
var inst_33197 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33204_35249 = state_33201__$1;
(statearr_33204_35249[(2)] = inst_33197);

(statearr_33204_35249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (1))){
var state_33201__$1 = state_33201;
var statearr_33211_35250 = state_33201__$1;
(statearr_33211_35250[(2)] = null);

(statearr_33211_35250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (4))){
var inst_33178 = (state_33201[(7)]);
var inst_33178__$1 = (state_33201[(2)]);
var inst_33179 = (inst_33178__$1 == null);
var state_33201__$1 = (function (){var statearr_33213 = state_33201;
(statearr_33213[(7)] = inst_33178__$1);

return statearr_33213;
})();
if(cljs.core.truth_(inst_33179)){
var statearr_33214_35251 = state_33201__$1;
(statearr_33214_35251[(1)] = (5));

} else {
var statearr_33215_35252 = state_33201__$1;
(statearr_33215_35252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (6))){
var inst_33183 = (state_33201[(8)]);
var inst_33178 = (state_33201[(7)]);
var inst_33183__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33187 = [inst_33178,inst_33183__$1];
var inst_33188 = (new cljs.core.PersistentVector(null,2,(5),inst_33184,inst_33187,null));
var state_33201__$1 = (function (){var statearr_33216 = state_33201;
(statearr_33216[(8)] = inst_33183__$1);

return statearr_33216;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33201__$1,(8),jobs,inst_33188);
} else {
if((state_val_33202 === (3))){
var inst_33199 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33201__$1,inst_33199);
} else {
if((state_val_33202 === (2))){
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33201__$1,(4),from);
} else {
if((state_val_33202 === (9))){
var inst_33194 = (state_33201[(2)]);
var state_33201__$1 = (function (){var statearr_33231 = state_33201;
(statearr_33231[(9)] = inst_33194);

return statearr_33231;
})();
var statearr_33232_35255 = state_33201__$1;
(statearr_33232_35255[(2)] = null);

(statearr_33232_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (5))){
var inst_33181 = cljs.core.async.close_BANG_(jobs);
var state_33201__$1 = state_33201;
var statearr_33233_35256 = state_33201__$1;
(statearr_33233_35256[(2)] = inst_33181);

(statearr_33233_35256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (8))){
var inst_33183 = (state_33201[(8)]);
var inst_33190 = (state_33201[(2)]);
var state_33201__$1 = (function (){var statearr_33236 = state_33201;
(statearr_33236[(10)] = inst_33190);

return statearr_33236;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33201__$1,(9),results,inst_33183);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0 = (function (){
var statearr_33237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__);

(statearr_33237[(1)] = (1));

return statearr_33237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1 = (function (state_33201){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33201);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33238){var ex__32489__auto__ = e33238;
var statearr_33239_35257 = state_33201;
(statearr_33239_35257[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33201[(4)]))){
var statearr_33240_35258 = state_33201;
(statearr_33240_35258[(1)] = cljs.core.first((state_33201[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35259 = state_33201;
state_33201 = G__35259;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = function(state_33201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1.call(this,state_33201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33241 = f__32788__auto__();
(statearr_33241[(6)] = c__32787__auto___35248);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


var c__32787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33281){
var state_val_33282 = (state_33281[(1)]);
if((state_val_33282 === (7))){
var inst_33277 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33287_35260 = state_33281__$1;
(statearr_33287_35260[(2)] = inst_33277);

(statearr_33287_35260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (20))){
var state_33281__$1 = state_33281;
var statearr_33296_35261 = state_33281__$1;
(statearr_33296_35261[(2)] = null);

(statearr_33296_35261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (1))){
var state_33281__$1 = state_33281;
var statearr_33301_35262 = state_33281__$1;
(statearr_33301_35262[(2)] = null);

(statearr_33301_35262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (4))){
var inst_33245 = (state_33281[(7)]);
var inst_33245__$1 = (state_33281[(2)]);
var inst_33247 = (inst_33245__$1 == null);
var state_33281__$1 = (function (){var statearr_33310 = state_33281;
(statearr_33310[(7)] = inst_33245__$1);

return statearr_33310;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33311_35263 = state_33281__$1;
(statearr_33311_35263[(1)] = (5));

} else {
var statearr_33312_35264 = state_33281__$1;
(statearr_33312_35264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (15))){
var inst_33259 = (state_33281[(8)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33281__$1,(18),to,inst_33259);
} else {
if((state_val_33282 === (21))){
var inst_33272 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33313_35265 = state_33281__$1;
(statearr_33313_35265[(2)] = inst_33272);

(statearr_33313_35265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (13))){
var inst_33274 = (state_33281[(2)]);
var state_33281__$1 = (function (){var statearr_33314 = state_33281;
(statearr_33314[(9)] = inst_33274);

return statearr_33314;
})();
var statearr_33315_35270 = state_33281__$1;
(statearr_33315_35270[(2)] = null);

(statearr_33315_35270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (6))){
var inst_33245 = (state_33281[(7)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33281__$1,(11),inst_33245);
} else {
if((state_val_33282 === (17))){
var inst_33267 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
if(cljs.core.truth_(inst_33267)){
var statearr_33316_35272 = state_33281__$1;
(statearr_33316_35272[(1)] = (19));

} else {
var statearr_33317_35273 = state_33281__$1;
(statearr_33317_35273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (3))){
var inst_33279 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33281__$1,inst_33279);
} else {
if((state_val_33282 === (12))){
var inst_33256 = (state_33281[(10)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33281__$1,(14),inst_33256);
} else {
if((state_val_33282 === (2))){
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33281__$1,(4),results);
} else {
if((state_val_33282 === (19))){
var state_33281__$1 = state_33281;
var statearr_33319_35274 = state_33281__$1;
(statearr_33319_35274[(2)] = null);

(statearr_33319_35274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (11))){
var inst_33256 = (state_33281[(2)]);
var state_33281__$1 = (function (){var statearr_33321 = state_33281;
(statearr_33321[(10)] = inst_33256);

return statearr_33321;
})();
var statearr_33322_35275 = state_33281__$1;
(statearr_33322_35275[(2)] = null);

(statearr_33322_35275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (9))){
var state_33281__$1 = state_33281;
var statearr_33324_35277 = state_33281__$1;
(statearr_33324_35277[(2)] = null);

(statearr_33324_35277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (5))){
var state_33281__$1 = state_33281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33325_35278 = state_33281__$1;
(statearr_33325_35278[(1)] = (8));

} else {
var statearr_33326_35279 = state_33281__$1;
(statearr_33326_35279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (14))){
var inst_33259 = (state_33281[(8)]);
var inst_33261 = (state_33281[(11)]);
var inst_33259__$1 = (state_33281[(2)]);
var inst_33260 = (inst_33259__$1 == null);
var inst_33261__$1 = cljs.core.not(inst_33260);
var state_33281__$1 = (function (){var statearr_33328 = state_33281;
(statearr_33328[(8)] = inst_33259__$1);

(statearr_33328[(11)] = inst_33261__$1);

return statearr_33328;
})();
if(inst_33261__$1){
var statearr_33329_35282 = state_33281__$1;
(statearr_33329_35282[(1)] = (15));

} else {
var statearr_33330_35283 = state_33281__$1;
(statearr_33330_35283[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (16))){
var inst_33261 = (state_33281[(11)]);
var state_33281__$1 = state_33281;
var statearr_33331_35284 = state_33281__$1;
(statearr_33331_35284[(2)] = inst_33261);

(statearr_33331_35284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (10))){
var inst_33253 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33332_35291 = state_33281__$1;
(statearr_33332_35291[(2)] = inst_33253);

(statearr_33332_35291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (18))){
var inst_33264 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33333_35292 = state_33281__$1;
(statearr_33333_35292[(2)] = inst_33264);

(statearr_33333_35292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (8))){
var inst_33250 = cljs.core.async.close_BANG_(to);
var state_33281__$1 = state_33281;
var statearr_33335_35296 = state_33281__$1;
(statearr_33335_35296[(2)] = inst_33250);

(statearr_33335_35296[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0 = (function (){
var statearr_33344 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__);

(statearr_33344[(1)] = (1));

return statearr_33344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1 = (function (state_33281){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33281);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33349){var ex__32489__auto__ = e33349;
var statearr_33350_35297 = state_33281;
(statearr_33350_35297[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33281[(4)]))){
var statearr_33359_35298 = state_33281;
(statearr_33359_35298[(1)] = cljs.core.first((state_33281[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35299 = state_33281;
state_33281 = G__35299;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33360 = f__32788__auto__();
(statearr_33360[(6)] = c__32787__auto__);

return statearr_33360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));

return c__32787__auto__;
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
var G__33363 = arguments.length;
switch (G__33363) {
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
var G__33366 = arguments.length;
switch (G__33366) {
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
var G__33369 = arguments.length;
switch (G__33369) {
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
var c__32787__auto___35315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33395){
var state_val_33396 = (state_33395[(1)]);
if((state_val_33396 === (7))){
var inst_33391 = (state_33395[(2)]);
var state_33395__$1 = state_33395;
var statearr_33398_35316 = state_33395__$1;
(statearr_33398_35316[(2)] = inst_33391);

(statearr_33398_35316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (1))){
var state_33395__$1 = state_33395;
var statearr_33399_35318 = state_33395__$1;
(statearr_33399_35318[(2)] = null);

(statearr_33399_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (4))){
var inst_33372 = (state_33395[(7)]);
var inst_33372__$1 = (state_33395[(2)]);
var inst_33373 = (inst_33372__$1 == null);
var state_33395__$1 = (function (){var statearr_33400 = state_33395;
(statearr_33400[(7)] = inst_33372__$1);

return statearr_33400;
})();
if(cljs.core.truth_(inst_33373)){
var statearr_33401_35326 = state_33395__$1;
(statearr_33401_35326[(1)] = (5));

} else {
var statearr_33402_35327 = state_33395__$1;
(statearr_33402_35327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (13))){
var state_33395__$1 = state_33395;
var statearr_33403_35328 = state_33395__$1;
(statearr_33403_35328[(2)] = null);

(statearr_33403_35328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (6))){
var inst_33372 = (state_33395[(7)]);
var inst_33378 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33372) : p.call(null,inst_33372));
var state_33395__$1 = state_33395;
if(cljs.core.truth_(inst_33378)){
var statearr_33404_35329 = state_33395__$1;
(statearr_33404_35329[(1)] = (9));

} else {
var statearr_33405_35330 = state_33395__$1;
(statearr_33405_35330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (3))){
var inst_33393 = (state_33395[(2)]);
var state_33395__$1 = state_33395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33395__$1,inst_33393);
} else {
if((state_val_33396 === (12))){
var state_33395__$1 = state_33395;
var statearr_33407_35331 = state_33395__$1;
(statearr_33407_35331[(2)] = null);

(statearr_33407_35331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (2))){
var state_33395__$1 = state_33395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33395__$1,(4),ch);
} else {
if((state_val_33396 === (11))){
var inst_33372 = (state_33395[(7)]);
var inst_33382 = (state_33395[(2)]);
var state_33395__$1 = state_33395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33395__$1,(8),inst_33382,inst_33372);
} else {
if((state_val_33396 === (9))){
var state_33395__$1 = state_33395;
var statearr_33408_35333 = state_33395__$1;
(statearr_33408_35333[(2)] = tc);

(statearr_33408_35333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (5))){
var inst_33375 = cljs.core.async.close_BANG_(tc);
var inst_33376 = cljs.core.async.close_BANG_(fc);
var state_33395__$1 = (function (){var statearr_33409 = state_33395;
(statearr_33409[(8)] = inst_33375);

return statearr_33409;
})();
var statearr_33410_35334 = state_33395__$1;
(statearr_33410_35334[(2)] = inst_33376);

(statearr_33410_35334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (14))){
var inst_33389 = (state_33395[(2)]);
var state_33395__$1 = state_33395;
var statearr_33411_35335 = state_33395__$1;
(statearr_33411_35335[(2)] = inst_33389);

(statearr_33411_35335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (10))){
var state_33395__$1 = state_33395;
var statearr_33412_35336 = state_33395__$1;
(statearr_33412_35336[(2)] = fc);

(statearr_33412_35336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33396 === (8))){
var inst_33384 = (state_33395[(2)]);
var state_33395__$1 = state_33395;
if(cljs.core.truth_(inst_33384)){
var statearr_33414_35338 = state_33395__$1;
(statearr_33414_35338[(1)] = (12));

} else {
var statearr_33415_35339 = state_33395__$1;
(statearr_33415_35339[(1)] = (13));

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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_33395){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33395);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33417){var ex__32489__auto__ = e33417;
var statearr_33418_35342 = state_33395;
(statearr_33418_35342[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33395[(4)]))){
var statearr_33419_35343 = state_33395;
(statearr_33419_35343[(1)] = cljs.core.first((state_33395[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_33395;
state_33395 = G__35344;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_33395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_33395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33420 = f__32788__auto__();
(statearr_33420[(6)] = c__32787__auto___35315);

return statearr_33420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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
var c__32787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33443){
var state_val_33444 = (state_33443[(1)]);
if((state_val_33444 === (7))){
var inst_33439 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33445_35345 = state_33443__$1;
(statearr_33445_35345[(2)] = inst_33439);

(statearr_33445_35345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (1))){
var inst_33422 = init;
var inst_33423 = inst_33422;
var state_33443__$1 = (function (){var statearr_33446 = state_33443;
(statearr_33446[(7)] = inst_33423);

return statearr_33446;
})();
var statearr_33447_35346 = state_33443__$1;
(statearr_33447_35346[(2)] = null);

(statearr_33447_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (4))){
var inst_33426 = (state_33443[(8)]);
var inst_33426__$1 = (state_33443[(2)]);
var inst_33427 = (inst_33426__$1 == null);
var state_33443__$1 = (function (){var statearr_33448 = state_33443;
(statearr_33448[(8)] = inst_33426__$1);

return statearr_33448;
})();
if(cljs.core.truth_(inst_33427)){
var statearr_33449_35347 = state_33443__$1;
(statearr_33449_35347[(1)] = (5));

} else {
var statearr_33451_35348 = state_33443__$1;
(statearr_33451_35348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (6))){
var inst_33426 = (state_33443[(8)]);
var inst_33430 = (state_33443[(9)]);
var inst_33423 = (state_33443[(7)]);
var inst_33430__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33423,inst_33426) : f.call(null,inst_33423,inst_33426));
var inst_33431 = cljs.core.reduced_QMARK_(inst_33430__$1);
var state_33443__$1 = (function (){var statearr_33452 = state_33443;
(statearr_33452[(9)] = inst_33430__$1);

return statearr_33452;
})();
if(inst_33431){
var statearr_33453_35349 = state_33443__$1;
(statearr_33453_35349[(1)] = (8));

} else {
var statearr_33454_35350 = state_33443__$1;
(statearr_33454_35350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (3))){
var inst_33441 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33443__$1,inst_33441);
} else {
if((state_val_33444 === (2))){
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33443__$1,(4),ch);
} else {
if((state_val_33444 === (9))){
var inst_33430 = (state_33443[(9)]);
var inst_33423 = inst_33430;
var state_33443__$1 = (function (){var statearr_33455 = state_33443;
(statearr_33455[(7)] = inst_33423);

return statearr_33455;
})();
var statearr_33456_35356 = state_33443__$1;
(statearr_33456_35356[(2)] = null);

(statearr_33456_35356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (5))){
var inst_33423 = (state_33443[(7)]);
var state_33443__$1 = state_33443;
var statearr_33457_35357 = state_33443__$1;
(statearr_33457_35357[(2)] = inst_33423);

(statearr_33457_35357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (10))){
var inst_33437 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33458_35358 = state_33443__$1;
(statearr_33458_35358[(2)] = inst_33437);

(statearr_33458_35358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (8))){
var inst_33430 = (state_33443[(9)]);
var inst_33433 = cljs.core.deref(inst_33430);
var state_33443__$1 = state_33443;
var statearr_33459_35364 = state_33443__$1;
(statearr_33459_35364[(2)] = inst_33433);

(statearr_33459_35364[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32486__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32486__auto____0 = (function (){
var statearr_33461 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33461[(0)] = cljs$core$async$reduce_$_state_machine__32486__auto__);

(statearr_33461[(1)] = (1));

return statearr_33461;
});
var cljs$core$async$reduce_$_state_machine__32486__auto____1 = (function (state_33443){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33443);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33462){var ex__32489__auto__ = e33462;
var statearr_33463_35367 = state_33443;
(statearr_33463_35367[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33443[(4)]))){
var statearr_33464_35368 = state_33443;
(statearr_33464_35368[(1)] = cljs.core.first((state_33443[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35369 = state_33443;
state_33443 = G__35369;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32486__auto__ = function(state_33443){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32486__auto____1.call(this,state_33443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32486__auto____0;
cljs$core$async$reduce_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32486__auto____1;
return cljs$core$async$reduce_$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33465 = f__32788__auto__();
(statearr_33465[(6)] = c__32787__auto__);

return statearr_33465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));

return c__32787__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33472){
var state_val_33473 = (state_33472[(1)]);
if((state_val_33473 === (1))){
var inst_33467 = cljs.core.async.reduce(f__$1,init,ch);
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33472__$1,(2),inst_33467);
} else {
if((state_val_33473 === (2))){
var inst_33469 = (state_33472[(2)]);
var inst_33470 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33469) : f__$1.call(null,inst_33469));
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33472__$1,inst_33470);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32486__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32486__auto____0 = (function (){
var statearr_33474 = [null,null,null,null,null,null,null];
(statearr_33474[(0)] = cljs$core$async$transduce_$_state_machine__32486__auto__);

(statearr_33474[(1)] = (1));

return statearr_33474;
});
var cljs$core$async$transduce_$_state_machine__32486__auto____1 = (function (state_33472){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33472);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33475){var ex__32489__auto__ = e33475;
var statearr_33477_35370 = state_33472;
(statearr_33477_35370[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33472[(4)]))){
var statearr_33478_35371 = state_33472;
(statearr_33478_35371[(1)] = cljs.core.first((state_33472[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35373 = state_33472;
state_33472 = G__35373;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32486__auto__ = function(state_33472){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32486__auto____1.call(this,state_33472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32486__auto____0;
cljs$core$async$transduce_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32486__auto____1;
return cljs$core$async$transduce_$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33479 = f__32788__auto__();
(statearr_33479[(6)] = c__32787__auto__);

return statearr_33479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));

return c__32787__auto__;
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
var G__33481 = arguments.length;
switch (G__33481) {
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
var c__32787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33507){
var state_val_33508 = (state_33507[(1)]);
if((state_val_33508 === (7))){
var inst_33489 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33509_35375 = state_33507__$1;
(statearr_33509_35375[(2)] = inst_33489);

(statearr_33509_35375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (1))){
var inst_33483 = cljs.core.seq(coll);
var inst_33484 = inst_33483;
var state_33507__$1 = (function (){var statearr_33511 = state_33507;
(statearr_33511[(7)] = inst_33484);

return statearr_33511;
})();
var statearr_33512_35377 = state_33507__$1;
(statearr_33512_35377[(2)] = null);

(statearr_33512_35377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (4))){
var inst_33484 = (state_33507[(7)]);
var inst_33487 = cljs.core.first(inst_33484);
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33507__$1,(7),ch,inst_33487);
} else {
if((state_val_33508 === (13))){
var inst_33501 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33513_35379 = state_33507__$1;
(statearr_33513_35379[(2)] = inst_33501);

(statearr_33513_35379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (6))){
var inst_33492 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
if(cljs.core.truth_(inst_33492)){
var statearr_33514_35381 = state_33507__$1;
(statearr_33514_35381[(1)] = (8));

} else {
var statearr_33515_35387 = state_33507__$1;
(statearr_33515_35387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (3))){
var inst_33505 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33507__$1,inst_33505);
} else {
if((state_val_33508 === (12))){
var state_33507__$1 = state_33507;
var statearr_33516_35388 = state_33507__$1;
(statearr_33516_35388[(2)] = null);

(statearr_33516_35388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (2))){
var inst_33484 = (state_33507[(7)]);
var state_33507__$1 = state_33507;
if(cljs.core.truth_(inst_33484)){
var statearr_33518_35389 = state_33507__$1;
(statearr_33518_35389[(1)] = (4));

} else {
var statearr_33519_35390 = state_33507__$1;
(statearr_33519_35390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (11))){
var inst_33498 = cljs.core.async.close_BANG_(ch);
var state_33507__$1 = state_33507;
var statearr_33520_35391 = state_33507__$1;
(statearr_33520_35391[(2)] = inst_33498);

(statearr_33520_35391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (9))){
var state_33507__$1 = state_33507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33521_35392 = state_33507__$1;
(statearr_33521_35392[(1)] = (11));

} else {
var statearr_33522_35393 = state_33507__$1;
(statearr_33522_35393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (5))){
var inst_33484 = (state_33507[(7)]);
var state_33507__$1 = state_33507;
var statearr_33523_35394 = state_33507__$1;
(statearr_33523_35394[(2)] = inst_33484);

(statearr_33523_35394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (10))){
var inst_33503 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33524_35395 = state_33507__$1;
(statearr_33524_35395[(2)] = inst_33503);

(statearr_33524_35395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (8))){
var inst_33484 = (state_33507[(7)]);
var inst_33494 = cljs.core.next(inst_33484);
var inst_33484__$1 = inst_33494;
var state_33507__$1 = (function (){var statearr_33526 = state_33507;
(statearr_33526[(7)] = inst_33484__$1);

return statearr_33526;
})();
var statearr_33527_35396 = state_33507__$1;
(statearr_33527_35396[(2)] = null);

(statearr_33527_35396[(1)] = (2));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_33528 = [null,null,null,null,null,null,null,null];
(statearr_33528[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_33528[(1)] = (1));

return statearr_33528;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_33507){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33507);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33529){var ex__32489__auto__ = e33529;
var statearr_33530_35401 = state_33507;
(statearr_33530_35401[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33507[(4)]))){
var statearr_33531_35403 = state_33507;
(statearr_33531_35403[(1)] = cljs.core.first((state_33507[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35404 = state_33507;
state_33507 = G__35404;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_33507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_33507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33532 = f__32788__auto__();
(statearr_33532[(6)] = c__32787__auto__);

return statearr_33532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));

return c__32787__auto__;
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
var G__33535 = arguments.length;
switch (G__33535) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35406 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35406(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35414 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35414(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35418 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35418(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35423 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35423(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33541 = (function (ch,cs,meta33542){
this.ch = ch;
this.cs = cs;
this.meta33542 = meta33542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33543,meta33542__$1){
var self__ = this;
var _33543__$1 = this;
return (new cljs.core.async.t_cljs$core$async33541(self__.ch,self__.cs,meta33542__$1));
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33543){
var self__ = this;
var _33543__$1 = this;
return self__.meta33542;
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33542","meta33542",346955620,null)], null);
}));

(cljs.core.async.t_cljs$core$async33541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33541");

(cljs.core.async.t_cljs$core$async33541.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33541.
 */
cljs.core.async.__GT_t_cljs$core$async33541 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33541(ch__$1,cs__$1,meta33542){
return (new cljs.core.async.t_cljs$core$async33541(ch__$1,cs__$1,meta33542));
});

}

return (new cljs.core.async.t_cljs$core$async33541(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32787__auto___35427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33682){
var state_val_33683 = (state_33682[(1)]);
if((state_val_33683 === (7))){
var inst_33678 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33685_35428 = state_33682__$1;
(statearr_33685_35428[(2)] = inst_33678);

(statearr_33685_35428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (20))){
var inst_33581 = (state_33682[(7)]);
var inst_33593 = cljs.core.first(inst_33581);
var inst_33594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33593,(0),null);
var inst_33595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33593,(1),null);
var state_33682__$1 = (function (){var statearr_33686 = state_33682;
(statearr_33686[(8)] = inst_33594);

return statearr_33686;
})();
if(cljs.core.truth_(inst_33595)){
var statearr_33687_35429 = state_33682__$1;
(statearr_33687_35429[(1)] = (22));

} else {
var statearr_33688_35430 = state_33682__$1;
(statearr_33688_35430[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (27))){
var inst_33549 = (state_33682[(9)]);
var inst_33626 = (state_33682[(10)]);
var inst_33624 = (state_33682[(11)]);
var inst_33631 = (state_33682[(12)]);
var inst_33631__$1 = cljs.core._nth(inst_33624,inst_33626);
var inst_33632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33631__$1,inst_33549,done);
var state_33682__$1 = (function (){var statearr_33690 = state_33682;
(statearr_33690[(12)] = inst_33631__$1);

return statearr_33690;
})();
if(cljs.core.truth_(inst_33632)){
var statearr_33691_35431 = state_33682__$1;
(statearr_33691_35431[(1)] = (30));

} else {
var statearr_33692_35432 = state_33682__$1;
(statearr_33692_35432[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (1))){
var state_33682__$1 = state_33682;
var statearr_33693_35433 = state_33682__$1;
(statearr_33693_35433[(2)] = null);

(statearr_33693_35433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (24))){
var inst_33581 = (state_33682[(7)]);
var inst_33600 = (state_33682[(2)]);
var inst_33601 = cljs.core.next(inst_33581);
var inst_33558 = inst_33601;
var inst_33559 = null;
var inst_33560 = (0);
var inst_33561 = (0);
var state_33682__$1 = (function (){var statearr_33694 = state_33682;
(statearr_33694[(13)] = inst_33561);

(statearr_33694[(14)] = inst_33558);

(statearr_33694[(15)] = inst_33600);

(statearr_33694[(16)] = inst_33559);

(statearr_33694[(17)] = inst_33560);

return statearr_33694;
})();
var statearr_33695_35434 = state_33682__$1;
(statearr_33695_35434[(2)] = null);

(statearr_33695_35434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (39))){
var state_33682__$1 = state_33682;
var statearr_33700_35435 = state_33682__$1;
(statearr_33700_35435[(2)] = null);

(statearr_33700_35435[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (4))){
var inst_33549 = (state_33682[(9)]);
var inst_33549__$1 = (state_33682[(2)]);
var inst_33550 = (inst_33549__$1 == null);
var state_33682__$1 = (function (){var statearr_33701 = state_33682;
(statearr_33701[(9)] = inst_33549__$1);

return statearr_33701;
})();
if(cljs.core.truth_(inst_33550)){
var statearr_33702_35436 = state_33682__$1;
(statearr_33702_35436[(1)] = (5));

} else {
var statearr_33703_35437 = state_33682__$1;
(statearr_33703_35437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (15))){
var inst_33561 = (state_33682[(13)]);
var inst_33558 = (state_33682[(14)]);
var inst_33559 = (state_33682[(16)]);
var inst_33560 = (state_33682[(17)]);
var inst_33577 = (state_33682[(2)]);
var inst_33578 = (inst_33561 + (1));
var tmp33697 = inst_33558;
var tmp33698 = inst_33559;
var tmp33699 = inst_33560;
var inst_33558__$1 = tmp33697;
var inst_33559__$1 = tmp33698;
var inst_33560__$1 = tmp33699;
var inst_33561__$1 = inst_33578;
var state_33682__$1 = (function (){var statearr_33705 = state_33682;
(statearr_33705[(13)] = inst_33561__$1);

(statearr_33705[(14)] = inst_33558__$1);

(statearr_33705[(16)] = inst_33559__$1);

(statearr_33705[(18)] = inst_33577);

(statearr_33705[(17)] = inst_33560__$1);

return statearr_33705;
})();
var statearr_33706_35438 = state_33682__$1;
(statearr_33706_35438[(2)] = null);

(statearr_33706_35438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (21))){
var inst_33604 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33710_35439 = state_33682__$1;
(statearr_33710_35439[(2)] = inst_33604);

(statearr_33710_35439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (31))){
var inst_33631 = (state_33682[(12)]);
var inst_33635 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33631);
var state_33682__$1 = state_33682;
var statearr_33711_35440 = state_33682__$1;
(statearr_33711_35440[(2)] = inst_33635);

(statearr_33711_35440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (32))){
var inst_33626 = (state_33682[(10)]);
var inst_33624 = (state_33682[(11)]);
var inst_33625 = (state_33682[(19)]);
var inst_33623 = (state_33682[(20)]);
var inst_33637 = (state_33682[(2)]);
var inst_33638 = (inst_33626 + (1));
var tmp33707 = inst_33624;
var tmp33708 = inst_33625;
var tmp33709 = inst_33623;
var inst_33623__$1 = tmp33709;
var inst_33624__$1 = tmp33707;
var inst_33625__$1 = tmp33708;
var inst_33626__$1 = inst_33638;
var state_33682__$1 = (function (){var statearr_33713 = state_33682;
(statearr_33713[(10)] = inst_33626__$1);

(statearr_33713[(11)] = inst_33624__$1);

(statearr_33713[(21)] = inst_33637);

(statearr_33713[(19)] = inst_33625__$1);

(statearr_33713[(20)] = inst_33623__$1);

return statearr_33713;
})();
var statearr_33714_35443 = state_33682__$1;
(statearr_33714_35443[(2)] = null);

(statearr_33714_35443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (40))){
var inst_33650 = (state_33682[(22)]);
var inst_33655 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33650);
var state_33682__$1 = state_33682;
var statearr_33715_35444 = state_33682__$1;
(statearr_33715_35444[(2)] = inst_33655);

(statearr_33715_35444[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (33))){
var inst_33641 = (state_33682[(23)]);
var inst_33643 = cljs.core.chunked_seq_QMARK_(inst_33641);
var state_33682__$1 = state_33682;
if(inst_33643){
var statearr_33716_35445 = state_33682__$1;
(statearr_33716_35445[(1)] = (36));

} else {
var statearr_33718_35446 = state_33682__$1;
(statearr_33718_35446[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (13))){
var inst_33570 = (state_33682[(24)]);
var inst_33574 = cljs.core.async.close_BANG_(inst_33570);
var state_33682__$1 = state_33682;
var statearr_33719_35447 = state_33682__$1;
(statearr_33719_35447[(2)] = inst_33574);

(statearr_33719_35447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (22))){
var inst_33594 = (state_33682[(8)]);
var inst_33597 = cljs.core.async.close_BANG_(inst_33594);
var state_33682__$1 = state_33682;
var statearr_33720_35448 = state_33682__$1;
(statearr_33720_35448[(2)] = inst_33597);

(statearr_33720_35448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (36))){
var inst_33641 = (state_33682[(23)]);
var inst_33645 = cljs.core.chunk_first(inst_33641);
var inst_33646 = cljs.core.chunk_rest(inst_33641);
var inst_33647 = cljs.core.count(inst_33645);
var inst_33623 = inst_33646;
var inst_33624 = inst_33645;
var inst_33625 = inst_33647;
var inst_33626 = (0);
var state_33682__$1 = (function (){var statearr_33721 = state_33682;
(statearr_33721[(10)] = inst_33626);

(statearr_33721[(11)] = inst_33624);

(statearr_33721[(19)] = inst_33625);

(statearr_33721[(20)] = inst_33623);

return statearr_33721;
})();
var statearr_33723_35449 = state_33682__$1;
(statearr_33723_35449[(2)] = null);

(statearr_33723_35449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (41))){
var inst_33641 = (state_33682[(23)]);
var inst_33657 = (state_33682[(2)]);
var inst_33658 = cljs.core.next(inst_33641);
var inst_33623 = inst_33658;
var inst_33624 = null;
var inst_33625 = (0);
var inst_33626 = (0);
var state_33682__$1 = (function (){var statearr_33724 = state_33682;
(statearr_33724[(10)] = inst_33626);

(statearr_33724[(11)] = inst_33624);

(statearr_33724[(25)] = inst_33657);

(statearr_33724[(19)] = inst_33625);

(statearr_33724[(20)] = inst_33623);

return statearr_33724;
})();
var statearr_33725_35450 = state_33682__$1;
(statearr_33725_35450[(2)] = null);

(statearr_33725_35450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (43))){
var state_33682__$1 = state_33682;
var statearr_33726_35451 = state_33682__$1;
(statearr_33726_35451[(2)] = null);

(statearr_33726_35451[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (29))){
var inst_33666 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33728_35452 = state_33682__$1;
(statearr_33728_35452[(2)] = inst_33666);

(statearr_33728_35452[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (44))){
var inst_33675 = (state_33682[(2)]);
var state_33682__$1 = (function (){var statearr_33729 = state_33682;
(statearr_33729[(26)] = inst_33675);

return statearr_33729;
})();
var statearr_33730_35454 = state_33682__$1;
(statearr_33730_35454[(2)] = null);

(statearr_33730_35454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (6))){
var inst_33615 = (state_33682[(27)]);
var inst_33614 = cljs.core.deref(cs);
var inst_33615__$1 = cljs.core.keys(inst_33614);
var inst_33616 = cljs.core.count(inst_33615__$1);
var inst_33617 = cljs.core.reset_BANG_(dctr,inst_33616);
var inst_33622 = cljs.core.seq(inst_33615__$1);
var inst_33623 = inst_33622;
var inst_33624 = null;
var inst_33625 = (0);
var inst_33626 = (0);
var state_33682__$1 = (function (){var statearr_33731 = state_33682;
(statearr_33731[(27)] = inst_33615__$1);

(statearr_33731[(10)] = inst_33626);

(statearr_33731[(11)] = inst_33624);

(statearr_33731[(28)] = inst_33617);

(statearr_33731[(19)] = inst_33625);

(statearr_33731[(20)] = inst_33623);

return statearr_33731;
})();
var statearr_33733_35459 = state_33682__$1;
(statearr_33733_35459[(2)] = null);

(statearr_33733_35459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (28))){
var inst_33641 = (state_33682[(23)]);
var inst_33623 = (state_33682[(20)]);
var inst_33641__$1 = cljs.core.seq(inst_33623);
var state_33682__$1 = (function (){var statearr_33734 = state_33682;
(statearr_33734[(23)] = inst_33641__$1);

return statearr_33734;
})();
if(inst_33641__$1){
var statearr_33735_35463 = state_33682__$1;
(statearr_33735_35463[(1)] = (33));

} else {
var statearr_33736_35464 = state_33682__$1;
(statearr_33736_35464[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (25))){
var inst_33626 = (state_33682[(10)]);
var inst_33625 = (state_33682[(19)]);
var inst_33628 = (inst_33626 < inst_33625);
var inst_33629 = inst_33628;
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33629)){
var statearr_33737_35468 = state_33682__$1;
(statearr_33737_35468[(1)] = (27));

} else {
var statearr_33738_35469 = state_33682__$1;
(statearr_33738_35469[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (34))){
var state_33682__$1 = state_33682;
var statearr_33740_35470 = state_33682__$1;
(statearr_33740_35470[(2)] = null);

(statearr_33740_35470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (17))){
var state_33682__$1 = state_33682;
var statearr_33741_35471 = state_33682__$1;
(statearr_33741_35471[(2)] = null);

(statearr_33741_35471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (3))){
var inst_33680 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33682__$1,inst_33680);
} else {
if((state_val_33683 === (12))){
var inst_33609 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33742_35472 = state_33682__$1;
(statearr_33742_35472[(2)] = inst_33609);

(statearr_33742_35472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (2))){
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33682__$1,(4),ch);
} else {
if((state_val_33683 === (23))){
var state_33682__$1 = state_33682;
var statearr_33744_35476 = state_33682__$1;
(statearr_33744_35476[(2)] = null);

(statearr_33744_35476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (35))){
var inst_33664 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33745_35477 = state_33682__$1;
(statearr_33745_35477[(2)] = inst_33664);

(statearr_33745_35477[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (19))){
var inst_33581 = (state_33682[(7)]);
var inst_33585 = cljs.core.chunk_first(inst_33581);
var inst_33586 = cljs.core.chunk_rest(inst_33581);
var inst_33587 = cljs.core.count(inst_33585);
var inst_33558 = inst_33586;
var inst_33559 = inst_33585;
var inst_33560 = inst_33587;
var inst_33561 = (0);
var state_33682__$1 = (function (){var statearr_33746 = state_33682;
(statearr_33746[(13)] = inst_33561);

(statearr_33746[(14)] = inst_33558);

(statearr_33746[(16)] = inst_33559);

(statearr_33746[(17)] = inst_33560);

return statearr_33746;
})();
var statearr_33747_35481 = state_33682__$1;
(statearr_33747_35481[(2)] = null);

(statearr_33747_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (11))){
var inst_33581 = (state_33682[(7)]);
var inst_33558 = (state_33682[(14)]);
var inst_33581__$1 = cljs.core.seq(inst_33558);
var state_33682__$1 = (function (){var statearr_33749 = state_33682;
(statearr_33749[(7)] = inst_33581__$1);

return statearr_33749;
})();
if(inst_33581__$1){
var statearr_33750_35485 = state_33682__$1;
(statearr_33750_35485[(1)] = (16));

} else {
var statearr_33751_35486 = state_33682__$1;
(statearr_33751_35486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (9))){
var inst_33611 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33752_35487 = state_33682__$1;
(statearr_33752_35487[(2)] = inst_33611);

(statearr_33752_35487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (5))){
var inst_33556 = cljs.core.deref(cs);
var inst_33557 = cljs.core.seq(inst_33556);
var inst_33558 = inst_33557;
var inst_33559 = null;
var inst_33560 = (0);
var inst_33561 = (0);
var state_33682__$1 = (function (){var statearr_33753 = state_33682;
(statearr_33753[(13)] = inst_33561);

(statearr_33753[(14)] = inst_33558);

(statearr_33753[(16)] = inst_33559);

(statearr_33753[(17)] = inst_33560);

return statearr_33753;
})();
var statearr_33755_35488 = state_33682__$1;
(statearr_33755_35488[(2)] = null);

(statearr_33755_35488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (14))){
var state_33682__$1 = state_33682;
var statearr_33756_35489 = state_33682__$1;
(statearr_33756_35489[(2)] = null);

(statearr_33756_35489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (45))){
var inst_33672 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33757_35490 = state_33682__$1;
(statearr_33757_35490[(2)] = inst_33672);

(statearr_33757_35490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (26))){
var inst_33615 = (state_33682[(27)]);
var inst_33668 = (state_33682[(2)]);
var inst_33669 = cljs.core.seq(inst_33615);
var state_33682__$1 = (function (){var statearr_33759 = state_33682;
(statearr_33759[(29)] = inst_33668);

return statearr_33759;
})();
if(inst_33669){
var statearr_33761_35494 = state_33682__$1;
(statearr_33761_35494[(1)] = (42));

} else {
var statearr_33762_35495 = state_33682__$1;
(statearr_33762_35495[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (16))){
var inst_33581 = (state_33682[(7)]);
var inst_33583 = cljs.core.chunked_seq_QMARK_(inst_33581);
var state_33682__$1 = state_33682;
if(inst_33583){
var statearr_33763_35496 = state_33682__$1;
(statearr_33763_35496[(1)] = (19));

} else {
var statearr_33764_35497 = state_33682__$1;
(statearr_33764_35497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (38))){
var inst_33661 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33765_35498 = state_33682__$1;
(statearr_33765_35498[(2)] = inst_33661);

(statearr_33765_35498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (30))){
var state_33682__$1 = state_33682;
var statearr_33766_35499 = state_33682__$1;
(statearr_33766_35499[(2)] = null);

(statearr_33766_35499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (10))){
var inst_33561 = (state_33682[(13)]);
var inst_33559 = (state_33682[(16)]);
var inst_33569 = cljs.core._nth(inst_33559,inst_33561);
var inst_33570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33569,(0),null);
var inst_33572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33569,(1),null);
var state_33682__$1 = (function (){var statearr_33769 = state_33682;
(statearr_33769[(24)] = inst_33570);

return statearr_33769;
})();
if(cljs.core.truth_(inst_33572)){
var statearr_33770_35500 = state_33682__$1;
(statearr_33770_35500[(1)] = (13));

} else {
var statearr_33771_35501 = state_33682__$1;
(statearr_33771_35501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (18))){
var inst_33607 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33772_35506 = state_33682__$1;
(statearr_33772_35506[(2)] = inst_33607);

(statearr_33772_35506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (42))){
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33682__$1,(45),dchan);
} else {
if((state_val_33683 === (37))){
var inst_33549 = (state_33682[(9)]);
var inst_33641 = (state_33682[(23)]);
var inst_33650 = (state_33682[(22)]);
var inst_33650__$1 = cljs.core.first(inst_33641);
var inst_33651 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33650__$1,inst_33549,done);
var state_33682__$1 = (function (){var statearr_33773 = state_33682;
(statearr_33773[(22)] = inst_33650__$1);

return statearr_33773;
})();
if(cljs.core.truth_(inst_33651)){
var statearr_33774_35510 = state_33682__$1;
(statearr_33774_35510[(1)] = (39));

} else {
var statearr_33775_35512 = state_33682__$1;
(statearr_33775_35512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (8))){
var inst_33561 = (state_33682[(13)]);
var inst_33560 = (state_33682[(17)]);
var inst_33563 = (inst_33561 < inst_33560);
var inst_33564 = inst_33563;
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33564)){
var statearr_33776_35513 = state_33682__$1;
(statearr_33776_35513[(1)] = (10));

} else {
var statearr_33777_35514 = state_33682__$1;
(statearr_33777_35514[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32486__auto__ = null;
var cljs$core$async$mult_$_state_machine__32486__auto____0 = (function (){
var statearr_33778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33778[(0)] = cljs$core$async$mult_$_state_machine__32486__auto__);

(statearr_33778[(1)] = (1));

return statearr_33778;
});
var cljs$core$async$mult_$_state_machine__32486__auto____1 = (function (state_33682){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33682);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e33781){var ex__32489__auto__ = e33781;
var statearr_33782_35515 = state_33682;
(statearr_33782_35515[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33682[(4)]))){
var statearr_33783_35516 = state_33682;
(statearr_33783_35516[(1)] = cljs.core.first((state_33682[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35520 = state_33682;
state_33682 = G__35520;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32486__auto__ = function(state_33682){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32486__auto____1.call(this,state_33682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32486__auto____0;
cljs$core$async$mult_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32486__auto____1;
return cljs$core$async$mult_$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_33784 = f__32788__auto__();
(statearr_33784[(6)] = c__32787__auto___35427);

return statearr_33784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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
var G__33786 = arguments.length;
switch (G__33786) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35526 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35526(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35534 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35534(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35535 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35535(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35539 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35539(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35540 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35540(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35541 = arguments.length;
var i__4865__auto___35542 = (0);
while(true){
if((i__4865__auto___35542 < len__4864__auto___35541)){
args__4870__auto__.push((arguments[i__4865__auto___35542]));

var G__35543 = (i__4865__auto___35542 + (1));
i__4865__auto___35542 = G__35543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33829){
var map__33830 = p__33829;
var map__33830__$1 = cljs.core.__destructure_map(map__33830);
var opts = map__33830__$1;
var statearr_33833_35545 = state;
(statearr_33833_35545[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33835_35546 = state;
(statearr_33835_35546[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33837_35548 = state;
(statearr_33837_35548[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33821){
var G__33822 = cljs.core.first(seq33821);
var seq33821__$1 = cljs.core.next(seq33821);
var G__33823 = cljs.core.first(seq33821__$1);
var seq33821__$2 = cljs.core.next(seq33821__$1);
var G__33824 = cljs.core.first(seq33821__$2);
var seq33821__$3 = cljs.core.next(seq33821__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33822,G__33823,G__33824,seq33821__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33854 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33855){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33855 = meta33855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33856,meta33855__$1){
var self__ = this;
var _33856__$1 = this;
return (new cljs.core.async.t_cljs$core$async33854(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33855__$1));
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33856){
var self__ = this;
var _33856__$1 = this;
return self__.meta33855;
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33855","meta33855",1518798573,null)], null);
}));

(cljs.core.async.t_cljs$core$async33854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33854");

(cljs.core.async.t_cljs$core$async33854.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33854.
 */
cljs.core.async.__GT_t_cljs$core$async33854 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33854(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33855){
return (new cljs.core.async.t_cljs$core$async33854(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33855));
});

}

return (new cljs.core.async.t_cljs$core$async33854(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32787__auto___35550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (7))){
var inst_33912 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33912)){
var statearr_33964_35551 = state_33958__$1;
(statearr_33964_35551[(1)] = (8));

} else {
var statearr_33966_35552 = state_33958__$1;
(statearr_33966_35552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (20))){
var inst_33904 = (state_33958[(7)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33958__$1,(23),out,inst_33904);
} else {
if((state_val_33959 === (1))){
var inst_33884 = calc_state();
var inst_33885 = cljs.core.__destructure_map(inst_33884);
var inst_33886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33885,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33885,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33885,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33889 = inst_33884;
var state_33958__$1 = (function (){var statearr_33970 = state_33958;
(statearr_33970[(8)] = inst_33887);

(statearr_33970[(9)] = inst_33888);

(statearr_33970[(10)] = inst_33889);

(statearr_33970[(11)] = inst_33886);

return statearr_33970;
})();
var statearr_33972_35553 = state_33958__$1;
(statearr_33972_35553[(2)] = null);

(statearr_33972_35553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (24))){
var inst_33893 = (state_33958[(12)]);
var inst_33889 = inst_33893;
var state_33958__$1 = (function (){var statearr_33976 = state_33958;
(statearr_33976[(10)] = inst_33889);

return statearr_33976;
})();
var statearr_33977_35554 = state_33958__$1;
(statearr_33977_35554[(2)] = null);

(statearr_33977_35554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (4))){
var inst_33907 = (state_33958[(13)]);
var inst_33904 = (state_33958[(7)]);
var inst_33902 = (state_33958[(2)]);
var inst_33904__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33902,(0),null);
var inst_33905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33902,(1),null);
var inst_33907__$1 = (inst_33904__$1 == null);
var state_33958__$1 = (function (){var statearr_33979 = state_33958;
(statearr_33979[(13)] = inst_33907__$1);

(statearr_33979[(7)] = inst_33904__$1);

(statearr_33979[(14)] = inst_33905);

return statearr_33979;
})();
if(cljs.core.truth_(inst_33907__$1)){
var statearr_33983_35559 = state_33958__$1;
(statearr_33983_35559[(1)] = (5));

} else {
var statearr_33984_35560 = state_33958__$1;
(statearr_33984_35560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (15))){
var inst_33894 = (state_33958[(15)]);
var inst_33927 = (state_33958[(16)]);
var inst_33927__$1 = cljs.core.empty_QMARK_(inst_33894);
var state_33958__$1 = (function (){var statearr_33987 = state_33958;
(statearr_33987[(16)] = inst_33927__$1);

return statearr_33987;
})();
if(inst_33927__$1){
var statearr_33988_35561 = state_33958__$1;
(statearr_33988_35561[(1)] = (17));

} else {
var statearr_33991_35562 = state_33958__$1;
(statearr_33991_35562[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (21))){
var inst_33893 = (state_33958[(12)]);
var inst_33889 = inst_33893;
var state_33958__$1 = (function (){var statearr_33993 = state_33958;
(statearr_33993[(10)] = inst_33889);

return statearr_33993;
})();
var statearr_33994_35563 = state_33958__$1;
(statearr_33994_35563[(2)] = null);

(statearr_33994_35563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (13))){
var inst_33919 = (state_33958[(2)]);
var inst_33921 = calc_state();
var inst_33889 = inst_33921;
var state_33958__$1 = (function (){var statearr_33999 = state_33958;
(statearr_33999[(10)] = inst_33889);

(statearr_33999[(17)] = inst_33919);

return statearr_33999;
})();
var statearr_34003_35567 = state_33958__$1;
(statearr_34003_35567[(2)] = null);

(statearr_34003_35567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (22))){
var inst_33951 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_34004_35568 = state_33958__$1;
(statearr_34004_35568[(2)] = inst_33951);

(statearr_34004_35568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (6))){
var inst_33905 = (state_33958[(14)]);
var inst_33910 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33905,change);
var state_33958__$1 = state_33958;
var statearr_34007_35569 = state_33958__$1;
(statearr_34007_35569[(2)] = inst_33910);

(statearr_34007_35569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (25))){
var state_33958__$1 = state_33958;
var statearr_34010_35570 = state_33958__$1;
(statearr_34010_35570[(2)] = null);

(statearr_34010_35570[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (17))){
var inst_33905 = (state_33958[(14)]);
var inst_33895 = (state_33958[(18)]);
var inst_33929 = (inst_33895.cljs$core$IFn$_invoke$arity$1 ? inst_33895.cljs$core$IFn$_invoke$arity$1(inst_33905) : inst_33895.call(null,inst_33905));
var inst_33931 = cljs.core.not(inst_33929);
var state_33958__$1 = state_33958;
var statearr_34012_35571 = state_33958__$1;
(statearr_34012_35571[(2)] = inst_33931);

(statearr_34012_35571[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (3))){
var inst_33955 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33958__$1,inst_33955);
} else {
if((state_val_33959 === (12))){
var state_33958__$1 = state_33958;
var statearr_34018_35572 = state_33958__$1;
(statearr_34018_35572[(2)] = null);

(statearr_34018_35572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (2))){
var inst_33893 = (state_33958[(12)]);
var inst_33889 = (state_33958[(10)]);
var inst_33893__$1 = cljs.core.__destructure_map(inst_33889);
var inst_33894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33893__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33893__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33893__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33958__$1 = (function (){var statearr_34022 = state_33958;
(statearr_34022[(12)] = inst_33893__$1);

(statearr_34022[(15)] = inst_33894);

(statearr_34022[(18)] = inst_33895);

return statearr_34022;
})();
return cljs.core.async.ioc_alts_BANG_(state_33958__$1,(4),inst_33896);
} else {
if((state_val_33959 === (23))){
var inst_33941 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33941)){
var statearr_34025_35573 = state_33958__$1;
(statearr_34025_35573[(1)] = (24));

} else {
var statearr_34026_35574 = state_33958__$1;
(statearr_34026_35574[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (19))){
var inst_33934 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_34029_35575 = state_33958__$1;
(statearr_34029_35575[(2)] = inst_33934);

(statearr_34029_35575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (11))){
var inst_33905 = (state_33958[(14)]);
var inst_33916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33905);
var state_33958__$1 = state_33958;
var statearr_34031_35578 = state_33958__$1;
(statearr_34031_35578[(2)] = inst_33916);

(statearr_34031_35578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (9))){
var inst_33924 = (state_33958[(19)]);
var inst_33905 = (state_33958[(14)]);
var inst_33894 = (state_33958[(15)]);
var inst_33924__$1 = (inst_33894.cljs$core$IFn$_invoke$arity$1 ? inst_33894.cljs$core$IFn$_invoke$arity$1(inst_33905) : inst_33894.call(null,inst_33905));
var state_33958__$1 = (function (){var statearr_34035 = state_33958;
(statearr_34035[(19)] = inst_33924__$1);

return statearr_34035;
})();
if(cljs.core.truth_(inst_33924__$1)){
var statearr_34037_35579 = state_33958__$1;
(statearr_34037_35579[(1)] = (14));

} else {
var statearr_34038_35583 = state_33958__$1;
(statearr_34038_35583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (5))){
var inst_33907 = (state_33958[(13)]);
var state_33958__$1 = state_33958;
var statearr_34040_35584 = state_33958__$1;
(statearr_34040_35584[(2)] = inst_33907);

(statearr_34040_35584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (14))){
var inst_33924 = (state_33958[(19)]);
var state_33958__$1 = state_33958;
var statearr_34043_35585 = state_33958__$1;
(statearr_34043_35585[(2)] = inst_33924);

(statearr_34043_35585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (26))){
var inst_33947 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_34045_35586 = state_33958__$1;
(statearr_34045_35586[(2)] = inst_33947);

(statearr_34045_35586[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (16))){
var inst_33937 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33937)){
var statearr_34047_35589 = state_33958__$1;
(statearr_34047_35589[(1)] = (20));

} else {
var statearr_34049_35590 = state_33958__$1;
(statearr_34049_35590[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (10))){
var inst_33953 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_34052_35591 = state_33958__$1;
(statearr_34052_35591[(2)] = inst_33953);

(statearr_34052_35591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (18))){
var inst_33927 = (state_33958[(16)]);
var state_33958__$1 = state_33958;
var statearr_34054_35592 = state_33958__$1;
(statearr_34054_35592[(2)] = inst_33927);

(statearr_34054_35592[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (8))){
var inst_33904 = (state_33958[(7)]);
var inst_33914 = (inst_33904 == null);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33914)){
var statearr_34057_35593 = state_33958__$1;
(statearr_34057_35593[(1)] = (11));

} else {
var statearr_34059_35594 = state_33958__$1;
(statearr_34059_35594[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32486__auto__ = null;
var cljs$core$async$mix_$_state_machine__32486__auto____0 = (function (){
var statearr_34061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34061[(0)] = cljs$core$async$mix_$_state_machine__32486__auto__);

(statearr_34061[(1)] = (1));

return statearr_34061;
});
var cljs$core$async$mix_$_state_machine__32486__auto____1 = (function (state_33958){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_33958);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34065){var ex__32489__auto__ = e34065;
var statearr_34066_35597 = state_33958;
(statearr_34066_35597[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_33958[(4)]))){
var statearr_34068_35598 = state_33958;
(statearr_34068_35598[(1)] = cljs.core.first((state_33958[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35599 = state_33958;
state_33958 = G__35599;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32486__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32486__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32486__auto____0;
cljs$core$async$mix_$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32486__auto____1;
return cljs$core$async$mix_$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34073 = f__32788__auto__();
(statearr_34073[(6)] = c__32787__auto___35550);

return statearr_34073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35600 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35600(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35604 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35604(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35605 = (function() {
var G__35606 = null;
var G__35606__1 = (function (p){
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
var G__35606__2 = (function (p,v){
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
G__35606 = function(p,v){
switch(arguments.length){
case 1:
return G__35606__1.call(this,p);
case 2:
return G__35606__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35606.cljs$core$IFn$_invoke$arity$1 = G__35606__1;
G__35606.cljs$core$IFn$_invoke$arity$2 = G__35606__2;
return G__35606;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34101 = arguments.length;
switch (G__34101) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35605(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35605(p,v);
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
var G__34113 = arguments.length;
switch (G__34113) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34111_SHARP_){
if(cljs.core.truth_((p1__34111_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34111_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34111_SHARP_.call(null,topic)))){
return p1__34111_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34111_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34125 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34126){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34126 = meta34126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34127,meta34126__$1){
var self__ = this;
var _34127__$1 = this;
return (new cljs.core.async.t_cljs$core$async34125(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34126__$1));
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34127){
var self__ = this;
var _34127__$1 = this;
return self__.meta34126;
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34126","meta34126",-419475767,null)], null);
}));

(cljs.core.async.t_cljs$core$async34125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34125");

(cljs.core.async.t_cljs$core$async34125.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34125.
 */
cljs.core.async.__GT_t_cljs$core$async34125 = (function cljs$core$async$__GT_t_cljs$core$async34125(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34126){
return (new cljs.core.async.t_cljs$core$async34125(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34126));
});

}

return (new cljs.core.async.t_cljs$core$async34125(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32787__auto___35624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34225){
var state_val_34226 = (state_34225[(1)]);
if((state_val_34226 === (7))){
var inst_34220 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34227_35625 = state_34225__$1;
(statearr_34227_35625[(2)] = inst_34220);

(statearr_34227_35625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (20))){
var state_34225__$1 = state_34225;
var statearr_34232_35626 = state_34225__$1;
(statearr_34232_35626[(2)] = null);

(statearr_34232_35626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (1))){
var state_34225__$1 = state_34225;
var statearr_34233_35633 = state_34225__$1;
(statearr_34233_35633[(2)] = null);

(statearr_34233_35633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (24))){
var inst_34200 = (state_34225[(7)]);
var inst_34209 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34200);
var state_34225__$1 = state_34225;
var statearr_34234_35634 = state_34225__$1;
(statearr_34234_35634[(2)] = inst_34209);

(statearr_34234_35634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (4))){
var inst_34147 = (state_34225[(8)]);
var inst_34147__$1 = (state_34225[(2)]);
var inst_34148 = (inst_34147__$1 == null);
var state_34225__$1 = (function (){var statearr_34236 = state_34225;
(statearr_34236[(8)] = inst_34147__$1);

return statearr_34236;
})();
if(cljs.core.truth_(inst_34148)){
var statearr_34237_35635 = state_34225__$1;
(statearr_34237_35635[(1)] = (5));

} else {
var statearr_34238_35636 = state_34225__$1;
(statearr_34238_35636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (15))){
var inst_34194 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34239_35638 = state_34225__$1;
(statearr_34239_35638[(2)] = inst_34194);

(statearr_34239_35638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (21))){
var inst_34214 = (state_34225[(2)]);
var state_34225__$1 = (function (){var statearr_34240 = state_34225;
(statearr_34240[(9)] = inst_34214);

return statearr_34240;
})();
var statearr_34241_35639 = state_34225__$1;
(statearr_34241_35639[(2)] = null);

(statearr_34241_35639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (13))){
var inst_34172 = (state_34225[(10)]);
var inst_34174 = cljs.core.chunked_seq_QMARK_(inst_34172);
var state_34225__$1 = state_34225;
if(inst_34174){
var statearr_34249_35641 = state_34225__$1;
(statearr_34249_35641[(1)] = (16));

} else {
var statearr_34250_35643 = state_34225__$1;
(statearr_34250_35643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (22))){
var inst_34206 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
if(cljs.core.truth_(inst_34206)){
var statearr_34252_35644 = state_34225__$1;
(statearr_34252_35644[(1)] = (23));

} else {
var statearr_34253_35645 = state_34225__$1;
(statearr_34253_35645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (6))){
var inst_34200 = (state_34225[(7)]);
var inst_34147 = (state_34225[(8)]);
var inst_34202 = (state_34225[(11)]);
var inst_34200__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34147) : topic_fn.call(null,inst_34147));
var inst_34201 = cljs.core.deref(mults);
var inst_34202__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34201,inst_34200__$1);
var state_34225__$1 = (function (){var statearr_34257 = state_34225;
(statearr_34257[(7)] = inst_34200__$1);

(statearr_34257[(11)] = inst_34202__$1);

return statearr_34257;
})();
if(cljs.core.truth_(inst_34202__$1)){
var statearr_34259_35646 = state_34225__$1;
(statearr_34259_35646[(1)] = (19));

} else {
var statearr_34260_35647 = state_34225__$1;
(statearr_34260_35647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (25))){
var inst_34211 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34261_35648 = state_34225__$1;
(statearr_34261_35648[(2)] = inst_34211);

(statearr_34261_35648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (17))){
var inst_34172 = (state_34225[(10)]);
var inst_34184 = cljs.core.first(inst_34172);
var inst_34186 = cljs.core.async.muxch_STAR_(inst_34184);
var inst_34187 = cljs.core.async.close_BANG_(inst_34186);
var inst_34188 = cljs.core.next(inst_34172);
var inst_34158 = inst_34188;
var inst_34159 = null;
var inst_34160 = (0);
var inst_34161 = (0);
var state_34225__$1 = (function (){var statearr_34266 = state_34225;
(statearr_34266[(12)] = inst_34158);

(statearr_34266[(13)] = inst_34160);

(statearr_34266[(14)] = inst_34161);

(statearr_34266[(15)] = inst_34159);

(statearr_34266[(16)] = inst_34187);

return statearr_34266;
})();
var statearr_34267_35649 = state_34225__$1;
(statearr_34267_35649[(2)] = null);

(statearr_34267_35649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (3))){
var inst_34222 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34225__$1,inst_34222);
} else {
if((state_val_34226 === (12))){
var inst_34196 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34271_35650 = state_34225__$1;
(statearr_34271_35650[(2)] = inst_34196);

(statearr_34271_35650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (2))){
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34225__$1,(4),ch);
} else {
if((state_val_34226 === (23))){
var state_34225__$1 = state_34225;
var statearr_34273_35651 = state_34225__$1;
(statearr_34273_35651[(2)] = null);

(statearr_34273_35651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (19))){
var inst_34147 = (state_34225[(8)]);
var inst_34202 = (state_34225[(11)]);
var inst_34204 = cljs.core.async.muxch_STAR_(inst_34202);
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34225__$1,(22),inst_34204,inst_34147);
} else {
if((state_val_34226 === (11))){
var inst_34158 = (state_34225[(12)]);
var inst_34172 = (state_34225[(10)]);
var inst_34172__$1 = cljs.core.seq(inst_34158);
var state_34225__$1 = (function (){var statearr_34275 = state_34225;
(statearr_34275[(10)] = inst_34172__$1);

return statearr_34275;
})();
if(inst_34172__$1){
var statearr_34276_35652 = state_34225__$1;
(statearr_34276_35652[(1)] = (13));

} else {
var statearr_34277_35653 = state_34225__$1;
(statearr_34277_35653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (9))){
var inst_34198 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34278_35654 = state_34225__$1;
(statearr_34278_35654[(2)] = inst_34198);

(statearr_34278_35654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (5))){
var inst_34155 = cljs.core.deref(mults);
var inst_34156 = cljs.core.vals(inst_34155);
var inst_34157 = cljs.core.seq(inst_34156);
var inst_34158 = inst_34157;
var inst_34159 = null;
var inst_34160 = (0);
var inst_34161 = (0);
var state_34225__$1 = (function (){var statearr_34279 = state_34225;
(statearr_34279[(12)] = inst_34158);

(statearr_34279[(13)] = inst_34160);

(statearr_34279[(14)] = inst_34161);

(statearr_34279[(15)] = inst_34159);

return statearr_34279;
})();
var statearr_34280_35655 = state_34225__$1;
(statearr_34280_35655[(2)] = null);

(statearr_34280_35655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (14))){
var state_34225__$1 = state_34225;
var statearr_34291_35656 = state_34225__$1;
(statearr_34291_35656[(2)] = null);

(statearr_34291_35656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (16))){
var inst_34172 = (state_34225[(10)]);
var inst_34176 = cljs.core.chunk_first(inst_34172);
var inst_34180 = cljs.core.chunk_rest(inst_34172);
var inst_34181 = cljs.core.count(inst_34176);
var inst_34158 = inst_34180;
var inst_34159 = inst_34176;
var inst_34160 = inst_34181;
var inst_34161 = (0);
var state_34225__$1 = (function (){var statearr_34293 = state_34225;
(statearr_34293[(12)] = inst_34158);

(statearr_34293[(13)] = inst_34160);

(statearr_34293[(14)] = inst_34161);

(statearr_34293[(15)] = inst_34159);

return statearr_34293;
})();
var statearr_34294_35657 = state_34225__$1;
(statearr_34294_35657[(2)] = null);

(statearr_34294_35657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (10))){
var inst_34158 = (state_34225[(12)]);
var inst_34160 = (state_34225[(13)]);
var inst_34161 = (state_34225[(14)]);
var inst_34159 = (state_34225[(15)]);
var inst_34166 = cljs.core._nth(inst_34159,inst_34161);
var inst_34167 = cljs.core.async.muxch_STAR_(inst_34166);
var inst_34168 = cljs.core.async.close_BANG_(inst_34167);
var inst_34169 = (inst_34161 + (1));
var tmp34285 = inst_34158;
var tmp34286 = inst_34160;
var tmp34287 = inst_34159;
var inst_34158__$1 = tmp34285;
var inst_34159__$1 = tmp34287;
var inst_34160__$1 = tmp34286;
var inst_34161__$1 = inst_34169;
var state_34225__$1 = (function (){var statearr_34299 = state_34225;
(statearr_34299[(12)] = inst_34158__$1);

(statearr_34299[(13)] = inst_34160__$1);

(statearr_34299[(14)] = inst_34161__$1);

(statearr_34299[(17)] = inst_34168);

(statearr_34299[(15)] = inst_34159__$1);

return statearr_34299;
})();
var statearr_34300_35664 = state_34225__$1;
(statearr_34300_35664[(2)] = null);

(statearr_34300_35664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (18))){
var inst_34191 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34304_35665 = state_34225__$1;
(statearr_34304_35665[(2)] = inst_34191);

(statearr_34304_35665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (8))){
var inst_34160 = (state_34225[(13)]);
var inst_34161 = (state_34225[(14)]);
var inst_34163 = (inst_34161 < inst_34160);
var inst_34164 = inst_34163;
var state_34225__$1 = state_34225;
if(cljs.core.truth_(inst_34164)){
var statearr_34306_35666 = state_34225__$1;
(statearr_34306_35666[(1)] = (10));

} else {
var statearr_34307_35667 = state_34225__$1;
(statearr_34307_35667[(1)] = (11));

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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34312[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34312[(1)] = (1));

return statearr_34312;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34225){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34225);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34313){var ex__32489__auto__ = e34313;
var statearr_34314_35668 = state_34225;
(statearr_34314_35668[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34225[(4)]))){
var statearr_34315_35669 = state_34225;
(statearr_34315_35669[(1)] = cljs.core.first((state_34225[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35670 = state_34225;
state_34225 = G__35670;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34316 = f__32788__auto__();
(statearr_34316[(6)] = c__32787__auto___35624);

return statearr_34316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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
var G__34318 = arguments.length;
switch (G__34318) {
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
var G__34325 = arguments.length;
switch (G__34325) {
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
var G__34329 = arguments.length;
switch (G__34329) {
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
var c__32787__auto___35682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34372){
var state_val_34373 = (state_34372[(1)]);
if((state_val_34373 === (7))){
var state_34372__$1 = state_34372;
var statearr_34374_35683 = state_34372__$1;
(statearr_34374_35683[(2)] = null);

(statearr_34374_35683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (1))){
var state_34372__$1 = state_34372;
var statearr_34375_35684 = state_34372__$1;
(statearr_34375_35684[(2)] = null);

(statearr_34375_35684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (4))){
var inst_34332 = (state_34372[(7)]);
var inst_34333 = (state_34372[(8)]);
var inst_34335 = (inst_34333 < inst_34332);
var state_34372__$1 = state_34372;
if(cljs.core.truth_(inst_34335)){
var statearr_34376_35685 = state_34372__$1;
(statearr_34376_35685[(1)] = (6));

} else {
var statearr_34377_35686 = state_34372__$1;
(statearr_34377_35686[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (15))){
var inst_34358 = (state_34372[(9)]);
var inst_34363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34358);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34372__$1,(17),out,inst_34363);
} else {
if((state_val_34373 === (13))){
var inst_34358 = (state_34372[(9)]);
var inst_34358__$1 = (state_34372[(2)]);
var inst_34359 = cljs.core.some(cljs.core.nil_QMARK_,inst_34358__$1);
var state_34372__$1 = (function (){var statearr_34378 = state_34372;
(statearr_34378[(9)] = inst_34358__$1);

return statearr_34378;
})();
if(cljs.core.truth_(inst_34359)){
var statearr_34379_35693 = state_34372__$1;
(statearr_34379_35693[(1)] = (14));

} else {
var statearr_34380_35694 = state_34372__$1;
(statearr_34380_35694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (6))){
var state_34372__$1 = state_34372;
var statearr_34381_35695 = state_34372__$1;
(statearr_34381_35695[(2)] = null);

(statearr_34381_35695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (17))){
var inst_34365 = (state_34372[(2)]);
var state_34372__$1 = (function (){var statearr_34385 = state_34372;
(statearr_34385[(10)] = inst_34365);

return statearr_34385;
})();
var statearr_34386_35696 = state_34372__$1;
(statearr_34386_35696[(2)] = null);

(statearr_34386_35696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (3))){
var inst_34370 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34372__$1,inst_34370);
} else {
if((state_val_34373 === (12))){
var _ = (function (){var statearr_34387 = state_34372;
(statearr_34387[(4)] = cljs.core.rest((state_34372[(4)])));

return statearr_34387;
})();
var state_34372__$1 = state_34372;
var ex34384 = (state_34372__$1[(2)]);
var statearr_34388_35697 = state_34372__$1;
(statearr_34388_35697[(5)] = ex34384);


if((ex34384 instanceof Object)){
var statearr_34389_35698 = state_34372__$1;
(statearr_34389_35698[(1)] = (11));

(statearr_34389_35698[(5)] = null);

} else {
throw ex34384;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (2))){
var inst_34331 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34332 = cnt;
var inst_34333 = (0);
var state_34372__$1 = (function (){var statearr_34392 = state_34372;
(statearr_34392[(7)] = inst_34332);

(statearr_34392[(8)] = inst_34333);

(statearr_34392[(11)] = inst_34331);

return statearr_34392;
})();
var statearr_34393_35699 = state_34372__$1;
(statearr_34393_35699[(2)] = null);

(statearr_34393_35699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (11))){
var inst_34337 = (state_34372[(2)]);
var inst_34338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34372__$1 = (function (){var statearr_34394 = state_34372;
(statearr_34394[(12)] = inst_34337);

return statearr_34394;
})();
var statearr_34395_35700 = state_34372__$1;
(statearr_34395_35700[(2)] = inst_34338);

(statearr_34395_35700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (9))){
var inst_34333 = (state_34372[(8)]);
var _ = (function (){var statearr_34396 = state_34372;
(statearr_34396[(4)] = cljs.core.cons((12),(state_34372[(4)])));

return statearr_34396;
})();
var inst_34344 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34333) : chs__$1.call(null,inst_34333));
var inst_34345 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34333) : done.call(null,inst_34333));
var inst_34346 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34344,inst_34345);
var ___$1 = (function (){var statearr_34397 = state_34372;
(statearr_34397[(4)] = cljs.core.rest((state_34372[(4)])));

return statearr_34397;
})();
var state_34372__$1 = state_34372;
var statearr_34398_35701 = state_34372__$1;
(statearr_34398_35701[(2)] = inst_34346);

(statearr_34398_35701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (5))){
var inst_34356 = (state_34372[(2)]);
var state_34372__$1 = (function (){var statearr_34399 = state_34372;
(statearr_34399[(13)] = inst_34356);

return statearr_34399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34372__$1,(13),dchan);
} else {
if((state_val_34373 === (14))){
var inst_34361 = cljs.core.async.close_BANG_(out);
var state_34372__$1 = state_34372;
var statearr_34401_35702 = state_34372__$1;
(statearr_34401_35702[(2)] = inst_34361);

(statearr_34401_35702[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (16))){
var inst_34368 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34403_35703 = state_34372__$1;
(statearr_34403_35703[(2)] = inst_34368);

(statearr_34403_35703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (10))){
var inst_34333 = (state_34372[(8)]);
var inst_34349 = (state_34372[(2)]);
var inst_34350 = (inst_34333 + (1));
var inst_34333__$1 = inst_34350;
var state_34372__$1 = (function (){var statearr_34404 = state_34372;
(statearr_34404[(14)] = inst_34349);

(statearr_34404[(8)] = inst_34333__$1);

return statearr_34404;
})();
var statearr_34405_35704 = state_34372__$1;
(statearr_34405_35704[(2)] = null);

(statearr_34405_35704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (8))){
var inst_34354 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34406_35705 = state_34372__$1;
(statearr_34406_35705[(2)] = inst_34354);

(statearr_34406_35705[(1)] = (5));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34407[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34407[(1)] = (1));

return statearr_34407;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34372){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34372);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34408){var ex__32489__auto__ = e34408;
var statearr_34409_35706 = state_34372;
(statearr_34409_35706[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34372[(4)]))){
var statearr_34410_35707 = state_34372;
(statearr_34410_35707[(1)] = cljs.core.first((state_34372[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35714 = state_34372;
state_34372 = G__35714;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34411 = f__32788__auto__();
(statearr_34411[(6)] = c__32787__auto___35682);

return statearr_34411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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
var G__34414 = arguments.length;
switch (G__34414) {
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
var c__32787__auto___35716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (7))){
var inst_34426 = (state_34446[(7)]);
var inst_34425 = (state_34446[(8)]);
var inst_34425__$1 = (state_34446[(2)]);
var inst_34426__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34425__$1,(0),null);
var inst_34427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34425__$1,(1),null);
var inst_34428 = (inst_34426__$1 == null);
var state_34446__$1 = (function (){var statearr_34448 = state_34446;
(statearr_34448[(9)] = inst_34427);

(statearr_34448[(7)] = inst_34426__$1);

(statearr_34448[(8)] = inst_34425__$1);

return statearr_34448;
})();
if(cljs.core.truth_(inst_34428)){
var statearr_34451_35718 = state_34446__$1;
(statearr_34451_35718[(1)] = (8));

} else {
var statearr_34452_35719 = state_34446__$1;
(statearr_34452_35719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (1))){
var inst_34415 = cljs.core.vec(chs);
var inst_34416 = inst_34415;
var state_34446__$1 = (function (){var statearr_34453 = state_34446;
(statearr_34453[(10)] = inst_34416);

return statearr_34453;
})();
var statearr_34454_35720 = state_34446__$1;
(statearr_34454_35720[(2)] = null);

(statearr_34454_35720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (4))){
var inst_34416 = (state_34446[(10)]);
var state_34446__$1 = state_34446;
return cljs.core.async.ioc_alts_BANG_(state_34446__$1,(7),inst_34416);
} else {
if((state_val_34447 === (6))){
var inst_34442 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34459_35722 = state_34446__$1;
(statearr_34459_35722[(2)] = inst_34442);

(statearr_34459_35722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (3))){
var inst_34444 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34444);
} else {
if((state_val_34447 === (2))){
var inst_34416 = (state_34446[(10)]);
var inst_34418 = cljs.core.count(inst_34416);
var inst_34419 = (inst_34418 > (0));
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34419)){
var statearr_34461_35724 = state_34446__$1;
(statearr_34461_35724[(1)] = (4));

} else {
var statearr_34462_35725 = state_34446__$1;
(statearr_34462_35725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (11))){
var inst_34416 = (state_34446[(10)]);
var inst_34435 = (state_34446[(2)]);
var tmp34460 = inst_34416;
var inst_34416__$1 = tmp34460;
var state_34446__$1 = (function (){var statearr_34464 = state_34446;
(statearr_34464[(11)] = inst_34435);

(statearr_34464[(10)] = inst_34416__$1);

return statearr_34464;
})();
var statearr_34466_35726 = state_34446__$1;
(statearr_34466_35726[(2)] = null);

(statearr_34466_35726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (9))){
var inst_34426 = (state_34446[(7)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(11),out,inst_34426);
} else {
if((state_val_34447 === (5))){
var inst_34440 = cljs.core.async.close_BANG_(out);
var state_34446__$1 = state_34446;
var statearr_34470_35730 = state_34446__$1;
(statearr_34470_35730[(2)] = inst_34440);

(statearr_34470_35730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (10))){
var inst_34438 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34474_35731 = state_34446__$1;
(statearr_34474_35731[(2)] = inst_34438);

(statearr_34474_35731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (8))){
var inst_34427 = (state_34446[(9)]);
var inst_34426 = (state_34446[(7)]);
var inst_34425 = (state_34446[(8)]);
var inst_34416 = (state_34446[(10)]);
var inst_34430 = (function (){var cs = inst_34416;
var vec__34421 = inst_34425;
var v = inst_34426;
var c = inst_34427;
return (function (p1__34412_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34412_SHARP_);
});
})();
var inst_34431 = cljs.core.filterv(inst_34430,inst_34416);
var inst_34416__$1 = inst_34431;
var state_34446__$1 = (function (){var statearr_34475 = state_34446;
(statearr_34475[(10)] = inst_34416__$1);

return statearr_34475;
})();
var statearr_34476_35733 = state_34446__$1;
(statearr_34476_35733[(2)] = null);

(statearr_34476_35733[(1)] = (2));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34477[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34477[(1)] = (1));

return statearr_34477;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34446){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34491){var ex__32489__auto__ = e34491;
var statearr_34492_35738 = state_34446;
(statearr_34492_35738[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34446[(4)]))){
var statearr_34493_35740 = state_34446;
(statearr_34493_35740[(1)] = cljs.core.first((state_34446[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35741 = state_34446;
state_34446 = G__35741;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34500 = f__32788__auto__();
(statearr_34500[(6)] = c__32787__auto___35716);

return statearr_34500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
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
var G__34512 = arguments.length;
switch (G__34512) {
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
var c__32787__auto___35744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (7))){
var inst_34521 = (state_34543[(7)]);
var inst_34521__$1 = (state_34543[(2)]);
var inst_34522 = (inst_34521__$1 == null);
var inst_34523 = cljs.core.not(inst_34522);
var state_34543__$1 = (function (){var statearr_34545 = state_34543;
(statearr_34545[(7)] = inst_34521__$1);

return statearr_34545;
})();
if(inst_34523){
var statearr_34546_35745 = state_34543__$1;
(statearr_34546_35745[(1)] = (8));

} else {
var statearr_34547_35747 = state_34543__$1;
(statearr_34547_35747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (1))){
var inst_34516 = (0);
var state_34543__$1 = (function (){var statearr_34548 = state_34543;
(statearr_34548[(8)] = inst_34516);

return statearr_34548;
})();
var statearr_34549_35748 = state_34543__$1;
(statearr_34549_35748[(2)] = null);

(statearr_34549_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (4))){
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34543__$1,(7),ch);
} else {
if((state_val_34544 === (6))){
var inst_34538 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34554_35749 = state_34543__$1;
(statearr_34554_35749[(2)] = inst_34538);

(statearr_34554_35749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (3))){
var inst_34540 = (state_34543[(2)]);
var inst_34541 = cljs.core.async.close_BANG_(out);
var state_34543__$1 = (function (){var statearr_34557 = state_34543;
(statearr_34557[(9)] = inst_34540);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34543__$1,inst_34541);
} else {
if((state_val_34544 === (2))){
var inst_34516 = (state_34543[(8)]);
var inst_34518 = (inst_34516 < n);
var state_34543__$1 = state_34543;
if(cljs.core.truth_(inst_34518)){
var statearr_34559_35754 = state_34543__$1;
(statearr_34559_35754[(1)] = (4));

} else {
var statearr_34560_35755 = state_34543__$1;
(statearr_34560_35755[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (11))){
var inst_34516 = (state_34543[(8)]);
var inst_34526 = (state_34543[(2)]);
var inst_34528 = (inst_34516 + (1));
var inst_34516__$1 = inst_34528;
var state_34543__$1 = (function (){var statearr_34562 = state_34543;
(statearr_34562[(10)] = inst_34526);

(statearr_34562[(8)] = inst_34516__$1);

return statearr_34562;
})();
var statearr_34563_35756 = state_34543__$1;
(statearr_34563_35756[(2)] = null);

(statearr_34563_35756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (9))){
var state_34543__$1 = state_34543;
var statearr_34564_35757 = state_34543__$1;
(statearr_34564_35757[(2)] = null);

(statearr_34564_35757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (5))){
var state_34543__$1 = state_34543;
var statearr_34565_35762 = state_34543__$1;
(statearr_34565_35762[(2)] = null);

(statearr_34565_35762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (10))){
var inst_34532 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34566_35763 = state_34543__$1;
(statearr_34566_35763[(2)] = inst_34532);

(statearr_34566_35763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (8))){
var inst_34521 = (state_34543[(7)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(11),out,inst_34521);
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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34543){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34543);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34570){var ex__32489__auto__ = e34570;
var statearr_34571_35768 = state_34543;
(statearr_34571_35768[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34543[(4)]))){
var statearr_34572_35771 = state_34543;
(statearr_34572_35771[(1)] = cljs.core.first((state_34543[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35772 = state_34543;
state_34543 = G__35772;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34574 = f__32788__auto__();
(statearr_34574[(6)] = c__32787__auto___35744);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34580 = (function (f,ch,meta34581){
this.f = f;
this.ch = ch;
this.meta34581 = meta34581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34582,meta34581__$1){
var self__ = this;
var _34582__$1 = this;
return (new cljs.core.async.t_cljs$core$async34580(self__.f,self__.ch,meta34581__$1));
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34582){
var self__ = this;
var _34582__$1 = this;
return self__.meta34581;
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34583 = (function (f,ch,meta34581,_,fn1,meta34584){
this.f = f;
this.ch = ch;
this.meta34581 = meta34581;
this._ = _;
this.fn1 = fn1;
this.meta34584 = meta34584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34585,meta34584__$1){
var self__ = this;
var _34585__$1 = this;
return (new cljs.core.async.t_cljs$core$async34583(self__.f,self__.ch,self__.meta34581,self__._,self__.fn1,meta34584__$1));
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34585){
var self__ = this;
var _34585__$1 = this;
return self__.meta34584;
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34579_SHARP_){
var G__34593 = (((p1__34579_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34579_SHARP_) : self__.f.call(null,p1__34579_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34593) : f1.call(null,G__34593));
});
}));

(cljs.core.async.t_cljs$core$async34583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34581","meta34581",-1088618197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34580","cljs.core.async/t_cljs$core$async34580",-1337314049,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34584","meta34584",-323203567,null)], null);
}));

(cljs.core.async.t_cljs$core$async34583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34583");

(cljs.core.async.t_cljs$core$async34583.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34583.
 */
cljs.core.async.__GT_t_cljs$core$async34583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34583(f__$1,ch__$1,meta34581__$1,___$2,fn1__$1,meta34584){
return (new cljs.core.async.t_cljs$core$async34583(f__$1,ch__$1,meta34581__$1,___$2,fn1__$1,meta34584));
});

}

return (new cljs.core.async.t_cljs$core$async34583(self__.f,self__.ch,self__.meta34581,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34599 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34599) : self__.f.call(null,G__34599));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34581","meta34581",-1088618197,null)], null);
}));

(cljs.core.async.t_cljs$core$async34580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34580");

(cljs.core.async.t_cljs$core$async34580.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34580.
 */
cljs.core.async.__GT_t_cljs$core$async34580 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34580(f__$1,ch__$1,meta34581){
return (new cljs.core.async.t_cljs$core$async34580(f__$1,ch__$1,meta34581));
});

}

return (new cljs.core.async.t_cljs$core$async34580(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34600 = (function (f,ch,meta34601){
this.f = f;
this.ch = ch;
this.meta34601 = meta34601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34602,meta34601__$1){
var self__ = this;
var _34602__$1 = this;
return (new cljs.core.async.t_cljs$core$async34600(self__.f,self__.ch,meta34601__$1));
}));

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34602){
var self__ = this;
var _34602__$1 = this;
return self__.meta34601;
}));

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34601","meta34601",770987807,null)], null);
}));

(cljs.core.async.t_cljs$core$async34600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34600");

(cljs.core.async.t_cljs$core$async34600.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34600.
 */
cljs.core.async.__GT_t_cljs$core$async34600 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34600(f__$1,ch__$1,meta34601){
return (new cljs.core.async.t_cljs$core$async34600(f__$1,ch__$1,meta34601));
});

}

return (new cljs.core.async.t_cljs$core$async34600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34611 = (function (p,ch,meta34612){
this.p = p;
this.ch = ch;
this.meta34612 = meta34612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34613,meta34612__$1){
var self__ = this;
var _34613__$1 = this;
return (new cljs.core.async.t_cljs$core$async34611(self__.p,self__.ch,meta34612__$1));
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34613){
var self__ = this;
var _34613__$1 = this;
return self__.meta34612;
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34612","meta34612",344652967,null)], null);
}));

(cljs.core.async.t_cljs$core$async34611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34611");

(cljs.core.async.t_cljs$core$async34611.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34611.
 */
cljs.core.async.__GT_t_cljs$core$async34611 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34611(p__$1,ch__$1,meta34612){
return (new cljs.core.async.t_cljs$core$async34611(p__$1,ch__$1,meta34612));
});

}

return (new cljs.core.async.t_cljs$core$async34611(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34620 = arguments.length;
switch (G__34620) {
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
var c__32787__auto___35797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34641){
var state_val_34642 = (state_34641[(1)]);
if((state_val_34642 === (7))){
var inst_34637 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34643_35798 = state_34641__$1;
(statearr_34643_35798[(2)] = inst_34637);

(statearr_34643_35798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (1))){
var state_34641__$1 = state_34641;
var statearr_34644_35800 = state_34641__$1;
(statearr_34644_35800[(2)] = null);

(statearr_34644_35800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (4))){
var inst_34623 = (state_34641[(7)]);
var inst_34623__$1 = (state_34641[(2)]);
var inst_34624 = (inst_34623__$1 == null);
var state_34641__$1 = (function (){var statearr_34645 = state_34641;
(statearr_34645[(7)] = inst_34623__$1);

return statearr_34645;
})();
if(cljs.core.truth_(inst_34624)){
var statearr_34646_35802 = state_34641__$1;
(statearr_34646_35802[(1)] = (5));

} else {
var statearr_34647_35803 = state_34641__$1;
(statearr_34647_35803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (6))){
var inst_34623 = (state_34641[(7)]);
var inst_34628 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34623) : p.call(null,inst_34623));
var state_34641__$1 = state_34641;
if(cljs.core.truth_(inst_34628)){
var statearr_34648_35804 = state_34641__$1;
(statearr_34648_35804[(1)] = (8));

} else {
var statearr_34649_35805 = state_34641__$1;
(statearr_34649_35805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (3))){
var inst_34639 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34641__$1,inst_34639);
} else {
if((state_val_34642 === (2))){
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34641__$1,(4),ch);
} else {
if((state_val_34642 === (11))){
var inst_34631 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34650_35810 = state_34641__$1;
(statearr_34650_35810[(2)] = inst_34631);

(statearr_34650_35810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (9))){
var state_34641__$1 = state_34641;
var statearr_34651_35815 = state_34641__$1;
(statearr_34651_35815[(2)] = null);

(statearr_34651_35815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (5))){
var inst_34626 = cljs.core.async.close_BANG_(out);
var state_34641__$1 = state_34641;
var statearr_34653_35825 = state_34641__$1;
(statearr_34653_35825[(2)] = inst_34626);

(statearr_34653_35825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (10))){
var inst_34634 = (state_34641[(2)]);
var state_34641__$1 = (function (){var statearr_34654 = state_34641;
(statearr_34654[(8)] = inst_34634);

return statearr_34654;
})();
var statearr_34655_35826 = state_34641__$1;
(statearr_34655_35826[(2)] = null);

(statearr_34655_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (8))){
var inst_34623 = (state_34641[(7)]);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34641__$1,(11),out,inst_34623);
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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34656 = [null,null,null,null,null,null,null,null,null];
(statearr_34656[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34656[(1)] = (1));

return statearr_34656;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34641){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34641);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34657){var ex__32489__auto__ = e34657;
var statearr_34658_35827 = state_34641;
(statearr_34658_35827[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34641[(4)]))){
var statearr_34662_35828 = state_34641;
(statearr_34662_35828[(1)] = cljs.core.first((state_34641[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35833 = state_34641;
state_34641 = G__35833;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34663 = f__32788__auto__();
(statearr_34663[(6)] = c__32787__auto___35797);

return statearr_34663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34665 = arguments.length;
switch (G__34665) {
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
var c__32787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34731){
var state_val_34732 = (state_34731[(1)]);
if((state_val_34732 === (7))){
var inst_34727 = (state_34731[(2)]);
var state_34731__$1 = state_34731;
var statearr_34753_35838 = state_34731__$1;
(statearr_34753_35838[(2)] = inst_34727);

(statearr_34753_35838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (20))){
var inst_34697 = (state_34731[(7)]);
var inst_34708 = (state_34731[(2)]);
var inst_34709 = cljs.core.next(inst_34697);
var inst_34683 = inst_34709;
var inst_34684 = null;
var inst_34685 = (0);
var inst_34686 = (0);
var state_34731__$1 = (function (){var statearr_34754 = state_34731;
(statearr_34754[(8)] = inst_34684);

(statearr_34754[(9)] = inst_34683);

(statearr_34754[(10)] = inst_34685);

(statearr_34754[(11)] = inst_34708);

(statearr_34754[(12)] = inst_34686);

return statearr_34754;
})();
var statearr_34755_35850 = state_34731__$1;
(statearr_34755_35850[(2)] = null);

(statearr_34755_35850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (1))){
var state_34731__$1 = state_34731;
var statearr_34770_35854 = state_34731__$1;
(statearr_34770_35854[(2)] = null);

(statearr_34770_35854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (4))){
var inst_34672 = (state_34731[(13)]);
var inst_34672__$1 = (state_34731[(2)]);
var inst_34673 = (inst_34672__$1 == null);
var state_34731__$1 = (function (){var statearr_34777 = state_34731;
(statearr_34777[(13)] = inst_34672__$1);

return statearr_34777;
})();
if(cljs.core.truth_(inst_34673)){
var statearr_34778_35855 = state_34731__$1;
(statearr_34778_35855[(1)] = (5));

} else {
var statearr_34779_35856 = state_34731__$1;
(statearr_34779_35856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (15))){
var state_34731__$1 = state_34731;
var statearr_34783_35857 = state_34731__$1;
(statearr_34783_35857[(2)] = null);

(statearr_34783_35857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (21))){
var state_34731__$1 = state_34731;
var statearr_34786_35862 = state_34731__$1;
(statearr_34786_35862[(2)] = null);

(statearr_34786_35862[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (13))){
var inst_34684 = (state_34731[(8)]);
var inst_34683 = (state_34731[(9)]);
var inst_34685 = (state_34731[(10)]);
var inst_34686 = (state_34731[(12)]);
var inst_34693 = (state_34731[(2)]);
var inst_34694 = (inst_34686 + (1));
var tmp34780 = inst_34684;
var tmp34781 = inst_34683;
var tmp34782 = inst_34685;
var inst_34683__$1 = tmp34781;
var inst_34684__$1 = tmp34780;
var inst_34685__$1 = tmp34782;
var inst_34686__$1 = inst_34694;
var state_34731__$1 = (function (){var statearr_34788 = state_34731;
(statearr_34788[(8)] = inst_34684__$1);

(statearr_34788[(9)] = inst_34683__$1);

(statearr_34788[(14)] = inst_34693);

(statearr_34788[(10)] = inst_34685__$1);

(statearr_34788[(12)] = inst_34686__$1);

return statearr_34788;
})();
var statearr_34789_35875 = state_34731__$1;
(statearr_34789_35875[(2)] = null);

(statearr_34789_35875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (22))){
var state_34731__$1 = state_34731;
var statearr_34790_35885 = state_34731__$1;
(statearr_34790_35885[(2)] = null);

(statearr_34790_35885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (6))){
var inst_34672 = (state_34731[(13)]);
var inst_34681 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34672) : f.call(null,inst_34672));
var inst_34682 = cljs.core.seq(inst_34681);
var inst_34683 = inst_34682;
var inst_34684 = null;
var inst_34685 = (0);
var inst_34686 = (0);
var state_34731__$1 = (function (){var statearr_34794 = state_34731;
(statearr_34794[(8)] = inst_34684);

(statearr_34794[(9)] = inst_34683);

(statearr_34794[(10)] = inst_34685);

(statearr_34794[(12)] = inst_34686);

return statearr_34794;
})();
var statearr_34795_35886 = state_34731__$1;
(statearr_34795_35886[(2)] = null);

(statearr_34795_35886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (17))){
var inst_34697 = (state_34731[(7)]);
var inst_34701 = cljs.core.chunk_first(inst_34697);
var inst_34702 = cljs.core.chunk_rest(inst_34697);
var inst_34703 = cljs.core.count(inst_34701);
var inst_34683 = inst_34702;
var inst_34684 = inst_34701;
var inst_34685 = inst_34703;
var inst_34686 = (0);
var state_34731__$1 = (function (){var statearr_34796 = state_34731;
(statearr_34796[(8)] = inst_34684);

(statearr_34796[(9)] = inst_34683);

(statearr_34796[(10)] = inst_34685);

(statearr_34796[(12)] = inst_34686);

return statearr_34796;
})();
var statearr_34797_35887 = state_34731__$1;
(statearr_34797_35887[(2)] = null);

(statearr_34797_35887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (3))){
var inst_34729 = (state_34731[(2)]);
var state_34731__$1 = state_34731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34731__$1,inst_34729);
} else {
if((state_val_34732 === (12))){
var inst_34717 = (state_34731[(2)]);
var state_34731__$1 = state_34731;
var statearr_34798_35892 = state_34731__$1;
(statearr_34798_35892[(2)] = inst_34717);

(statearr_34798_35892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (2))){
var state_34731__$1 = state_34731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34731__$1,(4),in$);
} else {
if((state_val_34732 === (23))){
var inst_34725 = (state_34731[(2)]);
var state_34731__$1 = state_34731;
var statearr_34799_35902 = state_34731__$1;
(statearr_34799_35902[(2)] = inst_34725);

(statearr_34799_35902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (19))){
var inst_34712 = (state_34731[(2)]);
var state_34731__$1 = state_34731;
var statearr_34800_35903 = state_34731__$1;
(statearr_34800_35903[(2)] = inst_34712);

(statearr_34800_35903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (11))){
var inst_34683 = (state_34731[(9)]);
var inst_34697 = (state_34731[(7)]);
var inst_34697__$1 = cljs.core.seq(inst_34683);
var state_34731__$1 = (function (){var statearr_34801 = state_34731;
(statearr_34801[(7)] = inst_34697__$1);

return statearr_34801;
})();
if(inst_34697__$1){
var statearr_34802_35904 = state_34731__$1;
(statearr_34802_35904[(1)] = (14));

} else {
var statearr_34803_35905 = state_34731__$1;
(statearr_34803_35905[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (9))){
var inst_34719 = (state_34731[(2)]);
var inst_34720 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34731__$1 = (function (){var statearr_34804 = state_34731;
(statearr_34804[(15)] = inst_34719);

return statearr_34804;
})();
if(cljs.core.truth_(inst_34720)){
var statearr_34805_35914 = state_34731__$1;
(statearr_34805_35914[(1)] = (21));

} else {
var statearr_34806_35917 = state_34731__$1;
(statearr_34806_35917[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (5))){
var inst_34675 = cljs.core.async.close_BANG_(out);
var state_34731__$1 = state_34731;
var statearr_34807_35923 = state_34731__$1;
(statearr_34807_35923[(2)] = inst_34675);

(statearr_34807_35923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (14))){
var inst_34697 = (state_34731[(7)]);
var inst_34699 = cljs.core.chunked_seq_QMARK_(inst_34697);
var state_34731__$1 = state_34731;
if(inst_34699){
var statearr_34808_35927 = state_34731__$1;
(statearr_34808_35927[(1)] = (17));

} else {
var statearr_34809_35928 = state_34731__$1;
(statearr_34809_35928[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (16))){
var inst_34715 = (state_34731[(2)]);
var state_34731__$1 = state_34731;
var statearr_34810_35929 = state_34731__$1;
(statearr_34810_35929[(2)] = inst_34715);

(statearr_34810_35929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34732 === (10))){
var inst_34684 = (state_34731[(8)]);
var inst_34686 = (state_34731[(12)]);
var inst_34691 = cljs.core._nth(inst_34684,inst_34686);
var state_34731__$1 = state_34731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34731__$1,(13),out,inst_34691);
} else {
if((state_val_34732 === (18))){
var inst_34697 = (state_34731[(7)]);
var inst_34706 = cljs.core.first(inst_34697);
var state_34731__$1 = state_34731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34731__$1,(20),out,inst_34706);
} else {
if((state_val_34732 === (8))){
var inst_34685 = (state_34731[(10)]);
var inst_34686 = (state_34731[(12)]);
var inst_34688 = (inst_34686 < inst_34685);
var inst_34689 = inst_34688;
var state_34731__$1 = state_34731;
if(cljs.core.truth_(inst_34689)){
var statearr_34811_35939 = state_34731__$1;
(statearr_34811_35939[(1)] = (10));

} else {
var statearr_34812_35940 = state_34731__$1;
(statearr_34812_35940[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32486__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32486__auto____0 = (function (){
var statearr_34813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32486__auto__);

(statearr_34813[(1)] = (1));

return statearr_34813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32486__auto____1 = (function (state_34731){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34731);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34814){var ex__32489__auto__ = e34814;
var statearr_34817_35946 = state_34731;
(statearr_34817_35946[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34731[(4)]))){
var statearr_34824_35948 = state_34731;
(statearr_34824_35948[(1)] = cljs.core.first((state_34731[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35949 = state_34731;
state_34731 = G__35949;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32486__auto__ = function(state_34731){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32486__auto____1.call(this,state_34731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32486__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32486__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34828 = f__32788__auto__();
(statearr_34828[(6)] = c__32787__auto__);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));

return c__32787__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
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
var G__34832 = arguments.length;
switch (G__34832) {
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
var G__34835 = arguments.length;
switch (G__34835) {
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
var c__32787__auto___35967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34864){
var state_val_34865 = (state_34864[(1)]);
if((state_val_34865 === (7))){
var inst_34859 = (state_34864[(2)]);
var state_34864__$1 = state_34864;
var statearr_34868_35968 = state_34864__$1;
(statearr_34868_35968[(2)] = inst_34859);

(statearr_34868_35968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (1))){
var inst_34841 = null;
var state_34864__$1 = (function (){var statearr_34869 = state_34864;
(statearr_34869[(7)] = inst_34841);

return statearr_34869;
})();
var statearr_34870_35970 = state_34864__$1;
(statearr_34870_35970[(2)] = null);

(statearr_34870_35970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (4))){
var inst_34844 = (state_34864[(8)]);
var inst_34844__$1 = (state_34864[(2)]);
var inst_34845 = (inst_34844__$1 == null);
var inst_34846 = cljs.core.not(inst_34845);
var state_34864__$1 = (function (){var statearr_34871 = state_34864;
(statearr_34871[(8)] = inst_34844__$1);

return statearr_34871;
})();
if(inst_34846){
var statearr_34872_35975 = state_34864__$1;
(statearr_34872_35975[(1)] = (5));

} else {
var statearr_34873_35976 = state_34864__$1;
(statearr_34873_35976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (6))){
var state_34864__$1 = state_34864;
var statearr_34874_35977 = state_34864__$1;
(statearr_34874_35977[(2)] = null);

(statearr_34874_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (3))){
var inst_34861 = (state_34864[(2)]);
var inst_34862 = cljs.core.async.close_BANG_(out);
var state_34864__$1 = (function (){var statearr_34875 = state_34864;
(statearr_34875[(9)] = inst_34861);

return statearr_34875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34864__$1,inst_34862);
} else {
if((state_val_34865 === (2))){
var state_34864__$1 = state_34864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34864__$1,(4),ch);
} else {
if((state_val_34865 === (11))){
var inst_34844 = (state_34864[(8)]);
var inst_34853 = (state_34864[(2)]);
var inst_34841 = inst_34844;
var state_34864__$1 = (function (){var statearr_34876 = state_34864;
(statearr_34876[(10)] = inst_34853);

(statearr_34876[(7)] = inst_34841);

return statearr_34876;
})();
var statearr_34877_35981 = state_34864__$1;
(statearr_34877_35981[(2)] = null);

(statearr_34877_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (9))){
var inst_34844 = (state_34864[(8)]);
var state_34864__$1 = state_34864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34864__$1,(11),out,inst_34844);
} else {
if((state_val_34865 === (5))){
var inst_34844 = (state_34864[(8)]);
var inst_34841 = (state_34864[(7)]);
var inst_34848 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34844,inst_34841);
var state_34864__$1 = state_34864;
if(inst_34848){
var statearr_34879_35985 = state_34864__$1;
(statearr_34879_35985[(1)] = (8));

} else {
var statearr_34880_35986 = state_34864__$1;
(statearr_34880_35986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (10))){
var inst_34856 = (state_34864[(2)]);
var state_34864__$1 = state_34864;
var statearr_34881_35987 = state_34864__$1;
(statearr_34881_35987[(2)] = inst_34856);

(statearr_34881_35987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34865 === (8))){
var inst_34841 = (state_34864[(7)]);
var tmp34878 = inst_34841;
var inst_34841__$1 = tmp34878;
var state_34864__$1 = (function (){var statearr_34882 = state_34864;
(statearr_34882[(7)] = inst_34841__$1);

return statearr_34882;
})();
var statearr_34883_35989 = state_34864__$1;
(statearr_34883_35989[(2)] = null);

(statearr_34883_35989[(1)] = (2));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34884[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34884[(1)] = (1));

return statearr_34884;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34864){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34864);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34885){var ex__32489__auto__ = e34885;
var statearr_34889_35994 = state_34864;
(statearr_34889_35994[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34864[(4)]))){
var statearr_34890_35995 = state_34864;
(statearr_34890_35995[(1)] = cljs.core.first((state_34864[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_34864;
state_34864 = G__35996;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_34891 = f__32788__auto__();
(statearr_34891[(6)] = c__32787__auto___35967);

return statearr_34891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34893 = arguments.length;
switch (G__34893) {
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
var c__32787__auto___36003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_34944){
var state_val_34945 = (state_34944[(1)]);
if((state_val_34945 === (7))){
var inst_34940 = (state_34944[(2)]);
var state_34944__$1 = state_34944;
var statearr_34953_36004 = state_34944__$1;
(statearr_34953_36004[(2)] = inst_34940);

(statearr_34953_36004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (1))){
var inst_34904 = (new Array(n));
var inst_34905 = inst_34904;
var inst_34906 = (0);
var state_34944__$1 = (function (){var statearr_34957 = state_34944;
(statearr_34957[(7)] = inst_34905);

(statearr_34957[(8)] = inst_34906);

return statearr_34957;
})();
var statearr_34958_36005 = state_34944__$1;
(statearr_34958_36005[(2)] = null);

(statearr_34958_36005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (4))){
var inst_34909 = (state_34944[(9)]);
var inst_34909__$1 = (state_34944[(2)]);
var inst_34913 = (inst_34909__$1 == null);
var inst_34914 = cljs.core.not(inst_34913);
var state_34944__$1 = (function (){var statearr_34959 = state_34944;
(statearr_34959[(9)] = inst_34909__$1);

return statearr_34959;
})();
if(inst_34914){
var statearr_34960_36007 = state_34944__$1;
(statearr_34960_36007[(1)] = (5));

} else {
var statearr_34961_36008 = state_34944__$1;
(statearr_34961_36008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (15))){
var inst_34934 = (state_34944[(2)]);
var state_34944__$1 = state_34944;
var statearr_34965_36009 = state_34944__$1;
(statearr_34965_36009[(2)] = inst_34934);

(statearr_34965_36009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (13))){
var state_34944__$1 = state_34944;
var statearr_34973_36011 = state_34944__$1;
(statearr_34973_36011[(2)] = null);

(statearr_34973_36011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (6))){
var inst_34906 = (state_34944[(8)]);
var inst_34930 = (inst_34906 > (0));
var state_34944__$1 = state_34944;
if(cljs.core.truth_(inst_34930)){
var statearr_34977_36012 = state_34944__$1;
(statearr_34977_36012[(1)] = (12));

} else {
var statearr_34978_36014 = state_34944__$1;
(statearr_34978_36014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (3))){
var inst_34942 = (state_34944[(2)]);
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34944__$1,inst_34942);
} else {
if((state_val_34945 === (12))){
var inst_34905 = (state_34944[(7)]);
var inst_34932 = cljs.core.vec(inst_34905);
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34944__$1,(15),out,inst_34932);
} else {
if((state_val_34945 === (2))){
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34944__$1,(4),ch);
} else {
if((state_val_34945 === (11))){
var inst_34924 = (state_34944[(2)]);
var inst_34925 = (new Array(n));
var inst_34905 = inst_34925;
var inst_34906 = (0);
var state_34944__$1 = (function (){var statearr_34985 = state_34944;
(statearr_34985[(7)] = inst_34905);

(statearr_34985[(10)] = inst_34924);

(statearr_34985[(8)] = inst_34906);

return statearr_34985;
})();
var statearr_34986_36018 = state_34944__$1;
(statearr_34986_36018[(2)] = null);

(statearr_34986_36018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (9))){
var inst_34905 = (state_34944[(7)]);
var inst_34922 = cljs.core.vec(inst_34905);
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34944__$1,(11),out,inst_34922);
} else {
if((state_val_34945 === (5))){
var inst_34905 = (state_34944[(7)]);
var inst_34909 = (state_34944[(9)]);
var inst_34906 = (state_34944[(8)]);
var inst_34917 = (state_34944[(11)]);
var inst_34916 = (inst_34905[inst_34906] = inst_34909);
var inst_34917__$1 = (inst_34906 + (1));
var inst_34918 = (inst_34917__$1 < n);
var state_34944__$1 = (function (){var statearr_34987 = state_34944;
(statearr_34987[(12)] = inst_34916);

(statearr_34987[(11)] = inst_34917__$1);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34918)){
var statearr_34988_36020 = state_34944__$1;
(statearr_34988_36020[(1)] = (8));

} else {
var statearr_34989_36022 = state_34944__$1;
(statearr_34989_36022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (14))){
var inst_34937 = (state_34944[(2)]);
var inst_34938 = cljs.core.async.close_BANG_(out);
var state_34944__$1 = (function (){var statearr_34991 = state_34944;
(statearr_34991[(13)] = inst_34937);

return statearr_34991;
})();
var statearr_34992_36023 = state_34944__$1;
(statearr_34992_36023[(2)] = inst_34938);

(statearr_34992_36023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (10))){
var inst_34928 = (state_34944[(2)]);
var state_34944__$1 = state_34944;
var statearr_34993_36024 = state_34944__$1;
(statearr_34993_36024[(2)] = inst_34928);

(statearr_34993_36024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (8))){
var inst_34905 = (state_34944[(7)]);
var inst_34917 = (state_34944[(11)]);
var tmp34990 = inst_34905;
var inst_34905__$1 = tmp34990;
var inst_34906 = inst_34917;
var state_34944__$1 = (function (){var statearr_34994 = state_34944;
(statearr_34994[(7)] = inst_34905__$1);

(statearr_34994[(8)] = inst_34906);

return statearr_34994;
})();
var statearr_34995_36025 = state_34944__$1;
(statearr_34995_36025[(2)] = null);

(statearr_34995_36025[(1)] = (2));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_34996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34996[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_34996[(1)] = (1));

return statearr_34996;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_34944){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_34944);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e34997){var ex__32489__auto__ = e34997;
var statearr_34998_36026 = state_34944;
(statearr_34998_36026[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_34944[(4)]))){
var statearr_34999_36028 = state_34944;
(statearr_34999_36028[(1)] = cljs.core.first((state_34944[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36030 = state_34944;
state_34944 = G__36030;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_34944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_34944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_35000 = f__32788__auto__();
(statearr_35000[(6)] = c__32787__auto___36003);

return statearr_35000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35002 = arguments.length;
switch (G__35002) {
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
var c__32787__auto___36036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_35047){
var state_val_35048 = (state_35047[(1)]);
if((state_val_35048 === (7))){
var inst_35043 = (state_35047[(2)]);
var state_35047__$1 = state_35047;
var statearr_35049_36041 = state_35047__$1;
(statearr_35049_36041[(2)] = inst_35043);

(statearr_35049_36041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (1))){
var inst_35003 = [];
var inst_35004 = inst_35003;
var inst_35005 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35047__$1 = (function (){var statearr_35050 = state_35047;
(statearr_35050[(7)] = inst_35004);

(statearr_35050[(8)] = inst_35005);

return statearr_35050;
})();
var statearr_35051_36042 = state_35047__$1;
(statearr_35051_36042[(2)] = null);

(statearr_35051_36042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (4))){
var inst_35008 = (state_35047[(9)]);
var inst_35008__$1 = (state_35047[(2)]);
var inst_35009 = (inst_35008__$1 == null);
var inst_35010 = cljs.core.not(inst_35009);
var state_35047__$1 = (function (){var statearr_35052 = state_35047;
(statearr_35052[(9)] = inst_35008__$1);

return statearr_35052;
})();
if(inst_35010){
var statearr_35053_36043 = state_35047__$1;
(statearr_35053_36043[(1)] = (5));

} else {
var statearr_35054_36044 = state_35047__$1;
(statearr_35054_36044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (15))){
var inst_35004 = (state_35047[(7)]);
var inst_35035 = cljs.core.vec(inst_35004);
var state_35047__$1 = state_35047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35047__$1,(18),out,inst_35035);
} else {
if((state_val_35048 === (13))){
var inst_35030 = (state_35047[(2)]);
var state_35047__$1 = state_35047;
var statearr_35057_36045 = state_35047__$1;
(statearr_35057_36045[(2)] = inst_35030);

(statearr_35057_36045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (6))){
var inst_35004 = (state_35047[(7)]);
var inst_35032 = inst_35004.length;
var inst_35033 = (inst_35032 > (0));
var state_35047__$1 = state_35047;
if(cljs.core.truth_(inst_35033)){
var statearr_35058_36046 = state_35047__$1;
(statearr_35058_36046[(1)] = (15));

} else {
var statearr_35059_36052 = state_35047__$1;
(statearr_35059_36052[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (17))){
var inst_35040 = (state_35047[(2)]);
var inst_35041 = cljs.core.async.close_BANG_(out);
var state_35047__$1 = (function (){var statearr_35060 = state_35047;
(statearr_35060[(10)] = inst_35040);

return statearr_35060;
})();
var statearr_35061_36053 = state_35047__$1;
(statearr_35061_36053[(2)] = inst_35041);

(statearr_35061_36053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (3))){
var inst_35045 = (state_35047[(2)]);
var state_35047__$1 = state_35047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35047__$1,inst_35045);
} else {
if((state_val_35048 === (12))){
var inst_35004 = (state_35047[(7)]);
var inst_35023 = cljs.core.vec(inst_35004);
var state_35047__$1 = state_35047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35047__$1,(14),out,inst_35023);
} else {
if((state_val_35048 === (2))){
var state_35047__$1 = state_35047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35047__$1,(4),ch);
} else {
if((state_val_35048 === (11))){
var inst_35008 = (state_35047[(9)]);
var inst_35004 = (state_35047[(7)]);
var inst_35012 = (state_35047[(11)]);
var inst_35020 = inst_35004.push(inst_35008);
var tmp35062 = inst_35004;
var inst_35004__$1 = tmp35062;
var inst_35005 = inst_35012;
var state_35047__$1 = (function (){var statearr_35074 = state_35047;
(statearr_35074[(7)] = inst_35004__$1);

(statearr_35074[(8)] = inst_35005);

(statearr_35074[(12)] = inst_35020);

return statearr_35074;
})();
var statearr_35075_36064 = state_35047__$1;
(statearr_35075_36064[(2)] = null);

(statearr_35075_36064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (9))){
var inst_35005 = (state_35047[(8)]);
var inst_35016 = cljs.core.keyword_identical_QMARK_(inst_35005,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35047__$1 = state_35047;
var statearr_35077_36069 = state_35047__$1;
(statearr_35077_36069[(2)] = inst_35016);

(statearr_35077_36069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (5))){
var inst_35008 = (state_35047[(9)]);
var inst_35013 = (state_35047[(13)]);
var inst_35005 = (state_35047[(8)]);
var inst_35012 = (state_35047[(11)]);
var inst_35012__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35008) : f.call(null,inst_35008));
var inst_35013__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35012__$1,inst_35005);
var state_35047__$1 = (function (){var statearr_35078 = state_35047;
(statearr_35078[(13)] = inst_35013__$1);

(statearr_35078[(11)] = inst_35012__$1);

return statearr_35078;
})();
if(inst_35013__$1){
var statearr_35080_36074 = state_35047__$1;
(statearr_35080_36074[(1)] = (8));

} else {
var statearr_35081_36075 = state_35047__$1;
(statearr_35081_36075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (14))){
var inst_35008 = (state_35047[(9)]);
var inst_35012 = (state_35047[(11)]);
var inst_35025 = (state_35047[(2)]);
var inst_35026 = [];
var inst_35027 = inst_35026.push(inst_35008);
var inst_35004 = inst_35026;
var inst_35005 = inst_35012;
var state_35047__$1 = (function (){var statearr_35082 = state_35047;
(statearr_35082[(7)] = inst_35004);

(statearr_35082[(14)] = inst_35027);

(statearr_35082[(8)] = inst_35005);

(statearr_35082[(15)] = inst_35025);

return statearr_35082;
})();
var statearr_35083_36076 = state_35047__$1;
(statearr_35083_36076[(2)] = null);

(statearr_35083_36076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (16))){
var state_35047__$1 = state_35047;
var statearr_35084_36081 = state_35047__$1;
(statearr_35084_36081[(2)] = null);

(statearr_35084_36081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (10))){
var inst_35018 = (state_35047[(2)]);
var state_35047__$1 = state_35047;
if(cljs.core.truth_(inst_35018)){
var statearr_35085_36082 = state_35047__$1;
(statearr_35085_36082[(1)] = (11));

} else {
var statearr_35086_36083 = state_35047__$1;
(statearr_35086_36083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (18))){
var inst_35037 = (state_35047[(2)]);
var state_35047__$1 = state_35047;
var statearr_35087_36084 = state_35047__$1;
(statearr_35087_36084[(2)] = inst_35037);

(statearr_35087_36084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35048 === (8))){
var inst_35013 = (state_35047[(13)]);
var state_35047__$1 = state_35047;
var statearr_35088_36090 = state_35047__$1;
(statearr_35088_36090[(2)] = inst_35013);

(statearr_35088_36090[(1)] = (10));


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
var cljs$core$async$state_machine__32486__auto__ = null;
var cljs$core$async$state_machine__32486__auto____0 = (function (){
var statearr_35089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35089[(0)] = cljs$core$async$state_machine__32486__auto__);

(statearr_35089[(1)] = (1));

return statearr_35089;
});
var cljs$core$async$state_machine__32486__auto____1 = (function (state_35047){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_35047);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e35090){var ex__32489__auto__ = e35090;
var statearr_35091_36095 = state_35047;
(statearr_35091_36095[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_35047[(4)]))){
var statearr_35092_36096 = state_35047;
(statearr_35092_36096[(1)] = cljs.core.first((state_35047[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36097 = state_35047;
state_35047 = G__36097;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
cljs$core$async$state_machine__32486__auto__ = function(state_35047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32486__auto____1.call(this,state_35047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32486__auto____0;
cljs$core$async$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32486__auto____1;
return cljs$core$async$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_35093 = f__32788__auto__();
(statearr_35093[(6)] = c__32787__auto___36036);

return statearr_35093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
