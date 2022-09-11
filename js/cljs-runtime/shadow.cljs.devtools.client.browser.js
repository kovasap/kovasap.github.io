goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39072 = arguments.length;
var i__5770__auto___39073 = (0);
while(true){
if((i__5770__auto___39073 < len__5769__auto___39072)){
args__5775__auto__.push((arguments[i__5770__auto___39073]));

var G__39074 = (i__5770__auto___39073 + (1));
i__5770__auto___39073 = G__39074;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38574){
var G__38575 = cljs.core.first(seq38574);
var seq38574__$1 = cljs.core.next(seq38574);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38575,seq38574__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38580 = cljs.core.seq(sources);
var chunk__38581 = null;
var count__38582 = (0);
var i__38583 = (0);
while(true){
if((i__38583 < count__38582)){
var map__38594 = chunk__38581.cljs$core$IIndexed$_nth$arity$2(null,i__38583);
var map__38594__$1 = cljs.core.__destructure_map(map__38594);
var src = map__38594__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38595){var e_39077 = e38595;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39077);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39077.message)].join('')));
}

var G__39078 = seq__38580;
var G__39079 = chunk__38581;
var G__39080 = count__38582;
var G__39081 = (i__38583 + (1));
seq__38580 = G__39078;
chunk__38581 = G__39079;
count__38582 = G__39080;
i__38583 = G__39081;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38580);
if(temp__5804__auto__){
var seq__38580__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38580__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38580__$1);
var G__39083 = cljs.core.chunk_rest(seq__38580__$1);
var G__39084 = c__5568__auto__;
var G__39085 = cljs.core.count(c__5568__auto__);
var G__39086 = (0);
seq__38580 = G__39083;
chunk__38581 = G__39084;
count__38582 = G__39085;
i__38583 = G__39086;
continue;
} else {
var map__38598 = cljs.core.first(seq__38580__$1);
var map__38598__$1 = cljs.core.__destructure_map(map__38598);
var src = map__38598__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38601){var e_39087 = e38601;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39087);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39087.message)].join('')));
}

var G__39088 = cljs.core.next(seq__38580__$1);
var G__39089 = null;
var G__39090 = (0);
var G__39091 = (0);
seq__38580 = G__39088;
chunk__38581 = G__39089;
count__38582 = G__39090;
i__38583 = G__39091;
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
var seq__38602 = cljs.core.seq(js_requires);
var chunk__38603 = null;
var count__38604 = (0);
var i__38605 = (0);
while(true){
if((i__38605 < count__38604)){
var js_ns = chunk__38603.cljs$core$IIndexed$_nth$arity$2(null,i__38605);
var require_str_39092 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39092);


var G__39093 = seq__38602;
var G__39094 = chunk__38603;
var G__39095 = count__38604;
var G__39096 = (i__38605 + (1));
seq__38602 = G__39093;
chunk__38603 = G__39094;
count__38604 = G__39095;
i__38605 = G__39096;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38602);
if(temp__5804__auto__){
var seq__38602__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38602__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38602__$1);
var G__39097 = cljs.core.chunk_rest(seq__38602__$1);
var G__39098 = c__5568__auto__;
var G__39099 = cljs.core.count(c__5568__auto__);
var G__39100 = (0);
seq__38602 = G__39097;
chunk__38603 = G__39098;
count__38604 = G__39099;
i__38605 = G__39100;
continue;
} else {
var js_ns = cljs.core.first(seq__38602__$1);
var require_str_39101 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39101);


var G__39102 = cljs.core.next(seq__38602__$1);
var G__39103 = null;
var G__39104 = (0);
var G__39105 = (0);
seq__38602 = G__39102;
chunk__38603 = G__39103;
count__38604 = G__39104;
i__38605 = G__39105;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38607){
var map__38608 = p__38607;
var map__38608__$1 = cljs.core.__destructure_map(map__38608);
var msg = map__38608__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38608__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38608__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38609(s__38610){
return (new cljs.core.LazySeq(null,(function (){
var s__38610__$1 = s__38610;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38610__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38615 = cljs.core.first(xs__6360__auto__);
var map__38615__$1 = cljs.core.__destructure_map(map__38615);
var src = map__38615__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38615__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38610__$1,map__38615,map__38615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38608,map__38608__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38609_$_iter__38611(s__38612){
return (new cljs.core.LazySeq(null,((function (s__38610__$1,map__38615,map__38615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38608,map__38608__$1,msg,info,reload_info){
return (function (){
var s__38612__$1 = s__38612;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38612__$1);
if(temp__5804__auto____$1){
var s__38612__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38612__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38612__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38614 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38613 = (0);
while(true){
if((i__38613 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38613);
cljs.core.chunk_append(b__38614,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39118 = (i__38613 + (1));
i__38613 = G__39118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38614),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38609_$_iter__38611(cljs.core.chunk_rest(s__38612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38614),null);
}
} else {
var warning = cljs.core.first(s__38612__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38609_$_iter__38611(cljs.core.rest(s__38612__$2)));
}
} else {
return null;
}
break;
}
});})(s__38610__$1,map__38615,map__38615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38608,map__38608__$1,msg,info,reload_info))
,null,null));
});})(s__38610__$1,map__38615,map__38615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38608,map__38608__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38609(cljs.core.rest(s__38610__$1)));
} else {
var G__39122 = cljs.core.rest(s__38610__$1);
s__38610__$1 = G__39122;
continue;
}
} else {
var G__39123 = cljs.core.rest(s__38610__$1);
s__38610__$1 = G__39123;
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
var seq__38616_39124 = cljs.core.seq(warnings);
var chunk__38617_39125 = null;
var count__38618_39126 = (0);
var i__38619_39127 = (0);
while(true){
if((i__38619_39127 < count__38618_39126)){
var map__38623_39128 = chunk__38617_39125.cljs$core$IIndexed$_nth$arity$2(null,i__38619_39127);
var map__38623_39129__$1 = cljs.core.__destructure_map(map__38623_39128);
var w_39130 = map__38623_39129__$1;
var msg_39131__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623_39129__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623_39129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623_39129__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623_39129__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39134)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39132),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39133),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39131__$1)].join(''));


var G__39143 = seq__38616_39124;
var G__39144 = chunk__38617_39125;
var G__39145 = count__38618_39126;
var G__39146 = (i__38619_39127 + (1));
seq__38616_39124 = G__39143;
chunk__38617_39125 = G__39144;
count__38618_39126 = G__39145;
i__38619_39127 = G__39146;
continue;
} else {
var temp__5804__auto___39147 = cljs.core.seq(seq__38616_39124);
if(temp__5804__auto___39147){
var seq__38616_39149__$1 = temp__5804__auto___39147;
if(cljs.core.chunked_seq_QMARK_(seq__38616_39149__$1)){
var c__5568__auto___39150 = cljs.core.chunk_first(seq__38616_39149__$1);
var G__39151 = cljs.core.chunk_rest(seq__38616_39149__$1);
var G__39152 = c__5568__auto___39150;
var G__39153 = cljs.core.count(c__5568__auto___39150);
var G__39154 = (0);
seq__38616_39124 = G__39151;
chunk__38617_39125 = G__39152;
count__38618_39126 = G__39153;
i__38619_39127 = G__39154;
continue;
} else {
var map__38627_39155 = cljs.core.first(seq__38616_39149__$1);
var map__38627_39156__$1 = cljs.core.__destructure_map(map__38627_39155);
var w_39157 = map__38627_39156__$1;
var msg_39158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39156__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39156__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39156__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627_39156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39161)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39159),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39160),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39158__$1)].join(''));


var G__39163 = cljs.core.next(seq__38616_39149__$1);
var G__39164 = null;
var G__39165 = (0);
var G__39166 = (0);
seq__38616_39124 = G__39163;
chunk__38617_39125 = G__39164;
count__38618_39126 = G__39165;
i__38619_39127 = G__39166;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38606_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38606_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38633){
var map__38634 = p__38633;
var map__38634__$1 = cljs.core.__destructure_map(map__38634);
var msg = map__38634__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38636 = cljs.core.seq(updates);
var chunk__38638 = null;
var count__38639 = (0);
var i__38640 = (0);
while(true){
if((i__38640 < count__38639)){
var path = chunk__38638.cljs$core$IIndexed$_nth$arity$2(null,i__38640);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38854_39172 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38858_39173 = null;
var count__38859_39174 = (0);
var i__38860_39175 = (0);
while(true){
if((i__38860_39175 < count__38859_39174)){
var node_39176 = chunk__38858_39173.cljs$core$IIndexed$_nth$arity$2(null,i__38860_39175);
if(cljs.core.not(node_39176.shadow$old)){
var path_match_39177 = shadow.cljs.devtools.client.browser.match_paths(node_39176.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39177)){
var new_link_39178 = (function (){var G__38892 = node_39176.cloneNode(true);
G__38892.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39177),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38892;
})();
(node_39176.shadow$old = true);

(new_link_39178.onload = ((function (seq__38854_39172,chunk__38858_39173,count__38859_39174,i__38860_39175,seq__38636,chunk__38638,count__38639,i__38640,new_link_39178,path_match_39177,node_39176,path,map__38634,map__38634__$1,msg,updates,reload_info){
return (function (e){
var seq__38894_39179 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38896_39180 = null;
var count__38897_39181 = (0);
var i__38898_39182 = (0);
while(true){
if((i__38898_39182 < count__38897_39181)){
var map__38902_39183 = chunk__38896_39180.cljs$core$IIndexed$_nth$arity$2(null,i__38898_39182);
var map__38902_39184__$1 = cljs.core.__destructure_map(map__38902_39183);
var task_39185 = map__38902_39184__$1;
var fn_str_39186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39184__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39184__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39188 = goog.getObjectByName(fn_str_39186,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39187)].join(''));

(fn_obj_39188.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39188.cljs$core$IFn$_invoke$arity$2(path,new_link_39178) : fn_obj_39188.call(null,path,new_link_39178));


var G__39189 = seq__38894_39179;
var G__39190 = chunk__38896_39180;
var G__39191 = count__38897_39181;
var G__39192 = (i__38898_39182 + (1));
seq__38894_39179 = G__39189;
chunk__38896_39180 = G__39190;
count__38897_39181 = G__39191;
i__38898_39182 = G__39192;
continue;
} else {
var temp__5804__auto___39196 = cljs.core.seq(seq__38894_39179);
if(temp__5804__auto___39196){
var seq__38894_39197__$1 = temp__5804__auto___39196;
if(cljs.core.chunked_seq_QMARK_(seq__38894_39197__$1)){
var c__5568__auto___39198 = cljs.core.chunk_first(seq__38894_39197__$1);
var G__39199 = cljs.core.chunk_rest(seq__38894_39197__$1);
var G__39200 = c__5568__auto___39198;
var G__39201 = cljs.core.count(c__5568__auto___39198);
var G__39202 = (0);
seq__38894_39179 = G__39199;
chunk__38896_39180 = G__39200;
count__38897_39181 = G__39201;
i__38898_39182 = G__39202;
continue;
} else {
var map__38903_39203 = cljs.core.first(seq__38894_39197__$1);
var map__38903_39204__$1 = cljs.core.__destructure_map(map__38903_39203);
var task_39205 = map__38903_39204__$1;
var fn_str_39206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903_39204__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903_39204__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39208 = goog.getObjectByName(fn_str_39206,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39207)].join(''));

(fn_obj_39208.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39208.cljs$core$IFn$_invoke$arity$2(path,new_link_39178) : fn_obj_39208.call(null,path,new_link_39178));


var G__39209 = cljs.core.next(seq__38894_39197__$1);
var G__39210 = null;
var G__39211 = (0);
var G__39212 = (0);
seq__38894_39179 = G__39209;
chunk__38896_39180 = G__39210;
count__38897_39181 = G__39211;
i__38898_39182 = G__39212;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39176);
});})(seq__38854_39172,chunk__38858_39173,count__38859_39174,i__38860_39175,seq__38636,chunk__38638,count__38639,i__38640,new_link_39178,path_match_39177,node_39176,path,map__38634,map__38634__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39177], 0));

goog.dom.insertSiblingAfter(new_link_39178,node_39176);


var G__39213 = seq__38854_39172;
var G__39214 = chunk__38858_39173;
var G__39215 = count__38859_39174;
var G__39216 = (i__38860_39175 + (1));
seq__38854_39172 = G__39213;
chunk__38858_39173 = G__39214;
count__38859_39174 = G__39215;
i__38860_39175 = G__39216;
continue;
} else {
var G__39217 = seq__38854_39172;
var G__39218 = chunk__38858_39173;
var G__39219 = count__38859_39174;
var G__39220 = (i__38860_39175 + (1));
seq__38854_39172 = G__39217;
chunk__38858_39173 = G__39218;
count__38859_39174 = G__39219;
i__38860_39175 = G__39220;
continue;
}
} else {
var G__39221 = seq__38854_39172;
var G__39222 = chunk__38858_39173;
var G__39223 = count__38859_39174;
var G__39224 = (i__38860_39175 + (1));
seq__38854_39172 = G__39221;
chunk__38858_39173 = G__39222;
count__38859_39174 = G__39223;
i__38860_39175 = G__39224;
continue;
}
} else {
var temp__5804__auto___39225 = cljs.core.seq(seq__38854_39172);
if(temp__5804__auto___39225){
var seq__38854_39226__$1 = temp__5804__auto___39225;
if(cljs.core.chunked_seq_QMARK_(seq__38854_39226__$1)){
var c__5568__auto___39227 = cljs.core.chunk_first(seq__38854_39226__$1);
var G__39228 = cljs.core.chunk_rest(seq__38854_39226__$1);
var G__39229 = c__5568__auto___39227;
var G__39230 = cljs.core.count(c__5568__auto___39227);
var G__39231 = (0);
seq__38854_39172 = G__39228;
chunk__38858_39173 = G__39229;
count__38859_39174 = G__39230;
i__38860_39175 = G__39231;
continue;
} else {
var node_39232 = cljs.core.first(seq__38854_39226__$1);
if(cljs.core.not(node_39232.shadow$old)){
var path_match_39233 = shadow.cljs.devtools.client.browser.match_paths(node_39232.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39233)){
var new_link_39236 = (function (){var G__38904 = node_39232.cloneNode(true);
G__38904.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39233),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38904;
})();
(node_39232.shadow$old = true);

(new_link_39236.onload = ((function (seq__38854_39172,chunk__38858_39173,count__38859_39174,i__38860_39175,seq__38636,chunk__38638,count__38639,i__38640,new_link_39236,path_match_39233,node_39232,seq__38854_39226__$1,temp__5804__auto___39225,path,map__38634,map__38634__$1,msg,updates,reload_info){
return (function (e){
var seq__38905_39237 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38907_39238 = null;
var count__38908_39239 = (0);
var i__38909_39240 = (0);
while(true){
if((i__38909_39240 < count__38908_39239)){
var map__38914_39242 = chunk__38907_39238.cljs$core$IIndexed$_nth$arity$2(null,i__38909_39240);
var map__38914_39243__$1 = cljs.core.__destructure_map(map__38914_39242);
var task_39244 = map__38914_39243__$1;
var fn_str_39245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914_39243__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914_39243__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39247 = goog.getObjectByName(fn_str_39245,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39246)].join(''));

(fn_obj_39247.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39247.cljs$core$IFn$_invoke$arity$2(path,new_link_39236) : fn_obj_39247.call(null,path,new_link_39236));


var G__39248 = seq__38905_39237;
var G__39249 = chunk__38907_39238;
var G__39250 = count__38908_39239;
var G__39251 = (i__38909_39240 + (1));
seq__38905_39237 = G__39248;
chunk__38907_39238 = G__39249;
count__38908_39239 = G__39250;
i__38909_39240 = G__39251;
continue;
} else {
var temp__5804__auto___39252__$1 = cljs.core.seq(seq__38905_39237);
if(temp__5804__auto___39252__$1){
var seq__38905_39253__$1 = temp__5804__auto___39252__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38905_39253__$1)){
var c__5568__auto___39254 = cljs.core.chunk_first(seq__38905_39253__$1);
var G__39255 = cljs.core.chunk_rest(seq__38905_39253__$1);
var G__39256 = c__5568__auto___39254;
var G__39257 = cljs.core.count(c__5568__auto___39254);
var G__39258 = (0);
seq__38905_39237 = G__39255;
chunk__38907_39238 = G__39256;
count__38908_39239 = G__39257;
i__38909_39240 = G__39258;
continue;
} else {
var map__38922_39259 = cljs.core.first(seq__38905_39253__$1);
var map__38922_39260__$1 = cljs.core.__destructure_map(map__38922_39259);
var task_39261 = map__38922_39260__$1;
var fn_str_39262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38922_39260__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38922_39260__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39264 = goog.getObjectByName(fn_str_39262,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39263)].join(''));

(fn_obj_39264.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39264.cljs$core$IFn$_invoke$arity$2(path,new_link_39236) : fn_obj_39264.call(null,path,new_link_39236));


var G__39265 = cljs.core.next(seq__38905_39253__$1);
var G__39266 = null;
var G__39267 = (0);
var G__39268 = (0);
seq__38905_39237 = G__39265;
chunk__38907_39238 = G__39266;
count__38908_39239 = G__39267;
i__38909_39240 = G__39268;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39232);
});})(seq__38854_39172,chunk__38858_39173,count__38859_39174,i__38860_39175,seq__38636,chunk__38638,count__38639,i__38640,new_link_39236,path_match_39233,node_39232,seq__38854_39226__$1,temp__5804__auto___39225,path,map__38634,map__38634__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39233], 0));

goog.dom.insertSiblingAfter(new_link_39236,node_39232);


var G__39269 = cljs.core.next(seq__38854_39226__$1);
var G__39270 = null;
var G__39271 = (0);
var G__39272 = (0);
seq__38854_39172 = G__39269;
chunk__38858_39173 = G__39270;
count__38859_39174 = G__39271;
i__38860_39175 = G__39272;
continue;
} else {
var G__39273 = cljs.core.next(seq__38854_39226__$1);
var G__39274 = null;
var G__39275 = (0);
var G__39276 = (0);
seq__38854_39172 = G__39273;
chunk__38858_39173 = G__39274;
count__38859_39174 = G__39275;
i__38860_39175 = G__39276;
continue;
}
} else {
var G__39277 = cljs.core.next(seq__38854_39226__$1);
var G__39278 = null;
var G__39279 = (0);
var G__39280 = (0);
seq__38854_39172 = G__39277;
chunk__38858_39173 = G__39278;
count__38859_39174 = G__39279;
i__38860_39175 = G__39280;
continue;
}
}
} else {
}
}
break;
}


var G__39281 = seq__38636;
var G__39282 = chunk__38638;
var G__39283 = count__38639;
var G__39284 = (i__38640 + (1));
seq__38636 = G__39281;
chunk__38638 = G__39282;
count__38639 = G__39283;
i__38640 = G__39284;
continue;
} else {
var G__39286 = seq__38636;
var G__39287 = chunk__38638;
var G__39288 = count__38639;
var G__39289 = (i__38640 + (1));
seq__38636 = G__39286;
chunk__38638 = G__39287;
count__38639 = G__39288;
i__38640 = G__39289;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38636);
if(temp__5804__auto__){
var seq__38636__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38636__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38636__$1);
var G__39290 = cljs.core.chunk_rest(seq__38636__$1);
var G__39291 = c__5568__auto__;
var G__39292 = cljs.core.count(c__5568__auto__);
var G__39293 = (0);
seq__38636 = G__39290;
chunk__38638 = G__39291;
count__38639 = G__39292;
i__38640 = G__39293;
continue;
} else {
var path = cljs.core.first(seq__38636__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38924_39294 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38928_39295 = null;
var count__38929_39296 = (0);
var i__38930_39297 = (0);
while(true){
if((i__38930_39297 < count__38929_39296)){
var node_39298 = chunk__38928_39295.cljs$core$IIndexed$_nth$arity$2(null,i__38930_39297);
if(cljs.core.not(node_39298.shadow$old)){
var path_match_39299 = shadow.cljs.devtools.client.browser.match_paths(node_39298.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39299)){
var new_link_39301 = (function (){var G__38976 = node_39298.cloneNode(true);
G__38976.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39299),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38976;
})();
(node_39298.shadow$old = true);

(new_link_39301.onload = ((function (seq__38924_39294,chunk__38928_39295,count__38929_39296,i__38930_39297,seq__38636,chunk__38638,count__38639,i__38640,new_link_39301,path_match_39299,node_39298,path,seq__38636__$1,temp__5804__auto__,map__38634,map__38634__$1,msg,updates,reload_info){
return (function (e){
var seq__38977_39302 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38979_39303 = null;
var count__38980_39304 = (0);
var i__38981_39305 = (0);
while(true){
if((i__38981_39305 < count__38980_39304)){
var map__38990_39306 = chunk__38979_39303.cljs$core$IIndexed$_nth$arity$2(null,i__38981_39305);
var map__38990_39307__$1 = cljs.core.__destructure_map(map__38990_39306);
var task_39308 = map__38990_39307__$1;
var fn_str_39309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990_39307__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990_39307__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39312 = goog.getObjectByName(fn_str_39309,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39310)].join(''));

(fn_obj_39312.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39312.cljs$core$IFn$_invoke$arity$2(path,new_link_39301) : fn_obj_39312.call(null,path,new_link_39301));


var G__39313 = seq__38977_39302;
var G__39314 = chunk__38979_39303;
var G__39315 = count__38980_39304;
var G__39316 = (i__38981_39305 + (1));
seq__38977_39302 = G__39313;
chunk__38979_39303 = G__39314;
count__38980_39304 = G__39315;
i__38981_39305 = G__39316;
continue;
} else {
var temp__5804__auto___39317__$1 = cljs.core.seq(seq__38977_39302);
if(temp__5804__auto___39317__$1){
var seq__38977_39318__$1 = temp__5804__auto___39317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38977_39318__$1)){
var c__5568__auto___39319 = cljs.core.chunk_first(seq__38977_39318__$1);
var G__39320 = cljs.core.chunk_rest(seq__38977_39318__$1);
var G__39321 = c__5568__auto___39319;
var G__39322 = cljs.core.count(c__5568__auto___39319);
var G__39323 = (0);
seq__38977_39302 = G__39320;
chunk__38979_39303 = G__39321;
count__38980_39304 = G__39322;
i__38981_39305 = G__39323;
continue;
} else {
var map__38991_39324 = cljs.core.first(seq__38977_39318__$1);
var map__38991_39325__$1 = cljs.core.__destructure_map(map__38991_39324);
var task_39326 = map__38991_39325__$1;
var fn_str_39327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38991_39325__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38991_39325__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39329 = goog.getObjectByName(fn_str_39327,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39328)].join(''));

(fn_obj_39329.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39329.cljs$core$IFn$_invoke$arity$2(path,new_link_39301) : fn_obj_39329.call(null,path,new_link_39301));


var G__39330 = cljs.core.next(seq__38977_39318__$1);
var G__39331 = null;
var G__39332 = (0);
var G__39333 = (0);
seq__38977_39302 = G__39330;
chunk__38979_39303 = G__39331;
count__38980_39304 = G__39332;
i__38981_39305 = G__39333;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39298);
});})(seq__38924_39294,chunk__38928_39295,count__38929_39296,i__38930_39297,seq__38636,chunk__38638,count__38639,i__38640,new_link_39301,path_match_39299,node_39298,path,seq__38636__$1,temp__5804__auto__,map__38634,map__38634__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39299], 0));

goog.dom.insertSiblingAfter(new_link_39301,node_39298);


var G__39334 = seq__38924_39294;
var G__39335 = chunk__38928_39295;
var G__39336 = count__38929_39296;
var G__39337 = (i__38930_39297 + (1));
seq__38924_39294 = G__39334;
chunk__38928_39295 = G__39335;
count__38929_39296 = G__39336;
i__38930_39297 = G__39337;
continue;
} else {
var G__39340 = seq__38924_39294;
var G__39341 = chunk__38928_39295;
var G__39342 = count__38929_39296;
var G__39343 = (i__38930_39297 + (1));
seq__38924_39294 = G__39340;
chunk__38928_39295 = G__39341;
count__38929_39296 = G__39342;
i__38930_39297 = G__39343;
continue;
}
} else {
var G__39345 = seq__38924_39294;
var G__39346 = chunk__38928_39295;
var G__39347 = count__38929_39296;
var G__39348 = (i__38930_39297 + (1));
seq__38924_39294 = G__39345;
chunk__38928_39295 = G__39346;
count__38929_39296 = G__39347;
i__38930_39297 = G__39348;
continue;
}
} else {
var temp__5804__auto___39349__$1 = cljs.core.seq(seq__38924_39294);
if(temp__5804__auto___39349__$1){
var seq__38924_39350__$1 = temp__5804__auto___39349__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38924_39350__$1)){
var c__5568__auto___39351 = cljs.core.chunk_first(seq__38924_39350__$1);
var G__39352 = cljs.core.chunk_rest(seq__38924_39350__$1);
var G__39353 = c__5568__auto___39351;
var G__39354 = cljs.core.count(c__5568__auto___39351);
var G__39355 = (0);
seq__38924_39294 = G__39352;
chunk__38928_39295 = G__39353;
count__38929_39296 = G__39354;
i__38930_39297 = G__39355;
continue;
} else {
var node_39356 = cljs.core.first(seq__38924_39350__$1);
if(cljs.core.not(node_39356.shadow$old)){
var path_match_39357 = shadow.cljs.devtools.client.browser.match_paths(node_39356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39357)){
var new_link_39358 = (function (){var G__38999 = node_39356.cloneNode(true);
G__38999.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38999;
})();
(node_39356.shadow$old = true);

(new_link_39358.onload = ((function (seq__38924_39294,chunk__38928_39295,count__38929_39296,i__38930_39297,seq__38636,chunk__38638,count__38639,i__38640,new_link_39358,path_match_39357,node_39356,seq__38924_39350__$1,temp__5804__auto___39349__$1,path,seq__38636__$1,temp__5804__auto__,map__38634,map__38634__$1,msg,updates,reload_info){
return (function (e){
var seq__39004_39361 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39006_39362 = null;
var count__39007_39363 = (0);
var i__39008_39364 = (0);
while(true){
if((i__39008_39364 < count__39007_39363)){
var map__39020_39366 = chunk__39006_39362.cljs$core$IIndexed$_nth$arity$2(null,i__39008_39364);
var map__39020_39367__$1 = cljs.core.__destructure_map(map__39020_39366);
var task_39368 = map__39020_39367__$1;
var fn_str_39369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39367__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39367__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39371 = goog.getObjectByName(fn_str_39369,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39370)].join(''));

(fn_obj_39371.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39371.cljs$core$IFn$_invoke$arity$2(path,new_link_39358) : fn_obj_39371.call(null,path,new_link_39358));


var G__39372 = seq__39004_39361;
var G__39373 = chunk__39006_39362;
var G__39374 = count__39007_39363;
var G__39375 = (i__39008_39364 + (1));
seq__39004_39361 = G__39372;
chunk__39006_39362 = G__39373;
count__39007_39363 = G__39374;
i__39008_39364 = G__39375;
continue;
} else {
var temp__5804__auto___39376__$2 = cljs.core.seq(seq__39004_39361);
if(temp__5804__auto___39376__$2){
var seq__39004_39377__$1 = temp__5804__auto___39376__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39004_39377__$1)){
var c__5568__auto___39378 = cljs.core.chunk_first(seq__39004_39377__$1);
var G__39379 = cljs.core.chunk_rest(seq__39004_39377__$1);
var G__39380 = c__5568__auto___39378;
var G__39381 = cljs.core.count(c__5568__auto___39378);
var G__39382 = (0);
seq__39004_39361 = G__39379;
chunk__39006_39362 = G__39380;
count__39007_39363 = G__39381;
i__39008_39364 = G__39382;
continue;
} else {
var map__39022_39383 = cljs.core.first(seq__39004_39377__$1);
var map__39022_39384__$1 = cljs.core.__destructure_map(map__39022_39383);
var task_39385 = map__39022_39384__$1;
var fn_str_39386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39022_39384__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39022_39384__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39388 = goog.getObjectByName(fn_str_39386,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39387)].join(''));

(fn_obj_39388.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39388.cljs$core$IFn$_invoke$arity$2(path,new_link_39358) : fn_obj_39388.call(null,path,new_link_39358));


var G__39392 = cljs.core.next(seq__39004_39377__$1);
var G__39393 = null;
var G__39394 = (0);
var G__39395 = (0);
seq__39004_39361 = G__39392;
chunk__39006_39362 = G__39393;
count__39007_39363 = G__39394;
i__39008_39364 = G__39395;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39356);
});})(seq__38924_39294,chunk__38928_39295,count__38929_39296,i__38930_39297,seq__38636,chunk__38638,count__38639,i__38640,new_link_39358,path_match_39357,node_39356,seq__38924_39350__$1,temp__5804__auto___39349__$1,path,seq__38636__$1,temp__5804__auto__,map__38634,map__38634__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39357], 0));

goog.dom.insertSiblingAfter(new_link_39358,node_39356);


var G__39396 = cljs.core.next(seq__38924_39350__$1);
var G__39397 = null;
var G__39398 = (0);
var G__39399 = (0);
seq__38924_39294 = G__39396;
chunk__38928_39295 = G__39397;
count__38929_39296 = G__39398;
i__38930_39297 = G__39399;
continue;
} else {
var G__39401 = cljs.core.next(seq__38924_39350__$1);
var G__39402 = null;
var G__39403 = (0);
var G__39404 = (0);
seq__38924_39294 = G__39401;
chunk__38928_39295 = G__39402;
count__38929_39296 = G__39403;
i__38930_39297 = G__39404;
continue;
}
} else {
var G__39405 = cljs.core.next(seq__38924_39350__$1);
var G__39406 = null;
var G__39407 = (0);
var G__39408 = (0);
seq__38924_39294 = G__39405;
chunk__38928_39295 = G__39406;
count__38929_39296 = G__39407;
i__38930_39297 = G__39408;
continue;
}
}
} else {
}
}
break;
}


var G__39409 = cljs.core.next(seq__38636__$1);
var G__39410 = null;
var G__39411 = (0);
var G__39412 = (0);
seq__38636 = G__39409;
chunk__38638 = G__39410;
count__38639 = G__39411;
i__38640 = G__39412;
continue;
} else {
var G__39417 = cljs.core.next(seq__38636__$1);
var G__39418 = null;
var G__39419 = (0);
var G__39420 = (0);
seq__38636 = G__39417;
chunk__38638 = G__39418;
count__38639 = G__39419;
i__38640 = G__39420;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39031){
var map__39032 = p__39031;
var map__39032__$1 = cljs.core.__destructure_map(map__39032);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39041){
var map__39042 = p__39041;
var map__39042__$1 = cljs.core.__destructure_map(map__39042);
var _ = map__39042__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39042__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39043,done,error){
var map__39044 = p__39043;
var map__39044__$1 = cljs.core.__destructure_map(map__39044);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39044__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39045,done,error){
var map__39046 = p__39045;
var map__39046__$1 = cljs.core.__destructure_map(map__39046);
var msg = map__39046__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39046__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39046__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39046__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39048){
var map__39049 = p__39048;
var map__39049__$1 = cljs.core.__destructure_map(map__39049);
var src = map__39049__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39049__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39050 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39050) : done.call(null,G__39050));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39051){
var map__39053 = p__39051;
var map__39053__$1 = cljs.core.__destructure_map(map__39053);
var msg__$1 = map__39053__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39053__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39054){var ex = e39054;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39055){
var map__39056 = p__39055;
var map__39056__$1 = cljs.core.__destructure_map(map__39056);
var env = map__39056__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39063){
var map__39064 = p__39063;
var map__39064__$1 = cljs.core.__destructure_map(map__39064);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39064__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39064__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39070){
var map__39071 = p__39070;
var map__39071__$1 = cljs.core.__destructure_map(map__39071);
var svc = map__39071__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
