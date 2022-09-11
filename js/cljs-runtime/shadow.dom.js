goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37257 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37257(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37259 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37259(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35999 = coll;
var G__36000 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35999,G__36000) : shadow.dom.lazy_native_coll_seq.call(null,G__35999,G__36000));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__36014 = arguments.length;
switch (G__36014) {
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
var G__36018 = arguments.length;
switch (G__36018) {
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
var G__36024 = arguments.length;
switch (G__36024) {
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
var G__36026 = arguments.length;
switch (G__36026) {
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
var G__36032 = arguments.length;
switch (G__36032) {
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
var G__36039 = arguments.length;
switch (G__36039) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36051){if((e36051 instanceof Object)){
var e = e36051;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36051;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36059 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36060 = null;
var count__36062 = (0);
var i__36063 = (0);
while(true){
if((i__36063 < count__36062)){
var el = chunk__36060.cljs$core$IIndexed$_nth$arity$2(null,i__36063);
var handler_37270__$1 = ((function (seq__36059,chunk__36060,count__36062,i__36063,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36059,chunk__36060,count__36062,i__36063,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37270__$1);


var G__37271 = seq__36059;
var G__37272 = chunk__36060;
var G__37273 = count__36062;
var G__37274 = (i__36063 + (1));
seq__36059 = G__37271;
chunk__36060 = G__37272;
count__36062 = G__37273;
i__36063 = G__37274;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36059);
if(temp__5804__auto__){
var seq__36059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36059__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36059__$1);
var G__37275 = cljs.core.chunk_rest(seq__36059__$1);
var G__37276 = c__5568__auto__;
var G__37277 = cljs.core.count(c__5568__auto__);
var G__37278 = (0);
seq__36059 = G__37275;
chunk__36060 = G__37276;
count__36062 = G__37277;
i__36063 = G__37278;
continue;
} else {
var el = cljs.core.first(seq__36059__$1);
var handler_37279__$1 = ((function (seq__36059,chunk__36060,count__36062,i__36063,el,seq__36059__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36059,chunk__36060,count__36062,i__36063,el,seq__36059__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37279__$1);


var G__37280 = cljs.core.next(seq__36059__$1);
var G__37281 = null;
var G__37282 = (0);
var G__37283 = (0);
seq__36059 = G__37280;
chunk__36060 = G__37281;
count__36062 = G__37282;
i__36063 = G__37283;
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
var G__36070 = arguments.length;
switch (G__36070) {
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
var seq__36091 = cljs.core.seq(events);
var chunk__36092 = null;
var count__36093 = (0);
var i__36094 = (0);
while(true){
if((i__36094 < count__36093)){
var vec__36105 = chunk__36092.cljs$core$IIndexed$_nth$arity$2(null,i__36094);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36105,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37286 = seq__36091;
var G__37287 = chunk__36092;
var G__37288 = count__36093;
var G__37289 = (i__36094 + (1));
seq__36091 = G__37286;
chunk__36092 = G__37287;
count__36093 = G__37288;
i__36094 = G__37289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36091);
if(temp__5804__auto__){
var seq__36091__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36091__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36091__$1);
var G__37290 = cljs.core.chunk_rest(seq__36091__$1);
var G__37291 = c__5568__auto__;
var G__37292 = cljs.core.count(c__5568__auto__);
var G__37293 = (0);
seq__36091 = G__37290;
chunk__36092 = G__37291;
count__36093 = G__37292;
i__36094 = G__37293;
continue;
} else {
var vec__36111 = cljs.core.first(seq__36091__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36111,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37296 = cljs.core.next(seq__36091__$1);
var G__37297 = null;
var G__37298 = (0);
var G__37299 = (0);
seq__36091 = G__37296;
chunk__36092 = G__37297;
count__36093 = G__37298;
i__36094 = G__37299;
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
var seq__36118 = cljs.core.seq(styles);
var chunk__36119 = null;
var count__36120 = (0);
var i__36122 = (0);
while(true){
if((i__36122 < count__36120)){
var vec__36138 = chunk__36119.cljs$core$IIndexed$_nth$arity$2(null,i__36122);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37303 = seq__36118;
var G__37304 = chunk__36119;
var G__37305 = count__36120;
var G__37306 = (i__36122 + (1));
seq__36118 = G__37303;
chunk__36119 = G__37304;
count__36120 = G__37305;
i__36122 = G__37306;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36118);
if(temp__5804__auto__){
var seq__36118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36118__$1);
var G__37307 = cljs.core.chunk_rest(seq__36118__$1);
var G__37308 = c__5568__auto__;
var G__37309 = cljs.core.count(c__5568__auto__);
var G__37310 = (0);
seq__36118 = G__37307;
chunk__36119 = G__37308;
count__36120 = G__37309;
i__36122 = G__37310;
continue;
} else {
var vec__36147 = cljs.core.first(seq__36118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36147,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37311 = cljs.core.next(seq__36118__$1);
var G__37312 = null;
var G__37313 = (0);
var G__37314 = (0);
seq__36118 = G__37311;
chunk__36119 = G__37312;
count__36120 = G__37313;
i__36122 = G__37314;
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
var G__36160_37316 = key;
var G__36160_37317__$1 = (((G__36160_37316 instanceof cljs.core.Keyword))?G__36160_37316.fqn:null);
switch (G__36160_37317__$1) {
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
var ks_37322 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37322,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37322,"aria-");
}
})())){
el.setAttribute(ks_37322,value);
} else {
(el[ks_37322] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36216){
var map__36217 = p__36216;
var map__36217__$1 = cljs.core.__destructure_map(map__36217);
var props = map__36217__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36217__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36220 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36220,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36220,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36220,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36224 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36224,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36224;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36232 = arguments.length;
switch (G__36232) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36277){
var vec__36281 = p__36277;
var seq__36282 = cljs.core.seq(vec__36281);
var first__36283 = cljs.core.first(seq__36282);
var seq__36282__$1 = cljs.core.next(seq__36282);
var nn = first__36283;
var first__36283__$1 = cljs.core.first(seq__36282__$1);
var seq__36282__$2 = cljs.core.next(seq__36282__$1);
var np = first__36283__$1;
var nc = seq__36282__$2;
var node = vec__36281;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36310 = nn;
var G__36311 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36310,G__36311) : create_fn.call(null,G__36310,G__36311));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36314 = nn;
var G__36315 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36314,G__36315) : create_fn.call(null,G__36314,G__36315));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36329 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36329,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36329,(1),null);
var seq__36341_37331 = cljs.core.seq(node_children);
var chunk__36342_37332 = null;
var count__36343_37333 = (0);
var i__36344_37334 = (0);
while(true){
if((i__36344_37334 < count__36343_37333)){
var child_struct_37336 = chunk__36342_37332.cljs$core$IIndexed$_nth$arity$2(null,i__36344_37334);
var children_37338 = shadow.dom.dom_node(child_struct_37336);
if(cljs.core.seq_QMARK_(children_37338)){
var seq__36424_37339 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37338));
var chunk__36426_37340 = null;
var count__36427_37341 = (0);
var i__36428_37342 = (0);
while(true){
if((i__36428_37342 < count__36427_37341)){
var child_37343 = chunk__36426_37340.cljs$core$IIndexed$_nth$arity$2(null,i__36428_37342);
if(cljs.core.truth_(child_37343)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37343);


var G__37344 = seq__36424_37339;
var G__37345 = chunk__36426_37340;
var G__37346 = count__36427_37341;
var G__37347 = (i__36428_37342 + (1));
seq__36424_37339 = G__37344;
chunk__36426_37340 = G__37345;
count__36427_37341 = G__37346;
i__36428_37342 = G__37347;
continue;
} else {
var G__37348 = seq__36424_37339;
var G__37349 = chunk__36426_37340;
var G__37350 = count__36427_37341;
var G__37351 = (i__36428_37342 + (1));
seq__36424_37339 = G__37348;
chunk__36426_37340 = G__37349;
count__36427_37341 = G__37350;
i__36428_37342 = G__37351;
continue;
}
} else {
var temp__5804__auto___37352 = cljs.core.seq(seq__36424_37339);
if(temp__5804__auto___37352){
var seq__36424_37353__$1 = temp__5804__auto___37352;
if(cljs.core.chunked_seq_QMARK_(seq__36424_37353__$1)){
var c__5568__auto___37354 = cljs.core.chunk_first(seq__36424_37353__$1);
var G__37355 = cljs.core.chunk_rest(seq__36424_37353__$1);
var G__37356 = c__5568__auto___37354;
var G__37357 = cljs.core.count(c__5568__auto___37354);
var G__37358 = (0);
seq__36424_37339 = G__37355;
chunk__36426_37340 = G__37356;
count__36427_37341 = G__37357;
i__36428_37342 = G__37358;
continue;
} else {
var child_37359 = cljs.core.first(seq__36424_37353__$1);
if(cljs.core.truth_(child_37359)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37359);


var G__37360 = cljs.core.next(seq__36424_37353__$1);
var G__37361 = null;
var G__37362 = (0);
var G__37363 = (0);
seq__36424_37339 = G__37360;
chunk__36426_37340 = G__37361;
count__36427_37341 = G__37362;
i__36428_37342 = G__37363;
continue;
} else {
var G__37364 = cljs.core.next(seq__36424_37353__$1);
var G__37365 = null;
var G__37366 = (0);
var G__37367 = (0);
seq__36424_37339 = G__37364;
chunk__36426_37340 = G__37365;
count__36427_37341 = G__37366;
i__36428_37342 = G__37367;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37338);
}


var G__37368 = seq__36341_37331;
var G__37369 = chunk__36342_37332;
var G__37370 = count__36343_37333;
var G__37371 = (i__36344_37334 + (1));
seq__36341_37331 = G__37368;
chunk__36342_37332 = G__37369;
count__36343_37333 = G__37370;
i__36344_37334 = G__37371;
continue;
} else {
var temp__5804__auto___37372 = cljs.core.seq(seq__36341_37331);
if(temp__5804__auto___37372){
var seq__36341_37373__$1 = temp__5804__auto___37372;
if(cljs.core.chunked_seq_QMARK_(seq__36341_37373__$1)){
var c__5568__auto___37374 = cljs.core.chunk_first(seq__36341_37373__$1);
var G__37375 = cljs.core.chunk_rest(seq__36341_37373__$1);
var G__37376 = c__5568__auto___37374;
var G__37377 = cljs.core.count(c__5568__auto___37374);
var G__37378 = (0);
seq__36341_37331 = G__37375;
chunk__36342_37332 = G__37376;
count__36343_37333 = G__37377;
i__36344_37334 = G__37378;
continue;
} else {
var child_struct_37379 = cljs.core.first(seq__36341_37373__$1);
var children_37380 = shadow.dom.dom_node(child_struct_37379);
if(cljs.core.seq_QMARK_(children_37380)){
var seq__36448_37381 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37380));
var chunk__36450_37382 = null;
var count__36451_37383 = (0);
var i__36452_37384 = (0);
while(true){
if((i__36452_37384 < count__36451_37383)){
var child_37390 = chunk__36450_37382.cljs$core$IIndexed$_nth$arity$2(null,i__36452_37384);
if(cljs.core.truth_(child_37390)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37390);


var G__37391 = seq__36448_37381;
var G__37392 = chunk__36450_37382;
var G__37393 = count__36451_37383;
var G__37394 = (i__36452_37384 + (1));
seq__36448_37381 = G__37391;
chunk__36450_37382 = G__37392;
count__36451_37383 = G__37393;
i__36452_37384 = G__37394;
continue;
} else {
var G__37395 = seq__36448_37381;
var G__37396 = chunk__36450_37382;
var G__37397 = count__36451_37383;
var G__37398 = (i__36452_37384 + (1));
seq__36448_37381 = G__37395;
chunk__36450_37382 = G__37396;
count__36451_37383 = G__37397;
i__36452_37384 = G__37398;
continue;
}
} else {
var temp__5804__auto___37400__$1 = cljs.core.seq(seq__36448_37381);
if(temp__5804__auto___37400__$1){
var seq__36448_37401__$1 = temp__5804__auto___37400__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36448_37401__$1)){
var c__5568__auto___37402 = cljs.core.chunk_first(seq__36448_37401__$1);
var G__37403 = cljs.core.chunk_rest(seq__36448_37401__$1);
var G__37404 = c__5568__auto___37402;
var G__37405 = cljs.core.count(c__5568__auto___37402);
var G__37406 = (0);
seq__36448_37381 = G__37403;
chunk__36450_37382 = G__37404;
count__36451_37383 = G__37405;
i__36452_37384 = G__37406;
continue;
} else {
var child_37408 = cljs.core.first(seq__36448_37401__$1);
if(cljs.core.truth_(child_37408)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37408);


var G__37409 = cljs.core.next(seq__36448_37401__$1);
var G__37410 = null;
var G__37411 = (0);
var G__37412 = (0);
seq__36448_37381 = G__37409;
chunk__36450_37382 = G__37410;
count__36451_37383 = G__37411;
i__36452_37384 = G__37412;
continue;
} else {
var G__37413 = cljs.core.next(seq__36448_37401__$1);
var G__37414 = null;
var G__37415 = (0);
var G__37416 = (0);
seq__36448_37381 = G__37413;
chunk__36450_37382 = G__37414;
count__36451_37383 = G__37415;
i__36452_37384 = G__37416;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37380);
}


var G__37417 = cljs.core.next(seq__36341_37373__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__36341_37331 = G__37417;
chunk__36342_37332 = G__37418;
count__36343_37333 = G__37419;
i__36344_37334 = G__37420;
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
var seq__36513 = cljs.core.seq(node);
var chunk__36514 = null;
var count__36515 = (0);
var i__36516 = (0);
while(true){
if((i__36516 < count__36515)){
var n = chunk__36514.cljs$core$IIndexed$_nth$arity$2(null,i__36516);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37422 = seq__36513;
var G__37423 = chunk__36514;
var G__37424 = count__36515;
var G__37425 = (i__36516 + (1));
seq__36513 = G__37422;
chunk__36514 = G__37423;
count__36515 = G__37424;
i__36516 = G__37425;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36513);
if(temp__5804__auto__){
var seq__36513__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36513__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36513__$1);
var G__37426 = cljs.core.chunk_rest(seq__36513__$1);
var G__37427 = c__5568__auto__;
var G__37428 = cljs.core.count(c__5568__auto__);
var G__37429 = (0);
seq__36513 = G__37426;
chunk__36514 = G__37427;
count__36515 = G__37428;
i__36516 = G__37429;
continue;
} else {
var n = cljs.core.first(seq__36513__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37430 = cljs.core.next(seq__36513__$1);
var G__37431 = null;
var G__37432 = (0);
var G__37433 = (0);
seq__36513 = G__37430;
chunk__36514 = G__37431;
count__36515 = G__37432;
i__36516 = G__37433;
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
var G__36652 = arguments.length;
switch (G__36652) {
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
var G__36658 = arguments.length;
switch (G__36658) {
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
var G__36676 = arguments.length;
switch (G__36676) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___37439 = arguments.length;
var i__5770__auto___37440 = (0);
while(true){
if((i__5770__auto___37440 < len__5769__auto___37439)){
args__5775__auto__.push((arguments[i__5770__auto___37440]));

var G__37441 = (i__5770__auto___37440 + (1));
i__5770__auto___37440 = G__37441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36755_37442 = cljs.core.seq(nodes);
var chunk__36756_37443 = null;
var count__36757_37444 = (0);
var i__36758_37445 = (0);
while(true){
if((i__36758_37445 < count__36757_37444)){
var node_37446 = chunk__36756_37443.cljs$core$IIndexed$_nth$arity$2(null,i__36758_37445);
fragment.appendChild(shadow.dom._to_dom(node_37446));


var G__37447 = seq__36755_37442;
var G__37448 = chunk__36756_37443;
var G__37449 = count__36757_37444;
var G__37450 = (i__36758_37445 + (1));
seq__36755_37442 = G__37447;
chunk__36756_37443 = G__37448;
count__36757_37444 = G__37449;
i__36758_37445 = G__37450;
continue;
} else {
var temp__5804__auto___37451 = cljs.core.seq(seq__36755_37442);
if(temp__5804__auto___37451){
var seq__36755_37452__$1 = temp__5804__auto___37451;
if(cljs.core.chunked_seq_QMARK_(seq__36755_37452__$1)){
var c__5568__auto___37454 = cljs.core.chunk_first(seq__36755_37452__$1);
var G__37455 = cljs.core.chunk_rest(seq__36755_37452__$1);
var G__37456 = c__5568__auto___37454;
var G__37457 = cljs.core.count(c__5568__auto___37454);
var G__37458 = (0);
seq__36755_37442 = G__37455;
chunk__36756_37443 = G__37456;
count__36757_37444 = G__37457;
i__36758_37445 = G__37458;
continue;
} else {
var node_37462 = cljs.core.first(seq__36755_37452__$1);
fragment.appendChild(shadow.dom._to_dom(node_37462));


var G__37463 = cljs.core.next(seq__36755_37452__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__36755_37442 = G__37463;
chunk__36756_37443 = G__37464;
count__36757_37444 = G__37465;
i__36758_37445 = G__37466;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36734){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36734));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36788_37467 = cljs.core.seq(scripts);
var chunk__36789_37468 = null;
var count__36790_37469 = (0);
var i__36791_37470 = (0);
while(true){
if((i__36791_37470 < count__36790_37469)){
var vec__36806_37471 = chunk__36789_37468.cljs$core$IIndexed$_nth$arity$2(null,i__36791_37470);
var script_tag_37472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37471,(0),null);
var script_body_37473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37471,(1),null);
eval(script_body_37473);


var G__37474 = seq__36788_37467;
var G__37475 = chunk__36789_37468;
var G__37476 = count__36790_37469;
var G__37477 = (i__36791_37470 + (1));
seq__36788_37467 = G__37474;
chunk__36789_37468 = G__37475;
count__36790_37469 = G__37476;
i__36791_37470 = G__37477;
continue;
} else {
var temp__5804__auto___37478 = cljs.core.seq(seq__36788_37467);
if(temp__5804__auto___37478){
var seq__36788_37479__$1 = temp__5804__auto___37478;
if(cljs.core.chunked_seq_QMARK_(seq__36788_37479__$1)){
var c__5568__auto___37480 = cljs.core.chunk_first(seq__36788_37479__$1);
var G__37481 = cljs.core.chunk_rest(seq__36788_37479__$1);
var G__37482 = c__5568__auto___37480;
var G__37483 = cljs.core.count(c__5568__auto___37480);
var G__37484 = (0);
seq__36788_37467 = G__37481;
chunk__36789_37468 = G__37482;
count__36790_37469 = G__37483;
i__36791_37470 = G__37484;
continue;
} else {
var vec__36810_37485 = cljs.core.first(seq__36788_37479__$1);
var script_tag_37486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810_37485,(0),null);
var script_body_37487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810_37485,(1),null);
eval(script_body_37487);


var G__37488 = cljs.core.next(seq__36788_37479__$1);
var G__37489 = null;
var G__37490 = (0);
var G__37491 = (0);
seq__36788_37467 = G__37488;
chunk__36789_37468 = G__37489;
count__36790_37469 = G__37490;
i__36791_37470 = G__37491;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36817){
var vec__36819 = p__36817;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819,(1),null);
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
var G__36841 = arguments.length;
switch (G__36841) {
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
var seq__36865 = cljs.core.seq(style_keys);
var chunk__36866 = null;
var count__36867 = (0);
var i__36868 = (0);
while(true){
if((i__36868 < count__36867)){
var it = chunk__36866.cljs$core$IIndexed$_nth$arity$2(null,i__36868);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37494 = seq__36865;
var G__37495 = chunk__36866;
var G__37496 = count__36867;
var G__37497 = (i__36868 + (1));
seq__36865 = G__37494;
chunk__36866 = G__37495;
count__36867 = G__37496;
i__36868 = G__37497;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36865);
if(temp__5804__auto__){
var seq__36865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36865__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36865__$1);
var G__37498 = cljs.core.chunk_rest(seq__36865__$1);
var G__37499 = c__5568__auto__;
var G__37500 = cljs.core.count(c__5568__auto__);
var G__37501 = (0);
seq__36865 = G__37498;
chunk__36866 = G__37499;
count__36867 = G__37500;
i__36868 = G__37501;
continue;
} else {
var it = cljs.core.first(seq__36865__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37502 = cljs.core.next(seq__36865__$1);
var G__37503 = null;
var G__37504 = (0);
var G__37505 = (0);
seq__36865 = G__37502;
chunk__36866 = G__37503;
count__36867 = G__37504;
i__36868 = G__37505;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36876,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36895 = k36876;
var G__36895__$1 = (((G__36895 instanceof cljs.core.Keyword))?G__36895.fqn:null);
switch (G__36895__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36876,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36899){
var vec__36900 = p__36899;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36875){
var self__ = this;
var G__36875__$1 = this;
return (new cljs.core.RecordIter((0),G__36875__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36877,other36878){
var self__ = this;
var this36877__$1 = this;
return (((!((other36878 == null)))) && ((((this36877__$1.constructor === other36878.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36877__$1.x,other36878.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36877__$1.y,other36878.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36877__$1.__extmap,other36878.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36876){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36931 = k36876;
var G__36931__$1 = (((G__36931 instanceof cljs.core.Keyword))?G__36931.fqn:null);
switch (G__36931__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36876);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36875){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36934 = cljs.core.keyword_identical_QMARK_;
var expr__36935 = k__5352__auto__;
if(cljs.core.truth_((pred__36934.cljs$core$IFn$_invoke$arity$2 ? pred__36934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36935) : pred__36934.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36935)))){
return (new shadow.dom.Coordinate(G__36875,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36934.cljs$core$IFn$_invoke$arity$2 ? pred__36934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36935) : pred__36934.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36935)))){
return (new shadow.dom.Coordinate(self__.x,G__36875,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36875),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36875){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36875,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36884){
var extmap__5385__auto__ = (function (){var G__36943 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36884,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36884)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36943);
} else {
return G__36943;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36884),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36884),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36957,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36972 = k36957;
var G__36972__$1 = (((G__36972 instanceof cljs.core.Keyword))?G__36972.fqn:null);
switch (G__36972__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36957,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36979){
var vec__36981 = p__36979;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36956){
var self__ = this;
var G__36956__$1 = this;
return (new cljs.core.RecordIter((0),G__36956__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36958,other36959){
var self__ = this;
var this36958__$1 = this;
return (((!((other36959 == null)))) && ((((this36958__$1.constructor === other36959.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36958__$1.w,other36959.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36958__$1.h,other36959.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36958__$1.__extmap,other36959.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36957){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37006 = k36957;
var G__37006__$1 = (((G__37006 instanceof cljs.core.Keyword))?G__37006.fqn:null);
switch (G__37006__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36957);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36956){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37009 = cljs.core.keyword_identical_QMARK_;
var expr__37010 = k__5352__auto__;
if(cljs.core.truth_((pred__37009.cljs$core$IFn$_invoke$arity$2 ? pred__37009.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37010) : pred__37009.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37010)))){
return (new shadow.dom.Size(G__36956,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37009.cljs$core$IFn$_invoke$arity$2 ? pred__37009.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37010) : pred__37009.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37010)))){
return (new shadow.dom.Size(self__.w,G__36956,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36956),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36956){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36956,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36963){
var extmap__5385__auto__ = (function (){var G__37027 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36963,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36963)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37027);
} else {
return G__37027;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36963),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36963),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37532 = (i + (1));
var G__37533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37532;
ret = G__37533;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37058){
var vec__37061 = p__37058;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37061,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37075 = arguments.length;
switch (G__37075) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__37542 = ps;
var G__37543 = (i + (1));
el__$1 = G__37542;
i = G__37543;
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
var vec__37152 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37158_37549 = cljs.core.seq(props);
var chunk__37159_37550 = null;
var count__37160_37551 = (0);
var i__37161_37552 = (0);
while(true){
if((i__37161_37552 < count__37160_37551)){
var vec__37188_37553 = chunk__37159_37550.cljs$core$IIndexed$_nth$arity$2(null,i__37161_37552);
var k_37554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188_37553,(0),null);
var v_37555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188_37553,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37554);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37554),v_37555);


var G__37556 = seq__37158_37549;
var G__37557 = chunk__37159_37550;
var G__37558 = count__37160_37551;
var G__37559 = (i__37161_37552 + (1));
seq__37158_37549 = G__37556;
chunk__37159_37550 = G__37557;
count__37160_37551 = G__37558;
i__37161_37552 = G__37559;
continue;
} else {
var temp__5804__auto___37560 = cljs.core.seq(seq__37158_37549);
if(temp__5804__auto___37560){
var seq__37158_37561__$1 = temp__5804__auto___37560;
if(cljs.core.chunked_seq_QMARK_(seq__37158_37561__$1)){
var c__5568__auto___37562 = cljs.core.chunk_first(seq__37158_37561__$1);
var G__37563 = cljs.core.chunk_rest(seq__37158_37561__$1);
var G__37564 = c__5568__auto___37562;
var G__37565 = cljs.core.count(c__5568__auto___37562);
var G__37566 = (0);
seq__37158_37549 = G__37563;
chunk__37159_37550 = G__37564;
count__37160_37551 = G__37565;
i__37161_37552 = G__37566;
continue;
} else {
var vec__37196_37567 = cljs.core.first(seq__37158_37561__$1);
var k_37568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37196_37567,(0),null);
var v_37569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37196_37567,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37568);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37568),v_37569);


var G__37570 = cljs.core.next(seq__37158_37561__$1);
var G__37571 = null;
var G__37572 = (0);
var G__37573 = (0);
seq__37158_37549 = G__37570;
chunk__37159_37550 = G__37571;
count__37160_37551 = G__37572;
i__37161_37552 = G__37573;
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
var vec__37200 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37200,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37200,(1),null);
var seq__37203_37576 = cljs.core.seq(node_children);
var chunk__37205_37577 = null;
var count__37206_37578 = (0);
var i__37207_37579 = (0);
while(true){
if((i__37207_37579 < count__37206_37578)){
var child_struct_37580 = chunk__37205_37577.cljs$core$IIndexed$_nth$arity$2(null,i__37207_37579);
if((!((child_struct_37580 == null)))){
if(typeof child_struct_37580 === 'string'){
var text_37582 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37582),child_struct_37580].join(''));
} else {
var children_37584 = shadow.dom.svg_node(child_struct_37580);
if(cljs.core.seq_QMARK_(children_37584)){
var seq__37224_37585 = cljs.core.seq(children_37584);
var chunk__37226_37586 = null;
var count__37227_37587 = (0);
var i__37228_37588 = (0);
while(true){
if((i__37228_37588 < count__37227_37587)){
var child_37589 = chunk__37226_37586.cljs$core$IIndexed$_nth$arity$2(null,i__37228_37588);
if(cljs.core.truth_(child_37589)){
node.appendChild(child_37589);


var G__37590 = seq__37224_37585;
var G__37591 = chunk__37226_37586;
var G__37592 = count__37227_37587;
var G__37593 = (i__37228_37588 + (1));
seq__37224_37585 = G__37590;
chunk__37226_37586 = G__37591;
count__37227_37587 = G__37592;
i__37228_37588 = G__37593;
continue;
} else {
var G__37594 = seq__37224_37585;
var G__37595 = chunk__37226_37586;
var G__37596 = count__37227_37587;
var G__37597 = (i__37228_37588 + (1));
seq__37224_37585 = G__37594;
chunk__37226_37586 = G__37595;
count__37227_37587 = G__37596;
i__37228_37588 = G__37597;
continue;
}
} else {
var temp__5804__auto___37598 = cljs.core.seq(seq__37224_37585);
if(temp__5804__auto___37598){
var seq__37224_37599__$1 = temp__5804__auto___37598;
if(cljs.core.chunked_seq_QMARK_(seq__37224_37599__$1)){
var c__5568__auto___37605 = cljs.core.chunk_first(seq__37224_37599__$1);
var G__37606 = cljs.core.chunk_rest(seq__37224_37599__$1);
var G__37607 = c__5568__auto___37605;
var G__37608 = cljs.core.count(c__5568__auto___37605);
var G__37609 = (0);
seq__37224_37585 = G__37606;
chunk__37226_37586 = G__37607;
count__37227_37587 = G__37608;
i__37228_37588 = G__37609;
continue;
} else {
var child_37610 = cljs.core.first(seq__37224_37599__$1);
if(cljs.core.truth_(child_37610)){
node.appendChild(child_37610);


var G__37611 = cljs.core.next(seq__37224_37599__$1);
var G__37612 = null;
var G__37613 = (0);
var G__37614 = (0);
seq__37224_37585 = G__37611;
chunk__37226_37586 = G__37612;
count__37227_37587 = G__37613;
i__37228_37588 = G__37614;
continue;
} else {
var G__37616 = cljs.core.next(seq__37224_37599__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37224_37585 = G__37616;
chunk__37226_37586 = G__37617;
count__37227_37587 = G__37618;
i__37228_37588 = G__37619;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37584);
}
}


var G__37620 = seq__37203_37576;
var G__37621 = chunk__37205_37577;
var G__37622 = count__37206_37578;
var G__37623 = (i__37207_37579 + (1));
seq__37203_37576 = G__37620;
chunk__37205_37577 = G__37621;
count__37206_37578 = G__37622;
i__37207_37579 = G__37623;
continue;
} else {
var G__37624 = seq__37203_37576;
var G__37625 = chunk__37205_37577;
var G__37626 = count__37206_37578;
var G__37627 = (i__37207_37579 + (1));
seq__37203_37576 = G__37624;
chunk__37205_37577 = G__37625;
count__37206_37578 = G__37626;
i__37207_37579 = G__37627;
continue;
}
} else {
var temp__5804__auto___37628 = cljs.core.seq(seq__37203_37576);
if(temp__5804__auto___37628){
var seq__37203_37629__$1 = temp__5804__auto___37628;
if(cljs.core.chunked_seq_QMARK_(seq__37203_37629__$1)){
var c__5568__auto___37630 = cljs.core.chunk_first(seq__37203_37629__$1);
var G__37631 = cljs.core.chunk_rest(seq__37203_37629__$1);
var G__37632 = c__5568__auto___37630;
var G__37633 = cljs.core.count(c__5568__auto___37630);
var G__37634 = (0);
seq__37203_37576 = G__37631;
chunk__37205_37577 = G__37632;
count__37206_37578 = G__37633;
i__37207_37579 = G__37634;
continue;
} else {
var child_struct_37635 = cljs.core.first(seq__37203_37629__$1);
if((!((child_struct_37635 == null)))){
if(typeof child_struct_37635 === 'string'){
var text_37636 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37636),child_struct_37635].join(''));
} else {
var children_37637 = shadow.dom.svg_node(child_struct_37635);
if(cljs.core.seq_QMARK_(children_37637)){
var seq__37230_37638 = cljs.core.seq(children_37637);
var chunk__37232_37639 = null;
var count__37233_37640 = (0);
var i__37234_37641 = (0);
while(true){
if((i__37234_37641 < count__37233_37640)){
var child_37642 = chunk__37232_37639.cljs$core$IIndexed$_nth$arity$2(null,i__37234_37641);
if(cljs.core.truth_(child_37642)){
node.appendChild(child_37642);


var G__37643 = seq__37230_37638;
var G__37644 = chunk__37232_37639;
var G__37645 = count__37233_37640;
var G__37646 = (i__37234_37641 + (1));
seq__37230_37638 = G__37643;
chunk__37232_37639 = G__37644;
count__37233_37640 = G__37645;
i__37234_37641 = G__37646;
continue;
} else {
var G__37647 = seq__37230_37638;
var G__37648 = chunk__37232_37639;
var G__37649 = count__37233_37640;
var G__37650 = (i__37234_37641 + (1));
seq__37230_37638 = G__37647;
chunk__37232_37639 = G__37648;
count__37233_37640 = G__37649;
i__37234_37641 = G__37650;
continue;
}
} else {
var temp__5804__auto___37651__$1 = cljs.core.seq(seq__37230_37638);
if(temp__5804__auto___37651__$1){
var seq__37230_37652__$1 = temp__5804__auto___37651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37230_37652__$1)){
var c__5568__auto___37653 = cljs.core.chunk_first(seq__37230_37652__$1);
var G__37654 = cljs.core.chunk_rest(seq__37230_37652__$1);
var G__37655 = c__5568__auto___37653;
var G__37656 = cljs.core.count(c__5568__auto___37653);
var G__37657 = (0);
seq__37230_37638 = G__37654;
chunk__37232_37639 = G__37655;
count__37233_37640 = G__37656;
i__37234_37641 = G__37657;
continue;
} else {
var child_37658 = cljs.core.first(seq__37230_37652__$1);
if(cljs.core.truth_(child_37658)){
node.appendChild(child_37658);


var G__37659 = cljs.core.next(seq__37230_37652__$1);
var G__37660 = null;
var G__37661 = (0);
var G__37662 = (0);
seq__37230_37638 = G__37659;
chunk__37232_37639 = G__37660;
count__37233_37640 = G__37661;
i__37234_37641 = G__37662;
continue;
} else {
var G__37663 = cljs.core.next(seq__37230_37652__$1);
var G__37664 = null;
var G__37665 = (0);
var G__37666 = (0);
seq__37230_37638 = G__37663;
chunk__37232_37639 = G__37664;
count__37233_37640 = G__37665;
i__37234_37641 = G__37666;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37637);
}
}


var G__37667 = cljs.core.next(seq__37203_37629__$1);
var G__37668 = null;
var G__37669 = (0);
var G__37670 = (0);
seq__37203_37576 = G__37667;
chunk__37205_37577 = G__37668;
count__37206_37578 = G__37669;
i__37207_37579 = G__37670;
continue;
} else {
var G__37671 = cljs.core.next(seq__37203_37629__$1);
var G__37672 = null;
var G__37673 = (0);
var G__37674 = (0);
seq__37203_37576 = G__37671;
chunk__37205_37577 = G__37672;
count__37206_37578 = G__37673;
i__37207_37579 = G__37674;
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
var args__5775__auto__ = [];
var len__5769__auto___37680 = arguments.length;
var i__5770__auto___37681 = (0);
while(true){
if((i__5770__auto___37681 < len__5769__auto___37680)){
args__5775__auto__.push((arguments[i__5770__auto___37681]));

var G__37682 = (i__5770__auto___37681 + (1));
i__5770__auto___37681 = G__37682;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37236){
var G__37237 = cljs.core.first(seq37236);
var seq37236__$1 = cljs.core.next(seq37236);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37237,seq37236__$1);
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
var G__37239 = arguments.length;
switch (G__37239) {
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

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33480__auto___37691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33481__auto__ = (function (){var switch__33291__auto__ = (function (state_37244){
var state_val_37245 = (state_37244[(1)]);
if((state_val_37245 === (1))){
var state_37244__$1 = state_37244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37244__$1,(2),once_or_cleanup);
} else {
if((state_val_37245 === (2))){
var inst_37241 = (state_37244[(2)]);
var inst_37242 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37244__$1 = (function (){var statearr_37246 = state_37244;
(statearr_37246[(7)] = inst_37241);

return statearr_37246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37244__$1,inst_37242);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33292__auto__ = null;
var shadow$dom$state_machine__33292__auto____0 = (function (){
var statearr_37247 = [null,null,null,null,null,null,null,null];
(statearr_37247[(0)] = shadow$dom$state_machine__33292__auto__);

(statearr_37247[(1)] = (1));

return statearr_37247;
});
var shadow$dom$state_machine__33292__auto____1 = (function (state_37244){
while(true){
var ret_value__33293__auto__ = (function (){try{while(true){
var result__33294__auto__ = switch__33291__auto__(state_37244);
if(cljs.core.keyword_identical_QMARK_(result__33294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33294__auto__;
}
break;
}
}catch (e37248){var ex__33295__auto__ = e37248;
var statearr_37249_37694 = state_37244;
(statearr_37249_37694[(2)] = ex__33295__auto__);


if(cljs.core.seq((state_37244[(4)]))){
var statearr_37250_37695 = state_37244;
(statearr_37250_37695[(1)] = cljs.core.first((state_37244[(4)])));

} else {
throw ex__33295__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37699 = state_37244;
state_37244 = G__37699;
continue;
} else {
return ret_value__33293__auto__;
}
break;
}
});
shadow$dom$state_machine__33292__auto__ = function(state_37244){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33292__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33292__auto____1.call(this,state_37244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33292__auto____0;
shadow$dom$state_machine__33292__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33292__auto____1;
return shadow$dom$state_machine__33292__auto__;
})()
})();
var state__33482__auto__ = (function (){var statearr_37251 = f__33481__auto__();
(statearr_37251[(6)] = c__33480__auto___37691);

return statearr_37251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33482__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
