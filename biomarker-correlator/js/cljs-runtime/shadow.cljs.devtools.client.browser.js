goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47309 = arguments.length;
var i__4865__auto___47310 = (0);
while(true){
if((i__4865__auto___47310 < len__4864__auto___47309)){
args__4870__auto__.push((arguments[i__4865__auto___47310]));

var G__47311 = (i__4865__auto___47310 + (1));
i__4865__auto___47310 = G__47311;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46818){
var G__46819 = cljs.core.first(seq46818);
var seq46818__$1 = cljs.core.next(seq46818);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46819,seq46818__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46824 = cljs.core.seq(sources);
var chunk__46825 = null;
var count__46826 = (0);
var i__46827 = (0);
while(true){
if((i__46827 < count__46826)){
var map__46833 = chunk__46825.cljs$core$IIndexed$_nth$arity$2(null,i__46827);
var map__46833__$1 = cljs.core.__destructure_map(map__46833);
var src = map__46833__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46833__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46833__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46833__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46835){var e_47312 = e46835;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47312);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47312.message)].join('')));
}

var G__47313 = seq__46824;
var G__47314 = chunk__46825;
var G__47315 = count__46826;
var G__47316 = (i__46827 + (1));
seq__46824 = G__47313;
chunk__46825 = G__47314;
count__46826 = G__47315;
i__46827 = G__47316;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46824);
if(temp__5753__auto__){
var seq__46824__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46824__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46824__$1);
var G__47317 = cljs.core.chunk_rest(seq__46824__$1);
var G__47318 = c__4679__auto__;
var G__47319 = cljs.core.count(c__4679__auto__);
var G__47320 = (0);
seq__46824 = G__47317;
chunk__46825 = G__47318;
count__46826 = G__47319;
i__46827 = G__47320;
continue;
} else {
var map__46841 = cljs.core.first(seq__46824__$1);
var map__46841__$1 = cljs.core.__destructure_map(map__46841);
var src = map__46841__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46842){var e_47322 = e46842;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47322);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47322.message)].join('')));
}

var G__47323 = cljs.core.next(seq__46824__$1);
var G__47324 = null;
var G__47325 = (0);
var G__47326 = (0);
seq__46824 = G__47323;
chunk__46825 = G__47324;
count__46826 = G__47325;
i__46827 = G__47326;
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
var seq__46843 = cljs.core.seq(js_requires);
var chunk__46844 = null;
var count__46845 = (0);
var i__46846 = (0);
while(true){
if((i__46846 < count__46845)){
var js_ns = chunk__46844.cljs$core$IIndexed$_nth$arity$2(null,i__46846);
var require_str_47327 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47327);


var G__47328 = seq__46843;
var G__47329 = chunk__46844;
var G__47330 = count__46845;
var G__47331 = (i__46846 + (1));
seq__46843 = G__47328;
chunk__46844 = G__47329;
count__46845 = G__47330;
i__46846 = G__47331;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46843);
if(temp__5753__auto__){
var seq__46843__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46843__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46843__$1);
var G__47332 = cljs.core.chunk_rest(seq__46843__$1);
var G__47333 = c__4679__auto__;
var G__47334 = cljs.core.count(c__4679__auto__);
var G__47335 = (0);
seq__46843 = G__47332;
chunk__46844 = G__47333;
count__46845 = G__47334;
i__46846 = G__47335;
continue;
} else {
var js_ns = cljs.core.first(seq__46843__$1);
var require_str_47336 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47336);


var G__47337 = cljs.core.next(seq__46843__$1);
var G__47338 = null;
var G__47339 = (0);
var G__47340 = (0);
seq__46843 = G__47337;
chunk__46844 = G__47338;
count__46845 = G__47339;
i__46846 = G__47340;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46852){
var map__46853 = p__46852;
var map__46853__$1 = cljs.core.__destructure_map(map__46853);
var msg = map__46853__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46853__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46853__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46856(s__46857){
return (new cljs.core.LazySeq(null,(function (){
var s__46857__$1 = s__46857;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46857__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__46862 = cljs.core.first(xs__6308__auto__);
var map__46862__$1 = cljs.core.__destructure_map(map__46862);
var src = map__46862__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46862__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__46857__$1,map__46862,map__46862__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46853,map__46853__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46856_$_iter__46858(s__46859){
return (new cljs.core.LazySeq(null,((function (s__46857__$1,map__46862,map__46862__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46853,map__46853__$1,msg,info,reload_info){
return (function (){
var s__46859__$1 = s__46859;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46859__$1);
if(temp__5753__auto____$1){
var s__46859__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46859__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46859__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46861 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46860 = (0);
while(true){
if((i__46860 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__46860);
cljs.core.chunk_append(b__46861,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47342 = (i__46860 + (1));
i__46860 = G__47342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46861),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46856_$_iter__46858(cljs.core.chunk_rest(s__46859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46861),null);
}
} else {
var warning = cljs.core.first(s__46859__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46856_$_iter__46858(cljs.core.rest(s__46859__$2)));
}
} else {
return null;
}
break;
}
});})(s__46857__$1,map__46862,map__46862__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46853,map__46853__$1,msg,info,reload_info))
,null,null));
});})(s__46857__$1,map__46862,map__46862__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46853,map__46853__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46856(cljs.core.rest(s__46857__$1)));
} else {
var G__47343 = cljs.core.rest(s__46857__$1);
s__46857__$1 = G__47343;
continue;
}
} else {
var G__47344 = cljs.core.rest(s__46857__$1);
s__46857__$1 = G__47344;
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
var seq__46864_47345 = cljs.core.seq(warnings);
var chunk__46865_47346 = null;
var count__46866_47347 = (0);
var i__46867_47348 = (0);
while(true){
if((i__46867_47348 < count__46866_47347)){
var map__46873_47349 = chunk__46865_47346.cljs$core$IIndexed$_nth$arity$2(null,i__46867_47348);
var map__46873_47350__$1 = cljs.core.__destructure_map(map__46873_47349);
var w_47351 = map__46873_47350__$1;
var msg_47352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46873_47350__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46873_47350__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46873_47350__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46873_47350__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47355)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47353),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47354),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47352__$1)].join(''));


var G__47356 = seq__46864_47345;
var G__47357 = chunk__46865_47346;
var G__47358 = count__46866_47347;
var G__47359 = (i__46867_47348 + (1));
seq__46864_47345 = G__47356;
chunk__46865_47346 = G__47357;
count__46866_47347 = G__47358;
i__46867_47348 = G__47359;
continue;
} else {
var temp__5753__auto___47360 = cljs.core.seq(seq__46864_47345);
if(temp__5753__auto___47360){
var seq__46864_47361__$1 = temp__5753__auto___47360;
if(cljs.core.chunked_seq_QMARK_(seq__46864_47361__$1)){
var c__4679__auto___47362 = cljs.core.chunk_first(seq__46864_47361__$1);
var G__47363 = cljs.core.chunk_rest(seq__46864_47361__$1);
var G__47364 = c__4679__auto___47362;
var G__47365 = cljs.core.count(c__4679__auto___47362);
var G__47366 = (0);
seq__46864_47345 = G__47363;
chunk__46865_47346 = G__47364;
count__46866_47347 = G__47365;
i__46867_47348 = G__47366;
continue;
} else {
var map__46875_47367 = cljs.core.first(seq__46864_47361__$1);
var map__46875_47368__$1 = cljs.core.__destructure_map(map__46875_47367);
var w_47369 = map__46875_47368__$1;
var msg_47370__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46875_47368__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46875_47368__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46875_47368__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46875_47368__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47373)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47371),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47372),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47370__$1)].join(''));


var G__47376 = cljs.core.next(seq__46864_47361__$1);
var G__47377 = null;
var G__47378 = (0);
var G__47379 = (0);
seq__46864_47345 = G__47376;
chunk__46865_47346 = G__47377;
count__46866_47347 = G__47378;
i__46867_47348 = G__47379;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46851_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46851_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46885){
var map__46886 = p__46885;
var map__46886__$1 = cljs.core.__destructure_map(map__46886);
var msg = map__46886__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46886__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46886__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__46887 = cljs.core.seq(updates);
var chunk__46889 = null;
var count__46890 = (0);
var i__46891 = (0);
while(true){
if((i__46891 < count__46890)){
var path = chunk__46889.cljs$core$IIndexed$_nth$arity$2(null,i__46891);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47130_47381 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47134_47382 = null;
var count__47135_47383 = (0);
var i__47136_47384 = (0);
while(true){
if((i__47136_47384 < count__47135_47383)){
var node_47385 = chunk__47134_47382.cljs$core$IIndexed$_nth$arity$2(null,i__47136_47384);
if(cljs.core.not(node_47385.shadow$old)){
var path_match_47386 = shadow.cljs.devtools.client.browser.match_paths(node_47385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47386)){
var new_link_47387 = (function (){var G__47181 = node_47385.cloneNode(true);
G__47181.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47181;
})();
(node_47385.shadow$old = true);

(new_link_47387.onload = ((function (seq__47130_47381,chunk__47134_47382,count__47135_47383,i__47136_47384,seq__46887,chunk__46889,count__46890,i__46891,new_link_47387,path_match_47386,node_47385,path,map__46886,map__46886__$1,msg,updates,reload_info){
return (function (e){
var seq__47182_47388 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47184_47389 = null;
var count__47185_47390 = (0);
var i__47186_47391 = (0);
while(true){
if((i__47186_47391 < count__47185_47390)){
var map__47190_47392 = chunk__47184_47389.cljs$core$IIndexed$_nth$arity$2(null,i__47186_47391);
var map__47190_47393__$1 = cljs.core.__destructure_map(map__47190_47392);
var task_47394 = map__47190_47393__$1;
var fn_str_47395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47190_47393__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47190_47393__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47397 = goog.getObjectByName(fn_str_47395,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47396)].join(''));

(fn_obj_47397.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47397.cljs$core$IFn$_invoke$arity$2(path,new_link_47387) : fn_obj_47397.call(null,path,new_link_47387));


var G__47398 = seq__47182_47388;
var G__47399 = chunk__47184_47389;
var G__47400 = count__47185_47390;
var G__47401 = (i__47186_47391 + (1));
seq__47182_47388 = G__47398;
chunk__47184_47389 = G__47399;
count__47185_47390 = G__47400;
i__47186_47391 = G__47401;
continue;
} else {
var temp__5753__auto___47402 = cljs.core.seq(seq__47182_47388);
if(temp__5753__auto___47402){
var seq__47182_47403__$1 = temp__5753__auto___47402;
if(cljs.core.chunked_seq_QMARK_(seq__47182_47403__$1)){
var c__4679__auto___47404 = cljs.core.chunk_first(seq__47182_47403__$1);
var G__47405 = cljs.core.chunk_rest(seq__47182_47403__$1);
var G__47406 = c__4679__auto___47404;
var G__47407 = cljs.core.count(c__4679__auto___47404);
var G__47408 = (0);
seq__47182_47388 = G__47405;
chunk__47184_47389 = G__47406;
count__47185_47390 = G__47407;
i__47186_47391 = G__47408;
continue;
} else {
var map__47191_47409 = cljs.core.first(seq__47182_47403__$1);
var map__47191_47410__$1 = cljs.core.__destructure_map(map__47191_47409);
var task_47411 = map__47191_47410__$1;
var fn_str_47412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47191_47410__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47191_47410__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47414 = goog.getObjectByName(fn_str_47412,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47413)].join(''));

(fn_obj_47414.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47414.cljs$core$IFn$_invoke$arity$2(path,new_link_47387) : fn_obj_47414.call(null,path,new_link_47387));


var G__47415 = cljs.core.next(seq__47182_47403__$1);
var G__47416 = null;
var G__47417 = (0);
var G__47418 = (0);
seq__47182_47388 = G__47415;
chunk__47184_47389 = G__47416;
count__47185_47390 = G__47417;
i__47186_47391 = G__47418;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47385);
});})(seq__47130_47381,chunk__47134_47382,count__47135_47383,i__47136_47384,seq__46887,chunk__46889,count__46890,i__46891,new_link_47387,path_match_47386,node_47385,path,map__46886,map__46886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47386], 0));

goog.dom.insertSiblingAfter(new_link_47387,node_47385);


var G__47419 = seq__47130_47381;
var G__47420 = chunk__47134_47382;
var G__47421 = count__47135_47383;
var G__47422 = (i__47136_47384 + (1));
seq__47130_47381 = G__47419;
chunk__47134_47382 = G__47420;
count__47135_47383 = G__47421;
i__47136_47384 = G__47422;
continue;
} else {
var G__47423 = seq__47130_47381;
var G__47424 = chunk__47134_47382;
var G__47425 = count__47135_47383;
var G__47426 = (i__47136_47384 + (1));
seq__47130_47381 = G__47423;
chunk__47134_47382 = G__47424;
count__47135_47383 = G__47425;
i__47136_47384 = G__47426;
continue;
}
} else {
var G__47427 = seq__47130_47381;
var G__47428 = chunk__47134_47382;
var G__47429 = count__47135_47383;
var G__47430 = (i__47136_47384 + (1));
seq__47130_47381 = G__47427;
chunk__47134_47382 = G__47428;
count__47135_47383 = G__47429;
i__47136_47384 = G__47430;
continue;
}
} else {
var temp__5753__auto___47431 = cljs.core.seq(seq__47130_47381);
if(temp__5753__auto___47431){
var seq__47130_47432__$1 = temp__5753__auto___47431;
if(cljs.core.chunked_seq_QMARK_(seq__47130_47432__$1)){
var c__4679__auto___47433 = cljs.core.chunk_first(seq__47130_47432__$1);
var G__47434 = cljs.core.chunk_rest(seq__47130_47432__$1);
var G__47435 = c__4679__auto___47433;
var G__47436 = cljs.core.count(c__4679__auto___47433);
var G__47437 = (0);
seq__47130_47381 = G__47434;
chunk__47134_47382 = G__47435;
count__47135_47383 = G__47436;
i__47136_47384 = G__47437;
continue;
} else {
var node_47438 = cljs.core.first(seq__47130_47432__$1);
if(cljs.core.not(node_47438.shadow$old)){
var path_match_47439 = shadow.cljs.devtools.client.browser.match_paths(node_47438.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47439)){
var new_link_47440 = (function (){var G__47192 = node_47438.cloneNode(true);
G__47192.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47439),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47192;
})();
(node_47438.shadow$old = true);

(new_link_47440.onload = ((function (seq__47130_47381,chunk__47134_47382,count__47135_47383,i__47136_47384,seq__46887,chunk__46889,count__46890,i__46891,new_link_47440,path_match_47439,node_47438,seq__47130_47432__$1,temp__5753__auto___47431,path,map__46886,map__46886__$1,msg,updates,reload_info){
return (function (e){
var seq__47193_47441 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47195_47442 = null;
var count__47196_47443 = (0);
var i__47197_47444 = (0);
while(true){
if((i__47197_47444 < count__47196_47443)){
var map__47204_47446 = chunk__47195_47442.cljs$core$IIndexed$_nth$arity$2(null,i__47197_47444);
var map__47204_47447__$1 = cljs.core.__destructure_map(map__47204_47446);
var task_47448 = map__47204_47447__$1;
var fn_str_47449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47204_47447__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47204_47447__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47451 = goog.getObjectByName(fn_str_47449,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47450)].join(''));

(fn_obj_47451.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47451.cljs$core$IFn$_invoke$arity$2(path,new_link_47440) : fn_obj_47451.call(null,path,new_link_47440));


var G__47453 = seq__47193_47441;
var G__47454 = chunk__47195_47442;
var G__47455 = count__47196_47443;
var G__47456 = (i__47197_47444 + (1));
seq__47193_47441 = G__47453;
chunk__47195_47442 = G__47454;
count__47196_47443 = G__47455;
i__47197_47444 = G__47456;
continue;
} else {
var temp__5753__auto___47457__$1 = cljs.core.seq(seq__47193_47441);
if(temp__5753__auto___47457__$1){
var seq__47193_47458__$1 = temp__5753__auto___47457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47193_47458__$1)){
var c__4679__auto___47459 = cljs.core.chunk_first(seq__47193_47458__$1);
var G__47461 = cljs.core.chunk_rest(seq__47193_47458__$1);
var G__47462 = c__4679__auto___47459;
var G__47463 = cljs.core.count(c__4679__auto___47459);
var G__47464 = (0);
seq__47193_47441 = G__47461;
chunk__47195_47442 = G__47462;
count__47196_47443 = G__47463;
i__47197_47444 = G__47464;
continue;
} else {
var map__47205_47465 = cljs.core.first(seq__47193_47458__$1);
var map__47205_47466__$1 = cljs.core.__destructure_map(map__47205_47465);
var task_47467 = map__47205_47466__$1;
var fn_str_47468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205_47466__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205_47466__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47470 = goog.getObjectByName(fn_str_47468,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47469)].join(''));

(fn_obj_47470.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47470.cljs$core$IFn$_invoke$arity$2(path,new_link_47440) : fn_obj_47470.call(null,path,new_link_47440));


var G__47471 = cljs.core.next(seq__47193_47458__$1);
var G__47472 = null;
var G__47473 = (0);
var G__47474 = (0);
seq__47193_47441 = G__47471;
chunk__47195_47442 = G__47472;
count__47196_47443 = G__47473;
i__47197_47444 = G__47474;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47438);
});})(seq__47130_47381,chunk__47134_47382,count__47135_47383,i__47136_47384,seq__46887,chunk__46889,count__46890,i__46891,new_link_47440,path_match_47439,node_47438,seq__47130_47432__$1,temp__5753__auto___47431,path,map__46886,map__46886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47439], 0));

goog.dom.insertSiblingAfter(new_link_47440,node_47438);


var G__47475 = cljs.core.next(seq__47130_47432__$1);
var G__47476 = null;
var G__47477 = (0);
var G__47478 = (0);
seq__47130_47381 = G__47475;
chunk__47134_47382 = G__47476;
count__47135_47383 = G__47477;
i__47136_47384 = G__47478;
continue;
} else {
var G__47479 = cljs.core.next(seq__47130_47432__$1);
var G__47480 = null;
var G__47481 = (0);
var G__47482 = (0);
seq__47130_47381 = G__47479;
chunk__47134_47382 = G__47480;
count__47135_47383 = G__47481;
i__47136_47384 = G__47482;
continue;
}
} else {
var G__47483 = cljs.core.next(seq__47130_47432__$1);
var G__47484 = null;
var G__47485 = (0);
var G__47486 = (0);
seq__47130_47381 = G__47483;
chunk__47134_47382 = G__47484;
count__47135_47383 = G__47485;
i__47136_47384 = G__47486;
continue;
}
}
} else {
}
}
break;
}


var G__47487 = seq__46887;
var G__47488 = chunk__46889;
var G__47489 = count__46890;
var G__47490 = (i__46891 + (1));
seq__46887 = G__47487;
chunk__46889 = G__47488;
count__46890 = G__47489;
i__46891 = G__47490;
continue;
} else {
var G__47491 = seq__46887;
var G__47492 = chunk__46889;
var G__47493 = count__46890;
var G__47494 = (i__46891 + (1));
seq__46887 = G__47491;
chunk__46889 = G__47492;
count__46890 = G__47493;
i__46891 = G__47494;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46887);
if(temp__5753__auto__){
var seq__46887__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46887__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46887__$1);
var G__47495 = cljs.core.chunk_rest(seq__46887__$1);
var G__47496 = c__4679__auto__;
var G__47497 = cljs.core.count(c__4679__auto__);
var G__47498 = (0);
seq__46887 = G__47495;
chunk__46889 = G__47496;
count__46890 = G__47497;
i__46891 = G__47498;
continue;
} else {
var path = cljs.core.first(seq__46887__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47211_47499 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47215_47500 = null;
var count__47216_47501 = (0);
var i__47217_47502 = (0);
while(true){
if((i__47217_47502 < count__47216_47501)){
var node_47503 = chunk__47215_47500.cljs$core$IIndexed$_nth$arity$2(null,i__47217_47502);
if(cljs.core.not(node_47503.shadow$old)){
var path_match_47504 = shadow.cljs.devtools.client.browser.match_paths(node_47503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47504)){
var new_link_47508 = (function (){var G__47254 = node_47503.cloneNode(true);
G__47254.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47254;
})();
(node_47503.shadow$old = true);

(new_link_47508.onload = ((function (seq__47211_47499,chunk__47215_47500,count__47216_47501,i__47217_47502,seq__46887,chunk__46889,count__46890,i__46891,new_link_47508,path_match_47504,node_47503,path,seq__46887__$1,temp__5753__auto__,map__46886,map__46886__$1,msg,updates,reload_info){
return (function (e){
var seq__47255_47509 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47257_47510 = null;
var count__47258_47511 = (0);
var i__47259_47512 = (0);
while(true){
if((i__47259_47512 < count__47258_47511)){
var map__47264_47513 = chunk__47257_47510.cljs$core$IIndexed$_nth$arity$2(null,i__47259_47512);
var map__47264_47514__$1 = cljs.core.__destructure_map(map__47264_47513);
var task_47515 = map__47264_47514__$1;
var fn_str_47516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47264_47514__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47264_47514__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47518 = goog.getObjectByName(fn_str_47516,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47517)].join(''));

(fn_obj_47518.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47518.cljs$core$IFn$_invoke$arity$2(path,new_link_47508) : fn_obj_47518.call(null,path,new_link_47508));


var G__47519 = seq__47255_47509;
var G__47520 = chunk__47257_47510;
var G__47521 = count__47258_47511;
var G__47522 = (i__47259_47512 + (1));
seq__47255_47509 = G__47519;
chunk__47257_47510 = G__47520;
count__47258_47511 = G__47521;
i__47259_47512 = G__47522;
continue;
} else {
var temp__5753__auto___47523__$1 = cljs.core.seq(seq__47255_47509);
if(temp__5753__auto___47523__$1){
var seq__47255_47524__$1 = temp__5753__auto___47523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47255_47524__$1)){
var c__4679__auto___47525 = cljs.core.chunk_first(seq__47255_47524__$1);
var G__47526 = cljs.core.chunk_rest(seq__47255_47524__$1);
var G__47527 = c__4679__auto___47525;
var G__47528 = cljs.core.count(c__4679__auto___47525);
var G__47529 = (0);
seq__47255_47509 = G__47526;
chunk__47257_47510 = G__47527;
count__47258_47511 = G__47528;
i__47259_47512 = G__47529;
continue;
} else {
var map__47266_47530 = cljs.core.first(seq__47255_47524__$1);
var map__47266_47531__$1 = cljs.core.__destructure_map(map__47266_47530);
var task_47532 = map__47266_47531__$1;
var fn_str_47533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266_47531__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266_47531__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47535 = goog.getObjectByName(fn_str_47533,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47534)].join(''));

(fn_obj_47535.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47535.cljs$core$IFn$_invoke$arity$2(path,new_link_47508) : fn_obj_47535.call(null,path,new_link_47508));


var G__47536 = cljs.core.next(seq__47255_47524__$1);
var G__47537 = null;
var G__47538 = (0);
var G__47539 = (0);
seq__47255_47509 = G__47536;
chunk__47257_47510 = G__47537;
count__47258_47511 = G__47538;
i__47259_47512 = G__47539;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47503);
});})(seq__47211_47499,chunk__47215_47500,count__47216_47501,i__47217_47502,seq__46887,chunk__46889,count__46890,i__46891,new_link_47508,path_match_47504,node_47503,path,seq__46887__$1,temp__5753__auto__,map__46886,map__46886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47504], 0));

goog.dom.insertSiblingAfter(new_link_47508,node_47503);


var G__47540 = seq__47211_47499;
var G__47541 = chunk__47215_47500;
var G__47542 = count__47216_47501;
var G__47543 = (i__47217_47502 + (1));
seq__47211_47499 = G__47540;
chunk__47215_47500 = G__47541;
count__47216_47501 = G__47542;
i__47217_47502 = G__47543;
continue;
} else {
var G__47544 = seq__47211_47499;
var G__47545 = chunk__47215_47500;
var G__47546 = count__47216_47501;
var G__47547 = (i__47217_47502 + (1));
seq__47211_47499 = G__47544;
chunk__47215_47500 = G__47545;
count__47216_47501 = G__47546;
i__47217_47502 = G__47547;
continue;
}
} else {
var G__47548 = seq__47211_47499;
var G__47549 = chunk__47215_47500;
var G__47550 = count__47216_47501;
var G__47551 = (i__47217_47502 + (1));
seq__47211_47499 = G__47548;
chunk__47215_47500 = G__47549;
count__47216_47501 = G__47550;
i__47217_47502 = G__47551;
continue;
}
} else {
var temp__5753__auto___47552__$1 = cljs.core.seq(seq__47211_47499);
if(temp__5753__auto___47552__$1){
var seq__47211_47553__$1 = temp__5753__auto___47552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47211_47553__$1)){
var c__4679__auto___47554 = cljs.core.chunk_first(seq__47211_47553__$1);
var G__47555 = cljs.core.chunk_rest(seq__47211_47553__$1);
var G__47556 = c__4679__auto___47554;
var G__47557 = cljs.core.count(c__4679__auto___47554);
var G__47558 = (0);
seq__47211_47499 = G__47555;
chunk__47215_47500 = G__47556;
count__47216_47501 = G__47557;
i__47217_47502 = G__47558;
continue;
} else {
var node_47560 = cljs.core.first(seq__47211_47553__$1);
if(cljs.core.not(node_47560.shadow$old)){
var path_match_47561 = shadow.cljs.devtools.client.browser.match_paths(node_47560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47561)){
var new_link_47562 = (function (){var G__47269 = node_47560.cloneNode(true);
G__47269.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47269;
})();
(node_47560.shadow$old = true);

(new_link_47562.onload = ((function (seq__47211_47499,chunk__47215_47500,count__47216_47501,i__47217_47502,seq__46887,chunk__46889,count__46890,i__46891,new_link_47562,path_match_47561,node_47560,seq__47211_47553__$1,temp__5753__auto___47552__$1,path,seq__46887__$1,temp__5753__auto__,map__46886,map__46886__$1,msg,updates,reload_info){
return (function (e){
var seq__47270_47563 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47272_47564 = null;
var count__47273_47565 = (0);
var i__47274_47566 = (0);
while(true){
if((i__47274_47566 < count__47273_47565)){
var map__47278_47567 = chunk__47272_47564.cljs$core$IIndexed$_nth$arity$2(null,i__47274_47566);
var map__47278_47568__$1 = cljs.core.__destructure_map(map__47278_47567);
var task_47569 = map__47278_47568__$1;
var fn_str_47570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47278_47568__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47278_47568__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47573 = goog.getObjectByName(fn_str_47570,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47571)].join(''));

(fn_obj_47573.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47573.cljs$core$IFn$_invoke$arity$2(path,new_link_47562) : fn_obj_47573.call(null,path,new_link_47562));


var G__47574 = seq__47270_47563;
var G__47575 = chunk__47272_47564;
var G__47576 = count__47273_47565;
var G__47577 = (i__47274_47566 + (1));
seq__47270_47563 = G__47574;
chunk__47272_47564 = G__47575;
count__47273_47565 = G__47576;
i__47274_47566 = G__47577;
continue;
} else {
var temp__5753__auto___47578__$2 = cljs.core.seq(seq__47270_47563);
if(temp__5753__auto___47578__$2){
var seq__47270_47579__$1 = temp__5753__auto___47578__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47270_47579__$1)){
var c__4679__auto___47580 = cljs.core.chunk_first(seq__47270_47579__$1);
var G__47581 = cljs.core.chunk_rest(seq__47270_47579__$1);
var G__47582 = c__4679__auto___47580;
var G__47583 = cljs.core.count(c__4679__auto___47580);
var G__47584 = (0);
seq__47270_47563 = G__47581;
chunk__47272_47564 = G__47582;
count__47273_47565 = G__47583;
i__47274_47566 = G__47584;
continue;
} else {
var map__47279_47585 = cljs.core.first(seq__47270_47579__$1);
var map__47279_47586__$1 = cljs.core.__destructure_map(map__47279_47585);
var task_47587 = map__47279_47586__$1;
var fn_str_47588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47279_47586__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47279_47586__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47590 = goog.getObjectByName(fn_str_47588,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47589)].join(''));

(fn_obj_47590.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47590.cljs$core$IFn$_invoke$arity$2(path,new_link_47562) : fn_obj_47590.call(null,path,new_link_47562));


var G__47591 = cljs.core.next(seq__47270_47579__$1);
var G__47592 = null;
var G__47593 = (0);
var G__47594 = (0);
seq__47270_47563 = G__47591;
chunk__47272_47564 = G__47592;
count__47273_47565 = G__47593;
i__47274_47566 = G__47594;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47560);
});})(seq__47211_47499,chunk__47215_47500,count__47216_47501,i__47217_47502,seq__46887,chunk__46889,count__46890,i__46891,new_link_47562,path_match_47561,node_47560,seq__47211_47553__$1,temp__5753__auto___47552__$1,path,seq__46887__$1,temp__5753__auto__,map__46886,map__46886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47561], 0));

goog.dom.insertSiblingAfter(new_link_47562,node_47560);


var G__47595 = cljs.core.next(seq__47211_47553__$1);
var G__47596 = null;
var G__47597 = (0);
var G__47598 = (0);
seq__47211_47499 = G__47595;
chunk__47215_47500 = G__47596;
count__47216_47501 = G__47597;
i__47217_47502 = G__47598;
continue;
} else {
var G__47601 = cljs.core.next(seq__47211_47553__$1);
var G__47602 = null;
var G__47603 = (0);
var G__47604 = (0);
seq__47211_47499 = G__47601;
chunk__47215_47500 = G__47602;
count__47216_47501 = G__47603;
i__47217_47502 = G__47604;
continue;
}
} else {
var G__47605 = cljs.core.next(seq__47211_47553__$1);
var G__47606 = null;
var G__47607 = (0);
var G__47608 = (0);
seq__47211_47499 = G__47605;
chunk__47215_47500 = G__47606;
count__47216_47501 = G__47607;
i__47217_47502 = G__47608;
continue;
}
}
} else {
}
}
break;
}


var G__47609 = cljs.core.next(seq__46887__$1);
var G__47610 = null;
var G__47611 = (0);
var G__47612 = (0);
seq__46887 = G__47609;
chunk__46889 = G__47610;
count__46890 = G__47611;
i__46891 = G__47612;
continue;
} else {
var G__47613 = cljs.core.next(seq__46887__$1);
var G__47614 = null;
var G__47615 = (0);
var G__47616 = (0);
seq__46887 = G__47613;
chunk__46889 = G__47614;
count__46890 = G__47615;
i__46891 = G__47616;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47280){
var map__47281 = p__47280;
var map__47281__$1 = cljs.core.__destructure_map(map__47281);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47286){
var map__47287 = p__47286;
var map__47287__$1 = cljs.core.__destructure_map(map__47287);
var _ = map__47287__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47287__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47288,done,error){
var map__47289 = p__47288;
var map__47289__$1 = cljs.core.__destructure_map(map__47289);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47289__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47290,done,error){
var map__47291 = p__47290;
var map__47291__$1 = cljs.core.__destructure_map(map__47291);
var msg = map__47291__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47291__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47291__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47291__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47293){
var map__47294 = p__47293;
var map__47294__$1 = cljs.core.__destructure_map(map__47294);
var src = map__47294__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47294__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47295 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47295) : done.call(null,G__47295));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47297){
var map__47298 = p__47297;
var map__47298__$1 = cljs.core.__destructure_map(map__47298);
var msg__$1 = map__47298__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47298__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47299){var ex = e47299;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47300){
var map__47301 = p__47300;
var map__47301__$1 = cljs.core.__destructure_map(map__47301);
var env = map__47301__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47301__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47305){
var map__47306 = p__47305;
var map__47306__$1 = cljs.core.__destructure_map(map__47306);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47306__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47306__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__47307){
var map__47308 = p__47307;
var map__47308__$1 = cljs.core.__destructure_map(map__47308);
var svc = map__47308__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
