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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32571,res){
var map__32572 = p__32571;
var map__32572__$1 = cljs.core.__destructure_map(map__32572);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32572__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32572__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32573 = res;
var G__32573__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32573,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32573);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32573__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32573__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32580 = arguments.length;
switch (G__32580) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32591,msg,handlers,timeout_after_ms){
var map__32595 = p__32591;
var map__32595__$1 = cljs.core.__destructure_map(map__32595);
var runtime = map__32595__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32595__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32878 = arguments.length;
var i__4819__auto___32879 = (0);
while(true){
if((i__4819__auto___32879 < len__4818__auto___32878)){
args__4824__auto__.push((arguments[i__4819__auto___32879]));

var G__32881 = (i__4819__auto___32879 + (1));
i__4819__auto___32879 = G__32881;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32606,ev,args){
var map__32608 = p__32606;
var map__32608__$1 = cljs.core.__destructure_map(map__32608);
var runtime = map__32608__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32608__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32609 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32612 = null;
var count__32613 = (0);
var i__32614 = (0);
while(true){
if((i__32614 < count__32613)){
var ext = chunk__32612.cljs$core$IIndexed$_nth$arity$2(null,i__32614);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32886 = seq__32609;
var G__32887 = chunk__32612;
var G__32888 = count__32613;
var G__32889 = (i__32614 + (1));
seq__32609 = G__32886;
chunk__32612 = G__32887;
count__32613 = G__32888;
i__32614 = G__32889;
continue;
} else {
var G__32890 = seq__32609;
var G__32891 = chunk__32612;
var G__32892 = count__32613;
var G__32893 = (i__32614 + (1));
seq__32609 = G__32890;
chunk__32612 = G__32891;
count__32613 = G__32892;
i__32614 = G__32893;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32609);
if(temp__5753__auto__){
var seq__32609__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32609__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32609__$1);
var G__32895 = cljs.core.chunk_rest(seq__32609__$1);
var G__32896 = c__4638__auto__;
var G__32897 = cljs.core.count(c__4638__auto__);
var G__32898 = (0);
seq__32609 = G__32895;
chunk__32612 = G__32896;
count__32613 = G__32897;
i__32614 = G__32898;
continue;
} else {
var ext = cljs.core.first(seq__32609__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32900 = cljs.core.next(seq__32609__$1);
var G__32901 = null;
var G__32902 = (0);
var G__32903 = (0);
seq__32609 = G__32900;
chunk__32612 = G__32901;
count__32613 = G__32902;
i__32614 = G__32903;
continue;
} else {
var G__32904 = cljs.core.next(seq__32609__$1);
var G__32905 = null;
var G__32906 = (0);
var G__32907 = (0);
seq__32609 = G__32904;
chunk__32612 = G__32905;
count__32613 = G__32906;
i__32614 = G__32907;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32599){
var G__32600 = cljs.core.first(seq32599);
var seq32599__$1 = cljs.core.next(seq32599);
var G__32601 = cljs.core.first(seq32599__$1);
var seq32599__$2 = cljs.core.next(seq32599__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32600,G__32601,seq32599__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32638,p__32639){
var map__32640 = p__32638;
var map__32640__$1 = cljs.core.__destructure_map(map__32640);
var runtime = map__32640__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32640__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32641 = p__32639;
var map__32641__$1 = cljs.core.__destructure_map(map__32641);
var msg = map__32641__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32641__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32642 = cljs.core.deref(state_ref);
var map__32642__$1 = cljs.core.__destructure_map(map__32642);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32648){
var map__32649 = p__32648;
var map__32649__$1 = cljs.core.__destructure_map(map__32649);
var runtime = map__32649__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32654,msg){
var map__32656 = p__32654;
var map__32656__$1 = cljs.core.__destructure_map(map__32656);
var runtime = map__32656__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32656__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32679,key,p__32680){
var map__32683 = p__32679;
var map__32683__$1 = cljs.core.__destructure_map(map__32683);
var state = map__32683__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32683__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32684 = p__32680;
var map__32684__$1 = cljs.core.__destructure_map(map__32684);
var spec = map__32684__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32684__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32685,key,spec){
var map__32687 = p__32685;
var map__32687__$1 = cljs.core.__destructure_map(map__32687);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32687__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32695_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32695_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32700_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32700_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32701_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32701_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32702_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32702_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32703_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32703_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32723,key){
var map__32724 = p__32723;
var map__32724__$1 = cljs.core.__destructure_map(map__32724);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32724__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32730,msg){
var map__32731 = p__32730;
var map__32731__$1 = cljs.core.__destructure_map(map__32731);
var runtime = map__32731__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32731__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32740,p__32741){
var map__32743 = p__32740;
var map__32743__$1 = cljs.core.__destructure_map(map__32743);
var runtime = map__32743__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32745 = p__32741;
var map__32745__$1 = cljs.core.__destructure_map(map__32745);
var msg = map__32745__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32745__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32745__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__32794 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32800 = null;
var count__32801 = (0);
var i__32802 = (0);
while(true){
if((i__32802 < count__32801)){
var map__32827 = chunk__32800.cljs$core$IIndexed$_nth$arity$2(null,i__32802);
var map__32827__$1 = cljs.core.__destructure_map(map__32827);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32827__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32935 = seq__32794;
var G__32936 = chunk__32800;
var G__32937 = count__32801;
var G__32938 = (i__32802 + (1));
seq__32794 = G__32935;
chunk__32800 = G__32936;
count__32801 = G__32937;
i__32802 = G__32938;
continue;
} else {
var G__32939 = seq__32794;
var G__32940 = chunk__32800;
var G__32941 = count__32801;
var G__32942 = (i__32802 + (1));
seq__32794 = G__32939;
chunk__32800 = G__32940;
count__32801 = G__32941;
i__32802 = G__32942;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32794);
if(temp__5753__auto__){
var seq__32794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32794__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32794__$1);
var G__32944 = cljs.core.chunk_rest(seq__32794__$1);
var G__32945 = c__4638__auto__;
var G__32946 = cljs.core.count(c__4638__auto__);
var G__32947 = (0);
seq__32794 = G__32944;
chunk__32800 = G__32945;
count__32801 = G__32946;
i__32802 = G__32947;
continue;
} else {
var map__32844 = cljs.core.first(seq__32794__$1);
var map__32844__$1 = cljs.core.__destructure_map(map__32844);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32949 = cljs.core.next(seq__32794__$1);
var G__32950 = null;
var G__32951 = (0);
var G__32952 = (0);
seq__32794 = G__32949;
chunk__32800 = G__32950;
count__32801 = G__32951;
i__32802 = G__32952;
continue;
} else {
var G__32953 = cljs.core.next(seq__32794__$1);
var G__32954 = null;
var G__32955 = (0);
var G__32956 = (0);
seq__32794 = G__32953;
chunk__32800 = G__32954;
count__32801 = G__32955;
i__32802 = G__32956;
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
