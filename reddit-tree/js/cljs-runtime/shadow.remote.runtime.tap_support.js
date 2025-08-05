goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36230,p__36231){
var map__36232 = p__36230;
var map__36232__$1 = cljs.core.__destructure_map(map__36232);
var svc = map__36232__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36233 = p__36231;
var map__36233__$1 = cljs.core.__destructure_map(map__36233);
var msg = map__36233__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36233__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36256,p__36258){
var map__36260 = p__36256;
var map__36260__$1 = cljs.core.__destructure_map(map__36260);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36260__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36261 = p__36258;
var map__36261__$1 = cljs.core.__destructure_map(map__36261);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36261__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36264,p__36265){
var map__36266 = p__36264;
var map__36266__$1 = cljs.core.__destructure_map(map__36266);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36268 = p__36265;
var map__36268__$1 = cljs.core.__destructure_map(map__36268);
var msg = map__36268__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36268__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36275,tid){
var map__36276 = p__36275;
var map__36276__$1 = cljs.core.__destructure_map(map__36276);
var svc = map__36276__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36286 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36287 = null;
var count__36288 = (0);
var i__36289 = (0);
while(true){
if((i__36289 < count__36288)){
var vec__36305 = chunk__36287.cljs$core$IIndexed$_nth$arity$2(null,i__36289);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36325 = seq__36286;
var G__36326 = chunk__36287;
var G__36327 = count__36288;
var G__36328 = (i__36289 + (1));
seq__36286 = G__36325;
chunk__36287 = G__36326;
count__36288 = G__36327;
i__36289 = G__36328;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36286);
if(temp__5753__auto__){
var seq__36286__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36286__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36286__$1);
var G__36329 = cljs.core.chunk_rest(seq__36286__$1);
var G__36330 = c__4638__auto__;
var G__36331 = cljs.core.count(c__4638__auto__);
var G__36332 = (0);
seq__36286 = G__36329;
chunk__36287 = G__36330;
count__36288 = G__36331;
i__36289 = G__36332;
continue;
} else {
var vec__36308 = cljs.core.first(seq__36286__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36333 = cljs.core.next(seq__36286__$1);
var G__36334 = null;
var G__36335 = (0);
var G__36336 = (0);
seq__36286 = G__36333;
chunk__36287 = G__36334;
count__36288 = G__36335;
i__36289 = G__36336;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36277_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36277_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36278_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36278_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36281_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36281_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36282_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36282_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36316){
var map__36317 = p__36316;
var map__36317__$1 = cljs.core.__destructure_map(map__36317);
var svc = map__36317__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36317__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36317__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
