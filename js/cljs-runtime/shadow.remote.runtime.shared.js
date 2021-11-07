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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32599,res){
var map__32600 = p__32599;
var map__32600__$1 = cljs.core.__destructure_map(map__32600);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32601 = res;
var G__32601__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32601,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32601);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32601__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32601__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32606 = arguments.length;
switch (G__32606) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32607,msg,handlers,timeout_after_ms){
var map__32608 = p__32607;
var map__32608__$1 = cljs.core.__destructure_map(map__32608);
var runtime = map__32608__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32608__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32721 = arguments.length;
var i__4819__auto___32723 = (0);
while(true){
if((i__4819__auto___32723 < len__4818__auto___32721)){
args__4824__auto__.push((arguments[i__4819__auto___32723]));

var G__32724 = (i__4819__auto___32723 + (1));
i__4819__auto___32723 = G__32724;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32615,ev,args){
var map__32616 = p__32615;
var map__32616__$1 = cljs.core.__destructure_map(map__32616);
var runtime = map__32616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32617 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32620 = null;
var count__32621 = (0);
var i__32622 = (0);
while(true){
if((i__32622 < count__32621)){
var ext = chunk__32620.cljs$core$IIndexed$_nth$arity$2(null,i__32622);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32726 = seq__32617;
var G__32727 = chunk__32620;
var G__32728 = count__32621;
var G__32729 = (i__32622 + (1));
seq__32617 = G__32726;
chunk__32620 = G__32727;
count__32621 = G__32728;
i__32622 = G__32729;
continue;
} else {
var G__32730 = seq__32617;
var G__32731 = chunk__32620;
var G__32732 = count__32621;
var G__32733 = (i__32622 + (1));
seq__32617 = G__32730;
chunk__32620 = G__32731;
count__32621 = G__32732;
i__32622 = G__32733;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32617);
if(temp__5753__auto__){
var seq__32617__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32617__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32617__$1);
var G__32734 = cljs.core.chunk_rest(seq__32617__$1);
var G__32735 = c__4638__auto__;
var G__32736 = cljs.core.count(c__4638__auto__);
var G__32737 = (0);
seq__32617 = G__32734;
chunk__32620 = G__32735;
count__32621 = G__32736;
i__32622 = G__32737;
continue;
} else {
var ext = cljs.core.first(seq__32617__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32738 = cljs.core.next(seq__32617__$1);
var G__32739 = null;
var G__32740 = (0);
var G__32741 = (0);
seq__32617 = G__32738;
chunk__32620 = G__32739;
count__32621 = G__32740;
i__32622 = G__32741;
continue;
} else {
var G__32742 = cljs.core.next(seq__32617__$1);
var G__32743 = null;
var G__32744 = (0);
var G__32745 = (0);
seq__32617 = G__32742;
chunk__32620 = G__32743;
count__32621 = G__32744;
i__32622 = G__32745;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32612){
var G__32613 = cljs.core.first(seq32612);
var seq32612__$1 = cljs.core.next(seq32612);
var G__32614 = cljs.core.first(seq32612__$1);
var seq32612__$2 = cljs.core.next(seq32612__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32613,G__32614,seq32612__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32630,p__32631){
var map__32632 = p__32630;
var map__32632__$1 = cljs.core.__destructure_map(map__32632);
var runtime = map__32632__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32632__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32633 = p__32631;
var map__32633__$1 = cljs.core.__destructure_map(map__32633);
var msg = map__32633__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32633__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32634 = cljs.core.deref(state_ref);
var map__32634__$1 = cljs.core.__destructure_map(map__32634);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32634__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32634__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32637){
var map__32638 = p__32637;
var map__32638__$1 = cljs.core.__destructure_map(map__32638);
var runtime = map__32638__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32638__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32641,msg){
var map__32642 = p__32641;
var map__32642__$1 = cljs.core.__destructure_map(map__32642);
var runtime = map__32642__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32645,key,p__32646){
var map__32647 = p__32645;
var map__32647__$1 = cljs.core.__destructure_map(map__32647);
var state = map__32647__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32648 = p__32646;
var map__32648__$1 = cljs.core.__destructure_map(map__32648);
var spec = map__32648__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32648__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32650,key,spec){
var map__32651 = p__32650;
var map__32651__$1 = cljs.core.__destructure_map(map__32651);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32652_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32652_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32653_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32653_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32654_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32654_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32655_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32655_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32656_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32656_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32672,key){
var map__32673 = p__32672;
var map__32673__$1 = cljs.core.__destructure_map(map__32673);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32685,msg){
var map__32686 = p__32685;
var map__32686__$1 = cljs.core.__destructure_map(map__32686);
var runtime = map__32686__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32688,p__32689){
var map__32691 = p__32688;
var map__32691__$1 = cljs.core.__destructure_map(map__32691);
var runtime = map__32691__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32692 = p__32689;
var map__32692__$1 = cljs.core.__destructure_map(map__32692);
var msg = map__32692__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32692__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32692__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__32697 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32699 = null;
var count__32700 = (0);
var i__32701 = (0);
while(true){
if((i__32701 < count__32700)){
var map__32710 = chunk__32699.cljs$core$IIndexed$_nth$arity$2(null,i__32701);
var map__32710__$1 = cljs.core.__destructure_map(map__32710);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32710__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32763 = seq__32697;
var G__32764 = chunk__32699;
var G__32765 = count__32700;
var G__32766 = (i__32701 + (1));
seq__32697 = G__32763;
chunk__32699 = G__32764;
count__32700 = G__32765;
i__32701 = G__32766;
continue;
} else {
var G__32767 = seq__32697;
var G__32768 = chunk__32699;
var G__32769 = count__32700;
var G__32770 = (i__32701 + (1));
seq__32697 = G__32767;
chunk__32699 = G__32768;
count__32700 = G__32769;
i__32701 = G__32770;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32697);
if(temp__5753__auto__){
var seq__32697__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32697__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32697__$1);
var G__32771 = cljs.core.chunk_rest(seq__32697__$1);
var G__32772 = c__4638__auto__;
var G__32773 = cljs.core.count(c__4638__auto__);
var G__32774 = (0);
seq__32697 = G__32771;
chunk__32699 = G__32772;
count__32700 = G__32773;
i__32701 = G__32774;
continue;
} else {
var map__32712 = cljs.core.first(seq__32697__$1);
var map__32712__$1 = cljs.core.__destructure_map(map__32712);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32712__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32775 = cljs.core.next(seq__32697__$1);
var G__32776 = null;
var G__32777 = (0);
var G__32778 = (0);
seq__32697 = G__32775;
chunk__32699 = G__32776;
count__32700 = G__32777;
i__32701 = G__32778;
continue;
} else {
var G__32779 = cljs.core.next(seq__32697__$1);
var G__32780 = null;
var G__32781 = (0);
var G__32782 = (0);
seq__32697 = G__32779;
chunk__32699 = G__32780;
count__32700 = G__32781;
i__32701 = G__32782;
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
