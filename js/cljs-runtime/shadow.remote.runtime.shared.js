goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37330,res){
var map__37331 = p__37330;
var map__37331__$1 = cljs.core.__destructure_map(map__37331);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37332 = res;
var G__37332__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37332);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37332__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37334 = arguments.length;
switch (G__37334) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37335,msg,handlers,timeout_after_ms){
var map__37336 = p__37335;
var map__37336__$1 = cljs.core.__destructure_map(map__37336);
var runtime = map__37336__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37336__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37635 = arguments.length;
var i__4865__auto___37636 = (0);
while(true){
if((i__4865__auto___37636 < len__4864__auto___37635)){
args__4870__auto__.push((arguments[i__4865__auto___37636]));

var G__37637 = (i__4865__auto___37636 + (1));
i__4865__auto___37636 = G__37637;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37356,ev,args){
var map__37357 = p__37356;
var map__37357__$1 = cljs.core.__destructure_map(map__37357);
var runtime = map__37357__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37358 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37361 = null;
var count__37362 = (0);
var i__37363 = (0);
while(true){
if((i__37363 < count__37362)){
var ext = chunk__37361.cljs$core$IIndexed$_nth$arity$2(null,i__37363);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37638 = seq__37358;
var G__37639 = chunk__37361;
var G__37640 = count__37362;
var G__37641 = (i__37363 + (1));
seq__37358 = G__37638;
chunk__37361 = G__37639;
count__37362 = G__37640;
i__37363 = G__37641;
continue;
} else {
var G__37642 = seq__37358;
var G__37643 = chunk__37361;
var G__37644 = count__37362;
var G__37645 = (i__37363 + (1));
seq__37358 = G__37642;
chunk__37361 = G__37643;
count__37362 = G__37644;
i__37363 = G__37645;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37358);
if(temp__5753__auto__){
var seq__37358__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37358__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37358__$1);
var G__37647 = cljs.core.chunk_rest(seq__37358__$1);
var G__37648 = c__4679__auto__;
var G__37649 = cljs.core.count(c__4679__auto__);
var G__37650 = (0);
seq__37358 = G__37647;
chunk__37361 = G__37648;
count__37362 = G__37649;
i__37363 = G__37650;
continue;
} else {
var ext = cljs.core.first(seq__37358__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37651 = cljs.core.next(seq__37358__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__37358 = G__37651;
chunk__37361 = G__37652;
count__37362 = G__37653;
i__37363 = G__37654;
continue;
} else {
var G__37655 = cljs.core.next(seq__37358__$1);
var G__37656 = null;
var G__37657 = (0);
var G__37658 = (0);
seq__37358 = G__37655;
chunk__37361 = G__37656;
count__37362 = G__37657;
i__37363 = G__37658;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37346){
var G__37347 = cljs.core.first(seq37346);
var seq37346__$1 = cljs.core.next(seq37346);
var G__37348 = cljs.core.first(seq37346__$1);
var seq37346__$2 = cljs.core.next(seq37346__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37347,G__37348,seq37346__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37414,p__37415){
var map__37421 = p__37414;
var map__37421__$1 = cljs.core.__destructure_map(map__37421);
var runtime = map__37421__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37422 = p__37415;
var map__37422__$1 = cljs.core.__destructure_map(map__37422);
var msg = map__37422__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37422__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37423 = cljs.core.deref(state_ref);
var map__37423__$1 = cljs.core.__destructure_map(map__37423);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37427){
var map__37428 = p__37427;
var map__37428__$1 = cljs.core.__destructure_map(map__37428);
var runtime = map__37428__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37430,msg){
var map__37431 = p__37430;
var map__37431__$1 = cljs.core.__destructure_map(map__37431);
var runtime = map__37431__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37434,key,p__37435){
var map__37436 = p__37434;
var map__37436__$1 = cljs.core.__destructure_map(map__37436);
var state = map__37436__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37436__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37437 = p__37435;
var map__37437__$1 = cljs.core.__destructure_map(map__37437);
var spec = map__37437__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37437__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37442,key,spec){
var map__37444 = p__37442;
var map__37444__$1 = cljs.core.__destructure_map(map__37444);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37445_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37445_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37446_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37446_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37447_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37447_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37448_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37448_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37449_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37449_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37480,key){
var map__37502 = p__37480;
var map__37502__$1 = cljs.core.__destructure_map(map__37502);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37502__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37537,msg){
var map__37555 = p__37537;
var map__37555__$1 = cljs.core.__destructure_map(map__37555);
var runtime = map__37555__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37590,p__37591){
var map__37592 = p__37590;
var map__37592__$1 = cljs.core.__destructure_map(map__37592);
var runtime = map__37592__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37593 = p__37591;
var map__37593__$1 = cljs.core.__destructure_map(map__37593);
var msg = map__37593__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37601 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37603 = null;
var count__37604 = (0);
var i__37605 = (0);
while(true){
if((i__37605 < count__37604)){
var map__37621 = chunk__37603.cljs$core$IIndexed$_nth$arity$2(null,i__37605);
var map__37621__$1 = cljs.core.__destructure_map(map__37621);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37671 = seq__37601;
var G__37672 = chunk__37603;
var G__37673 = count__37604;
var G__37674 = (i__37605 + (1));
seq__37601 = G__37671;
chunk__37603 = G__37672;
count__37604 = G__37673;
i__37605 = G__37674;
continue;
} else {
var G__37675 = seq__37601;
var G__37676 = chunk__37603;
var G__37677 = count__37604;
var G__37678 = (i__37605 + (1));
seq__37601 = G__37675;
chunk__37603 = G__37676;
count__37604 = G__37677;
i__37605 = G__37678;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37601);
if(temp__5753__auto__){
var seq__37601__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37601__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37601__$1);
var G__37680 = cljs.core.chunk_rest(seq__37601__$1);
var G__37681 = c__4679__auto__;
var G__37682 = cljs.core.count(c__4679__auto__);
var G__37683 = (0);
seq__37601 = G__37680;
chunk__37603 = G__37681;
count__37604 = G__37682;
i__37605 = G__37683;
continue;
} else {
var map__37623 = cljs.core.first(seq__37601__$1);
var map__37623__$1 = cljs.core.__destructure_map(map__37623);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37685 = cljs.core.next(seq__37601__$1);
var G__37686 = null;
var G__37687 = (0);
var G__37688 = (0);
seq__37601 = G__37685;
chunk__37603 = G__37686;
count__37604 = G__37687;
i__37605 = G__37688;
continue;
} else {
var G__37689 = cljs.core.next(seq__37601__$1);
var G__37690 = null;
var G__37691 = (0);
var G__37692 = (0);
seq__37601 = G__37689;
chunk__37603 = G__37690;
count__37604 = G__37691;
i__37605 = G__37692;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
