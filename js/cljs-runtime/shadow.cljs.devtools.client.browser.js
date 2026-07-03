goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39169 = arguments.length;
var i__5770__auto___39170 = (0);
while(true){
if((i__5770__auto___39170 < len__5769__auto___39169)){
args__5775__auto__.push((arguments[i__5770__auto___39170]));

var G__39171 = (i__5770__auto___39170 + (1));
i__5770__auto___39170 = G__39171;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38564){
var G__38565 = cljs.core.first(seq38564);
var seq38564__$1 = cljs.core.next(seq38564);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38565,seq38564__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38572 = cljs.core.seq(sources);
var chunk__38573 = null;
var count__38574 = (0);
var i__38575 = (0);
while(true){
if((i__38575 < count__38574)){
var map__38582 = chunk__38573.cljs$core$IIndexed$_nth$arity$2(null,i__38575);
var map__38582__$1 = cljs.core.__destructure_map(map__38582);
var src = map__38582__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38583){var e_39178 = e38583;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39178);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39178.message)].join('')));
}

var G__39179 = seq__38572;
var G__39180 = chunk__38573;
var G__39181 = count__38574;
var G__39182 = (i__38575 + (1));
seq__38572 = G__39179;
chunk__38573 = G__39180;
count__38574 = G__39181;
i__38575 = G__39182;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38572);
if(temp__5823__auto__){
var seq__38572__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38572__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38572__$1);
var G__39183 = cljs.core.chunk_rest(seq__38572__$1);
var G__39184 = c__5568__auto__;
var G__39185 = cljs.core.count(c__5568__auto__);
var G__39186 = (0);
seq__38572 = G__39183;
chunk__38573 = G__39184;
count__38574 = G__39185;
i__38575 = G__39186;
continue;
} else {
var map__38585 = cljs.core.first(seq__38572__$1);
var map__38585__$1 = cljs.core.__destructure_map(map__38585);
var src = map__38585__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38586){var e_39191 = e38586;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39191);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39191.message)].join('')));
}

var G__39192 = cljs.core.next(seq__38572__$1);
var G__39193 = null;
var G__39194 = (0);
var G__39195 = (0);
seq__38572 = G__39192;
chunk__38573 = G__39193;
count__38574 = G__39194;
i__38575 = G__39195;
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
var seq__38596 = cljs.core.seq(js_requires);
var chunk__38597 = null;
var count__38598 = (0);
var i__38599 = (0);
while(true){
if((i__38599 < count__38598)){
var js_ns = chunk__38597.cljs$core$IIndexed$_nth$arity$2(null,i__38599);
var require_str_39196 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39196);


var G__39197 = seq__38596;
var G__39198 = chunk__38597;
var G__39199 = count__38598;
var G__39200 = (i__38599 + (1));
seq__38596 = G__39197;
chunk__38597 = G__39198;
count__38598 = G__39199;
i__38599 = G__39200;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38596);
if(temp__5823__auto__){
var seq__38596__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38596__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38596__$1);
var G__39204 = cljs.core.chunk_rest(seq__38596__$1);
var G__39205 = c__5568__auto__;
var G__39206 = cljs.core.count(c__5568__auto__);
var G__39207 = (0);
seq__38596 = G__39204;
chunk__38597 = G__39205;
count__38598 = G__39206;
i__38599 = G__39207;
continue;
} else {
var js_ns = cljs.core.first(seq__38596__$1);
var require_str_39208 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39208);


var G__39209 = cljs.core.next(seq__38596__$1);
var G__39210 = null;
var G__39211 = (0);
var G__39212 = (0);
seq__38596 = G__39209;
chunk__38597 = G__39210;
count__38598 = G__39211;
i__38599 = G__39212;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38606){
var map__38607 = p__38606;
var map__38607__$1 = cljs.core.__destructure_map(map__38607);
var msg = map__38607__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38611(s__38612){
return (new cljs.core.LazySeq(null,(function (){
var s__38612__$1 = s__38612;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38612__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__38617 = cljs.core.first(xs__6383__auto__);
var map__38617__$1 = cljs.core.__destructure_map(map__38617);
var src = map__38617__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38612__$1,map__38617,map__38617__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38607,map__38607__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38611_$_iter__38613(s__38614){
return (new cljs.core.LazySeq(null,((function (s__38612__$1,map__38617,map__38617__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38607,map__38607__$1,msg,info,reload_info){
return (function (){
var s__38614__$1 = s__38614;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38614__$1);
if(temp__5823__auto____$1){
var s__38614__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38614__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38614__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38616 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38615 = (0);
while(true){
if((i__38615 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38615);
cljs.core.chunk_append(b__38616,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39216 = (i__38615 + (1));
i__38615 = G__39216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38616),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38611_$_iter__38613(cljs.core.chunk_rest(s__38614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38616),null);
}
} else {
var warning = cljs.core.first(s__38614__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38611_$_iter__38613(cljs.core.rest(s__38614__$2)));
}
} else {
return null;
}
break;
}
});})(s__38612__$1,map__38617,map__38617__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38607,map__38607__$1,msg,info,reload_info))
,null,null));
});})(s__38612__$1,map__38617,map__38617__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38607,map__38607__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38611(cljs.core.rest(s__38612__$1)));
} else {
var G__39218 = cljs.core.rest(s__38612__$1);
s__38612__$1 = G__39218;
continue;
}
} else {
var G__39219 = cljs.core.rest(s__38612__$1);
s__38612__$1 = G__39219;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38620_39220 = cljs.core.seq(warnings);
var chunk__38621_39221 = null;
var count__38622_39222 = (0);
var i__38623_39223 = (0);
while(true){
if((i__38623_39223 < count__38622_39222)){
var map__38627_39224 = chunk__38621_39221.cljs$core$IIndexed$_nth$arity$2(null,i__38623_39223);
var map__38627_39225__$1 = cljs.core.__destructure_map(map__38627_39224);
var w_39226 = map__38627_39225__$1;
var msg_39227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39225__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39225__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39225__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39230)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39228),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39229),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39227__$1)].join(''));


var G__39231 = seq__38620_39220;
var G__39232 = chunk__38621_39221;
var G__39233 = count__38622_39222;
var G__39234 = (i__38623_39223 + (1));
seq__38620_39220 = G__39231;
chunk__38621_39221 = G__39232;
count__38622_39222 = G__39233;
i__38623_39223 = G__39234;
continue;
} else {
var temp__5823__auto___39235 = cljs.core.seq(seq__38620_39220);
if(temp__5823__auto___39235){
var seq__38620_39236__$1 = temp__5823__auto___39235;
if(cljs.core.chunked_seq_QMARK_(seq__38620_39236__$1)){
var c__5568__auto___39237 = cljs.core.chunk_first(seq__38620_39236__$1);
var G__39238 = cljs.core.chunk_rest(seq__38620_39236__$1);
var G__39239 = c__5568__auto___39237;
var G__39240 = cljs.core.count(c__5568__auto___39237);
var G__39241 = (0);
seq__38620_39220 = G__39238;
chunk__38621_39221 = G__39239;
count__38622_39222 = G__39240;
i__38623_39223 = G__39241;
continue;
} else {
var map__38630_39242 = cljs.core.first(seq__38620_39236__$1);
var map__38630_39243__$1 = cljs.core.__destructure_map(map__38630_39242);
var w_39244 = map__38630_39243__$1;
var msg_39245__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630_39243__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630_39243__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630_39243__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630_39243__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39248)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39246),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39247),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39245__$1)].join(''));


var G__39249 = cljs.core.next(seq__38620_39236__$1);
var G__39250 = null;
var G__39251 = (0);
var G__39252 = (0);
seq__38620_39220 = G__39249;
chunk__38621_39221 = G__39250;
count__38622_39222 = G__39251;
i__38623_39223 = G__39252;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38605_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38605_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38692){
var map__38693 = p__38692;
var map__38693__$1 = cljs.core.__destructure_map(map__38693);
var msg = map__38693__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38693__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38693__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38695 = cljs.core.seq(updates);
var chunk__38697 = null;
var count__38698 = (0);
var i__38699 = (0);
while(true){
if((i__38699 < count__38698)){
var path = chunk__38697.cljs$core$IIndexed$_nth$arity$2(null,i__38699);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38865_39253 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38869_39254 = null;
var count__38870_39255 = (0);
var i__38871_39256 = (0);
while(true){
if((i__38871_39256 < count__38870_39255)){
var node_39257 = chunk__38869_39254.cljs$core$IIndexed$_nth$arity$2(null,i__38871_39256);
if(cljs.core.not(node_39257.shadow$old)){
var path_match_39258 = shadow.cljs.devtools.client.browser.match_paths(node_39257.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39258)){
var new_link_39259 = (function (){var G__38934 = node_39257.cloneNode(true);
G__38934.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39258),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38934;
})();
(node_39257.shadow$old = true);

(new_link_39259.onload = ((function (seq__38865_39253,chunk__38869_39254,count__38870_39255,i__38871_39256,seq__38695,chunk__38697,count__38698,i__38699,new_link_39259,path_match_39258,node_39257,path,map__38693,map__38693__$1,msg,updates,reload_info){
return (function (e){
var seq__38935_39263 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38940_39264 = null;
var count__38942_39265 = (0);
var i__38943_39266 = (0);
while(true){
if((i__38943_39266 < count__38942_39265)){
var map__38955_39267 = chunk__38940_39264.cljs$core$IIndexed$_nth$arity$2(null,i__38943_39266);
var map__38955_39268__$1 = cljs.core.__destructure_map(map__38955_39267);
var task_39269 = map__38955_39268__$1;
var fn_str_39270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38955_39268__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38955_39268__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39272 = goog.getObjectByName(fn_str_39270,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39271)].join(''));

(fn_obj_39272.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39272.cljs$core$IFn$_invoke$arity$2(path,new_link_39259) : fn_obj_39272.call(null,path,new_link_39259));


var G__39273 = seq__38935_39263;
var G__39274 = chunk__38940_39264;
var G__39275 = count__38942_39265;
var G__39276 = (i__38943_39266 + (1));
seq__38935_39263 = G__39273;
chunk__38940_39264 = G__39274;
count__38942_39265 = G__39275;
i__38943_39266 = G__39276;
continue;
} else {
var temp__5823__auto___39277 = cljs.core.seq(seq__38935_39263);
if(temp__5823__auto___39277){
var seq__38935_39278__$1 = temp__5823__auto___39277;
if(cljs.core.chunked_seq_QMARK_(seq__38935_39278__$1)){
var c__5568__auto___39279 = cljs.core.chunk_first(seq__38935_39278__$1);
var G__39280 = cljs.core.chunk_rest(seq__38935_39278__$1);
var G__39281 = c__5568__auto___39279;
var G__39282 = cljs.core.count(c__5568__auto___39279);
var G__39283 = (0);
seq__38935_39263 = G__39280;
chunk__38940_39264 = G__39281;
count__38942_39265 = G__39282;
i__38943_39266 = G__39283;
continue;
} else {
var map__38960_39284 = cljs.core.first(seq__38935_39278__$1);
var map__38960_39285__$1 = cljs.core.__destructure_map(map__38960_39284);
var task_39286 = map__38960_39285__$1;
var fn_str_39287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38960_39285__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38960_39285__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39289 = goog.getObjectByName(fn_str_39287,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39288)].join(''));

(fn_obj_39289.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39289.cljs$core$IFn$_invoke$arity$2(path,new_link_39259) : fn_obj_39289.call(null,path,new_link_39259));


var G__39290 = cljs.core.next(seq__38935_39278__$1);
var G__39291 = null;
var G__39292 = (0);
var G__39293 = (0);
seq__38935_39263 = G__39290;
chunk__38940_39264 = G__39291;
count__38942_39265 = G__39292;
i__38943_39266 = G__39293;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39257);
});})(seq__38865_39253,chunk__38869_39254,count__38870_39255,i__38871_39256,seq__38695,chunk__38697,count__38698,i__38699,new_link_39259,path_match_39258,node_39257,path,map__38693,map__38693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39258], 0));

goog.dom.insertSiblingAfter(new_link_39259,node_39257);


var G__39299 = seq__38865_39253;
var G__39300 = chunk__38869_39254;
var G__39301 = count__38870_39255;
var G__39302 = (i__38871_39256 + (1));
seq__38865_39253 = G__39299;
chunk__38869_39254 = G__39300;
count__38870_39255 = G__39301;
i__38871_39256 = G__39302;
continue;
} else {
var G__39304 = seq__38865_39253;
var G__39305 = chunk__38869_39254;
var G__39306 = count__38870_39255;
var G__39307 = (i__38871_39256 + (1));
seq__38865_39253 = G__39304;
chunk__38869_39254 = G__39305;
count__38870_39255 = G__39306;
i__38871_39256 = G__39307;
continue;
}
} else {
var G__39308 = seq__38865_39253;
var G__39309 = chunk__38869_39254;
var G__39310 = count__38870_39255;
var G__39311 = (i__38871_39256 + (1));
seq__38865_39253 = G__39308;
chunk__38869_39254 = G__39309;
count__38870_39255 = G__39310;
i__38871_39256 = G__39311;
continue;
}
} else {
var temp__5823__auto___39312 = cljs.core.seq(seq__38865_39253);
if(temp__5823__auto___39312){
var seq__38865_39313__$1 = temp__5823__auto___39312;
if(cljs.core.chunked_seq_QMARK_(seq__38865_39313__$1)){
var c__5568__auto___39314 = cljs.core.chunk_first(seq__38865_39313__$1);
var G__39315 = cljs.core.chunk_rest(seq__38865_39313__$1);
var G__39316 = c__5568__auto___39314;
var G__39317 = cljs.core.count(c__5568__auto___39314);
var G__39318 = (0);
seq__38865_39253 = G__39315;
chunk__38869_39254 = G__39316;
count__38870_39255 = G__39317;
i__38871_39256 = G__39318;
continue;
} else {
var node_39319 = cljs.core.first(seq__38865_39313__$1);
if(cljs.core.not(node_39319.shadow$old)){
var path_match_39320 = shadow.cljs.devtools.client.browser.match_paths(node_39319.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39320)){
var new_link_39321 = (function (){var G__38963 = node_39319.cloneNode(true);
G__38963.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39320),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38963;
})();
(node_39319.shadow$old = true);

(new_link_39321.onload = ((function (seq__38865_39253,chunk__38869_39254,count__38870_39255,i__38871_39256,seq__38695,chunk__38697,count__38698,i__38699,new_link_39321,path_match_39320,node_39319,seq__38865_39313__$1,temp__5823__auto___39312,path,map__38693,map__38693__$1,msg,updates,reload_info){
return (function (e){
var seq__38964_39323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38966_39324 = null;
var count__38967_39325 = (0);
var i__38968_39326 = (0);
while(true){
if((i__38968_39326 < count__38967_39325)){
var map__38975_39328 = chunk__38966_39324.cljs$core$IIndexed$_nth$arity$2(null,i__38968_39326);
var map__38975_39329__$1 = cljs.core.__destructure_map(map__38975_39328);
var task_39330 = map__38975_39329__$1;
var fn_str_39331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38975_39329__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38975_39329__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39333 = goog.getObjectByName(fn_str_39331,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39332)].join(''));

(fn_obj_39333.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39333.cljs$core$IFn$_invoke$arity$2(path,new_link_39321) : fn_obj_39333.call(null,path,new_link_39321));


var G__39338 = seq__38964_39323;
var G__39339 = chunk__38966_39324;
var G__39340 = count__38967_39325;
var G__39341 = (i__38968_39326 + (1));
seq__38964_39323 = G__39338;
chunk__38966_39324 = G__39339;
count__38967_39325 = G__39340;
i__38968_39326 = G__39341;
continue;
} else {
var temp__5823__auto___39342__$1 = cljs.core.seq(seq__38964_39323);
if(temp__5823__auto___39342__$1){
var seq__38964_39343__$1 = temp__5823__auto___39342__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38964_39343__$1)){
var c__5568__auto___39344 = cljs.core.chunk_first(seq__38964_39343__$1);
var G__39345 = cljs.core.chunk_rest(seq__38964_39343__$1);
var G__39346 = c__5568__auto___39344;
var G__39347 = cljs.core.count(c__5568__auto___39344);
var G__39348 = (0);
seq__38964_39323 = G__39345;
chunk__38966_39324 = G__39346;
count__38967_39325 = G__39347;
i__38968_39326 = G__39348;
continue;
} else {
var map__38979_39349 = cljs.core.first(seq__38964_39343__$1);
var map__38979_39350__$1 = cljs.core.__destructure_map(map__38979_39349);
var task_39351 = map__38979_39350__$1;
var fn_str_39352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38979_39350__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38979_39350__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39354 = goog.getObjectByName(fn_str_39352,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39353)].join(''));

(fn_obj_39354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39354.cljs$core$IFn$_invoke$arity$2(path,new_link_39321) : fn_obj_39354.call(null,path,new_link_39321));


var G__39355 = cljs.core.next(seq__38964_39343__$1);
var G__39356 = null;
var G__39357 = (0);
var G__39358 = (0);
seq__38964_39323 = G__39355;
chunk__38966_39324 = G__39356;
count__38967_39325 = G__39357;
i__38968_39326 = G__39358;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39319);
});})(seq__38865_39253,chunk__38869_39254,count__38870_39255,i__38871_39256,seq__38695,chunk__38697,count__38698,i__38699,new_link_39321,path_match_39320,node_39319,seq__38865_39313__$1,temp__5823__auto___39312,path,map__38693,map__38693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39320], 0));

goog.dom.insertSiblingAfter(new_link_39321,node_39319);


var G__39359 = cljs.core.next(seq__38865_39313__$1);
var G__39360 = null;
var G__39361 = (0);
var G__39362 = (0);
seq__38865_39253 = G__39359;
chunk__38869_39254 = G__39360;
count__38870_39255 = G__39361;
i__38871_39256 = G__39362;
continue;
} else {
var G__39363 = cljs.core.next(seq__38865_39313__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__38865_39253 = G__39363;
chunk__38869_39254 = G__39364;
count__38870_39255 = G__39365;
i__38871_39256 = G__39366;
continue;
}
} else {
var G__39367 = cljs.core.next(seq__38865_39313__$1);
var G__39368 = null;
var G__39369 = (0);
var G__39370 = (0);
seq__38865_39253 = G__39367;
chunk__38869_39254 = G__39368;
count__38870_39255 = G__39369;
i__38871_39256 = G__39370;
continue;
}
}
} else {
}
}
break;
}


var G__39371 = seq__38695;
var G__39372 = chunk__38697;
var G__39373 = count__38698;
var G__39374 = (i__38699 + (1));
seq__38695 = G__39371;
chunk__38697 = G__39372;
count__38698 = G__39373;
i__38699 = G__39374;
continue;
} else {
var G__39375 = seq__38695;
var G__39376 = chunk__38697;
var G__39377 = count__38698;
var G__39378 = (i__38699 + (1));
seq__38695 = G__39375;
chunk__38697 = G__39376;
count__38698 = G__39377;
i__38699 = G__39378;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38695);
if(temp__5823__auto__){
var seq__38695__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38695__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38695__$1);
var G__39379 = cljs.core.chunk_rest(seq__38695__$1);
var G__39380 = c__5568__auto__;
var G__39381 = cljs.core.count(c__5568__auto__);
var G__39382 = (0);
seq__38695 = G__39379;
chunk__38697 = G__39380;
count__38698 = G__39381;
i__38699 = G__39382;
continue;
} else {
var path = cljs.core.first(seq__38695__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38984_39383 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38988_39384 = null;
var count__38989_39385 = (0);
var i__38990_39386 = (0);
while(true){
if((i__38990_39386 < count__38989_39385)){
var node_39388 = chunk__38988_39384.cljs$core$IIndexed$_nth$arity$2(null,i__38990_39386);
if(cljs.core.not(node_39388.shadow$old)){
var path_match_39392 = shadow.cljs.devtools.client.browser.match_paths(node_39388.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39392)){
var new_link_39393 = (function (){var G__39044 = node_39388.cloneNode(true);
G__39044.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39392),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39044;
})();
(node_39388.shadow$old = true);

(new_link_39393.onload = ((function (seq__38984_39383,chunk__38988_39384,count__38989_39385,i__38990_39386,seq__38695,chunk__38697,count__38698,i__38699,new_link_39393,path_match_39392,node_39388,path,seq__38695__$1,temp__5823__auto__,map__38693,map__38693__$1,msg,updates,reload_info){
return (function (e){
var seq__39045_39394 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39047_39395 = null;
var count__39048_39396 = (0);
var i__39049_39397 = (0);
while(true){
if((i__39049_39397 < count__39048_39396)){
var map__39055_39398 = chunk__39047_39395.cljs$core$IIndexed$_nth$arity$2(null,i__39049_39397);
var map__39055_39399__$1 = cljs.core.__destructure_map(map__39055_39398);
var task_39400 = map__39055_39399__$1;
var fn_str_39401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055_39399__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055_39399__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39403 = goog.getObjectByName(fn_str_39401,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39402)].join(''));

(fn_obj_39403.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39403.cljs$core$IFn$_invoke$arity$2(path,new_link_39393) : fn_obj_39403.call(null,path,new_link_39393));


var G__39404 = seq__39045_39394;
var G__39405 = chunk__39047_39395;
var G__39406 = count__39048_39396;
var G__39407 = (i__39049_39397 + (1));
seq__39045_39394 = G__39404;
chunk__39047_39395 = G__39405;
count__39048_39396 = G__39406;
i__39049_39397 = G__39407;
continue;
} else {
var temp__5823__auto___39408__$1 = cljs.core.seq(seq__39045_39394);
if(temp__5823__auto___39408__$1){
var seq__39045_39409__$1 = temp__5823__auto___39408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39045_39409__$1)){
var c__5568__auto___39411 = cljs.core.chunk_first(seq__39045_39409__$1);
var G__39412 = cljs.core.chunk_rest(seq__39045_39409__$1);
var G__39413 = c__5568__auto___39411;
var G__39414 = cljs.core.count(c__5568__auto___39411);
var G__39415 = (0);
seq__39045_39394 = G__39412;
chunk__39047_39395 = G__39413;
count__39048_39396 = G__39414;
i__39049_39397 = G__39415;
continue;
} else {
var map__39056_39416 = cljs.core.first(seq__39045_39409__$1);
var map__39056_39417__$1 = cljs.core.__destructure_map(map__39056_39416);
var task_39418 = map__39056_39417__$1;
var fn_str_39419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056_39417__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056_39417__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39425 = goog.getObjectByName(fn_str_39419,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39420)].join(''));

(fn_obj_39425.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39425.cljs$core$IFn$_invoke$arity$2(path,new_link_39393) : fn_obj_39425.call(null,path,new_link_39393));


var G__39426 = cljs.core.next(seq__39045_39409__$1);
var G__39427 = null;
var G__39428 = (0);
var G__39429 = (0);
seq__39045_39394 = G__39426;
chunk__39047_39395 = G__39427;
count__39048_39396 = G__39428;
i__39049_39397 = G__39429;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39388);
});})(seq__38984_39383,chunk__38988_39384,count__38989_39385,i__38990_39386,seq__38695,chunk__38697,count__38698,i__38699,new_link_39393,path_match_39392,node_39388,path,seq__38695__$1,temp__5823__auto__,map__38693,map__38693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39392], 0));

goog.dom.insertSiblingAfter(new_link_39393,node_39388);


var G__39430 = seq__38984_39383;
var G__39431 = chunk__38988_39384;
var G__39432 = count__38989_39385;
var G__39433 = (i__38990_39386 + (1));
seq__38984_39383 = G__39430;
chunk__38988_39384 = G__39431;
count__38989_39385 = G__39432;
i__38990_39386 = G__39433;
continue;
} else {
var G__39434 = seq__38984_39383;
var G__39435 = chunk__38988_39384;
var G__39436 = count__38989_39385;
var G__39437 = (i__38990_39386 + (1));
seq__38984_39383 = G__39434;
chunk__38988_39384 = G__39435;
count__38989_39385 = G__39436;
i__38990_39386 = G__39437;
continue;
}
} else {
var G__39438 = seq__38984_39383;
var G__39439 = chunk__38988_39384;
var G__39440 = count__38989_39385;
var G__39441 = (i__38990_39386 + (1));
seq__38984_39383 = G__39438;
chunk__38988_39384 = G__39439;
count__38989_39385 = G__39440;
i__38990_39386 = G__39441;
continue;
}
} else {
var temp__5823__auto___39442__$1 = cljs.core.seq(seq__38984_39383);
if(temp__5823__auto___39442__$1){
var seq__38984_39443__$1 = temp__5823__auto___39442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38984_39443__$1)){
var c__5568__auto___39444 = cljs.core.chunk_first(seq__38984_39443__$1);
var G__39445 = cljs.core.chunk_rest(seq__38984_39443__$1);
var G__39446 = c__5568__auto___39444;
var G__39447 = cljs.core.count(c__5568__auto___39444);
var G__39448 = (0);
seq__38984_39383 = G__39445;
chunk__38988_39384 = G__39446;
count__38989_39385 = G__39447;
i__38990_39386 = G__39448;
continue;
} else {
var node_39449 = cljs.core.first(seq__38984_39443__$1);
if(cljs.core.not(node_39449.shadow$old)){
var path_match_39450 = shadow.cljs.devtools.client.browser.match_paths(node_39449.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39450)){
var new_link_39451 = (function (){var G__39058 = node_39449.cloneNode(true);
G__39058.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39450),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39058;
})();
(node_39449.shadow$old = true);

(new_link_39451.onload = ((function (seq__38984_39383,chunk__38988_39384,count__38989_39385,i__38990_39386,seq__38695,chunk__38697,count__38698,i__38699,new_link_39451,path_match_39450,node_39449,seq__38984_39443__$1,temp__5823__auto___39442__$1,path,seq__38695__$1,temp__5823__auto__,map__38693,map__38693__$1,msg,updates,reload_info){
return (function (e){
var seq__39060_39452 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39062_39453 = null;
var count__39063_39454 = (0);
var i__39064_39455 = (0);
while(true){
if((i__39064_39455 < count__39063_39454)){
var map__39073_39456 = chunk__39062_39453.cljs$core$IIndexed$_nth$arity$2(null,i__39064_39455);
var map__39073_39457__$1 = cljs.core.__destructure_map(map__39073_39456);
var task_39458 = map__39073_39457__$1;
var fn_str_39459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39073_39457__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39073_39457__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39461 = goog.getObjectByName(fn_str_39459,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39460)].join(''));

(fn_obj_39461.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39461.cljs$core$IFn$_invoke$arity$2(path,new_link_39451) : fn_obj_39461.call(null,path,new_link_39451));


var G__39462 = seq__39060_39452;
var G__39463 = chunk__39062_39453;
var G__39464 = count__39063_39454;
var G__39465 = (i__39064_39455 + (1));
seq__39060_39452 = G__39462;
chunk__39062_39453 = G__39463;
count__39063_39454 = G__39464;
i__39064_39455 = G__39465;
continue;
} else {
var temp__5823__auto___39467__$2 = cljs.core.seq(seq__39060_39452);
if(temp__5823__auto___39467__$2){
var seq__39060_39468__$1 = temp__5823__auto___39467__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39060_39468__$1)){
var c__5568__auto___39469 = cljs.core.chunk_first(seq__39060_39468__$1);
var G__39470 = cljs.core.chunk_rest(seq__39060_39468__$1);
var G__39471 = c__5568__auto___39469;
var G__39472 = cljs.core.count(c__5568__auto___39469);
var G__39473 = (0);
seq__39060_39452 = G__39470;
chunk__39062_39453 = G__39471;
count__39063_39454 = G__39472;
i__39064_39455 = G__39473;
continue;
} else {
var map__39074_39475 = cljs.core.first(seq__39060_39468__$1);
var map__39074_39476__$1 = cljs.core.__destructure_map(map__39074_39475);
var task_39477 = map__39074_39476__$1;
var fn_str_39478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39074_39476__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39074_39476__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39482 = goog.getObjectByName(fn_str_39478,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39479)].join(''));

(fn_obj_39482.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39482.cljs$core$IFn$_invoke$arity$2(path,new_link_39451) : fn_obj_39482.call(null,path,new_link_39451));


var G__39483 = cljs.core.next(seq__39060_39468__$1);
var G__39484 = null;
var G__39485 = (0);
var G__39486 = (0);
seq__39060_39452 = G__39483;
chunk__39062_39453 = G__39484;
count__39063_39454 = G__39485;
i__39064_39455 = G__39486;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39449);
});})(seq__38984_39383,chunk__38988_39384,count__38989_39385,i__38990_39386,seq__38695,chunk__38697,count__38698,i__38699,new_link_39451,path_match_39450,node_39449,seq__38984_39443__$1,temp__5823__auto___39442__$1,path,seq__38695__$1,temp__5823__auto__,map__38693,map__38693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39450], 0));

goog.dom.insertSiblingAfter(new_link_39451,node_39449);


var G__39487 = cljs.core.next(seq__38984_39443__$1);
var G__39488 = null;
var G__39489 = (0);
var G__39490 = (0);
seq__38984_39383 = G__39487;
chunk__38988_39384 = G__39488;
count__38989_39385 = G__39489;
i__38990_39386 = G__39490;
continue;
} else {
var G__39491 = cljs.core.next(seq__38984_39443__$1);
var G__39492 = null;
var G__39493 = (0);
var G__39494 = (0);
seq__38984_39383 = G__39491;
chunk__38988_39384 = G__39492;
count__38989_39385 = G__39493;
i__38990_39386 = G__39494;
continue;
}
} else {
var G__39495 = cljs.core.next(seq__38984_39443__$1);
var G__39496 = null;
var G__39497 = (0);
var G__39498 = (0);
seq__38984_39383 = G__39495;
chunk__38988_39384 = G__39496;
count__38989_39385 = G__39497;
i__38990_39386 = G__39498;
continue;
}
}
} else {
}
}
break;
}


var G__39499 = cljs.core.next(seq__38695__$1);
var G__39500 = null;
var G__39501 = (0);
var G__39502 = (0);
seq__38695 = G__39499;
chunk__38697 = G__39500;
count__38698 = G__39501;
i__38699 = G__39502;
continue;
} else {
var G__39503 = cljs.core.next(seq__38695__$1);
var G__39504 = null;
var G__39505 = (0);
var G__39506 = (0);
seq__38695 = G__39503;
chunk__38697 = G__39504;
count__38698 = G__39505;
i__38699 = G__39506;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39079){
var map__39080 = p__39079;
var map__39080__$1 = cljs.core.__destructure_map(map__39080);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39080__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39110){
var map__39111 = p__39110;
var map__39111__$1 = cljs.core.__destructure_map(map__39111);
var _ = map__39111__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39111__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39115,done,error){
var map__39116 = p__39115;
var map__39116__$1 = cljs.core.__destructure_map(map__39116);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39116__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39136,done,error){
var map__39138 = p__39136;
var map__39138__$1 = cljs.core.__destructure_map(map__39138);
var msg = map__39138__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39142){
var map__39143 = p__39142;
var map__39143__$1 = cljs.core.__destructure_map(map__39143);
var src = map__39143__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39143__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39147 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39147) : done.call(null,G__39147));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39151){
var map__39152 = p__39151;
var map__39152__$1 = cljs.core.__destructure_map(map__39152);
var msg__$1 = map__39152__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39155){var ex = e39155;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39156){
var map__39157 = p__39156;
var map__39157__$1 = cljs.core.__destructure_map(map__39157);
var env = map__39157__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39157__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39158){
var map__39159 = p__39158;
var map__39159__$1 = cljs.core.__destructure_map(map__39159);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39159__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39159__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39163){
var map__39164 = p__39163;
var map__39164__$1 = cljs.core.__destructure_map(map__39164);
var svc = map__39164__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39164__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
