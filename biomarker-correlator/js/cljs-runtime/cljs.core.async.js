goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__74742 = arguments.length;
switch (G__74742) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74743 = (function (f,blockable,meta74744){
this.f = f;
this.blockable = blockable;
this.meta74744 = meta74744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74745,meta74744__$1){
var self__ = this;
var _74745__$1 = this;
return (new cljs.core.async.t_cljs$core$async74743(self__.f,self__.blockable,meta74744__$1));
}));

(cljs.core.async.t_cljs$core$async74743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74745){
var self__ = this;
var _74745__$1 = this;
return self__.meta74744;
}));

(cljs.core.async.t_cljs$core$async74743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async74743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async74743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta74744","meta74744",-1919860567,null)], null);
}));

(cljs.core.async.t_cljs$core$async74743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74743");

(cljs.core.async.t_cljs$core$async74743.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async74743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74743.
 */
cljs.core.async.__GT_t_cljs$core$async74743 = (function cljs$core$async$__GT_t_cljs$core$async74743(f__$1,blockable__$1,meta74744){
return (new cljs.core.async.t_cljs$core$async74743(f__$1,blockable__$1,meta74744));
});

}

return (new cljs.core.async.t_cljs$core$async74743(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__74756 = arguments.length;
switch (G__74756) {
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
var G__74762 = arguments.length;
switch (G__74762) {
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
var G__74766 = arguments.length;
switch (G__74766) {
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
var val_77081 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_77081) : fn1.call(null,val_77081));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_77081) : fn1.call(null,val_77081));
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
var G__74770 = arguments.length;
switch (G__74770) {
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
var n__4741__auto___77085 = n;
var x_77086 = (0);
while(true){
if((x_77086 < n__4741__auto___77085)){
(a[x_77086] = x_77086);

var G__77087 = (x_77086 + (1));
x_77086 = G__77087;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74780 = (function (flag,meta74781){
this.flag = flag;
this.meta74781 = meta74781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74782,meta74781__$1){
var self__ = this;
var _74782__$1 = this;
return (new cljs.core.async.t_cljs$core$async74780(self__.flag,meta74781__$1));
}));

(cljs.core.async.t_cljs$core$async74780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74782){
var self__ = this;
var _74782__$1 = this;
return self__.meta74781;
}));

(cljs.core.async.t_cljs$core$async74780.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async74780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async74780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta74781","meta74781",1911480329,null)], null);
}));

(cljs.core.async.t_cljs$core$async74780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74780");

(cljs.core.async.t_cljs$core$async74780.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async74780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74780.
 */
cljs.core.async.__GT_t_cljs$core$async74780 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async74780(flag__$1,meta74781){
return (new cljs.core.async.t_cljs$core$async74780(flag__$1,meta74781));
});

}

return (new cljs.core.async.t_cljs$core$async74780(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74791 = (function (flag,cb,meta74792){
this.flag = flag;
this.cb = cb;
this.meta74792 = meta74792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74793,meta74792__$1){
var self__ = this;
var _74793__$1 = this;
return (new cljs.core.async.t_cljs$core$async74791(self__.flag,self__.cb,meta74792__$1));
}));

(cljs.core.async.t_cljs$core$async74791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74793){
var self__ = this;
var _74793__$1 = this;
return self__.meta74792;
}));

(cljs.core.async.t_cljs$core$async74791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async74791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async74791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta74792","meta74792",1800718824,null)], null);
}));

(cljs.core.async.t_cljs$core$async74791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74791");

(cljs.core.async.t_cljs$core$async74791.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async74791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74791.
 */
cljs.core.async.__GT_t_cljs$core$async74791 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async74791(flag__$1,cb__$1,meta74792){
return (new cljs.core.async.t_cljs$core$async74791(flag__$1,cb__$1,meta74792));
});

}

return (new cljs.core.async.t_cljs$core$async74791(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__74795_SHARP_){
var G__74805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__74795_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__74805) : fret.call(null,G__74805));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__74796_SHARP_){
var G__74808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__74796_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__74808) : fret.call(null,G__74808));
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
var G__77090 = (i + (1));
i = G__77090;
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
var len__4864__auto___77091 = arguments.length;
var i__4865__auto___77092 = (0);
while(true){
if((i__4865__auto___77092 < len__4864__auto___77091)){
args__4870__auto__.push((arguments[i__4865__auto___77092]));

var G__77093 = (i__4865__auto___77092 + (1));
i__4865__auto___77092 = G__77093;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__74813){
var map__74814 = p__74813;
var map__74814__$1 = cljs.core.__destructure_map(map__74814);
var opts = map__74814__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq74811){
var G__74812 = cljs.core.first(seq74811);
var seq74811__$1 = cljs.core.next(seq74811);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74812,seq74811__$1);
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
var G__74817 = arguments.length;
switch (G__74817) {
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
var c__36136__auto___77098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_74905){
var state_val_74906 = (state_74905[(1)]);
if((state_val_74906 === (7))){
var inst_74897 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
var statearr_74925_77099 = state_74905__$1;
(statearr_74925_77099[(2)] = inst_74897);

(statearr_74925_77099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (1))){
var state_74905__$1 = state_74905;
var statearr_74932_77100 = state_74905__$1;
(statearr_74932_77100[(2)] = null);

(statearr_74932_77100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (4))){
var inst_74861 = (state_74905[(7)]);
var inst_74861__$1 = (state_74905[(2)]);
var inst_74870 = (inst_74861__$1 == null);
var state_74905__$1 = (function (){var statearr_74945 = state_74905;
(statearr_74945[(7)] = inst_74861__$1);

return statearr_74945;
})();
if(cljs.core.truth_(inst_74870)){
var statearr_74946_77101 = state_74905__$1;
(statearr_74946_77101[(1)] = (5));

} else {
var statearr_74947_77102 = state_74905__$1;
(statearr_74947_77102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (13))){
var state_74905__$1 = state_74905;
var statearr_74950_77103 = state_74905__$1;
(statearr_74950_77103[(2)] = null);

(statearr_74950_77103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (6))){
var inst_74861 = (state_74905[(7)]);
var state_74905__$1 = state_74905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74905__$1,(11),to,inst_74861);
} else {
if((state_val_74906 === (3))){
var inst_74903 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74905__$1,inst_74903);
} else {
if((state_val_74906 === (12))){
var state_74905__$1 = state_74905;
var statearr_74959_77104 = state_74905__$1;
(statearr_74959_77104[(2)] = null);

(statearr_74959_77104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (2))){
var state_74905__$1 = state_74905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74905__$1,(4),from);
} else {
if((state_val_74906 === (11))){
var inst_74889 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
if(cljs.core.truth_(inst_74889)){
var statearr_74974_77105 = state_74905__$1;
(statearr_74974_77105[(1)] = (12));

} else {
var statearr_74975_77107 = state_74905__$1;
(statearr_74975_77107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (9))){
var state_74905__$1 = state_74905;
var statearr_74976_77108 = state_74905__$1;
(statearr_74976_77108[(2)] = null);

(statearr_74976_77108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (5))){
var state_74905__$1 = state_74905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74977_77109 = state_74905__$1;
(statearr_74977_77109[(1)] = (8));

} else {
var statearr_74978_77110 = state_74905__$1;
(statearr_74978_77110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (14))){
var inst_74895 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
var statearr_74983_77111 = state_74905__$1;
(statearr_74983_77111[(2)] = inst_74895);

(statearr_74983_77111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (10))){
var inst_74886 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
var statearr_74984_77112 = state_74905__$1;
(statearr_74984_77112[(2)] = inst_74886);

(statearr_74984_77112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (8))){
var inst_74879 = cljs.core.async.close_BANG_(to);
var state_74905__$1 = state_74905;
var statearr_74985_77113 = state_74905__$1;
(statearr_74985_77113[(2)] = inst_74879);

(statearr_74985_77113[(1)] = (10));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_74986 = [null,null,null,null,null,null,null,null];
(statearr_74986[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_74986[(1)] = (1));

return statearr_74986;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_74905){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_74905);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e74987){var ex__36070__auto__ = e74987;
var statearr_74988_77121 = state_74905;
(statearr_74988_77121[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_74905[(4)]))){
var statearr_74989_77126 = state_74905;
(statearr_74989_77126[(1)] = cljs.core.first((state_74905[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77127 = state_74905;
state_74905 = G__77127;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_74905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_74905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_74990 = f__36137__auto__();
(statearr_74990[(6)] = c__36136__auto___77098);

return statearr_74990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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
var process = (function (p__74996){
var vec__74997 = p__74996;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74997,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74997,(1),null);
var job = vec__74997;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36136__auto___77132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75004){
var state_val_75005 = (state_75004[(1)]);
if((state_val_75005 === (1))){
var state_75004__$1 = state_75004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75004__$1,(2),res,v);
} else {
if((state_val_75005 === (2))){
var inst_75001 = (state_75004[(2)]);
var inst_75002 = cljs.core.async.close_BANG_(res);
var state_75004__$1 = (function (){var statearr_75006 = state_75004;
(statearr_75006[(7)] = inst_75001);

return statearr_75006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75004__$1,inst_75002);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_75007 = [null,null,null,null,null,null,null,null];
(statearr_75007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_75007[(1)] = (1));

return statearr_75007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_75004){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75004);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75008){var ex__36070__auto__ = e75008;
var statearr_75009_77138 = state_75004;
(statearr_75009_77138[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75004[(4)]))){
var statearr_75010_77139 = state_75004;
(statearr_75010_77139[(1)] = cljs.core.first((state_75004[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77143 = state_75004;
state_75004 = G__77143;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_75004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_75004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75011 = f__36137__auto__();
(statearr_75011[(6)] = c__36136__auto___77132);

return statearr_75011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__75017){
var vec__75019 = p__75017;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75019,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75019,(1),null);
var job = vec__75019;
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
var n__4741__auto___77148 = n;
var __77149 = (0);
while(true){
if((__77149 < n__4741__auto___77148)){
var G__75040_77150 = type;
var G__75040_77151__$1 = (((G__75040_77150 instanceof cljs.core.Keyword))?G__75040_77150.fqn:null);
switch (G__75040_77151__$1) {
case "compute":
var c__36136__auto___77153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__77149,c__36136__auto___77153,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async){
return (function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = ((function (__77149,c__36136__auto___77153,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async){
return (function (state_75065){
var state_val_75066 = (state_75065[(1)]);
if((state_val_75066 === (1))){
var state_75065__$1 = state_75065;
var statearr_75068_77154 = state_75065__$1;
(statearr_75068_77154[(2)] = null);

(statearr_75068_77154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75066 === (2))){
var state_75065__$1 = state_75065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75065__$1,(4),jobs);
} else {
if((state_val_75066 === (3))){
var inst_75063 = (state_75065[(2)]);
var state_75065__$1 = state_75065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75065__$1,inst_75063);
} else {
if((state_val_75066 === (4))){
var inst_75055 = (state_75065[(2)]);
var inst_75056 = process(inst_75055);
var state_75065__$1 = state_75065;
if(cljs.core.truth_(inst_75056)){
var statearr_75069_77158 = state_75065__$1;
(statearr_75069_77158[(1)] = (5));

} else {
var statearr_75070_77159 = state_75065__$1;
(statearr_75070_77159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75066 === (5))){
var state_75065__$1 = state_75065;
var statearr_75073_77163 = state_75065__$1;
(statearr_75073_77163[(2)] = null);

(statearr_75073_77163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75066 === (6))){
var state_75065__$1 = state_75065;
var statearr_75080_77165 = state_75065__$1;
(statearr_75080_77165[(2)] = null);

(statearr_75080_77165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75066 === (7))){
var inst_75061 = (state_75065[(2)]);
var state_75065__$1 = state_75065;
var statearr_75081_77169 = state_75065__$1;
(statearr_75081_77169[(2)] = inst_75061);

(statearr_75081_77169[(1)] = (3));


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
});})(__77149,c__36136__auto___77153,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async))
;
return ((function (__77149,switch__36066__auto__,c__36136__auto___77153,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_75086 = [null,null,null,null,null,null,null];
(statearr_75086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_75086[(1)] = (1));

return statearr_75086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_75065){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75065);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75089){var ex__36070__auto__ = e75089;
var statearr_75094_77175 = state_75065;
(statearr_75094_77175[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75065[(4)]))){
var statearr_75101_77176 = state_75065;
(statearr_75101_77176[(1)] = cljs.core.first((state_75065[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77181 = state_75065;
state_75065 = G__77181;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_75065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_75065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(__77149,switch__36066__auto__,c__36136__auto___77153,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async))
})();
var state__36138__auto__ = (function (){var statearr_75128 = f__36137__auto__();
(statearr_75128[(6)] = c__36136__auto___77153);

return statearr_75128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
});})(__77149,c__36136__auto___77153,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async))
);


break;
case "async":
var c__36136__auto___77182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__77149,c__36136__auto___77182,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async){
return (function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = ((function (__77149,c__36136__auto___77182,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async){
return (function (state_75145){
var state_val_75146 = (state_75145[(1)]);
if((state_val_75146 === (1))){
var state_75145__$1 = state_75145;
var statearr_75164_77183 = state_75145__$1;
(statearr_75164_77183[(2)] = null);

(statearr_75164_77183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75146 === (2))){
var state_75145__$1 = state_75145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75145__$1,(4),jobs);
} else {
if((state_val_75146 === (3))){
var inst_75143 = (state_75145[(2)]);
var state_75145__$1 = state_75145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75145__$1,inst_75143);
} else {
if((state_val_75146 === (4))){
var inst_75131 = (state_75145[(2)]);
var inst_75132 = async(inst_75131);
var state_75145__$1 = state_75145;
if(cljs.core.truth_(inst_75132)){
var statearr_75165_77186 = state_75145__$1;
(statearr_75165_77186[(1)] = (5));

} else {
var statearr_75166_77187 = state_75145__$1;
(statearr_75166_77187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75146 === (5))){
var state_75145__$1 = state_75145;
var statearr_75168_77188 = state_75145__$1;
(statearr_75168_77188[(2)] = null);

(statearr_75168_77188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75146 === (6))){
var state_75145__$1 = state_75145;
var statearr_75169_77190 = state_75145__$1;
(statearr_75169_77190[(2)] = null);

(statearr_75169_77190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75146 === (7))){
var inst_75141 = (state_75145[(2)]);
var state_75145__$1 = state_75145;
var statearr_75170_77191 = state_75145__$1;
(statearr_75170_77191[(2)] = inst_75141);

(statearr_75170_77191[(1)] = (3));


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
});})(__77149,c__36136__auto___77182,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async))
;
return ((function (__77149,switch__36066__auto__,c__36136__auto___77182,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_75179 = [null,null,null,null,null,null,null];
(statearr_75179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_75179[(1)] = (1));

return statearr_75179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_75145){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75145);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75184){var ex__36070__auto__ = e75184;
var statearr_75185_77193 = state_75145;
(statearr_75185_77193[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75145[(4)]))){
var statearr_75186_77194 = state_75145;
(statearr_75186_77194[(1)] = cljs.core.first((state_75145[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77195 = state_75145;
state_75145 = G__77195;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_75145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_75145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(__77149,switch__36066__auto__,c__36136__auto___77182,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async))
})();
var state__36138__auto__ = (function (){var statearr_75188 = f__36137__auto__();
(statearr_75188[(6)] = c__36136__auto___77182);

return statearr_75188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
});})(__77149,c__36136__auto___77182,G__75040_77150,G__75040_77151__$1,n__4741__auto___77148,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75040_77151__$1)].join('')));

}

var G__77196 = (__77149 + (1));
__77149 = G__77196;
continue;
} else {
}
break;
}

var c__36136__auto___77197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75210){
var state_val_75211 = (state_75210[(1)]);
if((state_val_75211 === (7))){
var inst_75206 = (state_75210[(2)]);
var state_75210__$1 = state_75210;
var statearr_75212_77198 = state_75210__$1;
(statearr_75212_77198[(2)] = inst_75206);

(statearr_75212_77198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75211 === (1))){
var state_75210__$1 = state_75210;
var statearr_75213_77199 = state_75210__$1;
(statearr_75213_77199[(2)] = null);

(statearr_75213_77199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75211 === (4))){
var inst_75191 = (state_75210[(7)]);
var inst_75191__$1 = (state_75210[(2)]);
var inst_75192 = (inst_75191__$1 == null);
var state_75210__$1 = (function (){var statearr_75214 = state_75210;
(statearr_75214[(7)] = inst_75191__$1);

return statearr_75214;
})();
if(cljs.core.truth_(inst_75192)){
var statearr_75215_77200 = state_75210__$1;
(statearr_75215_77200[(1)] = (5));

} else {
var statearr_75216_77201 = state_75210__$1;
(statearr_75216_77201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75211 === (6))){
var inst_75196 = (state_75210[(8)]);
var inst_75191 = (state_75210[(7)]);
var inst_75196__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_75197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75198 = [inst_75191,inst_75196__$1];
var inst_75199 = (new cljs.core.PersistentVector(null,2,(5),inst_75197,inst_75198,null));
var state_75210__$1 = (function (){var statearr_75218 = state_75210;
(statearr_75218[(8)] = inst_75196__$1);

return statearr_75218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75210__$1,(8),jobs,inst_75199);
} else {
if((state_val_75211 === (3))){
var inst_75208 = (state_75210[(2)]);
var state_75210__$1 = state_75210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75210__$1,inst_75208);
} else {
if((state_val_75211 === (2))){
var state_75210__$1 = state_75210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75210__$1,(4),from);
} else {
if((state_val_75211 === (9))){
var inst_75203 = (state_75210[(2)]);
var state_75210__$1 = (function (){var statearr_75219 = state_75210;
(statearr_75219[(9)] = inst_75203);

return statearr_75219;
})();
var statearr_75220_77202 = state_75210__$1;
(statearr_75220_77202[(2)] = null);

(statearr_75220_77202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75211 === (5))){
var inst_75194 = cljs.core.async.close_BANG_(jobs);
var state_75210__$1 = state_75210;
var statearr_75221_77203 = state_75210__$1;
(statearr_75221_77203[(2)] = inst_75194);

(statearr_75221_77203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75211 === (8))){
var inst_75196 = (state_75210[(8)]);
var inst_75201 = (state_75210[(2)]);
var state_75210__$1 = (function (){var statearr_75222 = state_75210;
(statearr_75222[(10)] = inst_75201);

return statearr_75222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75210__$1,(9),results,inst_75196);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_75223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_75223[(1)] = (1));

return statearr_75223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_75210){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75210);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75224){var ex__36070__auto__ = e75224;
var statearr_75225_77206 = state_75210;
(statearr_75225_77206[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75210[(4)]))){
var statearr_75226_77207 = state_75210;
(statearr_75226_77207[(1)] = cljs.core.first((state_75210[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77208 = state_75210;
state_75210 = G__77208;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_75210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_75210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75227 = f__36137__auto__();
(statearr_75227[(6)] = c__36136__auto___77197);

return statearr_75227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


var c__36136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75265){
var state_val_75266 = (state_75265[(1)]);
if((state_val_75266 === (7))){
var inst_75261 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
var statearr_75267_77209 = state_75265__$1;
(statearr_75267_77209[(2)] = inst_75261);

(statearr_75267_77209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (20))){
var state_75265__$1 = state_75265;
var statearr_75268_77210 = state_75265__$1;
(statearr_75268_77210[(2)] = null);

(statearr_75268_77210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (1))){
var state_75265__$1 = state_75265;
var statearr_75269_77211 = state_75265__$1;
(statearr_75269_77211[(2)] = null);

(statearr_75269_77211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (4))){
var inst_75230 = (state_75265[(7)]);
var inst_75230__$1 = (state_75265[(2)]);
var inst_75231 = (inst_75230__$1 == null);
var state_75265__$1 = (function (){var statearr_75270 = state_75265;
(statearr_75270[(7)] = inst_75230__$1);

return statearr_75270;
})();
if(cljs.core.truth_(inst_75231)){
var statearr_75271_77212 = state_75265__$1;
(statearr_75271_77212[(1)] = (5));

} else {
var statearr_75272_77213 = state_75265__$1;
(statearr_75272_77213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (15))){
var inst_75243 = (state_75265[(8)]);
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75265__$1,(18),to,inst_75243);
} else {
if((state_val_75266 === (21))){
var inst_75256 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
var statearr_75273_77214 = state_75265__$1;
(statearr_75273_77214[(2)] = inst_75256);

(statearr_75273_77214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (13))){
var inst_75258 = (state_75265[(2)]);
var state_75265__$1 = (function (){var statearr_75274 = state_75265;
(statearr_75274[(9)] = inst_75258);

return statearr_75274;
})();
var statearr_75275_77215 = state_75265__$1;
(statearr_75275_77215[(2)] = null);

(statearr_75275_77215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (6))){
var inst_75230 = (state_75265[(7)]);
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75265__$1,(11),inst_75230);
} else {
if((state_val_75266 === (17))){
var inst_75251 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
if(cljs.core.truth_(inst_75251)){
var statearr_75276_77216 = state_75265__$1;
(statearr_75276_77216[(1)] = (19));

} else {
var statearr_75277_77217 = state_75265__$1;
(statearr_75277_77217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (3))){
var inst_75263 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75265__$1,inst_75263);
} else {
if((state_val_75266 === (12))){
var inst_75240 = (state_75265[(10)]);
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75265__$1,(14),inst_75240);
} else {
if((state_val_75266 === (2))){
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75265__$1,(4),results);
} else {
if((state_val_75266 === (19))){
var state_75265__$1 = state_75265;
var statearr_75279_77220 = state_75265__$1;
(statearr_75279_77220[(2)] = null);

(statearr_75279_77220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (11))){
var inst_75240 = (state_75265[(2)]);
var state_75265__$1 = (function (){var statearr_75280 = state_75265;
(statearr_75280[(10)] = inst_75240);

return statearr_75280;
})();
var statearr_75281_77221 = state_75265__$1;
(statearr_75281_77221[(2)] = null);

(statearr_75281_77221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (9))){
var state_75265__$1 = state_75265;
var statearr_75282_77222 = state_75265__$1;
(statearr_75282_77222[(2)] = null);

(statearr_75282_77222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (5))){
var state_75265__$1 = state_75265;
if(cljs.core.truth_(close_QMARK_)){
var statearr_75285_77223 = state_75265__$1;
(statearr_75285_77223[(1)] = (8));

} else {
var statearr_75286_77224 = state_75265__$1;
(statearr_75286_77224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (14))){
var inst_75243 = (state_75265[(8)]);
var inst_75245 = (state_75265[(11)]);
var inst_75243__$1 = (state_75265[(2)]);
var inst_75244 = (inst_75243__$1 == null);
var inst_75245__$1 = cljs.core.not(inst_75244);
var state_75265__$1 = (function (){var statearr_75288 = state_75265;
(statearr_75288[(8)] = inst_75243__$1);

(statearr_75288[(11)] = inst_75245__$1);

return statearr_75288;
})();
if(inst_75245__$1){
var statearr_75289_77225 = state_75265__$1;
(statearr_75289_77225[(1)] = (15));

} else {
var statearr_75290_77226 = state_75265__$1;
(statearr_75290_77226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (16))){
var inst_75245 = (state_75265[(11)]);
var state_75265__$1 = state_75265;
var statearr_75292_77227 = state_75265__$1;
(statearr_75292_77227[(2)] = inst_75245);

(statearr_75292_77227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (10))){
var inst_75237 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
var statearr_75294_77228 = state_75265__$1;
(statearr_75294_77228[(2)] = inst_75237);

(statearr_75294_77228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (18))){
var inst_75248 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
var statearr_75295_77229 = state_75265__$1;
(statearr_75295_77229[(2)] = inst_75248);

(statearr_75295_77229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (8))){
var inst_75234 = cljs.core.async.close_BANG_(to);
var state_75265__$1 = state_75265;
var statearr_75296_77231 = state_75265__$1;
(statearr_75296_77231[(2)] = inst_75234);

(statearr_75296_77231[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_75299 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_75299[(1)] = (1));

return statearr_75299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_75265){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75265);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75300){var ex__36070__auto__ = e75300;
var statearr_75301_77233 = state_75265;
(statearr_75301_77233[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75265[(4)]))){
var statearr_75302_77234 = state_75265;
(statearr_75302_77234[(1)] = cljs.core.first((state_75265[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77235 = state_75265;
state_75265 = G__77235;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_75265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_75265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75306 = f__36137__auto__();
(statearr_75306[(6)] = c__36136__auto__);

return statearr_75306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

return c__36136__auto__;
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
var G__75308 = arguments.length;
switch (G__75308) {
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
var G__75320 = arguments.length;
switch (G__75320) {
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
var G__75322 = arguments.length;
switch (G__75322) {
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
var c__36136__auto___77252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75348){
var state_val_75349 = (state_75348[(1)]);
if((state_val_75349 === (7))){
var inst_75344 = (state_75348[(2)]);
var state_75348__$1 = state_75348;
var statearr_75351_77257 = state_75348__$1;
(statearr_75351_77257[(2)] = inst_75344);

(statearr_75351_77257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (1))){
var state_75348__$1 = state_75348;
var statearr_75352_77258 = state_75348__$1;
(statearr_75352_77258[(2)] = null);

(statearr_75352_77258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (4))){
var inst_75325 = (state_75348[(7)]);
var inst_75325__$1 = (state_75348[(2)]);
var inst_75326 = (inst_75325__$1 == null);
var state_75348__$1 = (function (){var statearr_75357 = state_75348;
(statearr_75357[(7)] = inst_75325__$1);

return statearr_75357;
})();
if(cljs.core.truth_(inst_75326)){
var statearr_75358_77259 = state_75348__$1;
(statearr_75358_77259[(1)] = (5));

} else {
var statearr_75359_77261 = state_75348__$1;
(statearr_75359_77261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (13))){
var state_75348__$1 = state_75348;
var statearr_75361_77262 = state_75348__$1;
(statearr_75361_77262[(2)] = null);

(statearr_75361_77262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (6))){
var inst_75325 = (state_75348[(7)]);
var inst_75331 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_75325) : p.call(null,inst_75325));
var state_75348__$1 = state_75348;
if(cljs.core.truth_(inst_75331)){
var statearr_75362_77263 = state_75348__$1;
(statearr_75362_77263[(1)] = (9));

} else {
var statearr_75363_77264 = state_75348__$1;
(statearr_75363_77264[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (3))){
var inst_75346 = (state_75348[(2)]);
var state_75348__$1 = state_75348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75348__$1,inst_75346);
} else {
if((state_val_75349 === (12))){
var state_75348__$1 = state_75348;
var statearr_75365_77265 = state_75348__$1;
(statearr_75365_77265[(2)] = null);

(statearr_75365_77265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (2))){
var state_75348__$1 = state_75348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75348__$1,(4),ch);
} else {
if((state_val_75349 === (11))){
var inst_75325 = (state_75348[(7)]);
var inst_75335 = (state_75348[(2)]);
var state_75348__$1 = state_75348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75348__$1,(8),inst_75335,inst_75325);
} else {
if((state_val_75349 === (9))){
var state_75348__$1 = state_75348;
var statearr_75368_77266 = state_75348__$1;
(statearr_75368_77266[(2)] = tc);

(statearr_75368_77266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (5))){
var inst_75328 = cljs.core.async.close_BANG_(tc);
var inst_75329 = cljs.core.async.close_BANG_(fc);
var state_75348__$1 = (function (){var statearr_75370 = state_75348;
(statearr_75370[(8)] = inst_75328);

return statearr_75370;
})();
var statearr_75372_77267 = state_75348__$1;
(statearr_75372_77267[(2)] = inst_75329);

(statearr_75372_77267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (14))){
var inst_75342 = (state_75348[(2)]);
var state_75348__$1 = state_75348;
var statearr_75373_77268 = state_75348__$1;
(statearr_75373_77268[(2)] = inst_75342);

(statearr_75373_77268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (10))){
var state_75348__$1 = state_75348;
var statearr_75374_77269 = state_75348__$1;
(statearr_75374_77269[(2)] = fc);

(statearr_75374_77269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75349 === (8))){
var inst_75337 = (state_75348[(2)]);
var state_75348__$1 = state_75348;
if(cljs.core.truth_(inst_75337)){
var statearr_75375_77270 = state_75348__$1;
(statearr_75375_77270[(1)] = (12));

} else {
var statearr_75376_77271 = state_75348__$1;
(statearr_75376_77271[(1)] = (13));

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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_75377 = [null,null,null,null,null,null,null,null,null];
(statearr_75377[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_75377[(1)] = (1));

return statearr_75377;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_75348){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75348);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75380){var ex__36070__auto__ = e75380;
var statearr_75383_77272 = state_75348;
(statearr_75383_77272[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75348[(4)]))){
var statearr_75384_77273 = state_75348;
(statearr_75384_77273[(1)] = cljs.core.first((state_75348[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77274 = state_75348;
state_75348 = G__77274;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_75348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_75348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75385 = f__36137__auto__();
(statearr_75385[(6)] = c__36136__auto___77252);

return statearr_75385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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
var c__36136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75417){
var state_val_75418 = (state_75417[(1)]);
if((state_val_75418 === (7))){
var inst_75413 = (state_75417[(2)]);
var state_75417__$1 = state_75417;
var statearr_75422_77275 = state_75417__$1;
(statearr_75422_77275[(2)] = inst_75413);

(statearr_75422_77275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (1))){
var inst_75395 = init;
var inst_75396 = inst_75395;
var state_75417__$1 = (function (){var statearr_75423 = state_75417;
(statearr_75423[(7)] = inst_75396);

return statearr_75423;
})();
var statearr_75424_77276 = state_75417__$1;
(statearr_75424_77276[(2)] = null);

(statearr_75424_77276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (4))){
var inst_75400 = (state_75417[(8)]);
var inst_75400__$1 = (state_75417[(2)]);
var inst_75401 = (inst_75400__$1 == null);
var state_75417__$1 = (function (){var statearr_75425 = state_75417;
(statearr_75425[(8)] = inst_75400__$1);

return statearr_75425;
})();
if(cljs.core.truth_(inst_75401)){
var statearr_75426_77277 = state_75417__$1;
(statearr_75426_77277[(1)] = (5));

} else {
var statearr_75428_77278 = state_75417__$1;
(statearr_75428_77278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (6))){
var inst_75400 = (state_75417[(8)]);
var inst_75404 = (state_75417[(9)]);
var inst_75396 = (state_75417[(7)]);
var inst_75404__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_75396,inst_75400) : f.call(null,inst_75396,inst_75400));
var inst_75405 = cljs.core.reduced_QMARK_(inst_75404__$1);
var state_75417__$1 = (function (){var statearr_75431 = state_75417;
(statearr_75431[(9)] = inst_75404__$1);

return statearr_75431;
})();
if(inst_75405){
var statearr_75432_77280 = state_75417__$1;
(statearr_75432_77280[(1)] = (8));

} else {
var statearr_75433_77281 = state_75417__$1;
(statearr_75433_77281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (3))){
var inst_75415 = (state_75417[(2)]);
var state_75417__$1 = state_75417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75417__$1,inst_75415);
} else {
if((state_val_75418 === (2))){
var state_75417__$1 = state_75417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75417__$1,(4),ch);
} else {
if((state_val_75418 === (9))){
var inst_75404 = (state_75417[(9)]);
var inst_75396 = inst_75404;
var state_75417__$1 = (function (){var statearr_75438 = state_75417;
(statearr_75438[(7)] = inst_75396);

return statearr_75438;
})();
var statearr_75439_77283 = state_75417__$1;
(statearr_75439_77283[(2)] = null);

(statearr_75439_77283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (5))){
var inst_75396 = (state_75417[(7)]);
var state_75417__$1 = state_75417;
var statearr_75440_77284 = state_75417__$1;
(statearr_75440_77284[(2)] = inst_75396);

(statearr_75440_77284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (10))){
var inst_75411 = (state_75417[(2)]);
var state_75417__$1 = state_75417;
var statearr_75442_77285 = state_75417__$1;
(statearr_75442_77285[(2)] = inst_75411);

(statearr_75442_77285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75418 === (8))){
var inst_75404 = (state_75417[(9)]);
var inst_75407 = cljs.core.deref(inst_75404);
var state_75417__$1 = state_75417;
var statearr_75443_77286 = state_75417__$1;
(statearr_75443_77286[(2)] = inst_75407);

(statearr_75443_77286[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36067__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36067__auto____0 = (function (){
var statearr_75451 = [null,null,null,null,null,null,null,null,null,null];
(statearr_75451[(0)] = cljs$core$async$reduce_$_state_machine__36067__auto__);

(statearr_75451[(1)] = (1));

return statearr_75451;
});
var cljs$core$async$reduce_$_state_machine__36067__auto____1 = (function (state_75417){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75417);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75454){var ex__36070__auto__ = e75454;
var statearr_75455_77287 = state_75417;
(statearr_75455_77287[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75417[(4)]))){
var statearr_75456_77288 = state_75417;
(statearr_75456_77288[(1)] = cljs.core.first((state_75417[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77289 = state_75417;
state_75417 = G__77289;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36067__auto__ = function(state_75417){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36067__auto____1.call(this,state_75417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36067__auto____0;
cljs$core$async$reduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36067__auto____1;
return cljs$core$async$reduce_$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75458 = f__36137__auto__();
(statearr_75458[(6)] = c__36136__auto__);

return statearr_75458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

return c__36136__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75465){
var state_val_75466 = (state_75465[(1)]);
if((state_val_75466 === (1))){
var inst_75460 = cljs.core.async.reduce(f__$1,init,ch);
var state_75465__$1 = state_75465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75465__$1,(2),inst_75460);
} else {
if((state_val_75466 === (2))){
var inst_75462 = (state_75465[(2)]);
var inst_75463 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_75462) : f__$1.call(null,inst_75462));
var state_75465__$1 = state_75465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75465__$1,inst_75463);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36067__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36067__auto____0 = (function (){
var statearr_75469 = [null,null,null,null,null,null,null];
(statearr_75469[(0)] = cljs$core$async$transduce_$_state_machine__36067__auto__);

(statearr_75469[(1)] = (1));

return statearr_75469;
});
var cljs$core$async$transduce_$_state_machine__36067__auto____1 = (function (state_75465){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75465);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75470){var ex__36070__auto__ = e75470;
var statearr_75471_77296 = state_75465;
(statearr_75471_77296[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75465[(4)]))){
var statearr_75472_77297 = state_75465;
(statearr_75472_77297[(1)] = cljs.core.first((state_75465[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77301 = state_75465;
state_75465 = G__77301;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36067__auto__ = function(state_75465){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36067__auto____1.call(this,state_75465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36067__auto____0;
cljs$core$async$transduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36067__auto____1;
return cljs$core$async$transduce_$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75476 = f__36137__auto__();
(statearr_75476[(6)] = c__36136__auto__);

return statearr_75476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

return c__36136__auto__;
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
var G__75491 = arguments.length;
switch (G__75491) {
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
var c__36136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75525){
var state_val_75526 = (state_75525[(1)]);
if((state_val_75526 === (7))){
var inst_75507 = (state_75525[(2)]);
var state_75525__$1 = state_75525;
var statearr_75528_77307 = state_75525__$1;
(statearr_75528_77307[(2)] = inst_75507);

(statearr_75528_77307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (1))){
var inst_75500 = cljs.core.seq(coll);
var inst_75501 = inst_75500;
var state_75525__$1 = (function (){var statearr_75529 = state_75525;
(statearr_75529[(7)] = inst_75501);

return statearr_75529;
})();
var statearr_75530_77311 = state_75525__$1;
(statearr_75530_77311[(2)] = null);

(statearr_75530_77311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (4))){
var inst_75501 = (state_75525[(7)]);
var inst_75505 = cljs.core.first(inst_75501);
var state_75525__$1 = state_75525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75525__$1,(7),ch,inst_75505);
} else {
if((state_val_75526 === (13))){
var inst_75519 = (state_75525[(2)]);
var state_75525__$1 = state_75525;
var statearr_75531_77312 = state_75525__$1;
(statearr_75531_77312[(2)] = inst_75519);

(statearr_75531_77312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (6))){
var inst_75510 = (state_75525[(2)]);
var state_75525__$1 = state_75525;
if(cljs.core.truth_(inst_75510)){
var statearr_75544_77313 = state_75525__$1;
(statearr_75544_77313[(1)] = (8));

} else {
var statearr_75545_77314 = state_75525__$1;
(statearr_75545_77314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (3))){
var inst_75523 = (state_75525[(2)]);
var state_75525__$1 = state_75525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75525__$1,inst_75523);
} else {
if((state_val_75526 === (12))){
var state_75525__$1 = state_75525;
var statearr_75554_77318 = state_75525__$1;
(statearr_75554_77318[(2)] = null);

(statearr_75554_77318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (2))){
var inst_75501 = (state_75525[(7)]);
var state_75525__$1 = state_75525;
if(cljs.core.truth_(inst_75501)){
var statearr_75555_77319 = state_75525__$1;
(statearr_75555_77319[(1)] = (4));

} else {
var statearr_75557_77320 = state_75525__$1;
(statearr_75557_77320[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (11))){
var inst_75516 = cljs.core.async.close_BANG_(ch);
var state_75525__$1 = state_75525;
var statearr_75558_77330 = state_75525__$1;
(statearr_75558_77330[(2)] = inst_75516);

(statearr_75558_77330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (9))){
var state_75525__$1 = state_75525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_75559_77331 = state_75525__$1;
(statearr_75559_77331[(1)] = (11));

} else {
var statearr_75560_77332 = state_75525__$1;
(statearr_75560_77332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (5))){
var inst_75501 = (state_75525[(7)]);
var state_75525__$1 = state_75525;
var statearr_75561_77333 = state_75525__$1;
(statearr_75561_77333[(2)] = inst_75501);

(statearr_75561_77333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (10))){
var inst_75521 = (state_75525[(2)]);
var state_75525__$1 = state_75525;
var statearr_75562_77338 = state_75525__$1;
(statearr_75562_77338[(2)] = inst_75521);

(statearr_75562_77338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75526 === (8))){
var inst_75501 = (state_75525[(7)]);
var inst_75512 = cljs.core.next(inst_75501);
var inst_75501__$1 = inst_75512;
var state_75525__$1 = (function (){var statearr_75563 = state_75525;
(statearr_75563[(7)] = inst_75501__$1);

return statearr_75563;
})();
var statearr_75564_77342 = state_75525__$1;
(statearr_75564_77342[(2)] = null);

(statearr_75564_77342[(1)] = (2));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_75565 = [null,null,null,null,null,null,null,null];
(statearr_75565[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_75565[(1)] = (1));

return statearr_75565;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_75525){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75525);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75567){var ex__36070__auto__ = e75567;
var statearr_75568_77344 = state_75525;
(statearr_75568_77344[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75525[(4)]))){
var statearr_75569_77345 = state_75525;
(statearr_75569_77345[(1)] = cljs.core.first((state_75525[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77346 = state_75525;
state_75525 = G__77346;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_75525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_75525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75570 = f__36137__auto__();
(statearr_75570[(6)] = c__36136__auto__);

return statearr_75570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

return c__36136__auto__;
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
var G__75573 = arguments.length;
switch (G__75573) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_77351 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_77351(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_77355 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_77355(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_77359 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_77359(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_77360 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_77360(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75578 = (function (ch,cs,meta75579){
this.ch = ch;
this.cs = cs;
this.meta75579 = meta75579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75580,meta75579__$1){
var self__ = this;
var _75580__$1 = this;
return (new cljs.core.async.t_cljs$core$async75578(self__.ch,self__.cs,meta75579__$1));
}));

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75580){
var self__ = this;
var _75580__$1 = this;
return self__.meta75579;
}));

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async75578.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async75578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta75579","meta75579",1372373520,null)], null);
}));

(cljs.core.async.t_cljs$core$async75578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75578");

(cljs.core.async.t_cljs$core$async75578.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async75578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75578.
 */
cljs.core.async.__GT_t_cljs$core$async75578 = (function cljs$core$async$mult_$___GT_t_cljs$core$async75578(ch__$1,cs__$1,meta75579){
return (new cljs.core.async.t_cljs$core$async75578(ch__$1,cs__$1,meta75579));
});

}

return (new cljs.core.async.t_cljs$core$async75578(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36136__auto___77364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75717){
var state_val_75718 = (state_75717[(1)]);
if((state_val_75718 === (7))){
var inst_75713 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75720_77365 = state_75717__$1;
(statearr_75720_77365[(2)] = inst_75713);

(statearr_75720_77365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (20))){
var inst_75616 = (state_75717[(7)]);
var inst_75629 = cljs.core.first(inst_75616);
var inst_75630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75629,(0),null);
var inst_75631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75629,(1),null);
var state_75717__$1 = (function (){var statearr_75721 = state_75717;
(statearr_75721[(8)] = inst_75630);

return statearr_75721;
})();
if(cljs.core.truth_(inst_75631)){
var statearr_75722_77366 = state_75717__$1;
(statearr_75722_77366[(1)] = (22));

} else {
var statearr_75723_77367 = state_75717__$1;
(statearr_75723_77367[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (27))){
var inst_75666 = (state_75717[(9)]);
var inst_75661 = (state_75717[(10)]);
var inst_75659 = (state_75717[(11)]);
var inst_75585 = (state_75717[(12)]);
var inst_75666__$1 = cljs.core._nth(inst_75659,inst_75661);
var inst_75667 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_75666__$1,inst_75585,done);
var state_75717__$1 = (function (){var statearr_75724 = state_75717;
(statearr_75724[(9)] = inst_75666__$1);

return statearr_75724;
})();
if(cljs.core.truth_(inst_75667)){
var statearr_75725_77369 = state_75717__$1;
(statearr_75725_77369[(1)] = (30));

} else {
var statearr_75726_77370 = state_75717__$1;
(statearr_75726_77370[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (1))){
var state_75717__$1 = state_75717;
var statearr_75728_77372 = state_75717__$1;
(statearr_75728_77372[(2)] = null);

(statearr_75728_77372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (24))){
var inst_75616 = (state_75717[(7)]);
var inst_75636 = (state_75717[(2)]);
var inst_75637 = cljs.core.next(inst_75616);
var inst_75594 = inst_75637;
var inst_75595 = null;
var inst_75596 = (0);
var inst_75597 = (0);
var state_75717__$1 = (function (){var statearr_75729 = state_75717;
(statearr_75729[(13)] = inst_75636);

(statearr_75729[(14)] = inst_75595);

(statearr_75729[(15)] = inst_75594);

(statearr_75729[(16)] = inst_75596);

(statearr_75729[(17)] = inst_75597);

return statearr_75729;
})();
var statearr_75730_77373 = state_75717__$1;
(statearr_75730_77373[(2)] = null);

(statearr_75730_77373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (39))){
var state_75717__$1 = state_75717;
var statearr_75734_77374 = state_75717__$1;
(statearr_75734_77374[(2)] = null);

(statearr_75734_77374[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (4))){
var inst_75585 = (state_75717[(12)]);
var inst_75585__$1 = (state_75717[(2)]);
var inst_75586 = (inst_75585__$1 == null);
var state_75717__$1 = (function (){var statearr_75735 = state_75717;
(statearr_75735[(12)] = inst_75585__$1);

return statearr_75735;
})();
if(cljs.core.truth_(inst_75586)){
var statearr_75736_77375 = state_75717__$1;
(statearr_75736_77375[(1)] = (5));

} else {
var statearr_75737_77376 = state_75717__$1;
(statearr_75737_77376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (15))){
var inst_75595 = (state_75717[(14)]);
var inst_75594 = (state_75717[(15)]);
var inst_75596 = (state_75717[(16)]);
var inst_75597 = (state_75717[(17)]);
var inst_75612 = (state_75717[(2)]);
var inst_75613 = (inst_75597 + (1));
var tmp75731 = inst_75595;
var tmp75732 = inst_75594;
var tmp75733 = inst_75596;
var inst_75594__$1 = tmp75732;
var inst_75595__$1 = tmp75731;
var inst_75596__$1 = tmp75733;
var inst_75597__$1 = inst_75613;
var state_75717__$1 = (function (){var statearr_75739 = state_75717;
(statearr_75739[(18)] = inst_75612);

(statearr_75739[(14)] = inst_75595__$1);

(statearr_75739[(15)] = inst_75594__$1);

(statearr_75739[(16)] = inst_75596__$1);

(statearr_75739[(17)] = inst_75597__$1);

return statearr_75739;
})();
var statearr_75740_77377 = state_75717__$1;
(statearr_75740_77377[(2)] = null);

(statearr_75740_77377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (21))){
var inst_75640 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75744_77378 = state_75717__$1;
(statearr_75744_77378[(2)] = inst_75640);

(statearr_75744_77378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (31))){
var inst_75666 = (state_75717[(9)]);
var inst_75670 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_75666);
var state_75717__$1 = state_75717;
var statearr_75745_77379 = state_75717__$1;
(statearr_75745_77379[(2)] = inst_75670);

(statearr_75745_77379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (32))){
var inst_75661 = (state_75717[(10)]);
var inst_75659 = (state_75717[(11)]);
var inst_75660 = (state_75717[(19)]);
var inst_75658 = (state_75717[(20)]);
var inst_75672 = (state_75717[(2)]);
var inst_75673 = (inst_75661 + (1));
var tmp75741 = inst_75659;
var tmp75742 = inst_75660;
var tmp75743 = inst_75658;
var inst_75658__$1 = tmp75743;
var inst_75659__$1 = tmp75741;
var inst_75660__$1 = tmp75742;
var inst_75661__$1 = inst_75673;
var state_75717__$1 = (function (){var statearr_75746 = state_75717;
(statearr_75746[(10)] = inst_75661__$1);

(statearr_75746[(11)] = inst_75659__$1);

(statearr_75746[(19)] = inst_75660__$1);

(statearr_75746[(21)] = inst_75672);

(statearr_75746[(20)] = inst_75658__$1);

return statearr_75746;
})();
var statearr_75748_77380 = state_75717__$1;
(statearr_75748_77380[(2)] = null);

(statearr_75748_77380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (40))){
var inst_75686 = (state_75717[(22)]);
var inst_75690 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_75686);
var state_75717__$1 = state_75717;
var statearr_75749_77388 = state_75717__$1;
(statearr_75749_77388[(2)] = inst_75690);

(statearr_75749_77388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (33))){
var inst_75676 = (state_75717[(23)]);
var inst_75679 = cljs.core.chunked_seq_QMARK_(inst_75676);
var state_75717__$1 = state_75717;
if(inst_75679){
var statearr_75750_77389 = state_75717__$1;
(statearr_75750_77389[(1)] = (36));

} else {
var statearr_75751_77390 = state_75717__$1;
(statearr_75751_77390[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (13))){
var inst_75606 = (state_75717[(24)]);
var inst_75609 = cljs.core.async.close_BANG_(inst_75606);
var state_75717__$1 = state_75717;
var statearr_75752_77391 = state_75717__$1;
(statearr_75752_77391[(2)] = inst_75609);

(statearr_75752_77391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (22))){
var inst_75630 = (state_75717[(8)]);
var inst_75633 = cljs.core.async.close_BANG_(inst_75630);
var state_75717__$1 = state_75717;
var statearr_75753_77393 = state_75717__$1;
(statearr_75753_77393[(2)] = inst_75633);

(statearr_75753_77393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (36))){
var inst_75676 = (state_75717[(23)]);
var inst_75681 = cljs.core.chunk_first(inst_75676);
var inst_75682 = cljs.core.chunk_rest(inst_75676);
var inst_75683 = cljs.core.count(inst_75681);
var inst_75658 = inst_75682;
var inst_75659 = inst_75681;
var inst_75660 = inst_75683;
var inst_75661 = (0);
var state_75717__$1 = (function (){var statearr_75755 = state_75717;
(statearr_75755[(10)] = inst_75661);

(statearr_75755[(11)] = inst_75659);

(statearr_75755[(19)] = inst_75660);

(statearr_75755[(20)] = inst_75658);

return statearr_75755;
})();
var statearr_75756_77394 = state_75717__$1;
(statearr_75756_77394[(2)] = null);

(statearr_75756_77394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (41))){
var inst_75676 = (state_75717[(23)]);
var inst_75692 = (state_75717[(2)]);
var inst_75693 = cljs.core.next(inst_75676);
var inst_75658 = inst_75693;
var inst_75659 = null;
var inst_75660 = (0);
var inst_75661 = (0);
var state_75717__$1 = (function (){var statearr_75757 = state_75717;
(statearr_75757[(10)] = inst_75661);

(statearr_75757[(11)] = inst_75659);

(statearr_75757[(25)] = inst_75692);

(statearr_75757[(19)] = inst_75660);

(statearr_75757[(20)] = inst_75658);

return statearr_75757;
})();
var statearr_75758_77395 = state_75717__$1;
(statearr_75758_77395[(2)] = null);

(statearr_75758_77395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (43))){
var state_75717__$1 = state_75717;
var statearr_75759_77396 = state_75717__$1;
(statearr_75759_77396[(2)] = null);

(statearr_75759_77396[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (29))){
var inst_75701 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75761_77406 = state_75717__$1;
(statearr_75761_77406[(2)] = inst_75701);

(statearr_75761_77406[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (44))){
var inst_75710 = (state_75717[(2)]);
var state_75717__$1 = (function (){var statearr_75762 = state_75717;
(statearr_75762[(26)] = inst_75710);

return statearr_75762;
})();
var statearr_75763_77407 = state_75717__$1;
(statearr_75763_77407[(2)] = null);

(statearr_75763_77407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (6))){
var inst_75650 = (state_75717[(27)]);
var inst_75649 = cljs.core.deref(cs);
var inst_75650__$1 = cljs.core.keys(inst_75649);
var inst_75651 = cljs.core.count(inst_75650__$1);
var inst_75652 = cljs.core.reset_BANG_(dctr,inst_75651);
var inst_75657 = cljs.core.seq(inst_75650__$1);
var inst_75658 = inst_75657;
var inst_75659 = null;
var inst_75660 = (0);
var inst_75661 = (0);
var state_75717__$1 = (function (){var statearr_75764 = state_75717;
(statearr_75764[(27)] = inst_75650__$1);

(statearr_75764[(28)] = inst_75652);

(statearr_75764[(10)] = inst_75661);

(statearr_75764[(11)] = inst_75659);

(statearr_75764[(19)] = inst_75660);

(statearr_75764[(20)] = inst_75658);

return statearr_75764;
})();
var statearr_75765_77410 = state_75717__$1;
(statearr_75765_77410[(2)] = null);

(statearr_75765_77410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (28))){
var inst_75658 = (state_75717[(20)]);
var inst_75676 = (state_75717[(23)]);
var inst_75676__$1 = cljs.core.seq(inst_75658);
var state_75717__$1 = (function (){var statearr_75766 = state_75717;
(statearr_75766[(23)] = inst_75676__$1);

return statearr_75766;
})();
if(inst_75676__$1){
var statearr_75767_77418 = state_75717__$1;
(statearr_75767_77418[(1)] = (33));

} else {
var statearr_75768_77419 = state_75717__$1;
(statearr_75768_77419[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (25))){
var inst_75661 = (state_75717[(10)]);
var inst_75660 = (state_75717[(19)]);
var inst_75663 = (inst_75661 < inst_75660);
var inst_75664 = inst_75663;
var state_75717__$1 = state_75717;
if(cljs.core.truth_(inst_75664)){
var statearr_75770_77420 = state_75717__$1;
(statearr_75770_77420[(1)] = (27));

} else {
var statearr_75771_77421 = state_75717__$1;
(statearr_75771_77421[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (34))){
var state_75717__$1 = state_75717;
var statearr_75772_77423 = state_75717__$1;
(statearr_75772_77423[(2)] = null);

(statearr_75772_77423[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (17))){
var state_75717__$1 = state_75717;
var statearr_75773_77424 = state_75717__$1;
(statearr_75773_77424[(2)] = null);

(statearr_75773_77424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (3))){
var inst_75715 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75717__$1,inst_75715);
} else {
if((state_val_75718 === (12))){
var inst_75645 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75774_77432 = state_75717__$1;
(statearr_75774_77432[(2)] = inst_75645);

(statearr_75774_77432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (2))){
var state_75717__$1 = state_75717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75717__$1,(4),ch);
} else {
if((state_val_75718 === (23))){
var state_75717__$1 = state_75717;
var statearr_75775_77433 = state_75717__$1;
(statearr_75775_77433[(2)] = null);

(statearr_75775_77433[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (35))){
var inst_75699 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75777_77435 = state_75717__$1;
(statearr_75777_77435[(2)] = inst_75699);

(statearr_75777_77435[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (19))){
var inst_75616 = (state_75717[(7)]);
var inst_75621 = cljs.core.chunk_first(inst_75616);
var inst_75622 = cljs.core.chunk_rest(inst_75616);
var inst_75623 = cljs.core.count(inst_75621);
var inst_75594 = inst_75622;
var inst_75595 = inst_75621;
var inst_75596 = inst_75623;
var inst_75597 = (0);
var state_75717__$1 = (function (){var statearr_75778 = state_75717;
(statearr_75778[(14)] = inst_75595);

(statearr_75778[(15)] = inst_75594);

(statearr_75778[(16)] = inst_75596);

(statearr_75778[(17)] = inst_75597);

return statearr_75778;
})();
var statearr_75779_77438 = state_75717__$1;
(statearr_75779_77438[(2)] = null);

(statearr_75779_77438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (11))){
var inst_75594 = (state_75717[(15)]);
var inst_75616 = (state_75717[(7)]);
var inst_75616__$1 = cljs.core.seq(inst_75594);
var state_75717__$1 = (function (){var statearr_75780 = state_75717;
(statearr_75780[(7)] = inst_75616__$1);

return statearr_75780;
})();
if(inst_75616__$1){
var statearr_75781_77439 = state_75717__$1;
(statearr_75781_77439[(1)] = (16));

} else {
var statearr_75782_77440 = state_75717__$1;
(statearr_75782_77440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (9))){
var inst_75647 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75783_77441 = state_75717__$1;
(statearr_75783_77441[(2)] = inst_75647);

(statearr_75783_77441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (5))){
var inst_75592 = cljs.core.deref(cs);
var inst_75593 = cljs.core.seq(inst_75592);
var inst_75594 = inst_75593;
var inst_75595 = null;
var inst_75596 = (0);
var inst_75597 = (0);
var state_75717__$1 = (function (){var statearr_75785 = state_75717;
(statearr_75785[(14)] = inst_75595);

(statearr_75785[(15)] = inst_75594);

(statearr_75785[(16)] = inst_75596);

(statearr_75785[(17)] = inst_75597);

return statearr_75785;
})();
var statearr_75786_77442 = state_75717__$1;
(statearr_75786_77442[(2)] = null);

(statearr_75786_77442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (14))){
var state_75717__$1 = state_75717;
var statearr_75787_77443 = state_75717__$1;
(statearr_75787_77443[(2)] = null);

(statearr_75787_77443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (45))){
var inst_75707 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75788_77446 = state_75717__$1;
(statearr_75788_77446[(2)] = inst_75707);

(statearr_75788_77446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (26))){
var inst_75650 = (state_75717[(27)]);
var inst_75703 = (state_75717[(2)]);
var inst_75704 = cljs.core.seq(inst_75650);
var state_75717__$1 = (function (){var statearr_75789 = state_75717;
(statearr_75789[(29)] = inst_75703);

return statearr_75789;
})();
if(inst_75704){
var statearr_75790_77447 = state_75717__$1;
(statearr_75790_77447[(1)] = (42));

} else {
var statearr_75791_77448 = state_75717__$1;
(statearr_75791_77448[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (16))){
var inst_75616 = (state_75717[(7)]);
var inst_75619 = cljs.core.chunked_seq_QMARK_(inst_75616);
var state_75717__$1 = state_75717;
if(inst_75619){
var statearr_75793_77452 = state_75717__$1;
(statearr_75793_77452[(1)] = (19));

} else {
var statearr_75794_77453 = state_75717__$1;
(statearr_75794_77453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (38))){
var inst_75696 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75795_77456 = state_75717__$1;
(statearr_75795_77456[(2)] = inst_75696);

(statearr_75795_77456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (30))){
var state_75717__$1 = state_75717;
var statearr_75796_77457 = state_75717__$1;
(statearr_75796_77457[(2)] = null);

(statearr_75796_77457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (10))){
var inst_75595 = (state_75717[(14)]);
var inst_75597 = (state_75717[(17)]);
var inst_75605 = cljs.core._nth(inst_75595,inst_75597);
var inst_75606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75605,(0),null);
var inst_75607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75605,(1),null);
var state_75717__$1 = (function (){var statearr_75797 = state_75717;
(statearr_75797[(24)] = inst_75606);

return statearr_75797;
})();
if(cljs.core.truth_(inst_75607)){
var statearr_75798_77459 = state_75717__$1;
(statearr_75798_77459[(1)] = (13));

} else {
var statearr_75799_77463 = state_75717__$1;
(statearr_75799_77463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (18))){
var inst_75643 = (state_75717[(2)]);
var state_75717__$1 = state_75717;
var statearr_75800_77464 = state_75717__$1;
(statearr_75800_77464[(2)] = inst_75643);

(statearr_75800_77464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (42))){
var state_75717__$1 = state_75717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75717__$1,(45),dchan);
} else {
if((state_val_75718 === (37))){
var inst_75686 = (state_75717[(22)]);
var inst_75585 = (state_75717[(12)]);
var inst_75676 = (state_75717[(23)]);
var inst_75686__$1 = cljs.core.first(inst_75676);
var inst_75687 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_75686__$1,inst_75585,done);
var state_75717__$1 = (function (){var statearr_75802 = state_75717;
(statearr_75802[(22)] = inst_75686__$1);

return statearr_75802;
})();
if(cljs.core.truth_(inst_75687)){
var statearr_75803_77466 = state_75717__$1;
(statearr_75803_77466[(1)] = (39));

} else {
var statearr_75804_77467 = state_75717__$1;
(statearr_75804_77467[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75718 === (8))){
var inst_75596 = (state_75717[(16)]);
var inst_75597 = (state_75717[(17)]);
var inst_75599 = (inst_75597 < inst_75596);
var inst_75600 = inst_75599;
var state_75717__$1 = state_75717;
if(cljs.core.truth_(inst_75600)){
var statearr_75805_77470 = state_75717__$1;
(statearr_75805_77470[(1)] = (10));

} else {
var statearr_75806_77471 = state_75717__$1;
(statearr_75806_77471[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36067__auto__ = null;
var cljs$core$async$mult_$_state_machine__36067__auto____0 = (function (){
var statearr_75807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75807[(0)] = cljs$core$async$mult_$_state_machine__36067__auto__);

(statearr_75807[(1)] = (1));

return statearr_75807;
});
var cljs$core$async$mult_$_state_machine__36067__auto____1 = (function (state_75717){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75717);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75809){var ex__36070__auto__ = e75809;
var statearr_75810_77478 = state_75717;
(statearr_75810_77478[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75717[(4)]))){
var statearr_75811_77479 = state_75717;
(statearr_75811_77479[(1)] = cljs.core.first((state_75717[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77480 = state_75717;
state_75717 = G__77480;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36067__auto__ = function(state_75717){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36067__auto____1.call(this,state_75717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36067__auto____0;
cljs$core$async$mult_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36067__auto____1;
return cljs$core$async$mult_$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75812 = f__36137__auto__();
(statearr_75812[(6)] = c__36136__auto___77364);

return statearr_75812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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
var G__75814 = arguments.length;
switch (G__75814) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_77495 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_77495(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_77496 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_77496(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_77498 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_77498(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_77499 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_77499(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_77507 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_77507(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77509 = arguments.length;
var i__4865__auto___77510 = (0);
while(true){
if((i__4865__auto___77510 < len__4864__auto___77509)){
args__4870__auto__.push((arguments[i__4865__auto___77510]));

var G__77511 = (i__4865__auto___77510 + (1));
i__4865__auto___77510 = G__77511;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__75825){
var map__75826 = p__75825;
var map__75826__$1 = cljs.core.__destructure_map(map__75826);
var opts = map__75826__$1;
var statearr_75827_77518 = state;
(statearr_75827_77518[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_75828_77519 = state;
(statearr_75828_77519[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_75829_77520 = state;
(statearr_75829_77520[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq75820){
var G__75821 = cljs.core.first(seq75820);
var seq75820__$1 = cljs.core.next(seq75820);
var G__75822 = cljs.core.first(seq75820__$1);
var seq75820__$2 = cljs.core.next(seq75820__$1);
var G__75823 = cljs.core.first(seq75820__$2);
var seq75820__$3 = cljs.core.next(seq75820__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75821,G__75822,G__75823,seq75820__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75832 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta75833){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta75833 = meta75833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75834,meta75833__$1){
var self__ = this;
var _75834__$1 = this;
return (new cljs.core.async.t_cljs$core$async75832(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta75833__$1));
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75834){
var self__ = this;
var _75834__$1 = this;
return self__.meta75833;
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75832.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta75833","meta75833",1251322348,null)], null);
}));

(cljs.core.async.t_cljs$core$async75832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75832");

(cljs.core.async.t_cljs$core$async75832.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async75832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75832.
 */
cljs.core.async.__GT_t_cljs$core$async75832 = (function cljs$core$async$mix_$___GT_t_cljs$core$async75832(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta75833){
return (new cljs.core.async.t_cljs$core$async75832(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta75833));
});

}

return (new cljs.core.async.t_cljs$core$async75832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36136__auto___77533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_75907){
var state_val_75908 = (state_75907[(1)]);
if((state_val_75908 === (7))){
var inst_75867 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
if(cljs.core.truth_(inst_75867)){
var statearr_75911_77534 = state_75907__$1;
(statearr_75911_77534[(1)] = (8));

} else {
var statearr_75912_77535 = state_75907__$1;
(statearr_75912_77535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (20))){
var inst_75859 = (state_75907[(7)]);
var state_75907__$1 = state_75907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75907__$1,(23),out,inst_75859);
} else {
if((state_val_75908 === (1))){
var inst_75841 = calc_state();
var inst_75842 = cljs.core.__destructure_map(inst_75841);
var inst_75843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75842,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75842,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75842,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_75846 = inst_75841;
var state_75907__$1 = (function (){var statearr_75913 = state_75907;
(statearr_75913[(8)] = inst_75843);

(statearr_75913[(9)] = inst_75844);

(statearr_75913[(10)] = inst_75845);

(statearr_75913[(11)] = inst_75846);

return statearr_75913;
})();
var statearr_75914_77536 = state_75907__$1;
(statearr_75914_77536[(2)] = null);

(statearr_75914_77536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (24))){
var inst_75849 = (state_75907[(12)]);
var inst_75846 = inst_75849;
var state_75907__$1 = (function (){var statearr_75915 = state_75907;
(statearr_75915[(11)] = inst_75846);

return statearr_75915;
})();
var statearr_75916_77537 = state_75907__$1;
(statearr_75916_77537[(2)] = null);

(statearr_75916_77537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (4))){
var inst_75859 = (state_75907[(7)]);
var inst_75862 = (state_75907[(13)]);
var inst_75857 = (state_75907[(2)]);
var inst_75859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75857,(0),null);
var inst_75860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75857,(1),null);
var inst_75862__$1 = (inst_75859__$1 == null);
var state_75907__$1 = (function (){var statearr_75917 = state_75907;
(statearr_75917[(7)] = inst_75859__$1);

(statearr_75917[(14)] = inst_75860);

(statearr_75917[(13)] = inst_75862__$1);

return statearr_75917;
})();
if(cljs.core.truth_(inst_75862__$1)){
var statearr_75918_77538 = state_75907__$1;
(statearr_75918_77538[(1)] = (5));

} else {
var statearr_75919_77539 = state_75907__$1;
(statearr_75919_77539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (15))){
var inst_75850 = (state_75907[(15)]);
var inst_75881 = (state_75907[(16)]);
var inst_75881__$1 = cljs.core.empty_QMARK_(inst_75850);
var state_75907__$1 = (function (){var statearr_75920 = state_75907;
(statearr_75920[(16)] = inst_75881__$1);

return statearr_75920;
})();
if(inst_75881__$1){
var statearr_75921_77540 = state_75907__$1;
(statearr_75921_77540[(1)] = (17));

} else {
var statearr_75922_77541 = state_75907__$1;
(statearr_75922_77541[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (21))){
var inst_75849 = (state_75907[(12)]);
var inst_75846 = inst_75849;
var state_75907__$1 = (function (){var statearr_75925 = state_75907;
(statearr_75925[(11)] = inst_75846);

return statearr_75925;
})();
var statearr_75926_77542 = state_75907__$1;
(statearr_75926_77542[(2)] = null);

(statearr_75926_77542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (13))){
var inst_75874 = (state_75907[(2)]);
var inst_75875 = calc_state();
var inst_75846 = inst_75875;
var state_75907__$1 = (function (){var statearr_75927 = state_75907;
(statearr_75927[(17)] = inst_75874);

(statearr_75927[(11)] = inst_75846);

return statearr_75927;
})();
var statearr_75928_77547 = state_75907__$1;
(statearr_75928_77547[(2)] = null);

(statearr_75928_77547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (22))){
var inst_75901 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
var statearr_75929_77554 = state_75907__$1;
(statearr_75929_77554[(2)] = inst_75901);

(statearr_75929_77554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (6))){
var inst_75860 = (state_75907[(14)]);
var inst_75865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75860,change);
var state_75907__$1 = state_75907;
var statearr_75930_77555 = state_75907__$1;
(statearr_75930_77555[(2)] = inst_75865);

(statearr_75930_77555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (25))){
var state_75907__$1 = state_75907;
var statearr_75931_77556 = state_75907__$1;
(statearr_75931_77556[(2)] = null);

(statearr_75931_77556[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (17))){
var inst_75860 = (state_75907[(14)]);
var inst_75851 = (state_75907[(18)]);
var inst_75883 = (inst_75851.cljs$core$IFn$_invoke$arity$1 ? inst_75851.cljs$core$IFn$_invoke$arity$1(inst_75860) : inst_75851.call(null,inst_75860));
var inst_75884 = cljs.core.not(inst_75883);
var state_75907__$1 = state_75907;
var statearr_75932_77557 = state_75907__$1;
(statearr_75932_77557[(2)] = inst_75884);

(statearr_75932_77557[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (3))){
var inst_75905 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75907__$1,inst_75905);
} else {
if((state_val_75908 === (12))){
var state_75907__$1 = state_75907;
var statearr_75933_77559 = state_75907__$1;
(statearr_75933_77559[(2)] = null);

(statearr_75933_77559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (2))){
var inst_75846 = (state_75907[(11)]);
var inst_75849 = (state_75907[(12)]);
var inst_75849__$1 = cljs.core.__destructure_map(inst_75846);
var inst_75850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75849__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75849__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75849__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_75907__$1 = (function (){var statearr_75934 = state_75907;
(statearr_75934[(15)] = inst_75850);

(statearr_75934[(12)] = inst_75849__$1);

(statearr_75934[(18)] = inst_75851);

return statearr_75934;
})();
return cljs.core.async.ioc_alts_BANG_(state_75907__$1,(4),inst_75852);
} else {
if((state_val_75908 === (23))){
var inst_75892 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
if(cljs.core.truth_(inst_75892)){
var statearr_75935_77560 = state_75907__$1;
(statearr_75935_77560[(1)] = (24));

} else {
var statearr_75936_77561 = state_75907__$1;
(statearr_75936_77561[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (19))){
var inst_75887 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
var statearr_75937_77562 = state_75907__$1;
(statearr_75937_77562[(2)] = inst_75887);

(statearr_75937_77562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (11))){
var inst_75860 = (state_75907[(14)]);
var inst_75871 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_75860);
var state_75907__$1 = state_75907;
var statearr_75941_77563 = state_75907__$1;
(statearr_75941_77563[(2)] = inst_75871);

(statearr_75941_77563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (9))){
var inst_75850 = (state_75907[(15)]);
var inst_75878 = (state_75907[(19)]);
var inst_75860 = (state_75907[(14)]);
var inst_75878__$1 = (inst_75850.cljs$core$IFn$_invoke$arity$1 ? inst_75850.cljs$core$IFn$_invoke$arity$1(inst_75860) : inst_75850.call(null,inst_75860));
var state_75907__$1 = (function (){var statearr_75944 = state_75907;
(statearr_75944[(19)] = inst_75878__$1);

return statearr_75944;
})();
if(cljs.core.truth_(inst_75878__$1)){
var statearr_75946_77570 = state_75907__$1;
(statearr_75946_77570[(1)] = (14));

} else {
var statearr_75947_77571 = state_75907__$1;
(statearr_75947_77571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (5))){
var inst_75862 = (state_75907[(13)]);
var state_75907__$1 = state_75907;
var statearr_75951_77572 = state_75907__$1;
(statearr_75951_77572[(2)] = inst_75862);

(statearr_75951_77572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (14))){
var inst_75878 = (state_75907[(19)]);
var state_75907__$1 = state_75907;
var statearr_75952_77576 = state_75907__$1;
(statearr_75952_77576[(2)] = inst_75878);

(statearr_75952_77576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (26))){
var inst_75897 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
var statearr_75953_77577 = state_75907__$1;
(statearr_75953_77577[(2)] = inst_75897);

(statearr_75953_77577[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (16))){
var inst_75889 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
if(cljs.core.truth_(inst_75889)){
var statearr_75954_77578 = state_75907__$1;
(statearr_75954_77578[(1)] = (20));

} else {
var statearr_75956_77579 = state_75907__$1;
(statearr_75956_77579[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (10))){
var inst_75903 = (state_75907[(2)]);
var state_75907__$1 = state_75907;
var statearr_75957_77580 = state_75907__$1;
(statearr_75957_77580[(2)] = inst_75903);

(statearr_75957_77580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (18))){
var inst_75881 = (state_75907[(16)]);
var state_75907__$1 = state_75907;
var statearr_75961_77581 = state_75907__$1;
(statearr_75961_77581[(2)] = inst_75881);

(statearr_75961_77581[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75908 === (8))){
var inst_75859 = (state_75907[(7)]);
var inst_75869 = (inst_75859 == null);
var state_75907__$1 = state_75907;
if(cljs.core.truth_(inst_75869)){
var statearr_75963_77583 = state_75907__$1;
(statearr_75963_77583[(1)] = (11));

} else {
var statearr_75964_77587 = state_75907__$1;
(statearr_75964_77587[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__36067__auto__ = null;
var cljs$core$async$mix_$_state_machine__36067__auto____0 = (function (){
var statearr_75969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75969[(0)] = cljs$core$async$mix_$_state_machine__36067__auto__);

(statearr_75969[(1)] = (1));

return statearr_75969;
});
var cljs$core$async$mix_$_state_machine__36067__auto____1 = (function (state_75907){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_75907);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e75970){var ex__36070__auto__ = e75970;
var statearr_75973_77588 = state_75907;
(statearr_75973_77588[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_75907[(4)]))){
var statearr_75975_77589 = state_75907;
(statearr_75975_77589[(1)] = cljs.core.first((state_75907[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77590 = state_75907;
state_75907 = G__77590;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36067__auto__ = function(state_75907){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36067__auto____1.call(this,state_75907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36067__auto____0;
cljs$core$async$mix_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36067__auto____1;
return cljs$core$async$mix_$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_75977 = f__36137__auto__();
(statearr_75977[(6)] = c__36136__auto___77533);

return statearr_75977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_77597 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_77597(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_77598 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_77598(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_77605 = (function() {
var G__77606 = null;
var G__77606__1 = (function (p){
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
var G__77606__2 = (function (p,v){
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
G__77606 = function(p,v){
switch(arguments.length){
case 1:
return G__77606__1.call(this,p);
case 2:
return G__77606__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77606.cljs$core$IFn$_invoke$arity$1 = G__77606__1;
G__77606.cljs$core$IFn$_invoke$arity$2 = G__77606__2;
return G__77606;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__76014 = arguments.length;
switch (G__76014) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77605(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77605(p,v);
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
var G__76031 = arguments.length;
switch (G__76031) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__76024_SHARP_){
if(cljs.core.truth_((p1__76024_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__76024_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__76024_SHARP_.call(null,topic)))){
return p1__76024_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__76024_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta76042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta76042 = meta76042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76043,meta76042__$1){
var self__ = this;
var _76043__$1 = this;
return (new cljs.core.async.t_cljs$core$async76041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta76042__$1));
}));

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76043){
var self__ = this;
var _76043__$1 = this;
return self__.meta76042;
}));

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async76041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async76041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta76042","meta76042",554162669,null)], null);
}));

(cljs.core.async.t_cljs$core$async76041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76041");

(cljs.core.async.t_cljs$core$async76041.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async76041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76041.
 */
cljs.core.async.__GT_t_cljs$core$async76041 = (function cljs$core$async$__GT_t_cljs$core$async76041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta76042){
return (new cljs.core.async.t_cljs$core$async76041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta76042));
});

}

return (new cljs.core.async.t_cljs$core$async76041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36136__auto___77626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76178){
var state_val_76179 = (state_76178[(1)]);
if((state_val_76179 === (7))){
var inst_76173 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
var statearr_76182_77627 = state_76178__$1;
(statearr_76182_77627[(2)] = inst_76173);

(statearr_76182_77627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (20))){
var state_76178__$1 = state_76178;
var statearr_76184_77628 = state_76178__$1;
(statearr_76184_77628[(2)] = null);

(statearr_76184_77628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (1))){
var state_76178__$1 = state_76178;
var statearr_76185_77629 = state_76178__$1;
(statearr_76185_77629[(2)] = null);

(statearr_76185_77629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (24))){
var inst_76153 = (state_76178[(7)]);
var inst_76164 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_76153);
var state_76178__$1 = state_76178;
var statearr_76186_77630 = state_76178__$1;
(statearr_76186_77630[(2)] = inst_76164);

(statearr_76186_77630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (4))){
var inst_76090 = (state_76178[(8)]);
var inst_76090__$1 = (state_76178[(2)]);
var inst_76091 = (inst_76090__$1 == null);
var state_76178__$1 = (function (){var statearr_76189 = state_76178;
(statearr_76189[(8)] = inst_76090__$1);

return statearr_76189;
})();
if(cljs.core.truth_(inst_76091)){
var statearr_76192_77631 = state_76178__$1;
(statearr_76192_77631[(1)] = (5));

} else {
var statearr_76193_77633 = state_76178__$1;
(statearr_76193_77633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (15))){
var inst_76145 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
var statearr_76198_77634 = state_76178__$1;
(statearr_76198_77634[(2)] = inst_76145);

(statearr_76198_77634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (21))){
var inst_76169 = (state_76178[(2)]);
var state_76178__$1 = (function (){var statearr_76203 = state_76178;
(statearr_76203[(9)] = inst_76169);

return statearr_76203;
})();
var statearr_76204_77637 = state_76178__$1;
(statearr_76204_77637[(2)] = null);

(statearr_76204_77637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (13))){
var inst_76123 = (state_76178[(10)]);
var inst_76125 = cljs.core.chunked_seq_QMARK_(inst_76123);
var state_76178__$1 = state_76178;
if(inst_76125){
var statearr_76207_77638 = state_76178__$1;
(statearr_76207_77638[(1)] = (16));

} else {
var statearr_76210_77639 = state_76178__$1;
(statearr_76210_77639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (22))){
var inst_76159 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
if(cljs.core.truth_(inst_76159)){
var statearr_76212_77640 = state_76178__$1;
(statearr_76212_77640[(1)] = (23));

} else {
var statearr_76213_77641 = state_76178__$1;
(statearr_76213_77641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (6))){
var inst_76153 = (state_76178[(7)]);
var inst_76090 = (state_76178[(8)]);
var inst_76155 = (state_76178[(11)]);
var inst_76153__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_76090) : topic_fn.call(null,inst_76090));
var inst_76154 = cljs.core.deref(mults);
var inst_76155__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76154,inst_76153__$1);
var state_76178__$1 = (function (){var statearr_76220 = state_76178;
(statearr_76220[(7)] = inst_76153__$1);

(statearr_76220[(11)] = inst_76155__$1);

return statearr_76220;
})();
if(cljs.core.truth_(inst_76155__$1)){
var statearr_76221_77643 = state_76178__$1;
(statearr_76221_77643[(1)] = (19));

} else {
var statearr_76224_77644 = state_76178__$1;
(statearr_76224_77644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (25))){
var inst_76166 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
var statearr_76226_77645 = state_76178__$1;
(statearr_76226_77645[(2)] = inst_76166);

(statearr_76226_77645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (17))){
var inst_76123 = (state_76178[(10)]);
var inst_76133 = cljs.core.first(inst_76123);
var inst_76136 = cljs.core.async.muxch_STAR_(inst_76133);
var inst_76137 = cljs.core.async.close_BANG_(inst_76136);
var inst_76138 = cljs.core.next(inst_76123);
var inst_76104 = inst_76138;
var inst_76105 = null;
var inst_76106 = (0);
var inst_76107 = (0);
var state_76178__$1 = (function (){var statearr_76230 = state_76178;
(statearr_76230[(12)] = inst_76137);

(statearr_76230[(13)] = inst_76104);

(statearr_76230[(14)] = inst_76107);

(statearr_76230[(15)] = inst_76106);

(statearr_76230[(16)] = inst_76105);

return statearr_76230;
})();
var statearr_76232_77653 = state_76178__$1;
(statearr_76232_77653[(2)] = null);

(statearr_76232_77653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (3))){
var inst_76175 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76178__$1,inst_76175);
} else {
if((state_val_76179 === (12))){
var inst_76147 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
var statearr_76237_77654 = state_76178__$1;
(statearr_76237_77654[(2)] = inst_76147);

(statearr_76237_77654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (2))){
var state_76178__$1 = state_76178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76178__$1,(4),ch);
} else {
if((state_val_76179 === (23))){
var state_76178__$1 = state_76178;
var statearr_76239_77655 = state_76178__$1;
(statearr_76239_77655[(2)] = null);

(statearr_76239_77655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (19))){
var inst_76090 = (state_76178[(8)]);
var inst_76155 = (state_76178[(11)]);
var inst_76157 = cljs.core.async.muxch_STAR_(inst_76155);
var state_76178__$1 = state_76178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76178__$1,(22),inst_76157,inst_76090);
} else {
if((state_val_76179 === (11))){
var inst_76104 = (state_76178[(13)]);
var inst_76123 = (state_76178[(10)]);
var inst_76123__$1 = cljs.core.seq(inst_76104);
var state_76178__$1 = (function (){var statearr_76243 = state_76178;
(statearr_76243[(10)] = inst_76123__$1);

return statearr_76243;
})();
if(inst_76123__$1){
var statearr_76246_77656 = state_76178__$1;
(statearr_76246_77656[(1)] = (13));

} else {
var statearr_76248_77657 = state_76178__$1;
(statearr_76248_77657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (9))){
var inst_76149 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
var statearr_76249_77658 = state_76178__$1;
(statearr_76249_77658[(2)] = inst_76149);

(statearr_76249_77658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (5))){
var inst_76101 = cljs.core.deref(mults);
var inst_76102 = cljs.core.vals(inst_76101);
var inst_76103 = cljs.core.seq(inst_76102);
var inst_76104 = inst_76103;
var inst_76105 = null;
var inst_76106 = (0);
var inst_76107 = (0);
var state_76178__$1 = (function (){var statearr_76250 = state_76178;
(statearr_76250[(13)] = inst_76104);

(statearr_76250[(14)] = inst_76107);

(statearr_76250[(15)] = inst_76106);

(statearr_76250[(16)] = inst_76105);

return statearr_76250;
})();
var statearr_76251_77659 = state_76178__$1;
(statearr_76251_77659[(2)] = null);

(statearr_76251_77659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (14))){
var state_76178__$1 = state_76178;
var statearr_76255_77660 = state_76178__$1;
(statearr_76255_77660[(2)] = null);

(statearr_76255_77660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (16))){
var inst_76123 = (state_76178[(10)]);
var inst_76127 = cljs.core.chunk_first(inst_76123);
var inst_76129 = cljs.core.chunk_rest(inst_76123);
var inst_76130 = cljs.core.count(inst_76127);
var inst_76104 = inst_76129;
var inst_76105 = inst_76127;
var inst_76106 = inst_76130;
var inst_76107 = (0);
var state_76178__$1 = (function (){var statearr_76256 = state_76178;
(statearr_76256[(13)] = inst_76104);

(statearr_76256[(14)] = inst_76107);

(statearr_76256[(15)] = inst_76106);

(statearr_76256[(16)] = inst_76105);

return statearr_76256;
})();
var statearr_76257_77661 = state_76178__$1;
(statearr_76257_77661[(2)] = null);

(statearr_76257_77661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (10))){
var inst_76104 = (state_76178[(13)]);
var inst_76107 = (state_76178[(14)]);
var inst_76106 = (state_76178[(15)]);
var inst_76105 = (state_76178[(16)]);
var inst_76114 = cljs.core._nth(inst_76105,inst_76107);
var inst_76115 = cljs.core.async.muxch_STAR_(inst_76114);
var inst_76116 = cljs.core.async.close_BANG_(inst_76115);
var inst_76117 = (inst_76107 + (1));
var tmp76252 = inst_76104;
var tmp76253 = inst_76106;
var tmp76254 = inst_76105;
var inst_76104__$1 = tmp76252;
var inst_76105__$1 = tmp76254;
var inst_76106__$1 = tmp76253;
var inst_76107__$1 = inst_76117;
var state_76178__$1 = (function (){var statearr_76258 = state_76178;
(statearr_76258[(17)] = inst_76116);

(statearr_76258[(13)] = inst_76104__$1);

(statearr_76258[(14)] = inst_76107__$1);

(statearr_76258[(15)] = inst_76106__$1);

(statearr_76258[(16)] = inst_76105__$1);

return statearr_76258;
})();
var statearr_76259_77663 = state_76178__$1;
(statearr_76259_77663[(2)] = null);

(statearr_76259_77663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (18))){
var inst_76142 = (state_76178[(2)]);
var state_76178__$1 = state_76178;
var statearr_76260_77667 = state_76178__$1;
(statearr_76260_77667[(2)] = inst_76142);

(statearr_76260_77667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76179 === (8))){
var inst_76107 = (state_76178[(14)]);
var inst_76106 = (state_76178[(15)]);
var inst_76110 = (inst_76107 < inst_76106);
var inst_76111 = inst_76110;
var state_76178__$1 = state_76178;
if(cljs.core.truth_(inst_76111)){
var statearr_76261_77668 = state_76178__$1;
(statearr_76261_77668[(1)] = (10));

} else {
var statearr_76262_77669 = state_76178__$1;
(statearr_76262_77669[(1)] = (11));

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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76263[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76263[(1)] = (1));

return statearr_76263;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76178){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76178);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76264){var ex__36070__auto__ = e76264;
var statearr_76266_77672 = state_76178;
(statearr_76266_77672[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76178[(4)]))){
var statearr_76268_77673 = state_76178;
(statearr_76268_77673[(1)] = cljs.core.first((state_76178[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77674 = state_76178;
state_76178 = G__77674;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76269 = f__36137__auto__();
(statearr_76269[(6)] = c__36136__auto___77626);

return statearr_76269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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
var G__76279 = arguments.length;
switch (G__76279) {
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
var G__76290 = arguments.length;
switch (G__76290) {
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
var G__76300 = arguments.length;
switch (G__76300) {
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
var c__36136__auto___77688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76363){
var state_val_76364 = (state_76363[(1)]);
if((state_val_76364 === (7))){
var state_76363__$1 = state_76363;
var statearr_76366_77689 = state_76363__$1;
(statearr_76366_77689[(2)] = null);

(statearr_76366_77689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (1))){
var state_76363__$1 = state_76363;
var statearr_76370_77690 = state_76363__$1;
(statearr_76370_77690[(2)] = null);

(statearr_76370_77690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (4))){
var inst_76309 = (state_76363[(7)]);
var inst_76308 = (state_76363[(8)]);
var inst_76311 = (inst_76309 < inst_76308);
var state_76363__$1 = state_76363;
if(cljs.core.truth_(inst_76311)){
var statearr_76372_77691 = state_76363__$1;
(statearr_76372_77691[(1)] = (6));

} else {
var statearr_76373_77692 = state_76363__$1;
(statearr_76373_77692[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (15))){
var inst_76342 = (state_76363[(9)]);
var inst_76350 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_76342);
var state_76363__$1 = state_76363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76363__$1,(17),out,inst_76350);
} else {
if((state_val_76364 === (13))){
var inst_76342 = (state_76363[(9)]);
var inst_76342__$1 = (state_76363[(2)]);
var inst_76343 = cljs.core.some(cljs.core.nil_QMARK_,inst_76342__$1);
var state_76363__$1 = (function (){var statearr_76375 = state_76363;
(statearr_76375[(9)] = inst_76342__$1);

return statearr_76375;
})();
if(cljs.core.truth_(inst_76343)){
var statearr_76376_77693 = state_76363__$1;
(statearr_76376_77693[(1)] = (14));

} else {
var statearr_76377_77694 = state_76363__$1;
(statearr_76377_77694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (6))){
var state_76363__$1 = state_76363;
var statearr_76382_77695 = state_76363__$1;
(statearr_76382_77695[(2)] = null);

(statearr_76382_77695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (17))){
var inst_76352 = (state_76363[(2)]);
var state_76363__$1 = (function (){var statearr_76391 = state_76363;
(statearr_76391[(10)] = inst_76352);

return statearr_76391;
})();
var statearr_76393_77696 = state_76363__$1;
(statearr_76393_77696[(2)] = null);

(statearr_76393_77696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (3))){
var inst_76357 = (state_76363[(2)]);
var state_76363__$1 = state_76363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76363__$1,inst_76357);
} else {
if((state_val_76364 === (12))){
var _ = (function (){var statearr_76394 = state_76363;
(statearr_76394[(4)] = cljs.core.rest((state_76363[(4)])));

return statearr_76394;
})();
var state_76363__$1 = state_76363;
var ex76387 = (state_76363__$1[(2)]);
var statearr_76398_77700 = state_76363__$1;
(statearr_76398_77700[(5)] = ex76387);


if((ex76387 instanceof Object)){
var statearr_76400_77701 = state_76363__$1;
(statearr_76400_77701[(1)] = (11));

(statearr_76400_77701[(5)] = null);

} else {
throw ex76387;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (2))){
var inst_76307 = cljs.core.reset_BANG_(dctr,cnt);
var inst_76308 = cnt;
var inst_76309 = (0);
var state_76363__$1 = (function (){var statearr_76405 = state_76363;
(statearr_76405[(7)] = inst_76309);

(statearr_76405[(8)] = inst_76308);

(statearr_76405[(11)] = inst_76307);

return statearr_76405;
})();
var statearr_76406_77702 = state_76363__$1;
(statearr_76406_77702[(2)] = null);

(statearr_76406_77702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (11))){
var inst_76320 = (state_76363[(2)]);
var inst_76322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_76363__$1 = (function (){var statearr_76407 = state_76363;
(statearr_76407[(12)] = inst_76320);

return statearr_76407;
})();
var statearr_76408_77703 = state_76363__$1;
(statearr_76408_77703[(2)] = inst_76322);

(statearr_76408_77703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (9))){
var inst_76309 = (state_76363[(7)]);
var _ = (function (){var statearr_76410 = state_76363;
(statearr_76410[(4)] = cljs.core.cons((12),(state_76363[(4)])));

return statearr_76410;
})();
var inst_76328 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_76309) : chs__$1.call(null,inst_76309));
var inst_76329 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_76309) : done.call(null,inst_76309));
var inst_76330 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_76328,inst_76329);
var ___$1 = (function (){var statearr_76411 = state_76363;
(statearr_76411[(4)] = cljs.core.rest((state_76363[(4)])));

return statearr_76411;
})();
var state_76363__$1 = state_76363;
var statearr_76412_77704 = state_76363__$1;
(statearr_76412_77704[(2)] = inst_76330);

(statearr_76412_77704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (5))){
var inst_76340 = (state_76363[(2)]);
var state_76363__$1 = (function (){var statearr_76413 = state_76363;
(statearr_76413[(13)] = inst_76340);

return statearr_76413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76363__$1,(13),dchan);
} else {
if((state_val_76364 === (14))){
var inst_76345 = cljs.core.async.close_BANG_(out);
var state_76363__$1 = state_76363;
var statearr_76421_77706 = state_76363__$1;
(statearr_76421_77706[(2)] = inst_76345);

(statearr_76421_77706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (16))){
var inst_76355 = (state_76363[(2)]);
var state_76363__$1 = state_76363;
var statearr_76423_77707 = state_76363__$1;
(statearr_76423_77707[(2)] = inst_76355);

(statearr_76423_77707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (10))){
var inst_76309 = (state_76363[(7)]);
var inst_76333 = (state_76363[(2)]);
var inst_76334 = (inst_76309 + (1));
var inst_76309__$1 = inst_76334;
var state_76363__$1 = (function (){var statearr_76424 = state_76363;
(statearr_76424[(7)] = inst_76309__$1);

(statearr_76424[(14)] = inst_76333);

return statearr_76424;
})();
var statearr_76425_77708 = state_76363__$1;
(statearr_76425_77708[(2)] = null);

(statearr_76425_77708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76364 === (8))){
var inst_76338 = (state_76363[(2)]);
var state_76363__$1 = state_76363;
var statearr_76429_77709 = state_76363__$1;
(statearr_76429_77709[(2)] = inst_76338);

(statearr_76429_77709[(1)] = (5));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76431[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76431[(1)] = (1));

return statearr_76431;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76363){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76363);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76436){var ex__36070__auto__ = e76436;
var statearr_76437_77714 = state_76363;
(statearr_76437_77714[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76363[(4)]))){
var statearr_76438_77715 = state_76363;
(statearr_76438_77715[(1)] = cljs.core.first((state_76363[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77716 = state_76363;
state_76363 = G__77716;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76439 = f__36137__auto__();
(statearr_76439[(6)] = c__36136__auto___77688);

return statearr_76439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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
var G__76446 = arguments.length;
switch (G__76446) {
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
var c__36136__auto___77718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76483){
var state_val_76484 = (state_76483[(1)]);
if((state_val_76484 === (7))){
var inst_76457 = (state_76483[(7)]);
var inst_76458 = (state_76483[(8)]);
var inst_76457__$1 = (state_76483[(2)]);
var inst_76458__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76457__$1,(0),null);
var inst_76459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76457__$1,(1),null);
var inst_76464 = (inst_76458__$1 == null);
var state_76483__$1 = (function (){var statearr_76485 = state_76483;
(statearr_76485[(7)] = inst_76457__$1);

(statearr_76485[(8)] = inst_76458__$1);

(statearr_76485[(9)] = inst_76459);

return statearr_76485;
})();
if(cljs.core.truth_(inst_76464)){
var statearr_76486_77719 = state_76483__$1;
(statearr_76486_77719[(1)] = (8));

} else {
var statearr_76487_77720 = state_76483__$1;
(statearr_76487_77720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (1))){
var inst_76447 = cljs.core.vec(chs);
var inst_76448 = inst_76447;
var state_76483__$1 = (function (){var statearr_76488 = state_76483;
(statearr_76488[(10)] = inst_76448);

return statearr_76488;
})();
var statearr_76489_77721 = state_76483__$1;
(statearr_76489_77721[(2)] = null);

(statearr_76489_77721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (4))){
var inst_76448 = (state_76483[(10)]);
var state_76483__$1 = state_76483;
return cljs.core.async.ioc_alts_BANG_(state_76483__$1,(7),inst_76448);
} else {
if((state_val_76484 === (6))){
var inst_76479 = (state_76483[(2)]);
var state_76483__$1 = state_76483;
var statearr_76492_77722 = state_76483__$1;
(statearr_76492_77722[(2)] = inst_76479);

(statearr_76492_77722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (3))){
var inst_76481 = (state_76483[(2)]);
var state_76483__$1 = state_76483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76483__$1,inst_76481);
} else {
if((state_val_76484 === (2))){
var inst_76448 = (state_76483[(10)]);
var inst_76450 = cljs.core.count(inst_76448);
var inst_76451 = (inst_76450 > (0));
var state_76483__$1 = state_76483;
if(cljs.core.truth_(inst_76451)){
var statearr_76494_77723 = state_76483__$1;
(statearr_76494_77723[(1)] = (4));

} else {
var statearr_76495_77724 = state_76483__$1;
(statearr_76495_77724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (11))){
var inst_76448 = (state_76483[(10)]);
var inst_76472 = (state_76483[(2)]);
var tmp76493 = inst_76448;
var inst_76448__$1 = tmp76493;
var state_76483__$1 = (function (){var statearr_76496 = state_76483;
(statearr_76496[(11)] = inst_76472);

(statearr_76496[(10)] = inst_76448__$1);

return statearr_76496;
})();
var statearr_76497_77725 = state_76483__$1;
(statearr_76497_77725[(2)] = null);

(statearr_76497_77725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (9))){
var inst_76458 = (state_76483[(8)]);
var state_76483__$1 = state_76483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76483__$1,(11),out,inst_76458);
} else {
if((state_val_76484 === (5))){
var inst_76477 = cljs.core.async.close_BANG_(out);
var state_76483__$1 = state_76483;
var statearr_76498_77726 = state_76483__$1;
(statearr_76498_77726[(2)] = inst_76477);

(statearr_76498_77726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (10))){
var inst_76475 = (state_76483[(2)]);
var state_76483__$1 = state_76483;
var statearr_76499_77727 = state_76483__$1;
(statearr_76499_77727[(2)] = inst_76475);

(statearr_76499_77727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76484 === (8))){
var inst_76457 = (state_76483[(7)]);
var inst_76458 = (state_76483[(8)]);
var inst_76448 = (state_76483[(10)]);
var inst_76459 = (state_76483[(9)]);
var inst_76466 = (function (){var cs = inst_76448;
var vec__76453 = inst_76457;
var v = inst_76458;
var c = inst_76459;
return (function (p1__76444_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__76444_SHARP_);
});
})();
var inst_76467 = cljs.core.filterv(inst_76466,inst_76448);
var inst_76448__$1 = inst_76467;
var state_76483__$1 = (function (){var statearr_76500 = state_76483;
(statearr_76500[(10)] = inst_76448__$1);

return statearr_76500;
})();
var statearr_76501_77735 = state_76483__$1;
(statearr_76501_77735[(2)] = null);

(statearr_76501_77735[(1)] = (2));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76502[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76502[(1)] = (1));

return statearr_76502;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76483){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76483);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76503){var ex__36070__auto__ = e76503;
var statearr_76504_77736 = state_76483;
(statearr_76504_77736[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76483[(4)]))){
var statearr_76505_77737 = state_76483;
(statearr_76505_77737[(1)] = cljs.core.first((state_76483[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77738 = state_76483;
state_76483 = G__77738;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76506 = f__36137__auto__();
(statearr_76506[(6)] = c__36136__auto___77718);

return statearr_76506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
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
var G__76508 = arguments.length;
switch (G__76508) {
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
var c__36136__auto___77746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76533){
var state_val_76534 = (state_76533[(1)]);
if((state_val_76534 === (7))){
var inst_76514 = (state_76533[(7)]);
var inst_76514__$1 = (state_76533[(2)]);
var inst_76515 = (inst_76514__$1 == null);
var inst_76516 = cljs.core.not(inst_76515);
var state_76533__$1 = (function (){var statearr_76536 = state_76533;
(statearr_76536[(7)] = inst_76514__$1);

return statearr_76536;
})();
if(inst_76516){
var statearr_76537_77747 = state_76533__$1;
(statearr_76537_77747[(1)] = (8));

} else {
var statearr_76538_77748 = state_76533__$1;
(statearr_76538_77748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (1))){
var inst_76509 = (0);
var state_76533__$1 = (function (){var statearr_76539 = state_76533;
(statearr_76539[(8)] = inst_76509);

return statearr_76539;
})();
var statearr_76540_77752 = state_76533__$1;
(statearr_76540_77752[(2)] = null);

(statearr_76540_77752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (4))){
var state_76533__$1 = state_76533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76533__$1,(7),ch);
} else {
if((state_val_76534 === (6))){
var inst_76527 = (state_76533[(2)]);
var state_76533__$1 = state_76533;
var statearr_76541_77753 = state_76533__$1;
(statearr_76541_77753[(2)] = inst_76527);

(statearr_76541_77753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (3))){
var inst_76529 = (state_76533[(2)]);
var inst_76531 = cljs.core.async.close_BANG_(out);
var state_76533__$1 = (function (){var statearr_76543 = state_76533;
(statearr_76543[(9)] = inst_76529);

return statearr_76543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76533__$1,inst_76531);
} else {
if((state_val_76534 === (2))){
var inst_76509 = (state_76533[(8)]);
var inst_76511 = (inst_76509 < n);
var state_76533__$1 = state_76533;
if(cljs.core.truth_(inst_76511)){
var statearr_76545_77759 = state_76533__$1;
(statearr_76545_77759[(1)] = (4));

} else {
var statearr_76546_77760 = state_76533__$1;
(statearr_76546_77760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (11))){
var inst_76509 = (state_76533[(8)]);
var inst_76519 = (state_76533[(2)]);
var inst_76520 = (inst_76509 + (1));
var inst_76509__$1 = inst_76520;
var state_76533__$1 = (function (){var statearr_76547 = state_76533;
(statearr_76547[(8)] = inst_76509__$1);

(statearr_76547[(10)] = inst_76519);

return statearr_76547;
})();
var statearr_76548_77761 = state_76533__$1;
(statearr_76548_77761[(2)] = null);

(statearr_76548_77761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (9))){
var state_76533__$1 = state_76533;
var statearr_76549_77762 = state_76533__$1;
(statearr_76549_77762[(2)] = null);

(statearr_76549_77762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (5))){
var state_76533__$1 = state_76533;
var statearr_76550_77763 = state_76533__$1;
(statearr_76550_77763[(2)] = null);

(statearr_76550_77763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (10))){
var inst_76524 = (state_76533[(2)]);
var state_76533__$1 = state_76533;
var statearr_76551_77764 = state_76533__$1;
(statearr_76551_77764[(2)] = inst_76524);

(statearr_76551_77764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76534 === (8))){
var inst_76514 = (state_76533[(7)]);
var state_76533__$1 = state_76533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76533__$1,(11),out,inst_76514);
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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76554[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76554[(1)] = (1));

return statearr_76554;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76533){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76533);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76555){var ex__36070__auto__ = e76555;
var statearr_76556_77768 = state_76533;
(statearr_76556_77768[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76533[(4)]))){
var statearr_76557_77769 = state_76533;
(statearr_76557_77769[(1)] = cljs.core.first((state_76533[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77770 = state_76533;
state_76533 = G__77770;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76558 = f__36137__auto__();
(statearr_76558[(6)] = c__36136__auto___77746);

return statearr_76558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76560 = (function (f,ch,meta76561){
this.f = f;
this.ch = ch;
this.meta76561 = meta76561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76562,meta76561__$1){
var self__ = this;
var _76562__$1 = this;
return (new cljs.core.async.t_cljs$core$async76560(self__.f,self__.ch,meta76561__$1));
}));

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76562){
var self__ = this;
var _76562__$1 = this;
return self__.meta76561;
}));

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76564 = (function (f,ch,meta76561,_,fn1,meta76565){
this.f = f;
this.ch = ch;
this.meta76561 = meta76561;
this._ = _;
this.fn1 = fn1;
this.meta76565 = meta76565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76566,meta76565__$1){
var self__ = this;
var _76566__$1 = this;
return (new cljs.core.async.t_cljs$core$async76564(self__.f,self__.ch,self__.meta76561,self__._,self__.fn1,meta76565__$1));
}));

(cljs.core.async.t_cljs$core$async76564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76566){
var self__ = this;
var _76566__$1 = this;
return self__.meta76565;
}));

(cljs.core.async.t_cljs$core$async76564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async76564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async76564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__76559_SHARP_){
var G__76572 = (((p1__76559_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__76559_SHARP_) : self__.f.call(null,p1__76559_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__76572) : f1.call(null,G__76572));
});
}));

(cljs.core.async.t_cljs$core$async76564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76561","meta76561",1555387449,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async76560","cljs.core.async/t_cljs$core$async76560",53081525,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta76565","meta76565",1609740826,null)], null);
}));

(cljs.core.async.t_cljs$core$async76564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76564");

(cljs.core.async.t_cljs$core$async76564.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async76564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76564.
 */
cljs.core.async.__GT_t_cljs$core$async76564 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async76564(f__$1,ch__$1,meta76561__$1,___$2,fn1__$1,meta76565){
return (new cljs.core.async.t_cljs$core$async76564(f__$1,ch__$1,meta76561__$1,___$2,fn1__$1,meta76565));
});

}

return (new cljs.core.async.t_cljs$core$async76564(self__.f,self__.ch,self__.meta76561,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__76577 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__76577) : self__.f.call(null,G__76577));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async76560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76561","meta76561",1555387449,null)], null);
}));

(cljs.core.async.t_cljs$core$async76560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76560");

(cljs.core.async.t_cljs$core$async76560.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async76560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76560.
 */
cljs.core.async.__GT_t_cljs$core$async76560 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async76560(f__$1,ch__$1,meta76561){
return (new cljs.core.async.t_cljs$core$async76560(f__$1,ch__$1,meta76561));
});

}

return (new cljs.core.async.t_cljs$core$async76560(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76582 = (function (f,ch,meta76583){
this.f = f;
this.ch = ch;
this.meta76583 = meta76583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76584,meta76583__$1){
var self__ = this;
var _76584__$1 = this;
return (new cljs.core.async.t_cljs$core$async76582(self__.f,self__.ch,meta76583__$1));
}));

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76584){
var self__ = this;
var _76584__$1 = this;
return self__.meta76583;
}));

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async76582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76583","meta76583",-789127669,null)], null);
}));

(cljs.core.async.t_cljs$core$async76582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76582");

(cljs.core.async.t_cljs$core$async76582.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async76582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76582.
 */
cljs.core.async.__GT_t_cljs$core$async76582 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async76582(f__$1,ch__$1,meta76583){
return (new cljs.core.async.t_cljs$core$async76582(f__$1,ch__$1,meta76583));
});

}

return (new cljs.core.async.t_cljs$core$async76582(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76611 = (function (p,ch,meta76612){
this.p = p;
this.ch = ch;
this.meta76612 = meta76612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76613,meta76612__$1){
var self__ = this;
var _76613__$1 = this;
return (new cljs.core.async.t_cljs$core$async76611(self__.p,self__.ch,meta76612__$1));
}));

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76613){
var self__ = this;
var _76613__$1 = this;
return self__.meta76612;
}));

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async76611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76612","meta76612",1877126557,null)], null);
}));

(cljs.core.async.t_cljs$core$async76611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76611");

(cljs.core.async.t_cljs$core$async76611.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async76611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76611.
 */
cljs.core.async.__GT_t_cljs$core$async76611 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async76611(p__$1,ch__$1,meta76612){
return (new cljs.core.async.t_cljs$core$async76611(p__$1,ch__$1,meta76612));
});

}

return (new cljs.core.async.t_cljs$core$async76611(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__76625 = arguments.length;
switch (G__76625) {
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
var c__36136__auto___77782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76650){
var state_val_76651 = (state_76650[(1)]);
if((state_val_76651 === (7))){
var inst_76646 = (state_76650[(2)]);
var state_76650__$1 = state_76650;
var statearr_76654_77783 = state_76650__$1;
(statearr_76654_77783[(2)] = inst_76646);

(statearr_76654_77783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (1))){
var state_76650__$1 = state_76650;
var statearr_76655_77784 = state_76650__$1;
(statearr_76655_77784[(2)] = null);

(statearr_76655_77784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (4))){
var inst_76629 = (state_76650[(7)]);
var inst_76629__$1 = (state_76650[(2)]);
var inst_76630 = (inst_76629__$1 == null);
var state_76650__$1 = (function (){var statearr_76657 = state_76650;
(statearr_76657[(7)] = inst_76629__$1);

return statearr_76657;
})();
if(cljs.core.truth_(inst_76630)){
var statearr_76658_77789 = state_76650__$1;
(statearr_76658_77789[(1)] = (5));

} else {
var statearr_76659_77790 = state_76650__$1;
(statearr_76659_77790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (6))){
var inst_76629 = (state_76650[(7)]);
var inst_76637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_76629) : p.call(null,inst_76629));
var state_76650__$1 = state_76650;
if(cljs.core.truth_(inst_76637)){
var statearr_76661_77791 = state_76650__$1;
(statearr_76661_77791[(1)] = (8));

} else {
var statearr_76662_77792 = state_76650__$1;
(statearr_76662_77792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (3))){
var inst_76648 = (state_76650[(2)]);
var state_76650__$1 = state_76650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76650__$1,inst_76648);
} else {
if((state_val_76651 === (2))){
var state_76650__$1 = state_76650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76650__$1,(4),ch);
} else {
if((state_val_76651 === (11))){
var inst_76640 = (state_76650[(2)]);
var state_76650__$1 = state_76650;
var statearr_76663_77793 = state_76650__$1;
(statearr_76663_77793[(2)] = inst_76640);

(statearr_76663_77793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (9))){
var state_76650__$1 = state_76650;
var statearr_76664_77794 = state_76650__$1;
(statearr_76664_77794[(2)] = null);

(statearr_76664_77794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (5))){
var inst_76635 = cljs.core.async.close_BANG_(out);
var state_76650__$1 = state_76650;
var statearr_76665_77799 = state_76650__$1;
(statearr_76665_77799[(2)] = inst_76635);

(statearr_76665_77799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (10))){
var inst_76643 = (state_76650[(2)]);
var state_76650__$1 = (function (){var statearr_76666 = state_76650;
(statearr_76666[(8)] = inst_76643);

return statearr_76666;
})();
var statearr_76667_77800 = state_76650__$1;
(statearr_76667_77800[(2)] = null);

(statearr_76667_77800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76651 === (8))){
var inst_76629 = (state_76650[(7)]);
var state_76650__$1 = state_76650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76650__$1,(11),out,inst_76629);
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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76668 = [null,null,null,null,null,null,null,null,null];
(statearr_76668[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76668[(1)] = (1));

return statearr_76668;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76650){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76650);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76670){var ex__36070__auto__ = e76670;
var statearr_76672_77806 = state_76650;
(statearr_76672_77806[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76650[(4)]))){
var statearr_76673_77807 = state_76650;
(statearr_76673_77807[(1)] = cljs.core.first((state_76650[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77808 = state_76650;
state_76650 = G__77808;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76674 = f__36137__auto__();
(statearr_76674[(6)] = c__36136__auto___77782);

return statearr_76674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__76678 = arguments.length;
switch (G__76678) {
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
var c__36136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76743){
var state_val_76744 = (state_76743[(1)]);
if((state_val_76744 === (7))){
var inst_76739 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
var statearr_76745_77811 = state_76743__$1;
(statearr_76745_77811[(2)] = inst_76739);

(statearr_76745_77811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (20))){
var inst_76709 = (state_76743[(7)]);
var inst_76720 = (state_76743[(2)]);
var inst_76721 = cljs.core.next(inst_76709);
var inst_76695 = inst_76721;
var inst_76696 = null;
var inst_76697 = (0);
var inst_76698 = (0);
var state_76743__$1 = (function (){var statearr_76746 = state_76743;
(statearr_76746[(8)] = inst_76698);

(statearr_76746[(9)] = inst_76697);

(statearr_76746[(10)] = inst_76695);

(statearr_76746[(11)] = inst_76696);

(statearr_76746[(12)] = inst_76720);

return statearr_76746;
})();
var statearr_76747_77812 = state_76743__$1;
(statearr_76747_77812[(2)] = null);

(statearr_76747_77812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (1))){
var state_76743__$1 = state_76743;
var statearr_76748_77813 = state_76743__$1;
(statearr_76748_77813[(2)] = null);

(statearr_76748_77813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (4))){
var inst_76684 = (state_76743[(13)]);
var inst_76684__$1 = (state_76743[(2)]);
var inst_76685 = (inst_76684__$1 == null);
var state_76743__$1 = (function (){var statearr_76753 = state_76743;
(statearr_76753[(13)] = inst_76684__$1);

return statearr_76753;
})();
if(cljs.core.truth_(inst_76685)){
var statearr_76754_77815 = state_76743__$1;
(statearr_76754_77815[(1)] = (5));

} else {
var statearr_76756_77816 = state_76743__$1;
(statearr_76756_77816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (15))){
var state_76743__$1 = state_76743;
var statearr_76760_77820 = state_76743__$1;
(statearr_76760_77820[(2)] = null);

(statearr_76760_77820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (21))){
var state_76743__$1 = state_76743;
var statearr_76762_77821 = state_76743__$1;
(statearr_76762_77821[(2)] = null);

(statearr_76762_77821[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (13))){
var inst_76698 = (state_76743[(8)]);
var inst_76697 = (state_76743[(9)]);
var inst_76695 = (state_76743[(10)]);
var inst_76696 = (state_76743[(11)]);
var inst_76705 = (state_76743[(2)]);
var inst_76706 = (inst_76698 + (1));
var tmp76757 = inst_76697;
var tmp76758 = inst_76695;
var tmp76759 = inst_76696;
var inst_76695__$1 = tmp76758;
var inst_76696__$1 = tmp76759;
var inst_76697__$1 = tmp76757;
var inst_76698__$1 = inst_76706;
var state_76743__$1 = (function (){var statearr_76764 = state_76743;
(statearr_76764[(8)] = inst_76698__$1);

(statearr_76764[(9)] = inst_76697__$1);

(statearr_76764[(10)] = inst_76695__$1);

(statearr_76764[(14)] = inst_76705);

(statearr_76764[(11)] = inst_76696__$1);

return statearr_76764;
})();
var statearr_76765_77824 = state_76743__$1;
(statearr_76765_77824[(2)] = null);

(statearr_76765_77824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (22))){
var state_76743__$1 = state_76743;
var statearr_76766_77825 = state_76743__$1;
(statearr_76766_77825[(2)] = null);

(statearr_76766_77825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (6))){
var inst_76684 = (state_76743[(13)]);
var inst_76693 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76684) : f.call(null,inst_76684));
var inst_76694 = cljs.core.seq(inst_76693);
var inst_76695 = inst_76694;
var inst_76696 = null;
var inst_76697 = (0);
var inst_76698 = (0);
var state_76743__$1 = (function (){var statearr_76768 = state_76743;
(statearr_76768[(8)] = inst_76698);

(statearr_76768[(9)] = inst_76697);

(statearr_76768[(10)] = inst_76695);

(statearr_76768[(11)] = inst_76696);

return statearr_76768;
})();
var statearr_76770_77826 = state_76743__$1;
(statearr_76770_77826[(2)] = null);

(statearr_76770_77826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (17))){
var inst_76709 = (state_76743[(7)]);
var inst_76713 = cljs.core.chunk_first(inst_76709);
var inst_76714 = cljs.core.chunk_rest(inst_76709);
var inst_76715 = cljs.core.count(inst_76713);
var inst_76695 = inst_76714;
var inst_76696 = inst_76713;
var inst_76697 = inst_76715;
var inst_76698 = (0);
var state_76743__$1 = (function (){var statearr_76774 = state_76743;
(statearr_76774[(8)] = inst_76698);

(statearr_76774[(9)] = inst_76697);

(statearr_76774[(10)] = inst_76695);

(statearr_76774[(11)] = inst_76696);

return statearr_76774;
})();
var statearr_76775_77827 = state_76743__$1;
(statearr_76775_77827[(2)] = null);

(statearr_76775_77827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (3))){
var inst_76741 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76743__$1,inst_76741);
} else {
if((state_val_76744 === (12))){
var inst_76729 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
var statearr_76776_77828 = state_76743__$1;
(statearr_76776_77828[(2)] = inst_76729);

(statearr_76776_77828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (2))){
var state_76743__$1 = state_76743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76743__$1,(4),in$);
} else {
if((state_val_76744 === (23))){
var inst_76737 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
var statearr_76777_77829 = state_76743__$1;
(statearr_76777_77829[(2)] = inst_76737);

(statearr_76777_77829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (19))){
var inst_76724 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
var statearr_76778_77830 = state_76743__$1;
(statearr_76778_77830[(2)] = inst_76724);

(statearr_76778_77830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (11))){
var inst_76695 = (state_76743[(10)]);
var inst_76709 = (state_76743[(7)]);
var inst_76709__$1 = cljs.core.seq(inst_76695);
var state_76743__$1 = (function (){var statearr_76779 = state_76743;
(statearr_76779[(7)] = inst_76709__$1);

return statearr_76779;
})();
if(inst_76709__$1){
var statearr_76780_77831 = state_76743__$1;
(statearr_76780_77831[(1)] = (14));

} else {
var statearr_76781_77832 = state_76743__$1;
(statearr_76781_77832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (9))){
var inst_76731 = (state_76743[(2)]);
var inst_76732 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_76743__$1 = (function (){var statearr_76782 = state_76743;
(statearr_76782[(15)] = inst_76731);

return statearr_76782;
})();
if(cljs.core.truth_(inst_76732)){
var statearr_76783_77833 = state_76743__$1;
(statearr_76783_77833[(1)] = (21));

} else {
var statearr_76784_77834 = state_76743__$1;
(statearr_76784_77834[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (5))){
var inst_76687 = cljs.core.async.close_BANG_(out);
var state_76743__$1 = state_76743;
var statearr_76785_77835 = state_76743__$1;
(statearr_76785_77835[(2)] = inst_76687);

(statearr_76785_77835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (14))){
var inst_76709 = (state_76743[(7)]);
var inst_76711 = cljs.core.chunked_seq_QMARK_(inst_76709);
var state_76743__$1 = state_76743;
if(inst_76711){
var statearr_76786_77836 = state_76743__$1;
(statearr_76786_77836[(1)] = (17));

} else {
var statearr_76787_77837 = state_76743__$1;
(statearr_76787_77837[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (16))){
var inst_76727 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
var statearr_76788_77838 = state_76743__$1;
(statearr_76788_77838[(2)] = inst_76727);

(statearr_76788_77838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (10))){
var inst_76698 = (state_76743[(8)]);
var inst_76696 = (state_76743[(11)]);
var inst_76703 = cljs.core._nth(inst_76696,inst_76698);
var state_76743__$1 = state_76743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76743__$1,(13),out,inst_76703);
} else {
if((state_val_76744 === (18))){
var inst_76709 = (state_76743[(7)]);
var inst_76718 = cljs.core.first(inst_76709);
var state_76743__$1 = state_76743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76743__$1,(20),out,inst_76718);
} else {
if((state_val_76744 === (8))){
var inst_76698 = (state_76743[(8)]);
var inst_76697 = (state_76743[(9)]);
var inst_76700 = (inst_76698 < inst_76697);
var inst_76701 = inst_76700;
var state_76743__$1 = state_76743;
if(cljs.core.truth_(inst_76701)){
var statearr_76793_77839 = state_76743__$1;
(statearr_76793_77839[(1)] = (10));

} else {
var statearr_76794_77840 = state_76743__$1;
(statearr_76794_77840[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_76796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76796[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__);

(statearr_76796[(1)] = (1));

return statearr_76796;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____1 = (function (state_76743){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76743);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76800){var ex__36070__auto__ = e76800;
var statearr_76801_77842 = state_76743;
(statearr_76801_77842[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76743[(4)]))){
var statearr_76802_77846 = state_76743;
(statearr_76802_77846[(1)] = cljs.core.first((state_76743[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77847 = state_76743;
state_76743 = G__77847;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__ = function(state_76743){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____1.call(this,state_76743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76803 = f__36137__auto__();
(statearr_76803[(6)] = c__36136__auto__);

return statearr_76803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

return c__36136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__76805 = arguments.length;
switch (G__76805) {
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
var G__76808 = arguments.length;
switch (G__76808) {
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
var G__76814 = arguments.length;
switch (G__76814) {
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
var c__36136__auto___77858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76838){
var state_val_76839 = (state_76838[(1)]);
if((state_val_76839 === (7))){
var inst_76833 = (state_76838[(2)]);
var state_76838__$1 = state_76838;
var statearr_76840_77859 = state_76838__$1;
(statearr_76840_77859[(2)] = inst_76833);

(statearr_76840_77859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (1))){
var inst_76815 = null;
var state_76838__$1 = (function (){var statearr_76841 = state_76838;
(statearr_76841[(7)] = inst_76815);

return statearr_76841;
})();
var statearr_76842_77860 = state_76838__$1;
(statearr_76842_77860[(2)] = null);

(statearr_76842_77860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (4))){
var inst_76818 = (state_76838[(8)]);
var inst_76818__$1 = (state_76838[(2)]);
var inst_76819 = (inst_76818__$1 == null);
var inst_76820 = cljs.core.not(inst_76819);
var state_76838__$1 = (function (){var statearr_76843 = state_76838;
(statearr_76843[(8)] = inst_76818__$1);

return statearr_76843;
})();
if(inst_76820){
var statearr_76844_77861 = state_76838__$1;
(statearr_76844_77861[(1)] = (5));

} else {
var statearr_76845_77862 = state_76838__$1;
(statearr_76845_77862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (6))){
var state_76838__$1 = state_76838;
var statearr_76846_77863 = state_76838__$1;
(statearr_76846_77863[(2)] = null);

(statearr_76846_77863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (3))){
var inst_76835 = (state_76838[(2)]);
var inst_76836 = cljs.core.async.close_BANG_(out);
var state_76838__$1 = (function (){var statearr_76847 = state_76838;
(statearr_76847[(9)] = inst_76835);

return statearr_76847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76838__$1,inst_76836);
} else {
if((state_val_76839 === (2))){
var state_76838__$1 = state_76838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76838__$1,(4),ch);
} else {
if((state_val_76839 === (11))){
var inst_76818 = (state_76838[(8)]);
var inst_76827 = (state_76838[(2)]);
var inst_76815 = inst_76818;
var state_76838__$1 = (function (){var statearr_76848 = state_76838;
(statearr_76848[(10)] = inst_76827);

(statearr_76848[(7)] = inst_76815);

return statearr_76848;
})();
var statearr_76849_77864 = state_76838__$1;
(statearr_76849_77864[(2)] = null);

(statearr_76849_77864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (9))){
var inst_76818 = (state_76838[(8)]);
var state_76838__$1 = state_76838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76838__$1,(11),out,inst_76818);
} else {
if((state_val_76839 === (5))){
var inst_76815 = (state_76838[(7)]);
var inst_76818 = (state_76838[(8)]);
var inst_76822 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76818,inst_76815);
var state_76838__$1 = state_76838;
if(inst_76822){
var statearr_76851_77865 = state_76838__$1;
(statearr_76851_77865[(1)] = (8));

} else {
var statearr_76852_77866 = state_76838__$1;
(statearr_76852_77866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (10))){
var inst_76830 = (state_76838[(2)]);
var state_76838__$1 = state_76838;
var statearr_76853_77867 = state_76838__$1;
(statearr_76853_77867[(2)] = inst_76830);

(statearr_76853_77867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76839 === (8))){
var inst_76815 = (state_76838[(7)]);
var tmp76850 = inst_76815;
var inst_76815__$1 = tmp76850;
var state_76838__$1 = (function (){var statearr_76854 = state_76838;
(statearr_76854[(7)] = inst_76815__$1);

return statearr_76854;
})();
var statearr_76855_77868 = state_76838__$1;
(statearr_76855_77868[(2)] = null);

(statearr_76855_77868[(1)] = (2));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76856[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76856[(1)] = (1));

return statearr_76856;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76838){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76838);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76857){var ex__36070__auto__ = e76857;
var statearr_76858_77869 = state_76838;
(statearr_76858_77869[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76838[(4)]))){
var statearr_76859_77870 = state_76838;
(statearr_76859_77870[(1)] = cljs.core.first((state_76838[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77872 = state_76838;
state_76838 = G__77872;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76860 = f__36137__auto__();
(statearr_76860[(6)] = c__36136__auto___77858);

return statearr_76860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__76862 = arguments.length;
switch (G__76862) {
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
var c__36136__auto___77875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_76901){
var state_val_76902 = (state_76901[(1)]);
if((state_val_76902 === (7))){
var inst_76897 = (state_76901[(2)]);
var state_76901__$1 = state_76901;
var statearr_76903_77876 = state_76901__$1;
(statearr_76903_77876[(2)] = inst_76897);

(statearr_76903_77876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (1))){
var inst_76864 = (new Array(n));
var inst_76865 = inst_76864;
var inst_76866 = (0);
var state_76901__$1 = (function (){var statearr_76904 = state_76901;
(statearr_76904[(7)] = inst_76865);

(statearr_76904[(8)] = inst_76866);

return statearr_76904;
})();
var statearr_76908_77877 = state_76901__$1;
(statearr_76908_77877[(2)] = null);

(statearr_76908_77877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (4))){
var inst_76869 = (state_76901[(9)]);
var inst_76869__$1 = (state_76901[(2)]);
var inst_76870 = (inst_76869__$1 == null);
var inst_76871 = cljs.core.not(inst_76870);
var state_76901__$1 = (function (){var statearr_76909 = state_76901;
(statearr_76909[(9)] = inst_76869__$1);

return statearr_76909;
})();
if(inst_76871){
var statearr_76910_77878 = state_76901__$1;
(statearr_76910_77878[(1)] = (5));

} else {
var statearr_76911_77879 = state_76901__$1;
(statearr_76911_77879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (15))){
var inst_76891 = (state_76901[(2)]);
var state_76901__$1 = state_76901;
var statearr_76912_77880 = state_76901__$1;
(statearr_76912_77880[(2)] = inst_76891);

(statearr_76912_77880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (13))){
var state_76901__$1 = state_76901;
var statearr_76913_77881 = state_76901__$1;
(statearr_76913_77881[(2)] = null);

(statearr_76913_77881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (6))){
var inst_76866 = (state_76901[(8)]);
var inst_76887 = (inst_76866 > (0));
var state_76901__$1 = state_76901;
if(cljs.core.truth_(inst_76887)){
var statearr_76914_77882 = state_76901__$1;
(statearr_76914_77882[(1)] = (12));

} else {
var statearr_76915_77883 = state_76901__$1;
(statearr_76915_77883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (3))){
var inst_76899 = (state_76901[(2)]);
var state_76901__$1 = state_76901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76901__$1,inst_76899);
} else {
if((state_val_76902 === (12))){
var inst_76865 = (state_76901[(7)]);
var inst_76889 = cljs.core.vec(inst_76865);
var state_76901__$1 = state_76901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76901__$1,(15),out,inst_76889);
} else {
if((state_val_76902 === (2))){
var state_76901__$1 = state_76901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76901__$1,(4),ch);
} else {
if((state_val_76902 === (11))){
var inst_76881 = (state_76901[(2)]);
var inst_76882 = (new Array(n));
var inst_76865 = inst_76882;
var inst_76866 = (0);
var state_76901__$1 = (function (){var statearr_76920 = state_76901;
(statearr_76920[(7)] = inst_76865);

(statearr_76920[(8)] = inst_76866);

(statearr_76920[(10)] = inst_76881);

return statearr_76920;
})();
var statearr_76921_77884 = state_76901__$1;
(statearr_76921_77884[(2)] = null);

(statearr_76921_77884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (9))){
var inst_76865 = (state_76901[(7)]);
var inst_76879 = cljs.core.vec(inst_76865);
var state_76901__$1 = state_76901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76901__$1,(11),out,inst_76879);
} else {
if((state_val_76902 === (5))){
var inst_76865 = (state_76901[(7)]);
var inst_76869 = (state_76901[(9)]);
var inst_76874 = (state_76901[(11)]);
var inst_76866 = (state_76901[(8)]);
var inst_76873 = (inst_76865[inst_76866] = inst_76869);
var inst_76874__$1 = (inst_76866 + (1));
var inst_76875 = (inst_76874__$1 < n);
var state_76901__$1 = (function (){var statearr_76922 = state_76901;
(statearr_76922[(11)] = inst_76874__$1);

(statearr_76922[(12)] = inst_76873);

return statearr_76922;
})();
if(cljs.core.truth_(inst_76875)){
var statearr_76923_77889 = state_76901__$1;
(statearr_76923_77889[(1)] = (8));

} else {
var statearr_76924_77891 = state_76901__$1;
(statearr_76924_77891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (14))){
var inst_76894 = (state_76901[(2)]);
var inst_76895 = cljs.core.async.close_BANG_(out);
var state_76901__$1 = (function (){var statearr_76926 = state_76901;
(statearr_76926[(13)] = inst_76894);

return statearr_76926;
})();
var statearr_76927_77895 = state_76901__$1;
(statearr_76927_77895[(2)] = inst_76895);

(statearr_76927_77895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (10))){
var inst_76885 = (state_76901[(2)]);
var state_76901__$1 = state_76901;
var statearr_76928_77896 = state_76901__$1;
(statearr_76928_77896[(2)] = inst_76885);

(statearr_76928_77896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76902 === (8))){
var inst_76865 = (state_76901[(7)]);
var inst_76874 = (state_76901[(11)]);
var tmp76925 = inst_76865;
var inst_76865__$1 = tmp76925;
var inst_76866 = inst_76874;
var state_76901__$1 = (function (){var statearr_76929 = state_76901;
(statearr_76929[(7)] = inst_76865__$1);

(statearr_76929[(8)] = inst_76866);

return statearr_76929;
})();
var statearr_76930_77897 = state_76901__$1;
(statearr_76930_77897[(2)] = null);

(statearr_76930_77897[(1)] = (2));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_76931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76931[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_76931[(1)] = (1));

return statearr_76931;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_76901){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_76901);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e76932){var ex__36070__auto__ = e76932;
var statearr_76933_77898 = state_76901;
(statearr_76933_77898[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_76901[(4)]))){
var statearr_76934_77899 = state_76901;
(statearr_76934_77899[(1)] = cljs.core.first((state_76901[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77900 = state_76901;
state_76901 = G__77900;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_76901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_76901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_76935 = f__36137__auto__();
(statearr_76935[(6)] = c__36136__auto___77875);

return statearr_76935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__76957 = arguments.length;
switch (G__76957) {
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
var c__36136__auto___77903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_77022){
var state_val_77023 = (state_77022[(1)]);
if((state_val_77023 === (7))){
var inst_77018 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
var statearr_77026_77904 = state_77022__$1;
(statearr_77026_77904[(2)] = inst_77018);

(statearr_77026_77904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (1))){
var inst_76966 = [];
var inst_76967 = inst_76966;
var inst_76968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_77022__$1 = (function (){var statearr_77027 = state_77022;
(statearr_77027[(7)] = inst_76967);

(statearr_77027[(8)] = inst_76968);

return statearr_77027;
})();
var statearr_77029_77906 = state_77022__$1;
(statearr_77029_77906[(2)] = null);

(statearr_77029_77906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (4))){
var inst_76977 = (state_77022[(9)]);
var inst_76977__$1 = (state_77022[(2)]);
var inst_76978 = (inst_76977__$1 == null);
var inst_76979 = cljs.core.not(inst_76978);
var state_77022__$1 = (function (){var statearr_77030 = state_77022;
(statearr_77030[(9)] = inst_76977__$1);

return statearr_77030;
})();
if(inst_76979){
var statearr_77031_77910 = state_77022__$1;
(statearr_77031_77910[(1)] = (5));

} else {
var statearr_77032_77911 = state_77022__$1;
(statearr_77032_77911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (15))){
var inst_76967 = (state_77022[(7)]);
var inst_77010 = cljs.core.vec(inst_76967);
var state_77022__$1 = state_77022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77022__$1,(18),out,inst_77010);
} else {
if((state_val_77023 === (13))){
var inst_77005 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
var statearr_77033_77912 = state_77022__$1;
(statearr_77033_77912[(2)] = inst_77005);

(statearr_77033_77912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (6))){
var inst_76967 = (state_77022[(7)]);
var inst_77007 = inst_76967.length;
var inst_77008 = (inst_77007 > (0));
var state_77022__$1 = state_77022;
if(cljs.core.truth_(inst_77008)){
var statearr_77034_77913 = state_77022__$1;
(statearr_77034_77913[(1)] = (15));

} else {
var statearr_77035_77914 = state_77022__$1;
(statearr_77035_77914[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (17))){
var inst_77015 = (state_77022[(2)]);
var inst_77016 = cljs.core.async.close_BANG_(out);
var state_77022__$1 = (function (){var statearr_77036 = state_77022;
(statearr_77036[(10)] = inst_77015);

return statearr_77036;
})();
var statearr_77040_77915 = state_77022__$1;
(statearr_77040_77915[(2)] = inst_77016);

(statearr_77040_77915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (3))){
var inst_77020 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77022__$1,inst_77020);
} else {
if((state_val_77023 === (12))){
var inst_76967 = (state_77022[(7)]);
var inst_76998 = cljs.core.vec(inst_76967);
var state_77022__$1 = state_77022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77022__$1,(14),out,inst_76998);
} else {
if((state_val_77023 === (2))){
var state_77022__$1 = state_77022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77022__$1,(4),ch);
} else {
if((state_val_77023 === (11))){
var inst_76967 = (state_77022[(7)]);
var inst_76977 = (state_77022[(9)]);
var inst_76981 = (state_77022[(11)]);
var inst_76995 = inst_76967.push(inst_76977);
var tmp77041 = inst_76967;
var inst_76967__$1 = tmp77041;
var inst_76968 = inst_76981;
var state_77022__$1 = (function (){var statearr_77042 = state_77022;
(statearr_77042[(12)] = inst_76995);

(statearr_77042[(7)] = inst_76967__$1);

(statearr_77042[(8)] = inst_76968);

return statearr_77042;
})();
var statearr_77043_77916 = state_77022__$1;
(statearr_77043_77916[(2)] = null);

(statearr_77043_77916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (9))){
var inst_76968 = (state_77022[(8)]);
var inst_76991 = cljs.core.keyword_identical_QMARK_(inst_76968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_77022__$1 = state_77022;
var statearr_77044_77917 = state_77022__$1;
(statearr_77044_77917[(2)] = inst_76991);

(statearr_77044_77917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (5))){
var inst_76982 = (state_77022[(13)]);
var inst_76977 = (state_77022[(9)]);
var inst_76981 = (state_77022[(11)]);
var inst_76968 = (state_77022[(8)]);
var inst_76981__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76977) : f.call(null,inst_76977));
var inst_76982__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76981__$1,inst_76968);
var state_77022__$1 = (function (){var statearr_77045 = state_77022;
(statearr_77045[(13)] = inst_76982__$1);

(statearr_77045[(11)] = inst_76981__$1);

return statearr_77045;
})();
if(inst_76982__$1){
var statearr_77046_77918 = state_77022__$1;
(statearr_77046_77918[(1)] = (8));

} else {
var statearr_77047_77919 = state_77022__$1;
(statearr_77047_77919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (14))){
var inst_76977 = (state_77022[(9)]);
var inst_76981 = (state_77022[(11)]);
var inst_77000 = (state_77022[(2)]);
var inst_77001 = [];
var inst_77002 = inst_77001.push(inst_76977);
var inst_76967 = inst_77001;
var inst_76968 = inst_76981;
var state_77022__$1 = (function (){var statearr_77048 = state_77022;
(statearr_77048[(14)] = inst_77002);

(statearr_77048[(7)] = inst_76967);

(statearr_77048[(8)] = inst_76968);

(statearr_77048[(15)] = inst_77000);

return statearr_77048;
})();
var statearr_77049_77920 = state_77022__$1;
(statearr_77049_77920[(2)] = null);

(statearr_77049_77920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (16))){
var state_77022__$1 = state_77022;
var statearr_77050_77921 = state_77022__$1;
(statearr_77050_77921[(2)] = null);

(statearr_77050_77921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (10))){
var inst_76993 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
if(cljs.core.truth_(inst_76993)){
var statearr_77051_77922 = state_77022__$1;
(statearr_77051_77922[(1)] = (11));

} else {
var statearr_77052_77923 = state_77022__$1;
(statearr_77052_77923[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (18))){
var inst_77012 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
var statearr_77053_77924 = state_77022__$1;
(statearr_77053_77924[(2)] = inst_77012);

(statearr_77053_77924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (8))){
var inst_76982 = (state_77022[(13)]);
var state_77022__$1 = state_77022;
var statearr_77054_77925 = state_77022__$1;
(statearr_77054_77925[(2)] = inst_76982);

(statearr_77054_77925[(1)] = (10));


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
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_77055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77055[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_77055[(1)] = (1));

return statearr_77055;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_77022){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_77022);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e77056){var ex__36070__auto__ = e77056;
var statearr_77057_77926 = state_77022;
(statearr_77057_77926[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_77022[(4)]))){
var statearr_77058_77927 = state_77022;
(statearr_77058_77927[(1)] = cljs.core.first((state_77022[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77928 = state_77022;
state_77022 = G__77928;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_77022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_77022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_77059 = f__36137__auto__();
(statearr_77059[(6)] = c__36136__auto___77903);

return statearr_77059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
