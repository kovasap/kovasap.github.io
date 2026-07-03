goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37271 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_37271(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37273 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_37273(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36122 = coll;
var G__36123 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36122,G__36123) : shadow.dom.lazy_native_coll_seq.call(null,G__36122,G__36123));
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
var G__36203 = arguments.length;
switch (G__36203) {
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
var G__36209 = arguments.length;
switch (G__36209) {
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
var G__36223 = arguments.length;
switch (G__36223) {
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
var G__36236 = arguments.length;
switch (G__36236) {
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
var G__36261 = arguments.length;
switch (G__36261) {
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
var G__36311 = arguments.length;
switch (G__36311) {
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
}catch (e36327){if((e36327 instanceof Object)){
var e = e36327;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36327;

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
var seq__36355 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36356 = null;
var count__36357 = (0);
var i__36358 = (0);
while(true){
if((i__36358 < count__36357)){
var el = chunk__36356.cljs$core$IIndexed$_nth$arity$2(null,i__36358);
var handler_37282__$1 = ((function (seq__36355,chunk__36356,count__36357,i__36358,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36355,chunk__36356,count__36357,i__36358,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37282__$1);


var G__37283 = seq__36355;
var G__37284 = chunk__36356;
var G__37285 = count__36357;
var G__37286 = (i__36358 + (1));
seq__36355 = G__37283;
chunk__36356 = G__37284;
count__36357 = G__37285;
i__36358 = G__37286;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36355);
if(temp__5823__auto__){
var seq__36355__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36355__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36355__$1);
var G__37287 = cljs.core.chunk_rest(seq__36355__$1);
var G__37288 = c__5568__auto__;
var G__37289 = cljs.core.count(c__5568__auto__);
var G__37290 = (0);
seq__36355 = G__37287;
chunk__36356 = G__37288;
count__36357 = G__37289;
i__36358 = G__37290;
continue;
} else {
var el = cljs.core.first(seq__36355__$1);
var handler_37291__$1 = ((function (seq__36355,chunk__36356,count__36357,i__36358,el,seq__36355__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36355,chunk__36356,count__36357,i__36358,el,seq__36355__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37291__$1);


var G__37292 = cljs.core.next(seq__36355__$1);
var G__37293 = null;
var G__37294 = (0);
var G__37295 = (0);
seq__36355 = G__37292;
chunk__36356 = G__37293;
count__36357 = G__37294;
i__36358 = G__37295;
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
var G__36427 = arguments.length;
switch (G__36427) {
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
var seq__36446 = cljs.core.seq(events);
var chunk__36447 = null;
var count__36448 = (0);
var i__36449 = (0);
while(true){
if((i__36449 < count__36448)){
var vec__36466 = chunk__36447.cljs$core$IIndexed$_nth$arity$2(null,i__36449);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36466,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37298 = seq__36446;
var G__37299 = chunk__36447;
var G__37300 = count__36448;
var G__37301 = (i__36449 + (1));
seq__36446 = G__37298;
chunk__36447 = G__37299;
count__36448 = G__37300;
i__36449 = G__37301;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36446);
if(temp__5823__auto__){
var seq__36446__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36446__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36446__$1);
var G__37302 = cljs.core.chunk_rest(seq__36446__$1);
var G__37303 = c__5568__auto__;
var G__37304 = cljs.core.count(c__5568__auto__);
var G__37305 = (0);
seq__36446 = G__37302;
chunk__36447 = G__37303;
count__36448 = G__37304;
i__36449 = G__37305;
continue;
} else {
var vec__36476 = cljs.core.first(seq__36446__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36476,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37310 = cljs.core.next(seq__36446__$1);
var G__37311 = null;
var G__37312 = (0);
var G__37313 = (0);
seq__36446 = G__37310;
chunk__36447 = G__37311;
count__36448 = G__37312;
i__36449 = G__37313;
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
var seq__36487 = cljs.core.seq(styles);
var chunk__36488 = null;
var count__36489 = (0);
var i__36490 = (0);
while(true){
if((i__36490 < count__36489)){
var vec__36515 = chunk__36488.cljs$core$IIndexed$_nth$arity$2(null,i__36490);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36515,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37314 = seq__36487;
var G__37315 = chunk__36488;
var G__37316 = count__36489;
var G__37317 = (i__36490 + (1));
seq__36487 = G__37314;
chunk__36488 = G__37315;
count__36489 = G__37316;
i__36490 = G__37317;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36487);
if(temp__5823__auto__){
var seq__36487__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36487__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36487__$1);
var G__37318 = cljs.core.chunk_rest(seq__36487__$1);
var G__37319 = c__5568__auto__;
var G__37320 = cljs.core.count(c__5568__auto__);
var G__37321 = (0);
seq__36487 = G__37318;
chunk__36488 = G__37319;
count__36489 = G__37320;
i__36490 = G__37321;
continue;
} else {
var vec__36525 = cljs.core.first(seq__36487__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37322 = cljs.core.next(seq__36487__$1);
var G__37323 = null;
var G__37324 = (0);
var G__37325 = (0);
seq__36487 = G__37322;
chunk__36488 = G__37323;
count__36489 = G__37324;
i__36490 = G__37325;
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
var G__36531_37326 = key;
var G__36531_37327__$1 = (((G__36531_37326 instanceof cljs.core.Keyword))?G__36531_37326.fqn:null);
switch (G__36531_37327__$1) {
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
var ks_37329 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37329,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37329,"aria-");
}
})())){
el.setAttribute(ks_37329,value);
} else {
(el[ks_37329] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36559){
var map__36560 = p__36559;
var map__36560__$1 = cljs.core.__destructure_map(map__36560);
var props = map__36560__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36560__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36564 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36569 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36569,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36569;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36573 = arguments.length;
switch (G__36573) {
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
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
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
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36591){
var vec__36593 = p__36591;
var seq__36594 = cljs.core.seq(vec__36593);
var first__36595 = cljs.core.first(seq__36594);
var seq__36594__$1 = cljs.core.next(seq__36594);
var nn = first__36595;
var first__36595__$1 = cljs.core.first(seq__36594__$1);
var seq__36594__$2 = cljs.core.next(seq__36594__$1);
var np = first__36595__$1;
var nc = seq__36594__$2;
var node = vec__36593;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36602 = nn;
var G__36603 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36602,G__36603) : create_fn.call(null,G__36602,G__36603));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36605 = nn;
var G__36606 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36605,G__36606) : create_fn.call(null,G__36605,G__36606));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36612 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612,(1),null);
var seq__36617_37335 = cljs.core.seq(node_children);
var chunk__36618_37336 = null;
var count__36619_37337 = (0);
var i__36620_37338 = (0);
while(true){
if((i__36620_37338 < count__36619_37337)){
var child_struct_37339 = chunk__36618_37336.cljs$core$IIndexed$_nth$arity$2(null,i__36620_37338);
var children_37340 = shadow.dom.dom_node(child_struct_37339);
if(cljs.core.seq_QMARK_(children_37340)){
var seq__36663_37341 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37340));
var chunk__36665_37342 = null;
var count__36666_37343 = (0);
var i__36667_37344 = (0);
while(true){
if((i__36667_37344 < count__36666_37343)){
var child_37345 = chunk__36665_37342.cljs$core$IIndexed$_nth$arity$2(null,i__36667_37344);
if(cljs.core.truth_(child_37345)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37345);


var G__37347 = seq__36663_37341;
var G__37348 = chunk__36665_37342;
var G__37349 = count__36666_37343;
var G__37350 = (i__36667_37344 + (1));
seq__36663_37341 = G__37347;
chunk__36665_37342 = G__37348;
count__36666_37343 = G__37349;
i__36667_37344 = G__37350;
continue;
} else {
var G__37351 = seq__36663_37341;
var G__37352 = chunk__36665_37342;
var G__37353 = count__36666_37343;
var G__37354 = (i__36667_37344 + (1));
seq__36663_37341 = G__37351;
chunk__36665_37342 = G__37352;
count__36666_37343 = G__37353;
i__36667_37344 = G__37354;
continue;
}
} else {
var temp__5823__auto___37356 = cljs.core.seq(seq__36663_37341);
if(temp__5823__auto___37356){
var seq__36663_37357__$1 = temp__5823__auto___37356;
if(cljs.core.chunked_seq_QMARK_(seq__36663_37357__$1)){
var c__5568__auto___37358 = cljs.core.chunk_first(seq__36663_37357__$1);
var G__37359 = cljs.core.chunk_rest(seq__36663_37357__$1);
var G__37360 = c__5568__auto___37358;
var G__37361 = cljs.core.count(c__5568__auto___37358);
var G__37362 = (0);
seq__36663_37341 = G__37359;
chunk__36665_37342 = G__37360;
count__36666_37343 = G__37361;
i__36667_37344 = G__37362;
continue;
} else {
var child_37363 = cljs.core.first(seq__36663_37357__$1);
if(cljs.core.truth_(child_37363)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37363);


var G__37364 = cljs.core.next(seq__36663_37357__$1);
var G__37365 = null;
var G__37366 = (0);
var G__37367 = (0);
seq__36663_37341 = G__37364;
chunk__36665_37342 = G__37365;
count__36666_37343 = G__37366;
i__36667_37344 = G__37367;
continue;
} else {
var G__37368 = cljs.core.next(seq__36663_37357__$1);
var G__37369 = null;
var G__37370 = (0);
var G__37371 = (0);
seq__36663_37341 = G__37368;
chunk__36665_37342 = G__37369;
count__36666_37343 = G__37370;
i__36667_37344 = G__37371;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37340);
}


var G__37372 = seq__36617_37335;
var G__37373 = chunk__36618_37336;
var G__37374 = count__36619_37337;
var G__37375 = (i__36620_37338 + (1));
seq__36617_37335 = G__37372;
chunk__36618_37336 = G__37373;
count__36619_37337 = G__37374;
i__36620_37338 = G__37375;
continue;
} else {
var temp__5823__auto___37376 = cljs.core.seq(seq__36617_37335);
if(temp__5823__auto___37376){
var seq__36617_37377__$1 = temp__5823__auto___37376;
if(cljs.core.chunked_seq_QMARK_(seq__36617_37377__$1)){
var c__5568__auto___37378 = cljs.core.chunk_first(seq__36617_37377__$1);
var G__37379 = cljs.core.chunk_rest(seq__36617_37377__$1);
var G__37380 = c__5568__auto___37378;
var G__37381 = cljs.core.count(c__5568__auto___37378);
var G__37382 = (0);
seq__36617_37335 = G__37379;
chunk__36618_37336 = G__37380;
count__36619_37337 = G__37381;
i__36620_37338 = G__37382;
continue;
} else {
var child_struct_37383 = cljs.core.first(seq__36617_37377__$1);
var children_37384 = shadow.dom.dom_node(child_struct_37383);
if(cljs.core.seq_QMARK_(children_37384)){
var seq__36682_37385 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37384));
var chunk__36684_37386 = null;
var count__36685_37387 = (0);
var i__36686_37388 = (0);
while(true){
if((i__36686_37388 < count__36685_37387)){
var child_37389 = chunk__36684_37386.cljs$core$IIndexed$_nth$arity$2(null,i__36686_37388);
if(cljs.core.truth_(child_37389)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37389);


var G__37390 = seq__36682_37385;
var G__37391 = chunk__36684_37386;
var G__37392 = count__36685_37387;
var G__37393 = (i__36686_37388 + (1));
seq__36682_37385 = G__37390;
chunk__36684_37386 = G__37391;
count__36685_37387 = G__37392;
i__36686_37388 = G__37393;
continue;
} else {
var G__37394 = seq__36682_37385;
var G__37395 = chunk__36684_37386;
var G__37396 = count__36685_37387;
var G__37397 = (i__36686_37388 + (1));
seq__36682_37385 = G__37394;
chunk__36684_37386 = G__37395;
count__36685_37387 = G__37396;
i__36686_37388 = G__37397;
continue;
}
} else {
var temp__5823__auto___37398__$1 = cljs.core.seq(seq__36682_37385);
if(temp__5823__auto___37398__$1){
var seq__36682_37399__$1 = temp__5823__auto___37398__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36682_37399__$1)){
var c__5568__auto___37400 = cljs.core.chunk_first(seq__36682_37399__$1);
var G__37401 = cljs.core.chunk_rest(seq__36682_37399__$1);
var G__37402 = c__5568__auto___37400;
var G__37403 = cljs.core.count(c__5568__auto___37400);
var G__37404 = (0);
seq__36682_37385 = G__37401;
chunk__36684_37386 = G__37402;
count__36685_37387 = G__37403;
i__36686_37388 = G__37404;
continue;
} else {
var child_37405 = cljs.core.first(seq__36682_37399__$1);
if(cljs.core.truth_(child_37405)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37405);


var G__37406 = cljs.core.next(seq__36682_37399__$1);
var G__37407 = null;
var G__37408 = (0);
var G__37409 = (0);
seq__36682_37385 = G__37406;
chunk__36684_37386 = G__37407;
count__36685_37387 = G__37408;
i__36686_37388 = G__37409;
continue;
} else {
var G__37410 = cljs.core.next(seq__36682_37399__$1);
var G__37411 = null;
var G__37412 = (0);
var G__37413 = (0);
seq__36682_37385 = G__37410;
chunk__36684_37386 = G__37411;
count__36685_37387 = G__37412;
i__36686_37388 = G__37413;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37384);
}


var G__37414 = cljs.core.next(seq__36617_37377__$1);
var G__37415 = null;
var G__37416 = (0);
var G__37417 = (0);
seq__36617_37335 = G__37414;
chunk__36618_37336 = G__37415;
count__36619_37337 = G__37416;
i__36620_37338 = G__37417;
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
var seq__36716 = cljs.core.seq(node);
var chunk__36718 = null;
var count__36719 = (0);
var i__36720 = (0);
while(true){
if((i__36720 < count__36719)){
var n = chunk__36718.cljs$core$IIndexed$_nth$arity$2(null,i__36720);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37420 = seq__36716;
var G__37421 = chunk__36718;
var G__37422 = count__36719;
var G__37423 = (i__36720 + (1));
seq__36716 = G__37420;
chunk__36718 = G__37421;
count__36719 = G__37422;
i__36720 = G__37423;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36716);
if(temp__5823__auto__){
var seq__36716__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36716__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36716__$1);
var G__37424 = cljs.core.chunk_rest(seq__36716__$1);
var G__37425 = c__5568__auto__;
var G__37426 = cljs.core.count(c__5568__auto__);
var G__37427 = (0);
seq__36716 = G__37424;
chunk__36718 = G__37425;
count__36719 = G__37426;
i__36720 = G__37427;
continue;
} else {
var n = cljs.core.first(seq__36716__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37428 = cljs.core.next(seq__36716__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__36716 = G__37428;
chunk__36718 = G__37429;
count__36719 = G__37430;
i__36720 = G__37431;
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
var G__36738 = arguments.length;
switch (G__36738) {
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
var G__36754 = arguments.length;
switch (G__36754) {
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
var G__36764 = arguments.length;
switch (G__36764) {
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
var len__5769__auto___37442 = arguments.length;
var i__5770__auto___37443 = (0);
while(true){
if((i__5770__auto___37443 < len__5769__auto___37442)){
args__5775__auto__.push((arguments[i__5770__auto___37443]));

var G__37444 = (i__5770__auto___37443 + (1));
i__5770__auto___37443 = G__37444;
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
var seq__36774_37445 = cljs.core.seq(nodes);
var chunk__36776_37446 = null;
var count__36777_37447 = (0);
var i__36778_37448 = (0);
while(true){
if((i__36778_37448 < count__36777_37447)){
var node_37449 = chunk__36776_37446.cljs$core$IIndexed$_nth$arity$2(null,i__36778_37448);
fragment.appendChild(shadow.dom._to_dom(node_37449));


var G__37450 = seq__36774_37445;
var G__37451 = chunk__36776_37446;
var G__37452 = count__36777_37447;
var G__37453 = (i__36778_37448 + (1));
seq__36774_37445 = G__37450;
chunk__36776_37446 = G__37451;
count__36777_37447 = G__37452;
i__36778_37448 = G__37453;
continue;
} else {
var temp__5823__auto___37454 = cljs.core.seq(seq__36774_37445);
if(temp__5823__auto___37454){
var seq__36774_37455__$1 = temp__5823__auto___37454;
if(cljs.core.chunked_seq_QMARK_(seq__36774_37455__$1)){
var c__5568__auto___37456 = cljs.core.chunk_first(seq__36774_37455__$1);
var G__37457 = cljs.core.chunk_rest(seq__36774_37455__$1);
var G__37458 = c__5568__auto___37456;
var G__37459 = cljs.core.count(c__5568__auto___37456);
var G__37460 = (0);
seq__36774_37445 = G__37457;
chunk__36776_37446 = G__37458;
count__36777_37447 = G__37459;
i__36778_37448 = G__37460;
continue;
} else {
var node_37461 = cljs.core.first(seq__36774_37455__$1);
fragment.appendChild(shadow.dom._to_dom(node_37461));


var G__37462 = cljs.core.next(seq__36774_37455__$1);
var G__37463 = null;
var G__37464 = (0);
var G__37465 = (0);
seq__36774_37445 = G__37462;
chunk__36776_37446 = G__37463;
count__36777_37447 = G__37464;
i__36778_37448 = G__37465;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36772){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36772));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36795_37466 = cljs.core.seq(scripts);
var chunk__36796_37467 = null;
var count__36797_37468 = (0);
var i__36798_37469 = (0);
while(true){
if((i__36798_37469 < count__36797_37468)){
var vec__36817_37470 = chunk__36796_37467.cljs$core$IIndexed$_nth$arity$2(null,i__36798_37469);
var script_tag_37471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817_37470,(0),null);
var script_body_37472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817_37470,(1),null);
eval(script_body_37472);


var G__37473 = seq__36795_37466;
var G__37474 = chunk__36796_37467;
var G__37475 = count__36797_37468;
var G__37476 = (i__36798_37469 + (1));
seq__36795_37466 = G__37473;
chunk__36796_37467 = G__37474;
count__36797_37468 = G__37475;
i__36798_37469 = G__37476;
continue;
} else {
var temp__5823__auto___37477 = cljs.core.seq(seq__36795_37466);
if(temp__5823__auto___37477){
var seq__36795_37478__$1 = temp__5823__auto___37477;
if(cljs.core.chunked_seq_QMARK_(seq__36795_37478__$1)){
var c__5568__auto___37479 = cljs.core.chunk_first(seq__36795_37478__$1);
var G__37480 = cljs.core.chunk_rest(seq__36795_37478__$1);
var G__37481 = c__5568__auto___37479;
var G__37482 = cljs.core.count(c__5568__auto___37479);
var G__37483 = (0);
seq__36795_37466 = G__37480;
chunk__36796_37467 = G__37481;
count__36797_37468 = G__37482;
i__36798_37469 = G__37483;
continue;
} else {
var vec__36822_37484 = cljs.core.first(seq__36795_37478__$1);
var script_tag_37485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822_37484,(0),null);
var script_body_37486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822_37484,(1),null);
eval(script_body_37486);


var G__37487 = cljs.core.next(seq__36795_37478__$1);
var G__37488 = null;
var G__37489 = (0);
var G__37490 = (0);
seq__36795_37466 = G__37487;
chunk__36796_37467 = G__37488;
count__36797_37468 = G__37489;
i__36798_37469 = G__37490;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36826){
var vec__36827 = p__36826;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36827,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36827,(1),null);
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
var seq__36869 = cljs.core.seq(style_keys);
var chunk__36870 = null;
var count__36871 = (0);
var i__36872 = (0);
while(true){
if((i__36872 < count__36871)){
var it = chunk__36870.cljs$core$IIndexed$_nth$arity$2(null,i__36872);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37498 = seq__36869;
var G__37499 = chunk__36870;
var G__37500 = count__36871;
var G__37501 = (i__36872 + (1));
seq__36869 = G__37498;
chunk__36870 = G__37499;
count__36871 = G__37500;
i__36872 = G__37501;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36869);
if(temp__5823__auto__){
var seq__36869__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36869__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36869__$1);
var G__37503 = cljs.core.chunk_rest(seq__36869__$1);
var G__37504 = c__5568__auto__;
var G__37505 = cljs.core.count(c__5568__auto__);
var G__37506 = (0);
seq__36869 = G__37503;
chunk__36870 = G__37504;
count__36871 = G__37505;
i__36872 = G__37506;
continue;
} else {
var it = cljs.core.first(seq__36869__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37507 = cljs.core.next(seq__36869__$1);
var G__37508 = null;
var G__37509 = (0);
var G__37510 = (0);
seq__36869 = G__37507;
chunk__36870 = G__37508;
count__36871 = G__37509;
i__36872 = G__37510;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36884,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36899 = k36884;
var G__36899__$1 = (((G__36899 instanceof cljs.core.Keyword))?G__36899.fqn:null);
switch (G__36899__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36884,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36904){
var vec__36909 = p__36904;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36909,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36909,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36883){
var self__ = this;
var G__36883__$1 = this;
return (new cljs.core.RecordIter((0),G__36883__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36885,other36886){
var self__ = this;
var this36885__$1 = this;
return (((!((other36886 == null)))) && ((((this36885__$1.constructor === other36886.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36885__$1.x,other36886.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36885__$1.y,other36886.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36885__$1.__extmap,other36886.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36884){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36941 = k36884;
var G__36941__$1 = (((G__36941 instanceof cljs.core.Keyword))?G__36941.fqn:null);
switch (G__36941__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36884);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36883){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36945 = cljs.core.keyword_identical_QMARK_;
var expr__36946 = k__5352__auto__;
if(cljs.core.truth_((pred__36945.cljs$core$IFn$_invoke$arity$2 ? pred__36945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36946) : pred__36945.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36946)))){
return (new shadow.dom.Coordinate(G__36883,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36945.cljs$core$IFn$_invoke$arity$2 ? pred__36945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36946) : pred__36945.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36946)))){
return (new shadow.dom.Coordinate(self__.x,G__36883,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36883),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36883){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36883,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36889){
var extmap__5385__auto__ = (function (){var G__36958 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36889,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36958);
} else {
return G__36958;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36889),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36889),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36964,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36969 = k36964;
var G__36969__$1 = (((G__36969 instanceof cljs.core.Keyword))?G__36969.fqn:null);
switch (G__36969__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36964,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36975){
var vec__36977 = p__36975;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36963){
var self__ = this;
var G__36963__$1 = this;
return (new cljs.core.RecordIter((0),G__36963__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36965,other36966){
var self__ = this;
var this36965__$1 = this;
return (((!((other36966 == null)))) && ((((this36965__$1.constructor === other36966.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36965__$1.w,other36966.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36965__$1.h,other36966.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36965__$1.__extmap,other36966.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36964){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37027 = k36964;
var G__37027__$1 = (((G__37027 instanceof cljs.core.Keyword))?G__37027.fqn:null);
switch (G__37027__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36964);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36963){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37033 = cljs.core.keyword_identical_QMARK_;
var expr__37034 = k__5352__auto__;
if(cljs.core.truth_((pred__37033.cljs$core$IFn$_invoke$arity$2 ? pred__37033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37034) : pred__37033.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37034)))){
return (new shadow.dom.Size(G__36963,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37033.cljs$core$IFn$_invoke$arity$2 ? pred__37033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37034) : pred__37033.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37034)))){
return (new shadow.dom.Size(self__.w,G__36963,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36963),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36963){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36963,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36967){
var extmap__5385__auto__ = (function (){var G__37066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36967,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36967)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37066);
} else {
return G__37066;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36967),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36967),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__37543 = (i + (1));
var G__37544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37543;
ret = G__37544;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37116){
var vec__37117 = p__37116;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37117,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37128 = arguments.length;
switch (G__37128) {
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
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
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
var G__37554 = ps;
var G__37555 = (i + (1));
el__$1 = G__37554;
i = G__37555;
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
var vec__37169 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37172_37556 = cljs.core.seq(props);
var chunk__37173_37557 = null;
var count__37174_37558 = (0);
var i__37175_37559 = (0);
while(true){
if((i__37175_37559 < count__37174_37558)){
var vec__37182_37560 = chunk__37173_37557.cljs$core$IIndexed$_nth$arity$2(null,i__37175_37559);
var k_37561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37182_37560,(0),null);
var v_37562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37182_37560,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_37561);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37561),v_37562);


var G__37563 = seq__37172_37556;
var G__37564 = chunk__37173_37557;
var G__37565 = count__37174_37558;
var G__37566 = (i__37175_37559 + (1));
seq__37172_37556 = G__37563;
chunk__37173_37557 = G__37564;
count__37174_37558 = G__37565;
i__37175_37559 = G__37566;
continue;
} else {
var temp__5823__auto___37567 = cljs.core.seq(seq__37172_37556);
if(temp__5823__auto___37567){
var seq__37172_37568__$1 = temp__5823__auto___37567;
if(cljs.core.chunked_seq_QMARK_(seq__37172_37568__$1)){
var c__5568__auto___37569 = cljs.core.chunk_first(seq__37172_37568__$1);
var G__37570 = cljs.core.chunk_rest(seq__37172_37568__$1);
var G__37571 = c__5568__auto___37569;
var G__37572 = cljs.core.count(c__5568__auto___37569);
var G__37573 = (0);
seq__37172_37556 = G__37570;
chunk__37173_37557 = G__37571;
count__37174_37558 = G__37572;
i__37175_37559 = G__37573;
continue;
} else {
var vec__37185_37574 = cljs.core.first(seq__37172_37568__$1);
var k_37575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37185_37574,(0),null);
var v_37576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37185_37574,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_37575);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37575),v_37576);


var G__37581 = cljs.core.next(seq__37172_37568__$1);
var G__37582 = null;
var G__37583 = (0);
var G__37584 = (0);
seq__37172_37556 = G__37581;
chunk__37173_37557 = G__37582;
count__37174_37558 = G__37583;
i__37175_37559 = G__37584;
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
var vec__37189 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(1),null);
var seq__37192_37586 = cljs.core.seq(node_children);
var chunk__37194_37587 = null;
var count__37195_37588 = (0);
var i__37196_37589 = (0);
while(true){
if((i__37196_37589 < count__37195_37588)){
var child_struct_37590 = chunk__37194_37587.cljs$core$IIndexed$_nth$arity$2(null,i__37196_37589);
if((!((child_struct_37590 == null)))){
if(typeof child_struct_37590 === 'string'){
var text_37591 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37591),child_struct_37590].join(''));
} else {
var children_37592 = shadow.dom.svg_node(child_struct_37590);
if(cljs.core.seq_QMARK_(children_37592)){
var seq__37215_37593 = cljs.core.seq(children_37592);
var chunk__37217_37594 = null;
var count__37218_37595 = (0);
var i__37219_37596 = (0);
while(true){
if((i__37219_37596 < count__37218_37595)){
var child_37597 = chunk__37217_37594.cljs$core$IIndexed$_nth$arity$2(null,i__37219_37596);
if(cljs.core.truth_(child_37597)){
node.appendChild(child_37597);


var G__37598 = seq__37215_37593;
var G__37599 = chunk__37217_37594;
var G__37600 = count__37218_37595;
var G__37601 = (i__37219_37596 + (1));
seq__37215_37593 = G__37598;
chunk__37217_37594 = G__37599;
count__37218_37595 = G__37600;
i__37219_37596 = G__37601;
continue;
} else {
var G__37602 = seq__37215_37593;
var G__37603 = chunk__37217_37594;
var G__37604 = count__37218_37595;
var G__37605 = (i__37219_37596 + (1));
seq__37215_37593 = G__37602;
chunk__37217_37594 = G__37603;
count__37218_37595 = G__37604;
i__37219_37596 = G__37605;
continue;
}
} else {
var temp__5823__auto___37606 = cljs.core.seq(seq__37215_37593);
if(temp__5823__auto___37606){
var seq__37215_37607__$1 = temp__5823__auto___37606;
if(cljs.core.chunked_seq_QMARK_(seq__37215_37607__$1)){
var c__5568__auto___37608 = cljs.core.chunk_first(seq__37215_37607__$1);
var G__37609 = cljs.core.chunk_rest(seq__37215_37607__$1);
var G__37610 = c__5568__auto___37608;
var G__37611 = cljs.core.count(c__5568__auto___37608);
var G__37612 = (0);
seq__37215_37593 = G__37609;
chunk__37217_37594 = G__37610;
count__37218_37595 = G__37611;
i__37219_37596 = G__37612;
continue;
} else {
var child_37613 = cljs.core.first(seq__37215_37607__$1);
if(cljs.core.truth_(child_37613)){
node.appendChild(child_37613);


var G__37614 = cljs.core.next(seq__37215_37607__$1);
var G__37615 = null;
var G__37616 = (0);
var G__37617 = (0);
seq__37215_37593 = G__37614;
chunk__37217_37594 = G__37615;
count__37218_37595 = G__37616;
i__37219_37596 = G__37617;
continue;
} else {
var G__37618 = cljs.core.next(seq__37215_37607__$1);
var G__37619 = null;
var G__37620 = (0);
var G__37621 = (0);
seq__37215_37593 = G__37618;
chunk__37217_37594 = G__37619;
count__37218_37595 = G__37620;
i__37219_37596 = G__37621;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37592);
}
}


var G__37622 = seq__37192_37586;
var G__37623 = chunk__37194_37587;
var G__37624 = count__37195_37588;
var G__37625 = (i__37196_37589 + (1));
seq__37192_37586 = G__37622;
chunk__37194_37587 = G__37623;
count__37195_37588 = G__37624;
i__37196_37589 = G__37625;
continue;
} else {
var G__37626 = seq__37192_37586;
var G__37627 = chunk__37194_37587;
var G__37628 = count__37195_37588;
var G__37629 = (i__37196_37589 + (1));
seq__37192_37586 = G__37626;
chunk__37194_37587 = G__37627;
count__37195_37588 = G__37628;
i__37196_37589 = G__37629;
continue;
}
} else {
var temp__5823__auto___37630 = cljs.core.seq(seq__37192_37586);
if(temp__5823__auto___37630){
var seq__37192_37631__$1 = temp__5823__auto___37630;
if(cljs.core.chunked_seq_QMARK_(seq__37192_37631__$1)){
var c__5568__auto___37632 = cljs.core.chunk_first(seq__37192_37631__$1);
var G__37633 = cljs.core.chunk_rest(seq__37192_37631__$1);
var G__37634 = c__5568__auto___37632;
var G__37635 = cljs.core.count(c__5568__auto___37632);
var G__37636 = (0);
seq__37192_37586 = G__37633;
chunk__37194_37587 = G__37634;
count__37195_37588 = G__37635;
i__37196_37589 = G__37636;
continue;
} else {
var child_struct_37637 = cljs.core.first(seq__37192_37631__$1);
if((!((child_struct_37637 == null)))){
if(typeof child_struct_37637 === 'string'){
var text_37639 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37639),child_struct_37637].join(''));
} else {
var children_37640 = shadow.dom.svg_node(child_struct_37637);
if(cljs.core.seq_QMARK_(children_37640)){
var seq__37223_37641 = cljs.core.seq(children_37640);
var chunk__37225_37642 = null;
var count__37226_37643 = (0);
var i__37227_37644 = (0);
while(true){
if((i__37227_37644 < count__37226_37643)){
var child_37646 = chunk__37225_37642.cljs$core$IIndexed$_nth$arity$2(null,i__37227_37644);
if(cljs.core.truth_(child_37646)){
node.appendChild(child_37646);


var G__37649 = seq__37223_37641;
var G__37650 = chunk__37225_37642;
var G__37651 = count__37226_37643;
var G__37652 = (i__37227_37644 + (1));
seq__37223_37641 = G__37649;
chunk__37225_37642 = G__37650;
count__37226_37643 = G__37651;
i__37227_37644 = G__37652;
continue;
} else {
var G__37653 = seq__37223_37641;
var G__37654 = chunk__37225_37642;
var G__37655 = count__37226_37643;
var G__37656 = (i__37227_37644 + (1));
seq__37223_37641 = G__37653;
chunk__37225_37642 = G__37654;
count__37226_37643 = G__37655;
i__37227_37644 = G__37656;
continue;
}
} else {
var temp__5823__auto___37658__$1 = cljs.core.seq(seq__37223_37641);
if(temp__5823__auto___37658__$1){
var seq__37223_37659__$1 = temp__5823__auto___37658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37223_37659__$1)){
var c__5568__auto___37660 = cljs.core.chunk_first(seq__37223_37659__$1);
var G__37661 = cljs.core.chunk_rest(seq__37223_37659__$1);
var G__37662 = c__5568__auto___37660;
var G__37663 = cljs.core.count(c__5568__auto___37660);
var G__37664 = (0);
seq__37223_37641 = G__37661;
chunk__37225_37642 = G__37662;
count__37226_37643 = G__37663;
i__37227_37644 = G__37664;
continue;
} else {
var child_37665 = cljs.core.first(seq__37223_37659__$1);
if(cljs.core.truth_(child_37665)){
node.appendChild(child_37665);


var G__37666 = cljs.core.next(seq__37223_37659__$1);
var G__37667 = null;
var G__37668 = (0);
var G__37669 = (0);
seq__37223_37641 = G__37666;
chunk__37225_37642 = G__37667;
count__37226_37643 = G__37668;
i__37227_37644 = G__37669;
continue;
} else {
var G__37670 = cljs.core.next(seq__37223_37659__$1);
var G__37671 = null;
var G__37672 = (0);
var G__37673 = (0);
seq__37223_37641 = G__37670;
chunk__37225_37642 = G__37671;
count__37226_37643 = G__37672;
i__37227_37644 = G__37673;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37640);
}
}


var G__37674 = cljs.core.next(seq__37192_37631__$1);
var G__37675 = null;
var G__37676 = (0);
var G__37677 = (0);
seq__37192_37586 = G__37674;
chunk__37194_37587 = G__37675;
count__37195_37588 = G__37676;
i__37196_37589 = G__37677;
continue;
} else {
var G__37679 = cljs.core.next(seq__37192_37631__$1);
var G__37680 = null;
var G__37681 = (0);
var G__37682 = (0);
seq__37192_37586 = G__37679;
chunk__37194_37587 = G__37680;
count__37195_37588 = G__37681;
i__37196_37589 = G__37682;
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
var len__5769__auto___37684 = arguments.length;
var i__5770__auto___37685 = (0);
while(true){
if((i__5770__auto___37685 < len__5769__auto___37684)){
args__5775__auto__.push((arguments[i__5770__auto___37685]));

var G__37686 = (i__5770__auto___37685 + (1));
i__5770__auto___37685 = G__37686;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37232){
var G__37233 = cljs.core.first(seq37232);
var seq37232__$1 = cljs.core.next(seq37232);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37233,seq37232__$1);
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
var c__33479__auto___37692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33480__auto__ = (function (){var switch__33203__auto__ = (function (state_37250){
var state_val_37251 = (state_37250[(1)]);
if((state_val_37251 === (1))){
var state_37250__$1 = state_37250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37250__$1,(2),once_or_cleanup);
} else {
if((state_val_37251 === (2))){
var inst_37247 = (state_37250[(2)]);
var inst_37248 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37250__$1 = (function (){var statearr_37253 = state_37250;
(statearr_37253[(7)] = inst_37247);

return statearr_37253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37250__$1,inst_37248);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33204__auto__ = null;
var shadow$dom$state_machine__33204__auto____0 = (function (){
var statearr_37255 = [null,null,null,null,null,null,null,null];
(statearr_37255[(0)] = shadow$dom$state_machine__33204__auto__);

(statearr_37255[(1)] = (1));

return statearr_37255;
});
var shadow$dom$state_machine__33204__auto____1 = (function (state_37250){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_37250);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e37257){var ex__33207__auto__ = e37257;
var statearr_37258_37694 = state_37250;
(statearr_37258_37694[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_37250[(4)]))){
var statearr_37260_37695 = state_37250;
(statearr_37260_37695[(1)] = cljs.core.first((state_37250[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37696 = state_37250;
state_37250 = G__37696;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
shadow$dom$state_machine__33204__auto__ = function(state_37250){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33204__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33204__auto____1.call(this,state_37250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33204__auto____0;
shadow$dom$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33204__auto____1;
return shadow$dom$state_machine__33204__auto__;
})()
})();
var state__33481__auto__ = (function (){var statearr_37262 = f__33480__auto__();
(statearr_37262[(6)] = c__33479__auto___37692);

return statearr_37262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33481__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
