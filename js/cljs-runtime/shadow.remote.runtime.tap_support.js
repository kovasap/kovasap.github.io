goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36408,p__36409){
var map__36410 = p__36408;
var map__36410__$1 = cljs.core.__destructure_map(map__36410);
var svc = map__36410__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36411 = p__36409;
var map__36411__$1 = cljs.core.__destructure_map(map__36411);
var msg = map__36411__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36411__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36416,p__36417){
var map__36418 = p__36416;
var map__36418__$1 = cljs.core.__destructure_map(map__36418);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36419 = p__36417;
var map__36419__$1 = cljs.core.__destructure_map(map__36419);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36419__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36420,p__36421){
var map__36422 = p__36420;
var map__36422__$1 = cljs.core.__destructure_map(map__36422);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36423 = p__36421;
var map__36423__$1 = cljs.core.__destructure_map(map__36423);
var msg = map__36423__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36423__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36426,tid){
var map__36427 = p__36426;
var map__36427__$1 = cljs.core.__destructure_map(map__36427);
var svc = map__36427__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36427__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36440 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36441 = null;
var count__36442 = (0);
var i__36443 = (0);
while(true){
if((i__36443 < count__36442)){
var vec__36452 = chunk__36441.cljs$core$IIndexed$_nth$arity$2(null,i__36443);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36452,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36452,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36473 = seq__36440;
var G__36474 = chunk__36441;
var G__36475 = count__36442;
var G__36476 = (i__36443 + (1));
seq__36440 = G__36473;
chunk__36441 = G__36474;
count__36442 = G__36475;
i__36443 = G__36476;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36440);
if(temp__5753__auto__){
var seq__36440__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36440__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36440__$1);
var G__36478 = cljs.core.chunk_rest(seq__36440__$1);
var G__36479 = c__4638__auto__;
var G__36480 = cljs.core.count(c__4638__auto__);
var G__36481 = (0);
seq__36440 = G__36478;
chunk__36441 = G__36479;
count__36442 = G__36480;
i__36443 = G__36481;
continue;
} else {
var vec__36458 = cljs.core.first(seq__36440__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36482 = cljs.core.next(seq__36440__$1);
var G__36483 = null;
var G__36484 = (0);
var G__36485 = (0);
seq__36440 = G__36482;
chunk__36441 = G__36483;
count__36442 = G__36484;
i__36443 = G__36485;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36428_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36428_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36429_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36429_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36430_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36430_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36431_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36431_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36464){
var map__36465 = p__36464;
var map__36465__$1 = cljs.core.__destructure_map(map__36465);
var svc = map__36465__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
