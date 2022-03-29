goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__63371,p__63372){
var map__63374 = p__63371;
var map__63374__$1 = cljs.core.__destructure_map(map__63374);
var svc = map__63374__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63374__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63374__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63374__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63375 = p__63372;
var map__63375__$1 = cljs.core.__destructure_map(map__63375);
var msg = map__63375__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63375__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__63395,p__63396){
var map__63397 = p__63395;
var map__63397__$1 = cljs.core.__destructure_map(map__63397);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63397__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__63398 = p__63396;
var map__63398__$1 = cljs.core.__destructure_map(map__63398);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__63406,p__63407){
var map__63409 = p__63406;
var map__63409__$1 = cljs.core.__destructure_map(map__63409);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63409__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63410 = p__63407;
var map__63410__$1 = cljs.core.__destructure_map(map__63410);
var msg = map__63410__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63410__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__63422,tid){
var map__63423 = p__63422;
var map__63423__$1 = cljs.core.__destructure_map(map__63423);
var svc = map__63423__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63423__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__63436 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__63437 = null;
var count__63438 = (0);
var i__63439 = (0);
while(true){
if((i__63439 < count__63438)){
var vec__63448 = chunk__63437.cljs$core$IIndexed$_nth$arity$2(null,i__63439);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63448,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63448,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63467 = seq__63436;
var G__63468 = chunk__63437;
var G__63469 = count__63438;
var G__63470 = (i__63439 + (1));
seq__63436 = G__63467;
chunk__63437 = G__63468;
count__63438 = G__63469;
i__63439 = G__63470;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63436);
if(temp__5753__auto__){
var seq__63436__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63436__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63436__$1);
var G__63471 = cljs.core.chunk_rest(seq__63436__$1);
var G__63472 = c__4679__auto__;
var G__63473 = cljs.core.count(c__4679__auto__);
var G__63474 = (0);
seq__63436 = G__63471;
chunk__63437 = G__63472;
count__63438 = G__63473;
i__63439 = G__63474;
continue;
} else {
var vec__63452 = cljs.core.first(seq__63436__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63452,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63452,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63475 = cljs.core.next(seq__63436__$1);
var G__63476 = null;
var G__63477 = (0);
var G__63478 = (0);
seq__63436 = G__63475;
chunk__63437 = G__63476;
count__63438 = G__63477;
i__63439 = G__63478;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__63428_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__63428_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__63429_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__63429_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__63430_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__63430_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__63432_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__63432_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__63456){
var map__63457 = p__63456;
var map__63457__$1 = cljs.core.__destructure_map(map__63457);
var svc = map__63457__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63457__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63457__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
