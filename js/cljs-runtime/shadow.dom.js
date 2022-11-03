goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37258 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_37258(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37263 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_37263(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36052 = coll;
var G__36053 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36052,G__36053) : shadow.dom.lazy_native_coll_seq.call(null,G__36052,G__36053));
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
var G__36083 = arguments.length;
switch (G__36083) {
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
var G__36096 = arguments.length;
switch (G__36096) {
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
var G__36104 = arguments.length;
switch (G__36104) {
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
var G__36112 = arguments.length;
switch (G__36112) {
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
var G__36128 = arguments.length;
switch (G__36128) {
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
var G__36141 = arguments.length;
switch (G__36141) {
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
}catch (e36154){if((e36154 instanceof Object)){
var e = e36154;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36154;

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
var seq__36177 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36178 = null;
var count__36179 = (0);
var i__36180 = (0);
while(true){
if((i__36180 < count__36179)){
var el = chunk__36178.cljs$core$IIndexed$_nth$arity$2(null,i__36180);
var handler_37287__$1 = ((function (seq__36177,chunk__36178,count__36179,i__36180,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36177,chunk__36178,count__36179,i__36180,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37287__$1);


var G__37289 = seq__36177;
var G__37290 = chunk__36178;
var G__37291 = count__36179;
var G__37292 = (i__36180 + (1));
seq__36177 = G__37289;
chunk__36178 = G__37290;
count__36179 = G__37291;
i__36180 = G__37292;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36177);
if(temp__5804__auto__){
var seq__36177__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36177__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36177__$1);
var G__37294 = cljs.core.chunk_rest(seq__36177__$1);
var G__37295 = c__5568__auto__;
var G__37296 = cljs.core.count(c__5568__auto__);
var G__37297 = (0);
seq__36177 = G__37294;
chunk__36178 = G__37295;
count__36179 = G__37296;
i__36180 = G__37297;
continue;
} else {
var el = cljs.core.first(seq__36177__$1);
var handler_37298__$1 = ((function (seq__36177,chunk__36178,count__36179,i__36180,el,seq__36177__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36177,chunk__36178,count__36179,i__36180,el,seq__36177__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37298__$1);


var G__37299 = cljs.core.next(seq__36177__$1);
var G__37300 = null;
var G__37301 = (0);
var G__37302 = (0);
seq__36177 = G__37299;
chunk__36178 = G__37300;
count__36179 = G__37301;
i__36180 = G__37302;
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
var G__36210 = arguments.length;
switch (G__36210) {
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
var seq__36218 = cljs.core.seq(events);
var chunk__36219 = null;
var count__36220 = (0);
var i__36221 = (0);
while(true){
if((i__36221 < count__36220)){
var vec__36236 = chunk__36219.cljs$core$IIndexed$_nth$arity$2(null,i__36221);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36236,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37310 = seq__36218;
var G__37311 = chunk__36219;
var G__37312 = count__36220;
var G__37313 = (i__36221 + (1));
seq__36218 = G__37310;
chunk__36219 = G__37311;
count__36220 = G__37312;
i__36221 = G__37313;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36218);
if(temp__5804__auto__){
var seq__36218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36218__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36218__$1);
var G__37314 = cljs.core.chunk_rest(seq__36218__$1);
var G__37315 = c__5568__auto__;
var G__37316 = cljs.core.count(c__5568__auto__);
var G__37317 = (0);
seq__36218 = G__37314;
chunk__36219 = G__37315;
count__36220 = G__37316;
i__36221 = G__37317;
continue;
} else {
var vec__36244 = cljs.core.first(seq__36218__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37318 = cljs.core.next(seq__36218__$1);
var G__37319 = null;
var G__37320 = (0);
var G__37321 = (0);
seq__36218 = G__37318;
chunk__36219 = G__37319;
count__36220 = G__37320;
i__36221 = G__37321;
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
var seq__36250 = cljs.core.seq(styles);
var chunk__36251 = null;
var count__36252 = (0);
var i__36253 = (0);
while(true){
if((i__36253 < count__36252)){
var vec__36294 = chunk__36251.cljs$core$IIndexed$_nth$arity$2(null,i__36253);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36294,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37323 = seq__36250;
var G__37324 = chunk__36251;
var G__37325 = count__36252;
var G__37326 = (i__36253 + (1));
seq__36250 = G__37323;
chunk__36251 = G__37324;
count__36252 = G__37325;
i__36253 = G__37326;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36250);
if(temp__5804__auto__){
var seq__36250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36250__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36250__$1);
var G__37327 = cljs.core.chunk_rest(seq__36250__$1);
var G__37328 = c__5568__auto__;
var G__37329 = cljs.core.count(c__5568__auto__);
var G__37330 = (0);
seq__36250 = G__37327;
chunk__36251 = G__37328;
count__36252 = G__37329;
i__36253 = G__37330;
continue;
} else {
var vec__36307 = cljs.core.first(seq__36250__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37331 = cljs.core.next(seq__36250__$1);
var G__37332 = null;
var G__37333 = (0);
var G__37334 = (0);
seq__36250 = G__37331;
chunk__36251 = G__37332;
count__36252 = G__37333;
i__36253 = G__37334;
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
var G__36350_37336 = key;
var G__36350_37337__$1 = (((G__36350_37336 instanceof cljs.core.Keyword))?G__36350_37336.fqn:null);
switch (G__36350_37337__$1) {
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
var ks_37343 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37343,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37343,"aria-");
}
})())){
el.setAttribute(ks_37343,value);
} else {
(el[ks_37343] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36411){
var map__36416 = p__36411;
var map__36416__$1 = cljs.core.__destructure_map(map__36416);
var props = map__36416__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36416__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36422 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36428 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36428,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36428;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36438 = arguments.length;
switch (G__36438) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36471){
var vec__36472 = p__36471;
var seq__36473 = cljs.core.seq(vec__36472);
var first__36474 = cljs.core.first(seq__36473);
var seq__36473__$1 = cljs.core.next(seq__36473);
var nn = first__36474;
var first__36474__$1 = cljs.core.first(seq__36473__$1);
var seq__36473__$2 = cljs.core.next(seq__36473__$1);
var np = first__36474__$1;
var nc = seq__36473__$2;
var node = vec__36472;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36480 = nn;
var G__36481 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36480,G__36481) : create_fn.call(null,G__36480,G__36481));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36483 = nn;
var G__36484 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36483,G__36484) : create_fn.call(null,G__36483,G__36484));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36487 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36487,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36487,(1),null);
var seq__36490_37349 = cljs.core.seq(node_children);
var chunk__36491_37350 = null;
var count__36492_37351 = (0);
var i__36493_37352 = (0);
while(true){
if((i__36493_37352 < count__36492_37351)){
var child_struct_37353 = chunk__36491_37350.cljs$core$IIndexed$_nth$arity$2(null,i__36493_37352);
var children_37354 = shadow.dom.dom_node(child_struct_37353);
if(cljs.core.seq_QMARK_(children_37354)){
var seq__36620_37355 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37354));
var chunk__36622_37356 = null;
var count__36623_37357 = (0);
var i__36624_37358 = (0);
while(true){
if((i__36624_37358 < count__36623_37357)){
var child_37359 = chunk__36622_37356.cljs$core$IIndexed$_nth$arity$2(null,i__36624_37358);
if(cljs.core.truth_(child_37359)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37359);


var G__37361 = seq__36620_37355;
var G__37362 = chunk__36622_37356;
var G__37363 = count__36623_37357;
var G__37364 = (i__36624_37358 + (1));
seq__36620_37355 = G__37361;
chunk__36622_37356 = G__37362;
count__36623_37357 = G__37363;
i__36624_37358 = G__37364;
continue;
} else {
var G__37365 = seq__36620_37355;
var G__37366 = chunk__36622_37356;
var G__37367 = count__36623_37357;
var G__37368 = (i__36624_37358 + (1));
seq__36620_37355 = G__37365;
chunk__36622_37356 = G__37366;
count__36623_37357 = G__37367;
i__36624_37358 = G__37368;
continue;
}
} else {
var temp__5804__auto___37369 = cljs.core.seq(seq__36620_37355);
if(temp__5804__auto___37369){
var seq__36620_37370__$1 = temp__5804__auto___37369;
if(cljs.core.chunked_seq_QMARK_(seq__36620_37370__$1)){
var c__5568__auto___37371 = cljs.core.chunk_first(seq__36620_37370__$1);
var G__37373 = cljs.core.chunk_rest(seq__36620_37370__$1);
var G__37374 = c__5568__auto___37371;
var G__37375 = cljs.core.count(c__5568__auto___37371);
var G__37376 = (0);
seq__36620_37355 = G__37373;
chunk__36622_37356 = G__37374;
count__36623_37357 = G__37375;
i__36624_37358 = G__37376;
continue;
} else {
var child_37377 = cljs.core.first(seq__36620_37370__$1);
if(cljs.core.truth_(child_37377)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37377);


var G__37378 = cljs.core.next(seq__36620_37370__$1);
var G__37379 = null;
var G__37380 = (0);
var G__37381 = (0);
seq__36620_37355 = G__37378;
chunk__36622_37356 = G__37379;
count__36623_37357 = G__37380;
i__36624_37358 = G__37381;
continue;
} else {
var G__37383 = cljs.core.next(seq__36620_37370__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__36620_37355 = G__37383;
chunk__36622_37356 = G__37384;
count__36623_37357 = G__37385;
i__36624_37358 = G__37386;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37354);
}


var G__37387 = seq__36490_37349;
var G__37388 = chunk__36491_37350;
var G__37389 = count__36492_37351;
var G__37390 = (i__36493_37352 + (1));
seq__36490_37349 = G__37387;
chunk__36491_37350 = G__37388;
count__36492_37351 = G__37389;
i__36493_37352 = G__37390;
continue;
} else {
var temp__5804__auto___37392 = cljs.core.seq(seq__36490_37349);
if(temp__5804__auto___37392){
var seq__36490_37393__$1 = temp__5804__auto___37392;
if(cljs.core.chunked_seq_QMARK_(seq__36490_37393__$1)){
var c__5568__auto___37394 = cljs.core.chunk_first(seq__36490_37393__$1);
var G__37395 = cljs.core.chunk_rest(seq__36490_37393__$1);
var G__37396 = c__5568__auto___37394;
var G__37397 = cljs.core.count(c__5568__auto___37394);
var G__37398 = (0);
seq__36490_37349 = G__37395;
chunk__36491_37350 = G__37396;
count__36492_37351 = G__37397;
i__36493_37352 = G__37398;
continue;
} else {
var child_struct_37399 = cljs.core.first(seq__36490_37393__$1);
var children_37400 = shadow.dom.dom_node(child_struct_37399);
if(cljs.core.seq_QMARK_(children_37400)){
var seq__36638_37401 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37400));
var chunk__36640_37402 = null;
var count__36641_37403 = (0);
var i__36642_37404 = (0);
while(true){
if((i__36642_37404 < count__36641_37403)){
var child_37405 = chunk__36640_37402.cljs$core$IIndexed$_nth$arity$2(null,i__36642_37404);
if(cljs.core.truth_(child_37405)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37405);


var G__37406 = seq__36638_37401;
var G__37407 = chunk__36640_37402;
var G__37408 = count__36641_37403;
var G__37409 = (i__36642_37404 + (1));
seq__36638_37401 = G__37406;
chunk__36640_37402 = G__37407;
count__36641_37403 = G__37408;
i__36642_37404 = G__37409;
continue;
} else {
var G__37410 = seq__36638_37401;
var G__37411 = chunk__36640_37402;
var G__37412 = count__36641_37403;
var G__37413 = (i__36642_37404 + (1));
seq__36638_37401 = G__37410;
chunk__36640_37402 = G__37411;
count__36641_37403 = G__37412;
i__36642_37404 = G__37413;
continue;
}
} else {
var temp__5804__auto___37414__$1 = cljs.core.seq(seq__36638_37401);
if(temp__5804__auto___37414__$1){
var seq__36638_37415__$1 = temp__5804__auto___37414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36638_37415__$1)){
var c__5568__auto___37416 = cljs.core.chunk_first(seq__36638_37415__$1);
var G__37417 = cljs.core.chunk_rest(seq__36638_37415__$1);
var G__37418 = c__5568__auto___37416;
var G__37419 = cljs.core.count(c__5568__auto___37416);
var G__37420 = (0);
seq__36638_37401 = G__37417;
chunk__36640_37402 = G__37418;
count__36641_37403 = G__37419;
i__36642_37404 = G__37420;
continue;
} else {
var child_37422 = cljs.core.first(seq__36638_37415__$1);
if(cljs.core.truth_(child_37422)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37422);


var G__37423 = cljs.core.next(seq__36638_37415__$1);
var G__37424 = null;
var G__37425 = (0);
var G__37426 = (0);
seq__36638_37401 = G__37423;
chunk__36640_37402 = G__37424;
count__36641_37403 = G__37425;
i__36642_37404 = G__37426;
continue;
} else {
var G__37427 = cljs.core.next(seq__36638_37415__$1);
var G__37428 = null;
var G__37429 = (0);
var G__37430 = (0);
seq__36638_37401 = G__37427;
chunk__36640_37402 = G__37428;
count__36641_37403 = G__37429;
i__36642_37404 = G__37430;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37400);
}


var G__37431 = cljs.core.next(seq__36490_37393__$1);
var G__37432 = null;
var G__37433 = (0);
var G__37434 = (0);
seq__36490_37349 = G__37431;
chunk__36491_37350 = G__37432;
count__36492_37351 = G__37433;
i__36493_37352 = G__37434;
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
var seq__36672 = cljs.core.seq(node);
var chunk__36673 = null;
var count__36674 = (0);
var i__36675 = (0);
while(true){
if((i__36675 < count__36674)){
var n = chunk__36673.cljs$core$IIndexed$_nth$arity$2(null,i__36675);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37438 = seq__36672;
var G__37439 = chunk__36673;
var G__37440 = count__36674;
var G__37441 = (i__36675 + (1));
seq__36672 = G__37438;
chunk__36673 = G__37439;
count__36674 = G__37440;
i__36675 = G__37441;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36672);
if(temp__5804__auto__){
var seq__36672__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36672__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36672__$1);
var G__37443 = cljs.core.chunk_rest(seq__36672__$1);
var G__37444 = c__5568__auto__;
var G__37445 = cljs.core.count(c__5568__auto__);
var G__37446 = (0);
seq__36672 = G__37443;
chunk__36673 = G__37444;
count__36674 = G__37445;
i__36675 = G__37446;
continue;
} else {
var n = cljs.core.first(seq__36672__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37447 = cljs.core.next(seq__36672__$1);
var G__37448 = null;
var G__37449 = (0);
var G__37450 = (0);
seq__36672 = G__37447;
chunk__36673 = G__37448;
count__36674 = G__37449;
i__36675 = G__37450;
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
var G__36693 = arguments.length;
switch (G__36693) {
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
var G__36708 = arguments.length;
switch (G__36708) {
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
var G__36739 = arguments.length;
switch (G__36739) {
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
var len__5769__auto___37461 = arguments.length;
var i__5770__auto___37462 = (0);
while(true){
if((i__5770__auto___37462 < len__5769__auto___37461)){
args__5775__auto__.push((arguments[i__5770__auto___37462]));

var G__37465 = (i__5770__auto___37462 + (1));
i__5770__auto___37462 = G__37465;
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
var seq__36761_37466 = cljs.core.seq(nodes);
var chunk__36762_37467 = null;
var count__36763_37468 = (0);
var i__36764_37469 = (0);
while(true){
if((i__36764_37469 < count__36763_37468)){
var node_37470 = chunk__36762_37467.cljs$core$IIndexed$_nth$arity$2(null,i__36764_37469);
fragment.appendChild(shadow.dom._to_dom(node_37470));


var G__37471 = seq__36761_37466;
var G__37472 = chunk__36762_37467;
var G__37473 = count__36763_37468;
var G__37474 = (i__36764_37469 + (1));
seq__36761_37466 = G__37471;
chunk__36762_37467 = G__37472;
count__36763_37468 = G__37473;
i__36764_37469 = G__37474;
continue;
} else {
var temp__5804__auto___37475 = cljs.core.seq(seq__36761_37466);
if(temp__5804__auto___37475){
var seq__36761_37476__$1 = temp__5804__auto___37475;
if(cljs.core.chunked_seq_QMARK_(seq__36761_37476__$1)){
var c__5568__auto___37477 = cljs.core.chunk_first(seq__36761_37476__$1);
var G__37479 = cljs.core.chunk_rest(seq__36761_37476__$1);
var G__37480 = c__5568__auto___37477;
var G__37481 = cljs.core.count(c__5568__auto___37477);
var G__37482 = (0);
seq__36761_37466 = G__37479;
chunk__36762_37467 = G__37480;
count__36763_37468 = G__37481;
i__36764_37469 = G__37482;
continue;
} else {
var node_37484 = cljs.core.first(seq__36761_37476__$1);
fragment.appendChild(shadow.dom._to_dom(node_37484));


var G__37485 = cljs.core.next(seq__36761_37476__$1);
var G__37486 = null;
var G__37487 = (0);
var G__37488 = (0);
seq__36761_37466 = G__37485;
chunk__36762_37467 = G__37486;
count__36763_37468 = G__37487;
i__36764_37469 = G__37488;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36757){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36757));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36778_37489 = cljs.core.seq(scripts);
var chunk__36779_37490 = null;
var count__36780_37491 = (0);
var i__36781_37492 = (0);
while(true){
if((i__36781_37492 < count__36780_37491)){
var vec__36806_37493 = chunk__36779_37490.cljs$core$IIndexed$_nth$arity$2(null,i__36781_37492);
var script_tag_37494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37493,(0),null);
var script_body_37495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37493,(1),null);
eval(script_body_37495);


var G__37496 = seq__36778_37489;
var G__37497 = chunk__36779_37490;
var G__37498 = count__36780_37491;
var G__37499 = (i__36781_37492 + (1));
seq__36778_37489 = G__37496;
chunk__36779_37490 = G__37497;
count__36780_37491 = G__37498;
i__36781_37492 = G__37499;
continue;
} else {
var temp__5804__auto___37501 = cljs.core.seq(seq__36778_37489);
if(temp__5804__auto___37501){
var seq__36778_37503__$1 = temp__5804__auto___37501;
if(cljs.core.chunked_seq_QMARK_(seq__36778_37503__$1)){
var c__5568__auto___37505 = cljs.core.chunk_first(seq__36778_37503__$1);
var G__37506 = cljs.core.chunk_rest(seq__36778_37503__$1);
var G__37507 = c__5568__auto___37505;
var G__37508 = cljs.core.count(c__5568__auto___37505);
var G__37509 = (0);
seq__36778_37489 = G__37506;
chunk__36779_37490 = G__37507;
count__36780_37491 = G__37508;
i__36781_37492 = G__37509;
continue;
} else {
var vec__36812_37510 = cljs.core.first(seq__36778_37503__$1);
var script_tag_37511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37510,(0),null);
var script_body_37512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37510,(1),null);
eval(script_body_37512);


var G__37514 = cljs.core.next(seq__36778_37503__$1);
var G__37515 = null;
var G__37516 = (0);
var G__37517 = (0);
seq__36778_37489 = G__37514;
chunk__36779_37490 = G__37515;
count__36780_37491 = G__37516;
i__36781_37492 = G__37517;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36819){
var vec__36820 = p__36819;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(1),null);
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
var G__36839 = arguments.length;
switch (G__36839) {
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
var seq__36868 = cljs.core.seq(style_keys);
var chunk__36869 = null;
var count__36870 = (0);
var i__36871 = (0);
while(true){
if((i__36871 < count__36870)){
var it = chunk__36869.cljs$core$IIndexed$_nth$arity$2(null,i__36871);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37527 = seq__36868;
var G__37528 = chunk__36869;
var G__37529 = count__36870;
var G__37530 = (i__36871 + (1));
seq__36868 = G__37527;
chunk__36869 = G__37528;
count__36870 = G__37529;
i__36871 = G__37530;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36868);
if(temp__5804__auto__){
var seq__36868__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36868__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36868__$1);
var G__37531 = cljs.core.chunk_rest(seq__36868__$1);
var G__37532 = c__5568__auto__;
var G__37533 = cljs.core.count(c__5568__auto__);
var G__37534 = (0);
seq__36868 = G__37531;
chunk__36869 = G__37532;
count__36870 = G__37533;
i__36871 = G__37534;
continue;
} else {
var it = cljs.core.first(seq__36868__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37535 = cljs.core.next(seq__36868__$1);
var G__37536 = null;
var G__37537 = (0);
var G__37538 = (0);
seq__36868 = G__37535;
chunk__36869 = G__37536;
count__36870 = G__37537;
i__36871 = G__37538;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36894,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36909 = k36894;
var G__36909__$1 = (((G__36909 instanceof cljs.core.Keyword))?G__36909.fqn:null);
switch (G__36909__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36894,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36914){
var vec__36916 = p__36914;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36916,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36916,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36893){
var self__ = this;
var G__36893__$1 = this;
return (new cljs.core.RecordIter((0),G__36893__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36895,other36896){
var self__ = this;
var this36895__$1 = this;
return (((!((other36896 == null)))) && ((((this36895__$1.constructor === other36896.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36895__$1.x,other36896.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36895__$1.y,other36896.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36895__$1.__extmap,other36896.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36894){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36936 = k36894;
var G__36936__$1 = (((G__36936 instanceof cljs.core.Keyword))?G__36936.fqn:null);
switch (G__36936__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36894);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36893){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36938 = cljs.core.keyword_identical_QMARK_;
var expr__36939 = k__5352__auto__;
if(cljs.core.truth_((pred__36938.cljs$core$IFn$_invoke$arity$2 ? pred__36938.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36939) : pred__36938.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36939)))){
return (new shadow.dom.Coordinate(G__36893,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36938.cljs$core$IFn$_invoke$arity$2 ? pred__36938.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36939) : pred__36938.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36939)))){
return (new shadow.dom.Coordinate(self__.x,G__36893,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36893),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36893){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36893,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36899){
var extmap__5385__auto__ = (function (){var G__36966 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36899,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36899)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36966);
} else {
return G__36966;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36899),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36899),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36998,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37020 = k36998;
var G__37020__$1 = (((G__37020 instanceof cljs.core.Keyword))?G__37020.fqn:null);
switch (G__37020__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36998,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37025){
var vec__37026 = p__37025;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37026,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37026,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36997){
var self__ = this;
var G__36997__$1 = this;
return (new cljs.core.RecordIter((0),G__36997__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36999,other37000){
var self__ = this;
var this36999__$1 = this;
return (((!((other37000 == null)))) && ((((this36999__$1.constructor === other37000.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36999__$1.w,other37000.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36999__$1.h,other37000.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36999__$1.__extmap,other37000.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36998){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37045 = k36998;
var G__37045__$1 = (((G__37045 instanceof cljs.core.Keyword))?G__37045.fqn:null);
switch (G__37045__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36998);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36997){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37050 = cljs.core.keyword_identical_QMARK_;
var expr__37051 = k__5352__auto__;
if(cljs.core.truth_((pred__37050.cljs$core$IFn$_invoke$arity$2 ? pred__37050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37051) : pred__37050.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37051)))){
return (new shadow.dom.Size(G__36997,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37050.cljs$core$IFn$_invoke$arity$2 ? pred__37050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37051) : pred__37050.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37051)))){
return (new shadow.dom.Size(self__.w,G__36997,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36997),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36997){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36997,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37003){
var extmap__5385__auto__ = (function (){var G__37059 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37003,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37003)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37059);
} else {
return G__37059;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37003),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37003),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__37579 = (i + (1));
var G__37580 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37579;
ret = G__37580;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37079){
var vec__37080 = p__37079;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37080,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37086 = arguments.length;
switch (G__37086) {
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
var G__37593 = ps;
var G__37594 = (i + (1));
el__$1 = G__37593;
i = G__37594;
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
var vec__37111 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37116_37595 = cljs.core.seq(props);
var chunk__37117_37596 = null;
var count__37118_37597 = (0);
var i__37119_37598 = (0);
while(true){
if((i__37119_37598 < count__37118_37597)){
var vec__37134_37599 = chunk__37117_37596.cljs$core$IIndexed$_nth$arity$2(null,i__37119_37598);
var k_37600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37134_37599,(0),null);
var v_37601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37134_37599,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37600);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37600),v_37601);


var G__37603 = seq__37116_37595;
var G__37604 = chunk__37117_37596;
var G__37605 = count__37118_37597;
var G__37606 = (i__37119_37598 + (1));
seq__37116_37595 = G__37603;
chunk__37117_37596 = G__37604;
count__37118_37597 = G__37605;
i__37119_37598 = G__37606;
continue;
} else {
var temp__5804__auto___37607 = cljs.core.seq(seq__37116_37595);
if(temp__5804__auto___37607){
var seq__37116_37608__$1 = temp__5804__auto___37607;
if(cljs.core.chunked_seq_QMARK_(seq__37116_37608__$1)){
var c__5568__auto___37611 = cljs.core.chunk_first(seq__37116_37608__$1);
var G__37612 = cljs.core.chunk_rest(seq__37116_37608__$1);
var G__37613 = c__5568__auto___37611;
var G__37614 = cljs.core.count(c__5568__auto___37611);
var G__37615 = (0);
seq__37116_37595 = G__37612;
chunk__37117_37596 = G__37613;
count__37118_37597 = G__37614;
i__37119_37598 = G__37615;
continue;
} else {
var vec__37138_37616 = cljs.core.first(seq__37116_37608__$1);
var k_37617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37138_37616,(0),null);
var v_37618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37138_37616,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37617);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37617),v_37618);


var G__37620 = cljs.core.next(seq__37116_37608__$1);
var G__37621 = null;
var G__37622 = (0);
var G__37623 = (0);
seq__37116_37595 = G__37620;
chunk__37117_37596 = G__37621;
count__37118_37597 = G__37622;
i__37119_37598 = G__37623;
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
var vec__37148 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37148,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37148,(1),null);
var seq__37151_37625 = cljs.core.seq(node_children);
var chunk__37154_37626 = null;
var count__37155_37627 = (0);
var i__37156_37628 = (0);
while(true){
if((i__37156_37628 < count__37155_37627)){
var child_struct_37629 = chunk__37154_37626.cljs$core$IIndexed$_nth$arity$2(null,i__37156_37628);
if((!((child_struct_37629 == null)))){
if(typeof child_struct_37629 === 'string'){
var text_37630 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37630),child_struct_37629].join(''));
} else {
var children_37631 = shadow.dom.svg_node(child_struct_37629);
if(cljs.core.seq_QMARK_(children_37631)){
var seq__37183_37632 = cljs.core.seq(children_37631);
var chunk__37185_37633 = null;
var count__37186_37634 = (0);
var i__37187_37635 = (0);
while(true){
if((i__37187_37635 < count__37186_37634)){
var child_37636 = chunk__37185_37633.cljs$core$IIndexed$_nth$arity$2(null,i__37187_37635);
if(cljs.core.truth_(child_37636)){
node.appendChild(child_37636);


var G__37637 = seq__37183_37632;
var G__37638 = chunk__37185_37633;
var G__37639 = count__37186_37634;
var G__37640 = (i__37187_37635 + (1));
seq__37183_37632 = G__37637;
chunk__37185_37633 = G__37638;
count__37186_37634 = G__37639;
i__37187_37635 = G__37640;
continue;
} else {
var G__37641 = seq__37183_37632;
var G__37642 = chunk__37185_37633;
var G__37643 = count__37186_37634;
var G__37644 = (i__37187_37635 + (1));
seq__37183_37632 = G__37641;
chunk__37185_37633 = G__37642;
count__37186_37634 = G__37643;
i__37187_37635 = G__37644;
continue;
}
} else {
var temp__5804__auto___37645 = cljs.core.seq(seq__37183_37632);
if(temp__5804__auto___37645){
var seq__37183_37646__$1 = temp__5804__auto___37645;
if(cljs.core.chunked_seq_QMARK_(seq__37183_37646__$1)){
var c__5568__auto___37647 = cljs.core.chunk_first(seq__37183_37646__$1);
var G__37648 = cljs.core.chunk_rest(seq__37183_37646__$1);
var G__37649 = c__5568__auto___37647;
var G__37650 = cljs.core.count(c__5568__auto___37647);
var G__37651 = (0);
seq__37183_37632 = G__37648;
chunk__37185_37633 = G__37649;
count__37186_37634 = G__37650;
i__37187_37635 = G__37651;
continue;
} else {
var child_37652 = cljs.core.first(seq__37183_37646__$1);
if(cljs.core.truth_(child_37652)){
node.appendChild(child_37652);


var G__37657 = cljs.core.next(seq__37183_37646__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__37183_37632 = G__37657;
chunk__37185_37633 = G__37658;
count__37186_37634 = G__37659;
i__37187_37635 = G__37660;
continue;
} else {
var G__37661 = cljs.core.next(seq__37183_37646__$1);
var G__37662 = null;
var G__37663 = (0);
var G__37664 = (0);
seq__37183_37632 = G__37661;
chunk__37185_37633 = G__37662;
count__37186_37634 = G__37663;
i__37187_37635 = G__37664;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37631);
}
}


var G__37665 = seq__37151_37625;
var G__37666 = chunk__37154_37626;
var G__37667 = count__37155_37627;
var G__37668 = (i__37156_37628 + (1));
seq__37151_37625 = G__37665;
chunk__37154_37626 = G__37666;
count__37155_37627 = G__37667;
i__37156_37628 = G__37668;
continue;
} else {
var G__37672 = seq__37151_37625;
var G__37673 = chunk__37154_37626;
var G__37674 = count__37155_37627;
var G__37675 = (i__37156_37628 + (1));
seq__37151_37625 = G__37672;
chunk__37154_37626 = G__37673;
count__37155_37627 = G__37674;
i__37156_37628 = G__37675;
continue;
}
} else {
var temp__5804__auto___37676 = cljs.core.seq(seq__37151_37625);
if(temp__5804__auto___37676){
var seq__37151_37677__$1 = temp__5804__auto___37676;
if(cljs.core.chunked_seq_QMARK_(seq__37151_37677__$1)){
var c__5568__auto___37678 = cljs.core.chunk_first(seq__37151_37677__$1);
var G__37679 = cljs.core.chunk_rest(seq__37151_37677__$1);
var G__37680 = c__5568__auto___37678;
var G__37681 = cljs.core.count(c__5568__auto___37678);
var G__37682 = (0);
seq__37151_37625 = G__37679;
chunk__37154_37626 = G__37680;
count__37155_37627 = G__37681;
i__37156_37628 = G__37682;
continue;
} else {
var child_struct_37683 = cljs.core.first(seq__37151_37677__$1);
if((!((child_struct_37683 == null)))){
if(typeof child_struct_37683 === 'string'){
var text_37684 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37684),child_struct_37683].join(''));
} else {
var children_37685 = shadow.dom.svg_node(child_struct_37683);
if(cljs.core.seq_QMARK_(children_37685)){
var seq__37201_37686 = cljs.core.seq(children_37685);
var chunk__37203_37687 = null;
var count__37204_37688 = (0);
var i__37205_37689 = (0);
while(true){
if((i__37205_37689 < count__37204_37688)){
var child_37690 = chunk__37203_37687.cljs$core$IIndexed$_nth$arity$2(null,i__37205_37689);
if(cljs.core.truth_(child_37690)){
node.appendChild(child_37690);


var G__37691 = seq__37201_37686;
var G__37692 = chunk__37203_37687;
var G__37693 = count__37204_37688;
var G__37694 = (i__37205_37689 + (1));
seq__37201_37686 = G__37691;
chunk__37203_37687 = G__37692;
count__37204_37688 = G__37693;
i__37205_37689 = G__37694;
continue;
} else {
var G__37695 = seq__37201_37686;
var G__37696 = chunk__37203_37687;
var G__37697 = count__37204_37688;
var G__37698 = (i__37205_37689 + (1));
seq__37201_37686 = G__37695;
chunk__37203_37687 = G__37696;
count__37204_37688 = G__37697;
i__37205_37689 = G__37698;
continue;
}
} else {
var temp__5804__auto___37699__$1 = cljs.core.seq(seq__37201_37686);
if(temp__5804__auto___37699__$1){
var seq__37201_37700__$1 = temp__5804__auto___37699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37201_37700__$1)){
var c__5568__auto___37701 = cljs.core.chunk_first(seq__37201_37700__$1);
var G__37702 = cljs.core.chunk_rest(seq__37201_37700__$1);
var G__37703 = c__5568__auto___37701;
var G__37704 = cljs.core.count(c__5568__auto___37701);
var G__37705 = (0);
seq__37201_37686 = G__37702;
chunk__37203_37687 = G__37703;
count__37204_37688 = G__37704;
i__37205_37689 = G__37705;
continue;
} else {
var child_37706 = cljs.core.first(seq__37201_37700__$1);
if(cljs.core.truth_(child_37706)){
node.appendChild(child_37706);


var G__37707 = cljs.core.next(seq__37201_37700__$1);
var G__37708 = null;
var G__37709 = (0);
var G__37710 = (0);
seq__37201_37686 = G__37707;
chunk__37203_37687 = G__37708;
count__37204_37688 = G__37709;
i__37205_37689 = G__37710;
continue;
} else {
var G__37714 = cljs.core.next(seq__37201_37700__$1);
var G__37715 = null;
var G__37716 = (0);
var G__37717 = (0);
seq__37201_37686 = G__37714;
chunk__37203_37687 = G__37715;
count__37204_37688 = G__37716;
i__37205_37689 = G__37717;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37685);
}
}


var G__37718 = cljs.core.next(seq__37151_37677__$1);
var G__37719 = null;
var G__37720 = (0);
var G__37721 = (0);
seq__37151_37625 = G__37718;
chunk__37154_37626 = G__37719;
count__37155_37627 = G__37720;
i__37156_37628 = G__37721;
continue;
} else {
var G__37722 = cljs.core.next(seq__37151_37677__$1);
var G__37723 = null;
var G__37724 = (0);
var G__37725 = (0);
seq__37151_37625 = G__37722;
chunk__37154_37626 = G__37723;
count__37155_37627 = G__37724;
i__37156_37628 = G__37725;
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
var len__5769__auto___37726 = arguments.length;
var i__5770__auto___37727 = (0);
while(true){
if((i__5770__auto___37727 < len__5769__auto___37726)){
args__5775__auto__.push((arguments[i__5770__auto___37727]));

var G__37729 = (i__5770__auto___37727 + (1));
i__5770__auto___37727 = G__37729;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37220){
var G__37221 = cljs.core.first(seq37220);
var seq37220__$1 = cljs.core.next(seq37220);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37221,seq37220__$1);
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
var G__37231 = arguments.length;
switch (G__37231) {
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
var c__33512__auto___37737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33513__auto__ = (function (){var switch__33214__auto__ = (function (state_37244){
var state_val_37245 = (state_37244[(1)]);
if((state_val_37245 === (1))){
var state_37244__$1 = state_37244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37244__$1,(2),once_or_cleanup);
} else {
if((state_val_37245 === (2))){
var inst_37241 = (state_37244[(2)]);
var inst_37242 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37244__$1 = (function (){var statearr_37247 = state_37244;
(statearr_37247[(7)] = inst_37241);

return statearr_37247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37244__$1,inst_37242);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33215__auto__ = null;
var shadow$dom$state_machine__33215__auto____0 = (function (){
var statearr_37248 = [null,null,null,null,null,null,null,null];
(statearr_37248[(0)] = shadow$dom$state_machine__33215__auto__);

(statearr_37248[(1)] = (1));

return statearr_37248;
});
var shadow$dom$state_machine__33215__auto____1 = (function (state_37244){
while(true){
var ret_value__33216__auto__ = (function (){try{while(true){
var result__33217__auto__ = switch__33214__auto__(state_37244);
if(cljs.core.keyword_identical_QMARK_(result__33217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33217__auto__;
}
break;
}
}catch (e37249){var ex__33218__auto__ = e37249;
var statearr_37250_37738 = state_37244;
(statearr_37250_37738[(2)] = ex__33218__auto__);


if(cljs.core.seq((state_37244[(4)]))){
var statearr_37251_37739 = state_37244;
(statearr_37251_37739[(1)] = cljs.core.first((state_37244[(4)])));

} else {
throw ex__33218__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37740 = state_37244;
state_37244 = G__37740;
continue;
} else {
return ret_value__33216__auto__;
}
break;
}
});
shadow$dom$state_machine__33215__auto__ = function(state_37244){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33215__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33215__auto____1.call(this,state_37244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33215__auto____0;
shadow$dom$state_machine__33215__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33215__auto____1;
return shadow$dom$state_machine__33215__auto__;
})()
})();
var state__33514__auto__ = (function (){var statearr_37253 = f__33513__auto__();
(statearr_37253[(6)] = c__33512__auto___37737);

return statearr_37253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33514__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
