goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39635 = arguments.length;
var i__4819__auto___39636 = (0);
while(true){
if((i__4819__auto___39636 < len__4818__auto___39635)){
args__4824__auto__.push((arguments[i__4819__auto___39636]));

var G__39637 = (i__4819__auto___39636 + (1));
i__4819__auto___39636 = G__39637;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39250){
var G__39251 = cljs.core.first(seq39250);
var seq39250__$1 = cljs.core.next(seq39250);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39251,seq39250__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39268 = cljs.core.seq(sources);
var chunk__39269 = null;
var count__39270 = (0);
var i__39271 = (0);
while(true){
if((i__39271 < count__39270)){
var map__39307 = chunk__39269.cljs$core$IIndexed$_nth$arity$2(null,i__39271);
var map__39307__$1 = cljs.core.__destructure_map(map__39307);
var src = map__39307__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39312){var e_39643 = e39312;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39643);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39643.message)].join('')));
}

var G__39645 = seq__39268;
var G__39646 = chunk__39269;
var G__39647 = count__39270;
var G__39648 = (i__39271 + (1));
seq__39268 = G__39645;
chunk__39269 = G__39646;
count__39270 = G__39647;
i__39271 = G__39648;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39268);
if(temp__5753__auto__){
var seq__39268__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39268__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39268__$1);
var G__39651 = cljs.core.chunk_rest(seq__39268__$1);
var G__39652 = c__4638__auto__;
var G__39653 = cljs.core.count(c__4638__auto__);
var G__39654 = (0);
seq__39268 = G__39651;
chunk__39269 = G__39652;
count__39270 = G__39653;
i__39271 = G__39654;
continue;
} else {
var map__39340 = cljs.core.first(seq__39268__$1);
var map__39340__$1 = cljs.core.__destructure_map(map__39340);
var src = map__39340__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39340__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39340__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39340__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39340__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39352){var e_39661 = e39352;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39661);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39661.message)].join('')));
}

var G__39662 = cljs.core.next(seq__39268__$1);
var G__39663 = null;
var G__39664 = (0);
var G__39665 = (0);
seq__39268 = G__39662;
chunk__39269 = G__39663;
count__39270 = G__39664;
i__39271 = G__39665;
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
var seq__39385 = cljs.core.seq(js_requires);
var chunk__39386 = null;
var count__39387 = (0);
var i__39388 = (0);
while(true){
if((i__39388 < count__39387)){
var js_ns = chunk__39386.cljs$core$IIndexed$_nth$arity$2(null,i__39388);
var require_str_39672 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39672);


var G__39673 = seq__39385;
var G__39674 = chunk__39386;
var G__39675 = count__39387;
var G__39676 = (i__39388 + (1));
seq__39385 = G__39673;
chunk__39386 = G__39674;
count__39387 = G__39675;
i__39388 = G__39676;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39385);
if(temp__5753__auto__){
var seq__39385__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39385__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39385__$1);
var G__39678 = cljs.core.chunk_rest(seq__39385__$1);
var G__39679 = c__4638__auto__;
var G__39680 = cljs.core.count(c__4638__auto__);
var G__39681 = (0);
seq__39385 = G__39678;
chunk__39386 = G__39679;
count__39387 = G__39680;
i__39388 = G__39681;
continue;
} else {
var js_ns = cljs.core.first(seq__39385__$1);
var require_str_39684 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39684);


var G__39687 = cljs.core.next(seq__39385__$1);
var G__39688 = null;
var G__39689 = (0);
var G__39690 = (0);
seq__39385 = G__39687;
chunk__39386 = G__39688;
count__39387 = G__39689;
i__39388 = G__39690;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39397){
var map__39398 = p__39397;
var map__39398__$1 = cljs.core.__destructure_map(map__39398);
var msg = map__39398__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39398__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39398__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39399(s__39400){
return (new cljs.core.LazySeq(null,(function (){
var s__39400__$1 = s__39400;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39400__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__39405 = cljs.core.first(xs__6308__auto__);
var map__39405__$1 = cljs.core.__destructure_map(map__39405);
var src = map__39405__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__39400__$1,map__39405,map__39405__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39398,map__39398__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39399_$_iter__39401(s__39402){
return (new cljs.core.LazySeq(null,((function (s__39400__$1,map__39405,map__39405__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39398,map__39398__$1,msg,info,reload_info){
return (function (){
var s__39402__$1 = s__39402;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39402__$1);
if(temp__5753__auto____$1){
var s__39402__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39402__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39402__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39404 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39403 = (0);
while(true){
if((i__39403 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__39403);
cljs.core.chunk_append(b__39404,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39698 = (i__39403 + (1));
i__39403 = G__39698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39404),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39399_$_iter__39401(cljs.core.chunk_rest(s__39402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39404),null);
}
} else {
var warning = cljs.core.first(s__39402__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39399_$_iter__39401(cljs.core.rest(s__39402__$2)));
}
} else {
return null;
}
break;
}
});})(s__39400__$1,map__39405,map__39405__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39398,map__39398__$1,msg,info,reload_info))
,null,null));
});})(s__39400__$1,map__39405,map__39405__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39398,map__39398__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39399(cljs.core.rest(s__39400__$1)));
} else {
var G__39699 = cljs.core.rest(s__39400__$1);
s__39400__$1 = G__39699;
continue;
}
} else {
var G__39700 = cljs.core.rest(s__39400__$1);
s__39400__$1 = G__39700;
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
var seq__39422_39702 = cljs.core.seq(warnings);
var chunk__39423_39703 = null;
var count__39424_39704 = (0);
var i__39425_39705 = (0);
while(true){
if((i__39425_39705 < count__39424_39704)){
var map__39431_39707 = chunk__39423_39703.cljs$core$IIndexed$_nth$arity$2(null,i__39425_39705);
var map__39431_39708__$1 = cljs.core.__destructure_map(map__39431_39707);
var w_39709 = map__39431_39708__$1;
var msg_39710__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431_39708__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431_39708__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431_39708__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431_39708__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39713)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39711),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39712),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39710__$1)].join(''));


var G__39714 = seq__39422_39702;
var G__39715 = chunk__39423_39703;
var G__39716 = count__39424_39704;
var G__39717 = (i__39425_39705 + (1));
seq__39422_39702 = G__39714;
chunk__39423_39703 = G__39715;
count__39424_39704 = G__39716;
i__39425_39705 = G__39717;
continue;
} else {
var temp__5753__auto___39718 = cljs.core.seq(seq__39422_39702);
if(temp__5753__auto___39718){
var seq__39422_39719__$1 = temp__5753__auto___39718;
if(cljs.core.chunked_seq_QMARK_(seq__39422_39719__$1)){
var c__4638__auto___39722 = cljs.core.chunk_first(seq__39422_39719__$1);
var G__39723 = cljs.core.chunk_rest(seq__39422_39719__$1);
var G__39724 = c__4638__auto___39722;
var G__39725 = cljs.core.count(c__4638__auto___39722);
var G__39726 = (0);
seq__39422_39702 = G__39723;
chunk__39423_39703 = G__39724;
count__39424_39704 = G__39725;
i__39425_39705 = G__39726;
continue;
} else {
var map__39435_39729 = cljs.core.first(seq__39422_39719__$1);
var map__39435_39730__$1 = cljs.core.__destructure_map(map__39435_39729);
var w_39731 = map__39435_39730__$1;
var msg_39732__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435_39730__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435_39730__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435_39730__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435_39730__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39735)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39733),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39734),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39732__$1)].join(''));


var G__39736 = cljs.core.next(seq__39422_39719__$1);
var G__39737 = null;
var G__39738 = (0);
var G__39739 = (0);
seq__39422_39702 = G__39736;
chunk__39423_39703 = G__39737;
count__39424_39704 = G__39738;
i__39425_39705 = G__39739;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39396_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39396_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39442){
var map__39443 = p__39442;
var map__39443__$1 = cljs.core.__destructure_map(map__39443);
var msg = map__39443__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39443__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39445 = cljs.core.seq(updates);
var chunk__39447 = null;
var count__39448 = (0);
var i__39449 = (0);
while(true){
if((i__39449 < count__39448)){
var path = chunk__39447.cljs$core$IIndexed$_nth$arity$2(null,i__39449);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39514_39740 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39518_39741 = null;
var count__39519_39742 = (0);
var i__39520_39743 = (0);
while(true){
if((i__39520_39743 < count__39519_39742)){
var node_39744 = chunk__39518_39741.cljs$core$IIndexed$_nth$arity$2(null,i__39520_39743);
if(cljs.core.not(node_39744.shadow$old)){
var path_match_39745 = shadow.cljs.devtools.client.browser.match_paths(node_39744.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39745)){
var new_link_39746 = (function (){var G__39536 = node_39744.cloneNode(true);
G__39536.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39536;
})();
(node_39744.shadow$old = true);

(new_link_39746.onload = ((function (seq__39514_39740,chunk__39518_39741,count__39519_39742,i__39520_39743,seq__39445,chunk__39447,count__39448,i__39449,new_link_39746,path_match_39745,node_39744,path,map__39443,map__39443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39744);
});})(seq__39514_39740,chunk__39518_39741,count__39519_39742,i__39520_39743,seq__39445,chunk__39447,count__39448,i__39449,new_link_39746,path_match_39745,node_39744,path,map__39443,map__39443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39745], 0));

goog.dom.insertSiblingAfter(new_link_39746,node_39744);


var G__39747 = seq__39514_39740;
var G__39748 = chunk__39518_39741;
var G__39749 = count__39519_39742;
var G__39750 = (i__39520_39743 + (1));
seq__39514_39740 = G__39747;
chunk__39518_39741 = G__39748;
count__39519_39742 = G__39749;
i__39520_39743 = G__39750;
continue;
} else {
var G__39751 = seq__39514_39740;
var G__39752 = chunk__39518_39741;
var G__39753 = count__39519_39742;
var G__39754 = (i__39520_39743 + (1));
seq__39514_39740 = G__39751;
chunk__39518_39741 = G__39752;
count__39519_39742 = G__39753;
i__39520_39743 = G__39754;
continue;
}
} else {
var G__39755 = seq__39514_39740;
var G__39756 = chunk__39518_39741;
var G__39757 = count__39519_39742;
var G__39758 = (i__39520_39743 + (1));
seq__39514_39740 = G__39755;
chunk__39518_39741 = G__39756;
count__39519_39742 = G__39757;
i__39520_39743 = G__39758;
continue;
}
} else {
var temp__5753__auto___39761 = cljs.core.seq(seq__39514_39740);
if(temp__5753__auto___39761){
var seq__39514_39762__$1 = temp__5753__auto___39761;
if(cljs.core.chunked_seq_QMARK_(seq__39514_39762__$1)){
var c__4638__auto___39763 = cljs.core.chunk_first(seq__39514_39762__$1);
var G__39764 = cljs.core.chunk_rest(seq__39514_39762__$1);
var G__39765 = c__4638__auto___39763;
var G__39766 = cljs.core.count(c__4638__auto___39763);
var G__39767 = (0);
seq__39514_39740 = G__39764;
chunk__39518_39741 = G__39765;
count__39519_39742 = G__39766;
i__39520_39743 = G__39767;
continue;
} else {
var node_39768 = cljs.core.first(seq__39514_39762__$1);
if(cljs.core.not(node_39768.shadow$old)){
var path_match_39769 = shadow.cljs.devtools.client.browser.match_paths(node_39768.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39769)){
var new_link_39770 = (function (){var G__39542 = node_39768.cloneNode(true);
G__39542.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39769),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39542;
})();
(node_39768.shadow$old = true);

(new_link_39770.onload = ((function (seq__39514_39740,chunk__39518_39741,count__39519_39742,i__39520_39743,seq__39445,chunk__39447,count__39448,i__39449,new_link_39770,path_match_39769,node_39768,seq__39514_39762__$1,temp__5753__auto___39761,path,map__39443,map__39443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39768);
});})(seq__39514_39740,chunk__39518_39741,count__39519_39742,i__39520_39743,seq__39445,chunk__39447,count__39448,i__39449,new_link_39770,path_match_39769,node_39768,seq__39514_39762__$1,temp__5753__auto___39761,path,map__39443,map__39443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39769], 0));

goog.dom.insertSiblingAfter(new_link_39770,node_39768);


var G__39771 = cljs.core.next(seq__39514_39762__$1);
var G__39772 = null;
var G__39773 = (0);
var G__39774 = (0);
seq__39514_39740 = G__39771;
chunk__39518_39741 = G__39772;
count__39519_39742 = G__39773;
i__39520_39743 = G__39774;
continue;
} else {
var G__39775 = cljs.core.next(seq__39514_39762__$1);
var G__39776 = null;
var G__39777 = (0);
var G__39778 = (0);
seq__39514_39740 = G__39775;
chunk__39518_39741 = G__39776;
count__39519_39742 = G__39777;
i__39520_39743 = G__39778;
continue;
}
} else {
var G__39779 = cljs.core.next(seq__39514_39762__$1);
var G__39780 = null;
var G__39781 = (0);
var G__39782 = (0);
seq__39514_39740 = G__39779;
chunk__39518_39741 = G__39780;
count__39519_39742 = G__39781;
i__39520_39743 = G__39782;
continue;
}
}
} else {
}
}
break;
}


var G__39783 = seq__39445;
var G__39784 = chunk__39447;
var G__39785 = count__39448;
var G__39786 = (i__39449 + (1));
seq__39445 = G__39783;
chunk__39447 = G__39784;
count__39448 = G__39785;
i__39449 = G__39786;
continue;
} else {
var G__39787 = seq__39445;
var G__39788 = chunk__39447;
var G__39789 = count__39448;
var G__39790 = (i__39449 + (1));
seq__39445 = G__39787;
chunk__39447 = G__39788;
count__39448 = G__39789;
i__39449 = G__39790;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39445);
if(temp__5753__auto__){
var seq__39445__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39445__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39445__$1);
var G__39791 = cljs.core.chunk_rest(seq__39445__$1);
var G__39792 = c__4638__auto__;
var G__39793 = cljs.core.count(c__4638__auto__);
var G__39794 = (0);
seq__39445 = G__39791;
chunk__39447 = G__39792;
count__39448 = G__39793;
i__39449 = G__39794;
continue;
} else {
var path = cljs.core.first(seq__39445__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39550_39795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39554_39796 = null;
var count__39555_39797 = (0);
var i__39556_39798 = (0);
while(true){
if((i__39556_39798 < count__39555_39797)){
var node_39799 = chunk__39554_39796.cljs$core$IIndexed$_nth$arity$2(null,i__39556_39798);
if(cljs.core.not(node_39799.shadow$old)){
var path_match_39800 = shadow.cljs.devtools.client.browser.match_paths(node_39799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39800)){
var new_link_39801 = (function (){var G__39568 = node_39799.cloneNode(true);
G__39568.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39568;
})();
(node_39799.shadow$old = true);

(new_link_39801.onload = ((function (seq__39550_39795,chunk__39554_39796,count__39555_39797,i__39556_39798,seq__39445,chunk__39447,count__39448,i__39449,new_link_39801,path_match_39800,node_39799,path,seq__39445__$1,temp__5753__auto__,map__39443,map__39443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39799);
});})(seq__39550_39795,chunk__39554_39796,count__39555_39797,i__39556_39798,seq__39445,chunk__39447,count__39448,i__39449,new_link_39801,path_match_39800,node_39799,path,seq__39445__$1,temp__5753__auto__,map__39443,map__39443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39800], 0));

goog.dom.insertSiblingAfter(new_link_39801,node_39799);


var G__39802 = seq__39550_39795;
var G__39803 = chunk__39554_39796;
var G__39804 = count__39555_39797;
var G__39805 = (i__39556_39798 + (1));
seq__39550_39795 = G__39802;
chunk__39554_39796 = G__39803;
count__39555_39797 = G__39804;
i__39556_39798 = G__39805;
continue;
} else {
var G__39806 = seq__39550_39795;
var G__39807 = chunk__39554_39796;
var G__39808 = count__39555_39797;
var G__39809 = (i__39556_39798 + (1));
seq__39550_39795 = G__39806;
chunk__39554_39796 = G__39807;
count__39555_39797 = G__39808;
i__39556_39798 = G__39809;
continue;
}
} else {
var G__39810 = seq__39550_39795;
var G__39811 = chunk__39554_39796;
var G__39812 = count__39555_39797;
var G__39813 = (i__39556_39798 + (1));
seq__39550_39795 = G__39810;
chunk__39554_39796 = G__39811;
count__39555_39797 = G__39812;
i__39556_39798 = G__39813;
continue;
}
} else {
var temp__5753__auto___39814__$1 = cljs.core.seq(seq__39550_39795);
if(temp__5753__auto___39814__$1){
var seq__39550_39815__$1 = temp__5753__auto___39814__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39550_39815__$1)){
var c__4638__auto___39816 = cljs.core.chunk_first(seq__39550_39815__$1);
var G__39817 = cljs.core.chunk_rest(seq__39550_39815__$1);
var G__39818 = c__4638__auto___39816;
var G__39819 = cljs.core.count(c__4638__auto___39816);
var G__39820 = (0);
seq__39550_39795 = G__39817;
chunk__39554_39796 = G__39818;
count__39555_39797 = G__39819;
i__39556_39798 = G__39820;
continue;
} else {
var node_39821 = cljs.core.first(seq__39550_39815__$1);
if(cljs.core.not(node_39821.shadow$old)){
var path_match_39822 = shadow.cljs.devtools.client.browser.match_paths(node_39821.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39822)){
var new_link_39823 = (function (){var G__39570 = node_39821.cloneNode(true);
G__39570.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39822),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39570;
})();
(node_39821.shadow$old = true);

(new_link_39823.onload = ((function (seq__39550_39795,chunk__39554_39796,count__39555_39797,i__39556_39798,seq__39445,chunk__39447,count__39448,i__39449,new_link_39823,path_match_39822,node_39821,seq__39550_39815__$1,temp__5753__auto___39814__$1,path,seq__39445__$1,temp__5753__auto__,map__39443,map__39443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39821);
});})(seq__39550_39795,chunk__39554_39796,count__39555_39797,i__39556_39798,seq__39445,chunk__39447,count__39448,i__39449,new_link_39823,path_match_39822,node_39821,seq__39550_39815__$1,temp__5753__auto___39814__$1,path,seq__39445__$1,temp__5753__auto__,map__39443,map__39443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39822], 0));

goog.dom.insertSiblingAfter(new_link_39823,node_39821);


var G__39827 = cljs.core.next(seq__39550_39815__$1);
var G__39828 = null;
var G__39829 = (0);
var G__39830 = (0);
seq__39550_39795 = G__39827;
chunk__39554_39796 = G__39828;
count__39555_39797 = G__39829;
i__39556_39798 = G__39830;
continue;
} else {
var G__39831 = cljs.core.next(seq__39550_39815__$1);
var G__39832 = null;
var G__39833 = (0);
var G__39834 = (0);
seq__39550_39795 = G__39831;
chunk__39554_39796 = G__39832;
count__39555_39797 = G__39833;
i__39556_39798 = G__39834;
continue;
}
} else {
var G__39835 = cljs.core.next(seq__39550_39815__$1);
var G__39836 = null;
var G__39837 = (0);
var G__39838 = (0);
seq__39550_39795 = G__39835;
chunk__39554_39796 = G__39836;
count__39555_39797 = G__39837;
i__39556_39798 = G__39838;
continue;
}
}
} else {
}
}
break;
}


var G__39840 = cljs.core.next(seq__39445__$1);
var G__39841 = null;
var G__39842 = (0);
var G__39843 = (0);
seq__39445 = G__39840;
chunk__39447 = G__39841;
count__39448 = G__39842;
i__39449 = G__39843;
continue;
} else {
var G__39844 = cljs.core.next(seq__39445__$1);
var G__39845 = null;
var G__39846 = (0);
var G__39847 = (0);
seq__39445 = G__39844;
chunk__39447 = G__39845;
count__39448 = G__39846;
i__39449 = G__39847;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39572){
var map__39574 = p__39572;
var map__39574__$1 = cljs.core.__destructure_map(map__39574);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39574__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39580){
var map__39582 = p__39580;
var map__39582__$1 = cljs.core.__destructure_map(map__39582);
var _ = map__39582__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39582__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39583,done,error){
var map__39584 = p__39583;
var map__39584__$1 = cljs.core.__destructure_map(map__39584);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39584__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39586,done,error){
var map__39587 = p__39586;
var map__39587__$1 = cljs.core.__destructure_map(map__39587);
var msg = map__39587__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39587__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39587__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39587__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39591){
var map__39592 = p__39591;
var map__39592__$1 = cljs.core.__destructure_map(map__39592);
var src = map__39592__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39592__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39593 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39593) : done.call(null,G__39593));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39594){
var map__39595 = p__39594;
var map__39595__$1 = cljs.core.__destructure_map(map__39595);
var msg__$1 = map__39595__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39597){var ex = e39597;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39601){
var map__39602 = p__39601;
var map__39602__$1 = cljs.core.__destructure_map(map__39602);
var env = map__39602__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39606){
var map__39607 = p__39606;
var map__39607__$1 = cljs.core.__destructure_map(map__39607);
var msg = map__39607__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39607__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39621){
var map__39622 = p__39621;
var map__39622__$1 = cljs.core.__destructure_map(map__39622);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39622__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39622__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39625){
var map__39626 = p__39625;
var map__39626__$1 = cljs.core.__destructure_map(map__39626);
var svc = map__39626__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39626__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
