goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32427 = arguments.length;
switch (G__32427) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32428 = (function (f,blockable,meta32429){
this.f = f;
this.blockable = blockable;
this.meta32429 = meta32429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32430,meta32429__$1){
var self__ = this;
var _32430__$1 = this;
return (new cljs.core.async.t_cljs$core$async32428(self__.f,self__.blockable,meta32429__$1));
}));

(cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32430){
var self__ = this;
var _32430__$1 = this;
return self__.meta32429;
}));

(cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32429","meta32429",-404233766,null)], null);
}));

(cljs.core.async.t_cljs$core$async32428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32428");

(cljs.core.async.t_cljs$core$async32428.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32428.
 */
cljs.core.async.__GT_t_cljs$core$async32428 = (function cljs$core$async$__GT_t_cljs$core$async32428(f__$1,blockable__$1,meta32429){
return (new cljs.core.async.t_cljs$core$async32428(f__$1,blockable__$1,meta32429));
});

}

return (new cljs.core.async.t_cljs$core$async32428(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32433 = arguments.length;
switch (G__32433) {
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
var G__32439 = arguments.length;
switch (G__32439) {
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
var G__32441 = arguments.length;
switch (G__32441) {
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
var val_34688 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34688) : fn1.call(null,val_34688));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34688) : fn1.call(null,val_34688));
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
var G__32445 = arguments.length;
switch (G__32445) {
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
var n__4695__auto___34691 = n;
var x_34692 = (0);
while(true){
if((x_34692 < n__4695__auto___34691)){
(a[x_34692] = x_34692);

var G__34694 = (x_34692 + (1));
x_34692 = G__34694;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32448 = (function (flag,meta32449){
this.flag = flag;
this.meta32449 = meta32449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32450,meta32449__$1){
var self__ = this;
var _32450__$1 = this;
return (new cljs.core.async.t_cljs$core$async32448(self__.flag,meta32449__$1));
}));

(cljs.core.async.t_cljs$core$async32448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32450){
var self__ = this;
var _32450__$1 = this;
return self__.meta32449;
}));

(cljs.core.async.t_cljs$core$async32448.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32448.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32449","meta32449",27676320,null)], null);
}));

(cljs.core.async.t_cljs$core$async32448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32448");

(cljs.core.async.t_cljs$core$async32448.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32448.
 */
cljs.core.async.__GT_t_cljs$core$async32448 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32448(flag__$1,meta32449){
return (new cljs.core.async.t_cljs$core$async32448(flag__$1,meta32449));
});

}

return (new cljs.core.async.t_cljs$core$async32448(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32461 = (function (flag,cb,meta32462){
this.flag = flag;
this.cb = cb;
this.meta32462 = meta32462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32463,meta32462__$1){
var self__ = this;
var _32463__$1 = this;
return (new cljs.core.async.t_cljs$core$async32461(self__.flag,self__.cb,meta32462__$1));
}));

(cljs.core.async.t_cljs$core$async32461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32463){
var self__ = this;
var _32463__$1 = this;
return self__.meta32462;
}));

(cljs.core.async.t_cljs$core$async32461.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32462","meta32462",-627842635,null)], null);
}));

(cljs.core.async.t_cljs$core$async32461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32461");

(cljs.core.async.t_cljs$core$async32461.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32461.
 */
cljs.core.async.__GT_t_cljs$core$async32461 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32461(flag__$1,cb__$1,meta32462){
return (new cljs.core.async.t_cljs$core$async32461(flag__$1,cb__$1,meta32462));
});

}

return (new cljs.core.async.t_cljs$core$async32461(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32464_SHARP_){
var G__32466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32464_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32466) : fret.call(null,G__32466));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32465_SHARP_){
var G__32472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32465_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32472) : fret.call(null,G__32472));
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
var G__34710 = (i + (1));
i = G__34710;
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
var len__4818__auto___34711 = arguments.length;
var i__4819__auto___34712 = (0);
while(true){
if((i__4819__auto___34712 < len__4818__auto___34711)){
args__4824__auto__.push((arguments[i__4819__auto___34712]));

var G__34713 = (i__4819__auto___34712 + (1));
i__4819__auto___34712 = G__34713;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32476){
var map__32477 = p__32476;
var map__32477__$1 = cljs.core.__destructure_map(map__32477);
var opts = map__32477__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32474){
var G__32475 = cljs.core.first(seq32474);
var seq32474__$1 = cljs.core.next(seq32474);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32475,seq32474__$1);
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
var G__32483 = arguments.length;
switch (G__32483) {
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
var c__32333__auto___34715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_32508){
var state_val_32509 = (state_32508[(1)]);
if((state_val_32509 === (7))){
var inst_32504 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32510_34716 = state_32508__$1;
(statearr_32510_34716[(2)] = inst_32504);

(statearr_32510_34716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (1))){
var state_32508__$1 = state_32508;
var statearr_32511_34717 = state_32508__$1;
(statearr_32511_34717[(2)] = null);

(statearr_32511_34717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (4))){
var inst_32486 = (state_32508[(7)]);
var inst_32486__$1 = (state_32508[(2)]);
var inst_32487 = (inst_32486__$1 == null);
var state_32508__$1 = (function (){var statearr_32513 = state_32508;
(statearr_32513[(7)] = inst_32486__$1);

return statearr_32513;
})();
if(cljs.core.truth_(inst_32487)){
var statearr_32514_34718 = state_32508__$1;
(statearr_32514_34718[(1)] = (5));

} else {
var statearr_32515_34720 = state_32508__$1;
(statearr_32515_34720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (13))){
var state_32508__$1 = state_32508;
var statearr_32516_34721 = state_32508__$1;
(statearr_32516_34721[(2)] = null);

(statearr_32516_34721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (6))){
var inst_32486 = (state_32508[(7)]);
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32508__$1,(11),to,inst_32486);
} else {
if((state_val_32509 === (3))){
var inst_32506 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32508__$1,inst_32506);
} else {
if((state_val_32509 === (12))){
var state_32508__$1 = state_32508;
var statearr_32519_34722 = state_32508__$1;
(statearr_32519_34722[(2)] = null);

(statearr_32519_34722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (2))){
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32508__$1,(4),from);
} else {
if((state_val_32509 === (11))){
var inst_32497 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
if(cljs.core.truth_(inst_32497)){
var statearr_32520_34723 = state_32508__$1;
(statearr_32520_34723[(1)] = (12));

} else {
var statearr_32521_34724 = state_32508__$1;
(statearr_32521_34724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (9))){
var state_32508__$1 = state_32508;
var statearr_32522_34725 = state_32508__$1;
(statearr_32522_34725[(2)] = null);

(statearr_32522_34725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (5))){
var state_32508__$1 = state_32508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32523_34728 = state_32508__$1;
(statearr_32523_34728[(1)] = (8));

} else {
var statearr_32524_34729 = state_32508__$1;
(statearr_32524_34729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (14))){
var inst_32502 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32527_34730 = state_32508__$1;
(statearr_32527_34730[(2)] = inst_32502);

(statearr_32527_34730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (10))){
var inst_32494 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32532_34732 = state_32508__$1;
(statearr_32532_34732[(2)] = inst_32494);

(statearr_32532_34732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (8))){
var inst_32491 = cljs.core.async.close_BANG_(to);
var state_32508__$1 = state_32508;
var statearr_32536_34734 = state_32508__$1;
(statearr_32536_34734[(2)] = inst_32491);

(statearr_32536_34734[(1)] = (10));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_32537 = [null,null,null,null,null,null,null,null];
(statearr_32537[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_32537[(1)] = (1));

return statearr_32537;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_32508){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32508);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e32541){var ex__32152__auto__ = e32541;
var statearr_32542_34736 = state_32508;
(statearr_32542_34736[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32508[(4)]))){
var statearr_32543_34737 = state_32508;
(statearr_32543_34737[(1)] = cljs.core.first((state_32508[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34738 = state_32508;
state_32508 = G__34738;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_32508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_32508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_32547 = f__32334__auto__();
(statearr_32547[(6)] = c__32333__auto___34715);

return statearr_32547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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
var process = (function (p__32551){
var vec__32552 = p__32551;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32552,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32552,(1),null);
var job = vec__32552;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32333__auto___34739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_32560){
var state_val_32562 = (state_32560[(1)]);
if((state_val_32562 === (1))){
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32560__$1,(2),res,v);
} else {
if((state_val_32562 === (2))){
var inst_32557 = (state_32560[(2)]);
var inst_32558 = cljs.core.async.close_BANG_(res);
var state_32560__$1 = (function (){var statearr_32563 = state_32560;
(statearr_32563[(7)] = inst_32557);

return statearr_32563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32560__$1,inst_32558);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0 = (function (){
var statearr_32565 = [null,null,null,null,null,null,null,null];
(statearr_32565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__);

(statearr_32565[(1)] = (1));

return statearr_32565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1 = (function (state_32560){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32560);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e32568){var ex__32152__auto__ = e32568;
var statearr_32569_34751 = state_32560;
(statearr_32569_34751[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32560[(4)]))){
var statearr_32570_34752 = state_32560;
(statearr_32570_34752[(1)] = cljs.core.first((state_32560[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34753 = state_32560;
state_32560 = G__34753;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = function(state_32560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1.call(this,state_32560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_32574 = f__32334__auto__();
(statearr_32574[(6)] = c__32333__auto___34739);

return statearr_32574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32575){
var vec__32576 = p__32575;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32576,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32576,(1),null);
var job = vec__32576;
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
var n__4695__auto___34755 = n;
var __34756 = (0);
while(true){
if((__34756 < n__4695__auto___34755)){
var G__32581_34757 = type;
var G__32581_34758__$1 = (((G__32581_34757 instanceof cljs.core.Keyword))?G__32581_34757.fqn:null);
switch (G__32581_34758__$1) {
case "compute":
var c__32333__auto___34760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34756,c__32333__auto___34760,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async){
return (function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = ((function (__34756,c__32333__auto___34760,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async){
return (function (state_32596){
var state_val_32597 = (state_32596[(1)]);
if((state_val_32597 === (1))){
var state_32596__$1 = state_32596;
var statearr_32598_34761 = state_32596__$1;
(statearr_32598_34761[(2)] = null);

(statearr_32598_34761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (2))){
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32596__$1,(4),jobs);
} else {
if((state_val_32597 === (3))){
var inst_32593 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32596__$1,inst_32593);
} else {
if((state_val_32597 === (4))){
var inst_32584 = (state_32596[(2)]);
var inst_32585 = process(inst_32584);
var state_32596__$1 = state_32596;
if(cljs.core.truth_(inst_32585)){
var statearr_32602_34764 = state_32596__$1;
(statearr_32602_34764[(1)] = (5));

} else {
var statearr_32603_34765 = state_32596__$1;
(statearr_32603_34765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (5))){
var state_32596__$1 = state_32596;
var statearr_32605_34766 = state_32596__$1;
(statearr_32605_34766[(2)] = null);

(statearr_32605_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (6))){
var state_32596__$1 = state_32596;
var statearr_32607_34767 = state_32596__$1;
(statearr_32607_34767[(2)] = null);

(statearr_32607_34767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (7))){
var inst_32590 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32617_34768 = state_32596__$1;
(statearr_32617_34768[(2)] = inst_32590);

(statearr_32617_34768[(1)] = (3));


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
});})(__34756,c__32333__auto___34760,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async))
;
return ((function (__34756,switch__32148__auto__,c__32333__auto___34760,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0 = (function (){
var statearr_32618 = [null,null,null,null,null,null,null];
(statearr_32618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__);

(statearr_32618[(1)] = (1));

return statearr_32618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1 = (function (state_32596){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32596);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e32619){var ex__32152__auto__ = e32619;
var statearr_32620_34769 = state_32596;
(statearr_32620_34769[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32596[(4)]))){
var statearr_32621_34770 = state_32596;
(statearr_32621_34770[(1)] = cljs.core.first((state_32596[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34771 = state_32596;
state_32596 = G__34771;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = function(state_32596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1.call(this,state_32596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__;
})()
;})(__34756,switch__32148__auto__,c__32333__auto___34760,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async))
})();
var state__32335__auto__ = (function (){var statearr_32622 = f__32334__auto__();
(statearr_32622[(6)] = c__32333__auto___34760);

return statearr_32622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
});})(__34756,c__32333__auto___34760,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async))
);


break;
case "async":
var c__32333__auto___34772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34756,c__32333__auto___34772,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async){
return (function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = ((function (__34756,c__32333__auto___34772,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async){
return (function (state_32635){
var state_val_32636 = (state_32635[(1)]);
if((state_val_32636 === (1))){
var state_32635__$1 = state_32635;
var statearr_32637_34773 = state_32635__$1;
(statearr_32637_34773[(2)] = null);

(statearr_32637_34773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (2))){
var state_32635__$1 = state_32635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32635__$1,(4),jobs);
} else {
if((state_val_32636 === (3))){
var inst_32633 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32635__$1,inst_32633);
} else {
if((state_val_32636 === (4))){
var inst_32625 = (state_32635[(2)]);
var inst_32626 = async(inst_32625);
var state_32635__$1 = state_32635;
if(cljs.core.truth_(inst_32626)){
var statearr_32643_34775 = state_32635__$1;
(statearr_32643_34775[(1)] = (5));

} else {
var statearr_32644_34776 = state_32635__$1;
(statearr_32644_34776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (5))){
var state_32635__$1 = state_32635;
var statearr_32645_34778 = state_32635__$1;
(statearr_32645_34778[(2)] = null);

(statearr_32645_34778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (6))){
var state_32635__$1 = state_32635;
var statearr_32646_34779 = state_32635__$1;
(statearr_32646_34779[(2)] = null);

(statearr_32646_34779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (7))){
var inst_32631 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
var statearr_32647_34780 = state_32635__$1;
(statearr_32647_34780[(2)] = inst_32631);

(statearr_32647_34780[(1)] = (3));


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
});})(__34756,c__32333__auto___34772,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async))
;
return ((function (__34756,switch__32148__auto__,c__32333__auto___34772,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0 = (function (){
var statearr_32651 = [null,null,null,null,null,null,null];
(statearr_32651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__);

(statearr_32651[(1)] = (1));

return statearr_32651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1 = (function (state_32635){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32635);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e32652){var ex__32152__auto__ = e32652;
var statearr_32653_34783 = state_32635;
(statearr_32653_34783[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32635[(4)]))){
var statearr_32655_34784 = state_32635;
(statearr_32655_34784[(1)] = cljs.core.first((state_32635[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34785 = state_32635;
state_32635 = G__34785;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = function(state_32635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1.call(this,state_32635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__;
})()
;})(__34756,switch__32148__auto__,c__32333__auto___34772,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async))
})();
var state__32335__auto__ = (function (){var statearr_32657 = f__32334__auto__();
(statearr_32657[(6)] = c__32333__auto___34772);

return statearr_32657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
});})(__34756,c__32333__auto___34772,G__32581_34757,G__32581_34758__$1,n__4695__auto___34755,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32581_34758__$1)].join('')));

}

var G__34786 = (__34756 + (1));
__34756 = G__34786;
continue;
} else {
}
break;
}

var c__32333__auto___34787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_32681){
var state_val_32682 = (state_32681[(1)]);
if((state_val_32682 === (7))){
var inst_32675 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
var statearr_32686_34789 = state_32681__$1;
(statearr_32686_34789[(2)] = inst_32675);

(statearr_32686_34789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (1))){
var state_32681__$1 = state_32681;
var statearr_32693_34790 = state_32681__$1;
(statearr_32693_34790[(2)] = null);

(statearr_32693_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (4))){
var inst_32660 = (state_32681[(7)]);
var inst_32660__$1 = (state_32681[(2)]);
var inst_32661 = (inst_32660__$1 == null);
var state_32681__$1 = (function (){var statearr_32711 = state_32681;
(statearr_32711[(7)] = inst_32660__$1);

return statearr_32711;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32714_34792 = state_32681__$1;
(statearr_32714_34792[(1)] = (5));

} else {
var statearr_32719_34793 = state_32681__$1;
(statearr_32719_34793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (6))){
var inst_32665 = (state_32681[(8)]);
var inst_32660 = (state_32681[(7)]);
var inst_32665__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32667 = [inst_32660,inst_32665__$1];
var inst_32668 = (new cljs.core.PersistentVector(null,2,(5),inst_32666,inst_32667,null));
var state_32681__$1 = (function (){var statearr_32720 = state_32681;
(statearr_32720[(8)] = inst_32665__$1);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32681__$1,(8),jobs,inst_32668);
} else {
if((state_val_32682 === (3))){
var inst_32677 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32681__$1,inst_32677);
} else {
if((state_val_32682 === (2))){
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32681__$1,(4),from);
} else {
if((state_val_32682 === (9))){
var inst_32672 = (state_32681[(2)]);
var state_32681__$1 = (function (){var statearr_32721 = state_32681;
(statearr_32721[(9)] = inst_32672);

return statearr_32721;
})();
var statearr_32722_34794 = state_32681__$1;
(statearr_32722_34794[(2)] = null);

(statearr_32722_34794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (5))){
var inst_32663 = cljs.core.async.close_BANG_(jobs);
var state_32681__$1 = state_32681;
var statearr_32725_34795 = state_32681__$1;
(statearr_32725_34795[(2)] = inst_32663);

(statearr_32725_34795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (8))){
var inst_32665 = (state_32681[(8)]);
var inst_32670 = (state_32681[(2)]);
var state_32681__$1 = (function (){var statearr_32727 = state_32681;
(statearr_32727[(10)] = inst_32670);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32681__$1,(9),results,inst_32665);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0 = (function (){
var statearr_32729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__);

(statearr_32729[(1)] = (1));

return statearr_32729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1 = (function (state_32681){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32681);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e32732){var ex__32152__auto__ = e32732;
var statearr_32733_34805 = state_32681;
(statearr_32733_34805[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32681[(4)]))){
var statearr_32734_34806 = state_32681;
(statearr_32734_34806[(1)] = cljs.core.first((state_32681[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_32681;
state_32681 = G__34807;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = function(state_32681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1.call(this,state_32681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_32737 = f__32334__auto__();
(statearr_32737[(6)] = c__32333__auto___34787);

return statearr_32737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


var c__32333__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_32780){
var state_val_32785 = (state_32780[(1)]);
if((state_val_32785 === (7))){
var inst_32776 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32810_34809 = state_32780__$1;
(statearr_32810_34809[(2)] = inst_32776);

(statearr_32810_34809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (20))){
var state_32780__$1 = state_32780;
var statearr_32811_34810 = state_32780__$1;
(statearr_32811_34810[(2)] = null);

(statearr_32811_34810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (1))){
var state_32780__$1 = state_32780;
var statearr_32812_34811 = state_32780__$1;
(statearr_32812_34811[(2)] = null);

(statearr_32812_34811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (4))){
var inst_32744 = (state_32780[(7)]);
var inst_32744__$1 = (state_32780[(2)]);
var inst_32746 = (inst_32744__$1 == null);
var state_32780__$1 = (function (){var statearr_32814 = state_32780;
(statearr_32814[(7)] = inst_32744__$1);

return statearr_32814;
})();
if(cljs.core.truth_(inst_32746)){
var statearr_32815_34812 = state_32780__$1;
(statearr_32815_34812[(1)] = (5));

} else {
var statearr_32820_34822 = state_32780__$1;
(statearr_32820_34822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (15))){
var inst_32758 = (state_32780[(8)]);
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32780__$1,(18),to,inst_32758);
} else {
if((state_val_32785 === (21))){
var inst_32771 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32836_34823 = state_32780__$1;
(statearr_32836_34823[(2)] = inst_32771);

(statearr_32836_34823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (13))){
var inst_32773 = (state_32780[(2)]);
var state_32780__$1 = (function (){var statearr_32841 = state_32780;
(statearr_32841[(9)] = inst_32773);

return statearr_32841;
})();
var statearr_32843_34824 = state_32780__$1;
(statearr_32843_34824[(2)] = null);

(statearr_32843_34824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (6))){
var inst_32744 = (state_32780[(7)]);
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32780__$1,(11),inst_32744);
} else {
if((state_val_32785 === (17))){
var inst_32766 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
if(cljs.core.truth_(inst_32766)){
var statearr_32855_34829 = state_32780__$1;
(statearr_32855_34829[(1)] = (19));

} else {
var statearr_32857_34830 = state_32780__$1;
(statearr_32857_34830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (3))){
var inst_32778 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32780__$1,inst_32778);
} else {
if((state_val_32785 === (12))){
var inst_32755 = (state_32780[(10)]);
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32780__$1,(14),inst_32755);
} else {
if((state_val_32785 === (2))){
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32780__$1,(4),results);
} else {
if((state_val_32785 === (19))){
var state_32780__$1 = state_32780;
var statearr_32870_34832 = state_32780__$1;
(statearr_32870_34832[(2)] = null);

(statearr_32870_34832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (11))){
var inst_32755 = (state_32780[(2)]);
var state_32780__$1 = (function (){var statearr_32871 = state_32780;
(statearr_32871[(10)] = inst_32755);

return statearr_32871;
})();
var statearr_32873_34841 = state_32780__$1;
(statearr_32873_34841[(2)] = null);

(statearr_32873_34841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (9))){
var state_32780__$1 = state_32780;
var statearr_32874_34842 = state_32780__$1;
(statearr_32874_34842[(2)] = null);

(statearr_32874_34842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (5))){
var state_32780__$1 = state_32780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32875_34843 = state_32780__$1;
(statearr_32875_34843[(1)] = (8));

} else {
var statearr_32877_34844 = state_32780__$1;
(statearr_32877_34844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (14))){
var inst_32758 = (state_32780[(8)]);
var inst_32760 = (state_32780[(11)]);
var inst_32758__$1 = (state_32780[(2)]);
var inst_32759 = (inst_32758__$1 == null);
var inst_32760__$1 = cljs.core.not(inst_32759);
var state_32780__$1 = (function (){var statearr_32882 = state_32780;
(statearr_32882[(8)] = inst_32758__$1);

(statearr_32882[(11)] = inst_32760__$1);

return statearr_32882;
})();
if(inst_32760__$1){
var statearr_32883_34846 = state_32780__$1;
(statearr_32883_34846[(1)] = (15));

} else {
var statearr_32884_34847 = state_32780__$1;
(statearr_32884_34847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (16))){
var inst_32760 = (state_32780[(11)]);
var state_32780__$1 = state_32780;
var statearr_32885_34848 = state_32780__$1;
(statearr_32885_34848[(2)] = inst_32760);

(statearr_32885_34848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (10))){
var inst_32752 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32894_34849 = state_32780__$1;
(statearr_32894_34849[(2)] = inst_32752);

(statearr_32894_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (18))){
var inst_32763 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32899_34850 = state_32780__$1;
(statearr_32899_34850[(2)] = inst_32763);

(statearr_32899_34850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (8))){
var inst_32749 = cljs.core.async.close_BANG_(to);
var state_32780__$1 = state_32780;
var statearr_32909_34851 = state_32780__$1;
(statearr_32909_34851[(2)] = inst_32749);

(statearr_32909_34851[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0 = (function (){
var statearr_32910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__);

(statearr_32910[(1)] = (1));

return statearr_32910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1 = (function (state_32780){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32780);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e32915){var ex__32152__auto__ = e32915;
var statearr_32916_34854 = state_32780;
(statearr_32916_34854[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32780[(4)]))){
var statearr_32921_34855 = state_32780;
(statearr_32921_34855[(1)] = cljs.core.first((state_32780[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34859 = state_32780;
state_32780 = G__34859;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__ = function(state_32780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1.call(this,state_32780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_32926 = f__32334__auto__();
(statearr_32926[(6)] = c__32333__auto__);

return statearr_32926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

return c__32333__auto__;
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
var G__32930 = arguments.length;
switch (G__32930) {
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
var G__32933 = arguments.length;
switch (G__32933) {
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
var G__32948 = arguments.length;
switch (G__32948) {
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
var c__32333__auto___34875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_32983){
var state_val_32984 = (state_32983[(1)]);
if((state_val_32984 === (7))){
var inst_32979 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_32986_34876 = state_32983__$1;
(statearr_32986_34876[(2)] = inst_32979);

(statearr_32986_34876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (1))){
var state_32983__$1 = state_32983;
var statearr_32987_34877 = state_32983__$1;
(statearr_32987_34877[(2)] = null);

(statearr_32987_34877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (4))){
var inst_32960 = (state_32983[(7)]);
var inst_32960__$1 = (state_32983[(2)]);
var inst_32961 = (inst_32960__$1 == null);
var state_32983__$1 = (function (){var statearr_32988 = state_32983;
(statearr_32988[(7)] = inst_32960__$1);

return statearr_32988;
})();
if(cljs.core.truth_(inst_32961)){
var statearr_32989_34878 = state_32983__$1;
(statearr_32989_34878[(1)] = (5));

} else {
var statearr_32990_34879 = state_32983__$1;
(statearr_32990_34879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (13))){
var state_32983__$1 = state_32983;
var statearr_32991_34880 = state_32983__$1;
(statearr_32991_34880[(2)] = null);

(statearr_32991_34880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (6))){
var inst_32960 = (state_32983[(7)]);
var inst_32966 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32960) : p.call(null,inst_32960));
var state_32983__$1 = state_32983;
if(cljs.core.truth_(inst_32966)){
var statearr_32992_34881 = state_32983__$1;
(statearr_32992_34881[(1)] = (9));

} else {
var statearr_32993_34882 = state_32983__$1;
(statearr_32993_34882[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (3))){
var inst_32981 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32983__$1,inst_32981);
} else {
if((state_val_32984 === (12))){
var state_32983__$1 = state_32983;
var statearr_32995_34883 = state_32983__$1;
(statearr_32995_34883[(2)] = null);

(statearr_32995_34883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (2))){
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32983__$1,(4),ch);
} else {
if((state_val_32984 === (11))){
var inst_32960 = (state_32983[(7)]);
var inst_32970 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32983__$1,(8),inst_32970,inst_32960);
} else {
if((state_val_32984 === (9))){
var state_32983__$1 = state_32983;
var statearr_32996_34884 = state_32983__$1;
(statearr_32996_34884[(2)] = tc);

(statearr_32996_34884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (5))){
var inst_32963 = cljs.core.async.close_BANG_(tc);
var inst_32964 = cljs.core.async.close_BANG_(fc);
var state_32983__$1 = (function (){var statearr_32997 = state_32983;
(statearr_32997[(8)] = inst_32963);

return statearr_32997;
})();
var statearr_32998_34886 = state_32983__$1;
(statearr_32998_34886[(2)] = inst_32964);

(statearr_32998_34886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (14))){
var inst_32977 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_32999_34887 = state_32983__$1;
(statearr_32999_34887[(2)] = inst_32977);

(statearr_32999_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (10))){
var state_32983__$1 = state_32983;
var statearr_33000_34888 = state_32983__$1;
(statearr_33000_34888[(2)] = fc);

(statearr_33000_34888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (8))){
var inst_32972 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
if(cljs.core.truth_(inst_32972)){
var statearr_33001_34889 = state_32983__$1;
(statearr_33001_34889[(1)] = (12));

} else {
var statearr_33002_34890 = state_32983__$1;
(statearr_33002_34890[(1)] = (13));

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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_33004 = [null,null,null,null,null,null,null,null,null];
(statearr_33004[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_33004[(1)] = (1));

return statearr_33004;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_32983){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_32983);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33005){var ex__32152__auto__ = e33005;
var statearr_33006_34898 = state_32983;
(statearr_33006_34898[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_32983[(4)]))){
var statearr_33007_34899 = state_32983;
(statearr_33007_34899[(1)] = cljs.core.first((state_32983[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34900 = state_32983;
state_32983 = G__34900;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_32983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_32983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33009 = f__32334__auto__();
(statearr_33009[(6)] = c__32333__auto___34875);

return statearr_33009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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
var c__32333__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33031){
var state_val_33032 = (state_33031[(1)]);
if((state_val_33032 === (7))){
var inst_33027 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33034_34902 = state_33031__$1;
(statearr_33034_34902[(2)] = inst_33027);

(statearr_33034_34902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (1))){
var inst_33010 = init;
var inst_33011 = inst_33010;
var state_33031__$1 = (function (){var statearr_33035 = state_33031;
(statearr_33035[(7)] = inst_33011);

return statearr_33035;
})();
var statearr_33036_34903 = state_33031__$1;
(statearr_33036_34903[(2)] = null);

(statearr_33036_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (4))){
var inst_33014 = (state_33031[(8)]);
var inst_33014__$1 = (state_33031[(2)]);
var inst_33015 = (inst_33014__$1 == null);
var state_33031__$1 = (function (){var statearr_33037 = state_33031;
(statearr_33037[(8)] = inst_33014__$1);

return statearr_33037;
})();
if(cljs.core.truth_(inst_33015)){
var statearr_33038_34904 = state_33031__$1;
(statearr_33038_34904[(1)] = (5));

} else {
var statearr_33039_34905 = state_33031__$1;
(statearr_33039_34905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (6))){
var inst_33014 = (state_33031[(8)]);
var inst_33018 = (state_33031[(9)]);
var inst_33011 = (state_33031[(7)]);
var inst_33018__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33011,inst_33014) : f.call(null,inst_33011,inst_33014));
var inst_33019 = cljs.core.reduced_QMARK_(inst_33018__$1);
var state_33031__$1 = (function (){var statearr_33040 = state_33031;
(statearr_33040[(9)] = inst_33018__$1);

return statearr_33040;
})();
if(inst_33019){
var statearr_33041_34908 = state_33031__$1;
(statearr_33041_34908[(1)] = (8));

} else {
var statearr_33042_34910 = state_33031__$1;
(statearr_33042_34910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (3))){
var inst_33029 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33031__$1,inst_33029);
} else {
if((state_val_33032 === (2))){
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33031__$1,(4),ch);
} else {
if((state_val_33032 === (9))){
var inst_33018 = (state_33031[(9)]);
var inst_33011 = inst_33018;
var state_33031__$1 = (function (){var statearr_33044 = state_33031;
(statearr_33044[(7)] = inst_33011);

return statearr_33044;
})();
var statearr_33045_34914 = state_33031__$1;
(statearr_33045_34914[(2)] = null);

(statearr_33045_34914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (5))){
var inst_33011 = (state_33031[(7)]);
var state_33031__$1 = state_33031;
var statearr_33046_34915 = state_33031__$1;
(statearr_33046_34915[(2)] = inst_33011);

(statearr_33046_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (10))){
var inst_33025 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33047_34916 = state_33031__$1;
(statearr_33047_34916[(2)] = inst_33025);

(statearr_33047_34916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (8))){
var inst_33018 = (state_33031[(9)]);
var inst_33021 = cljs.core.deref(inst_33018);
var state_33031__$1 = state_33031;
var statearr_33048_34917 = state_33031__$1;
(statearr_33048_34917[(2)] = inst_33021);

(statearr_33048_34917[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32149__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32149__auto____0 = (function (){
var statearr_33050 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33050[(0)] = cljs$core$async$reduce_$_state_machine__32149__auto__);

(statearr_33050[(1)] = (1));

return statearr_33050;
});
var cljs$core$async$reduce_$_state_machine__32149__auto____1 = (function (state_33031){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33031);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33051){var ex__32152__auto__ = e33051;
var statearr_33052_34919 = state_33031;
(statearr_33052_34919[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33031[(4)]))){
var statearr_33053_34920 = state_33031;
(statearr_33053_34920[(1)] = cljs.core.first((state_33031[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_33031;
state_33031 = G__34921;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32149__auto__ = function(state_33031){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32149__auto____1.call(this,state_33031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32149__auto____0;
cljs$core$async$reduce_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32149__auto____1;
return cljs$core$async$reduce_$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33054 = f__32334__auto__();
(statearr_33054[(6)] = c__32333__auto__);

return statearr_33054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

return c__32333__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32333__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33061){
var state_val_33062 = (state_33061[(1)]);
if((state_val_33062 === (1))){
var inst_33056 = cljs.core.async.reduce(f__$1,init,ch);
var state_33061__$1 = state_33061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33061__$1,(2),inst_33056);
} else {
if((state_val_33062 === (2))){
var inst_33058 = (state_33061[(2)]);
var inst_33059 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33058) : f__$1.call(null,inst_33058));
var state_33061__$1 = state_33061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33061__$1,inst_33059);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32149__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32149__auto____0 = (function (){
var statearr_33064 = [null,null,null,null,null,null,null];
(statearr_33064[(0)] = cljs$core$async$transduce_$_state_machine__32149__auto__);

(statearr_33064[(1)] = (1));

return statearr_33064;
});
var cljs$core$async$transduce_$_state_machine__32149__auto____1 = (function (state_33061){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33061);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33065){var ex__32152__auto__ = e33065;
var statearr_33066_34923 = state_33061;
(statearr_33066_34923[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33061[(4)]))){
var statearr_33067_34924 = state_33061;
(statearr_33067_34924[(1)] = cljs.core.first((state_33061[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_33061;
state_33061 = G__34925;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32149__auto__ = function(state_33061){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32149__auto____1.call(this,state_33061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32149__auto____0;
cljs$core$async$transduce_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32149__auto____1;
return cljs$core$async$transduce_$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33069 = f__32334__auto__();
(statearr_33069[(6)] = c__32333__auto__);

return statearr_33069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

return c__32333__auto__;
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
var G__33071 = arguments.length;
switch (G__33071) {
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
var c__32333__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33097){
var state_val_33098 = (state_33097[(1)]);
if((state_val_33098 === (7))){
var inst_33079 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
var statearr_33100_34934 = state_33097__$1;
(statearr_33100_34934[(2)] = inst_33079);

(statearr_33100_34934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (1))){
var inst_33073 = cljs.core.seq(coll);
var inst_33074 = inst_33073;
var state_33097__$1 = (function (){var statearr_33101 = state_33097;
(statearr_33101[(7)] = inst_33074);

return statearr_33101;
})();
var statearr_33102_34935 = state_33097__$1;
(statearr_33102_34935[(2)] = null);

(statearr_33102_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (4))){
var inst_33074 = (state_33097[(7)]);
var inst_33077 = cljs.core.first(inst_33074);
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33097__$1,(7),ch,inst_33077);
} else {
if((state_val_33098 === (13))){
var inst_33091 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
var statearr_33104_34940 = state_33097__$1;
(statearr_33104_34940[(2)] = inst_33091);

(statearr_33104_34940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (6))){
var inst_33082 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
if(cljs.core.truth_(inst_33082)){
var statearr_33105_34941 = state_33097__$1;
(statearr_33105_34941[(1)] = (8));

} else {
var statearr_33106_34942 = state_33097__$1;
(statearr_33106_34942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (3))){
var inst_33095 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33097__$1,inst_33095);
} else {
if((state_val_33098 === (12))){
var state_33097__$1 = state_33097;
var statearr_33107_34946 = state_33097__$1;
(statearr_33107_34946[(2)] = null);

(statearr_33107_34946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (2))){
var inst_33074 = (state_33097[(7)]);
var state_33097__$1 = state_33097;
if(cljs.core.truth_(inst_33074)){
var statearr_33108_34947 = state_33097__$1;
(statearr_33108_34947[(1)] = (4));

} else {
var statearr_33109_34948 = state_33097__$1;
(statearr_33109_34948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (11))){
var inst_33088 = cljs.core.async.close_BANG_(ch);
var state_33097__$1 = state_33097;
var statearr_33110_34949 = state_33097__$1;
(statearr_33110_34949[(2)] = inst_33088);

(statearr_33110_34949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (9))){
var state_33097__$1 = state_33097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33112_34951 = state_33097__$1;
(statearr_33112_34951[(1)] = (11));

} else {
var statearr_33113_34952 = state_33097__$1;
(statearr_33113_34952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (5))){
var inst_33074 = (state_33097[(7)]);
var state_33097__$1 = state_33097;
var statearr_33114_34956 = state_33097__$1;
(statearr_33114_34956[(2)] = inst_33074);

(statearr_33114_34956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (10))){
var inst_33093 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
var statearr_33115_34957 = state_33097__$1;
(statearr_33115_34957[(2)] = inst_33093);

(statearr_33115_34957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (8))){
var inst_33074 = (state_33097[(7)]);
var inst_33084 = cljs.core.next(inst_33074);
var inst_33074__$1 = inst_33084;
var state_33097__$1 = (function (){var statearr_33116 = state_33097;
(statearr_33116[(7)] = inst_33074__$1);

return statearr_33116;
})();
var statearr_33117_34958 = state_33097__$1;
(statearr_33117_34958[(2)] = null);

(statearr_33117_34958[(1)] = (2));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_33118 = [null,null,null,null,null,null,null,null];
(statearr_33118[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_33118[(1)] = (1));

return statearr_33118;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_33097){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33097);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33119){var ex__32152__auto__ = e33119;
var statearr_33120_34965 = state_33097;
(statearr_33120_34965[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33097[(4)]))){
var statearr_33121_34969 = state_33097;
(statearr_33121_34969[(1)] = cljs.core.first((state_33097[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34973 = state_33097;
state_33097 = G__34973;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_33097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_33097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33123 = f__32334__auto__();
(statearr_33123[(6)] = c__32333__auto__);

return statearr_33123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

return c__32333__auto__;
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
var G__33125 = arguments.length;
switch (G__33125) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34979 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34979(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34987 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34987(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34994 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34994(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35004 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35004(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33130 = (function (ch,cs,meta33131){
this.ch = ch;
this.cs = cs;
this.meta33131 = meta33131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33132,meta33131__$1){
var self__ = this;
var _33132__$1 = this;
return (new cljs.core.async.t_cljs$core$async33130(self__.ch,self__.cs,meta33131__$1));
}));

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33132){
var self__ = this;
var _33132__$1 = this;
return self__.meta33131;
}));

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33131","meta33131",1719080776,null)], null);
}));

(cljs.core.async.t_cljs$core$async33130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33130");

(cljs.core.async.t_cljs$core$async33130.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33130.
 */
cljs.core.async.__GT_t_cljs$core$async33130 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33130(ch__$1,cs__$1,meta33131){
return (new cljs.core.async.t_cljs$core$async33130(ch__$1,cs__$1,meta33131));
});

}

return (new cljs.core.async.t_cljs$core$async33130(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32333__auto___35013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33271){
var state_val_33272 = (state_33271[(1)]);
if((state_val_33272 === (7))){
var inst_33266 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33273_35014 = state_33271__$1;
(statearr_33273_35014[(2)] = inst_33266);

(statearr_33273_35014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (20))){
var inst_33170 = (state_33271[(7)]);
var inst_33182 = cljs.core.first(inst_33170);
var inst_33183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33182,(0),null);
var inst_33184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33182,(1),null);
var state_33271__$1 = (function (){var statearr_33274 = state_33271;
(statearr_33274[(8)] = inst_33183);

return statearr_33274;
})();
if(cljs.core.truth_(inst_33184)){
var statearr_33275_35015 = state_33271__$1;
(statearr_33275_35015[(1)] = (22));

} else {
var statearr_33276_35021 = state_33271__$1;
(statearr_33276_35021[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (27))){
var inst_33215 = (state_33271[(9)]);
var inst_33213 = (state_33271[(10)]);
var inst_33138 = (state_33271[(11)]);
var inst_33220 = (state_33271[(12)]);
var inst_33220__$1 = cljs.core._nth(inst_33213,inst_33215);
var inst_33221 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33220__$1,inst_33138,done);
var state_33271__$1 = (function (){var statearr_33278 = state_33271;
(statearr_33278[(12)] = inst_33220__$1);

return statearr_33278;
})();
if(cljs.core.truth_(inst_33221)){
var statearr_33279_35022 = state_33271__$1;
(statearr_33279_35022[(1)] = (30));

} else {
var statearr_33280_35028 = state_33271__$1;
(statearr_33280_35028[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (1))){
var state_33271__$1 = state_33271;
var statearr_33281_35029 = state_33271__$1;
(statearr_33281_35029[(2)] = null);

(statearr_33281_35029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (24))){
var inst_33170 = (state_33271[(7)]);
var inst_33189 = (state_33271[(2)]);
var inst_33190 = cljs.core.next(inst_33170);
var inst_33147 = inst_33190;
var inst_33148 = null;
var inst_33149 = (0);
var inst_33150 = (0);
var state_33271__$1 = (function (){var statearr_33282 = state_33271;
(statearr_33282[(13)] = inst_33148);

(statearr_33282[(14)] = inst_33149);

(statearr_33282[(15)] = inst_33189);

(statearr_33282[(16)] = inst_33150);

(statearr_33282[(17)] = inst_33147);

return statearr_33282;
})();
var statearr_33283_35031 = state_33271__$1;
(statearr_33283_35031[(2)] = null);

(statearr_33283_35031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (39))){
var state_33271__$1 = state_33271;
var statearr_33288_35032 = state_33271__$1;
(statearr_33288_35032[(2)] = null);

(statearr_33288_35032[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (4))){
var inst_33138 = (state_33271[(11)]);
var inst_33138__$1 = (state_33271[(2)]);
var inst_33139 = (inst_33138__$1 == null);
var state_33271__$1 = (function (){var statearr_33289 = state_33271;
(statearr_33289[(11)] = inst_33138__$1);

return statearr_33289;
})();
if(cljs.core.truth_(inst_33139)){
var statearr_33290_35033 = state_33271__$1;
(statearr_33290_35033[(1)] = (5));

} else {
var statearr_33291_35034 = state_33271__$1;
(statearr_33291_35034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (15))){
var inst_33148 = (state_33271[(13)]);
var inst_33149 = (state_33271[(14)]);
var inst_33150 = (state_33271[(16)]);
var inst_33147 = (state_33271[(17)]);
var inst_33166 = (state_33271[(2)]);
var inst_33167 = (inst_33150 + (1));
var tmp33284 = inst_33148;
var tmp33285 = inst_33149;
var tmp33286 = inst_33147;
var inst_33147__$1 = tmp33286;
var inst_33148__$1 = tmp33284;
var inst_33149__$1 = tmp33285;
var inst_33150__$1 = inst_33167;
var state_33271__$1 = (function (){var statearr_33292 = state_33271;
(statearr_33292[(13)] = inst_33148__$1);

(statearr_33292[(14)] = inst_33149__$1);

(statearr_33292[(16)] = inst_33150__$1);

(statearr_33292[(18)] = inst_33166);

(statearr_33292[(17)] = inst_33147__$1);

return statearr_33292;
})();
var statearr_33293_35036 = state_33271__$1;
(statearr_33293_35036[(2)] = null);

(statearr_33293_35036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (21))){
var inst_33193 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33297_35038 = state_33271__$1;
(statearr_33297_35038[(2)] = inst_33193);

(statearr_33297_35038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (31))){
var inst_33220 = (state_33271[(12)]);
var inst_33224 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33220);
var state_33271__$1 = state_33271;
var statearr_33299_35039 = state_33271__$1;
(statearr_33299_35039[(2)] = inst_33224);

(statearr_33299_35039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (32))){
var inst_33215 = (state_33271[(9)]);
var inst_33213 = (state_33271[(10)]);
var inst_33212 = (state_33271[(19)]);
var inst_33214 = (state_33271[(20)]);
var inst_33226 = (state_33271[(2)]);
var inst_33227 = (inst_33215 + (1));
var tmp33294 = inst_33213;
var tmp33295 = inst_33212;
var tmp33296 = inst_33214;
var inst_33212__$1 = tmp33295;
var inst_33213__$1 = tmp33294;
var inst_33214__$1 = tmp33296;
var inst_33215__$1 = inst_33227;
var state_33271__$1 = (function (){var statearr_33300 = state_33271;
(statearr_33300[(9)] = inst_33215__$1);

(statearr_33300[(21)] = inst_33226);

(statearr_33300[(10)] = inst_33213__$1);

(statearr_33300[(19)] = inst_33212__$1);

(statearr_33300[(20)] = inst_33214__$1);

return statearr_33300;
})();
var statearr_33301_35045 = state_33271__$1;
(statearr_33301_35045[(2)] = null);

(statearr_33301_35045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (40))){
var inst_33239 = (state_33271[(22)]);
var inst_33243 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33239);
var state_33271__$1 = state_33271;
var statearr_33302_35046 = state_33271__$1;
(statearr_33302_35046[(2)] = inst_33243);

(statearr_33302_35046[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (33))){
var inst_33230 = (state_33271[(23)]);
var inst_33232 = cljs.core.chunked_seq_QMARK_(inst_33230);
var state_33271__$1 = state_33271;
if(inst_33232){
var statearr_33303_35047 = state_33271__$1;
(statearr_33303_35047[(1)] = (36));

} else {
var statearr_33304_35048 = state_33271__$1;
(statearr_33304_35048[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (13))){
var inst_33160 = (state_33271[(24)]);
var inst_33163 = cljs.core.async.close_BANG_(inst_33160);
var state_33271__$1 = state_33271;
var statearr_33306_35049 = state_33271__$1;
(statearr_33306_35049[(2)] = inst_33163);

(statearr_33306_35049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (22))){
var inst_33183 = (state_33271[(8)]);
var inst_33186 = cljs.core.async.close_BANG_(inst_33183);
var state_33271__$1 = state_33271;
var statearr_33307_35050 = state_33271__$1;
(statearr_33307_35050[(2)] = inst_33186);

(statearr_33307_35050[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (36))){
var inst_33230 = (state_33271[(23)]);
var inst_33234 = cljs.core.chunk_first(inst_33230);
var inst_33235 = cljs.core.chunk_rest(inst_33230);
var inst_33236 = cljs.core.count(inst_33234);
var inst_33212 = inst_33235;
var inst_33213 = inst_33234;
var inst_33214 = inst_33236;
var inst_33215 = (0);
var state_33271__$1 = (function (){var statearr_33308 = state_33271;
(statearr_33308[(9)] = inst_33215);

(statearr_33308[(10)] = inst_33213);

(statearr_33308[(19)] = inst_33212);

(statearr_33308[(20)] = inst_33214);

return statearr_33308;
})();
var statearr_33309_35051 = state_33271__$1;
(statearr_33309_35051[(2)] = null);

(statearr_33309_35051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (41))){
var inst_33230 = (state_33271[(23)]);
var inst_33245 = (state_33271[(2)]);
var inst_33246 = cljs.core.next(inst_33230);
var inst_33212 = inst_33246;
var inst_33213 = null;
var inst_33214 = (0);
var inst_33215 = (0);
var state_33271__$1 = (function (){var statearr_33310 = state_33271;
(statearr_33310[(9)] = inst_33215);

(statearr_33310[(10)] = inst_33213);

(statearr_33310[(19)] = inst_33212);

(statearr_33310[(20)] = inst_33214);

(statearr_33310[(25)] = inst_33245);

return statearr_33310;
})();
var statearr_33312_35052 = state_33271__$1;
(statearr_33312_35052[(2)] = null);

(statearr_33312_35052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (43))){
var state_33271__$1 = state_33271;
var statearr_33313_35053 = state_33271__$1;
(statearr_33313_35053[(2)] = null);

(statearr_33313_35053[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (29))){
var inst_33254 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33314_35055 = state_33271__$1;
(statearr_33314_35055[(2)] = inst_33254);

(statearr_33314_35055[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (44))){
var inst_33263 = (state_33271[(2)]);
var state_33271__$1 = (function (){var statearr_33315 = state_33271;
(statearr_33315[(26)] = inst_33263);

return statearr_33315;
})();
var statearr_33316_35059 = state_33271__$1;
(statearr_33316_35059[(2)] = null);

(statearr_33316_35059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (6))){
var inst_33204 = (state_33271[(27)]);
var inst_33203 = cljs.core.deref(cs);
var inst_33204__$1 = cljs.core.keys(inst_33203);
var inst_33205 = cljs.core.count(inst_33204__$1);
var inst_33206 = cljs.core.reset_BANG_(dctr,inst_33205);
var inst_33211 = cljs.core.seq(inst_33204__$1);
var inst_33212 = inst_33211;
var inst_33213 = null;
var inst_33214 = (0);
var inst_33215 = (0);
var state_33271__$1 = (function (){var statearr_33317 = state_33271;
(statearr_33317[(9)] = inst_33215);

(statearr_33317[(10)] = inst_33213);

(statearr_33317[(19)] = inst_33212);

(statearr_33317[(20)] = inst_33214);

(statearr_33317[(27)] = inst_33204__$1);

(statearr_33317[(28)] = inst_33206);

return statearr_33317;
})();
var statearr_33319_35060 = state_33271__$1;
(statearr_33319_35060[(2)] = null);

(statearr_33319_35060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (28))){
var inst_33230 = (state_33271[(23)]);
var inst_33212 = (state_33271[(19)]);
var inst_33230__$1 = cljs.core.seq(inst_33212);
var state_33271__$1 = (function (){var statearr_33320 = state_33271;
(statearr_33320[(23)] = inst_33230__$1);

return statearr_33320;
})();
if(inst_33230__$1){
var statearr_33321_35061 = state_33271__$1;
(statearr_33321_35061[(1)] = (33));

} else {
var statearr_33322_35062 = state_33271__$1;
(statearr_33322_35062[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (25))){
var inst_33215 = (state_33271[(9)]);
var inst_33214 = (state_33271[(20)]);
var inst_33217 = (inst_33215 < inst_33214);
var inst_33218 = inst_33217;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33218)){
var statearr_33323_35063 = state_33271__$1;
(statearr_33323_35063[(1)] = (27));

} else {
var statearr_33324_35064 = state_33271__$1;
(statearr_33324_35064[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (34))){
var state_33271__$1 = state_33271;
var statearr_33325_35069 = state_33271__$1;
(statearr_33325_35069[(2)] = null);

(statearr_33325_35069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (17))){
var state_33271__$1 = state_33271;
var statearr_33326_35073 = state_33271__$1;
(statearr_33326_35073[(2)] = null);

(statearr_33326_35073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (3))){
var inst_33268 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33271__$1,inst_33268);
} else {
if((state_val_33272 === (12))){
var inst_33198 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33328_35074 = state_33271__$1;
(statearr_33328_35074[(2)] = inst_33198);

(statearr_33328_35074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (2))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33271__$1,(4),ch);
} else {
if((state_val_33272 === (23))){
var state_33271__$1 = state_33271;
var statearr_33329_35078 = state_33271__$1;
(statearr_33329_35078[(2)] = null);

(statearr_33329_35078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (35))){
var inst_33252 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33330_35079 = state_33271__$1;
(statearr_33330_35079[(2)] = inst_33252);

(statearr_33330_35079[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (19))){
var inst_33170 = (state_33271[(7)]);
var inst_33174 = cljs.core.chunk_first(inst_33170);
var inst_33175 = cljs.core.chunk_rest(inst_33170);
var inst_33176 = cljs.core.count(inst_33174);
var inst_33147 = inst_33175;
var inst_33148 = inst_33174;
var inst_33149 = inst_33176;
var inst_33150 = (0);
var state_33271__$1 = (function (){var statearr_33331 = state_33271;
(statearr_33331[(13)] = inst_33148);

(statearr_33331[(14)] = inst_33149);

(statearr_33331[(16)] = inst_33150);

(statearr_33331[(17)] = inst_33147);

return statearr_33331;
})();
var statearr_33332_35080 = state_33271__$1;
(statearr_33332_35080[(2)] = null);

(statearr_33332_35080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (11))){
var inst_33170 = (state_33271[(7)]);
var inst_33147 = (state_33271[(17)]);
var inst_33170__$1 = cljs.core.seq(inst_33147);
var state_33271__$1 = (function (){var statearr_33334 = state_33271;
(statearr_33334[(7)] = inst_33170__$1);

return statearr_33334;
})();
if(inst_33170__$1){
var statearr_33335_35081 = state_33271__$1;
(statearr_33335_35081[(1)] = (16));

} else {
var statearr_33336_35082 = state_33271__$1;
(statearr_33336_35082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (9))){
var inst_33200 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33337_35083 = state_33271__$1;
(statearr_33337_35083[(2)] = inst_33200);

(statearr_33337_35083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (5))){
var inst_33145 = cljs.core.deref(cs);
var inst_33146 = cljs.core.seq(inst_33145);
var inst_33147 = inst_33146;
var inst_33148 = null;
var inst_33149 = (0);
var inst_33150 = (0);
var state_33271__$1 = (function (){var statearr_33338 = state_33271;
(statearr_33338[(13)] = inst_33148);

(statearr_33338[(14)] = inst_33149);

(statearr_33338[(16)] = inst_33150);

(statearr_33338[(17)] = inst_33147);

return statearr_33338;
})();
var statearr_33339_35086 = state_33271__$1;
(statearr_33339_35086[(2)] = null);

(statearr_33339_35086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (14))){
var state_33271__$1 = state_33271;
var statearr_33340_35087 = state_33271__$1;
(statearr_33340_35087[(2)] = null);

(statearr_33340_35087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (45))){
var inst_33260 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33341_35091 = state_33271__$1;
(statearr_33341_35091[(2)] = inst_33260);

(statearr_33341_35091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (26))){
var inst_33204 = (state_33271[(27)]);
var inst_33256 = (state_33271[(2)]);
var inst_33257 = cljs.core.seq(inst_33204);
var state_33271__$1 = (function (){var statearr_33343 = state_33271;
(statearr_33343[(29)] = inst_33256);

return statearr_33343;
})();
if(inst_33257){
var statearr_33344_35095 = state_33271__$1;
(statearr_33344_35095[(1)] = (42));

} else {
var statearr_33345_35096 = state_33271__$1;
(statearr_33345_35096[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (16))){
var inst_33170 = (state_33271[(7)]);
var inst_33172 = cljs.core.chunked_seq_QMARK_(inst_33170);
var state_33271__$1 = state_33271;
if(inst_33172){
var statearr_33346_35097 = state_33271__$1;
(statearr_33346_35097[(1)] = (19));

} else {
var statearr_33347_35098 = state_33271__$1;
(statearr_33347_35098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (38))){
var inst_33249 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33348_35100 = state_33271__$1;
(statearr_33348_35100[(2)] = inst_33249);

(statearr_33348_35100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (30))){
var state_33271__$1 = state_33271;
var statearr_33349_35101 = state_33271__$1;
(statearr_33349_35101[(2)] = null);

(statearr_33349_35101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (10))){
var inst_33148 = (state_33271[(13)]);
var inst_33150 = (state_33271[(16)]);
var inst_33159 = cljs.core._nth(inst_33148,inst_33150);
var inst_33160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33159,(0),null);
var inst_33161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33159,(1),null);
var state_33271__$1 = (function (){var statearr_33351 = state_33271;
(statearr_33351[(24)] = inst_33160);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33161)){
var statearr_33352_35102 = state_33271__$1;
(statearr_33352_35102[(1)] = (13));

} else {
var statearr_33353_35103 = state_33271__$1;
(statearr_33353_35103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (18))){
var inst_33196 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33354_35104 = state_33271__$1;
(statearr_33354_35104[(2)] = inst_33196);

(statearr_33354_35104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (42))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33271__$1,(45),dchan);
} else {
if((state_val_33272 === (37))){
var inst_33230 = (state_33271[(23)]);
var inst_33138 = (state_33271[(11)]);
var inst_33239 = (state_33271[(22)]);
var inst_33239__$1 = cljs.core.first(inst_33230);
var inst_33240 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33239__$1,inst_33138,done);
var state_33271__$1 = (function (){var statearr_33355 = state_33271;
(statearr_33355[(22)] = inst_33239__$1);

return statearr_33355;
})();
if(cljs.core.truth_(inst_33240)){
var statearr_33357_35107 = state_33271__$1;
(statearr_33357_35107[(1)] = (39));

} else {
var statearr_33358_35108 = state_33271__$1;
(statearr_33358_35108[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (8))){
var inst_33149 = (state_33271[(14)]);
var inst_33150 = (state_33271[(16)]);
var inst_33153 = (inst_33150 < inst_33149);
var inst_33154 = inst_33153;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33154)){
var statearr_33360_35109 = state_33271__$1;
(statearr_33360_35109[(1)] = (10));

} else {
var statearr_33361_35110 = state_33271__$1;
(statearr_33361_35110[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32149__auto__ = null;
var cljs$core$async$mult_$_state_machine__32149__auto____0 = (function (){
var statearr_33362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33362[(0)] = cljs$core$async$mult_$_state_machine__32149__auto__);

(statearr_33362[(1)] = (1));

return statearr_33362;
});
var cljs$core$async$mult_$_state_machine__32149__auto____1 = (function (state_33271){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33271);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33363){var ex__32152__auto__ = e33363;
var statearr_33364_35111 = state_33271;
(statearr_33364_35111[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33271[(4)]))){
var statearr_33365_35112 = state_33271;
(statearr_33365_35112[(1)] = cljs.core.first((state_33271[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35113 = state_33271;
state_33271 = G__35113;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32149__auto__ = function(state_33271){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32149__auto____1.call(this,state_33271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32149__auto____0;
cljs$core$async$mult_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32149__auto____1;
return cljs$core$async$mult_$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33366 = f__32334__auto__();
(statearr_33366[(6)] = c__32333__auto___35013);

return statearr_33366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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
var G__33370 = arguments.length;
switch (G__33370) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35115 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35115(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35116 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35116(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35121 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35121(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35122 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35122(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35127 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35127(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35128 = arguments.length;
var i__4819__auto___35129 = (0);
while(true){
if((i__4819__auto___35129 < len__4818__auto___35128)){
args__4824__auto__.push((arguments[i__4819__auto___35129]));

var G__35131 = (i__4819__auto___35129 + (1));
i__4819__auto___35129 = G__35131;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33389){
var map__33391 = p__33389;
var map__33391__$1 = cljs.core.__destructure_map(map__33391);
var opts = map__33391__$1;
var statearr_33392_35135 = state;
(statearr_33392_35135[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33394_35136 = state;
(statearr_33394_35136[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33397_35141 = state;
(statearr_33397_35141[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33382){
var G__33383 = cljs.core.first(seq33382);
var seq33382__$1 = cljs.core.next(seq33382);
var G__33384 = cljs.core.first(seq33382__$1);
var seq33382__$2 = cljs.core.next(seq33382__$1);
var G__33385 = cljs.core.first(seq33382__$2);
var seq33382__$3 = cljs.core.next(seq33382__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33383,G__33384,G__33385,seq33382__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33415 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33416){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33416 = meta33416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33417,meta33416__$1){
var self__ = this;
var _33417__$1 = this;
return (new cljs.core.async.t_cljs$core$async33415(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33416__$1));
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33417){
var self__ = this;
var _33417__$1 = this;
return self__.meta33416;
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33416","meta33416",985355421,null)], null);
}));

(cljs.core.async.t_cljs$core$async33415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33415");

(cljs.core.async.t_cljs$core$async33415.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33415.
 */
cljs.core.async.__GT_t_cljs$core$async33415 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33415(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33416){
return (new cljs.core.async.t_cljs$core$async33415(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33416));
});

}

return (new cljs.core.async.t_cljs$core$async33415(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32333__auto___35154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33520){
var state_val_33521 = (state_33520[(1)]);
if((state_val_33521 === (7))){
var inst_33474 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33474)){
var statearr_33527_35155 = state_33520__$1;
(statearr_33527_35155[(1)] = (8));

} else {
var statearr_33530_35156 = state_33520__$1;
(statearr_33530_35156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (20))){
var inst_33467 = (state_33520[(7)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33520__$1,(23),out,inst_33467);
} else {
if((state_val_33521 === (1))){
var inst_33446 = calc_state();
var inst_33447 = cljs.core.__destructure_map(inst_33446);
var inst_33448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33447,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33447,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33447,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33452 = inst_33446;
var state_33520__$1 = (function (){var statearr_33535 = state_33520;
(statearr_33535[(8)] = inst_33449);

(statearr_33535[(9)] = inst_33448);

(statearr_33535[(10)] = inst_33450);

(statearr_33535[(11)] = inst_33452);

return statearr_33535;
})();
var statearr_33537_35157 = state_33520__$1;
(statearr_33537_35157[(2)] = null);

(statearr_33537_35157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (24))){
var inst_33455 = (state_33520[(12)]);
var inst_33452 = inst_33455;
var state_33520__$1 = (function (){var statearr_33539 = state_33520;
(statearr_33539[(11)] = inst_33452);

return statearr_33539;
})();
var statearr_33540_35165 = state_33520__$1;
(statearr_33540_35165[(2)] = null);

(statearr_33540_35165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (4))){
var inst_33469 = (state_33520[(13)]);
var inst_33467 = (state_33520[(7)]);
var inst_33466 = (state_33520[(2)]);
var inst_33467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33466,(0),null);
var inst_33468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33466,(1),null);
var inst_33469__$1 = (inst_33467__$1 == null);
var state_33520__$1 = (function (){var statearr_33544 = state_33520;
(statearr_33544[(14)] = inst_33468);

(statearr_33544[(13)] = inst_33469__$1);

(statearr_33544[(7)] = inst_33467__$1);

return statearr_33544;
})();
if(cljs.core.truth_(inst_33469__$1)){
var statearr_33546_35166 = state_33520__$1;
(statearr_33546_35166[(1)] = (5));

} else {
var statearr_33547_35167 = state_33520__$1;
(statearr_33547_35167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (15))){
var inst_33456 = (state_33520[(15)]);
var inst_33491 = (state_33520[(16)]);
var inst_33491__$1 = cljs.core.empty_QMARK_(inst_33456);
var state_33520__$1 = (function (){var statearr_33552 = state_33520;
(statearr_33552[(16)] = inst_33491__$1);

return statearr_33552;
})();
if(inst_33491__$1){
var statearr_33553_35168 = state_33520__$1;
(statearr_33553_35168[(1)] = (17));

} else {
var statearr_33554_35169 = state_33520__$1;
(statearr_33554_35169[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (21))){
var inst_33455 = (state_33520[(12)]);
var inst_33452 = inst_33455;
var state_33520__$1 = (function (){var statearr_33556 = state_33520;
(statearr_33556[(11)] = inst_33452);

return statearr_33556;
})();
var statearr_33559_35170 = state_33520__$1;
(statearr_33559_35170[(2)] = null);

(statearr_33559_35170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (13))){
var inst_33482 = (state_33520[(2)]);
var inst_33483 = calc_state();
var inst_33452 = inst_33483;
var state_33520__$1 = (function (){var statearr_33561 = state_33520;
(statearr_33561[(17)] = inst_33482);

(statearr_33561[(11)] = inst_33452);

return statearr_33561;
})();
var statearr_33566_35171 = state_33520__$1;
(statearr_33566_35171[(2)] = null);

(statearr_33566_35171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (22))){
var inst_33513 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33567_35172 = state_33520__$1;
(statearr_33567_35172[(2)] = inst_33513);

(statearr_33567_35172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (6))){
var inst_33468 = (state_33520[(14)]);
var inst_33472 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33468,change);
var state_33520__$1 = state_33520;
var statearr_33571_35175 = state_33520__$1;
(statearr_33571_35175[(2)] = inst_33472);

(statearr_33571_35175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (25))){
var state_33520__$1 = state_33520;
var statearr_33573_35178 = state_33520__$1;
(statearr_33573_35178[(2)] = null);

(statearr_33573_35178[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (17))){
var inst_33468 = (state_33520[(14)]);
var inst_33457 = (state_33520[(18)]);
var inst_33494 = (inst_33457.cljs$core$IFn$_invoke$arity$1 ? inst_33457.cljs$core$IFn$_invoke$arity$1(inst_33468) : inst_33457.call(null,inst_33468));
var inst_33495 = cljs.core.not(inst_33494);
var state_33520__$1 = state_33520;
var statearr_33577_35179 = state_33520__$1;
(statearr_33577_35179[(2)] = inst_33495);

(statearr_33577_35179[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (3))){
var inst_33517 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33520__$1,inst_33517);
} else {
if((state_val_33521 === (12))){
var state_33520__$1 = state_33520;
var statearr_33579_35184 = state_33520__$1;
(statearr_33579_35184[(2)] = null);

(statearr_33579_35184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (2))){
var inst_33455 = (state_33520[(12)]);
var inst_33452 = (state_33520[(11)]);
var inst_33455__$1 = cljs.core.__destructure_map(inst_33452);
var inst_33456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33520__$1 = (function (){var statearr_33585 = state_33520;
(statearr_33585[(12)] = inst_33455__$1);

(statearr_33585[(15)] = inst_33456);

(statearr_33585[(18)] = inst_33457);

return statearr_33585;
})();
return cljs.core.async.ioc_alts_BANG_(state_33520__$1,(4),inst_33458);
} else {
if((state_val_33521 === (23))){
var inst_33504 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33504)){
var statearr_33589_35185 = state_33520__$1;
(statearr_33589_35185[(1)] = (24));

} else {
var statearr_33591_35186 = state_33520__$1;
(statearr_33591_35186[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (19))){
var inst_33498 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33593_35187 = state_33520__$1;
(statearr_33593_35187[(2)] = inst_33498);

(statearr_33593_35187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (11))){
var inst_33468 = (state_33520[(14)]);
var inst_33479 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33468);
var state_33520__$1 = state_33520;
var statearr_33596_35188 = state_33520__$1;
(statearr_33596_35188[(2)] = inst_33479);

(statearr_33596_35188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (9))){
var inst_33468 = (state_33520[(14)]);
var inst_33456 = (state_33520[(15)]);
var inst_33486 = (state_33520[(19)]);
var inst_33486__$1 = (inst_33456.cljs$core$IFn$_invoke$arity$1 ? inst_33456.cljs$core$IFn$_invoke$arity$1(inst_33468) : inst_33456.call(null,inst_33468));
var state_33520__$1 = (function (){var statearr_33598 = state_33520;
(statearr_33598[(19)] = inst_33486__$1);

return statearr_33598;
})();
if(cljs.core.truth_(inst_33486__$1)){
var statearr_33600_35189 = state_33520__$1;
(statearr_33600_35189[(1)] = (14));

} else {
var statearr_33601_35190 = state_33520__$1;
(statearr_33601_35190[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (5))){
var inst_33469 = (state_33520[(13)]);
var state_33520__$1 = state_33520;
var statearr_33605_35191 = state_33520__$1;
(statearr_33605_35191[(2)] = inst_33469);

(statearr_33605_35191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (14))){
var inst_33486 = (state_33520[(19)]);
var state_33520__$1 = state_33520;
var statearr_33606_35198 = state_33520__$1;
(statearr_33606_35198[(2)] = inst_33486);

(statearr_33606_35198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (26))){
var inst_33509 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33608_35199 = state_33520__$1;
(statearr_33608_35199[(2)] = inst_33509);

(statearr_33608_35199[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (16))){
var inst_33500 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33500)){
var statearr_33612_35200 = state_33520__$1;
(statearr_33612_35200[(1)] = (20));

} else {
var statearr_33613_35201 = state_33520__$1;
(statearr_33613_35201[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (10))){
var inst_33515 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33614_35202 = state_33520__$1;
(statearr_33614_35202[(2)] = inst_33515);

(statearr_33614_35202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (18))){
var inst_33491 = (state_33520[(16)]);
var state_33520__$1 = state_33520;
var statearr_33616_35203 = state_33520__$1;
(statearr_33616_35203[(2)] = inst_33491);

(statearr_33616_35203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (8))){
var inst_33467 = (state_33520[(7)]);
var inst_33477 = (inst_33467 == null);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33477)){
var statearr_33617_35204 = state_33520__$1;
(statearr_33617_35204[(1)] = (11));

} else {
var statearr_33619_35205 = state_33520__$1;
(statearr_33619_35205[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32149__auto__ = null;
var cljs$core$async$mix_$_state_machine__32149__auto____0 = (function (){
var statearr_33622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33622[(0)] = cljs$core$async$mix_$_state_machine__32149__auto__);

(statearr_33622[(1)] = (1));

return statearr_33622;
});
var cljs$core$async$mix_$_state_machine__32149__auto____1 = (function (state_33520){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33520);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33624){var ex__32152__auto__ = e33624;
var statearr_33625_35206 = state_33520;
(statearr_33625_35206[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33520[(4)]))){
var statearr_33626_35207 = state_33520;
(statearr_33626_35207[(1)] = cljs.core.first((state_33520[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35208 = state_33520;
state_33520 = G__35208;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32149__auto__ = function(state_33520){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32149__auto____1.call(this,state_33520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32149__auto____0;
cljs$core$async$mix_$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32149__auto____1;
return cljs$core$async$mix_$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33630 = f__32334__auto__();
(statearr_33630[(6)] = c__32333__auto___35154);

return statearr_33630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35211 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35211(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35212 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35212(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35213 = (function() {
var G__35214 = null;
var G__35214__1 = (function (p){
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
var G__35214__2 = (function (p,v){
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
G__35214 = function(p,v){
switch(arguments.length){
case 1:
return G__35214__1.call(this,p);
case 2:
return G__35214__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35214.cljs$core$IFn$_invoke$arity$1 = G__35214__1;
G__35214.cljs$core$IFn$_invoke$arity$2 = G__35214__2;
return G__35214;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33670 = arguments.length;
switch (G__33670) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35213(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35213(p,v);
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
var G__33689 = arguments.length;
switch (G__33689) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33681_SHARP_){
if(cljs.core.truth_((p1__33681_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33681_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33681_SHARP_.call(null,topic)))){
return p1__33681_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33681_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33704 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33705){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33705 = meta33705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33706,meta33705__$1){
var self__ = this;
var _33706__$1 = this;
return (new cljs.core.async.t_cljs$core$async33704(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33705__$1));
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33706){
var self__ = this;
var _33706__$1 = this;
return self__.meta33705;
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33705","meta33705",-1417213086,null)], null);
}));

(cljs.core.async.t_cljs$core$async33704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33704");

(cljs.core.async.t_cljs$core$async33704.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33704.
 */
cljs.core.async.__GT_t_cljs$core$async33704 = (function cljs$core$async$__GT_t_cljs$core$async33704(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33705){
return (new cljs.core.async.t_cljs$core$async33704(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33705));
});

}

return (new cljs.core.async.t_cljs$core$async33704(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32333__auto___35223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33803){
var state_val_33807 = (state_33803[(1)]);
if((state_val_33807 === (7))){
var inst_33799 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33812_35228 = state_33803__$1;
(statearr_33812_35228[(2)] = inst_33799);

(statearr_33812_35228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (20))){
var state_33803__$1 = state_33803;
var statearr_33814_35229 = state_33803__$1;
(statearr_33814_35229[(2)] = null);

(statearr_33814_35229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (1))){
var state_33803__$1 = state_33803;
var statearr_33815_35230 = state_33803__$1;
(statearr_33815_35230[(2)] = null);

(statearr_33815_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (24))){
var inst_33782 = (state_33803[(7)]);
var inst_33791 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33782);
var state_33803__$1 = state_33803;
var statearr_33816_35231 = state_33803__$1;
(statearr_33816_35231[(2)] = inst_33791);

(statearr_33816_35231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (4))){
var inst_33726 = (state_33803[(8)]);
var inst_33726__$1 = (state_33803[(2)]);
var inst_33727 = (inst_33726__$1 == null);
var state_33803__$1 = (function (){var statearr_33821 = state_33803;
(statearr_33821[(8)] = inst_33726__$1);

return statearr_33821;
})();
if(cljs.core.truth_(inst_33727)){
var statearr_33822_35232 = state_33803__$1;
(statearr_33822_35232[(1)] = (5));

} else {
var statearr_33823_35236 = state_33803__$1;
(statearr_33823_35236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (15))){
var inst_33776 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33824_35237 = state_33803__$1;
(statearr_33824_35237[(2)] = inst_33776);

(statearr_33824_35237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (21))){
var inst_33796 = (state_33803[(2)]);
var state_33803__$1 = (function (){var statearr_33826 = state_33803;
(statearr_33826[(9)] = inst_33796);

return statearr_33826;
})();
var statearr_33827_35238 = state_33803__$1;
(statearr_33827_35238[(2)] = null);

(statearr_33827_35238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (13))){
var inst_33750 = (state_33803[(10)]);
var inst_33756 = cljs.core.chunked_seq_QMARK_(inst_33750);
var state_33803__$1 = state_33803;
if(inst_33756){
var statearr_33828_35239 = state_33803__$1;
(statearr_33828_35239[(1)] = (16));

} else {
var statearr_33829_35240 = state_33803__$1;
(statearr_33829_35240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (22))){
var inst_33788 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
if(cljs.core.truth_(inst_33788)){
var statearr_33830_35241 = state_33803__$1;
(statearr_33830_35241[(1)] = (23));

} else {
var statearr_33835_35242 = state_33803__$1;
(statearr_33835_35242[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (6))){
var inst_33782 = (state_33803[(7)]);
var inst_33784 = (state_33803[(11)]);
var inst_33726 = (state_33803[(8)]);
var inst_33782__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33726) : topic_fn.call(null,inst_33726));
var inst_33783 = cljs.core.deref(mults);
var inst_33784__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33783,inst_33782__$1);
var state_33803__$1 = (function (){var statearr_33840 = state_33803;
(statearr_33840[(7)] = inst_33782__$1);

(statearr_33840[(11)] = inst_33784__$1);

return statearr_33840;
})();
if(cljs.core.truth_(inst_33784__$1)){
var statearr_33841_35243 = state_33803__$1;
(statearr_33841_35243[(1)] = (19));

} else {
var statearr_33842_35244 = state_33803__$1;
(statearr_33842_35244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (25))){
var inst_33793 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33846_35245 = state_33803__$1;
(statearr_33846_35245[(2)] = inst_33793);

(statearr_33846_35245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (17))){
var inst_33750 = (state_33803[(10)]);
var inst_33766 = cljs.core.first(inst_33750);
var inst_33767 = cljs.core.async.muxch_STAR_(inst_33766);
var inst_33768 = cljs.core.async.close_BANG_(inst_33767);
var inst_33770 = cljs.core.next(inst_33750);
var inst_33736 = inst_33770;
var inst_33737 = null;
var inst_33738 = (0);
var inst_33739 = (0);
var state_33803__$1 = (function (){var statearr_33851 = state_33803;
(statearr_33851[(12)] = inst_33738);

(statearr_33851[(13)] = inst_33739);

(statearr_33851[(14)] = inst_33768);

(statearr_33851[(15)] = inst_33736);

(statearr_33851[(16)] = inst_33737);

return statearr_33851;
})();
var statearr_33853_35246 = state_33803__$1;
(statearr_33853_35246[(2)] = null);

(statearr_33853_35246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (3))){
var inst_33801 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33803__$1,inst_33801);
} else {
if((state_val_33807 === (12))){
var inst_33778 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33854_35247 = state_33803__$1;
(statearr_33854_35247[(2)] = inst_33778);

(statearr_33854_35247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (2))){
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33803__$1,(4),ch);
} else {
if((state_val_33807 === (23))){
var state_33803__$1 = state_33803;
var statearr_33858_35248 = state_33803__$1;
(statearr_33858_35248[(2)] = null);

(statearr_33858_35248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (19))){
var inst_33784 = (state_33803[(11)]);
var inst_33726 = (state_33803[(8)]);
var inst_33786 = cljs.core.async.muxch_STAR_(inst_33784);
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33803__$1,(22),inst_33786,inst_33726);
} else {
if((state_val_33807 === (11))){
var inst_33750 = (state_33803[(10)]);
var inst_33736 = (state_33803[(15)]);
var inst_33750__$1 = cljs.core.seq(inst_33736);
var state_33803__$1 = (function (){var statearr_33860 = state_33803;
(statearr_33860[(10)] = inst_33750__$1);

return statearr_33860;
})();
if(inst_33750__$1){
var statearr_33861_35250 = state_33803__$1;
(statearr_33861_35250[(1)] = (13));

} else {
var statearr_33862_35251 = state_33803__$1;
(statearr_33862_35251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (9))){
var inst_33780 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33863_35254 = state_33803__$1;
(statearr_33863_35254[(2)] = inst_33780);

(statearr_33863_35254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (5))){
var inst_33733 = cljs.core.deref(mults);
var inst_33734 = cljs.core.vals(inst_33733);
var inst_33735 = cljs.core.seq(inst_33734);
var inst_33736 = inst_33735;
var inst_33737 = null;
var inst_33738 = (0);
var inst_33739 = (0);
var state_33803__$1 = (function (){var statearr_33865 = state_33803;
(statearr_33865[(12)] = inst_33738);

(statearr_33865[(13)] = inst_33739);

(statearr_33865[(15)] = inst_33736);

(statearr_33865[(16)] = inst_33737);

return statearr_33865;
})();
var statearr_33866_35258 = state_33803__$1;
(statearr_33866_35258[(2)] = null);

(statearr_33866_35258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (14))){
var state_33803__$1 = state_33803;
var statearr_33870_35259 = state_33803__$1;
(statearr_33870_35259[(2)] = null);

(statearr_33870_35259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (16))){
var inst_33750 = (state_33803[(10)]);
var inst_33758 = cljs.core.chunk_first(inst_33750);
var inst_33759 = cljs.core.chunk_rest(inst_33750);
var inst_33763 = cljs.core.count(inst_33758);
var inst_33736 = inst_33759;
var inst_33737 = inst_33758;
var inst_33738 = inst_33763;
var inst_33739 = (0);
var state_33803__$1 = (function (){var statearr_33871 = state_33803;
(statearr_33871[(12)] = inst_33738);

(statearr_33871[(13)] = inst_33739);

(statearr_33871[(15)] = inst_33736);

(statearr_33871[(16)] = inst_33737);

return statearr_33871;
})();
var statearr_33872_35260 = state_33803__$1;
(statearr_33872_35260[(2)] = null);

(statearr_33872_35260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (10))){
var inst_33738 = (state_33803[(12)]);
var inst_33739 = (state_33803[(13)]);
var inst_33736 = (state_33803[(15)]);
var inst_33737 = (state_33803[(16)]);
var inst_33744 = cljs.core._nth(inst_33737,inst_33739);
var inst_33745 = cljs.core.async.muxch_STAR_(inst_33744);
var inst_33746 = cljs.core.async.close_BANG_(inst_33745);
var inst_33747 = (inst_33739 + (1));
var tmp33867 = inst_33738;
var tmp33868 = inst_33736;
var tmp33869 = inst_33737;
var inst_33736__$1 = tmp33868;
var inst_33737__$1 = tmp33869;
var inst_33738__$1 = tmp33867;
var inst_33739__$1 = inst_33747;
var state_33803__$1 = (function (){var statearr_33877 = state_33803;
(statearr_33877[(12)] = inst_33738__$1);

(statearr_33877[(17)] = inst_33746);

(statearr_33877[(13)] = inst_33739__$1);

(statearr_33877[(15)] = inst_33736__$1);

(statearr_33877[(16)] = inst_33737__$1);

return statearr_33877;
})();
var statearr_33881_35261 = state_33803__$1;
(statearr_33881_35261[(2)] = null);

(statearr_33881_35261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (18))){
var inst_33773 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33883_35262 = state_33803__$1;
(statearr_33883_35262[(2)] = inst_33773);

(statearr_33883_35262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (8))){
var inst_33738 = (state_33803[(12)]);
var inst_33739 = (state_33803[(13)]);
var inst_33741 = (inst_33739 < inst_33738);
var inst_33742 = inst_33741;
var state_33803__$1 = state_33803;
if(cljs.core.truth_(inst_33742)){
var statearr_33884_35263 = state_33803__$1;
(statearr_33884_35263[(1)] = (10));

} else {
var statearr_33885_35264 = state_33803__$1;
(statearr_33885_35264[(1)] = (11));

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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_33887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33887[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_33887[(1)] = (1));

return statearr_33887;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_33803){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33803);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33890){var ex__32152__auto__ = e33890;
var statearr_33892_35268 = state_33803;
(statearr_33892_35268[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33803[(4)]))){
var statearr_33893_35269 = state_33803;
(statearr_33893_35269[(1)] = cljs.core.first((state_33803[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35270 = state_33803;
state_33803 = G__35270;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_33803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_33803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33894 = f__32334__auto__();
(statearr_33894[(6)] = c__32333__auto___35223);

return statearr_33894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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
var G__33900 = arguments.length;
switch (G__33900) {
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
var G__33906 = arguments.length;
switch (G__33906) {
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
var G__33913 = arguments.length;
switch (G__33913) {
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
var c__32333__auto___35276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (7))){
var state_33958__$1 = state_33958;
var statearr_33960_35277 = state_33958__$1;
(statearr_33960_35277[(2)] = null);

(statearr_33960_35277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (1))){
var state_33958__$1 = state_33958;
var statearr_33961_35278 = state_33958__$1;
(statearr_33961_35278[(2)] = null);

(statearr_33961_35278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (4))){
var inst_33918 = (state_33958[(7)]);
var inst_33919 = (state_33958[(8)]);
var inst_33921 = (inst_33919 < inst_33918);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33921)){
var statearr_33962_35280 = state_33958__$1;
(statearr_33962_35280[(1)] = (6));

} else {
var statearr_33963_35282 = state_33958__$1;
(statearr_33963_35282[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (15))){
var inst_33944 = (state_33958[(9)]);
var inst_33949 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33944);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33958__$1,(17),out,inst_33949);
} else {
if((state_val_33959 === (13))){
var inst_33944 = (state_33958[(9)]);
var inst_33944__$1 = (state_33958[(2)]);
var inst_33945 = cljs.core.some(cljs.core.nil_QMARK_,inst_33944__$1);
var state_33958__$1 = (function (){var statearr_33964 = state_33958;
(statearr_33964[(9)] = inst_33944__$1);

return statearr_33964;
})();
if(cljs.core.truth_(inst_33945)){
var statearr_33965_35283 = state_33958__$1;
(statearr_33965_35283[(1)] = (14));

} else {
var statearr_33966_35284 = state_33958__$1;
(statearr_33966_35284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (6))){
var state_33958__$1 = state_33958;
var statearr_33967_35285 = state_33958__$1;
(statearr_33967_35285[(2)] = null);

(statearr_33967_35285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (17))){
var inst_33951 = (state_33958[(2)]);
var state_33958__$1 = (function (){var statearr_33969 = state_33958;
(statearr_33969[(10)] = inst_33951);

return statearr_33969;
})();
var statearr_33970_35286 = state_33958__$1;
(statearr_33970_35286[(2)] = null);

(statearr_33970_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (3))){
var inst_33956 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33958__$1,inst_33956);
} else {
if((state_val_33959 === (12))){
var _ = (function (){var statearr_33971 = state_33958;
(statearr_33971[(4)] = cljs.core.rest((state_33958[(4)])));

return statearr_33971;
})();
var state_33958__$1 = state_33958;
var ex33968 = (state_33958__$1[(2)]);
var statearr_33972_35287 = state_33958__$1;
(statearr_33972_35287[(5)] = ex33968);


if((ex33968 instanceof Object)){
var statearr_33973_35288 = state_33958__$1;
(statearr_33973_35288[(1)] = (11));

(statearr_33973_35288[(5)] = null);

} else {
throw ex33968;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (2))){
var inst_33916 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33918 = cnt;
var inst_33919 = (0);
var state_33958__$1 = (function (){var statearr_33975 = state_33958;
(statearr_33975[(7)] = inst_33918);

(statearr_33975[(8)] = inst_33919);

(statearr_33975[(11)] = inst_33916);

return statearr_33975;
})();
var statearr_33976_35289 = state_33958__$1;
(statearr_33976_35289[(2)] = null);

(statearr_33976_35289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (11))){
var inst_33923 = (state_33958[(2)]);
var inst_33924 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33958__$1 = (function (){var statearr_33978 = state_33958;
(statearr_33978[(12)] = inst_33923);

return statearr_33978;
})();
var statearr_33979_35290 = state_33958__$1;
(statearr_33979_35290[(2)] = inst_33924);

(statearr_33979_35290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (9))){
var inst_33919 = (state_33958[(8)]);
var _ = (function (){var statearr_33980 = state_33958;
(statearr_33980[(4)] = cljs.core.cons((12),(state_33958[(4)])));

return statearr_33980;
})();
var inst_33930 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33919) : chs__$1.call(null,inst_33919));
var inst_33931 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33919) : done.call(null,inst_33919));
var inst_33932 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33930,inst_33931);
var ___$1 = (function (){var statearr_33981 = state_33958;
(statearr_33981[(4)] = cljs.core.rest((state_33958[(4)])));

return statearr_33981;
})();
var state_33958__$1 = state_33958;
var statearr_33982_35291 = state_33958__$1;
(statearr_33982_35291[(2)] = inst_33932);

(statearr_33982_35291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (5))){
var inst_33942 = (state_33958[(2)]);
var state_33958__$1 = (function (){var statearr_33983 = state_33958;
(statearr_33983[(13)] = inst_33942);

return statearr_33983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33958__$1,(13),dchan);
} else {
if((state_val_33959 === (14))){
var inst_33947 = cljs.core.async.close_BANG_(out);
var state_33958__$1 = state_33958;
var statearr_33985_35295 = state_33958__$1;
(statearr_33985_35295[(2)] = inst_33947);

(statearr_33985_35295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (16))){
var inst_33954 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33987_35297 = state_33958__$1;
(statearr_33987_35297[(2)] = inst_33954);

(statearr_33987_35297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (10))){
var inst_33919 = (state_33958[(8)]);
var inst_33935 = (state_33958[(2)]);
var inst_33936 = (inst_33919 + (1));
var inst_33919__$1 = inst_33936;
var state_33958__$1 = (function (){var statearr_33988 = state_33958;
(statearr_33988[(8)] = inst_33919__$1);

(statearr_33988[(14)] = inst_33935);

return statearr_33988;
})();
var statearr_33989_35299 = state_33958__$1;
(statearr_33989_35299[(2)] = null);

(statearr_33989_35299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (8))){
var inst_33940 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33990_35300 = state_33958__$1;
(statearr_33990_35300[(2)] = inst_33940);

(statearr_33990_35300[(1)] = (5));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_33991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33991[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_33991[(1)] = (1));

return statearr_33991;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_33958){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_33958);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e33992){var ex__32152__auto__ = e33992;
var statearr_33993_35301 = state_33958;
(statearr_33993_35301[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_33958[(4)]))){
var statearr_33995_35302 = state_33958;
(statearr_33995_35302[(1)] = cljs.core.first((state_33958[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35303 = state_33958;
state_33958 = G__35303;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_33997 = f__32334__auto__();
(statearr_33997[(6)] = c__32333__auto___35276);

return statearr_33997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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
var G__34000 = arguments.length;
switch (G__34000) {
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
var c__32333__auto___35305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34032){
var state_val_34033 = (state_34032[(1)]);
if((state_val_34033 === (7))){
var inst_34012 = (state_34032[(7)]);
var inst_34011 = (state_34032[(8)]);
var inst_34011__$1 = (state_34032[(2)]);
var inst_34012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34011__$1,(0),null);
var inst_34013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34011__$1,(1),null);
var inst_34014 = (inst_34012__$1 == null);
var state_34032__$1 = (function (){var statearr_34036 = state_34032;
(statearr_34036[(7)] = inst_34012__$1);

(statearr_34036[(8)] = inst_34011__$1);

(statearr_34036[(9)] = inst_34013);

return statearr_34036;
})();
if(cljs.core.truth_(inst_34014)){
var statearr_34037_35306 = state_34032__$1;
(statearr_34037_35306[(1)] = (8));

} else {
var statearr_34038_35307 = state_34032__$1;
(statearr_34038_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (1))){
var inst_34001 = cljs.core.vec(chs);
var inst_34002 = inst_34001;
var state_34032__$1 = (function (){var statearr_34039 = state_34032;
(statearr_34039[(10)] = inst_34002);

return statearr_34039;
})();
var statearr_34040_35308 = state_34032__$1;
(statearr_34040_35308[(2)] = null);

(statearr_34040_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (4))){
var inst_34002 = (state_34032[(10)]);
var state_34032__$1 = state_34032;
return cljs.core.async.ioc_alts_BANG_(state_34032__$1,(7),inst_34002);
} else {
if((state_val_34033 === (6))){
var inst_34028 = (state_34032[(2)]);
var state_34032__$1 = state_34032;
var statearr_34045_35309 = state_34032__$1;
(statearr_34045_35309[(2)] = inst_34028);

(statearr_34045_35309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (3))){
var inst_34030 = (state_34032[(2)]);
var state_34032__$1 = state_34032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34032__$1,inst_34030);
} else {
if((state_val_34033 === (2))){
var inst_34002 = (state_34032[(10)]);
var inst_34004 = cljs.core.count(inst_34002);
var inst_34005 = (inst_34004 > (0));
var state_34032__$1 = state_34032;
if(cljs.core.truth_(inst_34005)){
var statearr_34047_35311 = state_34032__$1;
(statearr_34047_35311[(1)] = (4));

} else {
var statearr_34048_35312 = state_34032__$1;
(statearr_34048_35312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (11))){
var inst_34002 = (state_34032[(10)]);
var inst_34021 = (state_34032[(2)]);
var tmp34046 = inst_34002;
var inst_34002__$1 = tmp34046;
var state_34032__$1 = (function (){var statearr_34050 = state_34032;
(statearr_34050[(10)] = inst_34002__$1);

(statearr_34050[(11)] = inst_34021);

return statearr_34050;
})();
var statearr_34051_35313 = state_34032__$1;
(statearr_34051_35313[(2)] = null);

(statearr_34051_35313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (9))){
var inst_34012 = (state_34032[(7)]);
var state_34032__$1 = state_34032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34032__$1,(11),out,inst_34012);
} else {
if((state_val_34033 === (5))){
var inst_34026 = cljs.core.async.close_BANG_(out);
var state_34032__$1 = state_34032;
var statearr_34056_35314 = state_34032__$1;
(statearr_34056_35314[(2)] = inst_34026);

(statearr_34056_35314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (10))){
var inst_34024 = (state_34032[(2)]);
var state_34032__$1 = state_34032;
var statearr_34057_35319 = state_34032__$1;
(statearr_34057_35319[(2)] = inst_34024);

(statearr_34057_35319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (8))){
var inst_34012 = (state_34032[(7)]);
var inst_34002 = (state_34032[(10)]);
var inst_34011 = (state_34032[(8)]);
var inst_34013 = (state_34032[(9)]);
var inst_34016 = (function (){var cs = inst_34002;
var vec__34007 = inst_34011;
var v = inst_34012;
var c = inst_34013;
return (function (p1__33998_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33998_SHARP_);
});
})();
var inst_34017 = cljs.core.filterv(inst_34016,inst_34002);
var inst_34002__$1 = inst_34017;
var state_34032__$1 = (function (){var statearr_34061 = state_34032;
(statearr_34061[(10)] = inst_34002__$1);

return statearr_34061;
})();
var statearr_34062_35320 = state_34032__$1;
(statearr_34062_35320[(2)] = null);

(statearr_34062_35320[(1)] = (2));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_34063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34063[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_34063[(1)] = (1));

return statearr_34063;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_34032){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34032);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34064){var ex__32152__auto__ = e34064;
var statearr_34065_35321 = state_34032;
(statearr_34065_35321[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34032[(4)]))){
var statearr_34066_35322 = state_34032;
(statearr_34066_35322[(1)] = cljs.core.first((state_34032[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35323 = state_34032;
state_34032 = G__35323;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_34032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_34032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34067 = f__32334__auto__();
(statearr_34067[(6)] = c__32333__auto___35305);

return statearr_34067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
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
var G__34088 = arguments.length;
switch (G__34088) {
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
var c__32333__auto___35329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (7))){
var inst_34104 = (state_34122[(7)]);
var inst_34104__$1 = (state_34122[(2)]);
var inst_34105 = (inst_34104__$1 == null);
var inst_34106 = cljs.core.not(inst_34105);
var state_34122__$1 = (function (){var statearr_34127 = state_34122;
(statearr_34127[(7)] = inst_34104__$1);

return statearr_34127;
})();
if(inst_34106){
var statearr_34128_35334 = state_34122__$1;
(statearr_34128_35334[(1)] = (8));

} else {
var statearr_34129_35335 = state_34122__$1;
(statearr_34129_35335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (1))){
var inst_34096 = (0);
var state_34122__$1 = (function (){var statearr_34130 = state_34122;
(statearr_34130[(8)] = inst_34096);

return statearr_34130;
})();
var statearr_34131_35340 = state_34122__$1;
(statearr_34131_35340[(2)] = null);

(statearr_34131_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (4))){
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34122__$1,(7),ch);
} else {
if((state_val_34123 === (6))){
var inst_34117 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34132_35344 = state_34122__$1;
(statearr_34132_35344[(2)] = inst_34117);

(statearr_34132_35344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (3))){
var inst_34119 = (state_34122[(2)]);
var inst_34120 = cljs.core.async.close_BANG_(out);
var state_34122__$1 = (function (){var statearr_34133 = state_34122;
(statearr_34133[(9)] = inst_34119);

return statearr_34133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (2))){
var inst_34096 = (state_34122[(8)]);
var inst_34101 = (inst_34096 < n);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34101)){
var statearr_34138_35345 = state_34122__$1;
(statearr_34138_35345[(1)] = (4));

} else {
var statearr_34139_35349 = state_34122__$1;
(statearr_34139_35349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (11))){
var inst_34096 = (state_34122[(8)]);
var inst_34109 = (state_34122[(2)]);
var inst_34110 = (inst_34096 + (1));
var inst_34096__$1 = inst_34110;
var state_34122__$1 = (function (){var statearr_34140 = state_34122;
(statearr_34140[(10)] = inst_34109);

(statearr_34140[(8)] = inst_34096__$1);

return statearr_34140;
})();
var statearr_34141_35350 = state_34122__$1;
(statearr_34141_35350[(2)] = null);

(statearr_34141_35350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (9))){
var state_34122__$1 = state_34122;
var statearr_34142_35351 = state_34122__$1;
(statearr_34142_35351[(2)] = null);

(statearr_34142_35351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (5))){
var state_34122__$1 = state_34122;
var statearr_34143_35355 = state_34122__$1;
(statearr_34143_35355[(2)] = null);

(statearr_34143_35355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (10))){
var inst_34114 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34144_35356 = state_34122__$1;
(statearr_34144_35356[(2)] = inst_34114);

(statearr_34144_35356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (8))){
var inst_34104 = (state_34122[(7)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34122__$1,(11),out,inst_34104);
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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_34145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34145[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_34145[(1)] = (1));

return statearr_34145;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_34122){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34122);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34146){var ex__32152__auto__ = e34146;
var statearr_34147_35360 = state_34122;
(statearr_34147_35360[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34122[(4)]))){
var statearr_34149_35361 = state_34122;
(statearr_34149_35361[(1)] = cljs.core.first((state_34122[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35362 = state_34122;
state_34122 = G__35362;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34153 = f__32334__auto__();
(statearr_34153[(6)] = c__32333__auto___35329);

return statearr_34153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34157 = (function (f,ch,meta34158){
this.f = f;
this.ch = ch;
this.meta34158 = meta34158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34159,meta34158__$1){
var self__ = this;
var _34159__$1 = this;
return (new cljs.core.async.t_cljs$core$async34157(self__.f,self__.ch,meta34158__$1));
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34159){
var self__ = this;
var _34159__$1 = this;
return self__.meta34158;
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34162 = (function (f,ch,meta34158,_,fn1,meta34163){
this.f = f;
this.ch = ch;
this.meta34158 = meta34158;
this._ = _;
this.fn1 = fn1;
this.meta34163 = meta34163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34164,meta34163__$1){
var self__ = this;
var _34164__$1 = this;
return (new cljs.core.async.t_cljs$core$async34162(self__.f,self__.ch,self__.meta34158,self__._,self__.fn1,meta34163__$1));
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34164){
var self__ = this;
var _34164__$1 = this;
return self__.meta34163;
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34156_SHARP_){
var G__34167 = (((p1__34156_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34156_SHARP_) : self__.f.call(null,p1__34156_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34167) : f1.call(null,G__34167));
});
}));

(cljs.core.async.t_cljs$core$async34162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34158","meta34158",-1460405968,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34157","cljs.core.async/t_cljs$core$async34157",-919793830,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34163","meta34163",-1443804621,null)], null);
}));

(cljs.core.async.t_cljs$core$async34162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34162");

(cljs.core.async.t_cljs$core$async34162.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34162.
 */
cljs.core.async.__GT_t_cljs$core$async34162 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34162(f__$1,ch__$1,meta34158__$1,___$2,fn1__$1,meta34163){
return (new cljs.core.async.t_cljs$core$async34162(f__$1,ch__$1,meta34158__$1,___$2,fn1__$1,meta34163));
});

}

return (new cljs.core.async.t_cljs$core$async34162(self__.f,self__.ch,self__.meta34158,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34173 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34173) : self__.f.call(null,G__34173));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34158","meta34158",-1460405968,null)], null);
}));

(cljs.core.async.t_cljs$core$async34157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34157");

(cljs.core.async.t_cljs$core$async34157.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34157.
 */
cljs.core.async.__GT_t_cljs$core$async34157 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34157(f__$1,ch__$1,meta34158){
return (new cljs.core.async.t_cljs$core$async34157(f__$1,ch__$1,meta34158));
});

}

return (new cljs.core.async.t_cljs$core$async34157(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34174 = (function (f,ch,meta34175){
this.f = f;
this.ch = ch;
this.meta34175 = meta34175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34176,meta34175__$1){
var self__ = this;
var _34176__$1 = this;
return (new cljs.core.async.t_cljs$core$async34174(self__.f,self__.ch,meta34175__$1));
}));

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34176){
var self__ = this;
var _34176__$1 = this;
return self__.meta34175;
}));

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34175","meta34175",715540951,null)], null);
}));

(cljs.core.async.t_cljs$core$async34174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34174");

(cljs.core.async.t_cljs$core$async34174.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34174.
 */
cljs.core.async.__GT_t_cljs$core$async34174 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34174(f__$1,ch__$1,meta34175){
return (new cljs.core.async.t_cljs$core$async34174(f__$1,ch__$1,meta34175));
});

}

return (new cljs.core.async.t_cljs$core$async34174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34182 = (function (p,ch,meta34183){
this.p = p;
this.ch = ch;
this.meta34183 = meta34183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34184,meta34183__$1){
var self__ = this;
var _34184__$1 = this;
return (new cljs.core.async.t_cljs$core$async34182(self__.p,self__.ch,meta34183__$1));
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34184){
var self__ = this;
var _34184__$1 = this;
return self__.meta34183;
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34183","meta34183",-331673541,null)], null);
}));

(cljs.core.async.t_cljs$core$async34182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34182");

(cljs.core.async.t_cljs$core$async34182.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34182.
 */
cljs.core.async.__GT_t_cljs$core$async34182 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34182(p__$1,ch__$1,meta34183){
return (new cljs.core.async.t_cljs$core$async34182(p__$1,ch__$1,meta34183));
});

}

return (new cljs.core.async.t_cljs$core$async34182(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34193 = arguments.length;
switch (G__34193) {
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
var c__32333__auto___35395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34214){
var state_val_34215 = (state_34214[(1)]);
if((state_val_34215 === (7))){
var inst_34210 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34220_35398 = state_34214__$1;
(statearr_34220_35398[(2)] = inst_34210);

(statearr_34220_35398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (1))){
var state_34214__$1 = state_34214;
var statearr_34221_35399 = state_34214__$1;
(statearr_34221_35399[(2)] = null);

(statearr_34221_35399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (4))){
var inst_34196 = (state_34214[(7)]);
var inst_34196__$1 = (state_34214[(2)]);
var inst_34197 = (inst_34196__$1 == null);
var state_34214__$1 = (function (){var statearr_34222 = state_34214;
(statearr_34222[(7)] = inst_34196__$1);

return statearr_34222;
})();
if(cljs.core.truth_(inst_34197)){
var statearr_34223_35404 = state_34214__$1;
(statearr_34223_35404[(1)] = (5));

} else {
var statearr_34225_35405 = state_34214__$1;
(statearr_34225_35405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (6))){
var inst_34196 = (state_34214[(7)]);
var inst_34201 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34196) : p.call(null,inst_34196));
var state_34214__$1 = state_34214;
if(cljs.core.truth_(inst_34201)){
var statearr_34229_35406 = state_34214__$1;
(statearr_34229_35406[(1)] = (8));

} else {
var statearr_34230_35407 = state_34214__$1;
(statearr_34230_35407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (3))){
var inst_34212 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34214__$1,inst_34212);
} else {
if((state_val_34215 === (2))){
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34214__$1,(4),ch);
} else {
if((state_val_34215 === (11))){
var inst_34204 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34231_35409 = state_34214__$1;
(statearr_34231_35409[(2)] = inst_34204);

(statearr_34231_35409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (9))){
var state_34214__$1 = state_34214;
var statearr_34232_35414 = state_34214__$1;
(statearr_34232_35414[(2)] = null);

(statearr_34232_35414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (5))){
var inst_34199 = cljs.core.async.close_BANG_(out);
var state_34214__$1 = state_34214;
var statearr_34233_35419 = state_34214__$1;
(statearr_34233_35419[(2)] = inst_34199);

(statearr_34233_35419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (10))){
var inst_34207 = (state_34214[(2)]);
var state_34214__$1 = (function (){var statearr_34234 = state_34214;
(statearr_34234[(8)] = inst_34207);

return statearr_34234;
})();
var statearr_34235_35421 = state_34214__$1;
(statearr_34235_35421[(2)] = null);

(statearr_34235_35421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (8))){
var inst_34196 = (state_34214[(7)]);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34214__$1,(11),out,inst_34196);
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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_34236 = [null,null,null,null,null,null,null,null,null];
(statearr_34236[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_34236[(1)] = (1));

return statearr_34236;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_34214){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34214);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34237){var ex__32152__auto__ = e34237;
var statearr_34238_35422 = state_34214;
(statearr_34238_35422[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34214[(4)]))){
var statearr_34239_35423 = state_34214;
(statearr_34239_35423[(1)] = cljs.core.first((state_34214[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35424 = state_34214;
state_34214 = G__35424;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_34214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_34214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34242 = f__32334__auto__();
(statearr_34242[(6)] = c__32333__auto___35395);

return statearr_34242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34244 = arguments.length;
switch (G__34244) {
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
var c__32333__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34309){
var state_val_34310 = (state_34309[(1)]);
if((state_val_34310 === (7))){
var inst_34305 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34311_35433 = state_34309__$1;
(statearr_34311_35433[(2)] = inst_34305);

(statearr_34311_35433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (20))){
var inst_34275 = (state_34309[(7)]);
var inst_34286 = (state_34309[(2)]);
var inst_34287 = cljs.core.next(inst_34275);
var inst_34261 = inst_34287;
var inst_34262 = null;
var inst_34263 = (0);
var inst_34264 = (0);
var state_34309__$1 = (function (){var statearr_34312 = state_34309;
(statearr_34312[(8)] = inst_34261);

(statearr_34312[(9)] = inst_34286);

(statearr_34312[(10)] = inst_34264);

(statearr_34312[(11)] = inst_34262);

(statearr_34312[(12)] = inst_34263);

return statearr_34312;
})();
var statearr_34313_35438 = state_34309__$1;
(statearr_34313_35438[(2)] = null);

(statearr_34313_35438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (1))){
var state_34309__$1 = state_34309;
var statearr_34314_35440 = state_34309__$1;
(statearr_34314_35440[(2)] = null);

(statearr_34314_35440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (4))){
var inst_34250 = (state_34309[(13)]);
var inst_34250__$1 = (state_34309[(2)]);
var inst_34251 = (inst_34250__$1 == null);
var state_34309__$1 = (function (){var statearr_34315 = state_34309;
(statearr_34315[(13)] = inst_34250__$1);

return statearr_34315;
})();
if(cljs.core.truth_(inst_34251)){
var statearr_34316_35444 = state_34309__$1;
(statearr_34316_35444[(1)] = (5));

} else {
var statearr_34317_35445 = state_34309__$1;
(statearr_34317_35445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (15))){
var state_34309__$1 = state_34309;
var statearr_34321_35446 = state_34309__$1;
(statearr_34321_35446[(2)] = null);

(statearr_34321_35446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (21))){
var state_34309__$1 = state_34309;
var statearr_34322_35447 = state_34309__$1;
(statearr_34322_35447[(2)] = null);

(statearr_34322_35447[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (13))){
var inst_34261 = (state_34309[(8)]);
var inst_34264 = (state_34309[(10)]);
var inst_34262 = (state_34309[(11)]);
var inst_34263 = (state_34309[(12)]);
var inst_34271 = (state_34309[(2)]);
var inst_34272 = (inst_34264 + (1));
var tmp34318 = inst_34261;
var tmp34319 = inst_34262;
var tmp34320 = inst_34263;
var inst_34261__$1 = tmp34318;
var inst_34262__$1 = tmp34319;
var inst_34263__$1 = tmp34320;
var inst_34264__$1 = inst_34272;
var state_34309__$1 = (function (){var statearr_34323 = state_34309;
(statearr_34323[(14)] = inst_34271);

(statearr_34323[(8)] = inst_34261__$1);

(statearr_34323[(10)] = inst_34264__$1);

(statearr_34323[(11)] = inst_34262__$1);

(statearr_34323[(12)] = inst_34263__$1);

return statearr_34323;
})();
var statearr_34324_35448 = state_34309__$1;
(statearr_34324_35448[(2)] = null);

(statearr_34324_35448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (22))){
var state_34309__$1 = state_34309;
var statearr_34325_35449 = state_34309__$1;
(statearr_34325_35449[(2)] = null);

(statearr_34325_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (6))){
var inst_34250 = (state_34309[(13)]);
var inst_34259 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34250) : f.call(null,inst_34250));
var inst_34260 = cljs.core.seq(inst_34259);
var inst_34261 = inst_34260;
var inst_34262 = null;
var inst_34263 = (0);
var inst_34264 = (0);
var state_34309__$1 = (function (){var statearr_34326 = state_34309;
(statearr_34326[(8)] = inst_34261);

(statearr_34326[(10)] = inst_34264);

(statearr_34326[(11)] = inst_34262);

(statearr_34326[(12)] = inst_34263);

return statearr_34326;
})();
var statearr_34327_35458 = state_34309__$1;
(statearr_34327_35458[(2)] = null);

(statearr_34327_35458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (17))){
var inst_34275 = (state_34309[(7)]);
var inst_34279 = cljs.core.chunk_first(inst_34275);
var inst_34280 = cljs.core.chunk_rest(inst_34275);
var inst_34281 = cljs.core.count(inst_34279);
var inst_34261 = inst_34280;
var inst_34262 = inst_34279;
var inst_34263 = inst_34281;
var inst_34264 = (0);
var state_34309__$1 = (function (){var statearr_34328 = state_34309;
(statearr_34328[(8)] = inst_34261);

(statearr_34328[(10)] = inst_34264);

(statearr_34328[(11)] = inst_34262);

(statearr_34328[(12)] = inst_34263);

return statearr_34328;
})();
var statearr_34329_35468 = state_34309__$1;
(statearr_34329_35468[(2)] = null);

(statearr_34329_35468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (3))){
var inst_34307 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34309__$1,inst_34307);
} else {
if((state_val_34310 === (12))){
var inst_34295 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34330_35469 = state_34309__$1;
(statearr_34330_35469[(2)] = inst_34295);

(statearr_34330_35469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (2))){
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34309__$1,(4),in$);
} else {
if((state_val_34310 === (23))){
var inst_34303 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34331_35477 = state_34309__$1;
(statearr_34331_35477[(2)] = inst_34303);

(statearr_34331_35477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (19))){
var inst_34290 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34332_35478 = state_34309__$1;
(statearr_34332_35478[(2)] = inst_34290);

(statearr_34332_35478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (11))){
var inst_34275 = (state_34309[(7)]);
var inst_34261 = (state_34309[(8)]);
var inst_34275__$1 = cljs.core.seq(inst_34261);
var state_34309__$1 = (function (){var statearr_34334 = state_34309;
(statearr_34334[(7)] = inst_34275__$1);

return statearr_34334;
})();
if(inst_34275__$1){
var statearr_34335_35479 = state_34309__$1;
(statearr_34335_35479[(1)] = (14));

} else {
var statearr_34336_35480 = state_34309__$1;
(statearr_34336_35480[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (9))){
var inst_34297 = (state_34309[(2)]);
var inst_34298 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34309__$1 = (function (){var statearr_34337 = state_34309;
(statearr_34337[(15)] = inst_34297);

return statearr_34337;
})();
if(cljs.core.truth_(inst_34298)){
var statearr_34338_35487 = state_34309__$1;
(statearr_34338_35487[(1)] = (21));

} else {
var statearr_34339_35493 = state_34309__$1;
(statearr_34339_35493[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (5))){
var inst_34253 = cljs.core.async.close_BANG_(out);
var state_34309__$1 = state_34309;
var statearr_34340_35497 = state_34309__$1;
(statearr_34340_35497[(2)] = inst_34253);

(statearr_34340_35497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (14))){
var inst_34275 = (state_34309[(7)]);
var inst_34277 = cljs.core.chunked_seq_QMARK_(inst_34275);
var state_34309__$1 = state_34309;
if(inst_34277){
var statearr_34341_35498 = state_34309__$1;
(statearr_34341_35498[(1)] = (17));

} else {
var statearr_34342_35499 = state_34309__$1;
(statearr_34342_35499[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (16))){
var inst_34293 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34343_35508 = state_34309__$1;
(statearr_34343_35508[(2)] = inst_34293);

(statearr_34343_35508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (10))){
var inst_34264 = (state_34309[(10)]);
var inst_34262 = (state_34309[(11)]);
var inst_34269 = cljs.core._nth(inst_34262,inst_34264);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34309__$1,(13),out,inst_34269);
} else {
if((state_val_34310 === (18))){
var inst_34275 = (state_34309[(7)]);
var inst_34284 = cljs.core.first(inst_34275);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34309__$1,(20),out,inst_34284);
} else {
if((state_val_34310 === (8))){
var inst_34264 = (state_34309[(10)]);
var inst_34263 = (state_34309[(12)]);
var inst_34266 = (inst_34264 < inst_34263);
var inst_34267 = inst_34266;
var state_34309__$1 = state_34309;
if(cljs.core.truth_(inst_34267)){
var statearr_34347_35525 = state_34309__$1;
(statearr_34347_35525[(1)] = (10));

} else {
var statearr_34348_35526 = state_34309__$1;
(statearr_34348_35526[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32149__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32149__auto____0 = (function (){
var statearr_34349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34349[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32149__auto__);

(statearr_34349[(1)] = (1));

return statearr_34349;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32149__auto____1 = (function (state_34309){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34309);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34350){var ex__32152__auto__ = e34350;
var statearr_34351_35531 = state_34309;
(statearr_34351_35531[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34309[(4)]))){
var statearr_34352_35535 = state_34309;
(statearr_34352_35535[(1)] = cljs.core.first((state_34309[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35537 = state_34309;
state_34309 = G__35537;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32149__auto__ = function(state_34309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32149__auto____1.call(this,state_34309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32149__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32149__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34354 = f__32334__auto__();
(statearr_34354[(6)] = c__32333__auto__);

return statearr_34354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

return c__32333__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34359 = arguments.length;
switch (G__34359) {
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
var G__34361 = arguments.length;
switch (G__34361) {
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
var G__34363 = arguments.length;
switch (G__34363) {
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
var c__32333__auto___35570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34407){
var state_val_34408 = (state_34407[(1)]);
if((state_val_34408 === (7))){
var inst_34402 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34409_35571 = state_34407__$1;
(statearr_34409_35571[(2)] = inst_34402);

(statearr_34409_35571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (1))){
var inst_34378 = null;
var state_34407__$1 = (function (){var statearr_34410 = state_34407;
(statearr_34410[(7)] = inst_34378);

return statearr_34410;
})();
var statearr_34419_35573 = state_34407__$1;
(statearr_34419_35573[(2)] = null);

(statearr_34419_35573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (4))){
var inst_34381 = (state_34407[(8)]);
var inst_34381__$1 = (state_34407[(2)]);
var inst_34382 = (inst_34381__$1 == null);
var inst_34383 = cljs.core.not(inst_34382);
var state_34407__$1 = (function (){var statearr_34426 = state_34407;
(statearr_34426[(8)] = inst_34381__$1);

return statearr_34426;
})();
if(inst_34383){
var statearr_34427_35575 = state_34407__$1;
(statearr_34427_35575[(1)] = (5));

} else {
var statearr_34428_35576 = state_34407__$1;
(statearr_34428_35576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (6))){
var state_34407__$1 = state_34407;
var statearr_34435_35578 = state_34407__$1;
(statearr_34435_35578[(2)] = null);

(statearr_34435_35578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (3))){
var inst_34404 = (state_34407[(2)]);
var inst_34405 = cljs.core.async.close_BANG_(out);
var state_34407__$1 = (function (){var statearr_34436 = state_34407;
(statearr_34436[(9)] = inst_34404);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34407__$1,inst_34405);
} else {
if((state_val_34408 === (2))){
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34407__$1,(4),ch);
} else {
if((state_val_34408 === (11))){
var inst_34381 = (state_34407[(8)]);
var inst_34390 = (state_34407[(2)]);
var inst_34378 = inst_34381;
var state_34407__$1 = (function (){var statearr_34439 = state_34407;
(statearr_34439[(10)] = inst_34390);

(statearr_34439[(7)] = inst_34378);

return statearr_34439;
})();
var statearr_34440_35584 = state_34407__$1;
(statearr_34440_35584[(2)] = null);

(statearr_34440_35584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (9))){
var inst_34381 = (state_34407[(8)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34407__$1,(11),out,inst_34381);
} else {
if((state_val_34408 === (5))){
var inst_34381 = (state_34407[(8)]);
var inst_34378 = (state_34407[(7)]);
var inst_34385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34381,inst_34378);
var state_34407__$1 = state_34407;
if(inst_34385){
var statearr_34443_35587 = state_34407__$1;
(statearr_34443_35587[(1)] = (8));

} else {
var statearr_34444_35588 = state_34407__$1;
(statearr_34444_35588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (10))){
var inst_34396 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34445_35589 = state_34407__$1;
(statearr_34445_35589[(2)] = inst_34396);

(statearr_34445_35589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (8))){
var inst_34378 = (state_34407[(7)]);
var tmp34441 = inst_34378;
var inst_34378__$1 = tmp34441;
var state_34407__$1 = (function (){var statearr_34446 = state_34407;
(statearr_34446[(7)] = inst_34378__$1);

return statearr_34446;
})();
var statearr_34447_35592 = state_34407__$1;
(statearr_34447_35592[(2)] = null);

(statearr_34447_35592[(1)] = (2));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_34448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34448[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_34448[(1)] = (1));

return statearr_34448;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_34407){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34407);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34449){var ex__32152__auto__ = e34449;
var statearr_34450_35595 = state_34407;
(statearr_34450_35595[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34407[(4)]))){
var statearr_34451_35597 = state_34407;
(statearr_34451_35597[(1)] = cljs.core.first((state_34407[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35598 = state_34407;
state_34407 = G__35598;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34455 = f__32334__auto__();
(statearr_34455[(6)] = c__32333__auto___35570);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34457 = arguments.length;
switch (G__34457) {
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
var c__32333__auto___35605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34495){
var state_val_34496 = (state_34495[(1)]);
if((state_val_34496 === (7))){
var inst_34491 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34497_35606 = state_34495__$1;
(statearr_34497_35606[(2)] = inst_34491);

(statearr_34497_35606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (1))){
var inst_34458 = (new Array(n));
var inst_34459 = inst_34458;
var inst_34460 = (0);
var state_34495__$1 = (function (){var statearr_34498 = state_34495;
(statearr_34498[(7)] = inst_34460);

(statearr_34498[(8)] = inst_34459);

return statearr_34498;
})();
var statearr_34499_35612 = state_34495__$1;
(statearr_34499_35612[(2)] = null);

(statearr_34499_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (4))){
var inst_34463 = (state_34495[(9)]);
var inst_34463__$1 = (state_34495[(2)]);
var inst_34464 = (inst_34463__$1 == null);
var inst_34465 = cljs.core.not(inst_34464);
var state_34495__$1 = (function (){var statearr_34500 = state_34495;
(statearr_34500[(9)] = inst_34463__$1);

return statearr_34500;
})();
if(inst_34465){
var statearr_34501_35614 = state_34495__$1;
(statearr_34501_35614[(1)] = (5));

} else {
var statearr_34502_35616 = state_34495__$1;
(statearr_34502_35616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (15))){
var inst_34485 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34503_35617 = state_34495__$1;
(statearr_34503_35617[(2)] = inst_34485);

(statearr_34503_35617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (13))){
var state_34495__$1 = state_34495;
var statearr_34504_35618 = state_34495__$1;
(statearr_34504_35618[(2)] = null);

(statearr_34504_35618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (6))){
var inst_34460 = (state_34495[(7)]);
var inst_34481 = (inst_34460 > (0));
var state_34495__$1 = state_34495;
if(cljs.core.truth_(inst_34481)){
var statearr_34505_35619 = state_34495__$1;
(statearr_34505_35619[(1)] = (12));

} else {
var statearr_34506_35623 = state_34495__$1;
(statearr_34506_35623[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (3))){
var inst_34493 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34495__$1,inst_34493);
} else {
if((state_val_34496 === (12))){
var inst_34459 = (state_34495[(8)]);
var inst_34483 = cljs.core.vec(inst_34459);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34495__$1,(15),out,inst_34483);
} else {
if((state_val_34496 === (2))){
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34495__$1,(4),ch);
} else {
if((state_val_34496 === (11))){
var inst_34475 = (state_34495[(2)]);
var inst_34476 = (new Array(n));
var inst_34459 = inst_34476;
var inst_34460 = (0);
var state_34495__$1 = (function (){var statearr_34507 = state_34495;
(statearr_34507[(10)] = inst_34475);

(statearr_34507[(7)] = inst_34460);

(statearr_34507[(8)] = inst_34459);

return statearr_34507;
})();
var statearr_34508_35625 = state_34495__$1;
(statearr_34508_35625[(2)] = null);

(statearr_34508_35625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (9))){
var inst_34459 = (state_34495[(8)]);
var inst_34473 = cljs.core.vec(inst_34459);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34495__$1,(11),out,inst_34473);
} else {
if((state_val_34496 === (5))){
var inst_34463 = (state_34495[(9)]);
var inst_34460 = (state_34495[(7)]);
var inst_34468 = (state_34495[(11)]);
var inst_34459 = (state_34495[(8)]);
var inst_34467 = (inst_34459[inst_34460] = inst_34463);
var inst_34468__$1 = (inst_34460 + (1));
var inst_34469 = (inst_34468__$1 < n);
var state_34495__$1 = (function (){var statearr_34509 = state_34495;
(statearr_34509[(12)] = inst_34467);

(statearr_34509[(11)] = inst_34468__$1);

return statearr_34509;
})();
if(cljs.core.truth_(inst_34469)){
var statearr_34510_35629 = state_34495__$1;
(statearr_34510_35629[(1)] = (8));

} else {
var statearr_34511_35630 = state_34495__$1;
(statearr_34511_35630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (14))){
var inst_34488 = (state_34495[(2)]);
var inst_34489 = cljs.core.async.close_BANG_(out);
var state_34495__$1 = (function (){var statearr_34513 = state_34495;
(statearr_34513[(13)] = inst_34488);

return statearr_34513;
})();
var statearr_34514_35631 = state_34495__$1;
(statearr_34514_35631[(2)] = inst_34489);

(statearr_34514_35631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (10))){
var inst_34479 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34515_35632 = state_34495__$1;
(statearr_34515_35632[(2)] = inst_34479);

(statearr_34515_35632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (8))){
var inst_34468 = (state_34495[(11)]);
var inst_34459 = (state_34495[(8)]);
var tmp34512 = inst_34459;
var inst_34459__$1 = tmp34512;
var inst_34460 = inst_34468;
var state_34495__$1 = (function (){var statearr_34518 = state_34495;
(statearr_34518[(7)] = inst_34460);

(statearr_34518[(8)] = inst_34459__$1);

return statearr_34518;
})();
var statearr_34523_35637 = state_34495__$1;
(statearr_34523_35637[(2)] = null);

(statearr_34523_35637[(1)] = (2));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_34527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34527[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_34527[(1)] = (1));

return statearr_34527;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_34495){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34495);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34530){var ex__32152__auto__ = e34530;
var statearr_34531_35638 = state_34495;
(statearr_34531_35638[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34495[(4)]))){
var statearr_34532_35639 = state_34495;
(statearr_34532_35639[(1)] = cljs.core.first((state_34495[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35641 = state_34495;
state_34495 = G__35641;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34533 = f__32334__auto__();
(statearr_34533[(6)] = c__32333__auto___35605);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34535 = arguments.length;
switch (G__34535) {
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
var c__32333__auto___35646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_34580){
var state_val_34581 = (state_34580[(1)]);
if((state_val_34581 === (7))){
var inst_34576 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34582_35647 = state_34580__$1;
(statearr_34582_35647[(2)] = inst_34576);

(statearr_34582_35647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (1))){
var inst_34536 = [];
var inst_34537 = inst_34536;
var inst_34538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34580__$1 = (function (){var statearr_34583 = state_34580;
(statearr_34583[(7)] = inst_34538);

(statearr_34583[(8)] = inst_34537);

return statearr_34583;
})();
var statearr_34584_35648 = state_34580__$1;
(statearr_34584_35648[(2)] = null);

(statearr_34584_35648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (4))){
var inst_34541 = (state_34580[(9)]);
var inst_34541__$1 = (state_34580[(2)]);
var inst_34542 = (inst_34541__$1 == null);
var inst_34543 = cljs.core.not(inst_34542);
var state_34580__$1 = (function (){var statearr_34585 = state_34580;
(statearr_34585[(9)] = inst_34541__$1);

return statearr_34585;
})();
if(inst_34543){
var statearr_34587_35649 = state_34580__$1;
(statearr_34587_35649[(1)] = (5));

} else {
var statearr_34588_35652 = state_34580__$1;
(statearr_34588_35652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (15))){
var inst_34537 = (state_34580[(8)]);
var inst_34568 = cljs.core.vec(inst_34537);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34580__$1,(18),out,inst_34568);
} else {
if((state_val_34581 === (13))){
var inst_34563 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34590_35655 = state_34580__$1;
(statearr_34590_35655[(2)] = inst_34563);

(statearr_34590_35655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (6))){
var inst_34537 = (state_34580[(8)]);
var inst_34565 = inst_34537.length;
var inst_34566 = (inst_34565 > (0));
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34566)){
var statearr_34593_35656 = state_34580__$1;
(statearr_34593_35656[(1)] = (15));

} else {
var statearr_34594_35657 = state_34580__$1;
(statearr_34594_35657[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (17))){
var inst_34573 = (state_34580[(2)]);
var inst_34574 = cljs.core.async.close_BANG_(out);
var state_34580__$1 = (function (){var statearr_34596 = state_34580;
(statearr_34596[(10)] = inst_34573);

return statearr_34596;
})();
var statearr_34597_35659 = state_34580__$1;
(statearr_34597_35659[(2)] = inst_34574);

(statearr_34597_35659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (3))){
var inst_34578 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34580__$1,inst_34578);
} else {
if((state_val_34581 === (12))){
var inst_34537 = (state_34580[(8)]);
var inst_34556 = cljs.core.vec(inst_34537);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34580__$1,(14),out,inst_34556);
} else {
if((state_val_34581 === (2))){
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34580__$1,(4),ch);
} else {
if((state_val_34581 === (11))){
var inst_34545 = (state_34580[(11)]);
var inst_34541 = (state_34580[(9)]);
var inst_34537 = (state_34580[(8)]);
var inst_34553 = inst_34537.push(inst_34541);
var tmp34599 = inst_34537;
var inst_34537__$1 = tmp34599;
var inst_34538 = inst_34545;
var state_34580__$1 = (function (){var statearr_34601 = state_34580;
(statearr_34601[(7)] = inst_34538);

(statearr_34601[(12)] = inst_34553);

(statearr_34601[(8)] = inst_34537__$1);

return statearr_34601;
})();
var statearr_34603_35672 = state_34580__$1;
(statearr_34603_35672[(2)] = null);

(statearr_34603_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (9))){
var inst_34538 = (state_34580[(7)]);
var inst_34549 = cljs.core.keyword_identical_QMARK_(inst_34538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34580__$1 = state_34580;
var statearr_34604_35673 = state_34580__$1;
(statearr_34604_35673[(2)] = inst_34549);

(statearr_34604_35673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (5))){
var inst_34538 = (state_34580[(7)]);
var inst_34546 = (state_34580[(13)]);
var inst_34545 = (state_34580[(11)]);
var inst_34541 = (state_34580[(9)]);
var inst_34545__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34541) : f.call(null,inst_34541));
var inst_34546__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34545__$1,inst_34538);
var state_34580__$1 = (function (){var statearr_34605 = state_34580;
(statearr_34605[(13)] = inst_34546__$1);

(statearr_34605[(11)] = inst_34545__$1);

return statearr_34605;
})();
if(inst_34546__$1){
var statearr_34606_35674 = state_34580__$1;
(statearr_34606_35674[(1)] = (8));

} else {
var statearr_34607_35675 = state_34580__$1;
(statearr_34607_35675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (14))){
var inst_34545 = (state_34580[(11)]);
var inst_34541 = (state_34580[(9)]);
var inst_34558 = (state_34580[(2)]);
var inst_34559 = [];
var inst_34560 = inst_34559.push(inst_34541);
var inst_34537 = inst_34559;
var inst_34538 = inst_34545;
var state_34580__$1 = (function (){var statearr_34608 = state_34580;
(statearr_34608[(14)] = inst_34560);

(statearr_34608[(15)] = inst_34558);

(statearr_34608[(7)] = inst_34538);

(statearr_34608[(8)] = inst_34537);

return statearr_34608;
})();
var statearr_34609_35681 = state_34580__$1;
(statearr_34609_35681[(2)] = null);

(statearr_34609_35681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (16))){
var state_34580__$1 = state_34580;
var statearr_34610_35682 = state_34580__$1;
(statearr_34610_35682[(2)] = null);

(statearr_34610_35682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (10))){
var inst_34551 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34551)){
var statearr_34611_35688 = state_34580__$1;
(statearr_34611_35688[(1)] = (11));

} else {
var statearr_34612_35689 = state_34580__$1;
(statearr_34612_35689[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (18))){
var inst_34570 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34613_35696 = state_34580__$1;
(statearr_34613_35696[(2)] = inst_34570);

(statearr_34613_35696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (8))){
var inst_34546 = (state_34580[(13)]);
var state_34580__$1 = state_34580;
var statearr_34614_35697 = state_34580__$1;
(statearr_34614_35697[(2)] = inst_34546);

(statearr_34614_35697[(1)] = (10));


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
var cljs$core$async$state_machine__32149__auto__ = null;
var cljs$core$async$state_machine__32149__auto____0 = (function (){
var statearr_34615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34615[(0)] = cljs$core$async$state_machine__32149__auto__);

(statearr_34615[(1)] = (1));

return statearr_34615;
});
var cljs$core$async$state_machine__32149__auto____1 = (function (state_34580){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_34580);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e34616){var ex__32152__auto__ = e34616;
var statearr_34617_35709 = state_34580;
(statearr_34617_35709[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_34580[(4)]))){
var statearr_34618_35710 = state_34580;
(statearr_34618_35710[(1)] = cljs.core.first((state_34580[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35711 = state_34580;
state_34580 = G__35711;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
cljs$core$async$state_machine__32149__auto__ = function(state_34580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32149__auto____1.call(this,state_34580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32149__auto____0;
cljs$core$async$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32149__auto____1;
return cljs$core$async$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_34619 = f__32334__auto__();
(statearr_34619[(6)] = c__32333__auto___35646);

return statearr_34619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
