goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_78239 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_78239(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_78240 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_78240(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__77088 = coll;
var G__77089 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__77088,G__77089) : shadow.dom.lazy_native_coll_seq.call(null,G__77088,G__77089));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__77128 = arguments.length;
switch (G__77128) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__77144 = arguments.length;
switch (G__77144) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__77174 = arguments.length;
switch (G__77174) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__77192 = arguments.length;
switch (G__77192) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__77205 = arguments.length;
switch (G__77205) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__77219 = arguments.length;
switch (G__77219) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e77236){if((e77236 instanceof Object)){
var e = e77236;
return console.log("didnt support attachEvent",el,e);
} else {
throw e77236;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__77253 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__77254 = null;
var count__77255 = (0);
var i__77256 = (0);
while(true){
if((i__77256 < count__77255)){
var el = chunk__77254.cljs$core$IIndexed$_nth$arity$2(null,i__77256);
var handler_78278__$1 = ((function (seq__77253,chunk__77254,count__77255,i__77256,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__77253,chunk__77254,count__77255,i__77256,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_78278__$1);


var G__78280 = seq__77253;
var G__78281 = chunk__77254;
var G__78282 = count__77255;
var G__78283 = (i__77256 + (1));
seq__77253 = G__78280;
chunk__77254 = G__78281;
count__77255 = G__78282;
i__77256 = G__78283;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77253);
if(temp__5753__auto__){
var seq__77253__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77253__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77253__$1);
var G__78284 = cljs.core.chunk_rest(seq__77253__$1);
var G__78285 = c__4679__auto__;
var G__78286 = cljs.core.count(c__4679__auto__);
var G__78287 = (0);
seq__77253 = G__78284;
chunk__77254 = G__78285;
count__77255 = G__78286;
i__77256 = G__78287;
continue;
} else {
var el = cljs.core.first(seq__77253__$1);
var handler_78288__$1 = ((function (seq__77253,chunk__77254,count__77255,i__77256,el,seq__77253__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__77253,chunk__77254,count__77255,i__77256,el,seq__77253__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_78288__$1);


var G__78289 = cljs.core.next(seq__77253__$1);
var G__78290 = null;
var G__78291 = (0);
var G__78292 = (0);
seq__77253 = G__78289;
chunk__77254 = G__78290;
count__77255 = G__78291;
i__77256 = G__78292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__77282 = arguments.length;
switch (G__77282) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__77292 = cljs.core.seq(events);
var chunk__77293 = null;
var count__77294 = (0);
var i__77295 = (0);
while(true){
if((i__77295 < count__77294)){
var vec__77308 = chunk__77293.cljs$core$IIndexed$_nth$arity$2(null,i__77295);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77308,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__78323 = seq__77292;
var G__78324 = chunk__77293;
var G__78325 = count__77294;
var G__78326 = (i__77295 + (1));
seq__77292 = G__78323;
chunk__77293 = G__78324;
count__77294 = G__78325;
i__77295 = G__78326;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77292);
if(temp__5753__auto__){
var seq__77292__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77292__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77292__$1);
var G__78332 = cljs.core.chunk_rest(seq__77292__$1);
var G__78333 = c__4679__auto__;
var G__78334 = cljs.core.count(c__4679__auto__);
var G__78335 = (0);
seq__77292 = G__78332;
chunk__77293 = G__78333;
count__77294 = G__78334;
i__77295 = G__78335;
continue;
} else {
var vec__77315 = cljs.core.first(seq__77292__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77315,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__78336 = cljs.core.next(seq__77292__$1);
var G__78337 = null;
var G__78338 = (0);
var G__78339 = (0);
seq__77292 = G__78336;
chunk__77293 = G__78337;
count__77294 = G__78338;
i__77295 = G__78339;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__77334 = cljs.core.seq(styles);
var chunk__77335 = null;
var count__77336 = (0);
var i__77337 = (0);
while(true){
if((i__77337 < count__77336)){
var vec__77352 = chunk__77335.cljs$core$IIndexed$_nth$arity$2(null,i__77337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77352,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__78352 = seq__77334;
var G__78353 = chunk__77335;
var G__78354 = count__77336;
var G__78355 = (i__77337 + (1));
seq__77334 = G__78352;
chunk__77335 = G__78353;
count__77336 = G__78354;
i__77337 = G__78355;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77334);
if(temp__5753__auto__){
var seq__77334__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77334__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77334__$1);
var G__78360 = cljs.core.chunk_rest(seq__77334__$1);
var G__78361 = c__4679__auto__;
var G__78362 = cljs.core.count(c__4679__auto__);
var G__78363 = (0);
seq__77334 = G__78360;
chunk__77335 = G__78361;
count__77336 = G__78362;
i__77337 = G__78363;
continue;
} else {
var vec__77356 = cljs.core.first(seq__77334__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77356,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__78364 = cljs.core.next(seq__77334__$1);
var G__78365 = null;
var G__78366 = (0);
var G__78367 = (0);
seq__77334 = G__78364;
chunk__77335 = G__78365;
count__77336 = G__78366;
i__77337 = G__78367;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__77361_78368 = key;
var G__77361_78369__$1 = (((G__77361_78368 instanceof cljs.core.Keyword))?G__77361_78368.fqn:null);
switch (G__77361_78369__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_78377 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_78377,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_78377,"aria-");
}
})())){
el.setAttribute(ks_78377,value);
} else {
(el[ks_78377] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__77408){
var map__77409 = p__77408;
var map__77409__$1 = cljs.core.__destructure_map(map__77409);
var props = map__77409__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77409__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__77411 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77411,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77411,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77411,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__77422 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__77422,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__77422;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__77436 = arguments.length;
switch (G__77436) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__77458){
var vec__77460 = p__77458;
var seq__77461 = cljs.core.seq(vec__77460);
var first__77462 = cljs.core.first(seq__77461);
var seq__77461__$1 = cljs.core.next(seq__77461);
var nn = first__77462;
var first__77462__$1 = cljs.core.first(seq__77461__$1);
var seq__77461__$2 = cljs.core.next(seq__77461__$1);
var np = first__77462__$1;
var nc = seq__77461__$2;
var node = vec__77460;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77468 = nn;
var G__77469 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__77468,G__77469) : create_fn.call(null,G__77468,G__77469));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77472 = nn;
var G__77473 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__77472,G__77473) : create_fn.call(null,G__77472,G__77473));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__77481 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77481,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77481,(1),null);
var seq__77485_78389 = cljs.core.seq(node_children);
var chunk__77486_78390 = null;
var count__77487_78391 = (0);
var i__77488_78392 = (0);
while(true){
if((i__77488_78392 < count__77487_78391)){
var child_struct_78393 = chunk__77486_78390.cljs$core$IIndexed$_nth$arity$2(null,i__77488_78392);
var children_78394 = shadow.dom.dom_node(child_struct_78393);
if(cljs.core.seq_QMARK_(children_78394)){
var seq__77526_78395 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_78394));
var chunk__77528_78396 = null;
var count__77529_78397 = (0);
var i__77530_78398 = (0);
while(true){
if((i__77530_78398 < count__77529_78397)){
var child_78399 = chunk__77528_78396.cljs$core$IIndexed$_nth$arity$2(null,i__77530_78398);
if(cljs.core.truth_(child_78399)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78399);


var G__78400 = seq__77526_78395;
var G__78401 = chunk__77528_78396;
var G__78402 = count__77529_78397;
var G__78403 = (i__77530_78398 + (1));
seq__77526_78395 = G__78400;
chunk__77528_78396 = G__78401;
count__77529_78397 = G__78402;
i__77530_78398 = G__78403;
continue;
} else {
var G__78404 = seq__77526_78395;
var G__78405 = chunk__77528_78396;
var G__78406 = count__77529_78397;
var G__78407 = (i__77530_78398 + (1));
seq__77526_78395 = G__78404;
chunk__77528_78396 = G__78405;
count__77529_78397 = G__78406;
i__77530_78398 = G__78407;
continue;
}
} else {
var temp__5753__auto___78408 = cljs.core.seq(seq__77526_78395);
if(temp__5753__auto___78408){
var seq__77526_78409__$1 = temp__5753__auto___78408;
if(cljs.core.chunked_seq_QMARK_(seq__77526_78409__$1)){
var c__4679__auto___78410 = cljs.core.chunk_first(seq__77526_78409__$1);
var G__78411 = cljs.core.chunk_rest(seq__77526_78409__$1);
var G__78412 = c__4679__auto___78410;
var G__78413 = cljs.core.count(c__4679__auto___78410);
var G__78414 = (0);
seq__77526_78395 = G__78411;
chunk__77528_78396 = G__78412;
count__77529_78397 = G__78413;
i__77530_78398 = G__78414;
continue;
} else {
var child_78415 = cljs.core.first(seq__77526_78409__$1);
if(cljs.core.truth_(child_78415)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78415);


var G__78416 = cljs.core.next(seq__77526_78409__$1);
var G__78417 = null;
var G__78418 = (0);
var G__78419 = (0);
seq__77526_78395 = G__78416;
chunk__77528_78396 = G__78417;
count__77529_78397 = G__78418;
i__77530_78398 = G__78419;
continue;
} else {
var G__78420 = cljs.core.next(seq__77526_78409__$1);
var G__78421 = null;
var G__78422 = (0);
var G__78423 = (0);
seq__77526_78395 = G__78420;
chunk__77528_78396 = G__78421;
count__77529_78397 = G__78422;
i__77530_78398 = G__78423;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_78394);
}


var G__78424 = seq__77485_78389;
var G__78425 = chunk__77486_78390;
var G__78426 = count__77487_78391;
var G__78427 = (i__77488_78392 + (1));
seq__77485_78389 = G__78424;
chunk__77486_78390 = G__78425;
count__77487_78391 = G__78426;
i__77488_78392 = G__78427;
continue;
} else {
var temp__5753__auto___78428 = cljs.core.seq(seq__77485_78389);
if(temp__5753__auto___78428){
var seq__77485_78429__$1 = temp__5753__auto___78428;
if(cljs.core.chunked_seq_QMARK_(seq__77485_78429__$1)){
var c__4679__auto___78430 = cljs.core.chunk_first(seq__77485_78429__$1);
var G__78431 = cljs.core.chunk_rest(seq__77485_78429__$1);
var G__78432 = c__4679__auto___78430;
var G__78433 = cljs.core.count(c__4679__auto___78430);
var G__78434 = (0);
seq__77485_78389 = G__78431;
chunk__77486_78390 = G__78432;
count__77487_78391 = G__78433;
i__77488_78392 = G__78434;
continue;
} else {
var child_struct_78435 = cljs.core.first(seq__77485_78429__$1);
var children_78436 = shadow.dom.dom_node(child_struct_78435);
if(cljs.core.seq_QMARK_(children_78436)){
var seq__77548_78437 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_78436));
var chunk__77550_78438 = null;
var count__77551_78439 = (0);
var i__77552_78440 = (0);
while(true){
if((i__77552_78440 < count__77551_78439)){
var child_78441 = chunk__77550_78438.cljs$core$IIndexed$_nth$arity$2(null,i__77552_78440);
if(cljs.core.truth_(child_78441)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78441);


var G__78442 = seq__77548_78437;
var G__78443 = chunk__77550_78438;
var G__78444 = count__77551_78439;
var G__78445 = (i__77552_78440 + (1));
seq__77548_78437 = G__78442;
chunk__77550_78438 = G__78443;
count__77551_78439 = G__78444;
i__77552_78440 = G__78445;
continue;
} else {
var G__78446 = seq__77548_78437;
var G__78447 = chunk__77550_78438;
var G__78448 = count__77551_78439;
var G__78449 = (i__77552_78440 + (1));
seq__77548_78437 = G__78446;
chunk__77550_78438 = G__78447;
count__77551_78439 = G__78448;
i__77552_78440 = G__78449;
continue;
}
} else {
var temp__5753__auto___78450__$1 = cljs.core.seq(seq__77548_78437);
if(temp__5753__auto___78450__$1){
var seq__77548_78451__$1 = temp__5753__auto___78450__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77548_78451__$1)){
var c__4679__auto___78452 = cljs.core.chunk_first(seq__77548_78451__$1);
var G__78453 = cljs.core.chunk_rest(seq__77548_78451__$1);
var G__78454 = c__4679__auto___78452;
var G__78455 = cljs.core.count(c__4679__auto___78452);
var G__78456 = (0);
seq__77548_78437 = G__78453;
chunk__77550_78438 = G__78454;
count__77551_78439 = G__78455;
i__77552_78440 = G__78456;
continue;
} else {
var child_78457 = cljs.core.first(seq__77548_78451__$1);
if(cljs.core.truth_(child_78457)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78457);


var G__78458 = cljs.core.next(seq__77548_78451__$1);
var G__78459 = null;
var G__78460 = (0);
var G__78461 = (0);
seq__77548_78437 = G__78458;
chunk__77550_78438 = G__78459;
count__77551_78439 = G__78460;
i__77552_78440 = G__78461;
continue;
} else {
var G__78462 = cljs.core.next(seq__77548_78451__$1);
var G__78463 = null;
var G__78464 = (0);
var G__78465 = (0);
seq__77548_78437 = G__78462;
chunk__77550_78438 = G__78463;
count__77551_78439 = G__78464;
i__77552_78440 = G__78465;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_78436);
}


var G__78466 = cljs.core.next(seq__77485_78429__$1);
var G__78467 = null;
var G__78468 = (0);
var G__78469 = (0);
seq__77485_78389 = G__78466;
chunk__77486_78390 = G__78467;
count__77487_78391 = G__78468;
i__77488_78392 = G__78469;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__77610 = cljs.core.seq(node);
var chunk__77611 = null;
var count__77612 = (0);
var i__77613 = (0);
while(true){
if((i__77613 < count__77612)){
var n = chunk__77611.cljs$core$IIndexed$_nth$arity$2(null,i__77613);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__78470 = seq__77610;
var G__78471 = chunk__77611;
var G__78472 = count__77612;
var G__78473 = (i__77613 + (1));
seq__77610 = G__78470;
chunk__77611 = G__78471;
count__77612 = G__78472;
i__77613 = G__78473;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77610);
if(temp__5753__auto__){
var seq__77610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77610__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77610__$1);
var G__78474 = cljs.core.chunk_rest(seq__77610__$1);
var G__78475 = c__4679__auto__;
var G__78476 = cljs.core.count(c__4679__auto__);
var G__78477 = (0);
seq__77610 = G__78474;
chunk__77611 = G__78475;
count__77612 = G__78476;
i__77613 = G__78477;
continue;
} else {
var n = cljs.core.first(seq__77610__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__78478 = cljs.core.next(seq__77610__$1);
var G__78479 = null;
var G__78480 = (0);
var G__78481 = (0);
seq__77610 = G__78478;
chunk__77611 = G__78479;
count__77612 = G__78480;
i__77613 = G__78481;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__77636 = arguments.length;
switch (G__77636) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__77652 = arguments.length;
switch (G__77652) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__77671 = arguments.length;
switch (G__77671) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78488 = arguments.length;
var i__4865__auto___78489 = (0);
while(true){
if((i__4865__auto___78489 < len__4864__auto___78488)){
args__4870__auto__.push((arguments[i__4865__auto___78489]));

var G__78493 = (i__4865__auto___78489 + (1));
i__4865__auto___78489 = G__78493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__77710_78494 = cljs.core.seq(nodes);
var chunk__77711_78495 = null;
var count__77712_78496 = (0);
var i__77713_78497 = (0);
while(true){
if((i__77713_78497 < count__77712_78496)){
var node_78498 = chunk__77711_78495.cljs$core$IIndexed$_nth$arity$2(null,i__77713_78497);
fragment.appendChild(shadow.dom._to_dom(node_78498));


var G__78499 = seq__77710_78494;
var G__78500 = chunk__77711_78495;
var G__78501 = count__77712_78496;
var G__78502 = (i__77713_78497 + (1));
seq__77710_78494 = G__78499;
chunk__77711_78495 = G__78500;
count__77712_78496 = G__78501;
i__77713_78497 = G__78502;
continue;
} else {
var temp__5753__auto___78503 = cljs.core.seq(seq__77710_78494);
if(temp__5753__auto___78503){
var seq__77710_78504__$1 = temp__5753__auto___78503;
if(cljs.core.chunked_seq_QMARK_(seq__77710_78504__$1)){
var c__4679__auto___78505 = cljs.core.chunk_first(seq__77710_78504__$1);
var G__78506 = cljs.core.chunk_rest(seq__77710_78504__$1);
var G__78507 = c__4679__auto___78505;
var G__78508 = cljs.core.count(c__4679__auto___78505);
var G__78509 = (0);
seq__77710_78494 = G__78506;
chunk__77711_78495 = G__78507;
count__77712_78496 = G__78508;
i__77713_78497 = G__78509;
continue;
} else {
var node_78510 = cljs.core.first(seq__77710_78504__$1);
fragment.appendChild(shadow.dom._to_dom(node_78510));


var G__78511 = cljs.core.next(seq__77710_78504__$1);
var G__78512 = null;
var G__78513 = (0);
var G__78514 = (0);
seq__77710_78494 = G__78511;
chunk__77711_78495 = G__78512;
count__77712_78496 = G__78513;
i__77713_78497 = G__78514;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq77705){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77705));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__77728_78515 = cljs.core.seq(scripts);
var chunk__77729_78516 = null;
var count__77730_78517 = (0);
var i__77731_78518 = (0);
while(true){
if((i__77731_78518 < count__77730_78517)){
var vec__77743_78519 = chunk__77729_78516.cljs$core$IIndexed$_nth$arity$2(null,i__77731_78518);
var script_tag_78520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77743_78519,(0),null);
var script_body_78521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77743_78519,(1),null);
eval(script_body_78521);


var G__78522 = seq__77728_78515;
var G__78523 = chunk__77729_78516;
var G__78524 = count__77730_78517;
var G__78525 = (i__77731_78518 + (1));
seq__77728_78515 = G__78522;
chunk__77729_78516 = G__78523;
count__77730_78517 = G__78524;
i__77731_78518 = G__78525;
continue;
} else {
var temp__5753__auto___78526 = cljs.core.seq(seq__77728_78515);
if(temp__5753__auto___78526){
var seq__77728_78527__$1 = temp__5753__auto___78526;
if(cljs.core.chunked_seq_QMARK_(seq__77728_78527__$1)){
var c__4679__auto___78528 = cljs.core.chunk_first(seq__77728_78527__$1);
var G__78529 = cljs.core.chunk_rest(seq__77728_78527__$1);
var G__78530 = c__4679__auto___78528;
var G__78531 = cljs.core.count(c__4679__auto___78528);
var G__78532 = (0);
seq__77728_78515 = G__78529;
chunk__77729_78516 = G__78530;
count__77730_78517 = G__78531;
i__77731_78518 = G__78532;
continue;
} else {
var vec__77749_78533 = cljs.core.first(seq__77728_78527__$1);
var script_tag_78534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77749_78533,(0),null);
var script_body_78535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77749_78533,(1),null);
eval(script_body_78535);


var G__78536 = cljs.core.next(seq__77728_78527__$1);
var G__78537 = null;
var G__78538 = (0);
var G__78539 = (0);
seq__77728_78515 = G__78536;
chunk__77729_78516 = G__78537;
count__77730_78517 = G__78538;
i__77731_78518 = G__78539;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__77754){
var vec__77755 = p__77754;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77755,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77755,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__77772 = arguments.length;
switch (G__77772) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__77777 = cljs.core.seq(style_keys);
var chunk__77778 = null;
var count__77779 = (0);
var i__77780 = (0);
while(true){
if((i__77780 < count__77779)){
var it = chunk__77778.cljs$core$IIndexed$_nth$arity$2(null,i__77780);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__78553 = seq__77777;
var G__78554 = chunk__77778;
var G__78555 = count__77779;
var G__78556 = (i__77780 + (1));
seq__77777 = G__78553;
chunk__77778 = G__78554;
count__77779 = G__78555;
i__77780 = G__78556;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77777);
if(temp__5753__auto__){
var seq__77777__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77777__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77777__$1);
var G__78557 = cljs.core.chunk_rest(seq__77777__$1);
var G__78558 = c__4679__auto__;
var G__78559 = cljs.core.count(c__4679__auto__);
var G__78560 = (0);
seq__77777 = G__78557;
chunk__77778 = G__78558;
count__77779 = G__78559;
i__77780 = G__78560;
continue;
} else {
var it = cljs.core.first(seq__77777__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__78562 = cljs.core.next(seq__77777__$1);
var G__78563 = null;
var G__78564 = (0);
var G__78565 = (0);
seq__77777 = G__78562;
chunk__77778 = G__78563;
count__77779 = G__78564;
i__77780 = G__78565;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k77802,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__77810 = k77802;
var G__77810__$1 = (((G__77810 instanceof cljs.core.Keyword))?G__77810.fqn:null);
switch (G__77810__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77802,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__77814){
var vec__77817 = p__77814;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77817,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77817,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77801){
var self__ = this;
var G__77801__$1 = this;
return (new cljs.core.RecordIter((0),G__77801__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77803,other77804){
var self__ = this;
var this77803__$1 = this;
return (((!((other77804 == null)))) && ((((this77803__$1.constructor === other77804.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77803__$1.x,other77804.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77803__$1.y,other77804.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77803__$1.__extmap,other77804.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k77802){
var self__ = this;
var this__4509__auto____$1 = this;
var G__77853 = k77802;
var G__77853__$1 = (((G__77853 instanceof cljs.core.Keyword))?G__77853.fqn:null);
switch (G__77853__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77802);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__77801){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__77855 = cljs.core.keyword_identical_QMARK_;
var expr__77856 = k__4511__auto__;
if(cljs.core.truth_((pred__77855.cljs$core$IFn$_invoke$arity$2 ? pred__77855.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__77856) : pred__77855.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__77856)))){
return (new shadow.dom.Coordinate(G__77801,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77855.cljs$core$IFn$_invoke$arity$2 ? pred__77855.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__77856) : pred__77855.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__77856)))){
return (new shadow.dom.Coordinate(self__.x,G__77801,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__77801),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__77801){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__77801,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__77805){
var extmap__4542__auto__ = (function (){var G__77873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77805,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__77805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77873);
} else {
return G__77873;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__77805),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__77805),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k77886,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__77901 = k77886;
var G__77901__$1 = (((G__77901 instanceof cljs.core.Keyword))?G__77901.fqn:null);
switch (G__77901__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77886,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__77905){
var vec__77907 = p__77905;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77907,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77907,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77885){
var self__ = this;
var G__77885__$1 = this;
return (new cljs.core.RecordIter((0),G__77885__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77887,other77888){
var self__ = this;
var this77887__$1 = this;
return (((!((other77888 == null)))) && ((((this77887__$1.constructor === other77888.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77887__$1.w,other77888.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77887__$1.h,other77888.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77887__$1.__extmap,other77888.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k77886){
var self__ = this;
var this__4509__auto____$1 = this;
var G__77932 = k77886;
var G__77932__$1 = (((G__77932 instanceof cljs.core.Keyword))?G__77932.fqn:null);
switch (G__77932__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77886);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__77885){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__77933 = cljs.core.keyword_identical_QMARK_;
var expr__77934 = k__4511__auto__;
if(cljs.core.truth_((pred__77933.cljs$core$IFn$_invoke$arity$2 ? pred__77933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__77934) : pred__77933.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__77934)))){
return (new shadow.dom.Size(G__77885,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77933.cljs$core$IFn$_invoke$arity$2 ? pred__77933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__77934) : pred__77933.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__77934)))){
return (new shadow.dom.Size(self__.w,G__77885,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__77885),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__77885){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__77885,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__77890){
var extmap__4542__auto__ = (function (){var G__77936 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77890,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__77890)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77936);
} else {
return G__77936;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__77890),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__77890),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__78583 = (i + (1));
var G__78584 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__78583;
ret = G__78584;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77949){
var vec__77950 = p__77949;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77950,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77950,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__77954 = arguments.length;
switch (G__77954) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__78588 = ps;
var G__78589 = (i + (1));
el__$1 = G__78588;
i = G__78589;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__77981 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77981,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77981,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77981,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__77988_78595 = cljs.core.seq(props);
var chunk__77989_78596 = null;
var count__77990_78597 = (0);
var i__77991_78598 = (0);
while(true){
if((i__77991_78598 < count__77990_78597)){
var vec__78023_78600 = chunk__77989_78596.cljs$core$IIndexed$_nth$arity$2(null,i__77991_78598);
var k_78601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78023_78600,(0),null);
var v_78602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78023_78600,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_78601);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_78601),v_78602);


var G__78603 = seq__77988_78595;
var G__78604 = chunk__77989_78596;
var G__78605 = count__77990_78597;
var G__78606 = (i__77991_78598 + (1));
seq__77988_78595 = G__78603;
chunk__77989_78596 = G__78604;
count__77990_78597 = G__78605;
i__77991_78598 = G__78606;
continue;
} else {
var temp__5753__auto___78607 = cljs.core.seq(seq__77988_78595);
if(temp__5753__auto___78607){
var seq__77988_78608__$1 = temp__5753__auto___78607;
if(cljs.core.chunked_seq_QMARK_(seq__77988_78608__$1)){
var c__4679__auto___78609 = cljs.core.chunk_first(seq__77988_78608__$1);
var G__78610 = cljs.core.chunk_rest(seq__77988_78608__$1);
var G__78611 = c__4679__auto___78609;
var G__78612 = cljs.core.count(c__4679__auto___78609);
var G__78613 = (0);
seq__77988_78595 = G__78610;
chunk__77989_78596 = G__78611;
count__77990_78597 = G__78612;
i__77991_78598 = G__78613;
continue;
} else {
var vec__78037_78614 = cljs.core.first(seq__77988_78608__$1);
var k_78615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78037_78614,(0),null);
var v_78616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78037_78614,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_78615);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_78615),v_78616);


var G__78617 = cljs.core.next(seq__77988_78608__$1);
var G__78618 = null;
var G__78619 = (0);
var G__78620 = (0);
seq__77988_78595 = G__78617;
chunk__77989_78596 = G__78618;
count__77990_78597 = G__78619;
i__77991_78598 = G__78620;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__78079 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78079,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78079,(1),null);
var seq__78082_78621 = cljs.core.seq(node_children);
var chunk__78084_78622 = null;
var count__78085_78623 = (0);
var i__78086_78624 = (0);
while(true){
if((i__78086_78624 < count__78085_78623)){
var child_struct_78625 = chunk__78084_78622.cljs$core$IIndexed$_nth$arity$2(null,i__78086_78624);
if((!((child_struct_78625 == null)))){
if(typeof child_struct_78625 === 'string'){
var text_78626 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_78626),child_struct_78625].join(''));
} else {
var children_78627 = shadow.dom.svg_node(child_struct_78625);
if(cljs.core.seq_QMARK_(children_78627)){
var seq__78139_78628 = cljs.core.seq(children_78627);
var chunk__78142_78629 = null;
var count__78143_78630 = (0);
var i__78144_78631 = (0);
while(true){
if((i__78144_78631 < count__78143_78630)){
var child_78632 = chunk__78142_78629.cljs$core$IIndexed$_nth$arity$2(null,i__78144_78631);
if(cljs.core.truth_(child_78632)){
node.appendChild(child_78632);


var G__78633 = seq__78139_78628;
var G__78634 = chunk__78142_78629;
var G__78635 = count__78143_78630;
var G__78636 = (i__78144_78631 + (1));
seq__78139_78628 = G__78633;
chunk__78142_78629 = G__78634;
count__78143_78630 = G__78635;
i__78144_78631 = G__78636;
continue;
} else {
var G__78637 = seq__78139_78628;
var G__78638 = chunk__78142_78629;
var G__78639 = count__78143_78630;
var G__78640 = (i__78144_78631 + (1));
seq__78139_78628 = G__78637;
chunk__78142_78629 = G__78638;
count__78143_78630 = G__78639;
i__78144_78631 = G__78640;
continue;
}
} else {
var temp__5753__auto___78641 = cljs.core.seq(seq__78139_78628);
if(temp__5753__auto___78641){
var seq__78139_78643__$1 = temp__5753__auto___78641;
if(cljs.core.chunked_seq_QMARK_(seq__78139_78643__$1)){
var c__4679__auto___78644 = cljs.core.chunk_first(seq__78139_78643__$1);
var G__78645 = cljs.core.chunk_rest(seq__78139_78643__$1);
var G__78646 = c__4679__auto___78644;
var G__78647 = cljs.core.count(c__4679__auto___78644);
var G__78648 = (0);
seq__78139_78628 = G__78645;
chunk__78142_78629 = G__78646;
count__78143_78630 = G__78647;
i__78144_78631 = G__78648;
continue;
} else {
var child_78649 = cljs.core.first(seq__78139_78643__$1);
if(cljs.core.truth_(child_78649)){
node.appendChild(child_78649);


var G__78650 = cljs.core.next(seq__78139_78643__$1);
var G__78651 = null;
var G__78652 = (0);
var G__78653 = (0);
seq__78139_78628 = G__78650;
chunk__78142_78629 = G__78651;
count__78143_78630 = G__78652;
i__78144_78631 = G__78653;
continue;
} else {
var G__78654 = cljs.core.next(seq__78139_78643__$1);
var G__78655 = null;
var G__78656 = (0);
var G__78657 = (0);
seq__78139_78628 = G__78654;
chunk__78142_78629 = G__78655;
count__78143_78630 = G__78656;
i__78144_78631 = G__78657;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_78627);
}
}


var G__78658 = seq__78082_78621;
var G__78659 = chunk__78084_78622;
var G__78660 = count__78085_78623;
var G__78661 = (i__78086_78624 + (1));
seq__78082_78621 = G__78658;
chunk__78084_78622 = G__78659;
count__78085_78623 = G__78660;
i__78086_78624 = G__78661;
continue;
} else {
var G__78662 = seq__78082_78621;
var G__78663 = chunk__78084_78622;
var G__78664 = count__78085_78623;
var G__78665 = (i__78086_78624 + (1));
seq__78082_78621 = G__78662;
chunk__78084_78622 = G__78663;
count__78085_78623 = G__78664;
i__78086_78624 = G__78665;
continue;
}
} else {
var temp__5753__auto___78666 = cljs.core.seq(seq__78082_78621);
if(temp__5753__auto___78666){
var seq__78082_78667__$1 = temp__5753__auto___78666;
if(cljs.core.chunked_seq_QMARK_(seq__78082_78667__$1)){
var c__4679__auto___78668 = cljs.core.chunk_first(seq__78082_78667__$1);
var G__78669 = cljs.core.chunk_rest(seq__78082_78667__$1);
var G__78670 = c__4679__auto___78668;
var G__78671 = cljs.core.count(c__4679__auto___78668);
var G__78672 = (0);
seq__78082_78621 = G__78669;
chunk__78084_78622 = G__78670;
count__78085_78623 = G__78671;
i__78086_78624 = G__78672;
continue;
} else {
var child_struct_78673 = cljs.core.first(seq__78082_78667__$1);
if((!((child_struct_78673 == null)))){
if(typeof child_struct_78673 === 'string'){
var text_78674 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_78674),child_struct_78673].join(''));
} else {
var children_78675 = shadow.dom.svg_node(child_struct_78673);
if(cljs.core.seq_QMARK_(children_78675)){
var seq__78157_78676 = cljs.core.seq(children_78675);
var chunk__78159_78677 = null;
var count__78160_78678 = (0);
var i__78161_78679 = (0);
while(true){
if((i__78161_78679 < count__78160_78678)){
var child_78680 = chunk__78159_78677.cljs$core$IIndexed$_nth$arity$2(null,i__78161_78679);
if(cljs.core.truth_(child_78680)){
node.appendChild(child_78680);


var G__78681 = seq__78157_78676;
var G__78682 = chunk__78159_78677;
var G__78683 = count__78160_78678;
var G__78684 = (i__78161_78679 + (1));
seq__78157_78676 = G__78681;
chunk__78159_78677 = G__78682;
count__78160_78678 = G__78683;
i__78161_78679 = G__78684;
continue;
} else {
var G__78685 = seq__78157_78676;
var G__78686 = chunk__78159_78677;
var G__78687 = count__78160_78678;
var G__78688 = (i__78161_78679 + (1));
seq__78157_78676 = G__78685;
chunk__78159_78677 = G__78686;
count__78160_78678 = G__78687;
i__78161_78679 = G__78688;
continue;
}
} else {
var temp__5753__auto___78689__$1 = cljs.core.seq(seq__78157_78676);
if(temp__5753__auto___78689__$1){
var seq__78157_78690__$1 = temp__5753__auto___78689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78157_78690__$1)){
var c__4679__auto___78691 = cljs.core.chunk_first(seq__78157_78690__$1);
var G__78692 = cljs.core.chunk_rest(seq__78157_78690__$1);
var G__78693 = c__4679__auto___78691;
var G__78694 = cljs.core.count(c__4679__auto___78691);
var G__78695 = (0);
seq__78157_78676 = G__78692;
chunk__78159_78677 = G__78693;
count__78160_78678 = G__78694;
i__78161_78679 = G__78695;
continue;
} else {
var child_78696 = cljs.core.first(seq__78157_78690__$1);
if(cljs.core.truth_(child_78696)){
node.appendChild(child_78696);


var G__78697 = cljs.core.next(seq__78157_78690__$1);
var G__78698 = null;
var G__78699 = (0);
var G__78700 = (0);
seq__78157_78676 = G__78697;
chunk__78159_78677 = G__78698;
count__78160_78678 = G__78699;
i__78161_78679 = G__78700;
continue;
} else {
var G__78701 = cljs.core.next(seq__78157_78690__$1);
var G__78702 = null;
var G__78703 = (0);
var G__78704 = (0);
seq__78157_78676 = G__78701;
chunk__78159_78677 = G__78702;
count__78160_78678 = G__78703;
i__78161_78679 = G__78704;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_78675);
}
}


var G__78705 = cljs.core.next(seq__78082_78667__$1);
var G__78706 = null;
var G__78707 = (0);
var G__78708 = (0);
seq__78082_78621 = G__78705;
chunk__78084_78622 = G__78706;
count__78085_78623 = G__78707;
i__78086_78624 = G__78708;
continue;
} else {
var G__78709 = cljs.core.next(seq__78082_78667__$1);
var G__78710 = null;
var G__78711 = (0);
var G__78712 = (0);
seq__78082_78621 = G__78709;
chunk__78084_78622 = G__78710;
count__78085_78623 = G__78711;
i__78086_78624 = G__78712;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78717 = arguments.length;
var i__4865__auto___78718 = (0);
while(true){
if((i__4865__auto___78718 < len__4864__auto___78717)){
args__4870__auto__.push((arguments[i__4865__auto___78718]));

var G__78719 = (i__4865__auto___78718 + (1));
i__4865__auto___78718 = G__78719;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq78180){
var G__78181 = cljs.core.first(seq78180);
var seq78180__$1 = cljs.core.next(seq78180);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78181,seq78180__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__78186 = arguments.length;
switch (G__78186) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__36136__auto___78722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_78202){
var state_val_78203 = (state_78202[(1)]);
if((state_val_78203 === (1))){
var state_78202__$1 = state_78202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78202__$1,(2),once_or_cleanup);
} else {
if((state_val_78203 === (2))){
var inst_78195 = (state_78202[(2)]);
var inst_78200 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_78202__$1 = (function (){var statearr_78204 = state_78202;
(statearr_78204[(7)] = inst_78195);

return statearr_78204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78202__$1,inst_78200);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36067__auto__ = null;
var shadow$dom$state_machine__36067__auto____0 = (function (){
var statearr_78215 = [null,null,null,null,null,null,null,null];
(statearr_78215[(0)] = shadow$dom$state_machine__36067__auto__);

(statearr_78215[(1)] = (1));

return statearr_78215;
});
var shadow$dom$state_machine__36067__auto____1 = (function (state_78202){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_78202);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e78221){var ex__36070__auto__ = e78221;
var statearr_78222_78725 = state_78202;
(statearr_78222_78725[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_78202[(4)]))){
var statearr_78223_78727 = state_78202;
(statearr_78223_78727[(1)] = cljs.core.first((state_78202[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78728 = state_78202;
state_78202 = G__78728;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
shadow$dom$state_machine__36067__auto__ = function(state_78202){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36067__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36067__auto____1.call(this,state_78202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36067__auto____0;
shadow$dom$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36067__auto____1;
return shadow$dom$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_78233 = f__36137__auto__();
(statearr_78233[(6)] = c__36136__auto___78722);

return statearr_78233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
