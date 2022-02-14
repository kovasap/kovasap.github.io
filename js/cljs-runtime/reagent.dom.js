goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38306 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38307 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38307);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38308 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38309 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38309);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38308);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38306);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38323 = arguments.length;
switch (G__38323) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__38330 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return shadow.js.shim.module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__38347_38399 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38348_38400 = null;
var count__38349_38401 = (0);
var i__38350_38402 = (0);
while(true){
if((i__38350_38402 < count__38349_38401)){
var vec__38372_38405 = chunk__38348_38400.cljs$core$IIndexed$_nth$arity$2(null,i__38350_38402);
var container_38406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372_38405,(0),null);
var comp_38407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372_38405,(1),null);
reagent.dom.re_render_component(comp_38407,container_38406);


var G__38408 = seq__38347_38399;
var G__38409 = chunk__38348_38400;
var G__38410 = count__38349_38401;
var G__38411 = (i__38350_38402 + (1));
seq__38347_38399 = G__38408;
chunk__38348_38400 = G__38409;
count__38349_38401 = G__38410;
i__38350_38402 = G__38411;
continue;
} else {
var temp__5753__auto___38412 = cljs.core.seq(seq__38347_38399);
if(temp__5753__auto___38412){
var seq__38347_38413__$1 = temp__5753__auto___38412;
if(cljs.core.chunked_seq_QMARK_(seq__38347_38413__$1)){
var c__4679__auto___38414 = cljs.core.chunk_first(seq__38347_38413__$1);
var G__38415 = cljs.core.chunk_rest(seq__38347_38413__$1);
var G__38416 = c__4679__auto___38414;
var G__38417 = cljs.core.count(c__4679__auto___38414);
var G__38418 = (0);
seq__38347_38399 = G__38415;
chunk__38348_38400 = G__38416;
count__38349_38401 = G__38417;
i__38350_38402 = G__38418;
continue;
} else {
var vec__38390_38419 = cljs.core.first(seq__38347_38413__$1);
var container_38420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390_38419,(0),null);
var comp_38421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390_38419,(1),null);
reagent.dom.re_render_component(comp_38421,container_38420);


var G__38423 = cljs.core.next(seq__38347_38413__$1);
var G__38424 = null;
var G__38425 = (0);
var G__38426 = (0);
seq__38347_38399 = G__38423;
chunk__38348_38400 = G__38424;
count__38349_38401 = G__38425;
i__38350_38402 = G__38426;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
