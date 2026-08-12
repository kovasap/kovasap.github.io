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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32648,res){
var map__32649 = p__32648;
var map__32649__$1 = cljs.core.__destructure_map(map__32649);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32662 = res;
var G__32662__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32662,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32662);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32662__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32662__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32688 = arguments.length;
switch (G__32688) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32718,msg,handlers,timeout_after_ms){
var map__32723 = p__32718;
var map__32723__$1 = cljs.core.__destructure_map(map__32723);
var runtime = map__32723__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33036 = arguments.length;
var i__4819__auto___33037 = (0);
while(true){
if((i__4819__auto___33037 < len__4818__auto___33036)){
args__4824__auto__.push((arguments[i__4819__auto___33037]));

var G__33039 = (i__4819__auto___33037 + (1));
i__4819__auto___33037 = G__33039;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32760,ev,args){
var map__32761 = p__32760;
var map__32761__$1 = cljs.core.__destructure_map(map__32761);
var runtime = map__32761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32763 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32766 = null;
var count__32767 = (0);
var i__32768 = (0);
while(true){
if((i__32768 < count__32767)){
var ext = chunk__32766.cljs$core$IIndexed$_nth$arity$2(null,i__32768);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33044 = seq__32763;
var G__33045 = chunk__32766;
var G__33046 = count__32767;
var G__33047 = (i__32768 + (1));
seq__32763 = G__33044;
chunk__32766 = G__33045;
count__32767 = G__33046;
i__32768 = G__33047;
continue;
} else {
var G__33048 = seq__32763;
var G__33049 = chunk__32766;
var G__33050 = count__32767;
var G__33051 = (i__32768 + (1));
seq__32763 = G__33048;
chunk__32766 = G__33049;
count__32767 = G__33050;
i__32768 = G__33051;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32763);
if(temp__5753__auto__){
var seq__32763__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32763__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32763__$1);
var G__33056 = cljs.core.chunk_rest(seq__32763__$1);
var G__33057 = c__4638__auto__;
var G__33058 = cljs.core.count(c__4638__auto__);
var G__33059 = (0);
seq__32763 = G__33056;
chunk__32766 = G__33057;
count__32767 = G__33058;
i__32768 = G__33059;
continue;
} else {
var ext = cljs.core.first(seq__32763__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33063 = cljs.core.next(seq__32763__$1);
var G__33064 = null;
var G__33065 = (0);
var G__33066 = (0);
seq__32763 = G__33063;
chunk__32766 = G__33064;
count__32767 = G__33065;
i__32768 = G__33066;
continue;
} else {
var G__33067 = cljs.core.next(seq__32763__$1);
var G__33068 = null;
var G__33069 = (0);
var G__33070 = (0);
seq__32763 = G__33067;
chunk__32766 = G__33068;
count__32767 = G__33069;
i__32768 = G__33070;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32750){
var G__32751 = cljs.core.first(seq32750);
var seq32750__$1 = cljs.core.next(seq32750);
var G__32752 = cljs.core.first(seq32750__$1);
var seq32750__$2 = cljs.core.next(seq32750__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32751,G__32752,seq32750__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32801,p__32802){
var map__32803 = p__32801;
var map__32803__$1 = cljs.core.__destructure_map(map__32803);
var runtime = map__32803__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32804 = p__32802;
var map__32804__$1 = cljs.core.__destructure_map(map__32804);
var msg = map__32804__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32804__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32807 = cljs.core.deref(state_ref);
var map__32807__$1 = cljs.core.__destructure_map(map__32807);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32807__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32807__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32816){
var map__32817 = p__32816;
var map__32817__$1 = cljs.core.__destructure_map(map__32817);
var runtime = map__32817__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32817__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32821,msg){
var map__32822 = p__32821;
var map__32822__$1 = cljs.core.__destructure_map(map__32822);
var runtime = map__32822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32830,key,p__32831){
var map__32832 = p__32830;
var map__32832__$1 = cljs.core.__destructure_map(map__32832);
var state = map__32832__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32832__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32833 = p__32831;
var map__32833__$1 = cljs.core.__destructure_map(map__32833);
var spec = map__32833__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32838,key,spec){
var map__32839 = p__32838;
var map__32839__$1 = cljs.core.__destructure_map(map__32839);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32839__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32840_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32840_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32841_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32841_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32842_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32842_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32843_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32843_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32844_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32844_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32850,key){
var map__32855 = p__32850;
var map__32855__$1 = cljs.core.__destructure_map(map__32855);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32859,msg){
var map__32860 = p__32859;
var map__32860__$1 = cljs.core.__destructure_map(map__32860);
var runtime = map__32860__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32882,p__32883){
var map__32885 = p__32882;
var map__32885__$1 = cljs.core.__destructure_map(map__32885);
var runtime = map__32885__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32885__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32886 = p__32883;
var map__32886__$1 = cljs.core.__destructure_map(map__32886);
var msg = map__32886__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32886__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32886__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__32918 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32921 = null;
var count__32922 = (0);
var i__32923 = (0);
while(true){
if((i__32923 < count__32922)){
var map__32981 = chunk__32921.cljs$core$IIndexed$_nth$arity$2(null,i__32923);
var map__32981__$1 = cljs.core.__destructure_map(map__32981);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32981__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33099 = seq__32918;
var G__33100 = chunk__32921;
var G__33101 = count__32922;
var G__33102 = (i__32923 + (1));
seq__32918 = G__33099;
chunk__32921 = G__33100;
count__32922 = G__33101;
i__32923 = G__33102;
continue;
} else {
var G__33103 = seq__32918;
var G__33104 = chunk__32921;
var G__33105 = count__32922;
var G__33106 = (i__32923 + (1));
seq__32918 = G__33103;
chunk__32921 = G__33104;
count__32922 = G__33105;
i__32923 = G__33106;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32918);
if(temp__5753__auto__){
var seq__32918__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32918__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32918__$1);
var G__33107 = cljs.core.chunk_rest(seq__32918__$1);
var G__33108 = c__4638__auto__;
var G__33109 = cljs.core.count(c__4638__auto__);
var G__33110 = (0);
seq__32918 = G__33107;
chunk__32921 = G__33108;
count__32922 = G__33109;
i__32923 = G__33110;
continue;
} else {
var map__32997 = cljs.core.first(seq__32918__$1);
var map__32997__$1 = cljs.core.__destructure_map(map__32997);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32997__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33112 = cljs.core.next(seq__32918__$1);
var G__33113 = null;
var G__33114 = (0);
var G__33115 = (0);
seq__32918 = G__33112;
chunk__32921 = G__33113;
count__32922 = G__33114;
i__32923 = G__33115;
continue;
} else {
var G__33116 = cljs.core.next(seq__32918__$1);
var G__33117 = null;
var G__33118 = (0);
var G__33119 = (0);
seq__32918 = G__33116;
chunk__32921 = G__33117;
count__32922 = G__33118;
i__32923 = G__33119;
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
