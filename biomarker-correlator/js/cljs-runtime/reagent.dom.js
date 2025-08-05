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
var _STAR_always_update_STAR__orig_val__81023 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__81024 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__81024);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__81030 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__81031 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__81031);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__81030);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__81023);
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
var G__81037 = arguments.length;
switch (G__81037) {
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

var vec__81086 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81086,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81086,(1),null);
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

var seq__81100_81173 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__81101_81174 = null;
var count__81102_81175 = (0);
var i__81103_81176 = (0);
while(true){
if((i__81103_81176 < count__81102_81175)){
var vec__81145_81177 = chunk__81101_81174.cljs$core$IIndexed$_nth$arity$2(null,i__81103_81176);
var container_81178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81145_81177,(0),null);
var comp_81179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81145_81177,(1),null);
reagent.dom.re_render_component(comp_81179,container_81178);


var G__81180 = seq__81100_81173;
var G__81181 = chunk__81101_81174;
var G__81182 = count__81102_81175;
var G__81183 = (i__81103_81176 + (1));
seq__81100_81173 = G__81180;
chunk__81101_81174 = G__81181;
count__81102_81175 = G__81182;
i__81103_81176 = G__81183;
continue;
} else {
var temp__5753__auto___81184 = cljs.core.seq(seq__81100_81173);
if(temp__5753__auto___81184){
var seq__81100_81189__$1 = temp__5753__auto___81184;
if(cljs.core.chunked_seq_QMARK_(seq__81100_81189__$1)){
var c__4679__auto___81190 = cljs.core.chunk_first(seq__81100_81189__$1);
var G__81191 = cljs.core.chunk_rest(seq__81100_81189__$1);
var G__81192 = c__4679__auto___81190;
var G__81193 = cljs.core.count(c__4679__auto___81190);
var G__81194 = (0);
seq__81100_81173 = G__81191;
chunk__81101_81174 = G__81192;
count__81102_81175 = G__81193;
i__81103_81176 = G__81194;
continue;
} else {
var vec__81155_81195 = cljs.core.first(seq__81100_81189__$1);
var container_81196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81155_81195,(0),null);
var comp_81197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81155_81195,(1),null);
reagent.dom.re_render_component(comp_81197,container_81196);


var G__81198 = cljs.core.next(seq__81100_81189__$1);
var G__81199 = null;
var G__81200 = (0);
var G__81201 = (0);
seq__81100_81173 = G__81198;
chunk__81101_81174 = G__81199;
count__81102_81175 = G__81200;
i__81103_81176 = G__81201;
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
