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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__41869,res){
var map__41870 = p__41869;
var map__41870__$1 = cljs.core.__destructure_map(map__41870);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__41871 = res;
var G__41871__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41871,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__41871);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41871__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__41871__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__41873 = arguments.length;
switch (G__41873) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__41876,msg,handlers,timeout_after_ms){
var map__41877 = p__41876;
var map__41877__$1 = cljs.core.__destructure_map(map__41877);
var runtime = map__41877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42060 = arguments.length;
var i__4865__auto___42061 = (0);
while(true){
if((i__4865__auto___42061 < len__4864__auto___42060)){
args__4870__auto__.push((arguments[i__4865__auto___42061]));

var G__42062 = (i__4865__auto___42061 + (1));
i__4865__auto___42061 = G__42062;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__41889,ev,args){
var map__41890 = p__41889;
var map__41890__$1 = cljs.core.__destructure_map(map__41890);
var runtime = map__41890__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41890__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__41892 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__41895 = null;
var count__41896 = (0);
var i__41897 = (0);
while(true){
if((i__41897 < count__41896)){
var ext = chunk__41895.cljs$core$IIndexed$_nth$arity$2(null,i__41897);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42067 = seq__41892;
var G__42068 = chunk__41895;
var G__42069 = count__41896;
var G__42070 = (i__41897 + (1));
seq__41892 = G__42067;
chunk__41895 = G__42068;
count__41896 = G__42069;
i__41897 = G__42070;
continue;
} else {
var G__42071 = seq__41892;
var G__42072 = chunk__41895;
var G__42073 = count__41896;
var G__42074 = (i__41897 + (1));
seq__41892 = G__42071;
chunk__41895 = G__42072;
count__41896 = G__42073;
i__41897 = G__42074;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41892);
if(temp__5753__auto__){
var seq__41892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41892__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41892__$1);
var G__42077 = cljs.core.chunk_rest(seq__41892__$1);
var G__42078 = c__4679__auto__;
var G__42079 = cljs.core.count(c__4679__auto__);
var G__42080 = (0);
seq__41892 = G__42077;
chunk__41895 = G__42078;
count__41896 = G__42079;
i__41897 = G__42080;
continue;
} else {
var ext = cljs.core.first(seq__41892__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42081 = cljs.core.next(seq__41892__$1);
var G__42082 = null;
var G__42083 = (0);
var G__42084 = (0);
seq__41892 = G__42081;
chunk__41895 = G__42082;
count__41896 = G__42083;
i__41897 = G__42084;
continue;
} else {
var G__42085 = cljs.core.next(seq__41892__$1);
var G__42086 = null;
var G__42087 = (0);
var G__42088 = (0);
seq__41892 = G__42085;
chunk__41895 = G__42086;
count__41896 = G__42087;
i__41897 = G__42088;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq41883){
var G__41884 = cljs.core.first(seq41883);
var seq41883__$1 = cljs.core.next(seq41883);
var G__41885 = cljs.core.first(seq41883__$1);
var seq41883__$2 = cljs.core.next(seq41883__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41884,G__41885,seq41883__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__41919,p__41920){
var map__41921 = p__41919;
var map__41921__$1 = cljs.core.__destructure_map(map__41921);
var runtime = map__41921__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__41922 = p__41920;
var map__41922__$1 = cljs.core.__destructure_map(map__41922);
var msg = map__41922__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41922__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__41924 = cljs.core.deref(state_ref);
var map__41924__$1 = cljs.core.__destructure_map(map__41924);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41924__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41924__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__41932){
var map__41933 = p__41932;
var map__41933__$1 = cljs.core.__destructure_map(map__41933);
var runtime = map__41933__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41933__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__41942,msg){
var map__41944 = p__41942;
var map__41944__$1 = cljs.core.__destructure_map(map__41944);
var runtime = map__41944__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__41961,key,p__41962){
var map__41964 = p__41961;
var map__41964__$1 = cljs.core.__destructure_map(map__41964);
var state = map__41964__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__41965 = p__41962;
var map__41965__$1 = cljs.core.__destructure_map(map__41965);
var spec = map__41965__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__41968,key,spec){
var map__41969 = p__41968;
var map__41969__$1 = cljs.core.__destructure_map(map__41969);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41969__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__41970_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__41970_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__41971_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__41971_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__41973_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__41973_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__41974_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__41974_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__41975_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__41975_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__41982,key){
var map__41983 = p__41982;
var map__41983__$1 = cljs.core.__destructure_map(map__41983);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41983__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__41985,msg){
var map__41986 = p__41985;
var map__41986__$1 = cljs.core.__destructure_map(map__41986);
var runtime = map__41986__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41986__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__41995,p__41996){
var map__41997 = p__41995;
var map__41997__$1 = cljs.core.__destructure_map(map__41997);
var runtime = map__41997__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41997__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__41998 = p__41996;
var map__41998__$1 = cljs.core.__destructure_map(map__41998);
var msg = map__41998__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41998__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41998__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__42006 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42008 = null;
var count__42009 = (0);
var i__42010 = (0);
while(true){
if((i__42010 < count__42009)){
var map__42020 = chunk__42008.cljs$core$IIndexed$_nth$arity$2(null,i__42010);
var map__42020__$1 = cljs.core.__destructure_map(map__42020);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42020__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42196 = seq__42006;
var G__42197 = chunk__42008;
var G__42198 = count__42009;
var G__42199 = (i__42010 + (1));
seq__42006 = G__42196;
chunk__42008 = G__42197;
count__42009 = G__42198;
i__42010 = G__42199;
continue;
} else {
var G__42200 = seq__42006;
var G__42201 = chunk__42008;
var G__42202 = count__42009;
var G__42203 = (i__42010 + (1));
seq__42006 = G__42200;
chunk__42008 = G__42201;
count__42009 = G__42202;
i__42010 = G__42203;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42006);
if(temp__5753__auto__){
var seq__42006__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42006__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42006__$1);
var G__42205 = cljs.core.chunk_rest(seq__42006__$1);
var G__42206 = c__4679__auto__;
var G__42207 = cljs.core.count(c__4679__auto__);
var G__42208 = (0);
seq__42006 = G__42205;
chunk__42008 = G__42206;
count__42009 = G__42207;
i__42010 = G__42208;
continue;
} else {
var map__42027 = cljs.core.first(seq__42006__$1);
var map__42027__$1 = cljs.core.__destructure_map(map__42027);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42027__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42209 = cljs.core.next(seq__42006__$1);
var G__42210 = null;
var G__42211 = (0);
var G__42212 = (0);
seq__42006 = G__42209;
chunk__42008 = G__42210;
count__42009 = G__42211;
i__42010 = G__42212;
continue;
} else {
var G__42213 = cljs.core.next(seq__42006__$1);
var G__42214 = null;
var G__42215 = (0);
var G__42216 = (0);
seq__42006 = G__42213;
chunk__42008 = G__42214;
count__42009 = G__42215;
i__42010 = G__42216;
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
