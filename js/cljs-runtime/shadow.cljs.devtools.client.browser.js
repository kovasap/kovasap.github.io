goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37819 = arguments.length;
var i__4819__auto___37820 = (0);
while(true){
if((i__4819__auto___37820 < len__4818__auto___37819)){
args__4824__auto__.push((arguments[i__4819__auto___37820]));

var G__37821 = (i__4819__auto___37820 + (1));
i__4819__auto___37820 = G__37821;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37578){
var G__37579 = cljs.core.first(seq37578);
var seq37578__$1 = cljs.core.next(seq37578);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37579,seq37578__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37581 = cljs.core.seq(sources);
var chunk__37582 = null;
var count__37583 = (0);
var i__37584 = (0);
while(true){
if((i__37584 < count__37583)){
var map__37597 = chunk__37582.cljs$core$IIndexed$_nth$arity$2(null,i__37584);
var map__37597__$1 = cljs.core.__destructure_map(map__37597);
var src = map__37597__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37597__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37597__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37597__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37597__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37598){var e_37822 = e37598;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37822);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37822.message)].join('')));
}

var G__37823 = seq__37581;
var G__37824 = chunk__37582;
var G__37825 = count__37583;
var G__37826 = (i__37584 + (1));
seq__37581 = G__37823;
chunk__37582 = G__37824;
count__37583 = G__37825;
i__37584 = G__37826;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37581);
if(temp__5753__auto__){
var seq__37581__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37581__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37581__$1);
var G__37827 = cljs.core.chunk_rest(seq__37581__$1);
var G__37828 = c__4638__auto__;
var G__37829 = cljs.core.count(c__4638__auto__);
var G__37830 = (0);
seq__37581 = G__37827;
chunk__37582 = G__37828;
count__37583 = G__37829;
i__37584 = G__37830;
continue;
} else {
var map__37599 = cljs.core.first(seq__37581__$1);
var map__37599__$1 = cljs.core.__destructure_map(map__37599);
var src = map__37599__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37599__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37599__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37599__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37599__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37600){var e_37831 = e37600;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37831);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37831.message)].join('')));
}

var G__37832 = cljs.core.next(seq__37581__$1);
var G__37833 = null;
var G__37834 = (0);
var G__37835 = (0);
seq__37581 = G__37832;
chunk__37582 = G__37833;
count__37583 = G__37834;
i__37584 = G__37835;
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
var seq__37605 = cljs.core.seq(js_requires);
var chunk__37606 = null;
var count__37607 = (0);
var i__37608 = (0);
while(true){
if((i__37608 < count__37607)){
var js_ns = chunk__37606.cljs$core$IIndexed$_nth$arity$2(null,i__37608);
var require_str_37836 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37836);


var G__37837 = seq__37605;
var G__37838 = chunk__37606;
var G__37839 = count__37607;
var G__37840 = (i__37608 + (1));
seq__37605 = G__37837;
chunk__37606 = G__37838;
count__37607 = G__37839;
i__37608 = G__37840;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37605);
if(temp__5753__auto__){
var seq__37605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37605__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37605__$1);
var G__37841 = cljs.core.chunk_rest(seq__37605__$1);
var G__37842 = c__4638__auto__;
var G__37843 = cljs.core.count(c__4638__auto__);
var G__37844 = (0);
seq__37605 = G__37841;
chunk__37606 = G__37842;
count__37607 = G__37843;
i__37608 = G__37844;
continue;
} else {
var js_ns = cljs.core.first(seq__37605__$1);
var require_str_37845 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37845);


var G__37846 = cljs.core.next(seq__37605__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__37605 = G__37846;
chunk__37606 = G__37847;
count__37607 = G__37848;
i__37608 = G__37849;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37613){
var map__37614 = p__37613;
var map__37614__$1 = cljs.core.__destructure_map(map__37614);
var msg = map__37614__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37614__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37614__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37615(s__37616){
return (new cljs.core.LazySeq(null,(function (){
var s__37616__$1 = s__37616;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37616__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37621 = cljs.core.first(xs__6308__auto__);
var map__37621__$1 = cljs.core.__destructure_map(map__37621);
var src = map__37621__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__37616__$1,map__37621,map__37621__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37614,map__37614__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37615_$_iter__37617(s__37618){
return (new cljs.core.LazySeq(null,((function (s__37616__$1,map__37621,map__37621__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37614,map__37614__$1,msg,info,reload_info){
return (function (){
var s__37618__$1 = s__37618;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37618__$1);
if(temp__5753__auto____$1){
var s__37618__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37618__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37618__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37620 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37619 = (0);
while(true){
if((i__37619 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__37619);
cljs.core.chunk_append(b__37620,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37850 = (i__37619 + (1));
i__37619 = G__37850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37620),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37615_$_iter__37617(cljs.core.chunk_rest(s__37618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37620),null);
}
} else {
var warning = cljs.core.first(s__37618__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37615_$_iter__37617(cljs.core.rest(s__37618__$2)));
}
} else {
return null;
}
break;
}
});})(s__37616__$1,map__37621,map__37621__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37614,map__37614__$1,msg,info,reload_info))
,null,null));
});})(s__37616__$1,map__37621,map__37621__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37614,map__37614__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37615(cljs.core.rest(s__37616__$1)));
} else {
var G__37851 = cljs.core.rest(s__37616__$1);
s__37616__$1 = G__37851;
continue;
}
} else {
var G__37852 = cljs.core.rest(s__37616__$1);
s__37616__$1 = G__37852;
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
var seq__37624_37853 = cljs.core.seq(warnings);
var chunk__37625_37854 = null;
var count__37626_37855 = (0);
var i__37627_37856 = (0);
while(true){
if((i__37627_37856 < count__37626_37855)){
var map__37632_37857 = chunk__37625_37854.cljs$core$IIndexed$_nth$arity$2(null,i__37627_37856);
var map__37632_37858__$1 = cljs.core.__destructure_map(map__37632_37857);
var w_37859 = map__37632_37858__$1;
var msg_37860__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37632_37858__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37632_37858__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37632_37858__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37632_37858__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37863)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37861),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37862),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37860__$1)].join(''));


var G__37864 = seq__37624_37853;
var G__37865 = chunk__37625_37854;
var G__37866 = count__37626_37855;
var G__37867 = (i__37627_37856 + (1));
seq__37624_37853 = G__37864;
chunk__37625_37854 = G__37865;
count__37626_37855 = G__37866;
i__37627_37856 = G__37867;
continue;
} else {
var temp__5753__auto___37868 = cljs.core.seq(seq__37624_37853);
if(temp__5753__auto___37868){
var seq__37624_37869__$1 = temp__5753__auto___37868;
if(cljs.core.chunked_seq_QMARK_(seq__37624_37869__$1)){
var c__4638__auto___37870 = cljs.core.chunk_first(seq__37624_37869__$1);
var G__37871 = cljs.core.chunk_rest(seq__37624_37869__$1);
var G__37872 = c__4638__auto___37870;
var G__37873 = cljs.core.count(c__4638__auto___37870);
var G__37874 = (0);
seq__37624_37853 = G__37871;
chunk__37625_37854 = G__37872;
count__37626_37855 = G__37873;
i__37627_37856 = G__37874;
continue;
} else {
var map__37635_37875 = cljs.core.first(seq__37624_37869__$1);
var map__37635_37876__$1 = cljs.core.__destructure_map(map__37635_37875);
var w_37877 = map__37635_37876__$1;
var msg_37878__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37876__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37876__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37876__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37876__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37881)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37879),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37880),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37878__$1)].join(''));


var G__37882 = cljs.core.next(seq__37624_37869__$1);
var G__37883 = null;
var G__37884 = (0);
var G__37885 = (0);
seq__37624_37853 = G__37882;
chunk__37625_37854 = G__37883;
count__37626_37855 = G__37884;
i__37627_37856 = G__37885;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37612_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37612_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37636){
var map__37637 = p__37636;
var map__37637__$1 = cljs.core.__destructure_map(map__37637);
var msg = map__37637__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37637__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37638 = cljs.core.seq(updates);
var chunk__37640 = null;
var count__37641 = (0);
var i__37642 = (0);
while(true){
if((i__37642 < count__37641)){
var path = chunk__37640.cljs$core$IIndexed$_nth$arity$2(null,i__37642);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37682_37886 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37686_37887 = null;
var count__37687_37888 = (0);
var i__37688_37889 = (0);
while(true){
if((i__37688_37889 < count__37687_37888)){
var node_37890 = chunk__37686_37887.cljs$core$IIndexed$_nth$arity$2(null,i__37688_37889);
if(cljs.core.not(node_37890.shadow$old)){
var path_match_37891 = shadow.cljs.devtools.client.browser.match_paths(node_37890.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37891)){
var new_link_37892 = (function (){var G__37702 = node_37890.cloneNode(true);
G__37702.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37891),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37702;
})();
(node_37890.shadow$old = true);

(new_link_37892.onload = ((function (seq__37682_37886,chunk__37686_37887,count__37687_37888,i__37688_37889,seq__37638,chunk__37640,count__37641,i__37642,new_link_37892,path_match_37891,node_37890,path,map__37637,map__37637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37890);
});})(seq__37682_37886,chunk__37686_37887,count__37687_37888,i__37688_37889,seq__37638,chunk__37640,count__37641,i__37642,new_link_37892,path_match_37891,node_37890,path,map__37637,map__37637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37891], 0));

goog.dom.insertSiblingAfter(new_link_37892,node_37890);


var G__37893 = seq__37682_37886;
var G__37894 = chunk__37686_37887;
var G__37895 = count__37687_37888;
var G__37896 = (i__37688_37889 + (1));
seq__37682_37886 = G__37893;
chunk__37686_37887 = G__37894;
count__37687_37888 = G__37895;
i__37688_37889 = G__37896;
continue;
} else {
var G__37897 = seq__37682_37886;
var G__37898 = chunk__37686_37887;
var G__37899 = count__37687_37888;
var G__37900 = (i__37688_37889 + (1));
seq__37682_37886 = G__37897;
chunk__37686_37887 = G__37898;
count__37687_37888 = G__37899;
i__37688_37889 = G__37900;
continue;
}
} else {
var G__37901 = seq__37682_37886;
var G__37902 = chunk__37686_37887;
var G__37903 = count__37687_37888;
var G__37904 = (i__37688_37889 + (1));
seq__37682_37886 = G__37901;
chunk__37686_37887 = G__37902;
count__37687_37888 = G__37903;
i__37688_37889 = G__37904;
continue;
}
} else {
var temp__5753__auto___37905 = cljs.core.seq(seq__37682_37886);
if(temp__5753__auto___37905){
var seq__37682_37906__$1 = temp__5753__auto___37905;
if(cljs.core.chunked_seq_QMARK_(seq__37682_37906__$1)){
var c__4638__auto___37907 = cljs.core.chunk_first(seq__37682_37906__$1);
var G__37908 = cljs.core.chunk_rest(seq__37682_37906__$1);
var G__37909 = c__4638__auto___37907;
var G__37910 = cljs.core.count(c__4638__auto___37907);
var G__37911 = (0);
seq__37682_37886 = G__37908;
chunk__37686_37887 = G__37909;
count__37687_37888 = G__37910;
i__37688_37889 = G__37911;
continue;
} else {
var node_37912 = cljs.core.first(seq__37682_37906__$1);
if(cljs.core.not(node_37912.shadow$old)){
var path_match_37913 = shadow.cljs.devtools.client.browser.match_paths(node_37912.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37913)){
var new_link_37914 = (function (){var G__37703 = node_37912.cloneNode(true);
G__37703.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37913),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37703;
})();
(node_37912.shadow$old = true);

(new_link_37914.onload = ((function (seq__37682_37886,chunk__37686_37887,count__37687_37888,i__37688_37889,seq__37638,chunk__37640,count__37641,i__37642,new_link_37914,path_match_37913,node_37912,seq__37682_37906__$1,temp__5753__auto___37905,path,map__37637,map__37637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37912);
});})(seq__37682_37886,chunk__37686_37887,count__37687_37888,i__37688_37889,seq__37638,chunk__37640,count__37641,i__37642,new_link_37914,path_match_37913,node_37912,seq__37682_37906__$1,temp__5753__auto___37905,path,map__37637,map__37637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37913], 0));

goog.dom.insertSiblingAfter(new_link_37914,node_37912);


var G__37915 = cljs.core.next(seq__37682_37906__$1);
var G__37916 = null;
var G__37917 = (0);
var G__37918 = (0);
seq__37682_37886 = G__37915;
chunk__37686_37887 = G__37916;
count__37687_37888 = G__37917;
i__37688_37889 = G__37918;
continue;
} else {
var G__37919 = cljs.core.next(seq__37682_37906__$1);
var G__37920 = null;
var G__37921 = (0);
var G__37922 = (0);
seq__37682_37886 = G__37919;
chunk__37686_37887 = G__37920;
count__37687_37888 = G__37921;
i__37688_37889 = G__37922;
continue;
}
} else {
var G__37923 = cljs.core.next(seq__37682_37906__$1);
var G__37924 = null;
var G__37925 = (0);
var G__37926 = (0);
seq__37682_37886 = G__37923;
chunk__37686_37887 = G__37924;
count__37687_37888 = G__37925;
i__37688_37889 = G__37926;
continue;
}
}
} else {
}
}
break;
}


var G__37927 = seq__37638;
var G__37928 = chunk__37640;
var G__37929 = count__37641;
var G__37930 = (i__37642 + (1));
seq__37638 = G__37927;
chunk__37640 = G__37928;
count__37641 = G__37929;
i__37642 = G__37930;
continue;
} else {
var G__37931 = seq__37638;
var G__37932 = chunk__37640;
var G__37933 = count__37641;
var G__37934 = (i__37642 + (1));
seq__37638 = G__37931;
chunk__37640 = G__37932;
count__37641 = G__37933;
i__37642 = G__37934;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37638);
if(temp__5753__auto__){
var seq__37638__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37638__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37638__$1);
var G__37935 = cljs.core.chunk_rest(seq__37638__$1);
var G__37936 = c__4638__auto__;
var G__37937 = cljs.core.count(c__4638__auto__);
var G__37938 = (0);
seq__37638 = G__37935;
chunk__37640 = G__37936;
count__37641 = G__37937;
i__37642 = G__37938;
continue;
} else {
var path = cljs.core.first(seq__37638__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37705_37939 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37709_37940 = null;
var count__37710_37941 = (0);
var i__37711_37942 = (0);
while(true){
if((i__37711_37942 < count__37710_37941)){
var node_37943 = chunk__37709_37940.cljs$core$IIndexed$_nth$arity$2(null,i__37711_37942);
if(cljs.core.not(node_37943.shadow$old)){
var path_match_37944 = shadow.cljs.devtools.client.browser.match_paths(node_37943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37944)){
var new_link_37945 = (function (){var G__37745 = node_37943.cloneNode(true);
G__37745.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37745;
})();
(node_37943.shadow$old = true);

(new_link_37945.onload = ((function (seq__37705_37939,chunk__37709_37940,count__37710_37941,i__37711_37942,seq__37638,chunk__37640,count__37641,i__37642,new_link_37945,path_match_37944,node_37943,path,seq__37638__$1,temp__5753__auto__,map__37637,map__37637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37943);
});})(seq__37705_37939,chunk__37709_37940,count__37710_37941,i__37711_37942,seq__37638,chunk__37640,count__37641,i__37642,new_link_37945,path_match_37944,node_37943,path,seq__37638__$1,temp__5753__auto__,map__37637,map__37637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37944], 0));

goog.dom.insertSiblingAfter(new_link_37945,node_37943);


var G__37947 = seq__37705_37939;
var G__37948 = chunk__37709_37940;
var G__37949 = count__37710_37941;
var G__37950 = (i__37711_37942 + (1));
seq__37705_37939 = G__37947;
chunk__37709_37940 = G__37948;
count__37710_37941 = G__37949;
i__37711_37942 = G__37950;
continue;
} else {
var G__37953 = seq__37705_37939;
var G__37954 = chunk__37709_37940;
var G__37955 = count__37710_37941;
var G__37956 = (i__37711_37942 + (1));
seq__37705_37939 = G__37953;
chunk__37709_37940 = G__37954;
count__37710_37941 = G__37955;
i__37711_37942 = G__37956;
continue;
}
} else {
var G__37957 = seq__37705_37939;
var G__37958 = chunk__37709_37940;
var G__37959 = count__37710_37941;
var G__37960 = (i__37711_37942 + (1));
seq__37705_37939 = G__37957;
chunk__37709_37940 = G__37958;
count__37710_37941 = G__37959;
i__37711_37942 = G__37960;
continue;
}
} else {
var temp__5753__auto___37961__$1 = cljs.core.seq(seq__37705_37939);
if(temp__5753__auto___37961__$1){
var seq__37705_37962__$1 = temp__5753__auto___37961__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37705_37962__$1)){
var c__4638__auto___37963 = cljs.core.chunk_first(seq__37705_37962__$1);
var G__37964 = cljs.core.chunk_rest(seq__37705_37962__$1);
var G__37965 = c__4638__auto___37963;
var G__37966 = cljs.core.count(c__4638__auto___37963);
var G__37967 = (0);
seq__37705_37939 = G__37964;
chunk__37709_37940 = G__37965;
count__37710_37941 = G__37966;
i__37711_37942 = G__37967;
continue;
} else {
var node_37968 = cljs.core.first(seq__37705_37962__$1);
if(cljs.core.not(node_37968.shadow$old)){
var path_match_37969 = shadow.cljs.devtools.client.browser.match_paths(node_37968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37969)){
var new_link_37970 = (function (){var G__37759 = node_37968.cloneNode(true);
G__37759.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37969),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37759;
})();
(node_37968.shadow$old = true);

(new_link_37970.onload = ((function (seq__37705_37939,chunk__37709_37940,count__37710_37941,i__37711_37942,seq__37638,chunk__37640,count__37641,i__37642,new_link_37970,path_match_37969,node_37968,seq__37705_37962__$1,temp__5753__auto___37961__$1,path,seq__37638__$1,temp__5753__auto__,map__37637,map__37637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37968);
});})(seq__37705_37939,chunk__37709_37940,count__37710_37941,i__37711_37942,seq__37638,chunk__37640,count__37641,i__37642,new_link_37970,path_match_37969,node_37968,seq__37705_37962__$1,temp__5753__auto___37961__$1,path,seq__37638__$1,temp__5753__auto__,map__37637,map__37637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37969], 0));

goog.dom.insertSiblingAfter(new_link_37970,node_37968);


var G__37972 = cljs.core.next(seq__37705_37962__$1);
var G__37973 = null;
var G__37974 = (0);
var G__37975 = (0);
seq__37705_37939 = G__37972;
chunk__37709_37940 = G__37973;
count__37710_37941 = G__37974;
i__37711_37942 = G__37975;
continue;
} else {
var G__37976 = cljs.core.next(seq__37705_37962__$1);
var G__37977 = null;
var G__37978 = (0);
var G__37979 = (0);
seq__37705_37939 = G__37976;
chunk__37709_37940 = G__37977;
count__37710_37941 = G__37978;
i__37711_37942 = G__37979;
continue;
}
} else {
var G__37980 = cljs.core.next(seq__37705_37962__$1);
var G__37981 = null;
var G__37982 = (0);
var G__37983 = (0);
seq__37705_37939 = G__37980;
chunk__37709_37940 = G__37981;
count__37710_37941 = G__37982;
i__37711_37942 = G__37983;
continue;
}
}
} else {
}
}
break;
}


var G__37984 = cljs.core.next(seq__37638__$1);
var G__37985 = null;
var G__37986 = (0);
var G__37987 = (0);
seq__37638 = G__37984;
chunk__37640 = G__37985;
count__37641 = G__37986;
i__37642 = G__37987;
continue;
} else {
var G__37988 = cljs.core.next(seq__37638__$1);
var G__37989 = null;
var G__37990 = (0);
var G__37991 = (0);
seq__37638 = G__37988;
chunk__37640 = G__37989;
count__37641 = G__37990;
i__37642 = G__37991;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37784){
var map__37785 = p__37784;
var map__37785__$1 = cljs.core.__destructure_map(map__37785);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37798){
var map__37799 = p__37798;
var map__37799__$1 = cljs.core.__destructure_map(map__37799);
var _ = map__37799__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37799__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37800,done,error){
var map__37801 = p__37800;
var map__37801__$1 = cljs.core.__destructure_map(map__37801);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37801__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37802,done,error){
var map__37803 = p__37802;
var map__37803__$1 = cljs.core.__destructure_map(map__37803);
var msg = map__37803__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37803__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37803__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37803__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37804){
var map__37805 = p__37804;
var map__37805__$1 = cljs.core.__destructure_map(map__37805);
var src = map__37805__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37805__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37806 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37806) : done.call(null,G__37806));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37807){
var map__37808 = p__37807;
var map__37808__$1 = cljs.core.__destructure_map(map__37808);
var msg__$1 = map__37808__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37809){var ex = e37809;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37810){
var map__37811 = p__37810;
var map__37811__$1 = cljs.core.__destructure_map(map__37811);
var env = map__37811__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37811__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37812){
var map__37813 = p__37812;
var map__37813__$1 = cljs.core.__destructure_map(map__37813);
var msg = map__37813__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37813__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37814){
var map__37815 = p__37814;
var map__37815__$1 = cljs.core.__destructure_map(map__37815);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37815__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37815__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37816){
var map__37817 = p__37816;
var map__37817__$1 = cljs.core.__destructure_map(map__37817);
var svc = map__37817__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37817__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
