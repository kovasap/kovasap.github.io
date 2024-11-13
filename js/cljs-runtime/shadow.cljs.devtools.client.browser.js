goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39121 = arguments.length;
var i__5770__auto___39122 = (0);
while(true){
if((i__5770__auto___39122 < len__5769__auto___39121)){
args__5775__auto__.push((arguments[i__5770__auto___39122]));

var G__39124 = (i__5770__auto___39122 + (1));
i__5770__auto___39122 = G__39124;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38555){
var G__38556 = cljs.core.first(seq38555);
var seq38555__$1 = cljs.core.next(seq38555);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38556,seq38555__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38558 = cljs.core.seq(sources);
var chunk__38559 = null;
var count__38560 = (0);
var i__38561 = (0);
while(true){
if((i__38561 < count__38560)){
var map__38568 = chunk__38559.cljs$core$IIndexed$_nth$arity$2(null,i__38561);
var map__38568__$1 = cljs.core.__destructure_map(map__38568);
var src = map__38568__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38569){var e_39133 = e38569;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39133);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39133.message)].join('')));
}

var G__39136 = seq__38558;
var G__39137 = chunk__38559;
var G__39138 = count__38560;
var G__39139 = (i__38561 + (1));
seq__38558 = G__39136;
chunk__38559 = G__39137;
count__38560 = G__39138;
i__38561 = G__39139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38558);
if(temp__5804__auto__){
var seq__38558__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38558__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38558__$1);
var G__39142 = cljs.core.chunk_rest(seq__38558__$1);
var G__39143 = c__5568__auto__;
var G__39144 = cljs.core.count(c__5568__auto__);
var G__39145 = (0);
seq__38558 = G__39142;
chunk__38559 = G__39143;
count__38560 = G__39144;
i__38561 = G__39145;
continue;
} else {
var map__38570 = cljs.core.first(seq__38558__$1);
var map__38570__$1 = cljs.core.__destructure_map(map__38570);
var src = map__38570__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38570__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38570__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38570__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38570__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38573){var e_39148 = e38573;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39148);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39148.message)].join('')));
}

var G__39149 = cljs.core.next(seq__38558__$1);
var G__39150 = null;
var G__39151 = (0);
var G__39152 = (0);
seq__38558 = G__39149;
chunk__38559 = G__39150;
count__38560 = G__39151;
i__38561 = G__39152;
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
var seq__38582 = cljs.core.seq(js_requires);
var chunk__38583 = null;
var count__38584 = (0);
var i__38585 = (0);
while(true){
if((i__38585 < count__38584)){
var js_ns = chunk__38583.cljs$core$IIndexed$_nth$arity$2(null,i__38585);
var require_str_39162 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39162);


var G__39163 = seq__38582;
var G__39164 = chunk__38583;
var G__39165 = count__38584;
var G__39166 = (i__38585 + (1));
seq__38582 = G__39163;
chunk__38583 = G__39164;
count__38584 = G__39165;
i__38585 = G__39166;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38582);
if(temp__5804__auto__){
var seq__38582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38582__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38582__$1);
var G__39168 = cljs.core.chunk_rest(seq__38582__$1);
var G__39169 = c__5568__auto__;
var G__39170 = cljs.core.count(c__5568__auto__);
var G__39171 = (0);
seq__38582 = G__39168;
chunk__38583 = G__39169;
count__38584 = G__39170;
i__38585 = G__39171;
continue;
} else {
var js_ns = cljs.core.first(seq__38582__$1);
var require_str_39176 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39176);


var G__39182 = cljs.core.next(seq__38582__$1);
var G__39183 = null;
var G__39184 = (0);
var G__39185 = (0);
seq__38582 = G__39182;
chunk__38583 = G__39183;
count__38584 = G__39184;
i__38585 = G__39185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38590){
var map__38591 = p__38590;
var map__38591__$1 = cljs.core.__destructure_map(map__38591);
var msg = map__38591__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38591__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38591__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38592(s__38593){
return (new cljs.core.LazySeq(null,(function (){
var s__38593__$1 = s__38593;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38593__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38598 = cljs.core.first(xs__6360__auto__);
var map__38598__$1 = cljs.core.__destructure_map(map__38598);
var src = map__38598__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38593__$1,map__38598,map__38598__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38591,map__38591__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38592_$_iter__38594(s__38595){
return (new cljs.core.LazySeq(null,((function (s__38593__$1,map__38598,map__38598__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38591,map__38591__$1,msg,info,reload_info){
return (function (){
var s__38595__$1 = s__38595;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38595__$1);
if(temp__5804__auto____$1){
var s__38595__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38595__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38595__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38597 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38596 = (0);
while(true){
if((i__38596 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38596);
cljs.core.chunk_append(b__38597,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39204 = (i__38596 + (1));
i__38596 = G__39204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38597),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38592_$_iter__38594(cljs.core.chunk_rest(s__38595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38597),null);
}
} else {
var warning = cljs.core.first(s__38595__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38592_$_iter__38594(cljs.core.rest(s__38595__$2)));
}
} else {
return null;
}
break;
}
});})(s__38593__$1,map__38598,map__38598__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38591,map__38591__$1,msg,info,reload_info))
,null,null));
});})(s__38593__$1,map__38598,map__38598__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38591,map__38591__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38592(cljs.core.rest(s__38593__$1)));
} else {
var G__39207 = cljs.core.rest(s__38593__$1);
s__38593__$1 = G__39207;
continue;
}
} else {
var G__39208 = cljs.core.rest(s__38593__$1);
s__38593__$1 = G__39208;
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
var seq__38604_39210 = cljs.core.seq(warnings);
var chunk__38605_39211 = null;
var count__38606_39212 = (0);
var i__38607_39213 = (0);
while(true){
if((i__38607_39213 < count__38606_39212)){
var map__38616_39215 = chunk__38605_39211.cljs$core$IIndexed$_nth$arity$2(null,i__38607_39213);
var map__38616_39216__$1 = cljs.core.__destructure_map(map__38616_39215);
var w_39217 = map__38616_39216__$1;
var msg_39218__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616_39216__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616_39216__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616_39216__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616_39216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39221)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39219),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39220),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39218__$1)].join(''));


var G__39227 = seq__38604_39210;
var G__39228 = chunk__38605_39211;
var G__39229 = count__38606_39212;
var G__39230 = (i__38607_39213 + (1));
seq__38604_39210 = G__39227;
chunk__38605_39211 = G__39228;
count__38606_39212 = G__39229;
i__38607_39213 = G__39230;
continue;
} else {
var temp__5804__auto___39232 = cljs.core.seq(seq__38604_39210);
if(temp__5804__auto___39232){
var seq__38604_39233__$1 = temp__5804__auto___39232;
if(cljs.core.chunked_seq_QMARK_(seq__38604_39233__$1)){
var c__5568__auto___39234 = cljs.core.chunk_first(seq__38604_39233__$1);
var G__39235 = cljs.core.chunk_rest(seq__38604_39233__$1);
var G__39236 = c__5568__auto___39234;
var G__39237 = cljs.core.count(c__5568__auto___39234);
var G__39238 = (0);
seq__38604_39210 = G__39235;
chunk__38605_39211 = G__39236;
count__38606_39212 = G__39237;
i__38607_39213 = G__39238;
continue;
} else {
var map__38617_39239 = cljs.core.first(seq__38604_39233__$1);
var map__38617_39240__$1 = cljs.core.__destructure_map(map__38617_39239);
var w_39241 = map__38617_39240__$1;
var msg_39242__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39240__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39240__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39240__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39240__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39245)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39243),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39244),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39242__$1)].join(''));


var G__39248 = cljs.core.next(seq__38604_39233__$1);
var G__39249 = null;
var G__39250 = (0);
var G__39251 = (0);
seq__38604_39210 = G__39248;
chunk__38605_39211 = G__39249;
count__38606_39212 = G__39250;
i__38607_39213 = G__39251;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38589_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38589_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38622){
var map__38623 = p__38622;
var map__38623__$1 = cljs.core.__destructure_map(map__38623);
var msg = map__38623__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38624 = cljs.core.seq(updates);
var chunk__38626 = null;
var count__38627 = (0);
var i__38628 = (0);
while(true){
if((i__38628 < count__38627)){
var path = chunk__38626.cljs$core$IIndexed$_nth$arity$2(null,i__38628);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38860_39256 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38864_39257 = null;
var count__38865_39258 = (0);
var i__38866_39259 = (0);
while(true){
if((i__38866_39259 < count__38865_39258)){
var node_39260 = chunk__38864_39257.cljs$core$IIndexed$_nth$arity$2(null,i__38866_39259);
if(cljs.core.not(node_39260.shadow$old)){
var path_match_39261 = shadow.cljs.devtools.client.browser.match_paths(node_39260.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39261)){
var new_link_39265 = (function (){var G__38903 = node_39260.cloneNode(true);
G__38903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39261),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38903;
})();
(node_39260.shadow$old = true);

(new_link_39265.onload = ((function (seq__38860_39256,chunk__38864_39257,count__38865_39258,i__38866_39259,seq__38624,chunk__38626,count__38627,i__38628,new_link_39265,path_match_39261,node_39260,path,map__38623,map__38623__$1,msg,updates,reload_info){
return (function (e){
var seq__38904_39266 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38906_39267 = null;
var count__38907_39268 = (0);
var i__38908_39269 = (0);
while(true){
if((i__38908_39269 < count__38907_39268)){
var map__38915_39270 = chunk__38906_39267.cljs$core$IIndexed$_nth$arity$2(null,i__38908_39269);
var map__38915_39271__$1 = cljs.core.__destructure_map(map__38915_39270);
var task_39272 = map__38915_39271__$1;
var fn_str_39273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915_39271__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915_39271__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39275 = goog.getObjectByName(fn_str_39273,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39274)].join(''));

(fn_obj_39275.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39275.cljs$core$IFn$_invoke$arity$2(path,new_link_39265) : fn_obj_39275.call(null,path,new_link_39265));


var G__39280 = seq__38904_39266;
var G__39281 = chunk__38906_39267;
var G__39282 = count__38907_39268;
var G__39283 = (i__38908_39269 + (1));
seq__38904_39266 = G__39280;
chunk__38906_39267 = G__39281;
count__38907_39268 = G__39282;
i__38908_39269 = G__39283;
continue;
} else {
var temp__5804__auto___39284 = cljs.core.seq(seq__38904_39266);
if(temp__5804__auto___39284){
var seq__38904_39285__$1 = temp__5804__auto___39284;
if(cljs.core.chunked_seq_QMARK_(seq__38904_39285__$1)){
var c__5568__auto___39286 = cljs.core.chunk_first(seq__38904_39285__$1);
var G__39287 = cljs.core.chunk_rest(seq__38904_39285__$1);
var G__39288 = c__5568__auto___39286;
var G__39289 = cljs.core.count(c__5568__auto___39286);
var G__39290 = (0);
seq__38904_39266 = G__39287;
chunk__38906_39267 = G__39288;
count__38907_39268 = G__39289;
i__38908_39269 = G__39290;
continue;
} else {
var map__38916_39291 = cljs.core.first(seq__38904_39285__$1);
var map__38916_39292__$1 = cljs.core.__destructure_map(map__38916_39291);
var task_39293 = map__38916_39292__$1;
var fn_str_39294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916_39292__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916_39292__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39296 = goog.getObjectByName(fn_str_39294,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39295)].join(''));

(fn_obj_39296.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39296.cljs$core$IFn$_invoke$arity$2(path,new_link_39265) : fn_obj_39296.call(null,path,new_link_39265));


var G__39297 = cljs.core.next(seq__38904_39285__$1);
var G__39298 = null;
var G__39299 = (0);
var G__39300 = (0);
seq__38904_39266 = G__39297;
chunk__38906_39267 = G__39298;
count__38907_39268 = G__39299;
i__38908_39269 = G__39300;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39260);
});})(seq__38860_39256,chunk__38864_39257,count__38865_39258,i__38866_39259,seq__38624,chunk__38626,count__38627,i__38628,new_link_39265,path_match_39261,node_39260,path,map__38623,map__38623__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39261], 0));

goog.dom.insertSiblingAfter(new_link_39265,node_39260);


var G__39302 = seq__38860_39256;
var G__39303 = chunk__38864_39257;
var G__39304 = count__38865_39258;
var G__39305 = (i__38866_39259 + (1));
seq__38860_39256 = G__39302;
chunk__38864_39257 = G__39303;
count__38865_39258 = G__39304;
i__38866_39259 = G__39305;
continue;
} else {
var G__39309 = seq__38860_39256;
var G__39310 = chunk__38864_39257;
var G__39311 = count__38865_39258;
var G__39312 = (i__38866_39259 + (1));
seq__38860_39256 = G__39309;
chunk__38864_39257 = G__39310;
count__38865_39258 = G__39311;
i__38866_39259 = G__39312;
continue;
}
} else {
var G__39313 = seq__38860_39256;
var G__39314 = chunk__38864_39257;
var G__39315 = count__38865_39258;
var G__39316 = (i__38866_39259 + (1));
seq__38860_39256 = G__39313;
chunk__38864_39257 = G__39314;
count__38865_39258 = G__39315;
i__38866_39259 = G__39316;
continue;
}
} else {
var temp__5804__auto___39317 = cljs.core.seq(seq__38860_39256);
if(temp__5804__auto___39317){
var seq__38860_39318__$1 = temp__5804__auto___39317;
if(cljs.core.chunked_seq_QMARK_(seq__38860_39318__$1)){
var c__5568__auto___39320 = cljs.core.chunk_first(seq__38860_39318__$1);
var G__39321 = cljs.core.chunk_rest(seq__38860_39318__$1);
var G__39322 = c__5568__auto___39320;
var G__39323 = cljs.core.count(c__5568__auto___39320);
var G__39324 = (0);
seq__38860_39256 = G__39321;
chunk__38864_39257 = G__39322;
count__38865_39258 = G__39323;
i__38866_39259 = G__39324;
continue;
} else {
var node_39325 = cljs.core.first(seq__38860_39318__$1);
if(cljs.core.not(node_39325.shadow$old)){
var path_match_39326 = shadow.cljs.devtools.client.browser.match_paths(node_39325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39326)){
var new_link_39327 = (function (){var G__38917 = node_39325.cloneNode(true);
G__38917.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38917;
})();
(node_39325.shadow$old = true);

(new_link_39327.onload = ((function (seq__38860_39256,chunk__38864_39257,count__38865_39258,i__38866_39259,seq__38624,chunk__38626,count__38627,i__38628,new_link_39327,path_match_39326,node_39325,seq__38860_39318__$1,temp__5804__auto___39317,path,map__38623,map__38623__$1,msg,updates,reload_info){
return (function (e){
var seq__38919_39328 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38921_39329 = null;
var count__38922_39330 = (0);
var i__38923_39331 = (0);
while(true){
if((i__38923_39331 < count__38922_39330)){
var map__38936_39333 = chunk__38921_39329.cljs$core$IIndexed$_nth$arity$2(null,i__38923_39331);
var map__38936_39334__$1 = cljs.core.__destructure_map(map__38936_39333);
var task_39335 = map__38936_39334__$1;
var fn_str_39336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38936_39334__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38936_39334__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39338 = goog.getObjectByName(fn_str_39336,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39337)].join(''));

(fn_obj_39338.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39338.cljs$core$IFn$_invoke$arity$2(path,new_link_39327) : fn_obj_39338.call(null,path,new_link_39327));


var G__39339 = seq__38919_39328;
var G__39340 = chunk__38921_39329;
var G__39341 = count__38922_39330;
var G__39342 = (i__38923_39331 + (1));
seq__38919_39328 = G__39339;
chunk__38921_39329 = G__39340;
count__38922_39330 = G__39341;
i__38923_39331 = G__39342;
continue;
} else {
var temp__5804__auto___39343__$1 = cljs.core.seq(seq__38919_39328);
if(temp__5804__auto___39343__$1){
var seq__38919_39344__$1 = temp__5804__auto___39343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38919_39344__$1)){
var c__5568__auto___39345 = cljs.core.chunk_first(seq__38919_39344__$1);
var G__39358 = cljs.core.chunk_rest(seq__38919_39344__$1);
var G__39359 = c__5568__auto___39345;
var G__39360 = cljs.core.count(c__5568__auto___39345);
var G__39361 = (0);
seq__38919_39328 = G__39358;
chunk__38921_39329 = G__39359;
count__38922_39330 = G__39360;
i__38923_39331 = G__39361;
continue;
} else {
var map__38938_39362 = cljs.core.first(seq__38919_39344__$1);
var map__38938_39363__$1 = cljs.core.__destructure_map(map__38938_39362);
var task_39364 = map__38938_39363__$1;
var fn_str_39365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38938_39363__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38938_39363__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39367 = goog.getObjectByName(fn_str_39365,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39366)].join(''));

(fn_obj_39367.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39367.cljs$core$IFn$_invoke$arity$2(path,new_link_39327) : fn_obj_39367.call(null,path,new_link_39327));


var G__39368 = cljs.core.next(seq__38919_39344__$1);
var G__39369 = null;
var G__39370 = (0);
var G__39371 = (0);
seq__38919_39328 = G__39368;
chunk__38921_39329 = G__39369;
count__38922_39330 = G__39370;
i__38923_39331 = G__39371;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39325);
});})(seq__38860_39256,chunk__38864_39257,count__38865_39258,i__38866_39259,seq__38624,chunk__38626,count__38627,i__38628,new_link_39327,path_match_39326,node_39325,seq__38860_39318__$1,temp__5804__auto___39317,path,map__38623,map__38623__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39326], 0));

goog.dom.insertSiblingAfter(new_link_39327,node_39325);


var G__39376 = cljs.core.next(seq__38860_39318__$1);
var G__39377 = null;
var G__39378 = (0);
var G__39379 = (0);
seq__38860_39256 = G__39376;
chunk__38864_39257 = G__39377;
count__38865_39258 = G__39378;
i__38866_39259 = G__39379;
continue;
} else {
var G__39380 = cljs.core.next(seq__38860_39318__$1);
var G__39381 = null;
var G__39382 = (0);
var G__39383 = (0);
seq__38860_39256 = G__39380;
chunk__38864_39257 = G__39381;
count__38865_39258 = G__39382;
i__38866_39259 = G__39383;
continue;
}
} else {
var G__39384 = cljs.core.next(seq__38860_39318__$1);
var G__39385 = null;
var G__39386 = (0);
var G__39387 = (0);
seq__38860_39256 = G__39384;
chunk__38864_39257 = G__39385;
count__38865_39258 = G__39386;
i__38866_39259 = G__39387;
continue;
}
}
} else {
}
}
break;
}


var G__39388 = seq__38624;
var G__39389 = chunk__38626;
var G__39390 = count__38627;
var G__39391 = (i__38628 + (1));
seq__38624 = G__39388;
chunk__38626 = G__39389;
count__38627 = G__39390;
i__38628 = G__39391;
continue;
} else {
var G__39394 = seq__38624;
var G__39395 = chunk__38626;
var G__39396 = count__38627;
var G__39397 = (i__38628 + (1));
seq__38624 = G__39394;
chunk__38626 = G__39395;
count__38627 = G__39396;
i__38628 = G__39397;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38624);
if(temp__5804__auto__){
var seq__38624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38624__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38624__$1);
var G__39399 = cljs.core.chunk_rest(seq__38624__$1);
var G__39400 = c__5568__auto__;
var G__39401 = cljs.core.count(c__5568__auto__);
var G__39402 = (0);
seq__38624 = G__39399;
chunk__38626 = G__39400;
count__38627 = G__39401;
i__38628 = G__39402;
continue;
} else {
var path = cljs.core.first(seq__38624__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38946_39404 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38950_39405 = null;
var count__38951_39406 = (0);
var i__38952_39407 = (0);
while(true){
if((i__38952_39407 < count__38951_39406)){
var node_39411 = chunk__38950_39405.cljs$core$IIndexed$_nth$arity$2(null,i__38952_39407);
if(cljs.core.not(node_39411.shadow$old)){
var path_match_39412 = shadow.cljs.devtools.client.browser.match_paths(node_39411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39412)){
var new_link_39413 = (function (){var G__39020 = node_39411.cloneNode(true);
G__39020.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39020;
})();
(node_39411.shadow$old = true);

(new_link_39413.onload = ((function (seq__38946_39404,chunk__38950_39405,count__38951_39406,i__38952_39407,seq__38624,chunk__38626,count__38627,i__38628,new_link_39413,path_match_39412,node_39411,path,seq__38624__$1,temp__5804__auto__,map__38623,map__38623__$1,msg,updates,reload_info){
return (function (e){
var seq__39021_39417 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39023_39418 = null;
var count__39024_39419 = (0);
var i__39025_39420 = (0);
while(true){
if((i__39025_39420 < count__39024_39419)){
var map__39032_39421 = chunk__39023_39418.cljs$core$IIndexed$_nth$arity$2(null,i__39025_39420);
var map__39032_39422__$1 = cljs.core.__destructure_map(map__39032_39421);
var task_39423 = map__39032_39422__$1;
var fn_str_39424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032_39422__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032_39422__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39427 = goog.getObjectByName(fn_str_39424,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39425)].join(''));

(fn_obj_39427.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39427.cljs$core$IFn$_invoke$arity$2(path,new_link_39413) : fn_obj_39427.call(null,path,new_link_39413));


var G__39429 = seq__39021_39417;
var G__39430 = chunk__39023_39418;
var G__39431 = count__39024_39419;
var G__39432 = (i__39025_39420 + (1));
seq__39021_39417 = G__39429;
chunk__39023_39418 = G__39430;
count__39024_39419 = G__39431;
i__39025_39420 = G__39432;
continue;
} else {
var temp__5804__auto___39434__$1 = cljs.core.seq(seq__39021_39417);
if(temp__5804__auto___39434__$1){
var seq__39021_39435__$1 = temp__5804__auto___39434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39021_39435__$1)){
var c__5568__auto___39437 = cljs.core.chunk_first(seq__39021_39435__$1);
var G__39438 = cljs.core.chunk_rest(seq__39021_39435__$1);
var G__39439 = c__5568__auto___39437;
var G__39440 = cljs.core.count(c__5568__auto___39437);
var G__39441 = (0);
seq__39021_39417 = G__39438;
chunk__39023_39418 = G__39439;
count__39024_39419 = G__39440;
i__39025_39420 = G__39441;
continue;
} else {
var map__39033_39442 = cljs.core.first(seq__39021_39435__$1);
var map__39033_39443__$1 = cljs.core.__destructure_map(map__39033_39442);
var task_39444 = map__39033_39443__$1;
var fn_str_39445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39033_39443__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39033_39443__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39448 = goog.getObjectByName(fn_str_39445,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39446)].join(''));

(fn_obj_39448.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39448.cljs$core$IFn$_invoke$arity$2(path,new_link_39413) : fn_obj_39448.call(null,path,new_link_39413));


var G__39449 = cljs.core.next(seq__39021_39435__$1);
var G__39450 = null;
var G__39451 = (0);
var G__39452 = (0);
seq__39021_39417 = G__39449;
chunk__39023_39418 = G__39450;
count__39024_39419 = G__39451;
i__39025_39420 = G__39452;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39411);
});})(seq__38946_39404,chunk__38950_39405,count__38951_39406,i__38952_39407,seq__38624,chunk__38626,count__38627,i__38628,new_link_39413,path_match_39412,node_39411,path,seq__38624__$1,temp__5804__auto__,map__38623,map__38623__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39412], 0));

goog.dom.insertSiblingAfter(new_link_39413,node_39411);


var G__39468 = seq__38946_39404;
var G__39469 = chunk__38950_39405;
var G__39470 = count__38951_39406;
var G__39471 = (i__38952_39407 + (1));
seq__38946_39404 = G__39468;
chunk__38950_39405 = G__39469;
count__38951_39406 = G__39470;
i__38952_39407 = G__39471;
continue;
} else {
var G__39472 = seq__38946_39404;
var G__39473 = chunk__38950_39405;
var G__39474 = count__38951_39406;
var G__39475 = (i__38952_39407 + (1));
seq__38946_39404 = G__39472;
chunk__38950_39405 = G__39473;
count__38951_39406 = G__39474;
i__38952_39407 = G__39475;
continue;
}
} else {
var G__39476 = seq__38946_39404;
var G__39477 = chunk__38950_39405;
var G__39478 = count__38951_39406;
var G__39479 = (i__38952_39407 + (1));
seq__38946_39404 = G__39476;
chunk__38950_39405 = G__39477;
count__38951_39406 = G__39478;
i__38952_39407 = G__39479;
continue;
}
} else {
var temp__5804__auto___39480__$1 = cljs.core.seq(seq__38946_39404);
if(temp__5804__auto___39480__$1){
var seq__38946_39481__$1 = temp__5804__auto___39480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38946_39481__$1)){
var c__5568__auto___39482 = cljs.core.chunk_first(seq__38946_39481__$1);
var G__39483 = cljs.core.chunk_rest(seq__38946_39481__$1);
var G__39484 = c__5568__auto___39482;
var G__39485 = cljs.core.count(c__5568__auto___39482);
var G__39486 = (0);
seq__38946_39404 = G__39483;
chunk__38950_39405 = G__39484;
count__38951_39406 = G__39485;
i__38952_39407 = G__39486;
continue;
} else {
var node_39487 = cljs.core.first(seq__38946_39481__$1);
if(cljs.core.not(node_39487.shadow$old)){
var path_match_39488 = shadow.cljs.devtools.client.browser.match_paths(node_39487.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39488)){
var new_link_39489 = (function (){var G__39034 = node_39487.cloneNode(true);
G__39034.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39488),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39034;
})();
(node_39487.shadow$old = true);

(new_link_39489.onload = ((function (seq__38946_39404,chunk__38950_39405,count__38951_39406,i__38952_39407,seq__38624,chunk__38626,count__38627,i__38628,new_link_39489,path_match_39488,node_39487,seq__38946_39481__$1,temp__5804__auto___39480__$1,path,seq__38624__$1,temp__5804__auto__,map__38623,map__38623__$1,msg,updates,reload_info){
return (function (e){
var seq__39036_39490 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39038_39491 = null;
var count__39039_39492 = (0);
var i__39040_39493 = (0);
while(true){
if((i__39040_39493 < count__39039_39492)){
var map__39050_39494 = chunk__39038_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39040_39493);
var map__39050_39495__$1 = cljs.core.__destructure_map(map__39050_39494);
var task_39496 = map__39050_39495__$1;
var fn_str_39497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39050_39495__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39050_39495__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39499 = goog.getObjectByName(fn_str_39497,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39498)].join(''));

(fn_obj_39499.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39499.cljs$core$IFn$_invoke$arity$2(path,new_link_39489) : fn_obj_39499.call(null,path,new_link_39489));


var G__39503 = seq__39036_39490;
var G__39504 = chunk__39038_39491;
var G__39505 = count__39039_39492;
var G__39506 = (i__39040_39493 + (1));
seq__39036_39490 = G__39503;
chunk__39038_39491 = G__39504;
count__39039_39492 = G__39505;
i__39040_39493 = G__39506;
continue;
} else {
var temp__5804__auto___39507__$2 = cljs.core.seq(seq__39036_39490);
if(temp__5804__auto___39507__$2){
var seq__39036_39511__$1 = temp__5804__auto___39507__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39036_39511__$1)){
var c__5568__auto___39512 = cljs.core.chunk_first(seq__39036_39511__$1);
var G__39513 = cljs.core.chunk_rest(seq__39036_39511__$1);
var G__39514 = c__5568__auto___39512;
var G__39515 = cljs.core.count(c__5568__auto___39512);
var G__39516 = (0);
seq__39036_39490 = G__39513;
chunk__39038_39491 = G__39514;
count__39039_39492 = G__39515;
i__39040_39493 = G__39516;
continue;
} else {
var map__39051_39517 = cljs.core.first(seq__39036_39511__$1);
var map__39051_39518__$1 = cljs.core.__destructure_map(map__39051_39517);
var task_39519 = map__39051_39518__$1;
var fn_str_39520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39051_39518__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39051_39518__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39522 = goog.getObjectByName(fn_str_39520,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39521)].join(''));

(fn_obj_39522.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39522.cljs$core$IFn$_invoke$arity$2(path,new_link_39489) : fn_obj_39522.call(null,path,new_link_39489));


var G__39529 = cljs.core.next(seq__39036_39511__$1);
var G__39530 = null;
var G__39531 = (0);
var G__39532 = (0);
seq__39036_39490 = G__39529;
chunk__39038_39491 = G__39530;
count__39039_39492 = G__39531;
i__39040_39493 = G__39532;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39487);
});})(seq__38946_39404,chunk__38950_39405,count__38951_39406,i__38952_39407,seq__38624,chunk__38626,count__38627,i__38628,new_link_39489,path_match_39488,node_39487,seq__38946_39481__$1,temp__5804__auto___39480__$1,path,seq__38624__$1,temp__5804__auto__,map__38623,map__38623__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39488], 0));

goog.dom.insertSiblingAfter(new_link_39489,node_39487);


var G__39533 = cljs.core.next(seq__38946_39481__$1);
var G__39534 = null;
var G__39535 = (0);
var G__39536 = (0);
seq__38946_39404 = G__39533;
chunk__38950_39405 = G__39534;
count__38951_39406 = G__39535;
i__38952_39407 = G__39536;
continue;
} else {
var G__39537 = cljs.core.next(seq__38946_39481__$1);
var G__39538 = null;
var G__39539 = (0);
var G__39540 = (0);
seq__38946_39404 = G__39537;
chunk__38950_39405 = G__39538;
count__38951_39406 = G__39539;
i__38952_39407 = G__39540;
continue;
}
} else {
var G__39541 = cljs.core.next(seq__38946_39481__$1);
var G__39542 = null;
var G__39543 = (0);
var G__39544 = (0);
seq__38946_39404 = G__39541;
chunk__38950_39405 = G__39542;
count__38951_39406 = G__39543;
i__38952_39407 = G__39544;
continue;
}
}
} else {
}
}
break;
}


var G__39545 = cljs.core.next(seq__38624__$1);
var G__39546 = null;
var G__39547 = (0);
var G__39548 = (0);
seq__38624 = G__39545;
chunk__38626 = G__39546;
count__38627 = G__39547;
i__38628 = G__39548;
continue;
} else {
var G__39549 = cljs.core.next(seq__38624__$1);
var G__39550 = null;
var G__39551 = (0);
var G__39552 = (0);
seq__38624 = G__39549;
chunk__38626 = G__39550;
count__38627 = G__39551;
i__38628 = G__39552;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39056){
var map__39057 = p__39056;
var map__39057__$1 = cljs.core.__destructure_map(map__39057);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39057__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39071){
var map__39072 = p__39071;
var map__39072__$1 = cljs.core.__destructure_map(map__39072);
var _ = map__39072__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39072__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39073,done,error){
var map__39074 = p__39073;
var map__39074__$1 = cljs.core.__destructure_map(map__39074);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39074__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39084,done,error){
var map__39085 = p__39084;
var map__39085__$1 = cljs.core.__destructure_map(map__39085);
var msg = map__39085__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39085__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39085__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39085__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39086){
var map__39087 = p__39086;
var map__39087__$1 = cljs.core.__destructure_map(map__39087);
var src = map__39087__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39087__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39091 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39091) : done.call(null,G__39091));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39095){
var map__39096 = p__39095;
var map__39096__$1 = cljs.core.__destructure_map(map__39096);
var msg__$1 = map__39096__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39096__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39097){var ex = e39097;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39098){
var map__39099 = p__39098;
var map__39099__$1 = cljs.core.__destructure_map(map__39099);
var env = map__39099__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39099__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39112){
var map__39113 = p__39112;
var map__39113__$1 = cljs.core.__destructure_map(map__39113);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39114){
var map__39115 = p__39114;
var map__39115__$1 = cljs.core.__destructure_map(map__39115);
var svc = map__39115__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39115__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
