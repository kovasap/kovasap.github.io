goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__78880,p__78881){
var map__78882 = p__78880;
var map__78882__$1 = cljs.core.__destructure_map(map__78882);
var svc = map__78882__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78882__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78882__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__78883 = p__78881;
var map__78883__$1 = cljs.core.__destructure_map(map__78883);
var msg = map__78883__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78883__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78883__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78883__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78883__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__78895,p__78896){
var map__78897 = p__78895;
var map__78897__$1 = cljs.core.__destructure_map(map__78897);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78897__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__78898 = p__78896;
var map__78898__$1 = cljs.core.__destructure_map(map__78898);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78898__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__78903,p__78904){
var map__78919 = p__78903;
var map__78919__$1 = cljs.core.__destructure_map(map__78919);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78919__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78919__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__78920 = p__78904;
var map__78920__$1 = cljs.core.__destructure_map(map__78920);
var msg = map__78920__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78920__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__78929,tid){
var map__78930 = p__78929;
var map__78930__$1 = cljs.core.__destructure_map(map__78930);
var svc = map__78930__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78930__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__78936 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__78937 = null;
var count__78938 = (0);
var i__78939 = (0);
while(true){
if((i__78939 < count__78938)){
var vec__78950 = chunk__78937.cljs$core$IIndexed$_nth$arity$2(null,i__78939);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78950,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78950,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__78966 = seq__78936;
var G__78967 = chunk__78937;
var G__78968 = count__78938;
var G__78969 = (i__78939 + (1));
seq__78936 = G__78966;
chunk__78937 = G__78967;
count__78938 = G__78968;
i__78939 = G__78969;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78936);
if(temp__5753__auto__){
var seq__78936__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78936__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__78936__$1);
var G__78971 = cljs.core.chunk_rest(seq__78936__$1);
var G__78972 = c__4679__auto__;
var G__78973 = cljs.core.count(c__4679__auto__);
var G__78974 = (0);
seq__78936 = G__78971;
chunk__78937 = G__78972;
count__78938 = G__78973;
i__78939 = G__78974;
continue;
} else {
var vec__78953 = cljs.core.first(seq__78936__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78953,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78953,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__78975 = cljs.core.next(seq__78936__$1);
var G__78976 = null;
var G__78977 = (0);
var G__78978 = (0);
seq__78936 = G__78975;
chunk__78937 = G__78976;
count__78938 = G__78977;
i__78939 = G__78978;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__78932_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__78932_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__78933_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__78933_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__78934_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__78934_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__78935_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__78935_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__78958){
var map__78959 = p__78958;
var map__78959__$1 = cljs.core.__destructure_map(map__78959);
var svc = map__78959__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78959__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
