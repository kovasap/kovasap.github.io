goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40039 = arguments.length;
var i__4819__auto___40040 = (0);
while(true){
if((i__4819__auto___40040 < len__4818__auto___40039)){
args__4824__auto__.push((arguments[i__4819__auto___40040]));

var G__40041 = (i__4819__auto___40040 + (1));
i__4819__auto___40040 = G__40041;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39799){
var G__39800 = cljs.core.first(seq39799);
var seq39799__$1 = cljs.core.next(seq39799);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39800,seq39799__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39805 = cljs.core.seq(sources);
var chunk__39806 = null;
var count__39807 = (0);
var i__39808 = (0);
while(true){
if((i__39808 < count__39807)){
var map__39817 = chunk__39806.cljs$core$IIndexed$_nth$arity$2(null,i__39808);
var map__39817__$1 = cljs.core.__destructure_map(map__39817);
var src = map__39817__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39817__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39817__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39817__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39818){var e_40047 = e39818;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40047);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40047.message)].join('')));
}

var G__40051 = seq__39805;
var G__40052 = chunk__39806;
var G__40053 = count__39807;
var G__40054 = (i__39808 + (1));
seq__39805 = G__40051;
chunk__39806 = G__40052;
count__39807 = G__40053;
i__39808 = G__40054;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39805);
if(temp__5753__auto__){
var seq__39805__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39805__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39805__$1);
var G__40058 = cljs.core.chunk_rest(seq__39805__$1);
var G__40059 = c__4638__auto__;
var G__40060 = cljs.core.count(c__4638__auto__);
var G__40061 = (0);
seq__39805 = G__40058;
chunk__39806 = G__40059;
count__39807 = G__40060;
i__39808 = G__40061;
continue;
} else {
var map__39819 = cljs.core.first(seq__39805__$1);
var map__39819__$1 = cljs.core.__destructure_map(map__39819);
var src = map__39819__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39820){var e_40062 = e39820;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40062);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40062.message)].join('')));
}

var G__40063 = cljs.core.next(seq__39805__$1);
var G__40064 = null;
var G__40065 = (0);
var G__40066 = (0);
seq__39805 = G__40063;
chunk__39806 = G__40064;
count__39807 = G__40065;
i__39808 = G__40066;
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
var seq__39821 = cljs.core.seq(js_requires);
var chunk__39822 = null;
var count__39823 = (0);
var i__39824 = (0);
while(true){
if((i__39824 < count__39823)){
var js_ns = chunk__39822.cljs$core$IIndexed$_nth$arity$2(null,i__39824);
var require_str_40069 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40069);


var G__40070 = seq__39821;
var G__40071 = chunk__39822;
var G__40072 = count__39823;
var G__40073 = (i__39824 + (1));
seq__39821 = G__40070;
chunk__39822 = G__40071;
count__39823 = G__40072;
i__39824 = G__40073;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39821);
if(temp__5753__auto__){
var seq__39821__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39821__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39821__$1);
var G__40074 = cljs.core.chunk_rest(seq__39821__$1);
var G__40075 = c__4638__auto__;
var G__40076 = cljs.core.count(c__4638__auto__);
var G__40077 = (0);
seq__39821 = G__40074;
chunk__39822 = G__40075;
count__39823 = G__40076;
i__39824 = G__40077;
continue;
} else {
var js_ns = cljs.core.first(seq__39821__$1);
var require_str_40078 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40078);


var G__40079 = cljs.core.next(seq__39821__$1);
var G__40080 = null;
var G__40081 = (0);
var G__40082 = (0);
seq__39821 = G__40079;
chunk__39822 = G__40080;
count__39823 = G__40081;
i__39824 = G__40082;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39831){
var map__39833 = p__39831;
var map__39833__$1 = cljs.core.__destructure_map(map__39833);
var msg = map__39833__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39833__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39833__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39834(s__39835){
return (new cljs.core.LazySeq(null,(function (){
var s__39835__$1 = s__39835;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39835__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__39840 = cljs.core.first(xs__6308__auto__);
var map__39840__$1 = cljs.core.__destructure_map(map__39840);
var src = map__39840__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__39835__$1,map__39840,map__39840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39833,map__39833__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39834_$_iter__39836(s__39837){
return (new cljs.core.LazySeq(null,((function (s__39835__$1,map__39840,map__39840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39833,map__39833__$1,msg,info,reload_info){
return (function (){
var s__39837__$1 = s__39837;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39837__$1);
if(temp__5753__auto____$1){
var s__39837__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39837__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39837__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39839 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39838 = (0);
while(true){
if((i__39838 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__39838);
cljs.core.chunk_append(b__39839,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40088 = (i__39838 + (1));
i__39838 = G__40088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39839),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39834_$_iter__39836(cljs.core.chunk_rest(s__39837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39839),null);
}
} else {
var warning = cljs.core.first(s__39837__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39834_$_iter__39836(cljs.core.rest(s__39837__$2)));
}
} else {
return null;
}
break;
}
});})(s__39835__$1,map__39840,map__39840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39833,map__39833__$1,msg,info,reload_info))
,null,null));
});})(s__39835__$1,map__39840,map__39840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39833,map__39833__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39834(cljs.core.rest(s__39835__$1)));
} else {
var G__40091 = cljs.core.rest(s__39835__$1);
s__39835__$1 = G__40091;
continue;
}
} else {
var G__40092 = cljs.core.rest(s__39835__$1);
s__39835__$1 = G__40092;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39842_40093 = cljs.core.seq(warnings);
var chunk__39843_40094 = null;
var count__39844_40095 = (0);
var i__39845_40096 = (0);
while(true){
if((i__39845_40096 < count__39844_40095)){
var map__39851_40097 = chunk__39843_40094.cljs$core$IIndexed$_nth$arity$2(null,i__39845_40096);
var map__39851_40098__$1 = cljs.core.__destructure_map(map__39851_40097);
var w_40099 = map__39851_40098__$1;
var msg_40100__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39851_40098__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39851_40098__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39851_40098__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39851_40098__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40103)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40101),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40102),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40100__$1)].join(''));


var G__40104 = seq__39842_40093;
var G__40105 = chunk__39843_40094;
var G__40106 = count__39844_40095;
var G__40107 = (i__39845_40096 + (1));
seq__39842_40093 = G__40104;
chunk__39843_40094 = G__40105;
count__39844_40095 = G__40106;
i__39845_40096 = G__40107;
continue;
} else {
var temp__5753__auto___40108 = cljs.core.seq(seq__39842_40093);
if(temp__5753__auto___40108){
var seq__39842_40109__$1 = temp__5753__auto___40108;
if(cljs.core.chunked_seq_QMARK_(seq__39842_40109__$1)){
var c__4638__auto___40110 = cljs.core.chunk_first(seq__39842_40109__$1);
var G__40111 = cljs.core.chunk_rest(seq__39842_40109__$1);
var G__40112 = c__4638__auto___40110;
var G__40113 = cljs.core.count(c__4638__auto___40110);
var G__40114 = (0);
seq__39842_40093 = G__40111;
chunk__39843_40094 = G__40112;
count__39844_40095 = G__40113;
i__39845_40096 = G__40114;
continue;
} else {
var map__39852_40115 = cljs.core.first(seq__39842_40109__$1);
var map__39852_40116__$1 = cljs.core.__destructure_map(map__39852_40115);
var w_40117 = map__39852_40116__$1;
var msg_40118__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852_40116__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852_40116__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852_40116__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852_40116__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40121)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40119),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40120),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40118__$1)].join(''));


var G__40123 = cljs.core.next(seq__39842_40109__$1);
var G__40124 = null;
var G__40125 = (0);
var G__40126 = (0);
seq__39842_40093 = G__40123;
chunk__39843_40094 = G__40124;
count__39844_40095 = G__40125;
i__39845_40096 = G__40126;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39830_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39830_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39861){
var map__39862 = p__39861;
var map__39862__$1 = cljs.core.__destructure_map(map__39862);
var msg = map__39862__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39862__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39864 = cljs.core.seq(updates);
var chunk__39866 = null;
var count__39867 = (0);
var i__39868 = (0);
while(true){
if((i__39868 < count__39867)){
var path = chunk__39866.cljs$core$IIndexed$_nth$arity$2(null,i__39868);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39916_40130 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39920_40131 = null;
var count__39921_40132 = (0);
var i__39922_40133 = (0);
while(true){
if((i__39922_40133 < count__39921_40132)){
var node_40134 = chunk__39920_40131.cljs$core$IIndexed$_nth$arity$2(null,i__39922_40133);
if(cljs.core.not(node_40134.shadow$old)){
var path_match_40136 = shadow.cljs.devtools.client.browser.match_paths(node_40134.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40136)){
var new_link_40137 = (function (){var G__39931 = node_40134.cloneNode(true);
G__39931.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40136),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39931;
})();
(node_40134.shadow$old = true);

(new_link_40137.onload = ((function (seq__39916_40130,chunk__39920_40131,count__39921_40132,i__39922_40133,seq__39864,chunk__39866,count__39867,i__39868,new_link_40137,path_match_40136,node_40134,path,map__39862,map__39862__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40134);
});})(seq__39916_40130,chunk__39920_40131,count__39921_40132,i__39922_40133,seq__39864,chunk__39866,count__39867,i__39868,new_link_40137,path_match_40136,node_40134,path,map__39862,map__39862__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40136], 0));

goog.dom.insertSiblingAfter(new_link_40137,node_40134);


var G__40138 = seq__39916_40130;
var G__40139 = chunk__39920_40131;
var G__40140 = count__39921_40132;
var G__40141 = (i__39922_40133 + (1));
seq__39916_40130 = G__40138;
chunk__39920_40131 = G__40139;
count__39921_40132 = G__40140;
i__39922_40133 = G__40141;
continue;
} else {
var G__40142 = seq__39916_40130;
var G__40143 = chunk__39920_40131;
var G__40144 = count__39921_40132;
var G__40145 = (i__39922_40133 + (1));
seq__39916_40130 = G__40142;
chunk__39920_40131 = G__40143;
count__39921_40132 = G__40144;
i__39922_40133 = G__40145;
continue;
}
} else {
var G__40146 = seq__39916_40130;
var G__40147 = chunk__39920_40131;
var G__40148 = count__39921_40132;
var G__40149 = (i__39922_40133 + (1));
seq__39916_40130 = G__40146;
chunk__39920_40131 = G__40147;
count__39921_40132 = G__40148;
i__39922_40133 = G__40149;
continue;
}
} else {
var temp__5753__auto___40150 = cljs.core.seq(seq__39916_40130);
if(temp__5753__auto___40150){
var seq__39916_40151__$1 = temp__5753__auto___40150;
if(cljs.core.chunked_seq_QMARK_(seq__39916_40151__$1)){
var c__4638__auto___40152 = cljs.core.chunk_first(seq__39916_40151__$1);
var G__40153 = cljs.core.chunk_rest(seq__39916_40151__$1);
var G__40154 = c__4638__auto___40152;
var G__40155 = cljs.core.count(c__4638__auto___40152);
var G__40156 = (0);
seq__39916_40130 = G__40153;
chunk__39920_40131 = G__40154;
count__39921_40132 = G__40155;
i__39922_40133 = G__40156;
continue;
} else {
var node_40157 = cljs.core.first(seq__39916_40151__$1);
if(cljs.core.not(node_40157.shadow$old)){
var path_match_40158 = shadow.cljs.devtools.client.browser.match_paths(node_40157.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40158)){
var new_link_40159 = (function (){var G__39932 = node_40157.cloneNode(true);
G__39932.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40158),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39932;
})();
(node_40157.shadow$old = true);

(new_link_40159.onload = ((function (seq__39916_40130,chunk__39920_40131,count__39921_40132,i__39922_40133,seq__39864,chunk__39866,count__39867,i__39868,new_link_40159,path_match_40158,node_40157,seq__39916_40151__$1,temp__5753__auto___40150,path,map__39862,map__39862__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40157);
});})(seq__39916_40130,chunk__39920_40131,count__39921_40132,i__39922_40133,seq__39864,chunk__39866,count__39867,i__39868,new_link_40159,path_match_40158,node_40157,seq__39916_40151__$1,temp__5753__auto___40150,path,map__39862,map__39862__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40158], 0));

goog.dom.insertSiblingAfter(new_link_40159,node_40157);


var G__40162 = cljs.core.next(seq__39916_40151__$1);
var G__40163 = null;
var G__40164 = (0);
var G__40165 = (0);
seq__39916_40130 = G__40162;
chunk__39920_40131 = G__40163;
count__39921_40132 = G__40164;
i__39922_40133 = G__40165;
continue;
} else {
var G__40166 = cljs.core.next(seq__39916_40151__$1);
var G__40167 = null;
var G__40168 = (0);
var G__40169 = (0);
seq__39916_40130 = G__40166;
chunk__39920_40131 = G__40167;
count__39921_40132 = G__40168;
i__39922_40133 = G__40169;
continue;
}
} else {
var G__40170 = cljs.core.next(seq__39916_40151__$1);
var G__40171 = null;
var G__40172 = (0);
var G__40173 = (0);
seq__39916_40130 = G__40170;
chunk__39920_40131 = G__40171;
count__39921_40132 = G__40172;
i__39922_40133 = G__40173;
continue;
}
}
} else {
}
}
break;
}


var G__40174 = seq__39864;
var G__40175 = chunk__39866;
var G__40176 = count__39867;
var G__40177 = (i__39868 + (1));
seq__39864 = G__40174;
chunk__39866 = G__40175;
count__39867 = G__40176;
i__39868 = G__40177;
continue;
} else {
var G__40179 = seq__39864;
var G__40180 = chunk__39866;
var G__40181 = count__39867;
var G__40182 = (i__39868 + (1));
seq__39864 = G__40179;
chunk__39866 = G__40180;
count__39867 = G__40181;
i__39868 = G__40182;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39864);
if(temp__5753__auto__){
var seq__39864__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39864__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39864__$1);
var G__40184 = cljs.core.chunk_rest(seq__39864__$1);
var G__40185 = c__4638__auto__;
var G__40186 = cljs.core.count(c__4638__auto__);
var G__40187 = (0);
seq__39864 = G__40184;
chunk__39866 = G__40185;
count__39867 = G__40186;
i__39868 = G__40187;
continue;
} else {
var path = cljs.core.first(seq__39864__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39933_40188 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39937_40189 = null;
var count__39938_40190 = (0);
var i__39939_40191 = (0);
while(true){
if((i__39939_40191 < count__39938_40190)){
var node_40192 = chunk__39937_40189.cljs$core$IIndexed$_nth$arity$2(null,i__39939_40191);
if(cljs.core.not(node_40192.shadow$old)){
var path_match_40193 = shadow.cljs.devtools.client.browser.match_paths(node_40192.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40193)){
var new_link_40194 = (function (){var G__39946 = node_40192.cloneNode(true);
G__39946.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40193),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39946;
})();
(node_40192.shadow$old = true);

(new_link_40194.onload = ((function (seq__39933_40188,chunk__39937_40189,count__39938_40190,i__39939_40191,seq__39864,chunk__39866,count__39867,i__39868,new_link_40194,path_match_40193,node_40192,path,seq__39864__$1,temp__5753__auto__,map__39862,map__39862__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40192);
});})(seq__39933_40188,chunk__39937_40189,count__39938_40190,i__39939_40191,seq__39864,chunk__39866,count__39867,i__39868,new_link_40194,path_match_40193,node_40192,path,seq__39864__$1,temp__5753__auto__,map__39862,map__39862__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40193], 0));

goog.dom.insertSiblingAfter(new_link_40194,node_40192);


var G__40196 = seq__39933_40188;
var G__40197 = chunk__39937_40189;
var G__40198 = count__39938_40190;
var G__40199 = (i__39939_40191 + (1));
seq__39933_40188 = G__40196;
chunk__39937_40189 = G__40197;
count__39938_40190 = G__40198;
i__39939_40191 = G__40199;
continue;
} else {
var G__40200 = seq__39933_40188;
var G__40201 = chunk__39937_40189;
var G__40202 = count__39938_40190;
var G__40203 = (i__39939_40191 + (1));
seq__39933_40188 = G__40200;
chunk__39937_40189 = G__40201;
count__39938_40190 = G__40202;
i__39939_40191 = G__40203;
continue;
}
} else {
var G__40204 = seq__39933_40188;
var G__40205 = chunk__39937_40189;
var G__40206 = count__39938_40190;
var G__40207 = (i__39939_40191 + (1));
seq__39933_40188 = G__40204;
chunk__39937_40189 = G__40205;
count__39938_40190 = G__40206;
i__39939_40191 = G__40207;
continue;
}
} else {
var temp__5753__auto___40208__$1 = cljs.core.seq(seq__39933_40188);
if(temp__5753__auto___40208__$1){
var seq__39933_40209__$1 = temp__5753__auto___40208__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39933_40209__$1)){
var c__4638__auto___40210 = cljs.core.chunk_first(seq__39933_40209__$1);
var G__40211 = cljs.core.chunk_rest(seq__39933_40209__$1);
var G__40212 = c__4638__auto___40210;
var G__40213 = cljs.core.count(c__4638__auto___40210);
var G__40214 = (0);
seq__39933_40188 = G__40211;
chunk__39937_40189 = G__40212;
count__39938_40190 = G__40213;
i__39939_40191 = G__40214;
continue;
} else {
var node_40215 = cljs.core.first(seq__39933_40209__$1);
if(cljs.core.not(node_40215.shadow$old)){
var path_match_40217 = shadow.cljs.devtools.client.browser.match_paths(node_40215.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40217)){
var new_link_40218 = (function (){var G__39948 = node_40215.cloneNode(true);
G__39948.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40217),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39948;
})();
(node_40215.shadow$old = true);

(new_link_40218.onload = ((function (seq__39933_40188,chunk__39937_40189,count__39938_40190,i__39939_40191,seq__39864,chunk__39866,count__39867,i__39868,new_link_40218,path_match_40217,node_40215,seq__39933_40209__$1,temp__5753__auto___40208__$1,path,seq__39864__$1,temp__5753__auto__,map__39862,map__39862__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40215);
});})(seq__39933_40188,chunk__39937_40189,count__39938_40190,i__39939_40191,seq__39864,chunk__39866,count__39867,i__39868,new_link_40218,path_match_40217,node_40215,seq__39933_40209__$1,temp__5753__auto___40208__$1,path,seq__39864__$1,temp__5753__auto__,map__39862,map__39862__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40217], 0));

goog.dom.insertSiblingAfter(new_link_40218,node_40215);


var G__40220 = cljs.core.next(seq__39933_40209__$1);
var G__40221 = null;
var G__40222 = (0);
var G__40223 = (0);
seq__39933_40188 = G__40220;
chunk__39937_40189 = G__40221;
count__39938_40190 = G__40222;
i__39939_40191 = G__40223;
continue;
} else {
var G__40224 = cljs.core.next(seq__39933_40209__$1);
var G__40225 = null;
var G__40226 = (0);
var G__40227 = (0);
seq__39933_40188 = G__40224;
chunk__39937_40189 = G__40225;
count__39938_40190 = G__40226;
i__39939_40191 = G__40227;
continue;
}
} else {
var G__40228 = cljs.core.next(seq__39933_40209__$1);
var G__40229 = null;
var G__40230 = (0);
var G__40231 = (0);
seq__39933_40188 = G__40228;
chunk__39937_40189 = G__40229;
count__39938_40190 = G__40230;
i__39939_40191 = G__40231;
continue;
}
}
} else {
}
}
break;
}


var G__40232 = cljs.core.next(seq__39864__$1);
var G__40233 = null;
var G__40234 = (0);
var G__40235 = (0);
seq__39864 = G__40232;
chunk__39866 = G__40233;
count__39867 = G__40234;
i__39868 = G__40235;
continue;
} else {
var G__40236 = cljs.core.next(seq__39864__$1);
var G__40237 = null;
var G__40238 = (0);
var G__40239 = (0);
seq__39864 = G__40236;
chunk__39866 = G__40237;
count__39867 = G__40238;
i__39868 = G__40239;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39953){
var map__39955 = p__39953;
var map__39955__$1 = cljs.core.__destructure_map(map__39955);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39962){
var map__39963 = p__39962;
var map__39963__$1 = cljs.core.__destructure_map(map__39963);
var _ = map__39963__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39964,done,error){
var map__39965 = p__39964;
var map__39965__$1 = cljs.core.__destructure_map(map__39965);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39965__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39969,done,error){
var map__39970 = p__39969;
var map__39970__$1 = cljs.core.__destructure_map(map__39970);
var msg = map__39970__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39972){
var map__39973 = p__39972;
var map__39973__$1 = cljs.core.__destructure_map(map__39973);
var src = map__39973__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39973__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39982 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39982) : done.call(null,G__39982));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39986){
var map__39987 = p__39986;
var map__39987__$1 = cljs.core.__destructure_map(map__39987);
var msg__$1 = map__39987__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39987__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39991){var ex = e39991;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39995){
var map__39996 = p__39995;
var map__39996__$1 = cljs.core.__destructure_map(map__39996);
var env = map__39996__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39996__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40012){
var map__40013 = p__40012;
var map__40013__$1 = cljs.core.__destructure_map(map__40013);
var msg = map__40013__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40013__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40020){
var map__40021 = p__40020;
var map__40021__$1 = cljs.core.__destructure_map(map__40021);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40021__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40021__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40025){
var map__40027 = p__40025;
var map__40027__$1 = cljs.core.__destructure_map(map__40027);
var svc = map__40027__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40027__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
