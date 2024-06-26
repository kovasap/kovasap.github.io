goog.provide('orchestra_cljs.spec.test');
goog.scope(function(){
  orchestra_cljs.spec.test.goog$module$goog$object = goog.module.get('goog.object');
});
orchestra_cljs.spec.test.distinct_by = (function orchestra_cljs$spec$test$distinct_by(f,coll){
var step = (function orchestra_cljs$spec$test$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__47412,seen__$1){
while(true){
var vec__47413 = p__47412;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47413,(0),null);
var xs__$1 = vec__47413;
var temp__5753__auto__ = cljs.core.seq(xs__$1);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,v)){
var G__47597 = cljs.core.rest(s);
var G__47598 = seen__$1;
p__47412 = G__47597;
seen__$1 = G__47598;
continue;
} else {
return cljs.core.cons(x,orchestra_cljs$spec$test$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
orchestra_cljs.spec.test.no_fspec = (function orchestra_cljs$spec$test$no_fspec(v,spec){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Fn at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," is not spec'ed."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fspec","no-fspec",-1763393966)], null));
});
orchestra_cljs.spec.test.no_args_spec = (function orchestra_cljs$spec$test$no_args_spec(v,spec){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," are not spec'ed."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null));
});
/**
 * if false, instrumented fns call straight through
 */
orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = true;
orchestra_cljs.spec.test.get_host_port = (function orchestra_cljs$spec$test$get_host_port(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),window.location.host,new cljs.core.Keyword(null,"port","port",1534937262),window.location.port], null);
}
});
orchestra_cljs.spec.test.get_ua_product = (function orchestra_cljs$spec$test$get_ua_product(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
orchestra_cljs.spec.test.get_env = (function orchestra_cljs$spec$test$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),orchestra_cljs.spec.test.get_ua_product()], null);
});
orchestra_cljs.spec.test.find_caller = (function orchestra_cljs$spec$test$find_caller(st){
var search_spec_fn = (function orchestra_cljs$spec$test$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(frame);
var and__4251__auto__ = typeof s === 'string';
if(and__4251__auto__){
var and__4251__auto____$1 = (!(clojure.string.blank_QMARK_(s)));
if(and__4251__auto____$1){
return cljs.core.re_find(/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
});
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(search_spec_fn,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__47429_SHARP_){
return cljs.core.not(search_spec_fn(p1__47429_SHARP_));
}),st)));
});
orchestra_cljs.spec.test.spec_checking_fn = (function orchestra_cljs$spec$test$spec_checking_fn(v,f,raw_fn_spec){
var fn_spec = (function (){var fexpr__47438 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.maybe_spec;},new cljs.core.Symbol("cljs.spec.alpha","maybe-spec","cljs.spec.alpha/maybe-spec",1954004993,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",-741366888,null),"cljs/spec/alpha.cljs",(18),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",1986391440,null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.alpha.maybe_spec)?cljs.spec.alpha.maybe_spec.cljs$lang$test:null)])));
return (fexpr__47438.cljs$core$IFn$_invoke$arity$1 ? fexpr__47438.cljs$core$IFn$_invoke$arity$1(raw_fn_spec) : fexpr__47438.call(null,raw_fn_spec));
})();
var conform_BANG_ = (function (v__$1,role,spec,data,data_key){
var conformed = cljs.spec.alpha.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),conformed)){
var caller = orchestra_cljs.spec.test.find_caller(cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(orchestra_cljs.spec.test.get_host_port(),(new Error()).stack,orchestra_cljs.spec.test.get_env(),null));
var via = (function (){var temp__5755__auto__ = (function (){var fexpr__47444 = new cljs.core.Var(function(){return cljs.spec.alpha.spec_name;},new cljs.core.Symbol("cljs.spec.alpha","spec-name","cljs.spec.alpha/spec-name",888422400,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"spec-name","spec-name",-1420007703,null),"cljs/spec/alpha.cljs",(17),(1),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null)),null,(cljs.core.truth_(cljs.spec.alpha.spec_name)?cljs.spec.alpha.spec_name.cljs$lang$test:null)]));
return (fexpr__47444.cljs$core$IFn$_invoke$arity$1 ? fexpr__47444.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__47444.call(null,spec));
})();
if((temp__5755__auto__ == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
var n = temp__5755__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
}
})();
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),via,cljs.core.PersistentVector.EMPTY,data),data_key,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"instrument","instrument",-960698844)], 0)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("orchestra-cljs.spec.test","caller","orchestra-cljs.spec.test/caller",-1310233030),caller], null):null)], 0));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__47460 = new cljs.core.Var(function(){return cljs.spec.alpha.__GT_sym;},new cljs.core.Symbol("cljs.spec.alpha","->sym","cljs.spec.alpha/->sym",-2031271081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"->sym","->sym",696606926,null),"cljs/spec/alpha.cljs",(13),(1),(323),(323),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.alpha.__GT_sym)?cljs.spec.alpha.__GT_sym.cljs$lang$test:null)]));
return (fexpr__47460.cljs$core$IFn$_invoke$arity$1 ? fexpr__47460.cljs$core$IFn$_invoke$arity$1(v__$1) : fexpr__47460.call(null,v__$1));
})())," did not conform to spec:\n",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47463_47616 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47464_47617 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47465_47618 = true;
var _STAR_print_fn_STAR__temp_val__47466_47619 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47465_47618);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47466_47619);

try{cljs.spec.alpha.explain_out(ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47464_47617);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47463_47616);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ed,new cljs.core.Keyword("orchestra.spec","var","orchestra.spec/var",-1159122057),v__$1));
} else {
return conformed;
}
});
var pure_variadic_QMARK_ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)));
if(cljs.core.truth_(and__4251__auto__)){
return (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))) === (0));
} else {
return and__4251__auto__;
}
})();
var apply_SINGLEQUOTE_ = (function (f__$1,args){
if(cljs.core.truth_((function (){var and__4251__auto__ = (args == null);
if(and__4251__auto__){
return pure_variadic_QMARK_;
} else {
return and__4251__auto__;
}
})())){
return f__$1.cljs$core$IFn$_invoke$arity$variadic();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
}
});
var ret = (function() { 
var G__47623__delegate = function (args){
if(cljs.core.truth_(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_)){
var orig__47301__auto__ = cljs.core.deref(new cljs.core.Var(function(){return orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","*instrument-enabled*","orchestra-cljs.spec.test/*instrument-enabled*",1683543280,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"*instrument-enabled*","*instrument-enabled*",1714892871,null),"orchestra_cljs/spec/test.cljs",46,1,true,46,46,cljs.core.List.EMPTY,"if false, instrumented fns call straight through",(cljs.core.truth_(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_)?orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_.cljs$lang$test:null)])));
(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = null);

try{var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec))?conform_BANG_(v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec),args,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783)):null);
var ret = (function (){var _STAR_instrument_enabled_STAR__orig_val__47469 = orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__47470 = true;
(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__47470);

try{return apply_SINGLEQUOTE_(f,args);
}finally {(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__47469);
}})();
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fn_spec))?conform_BANG_(v,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fn_spec),ret,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503)):null);
var temp__5753__auto___47628 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(fn_spec);
if(cljs.core.truth_(temp__5753__auto___47628)){
var spec_47629 = temp__5753__auto___47628;
if((cargs == null)){
throw orchestra_cljs.spec.test.no_args_spec(v,fn_spec);
} else {
conform_BANG_(v,new cljs.core.Keyword(null,"fn","fn",-1175266204),spec_47629,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ret","ret",-468222814),(function (){var or__4253__auto__ = cret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ret;
}
})(),new cljs.core.Keyword(null,"args","args",1315556576),cargs], null),new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
}
} else {
}

return ret;
}finally {(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = orig__47301__auto__);
}} else {
return apply_SINGLEQUOTE_(f,args);
}
};
var G__47623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47632__i = 0, G__47632__a = new Array(arguments.length -  0);
while (G__47632__i < G__47632__a.length) {G__47632__a[G__47632__i] = arguments[G__47632__i + 0]; ++G__47632__i;}
  args = new cljs.core.IndexedSeq(G__47632__a,0,null);
} 
return G__47623__delegate.call(this,args);};
G__47623.cljs$lang$maxFixedArity = 0;
G__47623.cljs$lang$applyTo = (function (arglist__47634){
var args = cljs.core.seq(arglist__47634);
return G__47623__delegate(args);
});
G__47623.cljs$core$IFn$_invoke$arity$variadic = G__47623__delegate;
return G__47623;
})()
;
if(cljs.core.truth_(pure_variadic_QMARK_)){
} else {
if((!((f.cljs$core$IFn$_invoke$arity$0 == null)))){
(ret.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.PersistentVector.EMPTY);
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$1 == null)))){
(ret.cljs$core$IFn$_invoke$arity$1 = (function (arg0){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$2 == null)))){
(ret.cljs$core$IFn$_invoke$arity$2 = (function (arg0,arg1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$3 == null)))){
(ret.cljs$core$IFn$_invoke$arity$3 = (function (arg0,arg1,arg2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$4 == null)))){
(ret.cljs$core$IFn$_invoke$arity$4 = (function (arg0,arg1,arg2,arg3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$5 == null)))){
(ret.cljs$core$IFn$_invoke$arity$5 = (function (arg0,arg1,arg2,arg3,arg4){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$6 == null)))){
(ret.cljs$core$IFn$_invoke$arity$6 = (function (arg0,arg1,arg2,arg3,arg4,arg5){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$7 == null)))){
(ret.cljs$core$IFn$_invoke$arity$7 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$8 == null)))){
(ret.cljs$core$IFn$_invoke$arity$8 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$9 == null)))){
(ret.cljs$core$IFn$_invoke$arity$9 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$10 == null)))){
(ret.cljs$core$IFn$_invoke$arity$10 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$11 == null)))){
(ret.cljs$core$IFn$_invoke$arity$11 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$12 == null)))){
(ret.cljs$core$IFn$_invoke$arity$12 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$13 == null)))){
(ret.cljs$core$IFn$_invoke$arity$13 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$14 == null)))){
(ret.cljs$core$IFn$_invoke$arity$14 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$15 == null)))){
(ret.cljs$core$IFn$_invoke$arity$15 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$16 == null)))){
(ret.cljs$core$IFn$_invoke$arity$16 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$17 == null)))){
(ret.cljs$core$IFn$_invoke$arity$17 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$18 == null)))){
(ret.cljs$core$IFn$_invoke$arity$18 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$19 == null)))){
(ret.cljs$core$IFn$_invoke$arity$19 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18], null));
}));
} else {
}

if((!((f.cljs$core$IFn$_invoke$arity$20 == null)))){
(ret.cljs$core$IFn$_invoke$arity$20 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19], null));
}));
} else {
}

var temp__5757__auto___47681 = f.cljs$core$IFn$_invoke$arity$variadic;
if((temp__5757__auto___47681 == null)){
} else {
var variadic_47682 = temp__5757__auto___47681;
(ret.cljs$core$IFn$_invoke$arity$variadic = (function() { 
var G__47683__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(variadic_47682,args);
};
var G__47683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47684__i = 0, G__47684__a = new Array(arguments.length -  0);
while (G__47684__i < G__47684__a.length) {G__47684__a[G__47684__i] = arguments[G__47684__i + 0]; ++G__47684__i;}
  args = new cljs.core.IndexedSeq(G__47684__a,0,null);
} 
return G__47683__delegate.call(this,args);};
G__47683.cljs$lang$maxFixedArity = 0;
G__47683.cljs$lang$applyTo = (function (arglist__47685){
var args = cljs.core.seq(arglist__47685);
return G__47683__delegate(args);
});
G__47683.cljs$core$IFn$_invoke$arity$variadic = G__47683__delegate;
return G__47683;
})()
);
}
}

return ret;
});
if((typeof orchestra_cljs !== 'undefined') && (typeof orchestra_cljs.spec !== 'undefined') && (typeof orchestra_cljs.spec.test !== 'undefined') && (typeof orchestra_cljs.spec.test.instrumented_vars !== 'undefined')){
} else {
orchestra_cljs.spec.test.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Helper for instrument.
 */
orchestra_cljs.spec.test.instrument_choose_fn = (function orchestra_cljs$spec$test$instrument_choose_fn(f,spec,sym,p__47563){
var map__47564 = p__47563;
var map__47564__$1 = cljs.core.__destructure_map(map__47564);
var over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47564__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var stub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47564__$1,new cljs.core.Keyword(null,"stub","stub",1339145807));
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47564__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([sym]),stub))){
return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,over));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(replace,sym,f);
}
});
/**
 * Helper for instrument
 */
orchestra_cljs.spec.test.instrument_choose_spec = (function orchestra_cljs$spec$test$instrument_choose_spec(spec,sym,p__47568){
var map__47569 = p__47568;
var map__47569__$1 = cljs.core.__destructure_map(map__47569);
var overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47569__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(overrides,sym,spec);
});
orchestra_cljs.spec.test.instrument_1_STAR_ = (function orchestra_cljs$spec$test$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.alpha.get_spec(v);
var map__47576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(orchestra_cljs.spec.test.instrumented_vars),v);
var map__47576__$1 = cljs.core.__destructure_map(map__47576);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47576__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47576__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref(v);
var to_wrap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current))?raw:current);
var ospec = (function (){var or__4253__auto__ = orchestra_cljs.spec.test.instrument_choose_spec(spec,s,opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw orchestra_cljs.spec.test.no_fspec(v,spec);
}
})();
var ofn = orchestra_cljs.spec.test.instrument_choose_fn(to_wrap,ospec,s,opts);
var checked = orchestra_cljs.spec.test.spec_checking_fn(v,ofn,ospec);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(orchestra_cljs.spec.test.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
});
orchestra_cljs.spec.test.unstrument_1_STAR_ = (function orchestra_cljs$spec$test$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(orchestra_cljs.spec.test.instrumented_vars),v);
if(cljs.core.truth_(temp__5753__auto__)){
var map__47583 = temp__5753__auto__;
var map__47583__$1 = cljs.core.__destructure_map(map__47583);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47583__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47583__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(orchestra_cljs.spec.test.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref(v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
orchestra_cljs.spec.test.fn_spec_name_QMARK_ = (function orchestra_cljs$spec$test$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
orchestra_cljs.spec.test.instrumentable_syms = (function orchestra_cljs$spec$test$instrumentable_syms(var_args){
var G__47585 = arguments.length;
switch (G__47585) {
case 0:
return orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(null);
}));

(orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error(["Assert failed: ","instrument :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(orchestra_cljs.spec.test.fn_spec_name_QMARK_,cljs.core.keys(cljs.spec.alpha.registry())),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",1339145807).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys(new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(opts))], null));
}));

(orchestra_cljs.spec.test.instrumentable_syms.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=orchestra_cljs.spec.test.js.map
