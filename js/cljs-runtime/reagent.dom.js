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
var _STAR_always_update_STAR__orig_val__38480 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38481 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38481);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38482 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38483 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38483);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38482);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38480);
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
var G__38487 = arguments.length;
switch (G__38487) {
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

var vec__38489 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38489,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38489,(1),null);
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

var seq__38495_38520 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38496_38521 = null;
var count__38497_38522 = (0);
var i__38498_38523 = (0);
while(true){
if((i__38498_38523 < count__38497_38522)){
var vec__38509_38524 = chunk__38496_38521.cljs$core$IIndexed$_nth$arity$2(null,i__38498_38523);
var container_38525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38509_38524,(0),null);
var comp_38526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38509_38524,(1),null);
reagent.dom.re_render_component(comp_38526,container_38525);


var G__38527 = seq__38495_38520;
var G__38528 = chunk__38496_38521;
var G__38529 = count__38497_38522;
var G__38530 = (i__38498_38523 + (1));
seq__38495_38520 = G__38527;
chunk__38496_38521 = G__38528;
count__38497_38522 = G__38529;
i__38498_38523 = G__38530;
continue;
} else {
var temp__5753__auto___38531 = cljs.core.seq(seq__38495_38520);
if(temp__5753__auto___38531){
var seq__38495_38532__$1 = temp__5753__auto___38531;
if(cljs.core.chunked_seq_QMARK_(seq__38495_38532__$1)){
var c__4638__auto___38533 = cljs.core.chunk_first(seq__38495_38532__$1);
var G__38534 = cljs.core.chunk_rest(seq__38495_38532__$1);
var G__38535 = c__4638__auto___38533;
var G__38536 = cljs.core.count(c__4638__auto___38533);
var G__38537 = (0);
seq__38495_38520 = G__38534;
chunk__38496_38521 = G__38535;
count__38497_38522 = G__38536;
i__38498_38523 = G__38537;
continue;
} else {
var vec__38512_38538 = cljs.core.first(seq__38495_38532__$1);
var container_38539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512_38538,(0),null);
var comp_38540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512_38538,(1),null);
reagent.dom.re_render_component(comp_38540,container_38539);


var G__38541 = cljs.core.next(seq__38495_38532__$1);
var G__38542 = null;
var G__38543 = (0);
var G__38544 = (0);
seq__38495_38520 = G__38541;
chunk__38496_38521 = G__38542;
count__38497_38522 = G__38543;
i__38498_38523 = G__38544;
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
