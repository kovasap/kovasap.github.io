goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27266 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._header[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._header["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_27266(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27273 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._has_body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._has_body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_27273(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27279 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_27279(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27136 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27136["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27137 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27137["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27138 = temp__5751__auto____$2;
return (o27138["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27147 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27147["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27148 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27148["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27149 = temp__5751__auto____$2;
return (o27149["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27159 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27159["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27160 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27160["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27161 = temp__5751__auto____$2;
return (o27161["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27169 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27169["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27170 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27170["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27171 = temp__5751__auto____$2;
return (o27171["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27174 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27174["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27175 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27175["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27176 = temp__5751__auto____$2;
return (o27176["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27177 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27177["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27178 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27178["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27179 = temp__5751__auto____$2;
return (o27179["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27181 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27181["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27182 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27182["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27183 = temp__5751__auto____$2;
return (o27183["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27299 = arguments.length;
var i__4819__auto___27301 = (0);
while(true){
if((i__4819__auto___27301 < len__4818__auto___27299)){
args__4824__auto__.push((arguments[i__4819__auto___27301]));

var G__27309 = (i__4819__auto___27301 + (1));
i__4819__auto___27301 = G__27309;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27185){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27185));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27315 = arguments.length;
var i__4819__auto___27316 = (0);
while(true){
if((i__4819__auto___27316 < len__4818__auto___27315)){
args__4824__auto__.push((arguments[i__4819__auto___27316]));

var G__27318 = (i__4819__auto___27316 + (1));
i__4819__auto___27316 = G__27318;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27189){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27189));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27326 = arguments.length;
var i__4819__auto___27328 = (0);
while(true){
if((i__4819__auto___27328 < len__4818__auto___27326)){
args__4824__auto__.push((arguments[i__4819__auto___27328]));

var G__27330 = (i__4819__auto___27328 + (1));
i__4819__auto___27328 = G__27330;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27191){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27191));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27335 = arguments.length;
var i__4819__auto___27336 = (0);
while(true){
if((i__4819__auto___27336 < len__4818__auto___27335)){
args__4824__auto__.push((arguments[i__4819__auto___27336]));

var G__27339 = (i__4819__auto___27336 + (1));
i__4819__auto___27336 = G__27339;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27195){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27195));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27340 = arguments.length;
var i__4819__auto___27341 = (0);
while(true){
if((i__4819__auto___27341 < len__4818__auto___27340)){
args__4824__auto__.push((arguments[i__4819__auto___27341]));

var G__27342 = (i__4819__auto___27341 + (1));
i__4819__auto___27341 = G__27342;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27200){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27200));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27345 = arguments.length;
var i__4819__auto___27346 = (0);
while(true){
if((i__4819__auto___27346 < len__4818__auto___27345)){
args__4824__auto__.push((arguments[i__4819__auto___27346]));

var G__27347 = (i__4819__auto___27346 + (1));
i__4819__auto___27346 = G__27347;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27203){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27203));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27348 = arguments.length;
var i__4819__auto___27349 = (0);
while(true){
if((i__4819__auto___27349 < len__4818__auto___27348)){
args__4824__auto__.push((arguments[i__4819__auto___27349]));

var G__27350 = (i__4819__auto___27349 + (1));
i__4819__auto___27349 = G__27350;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27209){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27209));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27352 = arguments.length;
var i__4819__auto___27353 = (0);
while(true){
if((i__4819__auto___27353 < len__4818__auto___27352)){
args__4824__auto__.push((arguments[i__4819__auto___27353]));

var G__27354 = (i__4819__auto___27353 + (1));
i__4819__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27223){
var vec__27224 = p__27223;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27224,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27215_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27215_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27220){
var G__27221 = cljs.core.first(seq27220);
var seq27220__$1 = cljs.core.next(seq27220);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27221,seq27220__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27229 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27230 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27231 = (function (){var G__27232 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27233 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27234 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27232,G__27233,G__27234) : devtools.format.make_template_fn.call(null,G__27232,G__27233,G__27234));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27229,G__27230,G__27231) : devtools.format.make_template_fn.call(null,G__27229,G__27230,G__27231));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27356 = arguments.length;
var i__4819__auto___27357 = (0);
while(true){
if((i__4819__auto___27357 < len__4818__auto___27356)){
args__4824__auto__.push((arguments[i__4819__auto___27357]));

var G__27358 = (i__4819__auto___27357 + (1));
i__4819__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27236){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27236));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27360 = arguments.length;
var i__4819__auto___27361 = (0);
while(true){
if((i__4819__auto___27361 < len__4818__auto___27360)){
args__4824__auto__.push((arguments[i__4819__auto___27361]));

var G__27362 = (i__4819__auto___27361 + (1));
i__4819__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27245){
var G__27246 = cljs.core.first(seq27245);
var seq27245__$1 = cljs.core.next(seq27245);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27246,seq27245__$1);
}));


//# sourceMappingURL=devtools.format.js.map
