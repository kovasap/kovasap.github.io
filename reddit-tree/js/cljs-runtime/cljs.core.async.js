goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31850 = arguments.length;
switch (G__31850) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31855 = (function (f,blockable,meta31856){
this.f = f;
this.blockable = blockable;
this.meta31856 = meta31856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31857,meta31856__$1){
var self__ = this;
var _31857__$1 = this;
return (new cljs.core.async.t_cljs$core$async31855(self__.f,self__.blockable,meta31856__$1));
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31857){
var self__ = this;
var _31857__$1 = this;
return self__.meta31856;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31856","meta31856",511832241,null)], null);
}));

(cljs.core.async.t_cljs$core$async31855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31855");

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31855.
 */
cljs.core.async.__GT_t_cljs$core$async31855 = (function cljs$core$async$__GT_t_cljs$core$async31855(f__$1,blockable__$1,meta31856){
return (new cljs.core.async.t_cljs$core$async31855(f__$1,blockable__$1,meta31856));
});

}

return (new cljs.core.async.t_cljs$core$async31855(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31914 = arguments.length;
switch (G__31914) {
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
var G__31932 = arguments.length;
switch (G__31932) {
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
var G__31956 = arguments.length;
switch (G__31956) {
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
var val_34516 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34516) : fn1.call(null,val_34516));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34516) : fn1.call(null,val_34516));
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
var G__31993 = arguments.length;
switch (G__31993) {
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
var n__4695__auto___34522 = n;
var x_34523 = (0);
while(true){
if((x_34523 < n__4695__auto___34522)){
(a[x_34523] = x_34523);

var G__34524 = (x_34523 + (1));
x_34523 = G__34524;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32015 = (function (flag,meta32016){
this.flag = flag;
this.meta32016 = meta32016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32017,meta32016__$1){
var self__ = this;
var _32017__$1 = this;
return (new cljs.core.async.t_cljs$core$async32015(self__.flag,meta32016__$1));
}));

(cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32017){
var self__ = this;
var _32017__$1 = this;
return self__.meta32016;
}));

(cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32016","meta32016",1875920146,null)], null);
}));

(cljs.core.async.t_cljs$core$async32015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32015");

(cljs.core.async.t_cljs$core$async32015.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32015.
 */
cljs.core.async.__GT_t_cljs$core$async32015 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32015(flag__$1,meta32016){
return (new cljs.core.async.t_cljs$core$async32015(flag__$1,meta32016));
});

}

return (new cljs.core.async.t_cljs$core$async32015(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32038 = (function (flag,cb,meta32039){
this.flag = flag;
this.cb = cb;
this.meta32039 = meta32039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32040,meta32039__$1){
var self__ = this;
var _32040__$1 = this;
return (new cljs.core.async.t_cljs$core$async32038(self__.flag,self__.cb,meta32039__$1));
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32040){
var self__ = this;
var _32040__$1 = this;
return self__.meta32039;
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32039","meta32039",1060317879,null)], null);
}));

(cljs.core.async.t_cljs$core$async32038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32038");

(cljs.core.async.t_cljs$core$async32038.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32038.
 */
cljs.core.async.__GT_t_cljs$core$async32038 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32038(flag__$1,cb__$1,meta32039){
return (new cljs.core.async.t_cljs$core$async32038(flag__$1,cb__$1,meta32039));
});

}

return (new cljs.core.async.t_cljs$core$async32038(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32045_SHARP_){
var G__32049 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32045_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32049) : fret.call(null,G__32049));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32046_SHARP_){
var G__32050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32046_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32050) : fret.call(null,G__32050));
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
var G__34532 = (i + (1));
i = G__34532;
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
var len__4818__auto___34533 = arguments.length;
var i__4819__auto___34534 = (0);
while(true){
if((i__4819__auto___34534 < len__4818__auto___34533)){
args__4824__auto__.push((arguments[i__4819__auto___34534]));

var G__34535 = (i__4819__auto___34534 + (1));
i__4819__auto___34534 = G__34535;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32055){
var map__32056 = p__32055;
var map__32056__$1 = cljs.core.__destructure_map(map__32056);
var opts = map__32056__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32053){
var G__32054 = cljs.core.first(seq32053);
var seq32053__$1 = cljs.core.next(seq32053);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32054,seq32053__$1);
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
var G__32060 = arguments.length;
switch (G__32060) {
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
var c__31770__auto___34537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32088){
var state_val_32089 = (state_32088[(1)]);
if((state_val_32089 === (7))){
var inst_32084 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32095_34538 = state_32088__$1;
(statearr_32095_34538[(2)] = inst_32084);

(statearr_32095_34538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (1))){
var state_32088__$1 = state_32088;
var statearr_32096_34539 = state_32088__$1;
(statearr_32096_34539[(2)] = null);

(statearr_32096_34539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (4))){
var inst_32065 = (state_32088[(7)]);
var inst_32065__$1 = (state_32088[(2)]);
var inst_32066 = (inst_32065__$1 == null);
var state_32088__$1 = (function (){var statearr_32097 = state_32088;
(statearr_32097[(7)] = inst_32065__$1);

return statearr_32097;
})();
if(cljs.core.truth_(inst_32066)){
var statearr_32098_34541 = state_32088__$1;
(statearr_32098_34541[(1)] = (5));

} else {
var statearr_32099_34542 = state_32088__$1;
(statearr_32099_34542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (13))){
var state_32088__$1 = state_32088;
var statearr_32100_34543 = state_32088__$1;
(statearr_32100_34543[(2)] = null);

(statearr_32100_34543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (6))){
var inst_32065 = (state_32088[(7)]);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32088__$1,(11),to,inst_32065);
} else {
if((state_val_32089 === (3))){
var inst_32086 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32088__$1,inst_32086);
} else {
if((state_val_32089 === (12))){
var state_32088__$1 = state_32088;
var statearr_32103_34545 = state_32088__$1;
(statearr_32103_34545[(2)] = null);

(statearr_32103_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (2))){
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32088__$1,(4),from);
} else {
if((state_val_32089 === (11))){
var inst_32075 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
if(cljs.core.truth_(inst_32075)){
var statearr_32104_34546 = state_32088__$1;
(statearr_32104_34546[(1)] = (12));

} else {
var statearr_32105_34547 = state_32088__$1;
(statearr_32105_34547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (9))){
var state_32088__$1 = state_32088;
var statearr_32106_34548 = state_32088__$1;
(statearr_32106_34548[(2)] = null);

(statearr_32106_34548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (5))){
var state_32088__$1 = state_32088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32107_34549 = state_32088__$1;
(statearr_32107_34549[(1)] = (8));

} else {
var statearr_32108_34550 = state_32088__$1;
(statearr_32108_34550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (14))){
var inst_32082 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32109_34551 = state_32088__$1;
(statearr_32109_34551[(2)] = inst_32082);

(statearr_32109_34551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (10))){
var inst_32072 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32110_34552 = state_32088__$1;
(statearr_32110_34552[(2)] = inst_32072);

(statearr_32110_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (8))){
var inst_32069 = cljs.core.async.close_BANG_(to);
var state_32088__$1 = state_32088;
var statearr_32111_34553 = state_32088__$1;
(statearr_32111_34553[(2)] = inst_32069);

(statearr_32111_34553[(1)] = (10));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_32112 = [null,null,null,null,null,null,null,null];
(statearr_32112[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_32112[(1)] = (1));

return statearr_32112;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_32088){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32088);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32113){var ex__31467__auto__ = e32113;
var statearr_32114_34554 = state_32088;
(statearr_32114_34554[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32088[(4)]))){
var statearr_32115_34555 = state_32088;
(statearr_32115_34555[(1)] = cljs.core.first((state_32088[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34556 = state_32088;
state_32088 = G__34556;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_32088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_32088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32116 = f__31771__auto__();
(statearr_32116[(6)] = c__31770__auto___34537);

return statearr_32116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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
var process = (function (p__32117){
var vec__32118 = p__32117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32118,(1),null);
var job = vec__32118;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31770__auto___34559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32126){
var state_val_32127 = (state_32126[(1)]);
if((state_val_32127 === (1))){
var state_32126__$1 = state_32126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32126__$1,(2),res,v);
} else {
if((state_val_32127 === (2))){
var inst_32123 = (state_32126[(2)]);
var inst_32124 = cljs.core.async.close_BANG_(res);
var state_32126__$1 = (function (){var statearr_32128 = state_32126;
(statearr_32128[(7)] = inst_32123);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32126__$1,inst_32124);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1 = (function (state_32126){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32126);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32130){var ex__31467__auto__ = e32130;
var statearr_32131_34561 = state_32126;
(statearr_32131_34561[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32126[(4)]))){
var statearr_32132_34562 = state_32126;
(statearr_32132_34562[(1)] = cljs.core.first((state_32126[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_32126;
state_32126 = G__34563;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = function(state_32126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1.call(this,state_32126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32133 = f__31771__auto__();
(statearr_32133[(6)] = c__31770__auto___34559);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32137){
var vec__32138 = p__32137;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32138,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32138,(1),null);
var job = vec__32138;
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
var n__4695__auto___34565 = n;
var __34566 = (0);
while(true){
if((__34566 < n__4695__auto___34565)){
var G__32141_34567 = type;
var G__32141_34568__$1 = (((G__32141_34567 instanceof cljs.core.Keyword))?G__32141_34567.fqn:null);
switch (G__32141_34568__$1) {
case "compute":
var c__31770__auto___34570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34566,c__31770__auto___34570,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async){
return (function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = ((function (__34566,c__31770__auto___34570,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async){
return (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (1))){
var state_32156__$1 = state_32156;
var statearr_32162_34571 = state_32156__$1;
(statearr_32162_34571[(2)] = null);

(statearr_32162_34571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (2))){
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32156__$1,(4),jobs);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (4))){
var inst_32146 = (state_32156[(2)]);
var inst_32147 = process(inst_32146);
var state_32156__$1 = state_32156;
if(cljs.core.truth_(inst_32147)){
var statearr_32167_34572 = state_32156__$1;
(statearr_32167_34572[(1)] = (5));

} else {
var statearr_32168_34573 = state_32156__$1;
(statearr_32168_34573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (5))){
var state_32156__$1 = state_32156;
var statearr_32169_34574 = state_32156__$1;
(statearr_32169_34574[(2)] = null);

(statearr_32169_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (6))){
var state_32156__$1 = state_32156;
var statearr_32170_34575 = state_32156__$1;
(statearr_32170_34575[(2)] = null);

(statearr_32170_34575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (7))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32171_34576 = state_32156__$1;
(statearr_32171_34576[(2)] = inst_32152);

(statearr_32171_34576[(1)] = (3));


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
});})(__34566,c__31770__auto___34570,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async))
;
return ((function (__34566,switch__31463__auto__,c__31770__auto___34570,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0 = (function (){
var statearr_32172 = [null,null,null,null,null,null,null];
(statearr_32172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__);

(statearr_32172[(1)] = (1));

return statearr_32172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1 = (function (state_32156){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32156);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32173){var ex__31467__auto__ = e32173;
var statearr_32174_34577 = state_32156;
(statearr_32174_34577[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32156[(4)]))){
var statearr_32175_34578 = state_32156;
(statearr_32175_34578[(1)] = cljs.core.first((state_32156[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_32156;
state_32156 = G__34579;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__;
})()
;})(__34566,switch__31463__auto__,c__31770__auto___34570,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async))
})();
var state__31772__auto__ = (function (){var statearr_32176 = f__31771__auto__();
(statearr_32176[(6)] = c__31770__auto___34570);

return statearr_32176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
});})(__34566,c__31770__auto___34570,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async))
);


break;
case "async":
var c__31770__auto___34580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34566,c__31770__auto___34580,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async){
return (function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = ((function (__34566,c__31770__auto___34580,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async){
return (function (state_32189){
var state_val_32190 = (state_32189[(1)]);
if((state_val_32190 === (1))){
var state_32189__$1 = state_32189;
var statearr_32191_34581 = state_32189__$1;
(statearr_32191_34581[(2)] = null);

(statearr_32191_34581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (2))){
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32189__$1,(4),jobs);
} else {
if((state_val_32190 === (3))){
var inst_32187 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32189__$1,inst_32187);
} else {
if((state_val_32190 === (4))){
var inst_32179 = (state_32189[(2)]);
var inst_32180 = async(inst_32179);
var state_32189__$1 = state_32189;
if(cljs.core.truth_(inst_32180)){
var statearr_32192_34582 = state_32189__$1;
(statearr_32192_34582[(1)] = (5));

} else {
var statearr_32193_34583 = state_32189__$1;
(statearr_32193_34583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (5))){
var state_32189__$1 = state_32189;
var statearr_32194_34584 = state_32189__$1;
(statearr_32194_34584[(2)] = null);

(statearr_32194_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (6))){
var state_32189__$1 = state_32189;
var statearr_32195_34585 = state_32189__$1;
(statearr_32195_34585[(2)] = null);

(statearr_32195_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (7))){
var inst_32185 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
var statearr_32196_34586 = state_32189__$1;
(statearr_32196_34586[(2)] = inst_32185);

(statearr_32196_34586[(1)] = (3));


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
});})(__34566,c__31770__auto___34580,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async))
;
return ((function (__34566,switch__31463__auto__,c__31770__auto___34580,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0 = (function (){
var statearr_32197 = [null,null,null,null,null,null,null];
(statearr_32197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__);

(statearr_32197[(1)] = (1));

return statearr_32197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1 = (function (state_32189){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32189);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32198){var ex__31467__auto__ = e32198;
var statearr_32199_34587 = state_32189;
(statearr_32199_34587[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32189[(4)]))){
var statearr_32200_34588 = state_32189;
(statearr_32200_34588[(1)] = cljs.core.first((state_32189[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34589 = state_32189;
state_32189 = G__34589;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = function(state_32189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1.call(this,state_32189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__;
})()
;})(__34566,switch__31463__auto__,c__31770__auto___34580,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async))
})();
var state__31772__auto__ = (function (){var statearr_32202 = f__31771__auto__();
(statearr_32202[(6)] = c__31770__auto___34580);

return statearr_32202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
});})(__34566,c__31770__auto___34580,G__32141_34567,G__32141_34568__$1,n__4695__auto___34565,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32141_34568__$1)].join('')));

}

var G__34590 = (__34566 + (1));
__34566 = G__34590;
continue;
} else {
}
break;
}

var c__31770__auto___34591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32243){
var state_val_32245 = (state_32243[(1)]);
if((state_val_32245 === (7))){
var inst_32232 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32270_34592 = state_32243__$1;
(statearr_32270_34592[(2)] = inst_32232);

(statearr_32270_34592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (1))){
var state_32243__$1 = state_32243;
var statearr_32277_34593 = state_32243__$1;
(statearr_32277_34593[(2)] = null);

(statearr_32277_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (4))){
var inst_32207 = (state_32243[(7)]);
var inst_32207__$1 = (state_32243[(2)]);
var inst_32208 = (inst_32207__$1 == null);
var state_32243__$1 = (function (){var statearr_32289 = state_32243;
(statearr_32289[(7)] = inst_32207__$1);

return statearr_32289;
})();
if(cljs.core.truth_(inst_32208)){
var statearr_32296_34594 = state_32243__$1;
(statearr_32296_34594[(1)] = (5));

} else {
var statearr_32298_34595 = state_32243__$1;
(statearr_32298_34595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (6))){
var inst_32214 = (state_32243[(8)]);
var inst_32207 = (state_32243[(7)]);
var inst_32214__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32223 = [inst_32207,inst_32214__$1];
var inst_32224 = (new cljs.core.PersistentVector(null,2,(5),inst_32220,inst_32223,null));
var state_32243__$1 = (function (){var statearr_32302 = state_32243;
(statearr_32302[(8)] = inst_32214__$1);

return statearr_32302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32243__$1,(8),jobs,inst_32224);
} else {
if((state_val_32245 === (3))){
var inst_32238 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32243__$1,inst_32238);
} else {
if((state_val_32245 === (2))){
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32243__$1,(4),from);
} else {
if((state_val_32245 === (9))){
var inst_32229 = (state_32243[(2)]);
var state_32243__$1 = (function (){var statearr_32309 = state_32243;
(statearr_32309[(9)] = inst_32229);

return statearr_32309;
})();
var statearr_32312_34598 = state_32243__$1;
(statearr_32312_34598[(2)] = null);

(statearr_32312_34598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (5))){
var inst_32210 = cljs.core.async.close_BANG_(jobs);
var state_32243__$1 = state_32243;
var statearr_32314_34599 = state_32243__$1;
(statearr_32314_34599[(2)] = inst_32210);

(statearr_32314_34599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (8))){
var inst_32214 = (state_32243[(8)]);
var inst_32227 = (state_32243[(2)]);
var state_32243__$1 = (function (){var statearr_32315 = state_32243;
(statearr_32315[(10)] = inst_32227);

return statearr_32315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32243__$1,(9),results,inst_32214);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0 = (function (){
var statearr_32324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__);

(statearr_32324[(1)] = (1));

return statearr_32324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1 = (function (state_32243){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32243);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32330){var ex__31467__auto__ = e32330;
var statearr_32331_34600 = state_32243;
(statearr_32331_34600[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32243[(4)]))){
var statearr_32333_34601 = state_32243;
(statearr_32333_34601[(1)] = cljs.core.first((state_32243[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_32243;
state_32243 = G__34602;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32338 = f__31771__auto__();
(statearr_32338[(6)] = c__31770__auto___34591);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


var c__31770__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32381){
var state_val_32382 = (state_32381[(1)]);
if((state_val_32382 === (7))){
var inst_32377 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32394_34605 = state_32381__$1;
(statearr_32394_34605[(2)] = inst_32377);

(statearr_32394_34605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (20))){
var state_32381__$1 = state_32381;
var statearr_32403_34606 = state_32381__$1;
(statearr_32403_34606[(2)] = null);

(statearr_32403_34606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (1))){
var state_32381__$1 = state_32381;
var statearr_32404_34607 = state_32381__$1;
(statearr_32404_34607[(2)] = null);

(statearr_32404_34607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (4))){
var inst_32341 = (state_32381[(7)]);
var inst_32341__$1 = (state_32381[(2)]);
var inst_32342 = (inst_32341__$1 == null);
var state_32381__$1 = (function (){var statearr_32405 = state_32381;
(statearr_32405[(7)] = inst_32341__$1);

return statearr_32405;
})();
if(cljs.core.truth_(inst_32342)){
var statearr_32406_34611 = state_32381__$1;
(statearr_32406_34611[(1)] = (5));

} else {
var statearr_32407_34612 = state_32381__$1;
(statearr_32407_34612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (15))){
var inst_32355 = (state_32381[(8)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32381__$1,(18),to,inst_32355);
} else {
if((state_val_32382 === (21))){
var inst_32372 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32408_34613 = state_32381__$1;
(statearr_32408_34613[(2)] = inst_32372);

(statearr_32408_34613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (13))){
var inst_32374 = (state_32381[(2)]);
var state_32381__$1 = (function (){var statearr_32409 = state_32381;
(statearr_32409[(9)] = inst_32374);

return statearr_32409;
})();
var statearr_32412_34614 = state_32381__$1;
(statearr_32412_34614[(2)] = null);

(statearr_32412_34614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (6))){
var inst_32341 = (state_32381[(7)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32381__$1,(11),inst_32341);
} else {
if((state_val_32382 === (17))){
var inst_32367 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
if(cljs.core.truth_(inst_32367)){
var statearr_32414_34615 = state_32381__$1;
(statearr_32414_34615[(1)] = (19));

} else {
var statearr_32415_34616 = state_32381__$1;
(statearr_32415_34616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (3))){
var inst_32379 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32381__$1,inst_32379);
} else {
if((state_val_32382 === (12))){
var inst_32351 = (state_32381[(10)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32381__$1,(14),inst_32351);
} else {
if((state_val_32382 === (2))){
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32381__$1,(4),results);
} else {
if((state_val_32382 === (19))){
var state_32381__$1 = state_32381;
var statearr_32420_34617 = state_32381__$1;
(statearr_32420_34617[(2)] = null);

(statearr_32420_34617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (11))){
var inst_32351 = (state_32381[(2)]);
var state_32381__$1 = (function (){var statearr_32421 = state_32381;
(statearr_32421[(10)] = inst_32351);

return statearr_32421;
})();
var statearr_32422_34618 = state_32381__$1;
(statearr_32422_34618[(2)] = null);

(statearr_32422_34618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (9))){
var state_32381__$1 = state_32381;
var statearr_32426_34619 = state_32381__$1;
(statearr_32426_34619[(2)] = null);

(statearr_32426_34619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (5))){
var state_32381__$1 = state_32381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32427_34620 = state_32381__$1;
(statearr_32427_34620[(1)] = (8));

} else {
var statearr_32428_34621 = state_32381__$1;
(statearr_32428_34621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (14))){
var inst_32355 = (state_32381[(8)]);
var inst_32361 = (state_32381[(11)]);
var inst_32355__$1 = (state_32381[(2)]);
var inst_32360 = (inst_32355__$1 == null);
var inst_32361__$1 = cljs.core.not(inst_32360);
var state_32381__$1 = (function (){var statearr_32429 = state_32381;
(statearr_32429[(8)] = inst_32355__$1);

(statearr_32429[(11)] = inst_32361__$1);

return statearr_32429;
})();
if(inst_32361__$1){
var statearr_32430_34623 = state_32381__$1;
(statearr_32430_34623[(1)] = (15));

} else {
var statearr_32435_34624 = state_32381__$1;
(statearr_32435_34624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (16))){
var inst_32361 = (state_32381[(11)]);
var state_32381__$1 = state_32381;
var statearr_32436_34626 = state_32381__$1;
(statearr_32436_34626[(2)] = inst_32361);

(statearr_32436_34626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (10))){
var inst_32348 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32441_34629 = state_32381__$1;
(statearr_32441_34629[(2)] = inst_32348);

(statearr_32441_34629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (18))){
var inst_32364 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32442_34630 = state_32381__$1;
(statearr_32442_34630[(2)] = inst_32364);

(statearr_32442_34630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (8))){
var inst_32345 = cljs.core.async.close_BANG_(to);
var state_32381__$1 = state_32381;
var statearr_32444_34634 = state_32381__$1;
(statearr_32444_34634[(2)] = inst_32345);

(statearr_32444_34634[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0 = (function (){
var statearr_32445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__);

(statearr_32445[(1)] = (1));

return statearr_32445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1 = (function (state_32381){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32381);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32446){var ex__31467__auto__ = e32446;
var statearr_32447_34636 = state_32381;
(statearr_32447_34636[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32381[(4)]))){
var statearr_32448_34637 = state_32381;
(statearr_32448_34637[(1)] = cljs.core.first((state_32381[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34639 = state_32381;
state_32381 = G__34639;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__ = function(state_32381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1.call(this,state_32381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32450 = f__31771__auto__();
(statearr_32450[(6)] = c__31770__auto__);

return statearr_32450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));

return c__31770__auto__;
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
var G__32452 = arguments.length;
switch (G__32452) {
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
var G__32463 = arguments.length;
switch (G__32463) {
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
var G__32466 = arguments.length;
switch (G__32466) {
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
var c__31770__auto___34651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32498){
var state_val_32499 = (state_32498[(1)]);
if((state_val_32499 === (7))){
var inst_32494 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32500_34654 = state_32498__$1;
(statearr_32500_34654[(2)] = inst_32494);

(statearr_32500_34654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (1))){
var state_32498__$1 = state_32498;
var statearr_32503_34657 = state_32498__$1;
(statearr_32503_34657[(2)] = null);

(statearr_32503_34657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (4))){
var inst_32472 = (state_32498[(7)]);
var inst_32472__$1 = (state_32498[(2)]);
var inst_32474 = (inst_32472__$1 == null);
var state_32498__$1 = (function (){var statearr_32505 = state_32498;
(statearr_32505[(7)] = inst_32472__$1);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32474)){
var statearr_32510_34658 = state_32498__$1;
(statearr_32510_34658[(1)] = (5));

} else {
var statearr_32514_34659 = state_32498__$1;
(statearr_32514_34659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (13))){
var state_32498__$1 = state_32498;
var statearr_32515_34660 = state_32498__$1;
(statearr_32515_34660[(2)] = null);

(statearr_32515_34660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (6))){
var inst_32472 = (state_32498[(7)]);
var inst_32480 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32472) : p.call(null,inst_32472));
var state_32498__$1 = state_32498;
if(cljs.core.truth_(inst_32480)){
var statearr_32520_34661 = state_32498__$1;
(statearr_32520_34661[(1)] = (9));

} else {
var statearr_32521_34662 = state_32498__$1;
(statearr_32521_34662[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (3))){
var inst_32496 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32498__$1,inst_32496);
} else {
if((state_val_32499 === (12))){
var state_32498__$1 = state_32498;
var statearr_32525_34665 = state_32498__$1;
(statearr_32525_34665[(2)] = null);

(statearr_32525_34665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (2))){
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32498__$1,(4),ch);
} else {
if((state_val_32499 === (11))){
var inst_32472 = (state_32498[(7)]);
var inst_32484 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32498__$1,(8),inst_32484,inst_32472);
} else {
if((state_val_32499 === (9))){
var state_32498__$1 = state_32498;
var statearr_32529_34666 = state_32498__$1;
(statearr_32529_34666[(2)] = tc);

(statearr_32529_34666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (5))){
var inst_32476 = cljs.core.async.close_BANG_(tc);
var inst_32477 = cljs.core.async.close_BANG_(fc);
var state_32498__$1 = (function (){var statearr_32530 = state_32498;
(statearr_32530[(8)] = inst_32476);

return statearr_32530;
})();
var statearr_32531_34671 = state_32498__$1;
(statearr_32531_34671[(2)] = inst_32477);

(statearr_32531_34671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (14))){
var inst_32492 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32532_34673 = state_32498__$1;
(statearr_32532_34673[(2)] = inst_32492);

(statearr_32532_34673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (10))){
var state_32498__$1 = state_32498;
var statearr_32533_34675 = state_32498__$1;
(statearr_32533_34675[(2)] = fc);

(statearr_32533_34675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (8))){
var inst_32486 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
if(cljs.core.truth_(inst_32486)){
var statearr_32534_34676 = state_32498__$1;
(statearr_32534_34676[(1)] = (12));

} else {
var statearr_32535_34678 = state_32498__$1;
(statearr_32535_34678[(1)] = (13));

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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_32536 = [null,null,null,null,null,null,null,null,null];
(statearr_32536[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_32536[(1)] = (1));

return statearr_32536;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_32498){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32498);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32538){var ex__31467__auto__ = e32538;
var statearr_32540_34681 = state_32498;
(statearr_32540_34681[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32498[(4)]))){
var statearr_32541_34682 = state_32498;
(statearr_32541_34682[(1)] = cljs.core.first((state_32498[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34683 = state_32498;
state_32498 = G__34683;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_32498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_32498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32543 = f__31771__auto__();
(statearr_32543[(6)] = c__31770__auto___34651);

return statearr_32543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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
var c__31770__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32568){
var state_val_32569 = (state_32568[(1)]);
if((state_val_32569 === (7))){
var inst_32564 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32570_34684 = state_32568__$1;
(statearr_32570_34684[(2)] = inst_32564);

(statearr_32570_34684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (1))){
var inst_32547 = init;
var inst_32548 = inst_32547;
var state_32568__$1 = (function (){var statearr_32573 = state_32568;
(statearr_32573[(7)] = inst_32548);

return statearr_32573;
})();
var statearr_32574_34685 = state_32568__$1;
(statearr_32574_34685[(2)] = null);

(statearr_32574_34685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (4))){
var inst_32551 = (state_32568[(8)]);
var inst_32551__$1 = (state_32568[(2)]);
var inst_32552 = (inst_32551__$1 == null);
var state_32568__$1 = (function (){var statearr_32575 = state_32568;
(statearr_32575[(8)] = inst_32551__$1);

return statearr_32575;
})();
if(cljs.core.truth_(inst_32552)){
var statearr_32576_34693 = state_32568__$1;
(statearr_32576_34693[(1)] = (5));

} else {
var statearr_32577_34694 = state_32568__$1;
(statearr_32577_34694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (6))){
var inst_32555 = (state_32568[(9)]);
var inst_32551 = (state_32568[(8)]);
var inst_32548 = (state_32568[(7)]);
var inst_32555__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32548,inst_32551) : f.call(null,inst_32548,inst_32551));
var inst_32556 = cljs.core.reduced_QMARK_(inst_32555__$1);
var state_32568__$1 = (function (){var statearr_32582 = state_32568;
(statearr_32582[(9)] = inst_32555__$1);

return statearr_32582;
})();
if(inst_32556){
var statearr_32583_34701 = state_32568__$1;
(statearr_32583_34701[(1)] = (8));

} else {
var statearr_32584_34702 = state_32568__$1;
(statearr_32584_34702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (3))){
var inst_32566 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32568__$1,inst_32566);
} else {
if((state_val_32569 === (2))){
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32568__$1,(4),ch);
} else {
if((state_val_32569 === (9))){
var inst_32555 = (state_32568[(9)]);
var inst_32548 = inst_32555;
var state_32568__$1 = (function (){var statearr_32586 = state_32568;
(statearr_32586[(7)] = inst_32548);

return statearr_32586;
})();
var statearr_32587_34710 = state_32568__$1;
(statearr_32587_34710[(2)] = null);

(statearr_32587_34710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (5))){
var inst_32548 = (state_32568[(7)]);
var state_32568__$1 = state_32568;
var statearr_32588_34714 = state_32568__$1;
(statearr_32588_34714[(2)] = inst_32548);

(statearr_32588_34714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (10))){
var inst_32562 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32589_34715 = state_32568__$1;
(statearr_32589_34715[(2)] = inst_32562);

(statearr_32589_34715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (8))){
var inst_32555 = (state_32568[(9)]);
var inst_32558 = cljs.core.deref(inst_32555);
var state_32568__$1 = state_32568;
var statearr_32590_34717 = state_32568__$1;
(statearr_32590_34717[(2)] = inst_32558);

(statearr_32590_34717[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31464__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31464__auto____0 = (function (){
var statearr_32591 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32591[(0)] = cljs$core$async$reduce_$_state_machine__31464__auto__);

(statearr_32591[(1)] = (1));

return statearr_32591;
});
var cljs$core$async$reduce_$_state_machine__31464__auto____1 = (function (state_32568){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32568);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32592){var ex__31467__auto__ = e32592;
var statearr_32593_34720 = state_32568;
(statearr_32593_34720[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32568[(4)]))){
var statearr_32594_34726 = state_32568;
(statearr_32594_34726[(1)] = cljs.core.first((state_32568[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34730 = state_32568;
state_32568 = G__34730;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31464__auto__ = function(state_32568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31464__auto____1.call(this,state_32568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31464__auto____0;
cljs$core$async$reduce_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31464__auto____1;
return cljs$core$async$reduce_$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32595 = f__31771__auto__();
(statearr_32595[(6)] = c__31770__auto__);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));

return c__31770__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31770__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32601){
var state_val_32602 = (state_32601[(1)]);
if((state_val_32602 === (1))){
var inst_32596 = cljs.core.async.reduce(f__$1,init,ch);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32601__$1,(2),inst_32596);
} else {
if((state_val_32602 === (2))){
var inst_32598 = (state_32601[(2)]);
var inst_32599 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32598) : f__$1.call(null,inst_32598));
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32601__$1,inst_32599);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31464__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31464__auto____0 = (function (){
var statearr_32604 = [null,null,null,null,null,null,null];
(statearr_32604[(0)] = cljs$core$async$transduce_$_state_machine__31464__auto__);

(statearr_32604[(1)] = (1));

return statearr_32604;
});
var cljs$core$async$transduce_$_state_machine__31464__auto____1 = (function (state_32601){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32601);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32605){var ex__31467__auto__ = e32605;
var statearr_32606_34738 = state_32601;
(statearr_32606_34738[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32601[(4)]))){
var statearr_32607_34739 = state_32601;
(statearr_32607_34739[(1)] = cljs.core.first((state_32601[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34740 = state_32601;
state_32601 = G__34740;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31464__auto__ = function(state_32601){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31464__auto____1.call(this,state_32601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31464__auto____0;
cljs$core$async$transduce_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31464__auto____1;
return cljs$core$async$transduce_$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32611 = f__31771__auto__();
(statearr_32611[(6)] = c__31770__auto__);

return statearr_32611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));

return c__31770__auto__;
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
var G__32614 = arguments.length;
switch (G__32614) {
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
var c__31770__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_32671){
var state_val_32672 = (state_32671[(1)]);
if((state_val_32672 === (7))){
var inst_32652 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
var statearr_32689_34742 = state_32671__$1;
(statearr_32689_34742[(2)] = inst_32652);

(statearr_32689_34742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (1))){
var inst_32642 = cljs.core.seq(coll);
var inst_32643 = inst_32642;
var state_32671__$1 = (function (){var statearr_32699 = state_32671;
(statearr_32699[(7)] = inst_32643);

return statearr_32699;
})();
var statearr_32700_34745 = state_32671__$1;
(statearr_32700_34745[(2)] = null);

(statearr_32700_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (4))){
var inst_32643 = (state_32671[(7)]);
var inst_32650 = cljs.core.first(inst_32643);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32671__$1,(7),ch,inst_32650);
} else {
if((state_val_32672 === (13))){
var inst_32665 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
var statearr_32724_34752 = state_32671__$1;
(statearr_32724_34752[(2)] = inst_32665);

(statearr_32724_34752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (6))){
var inst_32655 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
if(cljs.core.truth_(inst_32655)){
var statearr_32730_34755 = state_32671__$1;
(statearr_32730_34755[(1)] = (8));

} else {
var statearr_32738_34756 = state_32671__$1;
(statearr_32738_34756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (3))){
var inst_32669 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32671__$1,inst_32669);
} else {
if((state_val_32672 === (12))){
var state_32671__$1 = state_32671;
var statearr_32749_34761 = state_32671__$1;
(statearr_32749_34761[(2)] = null);

(statearr_32749_34761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (2))){
var inst_32643 = (state_32671[(7)]);
var state_32671__$1 = state_32671;
if(cljs.core.truth_(inst_32643)){
var statearr_32753_34762 = state_32671__$1;
(statearr_32753_34762[(1)] = (4));

} else {
var statearr_32754_34763 = state_32671__$1;
(statearr_32754_34763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (11))){
var inst_32661 = cljs.core.async.close_BANG_(ch);
var state_32671__$1 = state_32671;
var statearr_32757_34764 = state_32671__$1;
(statearr_32757_34764[(2)] = inst_32661);

(statearr_32757_34764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (9))){
var state_32671__$1 = state_32671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32758_34765 = state_32671__$1;
(statearr_32758_34765[(1)] = (11));

} else {
var statearr_32759_34766 = state_32671__$1;
(statearr_32759_34766[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (5))){
var inst_32643 = (state_32671[(7)]);
var state_32671__$1 = state_32671;
var statearr_32762_34767 = state_32671__$1;
(statearr_32762_34767[(2)] = inst_32643);

(statearr_32762_34767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (10))){
var inst_32667 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
var statearr_32772_34768 = state_32671__$1;
(statearr_32772_34768[(2)] = inst_32667);

(statearr_32772_34768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (8))){
var inst_32643 = (state_32671[(7)]);
var inst_32657 = cljs.core.next(inst_32643);
var inst_32643__$1 = inst_32657;
var state_32671__$1 = (function (){var statearr_32784 = state_32671;
(statearr_32784[(7)] = inst_32643__$1);

return statearr_32784;
})();
var statearr_32785_34769 = state_32671__$1;
(statearr_32785_34769[(2)] = null);

(statearr_32785_34769[(1)] = (2));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_32791 = [null,null,null,null,null,null,null,null];
(statearr_32791[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_32791[(1)] = (1));

return statearr_32791;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_32671){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_32671);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e32792){var ex__31467__auto__ = e32792;
var statearr_32793_34770 = state_32671;
(statearr_32793_34770[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_32671[(4)]))){
var statearr_32794_34772 = state_32671;
(statearr_32794_34772[(1)] = cljs.core.first((state_32671[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34774 = state_32671;
state_32671 = G__34774;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_32671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_32671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_32795 = f__31771__auto__();
(statearr_32795[(6)] = c__31770__auto__);

return statearr_32795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));

return c__31770__auto__;
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
var G__32797 = arguments.length;
switch (G__32797) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34786 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34786(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34789 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34789(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34794 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34794(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34816 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34816(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32845 = (function (ch,cs,meta32846){
this.ch = ch;
this.cs = cs;
this.meta32846 = meta32846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32847,meta32846__$1){
var self__ = this;
var _32847__$1 = this;
return (new cljs.core.async.t_cljs$core$async32845(self__.ch,self__.cs,meta32846__$1));
}));

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32847){
var self__ = this;
var _32847__$1 = this;
return self__.meta32846;
}));

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32845.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32846","meta32846",1904872570,null)], null);
}));

(cljs.core.async.t_cljs$core$async32845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32845");

(cljs.core.async.t_cljs$core$async32845.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32845.
 */
cljs.core.async.__GT_t_cljs$core$async32845 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32845(ch__$1,cs__$1,meta32846){
return (new cljs.core.async.t_cljs$core$async32845(ch__$1,cs__$1,meta32846));
});

}

return (new cljs.core.async.t_cljs$core$async32845(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31770__auto___34842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_33023){
var state_val_33027 = (state_33023[(1)]);
if((state_val_33027 === (7))){
var inst_33019 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33032_34847 = state_33023__$1;
(statearr_33032_34847[(2)] = inst_33019);

(statearr_33032_34847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (20))){
var inst_32904 = (state_33023[(7)]);
var inst_32916 = cljs.core.first(inst_32904);
var inst_32919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32916,(0),null);
var inst_32925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32916,(1),null);
var state_33023__$1 = (function (){var statearr_33033 = state_33023;
(statearr_33033[(8)] = inst_32919);

return statearr_33033;
})();
if(cljs.core.truth_(inst_32925)){
var statearr_33034_34856 = state_33023__$1;
(statearr_33034_34856[(1)] = (22));

} else {
var statearr_33035_34859 = state_33023__$1;
(statearr_33035_34859[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (27))){
var inst_32957 = (state_33023[(9)]);
var inst_32959 = (state_33023[(10)]);
var inst_32868 = (state_33023[(11)]);
var inst_32965 = (state_33023[(12)]);
var inst_32965__$1 = cljs.core._nth(inst_32957,inst_32959);
var inst_32967 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32965__$1,inst_32868,done);
var state_33023__$1 = (function (){var statearr_33043 = state_33023;
(statearr_33043[(12)] = inst_32965__$1);

return statearr_33043;
})();
if(cljs.core.truth_(inst_32967)){
var statearr_33053_34869 = state_33023__$1;
(statearr_33053_34869[(1)] = (30));

} else {
var statearr_33055_34872 = state_33023__$1;
(statearr_33055_34872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (1))){
var state_33023__$1 = state_33023;
var statearr_33071_34875 = state_33023__$1;
(statearr_33071_34875[(2)] = null);

(statearr_33071_34875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (24))){
var inst_32904 = (state_33023[(7)]);
var inst_32933 = (state_33023[(2)]);
var inst_32934 = cljs.core.next(inst_32904);
var inst_32878 = inst_32934;
var inst_32879 = null;
var inst_32880 = (0);
var inst_32881 = (0);
var state_33023__$1 = (function (){var statearr_33072 = state_33023;
(statearr_33072[(13)] = inst_32879);

(statearr_33072[(14)] = inst_32878);

(statearr_33072[(15)] = inst_32881);

(statearr_33072[(16)] = inst_32880);

(statearr_33072[(17)] = inst_32933);

return statearr_33072;
})();
var statearr_33073_34884 = state_33023__$1;
(statearr_33073_34884[(2)] = null);

(statearr_33073_34884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (39))){
var state_33023__$1 = state_33023;
var statearr_33077_34886 = state_33023__$1;
(statearr_33077_34886[(2)] = null);

(statearr_33077_34886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (4))){
var inst_32868 = (state_33023[(11)]);
var inst_32868__$1 = (state_33023[(2)]);
var inst_32870 = (inst_32868__$1 == null);
var state_33023__$1 = (function (){var statearr_33078 = state_33023;
(statearr_33078[(11)] = inst_32868__$1);

return statearr_33078;
})();
if(cljs.core.truth_(inst_32870)){
var statearr_33080_34893 = state_33023__$1;
(statearr_33080_34893[(1)] = (5));

} else {
var statearr_33081_34897 = state_33023__$1;
(statearr_33081_34897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (15))){
var inst_32879 = (state_33023[(13)]);
var inst_32878 = (state_33023[(14)]);
var inst_32881 = (state_33023[(15)]);
var inst_32880 = (state_33023[(16)]);
var inst_32900 = (state_33023[(2)]);
var inst_32901 = (inst_32881 + (1));
var tmp33074 = inst_32879;
var tmp33075 = inst_32878;
var tmp33076 = inst_32880;
var inst_32878__$1 = tmp33075;
var inst_32879__$1 = tmp33074;
var inst_32880__$1 = tmp33076;
var inst_32881__$1 = inst_32901;
var state_33023__$1 = (function (){var statearr_33085 = state_33023;
(statearr_33085[(13)] = inst_32879__$1);

(statearr_33085[(14)] = inst_32878__$1);

(statearr_33085[(15)] = inst_32881__$1);

(statearr_33085[(18)] = inst_32900);

(statearr_33085[(16)] = inst_32880__$1);

return statearr_33085;
})();
var statearr_33087_34910 = state_33023__$1;
(statearr_33087_34910[(2)] = null);

(statearr_33087_34910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (21))){
var inst_32938 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33091_34917 = state_33023__$1;
(statearr_33091_34917[(2)] = inst_32938);

(statearr_33091_34917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (31))){
var inst_32965 = (state_33023[(12)]);
var inst_32973 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32965);
var state_33023__$1 = state_33023;
var statearr_33092_34920 = state_33023__$1;
(statearr_33092_34920[(2)] = inst_32973);

(statearr_33092_34920[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (32))){
var inst_32957 = (state_33023[(9)]);
var inst_32959 = (state_33023[(10)]);
var inst_32958 = (state_33023[(19)]);
var inst_32956 = (state_33023[(20)]);
var inst_32975 = (state_33023[(2)]);
var inst_32976 = (inst_32959 + (1));
var tmp33088 = inst_32957;
var tmp33089 = inst_32958;
var tmp33090 = inst_32956;
var inst_32956__$1 = tmp33090;
var inst_32957__$1 = tmp33088;
var inst_32958__$1 = tmp33089;
var inst_32959__$1 = inst_32976;
var state_33023__$1 = (function (){var statearr_33094 = state_33023;
(statearr_33094[(9)] = inst_32957__$1);

(statearr_33094[(10)] = inst_32959__$1);

(statearr_33094[(19)] = inst_32958__$1);

(statearr_33094[(21)] = inst_32975);

(statearr_33094[(20)] = inst_32956__$1);

return statearr_33094;
})();
var statearr_33095_34929 = state_33023__$1;
(statearr_33095_34929[(2)] = null);

(statearr_33095_34929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (40))){
var inst_32990 = (state_33023[(22)]);
var inst_32994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32990);
var state_33023__$1 = state_33023;
var statearr_33096_34933 = state_33023__$1;
(statearr_33096_34933[(2)] = inst_32994);

(statearr_33096_34933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (33))){
var inst_32979 = (state_33023[(23)]);
var inst_32982 = cljs.core.chunked_seq_QMARK_(inst_32979);
var state_33023__$1 = state_33023;
if(inst_32982){
var statearr_33097_34937 = state_33023__$1;
(statearr_33097_34937[(1)] = (36));

} else {
var statearr_33098_34939 = state_33023__$1;
(statearr_33098_34939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (13))){
var inst_32894 = (state_33023[(24)]);
var inst_32897 = cljs.core.async.close_BANG_(inst_32894);
var state_33023__$1 = state_33023;
var statearr_33111_34944 = state_33023__$1;
(statearr_33111_34944[(2)] = inst_32897);

(statearr_33111_34944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (22))){
var inst_32919 = (state_33023[(8)]);
var inst_32930 = cljs.core.async.close_BANG_(inst_32919);
var state_33023__$1 = state_33023;
var statearr_33120_34948 = state_33023__$1;
(statearr_33120_34948[(2)] = inst_32930);

(statearr_33120_34948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (36))){
var inst_32979 = (state_33023[(23)]);
var inst_32984 = cljs.core.chunk_first(inst_32979);
var inst_32986 = cljs.core.chunk_rest(inst_32979);
var inst_32987 = cljs.core.count(inst_32984);
var inst_32956 = inst_32986;
var inst_32957 = inst_32984;
var inst_32958 = inst_32987;
var inst_32959 = (0);
var state_33023__$1 = (function (){var statearr_33122 = state_33023;
(statearr_33122[(9)] = inst_32957);

(statearr_33122[(10)] = inst_32959);

(statearr_33122[(19)] = inst_32958);

(statearr_33122[(20)] = inst_32956);

return statearr_33122;
})();
var statearr_33123_34955 = state_33023__$1;
(statearr_33123_34955[(2)] = null);

(statearr_33123_34955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (41))){
var inst_32979 = (state_33023[(23)]);
var inst_32996 = (state_33023[(2)]);
var inst_32998 = cljs.core.next(inst_32979);
var inst_32956 = inst_32998;
var inst_32957 = null;
var inst_32958 = (0);
var inst_32959 = (0);
var state_33023__$1 = (function (){var statearr_33124 = state_33023;
(statearr_33124[(9)] = inst_32957);

(statearr_33124[(10)] = inst_32959);

(statearr_33124[(19)] = inst_32958);

(statearr_33124[(25)] = inst_32996);

(statearr_33124[(20)] = inst_32956);

return statearr_33124;
})();
var statearr_33125_34956 = state_33023__$1;
(statearr_33125_34956[(2)] = null);

(statearr_33125_34956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (43))){
var state_33023__$1 = state_33023;
var statearr_33126_34957 = state_33023__$1;
(statearr_33126_34957[(2)] = null);

(statearr_33126_34957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (29))){
var inst_33007 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33127_34958 = state_33023__$1;
(statearr_33127_34958[(2)] = inst_33007);

(statearr_33127_34958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (44))){
var inst_33016 = (state_33023[(2)]);
var state_33023__$1 = (function (){var statearr_33128 = state_33023;
(statearr_33128[(26)] = inst_33016);

return statearr_33128;
})();
var statearr_33129_34959 = state_33023__$1;
(statearr_33129_34959[(2)] = null);

(statearr_33129_34959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (6))){
var inst_32948 = (state_33023[(27)]);
var inst_32947 = cljs.core.deref(cs);
var inst_32948__$1 = cljs.core.keys(inst_32947);
var inst_32949 = cljs.core.count(inst_32948__$1);
var inst_32950 = cljs.core.reset_BANG_(dctr,inst_32949);
var inst_32955 = cljs.core.seq(inst_32948__$1);
var inst_32956 = inst_32955;
var inst_32957 = null;
var inst_32958 = (0);
var inst_32959 = (0);
var state_33023__$1 = (function (){var statearr_33131 = state_33023;
(statearr_33131[(9)] = inst_32957);

(statearr_33131[(27)] = inst_32948__$1);

(statearr_33131[(10)] = inst_32959);

(statearr_33131[(19)] = inst_32958);

(statearr_33131[(28)] = inst_32950);

(statearr_33131[(20)] = inst_32956);

return statearr_33131;
})();
var statearr_33132_34965 = state_33023__$1;
(statearr_33132_34965[(2)] = null);

(statearr_33132_34965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (28))){
var inst_32979 = (state_33023[(23)]);
var inst_32956 = (state_33023[(20)]);
var inst_32979__$1 = cljs.core.seq(inst_32956);
var state_33023__$1 = (function (){var statearr_33133 = state_33023;
(statearr_33133[(23)] = inst_32979__$1);

return statearr_33133;
})();
if(inst_32979__$1){
var statearr_33134_34970 = state_33023__$1;
(statearr_33134_34970[(1)] = (33));

} else {
var statearr_33135_34971 = state_33023__$1;
(statearr_33135_34971[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (25))){
var inst_32959 = (state_33023[(10)]);
var inst_32958 = (state_33023[(19)]);
var inst_32961 = (inst_32959 < inst_32958);
var inst_32962 = inst_32961;
var state_33023__$1 = state_33023;
if(cljs.core.truth_(inst_32962)){
var statearr_33136_34972 = state_33023__$1;
(statearr_33136_34972[(1)] = (27));

} else {
var statearr_33137_34973 = state_33023__$1;
(statearr_33137_34973[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (34))){
var state_33023__$1 = state_33023;
var statearr_33138_34974 = state_33023__$1;
(statearr_33138_34974[(2)] = null);

(statearr_33138_34974[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (17))){
var state_33023__$1 = state_33023;
var statearr_33139_34977 = state_33023__$1;
(statearr_33139_34977[(2)] = null);

(statearr_33139_34977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (3))){
var inst_33021 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33023__$1,inst_33021);
} else {
if((state_val_33027 === (12))){
var inst_32943 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33140_34979 = state_33023__$1;
(statearr_33140_34979[(2)] = inst_32943);

(statearr_33140_34979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (2))){
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33023__$1,(4),ch);
} else {
if((state_val_33027 === (23))){
var state_33023__$1 = state_33023;
var statearr_33141_34997 = state_33023__$1;
(statearr_33141_34997[(2)] = null);

(statearr_33141_34997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (35))){
var inst_33005 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33143_35006 = state_33023__$1;
(statearr_33143_35006[(2)] = inst_33005);

(statearr_33143_35006[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (19))){
var inst_32904 = (state_33023[(7)]);
var inst_32908 = cljs.core.chunk_first(inst_32904);
var inst_32909 = cljs.core.chunk_rest(inst_32904);
var inst_32910 = cljs.core.count(inst_32908);
var inst_32878 = inst_32909;
var inst_32879 = inst_32908;
var inst_32880 = inst_32910;
var inst_32881 = (0);
var state_33023__$1 = (function (){var statearr_33147 = state_33023;
(statearr_33147[(13)] = inst_32879);

(statearr_33147[(14)] = inst_32878);

(statearr_33147[(15)] = inst_32881);

(statearr_33147[(16)] = inst_32880);

return statearr_33147;
})();
var statearr_33148_35009 = state_33023__$1;
(statearr_33148_35009[(2)] = null);

(statearr_33148_35009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (11))){
var inst_32878 = (state_33023[(14)]);
var inst_32904 = (state_33023[(7)]);
var inst_32904__$1 = cljs.core.seq(inst_32878);
var state_33023__$1 = (function (){var statearr_33152 = state_33023;
(statearr_33152[(7)] = inst_32904__$1);

return statearr_33152;
})();
if(inst_32904__$1){
var statearr_33153_35011 = state_33023__$1;
(statearr_33153_35011[(1)] = (16));

} else {
var statearr_33156_35013 = state_33023__$1;
(statearr_33156_35013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (9))){
var inst_32945 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33158_35014 = state_33023__$1;
(statearr_33158_35014[(2)] = inst_32945);

(statearr_33158_35014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (5))){
var inst_32876 = cljs.core.deref(cs);
var inst_32877 = cljs.core.seq(inst_32876);
var inst_32878 = inst_32877;
var inst_32879 = null;
var inst_32880 = (0);
var inst_32881 = (0);
var state_33023__$1 = (function (){var statearr_33162 = state_33023;
(statearr_33162[(13)] = inst_32879);

(statearr_33162[(14)] = inst_32878);

(statearr_33162[(15)] = inst_32881);

(statearr_33162[(16)] = inst_32880);

return statearr_33162;
})();
var statearr_33164_35019 = state_33023__$1;
(statearr_33164_35019[(2)] = null);

(statearr_33164_35019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (14))){
var state_33023__$1 = state_33023;
var statearr_33166_35020 = state_33023__$1;
(statearr_33166_35020[(2)] = null);

(statearr_33166_35020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (45))){
var inst_33013 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33169_35024 = state_33023__$1;
(statearr_33169_35024[(2)] = inst_33013);

(statearr_33169_35024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (26))){
var inst_32948 = (state_33023[(27)]);
var inst_33009 = (state_33023[(2)]);
var inst_33010 = cljs.core.seq(inst_32948);
var state_33023__$1 = (function (){var statearr_33172 = state_33023;
(statearr_33172[(29)] = inst_33009);

return statearr_33172;
})();
if(inst_33010){
var statearr_33174_35027 = state_33023__$1;
(statearr_33174_35027[(1)] = (42));

} else {
var statearr_33175_35029 = state_33023__$1;
(statearr_33175_35029[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (16))){
var inst_32904 = (state_33023[(7)]);
var inst_32906 = cljs.core.chunked_seq_QMARK_(inst_32904);
var state_33023__$1 = state_33023;
if(inst_32906){
var statearr_33176_35033 = state_33023__$1;
(statearr_33176_35033[(1)] = (19));

} else {
var statearr_33177_35035 = state_33023__$1;
(statearr_33177_35035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (38))){
var inst_33001 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33179_35038 = state_33023__$1;
(statearr_33179_35038[(2)] = inst_33001);

(statearr_33179_35038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (30))){
var state_33023__$1 = state_33023;
var statearr_33182_35042 = state_33023__$1;
(statearr_33182_35042[(2)] = null);

(statearr_33182_35042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (10))){
var inst_32879 = (state_33023[(13)]);
var inst_32881 = (state_33023[(15)]);
var inst_32893 = cljs.core._nth(inst_32879,inst_32881);
var inst_32894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32893,(0),null);
var inst_32895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32893,(1),null);
var state_33023__$1 = (function (){var statearr_33186 = state_33023;
(statearr_33186[(24)] = inst_32894);

return statearr_33186;
})();
if(cljs.core.truth_(inst_32895)){
var statearr_33187_35052 = state_33023__$1;
(statearr_33187_35052[(1)] = (13));

} else {
var statearr_33188_35053 = state_33023__$1;
(statearr_33188_35053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (18))){
var inst_32941 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33191_35060 = state_33023__$1;
(statearr_33191_35060[(2)] = inst_32941);

(statearr_33191_35060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (42))){
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33023__$1,(45),dchan);
} else {
if((state_val_33027 === (37))){
var inst_32979 = (state_33023[(23)]);
var inst_32868 = (state_33023[(11)]);
var inst_32990 = (state_33023[(22)]);
var inst_32990__$1 = cljs.core.first(inst_32979);
var inst_32991 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32990__$1,inst_32868,done);
var state_33023__$1 = (function (){var statearr_33195 = state_33023;
(statearr_33195[(22)] = inst_32990__$1);

return statearr_33195;
})();
if(cljs.core.truth_(inst_32991)){
var statearr_33197_35072 = state_33023__$1;
(statearr_33197_35072[(1)] = (39));

} else {
var statearr_33198_35074 = state_33023__$1;
(statearr_33198_35074[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33027 === (8))){
var inst_32881 = (state_33023[(15)]);
var inst_32880 = (state_33023[(16)]);
var inst_32887 = (inst_32881 < inst_32880);
var inst_32888 = inst_32887;
var state_33023__$1 = state_33023;
if(cljs.core.truth_(inst_32888)){
var statearr_33204_35075 = state_33023__$1;
(statearr_33204_35075[(1)] = (10));

} else {
var statearr_33205_35077 = state_33023__$1;
(statearr_33205_35077[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31464__auto__ = null;
var cljs$core$async$mult_$_state_machine__31464__auto____0 = (function (){
var statearr_33208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33208[(0)] = cljs$core$async$mult_$_state_machine__31464__auto__);

(statearr_33208[(1)] = (1));

return statearr_33208;
});
var cljs$core$async$mult_$_state_machine__31464__auto____1 = (function (state_33023){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_33023);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e33209){var ex__31467__auto__ = e33209;
var statearr_33210_35090 = state_33023;
(statearr_33210_35090[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_33023[(4)]))){
var statearr_33213_35095 = state_33023;
(statearr_33213_35095[(1)] = cljs.core.first((state_33023[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35097 = state_33023;
state_33023 = G__35097;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31464__auto__ = function(state_33023){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31464__auto____1.call(this,state_33023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31464__auto____0;
cljs$core$async$mult_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31464__auto____1;
return cljs$core$async$mult_$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_33215 = f__31771__auto__();
(statearr_33215[(6)] = c__31770__auto___34842);

return statearr_33215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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
var G__33221 = arguments.length;
switch (G__33221) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35120 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35120(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35137 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35137(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35155 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35155(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35163 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35163(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35173 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35173(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35182 = arguments.length;
var i__4819__auto___35183 = (0);
while(true){
if((i__4819__auto___35183 < len__4818__auto___35182)){
args__4824__auto__.push((arguments[i__4819__auto___35183]));

var G__35185 = (i__4819__auto___35183 + (1));
i__4819__auto___35183 = G__35185;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33266){
var map__33267 = p__33266;
var map__33267__$1 = cljs.core.__destructure_map(map__33267);
var opts = map__33267__$1;
var statearr_33269_35197 = state;
(statearr_33269_35197[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33270_35201 = state;
(statearr_33270_35201[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33271_35204 = state;
(statearr_33271_35204[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33261){
var G__33262 = cljs.core.first(seq33261);
var seq33261__$1 = cljs.core.next(seq33261);
var G__33263 = cljs.core.first(seq33261__$1);
var seq33261__$2 = cljs.core.next(seq33261__$1);
var G__33264 = cljs.core.first(seq33261__$2);
var seq33261__$3 = cljs.core.next(seq33261__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33262,G__33263,G__33264,seq33261__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33298 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33299){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33299 = meta33299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33300,meta33299__$1){
var self__ = this;
var _33300__$1 = this;
return (new cljs.core.async.t_cljs$core$async33298(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33299__$1));
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33300){
var self__ = this;
var _33300__$1 = this;
return self__.meta33299;
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33299","meta33299",-1730213020,null)], null);
}));

(cljs.core.async.t_cljs$core$async33298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33298");

(cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33298.
 */
cljs.core.async.__GT_t_cljs$core$async33298 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33298(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33299){
return (new cljs.core.async.t_cljs$core$async33298(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33299));
});

}

return (new cljs.core.async.t_cljs$core$async33298(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31770__auto___35248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_33383){
var state_val_33384 = (state_33383[(1)]);
if((state_val_33384 === (7))){
var inst_33340 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
if(cljs.core.truth_(inst_33340)){
var statearr_33387_35250 = state_33383__$1;
(statearr_33387_35250[(1)] = (8));

} else {
var statearr_33388_35251 = state_33383__$1;
(statearr_33388_35251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (20))){
var inst_33333 = (state_33383[(7)]);
var state_33383__$1 = state_33383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33383__$1,(23),out,inst_33333);
} else {
if((state_val_33384 === (1))){
var inst_33315 = calc_state();
var inst_33316 = cljs.core.__destructure_map(inst_33315);
var inst_33317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33316,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33316,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33316,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33320 = inst_33315;
var state_33383__$1 = (function (){var statearr_33392 = state_33383;
(statearr_33392[(8)] = inst_33317);

(statearr_33392[(9)] = inst_33318);

(statearr_33392[(10)] = inst_33319);

(statearr_33392[(11)] = inst_33320);

return statearr_33392;
})();
var statearr_33395_35255 = state_33383__$1;
(statearr_33395_35255[(2)] = null);

(statearr_33395_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (24))){
var inst_33323 = (state_33383[(12)]);
var inst_33320 = inst_33323;
var state_33383__$1 = (function (){var statearr_33397 = state_33383;
(statearr_33397[(11)] = inst_33320);

return statearr_33397;
})();
var statearr_33398_35258 = state_33383__$1;
(statearr_33398_35258[(2)] = null);

(statearr_33398_35258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (4))){
var inst_33335 = (state_33383[(13)]);
var inst_33333 = (state_33383[(7)]);
var inst_33332 = (state_33383[(2)]);
var inst_33333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33332,(0),null);
var inst_33334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33332,(1),null);
var inst_33335__$1 = (inst_33333__$1 == null);
var state_33383__$1 = (function (){var statearr_33399 = state_33383;
(statearr_33399[(14)] = inst_33334);

(statearr_33399[(13)] = inst_33335__$1);

(statearr_33399[(7)] = inst_33333__$1);

return statearr_33399;
})();
if(cljs.core.truth_(inst_33335__$1)){
var statearr_33400_35261 = state_33383__$1;
(statearr_33400_35261[(1)] = (5));

} else {
var statearr_33401_35263 = state_33383__$1;
(statearr_33401_35263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (15))){
var inst_33354 = (state_33383[(15)]);
var inst_33324 = (state_33383[(16)]);
var inst_33354__$1 = cljs.core.empty_QMARK_(inst_33324);
var state_33383__$1 = (function (){var statearr_33402 = state_33383;
(statearr_33402[(15)] = inst_33354__$1);

return statearr_33402;
})();
if(inst_33354__$1){
var statearr_33403_35270 = state_33383__$1;
(statearr_33403_35270[(1)] = (17));

} else {
var statearr_33405_35271 = state_33383__$1;
(statearr_33405_35271[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (21))){
var inst_33323 = (state_33383[(12)]);
var inst_33320 = inst_33323;
var state_33383__$1 = (function (){var statearr_33407 = state_33383;
(statearr_33407[(11)] = inst_33320);

return statearr_33407;
})();
var statearr_33408_35272 = state_33383__$1;
(statearr_33408_35272[(2)] = null);

(statearr_33408_35272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (13))){
var inst_33347 = (state_33383[(2)]);
var inst_33348 = calc_state();
var inst_33320 = inst_33348;
var state_33383__$1 = (function (){var statearr_33410 = state_33383;
(statearr_33410[(17)] = inst_33347);

(statearr_33410[(11)] = inst_33320);

return statearr_33410;
})();
var statearr_33411_35275 = state_33383__$1;
(statearr_33411_35275[(2)] = null);

(statearr_33411_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (22))){
var inst_33377 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33414_35278 = state_33383__$1;
(statearr_33414_35278[(2)] = inst_33377);

(statearr_33414_35278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (6))){
var inst_33334 = (state_33383[(14)]);
var inst_33338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33334,change);
var state_33383__$1 = state_33383;
var statearr_33415_35279 = state_33383__$1;
(statearr_33415_35279[(2)] = inst_33338);

(statearr_33415_35279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (25))){
var state_33383__$1 = state_33383;
var statearr_33416_35280 = state_33383__$1;
(statearr_33416_35280[(2)] = null);

(statearr_33416_35280[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (17))){
var inst_33334 = (state_33383[(14)]);
var inst_33325 = (state_33383[(18)]);
var inst_33358 = (inst_33325.cljs$core$IFn$_invoke$arity$1 ? inst_33325.cljs$core$IFn$_invoke$arity$1(inst_33334) : inst_33325.call(null,inst_33334));
var inst_33359 = cljs.core.not(inst_33358);
var state_33383__$1 = state_33383;
var statearr_33417_35282 = state_33383__$1;
(statearr_33417_35282[(2)] = inst_33359);

(statearr_33417_35282[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (3))){
var inst_33381 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33383__$1,inst_33381);
} else {
if((state_val_33384 === (12))){
var state_33383__$1 = state_33383;
var statearr_33418_35288 = state_33383__$1;
(statearr_33418_35288[(2)] = null);

(statearr_33418_35288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (2))){
var inst_33323 = (state_33383[(12)]);
var inst_33320 = (state_33383[(11)]);
var inst_33323__$1 = cljs.core.__destructure_map(inst_33320);
var inst_33324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33323__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33323__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33323__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33383__$1 = (function (){var statearr_33421 = state_33383;
(statearr_33421[(18)] = inst_33325);

(statearr_33421[(12)] = inst_33323__$1);

(statearr_33421[(16)] = inst_33324);

return statearr_33421;
})();
return cljs.core.async.ioc_alts_BANG_(state_33383__$1,(4),inst_33326);
} else {
if((state_val_33384 === (23))){
var inst_33368 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
if(cljs.core.truth_(inst_33368)){
var statearr_33423_35297 = state_33383__$1;
(statearr_33423_35297[(1)] = (24));

} else {
var statearr_33424_35298 = state_33383__$1;
(statearr_33424_35298[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (19))){
var inst_33362 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33427_35302 = state_33383__$1;
(statearr_33427_35302[(2)] = inst_33362);

(statearr_33427_35302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (11))){
var inst_33334 = (state_33383[(14)]);
var inst_33344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33334);
var state_33383__$1 = state_33383;
var statearr_33428_35303 = state_33383__$1;
(statearr_33428_35303[(2)] = inst_33344);

(statearr_33428_35303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (9))){
var inst_33334 = (state_33383[(14)]);
var inst_33351 = (state_33383[(19)]);
var inst_33324 = (state_33383[(16)]);
var inst_33351__$1 = (inst_33324.cljs$core$IFn$_invoke$arity$1 ? inst_33324.cljs$core$IFn$_invoke$arity$1(inst_33334) : inst_33324.call(null,inst_33334));
var state_33383__$1 = (function (){var statearr_33429 = state_33383;
(statearr_33429[(19)] = inst_33351__$1);

return statearr_33429;
})();
if(cljs.core.truth_(inst_33351__$1)){
var statearr_33430_35305 = state_33383__$1;
(statearr_33430_35305[(1)] = (14));

} else {
var statearr_33431_35306 = state_33383__$1;
(statearr_33431_35306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (5))){
var inst_33335 = (state_33383[(13)]);
var state_33383__$1 = state_33383;
var statearr_33434_35321 = state_33383__$1;
(statearr_33434_35321[(2)] = inst_33335);

(statearr_33434_35321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (14))){
var inst_33351 = (state_33383[(19)]);
var state_33383__$1 = state_33383;
var statearr_33435_35328 = state_33383__$1;
(statearr_33435_35328[(2)] = inst_33351);

(statearr_33435_35328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (26))){
var inst_33373 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33436_35335 = state_33383__$1;
(statearr_33436_35335[(2)] = inst_33373);

(statearr_33436_35335[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (16))){
var inst_33364 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
if(cljs.core.truth_(inst_33364)){
var statearr_33437_35338 = state_33383__$1;
(statearr_33437_35338[(1)] = (20));

} else {
var statearr_33438_35339 = state_33383__$1;
(statearr_33438_35339[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (10))){
var inst_33379 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33439_35340 = state_33383__$1;
(statearr_33439_35340[(2)] = inst_33379);

(statearr_33439_35340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (18))){
var inst_33354 = (state_33383[(15)]);
var state_33383__$1 = state_33383;
var statearr_33440_35344 = state_33383__$1;
(statearr_33440_35344[(2)] = inst_33354);

(statearr_33440_35344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (8))){
var inst_33333 = (state_33383[(7)]);
var inst_33342 = (inst_33333 == null);
var state_33383__$1 = state_33383;
if(cljs.core.truth_(inst_33342)){
var statearr_33441_35361 = state_33383__$1;
(statearr_33441_35361[(1)] = (11));

} else {
var statearr_33443_35362 = state_33383__$1;
(statearr_33443_35362[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__31464__auto__ = null;
var cljs$core$async$mix_$_state_machine__31464__auto____0 = (function (){
var statearr_33445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33445[(0)] = cljs$core$async$mix_$_state_machine__31464__auto__);

(statearr_33445[(1)] = (1));

return statearr_33445;
});
var cljs$core$async$mix_$_state_machine__31464__auto____1 = (function (state_33383){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_33383);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e33446){var ex__31467__auto__ = e33446;
var statearr_33447_35371 = state_33383;
(statearr_33447_35371[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_33383[(4)]))){
var statearr_33448_35374 = state_33383;
(statearr_33448_35374[(1)] = cljs.core.first((state_33383[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_33383;
state_33383 = G__35377;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31464__auto__ = function(state_33383){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31464__auto____1.call(this,state_33383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31464__auto____0;
cljs$core$async$mix_$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31464__auto____1;
return cljs$core$async$mix_$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_33449 = f__31771__auto__();
(statearr_33449[(6)] = c__31770__auto___35248);

return statearr_33449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35388 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35388(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35398 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35398(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35403 = (function() {
var G__35404 = null;
var G__35404__1 = (function (p){
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
var G__35404__2 = (function (p,v){
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
G__35404 = function(p,v){
switch(arguments.length){
case 1:
return G__35404__1.call(this,p);
case 2:
return G__35404__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35404.cljs$core$IFn$_invoke$arity$1 = G__35404__1;
G__35404.cljs$core$IFn$_invoke$arity$2 = G__35404__2;
return G__35404;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33458 = arguments.length;
switch (G__33458) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35403(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35403(p,v);
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
var G__33462 = arguments.length;
switch (G__33462) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33460_SHARP_){
if(cljs.core.truth_((p1__33460_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33460_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33460_SHARP_.call(null,topic)))){
return p1__33460_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33460_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33464 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33465){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33465 = meta33465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33466,meta33465__$1){
var self__ = this;
var _33466__$1 = this;
return (new cljs.core.async.t_cljs$core$async33464(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33465__$1));
}));

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33466){
var self__ = this;
var _33466__$1 = this;
return self__.meta33465;
}));

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33465","meta33465",872409545,null)], null);
}));

(cljs.core.async.t_cljs$core$async33464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33464");

(cljs.core.async.t_cljs$core$async33464.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33464.
 */
cljs.core.async.__GT_t_cljs$core$async33464 = (function cljs$core$async$__GT_t_cljs$core$async33464(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33465){
return (new cljs.core.async.t_cljs$core$async33464(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33465));
});

}

return (new cljs.core.async.t_cljs$core$async33464(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31770__auto___35452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_33542){
var state_val_33543 = (state_33542[(1)]);
if((state_val_33543 === (7))){
var inst_33538 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33544_35458 = state_33542__$1;
(statearr_33544_35458[(2)] = inst_33538);

(statearr_33544_35458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (20))){
var state_33542__$1 = state_33542;
var statearr_33546_35460 = state_33542__$1;
(statearr_33546_35460[(2)] = null);

(statearr_33546_35460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (1))){
var state_33542__$1 = state_33542;
var statearr_33547_35462 = state_33542__$1;
(statearr_33547_35462[(2)] = null);

(statearr_33547_35462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (24))){
var inst_33521 = (state_33542[(7)]);
var inst_33530 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33521);
var state_33542__$1 = state_33542;
var statearr_33548_35467 = state_33542__$1;
(statearr_33548_35467[(2)] = inst_33530);

(statearr_33548_35467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (4))){
var inst_33472 = (state_33542[(8)]);
var inst_33472__$1 = (state_33542[(2)]);
var inst_33473 = (inst_33472__$1 == null);
var state_33542__$1 = (function (){var statearr_33549 = state_33542;
(statearr_33549[(8)] = inst_33472__$1);

return statearr_33549;
})();
if(cljs.core.truth_(inst_33473)){
var statearr_33550_35472 = state_33542__$1;
(statearr_33550_35472[(1)] = (5));

} else {
var statearr_33551_35474 = state_33542__$1;
(statearr_33551_35474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (15))){
var inst_33515 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33552_35479 = state_33542__$1;
(statearr_33552_35479[(2)] = inst_33515);

(statearr_33552_35479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (21))){
var inst_33535 = (state_33542[(2)]);
var state_33542__$1 = (function (){var statearr_33555 = state_33542;
(statearr_33555[(9)] = inst_33535);

return statearr_33555;
})();
var statearr_33557_35483 = state_33542__$1;
(statearr_33557_35483[(2)] = null);

(statearr_33557_35483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (13))){
var inst_33496 = (state_33542[(10)]);
var inst_33498 = cljs.core.chunked_seq_QMARK_(inst_33496);
var state_33542__$1 = state_33542;
if(inst_33498){
var statearr_33558_35495 = state_33542__$1;
(statearr_33558_35495[(1)] = (16));

} else {
var statearr_33559_35496 = state_33542__$1;
(statearr_33559_35496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (22))){
var inst_33527 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
if(cljs.core.truth_(inst_33527)){
var statearr_33561_35501 = state_33542__$1;
(statearr_33561_35501[(1)] = (23));

} else {
var statearr_33562_35503 = state_33542__$1;
(statearr_33562_35503[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (6))){
var inst_33472 = (state_33542[(8)]);
var inst_33523 = (state_33542[(11)]);
var inst_33521 = (state_33542[(7)]);
var inst_33521__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33472) : topic_fn.call(null,inst_33472));
var inst_33522 = cljs.core.deref(mults);
var inst_33523__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33522,inst_33521__$1);
var state_33542__$1 = (function (){var statearr_33567 = state_33542;
(statearr_33567[(11)] = inst_33523__$1);

(statearr_33567[(7)] = inst_33521__$1);

return statearr_33567;
})();
if(cljs.core.truth_(inst_33523__$1)){
var statearr_33570_35512 = state_33542__$1;
(statearr_33570_35512[(1)] = (19));

} else {
var statearr_33571_35513 = state_33542__$1;
(statearr_33571_35513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (25))){
var inst_33532 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33572_35516 = state_33542__$1;
(statearr_33572_35516[(2)] = inst_33532);

(statearr_33572_35516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (17))){
var inst_33496 = (state_33542[(10)]);
var inst_33506 = cljs.core.first(inst_33496);
var inst_33507 = cljs.core.async.muxch_STAR_(inst_33506);
var inst_33508 = cljs.core.async.close_BANG_(inst_33507);
var inst_33509 = cljs.core.next(inst_33496);
var inst_33482 = inst_33509;
var inst_33483 = null;
var inst_33484 = (0);
var inst_33485 = (0);
var state_33542__$1 = (function (){var statearr_33573 = state_33542;
(statearr_33573[(12)] = inst_33508);

(statearr_33573[(13)] = inst_33485);

(statearr_33573[(14)] = inst_33483);

(statearr_33573[(15)] = inst_33482);

(statearr_33573[(16)] = inst_33484);

return statearr_33573;
})();
var statearr_33574_35527 = state_33542__$1;
(statearr_33574_35527[(2)] = null);

(statearr_33574_35527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (3))){
var inst_33540 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33542__$1,inst_33540);
} else {
if((state_val_33543 === (12))){
var inst_33517 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33575_35532 = state_33542__$1;
(statearr_33575_35532[(2)] = inst_33517);

(statearr_33575_35532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (2))){
var state_33542__$1 = state_33542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33542__$1,(4),ch);
} else {
if((state_val_33543 === (23))){
var state_33542__$1 = state_33542;
var statearr_33576_35535 = state_33542__$1;
(statearr_33576_35535[(2)] = null);

(statearr_33576_35535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (19))){
var inst_33472 = (state_33542[(8)]);
var inst_33523 = (state_33542[(11)]);
var inst_33525 = cljs.core.async.muxch_STAR_(inst_33523);
var state_33542__$1 = state_33542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33542__$1,(22),inst_33525,inst_33472);
} else {
if((state_val_33543 === (11))){
var inst_33496 = (state_33542[(10)]);
var inst_33482 = (state_33542[(15)]);
var inst_33496__$1 = cljs.core.seq(inst_33482);
var state_33542__$1 = (function (){var statearr_33578 = state_33542;
(statearr_33578[(10)] = inst_33496__$1);

return statearr_33578;
})();
if(inst_33496__$1){
var statearr_33579_35540 = state_33542__$1;
(statearr_33579_35540[(1)] = (13));

} else {
var statearr_33580_35542 = state_33542__$1;
(statearr_33580_35542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (9))){
var inst_33519 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33581_35546 = state_33542__$1;
(statearr_33581_35546[(2)] = inst_33519);

(statearr_33581_35546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (5))){
var inst_33479 = cljs.core.deref(mults);
var inst_33480 = cljs.core.vals(inst_33479);
var inst_33481 = cljs.core.seq(inst_33480);
var inst_33482 = inst_33481;
var inst_33483 = null;
var inst_33484 = (0);
var inst_33485 = (0);
var state_33542__$1 = (function (){var statearr_33582 = state_33542;
(statearr_33582[(13)] = inst_33485);

(statearr_33582[(14)] = inst_33483);

(statearr_33582[(15)] = inst_33482);

(statearr_33582[(16)] = inst_33484);

return statearr_33582;
})();
var statearr_33583_35552 = state_33542__$1;
(statearr_33583_35552[(2)] = null);

(statearr_33583_35552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (14))){
var state_33542__$1 = state_33542;
var statearr_33587_35557 = state_33542__$1;
(statearr_33587_35557[(2)] = null);

(statearr_33587_35557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (16))){
var inst_33496 = (state_33542[(10)]);
var inst_33501 = cljs.core.chunk_first(inst_33496);
var inst_33502 = cljs.core.chunk_rest(inst_33496);
var inst_33503 = cljs.core.count(inst_33501);
var inst_33482 = inst_33502;
var inst_33483 = inst_33501;
var inst_33484 = inst_33503;
var inst_33485 = (0);
var state_33542__$1 = (function (){var statearr_33588 = state_33542;
(statearr_33588[(13)] = inst_33485);

(statearr_33588[(14)] = inst_33483);

(statearr_33588[(15)] = inst_33482);

(statearr_33588[(16)] = inst_33484);

return statearr_33588;
})();
var statearr_33589_35564 = state_33542__$1;
(statearr_33589_35564[(2)] = null);

(statearr_33589_35564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (10))){
var inst_33485 = (state_33542[(13)]);
var inst_33483 = (state_33542[(14)]);
var inst_33482 = (state_33542[(15)]);
var inst_33484 = (state_33542[(16)]);
var inst_33490 = cljs.core._nth(inst_33483,inst_33485);
var inst_33491 = cljs.core.async.muxch_STAR_(inst_33490);
var inst_33492 = cljs.core.async.close_BANG_(inst_33491);
var inst_33493 = (inst_33485 + (1));
var tmp33584 = inst_33483;
var tmp33585 = inst_33482;
var tmp33586 = inst_33484;
var inst_33482__$1 = tmp33585;
var inst_33483__$1 = tmp33584;
var inst_33484__$1 = tmp33586;
var inst_33485__$1 = inst_33493;
var state_33542__$1 = (function (){var statearr_33590 = state_33542;
(statearr_33590[(17)] = inst_33492);

(statearr_33590[(13)] = inst_33485__$1);

(statearr_33590[(14)] = inst_33483__$1);

(statearr_33590[(15)] = inst_33482__$1);

(statearr_33590[(16)] = inst_33484__$1);

return statearr_33590;
})();
var statearr_33592_35582 = state_33542__$1;
(statearr_33592_35582[(2)] = null);

(statearr_33592_35582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (18))){
var inst_33512 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33593_35587 = state_33542__$1;
(statearr_33593_35587[(2)] = inst_33512);

(statearr_33593_35587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (8))){
var inst_33485 = (state_33542[(13)]);
var inst_33484 = (state_33542[(16)]);
var inst_33487 = (inst_33485 < inst_33484);
var inst_33488 = inst_33487;
var state_33542__$1 = state_33542;
if(cljs.core.truth_(inst_33488)){
var statearr_33595_35592 = state_33542__$1;
(statearr_33595_35592[(1)] = (10));

} else {
var statearr_33596_35594 = state_33542__$1;
(statearr_33596_35594[(1)] = (11));

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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_33597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33597[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_33597[(1)] = (1));

return statearr_33597;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_33542){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_33542);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e33598){var ex__31467__auto__ = e33598;
var statearr_33599_35611 = state_33542;
(statearr_33599_35611[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_33542[(4)]))){
var statearr_33600_35614 = state_33542;
(statearr_33600_35614[(1)] = cljs.core.first((state_33542[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35617 = state_33542;
state_33542 = G__35617;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_33542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_33542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_33601 = f__31771__auto__();
(statearr_33601[(6)] = c__31770__auto___35452);

return statearr_33601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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
var G__33605 = arguments.length;
switch (G__33605) {
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
var G__33609 = arguments.length;
switch (G__33609) {
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
var G__33614 = arguments.length;
switch (G__33614) {
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
var c__31770__auto___35630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_33661){
var state_val_33662 = (state_33661[(1)]);
if((state_val_33662 === (7))){
var state_33661__$1 = state_33661;
var statearr_33665_35631 = state_33661__$1;
(statearr_33665_35631[(2)] = null);

(statearr_33665_35631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (1))){
var state_33661__$1 = state_33661;
var statearr_33666_35634 = state_33661__$1;
(statearr_33666_35634[(2)] = null);

(statearr_33666_35634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (4))){
var inst_33622 = (state_33661[(7)]);
var inst_33621 = (state_33661[(8)]);
var inst_33624 = (inst_33622 < inst_33621);
var state_33661__$1 = state_33661;
if(cljs.core.truth_(inst_33624)){
var statearr_33667_35637 = state_33661__$1;
(statearr_33667_35637[(1)] = (6));

} else {
var statearr_33668_35638 = state_33661__$1;
(statearr_33668_35638[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (15))){
var inst_33647 = (state_33661[(9)]);
var inst_33652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33647);
var state_33661__$1 = state_33661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33661__$1,(17),out,inst_33652);
} else {
if((state_val_33662 === (13))){
var inst_33647 = (state_33661[(9)]);
var inst_33647__$1 = (state_33661[(2)]);
var inst_33648 = cljs.core.some(cljs.core.nil_QMARK_,inst_33647__$1);
var state_33661__$1 = (function (){var statearr_33669 = state_33661;
(statearr_33669[(9)] = inst_33647__$1);

return statearr_33669;
})();
if(cljs.core.truth_(inst_33648)){
var statearr_33670_35639 = state_33661__$1;
(statearr_33670_35639[(1)] = (14));

} else {
var statearr_33671_35640 = state_33661__$1;
(statearr_33671_35640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (6))){
var state_33661__$1 = state_33661;
var statearr_33673_35646 = state_33661__$1;
(statearr_33673_35646[(2)] = null);

(statearr_33673_35646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (17))){
var inst_33654 = (state_33661[(2)]);
var state_33661__$1 = (function (){var statearr_33677 = state_33661;
(statearr_33677[(10)] = inst_33654);

return statearr_33677;
})();
var statearr_33679_35647 = state_33661__$1;
(statearr_33679_35647[(2)] = null);

(statearr_33679_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (3))){
var inst_33659 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33661__$1,inst_33659);
} else {
if((state_val_33662 === (12))){
var _ = (function (){var statearr_33680 = state_33661;
(statearr_33680[(4)] = cljs.core.rest((state_33661[(4)])));

return statearr_33680;
})();
var state_33661__$1 = state_33661;
var ex33675 = (state_33661__$1[(2)]);
var statearr_33682_35648 = state_33661__$1;
(statearr_33682_35648[(5)] = ex33675);


if((ex33675 instanceof Object)){
var statearr_33683_35649 = state_33661__$1;
(statearr_33683_35649[(1)] = (11));

(statearr_33683_35649[(5)] = null);

} else {
throw ex33675;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (2))){
var inst_33620 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33621 = cnt;
var inst_33622 = (0);
var state_33661__$1 = (function (){var statearr_33684 = state_33661;
(statearr_33684[(7)] = inst_33622);

(statearr_33684[(11)] = inst_33620);

(statearr_33684[(8)] = inst_33621);

return statearr_33684;
})();
var statearr_33685_35650 = state_33661__$1;
(statearr_33685_35650[(2)] = null);

(statearr_33685_35650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (11))){
var inst_33626 = (state_33661[(2)]);
var inst_33627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33661__$1 = (function (){var statearr_33686 = state_33661;
(statearr_33686[(12)] = inst_33626);

return statearr_33686;
})();
var statearr_33687_35651 = state_33661__$1;
(statearr_33687_35651[(2)] = inst_33627);

(statearr_33687_35651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (9))){
var inst_33622 = (state_33661[(7)]);
var _ = (function (){var statearr_33688 = state_33661;
(statearr_33688[(4)] = cljs.core.cons((12),(state_33661[(4)])));

return statearr_33688;
})();
var inst_33633 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33622) : chs__$1.call(null,inst_33622));
var inst_33634 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33622) : done.call(null,inst_33622));
var inst_33635 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33633,inst_33634);
var ___$1 = (function (){var statearr_33689 = state_33661;
(statearr_33689[(4)] = cljs.core.rest((state_33661[(4)])));

return statearr_33689;
})();
var state_33661__$1 = state_33661;
var statearr_33690_35654 = state_33661__$1;
(statearr_33690_35654[(2)] = inst_33635);

(statearr_33690_35654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (5))){
var inst_33645 = (state_33661[(2)]);
var state_33661__$1 = (function (){var statearr_33691 = state_33661;
(statearr_33691[(13)] = inst_33645);

return statearr_33691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33661__$1,(13),dchan);
} else {
if((state_val_33662 === (14))){
var inst_33650 = cljs.core.async.close_BANG_(out);
var state_33661__$1 = state_33661;
var statearr_33692_35665 = state_33661__$1;
(statearr_33692_35665[(2)] = inst_33650);

(statearr_33692_35665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (16))){
var inst_33657 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33694_35671 = state_33661__$1;
(statearr_33694_35671[(2)] = inst_33657);

(statearr_33694_35671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (10))){
var inst_33622 = (state_33661[(7)]);
var inst_33638 = (state_33661[(2)]);
var inst_33639 = (inst_33622 + (1));
var inst_33622__$1 = inst_33639;
var state_33661__$1 = (function (){var statearr_33696 = state_33661;
(statearr_33696[(7)] = inst_33622__$1);

(statearr_33696[(14)] = inst_33638);

return statearr_33696;
})();
var statearr_33697_35673 = state_33661__$1;
(statearr_33697_35673[(2)] = null);

(statearr_33697_35673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (8))){
var inst_33643 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33698_35675 = state_33661__$1;
(statearr_33698_35675[(2)] = inst_33643);

(statearr_33698_35675[(1)] = (5));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_33699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33699[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_33699[(1)] = (1));

return statearr_33699;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_33661){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_33661);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e33700){var ex__31467__auto__ = e33700;
var statearr_33701_35688 = state_33661;
(statearr_33701_35688[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_33661[(4)]))){
var statearr_33702_35693 = state_33661;
(statearr_33702_35693[(1)] = cljs.core.first((state_33661[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35694 = state_33661;
state_33661 = G__35694;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_33661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_33661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_33703 = f__31771__auto__();
(statearr_33703[(6)] = c__31770__auto___35630);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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
var G__33706 = arguments.length;
switch (G__33706) {
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
var c__31770__auto___35706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_33744){
var state_val_33745 = (state_33744[(1)]);
if((state_val_33745 === (7))){
var inst_33719 = (state_33744[(7)]);
var inst_33717 = (state_33744[(8)]);
var inst_33717__$1 = (state_33744[(2)]);
var inst_33719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33717__$1,(0),null);
var inst_33721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33717__$1,(1),null);
var inst_33723 = (inst_33719__$1 == null);
var state_33744__$1 = (function (){var statearr_33749 = state_33744;
(statearr_33749[(7)] = inst_33719__$1);

(statearr_33749[(9)] = inst_33721);

(statearr_33749[(8)] = inst_33717__$1);

return statearr_33749;
})();
if(cljs.core.truth_(inst_33723)){
var statearr_33750_35715 = state_33744__$1;
(statearr_33750_35715[(1)] = (8));

} else {
var statearr_33751_35718 = state_33744__$1;
(statearr_33751_35718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (1))){
var inst_33707 = cljs.core.vec(chs);
var inst_33708 = inst_33707;
var state_33744__$1 = (function (){var statearr_33753 = state_33744;
(statearr_33753[(10)] = inst_33708);

return statearr_33753;
})();
var statearr_33754_35722 = state_33744__$1;
(statearr_33754_35722[(2)] = null);

(statearr_33754_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (4))){
var inst_33708 = (state_33744[(10)]);
var state_33744__$1 = state_33744;
return cljs.core.async.ioc_alts_BANG_(state_33744__$1,(7),inst_33708);
} else {
if((state_val_33745 === (6))){
var inst_33739 = (state_33744[(2)]);
var state_33744__$1 = state_33744;
var statearr_33759_35723 = state_33744__$1;
(statearr_33759_35723[(2)] = inst_33739);

(statearr_33759_35723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (3))){
var inst_33741 = (state_33744[(2)]);
var state_33744__$1 = state_33744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33744__$1,inst_33741);
} else {
if((state_val_33745 === (2))){
var inst_33708 = (state_33744[(10)]);
var inst_33710 = cljs.core.count(inst_33708);
var inst_33711 = (inst_33710 > (0));
var state_33744__$1 = state_33744;
if(cljs.core.truth_(inst_33711)){
var statearr_33765_35730 = state_33744__$1;
(statearr_33765_35730[(1)] = (4));

} else {
var statearr_33768_35731 = state_33744__$1;
(statearr_33768_35731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (11))){
var inst_33708 = (state_33744[(10)]);
var inst_33730 = (state_33744[(2)]);
var tmp33763 = inst_33708;
var inst_33708__$1 = tmp33763;
var state_33744__$1 = (function (){var statearr_33770 = state_33744;
(statearr_33770[(10)] = inst_33708__$1);

(statearr_33770[(11)] = inst_33730);

return statearr_33770;
})();
var statearr_33772_35735 = state_33744__$1;
(statearr_33772_35735[(2)] = null);

(statearr_33772_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (9))){
var inst_33719 = (state_33744[(7)]);
var state_33744__$1 = state_33744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33744__$1,(11),out,inst_33719);
} else {
if((state_val_33745 === (5))){
var inst_33736 = cljs.core.async.close_BANG_(out);
var state_33744__$1 = state_33744;
var statearr_33780_35738 = state_33744__$1;
(statearr_33780_35738[(2)] = inst_33736);

(statearr_33780_35738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (10))){
var inst_33733 = (state_33744[(2)]);
var state_33744__$1 = state_33744;
var statearr_33782_35739 = state_33744__$1;
(statearr_33782_35739[(2)] = inst_33733);

(statearr_33782_35739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33745 === (8))){
var inst_33719 = (state_33744[(7)]);
var inst_33708 = (state_33744[(10)]);
var inst_33721 = (state_33744[(9)]);
var inst_33717 = (state_33744[(8)]);
var inst_33725 = (function (){var cs = inst_33708;
var vec__33713 = inst_33717;
var v = inst_33719;
var c = inst_33721;
return (function (p1__33704_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33704_SHARP_);
});
})();
var inst_33726 = cljs.core.filterv(inst_33725,inst_33708);
var inst_33708__$1 = inst_33726;
var state_33744__$1 = (function (){var statearr_33786 = state_33744;
(statearr_33786[(10)] = inst_33708__$1);

return statearr_33786;
})();
var statearr_33788_35742 = state_33744__$1;
(statearr_33788_35742[(2)] = null);

(statearr_33788_35742[(1)] = (2));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_33792 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33792[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_33792[(1)] = (1));

return statearr_33792;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_33744){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_33744);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e33794){var ex__31467__auto__ = e33794;
var statearr_33797_35743 = state_33744;
(statearr_33797_35743[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_33744[(4)]))){
var statearr_33799_35744 = state_33744;
(statearr_33799_35744[(1)] = cljs.core.first((state_33744[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35746 = state_33744;
state_33744 = G__35746;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_33744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_33744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_33803 = f__31771__auto__();
(statearr_33803[(6)] = c__31770__auto___35706);

return statearr_33803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
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
var G__33814 = arguments.length;
switch (G__33814) {
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
var c__31770__auto___35753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_33850){
var state_val_33851 = (state_33850[(1)]);
if((state_val_33851 === (7))){
var inst_33829 = (state_33850[(7)]);
var inst_33829__$1 = (state_33850[(2)]);
var inst_33830 = (inst_33829__$1 == null);
var inst_33831 = cljs.core.not(inst_33830);
var state_33850__$1 = (function (){var statearr_33857 = state_33850;
(statearr_33857[(7)] = inst_33829__$1);

return statearr_33857;
})();
if(inst_33831){
var statearr_33858_35755 = state_33850__$1;
(statearr_33858_35755[(1)] = (8));

} else {
var statearr_33861_35756 = state_33850__$1;
(statearr_33861_35756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (1))){
var inst_33823 = (0);
var state_33850__$1 = (function (){var statearr_33863 = state_33850;
(statearr_33863[(8)] = inst_33823);

return statearr_33863;
})();
var statearr_33864_35757 = state_33850__$1;
(statearr_33864_35757[(2)] = null);

(statearr_33864_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (4))){
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33850__$1,(7),ch);
} else {
if((state_val_33851 === (6))){
var inst_33845 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
var statearr_33868_35758 = state_33850__$1;
(statearr_33868_35758[(2)] = inst_33845);

(statearr_33868_35758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (3))){
var inst_33847 = (state_33850[(2)]);
var inst_33848 = cljs.core.async.close_BANG_(out);
var state_33850__$1 = (function (){var statearr_33870 = state_33850;
(statearr_33870[(9)] = inst_33847);

return statearr_33870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33850__$1,inst_33848);
} else {
if((state_val_33851 === (2))){
var inst_33823 = (state_33850[(8)]);
var inst_33825 = (inst_33823 < n);
var state_33850__$1 = state_33850;
if(cljs.core.truth_(inst_33825)){
var statearr_33872_35762 = state_33850__$1;
(statearr_33872_35762[(1)] = (4));

} else {
var statearr_33875_35763 = state_33850__$1;
(statearr_33875_35763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (11))){
var inst_33823 = (state_33850[(8)]);
var inst_33836 = (state_33850[(2)]);
var inst_33838 = (inst_33823 + (1));
var inst_33823__$1 = inst_33838;
var state_33850__$1 = (function (){var statearr_33877 = state_33850;
(statearr_33877[(8)] = inst_33823__$1);

(statearr_33877[(10)] = inst_33836);

return statearr_33877;
})();
var statearr_33879_35767 = state_33850__$1;
(statearr_33879_35767[(2)] = null);

(statearr_33879_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (9))){
var state_33850__$1 = state_33850;
var statearr_33880_35770 = state_33850__$1;
(statearr_33880_35770[(2)] = null);

(statearr_33880_35770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (5))){
var state_33850__$1 = state_33850;
var statearr_33884_35771 = state_33850__$1;
(statearr_33884_35771[(2)] = null);

(statearr_33884_35771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (10))){
var inst_33842 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
var statearr_33885_35774 = state_33850__$1;
(statearr_33885_35774[(2)] = inst_33842);

(statearr_33885_35774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (8))){
var inst_33829 = (state_33850[(7)]);
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33850__$1,(11),out,inst_33829);
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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_33890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33890[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_33890[(1)] = (1));

return statearr_33890;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_33850){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_33850);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e33892){var ex__31467__auto__ = e33892;
var statearr_33893_35788 = state_33850;
(statearr_33893_35788[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_33850[(4)]))){
var statearr_33894_35790 = state_33850;
(statearr_33894_35790[(1)] = cljs.core.first((state_33850[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35791 = state_33850;
state_33850 = G__35791;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_33850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_33850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_33899 = f__31771__auto__();
(statearr_33899[(6)] = c__31770__auto___35753);

return statearr_33899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33905 = (function (f,ch,meta33906){
this.f = f;
this.ch = ch;
this.meta33906 = meta33906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33907,meta33906__$1){
var self__ = this;
var _33907__$1 = this;
return (new cljs.core.async.t_cljs$core$async33905(self__.f,self__.ch,meta33906__$1));
}));

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33907){
var self__ = this;
var _33907__$1 = this;
return self__.meta33906;
}));

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33921 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33921 = (function (f,ch,meta33906,_,fn1,meta33922){
this.f = f;
this.ch = ch;
this.meta33906 = meta33906;
this._ = _;
this.fn1 = fn1;
this.meta33922 = meta33922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33923,meta33922__$1){
var self__ = this;
var _33923__$1 = this;
return (new cljs.core.async.t_cljs$core$async33921(self__.f,self__.ch,self__.meta33906,self__._,self__.fn1,meta33922__$1));
}));

(cljs.core.async.t_cljs$core$async33921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33923){
var self__ = this;
var _33923__$1 = this;
return self__.meta33922;
}));

(cljs.core.async.t_cljs$core$async33921.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33903_SHARP_){
var G__33938 = (((p1__33903_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33903_SHARP_) : self__.f.call(null,p1__33903_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33938) : f1.call(null,G__33938));
});
}));

(cljs.core.async.t_cljs$core$async33921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33906","meta33906",998821243,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33905","cljs.core.async/t_cljs$core$async33905",-992118335,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33922","meta33922",-1104037892,null)], null);
}));

(cljs.core.async.t_cljs$core$async33921.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33921");

(cljs.core.async.t_cljs$core$async33921.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33921");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33921.
 */
cljs.core.async.__GT_t_cljs$core$async33921 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33921(f__$1,ch__$1,meta33906__$1,___$2,fn1__$1,meta33922){
return (new cljs.core.async.t_cljs$core$async33921(f__$1,ch__$1,meta33906__$1,___$2,fn1__$1,meta33922));
});

}

return (new cljs.core.async.t_cljs$core$async33921(self__.f,self__.ch,self__.meta33906,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33948 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33948) : self__.f.call(null,G__33948));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33906","meta33906",998821243,null)], null);
}));

(cljs.core.async.t_cljs$core$async33905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33905");

(cljs.core.async.t_cljs$core$async33905.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33905.
 */
cljs.core.async.__GT_t_cljs$core$async33905 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33905(f__$1,ch__$1,meta33906){
return (new cljs.core.async.t_cljs$core$async33905(f__$1,ch__$1,meta33906));
});

}

return (new cljs.core.async.t_cljs$core$async33905(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33967 = (function (f,ch,meta33968){
this.f = f;
this.ch = ch;
this.meta33968 = meta33968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33969,meta33968__$1){
var self__ = this;
var _33969__$1 = this;
return (new cljs.core.async.t_cljs$core$async33967(self__.f,self__.ch,meta33968__$1));
}));

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33969){
var self__ = this;
var _33969__$1 = this;
return self__.meta33968;
}));

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33968","meta33968",-424677352,null)], null);
}));

(cljs.core.async.t_cljs$core$async33967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33967");

(cljs.core.async.t_cljs$core$async33967.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33967.
 */
cljs.core.async.__GT_t_cljs$core$async33967 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33967(f__$1,ch__$1,meta33968){
return (new cljs.core.async.t_cljs$core$async33967(f__$1,ch__$1,meta33968));
});

}

return (new cljs.core.async.t_cljs$core$async33967(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33992 = (function (p,ch,meta33993){
this.p = p;
this.ch = ch;
this.meta33993 = meta33993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33994,meta33993__$1){
var self__ = this;
var _33994__$1 = this;
return (new cljs.core.async.t_cljs$core$async33992(self__.p,self__.ch,meta33993__$1));
}));

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33994){
var self__ = this;
var _33994__$1 = this;
return self__.meta33993;
}));

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33993","meta33993",-1979714047,null)], null);
}));

(cljs.core.async.t_cljs$core$async33992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33992");

(cljs.core.async.t_cljs$core$async33992.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33992.
 */
cljs.core.async.__GT_t_cljs$core$async33992 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33992(p__$1,ch__$1,meta33993){
return (new cljs.core.async.t_cljs$core$async33992(p__$1,ch__$1,meta33993));
});

}

return (new cljs.core.async.t_cljs$core$async33992(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34014 = arguments.length;
switch (G__34014) {
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
var c__31770__auto___35848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_34035){
var state_val_34036 = (state_34035[(1)]);
if((state_val_34036 === (7))){
var inst_34031 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34038_35850 = state_34035__$1;
(statearr_34038_35850[(2)] = inst_34031);

(statearr_34038_35850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (1))){
var state_34035__$1 = state_34035;
var statearr_34040_35852 = state_34035__$1;
(statearr_34040_35852[(2)] = null);

(statearr_34040_35852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (4))){
var inst_34017 = (state_34035[(7)]);
var inst_34017__$1 = (state_34035[(2)]);
var inst_34018 = (inst_34017__$1 == null);
var state_34035__$1 = (function (){var statearr_34042 = state_34035;
(statearr_34042[(7)] = inst_34017__$1);

return statearr_34042;
})();
if(cljs.core.truth_(inst_34018)){
var statearr_34043_35853 = state_34035__$1;
(statearr_34043_35853[(1)] = (5));

} else {
var statearr_34044_35854 = state_34035__$1;
(statearr_34044_35854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (6))){
var inst_34017 = (state_34035[(7)]);
var inst_34022 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34017) : p.call(null,inst_34017));
var state_34035__$1 = state_34035;
if(cljs.core.truth_(inst_34022)){
var statearr_34046_35855 = state_34035__$1;
(statearr_34046_35855[(1)] = (8));

} else {
var statearr_34047_35856 = state_34035__$1;
(statearr_34047_35856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (3))){
var inst_34033 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34035__$1,inst_34033);
} else {
if((state_val_34036 === (2))){
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34035__$1,(4),ch);
} else {
if((state_val_34036 === (11))){
var inst_34025 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34051_35862 = state_34035__$1;
(statearr_34051_35862[(2)] = inst_34025);

(statearr_34051_35862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (9))){
var state_34035__$1 = state_34035;
var statearr_34052_35865 = state_34035__$1;
(statearr_34052_35865[(2)] = null);

(statearr_34052_35865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (5))){
var inst_34020 = cljs.core.async.close_BANG_(out);
var state_34035__$1 = state_34035;
var statearr_34053_35868 = state_34035__$1;
(statearr_34053_35868[(2)] = inst_34020);

(statearr_34053_35868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (10))){
var inst_34028 = (state_34035[(2)]);
var state_34035__$1 = (function (){var statearr_34054 = state_34035;
(statearr_34054[(8)] = inst_34028);

return statearr_34054;
})();
var statearr_34055_35872 = state_34035__$1;
(statearr_34055_35872[(2)] = null);

(statearr_34055_35872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (8))){
var inst_34017 = (state_34035[(7)]);
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34035__$1,(11),out,inst_34017);
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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_34056 = [null,null,null,null,null,null,null,null,null];
(statearr_34056[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_34056[(1)] = (1));

return statearr_34056;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_34035){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_34035);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e34057){var ex__31467__auto__ = e34057;
var statearr_34058_35876 = state_34035;
(statearr_34058_35876[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_34035[(4)]))){
var statearr_34059_35877 = state_34035;
(statearr_34059_35877[(1)] = cljs.core.first((state_34035[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35880 = state_34035;
state_34035 = G__35880;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_34035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_34035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_34060 = f__31771__auto__();
(statearr_34060[(6)] = c__31770__auto___35848);

return statearr_34060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34062 = arguments.length;
switch (G__34062) {
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
var c__31770__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_34126){
var state_val_34127 = (state_34126[(1)]);
if((state_val_34127 === (7))){
var inst_34122 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
var statearr_34128_35887 = state_34126__$1;
(statearr_34128_35887[(2)] = inst_34122);

(statearr_34128_35887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (20))){
var inst_34090 = (state_34126[(7)]);
var inst_34101 = (state_34126[(2)]);
var inst_34103 = cljs.core.next(inst_34090);
var inst_34076 = inst_34103;
var inst_34077 = null;
var inst_34078 = (0);
var inst_34079 = (0);
var state_34126__$1 = (function (){var statearr_34129 = state_34126;
(statearr_34129[(8)] = inst_34077);

(statearr_34129[(9)] = inst_34101);

(statearr_34129[(10)] = inst_34079);

(statearr_34129[(11)] = inst_34076);

(statearr_34129[(12)] = inst_34078);

return statearr_34129;
})();
var statearr_34130_35899 = state_34126__$1;
(statearr_34130_35899[(2)] = null);

(statearr_34130_35899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (1))){
var state_34126__$1 = state_34126;
var statearr_34131_35901 = state_34126__$1;
(statearr_34131_35901[(2)] = null);

(statearr_34131_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (4))){
var inst_34065 = (state_34126[(13)]);
var inst_34065__$1 = (state_34126[(2)]);
var inst_34066 = (inst_34065__$1 == null);
var state_34126__$1 = (function (){var statearr_34132 = state_34126;
(statearr_34132[(13)] = inst_34065__$1);

return statearr_34132;
})();
if(cljs.core.truth_(inst_34066)){
var statearr_34133_35902 = state_34126__$1;
(statearr_34133_35902[(1)] = (5));

} else {
var statearr_34134_35903 = state_34126__$1;
(statearr_34134_35903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (15))){
var state_34126__$1 = state_34126;
var statearr_34138_35915 = state_34126__$1;
(statearr_34138_35915[(2)] = null);

(statearr_34138_35915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (21))){
var state_34126__$1 = state_34126;
var statearr_34139_35916 = state_34126__$1;
(statearr_34139_35916[(2)] = null);

(statearr_34139_35916[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (13))){
var inst_34077 = (state_34126[(8)]);
var inst_34079 = (state_34126[(10)]);
var inst_34076 = (state_34126[(11)]);
var inst_34078 = (state_34126[(12)]);
var inst_34086 = (state_34126[(2)]);
var inst_34087 = (inst_34079 + (1));
var tmp34135 = inst_34077;
var tmp34136 = inst_34076;
var tmp34137 = inst_34078;
var inst_34076__$1 = tmp34136;
var inst_34077__$1 = tmp34135;
var inst_34078__$1 = tmp34137;
var inst_34079__$1 = inst_34087;
var state_34126__$1 = (function (){var statearr_34140 = state_34126;
(statearr_34140[(8)] = inst_34077__$1);

(statearr_34140[(10)] = inst_34079__$1);

(statearr_34140[(11)] = inst_34076__$1);

(statearr_34140[(14)] = inst_34086);

(statearr_34140[(12)] = inst_34078__$1);

return statearr_34140;
})();
var statearr_34141_35924 = state_34126__$1;
(statearr_34141_35924[(2)] = null);

(statearr_34141_35924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (22))){
var state_34126__$1 = state_34126;
var statearr_34142_35929 = state_34126__$1;
(statearr_34142_35929[(2)] = null);

(statearr_34142_35929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (6))){
var inst_34065 = (state_34126[(13)]);
var inst_34074 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34065) : f.call(null,inst_34065));
var inst_34075 = cljs.core.seq(inst_34074);
var inst_34076 = inst_34075;
var inst_34077 = null;
var inst_34078 = (0);
var inst_34079 = (0);
var state_34126__$1 = (function (){var statearr_34143 = state_34126;
(statearr_34143[(8)] = inst_34077);

(statearr_34143[(10)] = inst_34079);

(statearr_34143[(11)] = inst_34076);

(statearr_34143[(12)] = inst_34078);

return statearr_34143;
})();
var statearr_34144_35940 = state_34126__$1;
(statearr_34144_35940[(2)] = null);

(statearr_34144_35940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (17))){
var inst_34090 = (state_34126[(7)]);
var inst_34094 = cljs.core.chunk_first(inst_34090);
var inst_34095 = cljs.core.chunk_rest(inst_34090);
var inst_34096 = cljs.core.count(inst_34094);
var inst_34076 = inst_34095;
var inst_34077 = inst_34094;
var inst_34078 = inst_34096;
var inst_34079 = (0);
var state_34126__$1 = (function (){var statearr_34145 = state_34126;
(statearr_34145[(8)] = inst_34077);

(statearr_34145[(10)] = inst_34079);

(statearr_34145[(11)] = inst_34076);

(statearr_34145[(12)] = inst_34078);

return statearr_34145;
})();
var statearr_34146_35941 = state_34126__$1;
(statearr_34146_35941[(2)] = null);

(statearr_34146_35941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (3))){
var inst_34124 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34126__$1,inst_34124);
} else {
if((state_val_34127 === (12))){
var inst_34111 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
var statearr_34147_35947 = state_34126__$1;
(statearr_34147_35947[(2)] = inst_34111);

(statearr_34147_35947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (2))){
var state_34126__$1 = state_34126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34126__$1,(4),in$);
} else {
if((state_val_34127 === (23))){
var inst_34120 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
var statearr_34148_35954 = state_34126__$1;
(statearr_34148_35954[(2)] = inst_34120);

(statearr_34148_35954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (19))){
var inst_34106 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
var statearr_34149_35962 = state_34126__$1;
(statearr_34149_35962[(2)] = inst_34106);

(statearr_34149_35962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (11))){
var inst_34076 = (state_34126[(11)]);
var inst_34090 = (state_34126[(7)]);
var inst_34090__$1 = cljs.core.seq(inst_34076);
var state_34126__$1 = (function (){var statearr_34151 = state_34126;
(statearr_34151[(7)] = inst_34090__$1);

return statearr_34151;
})();
if(inst_34090__$1){
var statearr_34155_35963 = state_34126__$1;
(statearr_34155_35963[(1)] = (14));

} else {
var statearr_34156_35967 = state_34126__$1;
(statearr_34156_35967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (9))){
var inst_34113 = (state_34126[(2)]);
var inst_34114 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34126__$1 = (function (){var statearr_34159 = state_34126;
(statearr_34159[(15)] = inst_34113);

return statearr_34159;
})();
if(cljs.core.truth_(inst_34114)){
var statearr_34160_35968 = state_34126__$1;
(statearr_34160_35968[(1)] = (21));

} else {
var statearr_34161_35970 = state_34126__$1;
(statearr_34161_35970[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (5))){
var inst_34068 = cljs.core.async.close_BANG_(out);
var state_34126__$1 = state_34126;
var statearr_34162_35971 = state_34126__$1;
(statearr_34162_35971[(2)] = inst_34068);

(statearr_34162_35971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (14))){
var inst_34090 = (state_34126[(7)]);
var inst_34092 = cljs.core.chunked_seq_QMARK_(inst_34090);
var state_34126__$1 = state_34126;
if(inst_34092){
var statearr_34163_35974 = state_34126__$1;
(statearr_34163_35974[(1)] = (17));

} else {
var statearr_34165_35975 = state_34126__$1;
(statearr_34165_35975[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (16))){
var inst_34109 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
var statearr_34170_35977 = state_34126__$1;
(statearr_34170_35977[(2)] = inst_34109);

(statearr_34170_35977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (10))){
var inst_34077 = (state_34126[(8)]);
var inst_34079 = (state_34126[(10)]);
var inst_34084 = cljs.core._nth(inst_34077,inst_34079);
var state_34126__$1 = state_34126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34126__$1,(13),out,inst_34084);
} else {
if((state_val_34127 === (18))){
var inst_34090 = (state_34126[(7)]);
var inst_34099 = cljs.core.first(inst_34090);
var state_34126__$1 = state_34126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34126__$1,(20),out,inst_34099);
} else {
if((state_val_34127 === (8))){
var inst_34079 = (state_34126[(10)]);
var inst_34078 = (state_34126[(12)]);
var inst_34081 = (inst_34079 < inst_34078);
var inst_34082 = inst_34081;
var state_34126__$1 = state_34126;
if(cljs.core.truth_(inst_34082)){
var statearr_34176_35981 = state_34126__$1;
(statearr_34176_35981[(1)] = (10));

} else {
var statearr_34177_35983 = state_34126__$1;
(statearr_34177_35983[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31464__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31464__auto____0 = (function (){
var statearr_34178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34178[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31464__auto__);

(statearr_34178[(1)] = (1));

return statearr_34178;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31464__auto____1 = (function (state_34126){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_34126);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e34179){var ex__31467__auto__ = e34179;
var statearr_34180_35985 = state_34126;
(statearr_34180_35985[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_34126[(4)]))){
var statearr_34183_35986 = state_34126;
(statearr_34183_35986[(1)] = cljs.core.first((state_34126[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_34126;
state_34126 = G__35996;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31464__auto__ = function(state_34126){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31464__auto____1.call(this,state_34126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31464__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31464__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_34191 = f__31771__auto__();
(statearr_34191[(6)] = c__31770__auto__);

return statearr_34191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));

return c__31770__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34194 = arguments.length;
switch (G__34194) {
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
var G__34205 = arguments.length;
switch (G__34205) {
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
var G__34218 = arguments.length;
switch (G__34218) {
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
var c__31770__auto___36009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_34243){
var state_val_34244 = (state_34243[(1)]);
if((state_val_34244 === (7))){
var inst_34238 = (state_34243[(2)]);
var state_34243__$1 = state_34243;
var statearr_34245_36012 = state_34243__$1;
(statearr_34245_36012[(2)] = inst_34238);

(statearr_34245_36012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (1))){
var inst_34220 = null;
var state_34243__$1 = (function (){var statearr_34247 = state_34243;
(statearr_34247[(7)] = inst_34220);

return statearr_34247;
})();
var statearr_34251_36017 = state_34243__$1;
(statearr_34251_36017[(2)] = null);

(statearr_34251_36017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (4))){
var inst_34223 = (state_34243[(8)]);
var inst_34223__$1 = (state_34243[(2)]);
var inst_34224 = (inst_34223__$1 == null);
var inst_34225 = cljs.core.not(inst_34224);
var state_34243__$1 = (function (){var statearr_34255 = state_34243;
(statearr_34255[(8)] = inst_34223__$1);

return statearr_34255;
})();
if(inst_34225){
var statearr_34256_36020 = state_34243__$1;
(statearr_34256_36020[(1)] = (5));

} else {
var statearr_34259_36021 = state_34243__$1;
(statearr_34259_36021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (6))){
var state_34243__$1 = state_34243;
var statearr_34260_36022 = state_34243__$1;
(statearr_34260_36022[(2)] = null);

(statearr_34260_36022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (3))){
var inst_34240 = (state_34243[(2)]);
var inst_34241 = cljs.core.async.close_BANG_(out);
var state_34243__$1 = (function (){var statearr_34261 = state_34243;
(statearr_34261[(9)] = inst_34240);

return statearr_34261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34243__$1,inst_34241);
} else {
if((state_val_34244 === (2))){
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34243__$1,(4),ch);
} else {
if((state_val_34244 === (11))){
var inst_34223 = (state_34243[(8)]);
var inst_34232 = (state_34243[(2)]);
var inst_34220 = inst_34223;
var state_34243__$1 = (function (){var statearr_34262 = state_34243;
(statearr_34262[(10)] = inst_34232);

(statearr_34262[(7)] = inst_34220);

return statearr_34262;
})();
var statearr_34263_36029 = state_34243__$1;
(statearr_34263_36029[(2)] = null);

(statearr_34263_36029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (9))){
var inst_34223 = (state_34243[(8)]);
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34243__$1,(11),out,inst_34223);
} else {
if((state_val_34244 === (5))){
var inst_34223 = (state_34243[(8)]);
var inst_34220 = (state_34243[(7)]);
var inst_34227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34223,inst_34220);
var state_34243__$1 = state_34243;
if(inst_34227){
var statearr_34269_36032 = state_34243__$1;
(statearr_34269_36032[(1)] = (8));

} else {
var statearr_34270_36033 = state_34243__$1;
(statearr_34270_36033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (10))){
var inst_34235 = (state_34243[(2)]);
var state_34243__$1 = state_34243;
var statearr_34271_36034 = state_34243__$1;
(statearr_34271_36034[(2)] = inst_34235);

(statearr_34271_36034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (8))){
var inst_34220 = (state_34243[(7)]);
var tmp34267 = inst_34220;
var inst_34220__$1 = tmp34267;
var state_34243__$1 = (function (){var statearr_34272 = state_34243;
(statearr_34272[(7)] = inst_34220__$1);

return statearr_34272;
})();
var statearr_34274_36038 = state_34243__$1;
(statearr_34274_36038[(2)] = null);

(statearr_34274_36038[(1)] = (2));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_34282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34282[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_34282[(1)] = (1));

return statearr_34282;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_34243){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_34243);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e34283){var ex__31467__auto__ = e34283;
var statearr_34284_36043 = state_34243;
(statearr_34284_36043[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_34243[(4)]))){
var statearr_34285_36044 = state_34243;
(statearr_34285_36044[(1)] = cljs.core.first((state_34243[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36045 = state_34243;
state_34243 = G__36045;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_34289 = f__31771__auto__();
(statearr_34289[(6)] = c__31770__auto___36009);

return statearr_34289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34295 = arguments.length;
switch (G__34295) {
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
var c__31770__auto___36049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_34334){
var state_val_34335 = (state_34334[(1)]);
if((state_val_34335 === (7))){
var inst_34330 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34346_36051 = state_34334__$1;
(statearr_34346_36051[(2)] = inst_34330);

(statearr_34346_36051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (1))){
var inst_34297 = (new Array(n));
var inst_34298 = inst_34297;
var inst_34299 = (0);
var state_34334__$1 = (function (){var statearr_34348 = state_34334;
(statearr_34348[(7)] = inst_34298);

(statearr_34348[(8)] = inst_34299);

return statearr_34348;
})();
var statearr_34349_36052 = state_34334__$1;
(statearr_34349_36052[(2)] = null);

(statearr_34349_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (4))){
var inst_34302 = (state_34334[(9)]);
var inst_34302__$1 = (state_34334[(2)]);
var inst_34303 = (inst_34302__$1 == null);
var inst_34304 = cljs.core.not(inst_34303);
var state_34334__$1 = (function (){var statearr_34350 = state_34334;
(statearr_34350[(9)] = inst_34302__$1);

return statearr_34350;
})();
if(inst_34304){
var statearr_34351_36054 = state_34334__$1;
(statearr_34351_36054[(1)] = (5));

} else {
var statearr_34352_36055 = state_34334__$1;
(statearr_34352_36055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (15))){
var inst_34324 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34356_36059 = state_34334__$1;
(statearr_34356_36059[(2)] = inst_34324);

(statearr_34356_36059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (13))){
var state_34334__$1 = state_34334;
var statearr_34357_36062 = state_34334__$1;
(statearr_34357_36062[(2)] = null);

(statearr_34357_36062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (6))){
var inst_34299 = (state_34334[(8)]);
var inst_34320 = (inst_34299 > (0));
var state_34334__$1 = state_34334;
if(cljs.core.truth_(inst_34320)){
var statearr_34359_36063 = state_34334__$1;
(statearr_34359_36063[(1)] = (12));

} else {
var statearr_34360_36065 = state_34334__$1;
(statearr_34360_36065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (3))){
var inst_34332 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34334__$1,inst_34332);
} else {
if((state_val_34335 === (12))){
var inst_34298 = (state_34334[(7)]);
var inst_34322 = cljs.core.vec(inst_34298);
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34334__$1,(15),out,inst_34322);
} else {
if((state_val_34335 === (2))){
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34334__$1,(4),ch);
} else {
if((state_val_34335 === (11))){
var inst_34314 = (state_34334[(2)]);
var inst_34315 = (new Array(n));
var inst_34298 = inst_34315;
var inst_34299 = (0);
var state_34334__$1 = (function (){var statearr_34365 = state_34334;
(statearr_34365[(7)] = inst_34298);

(statearr_34365[(10)] = inst_34314);

(statearr_34365[(8)] = inst_34299);

return statearr_34365;
})();
var statearr_34366_36067 = state_34334__$1;
(statearr_34366_36067[(2)] = null);

(statearr_34366_36067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (9))){
var inst_34298 = (state_34334[(7)]);
var inst_34312 = cljs.core.vec(inst_34298);
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34334__$1,(11),out,inst_34312);
} else {
if((state_val_34335 === (5))){
var inst_34302 = (state_34334[(9)]);
var inst_34307 = (state_34334[(11)]);
var inst_34298 = (state_34334[(7)]);
var inst_34299 = (state_34334[(8)]);
var inst_34306 = (inst_34298[inst_34299] = inst_34302);
var inst_34307__$1 = (inst_34299 + (1));
var inst_34308 = (inst_34307__$1 < n);
var state_34334__$1 = (function (){var statearr_34367 = state_34334;
(statearr_34367[(12)] = inst_34306);

(statearr_34367[(11)] = inst_34307__$1);

return statearr_34367;
})();
if(cljs.core.truth_(inst_34308)){
var statearr_34368_36069 = state_34334__$1;
(statearr_34368_36069[(1)] = (8));

} else {
var statearr_34372_36070 = state_34334__$1;
(statearr_34372_36070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (14))){
var inst_34327 = (state_34334[(2)]);
var inst_34328 = cljs.core.async.close_BANG_(out);
var state_34334__$1 = (function (){var statearr_34375 = state_34334;
(statearr_34375[(13)] = inst_34327);

return statearr_34375;
})();
var statearr_34376_36073 = state_34334__$1;
(statearr_34376_36073[(2)] = inst_34328);

(statearr_34376_36073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (10))){
var inst_34318 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34377_36080 = state_34334__$1;
(statearr_34377_36080[(2)] = inst_34318);

(statearr_34377_36080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (8))){
var inst_34307 = (state_34334[(11)]);
var inst_34298 = (state_34334[(7)]);
var tmp34373 = inst_34298;
var inst_34298__$1 = tmp34373;
var inst_34299 = inst_34307;
var state_34334__$1 = (function (){var statearr_34378 = state_34334;
(statearr_34378[(7)] = inst_34298__$1);

(statearr_34378[(8)] = inst_34299);

return statearr_34378;
})();
var statearr_34379_36082 = state_34334__$1;
(statearr_34379_36082[(2)] = null);

(statearr_34379_36082[(1)] = (2));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_34334){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_34334);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e34382){var ex__31467__auto__ = e34382;
var statearr_34383_36088 = state_34334;
(statearr_34383_36088[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_34334[(4)]))){
var statearr_34384_36089 = state_34334;
(statearr_34384_36089[(1)] = cljs.core.first((state_34334[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36091 = state_34334;
state_34334 = G__36091;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_34334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_34334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_34385 = f__31771__auto__();
(statearr_34385[(6)] = c__31770__auto___36049);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34391 = arguments.length;
switch (G__34391) {
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
var c__31770__auto___36098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_34444){
var state_val_34445 = (state_34444[(1)]);
if((state_val_34445 === (7))){
var inst_34440 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34450_36100 = state_34444__$1;
(statearr_34450_36100[(2)] = inst_34440);

(statearr_34450_36100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (1))){
var inst_34396 = [];
var inst_34397 = inst_34396;
var inst_34398 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34444__$1 = (function (){var statearr_34451 = state_34444;
(statearr_34451[(7)] = inst_34398);

(statearr_34451[(8)] = inst_34397);

return statearr_34451;
})();
var statearr_34452_36101 = state_34444__$1;
(statearr_34452_36101[(2)] = null);

(statearr_34452_36101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (4))){
var inst_34401 = (state_34444[(9)]);
var inst_34401__$1 = (state_34444[(2)]);
var inst_34402 = (inst_34401__$1 == null);
var inst_34403 = cljs.core.not(inst_34402);
var state_34444__$1 = (function (){var statearr_34456 = state_34444;
(statearr_34456[(9)] = inst_34401__$1);

return statearr_34456;
})();
if(inst_34403){
var statearr_34457_36108 = state_34444__$1;
(statearr_34457_36108[(1)] = (5));

} else {
var statearr_34459_36110 = state_34444__$1;
(statearr_34459_36110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (15))){
var inst_34397 = (state_34444[(8)]);
var inst_34432 = cljs.core.vec(inst_34397);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34444__$1,(18),out,inst_34432);
} else {
if((state_val_34445 === (13))){
var inst_34427 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34460_36113 = state_34444__$1;
(statearr_34460_36113[(2)] = inst_34427);

(statearr_34460_36113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (6))){
var inst_34397 = (state_34444[(8)]);
var inst_34429 = inst_34397.length;
var inst_34430 = (inst_34429 > (0));
var state_34444__$1 = state_34444;
if(cljs.core.truth_(inst_34430)){
var statearr_34461_36115 = state_34444__$1;
(statearr_34461_36115[(1)] = (15));

} else {
var statearr_34462_36122 = state_34444__$1;
(statearr_34462_36122[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (17))){
var inst_34437 = (state_34444[(2)]);
var inst_34438 = cljs.core.async.close_BANG_(out);
var state_34444__$1 = (function (){var statearr_34463 = state_34444;
(statearr_34463[(10)] = inst_34437);

return statearr_34463;
})();
var statearr_34464_36124 = state_34444__$1;
(statearr_34464_36124[(2)] = inst_34438);

(statearr_34464_36124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (3))){
var inst_34442 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34444__$1,inst_34442);
} else {
if((state_val_34445 === (12))){
var inst_34397 = (state_34444[(8)]);
var inst_34420 = cljs.core.vec(inst_34397);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34444__$1,(14),out,inst_34420);
} else {
if((state_val_34445 === (2))){
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34444__$1,(4),ch);
} else {
if((state_val_34445 === (11))){
var inst_34405 = (state_34444[(11)]);
var inst_34401 = (state_34444[(9)]);
var inst_34397 = (state_34444[(8)]);
var inst_34416 = inst_34397.push(inst_34401);
var tmp34465 = inst_34397;
var inst_34397__$1 = tmp34465;
var inst_34398 = inst_34405;
var state_34444__$1 = (function (){var statearr_34466 = state_34444;
(statearr_34466[(7)] = inst_34398);

(statearr_34466[(8)] = inst_34397__$1);

(statearr_34466[(12)] = inst_34416);

return statearr_34466;
})();
var statearr_34467_36125 = state_34444__$1;
(statearr_34467_36125[(2)] = null);

(statearr_34467_36125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (9))){
var inst_34398 = (state_34444[(7)]);
var inst_34412 = cljs.core.keyword_identical_QMARK_(inst_34398,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34444__$1 = state_34444;
var statearr_34468_36128 = state_34444__$1;
(statearr_34468_36128[(2)] = inst_34412);

(statearr_34468_36128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (5))){
var inst_34398 = (state_34444[(7)]);
var inst_34409 = (state_34444[(13)]);
var inst_34405 = (state_34444[(11)]);
var inst_34401 = (state_34444[(9)]);
var inst_34405__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34401) : f.call(null,inst_34401));
var inst_34409__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34405__$1,inst_34398);
var state_34444__$1 = (function (){var statearr_34473 = state_34444;
(statearr_34473[(13)] = inst_34409__$1);

(statearr_34473[(11)] = inst_34405__$1);

return statearr_34473;
})();
if(inst_34409__$1){
var statearr_34474_36131 = state_34444__$1;
(statearr_34474_36131[(1)] = (8));

} else {
var statearr_34475_36133 = state_34444__$1;
(statearr_34475_36133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (14))){
var inst_34405 = (state_34444[(11)]);
var inst_34401 = (state_34444[(9)]);
var inst_34422 = (state_34444[(2)]);
var inst_34423 = [];
var inst_34424 = inst_34423.push(inst_34401);
var inst_34397 = inst_34423;
var inst_34398 = inst_34405;
var state_34444__$1 = (function (){var statearr_34476 = state_34444;
(statearr_34476[(7)] = inst_34398);

(statearr_34476[(14)] = inst_34422);

(statearr_34476[(15)] = inst_34424);

(statearr_34476[(8)] = inst_34397);

return statearr_34476;
})();
var statearr_34477_36134 = state_34444__$1;
(statearr_34477_36134[(2)] = null);

(statearr_34477_36134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (16))){
var state_34444__$1 = state_34444;
var statearr_34478_36135 = state_34444__$1;
(statearr_34478_36135[(2)] = null);

(statearr_34478_36135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (10))){
var inst_34414 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
if(cljs.core.truth_(inst_34414)){
var statearr_34479_36136 = state_34444__$1;
(statearr_34479_36136[(1)] = (11));

} else {
var statearr_34480_36137 = state_34444__$1;
(statearr_34480_36137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (18))){
var inst_34434 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34482_36138 = state_34444__$1;
(statearr_34482_36138[(2)] = inst_34434);

(statearr_34482_36138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (8))){
var inst_34409 = (state_34444[(13)]);
var state_34444__$1 = state_34444;
var statearr_34483_36139 = state_34444__$1;
(statearr_34483_36139[(2)] = inst_34409);

(statearr_34483_36139[(1)] = (10));


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
var cljs$core$async$state_machine__31464__auto__ = null;
var cljs$core$async$state_machine__31464__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$state_machine__31464__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
});
var cljs$core$async$state_machine__31464__auto____1 = (function (state_34444){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_34444);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e34485){var ex__31467__auto__ = e34485;
var statearr_34486_36145 = state_34444;
(statearr_34486_36145[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_34444[(4)]))){
var statearr_34487_36146 = state_34444;
(statearr_34487_36146[(1)] = cljs.core.first((state_34444[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36150 = state_34444;
state_34444 = G__36150;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
cljs$core$async$state_machine__31464__auto__ = function(state_34444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31464__auto____1.call(this,state_34444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31464__auto____0;
cljs$core$async$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31464__auto____1;
return cljs$core$async$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_34489 = f__31771__auto__();
(statearr_34489[(6)] = c__31770__auto___36098);

return statearr_34489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
