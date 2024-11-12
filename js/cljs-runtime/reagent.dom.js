goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__42411 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42412 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42412);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__42414 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42415 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42415);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42414);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42411);
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
var G__42426 = arguments.length;
switch (G__42426) {
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

var vec__42428 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(1),null);
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
return module$node_modules$react_dom$index.findDOMNode(this$);
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

var seq__42435_42461 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__42436_42462 = null;
var count__42437_42463 = (0);
var i__42438_42464 = (0);
while(true){
if((i__42438_42464 < count__42437_42463)){
var vec__42448_42465 = chunk__42436_42462.cljs$core$IIndexed$_nth$arity$2(null,i__42438_42464);
var container_42466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448_42465,(0),null);
var comp_42467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448_42465,(1),null);
reagent.dom.re_render_component(comp_42467,container_42466);


var G__42468 = seq__42435_42461;
var G__42469 = chunk__42436_42462;
var G__42470 = count__42437_42463;
var G__42471 = (i__42438_42464 + (1));
seq__42435_42461 = G__42468;
chunk__42436_42462 = G__42469;
count__42437_42463 = G__42470;
i__42438_42464 = G__42471;
continue;
} else {
var temp__5823__auto___42472 = cljs.core.seq(seq__42435_42461);
if(temp__5823__auto___42472){
var seq__42435_42473__$1 = temp__5823__auto___42472;
if(cljs.core.chunked_seq_QMARK_(seq__42435_42473__$1)){
var c__5568__auto___42474 = cljs.core.chunk_first(seq__42435_42473__$1);
var G__42475 = cljs.core.chunk_rest(seq__42435_42473__$1);
var G__42476 = c__5568__auto___42474;
var G__42477 = cljs.core.count(c__5568__auto___42474);
var G__42478 = (0);
seq__42435_42461 = G__42475;
chunk__42436_42462 = G__42476;
count__42437_42463 = G__42477;
i__42438_42464 = G__42478;
continue;
} else {
var vec__42451_42479 = cljs.core.first(seq__42435_42473__$1);
var container_42480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42451_42479,(0),null);
var comp_42481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42451_42479,(1),null);
reagent.dom.re_render_component(comp_42481,container_42480);


var G__42482 = cljs.core.next(seq__42435_42473__$1);
var G__42483 = null;
var G__42484 = (0);
var G__42485 = (0);
seq__42435_42461 = G__42482;
chunk__42436_42462 = G__42483;
count__42437_42463 = G__42484;
i__42438_42464 = G__42485;
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
