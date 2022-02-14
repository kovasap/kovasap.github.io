goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36437 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_36437(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36438 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_36438(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35232 = coll;
var G__35233 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35232,G__35233) : shadow.dom.lazy_native_coll_seq.call(null,G__35232,G__35233));
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
var G__35281 = arguments.length;
switch (G__35281) {
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
var G__35306 = arguments.length;
switch (G__35306) {
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
var G__35325 = arguments.length;
switch (G__35325) {
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
var G__35341 = arguments.length;
switch (G__35341) {
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
var G__35366 = arguments.length;
switch (G__35366) {
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
var G__35380 = arguments.length;
switch (G__35380) {
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
}catch (e35402){if((e35402 instanceof Object)){
var e = e35402;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35402;

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
var seq__35419 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35420 = null;
var count__35421 = (0);
var i__35422 = (0);
while(true){
if((i__35422 < count__35421)){
var el = chunk__35420.cljs$core$IIndexed$_nth$arity$2(null,i__35422);
var handler_36454__$1 = ((function (seq__35419,chunk__35420,count__35421,i__35422,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35419,chunk__35420,count__35421,i__35422,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36454__$1);


var G__36455 = seq__35419;
var G__36456 = chunk__35420;
var G__36457 = count__35421;
var G__36458 = (i__35422 + (1));
seq__35419 = G__36455;
chunk__35420 = G__36456;
count__35421 = G__36457;
i__35422 = G__36458;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35419);
if(temp__5753__auto__){
var seq__35419__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35419__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35419__$1);
var G__36459 = cljs.core.chunk_rest(seq__35419__$1);
var G__36460 = c__4679__auto__;
var G__36461 = cljs.core.count(c__4679__auto__);
var G__36462 = (0);
seq__35419 = G__36459;
chunk__35420 = G__36460;
count__35421 = G__36461;
i__35422 = G__36462;
continue;
} else {
var el = cljs.core.first(seq__35419__$1);
var handler_36463__$1 = ((function (seq__35419,chunk__35420,count__35421,i__35422,el,seq__35419__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35419,chunk__35420,count__35421,i__35422,el,seq__35419__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36463__$1);


var G__36468 = cljs.core.next(seq__35419__$1);
var G__36469 = null;
var G__36470 = (0);
var G__36471 = (0);
seq__35419 = G__36468;
chunk__35420 = G__36469;
count__35421 = G__36470;
i__35422 = G__36471;
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
var G__35442 = arguments.length;
switch (G__35442) {
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
var seq__35455 = cljs.core.seq(events);
var chunk__35456 = null;
var count__35457 = (0);
var i__35458 = (0);
while(true){
if((i__35458 < count__35457)){
var vec__35482 = chunk__35456.cljs$core$IIndexed$_nth$arity$2(null,i__35458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36477 = seq__35455;
var G__36478 = chunk__35456;
var G__36479 = count__35457;
var G__36480 = (i__35458 + (1));
seq__35455 = G__36477;
chunk__35456 = G__36478;
count__35457 = G__36479;
i__35458 = G__36480;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35455);
if(temp__5753__auto__){
var seq__35455__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35455__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35455__$1);
var G__36485 = cljs.core.chunk_rest(seq__35455__$1);
var G__36486 = c__4679__auto__;
var G__36487 = cljs.core.count(c__4679__auto__);
var G__36488 = (0);
seq__35455 = G__36485;
chunk__35456 = G__36486;
count__35457 = G__36487;
i__35458 = G__36488;
continue;
} else {
var vec__35491 = cljs.core.first(seq__35455__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36491 = cljs.core.next(seq__35455__$1);
var G__36492 = null;
var G__36493 = (0);
var G__36494 = (0);
seq__35455 = G__36491;
chunk__35456 = G__36492;
count__35457 = G__36493;
i__35458 = G__36494;
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
var seq__35502 = cljs.core.seq(styles);
var chunk__35503 = null;
var count__35504 = (0);
var i__35505 = (0);
while(true){
if((i__35505 < count__35504)){
var vec__35527 = chunk__35503.cljs$core$IIndexed$_nth$arity$2(null,i__35505);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35527,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36497 = seq__35502;
var G__36498 = chunk__35503;
var G__36499 = count__35504;
var G__36500 = (i__35505 + (1));
seq__35502 = G__36497;
chunk__35503 = G__36498;
count__35504 = G__36499;
i__35505 = G__36500;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35502);
if(temp__5753__auto__){
var seq__35502__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35502__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35502__$1);
var G__36506 = cljs.core.chunk_rest(seq__35502__$1);
var G__36507 = c__4679__auto__;
var G__36508 = cljs.core.count(c__4679__auto__);
var G__36509 = (0);
seq__35502 = G__36506;
chunk__35503 = G__36507;
count__35504 = G__36508;
i__35505 = G__36509;
continue;
} else {
var vec__35536 = cljs.core.first(seq__35502__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35536,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36511 = cljs.core.next(seq__35502__$1);
var G__36512 = null;
var G__36513 = (0);
var G__36514 = (0);
seq__35502 = G__36511;
chunk__35503 = G__36512;
count__35504 = G__36513;
i__35505 = G__36514;
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
var G__35544_36516 = key;
var G__35544_36517__$1 = (((G__35544_36516 instanceof cljs.core.Keyword))?G__35544_36516.fqn:null);
switch (G__35544_36517__$1) {
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
var ks_36526 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36526,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36526,"aria-");
}
})())){
el.setAttribute(ks_36526,value);
} else {
(el[ks_36526] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35576){
var map__35577 = p__35576;
var map__35577__$1 = cljs.core.__destructure_map(map__35577);
var props = map__35577__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35577__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35580 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35587 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35587,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35587;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35596 = arguments.length;
switch (G__35596) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35607){
var vec__35609 = p__35607;
var seq__35610 = cljs.core.seq(vec__35609);
var first__35611 = cljs.core.first(seq__35610);
var seq__35610__$1 = cljs.core.next(seq__35610);
var nn = first__35611;
var first__35611__$1 = cljs.core.first(seq__35610__$1);
var seq__35610__$2 = cljs.core.next(seq__35610__$1);
var np = first__35611__$1;
var nc = seq__35610__$2;
var node = vec__35609;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35613 = nn;
var G__35614 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35613,G__35614) : create_fn.call(null,G__35613,G__35614));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35615 = nn;
var G__35616 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35615,G__35616) : create_fn.call(null,G__35615,G__35616));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35617 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35617,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35617,(1),null);
var seq__35620_36562 = cljs.core.seq(node_children);
var chunk__35621_36563 = null;
var count__35622_36564 = (0);
var i__35623_36565 = (0);
while(true){
if((i__35623_36565 < count__35622_36564)){
var child_struct_36566 = chunk__35621_36563.cljs$core$IIndexed$_nth$arity$2(null,i__35623_36565);
var children_36568 = shadow.dom.dom_node(child_struct_36566);
if(cljs.core.seq_QMARK_(children_36568)){
var seq__35687_36569 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36568));
var chunk__35689_36570 = null;
var count__35690_36571 = (0);
var i__35691_36572 = (0);
while(true){
if((i__35691_36572 < count__35690_36571)){
var child_36573 = chunk__35689_36570.cljs$core$IIndexed$_nth$arity$2(null,i__35691_36572);
if(cljs.core.truth_(child_36573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36573);


var G__36575 = seq__35687_36569;
var G__36576 = chunk__35689_36570;
var G__36577 = count__35690_36571;
var G__36578 = (i__35691_36572 + (1));
seq__35687_36569 = G__36575;
chunk__35689_36570 = G__36576;
count__35690_36571 = G__36577;
i__35691_36572 = G__36578;
continue;
} else {
var G__36580 = seq__35687_36569;
var G__36581 = chunk__35689_36570;
var G__36582 = count__35690_36571;
var G__36583 = (i__35691_36572 + (1));
seq__35687_36569 = G__36580;
chunk__35689_36570 = G__36581;
count__35690_36571 = G__36582;
i__35691_36572 = G__36583;
continue;
}
} else {
var temp__5753__auto___36584 = cljs.core.seq(seq__35687_36569);
if(temp__5753__auto___36584){
var seq__35687_36585__$1 = temp__5753__auto___36584;
if(cljs.core.chunked_seq_QMARK_(seq__35687_36585__$1)){
var c__4679__auto___36586 = cljs.core.chunk_first(seq__35687_36585__$1);
var G__36587 = cljs.core.chunk_rest(seq__35687_36585__$1);
var G__36588 = c__4679__auto___36586;
var G__36589 = cljs.core.count(c__4679__auto___36586);
var G__36590 = (0);
seq__35687_36569 = G__36587;
chunk__35689_36570 = G__36588;
count__35690_36571 = G__36589;
i__35691_36572 = G__36590;
continue;
} else {
var child_36591 = cljs.core.first(seq__35687_36585__$1);
if(cljs.core.truth_(child_36591)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36591);


var G__36592 = cljs.core.next(seq__35687_36585__$1);
var G__36593 = null;
var G__36594 = (0);
var G__36595 = (0);
seq__35687_36569 = G__36592;
chunk__35689_36570 = G__36593;
count__35690_36571 = G__36594;
i__35691_36572 = G__36595;
continue;
} else {
var G__36596 = cljs.core.next(seq__35687_36585__$1);
var G__36597 = null;
var G__36598 = (0);
var G__36599 = (0);
seq__35687_36569 = G__36596;
chunk__35689_36570 = G__36597;
count__35690_36571 = G__36598;
i__35691_36572 = G__36599;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36568);
}


var G__36600 = seq__35620_36562;
var G__36601 = chunk__35621_36563;
var G__36602 = count__35622_36564;
var G__36603 = (i__35623_36565 + (1));
seq__35620_36562 = G__36600;
chunk__35621_36563 = G__36601;
count__35622_36564 = G__36602;
i__35623_36565 = G__36603;
continue;
} else {
var temp__5753__auto___36604 = cljs.core.seq(seq__35620_36562);
if(temp__5753__auto___36604){
var seq__35620_36605__$1 = temp__5753__auto___36604;
if(cljs.core.chunked_seq_QMARK_(seq__35620_36605__$1)){
var c__4679__auto___36606 = cljs.core.chunk_first(seq__35620_36605__$1);
var G__36607 = cljs.core.chunk_rest(seq__35620_36605__$1);
var G__36608 = c__4679__auto___36606;
var G__36609 = cljs.core.count(c__4679__auto___36606);
var G__36610 = (0);
seq__35620_36562 = G__36607;
chunk__35621_36563 = G__36608;
count__35622_36564 = G__36609;
i__35623_36565 = G__36610;
continue;
} else {
var child_struct_36611 = cljs.core.first(seq__35620_36605__$1);
var children_36612 = shadow.dom.dom_node(child_struct_36611);
if(cljs.core.seq_QMARK_(children_36612)){
var seq__35708_36613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36612));
var chunk__35710_36614 = null;
var count__35711_36615 = (0);
var i__35712_36616 = (0);
while(true){
if((i__35712_36616 < count__35711_36615)){
var child_36617 = chunk__35710_36614.cljs$core$IIndexed$_nth$arity$2(null,i__35712_36616);
if(cljs.core.truth_(child_36617)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36617);


var G__36618 = seq__35708_36613;
var G__36619 = chunk__35710_36614;
var G__36620 = count__35711_36615;
var G__36621 = (i__35712_36616 + (1));
seq__35708_36613 = G__36618;
chunk__35710_36614 = G__36619;
count__35711_36615 = G__36620;
i__35712_36616 = G__36621;
continue;
} else {
var G__36622 = seq__35708_36613;
var G__36623 = chunk__35710_36614;
var G__36624 = count__35711_36615;
var G__36625 = (i__35712_36616 + (1));
seq__35708_36613 = G__36622;
chunk__35710_36614 = G__36623;
count__35711_36615 = G__36624;
i__35712_36616 = G__36625;
continue;
}
} else {
var temp__5753__auto___36626__$1 = cljs.core.seq(seq__35708_36613);
if(temp__5753__auto___36626__$1){
var seq__35708_36627__$1 = temp__5753__auto___36626__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35708_36627__$1)){
var c__4679__auto___36628 = cljs.core.chunk_first(seq__35708_36627__$1);
var G__36629 = cljs.core.chunk_rest(seq__35708_36627__$1);
var G__36630 = c__4679__auto___36628;
var G__36631 = cljs.core.count(c__4679__auto___36628);
var G__36632 = (0);
seq__35708_36613 = G__36629;
chunk__35710_36614 = G__36630;
count__35711_36615 = G__36631;
i__35712_36616 = G__36632;
continue;
} else {
var child_36633 = cljs.core.first(seq__35708_36627__$1);
if(cljs.core.truth_(child_36633)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36633);


var G__36634 = cljs.core.next(seq__35708_36627__$1);
var G__36635 = null;
var G__36636 = (0);
var G__36637 = (0);
seq__35708_36613 = G__36634;
chunk__35710_36614 = G__36635;
count__35711_36615 = G__36636;
i__35712_36616 = G__36637;
continue;
} else {
var G__36638 = cljs.core.next(seq__35708_36627__$1);
var G__36639 = null;
var G__36640 = (0);
var G__36641 = (0);
seq__35708_36613 = G__36638;
chunk__35710_36614 = G__36639;
count__35711_36615 = G__36640;
i__35712_36616 = G__36641;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36612);
}


var G__36642 = cljs.core.next(seq__35620_36605__$1);
var G__36643 = null;
var G__36644 = (0);
var G__36645 = (0);
seq__35620_36562 = G__36642;
chunk__35621_36563 = G__36643;
count__35622_36564 = G__36644;
i__35623_36565 = G__36645;
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
var seq__35750 = cljs.core.seq(node);
var chunk__35751 = null;
var count__35752 = (0);
var i__35753 = (0);
while(true){
if((i__35753 < count__35752)){
var n = chunk__35751.cljs$core$IIndexed$_nth$arity$2(null,i__35753);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36647 = seq__35750;
var G__36648 = chunk__35751;
var G__36649 = count__35752;
var G__36650 = (i__35753 + (1));
seq__35750 = G__36647;
chunk__35751 = G__36648;
count__35752 = G__36649;
i__35753 = G__36650;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35750);
if(temp__5753__auto__){
var seq__35750__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35750__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35750__$1);
var G__36651 = cljs.core.chunk_rest(seq__35750__$1);
var G__36652 = c__4679__auto__;
var G__36653 = cljs.core.count(c__4679__auto__);
var G__36654 = (0);
seq__35750 = G__36651;
chunk__35751 = G__36652;
count__35752 = G__36653;
i__35753 = G__36654;
continue;
} else {
var n = cljs.core.first(seq__35750__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36656 = cljs.core.next(seq__35750__$1);
var G__36657 = null;
var G__36658 = (0);
var G__36659 = (0);
seq__35750 = G__36656;
chunk__35751 = G__36657;
count__35752 = G__36658;
i__35753 = G__36659;
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
var G__35779 = arguments.length;
switch (G__35779) {
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
var G__35790 = arguments.length;
switch (G__35790) {
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
var G__35801 = arguments.length;
switch (G__35801) {
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
var len__4864__auto___36676 = arguments.length;
var i__4865__auto___36677 = (0);
while(true){
if((i__4865__auto___36677 < len__4864__auto___36676)){
args__4870__auto__.push((arguments[i__4865__auto___36677]));

var G__36679 = (i__4865__auto___36677 + (1));
i__4865__auto___36677 = G__36679;
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
var seq__35896_36680 = cljs.core.seq(nodes);
var chunk__35897_36681 = null;
var count__35898_36682 = (0);
var i__35899_36683 = (0);
while(true){
if((i__35899_36683 < count__35898_36682)){
var node_36684 = chunk__35897_36681.cljs$core$IIndexed$_nth$arity$2(null,i__35899_36683);
fragment.appendChild(shadow.dom._to_dom(node_36684));


var G__36685 = seq__35896_36680;
var G__36686 = chunk__35897_36681;
var G__36687 = count__35898_36682;
var G__36688 = (i__35899_36683 + (1));
seq__35896_36680 = G__36685;
chunk__35897_36681 = G__36686;
count__35898_36682 = G__36687;
i__35899_36683 = G__36688;
continue;
} else {
var temp__5753__auto___36689 = cljs.core.seq(seq__35896_36680);
if(temp__5753__auto___36689){
var seq__35896_36690__$1 = temp__5753__auto___36689;
if(cljs.core.chunked_seq_QMARK_(seq__35896_36690__$1)){
var c__4679__auto___36691 = cljs.core.chunk_first(seq__35896_36690__$1);
var G__36692 = cljs.core.chunk_rest(seq__35896_36690__$1);
var G__36693 = c__4679__auto___36691;
var G__36694 = cljs.core.count(c__4679__auto___36691);
var G__36695 = (0);
seq__35896_36680 = G__36692;
chunk__35897_36681 = G__36693;
count__35898_36682 = G__36694;
i__35899_36683 = G__36695;
continue;
} else {
var node_36696 = cljs.core.first(seq__35896_36690__$1);
fragment.appendChild(shadow.dom._to_dom(node_36696));


var G__36697 = cljs.core.next(seq__35896_36690__$1);
var G__36698 = null;
var G__36699 = (0);
var G__36700 = (0);
seq__35896_36680 = G__36697;
chunk__35897_36681 = G__36698;
count__35898_36682 = G__36699;
i__35899_36683 = G__36700;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35872){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35872));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35955_36701 = cljs.core.seq(scripts);
var chunk__35956_36702 = null;
var count__35957_36703 = (0);
var i__35958_36704 = (0);
while(true){
if((i__35958_36704 < count__35957_36703)){
var vec__35978_36705 = chunk__35956_36702.cljs$core$IIndexed$_nth$arity$2(null,i__35958_36704);
var script_tag_36706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35978_36705,(0),null);
var script_body_36707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35978_36705,(1),null);
eval(script_body_36707);


var G__36708 = seq__35955_36701;
var G__36709 = chunk__35956_36702;
var G__36710 = count__35957_36703;
var G__36711 = (i__35958_36704 + (1));
seq__35955_36701 = G__36708;
chunk__35956_36702 = G__36709;
count__35957_36703 = G__36710;
i__35958_36704 = G__36711;
continue;
} else {
var temp__5753__auto___36712 = cljs.core.seq(seq__35955_36701);
if(temp__5753__auto___36712){
var seq__35955_36713__$1 = temp__5753__auto___36712;
if(cljs.core.chunked_seq_QMARK_(seq__35955_36713__$1)){
var c__4679__auto___36714 = cljs.core.chunk_first(seq__35955_36713__$1);
var G__36715 = cljs.core.chunk_rest(seq__35955_36713__$1);
var G__36716 = c__4679__auto___36714;
var G__36717 = cljs.core.count(c__4679__auto___36714);
var G__36718 = (0);
seq__35955_36701 = G__36715;
chunk__35956_36702 = G__36716;
count__35957_36703 = G__36717;
i__35958_36704 = G__36718;
continue;
} else {
var vec__35990_36719 = cljs.core.first(seq__35955_36713__$1);
var script_tag_36720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35990_36719,(0),null);
var script_body_36721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35990_36719,(1),null);
eval(script_body_36721);


var G__36722 = cljs.core.next(seq__35955_36713__$1);
var G__36723 = null;
var G__36724 = (0);
var G__36725 = (0);
seq__35955_36701 = G__36722;
chunk__35956_36702 = G__36723;
count__35957_36703 = G__36724;
i__35958_36704 = G__36725;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35998){
var vec__36000 = p__35998;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36000,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36000,(1),null);
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
var G__36021 = arguments.length;
switch (G__36021) {
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
var seq__36077 = cljs.core.seq(style_keys);
var chunk__36078 = null;
var count__36079 = (0);
var i__36080 = (0);
while(true){
if((i__36080 < count__36079)){
var it = chunk__36078.cljs$core$IIndexed$_nth$arity$2(null,i__36080);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36732 = seq__36077;
var G__36733 = chunk__36078;
var G__36734 = count__36079;
var G__36735 = (i__36080 + (1));
seq__36077 = G__36732;
chunk__36078 = G__36733;
count__36079 = G__36734;
i__36080 = G__36735;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36077);
if(temp__5753__auto__){
var seq__36077__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36077__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36077__$1);
var G__36736 = cljs.core.chunk_rest(seq__36077__$1);
var G__36737 = c__4679__auto__;
var G__36738 = cljs.core.count(c__4679__auto__);
var G__36739 = (0);
seq__36077 = G__36736;
chunk__36078 = G__36737;
count__36079 = G__36738;
i__36080 = G__36739;
continue;
} else {
var it = cljs.core.first(seq__36077__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36740 = cljs.core.next(seq__36077__$1);
var G__36741 = null;
var G__36742 = (0);
var G__36743 = (0);
seq__36077 = G__36740;
chunk__36078 = G__36741;
count__36079 = G__36742;
i__36080 = G__36743;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k36103,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__36129 = k36103;
var G__36129__$1 = (((G__36129 instanceof cljs.core.Keyword))?G__36129.fqn:null);
switch (G__36129__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36103,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__36140){
var vec__36145 = p__36140;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36102){
var self__ = this;
var G__36102__$1 = this;
return (new cljs.core.RecordIter((0),G__36102__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36104,other36105){
var self__ = this;
var this36104__$1 = this;
return (((!((other36105 == null)))) && ((((this36104__$1.constructor === other36105.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36104__$1.x,other36105.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36104__$1.y,other36105.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36104__$1.__extmap,other36105.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k36103){
var self__ = this;
var this__4509__auto____$1 = this;
var G__36189 = k36103;
var G__36189__$1 = (((G__36189 instanceof cljs.core.Keyword))?G__36189.fqn:null);
switch (G__36189__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36103);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__36102){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__36192 = cljs.core.keyword_identical_QMARK_;
var expr__36193 = k__4511__auto__;
if(cljs.core.truth_((pred__36192.cljs$core$IFn$_invoke$arity$2 ? pred__36192.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36193) : pred__36192.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36193)))){
return (new shadow.dom.Coordinate(G__36102,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36192.cljs$core$IFn$_invoke$arity$2 ? pred__36192.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36193) : pred__36192.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36193)))){
return (new shadow.dom.Coordinate(self__.x,G__36102,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__36102),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__36102){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36102,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36106){
var extmap__4542__auto__ = (function (){var G__36200 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36106,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36106)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36200);
} else {
return G__36200;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36106),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36106),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k36208,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__36217 = k36208;
var G__36217__$1 = (((G__36217 instanceof cljs.core.Keyword))?G__36217.fqn:null);
switch (G__36217__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36208,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__36223){
var vec__36226 = p__36223;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36207){
var self__ = this;
var G__36207__$1 = this;
return (new cljs.core.RecordIter((0),G__36207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36209,other36210){
var self__ = this;
var this36209__$1 = this;
return (((!((other36210 == null)))) && ((((this36209__$1.constructor === other36210.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36209__$1.w,other36210.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36209__$1.h,other36210.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36209__$1.__extmap,other36210.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k36208){
var self__ = this;
var this__4509__auto____$1 = this;
var G__36232 = k36208;
var G__36232__$1 = (((G__36232 instanceof cljs.core.Keyword))?G__36232.fqn:null);
switch (G__36232__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36208);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__36207){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__36233 = cljs.core.keyword_identical_QMARK_;
var expr__36234 = k__4511__auto__;
if(cljs.core.truth_((pred__36233.cljs$core$IFn$_invoke$arity$2 ? pred__36233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36234) : pred__36233.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36234)))){
return (new shadow.dom.Size(G__36207,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36233.cljs$core$IFn$_invoke$arity$2 ? pred__36233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36234) : pred__36233.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36234)))){
return (new shadow.dom.Size(self__.w,G__36207,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__36207),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__36207){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36207,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36211){
var extmap__4542__auto__ = (function (){var G__36241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36211,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36211)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36241);
} else {
return G__36241;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36211),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36211),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__36766 = (i + (1));
var G__36767 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36766;
ret = G__36767;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36260){
var vec__36261 = p__36260;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36266 = arguments.length;
switch (G__36266) {
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
var G__36773 = ps;
var G__36774 = (i + (1));
el__$1 = G__36773;
i = G__36774;
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
var vec__36291 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36291,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36291,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36291,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36297_36779 = cljs.core.seq(props);
var chunk__36298_36780 = null;
var count__36299_36781 = (0);
var i__36300_36782 = (0);
while(true){
if((i__36300_36782 < count__36299_36781)){
var vec__36314_36783 = chunk__36298_36780.cljs$core$IIndexed$_nth$arity$2(null,i__36300_36782);
var k_36784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314_36783,(0),null);
var v_36785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314_36783,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36784);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36784),v_36785);


var G__36790 = seq__36297_36779;
var G__36791 = chunk__36298_36780;
var G__36792 = count__36299_36781;
var G__36793 = (i__36300_36782 + (1));
seq__36297_36779 = G__36790;
chunk__36298_36780 = G__36791;
count__36299_36781 = G__36792;
i__36300_36782 = G__36793;
continue;
} else {
var temp__5753__auto___36794 = cljs.core.seq(seq__36297_36779);
if(temp__5753__auto___36794){
var seq__36297_36795__$1 = temp__5753__auto___36794;
if(cljs.core.chunked_seq_QMARK_(seq__36297_36795__$1)){
var c__4679__auto___36796 = cljs.core.chunk_first(seq__36297_36795__$1);
var G__36797 = cljs.core.chunk_rest(seq__36297_36795__$1);
var G__36798 = c__4679__auto___36796;
var G__36799 = cljs.core.count(c__4679__auto___36796);
var G__36800 = (0);
seq__36297_36779 = G__36797;
chunk__36298_36780 = G__36798;
count__36299_36781 = G__36799;
i__36300_36782 = G__36800;
continue;
} else {
var vec__36323_36801 = cljs.core.first(seq__36297_36795__$1);
var k_36802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36323_36801,(0),null);
var v_36803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36323_36801,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36802);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36802),v_36803);


var G__36804 = cljs.core.next(seq__36297_36795__$1);
var G__36805 = null;
var G__36806 = (0);
var G__36807 = (0);
seq__36297_36779 = G__36804;
chunk__36298_36780 = G__36805;
count__36299_36781 = G__36806;
i__36300_36782 = G__36807;
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
var vec__36327 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36327,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36327,(1),null);
var seq__36330_36808 = cljs.core.seq(node_children);
var chunk__36332_36809 = null;
var count__36333_36810 = (0);
var i__36334_36811 = (0);
while(true){
if((i__36334_36811 < count__36333_36810)){
var child_struct_36812 = chunk__36332_36809.cljs$core$IIndexed$_nth$arity$2(null,i__36334_36811);
if((!((child_struct_36812 == null)))){
if(typeof child_struct_36812 === 'string'){
var text_36813 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36813),child_struct_36812].join(''));
} else {
var children_36814 = shadow.dom.svg_node(child_struct_36812);
if(cljs.core.seq_QMARK_(children_36814)){
var seq__36365_36815 = cljs.core.seq(children_36814);
var chunk__36367_36816 = null;
var count__36368_36817 = (0);
var i__36369_36818 = (0);
while(true){
if((i__36369_36818 < count__36368_36817)){
var child_36819 = chunk__36367_36816.cljs$core$IIndexed$_nth$arity$2(null,i__36369_36818);
if(cljs.core.truth_(child_36819)){
node.appendChild(child_36819);


var G__36820 = seq__36365_36815;
var G__36821 = chunk__36367_36816;
var G__36822 = count__36368_36817;
var G__36823 = (i__36369_36818 + (1));
seq__36365_36815 = G__36820;
chunk__36367_36816 = G__36821;
count__36368_36817 = G__36822;
i__36369_36818 = G__36823;
continue;
} else {
var G__36824 = seq__36365_36815;
var G__36825 = chunk__36367_36816;
var G__36826 = count__36368_36817;
var G__36827 = (i__36369_36818 + (1));
seq__36365_36815 = G__36824;
chunk__36367_36816 = G__36825;
count__36368_36817 = G__36826;
i__36369_36818 = G__36827;
continue;
}
} else {
var temp__5753__auto___36828 = cljs.core.seq(seq__36365_36815);
if(temp__5753__auto___36828){
var seq__36365_36829__$1 = temp__5753__auto___36828;
if(cljs.core.chunked_seq_QMARK_(seq__36365_36829__$1)){
var c__4679__auto___36830 = cljs.core.chunk_first(seq__36365_36829__$1);
var G__36831 = cljs.core.chunk_rest(seq__36365_36829__$1);
var G__36832 = c__4679__auto___36830;
var G__36833 = cljs.core.count(c__4679__auto___36830);
var G__36834 = (0);
seq__36365_36815 = G__36831;
chunk__36367_36816 = G__36832;
count__36368_36817 = G__36833;
i__36369_36818 = G__36834;
continue;
} else {
var child_36835 = cljs.core.first(seq__36365_36829__$1);
if(cljs.core.truth_(child_36835)){
node.appendChild(child_36835);


var G__36837 = cljs.core.next(seq__36365_36829__$1);
var G__36838 = null;
var G__36839 = (0);
var G__36840 = (0);
seq__36365_36815 = G__36837;
chunk__36367_36816 = G__36838;
count__36368_36817 = G__36839;
i__36369_36818 = G__36840;
continue;
} else {
var G__36841 = cljs.core.next(seq__36365_36829__$1);
var G__36842 = null;
var G__36843 = (0);
var G__36844 = (0);
seq__36365_36815 = G__36841;
chunk__36367_36816 = G__36842;
count__36368_36817 = G__36843;
i__36369_36818 = G__36844;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36814);
}
}


var G__36846 = seq__36330_36808;
var G__36847 = chunk__36332_36809;
var G__36848 = count__36333_36810;
var G__36849 = (i__36334_36811 + (1));
seq__36330_36808 = G__36846;
chunk__36332_36809 = G__36847;
count__36333_36810 = G__36848;
i__36334_36811 = G__36849;
continue;
} else {
var G__36850 = seq__36330_36808;
var G__36851 = chunk__36332_36809;
var G__36852 = count__36333_36810;
var G__36853 = (i__36334_36811 + (1));
seq__36330_36808 = G__36850;
chunk__36332_36809 = G__36851;
count__36333_36810 = G__36852;
i__36334_36811 = G__36853;
continue;
}
} else {
var temp__5753__auto___36854 = cljs.core.seq(seq__36330_36808);
if(temp__5753__auto___36854){
var seq__36330_36855__$1 = temp__5753__auto___36854;
if(cljs.core.chunked_seq_QMARK_(seq__36330_36855__$1)){
var c__4679__auto___36857 = cljs.core.chunk_first(seq__36330_36855__$1);
var G__36858 = cljs.core.chunk_rest(seq__36330_36855__$1);
var G__36859 = c__4679__auto___36857;
var G__36860 = cljs.core.count(c__4679__auto___36857);
var G__36861 = (0);
seq__36330_36808 = G__36858;
chunk__36332_36809 = G__36859;
count__36333_36810 = G__36860;
i__36334_36811 = G__36861;
continue;
} else {
var child_struct_36862 = cljs.core.first(seq__36330_36855__$1);
if((!((child_struct_36862 == null)))){
if(typeof child_struct_36862 === 'string'){
var text_36863 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36863),child_struct_36862].join(''));
} else {
var children_36864 = shadow.dom.svg_node(child_struct_36862);
if(cljs.core.seq_QMARK_(children_36864)){
var seq__36375_36865 = cljs.core.seq(children_36864);
var chunk__36377_36866 = null;
var count__36378_36867 = (0);
var i__36379_36868 = (0);
while(true){
if((i__36379_36868 < count__36378_36867)){
var child_36869 = chunk__36377_36866.cljs$core$IIndexed$_nth$arity$2(null,i__36379_36868);
if(cljs.core.truth_(child_36869)){
node.appendChild(child_36869);


var G__36870 = seq__36375_36865;
var G__36871 = chunk__36377_36866;
var G__36872 = count__36378_36867;
var G__36873 = (i__36379_36868 + (1));
seq__36375_36865 = G__36870;
chunk__36377_36866 = G__36871;
count__36378_36867 = G__36872;
i__36379_36868 = G__36873;
continue;
} else {
var G__36874 = seq__36375_36865;
var G__36875 = chunk__36377_36866;
var G__36876 = count__36378_36867;
var G__36877 = (i__36379_36868 + (1));
seq__36375_36865 = G__36874;
chunk__36377_36866 = G__36875;
count__36378_36867 = G__36876;
i__36379_36868 = G__36877;
continue;
}
} else {
var temp__5753__auto___36878__$1 = cljs.core.seq(seq__36375_36865);
if(temp__5753__auto___36878__$1){
var seq__36375_36879__$1 = temp__5753__auto___36878__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36375_36879__$1)){
var c__4679__auto___36880 = cljs.core.chunk_first(seq__36375_36879__$1);
var G__36881 = cljs.core.chunk_rest(seq__36375_36879__$1);
var G__36882 = c__4679__auto___36880;
var G__36883 = cljs.core.count(c__4679__auto___36880);
var G__36884 = (0);
seq__36375_36865 = G__36881;
chunk__36377_36866 = G__36882;
count__36378_36867 = G__36883;
i__36379_36868 = G__36884;
continue;
} else {
var child_36885 = cljs.core.first(seq__36375_36879__$1);
if(cljs.core.truth_(child_36885)){
node.appendChild(child_36885);


var G__36886 = cljs.core.next(seq__36375_36879__$1);
var G__36887 = null;
var G__36888 = (0);
var G__36889 = (0);
seq__36375_36865 = G__36886;
chunk__36377_36866 = G__36887;
count__36378_36867 = G__36888;
i__36379_36868 = G__36889;
continue;
} else {
var G__36890 = cljs.core.next(seq__36375_36879__$1);
var G__36891 = null;
var G__36892 = (0);
var G__36893 = (0);
seq__36375_36865 = G__36890;
chunk__36377_36866 = G__36891;
count__36378_36867 = G__36892;
i__36379_36868 = G__36893;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36864);
}
}


var G__36894 = cljs.core.next(seq__36330_36855__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36330_36808 = G__36894;
chunk__36332_36809 = G__36895;
count__36333_36810 = G__36896;
i__36334_36811 = G__36897;
continue;
} else {
var G__36898 = cljs.core.next(seq__36330_36855__$1);
var G__36899 = null;
var G__36900 = (0);
var G__36901 = (0);
seq__36330_36808 = G__36898;
chunk__36332_36809 = G__36899;
count__36333_36810 = G__36900;
i__36334_36811 = G__36901;
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
var len__4864__auto___36903 = arguments.length;
var i__4865__auto___36904 = (0);
while(true){
if((i__4865__auto___36904 < len__4864__auto___36903)){
args__4870__auto__.push((arguments[i__4865__auto___36904]));

var G__36905 = (i__4865__auto___36904 + (1));
i__4865__auto___36904 = G__36905;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36391){
var G__36392 = cljs.core.first(seq36391);
var seq36391__$1 = cljs.core.next(seq36391);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36392,seq36391__$1);
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
var G__36399 = arguments.length;
switch (G__36399) {
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
var c__32787__auto___36914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32788__auto__ = (function (){var switch__32485__auto__ = (function (state_36412){
var state_val_36413 = (state_36412[(1)]);
if((state_val_36413 === (1))){
var state_36412__$1 = state_36412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36412__$1,(2),once_or_cleanup);
} else {
if((state_val_36413 === (2))){
var inst_36409 = (state_36412[(2)]);
var inst_36410 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36412__$1 = (function (){var statearr_36418 = state_36412;
(statearr_36418[(7)] = inst_36409);

return statearr_36418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36412__$1,inst_36410);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32486__auto__ = null;
var shadow$dom$state_machine__32486__auto____0 = (function (){
var statearr_36422 = [null,null,null,null,null,null,null,null];
(statearr_36422[(0)] = shadow$dom$state_machine__32486__auto__);

(statearr_36422[(1)] = (1));

return statearr_36422;
});
var shadow$dom$state_machine__32486__auto____1 = (function (state_36412){
while(true){
var ret_value__32487__auto__ = (function (){try{while(true){
var result__32488__auto__ = switch__32485__auto__(state_36412);
if(cljs.core.keyword_identical_QMARK_(result__32488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32488__auto__;
}
break;
}
}catch (e36423){var ex__32489__auto__ = e36423;
var statearr_36424_36917 = state_36412;
(statearr_36424_36917[(2)] = ex__32489__auto__);


if(cljs.core.seq((state_36412[(4)]))){
var statearr_36429_36918 = state_36412;
(statearr_36429_36918[(1)] = cljs.core.first((state_36412[(4)])));

} else {
throw ex__32489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_36412;
state_36412 = G__36919;
continue;
} else {
return ret_value__32487__auto__;
}
break;
}
});
shadow$dom$state_machine__32486__auto__ = function(state_36412){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32486__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32486__auto____1.call(this,state_36412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32486__auto____0;
shadow$dom$state_machine__32486__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32486__auto____1;
return shadow$dom$state_machine__32486__auto__;
})()
})();
var state__32789__auto__ = (function (){var statearr_36430 = f__32788__auto__();
(statearr_36430[(6)] = c__32787__auto___36914);

return statearr_36430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32789__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
