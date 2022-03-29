goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64374 = arguments.length;
var i__4865__auto___64375 = (0);
while(true){
if((i__4865__auto___64375 < len__4864__auto___64374)){
args__4870__auto__.push((arguments[i__4865__auto___64375]));

var G__64376 = (i__4865__auto___64375 + (1));
i__4865__auto___64375 = G__64376;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63774){
var G__63775 = cljs.core.first(seq63774);
var seq63774__$1 = cljs.core.next(seq63774);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63775,seq63774__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63776 = cljs.core.seq(sources);
var chunk__63777 = null;
var count__63778 = (0);
var i__63779 = (0);
while(true){
if((i__63779 < count__63778)){
var map__63796 = chunk__63777.cljs$core$IIndexed$_nth$arity$2(null,i__63779);
var map__63796__$1 = cljs.core.__destructure_map(map__63796);
var src = map__63796__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63796__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63796__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63796__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63799){var e_64388 = e63799;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64388);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64388.message)].join('')));
}

var G__64389 = seq__63776;
var G__64390 = chunk__63777;
var G__64391 = count__63778;
var G__64392 = (i__63779 + (1));
seq__63776 = G__64389;
chunk__63777 = G__64390;
count__63778 = G__64391;
i__63779 = G__64392;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63776);
if(temp__5753__auto__){
var seq__63776__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63776__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63776__$1);
var G__64393 = cljs.core.chunk_rest(seq__63776__$1);
var G__64394 = c__4679__auto__;
var G__64395 = cljs.core.count(c__4679__auto__);
var G__64396 = (0);
seq__63776 = G__64393;
chunk__63777 = G__64394;
count__63778 = G__64395;
i__63779 = G__64396;
continue;
} else {
var map__63809 = cljs.core.first(seq__63776__$1);
var map__63809__$1 = cljs.core.__destructure_map(map__63809);
var src = map__63809__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63809__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63809__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63809__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63810){var e_64397 = e63810;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64397);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64397.message)].join('')));
}

var G__64398 = cljs.core.next(seq__63776__$1);
var G__64399 = null;
var G__64400 = (0);
var G__64401 = (0);
seq__63776 = G__64398;
chunk__63777 = G__64399;
count__63778 = G__64400;
i__63779 = G__64401;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63823 = cljs.core.seq(js_requires);
var chunk__63824 = null;
var count__63825 = (0);
var i__63826 = (0);
while(true){
if((i__63826 < count__63825)){
var js_ns = chunk__63824.cljs$core$IIndexed$_nth$arity$2(null,i__63826);
var require_str_64404 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64404);


var G__64410 = seq__63823;
var G__64411 = chunk__63824;
var G__64412 = count__63825;
var G__64413 = (i__63826 + (1));
seq__63823 = G__64410;
chunk__63824 = G__64411;
count__63825 = G__64412;
i__63826 = G__64413;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63823);
if(temp__5753__auto__){
var seq__63823__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63823__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63823__$1);
var G__64414 = cljs.core.chunk_rest(seq__63823__$1);
var G__64415 = c__4679__auto__;
var G__64416 = cljs.core.count(c__4679__auto__);
var G__64417 = (0);
seq__63823 = G__64414;
chunk__63824 = G__64415;
count__63825 = G__64416;
i__63826 = G__64417;
continue;
} else {
var js_ns = cljs.core.first(seq__63823__$1);
var require_str_64418 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64418);


var G__64419 = cljs.core.next(seq__63823__$1);
var G__64420 = null;
var G__64421 = (0);
var G__64422 = (0);
seq__63823 = G__64419;
chunk__63824 = G__64420;
count__63825 = G__64421;
i__63826 = G__64422;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63839){
var map__63840 = p__63839;
var map__63840__$1 = cljs.core.__destructure_map(map__63840);
var msg = map__63840__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63840__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63840__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63841(s__63842){
return (new cljs.core.LazySeq(null,(function (){
var s__63842__$1 = s__63842;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63842__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__63850 = cljs.core.first(xs__6308__auto__);
var map__63850__$1 = cljs.core.__destructure_map(map__63850);
var src = map__63850__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63850__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63850__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__63842__$1,map__63850,map__63850__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63840,map__63840__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63841_$_iter__63843(s__63844){
return (new cljs.core.LazySeq(null,((function (s__63842__$1,map__63850,map__63850__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63840,map__63840__$1,msg,info,reload_info){
return (function (){
var s__63844__$1 = s__63844;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63844__$1);
if(temp__5753__auto____$1){
var s__63844__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63844__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__63844__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__63846 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__63845 = (0);
while(true){
if((i__63845 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__63845);
cljs.core.chunk_append(b__63846,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64430 = (i__63845 + (1));
i__63845 = G__64430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63846),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63841_$_iter__63843(cljs.core.chunk_rest(s__63844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63846),null);
}
} else {
var warning = cljs.core.first(s__63844__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63841_$_iter__63843(cljs.core.rest(s__63844__$2)));
}
} else {
return null;
}
break;
}
});})(s__63842__$1,map__63850,map__63850__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63840,map__63840__$1,msg,info,reload_info))
,null,null));
});})(s__63842__$1,map__63850,map__63850__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63840,map__63840__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63841(cljs.core.rest(s__63842__$1)));
} else {
var G__64431 = cljs.core.rest(s__63842__$1);
s__63842__$1 = G__64431;
continue;
}
} else {
var G__64432 = cljs.core.rest(s__63842__$1);
s__63842__$1 = G__64432;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__63862_64433 = cljs.core.seq(warnings);
var chunk__63863_64434 = null;
var count__63864_64435 = (0);
var i__63865_64436 = (0);
while(true){
if((i__63865_64436 < count__63864_64435)){
var map__63876_64443 = chunk__63863_64434.cljs$core$IIndexed$_nth$arity$2(null,i__63865_64436);
var map__63876_64444__$1 = cljs.core.__destructure_map(map__63876_64443);
var w_64445 = map__63876_64444__$1;
var msg_64446__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876_64444__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876_64444__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876_64444__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876_64444__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64449)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64447),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64448),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64446__$1)].join(''));


var G__64450 = seq__63862_64433;
var G__64451 = chunk__63863_64434;
var G__64452 = count__63864_64435;
var G__64453 = (i__63865_64436 + (1));
seq__63862_64433 = G__64450;
chunk__63863_64434 = G__64451;
count__63864_64435 = G__64452;
i__63865_64436 = G__64453;
continue;
} else {
var temp__5753__auto___64454 = cljs.core.seq(seq__63862_64433);
if(temp__5753__auto___64454){
var seq__63862_64455__$1 = temp__5753__auto___64454;
if(cljs.core.chunked_seq_QMARK_(seq__63862_64455__$1)){
var c__4679__auto___64456 = cljs.core.chunk_first(seq__63862_64455__$1);
var G__64457 = cljs.core.chunk_rest(seq__63862_64455__$1);
var G__64458 = c__4679__auto___64456;
var G__64459 = cljs.core.count(c__4679__auto___64456);
var G__64460 = (0);
seq__63862_64433 = G__64457;
chunk__63863_64434 = G__64458;
count__63864_64435 = G__64459;
i__63865_64436 = G__64460;
continue;
} else {
var map__63882_64461 = cljs.core.first(seq__63862_64455__$1);
var map__63882_64462__$1 = cljs.core.__destructure_map(map__63882_64461);
var w_64463 = map__63882_64462__$1;
var msg_64464__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63882_64462__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63882_64462__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63882_64462__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63882_64462__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64467)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64465),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64466),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64464__$1)].join(''));


var G__64469 = cljs.core.next(seq__63862_64455__$1);
var G__64470 = null;
var G__64471 = (0);
var G__64472 = (0);
seq__63862_64433 = G__64469;
chunk__63863_64434 = G__64470;
count__63864_64435 = G__64471;
i__63865_64436 = G__64472;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63838_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63838_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63889){
var map__63890 = p__63889;
var map__63890__$1 = cljs.core.__destructure_map(map__63890);
var msg = map__63890__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__63891 = cljs.core.seq(updates);
var chunk__63893 = null;
var count__63894 = (0);
var i__63895 = (0);
while(true){
if((i__63895 < count__63894)){
var path = chunk__63893.cljs$core$IIndexed$_nth$arity$2(null,i__63895);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64050_64480 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64054_64481 = null;
var count__64055_64482 = (0);
var i__64056_64483 = (0);
while(true){
if((i__64056_64483 < count__64055_64482)){
var node_64485 = chunk__64054_64481.cljs$core$IIndexed$_nth$arity$2(null,i__64056_64483);
if(cljs.core.not(node_64485.shadow$old)){
var path_match_64486 = shadow.cljs.devtools.client.browser.match_paths(node_64485.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64486)){
var new_link_64487 = (function (){var G__64104 = node_64485.cloneNode(true);
G__64104.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64486),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64104;
})();
(node_64485.shadow$old = true);

(new_link_64487.onload = ((function (seq__64050_64480,chunk__64054_64481,count__64055_64482,i__64056_64483,seq__63891,chunk__63893,count__63894,i__63895,new_link_64487,path_match_64486,node_64485,path,map__63890,map__63890__$1,msg,updates,reload_info){
return (function (e){
var seq__64113_64488 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64115_64489 = null;
var count__64116_64490 = (0);
var i__64117_64491 = (0);
while(true){
if((i__64117_64491 < count__64116_64490)){
var map__64125_64492 = chunk__64115_64489.cljs$core$IIndexed$_nth$arity$2(null,i__64117_64491);
var map__64125_64493__$1 = cljs.core.__destructure_map(map__64125_64492);
var task_64494 = map__64125_64493__$1;
var fn_str_64495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125_64493__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125_64493__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64502 = goog.getObjectByName(fn_str_64495,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64496)].join(''));

(fn_obj_64502.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64502.cljs$core$IFn$_invoke$arity$2(path,new_link_64487) : fn_obj_64502.call(null,path,new_link_64487));


var G__64507 = seq__64113_64488;
var G__64508 = chunk__64115_64489;
var G__64509 = count__64116_64490;
var G__64510 = (i__64117_64491 + (1));
seq__64113_64488 = G__64507;
chunk__64115_64489 = G__64508;
count__64116_64490 = G__64509;
i__64117_64491 = G__64510;
continue;
} else {
var temp__5753__auto___64512 = cljs.core.seq(seq__64113_64488);
if(temp__5753__auto___64512){
var seq__64113_64513__$1 = temp__5753__auto___64512;
if(cljs.core.chunked_seq_QMARK_(seq__64113_64513__$1)){
var c__4679__auto___64518 = cljs.core.chunk_first(seq__64113_64513__$1);
var G__64519 = cljs.core.chunk_rest(seq__64113_64513__$1);
var G__64520 = c__4679__auto___64518;
var G__64521 = cljs.core.count(c__4679__auto___64518);
var G__64522 = (0);
seq__64113_64488 = G__64519;
chunk__64115_64489 = G__64520;
count__64116_64490 = G__64521;
i__64117_64491 = G__64522;
continue;
} else {
var map__64133_64525 = cljs.core.first(seq__64113_64513__$1);
var map__64133_64526__$1 = cljs.core.__destructure_map(map__64133_64525);
var task_64527 = map__64133_64526__$1;
var fn_str_64528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64133_64526__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64133_64526__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64535 = goog.getObjectByName(fn_str_64528,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64529)].join(''));

(fn_obj_64535.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64535.cljs$core$IFn$_invoke$arity$2(path,new_link_64487) : fn_obj_64535.call(null,path,new_link_64487));


var G__64541 = cljs.core.next(seq__64113_64513__$1);
var G__64542 = null;
var G__64543 = (0);
var G__64544 = (0);
seq__64113_64488 = G__64541;
chunk__64115_64489 = G__64542;
count__64116_64490 = G__64543;
i__64117_64491 = G__64544;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64485);
});})(seq__64050_64480,chunk__64054_64481,count__64055_64482,i__64056_64483,seq__63891,chunk__63893,count__63894,i__63895,new_link_64487,path_match_64486,node_64485,path,map__63890,map__63890__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64486], 0));

goog.dom.insertSiblingAfter(new_link_64487,node_64485);


var G__64545 = seq__64050_64480;
var G__64546 = chunk__64054_64481;
var G__64547 = count__64055_64482;
var G__64548 = (i__64056_64483 + (1));
seq__64050_64480 = G__64545;
chunk__64054_64481 = G__64546;
count__64055_64482 = G__64547;
i__64056_64483 = G__64548;
continue;
} else {
var G__64553 = seq__64050_64480;
var G__64554 = chunk__64054_64481;
var G__64555 = count__64055_64482;
var G__64556 = (i__64056_64483 + (1));
seq__64050_64480 = G__64553;
chunk__64054_64481 = G__64554;
count__64055_64482 = G__64555;
i__64056_64483 = G__64556;
continue;
}
} else {
var G__64557 = seq__64050_64480;
var G__64558 = chunk__64054_64481;
var G__64559 = count__64055_64482;
var G__64560 = (i__64056_64483 + (1));
seq__64050_64480 = G__64557;
chunk__64054_64481 = G__64558;
count__64055_64482 = G__64559;
i__64056_64483 = G__64560;
continue;
}
} else {
var temp__5753__auto___64566 = cljs.core.seq(seq__64050_64480);
if(temp__5753__auto___64566){
var seq__64050_64571__$1 = temp__5753__auto___64566;
if(cljs.core.chunked_seq_QMARK_(seq__64050_64571__$1)){
var c__4679__auto___64572 = cljs.core.chunk_first(seq__64050_64571__$1);
var G__64573 = cljs.core.chunk_rest(seq__64050_64571__$1);
var G__64574 = c__4679__auto___64572;
var G__64575 = cljs.core.count(c__4679__auto___64572);
var G__64576 = (0);
seq__64050_64480 = G__64573;
chunk__64054_64481 = G__64574;
count__64055_64482 = G__64575;
i__64056_64483 = G__64576;
continue;
} else {
var node_64581 = cljs.core.first(seq__64050_64571__$1);
if(cljs.core.not(node_64581.shadow$old)){
var path_match_64582 = shadow.cljs.devtools.client.browser.match_paths(node_64581.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64582)){
var new_link_64583 = (function (){var G__64142 = node_64581.cloneNode(true);
G__64142.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64582),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64142;
})();
(node_64581.shadow$old = true);

(new_link_64583.onload = ((function (seq__64050_64480,chunk__64054_64481,count__64055_64482,i__64056_64483,seq__63891,chunk__63893,count__63894,i__63895,new_link_64583,path_match_64582,node_64581,seq__64050_64571__$1,temp__5753__auto___64566,path,map__63890,map__63890__$1,msg,updates,reload_info){
return (function (e){
var seq__64148_64585 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64150_64586 = null;
var count__64151_64587 = (0);
var i__64152_64588 = (0);
while(true){
if((i__64152_64588 < count__64151_64587)){
var map__64167_64589 = chunk__64150_64586.cljs$core$IIndexed$_nth$arity$2(null,i__64152_64588);
var map__64167_64590__$1 = cljs.core.__destructure_map(map__64167_64589);
var task_64591 = map__64167_64590__$1;
var fn_str_64592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167_64590__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167_64590__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64594 = goog.getObjectByName(fn_str_64592,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64593)].join(''));

(fn_obj_64594.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64594.cljs$core$IFn$_invoke$arity$2(path,new_link_64583) : fn_obj_64594.call(null,path,new_link_64583));


var G__64600 = seq__64148_64585;
var G__64601 = chunk__64150_64586;
var G__64602 = count__64151_64587;
var G__64603 = (i__64152_64588 + (1));
seq__64148_64585 = G__64600;
chunk__64150_64586 = G__64601;
count__64151_64587 = G__64602;
i__64152_64588 = G__64603;
continue;
} else {
var temp__5753__auto___64604__$1 = cljs.core.seq(seq__64148_64585);
if(temp__5753__auto___64604__$1){
var seq__64148_64605__$1 = temp__5753__auto___64604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64148_64605__$1)){
var c__4679__auto___64606 = cljs.core.chunk_first(seq__64148_64605__$1);
var G__64607 = cljs.core.chunk_rest(seq__64148_64605__$1);
var G__64608 = c__4679__auto___64606;
var G__64609 = cljs.core.count(c__4679__auto___64606);
var G__64610 = (0);
seq__64148_64585 = G__64607;
chunk__64150_64586 = G__64608;
count__64151_64587 = G__64609;
i__64152_64588 = G__64610;
continue;
} else {
var map__64179_64611 = cljs.core.first(seq__64148_64605__$1);
var map__64179_64612__$1 = cljs.core.__destructure_map(map__64179_64611);
var task_64613 = map__64179_64612__$1;
var fn_str_64614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179_64612__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179_64612__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64616 = goog.getObjectByName(fn_str_64614,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64615)].join(''));

(fn_obj_64616.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64616.cljs$core$IFn$_invoke$arity$2(path,new_link_64583) : fn_obj_64616.call(null,path,new_link_64583));


var G__64617 = cljs.core.next(seq__64148_64605__$1);
var G__64618 = null;
var G__64619 = (0);
var G__64620 = (0);
seq__64148_64585 = G__64617;
chunk__64150_64586 = G__64618;
count__64151_64587 = G__64619;
i__64152_64588 = G__64620;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64581);
});})(seq__64050_64480,chunk__64054_64481,count__64055_64482,i__64056_64483,seq__63891,chunk__63893,count__63894,i__63895,new_link_64583,path_match_64582,node_64581,seq__64050_64571__$1,temp__5753__auto___64566,path,map__63890,map__63890__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64582], 0));

goog.dom.insertSiblingAfter(new_link_64583,node_64581);


var G__64621 = cljs.core.next(seq__64050_64571__$1);
var G__64622 = null;
var G__64623 = (0);
var G__64624 = (0);
seq__64050_64480 = G__64621;
chunk__64054_64481 = G__64622;
count__64055_64482 = G__64623;
i__64056_64483 = G__64624;
continue;
} else {
var G__64625 = cljs.core.next(seq__64050_64571__$1);
var G__64626 = null;
var G__64627 = (0);
var G__64628 = (0);
seq__64050_64480 = G__64625;
chunk__64054_64481 = G__64626;
count__64055_64482 = G__64627;
i__64056_64483 = G__64628;
continue;
}
} else {
var G__64629 = cljs.core.next(seq__64050_64571__$1);
var G__64630 = null;
var G__64631 = (0);
var G__64632 = (0);
seq__64050_64480 = G__64629;
chunk__64054_64481 = G__64630;
count__64055_64482 = G__64631;
i__64056_64483 = G__64632;
continue;
}
}
} else {
}
}
break;
}


var G__64633 = seq__63891;
var G__64634 = chunk__63893;
var G__64635 = count__63894;
var G__64636 = (i__63895 + (1));
seq__63891 = G__64633;
chunk__63893 = G__64634;
count__63894 = G__64635;
i__63895 = G__64636;
continue;
} else {
var G__64642 = seq__63891;
var G__64643 = chunk__63893;
var G__64644 = count__63894;
var G__64645 = (i__63895 + (1));
seq__63891 = G__64642;
chunk__63893 = G__64643;
count__63894 = G__64644;
i__63895 = G__64645;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63891);
if(temp__5753__auto__){
var seq__63891__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63891__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63891__$1);
var G__64651 = cljs.core.chunk_rest(seq__63891__$1);
var G__64652 = c__4679__auto__;
var G__64653 = cljs.core.count(c__4679__auto__);
var G__64654 = (0);
seq__63891 = G__64651;
chunk__63893 = G__64652;
count__63894 = G__64653;
i__63895 = G__64654;
continue;
} else {
var path = cljs.core.first(seq__63891__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64191_64660 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64195_64661 = null;
var count__64196_64662 = (0);
var i__64197_64663 = (0);
while(true){
if((i__64197_64663 < count__64196_64662)){
var node_64670 = chunk__64195_64661.cljs$core$IIndexed$_nth$arity$2(null,i__64197_64663);
if(cljs.core.not(node_64670.shadow$old)){
var path_match_64672 = shadow.cljs.devtools.client.browser.match_paths(node_64670.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64672)){
var new_link_64677 = (function (){var G__64277 = node_64670.cloneNode(true);
G__64277.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64672),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64277;
})();
(node_64670.shadow$old = true);

(new_link_64677.onload = ((function (seq__64191_64660,chunk__64195_64661,count__64196_64662,i__64197_64663,seq__63891,chunk__63893,count__63894,i__63895,new_link_64677,path_match_64672,node_64670,path,seq__63891__$1,temp__5753__auto__,map__63890,map__63890__$1,msg,updates,reload_info){
return (function (e){
var seq__64278_64679 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64280_64680 = null;
var count__64281_64681 = (0);
var i__64282_64682 = (0);
while(true){
if((i__64282_64682 < count__64281_64681)){
var map__64287_64684 = chunk__64280_64680.cljs$core$IIndexed$_nth$arity$2(null,i__64282_64682);
var map__64287_64685__$1 = cljs.core.__destructure_map(map__64287_64684);
var task_64686 = map__64287_64685__$1;
var fn_str_64687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64287_64685__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64287_64685__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64689 = goog.getObjectByName(fn_str_64687,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64688)].join(''));

(fn_obj_64689.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64689.cljs$core$IFn$_invoke$arity$2(path,new_link_64677) : fn_obj_64689.call(null,path,new_link_64677));


var G__64690 = seq__64278_64679;
var G__64691 = chunk__64280_64680;
var G__64692 = count__64281_64681;
var G__64693 = (i__64282_64682 + (1));
seq__64278_64679 = G__64690;
chunk__64280_64680 = G__64691;
count__64281_64681 = G__64692;
i__64282_64682 = G__64693;
continue;
} else {
var temp__5753__auto___64694__$1 = cljs.core.seq(seq__64278_64679);
if(temp__5753__auto___64694__$1){
var seq__64278_64695__$1 = temp__5753__auto___64694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64278_64695__$1)){
var c__4679__auto___64696 = cljs.core.chunk_first(seq__64278_64695__$1);
var G__64697 = cljs.core.chunk_rest(seq__64278_64695__$1);
var G__64698 = c__4679__auto___64696;
var G__64699 = cljs.core.count(c__4679__auto___64696);
var G__64700 = (0);
seq__64278_64679 = G__64697;
chunk__64280_64680 = G__64698;
count__64281_64681 = G__64699;
i__64282_64682 = G__64700;
continue;
} else {
var map__64289_64701 = cljs.core.first(seq__64278_64695__$1);
var map__64289_64702__$1 = cljs.core.__destructure_map(map__64289_64701);
var task_64703 = map__64289_64702__$1;
var fn_str_64704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64289_64702__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64289_64702__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64706 = goog.getObjectByName(fn_str_64704,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64705)].join(''));

(fn_obj_64706.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64706.cljs$core$IFn$_invoke$arity$2(path,new_link_64677) : fn_obj_64706.call(null,path,new_link_64677));


var G__64707 = cljs.core.next(seq__64278_64695__$1);
var G__64708 = null;
var G__64709 = (0);
var G__64710 = (0);
seq__64278_64679 = G__64707;
chunk__64280_64680 = G__64708;
count__64281_64681 = G__64709;
i__64282_64682 = G__64710;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64670);
});})(seq__64191_64660,chunk__64195_64661,count__64196_64662,i__64197_64663,seq__63891,chunk__63893,count__63894,i__63895,new_link_64677,path_match_64672,node_64670,path,seq__63891__$1,temp__5753__auto__,map__63890,map__63890__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64672], 0));

goog.dom.insertSiblingAfter(new_link_64677,node_64670);


var G__64711 = seq__64191_64660;
var G__64712 = chunk__64195_64661;
var G__64713 = count__64196_64662;
var G__64714 = (i__64197_64663 + (1));
seq__64191_64660 = G__64711;
chunk__64195_64661 = G__64712;
count__64196_64662 = G__64713;
i__64197_64663 = G__64714;
continue;
} else {
var G__64715 = seq__64191_64660;
var G__64716 = chunk__64195_64661;
var G__64717 = count__64196_64662;
var G__64718 = (i__64197_64663 + (1));
seq__64191_64660 = G__64715;
chunk__64195_64661 = G__64716;
count__64196_64662 = G__64717;
i__64197_64663 = G__64718;
continue;
}
} else {
var G__64719 = seq__64191_64660;
var G__64720 = chunk__64195_64661;
var G__64721 = count__64196_64662;
var G__64722 = (i__64197_64663 + (1));
seq__64191_64660 = G__64719;
chunk__64195_64661 = G__64720;
count__64196_64662 = G__64721;
i__64197_64663 = G__64722;
continue;
}
} else {
var temp__5753__auto___64728__$1 = cljs.core.seq(seq__64191_64660);
if(temp__5753__auto___64728__$1){
var seq__64191_64729__$1 = temp__5753__auto___64728__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64191_64729__$1)){
var c__4679__auto___64730 = cljs.core.chunk_first(seq__64191_64729__$1);
var G__64731 = cljs.core.chunk_rest(seq__64191_64729__$1);
var G__64732 = c__4679__auto___64730;
var G__64733 = cljs.core.count(c__4679__auto___64730);
var G__64734 = (0);
seq__64191_64660 = G__64731;
chunk__64195_64661 = G__64732;
count__64196_64662 = G__64733;
i__64197_64663 = G__64734;
continue;
} else {
var node_64735 = cljs.core.first(seq__64191_64729__$1);
if(cljs.core.not(node_64735.shadow$old)){
var path_match_64736 = shadow.cljs.devtools.client.browser.match_paths(node_64735.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64736)){
var new_link_64737 = (function (){var G__64294 = node_64735.cloneNode(true);
G__64294.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64736),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64294;
})();
(node_64735.shadow$old = true);

(new_link_64737.onload = ((function (seq__64191_64660,chunk__64195_64661,count__64196_64662,i__64197_64663,seq__63891,chunk__63893,count__63894,i__63895,new_link_64737,path_match_64736,node_64735,seq__64191_64729__$1,temp__5753__auto___64728__$1,path,seq__63891__$1,temp__5753__auto__,map__63890,map__63890__$1,msg,updates,reload_info){
return (function (e){
var seq__64297_64739 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64299_64740 = null;
var count__64300_64741 = (0);
var i__64301_64742 = (0);
while(true){
if((i__64301_64742 < count__64300_64741)){
var map__64314_64745 = chunk__64299_64740.cljs$core$IIndexed$_nth$arity$2(null,i__64301_64742);
var map__64314_64746__$1 = cljs.core.__destructure_map(map__64314_64745);
var task_64747 = map__64314_64746__$1;
var fn_str_64748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314_64746__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314_64746__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64751 = goog.getObjectByName(fn_str_64748,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64749)].join(''));

(fn_obj_64751.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64751.cljs$core$IFn$_invoke$arity$2(path,new_link_64737) : fn_obj_64751.call(null,path,new_link_64737));


var G__64752 = seq__64297_64739;
var G__64753 = chunk__64299_64740;
var G__64754 = count__64300_64741;
var G__64755 = (i__64301_64742 + (1));
seq__64297_64739 = G__64752;
chunk__64299_64740 = G__64753;
count__64300_64741 = G__64754;
i__64301_64742 = G__64755;
continue;
} else {
var temp__5753__auto___64756__$2 = cljs.core.seq(seq__64297_64739);
if(temp__5753__auto___64756__$2){
var seq__64297_64762__$1 = temp__5753__auto___64756__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64297_64762__$1)){
var c__4679__auto___64763 = cljs.core.chunk_first(seq__64297_64762__$1);
var G__64764 = cljs.core.chunk_rest(seq__64297_64762__$1);
var G__64765 = c__4679__auto___64763;
var G__64766 = cljs.core.count(c__4679__auto___64763);
var G__64767 = (0);
seq__64297_64739 = G__64764;
chunk__64299_64740 = G__64765;
count__64300_64741 = G__64766;
i__64301_64742 = G__64767;
continue;
} else {
var map__64316_64768 = cljs.core.first(seq__64297_64762__$1);
var map__64316_64769__$1 = cljs.core.__destructure_map(map__64316_64768);
var task_64770 = map__64316_64769__$1;
var fn_str_64771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316_64769__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316_64769__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64773 = goog.getObjectByName(fn_str_64771,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64772)].join(''));

(fn_obj_64773.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64773.cljs$core$IFn$_invoke$arity$2(path,new_link_64737) : fn_obj_64773.call(null,path,new_link_64737));


var G__64774 = cljs.core.next(seq__64297_64762__$1);
var G__64775 = null;
var G__64776 = (0);
var G__64777 = (0);
seq__64297_64739 = G__64774;
chunk__64299_64740 = G__64775;
count__64300_64741 = G__64776;
i__64301_64742 = G__64777;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64735);
});})(seq__64191_64660,chunk__64195_64661,count__64196_64662,i__64197_64663,seq__63891,chunk__63893,count__63894,i__63895,new_link_64737,path_match_64736,node_64735,seq__64191_64729__$1,temp__5753__auto___64728__$1,path,seq__63891__$1,temp__5753__auto__,map__63890,map__63890__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64736], 0));

goog.dom.insertSiblingAfter(new_link_64737,node_64735);


var G__64781 = cljs.core.next(seq__64191_64729__$1);
var G__64782 = null;
var G__64783 = (0);
var G__64784 = (0);
seq__64191_64660 = G__64781;
chunk__64195_64661 = G__64782;
count__64196_64662 = G__64783;
i__64197_64663 = G__64784;
continue;
} else {
var G__64786 = cljs.core.next(seq__64191_64729__$1);
var G__64787 = null;
var G__64788 = (0);
var G__64789 = (0);
seq__64191_64660 = G__64786;
chunk__64195_64661 = G__64787;
count__64196_64662 = G__64788;
i__64197_64663 = G__64789;
continue;
}
} else {
var G__64790 = cljs.core.next(seq__64191_64729__$1);
var G__64791 = null;
var G__64792 = (0);
var G__64793 = (0);
seq__64191_64660 = G__64790;
chunk__64195_64661 = G__64791;
count__64196_64662 = G__64792;
i__64197_64663 = G__64793;
continue;
}
}
} else {
}
}
break;
}


var G__64794 = cljs.core.next(seq__63891__$1);
var G__64795 = null;
var G__64796 = (0);
var G__64797 = (0);
seq__63891 = G__64794;
chunk__63893 = G__64795;
count__63894 = G__64796;
i__63895 = G__64797;
continue;
} else {
var G__64800 = cljs.core.next(seq__63891__$1);
var G__64801 = null;
var G__64802 = (0);
var G__64803 = (0);
seq__63891 = G__64800;
chunk__63893 = G__64801;
count__63894 = G__64802;
i__63895 = G__64803;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__64318){
var map__64319 = p__64318;
var map__64319__$1 = cljs.core.__destructure_map(map__64319);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__64323){
var map__64324 = p__64323;
var map__64324__$1 = cljs.core.__destructure_map(map__64324);
var _ = map__64324__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64324__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64325,done,error){
var map__64326 = p__64325;
var map__64326__$1 = cljs.core.__destructure_map(map__64326);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64328,done,error){
var map__64329 = p__64328;
var map__64329__$1 = cljs.core.__destructure_map(map__64329);
var msg = map__64329__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64329__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64329__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64329__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64330){
var map__64331 = p__64330;
var map__64331__$1 = cljs.core.__destructure_map(map__64331);
var src = map__64331__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64331__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64332 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64332) : done.call(null,G__64332));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64336){
var map__64337 = p__64336;
var map__64337__$1 = cljs.core.__destructure_map(map__64337);
var msg__$1 = map__64337__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64337__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64343){var ex = e64343;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64344){
var map__64345 = p__64344;
var map__64345__$1 = cljs.core.__destructure_map(map__64345);
var env = map__64345__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64345__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64361){
var map__64362 = p__64361;
var map__64362__$1 = cljs.core.__destructure_map(map__64362);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__64364){
var map__64365 = p__64364;
var map__64365__$1 = cljs.core.__destructure_map(map__64365);
var svc = map__64365__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
