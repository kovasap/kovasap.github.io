goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37042,p__37043){
var map__37044 = p__37042;
var map__37044__$1 = cljs.core.__destructure_map(map__37044);
var svc = map__37044__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37044__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37044__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37044__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37045 = p__37043;
var map__37045__$1 = cljs.core.__destructure_map(map__37045);
var msg = map__37045__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37045__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37066,p__37067){
var map__37069 = p__37066;
var map__37069__$1 = cljs.core.__destructure_map(map__37069);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37070 = p__37067;
var map__37070__$1 = cljs.core.__destructure_map(map__37070);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37070__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37078,p__37079){
var map__37081 = p__37078;
var map__37081__$1 = cljs.core.__destructure_map(map__37081);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37081__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37081__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37083 = p__37079;
var map__37083__$1 = cljs.core.__destructure_map(map__37083);
var msg = map__37083__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37083__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37088,tid){
var map__37091 = p__37088;
var map__37091__$1 = cljs.core.__destructure_map(map__37091);
var svc = map__37091__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37108 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37109 = null;
var count__37110 = (0);
var i__37111 = (0);
while(true){
if((i__37111 < count__37110)){
var vec__37129 = chunk__37109.cljs$core$IIndexed$_nth$arity$2(null,i__37111);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37129,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37129,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37172 = seq__37108;
var G__37173 = chunk__37109;
var G__37174 = count__37110;
var G__37175 = (i__37111 + (1));
seq__37108 = G__37172;
chunk__37109 = G__37173;
count__37110 = G__37174;
i__37111 = G__37175;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37108);
if(temp__5804__auto__){
var seq__37108__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37108__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37108__$1);
var G__37178 = cljs.core.chunk_rest(seq__37108__$1);
var G__37179 = c__5568__auto__;
var G__37180 = cljs.core.count(c__5568__auto__);
var G__37181 = (0);
seq__37108 = G__37178;
chunk__37109 = G__37179;
count__37110 = G__37180;
i__37111 = G__37181;
continue;
} else {
var vec__37136 = cljs.core.first(seq__37108__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37136,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37136,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37184 = cljs.core.next(seq__37108__$1);
var G__37185 = null;
var G__37186 = (0);
var G__37187 = (0);
seq__37108 = G__37184;
chunk__37109 = G__37185;
count__37110 = G__37186;
i__37111 = G__37187;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37093_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37093_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37094_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37094_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37096_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37096_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37098_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37098_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37145){
var map__37146 = p__37145;
var map__37146__$1 = cljs.core.__destructure_map(map__37146);
var svc = map__37146__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37146__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37146__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
