goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36362 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36362(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36365 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36365(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34557 = coll;
var G__34558 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34557,G__34558) : shadow.dom.lazy_native_coll_seq.call(null,G__34557,G__34558));
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
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
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
var G__34609 = arguments.length;
switch (G__34609) {
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
var G__34625 = arguments.length;
switch (G__34625) {
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
var G__34646 = arguments.length;
switch (G__34646) {
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var G__34680 = arguments.length;
switch (G__34680) {
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
var G__34712 = arguments.length;
switch (G__34712) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34734){if((e34734 instanceof Object)){
var e = e34734;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34734;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34746 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34747 = null;
var count__34748 = (0);
var i__34749 = (0);
while(true){
if((i__34749 < count__34748)){
var el = chunk__34747.cljs$core$IIndexed$_nth$arity$2(null,i__34749);
var handler_36414__$1 = ((function (seq__34746,chunk__34747,count__34748,i__34749,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34746,chunk__34747,count__34748,i__34749,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36414__$1);


var G__36415 = seq__34746;
var G__36416 = chunk__34747;
var G__36417 = count__34748;
var G__36418 = (i__34749 + (1));
seq__34746 = G__36415;
chunk__34747 = G__36416;
count__34748 = G__36417;
i__34749 = G__36418;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34746);
if(temp__5753__auto__){
var seq__34746__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34746__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34746__$1);
var G__36420 = cljs.core.chunk_rest(seq__34746__$1);
var G__36421 = c__4638__auto__;
var G__36422 = cljs.core.count(c__4638__auto__);
var G__36423 = (0);
seq__34746 = G__36420;
chunk__34747 = G__36421;
count__34748 = G__36422;
i__34749 = G__36423;
continue;
} else {
var el = cljs.core.first(seq__34746__$1);
var handler_36425__$1 = ((function (seq__34746,chunk__34747,count__34748,i__34749,el,seq__34746__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34746,chunk__34747,count__34748,i__34749,el,seq__34746__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36425__$1);


var G__36426 = cljs.core.next(seq__34746__$1);
var G__36427 = null;
var G__36428 = (0);
var G__36429 = (0);
seq__34746 = G__36426;
chunk__34747 = G__36427;
count__34748 = G__36428;
i__34749 = G__36429;
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
var G__34781 = arguments.length;
switch (G__34781) {
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
var seq__34812 = cljs.core.seq(events);
var chunk__34813 = null;
var count__34814 = (0);
var i__34815 = (0);
while(true){
if((i__34815 < count__34814)){
var vec__34827 = chunk__34813.cljs$core$IIndexed$_nth$arity$2(null,i__34815);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34827,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36440 = seq__34812;
var G__36441 = chunk__34813;
var G__36442 = count__34814;
var G__36443 = (i__34815 + (1));
seq__34812 = G__36440;
chunk__34813 = G__36441;
count__34814 = G__36442;
i__34815 = G__36443;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34812);
if(temp__5753__auto__){
var seq__34812__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34812__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34812__$1);
var G__36449 = cljs.core.chunk_rest(seq__34812__$1);
var G__36450 = c__4638__auto__;
var G__36451 = cljs.core.count(c__4638__auto__);
var G__36452 = (0);
seq__34812 = G__36449;
chunk__34813 = G__36450;
count__34814 = G__36451;
i__34815 = G__36452;
continue;
} else {
var vec__34838 = cljs.core.first(seq__34812__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34838,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36453 = cljs.core.next(seq__34812__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__34812 = G__36453;
chunk__34813 = G__36454;
count__34814 = G__36455;
i__34815 = G__36456;
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
var seq__34852 = cljs.core.seq(styles);
var chunk__34853 = null;
var count__34854 = (0);
var i__34855 = (0);
while(true){
if((i__34855 < count__34854)){
var vec__34894 = chunk__34853.cljs$core$IIndexed$_nth$arity$2(null,i__34855);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34894,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36462 = seq__34852;
var G__36463 = chunk__34853;
var G__36464 = count__34854;
var G__36465 = (i__34855 + (1));
seq__34852 = G__36462;
chunk__34853 = G__36463;
count__34854 = G__36464;
i__34855 = G__36465;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34852);
if(temp__5753__auto__){
var seq__34852__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34852__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34852__$1);
var G__36469 = cljs.core.chunk_rest(seq__34852__$1);
var G__36470 = c__4638__auto__;
var G__36471 = cljs.core.count(c__4638__auto__);
var G__36472 = (0);
seq__34852 = G__36469;
chunk__34853 = G__36470;
count__34854 = G__36471;
i__34855 = G__36472;
continue;
} else {
var vec__34914 = cljs.core.first(seq__34852__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34914,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36473 = cljs.core.next(seq__34852__$1);
var G__36474 = null;
var G__36475 = (0);
var G__36476 = (0);
seq__34852 = G__36473;
chunk__34853 = G__36474;
count__34854 = G__36475;
i__34855 = G__36476;
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
var G__34935_36477 = key;
var G__34935_36478__$1 = (((G__34935_36477 instanceof cljs.core.Keyword))?G__34935_36477.fqn:null);
switch (G__34935_36478__$1) {
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
var ks_36482 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_36482,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_36482,"aria-");
}
})())){
el.setAttribute(ks_36482,value);
} else {
(el[ks_36482] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35017){
var map__35018 = p__35017;
var map__35018__$1 = cljs.core.__destructure_map(map__35018);
var props = map__35018__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35018__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35021 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35021,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35021,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35021,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35026 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35026,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35026;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35047 = arguments.length;
switch (G__35047) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35088){
var vec__35091 = p__35088;
var seq__35092 = cljs.core.seq(vec__35091);
var first__35093 = cljs.core.first(seq__35092);
var seq__35092__$1 = cljs.core.next(seq__35092);
var nn = first__35093;
var first__35093__$1 = cljs.core.first(seq__35092__$1);
var seq__35092__$2 = cljs.core.next(seq__35092__$1);
var np = first__35093__$1;
var nc = seq__35092__$2;
var node = vec__35091;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35103 = nn;
var G__35104 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35103,G__35104) : create_fn.call(null,G__35103,G__35104));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35110 = nn;
var G__35111 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35110,G__35111) : create_fn.call(null,G__35110,G__35111));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35122 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122,(1),null);
var seq__35129_36506 = cljs.core.seq(node_children);
var chunk__35130_36507 = null;
var count__35131_36508 = (0);
var i__35132_36509 = (0);
while(true){
if((i__35132_36509 < count__35131_36508)){
var child_struct_36511 = chunk__35130_36507.cljs$core$IIndexed$_nth$arity$2(null,i__35132_36509);
var children_36513 = shadow.dom.dom_node(child_struct_36511);
if(cljs.core.seq_QMARK_(children_36513)){
var seq__35234_36515 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36513));
var chunk__35236_36516 = null;
var count__35237_36517 = (0);
var i__35238_36518 = (0);
while(true){
if((i__35238_36518 < count__35237_36517)){
var child_36519 = chunk__35236_36516.cljs$core$IIndexed$_nth$arity$2(null,i__35238_36518);
if(cljs.core.truth_(child_36519)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36519);


var G__36520 = seq__35234_36515;
var G__36521 = chunk__35236_36516;
var G__36522 = count__35237_36517;
var G__36523 = (i__35238_36518 + (1));
seq__35234_36515 = G__36520;
chunk__35236_36516 = G__36521;
count__35237_36517 = G__36522;
i__35238_36518 = G__36523;
continue;
} else {
var G__36525 = seq__35234_36515;
var G__36526 = chunk__35236_36516;
var G__36527 = count__35237_36517;
var G__36528 = (i__35238_36518 + (1));
seq__35234_36515 = G__36525;
chunk__35236_36516 = G__36526;
count__35237_36517 = G__36527;
i__35238_36518 = G__36528;
continue;
}
} else {
var temp__5753__auto___36529 = cljs.core.seq(seq__35234_36515);
if(temp__5753__auto___36529){
var seq__35234_36530__$1 = temp__5753__auto___36529;
if(cljs.core.chunked_seq_QMARK_(seq__35234_36530__$1)){
var c__4638__auto___36532 = cljs.core.chunk_first(seq__35234_36530__$1);
var G__36533 = cljs.core.chunk_rest(seq__35234_36530__$1);
var G__36534 = c__4638__auto___36532;
var G__36535 = cljs.core.count(c__4638__auto___36532);
var G__36536 = (0);
seq__35234_36515 = G__36533;
chunk__35236_36516 = G__36534;
count__35237_36517 = G__36535;
i__35238_36518 = G__36536;
continue;
} else {
var child_36538 = cljs.core.first(seq__35234_36530__$1);
if(cljs.core.truth_(child_36538)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36538);


var G__36539 = cljs.core.next(seq__35234_36530__$1);
var G__36540 = null;
var G__36541 = (0);
var G__36542 = (0);
seq__35234_36515 = G__36539;
chunk__35236_36516 = G__36540;
count__35237_36517 = G__36541;
i__35238_36518 = G__36542;
continue;
} else {
var G__36543 = cljs.core.next(seq__35234_36530__$1);
var G__36544 = null;
var G__36545 = (0);
var G__36546 = (0);
seq__35234_36515 = G__36543;
chunk__35236_36516 = G__36544;
count__35237_36517 = G__36545;
i__35238_36518 = G__36546;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36513);
}


var G__36548 = seq__35129_36506;
var G__36549 = chunk__35130_36507;
var G__36550 = count__35131_36508;
var G__36551 = (i__35132_36509 + (1));
seq__35129_36506 = G__36548;
chunk__35130_36507 = G__36549;
count__35131_36508 = G__36550;
i__35132_36509 = G__36551;
continue;
} else {
var temp__5753__auto___36552 = cljs.core.seq(seq__35129_36506);
if(temp__5753__auto___36552){
var seq__35129_36554__$1 = temp__5753__auto___36552;
if(cljs.core.chunked_seq_QMARK_(seq__35129_36554__$1)){
var c__4638__auto___36555 = cljs.core.chunk_first(seq__35129_36554__$1);
var G__36556 = cljs.core.chunk_rest(seq__35129_36554__$1);
var G__36557 = c__4638__auto___36555;
var G__36558 = cljs.core.count(c__4638__auto___36555);
var G__36559 = (0);
seq__35129_36506 = G__36556;
chunk__35130_36507 = G__36557;
count__35131_36508 = G__36558;
i__35132_36509 = G__36559;
continue;
} else {
var child_struct_36561 = cljs.core.first(seq__35129_36554__$1);
var children_36562 = shadow.dom.dom_node(child_struct_36561);
if(cljs.core.seq_QMARK_(children_36562)){
var seq__35241_36563 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36562));
var chunk__35243_36564 = null;
var count__35244_36565 = (0);
var i__35245_36566 = (0);
while(true){
if((i__35245_36566 < count__35244_36565)){
var child_36567 = chunk__35243_36564.cljs$core$IIndexed$_nth$arity$2(null,i__35245_36566);
if(cljs.core.truth_(child_36567)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36567);


var G__36568 = seq__35241_36563;
var G__36569 = chunk__35243_36564;
var G__36570 = count__35244_36565;
var G__36571 = (i__35245_36566 + (1));
seq__35241_36563 = G__36568;
chunk__35243_36564 = G__36569;
count__35244_36565 = G__36570;
i__35245_36566 = G__36571;
continue;
} else {
var G__36573 = seq__35241_36563;
var G__36574 = chunk__35243_36564;
var G__36575 = count__35244_36565;
var G__36576 = (i__35245_36566 + (1));
seq__35241_36563 = G__36573;
chunk__35243_36564 = G__36574;
count__35244_36565 = G__36575;
i__35245_36566 = G__36576;
continue;
}
} else {
var temp__5753__auto___36579__$1 = cljs.core.seq(seq__35241_36563);
if(temp__5753__auto___36579__$1){
var seq__35241_36580__$1 = temp__5753__auto___36579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35241_36580__$1)){
var c__4638__auto___36581 = cljs.core.chunk_first(seq__35241_36580__$1);
var G__36582 = cljs.core.chunk_rest(seq__35241_36580__$1);
var G__36583 = c__4638__auto___36581;
var G__36584 = cljs.core.count(c__4638__auto___36581);
var G__36585 = (0);
seq__35241_36563 = G__36582;
chunk__35243_36564 = G__36583;
count__35244_36565 = G__36584;
i__35245_36566 = G__36585;
continue;
} else {
var child_36586 = cljs.core.first(seq__35241_36580__$1);
if(cljs.core.truth_(child_36586)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36586);


var G__36587 = cljs.core.next(seq__35241_36580__$1);
var G__36588 = null;
var G__36589 = (0);
var G__36590 = (0);
seq__35241_36563 = G__36587;
chunk__35243_36564 = G__36588;
count__35244_36565 = G__36589;
i__35245_36566 = G__36590;
continue;
} else {
var G__36591 = cljs.core.next(seq__35241_36580__$1);
var G__36592 = null;
var G__36593 = (0);
var G__36594 = (0);
seq__35241_36563 = G__36591;
chunk__35243_36564 = G__36592;
count__35244_36565 = G__36593;
i__35245_36566 = G__36594;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36562);
}


var G__36597 = cljs.core.next(seq__35129_36554__$1);
var G__36598 = null;
var G__36599 = (0);
var G__36600 = (0);
seq__35129_36506 = G__36597;
chunk__35130_36507 = G__36598;
count__35131_36508 = G__36599;
i__35132_36509 = G__36600;
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
var seq__35322 = cljs.core.seq(node);
var chunk__35323 = null;
var count__35324 = (0);
var i__35325 = (0);
while(true){
if((i__35325 < count__35324)){
var n = chunk__35323.cljs$core$IIndexed$_nth$arity$2(null,i__35325);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36613 = seq__35322;
var G__36614 = chunk__35323;
var G__36615 = count__35324;
var G__36616 = (i__35325 + (1));
seq__35322 = G__36613;
chunk__35323 = G__36614;
count__35324 = G__36615;
i__35325 = G__36616;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35322);
if(temp__5753__auto__){
var seq__35322__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35322__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35322__$1);
var G__36619 = cljs.core.chunk_rest(seq__35322__$1);
var G__36620 = c__4638__auto__;
var G__36621 = cljs.core.count(c__4638__auto__);
var G__36622 = (0);
seq__35322 = G__36619;
chunk__35323 = G__36620;
count__35324 = G__36621;
i__35325 = G__36622;
continue;
} else {
var n = cljs.core.first(seq__35322__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36623 = cljs.core.next(seq__35322__$1);
var G__36624 = null;
var G__36625 = (0);
var G__36626 = (0);
seq__35322 = G__36623;
chunk__35323 = G__36624;
count__35324 = G__36625;
i__35325 = G__36626;
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
var G__35386 = arguments.length;
switch (G__35386) {
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
var G__35402 = arguments.length;
switch (G__35402) {
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
var G__35436 = arguments.length;
switch (G__35436) {
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
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___36648 = arguments.length;
var i__4819__auto___36653 = (0);
while(true){
if((i__4819__auto___36653 < len__4818__auto___36648)){
args__4824__auto__.push((arguments[i__4819__auto___36653]));

var G__36655 = (i__4819__auto___36653 + (1));
i__4819__auto___36653 = G__36655;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35521_36670 = cljs.core.seq(nodes);
var chunk__35522_36671 = null;
var count__35523_36672 = (0);
var i__35524_36673 = (0);
while(true){
if((i__35524_36673 < count__35523_36672)){
var node_36675 = chunk__35522_36671.cljs$core$IIndexed$_nth$arity$2(null,i__35524_36673);
fragment.appendChild(shadow.dom._to_dom(node_36675));


var G__36676 = seq__35521_36670;
var G__36677 = chunk__35522_36671;
var G__36678 = count__35523_36672;
var G__36679 = (i__35524_36673 + (1));
seq__35521_36670 = G__36676;
chunk__35522_36671 = G__36677;
count__35523_36672 = G__36678;
i__35524_36673 = G__36679;
continue;
} else {
var temp__5753__auto___36680 = cljs.core.seq(seq__35521_36670);
if(temp__5753__auto___36680){
var seq__35521_36685__$1 = temp__5753__auto___36680;
if(cljs.core.chunked_seq_QMARK_(seq__35521_36685__$1)){
var c__4638__auto___36689 = cljs.core.chunk_first(seq__35521_36685__$1);
var G__36690 = cljs.core.chunk_rest(seq__35521_36685__$1);
var G__36691 = c__4638__auto___36689;
var G__36692 = cljs.core.count(c__4638__auto___36689);
var G__36693 = (0);
seq__35521_36670 = G__36690;
chunk__35522_36671 = G__36691;
count__35523_36672 = G__36692;
i__35524_36673 = G__36693;
continue;
} else {
var node_36695 = cljs.core.first(seq__35521_36685__$1);
fragment.appendChild(shadow.dom._to_dom(node_36695));


var G__36699 = cljs.core.next(seq__35521_36685__$1);
var G__36700 = null;
var G__36701 = (0);
var G__36702 = (0);
seq__35521_36670 = G__36699;
chunk__35522_36671 = G__36700;
count__35523_36672 = G__36701;
i__35524_36673 = G__36702;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35504){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35504));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35569_36720 = cljs.core.seq(scripts);
var chunk__35570_36721 = null;
var count__35571_36722 = (0);
var i__35572_36723 = (0);
while(true){
if((i__35572_36723 < count__35571_36722)){
var vec__35607_36727 = chunk__35570_36721.cljs$core$IIndexed$_nth$arity$2(null,i__35572_36723);
var script_tag_36728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607_36727,(0),null);
var script_body_36729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607_36727,(1),null);
eval(script_body_36729);


var G__36730 = seq__35569_36720;
var G__36731 = chunk__35570_36721;
var G__36732 = count__35571_36722;
var G__36733 = (i__35572_36723 + (1));
seq__35569_36720 = G__36730;
chunk__35570_36721 = G__36731;
count__35571_36722 = G__36732;
i__35572_36723 = G__36733;
continue;
} else {
var temp__5753__auto___36742 = cljs.core.seq(seq__35569_36720);
if(temp__5753__auto___36742){
var seq__35569_36744__$1 = temp__5753__auto___36742;
if(cljs.core.chunked_seq_QMARK_(seq__35569_36744__$1)){
var c__4638__auto___36747 = cljs.core.chunk_first(seq__35569_36744__$1);
var G__36752 = cljs.core.chunk_rest(seq__35569_36744__$1);
var G__36753 = c__4638__auto___36747;
var G__36754 = cljs.core.count(c__4638__auto___36747);
var G__36755 = (0);
seq__35569_36720 = G__36752;
chunk__35570_36721 = G__36753;
count__35571_36722 = G__36754;
i__35572_36723 = G__36755;
continue;
} else {
var vec__35618_36765 = cljs.core.first(seq__35569_36744__$1);
var script_tag_36766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618_36765,(0),null);
var script_body_36767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618_36765,(1),null);
eval(script_body_36767);


var G__36771 = cljs.core.next(seq__35569_36744__$1);
var G__36772 = null;
var G__36773 = (0);
var G__36774 = (0);
seq__35569_36720 = G__36771;
chunk__35570_36721 = G__36772;
count__35571_36722 = G__36773;
i__35572_36723 = G__36774;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35623){
var vec__35625 = p__35623;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35625,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35625,(1),null);
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
var G__35636 = arguments.length;
switch (G__35636) {
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
var seq__35689 = cljs.core.seq(style_keys);
var chunk__35690 = null;
var count__35691 = (0);
var i__35692 = (0);
while(true){
if((i__35692 < count__35691)){
var it = chunk__35690.cljs$core$IIndexed$_nth$arity$2(null,i__35692);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36821 = seq__35689;
var G__36822 = chunk__35690;
var G__36823 = count__35691;
var G__36824 = (i__35692 + (1));
seq__35689 = G__36821;
chunk__35690 = G__36822;
count__35691 = G__36823;
i__35692 = G__36824;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35689);
if(temp__5753__auto__){
var seq__35689__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35689__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35689__$1);
var G__36828 = cljs.core.chunk_rest(seq__35689__$1);
var G__36829 = c__4638__auto__;
var G__36830 = cljs.core.count(c__4638__auto__);
var G__36831 = (0);
seq__35689 = G__36828;
chunk__35690 = G__36829;
count__35691 = G__36830;
i__35692 = G__36831;
continue;
} else {
var it = cljs.core.first(seq__35689__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36832 = cljs.core.next(seq__35689__$1);
var G__36833 = null;
var G__36834 = (0);
var G__36835 = (0);
seq__35689 = G__36832;
chunk__35690 = G__36833;
count__35691 = G__36834;
i__35692 = G__36835;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35725,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35741 = k35725;
var G__35741__$1 = (((G__35741 instanceof cljs.core.Keyword))?G__35741.fqn:null);
switch (G__35741__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35725,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35745){
var vec__35748 = p__35745;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35748,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35748,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35724){
var self__ = this;
var G__35724__$1 = this;
return (new cljs.core.RecordIter((0),G__35724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35726,other35727){
var self__ = this;
var this35726__$1 = this;
return (((!((other35727 == null)))) && ((((this35726__$1.constructor === other35727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35726__$1.x,other35727.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35726__$1.y,other35727.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35726__$1.__extmap,other35727.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35725){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35799 = k35725;
var G__35799__$1 = (((G__35799 instanceof cljs.core.Keyword))?G__35799.fqn:null);
switch (G__35799__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35725);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35724){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35807 = cljs.core.keyword_identical_QMARK_;
var expr__35808 = k__4470__auto__;
if(cljs.core.truth_((pred__35807.cljs$core$IFn$_invoke$arity$2 ? pred__35807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35808) : pred__35807.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35808)))){
return (new shadow.dom.Coordinate(G__35724,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35807.cljs$core$IFn$_invoke$arity$2 ? pred__35807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35808) : pred__35807.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35808)))){
return (new shadow.dom.Coordinate(self__.x,G__35724,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35724),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35724){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35724,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35732){
var extmap__4501__auto__ = (function (){var G__35821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35732,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35732)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35821);
} else {
return G__35821;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35732),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35732),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35839,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35851 = k35839;
var G__35851__$1 = (((G__35851 instanceof cljs.core.Keyword))?G__35851.fqn:null);
switch (G__35851__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35839,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35857){
var vec__35859 = p__35857;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35859,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35859,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35838){
var self__ = this;
var G__35838__$1 = this;
return (new cljs.core.RecordIter((0),G__35838__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35840,other35841){
var self__ = this;
var this35840__$1 = this;
return (((!((other35841 == null)))) && ((((this35840__$1.constructor === other35841.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35840__$1.w,other35841.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35840__$1.h,other35841.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35840__$1.__extmap,other35841.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35839){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35918 = k35839;
var G__35918__$1 = (((G__35918 instanceof cljs.core.Keyword))?G__35918.fqn:null);
switch (G__35918__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35839);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35838){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35926 = cljs.core.keyword_identical_QMARK_;
var expr__35927 = k__4470__auto__;
if(cljs.core.truth_((pred__35926.cljs$core$IFn$_invoke$arity$2 ? pred__35926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35927) : pred__35926.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35927)))){
return (new shadow.dom.Size(G__35838,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35926.cljs$core$IFn$_invoke$arity$2 ? pred__35926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35927) : pred__35926.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35927)))){
return (new shadow.dom.Size(self__.w,G__35838,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35838),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35838){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35838,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35845){
var extmap__4501__auto__ = (function (){var G__35960 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35845,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35845)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35960);
} else {
return G__35960;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35845),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35845),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__36877 = (i + (1));
var G__36878 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36877;
ret = G__36878;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36023){
var vec__36025 = p__36023;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36042 = arguments.length;
switch (G__36042) {
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
var G__36881 = ps;
var G__36882 = (i + (1));
el__$1 = G__36881;
i = G__36882;
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
var vec__36147 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36147,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36147,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36147,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36158_36886 = cljs.core.seq(props);
var chunk__36159_36887 = null;
var count__36160_36888 = (0);
var i__36161_36889 = (0);
while(true){
if((i__36161_36889 < count__36160_36888)){
var vec__36179_36890 = chunk__36159_36887.cljs$core$IIndexed$_nth$arity$2(null,i__36161_36889);
var k_36891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179_36890,(0),null);
var v_36892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179_36890,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36891);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36891),v_36892);


var G__36893 = seq__36158_36886;
var G__36894 = chunk__36159_36887;
var G__36895 = count__36160_36888;
var G__36896 = (i__36161_36889 + (1));
seq__36158_36886 = G__36893;
chunk__36159_36887 = G__36894;
count__36160_36888 = G__36895;
i__36161_36889 = G__36896;
continue;
} else {
var temp__5753__auto___36897 = cljs.core.seq(seq__36158_36886);
if(temp__5753__auto___36897){
var seq__36158_36898__$1 = temp__5753__auto___36897;
if(cljs.core.chunked_seq_QMARK_(seq__36158_36898__$1)){
var c__4638__auto___36899 = cljs.core.chunk_first(seq__36158_36898__$1);
var G__36900 = cljs.core.chunk_rest(seq__36158_36898__$1);
var G__36901 = c__4638__auto___36899;
var G__36902 = cljs.core.count(c__4638__auto___36899);
var G__36903 = (0);
seq__36158_36886 = G__36900;
chunk__36159_36887 = G__36901;
count__36160_36888 = G__36902;
i__36161_36889 = G__36903;
continue;
} else {
var vec__36185_36905 = cljs.core.first(seq__36158_36898__$1);
var k_36906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185_36905,(0),null);
var v_36907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185_36905,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36906);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36906),v_36907);


var G__36908 = cljs.core.next(seq__36158_36898__$1);
var G__36909 = null;
var G__36910 = (0);
var G__36911 = (0);
seq__36158_36886 = G__36908;
chunk__36159_36887 = G__36909;
count__36160_36888 = G__36910;
i__36161_36889 = G__36911;
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
var vec__36214 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36214,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36214,(1),null);
var seq__36218_36912 = cljs.core.seq(node_children);
var chunk__36220_36913 = null;
var count__36221_36914 = (0);
var i__36222_36915 = (0);
while(true){
if((i__36222_36915 < count__36221_36914)){
var child_struct_36916 = chunk__36220_36913.cljs$core$IIndexed$_nth$arity$2(null,i__36222_36915);
if((!((child_struct_36916 == null)))){
if(typeof child_struct_36916 === 'string'){
var text_36918 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36918),child_struct_36916].join(''));
} else {
var children_36919 = shadow.dom.svg_node(child_struct_36916);
if(cljs.core.seq_QMARK_(children_36919)){
var seq__36260_36920 = cljs.core.seq(children_36919);
var chunk__36262_36921 = null;
var count__36263_36922 = (0);
var i__36264_36923 = (0);
while(true){
if((i__36264_36923 < count__36263_36922)){
var child_36924 = chunk__36262_36921.cljs$core$IIndexed$_nth$arity$2(null,i__36264_36923);
if(cljs.core.truth_(child_36924)){
node.appendChild(child_36924);


var G__36925 = seq__36260_36920;
var G__36926 = chunk__36262_36921;
var G__36927 = count__36263_36922;
var G__36928 = (i__36264_36923 + (1));
seq__36260_36920 = G__36925;
chunk__36262_36921 = G__36926;
count__36263_36922 = G__36927;
i__36264_36923 = G__36928;
continue;
} else {
var G__36929 = seq__36260_36920;
var G__36930 = chunk__36262_36921;
var G__36931 = count__36263_36922;
var G__36932 = (i__36264_36923 + (1));
seq__36260_36920 = G__36929;
chunk__36262_36921 = G__36930;
count__36263_36922 = G__36931;
i__36264_36923 = G__36932;
continue;
}
} else {
var temp__5753__auto___36933 = cljs.core.seq(seq__36260_36920);
if(temp__5753__auto___36933){
var seq__36260_36934__$1 = temp__5753__auto___36933;
if(cljs.core.chunked_seq_QMARK_(seq__36260_36934__$1)){
var c__4638__auto___36935 = cljs.core.chunk_first(seq__36260_36934__$1);
var G__36936 = cljs.core.chunk_rest(seq__36260_36934__$1);
var G__36937 = c__4638__auto___36935;
var G__36938 = cljs.core.count(c__4638__auto___36935);
var G__36939 = (0);
seq__36260_36920 = G__36936;
chunk__36262_36921 = G__36937;
count__36263_36922 = G__36938;
i__36264_36923 = G__36939;
continue;
} else {
var child_36940 = cljs.core.first(seq__36260_36934__$1);
if(cljs.core.truth_(child_36940)){
node.appendChild(child_36940);


var G__36941 = cljs.core.next(seq__36260_36934__$1);
var G__36942 = null;
var G__36943 = (0);
var G__36944 = (0);
seq__36260_36920 = G__36941;
chunk__36262_36921 = G__36942;
count__36263_36922 = G__36943;
i__36264_36923 = G__36944;
continue;
} else {
var G__36945 = cljs.core.next(seq__36260_36934__$1);
var G__36946 = null;
var G__36947 = (0);
var G__36948 = (0);
seq__36260_36920 = G__36945;
chunk__36262_36921 = G__36946;
count__36263_36922 = G__36947;
i__36264_36923 = G__36948;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36919);
}
}


var G__36950 = seq__36218_36912;
var G__36951 = chunk__36220_36913;
var G__36952 = count__36221_36914;
var G__36953 = (i__36222_36915 + (1));
seq__36218_36912 = G__36950;
chunk__36220_36913 = G__36951;
count__36221_36914 = G__36952;
i__36222_36915 = G__36953;
continue;
} else {
var G__36954 = seq__36218_36912;
var G__36955 = chunk__36220_36913;
var G__36956 = count__36221_36914;
var G__36957 = (i__36222_36915 + (1));
seq__36218_36912 = G__36954;
chunk__36220_36913 = G__36955;
count__36221_36914 = G__36956;
i__36222_36915 = G__36957;
continue;
}
} else {
var temp__5753__auto___36958 = cljs.core.seq(seq__36218_36912);
if(temp__5753__auto___36958){
var seq__36218_36959__$1 = temp__5753__auto___36958;
if(cljs.core.chunked_seq_QMARK_(seq__36218_36959__$1)){
var c__4638__auto___36960 = cljs.core.chunk_first(seq__36218_36959__$1);
var G__36961 = cljs.core.chunk_rest(seq__36218_36959__$1);
var G__36962 = c__4638__auto___36960;
var G__36963 = cljs.core.count(c__4638__auto___36960);
var G__36964 = (0);
seq__36218_36912 = G__36961;
chunk__36220_36913 = G__36962;
count__36221_36914 = G__36963;
i__36222_36915 = G__36964;
continue;
} else {
var child_struct_36965 = cljs.core.first(seq__36218_36959__$1);
if((!((child_struct_36965 == null)))){
if(typeof child_struct_36965 === 'string'){
var text_36966 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36966),child_struct_36965].join(''));
} else {
var children_36967 = shadow.dom.svg_node(child_struct_36965);
if(cljs.core.seq_QMARK_(children_36967)){
var seq__36273_36968 = cljs.core.seq(children_36967);
var chunk__36275_36969 = null;
var count__36276_36970 = (0);
var i__36277_36971 = (0);
while(true){
if((i__36277_36971 < count__36276_36970)){
var child_36972 = chunk__36275_36969.cljs$core$IIndexed$_nth$arity$2(null,i__36277_36971);
if(cljs.core.truth_(child_36972)){
node.appendChild(child_36972);


var G__36973 = seq__36273_36968;
var G__36974 = chunk__36275_36969;
var G__36975 = count__36276_36970;
var G__36976 = (i__36277_36971 + (1));
seq__36273_36968 = G__36973;
chunk__36275_36969 = G__36974;
count__36276_36970 = G__36975;
i__36277_36971 = G__36976;
continue;
} else {
var G__36977 = seq__36273_36968;
var G__36978 = chunk__36275_36969;
var G__36979 = count__36276_36970;
var G__36980 = (i__36277_36971 + (1));
seq__36273_36968 = G__36977;
chunk__36275_36969 = G__36978;
count__36276_36970 = G__36979;
i__36277_36971 = G__36980;
continue;
}
} else {
var temp__5753__auto___36981__$1 = cljs.core.seq(seq__36273_36968);
if(temp__5753__auto___36981__$1){
var seq__36273_36982__$1 = temp__5753__auto___36981__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36273_36982__$1)){
var c__4638__auto___36984 = cljs.core.chunk_first(seq__36273_36982__$1);
var G__36985 = cljs.core.chunk_rest(seq__36273_36982__$1);
var G__36986 = c__4638__auto___36984;
var G__36987 = cljs.core.count(c__4638__auto___36984);
var G__36988 = (0);
seq__36273_36968 = G__36985;
chunk__36275_36969 = G__36986;
count__36276_36970 = G__36987;
i__36277_36971 = G__36988;
continue;
} else {
var child_36989 = cljs.core.first(seq__36273_36982__$1);
if(cljs.core.truth_(child_36989)){
node.appendChild(child_36989);


var G__36990 = cljs.core.next(seq__36273_36982__$1);
var G__36991 = null;
var G__36992 = (0);
var G__36993 = (0);
seq__36273_36968 = G__36990;
chunk__36275_36969 = G__36991;
count__36276_36970 = G__36992;
i__36277_36971 = G__36993;
continue;
} else {
var G__36994 = cljs.core.next(seq__36273_36982__$1);
var G__36995 = null;
var G__36996 = (0);
var G__36997 = (0);
seq__36273_36968 = G__36994;
chunk__36275_36969 = G__36995;
count__36276_36970 = G__36996;
i__36277_36971 = G__36997;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36967);
}
}


var G__36998 = cljs.core.next(seq__36218_36959__$1);
var G__36999 = null;
var G__37000 = (0);
var G__37001 = (0);
seq__36218_36912 = G__36998;
chunk__36220_36913 = G__36999;
count__36221_36914 = G__37000;
i__36222_36915 = G__37001;
continue;
} else {
var G__37002 = cljs.core.next(seq__36218_36959__$1);
var G__37003 = null;
var G__37004 = (0);
var G__37005 = (0);
seq__36218_36912 = G__37002;
chunk__36220_36913 = G__37003;
count__36221_36914 = G__37004;
i__36222_36915 = G__37005;
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
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
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

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37008 = arguments.length;
var i__4819__auto___37009 = (0);
while(true){
if((i__4819__auto___37009 < len__4818__auto___37008)){
args__4824__auto__.push((arguments[i__4819__auto___37009]));

var G__37010 = (i__4819__auto___37009 + (1));
i__4819__auto___37009 = G__37010;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36303){
var G__36304 = cljs.core.first(seq36303);
var seq36303__$1 = cljs.core.next(seq36303);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36304,seq36303__$1);
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
var G__36316 = arguments.length;
switch (G__36316) {
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

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__31770__auto___37015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31771__auto__ = (function (){var switch__31463__auto__ = (function (state_36321){
var state_val_36322 = (state_36321[(1)]);
if((state_val_36322 === (1))){
var state_36321__$1 = state_36321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36321__$1,(2),once_or_cleanup);
} else {
if((state_val_36322 === (2))){
var inst_36318 = (state_36321[(2)]);
var inst_36319 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36321__$1 = (function (){var statearr_36330 = state_36321;
(statearr_36330[(7)] = inst_36318);

return statearr_36330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36321__$1,inst_36319);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31464__auto__ = null;
var shadow$dom$state_machine__31464__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = shadow$dom$state_machine__31464__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var shadow$dom$state_machine__31464__auto____1 = (function (state_36321){
while(true){
var ret_value__31465__auto__ = (function (){try{while(true){
var result__31466__auto__ = switch__31463__auto__(state_36321);
if(cljs.core.keyword_identical_QMARK_(result__31466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31466__auto__;
}
break;
}
}catch (e36332){var ex__31467__auto__ = e36332;
var statearr_36334_37019 = state_36321;
(statearr_36334_37019[(2)] = ex__31467__auto__);


if(cljs.core.seq((state_36321[(4)]))){
var statearr_36338_37020 = state_36321;
(statearr_36338_37020[(1)] = cljs.core.first((state_36321[(4)])));

} else {
throw ex__31467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37021 = state_36321;
state_36321 = G__37021;
continue;
} else {
return ret_value__31465__auto__;
}
break;
}
});
shadow$dom$state_machine__31464__auto__ = function(state_36321){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31464__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31464__auto____1.call(this,state_36321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31464__auto____0;
shadow$dom$state_machine__31464__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31464__auto____1;
return shadow$dom$state_machine__31464__auto__;
})()
})();
var state__31772__auto__ = (function (){var statearr_36343 = f__31771__auto__();
(statearr_36343[(6)] = c__31770__auto___37015);

return statearr_36343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31772__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
