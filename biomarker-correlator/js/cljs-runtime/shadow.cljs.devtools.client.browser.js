goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___80298 = arguments.length;
var i__4865__auto___80299 = (0);
while(true){
if((i__4865__auto___80299 < len__4864__auto___80298)){
args__4870__auto__.push((arguments[i__4865__auto___80299]));

var G__80300 = (i__4865__auto___80299 + (1));
i__4865__auto___80299 = G__80300;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq79748){
var G__79750 = cljs.core.first(seq79748);
var seq79748__$1 = cljs.core.next(seq79748);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79750,seq79748__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__79758 = cljs.core.seq(sources);
var chunk__79759 = null;
var count__79760 = (0);
var i__79761 = (0);
while(true){
if((i__79761 < count__79760)){
var map__79777 = chunk__79759.cljs$core$IIndexed$_nth$arity$2(null,i__79761);
var map__79777__$1 = cljs.core.__destructure_map(map__79777);
var src = map__79777__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79777__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79777__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79777__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79777__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e79778){var e_80304 = e79778;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_80304);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_80304.message)].join('')));
}

var G__80305 = seq__79758;
var G__80306 = chunk__79759;
var G__80307 = count__79760;
var G__80308 = (i__79761 + (1));
seq__79758 = G__80305;
chunk__79759 = G__80306;
count__79760 = G__80307;
i__79761 = G__80308;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__79758);
if(temp__5753__auto__){
var seq__79758__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79758__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__79758__$1);
var G__80312 = cljs.core.chunk_rest(seq__79758__$1);
var G__80313 = c__4679__auto__;
var G__80314 = cljs.core.count(c__4679__auto__);
var G__80315 = (0);
seq__79758 = G__80312;
chunk__79759 = G__80313;
count__79760 = G__80314;
i__79761 = G__80315;
continue;
} else {
var map__79781 = cljs.core.first(seq__79758__$1);
var map__79781__$1 = cljs.core.__destructure_map(map__79781);
var src = map__79781__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79781__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79781__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79781__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e79782){var e_80317 = e79782;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_80317);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_80317.message)].join('')));
}

var G__80319 = cljs.core.next(seq__79758__$1);
var G__80320 = null;
var G__80321 = (0);
var G__80322 = (0);
seq__79758 = G__80319;
chunk__79759 = G__80320;
count__79760 = G__80321;
i__79761 = G__80322;
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
var seq__79789 = cljs.core.seq(js_requires);
var chunk__79790 = null;
var count__79791 = (0);
var i__79792 = (0);
while(true){
if((i__79792 < count__79791)){
var js_ns = chunk__79790.cljs$core$IIndexed$_nth$arity$2(null,i__79792);
var require_str_80323 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_80323);


var G__80324 = seq__79789;
var G__80325 = chunk__79790;
var G__80326 = count__79791;
var G__80327 = (i__79792 + (1));
seq__79789 = G__80324;
chunk__79790 = G__80325;
count__79791 = G__80326;
i__79792 = G__80327;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__79789);
if(temp__5753__auto__){
var seq__79789__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79789__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__79789__$1);
var G__80328 = cljs.core.chunk_rest(seq__79789__$1);
var G__80329 = c__4679__auto__;
var G__80330 = cljs.core.count(c__4679__auto__);
var G__80331 = (0);
seq__79789 = G__80328;
chunk__79790 = G__80329;
count__79791 = G__80330;
i__79792 = G__80331;
continue;
} else {
var js_ns = cljs.core.first(seq__79789__$1);
var require_str_80333 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_80333);


var G__80334 = cljs.core.next(seq__79789__$1);
var G__80335 = null;
var G__80336 = (0);
var G__80337 = (0);
seq__79789 = G__80334;
chunk__79790 = G__80335;
count__79791 = G__80336;
i__79792 = G__80337;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__79829){
var map__79830 = p__79829;
var map__79830__$1 = cljs.core.__destructure_map(map__79830);
var msg = map__79830__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79830__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79830__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79831(s__79832){
return (new cljs.core.LazySeq(null,(function (){
var s__79832__$1 = s__79832;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__79832__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__79837 = cljs.core.first(xs__6308__auto__);
var map__79837__$1 = cljs.core.__destructure_map(map__79837);
var src = map__79837__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79837__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79837__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__79832__$1,map__79837,map__79837__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__79830,map__79830__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79831_$_iter__79833(s__79834){
return (new cljs.core.LazySeq(null,((function (s__79832__$1,map__79837,map__79837__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__79830,map__79830__$1,msg,info,reload_info){
return (function (){
var s__79834__$1 = s__79834;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__79834__$1);
if(temp__5753__auto____$1){
var s__79834__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79834__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79834__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79836 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79835 = (0);
while(true){
if((i__79835 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__79835);
cljs.core.chunk_append(b__79836,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__80350 = (i__79835 + (1));
i__79835 = G__80350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79836),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79831_$_iter__79833(cljs.core.chunk_rest(s__79834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79836),null);
}
} else {
var warning = cljs.core.first(s__79834__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79831_$_iter__79833(cljs.core.rest(s__79834__$2)));
}
} else {
return null;
}
break;
}
});})(s__79832__$1,map__79837,map__79837__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__79830,map__79830__$1,msg,info,reload_info))
,null,null));
});})(s__79832__$1,map__79837,map__79837__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__79830,map__79830__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79831(cljs.core.rest(s__79832__$1)));
} else {
var G__80354 = cljs.core.rest(s__79832__$1);
s__79832__$1 = G__80354;
continue;
}
} else {
var G__80355 = cljs.core.rest(s__79832__$1);
s__79832__$1 = G__80355;
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
var seq__79861_80357 = cljs.core.seq(warnings);
var chunk__79862_80358 = null;
var count__79863_80359 = (0);
var i__79864_80360 = (0);
while(true){
if((i__79864_80360 < count__79863_80359)){
var map__79873_80362 = chunk__79862_80358.cljs$core$IIndexed$_nth$arity$2(null,i__79864_80360);
var map__79873_80363__$1 = cljs.core.__destructure_map(map__79873_80362);
var w_80364 = map__79873_80363__$1;
var msg_80365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79873_80363__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_80366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79873_80363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_80367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79873_80363__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_80368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79873_80363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_80368)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_80366),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_80367),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_80365__$1)].join(''));


var G__80369 = seq__79861_80357;
var G__80370 = chunk__79862_80358;
var G__80371 = count__79863_80359;
var G__80372 = (i__79864_80360 + (1));
seq__79861_80357 = G__80369;
chunk__79862_80358 = G__80370;
count__79863_80359 = G__80371;
i__79864_80360 = G__80372;
continue;
} else {
var temp__5753__auto___80373 = cljs.core.seq(seq__79861_80357);
if(temp__5753__auto___80373){
var seq__79861_80376__$1 = temp__5753__auto___80373;
if(cljs.core.chunked_seq_QMARK_(seq__79861_80376__$1)){
var c__4679__auto___80377 = cljs.core.chunk_first(seq__79861_80376__$1);
var G__80378 = cljs.core.chunk_rest(seq__79861_80376__$1);
var G__80379 = c__4679__auto___80377;
var G__80380 = cljs.core.count(c__4679__auto___80377);
var G__80381 = (0);
seq__79861_80357 = G__80378;
chunk__79862_80358 = G__80379;
count__79863_80359 = G__80380;
i__79864_80360 = G__80381;
continue;
} else {
var map__79879_80382 = cljs.core.first(seq__79861_80376__$1);
var map__79879_80383__$1 = cljs.core.__destructure_map(map__79879_80382);
var w_80384 = map__79879_80383__$1;
var msg_80385__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79879_80383__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_80386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79879_80383__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_80387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79879_80383__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_80388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79879_80383__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_80388)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_80386),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_80387),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_80385__$1)].join(''));


var G__80389 = cljs.core.next(seq__79861_80376__$1);
var G__80390 = null;
var G__80391 = (0);
var G__80392 = (0);
seq__79861_80357 = G__80389;
chunk__79862_80358 = G__80390;
count__79863_80359 = G__80391;
i__79864_80360 = G__80392;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__79827_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__79827_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__79881){
var map__79882 = p__79881;
var map__79882__$1 = cljs.core.__destructure_map(map__79882);
var msg = map__79882__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79882__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79882__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__79883 = cljs.core.seq(updates);
var chunk__79885 = null;
var count__79886 = (0);
var i__79887 = (0);
while(true){
if((i__79887 < count__79886)){
var path = chunk__79885.cljs$core$IIndexed$_nth$arity$2(null,i__79887);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__80025_80396 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__80029_80397 = null;
var count__80030_80398 = (0);
var i__80031_80399 = (0);
while(true){
if((i__80031_80399 < count__80030_80398)){
var node_80400 = chunk__80029_80397.cljs$core$IIndexed$_nth$arity$2(null,i__80031_80399);
if(cljs.core.not(node_80400.shadow$old)){
var path_match_80401 = shadow.cljs.devtools.client.browser.match_paths(node_80400.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80401)){
var new_link_80402 = (function (){var G__80061 = node_80400.cloneNode(true);
G__80061.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80401),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80061;
})();
(node_80400.shadow$old = true);

(new_link_80402.onload = ((function (seq__80025_80396,chunk__80029_80397,count__80030_80398,i__80031_80399,seq__79883,chunk__79885,count__79886,i__79887,new_link_80402,path_match_80401,node_80400,path,map__79882,map__79882__$1,msg,updates,reload_info){
return (function (e){
var seq__80062_80403 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80064_80404 = null;
var count__80065_80405 = (0);
var i__80066_80406 = (0);
while(true){
if((i__80066_80406 < count__80065_80405)){
var map__80072_80407 = chunk__80064_80404.cljs$core$IIndexed$_nth$arity$2(null,i__80066_80406);
var map__80072_80408__$1 = cljs.core.__destructure_map(map__80072_80407);
var task_80409 = map__80072_80408__$1;
var fn_str_80410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80072_80408__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80072_80408__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80412 = goog.getObjectByName(fn_str_80410,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80411)].join(''));

(fn_obj_80412.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80412.cljs$core$IFn$_invoke$arity$2(path,new_link_80402) : fn_obj_80412.call(null,path,new_link_80402));


var G__80413 = seq__80062_80403;
var G__80414 = chunk__80064_80404;
var G__80415 = count__80065_80405;
var G__80416 = (i__80066_80406 + (1));
seq__80062_80403 = G__80413;
chunk__80064_80404 = G__80414;
count__80065_80405 = G__80415;
i__80066_80406 = G__80416;
continue;
} else {
var temp__5753__auto___80417 = cljs.core.seq(seq__80062_80403);
if(temp__5753__auto___80417){
var seq__80062_80418__$1 = temp__5753__auto___80417;
if(cljs.core.chunked_seq_QMARK_(seq__80062_80418__$1)){
var c__4679__auto___80419 = cljs.core.chunk_first(seq__80062_80418__$1);
var G__80420 = cljs.core.chunk_rest(seq__80062_80418__$1);
var G__80421 = c__4679__auto___80419;
var G__80422 = cljs.core.count(c__4679__auto___80419);
var G__80423 = (0);
seq__80062_80403 = G__80420;
chunk__80064_80404 = G__80421;
count__80065_80405 = G__80422;
i__80066_80406 = G__80423;
continue;
} else {
var map__80076_80424 = cljs.core.first(seq__80062_80418__$1);
var map__80076_80425__$1 = cljs.core.__destructure_map(map__80076_80424);
var task_80426 = map__80076_80425__$1;
var fn_str_80427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80076_80425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80076_80425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80429 = goog.getObjectByName(fn_str_80427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80428)].join(''));

(fn_obj_80429.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80429.cljs$core$IFn$_invoke$arity$2(path,new_link_80402) : fn_obj_80429.call(null,path,new_link_80402));


var G__80430 = cljs.core.next(seq__80062_80418__$1);
var G__80431 = null;
var G__80432 = (0);
var G__80433 = (0);
seq__80062_80403 = G__80430;
chunk__80064_80404 = G__80431;
count__80065_80405 = G__80432;
i__80066_80406 = G__80433;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80400);
});})(seq__80025_80396,chunk__80029_80397,count__80030_80398,i__80031_80399,seq__79883,chunk__79885,count__79886,i__79887,new_link_80402,path_match_80401,node_80400,path,map__79882,map__79882__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80401], 0));

goog.dom.insertSiblingAfter(new_link_80402,node_80400);


var G__80438 = seq__80025_80396;
var G__80439 = chunk__80029_80397;
var G__80440 = count__80030_80398;
var G__80441 = (i__80031_80399 + (1));
seq__80025_80396 = G__80438;
chunk__80029_80397 = G__80439;
count__80030_80398 = G__80440;
i__80031_80399 = G__80441;
continue;
} else {
var G__80444 = seq__80025_80396;
var G__80445 = chunk__80029_80397;
var G__80446 = count__80030_80398;
var G__80447 = (i__80031_80399 + (1));
seq__80025_80396 = G__80444;
chunk__80029_80397 = G__80445;
count__80030_80398 = G__80446;
i__80031_80399 = G__80447;
continue;
}
} else {
var G__80448 = seq__80025_80396;
var G__80449 = chunk__80029_80397;
var G__80450 = count__80030_80398;
var G__80451 = (i__80031_80399 + (1));
seq__80025_80396 = G__80448;
chunk__80029_80397 = G__80449;
count__80030_80398 = G__80450;
i__80031_80399 = G__80451;
continue;
}
} else {
var temp__5753__auto___80452 = cljs.core.seq(seq__80025_80396);
if(temp__5753__auto___80452){
var seq__80025_80453__$1 = temp__5753__auto___80452;
if(cljs.core.chunked_seq_QMARK_(seq__80025_80453__$1)){
var c__4679__auto___80454 = cljs.core.chunk_first(seq__80025_80453__$1);
var G__80455 = cljs.core.chunk_rest(seq__80025_80453__$1);
var G__80456 = c__4679__auto___80454;
var G__80457 = cljs.core.count(c__4679__auto___80454);
var G__80458 = (0);
seq__80025_80396 = G__80455;
chunk__80029_80397 = G__80456;
count__80030_80398 = G__80457;
i__80031_80399 = G__80458;
continue;
} else {
var node_80459 = cljs.core.first(seq__80025_80453__$1);
if(cljs.core.not(node_80459.shadow$old)){
var path_match_80460 = shadow.cljs.devtools.client.browser.match_paths(node_80459.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80460)){
var new_link_80461 = (function (){var G__80077 = node_80459.cloneNode(true);
G__80077.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80460),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80077;
})();
(node_80459.shadow$old = true);

(new_link_80461.onload = ((function (seq__80025_80396,chunk__80029_80397,count__80030_80398,i__80031_80399,seq__79883,chunk__79885,count__79886,i__79887,new_link_80461,path_match_80460,node_80459,seq__80025_80453__$1,temp__5753__auto___80452,path,map__79882,map__79882__$1,msg,updates,reload_info){
return (function (e){
var seq__80078_80463 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80080_80464 = null;
var count__80081_80465 = (0);
var i__80082_80466 = (0);
while(true){
if((i__80082_80466 < count__80081_80465)){
var map__80088_80467 = chunk__80080_80464.cljs$core$IIndexed$_nth$arity$2(null,i__80082_80466);
var map__80088_80468__$1 = cljs.core.__destructure_map(map__80088_80467);
var task_80469 = map__80088_80468__$1;
var fn_str_80470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80088_80468__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80088_80468__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80472 = goog.getObjectByName(fn_str_80470,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80471)].join(''));

(fn_obj_80472.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80472.cljs$core$IFn$_invoke$arity$2(path,new_link_80461) : fn_obj_80472.call(null,path,new_link_80461));


var G__80477 = seq__80078_80463;
var G__80478 = chunk__80080_80464;
var G__80479 = count__80081_80465;
var G__80480 = (i__80082_80466 + (1));
seq__80078_80463 = G__80477;
chunk__80080_80464 = G__80478;
count__80081_80465 = G__80479;
i__80082_80466 = G__80480;
continue;
} else {
var temp__5753__auto___80481__$1 = cljs.core.seq(seq__80078_80463);
if(temp__5753__auto___80481__$1){
var seq__80078_80485__$1 = temp__5753__auto___80481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80078_80485__$1)){
var c__4679__auto___80486 = cljs.core.chunk_first(seq__80078_80485__$1);
var G__80487 = cljs.core.chunk_rest(seq__80078_80485__$1);
var G__80488 = c__4679__auto___80486;
var G__80489 = cljs.core.count(c__4679__auto___80486);
var G__80490 = (0);
seq__80078_80463 = G__80487;
chunk__80080_80464 = G__80488;
count__80081_80465 = G__80489;
i__80082_80466 = G__80490;
continue;
} else {
var map__80089_80491 = cljs.core.first(seq__80078_80485__$1);
var map__80089_80492__$1 = cljs.core.__destructure_map(map__80089_80491);
var task_80493 = map__80089_80492__$1;
var fn_str_80494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80089_80492__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80089_80492__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80496 = goog.getObjectByName(fn_str_80494,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80495)].join(''));

(fn_obj_80496.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80496.cljs$core$IFn$_invoke$arity$2(path,new_link_80461) : fn_obj_80496.call(null,path,new_link_80461));


var G__80500 = cljs.core.next(seq__80078_80485__$1);
var G__80501 = null;
var G__80502 = (0);
var G__80503 = (0);
seq__80078_80463 = G__80500;
chunk__80080_80464 = G__80501;
count__80081_80465 = G__80502;
i__80082_80466 = G__80503;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80459);
});})(seq__80025_80396,chunk__80029_80397,count__80030_80398,i__80031_80399,seq__79883,chunk__79885,count__79886,i__79887,new_link_80461,path_match_80460,node_80459,seq__80025_80453__$1,temp__5753__auto___80452,path,map__79882,map__79882__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80460], 0));

goog.dom.insertSiblingAfter(new_link_80461,node_80459);


var G__80504 = cljs.core.next(seq__80025_80453__$1);
var G__80505 = null;
var G__80506 = (0);
var G__80507 = (0);
seq__80025_80396 = G__80504;
chunk__80029_80397 = G__80505;
count__80030_80398 = G__80506;
i__80031_80399 = G__80507;
continue;
} else {
var G__80508 = cljs.core.next(seq__80025_80453__$1);
var G__80509 = null;
var G__80510 = (0);
var G__80511 = (0);
seq__80025_80396 = G__80508;
chunk__80029_80397 = G__80509;
count__80030_80398 = G__80510;
i__80031_80399 = G__80511;
continue;
}
} else {
var G__80512 = cljs.core.next(seq__80025_80453__$1);
var G__80513 = null;
var G__80514 = (0);
var G__80515 = (0);
seq__80025_80396 = G__80512;
chunk__80029_80397 = G__80513;
count__80030_80398 = G__80514;
i__80031_80399 = G__80515;
continue;
}
}
} else {
}
}
break;
}


var G__80516 = seq__79883;
var G__80517 = chunk__79885;
var G__80518 = count__79886;
var G__80519 = (i__79887 + (1));
seq__79883 = G__80516;
chunk__79885 = G__80517;
count__79886 = G__80518;
i__79887 = G__80519;
continue;
} else {
var G__80520 = seq__79883;
var G__80521 = chunk__79885;
var G__80522 = count__79886;
var G__80523 = (i__79887 + (1));
seq__79883 = G__80520;
chunk__79885 = G__80521;
count__79886 = G__80522;
i__79887 = G__80523;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__79883);
if(temp__5753__auto__){
var seq__79883__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79883__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__79883__$1);
var G__80533 = cljs.core.chunk_rest(seq__79883__$1);
var G__80534 = c__4679__auto__;
var G__80535 = cljs.core.count(c__4679__auto__);
var G__80536 = (0);
seq__79883 = G__80533;
chunk__79885 = G__80534;
count__79886 = G__80535;
i__79887 = G__80536;
continue;
} else {
var path = cljs.core.first(seq__79883__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__80096_80537 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__80100_80538 = null;
var count__80101_80539 = (0);
var i__80102_80540 = (0);
while(true){
if((i__80102_80540 < count__80101_80539)){
var node_80541 = chunk__80100_80538.cljs$core$IIndexed$_nth$arity$2(null,i__80102_80540);
if(cljs.core.not(node_80541.shadow$old)){
var path_match_80542 = shadow.cljs.devtools.client.browser.match_paths(node_80541.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80542)){
var new_link_80543 = (function (){var G__80141 = node_80541.cloneNode(true);
G__80141.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80542),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80141;
})();
(node_80541.shadow$old = true);

(new_link_80543.onload = ((function (seq__80096_80537,chunk__80100_80538,count__80101_80539,i__80102_80540,seq__79883,chunk__79885,count__79886,i__79887,new_link_80543,path_match_80542,node_80541,path,seq__79883__$1,temp__5753__auto__,map__79882,map__79882__$1,msg,updates,reload_info){
return (function (e){
var seq__80142_80544 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80144_80545 = null;
var count__80145_80546 = (0);
var i__80146_80547 = (0);
while(true){
if((i__80146_80547 < count__80145_80546)){
var map__80170_80548 = chunk__80144_80545.cljs$core$IIndexed$_nth$arity$2(null,i__80146_80547);
var map__80170_80549__$1 = cljs.core.__destructure_map(map__80170_80548);
var task_80550 = map__80170_80549__$1;
var fn_str_80551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80170_80549__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80170_80549__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80553 = goog.getObjectByName(fn_str_80551,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80552)].join(''));

(fn_obj_80553.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80553.cljs$core$IFn$_invoke$arity$2(path,new_link_80543) : fn_obj_80553.call(null,path,new_link_80543));


var G__80554 = seq__80142_80544;
var G__80555 = chunk__80144_80545;
var G__80556 = count__80145_80546;
var G__80557 = (i__80146_80547 + (1));
seq__80142_80544 = G__80554;
chunk__80144_80545 = G__80555;
count__80145_80546 = G__80556;
i__80146_80547 = G__80557;
continue;
} else {
var temp__5753__auto___80558__$1 = cljs.core.seq(seq__80142_80544);
if(temp__5753__auto___80558__$1){
var seq__80142_80559__$1 = temp__5753__auto___80558__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80142_80559__$1)){
var c__4679__auto___80560 = cljs.core.chunk_first(seq__80142_80559__$1);
var G__80561 = cljs.core.chunk_rest(seq__80142_80559__$1);
var G__80562 = c__4679__auto___80560;
var G__80563 = cljs.core.count(c__4679__auto___80560);
var G__80564 = (0);
seq__80142_80544 = G__80561;
chunk__80144_80545 = G__80562;
count__80145_80546 = G__80563;
i__80146_80547 = G__80564;
continue;
} else {
var map__80179_80565 = cljs.core.first(seq__80142_80559__$1);
var map__80179_80566__$1 = cljs.core.__destructure_map(map__80179_80565);
var task_80567 = map__80179_80566__$1;
var fn_str_80568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80179_80566__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80179_80566__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80570 = goog.getObjectByName(fn_str_80568,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80569)].join(''));

(fn_obj_80570.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80570.cljs$core$IFn$_invoke$arity$2(path,new_link_80543) : fn_obj_80570.call(null,path,new_link_80543));


var G__80571 = cljs.core.next(seq__80142_80559__$1);
var G__80572 = null;
var G__80573 = (0);
var G__80574 = (0);
seq__80142_80544 = G__80571;
chunk__80144_80545 = G__80572;
count__80145_80546 = G__80573;
i__80146_80547 = G__80574;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80541);
});})(seq__80096_80537,chunk__80100_80538,count__80101_80539,i__80102_80540,seq__79883,chunk__79885,count__79886,i__79887,new_link_80543,path_match_80542,node_80541,path,seq__79883__$1,temp__5753__auto__,map__79882,map__79882__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80542], 0));

goog.dom.insertSiblingAfter(new_link_80543,node_80541);


var G__80575 = seq__80096_80537;
var G__80576 = chunk__80100_80538;
var G__80577 = count__80101_80539;
var G__80578 = (i__80102_80540 + (1));
seq__80096_80537 = G__80575;
chunk__80100_80538 = G__80576;
count__80101_80539 = G__80577;
i__80102_80540 = G__80578;
continue;
} else {
var G__80579 = seq__80096_80537;
var G__80580 = chunk__80100_80538;
var G__80581 = count__80101_80539;
var G__80582 = (i__80102_80540 + (1));
seq__80096_80537 = G__80579;
chunk__80100_80538 = G__80580;
count__80101_80539 = G__80581;
i__80102_80540 = G__80582;
continue;
}
} else {
var G__80583 = seq__80096_80537;
var G__80584 = chunk__80100_80538;
var G__80585 = count__80101_80539;
var G__80586 = (i__80102_80540 + (1));
seq__80096_80537 = G__80583;
chunk__80100_80538 = G__80584;
count__80101_80539 = G__80585;
i__80102_80540 = G__80586;
continue;
}
} else {
var temp__5753__auto___80587__$1 = cljs.core.seq(seq__80096_80537);
if(temp__5753__auto___80587__$1){
var seq__80096_80588__$1 = temp__5753__auto___80587__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80096_80588__$1)){
var c__4679__auto___80589 = cljs.core.chunk_first(seq__80096_80588__$1);
var G__80590 = cljs.core.chunk_rest(seq__80096_80588__$1);
var G__80591 = c__4679__auto___80589;
var G__80592 = cljs.core.count(c__4679__auto___80589);
var G__80593 = (0);
seq__80096_80537 = G__80590;
chunk__80100_80538 = G__80591;
count__80101_80539 = G__80592;
i__80102_80540 = G__80593;
continue;
} else {
var node_80594 = cljs.core.first(seq__80096_80588__$1);
if(cljs.core.not(node_80594.shadow$old)){
var path_match_80595 = shadow.cljs.devtools.client.browser.match_paths(node_80594.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80595)){
var new_link_80596 = (function (){var G__80184 = node_80594.cloneNode(true);
G__80184.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80595),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80184;
})();
(node_80594.shadow$old = true);

(new_link_80596.onload = ((function (seq__80096_80537,chunk__80100_80538,count__80101_80539,i__80102_80540,seq__79883,chunk__79885,count__79886,i__79887,new_link_80596,path_match_80595,node_80594,seq__80096_80588__$1,temp__5753__auto___80587__$1,path,seq__79883__$1,temp__5753__auto__,map__79882,map__79882__$1,msg,updates,reload_info){
return (function (e){
var seq__80186_80597 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80188_80598 = null;
var count__80189_80599 = (0);
var i__80190_80600 = (0);
while(true){
if((i__80190_80600 < count__80189_80599)){
var map__80210_80601 = chunk__80188_80598.cljs$core$IIndexed$_nth$arity$2(null,i__80190_80600);
var map__80210_80602__$1 = cljs.core.__destructure_map(map__80210_80601);
var task_80603 = map__80210_80602__$1;
var fn_str_80604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80210_80602__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80210_80602__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80607 = goog.getObjectByName(fn_str_80604,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80605)].join(''));

(fn_obj_80607.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80607.cljs$core$IFn$_invoke$arity$2(path,new_link_80596) : fn_obj_80607.call(null,path,new_link_80596));


var G__80610 = seq__80186_80597;
var G__80611 = chunk__80188_80598;
var G__80612 = count__80189_80599;
var G__80613 = (i__80190_80600 + (1));
seq__80186_80597 = G__80610;
chunk__80188_80598 = G__80611;
count__80189_80599 = G__80612;
i__80190_80600 = G__80613;
continue;
} else {
var temp__5753__auto___80614__$2 = cljs.core.seq(seq__80186_80597);
if(temp__5753__auto___80614__$2){
var seq__80186_80615__$1 = temp__5753__auto___80614__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80186_80615__$1)){
var c__4679__auto___80616 = cljs.core.chunk_first(seq__80186_80615__$1);
var G__80617 = cljs.core.chunk_rest(seq__80186_80615__$1);
var G__80618 = c__4679__auto___80616;
var G__80619 = cljs.core.count(c__4679__auto___80616);
var G__80620 = (0);
seq__80186_80597 = G__80617;
chunk__80188_80598 = G__80618;
count__80189_80599 = G__80619;
i__80190_80600 = G__80620;
continue;
} else {
var map__80214_80621 = cljs.core.first(seq__80186_80615__$1);
var map__80214_80622__$1 = cljs.core.__destructure_map(map__80214_80621);
var task_80623 = map__80214_80622__$1;
var fn_str_80624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80214_80622__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80214_80622__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80626 = goog.getObjectByName(fn_str_80624,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80625)].join(''));

(fn_obj_80626.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80626.cljs$core$IFn$_invoke$arity$2(path,new_link_80596) : fn_obj_80626.call(null,path,new_link_80596));


var G__80627 = cljs.core.next(seq__80186_80615__$1);
var G__80628 = null;
var G__80629 = (0);
var G__80630 = (0);
seq__80186_80597 = G__80627;
chunk__80188_80598 = G__80628;
count__80189_80599 = G__80629;
i__80190_80600 = G__80630;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80594);
});})(seq__80096_80537,chunk__80100_80538,count__80101_80539,i__80102_80540,seq__79883,chunk__79885,count__79886,i__79887,new_link_80596,path_match_80595,node_80594,seq__80096_80588__$1,temp__5753__auto___80587__$1,path,seq__79883__$1,temp__5753__auto__,map__79882,map__79882__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80595], 0));

goog.dom.insertSiblingAfter(new_link_80596,node_80594);


var G__80631 = cljs.core.next(seq__80096_80588__$1);
var G__80632 = null;
var G__80633 = (0);
var G__80634 = (0);
seq__80096_80537 = G__80631;
chunk__80100_80538 = G__80632;
count__80101_80539 = G__80633;
i__80102_80540 = G__80634;
continue;
} else {
var G__80635 = cljs.core.next(seq__80096_80588__$1);
var G__80636 = null;
var G__80637 = (0);
var G__80638 = (0);
seq__80096_80537 = G__80635;
chunk__80100_80538 = G__80636;
count__80101_80539 = G__80637;
i__80102_80540 = G__80638;
continue;
}
} else {
var G__80639 = cljs.core.next(seq__80096_80588__$1);
var G__80640 = null;
var G__80641 = (0);
var G__80642 = (0);
seq__80096_80537 = G__80639;
chunk__80100_80538 = G__80640;
count__80101_80539 = G__80641;
i__80102_80540 = G__80642;
continue;
}
}
} else {
}
}
break;
}


var G__80643 = cljs.core.next(seq__79883__$1);
var G__80644 = null;
var G__80645 = (0);
var G__80646 = (0);
seq__79883 = G__80643;
chunk__79885 = G__80644;
count__79886 = G__80645;
i__79887 = G__80646;
continue;
} else {
var G__80647 = cljs.core.next(seq__79883__$1);
var G__80648 = null;
var G__80649 = (0);
var G__80650 = (0);
seq__79883 = G__80647;
chunk__79885 = G__80648;
count__79886 = G__80649;
i__79887 = G__80650;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__80219){
var map__80221 = p__80219;
var map__80221__$1 = cljs.core.__destructure_map(map__80221);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80221__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__80248){
var map__80249 = p__80248;
var map__80249__$1 = cljs.core.__destructure_map(map__80249);
var _ = map__80249__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80249__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__80252,done,error){
var map__80253 = p__80252;
var map__80253__$1 = cljs.core.__destructure_map(map__80253);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80253__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__80258,done,error){
var map__80259 = p__80258;
var map__80259__$1 = cljs.core.__destructure_map(map__80259);
var msg = map__80259__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80259__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80259__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80259__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__80260){
var map__80262 = p__80260;
var map__80262__$1 = cljs.core.__destructure_map(map__80262);
var src = map__80262__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80262__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__80265 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__80265) : done.call(null,G__80265));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__80269){
var map__80270 = p__80269;
var map__80270__$1 = cljs.core.__destructure_map(map__80270);
var msg__$1 = map__80270__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80270__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e80271){var ex = e80271;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__80272){
var map__80273 = p__80272;
var map__80273__$1 = cljs.core.__destructure_map(map__80273);
var env = map__80273__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__80284){
var map__80285 = p__80284;
var map__80285__$1 = cljs.core.__destructure_map(map__80285);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80285__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80285__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__80290){
var map__80291 = p__80290;
var map__80291__$1 = cljs.core.__destructure_map(map__80291);
var svc = map__80291__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80291__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
