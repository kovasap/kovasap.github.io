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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33663,res){
var map__33666 = p__33663;
var map__33666__$1 = cljs.core.__destructure_map(map__33666);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33671 = res;
var G__33671__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33671,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33671);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33671__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33671__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33679 = arguments.length;
switch (G__33679) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33680,msg,handlers,timeout_after_ms){
var map__33683 = p__33680;
var map__33683__$1 = cljs.core.__destructure_map(map__33683);
var runtime = map__33683__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33972 = arguments.length;
var i__5770__auto___33973 = (0);
while(true){
if((i__5770__auto___33973 < len__5769__auto___33972)){
args__5775__auto__.push((arguments[i__5770__auto___33973]));

var G__33974 = (i__5770__auto___33973 + (1));
i__5770__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33696,ev,args){
var map__33697 = p__33696;
var map__33697__$1 = cljs.core.__destructure_map(map__33697);
var runtime = map__33697__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33697__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33698 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33701 = null;
var count__33702 = (0);
var i__33703 = (0);
while(true){
if((i__33703 < count__33702)){
var ext = chunk__33701.cljs$core$IIndexed$_nth$arity$2(null,i__33703);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33978 = seq__33698;
var G__33979 = chunk__33701;
var G__33980 = count__33702;
var G__33982 = (i__33703 + (1));
seq__33698 = G__33978;
chunk__33701 = G__33979;
count__33702 = G__33980;
i__33703 = G__33982;
continue;
} else {
var G__33984 = seq__33698;
var G__33985 = chunk__33701;
var G__33986 = count__33702;
var G__33987 = (i__33703 + (1));
seq__33698 = G__33984;
chunk__33701 = G__33985;
count__33702 = G__33986;
i__33703 = G__33987;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33698);
if(temp__5804__auto__){
var seq__33698__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33698__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33698__$1);
var G__33988 = cljs.core.chunk_rest(seq__33698__$1);
var G__33989 = c__5568__auto__;
var G__33990 = cljs.core.count(c__5568__auto__);
var G__33991 = (0);
seq__33698 = G__33988;
chunk__33701 = G__33989;
count__33702 = G__33990;
i__33703 = G__33991;
continue;
} else {
var ext = cljs.core.first(seq__33698__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33992 = cljs.core.next(seq__33698__$1);
var G__33993 = null;
var G__33994 = (0);
var G__33995 = (0);
seq__33698 = G__33992;
chunk__33701 = G__33993;
count__33702 = G__33994;
i__33703 = G__33995;
continue;
} else {
var G__33996 = cljs.core.next(seq__33698__$1);
var G__33997 = null;
var G__33998 = (0);
var G__33999 = (0);
seq__33698 = G__33996;
chunk__33701 = G__33997;
count__33702 = G__33998;
i__33703 = G__33999;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33687){
var G__33688 = cljs.core.first(seq33687);
var seq33687__$1 = cljs.core.next(seq33687);
var G__33689 = cljs.core.first(seq33687__$1);
var seq33687__$2 = cljs.core.next(seq33687__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33688,G__33689,seq33687__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33719,p__33720){
var map__33721 = p__33719;
var map__33721__$1 = cljs.core.__destructure_map(map__33721);
var runtime = map__33721__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33721__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33722 = p__33720;
var map__33722__$1 = cljs.core.__destructure_map(map__33722);
var msg = map__33722__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33724 = cljs.core.deref(state_ref);
var map__33724__$1 = cljs.core.__destructure_map(map__33724);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33724__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33724__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33725){
var map__33726 = p__33725;
var map__33726__$1 = cljs.core.__destructure_map(map__33726);
var runtime = map__33726__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33732,msg){
var map__33733 = p__33732;
var map__33733__$1 = cljs.core.__destructure_map(map__33733);
var runtime = map__33733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33745,key,p__33746){
var map__33748 = p__33745;
var map__33748__$1 = cljs.core.__destructure_map(map__33748);
var state = map__33748__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33748__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33749 = p__33746;
var map__33749__$1 = cljs.core.__destructure_map(map__33749);
var spec = map__33749__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33769,key,spec){
var map__33775 = p__33769;
var map__33775__$1 = cljs.core.__destructure_map(map__33775);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33782_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33782_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33783_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33783_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33784_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33784_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33785_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33785_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33786_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33786_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33807,key){
var map__33810 = p__33807;
var map__33810__$1 = cljs.core.__destructure_map(map__33810);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33837,msg){
var map__33838 = p__33837;
var map__33838__$1 = cljs.core.__destructure_map(map__33838);
var runtime = map__33838__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33838__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33866,p__33867){
var map__33869 = p__33866;
var map__33869__$1 = cljs.core.__destructure_map(map__33869);
var runtime = map__33869__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33869__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33870 = p__33867;
var map__33870__$1 = cljs.core.__destructure_map(map__33870);
var msg = map__33870__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33870__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33870__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33908 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33910 = null;
var count__33911 = (0);
var i__33912 = (0);
while(true){
if((i__33912 < count__33911)){
var map__33926 = chunk__33910.cljs$core$IIndexed$_nth$arity$2(null,i__33912);
var map__33926__$1 = cljs.core.__destructure_map(map__33926);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33926__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34062 = seq__33908;
var G__34063 = chunk__33910;
var G__34064 = count__33911;
var G__34065 = (i__33912 + (1));
seq__33908 = G__34062;
chunk__33910 = G__34063;
count__33911 = G__34064;
i__33912 = G__34065;
continue;
} else {
var G__34066 = seq__33908;
var G__34067 = chunk__33910;
var G__34068 = count__33911;
var G__34069 = (i__33912 + (1));
seq__33908 = G__34066;
chunk__33910 = G__34067;
count__33911 = G__34068;
i__33912 = G__34069;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33908);
if(temp__5804__auto__){
var seq__33908__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33908__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33908__$1);
var G__34071 = cljs.core.chunk_rest(seq__33908__$1);
var G__34072 = c__5568__auto__;
var G__34073 = cljs.core.count(c__5568__auto__);
var G__34074 = (0);
seq__33908 = G__34071;
chunk__33910 = G__34072;
count__33911 = G__34073;
i__33912 = G__34074;
continue;
} else {
var map__33941 = cljs.core.first(seq__33908__$1);
var map__33941__$1 = cljs.core.__destructure_map(map__33941);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33941__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34076 = cljs.core.next(seq__33908__$1);
var G__34077 = null;
var G__34078 = (0);
var G__34079 = (0);
seq__33908 = G__34076;
chunk__33910 = G__34077;
count__33911 = G__34078;
i__33912 = G__34079;
continue;
} else {
var G__34080 = cljs.core.next(seq__33908__$1);
var G__34081 = null;
var G__34082 = (0);
var G__34083 = (0);
seq__33908 = G__34080;
chunk__33910 = G__34081;
count__33911 = G__34082;
i__33912 = G__34083;
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
