goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36970,p__36971){
var map__36972 = p__36970;
var map__36972__$1 = cljs.core.__destructure_map(map__36972);
var svc = map__36972__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36973 = p__36971;
var map__36973__$1 = cljs.core.__destructure_map(map__36973);
var msg = map__36973__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36973__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36973__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36973__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36973__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36992,p__36993){
var map__36995 = p__36992;
var map__36995__$1 = cljs.core.__destructure_map(map__36995);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36995__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36996 = p__36993;
var map__36996__$1 = cljs.core.__destructure_map(map__36996);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37001,p__37002){
var map__37003 = p__37001;
var map__37003__$1 = cljs.core.__destructure_map(map__37003);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37003__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37003__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37004 = p__37002;
var map__37004__$1 = cljs.core.__destructure_map(map__37004);
var msg = map__37004__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37004__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37055,tid){
var map__37057 = p__37055;
var map__37057__$1 = cljs.core.__destructure_map(map__37057);
var svc = map__37057__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37095 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37096 = null;
var count__37097 = (0);
var i__37098 = (0);
while(true){
if((i__37098 < count__37097)){
var vec__37122 = chunk__37096.cljs$core$IIndexed$_nth$arity$2(null,i__37098);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37122,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37122,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37151 = seq__37095;
var G__37152 = chunk__37096;
var G__37153 = count__37097;
var G__37154 = (i__37098 + (1));
seq__37095 = G__37151;
chunk__37096 = G__37152;
count__37097 = G__37153;
i__37098 = G__37154;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37095);
if(temp__5823__auto__){
var seq__37095__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37095__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37095__$1);
var G__37155 = cljs.core.chunk_rest(seq__37095__$1);
var G__37156 = c__5568__auto__;
var G__37157 = cljs.core.count(c__5568__auto__);
var G__37158 = (0);
seq__37095 = G__37155;
chunk__37096 = G__37156;
count__37097 = G__37157;
i__37098 = G__37158;
continue;
} else {
var vec__37130 = cljs.core.first(seq__37095__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37159 = cljs.core.next(seq__37095__$1);
var G__37160 = null;
var G__37161 = (0);
var G__37162 = (0);
seq__37095 = G__37159;
chunk__37096 = G__37160;
count__37097 = G__37161;
i__37098 = G__37162;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37061_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37061_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37062_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37062_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37063_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37063_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37064_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37064_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37141){
var map__37142 = p__37141;
var map__37142__$1 = cljs.core.__destructure_map(map__37142);
var svc = map__37142__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37142__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37142__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
