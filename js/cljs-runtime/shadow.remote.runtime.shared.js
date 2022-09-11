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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33685,res){
var map__33686 = p__33685;
var map__33686__$1 = cljs.core.__destructure_map(map__33686);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33686__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33686__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33687 = res;
var G__33687__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33687,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33687);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33687__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33687__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33691 = arguments.length;
switch (G__33691) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33696,msg,handlers,timeout_after_ms){
var map__33698 = p__33696;
var map__33698__$1 = cljs.core.__destructure_map(map__33698);
var runtime = map__33698__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33698__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34032 = arguments.length;
var i__5770__auto___34033 = (0);
while(true){
if((i__5770__auto___34033 < len__5769__auto___34032)){
args__5775__auto__.push((arguments[i__5770__auto___34033]));

var G__34034 = (i__5770__auto___34033 + (1));
i__5770__auto___34033 = G__34034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33708,ev,args){
var map__33709 = p__33708;
var map__33709__$1 = cljs.core.__destructure_map(map__33709);
var runtime = map__33709__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33709__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33711 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33714 = null;
var count__33715 = (0);
var i__33716 = (0);
while(true){
if((i__33716 < count__33715)){
var ext = chunk__33714.cljs$core$IIndexed$_nth$arity$2(null,i__33716);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34036 = seq__33711;
var G__34037 = chunk__33714;
var G__34038 = count__33715;
var G__34039 = (i__33716 + (1));
seq__33711 = G__34036;
chunk__33714 = G__34037;
count__33715 = G__34038;
i__33716 = G__34039;
continue;
} else {
var G__34040 = seq__33711;
var G__34041 = chunk__33714;
var G__34042 = count__33715;
var G__34043 = (i__33716 + (1));
seq__33711 = G__34040;
chunk__33714 = G__34041;
count__33715 = G__34042;
i__33716 = G__34043;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33711);
if(temp__5804__auto__){
var seq__33711__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33711__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33711__$1);
var G__34046 = cljs.core.chunk_rest(seq__33711__$1);
var G__34047 = c__5568__auto__;
var G__34048 = cljs.core.count(c__5568__auto__);
var G__34049 = (0);
seq__33711 = G__34046;
chunk__33714 = G__34047;
count__33715 = G__34048;
i__33716 = G__34049;
continue;
} else {
var ext = cljs.core.first(seq__33711__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34051 = cljs.core.next(seq__33711__$1);
var G__34052 = null;
var G__34053 = (0);
var G__34054 = (0);
seq__33711 = G__34051;
chunk__33714 = G__34052;
count__33715 = G__34053;
i__33716 = G__34054;
continue;
} else {
var G__34055 = cljs.core.next(seq__33711__$1);
var G__34056 = null;
var G__34057 = (0);
var G__34058 = (0);
seq__33711 = G__34055;
chunk__33714 = G__34056;
count__33715 = G__34057;
i__33716 = G__34058;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33702){
var G__33703 = cljs.core.first(seq33702);
var seq33702__$1 = cljs.core.next(seq33702);
var G__33704 = cljs.core.first(seq33702__$1);
var seq33702__$2 = cljs.core.next(seq33702__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33703,G__33704,seq33702__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33742,p__33743){
var map__33745 = p__33742;
var map__33745__$1 = cljs.core.__destructure_map(map__33745);
var runtime = map__33745__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33745__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33746 = p__33743;
var map__33746__$1 = cljs.core.__destructure_map(map__33746);
var msg = map__33746__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33760 = cljs.core.deref(state_ref);
var map__33760__$1 = cljs.core.__destructure_map(map__33760);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33760__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33760__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33785){
var map__33786 = p__33785;
var map__33786__$1 = cljs.core.__destructure_map(map__33786);
var runtime = map__33786__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33786__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33791,msg){
var map__33793 = p__33791;
var map__33793__$1 = cljs.core.__destructure_map(map__33793);
var runtime = map__33793__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33818,key,p__33819){
var map__33820 = p__33818;
var map__33820__$1 = cljs.core.__destructure_map(map__33820);
var state = map__33820__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33821 = p__33819;
var map__33821__$1 = cljs.core.__destructure_map(map__33821);
var spec = map__33821__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33821__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33847,key,spec){
var map__33848 = p__33847;
var map__33848__$1 = cljs.core.__destructure_map(map__33848);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33850_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33850_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33851_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33851_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33852_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33852_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33853_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33853_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33854_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33854_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33919,key){
var map__33928 = p__33919;
var map__33928__$1 = cljs.core.__destructure_map(map__33928);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33928__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33933,msg){
var map__33934 = p__33933;
var map__33934__$1 = cljs.core.__destructure_map(map__33934);
var runtime = map__33934__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33942,p__33943){
var map__33944 = p__33942;
var map__33944__$1 = cljs.core.__destructure_map(map__33944);
var runtime = map__33944__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33945 = p__33943;
var map__33945__$1 = cljs.core.__destructure_map(map__33945);
var msg = map__33945__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33945__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33945__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33963 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33965 = null;
var count__33966 = (0);
var i__33967 = (0);
while(true){
if((i__33967 < count__33966)){
var map__34016 = chunk__33965.cljs$core$IIndexed$_nth$arity$2(null,i__33967);
var map__34016__$1 = cljs.core.__destructure_map(map__34016);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34016__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34079 = seq__33963;
var G__34080 = chunk__33965;
var G__34081 = count__33966;
var G__34082 = (i__33967 + (1));
seq__33963 = G__34079;
chunk__33965 = G__34080;
count__33966 = G__34081;
i__33967 = G__34082;
continue;
} else {
var G__34083 = seq__33963;
var G__34084 = chunk__33965;
var G__34085 = count__33966;
var G__34086 = (i__33967 + (1));
seq__33963 = G__34083;
chunk__33965 = G__34084;
count__33966 = G__34085;
i__33967 = G__34086;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33963);
if(temp__5804__auto__){
var seq__33963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33963__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33963__$1);
var G__34087 = cljs.core.chunk_rest(seq__33963__$1);
var G__34088 = c__5568__auto__;
var G__34089 = cljs.core.count(c__5568__auto__);
var G__34090 = (0);
seq__33963 = G__34087;
chunk__33965 = G__34088;
count__33966 = G__34089;
i__33967 = G__34090;
continue;
} else {
var map__34019 = cljs.core.first(seq__33963__$1);
var map__34019__$1 = cljs.core.__destructure_map(map__34019);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34019__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34091 = cljs.core.next(seq__33963__$1);
var G__34092 = null;
var G__34093 = (0);
var G__34094 = (0);
seq__33963 = G__34091;
chunk__33965 = G__34092;
count__33966 = G__34093;
i__33967 = G__34094;
continue;
} else {
var G__34095 = cljs.core.next(seq__33963__$1);
var G__34096 = null;
var G__34097 = (0);
var G__34098 = (0);
seq__33963 = G__34095;
chunk__33965 = G__34096;
count__33966 = G__34097;
i__33967 = G__34098;
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
