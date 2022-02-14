goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38432 = arguments.length;
var i__4865__auto___38433 = (0);
while(true){
if((i__4865__auto___38433 < len__4864__auto___38432)){
args__4870__auto__.push((arguments[i__4865__auto___38433]));

var G__38434 = (i__4865__auto___38433 + (1));
i__4865__auto___38433 = G__38434;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37869){
var G__37870 = cljs.core.first(seq37869);
var seq37869__$1 = cljs.core.next(seq37869);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37870,seq37869__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37879 = cljs.core.seq(sources);
var chunk__37881 = null;
var count__37882 = (0);
var i__37883 = (0);
while(true){
if((i__37883 < count__37882)){
var map__37928 = chunk__37881.cljs$core$IIndexed$_nth$arity$2(null,i__37883);
var map__37928__$1 = cljs.core.__destructure_map(map__37928);
var src = map__37928__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37948){var e_38438 = e37948;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38438);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38438.message)].join('')));
}

var G__38439 = seq__37879;
var G__38440 = chunk__37881;
var G__38441 = count__37882;
var G__38442 = (i__37883 + (1));
seq__37879 = G__38439;
chunk__37881 = G__38440;
count__37882 = G__38441;
i__37883 = G__38442;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37879);
if(temp__5753__auto__){
var seq__37879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37879__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37879__$1);
var G__38443 = cljs.core.chunk_rest(seq__37879__$1);
var G__38444 = c__4679__auto__;
var G__38445 = cljs.core.count(c__4679__auto__);
var G__38446 = (0);
seq__37879 = G__38443;
chunk__37881 = G__38444;
count__37882 = G__38445;
i__37883 = G__38446;
continue;
} else {
var map__37956 = cljs.core.first(seq__37879__$1);
var map__37956__$1 = cljs.core.__destructure_map(map__37956);
var src = map__37956__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37958){var e_38447 = e37958;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38447);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38447.message)].join('')));
}

var G__38448 = cljs.core.next(seq__37879__$1);
var G__38449 = null;
var G__38450 = (0);
var G__38451 = (0);
seq__37879 = G__38448;
chunk__37881 = G__38449;
count__37882 = G__38450;
i__37883 = G__38451;
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
var seq__37968 = cljs.core.seq(js_requires);
var chunk__37969 = null;
var count__37970 = (0);
var i__37971 = (0);
while(true){
if((i__37971 < count__37970)){
var js_ns = chunk__37969.cljs$core$IIndexed$_nth$arity$2(null,i__37971);
var require_str_38454 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38454);


var G__38455 = seq__37968;
var G__38456 = chunk__37969;
var G__38457 = count__37970;
var G__38458 = (i__37971 + (1));
seq__37968 = G__38455;
chunk__37969 = G__38456;
count__37970 = G__38457;
i__37971 = G__38458;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37968);
if(temp__5753__auto__){
var seq__37968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37968__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37968__$1);
var G__38460 = cljs.core.chunk_rest(seq__37968__$1);
var G__38461 = c__4679__auto__;
var G__38462 = cljs.core.count(c__4679__auto__);
var G__38463 = (0);
seq__37968 = G__38460;
chunk__37969 = G__38461;
count__37970 = G__38462;
i__37971 = G__38463;
continue;
} else {
var js_ns = cljs.core.first(seq__37968__$1);
var require_str_38465 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38465);


var G__38468 = cljs.core.next(seq__37968__$1);
var G__38469 = null;
var G__38470 = (0);
var G__38471 = (0);
seq__37968 = G__38468;
chunk__37969 = G__38469;
count__37970 = G__38470;
i__37971 = G__38471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37974){
var map__37975 = p__37974;
var map__37975__$1 = cljs.core.__destructure_map(map__37975);
var msg = map__37975__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37976(s__37977){
return (new cljs.core.LazySeq(null,(function (){
var s__37977__$1 = s__37977;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37977__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37982 = cljs.core.first(xs__6308__auto__);
var map__37982__$1 = cljs.core.__destructure_map(map__37982);
var src = map__37982__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37977__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37975,map__37975__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37976_$_iter__37978(s__37979){
return (new cljs.core.LazySeq(null,((function (s__37977__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37975,map__37975__$1,msg,info,reload_info){
return (function (){
var s__37979__$1 = s__37979;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37979__$1);
if(temp__5753__auto____$1){
var s__37979__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37979__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37979__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37981 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37980 = (0);
while(true){
if((i__37980 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37980);
cljs.core.chunk_append(b__37981,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38472 = (i__37980 + (1));
i__37980 = G__38472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37981),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37976_$_iter__37978(cljs.core.chunk_rest(s__37979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37981),null);
}
} else {
var warning = cljs.core.first(s__37979__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37976_$_iter__37978(cljs.core.rest(s__37979__$2)));
}
} else {
return null;
}
break;
}
});})(s__37977__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37975,map__37975__$1,msg,info,reload_info))
,null,null));
});})(s__37977__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37975,map__37975__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37976(cljs.core.rest(s__37977__$1)));
} else {
var G__38473 = cljs.core.rest(s__37977__$1);
s__37977__$1 = G__38473;
continue;
}
} else {
var G__38474 = cljs.core.rest(s__37977__$1);
s__37977__$1 = G__38474;
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
var seq__37983_38475 = cljs.core.seq(warnings);
var chunk__37984_38476 = null;
var count__37985_38477 = (0);
var i__37986_38478 = (0);
while(true){
if((i__37986_38478 < count__37985_38477)){
var map__37989_38479 = chunk__37984_38476.cljs$core$IIndexed$_nth$arity$2(null,i__37986_38478);
var map__37989_38480__$1 = cljs.core.__destructure_map(map__37989_38479);
var w_38481 = map__37989_38480__$1;
var msg_38482__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38480__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38480__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38480__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38480__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38485)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38483),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38484),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38482__$1)].join(''));


var G__38486 = seq__37983_38475;
var G__38487 = chunk__37984_38476;
var G__38488 = count__37985_38477;
var G__38489 = (i__37986_38478 + (1));
seq__37983_38475 = G__38486;
chunk__37984_38476 = G__38487;
count__37985_38477 = G__38488;
i__37986_38478 = G__38489;
continue;
} else {
var temp__5753__auto___38490 = cljs.core.seq(seq__37983_38475);
if(temp__5753__auto___38490){
var seq__37983_38491__$1 = temp__5753__auto___38490;
if(cljs.core.chunked_seq_QMARK_(seq__37983_38491__$1)){
var c__4679__auto___38492 = cljs.core.chunk_first(seq__37983_38491__$1);
var G__38493 = cljs.core.chunk_rest(seq__37983_38491__$1);
var G__38494 = c__4679__auto___38492;
var G__38495 = cljs.core.count(c__4679__auto___38492);
var G__38496 = (0);
seq__37983_38475 = G__38493;
chunk__37984_38476 = G__38494;
count__37985_38477 = G__38495;
i__37986_38478 = G__38496;
continue;
} else {
var map__37990_38497 = cljs.core.first(seq__37983_38491__$1);
var map__37990_38498__$1 = cljs.core.__destructure_map(map__37990_38497);
var w_38499 = map__37990_38498__$1;
var msg_38500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990_38498__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990_38498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990_38498__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990_38498__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38503)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38501),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38502),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38500__$1)].join(''));


var G__38504 = cljs.core.next(seq__37983_38491__$1);
var G__38505 = null;
var G__38506 = (0);
var G__38507 = (0);
seq__37983_38475 = G__38504;
chunk__37984_38476 = G__38505;
count__37985_38477 = G__38506;
i__37986_38478 = G__38507;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37973_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37973_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37992){
var map__37993 = p__37992;
var map__37993__$1 = cljs.core.__destructure_map(map__37993);
var msg = map__37993__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37994 = cljs.core.seq(updates);
var chunk__37996 = null;
var count__37997 = (0);
var i__37998 = (0);
while(true){
if((i__37998 < count__37997)){
var path = chunk__37996.cljs$core$IIndexed$_nth$arity$2(null,i__37998);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38135_38508 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38139_38509 = null;
var count__38140_38510 = (0);
var i__38141_38511 = (0);
while(true){
if((i__38141_38511 < count__38140_38510)){
var node_38512 = chunk__38139_38509.cljs$core$IIndexed$_nth$arity$2(null,i__38141_38511);
if(cljs.core.not(node_38512.shadow$old)){
var path_match_38513 = shadow.cljs.devtools.client.browser.match_paths(node_38512.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38513)){
var new_link_38514 = (function (){var G__38186 = node_38512.cloneNode(true);
G__38186.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38513),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38186;
})();
(node_38512.shadow$old = true);

(new_link_38514.onload = ((function (seq__38135_38508,chunk__38139_38509,count__38140_38510,i__38141_38511,seq__37994,chunk__37996,count__37997,i__37998,new_link_38514,path_match_38513,node_38512,path,map__37993,map__37993__$1,msg,updates,reload_info){
return (function (e){
var seq__38191_38515 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38193_38516 = null;
var count__38194_38517 = (0);
var i__38195_38518 = (0);
while(true){
if((i__38195_38518 < count__38194_38517)){
var map__38199_38519 = chunk__38193_38516.cljs$core$IIndexed$_nth$arity$2(null,i__38195_38518);
var map__38199_38520__$1 = cljs.core.__destructure_map(map__38199_38519);
var task_38521 = map__38199_38520__$1;
var fn_str_38522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199_38520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199_38520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38524 = goog.getObjectByName(fn_str_38522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38523)].join(''));

(fn_obj_38524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38524.cljs$core$IFn$_invoke$arity$2(path,new_link_38514) : fn_obj_38524.call(null,path,new_link_38514));


var G__38525 = seq__38191_38515;
var G__38526 = chunk__38193_38516;
var G__38527 = count__38194_38517;
var G__38528 = (i__38195_38518 + (1));
seq__38191_38515 = G__38525;
chunk__38193_38516 = G__38526;
count__38194_38517 = G__38527;
i__38195_38518 = G__38528;
continue;
} else {
var temp__5753__auto___38529 = cljs.core.seq(seq__38191_38515);
if(temp__5753__auto___38529){
var seq__38191_38530__$1 = temp__5753__auto___38529;
if(cljs.core.chunked_seq_QMARK_(seq__38191_38530__$1)){
var c__4679__auto___38531 = cljs.core.chunk_first(seq__38191_38530__$1);
var G__38532 = cljs.core.chunk_rest(seq__38191_38530__$1);
var G__38533 = c__4679__auto___38531;
var G__38534 = cljs.core.count(c__4679__auto___38531);
var G__38535 = (0);
seq__38191_38515 = G__38532;
chunk__38193_38516 = G__38533;
count__38194_38517 = G__38534;
i__38195_38518 = G__38535;
continue;
} else {
var map__38200_38536 = cljs.core.first(seq__38191_38530__$1);
var map__38200_38537__$1 = cljs.core.__destructure_map(map__38200_38536);
var task_38538 = map__38200_38537__$1;
var fn_str_38539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200_38537__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200_38537__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38541 = goog.getObjectByName(fn_str_38539,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38540)].join(''));

(fn_obj_38541.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38541.cljs$core$IFn$_invoke$arity$2(path,new_link_38514) : fn_obj_38541.call(null,path,new_link_38514));


var G__38542 = cljs.core.next(seq__38191_38530__$1);
var G__38543 = null;
var G__38544 = (0);
var G__38545 = (0);
seq__38191_38515 = G__38542;
chunk__38193_38516 = G__38543;
count__38194_38517 = G__38544;
i__38195_38518 = G__38545;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38512);
});})(seq__38135_38508,chunk__38139_38509,count__38140_38510,i__38141_38511,seq__37994,chunk__37996,count__37997,i__37998,new_link_38514,path_match_38513,node_38512,path,map__37993,map__37993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38513], 0));

goog.dom.insertSiblingAfter(new_link_38514,node_38512);


var G__38546 = seq__38135_38508;
var G__38547 = chunk__38139_38509;
var G__38548 = count__38140_38510;
var G__38549 = (i__38141_38511 + (1));
seq__38135_38508 = G__38546;
chunk__38139_38509 = G__38547;
count__38140_38510 = G__38548;
i__38141_38511 = G__38549;
continue;
} else {
var G__38550 = seq__38135_38508;
var G__38551 = chunk__38139_38509;
var G__38552 = count__38140_38510;
var G__38553 = (i__38141_38511 + (1));
seq__38135_38508 = G__38550;
chunk__38139_38509 = G__38551;
count__38140_38510 = G__38552;
i__38141_38511 = G__38553;
continue;
}
} else {
var G__38554 = seq__38135_38508;
var G__38555 = chunk__38139_38509;
var G__38556 = count__38140_38510;
var G__38557 = (i__38141_38511 + (1));
seq__38135_38508 = G__38554;
chunk__38139_38509 = G__38555;
count__38140_38510 = G__38556;
i__38141_38511 = G__38557;
continue;
}
} else {
var temp__5753__auto___38558 = cljs.core.seq(seq__38135_38508);
if(temp__5753__auto___38558){
var seq__38135_38559__$1 = temp__5753__auto___38558;
if(cljs.core.chunked_seq_QMARK_(seq__38135_38559__$1)){
var c__4679__auto___38560 = cljs.core.chunk_first(seq__38135_38559__$1);
var G__38561 = cljs.core.chunk_rest(seq__38135_38559__$1);
var G__38562 = c__4679__auto___38560;
var G__38563 = cljs.core.count(c__4679__auto___38560);
var G__38564 = (0);
seq__38135_38508 = G__38561;
chunk__38139_38509 = G__38562;
count__38140_38510 = G__38563;
i__38141_38511 = G__38564;
continue;
} else {
var node_38565 = cljs.core.first(seq__38135_38559__$1);
if(cljs.core.not(node_38565.shadow$old)){
var path_match_38566 = shadow.cljs.devtools.client.browser.match_paths(node_38565.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38566)){
var new_link_38567 = (function (){var G__38201 = node_38565.cloneNode(true);
G__38201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38566),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38201;
})();
(node_38565.shadow$old = true);

(new_link_38567.onload = ((function (seq__38135_38508,chunk__38139_38509,count__38140_38510,i__38141_38511,seq__37994,chunk__37996,count__37997,i__37998,new_link_38567,path_match_38566,node_38565,seq__38135_38559__$1,temp__5753__auto___38558,path,map__37993,map__37993__$1,msg,updates,reload_info){
return (function (e){
var seq__38202_38568 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38204_38569 = null;
var count__38205_38570 = (0);
var i__38206_38571 = (0);
while(true){
if((i__38206_38571 < count__38205_38570)){
var map__38215_38572 = chunk__38204_38569.cljs$core$IIndexed$_nth$arity$2(null,i__38206_38571);
var map__38215_38573__$1 = cljs.core.__destructure_map(map__38215_38572);
var task_38574 = map__38215_38573__$1;
var fn_str_38575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38215_38573__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38215_38573__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38577 = goog.getObjectByName(fn_str_38575,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38576)].join(''));

(fn_obj_38577.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38577.cljs$core$IFn$_invoke$arity$2(path,new_link_38567) : fn_obj_38577.call(null,path,new_link_38567));


var G__38579 = seq__38202_38568;
var G__38580 = chunk__38204_38569;
var G__38581 = count__38205_38570;
var G__38582 = (i__38206_38571 + (1));
seq__38202_38568 = G__38579;
chunk__38204_38569 = G__38580;
count__38205_38570 = G__38581;
i__38206_38571 = G__38582;
continue;
} else {
var temp__5753__auto___38583__$1 = cljs.core.seq(seq__38202_38568);
if(temp__5753__auto___38583__$1){
var seq__38202_38584__$1 = temp__5753__auto___38583__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38202_38584__$1)){
var c__4679__auto___38585 = cljs.core.chunk_first(seq__38202_38584__$1);
var G__38586 = cljs.core.chunk_rest(seq__38202_38584__$1);
var G__38587 = c__4679__auto___38585;
var G__38588 = cljs.core.count(c__4679__auto___38585);
var G__38589 = (0);
seq__38202_38568 = G__38586;
chunk__38204_38569 = G__38587;
count__38205_38570 = G__38588;
i__38206_38571 = G__38589;
continue;
} else {
var map__38216_38590 = cljs.core.first(seq__38202_38584__$1);
var map__38216_38591__$1 = cljs.core.__destructure_map(map__38216_38590);
var task_38592 = map__38216_38591__$1;
var fn_str_38593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38216_38591__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38216_38591__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38595 = goog.getObjectByName(fn_str_38593,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38594)].join(''));

(fn_obj_38595.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38595.cljs$core$IFn$_invoke$arity$2(path,new_link_38567) : fn_obj_38595.call(null,path,new_link_38567));


var G__38597 = cljs.core.next(seq__38202_38584__$1);
var G__38598 = null;
var G__38599 = (0);
var G__38600 = (0);
seq__38202_38568 = G__38597;
chunk__38204_38569 = G__38598;
count__38205_38570 = G__38599;
i__38206_38571 = G__38600;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38565);
});})(seq__38135_38508,chunk__38139_38509,count__38140_38510,i__38141_38511,seq__37994,chunk__37996,count__37997,i__37998,new_link_38567,path_match_38566,node_38565,seq__38135_38559__$1,temp__5753__auto___38558,path,map__37993,map__37993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38566], 0));

goog.dom.insertSiblingAfter(new_link_38567,node_38565);


var G__38602 = cljs.core.next(seq__38135_38559__$1);
var G__38603 = null;
var G__38604 = (0);
var G__38605 = (0);
seq__38135_38508 = G__38602;
chunk__38139_38509 = G__38603;
count__38140_38510 = G__38604;
i__38141_38511 = G__38605;
continue;
} else {
var G__38606 = cljs.core.next(seq__38135_38559__$1);
var G__38607 = null;
var G__38608 = (0);
var G__38609 = (0);
seq__38135_38508 = G__38606;
chunk__38139_38509 = G__38607;
count__38140_38510 = G__38608;
i__38141_38511 = G__38609;
continue;
}
} else {
var G__38610 = cljs.core.next(seq__38135_38559__$1);
var G__38611 = null;
var G__38612 = (0);
var G__38613 = (0);
seq__38135_38508 = G__38610;
chunk__38139_38509 = G__38611;
count__38140_38510 = G__38612;
i__38141_38511 = G__38613;
continue;
}
}
} else {
}
}
break;
}


var G__38614 = seq__37994;
var G__38615 = chunk__37996;
var G__38616 = count__37997;
var G__38617 = (i__37998 + (1));
seq__37994 = G__38614;
chunk__37996 = G__38615;
count__37997 = G__38616;
i__37998 = G__38617;
continue;
} else {
var G__38618 = seq__37994;
var G__38619 = chunk__37996;
var G__38620 = count__37997;
var G__38621 = (i__37998 + (1));
seq__37994 = G__38618;
chunk__37996 = G__38619;
count__37997 = G__38620;
i__37998 = G__38621;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37994);
if(temp__5753__auto__){
var seq__37994__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37994__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37994__$1);
var G__38622 = cljs.core.chunk_rest(seq__37994__$1);
var G__38623 = c__4679__auto__;
var G__38624 = cljs.core.count(c__4679__auto__);
var G__38625 = (0);
seq__37994 = G__38622;
chunk__37996 = G__38623;
count__37997 = G__38624;
i__37998 = G__38625;
continue;
} else {
var path = cljs.core.first(seq__37994__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38217_38626 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38221_38627 = null;
var count__38222_38628 = (0);
var i__38223_38629 = (0);
while(true){
if((i__38223_38629 < count__38222_38628)){
var node_38631 = chunk__38221_38627.cljs$core$IIndexed$_nth$arity$2(null,i__38223_38629);
if(cljs.core.not(node_38631.shadow$old)){
var path_match_38632 = shadow.cljs.devtools.client.browser.match_paths(node_38631.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38632)){
var new_link_38633 = (function (){var G__38265 = node_38631.cloneNode(true);
G__38265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38632),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38265;
})();
(node_38631.shadow$old = true);

(new_link_38633.onload = ((function (seq__38217_38626,chunk__38221_38627,count__38222_38628,i__38223_38629,seq__37994,chunk__37996,count__37997,i__37998,new_link_38633,path_match_38632,node_38631,path,seq__37994__$1,temp__5753__auto__,map__37993,map__37993__$1,msg,updates,reload_info){
return (function (e){
var seq__38269_38634 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38271_38635 = null;
var count__38272_38636 = (0);
var i__38273_38637 = (0);
while(true){
if((i__38273_38637 < count__38272_38636)){
var map__38277_38638 = chunk__38271_38635.cljs$core$IIndexed$_nth$arity$2(null,i__38273_38637);
var map__38277_38639__$1 = cljs.core.__destructure_map(map__38277_38638);
var task_38640 = map__38277_38639__$1;
var fn_str_38641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38277_38639__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38277_38639__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38644 = goog.getObjectByName(fn_str_38641,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38642)].join(''));

(fn_obj_38644.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38644.cljs$core$IFn$_invoke$arity$2(path,new_link_38633) : fn_obj_38644.call(null,path,new_link_38633));


var G__38645 = seq__38269_38634;
var G__38646 = chunk__38271_38635;
var G__38647 = count__38272_38636;
var G__38648 = (i__38273_38637 + (1));
seq__38269_38634 = G__38645;
chunk__38271_38635 = G__38646;
count__38272_38636 = G__38647;
i__38273_38637 = G__38648;
continue;
} else {
var temp__5753__auto___38649__$1 = cljs.core.seq(seq__38269_38634);
if(temp__5753__auto___38649__$1){
var seq__38269_38650__$1 = temp__5753__auto___38649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38269_38650__$1)){
var c__4679__auto___38651 = cljs.core.chunk_first(seq__38269_38650__$1);
var G__38652 = cljs.core.chunk_rest(seq__38269_38650__$1);
var G__38653 = c__4679__auto___38651;
var G__38654 = cljs.core.count(c__4679__auto___38651);
var G__38655 = (0);
seq__38269_38634 = G__38652;
chunk__38271_38635 = G__38653;
count__38272_38636 = G__38654;
i__38273_38637 = G__38655;
continue;
} else {
var map__38280_38656 = cljs.core.first(seq__38269_38650__$1);
var map__38280_38657__$1 = cljs.core.__destructure_map(map__38280_38656);
var task_38658 = map__38280_38657__$1;
var fn_str_38659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280_38657__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280_38657__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38661 = goog.getObjectByName(fn_str_38659,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38660)].join(''));

(fn_obj_38661.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38661.cljs$core$IFn$_invoke$arity$2(path,new_link_38633) : fn_obj_38661.call(null,path,new_link_38633));


var G__38662 = cljs.core.next(seq__38269_38650__$1);
var G__38663 = null;
var G__38664 = (0);
var G__38665 = (0);
seq__38269_38634 = G__38662;
chunk__38271_38635 = G__38663;
count__38272_38636 = G__38664;
i__38273_38637 = G__38665;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38631);
});})(seq__38217_38626,chunk__38221_38627,count__38222_38628,i__38223_38629,seq__37994,chunk__37996,count__37997,i__37998,new_link_38633,path_match_38632,node_38631,path,seq__37994__$1,temp__5753__auto__,map__37993,map__37993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38632], 0));

goog.dom.insertSiblingAfter(new_link_38633,node_38631);


var G__38666 = seq__38217_38626;
var G__38667 = chunk__38221_38627;
var G__38668 = count__38222_38628;
var G__38669 = (i__38223_38629 + (1));
seq__38217_38626 = G__38666;
chunk__38221_38627 = G__38667;
count__38222_38628 = G__38668;
i__38223_38629 = G__38669;
continue;
} else {
var G__38670 = seq__38217_38626;
var G__38671 = chunk__38221_38627;
var G__38672 = count__38222_38628;
var G__38673 = (i__38223_38629 + (1));
seq__38217_38626 = G__38670;
chunk__38221_38627 = G__38671;
count__38222_38628 = G__38672;
i__38223_38629 = G__38673;
continue;
}
} else {
var G__38674 = seq__38217_38626;
var G__38675 = chunk__38221_38627;
var G__38676 = count__38222_38628;
var G__38677 = (i__38223_38629 + (1));
seq__38217_38626 = G__38674;
chunk__38221_38627 = G__38675;
count__38222_38628 = G__38676;
i__38223_38629 = G__38677;
continue;
}
} else {
var temp__5753__auto___38679__$1 = cljs.core.seq(seq__38217_38626);
if(temp__5753__auto___38679__$1){
var seq__38217_38680__$1 = temp__5753__auto___38679__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38217_38680__$1)){
var c__4679__auto___38681 = cljs.core.chunk_first(seq__38217_38680__$1);
var G__38682 = cljs.core.chunk_rest(seq__38217_38680__$1);
var G__38683 = c__4679__auto___38681;
var G__38684 = cljs.core.count(c__4679__auto___38681);
var G__38685 = (0);
seq__38217_38626 = G__38682;
chunk__38221_38627 = G__38683;
count__38222_38628 = G__38684;
i__38223_38629 = G__38685;
continue;
} else {
var node_38686 = cljs.core.first(seq__38217_38680__$1);
if(cljs.core.not(node_38686.shadow$old)){
var path_match_38687 = shadow.cljs.devtools.client.browser.match_paths(node_38686.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38687)){
var new_link_38688 = (function (){var G__38282 = node_38686.cloneNode(true);
G__38282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38687),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38282;
})();
(node_38686.shadow$old = true);

(new_link_38688.onload = ((function (seq__38217_38626,chunk__38221_38627,count__38222_38628,i__38223_38629,seq__37994,chunk__37996,count__37997,i__37998,new_link_38688,path_match_38687,node_38686,seq__38217_38680__$1,temp__5753__auto___38679__$1,path,seq__37994__$1,temp__5753__auto__,map__37993,map__37993__$1,msg,updates,reload_info){
return (function (e){
var seq__38283_38695 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38285_38696 = null;
var count__38286_38697 = (0);
var i__38287_38698 = (0);
while(true){
if((i__38287_38698 < count__38286_38697)){
var map__38298_38699 = chunk__38285_38696.cljs$core$IIndexed$_nth$arity$2(null,i__38287_38698);
var map__38298_38700__$1 = cljs.core.__destructure_map(map__38298_38699);
var task_38701 = map__38298_38700__$1;
var fn_str_38702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38298_38700__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38298_38700__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38704 = goog.getObjectByName(fn_str_38702,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38703)].join(''));

(fn_obj_38704.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38704.cljs$core$IFn$_invoke$arity$2(path,new_link_38688) : fn_obj_38704.call(null,path,new_link_38688));


var G__38705 = seq__38283_38695;
var G__38706 = chunk__38285_38696;
var G__38707 = count__38286_38697;
var G__38708 = (i__38287_38698 + (1));
seq__38283_38695 = G__38705;
chunk__38285_38696 = G__38706;
count__38286_38697 = G__38707;
i__38287_38698 = G__38708;
continue;
} else {
var temp__5753__auto___38710__$2 = cljs.core.seq(seq__38283_38695);
if(temp__5753__auto___38710__$2){
var seq__38283_38711__$1 = temp__5753__auto___38710__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38283_38711__$1)){
var c__4679__auto___38712 = cljs.core.chunk_first(seq__38283_38711__$1);
var G__38713 = cljs.core.chunk_rest(seq__38283_38711__$1);
var G__38714 = c__4679__auto___38712;
var G__38715 = cljs.core.count(c__4679__auto___38712);
var G__38716 = (0);
seq__38283_38695 = G__38713;
chunk__38285_38696 = G__38714;
count__38286_38697 = G__38715;
i__38287_38698 = G__38716;
continue;
} else {
var map__38304_38717 = cljs.core.first(seq__38283_38711__$1);
var map__38304_38718__$1 = cljs.core.__destructure_map(map__38304_38717);
var task_38719 = map__38304_38718__$1;
var fn_str_38720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304_38718__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304_38718__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38722 = goog.getObjectByName(fn_str_38720,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38721)].join(''));

(fn_obj_38722.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38722.cljs$core$IFn$_invoke$arity$2(path,new_link_38688) : fn_obj_38722.call(null,path,new_link_38688));


var G__38723 = cljs.core.next(seq__38283_38711__$1);
var G__38724 = null;
var G__38725 = (0);
var G__38726 = (0);
seq__38283_38695 = G__38723;
chunk__38285_38696 = G__38724;
count__38286_38697 = G__38725;
i__38287_38698 = G__38726;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38686);
});})(seq__38217_38626,chunk__38221_38627,count__38222_38628,i__38223_38629,seq__37994,chunk__37996,count__37997,i__37998,new_link_38688,path_match_38687,node_38686,seq__38217_38680__$1,temp__5753__auto___38679__$1,path,seq__37994__$1,temp__5753__auto__,map__37993,map__37993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38687], 0));

goog.dom.insertSiblingAfter(new_link_38688,node_38686);


var G__38727 = cljs.core.next(seq__38217_38680__$1);
var G__38728 = null;
var G__38729 = (0);
var G__38730 = (0);
seq__38217_38626 = G__38727;
chunk__38221_38627 = G__38728;
count__38222_38628 = G__38729;
i__38223_38629 = G__38730;
continue;
} else {
var G__38731 = cljs.core.next(seq__38217_38680__$1);
var G__38732 = null;
var G__38733 = (0);
var G__38734 = (0);
seq__38217_38626 = G__38731;
chunk__38221_38627 = G__38732;
count__38222_38628 = G__38733;
i__38223_38629 = G__38734;
continue;
}
} else {
var G__38735 = cljs.core.next(seq__38217_38680__$1);
var G__38736 = null;
var G__38737 = (0);
var G__38738 = (0);
seq__38217_38626 = G__38735;
chunk__38221_38627 = G__38736;
count__38222_38628 = G__38737;
i__38223_38629 = G__38738;
continue;
}
}
} else {
}
}
break;
}


var G__38739 = cljs.core.next(seq__37994__$1);
var G__38740 = null;
var G__38741 = (0);
var G__38742 = (0);
seq__37994 = G__38739;
chunk__37996 = G__38740;
count__37997 = G__38741;
i__37998 = G__38742;
continue;
} else {
var G__38743 = cljs.core.next(seq__37994__$1);
var G__38744 = null;
var G__38745 = (0);
var G__38746 = (0);
seq__37994 = G__38743;
chunk__37996 = G__38744;
count__37997 = G__38745;
i__37998 = G__38746;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38314){
var map__38315 = p__38314;
var map__38315__$1 = cljs.core.__destructure_map(map__38315);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38315__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38340){
var map__38341 = p__38340;
var map__38341__$1 = cljs.core.__destructure_map(map__38341);
var _ = map__38341__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38341__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38345,done,error){
var map__38346 = p__38345;
var map__38346__$1 = cljs.core.__destructure_map(map__38346);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38346__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38358,done,error){
var map__38359 = p__38358;
var map__38359__$1 = cljs.core.__destructure_map(map__38359);
var msg = map__38359__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38359__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38359__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38359__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38360){
var map__38361 = p__38360;
var map__38361__$1 = cljs.core.__destructure_map(map__38361);
var src = map__38361__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38361__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38369 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38369) : done.call(null,G__38369));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38377){
var map__38381 = p__38377;
var map__38381__$1 = cljs.core.__destructure_map(map__38381);
var msg__$1 = map__38381__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38382){var ex = e38382;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38384){
var map__38394 = p__38384;
var map__38394__$1 = cljs.core.__destructure_map(map__38394);
var env = map__38394__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38394__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38403){
var map__38404 = p__38403;
var map__38404__$1 = cljs.core.__destructure_map(map__38404);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38404__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38404__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38422){
var map__38427 = p__38422;
var map__38427__$1 = cljs.core.__destructure_map(map__38427);
var svc = map__38427__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38427__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
