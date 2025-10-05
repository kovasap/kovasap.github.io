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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33616,res){
var map__33617 = p__33616;
var map__33617__$1 = cljs.core.__destructure_map(map__33617);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33623 = res;
var G__33623__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33623,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33623);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33623__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33623__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33631 = arguments.length;
switch (G__33631) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33634,msg,handlers,timeout_after_ms){
var map__33635 = p__33634;
var map__33635__$1 = cljs.core.__destructure_map(map__33635);
var runtime = map__33635__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33635__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33819 = arguments.length;
var i__5770__auto___33824 = (0);
while(true){
if((i__5770__auto___33824 < len__5769__auto___33819)){
args__5775__auto__.push((arguments[i__5770__auto___33824]));

var G__33826 = (i__5770__auto___33824 + (1));
i__5770__auto___33824 = G__33826;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33645,ev,args){
var map__33646 = p__33645;
var map__33646__$1 = cljs.core.__destructure_map(map__33646);
var runtime = map__33646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33647 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33650 = null;
var count__33651 = (0);
var i__33652 = (0);
while(true){
if((i__33652 < count__33651)){
var ext = chunk__33650.cljs$core$IIndexed$_nth$arity$2(null,i__33652);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33840 = seq__33647;
var G__33841 = chunk__33650;
var G__33842 = count__33651;
var G__33843 = (i__33652 + (1));
seq__33647 = G__33840;
chunk__33650 = G__33841;
count__33651 = G__33842;
i__33652 = G__33843;
continue;
} else {
var G__33844 = seq__33647;
var G__33845 = chunk__33650;
var G__33846 = count__33651;
var G__33847 = (i__33652 + (1));
seq__33647 = G__33844;
chunk__33650 = G__33845;
count__33651 = G__33846;
i__33652 = G__33847;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33647);
if(temp__5823__auto__){
var seq__33647__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33647__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33647__$1);
var G__33849 = cljs.core.chunk_rest(seq__33647__$1);
var G__33850 = c__5568__auto__;
var G__33851 = cljs.core.count(c__5568__auto__);
var G__33852 = (0);
seq__33647 = G__33849;
chunk__33650 = G__33850;
count__33651 = G__33851;
i__33652 = G__33852;
continue;
} else {
var ext = cljs.core.first(seq__33647__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33859 = cljs.core.next(seq__33647__$1);
var G__33862 = null;
var G__33864 = (0);
var G__33865 = (0);
seq__33647 = G__33859;
chunk__33650 = G__33862;
count__33651 = G__33864;
i__33652 = G__33865;
continue;
} else {
var G__33866 = cljs.core.next(seq__33647__$1);
var G__33867 = null;
var G__33868 = (0);
var G__33869 = (0);
seq__33647 = G__33866;
chunk__33650 = G__33867;
count__33651 = G__33868;
i__33652 = G__33869;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33639){
var G__33640 = cljs.core.first(seq33639);
var seq33639__$1 = cljs.core.next(seq33639);
var G__33641 = cljs.core.first(seq33639__$1);
var seq33639__$2 = cljs.core.next(seq33639__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33640,G__33641,seq33639__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33662,p__33663){
var map__33664 = p__33662;
var map__33664__$1 = cljs.core.__destructure_map(map__33664);
var runtime = map__33664__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33664__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33665 = p__33663;
var map__33665__$1 = cljs.core.__destructure_map(map__33665);
var msg = map__33665__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33666 = cljs.core.deref(state_ref);
var map__33666__$1 = cljs.core.__destructure_map(map__33666);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33668){
var map__33669 = p__33668;
var map__33669__$1 = cljs.core.__destructure_map(map__33669);
var runtime = map__33669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33671,msg){
var map__33672 = p__33671;
var map__33672__$1 = cljs.core.__destructure_map(map__33672);
var runtime = map__33672__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33672__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33680,key,p__33681){
var map__33685 = p__33680;
var map__33685__$1 = cljs.core.__destructure_map(map__33685);
var state = map__33685__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33685__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33686 = p__33681;
var map__33686__$1 = cljs.core.__destructure_map(map__33686);
var spec = map__33686__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33686__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33701,key,spec){
var map__33702 = p__33701;
var map__33702__$1 = cljs.core.__destructure_map(map__33702);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33702__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33705_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33705_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33707_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33707_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33708_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33708_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33709_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33709_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33710_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33710_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33714,key){
var map__33715 = p__33714;
var map__33715__$1 = cljs.core.__destructure_map(map__33715);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33715__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33718,msg){
var map__33720 = p__33718;
var map__33720__$1 = cljs.core.__destructure_map(map__33720);
var runtime = map__33720__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33725,p__33726){
var map__33727 = p__33725;
var map__33727__$1 = cljs.core.__destructure_map(map__33727);
var runtime = map__33727__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33728 = p__33726;
var map__33728__$1 = cljs.core.__destructure_map(map__33728);
var msg = map__33728__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33728__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33728__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33758 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33760 = null;
var count__33761 = (0);
var i__33762 = (0);
while(true){
if((i__33762 < count__33761)){
var map__33777 = chunk__33760.cljs$core$IIndexed$_nth$arity$2(null,i__33762);
var map__33777__$1 = cljs.core.__destructure_map(map__33777);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33777__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33928 = seq__33758;
var G__33929 = chunk__33760;
var G__33930 = count__33761;
var G__33931 = (i__33762 + (1));
seq__33758 = G__33928;
chunk__33760 = G__33929;
count__33761 = G__33930;
i__33762 = G__33931;
continue;
} else {
var G__33932 = seq__33758;
var G__33933 = chunk__33760;
var G__33934 = count__33761;
var G__33935 = (i__33762 + (1));
seq__33758 = G__33932;
chunk__33760 = G__33933;
count__33761 = G__33934;
i__33762 = G__33935;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33758);
if(temp__5823__auto__){
var seq__33758__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33758__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33758__$1);
var G__33937 = cljs.core.chunk_rest(seq__33758__$1);
var G__33938 = c__5568__auto__;
var G__33939 = cljs.core.count(c__5568__auto__);
var G__33940 = (0);
seq__33758 = G__33937;
chunk__33760 = G__33938;
count__33761 = G__33939;
i__33762 = G__33940;
continue;
} else {
var map__33780 = cljs.core.first(seq__33758__$1);
var map__33780__$1 = cljs.core.__destructure_map(map__33780);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33780__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33942 = cljs.core.next(seq__33758__$1);
var G__33943 = null;
var G__33944 = (0);
var G__33945 = (0);
seq__33758 = G__33942;
chunk__33760 = G__33943;
count__33761 = G__33944;
i__33762 = G__33945;
continue;
} else {
var G__33947 = cljs.core.next(seq__33758__$1);
var G__33948 = null;
var G__33949 = (0);
var G__33950 = (0);
seq__33758 = G__33947;
chunk__33760 = G__33948;
count__33761 = G__33949;
i__33762 = G__33950;
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
