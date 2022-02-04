goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42080 = arguments.length;
var i__4865__auto___42081 = (0);
while(true){
if((i__4865__auto___42081 < len__4864__auto___42080)){
args__4870__auto__.push((arguments[i__4865__auto___42081]));

var G__42084 = (i__4865__auto___42081 + (1));
i__4865__auto___42081 = G__42084;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41617){
var G__41618 = cljs.core.first(seq41617);
var seq41617__$1 = cljs.core.next(seq41617);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41618,seq41617__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41623 = cljs.core.seq(sources);
var chunk__41624 = null;
var count__41625 = (0);
var i__41626 = (0);
while(true){
if((i__41626 < count__41625)){
var map__41631 = chunk__41624.cljs$core$IIndexed$_nth$arity$2(null,i__41626);
var map__41631__$1 = cljs.core.__destructure_map(map__41631);
var src = map__41631__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41631__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41631__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41631__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41631__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41632){var e_42090 = e41632;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42090);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42090.message)].join('')));
}

var G__42091 = seq__41623;
var G__42092 = chunk__41624;
var G__42093 = count__41625;
var G__42094 = (i__41626 + (1));
seq__41623 = G__42091;
chunk__41624 = G__42092;
count__41625 = G__42093;
i__41626 = G__42094;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41623);
if(temp__5753__auto__){
var seq__41623__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41623__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41623__$1);
var G__42095 = cljs.core.chunk_rest(seq__41623__$1);
var G__42096 = c__4679__auto__;
var G__42097 = cljs.core.count(c__4679__auto__);
var G__42098 = (0);
seq__41623 = G__42095;
chunk__41624 = G__42096;
count__41625 = G__42097;
i__41626 = G__42098;
continue;
} else {
var map__41636 = cljs.core.first(seq__41623__$1);
var map__41636__$1 = cljs.core.__destructure_map(map__41636);
var src = map__41636__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41636__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41636__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41636__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41636__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41637){var e_42099 = e41637;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42099);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42099.message)].join('')));
}

var G__42100 = cljs.core.next(seq__41623__$1);
var G__42101 = null;
var G__42102 = (0);
var G__42103 = (0);
seq__41623 = G__42100;
chunk__41624 = G__42101;
count__41625 = G__42102;
i__41626 = G__42103;
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
var seq__41641 = cljs.core.seq(js_requires);
var chunk__41642 = null;
var count__41643 = (0);
var i__41644 = (0);
while(true){
if((i__41644 < count__41643)){
var js_ns = chunk__41642.cljs$core$IIndexed$_nth$arity$2(null,i__41644);
var require_str_42107 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42107);


var G__42109 = seq__41641;
var G__42110 = chunk__41642;
var G__42111 = count__41643;
var G__42112 = (i__41644 + (1));
seq__41641 = G__42109;
chunk__41642 = G__42110;
count__41643 = G__42111;
i__41644 = G__42112;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41641);
if(temp__5753__auto__){
var seq__41641__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41641__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41641__$1);
var G__42114 = cljs.core.chunk_rest(seq__41641__$1);
var G__42115 = c__4679__auto__;
var G__42116 = cljs.core.count(c__4679__auto__);
var G__42117 = (0);
seq__41641 = G__42114;
chunk__41642 = G__42115;
count__41643 = G__42116;
i__41644 = G__42117;
continue;
} else {
var js_ns = cljs.core.first(seq__41641__$1);
var require_str_42118 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42118);


var G__42119 = cljs.core.next(seq__41641__$1);
var G__42120 = null;
var G__42121 = (0);
var G__42122 = (0);
seq__41641 = G__42119;
chunk__41642 = G__42120;
count__41643 = G__42121;
i__41644 = G__42122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41646){
var map__41647 = p__41646;
var map__41647__$1 = cljs.core.__destructure_map(map__41647);
var msg = map__41647__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41648(s__41649){
return (new cljs.core.LazySeq(null,(function (){
var s__41649__$1 = s__41649;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41649__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__41654 = cljs.core.first(xs__6308__auto__);
var map__41654__$1 = cljs.core.__destructure_map(map__41654);
var src = map__41654__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41654__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__41649__$1,map__41654,map__41654__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41647,map__41647__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41648_$_iter__41650(s__41651){
return (new cljs.core.LazySeq(null,((function (s__41649__$1,map__41654,map__41654__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41647,map__41647__$1,msg,info,reload_info){
return (function (){
var s__41651__$1 = s__41651;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41651__$1);
if(temp__5753__auto____$1){
var s__41651__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41651__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41651__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41653 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41652 = (0);
while(true){
if((i__41652 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__41652);
cljs.core.chunk_append(b__41653,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42130 = (i__41652 + (1));
i__41652 = G__42130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41653),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41648_$_iter__41650(cljs.core.chunk_rest(s__41651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41653),null);
}
} else {
var warning = cljs.core.first(s__41651__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41648_$_iter__41650(cljs.core.rest(s__41651__$2)));
}
} else {
return null;
}
break;
}
});})(s__41649__$1,map__41654,map__41654__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41647,map__41647__$1,msg,info,reload_info))
,null,null));
});})(s__41649__$1,map__41654,map__41654__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41647,map__41647__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41648(cljs.core.rest(s__41649__$1)));
} else {
var G__42131 = cljs.core.rest(s__41649__$1);
s__41649__$1 = G__42131;
continue;
}
} else {
var G__42132 = cljs.core.rest(s__41649__$1);
s__41649__$1 = G__42132;
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
var seq__41659_42133 = cljs.core.seq(warnings);
var chunk__41660_42134 = null;
var count__41661_42135 = (0);
var i__41662_42136 = (0);
while(true){
if((i__41662_42136 < count__41661_42135)){
var map__41667_42137 = chunk__41660_42134.cljs$core$IIndexed$_nth$arity$2(null,i__41662_42136);
var map__41667_42138__$1 = cljs.core.__destructure_map(map__41667_42137);
var w_42139 = map__41667_42138__$1;
var msg_42140__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41667_42138__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41667_42138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41667_42138__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41667_42138__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42143)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42141),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42142),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42140__$1)].join(''));


var G__42144 = seq__41659_42133;
var G__42145 = chunk__41660_42134;
var G__42146 = count__41661_42135;
var G__42147 = (i__41662_42136 + (1));
seq__41659_42133 = G__42144;
chunk__41660_42134 = G__42145;
count__41661_42135 = G__42146;
i__41662_42136 = G__42147;
continue;
} else {
var temp__5753__auto___42148 = cljs.core.seq(seq__41659_42133);
if(temp__5753__auto___42148){
var seq__41659_42149__$1 = temp__5753__auto___42148;
if(cljs.core.chunked_seq_QMARK_(seq__41659_42149__$1)){
var c__4679__auto___42151 = cljs.core.chunk_first(seq__41659_42149__$1);
var G__42152 = cljs.core.chunk_rest(seq__41659_42149__$1);
var G__42153 = c__4679__auto___42151;
var G__42154 = cljs.core.count(c__4679__auto___42151);
var G__42155 = (0);
seq__41659_42133 = G__42152;
chunk__41660_42134 = G__42153;
count__41661_42135 = G__42154;
i__41662_42136 = G__42155;
continue;
} else {
var map__41668_42156 = cljs.core.first(seq__41659_42149__$1);
var map__41668_42157__$1 = cljs.core.__destructure_map(map__41668_42156);
var w_42158 = map__41668_42157__$1;
var msg_42159__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41668_42157__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41668_42157__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41668_42157__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41668_42157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42162)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42160),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42161),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42159__$1)].join(''));


var G__42163 = cljs.core.next(seq__41659_42149__$1);
var G__42164 = null;
var G__42165 = (0);
var G__42166 = (0);
seq__41659_42133 = G__42163;
chunk__41660_42134 = G__42164;
count__41661_42135 = G__42165;
i__41662_42136 = G__42166;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41645_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41645_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41677){
var map__41678 = p__41677;
var map__41678__$1 = cljs.core.__destructure_map(map__41678);
var msg = map__41678__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41679 = cljs.core.seq(updates);
var chunk__41681 = null;
var count__41682 = (0);
var i__41683 = (0);
while(true){
if((i__41683 < count__41682)){
var path = chunk__41681.cljs$core$IIndexed$_nth$arity$2(null,i__41683);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41827_42167 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41831_42168 = null;
var count__41832_42169 = (0);
var i__41833_42170 = (0);
while(true){
if((i__41833_42170 < count__41832_42169)){
var node_42171 = chunk__41831_42168.cljs$core$IIndexed$_nth$arity$2(null,i__41833_42170);
if(cljs.core.not(node_42171.shadow$old)){
var path_match_42172 = shadow.cljs.devtools.client.browser.match_paths(node_42171.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42172)){
var new_link_42173 = (function (){var G__41864 = node_42171.cloneNode(true);
G__41864.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42172),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41864;
})();
(node_42171.shadow$old = true);

(new_link_42173.onload = ((function (seq__41827_42167,chunk__41831_42168,count__41832_42169,i__41833_42170,seq__41679,chunk__41681,count__41682,i__41683,new_link_42173,path_match_42172,node_42171,path,map__41678,map__41678__$1,msg,updates,reload_info){
return (function (e){
var seq__41865_42174 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41867_42175 = null;
var count__41868_42176 = (0);
var i__41869_42177 = (0);
while(true){
if((i__41869_42177 < count__41868_42176)){
var map__41873_42178 = chunk__41867_42175.cljs$core$IIndexed$_nth$arity$2(null,i__41869_42177);
var map__41873_42179__$1 = cljs.core.__destructure_map(map__41873_42178);
var task_42180 = map__41873_42179__$1;
var fn_str_42181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41873_42179__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41873_42179__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42183 = goog.getObjectByName(fn_str_42181,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42182)].join(''));

(fn_obj_42183.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42183.cljs$core$IFn$_invoke$arity$2(path,new_link_42173) : fn_obj_42183.call(null,path,new_link_42173));


var G__42184 = seq__41865_42174;
var G__42185 = chunk__41867_42175;
var G__42186 = count__41868_42176;
var G__42187 = (i__41869_42177 + (1));
seq__41865_42174 = G__42184;
chunk__41867_42175 = G__42185;
count__41868_42176 = G__42186;
i__41869_42177 = G__42187;
continue;
} else {
var temp__5753__auto___42188 = cljs.core.seq(seq__41865_42174);
if(temp__5753__auto___42188){
var seq__41865_42189__$1 = temp__5753__auto___42188;
if(cljs.core.chunked_seq_QMARK_(seq__41865_42189__$1)){
var c__4679__auto___42190 = cljs.core.chunk_first(seq__41865_42189__$1);
var G__42191 = cljs.core.chunk_rest(seq__41865_42189__$1);
var G__42192 = c__4679__auto___42190;
var G__42193 = cljs.core.count(c__4679__auto___42190);
var G__42194 = (0);
seq__41865_42174 = G__42191;
chunk__41867_42175 = G__42192;
count__41868_42176 = G__42193;
i__41869_42177 = G__42194;
continue;
} else {
var map__41877_42195 = cljs.core.first(seq__41865_42189__$1);
var map__41877_42196__$1 = cljs.core.__destructure_map(map__41877_42195);
var task_42197 = map__41877_42196__$1;
var fn_str_42198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877_42196__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877_42196__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42200 = goog.getObjectByName(fn_str_42198,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42199)].join(''));

(fn_obj_42200.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42200.cljs$core$IFn$_invoke$arity$2(path,new_link_42173) : fn_obj_42200.call(null,path,new_link_42173));


var G__42201 = cljs.core.next(seq__41865_42189__$1);
var G__42202 = null;
var G__42203 = (0);
var G__42204 = (0);
seq__41865_42174 = G__42201;
chunk__41867_42175 = G__42202;
count__41868_42176 = G__42203;
i__41869_42177 = G__42204;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42171);
});})(seq__41827_42167,chunk__41831_42168,count__41832_42169,i__41833_42170,seq__41679,chunk__41681,count__41682,i__41683,new_link_42173,path_match_42172,node_42171,path,map__41678,map__41678__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42172], 0));

goog.dom.insertSiblingAfter(new_link_42173,node_42171);


var G__42205 = seq__41827_42167;
var G__42206 = chunk__41831_42168;
var G__42207 = count__41832_42169;
var G__42208 = (i__41833_42170 + (1));
seq__41827_42167 = G__42205;
chunk__41831_42168 = G__42206;
count__41832_42169 = G__42207;
i__41833_42170 = G__42208;
continue;
} else {
var G__42209 = seq__41827_42167;
var G__42210 = chunk__41831_42168;
var G__42211 = count__41832_42169;
var G__42212 = (i__41833_42170 + (1));
seq__41827_42167 = G__42209;
chunk__41831_42168 = G__42210;
count__41832_42169 = G__42211;
i__41833_42170 = G__42212;
continue;
}
} else {
var G__42213 = seq__41827_42167;
var G__42214 = chunk__41831_42168;
var G__42215 = count__41832_42169;
var G__42216 = (i__41833_42170 + (1));
seq__41827_42167 = G__42213;
chunk__41831_42168 = G__42214;
count__41832_42169 = G__42215;
i__41833_42170 = G__42216;
continue;
}
} else {
var temp__5753__auto___42217 = cljs.core.seq(seq__41827_42167);
if(temp__5753__auto___42217){
var seq__41827_42218__$1 = temp__5753__auto___42217;
if(cljs.core.chunked_seq_QMARK_(seq__41827_42218__$1)){
var c__4679__auto___42219 = cljs.core.chunk_first(seq__41827_42218__$1);
var G__42220 = cljs.core.chunk_rest(seq__41827_42218__$1);
var G__42221 = c__4679__auto___42219;
var G__42222 = cljs.core.count(c__4679__auto___42219);
var G__42223 = (0);
seq__41827_42167 = G__42220;
chunk__41831_42168 = G__42221;
count__41832_42169 = G__42222;
i__41833_42170 = G__42223;
continue;
} else {
var node_42224 = cljs.core.first(seq__41827_42218__$1);
if(cljs.core.not(node_42224.shadow$old)){
var path_match_42225 = shadow.cljs.devtools.client.browser.match_paths(node_42224.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42225)){
var new_link_42226 = (function (){var G__41881 = node_42224.cloneNode(true);
G__41881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42225),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41881;
})();
(node_42224.shadow$old = true);

(new_link_42226.onload = ((function (seq__41827_42167,chunk__41831_42168,count__41832_42169,i__41833_42170,seq__41679,chunk__41681,count__41682,i__41683,new_link_42226,path_match_42225,node_42224,seq__41827_42218__$1,temp__5753__auto___42217,path,map__41678,map__41678__$1,msg,updates,reload_info){
return (function (e){
var seq__41882_42227 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41884_42228 = null;
var count__41885_42229 = (0);
var i__41886_42230 = (0);
while(true){
if((i__41886_42230 < count__41885_42229)){
var map__41890_42231 = chunk__41884_42228.cljs$core$IIndexed$_nth$arity$2(null,i__41886_42230);
var map__41890_42232__$1 = cljs.core.__destructure_map(map__41890_42231);
var task_42233 = map__41890_42232__$1;
var fn_str_42234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41890_42232__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41890_42232__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42236 = goog.getObjectByName(fn_str_42234,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42235)].join(''));

(fn_obj_42236.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42236.cljs$core$IFn$_invoke$arity$2(path,new_link_42226) : fn_obj_42236.call(null,path,new_link_42226));


var G__42237 = seq__41882_42227;
var G__42238 = chunk__41884_42228;
var G__42239 = count__41885_42229;
var G__42240 = (i__41886_42230 + (1));
seq__41882_42227 = G__42237;
chunk__41884_42228 = G__42238;
count__41885_42229 = G__42239;
i__41886_42230 = G__42240;
continue;
} else {
var temp__5753__auto___42241__$1 = cljs.core.seq(seq__41882_42227);
if(temp__5753__auto___42241__$1){
var seq__41882_42242__$1 = temp__5753__auto___42241__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41882_42242__$1)){
var c__4679__auto___42243 = cljs.core.chunk_first(seq__41882_42242__$1);
var G__42244 = cljs.core.chunk_rest(seq__41882_42242__$1);
var G__42245 = c__4679__auto___42243;
var G__42246 = cljs.core.count(c__4679__auto___42243);
var G__42247 = (0);
seq__41882_42227 = G__42244;
chunk__41884_42228 = G__42245;
count__41885_42229 = G__42246;
i__41886_42230 = G__42247;
continue;
} else {
var map__41891_42248 = cljs.core.first(seq__41882_42242__$1);
var map__41891_42249__$1 = cljs.core.__destructure_map(map__41891_42248);
var task_42250 = map__41891_42249__$1;
var fn_str_42251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41891_42249__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41891_42249__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42253 = goog.getObjectByName(fn_str_42251,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42252)].join(''));

(fn_obj_42253.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42253.cljs$core$IFn$_invoke$arity$2(path,new_link_42226) : fn_obj_42253.call(null,path,new_link_42226));


var G__42254 = cljs.core.next(seq__41882_42242__$1);
var G__42255 = null;
var G__42256 = (0);
var G__42257 = (0);
seq__41882_42227 = G__42254;
chunk__41884_42228 = G__42255;
count__41885_42229 = G__42256;
i__41886_42230 = G__42257;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42224);
});})(seq__41827_42167,chunk__41831_42168,count__41832_42169,i__41833_42170,seq__41679,chunk__41681,count__41682,i__41683,new_link_42226,path_match_42225,node_42224,seq__41827_42218__$1,temp__5753__auto___42217,path,map__41678,map__41678__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42225], 0));

goog.dom.insertSiblingAfter(new_link_42226,node_42224);


var G__42258 = cljs.core.next(seq__41827_42218__$1);
var G__42259 = null;
var G__42260 = (0);
var G__42261 = (0);
seq__41827_42167 = G__42258;
chunk__41831_42168 = G__42259;
count__41832_42169 = G__42260;
i__41833_42170 = G__42261;
continue;
} else {
var G__42262 = cljs.core.next(seq__41827_42218__$1);
var G__42263 = null;
var G__42264 = (0);
var G__42265 = (0);
seq__41827_42167 = G__42262;
chunk__41831_42168 = G__42263;
count__41832_42169 = G__42264;
i__41833_42170 = G__42265;
continue;
}
} else {
var G__42266 = cljs.core.next(seq__41827_42218__$1);
var G__42267 = null;
var G__42268 = (0);
var G__42269 = (0);
seq__41827_42167 = G__42266;
chunk__41831_42168 = G__42267;
count__41832_42169 = G__42268;
i__41833_42170 = G__42269;
continue;
}
}
} else {
}
}
break;
}


var G__42270 = seq__41679;
var G__42271 = chunk__41681;
var G__42272 = count__41682;
var G__42273 = (i__41683 + (1));
seq__41679 = G__42270;
chunk__41681 = G__42271;
count__41682 = G__42272;
i__41683 = G__42273;
continue;
} else {
var G__42274 = seq__41679;
var G__42275 = chunk__41681;
var G__42276 = count__41682;
var G__42277 = (i__41683 + (1));
seq__41679 = G__42274;
chunk__41681 = G__42275;
count__41682 = G__42276;
i__41683 = G__42277;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41679);
if(temp__5753__auto__){
var seq__41679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41679__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41679__$1);
var G__42278 = cljs.core.chunk_rest(seq__41679__$1);
var G__42279 = c__4679__auto__;
var G__42280 = cljs.core.count(c__4679__auto__);
var G__42281 = (0);
seq__41679 = G__42278;
chunk__41681 = G__42279;
count__41682 = G__42280;
i__41683 = G__42281;
continue;
} else {
var path = cljs.core.first(seq__41679__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41896_42282 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41900_42283 = null;
var count__41901_42284 = (0);
var i__41902_42285 = (0);
while(true){
if((i__41902_42285 < count__41901_42284)){
var node_42286 = chunk__41900_42283.cljs$core$IIndexed$_nth$arity$2(null,i__41902_42285);
if(cljs.core.not(node_42286.shadow$old)){
var path_match_42287 = shadow.cljs.devtools.client.browser.match_paths(node_42286.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42287)){
var new_link_42288 = (function (){var G__41937 = node_42286.cloneNode(true);
G__41937.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42287),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41937;
})();
(node_42286.shadow$old = true);

(new_link_42288.onload = ((function (seq__41896_42282,chunk__41900_42283,count__41901_42284,i__41902_42285,seq__41679,chunk__41681,count__41682,i__41683,new_link_42288,path_match_42287,node_42286,path,seq__41679__$1,temp__5753__auto__,map__41678,map__41678__$1,msg,updates,reload_info){
return (function (e){
var seq__41938_42289 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41940_42290 = null;
var count__41941_42291 = (0);
var i__41942_42292 = (0);
while(true){
if((i__41942_42292 < count__41941_42291)){
var map__41947_42293 = chunk__41940_42290.cljs$core$IIndexed$_nth$arity$2(null,i__41942_42292);
var map__41947_42294__$1 = cljs.core.__destructure_map(map__41947_42293);
var task_42295 = map__41947_42294__$1;
var fn_str_42296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42294__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42294__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42298 = goog.getObjectByName(fn_str_42296,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42297)].join(''));

(fn_obj_42298.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42298.cljs$core$IFn$_invoke$arity$2(path,new_link_42288) : fn_obj_42298.call(null,path,new_link_42288));


var G__42299 = seq__41938_42289;
var G__42300 = chunk__41940_42290;
var G__42301 = count__41941_42291;
var G__42302 = (i__41942_42292 + (1));
seq__41938_42289 = G__42299;
chunk__41940_42290 = G__42300;
count__41941_42291 = G__42301;
i__41942_42292 = G__42302;
continue;
} else {
var temp__5753__auto___42303__$1 = cljs.core.seq(seq__41938_42289);
if(temp__5753__auto___42303__$1){
var seq__41938_42304__$1 = temp__5753__auto___42303__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41938_42304__$1)){
var c__4679__auto___42305 = cljs.core.chunk_first(seq__41938_42304__$1);
var G__42306 = cljs.core.chunk_rest(seq__41938_42304__$1);
var G__42307 = c__4679__auto___42305;
var G__42308 = cljs.core.count(c__4679__auto___42305);
var G__42309 = (0);
seq__41938_42289 = G__42306;
chunk__41940_42290 = G__42307;
count__41941_42291 = G__42308;
i__41942_42292 = G__42309;
continue;
} else {
var map__41948_42310 = cljs.core.first(seq__41938_42304__$1);
var map__41948_42311__$1 = cljs.core.__destructure_map(map__41948_42310);
var task_42312 = map__41948_42311__$1;
var fn_str_42313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948_42311__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948_42311__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42315 = goog.getObjectByName(fn_str_42313,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42314)].join(''));

(fn_obj_42315.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42315.cljs$core$IFn$_invoke$arity$2(path,new_link_42288) : fn_obj_42315.call(null,path,new_link_42288));


var G__42316 = cljs.core.next(seq__41938_42304__$1);
var G__42317 = null;
var G__42318 = (0);
var G__42319 = (0);
seq__41938_42289 = G__42316;
chunk__41940_42290 = G__42317;
count__41941_42291 = G__42318;
i__41942_42292 = G__42319;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42286);
});})(seq__41896_42282,chunk__41900_42283,count__41901_42284,i__41902_42285,seq__41679,chunk__41681,count__41682,i__41683,new_link_42288,path_match_42287,node_42286,path,seq__41679__$1,temp__5753__auto__,map__41678,map__41678__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42287], 0));

goog.dom.insertSiblingAfter(new_link_42288,node_42286);


var G__42321 = seq__41896_42282;
var G__42322 = chunk__41900_42283;
var G__42323 = count__41901_42284;
var G__42324 = (i__41902_42285 + (1));
seq__41896_42282 = G__42321;
chunk__41900_42283 = G__42322;
count__41901_42284 = G__42323;
i__41902_42285 = G__42324;
continue;
} else {
var G__42325 = seq__41896_42282;
var G__42326 = chunk__41900_42283;
var G__42327 = count__41901_42284;
var G__42328 = (i__41902_42285 + (1));
seq__41896_42282 = G__42325;
chunk__41900_42283 = G__42326;
count__41901_42284 = G__42327;
i__41902_42285 = G__42328;
continue;
}
} else {
var G__42329 = seq__41896_42282;
var G__42330 = chunk__41900_42283;
var G__42331 = count__41901_42284;
var G__42332 = (i__41902_42285 + (1));
seq__41896_42282 = G__42329;
chunk__41900_42283 = G__42330;
count__41901_42284 = G__42331;
i__41902_42285 = G__42332;
continue;
}
} else {
var temp__5753__auto___42333__$1 = cljs.core.seq(seq__41896_42282);
if(temp__5753__auto___42333__$1){
var seq__41896_42334__$1 = temp__5753__auto___42333__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41896_42334__$1)){
var c__4679__auto___42335 = cljs.core.chunk_first(seq__41896_42334__$1);
var G__42336 = cljs.core.chunk_rest(seq__41896_42334__$1);
var G__42337 = c__4679__auto___42335;
var G__42338 = cljs.core.count(c__4679__auto___42335);
var G__42339 = (0);
seq__41896_42282 = G__42336;
chunk__41900_42283 = G__42337;
count__41901_42284 = G__42338;
i__41902_42285 = G__42339;
continue;
} else {
var node_42340 = cljs.core.first(seq__41896_42334__$1);
if(cljs.core.not(node_42340.shadow$old)){
var path_match_42341 = shadow.cljs.devtools.client.browser.match_paths(node_42340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42341)){
var new_link_42342 = (function (){var G__41952 = node_42340.cloneNode(true);
G__41952.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42341),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41952;
})();
(node_42340.shadow$old = true);

(new_link_42342.onload = ((function (seq__41896_42282,chunk__41900_42283,count__41901_42284,i__41902_42285,seq__41679,chunk__41681,count__41682,i__41683,new_link_42342,path_match_42341,node_42340,seq__41896_42334__$1,temp__5753__auto___42333__$1,path,seq__41679__$1,temp__5753__auto__,map__41678,map__41678__$1,msg,updates,reload_info){
return (function (e){
var seq__41953_42343 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41955_42344 = null;
var count__41956_42345 = (0);
var i__41957_42346 = (0);
while(true){
if((i__41957_42346 < count__41956_42345)){
var map__41964_42347 = chunk__41955_42344.cljs$core$IIndexed$_nth$arity$2(null,i__41957_42346);
var map__41964_42348__$1 = cljs.core.__destructure_map(map__41964_42347);
var task_42349 = map__41964_42348__$1;
var fn_str_42350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964_42348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964_42348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42352 = goog.getObjectByName(fn_str_42350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42351)].join(''));

(fn_obj_42352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42352.cljs$core$IFn$_invoke$arity$2(path,new_link_42342) : fn_obj_42352.call(null,path,new_link_42342));


var G__42353 = seq__41953_42343;
var G__42354 = chunk__41955_42344;
var G__42355 = count__41956_42345;
var G__42356 = (i__41957_42346 + (1));
seq__41953_42343 = G__42353;
chunk__41955_42344 = G__42354;
count__41956_42345 = G__42355;
i__41957_42346 = G__42356;
continue;
} else {
var temp__5753__auto___42357__$2 = cljs.core.seq(seq__41953_42343);
if(temp__5753__auto___42357__$2){
var seq__41953_42358__$1 = temp__5753__auto___42357__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41953_42358__$1)){
var c__4679__auto___42359 = cljs.core.chunk_first(seq__41953_42358__$1);
var G__42360 = cljs.core.chunk_rest(seq__41953_42358__$1);
var G__42361 = c__4679__auto___42359;
var G__42362 = cljs.core.count(c__4679__auto___42359);
var G__42363 = (0);
seq__41953_42343 = G__42360;
chunk__41955_42344 = G__42361;
count__41956_42345 = G__42362;
i__41957_42346 = G__42363;
continue;
} else {
var map__41966_42364 = cljs.core.first(seq__41953_42358__$1);
var map__41966_42365__$1 = cljs.core.__destructure_map(map__41966_42364);
var task_42366 = map__41966_42365__$1;
var fn_str_42367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41966_42365__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41966_42365__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42369 = goog.getObjectByName(fn_str_42367,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42368)].join(''));

(fn_obj_42369.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42369.cljs$core$IFn$_invoke$arity$2(path,new_link_42342) : fn_obj_42369.call(null,path,new_link_42342));


var G__42370 = cljs.core.next(seq__41953_42358__$1);
var G__42371 = null;
var G__42372 = (0);
var G__42373 = (0);
seq__41953_42343 = G__42370;
chunk__41955_42344 = G__42371;
count__41956_42345 = G__42372;
i__41957_42346 = G__42373;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42340);
});})(seq__41896_42282,chunk__41900_42283,count__41901_42284,i__41902_42285,seq__41679,chunk__41681,count__41682,i__41683,new_link_42342,path_match_42341,node_42340,seq__41896_42334__$1,temp__5753__auto___42333__$1,path,seq__41679__$1,temp__5753__auto__,map__41678,map__41678__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42341], 0));

goog.dom.insertSiblingAfter(new_link_42342,node_42340);


var G__42374 = cljs.core.next(seq__41896_42334__$1);
var G__42375 = null;
var G__42376 = (0);
var G__42377 = (0);
seq__41896_42282 = G__42374;
chunk__41900_42283 = G__42375;
count__41901_42284 = G__42376;
i__41902_42285 = G__42377;
continue;
} else {
var G__42378 = cljs.core.next(seq__41896_42334__$1);
var G__42379 = null;
var G__42380 = (0);
var G__42381 = (0);
seq__41896_42282 = G__42378;
chunk__41900_42283 = G__42379;
count__41901_42284 = G__42380;
i__41902_42285 = G__42381;
continue;
}
} else {
var G__42382 = cljs.core.next(seq__41896_42334__$1);
var G__42383 = null;
var G__42384 = (0);
var G__42385 = (0);
seq__41896_42282 = G__42382;
chunk__41900_42283 = G__42383;
count__41901_42284 = G__42384;
i__41902_42285 = G__42385;
continue;
}
}
} else {
}
}
break;
}


var G__42386 = cljs.core.next(seq__41679__$1);
var G__42387 = null;
var G__42388 = (0);
var G__42389 = (0);
seq__41679 = G__42386;
chunk__41681 = G__42387;
count__41682 = G__42388;
i__41683 = G__42389;
continue;
} else {
var G__42390 = cljs.core.next(seq__41679__$1);
var G__42391 = null;
var G__42392 = (0);
var G__42393 = (0);
seq__41679 = G__42390;
chunk__41681 = G__42391;
count__41682 = G__42392;
i__41683 = G__42393;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41975){
var map__41976 = p__41975;
var map__41976__$1 = cljs.core.__destructure_map(map__41976);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41976__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41996){
var map__41997 = p__41996;
var map__41997__$1 = cljs.core.__destructure_map(map__41997);
var _ = map__41997__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41997__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41998,done,error){
var map__41999 = p__41998;
var map__41999__$1 = cljs.core.__destructure_map(map__41999);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41999__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42004,done,error){
var map__42005 = p__42004;
var map__42005__$1 = cljs.core.__destructure_map(map__42005);
var msg = map__42005__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42006){
var map__42007 = p__42006;
var map__42007__$1 = cljs.core.__destructure_map(map__42007);
var src = map__42007__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42007__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42008 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42008) : done.call(null,G__42008));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42010){
var map__42011 = p__42010;
var map__42011__$1 = cljs.core.__destructure_map(map__42011);
var msg__$1 = map__42011__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42011__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42013){var ex = e42013;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42017){
var map__42018 = p__42017;
var map__42018__$1 = cljs.core.__destructure_map(map__42018);
var env = map__42018__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42018__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42049){
var map__42050 = p__42049;
var map__42050__$1 = cljs.core.__destructure_map(map__42050);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42050__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42050__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__42061){
var map__42062 = p__42061;
var map__42062__$1 = cljs.core.__destructure_map(map__42062);
var svc = map__42062__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42062__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
