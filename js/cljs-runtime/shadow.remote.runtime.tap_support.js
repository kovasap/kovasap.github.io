goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36942,p__36943){
var map__36944 = p__36942;
var map__36944__$1 = cljs.core.__destructure_map(map__36944);
var svc = map__36944__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36944__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36944__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36944__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36946 = p__36943;
var map__36946__$1 = cljs.core.__destructure_map(map__36946);
var msg = map__36946__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36946__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36950,p__36951){
var map__36953 = p__36950;
var map__36953__$1 = cljs.core.__destructure_map(map__36953);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36953__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36954 = p__36951;
var map__36954__$1 = cljs.core.__destructure_map(map__36954);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36954__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36957,p__36958){
var map__36959 = p__36957;
var map__36959__$1 = cljs.core.__destructure_map(map__36959);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36960 = p__36958;
var map__36960__$1 = cljs.core.__destructure_map(map__36960);
var msg = map__36960__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36960__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36973,tid){
var map__36974 = p__36973;
var map__36974__$1 = cljs.core.__destructure_map(map__36974);
var svc = map__36974__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36974__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36989 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36990 = null;
var count__36991 = (0);
var i__36992 = (0);
while(true){
if((i__36992 < count__36991)){
var vec__37014 = chunk__36990.cljs$core$IIndexed$_nth$arity$2(null,i__36992);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37037 = seq__36989;
var G__37038 = chunk__36990;
var G__37039 = count__36991;
var G__37040 = (i__36992 + (1));
seq__36989 = G__37037;
chunk__36990 = G__37038;
count__36991 = G__37039;
i__36992 = G__37040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36989);
if(temp__5804__auto__){
var seq__36989__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36989__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36989__$1);
var G__37041 = cljs.core.chunk_rest(seq__36989__$1);
var G__37042 = c__5568__auto__;
var G__37043 = cljs.core.count(c__5568__auto__);
var G__37044 = (0);
seq__36989 = G__37041;
chunk__36990 = G__37042;
count__36991 = G__37043;
i__36992 = G__37044;
continue;
} else {
var vec__37022 = cljs.core.first(seq__36989__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37022,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37022,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37046 = cljs.core.next(seq__36989__$1);
var G__37047 = null;
var G__37048 = (0);
var G__37049 = (0);
seq__36989 = G__37046;
chunk__36990 = G__37047;
count__36991 = G__37048;
i__36992 = G__37049;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36980_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36980_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36982_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36982_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36983_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36983_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36984_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36984_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37031){
var map__37032 = p__37031;
var map__37032__$1 = cljs.core.__destructure_map(map__37032);
var svc = map__37032__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
