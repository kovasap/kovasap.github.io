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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32957,res){
var map__32958 = p__32957;
var map__32958__$1 = cljs.core.__destructure_map(map__32958);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32958__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32958__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32960 = res;
var G__32960__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32960,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32960);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32960__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32960__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32966 = arguments.length;
switch (G__32966) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32970,msg,handlers,timeout_after_ms){
var map__32971 = p__32970;
var map__32971__$1 = cljs.core.__destructure_map(map__32971);
var runtime = map__32971__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32971__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33283 = arguments.length;
var i__4865__auto___33284 = (0);
while(true){
if((i__4865__auto___33284 < len__4864__auto___33283)){
args__4870__auto__.push((arguments[i__4865__auto___33284]));

var G__33285 = (i__4865__auto___33284 + (1));
i__4865__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32980,ev,args){
var map__32982 = p__32980;
var map__32982__$1 = cljs.core.__destructure_map(map__32982);
var runtime = map__32982__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32982__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32983 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32986 = null;
var count__32987 = (0);
var i__32988 = (0);
while(true){
if((i__32988 < count__32987)){
var ext = chunk__32986.cljs$core$IIndexed$_nth$arity$2(null,i__32988);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33288 = seq__32983;
var G__33289 = chunk__32986;
var G__33290 = count__32987;
var G__33291 = (i__32988 + (1));
seq__32983 = G__33288;
chunk__32986 = G__33289;
count__32987 = G__33290;
i__32988 = G__33291;
continue;
} else {
var G__33292 = seq__32983;
var G__33293 = chunk__32986;
var G__33294 = count__32987;
var G__33295 = (i__32988 + (1));
seq__32983 = G__33292;
chunk__32986 = G__33293;
count__32987 = G__33294;
i__32988 = G__33295;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32983);
if(temp__5753__auto__){
var seq__32983__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32983__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32983__$1);
var G__33297 = cljs.core.chunk_rest(seq__32983__$1);
var G__33298 = c__4679__auto__;
var G__33299 = cljs.core.count(c__4679__auto__);
var G__33300 = (0);
seq__32983 = G__33297;
chunk__32986 = G__33298;
count__32987 = G__33299;
i__32988 = G__33300;
continue;
} else {
var ext = cljs.core.first(seq__32983__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33302 = cljs.core.next(seq__32983__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__32983 = G__33302;
chunk__32986 = G__33303;
count__32987 = G__33304;
i__32988 = G__33305;
continue;
} else {
var G__33306 = cljs.core.next(seq__32983__$1);
var G__33307 = null;
var G__33308 = (0);
var G__33309 = (0);
seq__32983 = G__33306;
chunk__32986 = G__33307;
count__32987 = G__33308;
i__32988 = G__33309;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32976){
var G__32977 = cljs.core.first(seq32976);
var seq32976__$1 = cljs.core.next(seq32976);
var G__32978 = cljs.core.first(seq32976__$1);
var seq32976__$2 = cljs.core.next(seq32976__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32977,G__32978,seq32976__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33007,p__33008){
var map__33013 = p__33007;
var map__33013__$1 = cljs.core.__destructure_map(map__33013);
var runtime = map__33013__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33013__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33015 = p__33008;
var map__33015__$1 = cljs.core.__destructure_map(map__33015);
var msg = map__33015__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33015__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33027 = cljs.core.deref(state_ref);
var map__33027__$1 = cljs.core.__destructure_map(map__33027);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33027__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33027__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33054){
var map__33056 = p__33054;
var map__33056__$1 = cljs.core.__destructure_map(map__33056);
var runtime = map__33056__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33056__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33058,msg){
var map__33059 = p__33058;
var map__33059__$1 = cljs.core.__destructure_map(map__33059);
var runtime = map__33059__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33059__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33069,key,p__33070){
var map__33071 = p__33069;
var map__33071__$1 = cljs.core.__destructure_map(map__33071);
var state = map__33071__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33071__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33072 = p__33070;
var map__33072__$1 = cljs.core.__destructure_map(map__33072);
var spec = map__33072__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33072__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33091,key,spec){
var map__33099 = p__33091;
var map__33099__$1 = cljs.core.__destructure_map(map__33099);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33099__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33114_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33114_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33115_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33115_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33116_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33116_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33117_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33117_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33118_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33118_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33145,key){
var map__33147 = p__33145;
var map__33147__$1 = cljs.core.__destructure_map(map__33147);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33147__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33173,msg){
var map__33174 = p__33173;
var map__33174__$1 = cljs.core.__destructure_map(map__33174);
var runtime = map__33174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33185,p__33186){
var map__33191 = p__33185;
var map__33191__$1 = cljs.core.__destructure_map(map__33191);
var runtime = map__33191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33193 = p__33186;
var map__33193__$1 = cljs.core.__destructure_map(map__33193);
var msg = map__33193__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33193__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33193__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33205 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33207 = null;
var count__33208 = (0);
var i__33209 = (0);
while(true){
if((i__33209 < count__33208)){
var map__33226 = chunk__33207.cljs$core$IIndexed$_nth$arity$2(null,i__33209);
var map__33226__$1 = cljs.core.__destructure_map(map__33226);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33336 = seq__33205;
var G__33337 = chunk__33207;
var G__33338 = count__33208;
var G__33339 = (i__33209 + (1));
seq__33205 = G__33336;
chunk__33207 = G__33337;
count__33208 = G__33338;
i__33209 = G__33339;
continue;
} else {
var G__33340 = seq__33205;
var G__33341 = chunk__33207;
var G__33342 = count__33208;
var G__33343 = (i__33209 + (1));
seq__33205 = G__33340;
chunk__33207 = G__33341;
count__33208 = G__33342;
i__33209 = G__33343;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33205);
if(temp__5753__auto__){
var seq__33205__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33205__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33205__$1);
var G__33345 = cljs.core.chunk_rest(seq__33205__$1);
var G__33346 = c__4679__auto__;
var G__33347 = cljs.core.count(c__4679__auto__);
var G__33348 = (0);
seq__33205 = G__33345;
chunk__33207 = G__33346;
count__33208 = G__33347;
i__33209 = G__33348;
continue;
} else {
var map__33235 = cljs.core.first(seq__33205__$1);
var map__33235__$1 = cljs.core.__destructure_map(map__33235);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33235__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33351 = cljs.core.next(seq__33205__$1);
var G__33352 = null;
var G__33353 = (0);
var G__33354 = (0);
seq__33205 = G__33351;
chunk__33207 = G__33352;
count__33208 = G__33353;
i__33209 = G__33354;
continue;
} else {
var G__33355 = cljs.core.next(seq__33205__$1);
var G__33356 = null;
var G__33357 = (0);
var G__33358 = (0);
seq__33205 = G__33355;
chunk__33207 = G__33356;
count__33208 = G__33357;
i__33209 = G__33358;
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
