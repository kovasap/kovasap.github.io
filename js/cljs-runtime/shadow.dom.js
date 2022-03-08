goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45101 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45101(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45102 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45102(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44185 = coll;
var G__44186 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44185,G__44186) : shadow.dom.lazy_native_coll_seq.call(null,G__44185,G__44186));
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
var G__44239 = arguments.length;
switch (G__44239) {
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
var G__44252 = arguments.length;
switch (G__44252) {
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
var G__44269 = arguments.length;
switch (G__44269) {
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
var G__44297 = arguments.length;
switch (G__44297) {
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
var G__44303 = arguments.length;
switch (G__44303) {
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
var G__44322 = arguments.length;
switch (G__44322) {
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
}catch (e44338){if((e44338 instanceof Object)){
var e = e44338;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44338;

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
var seq__44345 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44346 = null;
var count__44347 = (0);
var i__44348 = (0);
while(true){
if((i__44348 < count__44347)){
var el = chunk__44346.cljs$core$IIndexed$_nth$arity$2(null,i__44348);
var handler_45117__$1 = ((function (seq__44345,chunk__44346,count__44347,i__44348,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44345,chunk__44346,count__44347,i__44348,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45117__$1);


var G__45126 = seq__44345;
var G__45127 = chunk__44346;
var G__45128 = count__44347;
var G__45129 = (i__44348 + (1));
seq__44345 = G__45126;
chunk__44346 = G__45127;
count__44347 = G__45128;
i__44348 = G__45129;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44345);
if(temp__5753__auto__){
var seq__44345__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44345__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44345__$1);
var G__45130 = cljs.core.chunk_rest(seq__44345__$1);
var G__45131 = c__4679__auto__;
var G__45132 = cljs.core.count(c__4679__auto__);
var G__45133 = (0);
seq__44345 = G__45130;
chunk__44346 = G__45131;
count__44347 = G__45132;
i__44348 = G__45133;
continue;
} else {
var el = cljs.core.first(seq__44345__$1);
var handler_45134__$1 = ((function (seq__44345,chunk__44346,count__44347,i__44348,el,seq__44345__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44345,chunk__44346,count__44347,i__44348,el,seq__44345__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45134__$1);


var G__45135 = cljs.core.next(seq__44345__$1);
var G__45136 = null;
var G__45137 = (0);
var G__45138 = (0);
seq__44345 = G__45135;
chunk__44346 = G__45136;
count__44347 = G__45137;
i__44348 = G__45138;
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
var G__44362 = arguments.length;
switch (G__44362) {
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
var seq__44363 = cljs.core.seq(events);
var chunk__44364 = null;
var count__44365 = (0);
var i__44366 = (0);
while(true){
if((i__44366 < count__44365)){
var vec__44377 = chunk__44364.cljs$core$IIndexed$_nth$arity$2(null,i__44366);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45144 = seq__44363;
var G__45145 = chunk__44364;
var G__45146 = count__44365;
var G__45147 = (i__44366 + (1));
seq__44363 = G__45144;
chunk__44364 = G__45145;
count__44365 = G__45146;
i__44366 = G__45147;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44363);
if(temp__5753__auto__){
var seq__44363__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44363__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44363__$1);
var G__45148 = cljs.core.chunk_rest(seq__44363__$1);
var G__45149 = c__4679__auto__;
var G__45150 = cljs.core.count(c__4679__auto__);
var G__45151 = (0);
seq__44363 = G__45148;
chunk__44364 = G__45149;
count__44365 = G__45150;
i__44366 = G__45151;
continue;
} else {
var vec__44389 = cljs.core.first(seq__44363__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45152 = cljs.core.next(seq__44363__$1);
var G__45153 = null;
var G__45154 = (0);
var G__45155 = (0);
seq__44363 = G__45152;
chunk__44364 = G__45153;
count__44365 = G__45154;
i__44366 = G__45155;
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
var seq__44396 = cljs.core.seq(styles);
var chunk__44397 = null;
var count__44398 = (0);
var i__44399 = (0);
while(true){
if((i__44399 < count__44398)){
var vec__44414 = chunk__44397.cljs$core$IIndexed$_nth$arity$2(null,i__44399);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45156 = seq__44396;
var G__45157 = chunk__44397;
var G__45158 = count__44398;
var G__45159 = (i__44399 + (1));
seq__44396 = G__45156;
chunk__44397 = G__45157;
count__44398 = G__45158;
i__44399 = G__45159;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44396);
if(temp__5753__auto__){
var seq__44396__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44396__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44396__$1);
var G__45160 = cljs.core.chunk_rest(seq__44396__$1);
var G__45161 = c__4679__auto__;
var G__45162 = cljs.core.count(c__4679__auto__);
var G__45163 = (0);
seq__44396 = G__45160;
chunk__44397 = G__45161;
count__44398 = G__45162;
i__44399 = G__45163;
continue;
} else {
var vec__44417 = cljs.core.first(seq__44396__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44417,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45164 = cljs.core.next(seq__44396__$1);
var G__45165 = null;
var G__45166 = (0);
var G__45167 = (0);
seq__44396 = G__45164;
chunk__44397 = G__45165;
count__44398 = G__45166;
i__44399 = G__45167;
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
var G__44420_45168 = key;
var G__44420_45169__$1 = (((G__44420_45168 instanceof cljs.core.Keyword))?G__44420_45168.fqn:null);
switch (G__44420_45169__$1) {
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
var ks_45175 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_45175,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_45175,"aria-");
}
})())){
el.setAttribute(ks_45175,value);
} else {
(el[ks_45175] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44432){
var map__44433 = p__44432;
var map__44433__$1 = cljs.core.__destructure_map(map__44433);
var props = map__44433__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44436 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44442 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44442,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44442;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44449 = arguments.length;
switch (G__44449) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44460){
var vec__44462 = p__44460;
var seq__44463 = cljs.core.seq(vec__44462);
var first__44464 = cljs.core.first(seq__44463);
var seq__44463__$1 = cljs.core.next(seq__44463);
var nn = first__44464;
var first__44464__$1 = cljs.core.first(seq__44463__$1);
var seq__44463__$2 = cljs.core.next(seq__44463__$1);
var np = first__44464__$1;
var nc = seq__44463__$2;
var node = vec__44462;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44468 = nn;
var G__44469 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44468,G__44469) : create_fn.call(null,G__44468,G__44469));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44470 = nn;
var G__44471 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44470,G__44471) : create_fn.call(null,G__44470,G__44471));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44478 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44478,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44478,(1),null);
var seq__44483_45179 = cljs.core.seq(node_children);
var chunk__44484_45180 = null;
var count__44485_45181 = (0);
var i__44486_45182 = (0);
while(true){
if((i__44486_45182 < count__44485_45181)){
var child_struct_45183 = chunk__44484_45180.cljs$core$IIndexed$_nth$arity$2(null,i__44486_45182);
var children_45184 = shadow.dom.dom_node(child_struct_45183);
if(cljs.core.seq_QMARK_(children_45184)){
var seq__44506_45185 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45184));
var chunk__44508_45186 = null;
var count__44509_45187 = (0);
var i__44510_45188 = (0);
while(true){
if((i__44510_45188 < count__44509_45187)){
var child_45189 = chunk__44508_45186.cljs$core$IIndexed$_nth$arity$2(null,i__44510_45188);
if(cljs.core.truth_(child_45189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45189);


var G__45190 = seq__44506_45185;
var G__45191 = chunk__44508_45186;
var G__45192 = count__44509_45187;
var G__45193 = (i__44510_45188 + (1));
seq__44506_45185 = G__45190;
chunk__44508_45186 = G__45191;
count__44509_45187 = G__45192;
i__44510_45188 = G__45193;
continue;
} else {
var G__45194 = seq__44506_45185;
var G__45195 = chunk__44508_45186;
var G__45196 = count__44509_45187;
var G__45197 = (i__44510_45188 + (1));
seq__44506_45185 = G__45194;
chunk__44508_45186 = G__45195;
count__44509_45187 = G__45196;
i__44510_45188 = G__45197;
continue;
}
} else {
var temp__5753__auto___45198 = cljs.core.seq(seq__44506_45185);
if(temp__5753__auto___45198){
var seq__44506_45199__$1 = temp__5753__auto___45198;
if(cljs.core.chunked_seq_QMARK_(seq__44506_45199__$1)){
var c__4679__auto___45200 = cljs.core.chunk_first(seq__44506_45199__$1);
var G__45201 = cljs.core.chunk_rest(seq__44506_45199__$1);
var G__45202 = c__4679__auto___45200;
var G__45203 = cljs.core.count(c__4679__auto___45200);
var G__45204 = (0);
seq__44506_45185 = G__45201;
chunk__44508_45186 = G__45202;
count__44509_45187 = G__45203;
i__44510_45188 = G__45204;
continue;
} else {
var child_45205 = cljs.core.first(seq__44506_45199__$1);
if(cljs.core.truth_(child_45205)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45205);


var G__45206 = cljs.core.next(seq__44506_45199__$1);
var G__45207 = null;
var G__45208 = (0);
var G__45209 = (0);
seq__44506_45185 = G__45206;
chunk__44508_45186 = G__45207;
count__44509_45187 = G__45208;
i__44510_45188 = G__45209;
continue;
} else {
var G__45210 = cljs.core.next(seq__44506_45199__$1);
var G__45211 = null;
var G__45212 = (0);
var G__45213 = (0);
seq__44506_45185 = G__45210;
chunk__44508_45186 = G__45211;
count__44509_45187 = G__45212;
i__44510_45188 = G__45213;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45184);
}


var G__45214 = seq__44483_45179;
var G__45215 = chunk__44484_45180;
var G__45216 = count__44485_45181;
var G__45217 = (i__44486_45182 + (1));
seq__44483_45179 = G__45214;
chunk__44484_45180 = G__45215;
count__44485_45181 = G__45216;
i__44486_45182 = G__45217;
continue;
} else {
var temp__5753__auto___45218 = cljs.core.seq(seq__44483_45179);
if(temp__5753__auto___45218){
var seq__44483_45219__$1 = temp__5753__auto___45218;
if(cljs.core.chunked_seq_QMARK_(seq__44483_45219__$1)){
var c__4679__auto___45220 = cljs.core.chunk_first(seq__44483_45219__$1);
var G__45221 = cljs.core.chunk_rest(seq__44483_45219__$1);
var G__45222 = c__4679__auto___45220;
var G__45223 = cljs.core.count(c__4679__auto___45220);
var G__45224 = (0);
seq__44483_45179 = G__45221;
chunk__44484_45180 = G__45222;
count__44485_45181 = G__45223;
i__44486_45182 = G__45224;
continue;
} else {
var child_struct_45225 = cljs.core.first(seq__44483_45219__$1);
var children_45226 = shadow.dom.dom_node(child_struct_45225);
if(cljs.core.seq_QMARK_(children_45226)){
var seq__44512_45227 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45226));
var chunk__44514_45228 = null;
var count__44515_45229 = (0);
var i__44516_45230 = (0);
while(true){
if((i__44516_45230 < count__44515_45229)){
var child_45231 = chunk__44514_45228.cljs$core$IIndexed$_nth$arity$2(null,i__44516_45230);
if(cljs.core.truth_(child_45231)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45231);


var G__45232 = seq__44512_45227;
var G__45233 = chunk__44514_45228;
var G__45234 = count__44515_45229;
var G__45235 = (i__44516_45230 + (1));
seq__44512_45227 = G__45232;
chunk__44514_45228 = G__45233;
count__44515_45229 = G__45234;
i__44516_45230 = G__45235;
continue;
} else {
var G__45236 = seq__44512_45227;
var G__45237 = chunk__44514_45228;
var G__45238 = count__44515_45229;
var G__45239 = (i__44516_45230 + (1));
seq__44512_45227 = G__45236;
chunk__44514_45228 = G__45237;
count__44515_45229 = G__45238;
i__44516_45230 = G__45239;
continue;
}
} else {
var temp__5753__auto___45240__$1 = cljs.core.seq(seq__44512_45227);
if(temp__5753__auto___45240__$1){
var seq__44512_45241__$1 = temp__5753__auto___45240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44512_45241__$1)){
var c__4679__auto___45242 = cljs.core.chunk_first(seq__44512_45241__$1);
var G__45243 = cljs.core.chunk_rest(seq__44512_45241__$1);
var G__45244 = c__4679__auto___45242;
var G__45245 = cljs.core.count(c__4679__auto___45242);
var G__45246 = (0);
seq__44512_45227 = G__45243;
chunk__44514_45228 = G__45244;
count__44515_45229 = G__45245;
i__44516_45230 = G__45246;
continue;
} else {
var child_45247 = cljs.core.first(seq__44512_45241__$1);
if(cljs.core.truth_(child_45247)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45247);


var G__45248 = cljs.core.next(seq__44512_45241__$1);
var G__45249 = null;
var G__45250 = (0);
var G__45251 = (0);
seq__44512_45227 = G__45248;
chunk__44514_45228 = G__45249;
count__44515_45229 = G__45250;
i__44516_45230 = G__45251;
continue;
} else {
var G__45252 = cljs.core.next(seq__44512_45241__$1);
var G__45253 = null;
var G__45254 = (0);
var G__45255 = (0);
seq__44512_45227 = G__45252;
chunk__44514_45228 = G__45253;
count__44515_45229 = G__45254;
i__44516_45230 = G__45255;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45226);
}


var G__45256 = cljs.core.next(seq__44483_45219__$1);
var G__45257 = null;
var G__45258 = (0);
var G__45259 = (0);
seq__44483_45179 = G__45256;
chunk__44484_45180 = G__45257;
count__44485_45181 = G__45258;
i__44486_45182 = G__45259;
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
var seq__44530 = cljs.core.seq(node);
var chunk__44531 = null;
var count__44532 = (0);
var i__44533 = (0);
while(true){
if((i__44533 < count__44532)){
var n = chunk__44531.cljs$core$IIndexed$_nth$arity$2(null,i__44533);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45260 = seq__44530;
var G__45261 = chunk__44531;
var G__45262 = count__44532;
var G__45263 = (i__44533 + (1));
seq__44530 = G__45260;
chunk__44531 = G__45261;
count__44532 = G__45262;
i__44533 = G__45263;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44530);
if(temp__5753__auto__){
var seq__44530__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44530__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44530__$1);
var G__45264 = cljs.core.chunk_rest(seq__44530__$1);
var G__45265 = c__4679__auto__;
var G__45266 = cljs.core.count(c__4679__auto__);
var G__45267 = (0);
seq__44530 = G__45264;
chunk__44531 = G__45265;
count__44532 = G__45266;
i__44533 = G__45267;
continue;
} else {
var n = cljs.core.first(seq__44530__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45268 = cljs.core.next(seq__44530__$1);
var G__45269 = null;
var G__45270 = (0);
var G__45271 = (0);
seq__44530 = G__45268;
chunk__44531 = G__45269;
count__44532 = G__45270;
i__44533 = G__45271;
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
var G__44539 = arguments.length;
switch (G__44539) {
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
var G__44541 = arguments.length;
switch (G__44541) {
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
var G__44546 = arguments.length;
switch (G__44546) {
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
var len__4864__auto___45280 = arguments.length;
var i__4865__auto___45281 = (0);
while(true){
if((i__4865__auto___45281 < len__4864__auto___45280)){
args__4870__auto__.push((arguments[i__4865__auto___45281]));

var G__45282 = (i__4865__auto___45281 + (1));
i__4865__auto___45281 = G__45282;
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
var seq__44567_45283 = cljs.core.seq(nodes);
var chunk__44568_45284 = null;
var count__44569_45285 = (0);
var i__44570_45286 = (0);
while(true){
if((i__44570_45286 < count__44569_45285)){
var node_45287 = chunk__44568_45284.cljs$core$IIndexed$_nth$arity$2(null,i__44570_45286);
fragment.appendChild(shadow.dom._to_dom(node_45287));


var G__45288 = seq__44567_45283;
var G__45289 = chunk__44568_45284;
var G__45290 = count__44569_45285;
var G__45291 = (i__44570_45286 + (1));
seq__44567_45283 = G__45288;
chunk__44568_45284 = G__45289;
count__44569_45285 = G__45290;
i__44570_45286 = G__45291;
continue;
} else {
var temp__5753__auto___45292 = cljs.core.seq(seq__44567_45283);
if(temp__5753__auto___45292){
var seq__44567_45294__$1 = temp__5753__auto___45292;
if(cljs.core.chunked_seq_QMARK_(seq__44567_45294__$1)){
var c__4679__auto___45295 = cljs.core.chunk_first(seq__44567_45294__$1);
var G__45296 = cljs.core.chunk_rest(seq__44567_45294__$1);
var G__45297 = c__4679__auto___45295;
var G__45298 = cljs.core.count(c__4679__auto___45295);
var G__45299 = (0);
seq__44567_45283 = G__45296;
chunk__44568_45284 = G__45297;
count__44569_45285 = G__45298;
i__44570_45286 = G__45299;
continue;
} else {
var node_45300 = cljs.core.first(seq__44567_45294__$1);
fragment.appendChild(shadow.dom._to_dom(node_45300));


var G__45301 = cljs.core.next(seq__44567_45294__$1);
var G__45302 = null;
var G__45303 = (0);
var G__45304 = (0);
seq__44567_45283 = G__45301;
chunk__44568_45284 = G__45302;
count__44569_45285 = G__45303;
i__44570_45286 = G__45304;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44566){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44566));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44571_45305 = cljs.core.seq(scripts);
var chunk__44572_45306 = null;
var count__44573_45307 = (0);
var i__44574_45308 = (0);
while(true){
if((i__44574_45308 < count__44573_45307)){
var vec__44581_45309 = chunk__44572_45306.cljs$core$IIndexed$_nth$arity$2(null,i__44574_45308);
var script_tag_45310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44581_45309,(0),null);
var script_body_45311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44581_45309,(1),null);
eval(script_body_45311);


var G__45312 = seq__44571_45305;
var G__45313 = chunk__44572_45306;
var G__45314 = count__44573_45307;
var G__45315 = (i__44574_45308 + (1));
seq__44571_45305 = G__45312;
chunk__44572_45306 = G__45313;
count__44573_45307 = G__45314;
i__44574_45308 = G__45315;
continue;
} else {
var temp__5753__auto___45317 = cljs.core.seq(seq__44571_45305);
if(temp__5753__auto___45317){
var seq__44571_45318__$1 = temp__5753__auto___45317;
if(cljs.core.chunked_seq_QMARK_(seq__44571_45318__$1)){
var c__4679__auto___45319 = cljs.core.chunk_first(seq__44571_45318__$1);
var G__45320 = cljs.core.chunk_rest(seq__44571_45318__$1);
var G__45321 = c__4679__auto___45319;
var G__45322 = cljs.core.count(c__4679__auto___45319);
var G__45323 = (0);
seq__44571_45305 = G__45320;
chunk__44572_45306 = G__45321;
count__44573_45307 = G__45322;
i__44574_45308 = G__45323;
continue;
} else {
var vec__44584_45324 = cljs.core.first(seq__44571_45318__$1);
var script_tag_45325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44584_45324,(0),null);
var script_body_45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44584_45324,(1),null);
eval(script_body_45326);


var G__45327 = cljs.core.next(seq__44571_45318__$1);
var G__45328 = null;
var G__45329 = (0);
var G__45330 = (0);
seq__44571_45305 = G__45327;
chunk__44572_45306 = G__45328;
count__44573_45307 = G__45329;
i__44574_45308 = G__45330;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44587){
var vec__44588 = p__44587;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588,(1),null);
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
var G__44612 = arguments.length;
switch (G__44612) {
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
var seq__44623 = cljs.core.seq(style_keys);
var chunk__44624 = null;
var count__44625 = (0);
var i__44626 = (0);
while(true){
if((i__44626 < count__44625)){
var it = chunk__44624.cljs$core$IIndexed$_nth$arity$2(null,i__44626);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45347 = seq__44623;
var G__45348 = chunk__44624;
var G__45349 = count__44625;
var G__45350 = (i__44626 + (1));
seq__44623 = G__45347;
chunk__44624 = G__45348;
count__44625 = G__45349;
i__44626 = G__45350;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44623);
if(temp__5753__auto__){
var seq__44623__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44623__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44623__$1);
var G__45351 = cljs.core.chunk_rest(seq__44623__$1);
var G__45352 = c__4679__auto__;
var G__45353 = cljs.core.count(c__4679__auto__);
var G__45354 = (0);
seq__44623 = G__45351;
chunk__44624 = G__45352;
count__44625 = G__45353;
i__44626 = G__45354;
continue;
} else {
var it = cljs.core.first(seq__44623__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45355 = cljs.core.next(seq__44623__$1);
var G__45356 = null;
var G__45357 = (0);
var G__45358 = (0);
seq__44623 = G__45355;
chunk__44624 = G__45356;
count__44625 = G__45357;
i__44626 = G__45358;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k44640,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__44648 = k44640;
var G__44648__$1 = (((G__44648 instanceof cljs.core.Keyword))?G__44648.fqn:null);
switch (G__44648__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44640,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__44650){
var vec__44651 = p__44650;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44651,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44651,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44639){
var self__ = this;
var G__44639__$1 = this;
return (new cljs.core.RecordIter((0),G__44639__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44641,other44642){
var self__ = this;
var this44641__$1 = this;
return (((!((other44642 == null)))) && ((((this44641__$1.constructor === other44642.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44641__$1.x,other44642.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44641__$1.y,other44642.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44641__$1.__extmap,other44642.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k44640){
var self__ = this;
var this__4509__auto____$1 = this;
var G__44671 = k44640;
var G__44671__$1 = (((G__44671 instanceof cljs.core.Keyword))?G__44671.fqn:null);
switch (G__44671__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44640);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__44639){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__44674 = cljs.core.keyword_identical_QMARK_;
var expr__44675 = k__4511__auto__;
if(cljs.core.truth_((pred__44674.cljs$core$IFn$_invoke$arity$2 ? pred__44674.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44675) : pred__44674.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44675)))){
return (new shadow.dom.Coordinate(G__44639,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44674.cljs$core$IFn$_invoke$arity$2 ? pred__44674.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44675) : pred__44674.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44675)))){
return (new shadow.dom.Coordinate(self__.x,G__44639,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__44639),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__44639){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44639,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44644){
var extmap__4542__auto__ = (function (){var G__44696 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44644,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44644)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44696);
} else {
return G__44696;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44644),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44644),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k44705,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__44719 = k44705;
var G__44719__$1 = (((G__44719 instanceof cljs.core.Keyword))?G__44719.fqn:null);
switch (G__44719__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44705,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__44722){
var vec__44724 = p__44722;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44724,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44724,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44704){
var self__ = this;
var G__44704__$1 = this;
return (new cljs.core.RecordIter((0),G__44704__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44706,other44707){
var self__ = this;
var this44706__$1 = this;
return (((!((other44707 == null)))) && ((((this44706__$1.constructor === other44707.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44706__$1.w,other44707.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44706__$1.h,other44707.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44706__$1.__extmap,other44707.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k44705){
var self__ = this;
var this__4509__auto____$1 = this;
var G__44751 = k44705;
var G__44751__$1 = (((G__44751 instanceof cljs.core.Keyword))?G__44751.fqn:null);
switch (G__44751__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44705);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__44704){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__44754 = cljs.core.keyword_identical_QMARK_;
var expr__44755 = k__4511__auto__;
if(cljs.core.truth_((pred__44754.cljs$core$IFn$_invoke$arity$2 ? pred__44754.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44755) : pred__44754.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44755)))){
return (new shadow.dom.Size(G__44704,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44754.cljs$core$IFn$_invoke$arity$2 ? pred__44754.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44755) : pred__44754.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44755)))){
return (new shadow.dom.Size(self__.w,G__44704,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__44704),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__44704){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44704,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44710){
var extmap__4542__auto__ = (function (){var G__44771 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44710,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44710)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44771);
} else {
return G__44771;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44710),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44710),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__45384 = (i + (1));
var G__45385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45384;
ret = G__45385;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44782){
var vec__44783 = p__44782;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44783,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44788 = arguments.length;
switch (G__44788) {
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
var G__45397 = ps;
var G__45398 = (i + (1));
el__$1 = G__45397;
i = G__45398;
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
var vec__44815 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44815,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44815,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44815,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44819_45418 = cljs.core.seq(props);
var chunk__44820_45419 = null;
var count__44821_45420 = (0);
var i__44822_45421 = (0);
while(true){
if((i__44822_45421 < count__44821_45420)){
var vec__44843_45426 = chunk__44820_45419.cljs$core$IIndexed$_nth$arity$2(null,i__44822_45421);
var k_45427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843_45426,(0),null);
var v_45428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843_45426,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_45427);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45427),v_45428);


var G__45429 = seq__44819_45418;
var G__45430 = chunk__44820_45419;
var G__45431 = count__44821_45420;
var G__45432 = (i__44822_45421 + (1));
seq__44819_45418 = G__45429;
chunk__44820_45419 = G__45430;
count__44821_45420 = G__45431;
i__44822_45421 = G__45432;
continue;
} else {
var temp__5753__auto___45433 = cljs.core.seq(seq__44819_45418);
if(temp__5753__auto___45433){
var seq__44819_45434__$1 = temp__5753__auto___45433;
if(cljs.core.chunked_seq_QMARK_(seq__44819_45434__$1)){
var c__4679__auto___45435 = cljs.core.chunk_first(seq__44819_45434__$1);
var G__45436 = cljs.core.chunk_rest(seq__44819_45434__$1);
var G__45437 = c__4679__auto___45435;
var G__45438 = cljs.core.count(c__4679__auto___45435);
var G__45439 = (0);
seq__44819_45418 = G__45436;
chunk__44820_45419 = G__45437;
count__44821_45420 = G__45438;
i__44822_45421 = G__45439;
continue;
} else {
var vec__44851_45440 = cljs.core.first(seq__44819_45434__$1);
var k_45441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44851_45440,(0),null);
var v_45442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44851_45440,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_45441);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45441),v_45442);


var G__45443 = cljs.core.next(seq__44819_45434__$1);
var G__45444 = null;
var G__45445 = (0);
var G__45446 = (0);
seq__44819_45418 = G__45443;
chunk__44820_45419 = G__45444;
count__44821_45420 = G__45445;
i__44822_45421 = G__45446;
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
var vec__44860 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44860,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44860,(1),null);
var seq__44864_45452 = cljs.core.seq(node_children);
var chunk__44866_45453 = null;
var count__44867_45454 = (0);
var i__44868_45455 = (0);
while(true){
if((i__44868_45455 < count__44867_45454)){
var child_struct_45456 = chunk__44866_45453.cljs$core$IIndexed$_nth$arity$2(null,i__44868_45455);
if((!((child_struct_45456 == null)))){
if(typeof child_struct_45456 === 'string'){
var text_45457 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45457),child_struct_45456].join(''));
} else {
var children_45458 = shadow.dom.svg_node(child_struct_45456);
if(cljs.core.seq_QMARK_(children_45458)){
var seq__44914_45459 = cljs.core.seq(children_45458);
var chunk__44916_45460 = null;
var count__44917_45461 = (0);
var i__44918_45462 = (0);
while(true){
if((i__44918_45462 < count__44917_45461)){
var child_45463 = chunk__44916_45460.cljs$core$IIndexed$_nth$arity$2(null,i__44918_45462);
if(cljs.core.truth_(child_45463)){
node.appendChild(child_45463);


var G__45464 = seq__44914_45459;
var G__45465 = chunk__44916_45460;
var G__45466 = count__44917_45461;
var G__45467 = (i__44918_45462 + (1));
seq__44914_45459 = G__45464;
chunk__44916_45460 = G__45465;
count__44917_45461 = G__45466;
i__44918_45462 = G__45467;
continue;
} else {
var G__45468 = seq__44914_45459;
var G__45469 = chunk__44916_45460;
var G__45470 = count__44917_45461;
var G__45471 = (i__44918_45462 + (1));
seq__44914_45459 = G__45468;
chunk__44916_45460 = G__45469;
count__44917_45461 = G__45470;
i__44918_45462 = G__45471;
continue;
}
} else {
var temp__5753__auto___45472 = cljs.core.seq(seq__44914_45459);
if(temp__5753__auto___45472){
var seq__44914_45473__$1 = temp__5753__auto___45472;
if(cljs.core.chunked_seq_QMARK_(seq__44914_45473__$1)){
var c__4679__auto___45474 = cljs.core.chunk_first(seq__44914_45473__$1);
var G__45475 = cljs.core.chunk_rest(seq__44914_45473__$1);
var G__45476 = c__4679__auto___45474;
var G__45477 = cljs.core.count(c__4679__auto___45474);
var G__45478 = (0);
seq__44914_45459 = G__45475;
chunk__44916_45460 = G__45476;
count__44917_45461 = G__45477;
i__44918_45462 = G__45478;
continue;
} else {
var child_45479 = cljs.core.first(seq__44914_45473__$1);
if(cljs.core.truth_(child_45479)){
node.appendChild(child_45479);


var G__45480 = cljs.core.next(seq__44914_45473__$1);
var G__45481 = null;
var G__45482 = (0);
var G__45483 = (0);
seq__44914_45459 = G__45480;
chunk__44916_45460 = G__45481;
count__44917_45461 = G__45482;
i__44918_45462 = G__45483;
continue;
} else {
var G__45484 = cljs.core.next(seq__44914_45473__$1);
var G__45485 = null;
var G__45486 = (0);
var G__45487 = (0);
seq__44914_45459 = G__45484;
chunk__44916_45460 = G__45485;
count__44917_45461 = G__45486;
i__44918_45462 = G__45487;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45458);
}
}


var G__45488 = seq__44864_45452;
var G__45489 = chunk__44866_45453;
var G__45490 = count__44867_45454;
var G__45491 = (i__44868_45455 + (1));
seq__44864_45452 = G__45488;
chunk__44866_45453 = G__45489;
count__44867_45454 = G__45490;
i__44868_45455 = G__45491;
continue;
} else {
var G__45492 = seq__44864_45452;
var G__45493 = chunk__44866_45453;
var G__45494 = count__44867_45454;
var G__45495 = (i__44868_45455 + (1));
seq__44864_45452 = G__45492;
chunk__44866_45453 = G__45493;
count__44867_45454 = G__45494;
i__44868_45455 = G__45495;
continue;
}
} else {
var temp__5753__auto___45496 = cljs.core.seq(seq__44864_45452);
if(temp__5753__auto___45496){
var seq__44864_45497__$1 = temp__5753__auto___45496;
if(cljs.core.chunked_seq_QMARK_(seq__44864_45497__$1)){
var c__4679__auto___45498 = cljs.core.chunk_first(seq__44864_45497__$1);
var G__45499 = cljs.core.chunk_rest(seq__44864_45497__$1);
var G__45500 = c__4679__auto___45498;
var G__45501 = cljs.core.count(c__4679__auto___45498);
var G__45502 = (0);
seq__44864_45452 = G__45499;
chunk__44866_45453 = G__45500;
count__44867_45454 = G__45501;
i__44868_45455 = G__45502;
continue;
} else {
var child_struct_45503 = cljs.core.first(seq__44864_45497__$1);
if((!((child_struct_45503 == null)))){
if(typeof child_struct_45503 === 'string'){
var text_45504 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45504),child_struct_45503].join(''));
} else {
var children_45505 = shadow.dom.svg_node(child_struct_45503);
if(cljs.core.seq_QMARK_(children_45505)){
var seq__44933_45509 = cljs.core.seq(children_45505);
var chunk__44935_45510 = null;
var count__44936_45511 = (0);
var i__44937_45512 = (0);
while(true){
if((i__44937_45512 < count__44936_45511)){
var child_45513 = chunk__44935_45510.cljs$core$IIndexed$_nth$arity$2(null,i__44937_45512);
if(cljs.core.truth_(child_45513)){
node.appendChild(child_45513);


var G__45514 = seq__44933_45509;
var G__45515 = chunk__44935_45510;
var G__45516 = count__44936_45511;
var G__45517 = (i__44937_45512 + (1));
seq__44933_45509 = G__45514;
chunk__44935_45510 = G__45515;
count__44936_45511 = G__45516;
i__44937_45512 = G__45517;
continue;
} else {
var G__45518 = seq__44933_45509;
var G__45519 = chunk__44935_45510;
var G__45520 = count__44936_45511;
var G__45521 = (i__44937_45512 + (1));
seq__44933_45509 = G__45518;
chunk__44935_45510 = G__45519;
count__44936_45511 = G__45520;
i__44937_45512 = G__45521;
continue;
}
} else {
var temp__5753__auto___45522__$1 = cljs.core.seq(seq__44933_45509);
if(temp__5753__auto___45522__$1){
var seq__44933_45523__$1 = temp__5753__auto___45522__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44933_45523__$1)){
var c__4679__auto___45525 = cljs.core.chunk_first(seq__44933_45523__$1);
var G__45526 = cljs.core.chunk_rest(seq__44933_45523__$1);
var G__45527 = c__4679__auto___45525;
var G__45528 = cljs.core.count(c__4679__auto___45525);
var G__45529 = (0);
seq__44933_45509 = G__45526;
chunk__44935_45510 = G__45527;
count__44936_45511 = G__45528;
i__44937_45512 = G__45529;
continue;
} else {
var child_45530 = cljs.core.first(seq__44933_45523__$1);
if(cljs.core.truth_(child_45530)){
node.appendChild(child_45530);


var G__45531 = cljs.core.next(seq__44933_45523__$1);
var G__45532 = null;
var G__45533 = (0);
var G__45534 = (0);
seq__44933_45509 = G__45531;
chunk__44935_45510 = G__45532;
count__44936_45511 = G__45533;
i__44937_45512 = G__45534;
continue;
} else {
var G__45535 = cljs.core.next(seq__44933_45523__$1);
var G__45536 = null;
var G__45537 = (0);
var G__45538 = (0);
seq__44933_45509 = G__45535;
chunk__44935_45510 = G__45536;
count__44936_45511 = G__45537;
i__44937_45512 = G__45538;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45505);
}
}


var G__45540 = cljs.core.next(seq__44864_45497__$1);
var G__45541 = null;
var G__45542 = (0);
var G__45543 = (0);
seq__44864_45452 = G__45540;
chunk__44866_45453 = G__45541;
count__44867_45454 = G__45542;
i__44868_45455 = G__45543;
continue;
} else {
var G__45544 = cljs.core.next(seq__44864_45497__$1);
var G__45545 = null;
var G__45546 = (0);
var G__45547 = (0);
seq__44864_45452 = G__45544;
chunk__44866_45453 = G__45545;
count__44867_45454 = G__45546;
i__44868_45455 = G__45547;
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
var len__4864__auto___45564 = arguments.length;
var i__4865__auto___45569 = (0);
while(true){
if((i__4865__auto___45569 < len__4864__auto___45564)){
args__4870__auto__.push((arguments[i__4865__auto___45569]));

var G__45570 = (i__4865__auto___45569 + (1));
i__4865__auto___45569 = G__45570;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44955){
var G__44956 = cljs.core.first(seq44955);
var seq44955__$1 = cljs.core.next(seq44955);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44956,seq44955__$1);
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
var G__44970 = arguments.length;
switch (G__44970) {
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
var c__41753__auto___45627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41754__auto__ = (function (){var switch__41538__auto__ = (function (state_44997){
var state_val_44998 = (state_44997[(1)]);
if((state_val_44998 === (1))){
var state_44997__$1 = state_44997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44997__$1,(2),once_or_cleanup);
} else {
if((state_val_44998 === (2))){
var inst_44994 = (state_44997[(2)]);
var inst_44995 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_44997__$1 = (function (){var statearr_45010 = state_44997;
(statearr_45010[(7)] = inst_44994);

return statearr_45010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44997__$1,inst_44995);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41539__auto__ = null;
var shadow$dom$state_machine__41539__auto____0 = (function (){
var statearr_45025 = [null,null,null,null,null,null,null,null];
(statearr_45025[(0)] = shadow$dom$state_machine__41539__auto__);

(statearr_45025[(1)] = (1));

return statearr_45025;
});
var shadow$dom$state_machine__41539__auto____1 = (function (state_44997){
while(true){
var ret_value__41540__auto__ = (function (){try{while(true){
var result__41541__auto__ = switch__41538__auto__(state_44997);
if(cljs.core.keyword_identical_QMARK_(result__41541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41541__auto__;
}
break;
}
}catch (e45030){var ex__41542__auto__ = e45030;
var statearr_45035_45628 = state_44997;
(statearr_45035_45628[(2)] = ex__41542__auto__);


if(cljs.core.seq((state_44997[(4)]))){
var statearr_45043_45629 = state_44997;
(statearr_45043_45629[(1)] = cljs.core.first((state_44997[(4)])));

} else {
throw ex__41542__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45630 = state_44997;
state_44997 = G__45630;
continue;
} else {
return ret_value__41540__auto__;
}
break;
}
});
shadow$dom$state_machine__41539__auto__ = function(state_44997){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41539__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41539__auto____1.call(this,state_44997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41539__auto____0;
shadow$dom$state_machine__41539__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41539__auto____1;
return shadow$dom$state_machine__41539__auto__;
})()
})();
var state__41755__auto__ = (function (){var statearr_45061 = f__41754__auto__();
(statearr_45061[(6)] = c__41753__auto___45627);

return statearr_45061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41755__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
