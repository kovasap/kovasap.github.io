goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35962 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35962(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35963 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35963(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34695 = coll;
var G__34696 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34695,G__34696) : shadow.dom.lazy_native_coll_seq.call(null,G__34695,G__34696));
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
var G__34733 = arguments.length;
switch (G__34733) {
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
var G__34741 = arguments.length;
switch (G__34741) {
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
var G__34763 = arguments.length;
switch (G__34763) {
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
var G__34777 = arguments.length;
switch (G__34777) {
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
var G__34797 = arguments.length;
switch (G__34797) {
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
var G__34833 = arguments.length;
switch (G__34833) {
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
}catch (e34862){if((e34862 instanceof Object)){
var e = e34862;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34862;

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
var seq__34870 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34871 = null;
var count__34872 = (0);
var i__34873 = (0);
while(true){
if((i__34873 < count__34872)){
var el = chunk__34871.cljs$core$IIndexed$_nth$arity$2(null,i__34873);
var handler_35981__$1 = ((function (seq__34870,chunk__34871,count__34872,i__34873,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34870,chunk__34871,count__34872,i__34873,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35981__$1);


var G__35982 = seq__34870;
var G__35983 = chunk__34871;
var G__35984 = count__34872;
var G__35985 = (i__34873 + (1));
seq__34870 = G__35982;
chunk__34871 = G__35983;
count__34872 = G__35984;
i__34873 = G__35985;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34870);
if(temp__5753__auto__){
var seq__34870__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34870__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34870__$1);
var G__35986 = cljs.core.chunk_rest(seq__34870__$1);
var G__35987 = c__4638__auto__;
var G__35988 = cljs.core.count(c__4638__auto__);
var G__35989 = (0);
seq__34870 = G__35986;
chunk__34871 = G__35987;
count__34872 = G__35988;
i__34873 = G__35989;
continue;
} else {
var el = cljs.core.first(seq__34870__$1);
var handler_35990__$1 = ((function (seq__34870,chunk__34871,count__34872,i__34873,el,seq__34870__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34870,chunk__34871,count__34872,i__34873,el,seq__34870__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35990__$1);


var G__35991 = cljs.core.next(seq__34870__$1);
var G__35992 = null;
var G__35993 = (0);
var G__35994 = (0);
seq__34870 = G__35991;
chunk__34871 = G__35992;
count__34872 = G__35993;
i__34873 = G__35994;
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
var G__34911 = arguments.length;
switch (G__34911) {
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
var seq__34927 = cljs.core.seq(events);
var chunk__34928 = null;
var count__34929 = (0);
var i__34930 = (0);
while(true){
if((i__34930 < count__34929)){
var vec__34953 = chunk__34928.cljs$core$IIndexed$_nth$arity$2(null,i__34930);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36000 = seq__34927;
var G__36001 = chunk__34928;
var G__36002 = count__34929;
var G__36003 = (i__34930 + (1));
seq__34927 = G__36000;
chunk__34928 = G__36001;
count__34929 = G__36002;
i__34930 = G__36003;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34927);
if(temp__5753__auto__){
var seq__34927__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34927__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34927__$1);
var G__36004 = cljs.core.chunk_rest(seq__34927__$1);
var G__36005 = c__4638__auto__;
var G__36006 = cljs.core.count(c__4638__auto__);
var G__36007 = (0);
seq__34927 = G__36004;
chunk__34928 = G__36005;
count__34929 = G__36006;
i__34930 = G__36007;
continue;
} else {
var vec__34970 = cljs.core.first(seq__34927__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36008 = cljs.core.next(seq__34927__$1);
var G__36009 = null;
var G__36010 = (0);
var G__36011 = (0);
seq__34927 = G__36008;
chunk__34928 = G__36009;
count__34929 = G__36010;
i__34930 = G__36011;
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
var seq__34980 = cljs.core.seq(styles);
var chunk__34981 = null;
var count__34982 = (0);
var i__34983 = (0);
while(true){
if((i__34983 < count__34982)){
var vec__35005 = chunk__34981.cljs$core$IIndexed$_nth$arity$2(null,i__34983);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36014 = seq__34980;
var G__36015 = chunk__34981;
var G__36016 = count__34982;
var G__36017 = (i__34983 + (1));
seq__34980 = G__36014;
chunk__34981 = G__36015;
count__34982 = G__36016;
i__34983 = G__36017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34980);
if(temp__5753__auto__){
var seq__34980__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34980__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34980__$1);
var G__36020 = cljs.core.chunk_rest(seq__34980__$1);
var G__36021 = c__4638__auto__;
var G__36022 = cljs.core.count(c__4638__auto__);
var G__36023 = (0);
seq__34980 = G__36020;
chunk__34981 = G__36021;
count__34982 = G__36022;
i__34983 = G__36023;
continue;
} else {
var vec__35010 = cljs.core.first(seq__34980__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36024 = cljs.core.next(seq__34980__$1);
var G__36025 = null;
var G__36026 = (0);
var G__36027 = (0);
seq__34980 = G__36024;
chunk__34981 = G__36025;
count__34982 = G__36026;
i__34983 = G__36027;
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
var G__35030_36028 = key;
var G__35030_36029__$1 = (((G__35030_36028 instanceof cljs.core.Keyword))?G__35030_36028.fqn:null);
switch (G__35030_36029__$1) {
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
var ks_36033 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_36033,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_36033,"aria-");
}
})())){
el.setAttribute(ks_36033,value);
} else {
(el[ks_36033] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35084){
var map__35085 = p__35084;
var map__35085__$1 = cljs.core.__destructure_map(map__35085);
var props = map__35085__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35085__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35092 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35092,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35092,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35092,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35099 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35099,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35099;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35106 = arguments.length;
switch (G__35106) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35117){
var vec__35118 = p__35117;
var seq__35119 = cljs.core.seq(vec__35118);
var first__35120 = cljs.core.first(seq__35119);
var seq__35119__$1 = cljs.core.next(seq__35119);
var nn = first__35120;
var first__35120__$1 = cljs.core.first(seq__35119__$1);
var seq__35119__$2 = cljs.core.next(seq__35119__$1);
var np = first__35120__$1;
var nc = seq__35119__$2;
var node = vec__35118;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35123 = nn;
var G__35124 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35123,G__35124) : create_fn.call(null,G__35123,G__35124));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35125 = nn;
var G__35126 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35125,G__35126) : create_fn.call(null,G__35125,G__35126));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35132 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132,(1),null);
var seq__35137_36048 = cljs.core.seq(node_children);
var chunk__35138_36049 = null;
var count__35139_36050 = (0);
var i__35140_36051 = (0);
while(true){
if((i__35140_36051 < count__35139_36050)){
var child_struct_36052 = chunk__35138_36049.cljs$core$IIndexed$_nth$arity$2(null,i__35140_36051);
var children_36053 = shadow.dom.dom_node(child_struct_36052);
if(cljs.core.seq_QMARK_(children_36053)){
var seq__35192_36054 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36053));
var chunk__35194_36055 = null;
var count__35195_36056 = (0);
var i__35196_36057 = (0);
while(true){
if((i__35196_36057 < count__35195_36056)){
var child_36058 = chunk__35194_36055.cljs$core$IIndexed$_nth$arity$2(null,i__35196_36057);
if(cljs.core.truth_(child_36058)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36058);


var G__36059 = seq__35192_36054;
var G__36060 = chunk__35194_36055;
var G__36061 = count__35195_36056;
var G__36062 = (i__35196_36057 + (1));
seq__35192_36054 = G__36059;
chunk__35194_36055 = G__36060;
count__35195_36056 = G__36061;
i__35196_36057 = G__36062;
continue;
} else {
var G__36063 = seq__35192_36054;
var G__36064 = chunk__35194_36055;
var G__36065 = count__35195_36056;
var G__36066 = (i__35196_36057 + (1));
seq__35192_36054 = G__36063;
chunk__35194_36055 = G__36064;
count__35195_36056 = G__36065;
i__35196_36057 = G__36066;
continue;
}
} else {
var temp__5753__auto___36067 = cljs.core.seq(seq__35192_36054);
if(temp__5753__auto___36067){
var seq__35192_36068__$1 = temp__5753__auto___36067;
if(cljs.core.chunked_seq_QMARK_(seq__35192_36068__$1)){
var c__4638__auto___36069 = cljs.core.chunk_first(seq__35192_36068__$1);
var G__36070 = cljs.core.chunk_rest(seq__35192_36068__$1);
var G__36071 = c__4638__auto___36069;
var G__36072 = cljs.core.count(c__4638__auto___36069);
var G__36073 = (0);
seq__35192_36054 = G__36070;
chunk__35194_36055 = G__36071;
count__35195_36056 = G__36072;
i__35196_36057 = G__36073;
continue;
} else {
var child_36074 = cljs.core.first(seq__35192_36068__$1);
if(cljs.core.truth_(child_36074)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36074);


var G__36075 = cljs.core.next(seq__35192_36068__$1);
var G__36076 = null;
var G__36077 = (0);
var G__36078 = (0);
seq__35192_36054 = G__36075;
chunk__35194_36055 = G__36076;
count__35195_36056 = G__36077;
i__35196_36057 = G__36078;
continue;
} else {
var G__36079 = cljs.core.next(seq__35192_36068__$1);
var G__36080 = null;
var G__36081 = (0);
var G__36082 = (0);
seq__35192_36054 = G__36079;
chunk__35194_36055 = G__36080;
count__35195_36056 = G__36081;
i__35196_36057 = G__36082;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36053);
}


var G__36083 = seq__35137_36048;
var G__36084 = chunk__35138_36049;
var G__36085 = count__35139_36050;
var G__36086 = (i__35140_36051 + (1));
seq__35137_36048 = G__36083;
chunk__35138_36049 = G__36084;
count__35139_36050 = G__36085;
i__35140_36051 = G__36086;
continue;
} else {
var temp__5753__auto___36087 = cljs.core.seq(seq__35137_36048);
if(temp__5753__auto___36087){
var seq__35137_36089__$1 = temp__5753__auto___36087;
if(cljs.core.chunked_seq_QMARK_(seq__35137_36089__$1)){
var c__4638__auto___36090 = cljs.core.chunk_first(seq__35137_36089__$1);
var G__36091 = cljs.core.chunk_rest(seq__35137_36089__$1);
var G__36092 = c__4638__auto___36090;
var G__36093 = cljs.core.count(c__4638__auto___36090);
var G__36094 = (0);
seq__35137_36048 = G__36091;
chunk__35138_36049 = G__36092;
count__35139_36050 = G__36093;
i__35140_36051 = G__36094;
continue;
} else {
var child_struct_36095 = cljs.core.first(seq__35137_36089__$1);
var children_36096 = shadow.dom.dom_node(child_struct_36095);
if(cljs.core.seq_QMARK_(children_36096)){
var seq__35215_36100 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36096));
var chunk__35217_36101 = null;
var count__35218_36102 = (0);
var i__35219_36103 = (0);
while(true){
if((i__35219_36103 < count__35218_36102)){
var child_36105 = chunk__35217_36101.cljs$core$IIndexed$_nth$arity$2(null,i__35219_36103);
if(cljs.core.truth_(child_36105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36105);


var G__36106 = seq__35215_36100;
var G__36107 = chunk__35217_36101;
var G__36108 = count__35218_36102;
var G__36109 = (i__35219_36103 + (1));
seq__35215_36100 = G__36106;
chunk__35217_36101 = G__36107;
count__35218_36102 = G__36108;
i__35219_36103 = G__36109;
continue;
} else {
var G__36110 = seq__35215_36100;
var G__36111 = chunk__35217_36101;
var G__36112 = count__35218_36102;
var G__36113 = (i__35219_36103 + (1));
seq__35215_36100 = G__36110;
chunk__35217_36101 = G__36111;
count__35218_36102 = G__36112;
i__35219_36103 = G__36113;
continue;
}
} else {
var temp__5753__auto___36114__$1 = cljs.core.seq(seq__35215_36100);
if(temp__5753__auto___36114__$1){
var seq__35215_36115__$1 = temp__5753__auto___36114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35215_36115__$1)){
var c__4638__auto___36116 = cljs.core.chunk_first(seq__35215_36115__$1);
var G__36117 = cljs.core.chunk_rest(seq__35215_36115__$1);
var G__36118 = c__4638__auto___36116;
var G__36119 = cljs.core.count(c__4638__auto___36116);
var G__36120 = (0);
seq__35215_36100 = G__36117;
chunk__35217_36101 = G__36118;
count__35218_36102 = G__36119;
i__35219_36103 = G__36120;
continue;
} else {
var child_36121 = cljs.core.first(seq__35215_36115__$1);
if(cljs.core.truth_(child_36121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36121);


var G__36122 = cljs.core.next(seq__35215_36115__$1);
var G__36123 = null;
var G__36124 = (0);
var G__36125 = (0);
seq__35215_36100 = G__36122;
chunk__35217_36101 = G__36123;
count__35218_36102 = G__36124;
i__35219_36103 = G__36125;
continue;
} else {
var G__36126 = cljs.core.next(seq__35215_36115__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__35215_36100 = G__36126;
chunk__35217_36101 = G__36127;
count__35218_36102 = G__36128;
i__35219_36103 = G__36129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36096);
}


var G__36130 = cljs.core.next(seq__35137_36089__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__35137_36048 = G__36130;
chunk__35138_36049 = G__36131;
count__35139_36050 = G__36132;
i__35140_36051 = G__36133;
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
var seq__35253 = cljs.core.seq(node);
var chunk__35255 = null;
var count__35256 = (0);
var i__35257 = (0);
while(true){
if((i__35257 < count__35256)){
var n = chunk__35255.cljs$core$IIndexed$_nth$arity$2(null,i__35257);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36144 = seq__35253;
var G__36145 = chunk__35255;
var G__36146 = count__35256;
var G__36147 = (i__35257 + (1));
seq__35253 = G__36144;
chunk__35255 = G__36145;
count__35256 = G__36146;
i__35257 = G__36147;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35253);
if(temp__5753__auto__){
var seq__35253__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35253__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35253__$1);
var G__36148 = cljs.core.chunk_rest(seq__35253__$1);
var G__36149 = c__4638__auto__;
var G__36150 = cljs.core.count(c__4638__auto__);
var G__36151 = (0);
seq__35253 = G__36148;
chunk__35255 = G__36149;
count__35256 = G__36150;
i__35257 = G__36151;
continue;
} else {
var n = cljs.core.first(seq__35253__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36152 = cljs.core.next(seq__35253__$1);
var G__36153 = null;
var G__36154 = (0);
var G__36155 = (0);
seq__35253 = G__36152;
chunk__35255 = G__36153;
count__35256 = G__36154;
i__35257 = G__36155;
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
var G__35274 = arguments.length;
switch (G__35274) {
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
var G__35281 = arguments.length;
switch (G__35281) {
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
var G__35294 = arguments.length;
switch (G__35294) {
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
var len__4818__auto___36170 = arguments.length;
var i__4819__auto___36171 = (0);
while(true){
if((i__4819__auto___36171 < len__4818__auto___36170)){
args__4824__auto__.push((arguments[i__4819__auto___36171]));

var G__36172 = (i__4819__auto___36171 + (1));
i__4819__auto___36171 = G__36172;
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
var seq__35315_36173 = cljs.core.seq(nodes);
var chunk__35316_36174 = null;
var count__35317_36175 = (0);
var i__35318_36176 = (0);
while(true){
if((i__35318_36176 < count__35317_36175)){
var node_36178 = chunk__35316_36174.cljs$core$IIndexed$_nth$arity$2(null,i__35318_36176);
fragment.appendChild(shadow.dom._to_dom(node_36178));


var G__36179 = seq__35315_36173;
var G__36180 = chunk__35316_36174;
var G__36181 = count__35317_36175;
var G__36182 = (i__35318_36176 + (1));
seq__35315_36173 = G__36179;
chunk__35316_36174 = G__36180;
count__35317_36175 = G__36181;
i__35318_36176 = G__36182;
continue;
} else {
var temp__5753__auto___36183 = cljs.core.seq(seq__35315_36173);
if(temp__5753__auto___36183){
var seq__35315_36184__$1 = temp__5753__auto___36183;
if(cljs.core.chunked_seq_QMARK_(seq__35315_36184__$1)){
var c__4638__auto___36185 = cljs.core.chunk_first(seq__35315_36184__$1);
var G__36186 = cljs.core.chunk_rest(seq__35315_36184__$1);
var G__36187 = c__4638__auto___36185;
var G__36188 = cljs.core.count(c__4638__auto___36185);
var G__36189 = (0);
seq__35315_36173 = G__36186;
chunk__35316_36174 = G__36187;
count__35317_36175 = G__36188;
i__35318_36176 = G__36189;
continue;
} else {
var node_36190 = cljs.core.first(seq__35315_36184__$1);
fragment.appendChild(shadow.dom._to_dom(node_36190));


var G__36191 = cljs.core.next(seq__35315_36184__$1);
var G__36192 = null;
var G__36193 = (0);
var G__36194 = (0);
seq__35315_36173 = G__36191;
chunk__35316_36174 = G__36192;
count__35317_36175 = G__36193;
i__35318_36176 = G__36194;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35310){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35310));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35336_36199 = cljs.core.seq(scripts);
var chunk__35337_36200 = null;
var count__35338_36201 = (0);
var i__35339_36202 = (0);
while(true){
if((i__35339_36202 < count__35338_36201)){
var vec__35352_36203 = chunk__35337_36200.cljs$core$IIndexed$_nth$arity$2(null,i__35339_36202);
var script_tag_36204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352_36203,(0),null);
var script_body_36205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352_36203,(1),null);
eval(script_body_36205);


var G__36206 = seq__35336_36199;
var G__36207 = chunk__35337_36200;
var G__36208 = count__35338_36201;
var G__36209 = (i__35339_36202 + (1));
seq__35336_36199 = G__36206;
chunk__35337_36200 = G__36207;
count__35338_36201 = G__36208;
i__35339_36202 = G__36209;
continue;
} else {
var temp__5753__auto___36212 = cljs.core.seq(seq__35336_36199);
if(temp__5753__auto___36212){
var seq__35336_36214__$1 = temp__5753__auto___36212;
if(cljs.core.chunked_seq_QMARK_(seq__35336_36214__$1)){
var c__4638__auto___36216 = cljs.core.chunk_first(seq__35336_36214__$1);
var G__36217 = cljs.core.chunk_rest(seq__35336_36214__$1);
var G__36218 = c__4638__auto___36216;
var G__36219 = cljs.core.count(c__4638__auto___36216);
var G__36220 = (0);
seq__35336_36199 = G__36217;
chunk__35337_36200 = G__36218;
count__35338_36201 = G__36219;
i__35339_36202 = G__36220;
continue;
} else {
var vec__35357_36221 = cljs.core.first(seq__35336_36214__$1);
var script_tag_36222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35357_36221,(0),null);
var script_body_36223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35357_36221,(1),null);
eval(script_body_36223);


var G__36225 = cljs.core.next(seq__35336_36214__$1);
var G__36226 = null;
var G__36227 = (0);
var G__36228 = (0);
seq__35336_36199 = G__36225;
chunk__35337_36200 = G__36226;
count__35338_36201 = G__36227;
i__35339_36202 = G__36228;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35363){
var vec__35364 = p__35363;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(1),null);
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
var G__35371 = arguments.length;
switch (G__35371) {
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
var seq__35382 = cljs.core.seq(style_keys);
var chunk__35383 = null;
var count__35384 = (0);
var i__35385 = (0);
while(true){
if((i__35385 < count__35384)){
var it = chunk__35383.cljs$core$IIndexed$_nth$arity$2(null,i__35385);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36235 = seq__35382;
var G__36236 = chunk__35383;
var G__36237 = count__35384;
var G__36238 = (i__35385 + (1));
seq__35382 = G__36235;
chunk__35383 = G__36236;
count__35384 = G__36237;
i__35385 = G__36238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35382);
if(temp__5753__auto__){
var seq__35382__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35382__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35382__$1);
var G__36243 = cljs.core.chunk_rest(seq__35382__$1);
var G__36244 = c__4638__auto__;
var G__36245 = cljs.core.count(c__4638__auto__);
var G__36246 = (0);
seq__35382 = G__36243;
chunk__35383 = G__36244;
count__35384 = G__36245;
i__35385 = G__36246;
continue;
} else {
var it = cljs.core.first(seq__35382__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36247 = cljs.core.next(seq__35382__$1);
var G__36248 = null;
var G__36249 = (0);
var G__36250 = (0);
seq__35382 = G__36247;
chunk__35383 = G__36248;
count__35384 = G__36249;
i__35385 = G__36250;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35411,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35432 = k35411;
var G__35432__$1 = (((G__35432 instanceof cljs.core.Keyword))?G__35432.fqn:null);
switch (G__35432__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35411,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35439){
var vec__35441 = p__35439;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35410){
var self__ = this;
var G__35410__$1 = this;
return (new cljs.core.RecordIter((0),G__35410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35412,other35413){
var self__ = this;
var this35412__$1 = this;
return (((!((other35413 == null)))) && ((((this35412__$1.constructor === other35413.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35412__$1.x,other35413.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35412__$1.y,other35413.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35412__$1.__extmap,other35413.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35411){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35536 = k35411;
var G__35536__$1 = (((G__35536 instanceof cljs.core.Keyword))?G__35536.fqn:null);
switch (G__35536__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35411);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35410){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35550 = cljs.core.keyword_identical_QMARK_;
var expr__35551 = k__4470__auto__;
if(cljs.core.truth_((pred__35550.cljs$core$IFn$_invoke$arity$2 ? pred__35550.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35551) : pred__35550.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35551)))){
return (new shadow.dom.Coordinate(G__35410,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35550.cljs$core$IFn$_invoke$arity$2 ? pred__35550.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35551) : pred__35550.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35551)))){
return (new shadow.dom.Coordinate(self__.x,G__35410,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35410),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35410){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35410,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35420){
var extmap__4501__auto__ = (function (){var G__35585 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35585);
} else {
return G__35585;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35420),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35609,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35626 = k35609;
var G__35626__$1 = (((G__35626 instanceof cljs.core.Keyword))?G__35626.fqn:null);
switch (G__35626__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35609,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35633){
var vec__35634 = p__35633;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35608){
var self__ = this;
var G__35608__$1 = this;
return (new cljs.core.RecordIter((0),G__35608__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35610,other35611){
var self__ = this;
var this35610__$1 = this;
return (((!((other35611 == null)))) && ((((this35610__$1.constructor === other35611.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35610__$1.w,other35611.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35610__$1.h,other35611.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35610__$1.__extmap,other35611.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35609){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35690 = k35609;
var G__35690__$1 = (((G__35690 instanceof cljs.core.Keyword))?G__35690.fqn:null);
switch (G__35690__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35609);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35608){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35702 = cljs.core.keyword_identical_QMARK_;
var expr__35703 = k__4470__auto__;
if(cljs.core.truth_((pred__35702.cljs$core$IFn$_invoke$arity$2 ? pred__35702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35703) : pred__35702.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35703)))){
return (new shadow.dom.Size(G__35608,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35702.cljs$core$IFn$_invoke$arity$2 ? pred__35702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35703) : pred__35702.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35703)))){
return (new shadow.dom.Size(self__.w,G__35608,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35608),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35608){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35608,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35615){
var extmap__4501__auto__ = (function (){var G__35718 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35615,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35615)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35718);
} else {
return G__35718;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35615),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35615),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__36337 = (i + (1));
var G__36338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36337;
ret = G__36338;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35799){
var vec__35800 = p__35799;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35800,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35810 = arguments.length;
switch (G__35810) {
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
var G__36345 = ps;
var G__36346 = (i + (1));
el__$1 = G__36345;
i = G__36346;
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
var vec__35822 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35830_36354 = cljs.core.seq(props);
var chunk__35831_36355 = null;
var count__35832_36356 = (0);
var i__35833_36357 = (0);
while(true){
if((i__35833_36357 < count__35832_36356)){
var vec__35847_36358 = chunk__35831_36355.cljs$core$IIndexed$_nth$arity$2(null,i__35833_36357);
var k_36359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35847_36358,(0),null);
var v_36360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35847_36358,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36359);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36359),v_36360);


var G__36361 = seq__35830_36354;
var G__36362 = chunk__35831_36355;
var G__36363 = count__35832_36356;
var G__36364 = (i__35833_36357 + (1));
seq__35830_36354 = G__36361;
chunk__35831_36355 = G__36362;
count__35832_36356 = G__36363;
i__35833_36357 = G__36364;
continue;
} else {
var temp__5753__auto___36365 = cljs.core.seq(seq__35830_36354);
if(temp__5753__auto___36365){
var seq__35830_36366__$1 = temp__5753__auto___36365;
if(cljs.core.chunked_seq_QMARK_(seq__35830_36366__$1)){
var c__4638__auto___36367 = cljs.core.chunk_first(seq__35830_36366__$1);
var G__36368 = cljs.core.chunk_rest(seq__35830_36366__$1);
var G__36369 = c__4638__auto___36367;
var G__36370 = cljs.core.count(c__4638__auto___36367);
var G__36371 = (0);
seq__35830_36354 = G__36368;
chunk__35831_36355 = G__36369;
count__35832_36356 = G__36370;
i__35833_36357 = G__36371;
continue;
} else {
var vec__35854_36372 = cljs.core.first(seq__35830_36366__$1);
var k_36373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854_36372,(0),null);
var v_36374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854_36372,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36373);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36373),v_36374);


var G__36379 = cljs.core.next(seq__35830_36366__$1);
var G__36380 = null;
var G__36381 = (0);
var G__36382 = (0);
seq__35830_36354 = G__36379;
chunk__35831_36355 = G__36380;
count__35832_36356 = G__36381;
i__35833_36357 = G__36382;
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
var vec__35862 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35862,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35862,(1),null);
var seq__35865_36386 = cljs.core.seq(node_children);
var chunk__35867_36387 = null;
var count__35868_36388 = (0);
var i__35869_36389 = (0);
while(true){
if((i__35869_36389 < count__35868_36388)){
var child_struct_36390 = chunk__35867_36387.cljs$core$IIndexed$_nth$arity$2(null,i__35869_36389);
if((!((child_struct_36390 == null)))){
if(typeof child_struct_36390 === 'string'){
var text_36391 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36391),child_struct_36390].join(''));
} else {
var children_36392 = shadow.dom.svg_node(child_struct_36390);
if(cljs.core.seq_QMARK_(children_36392)){
var seq__35900_36393 = cljs.core.seq(children_36392);
var chunk__35902_36394 = null;
var count__35903_36395 = (0);
var i__35904_36396 = (0);
while(true){
if((i__35904_36396 < count__35903_36395)){
var child_36397 = chunk__35902_36394.cljs$core$IIndexed$_nth$arity$2(null,i__35904_36396);
if(cljs.core.truth_(child_36397)){
node.appendChild(child_36397);


var G__36398 = seq__35900_36393;
var G__36399 = chunk__35902_36394;
var G__36400 = count__35903_36395;
var G__36401 = (i__35904_36396 + (1));
seq__35900_36393 = G__36398;
chunk__35902_36394 = G__36399;
count__35903_36395 = G__36400;
i__35904_36396 = G__36401;
continue;
} else {
var G__36402 = seq__35900_36393;
var G__36403 = chunk__35902_36394;
var G__36404 = count__35903_36395;
var G__36405 = (i__35904_36396 + (1));
seq__35900_36393 = G__36402;
chunk__35902_36394 = G__36403;
count__35903_36395 = G__36404;
i__35904_36396 = G__36405;
continue;
}
} else {
var temp__5753__auto___36406 = cljs.core.seq(seq__35900_36393);
if(temp__5753__auto___36406){
var seq__35900_36407__$1 = temp__5753__auto___36406;
if(cljs.core.chunked_seq_QMARK_(seq__35900_36407__$1)){
var c__4638__auto___36408 = cljs.core.chunk_first(seq__35900_36407__$1);
var G__36409 = cljs.core.chunk_rest(seq__35900_36407__$1);
var G__36410 = c__4638__auto___36408;
var G__36411 = cljs.core.count(c__4638__auto___36408);
var G__36412 = (0);
seq__35900_36393 = G__36409;
chunk__35902_36394 = G__36410;
count__35903_36395 = G__36411;
i__35904_36396 = G__36412;
continue;
} else {
var child_36416 = cljs.core.first(seq__35900_36407__$1);
if(cljs.core.truth_(child_36416)){
node.appendChild(child_36416);


var G__36417 = cljs.core.next(seq__35900_36407__$1);
var G__36418 = null;
var G__36419 = (0);
var G__36420 = (0);
seq__35900_36393 = G__36417;
chunk__35902_36394 = G__36418;
count__35903_36395 = G__36419;
i__35904_36396 = G__36420;
continue;
} else {
var G__36421 = cljs.core.next(seq__35900_36407__$1);
var G__36422 = null;
var G__36423 = (0);
var G__36424 = (0);
seq__35900_36393 = G__36421;
chunk__35902_36394 = G__36422;
count__35903_36395 = G__36423;
i__35904_36396 = G__36424;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36392);
}
}


var G__36425 = seq__35865_36386;
var G__36426 = chunk__35867_36387;
var G__36427 = count__35868_36388;
var G__36428 = (i__35869_36389 + (1));
seq__35865_36386 = G__36425;
chunk__35867_36387 = G__36426;
count__35868_36388 = G__36427;
i__35869_36389 = G__36428;
continue;
} else {
var G__36429 = seq__35865_36386;
var G__36430 = chunk__35867_36387;
var G__36431 = count__35868_36388;
var G__36432 = (i__35869_36389 + (1));
seq__35865_36386 = G__36429;
chunk__35867_36387 = G__36430;
count__35868_36388 = G__36431;
i__35869_36389 = G__36432;
continue;
}
} else {
var temp__5753__auto___36433 = cljs.core.seq(seq__35865_36386);
if(temp__5753__auto___36433){
var seq__35865_36434__$1 = temp__5753__auto___36433;
if(cljs.core.chunked_seq_QMARK_(seq__35865_36434__$1)){
var c__4638__auto___36435 = cljs.core.chunk_first(seq__35865_36434__$1);
var G__36436 = cljs.core.chunk_rest(seq__35865_36434__$1);
var G__36437 = c__4638__auto___36435;
var G__36438 = cljs.core.count(c__4638__auto___36435);
var G__36439 = (0);
seq__35865_36386 = G__36436;
chunk__35867_36387 = G__36437;
count__35868_36388 = G__36438;
i__35869_36389 = G__36439;
continue;
} else {
var child_struct_36440 = cljs.core.first(seq__35865_36434__$1);
if((!((child_struct_36440 == null)))){
if(typeof child_struct_36440 === 'string'){
var text_36441 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36441),child_struct_36440].join(''));
} else {
var children_36442 = shadow.dom.svg_node(child_struct_36440);
if(cljs.core.seq_QMARK_(children_36442)){
var seq__35914_36443 = cljs.core.seq(children_36442);
var chunk__35916_36444 = null;
var count__35917_36445 = (0);
var i__35918_36446 = (0);
while(true){
if((i__35918_36446 < count__35917_36445)){
var child_36448 = chunk__35916_36444.cljs$core$IIndexed$_nth$arity$2(null,i__35918_36446);
if(cljs.core.truth_(child_36448)){
node.appendChild(child_36448);


var G__36453 = seq__35914_36443;
var G__36454 = chunk__35916_36444;
var G__36455 = count__35917_36445;
var G__36456 = (i__35918_36446 + (1));
seq__35914_36443 = G__36453;
chunk__35916_36444 = G__36454;
count__35917_36445 = G__36455;
i__35918_36446 = G__36456;
continue;
} else {
var G__36457 = seq__35914_36443;
var G__36458 = chunk__35916_36444;
var G__36459 = count__35917_36445;
var G__36460 = (i__35918_36446 + (1));
seq__35914_36443 = G__36457;
chunk__35916_36444 = G__36458;
count__35917_36445 = G__36459;
i__35918_36446 = G__36460;
continue;
}
} else {
var temp__5753__auto___36461__$1 = cljs.core.seq(seq__35914_36443);
if(temp__5753__auto___36461__$1){
var seq__35914_36462__$1 = temp__5753__auto___36461__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35914_36462__$1)){
var c__4638__auto___36463 = cljs.core.chunk_first(seq__35914_36462__$1);
var G__36464 = cljs.core.chunk_rest(seq__35914_36462__$1);
var G__36465 = c__4638__auto___36463;
var G__36466 = cljs.core.count(c__4638__auto___36463);
var G__36467 = (0);
seq__35914_36443 = G__36464;
chunk__35916_36444 = G__36465;
count__35917_36445 = G__36466;
i__35918_36446 = G__36467;
continue;
} else {
var child_36468 = cljs.core.first(seq__35914_36462__$1);
if(cljs.core.truth_(child_36468)){
node.appendChild(child_36468);


var G__36469 = cljs.core.next(seq__35914_36462__$1);
var G__36470 = null;
var G__36471 = (0);
var G__36472 = (0);
seq__35914_36443 = G__36469;
chunk__35916_36444 = G__36470;
count__35917_36445 = G__36471;
i__35918_36446 = G__36472;
continue;
} else {
var G__36473 = cljs.core.next(seq__35914_36462__$1);
var G__36474 = null;
var G__36475 = (0);
var G__36476 = (0);
seq__35914_36443 = G__36473;
chunk__35916_36444 = G__36474;
count__35917_36445 = G__36475;
i__35918_36446 = G__36476;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36442);
}
}


var G__36477 = cljs.core.next(seq__35865_36434__$1);
var G__36478 = null;
var G__36479 = (0);
var G__36480 = (0);
seq__35865_36386 = G__36477;
chunk__35867_36387 = G__36478;
count__35868_36388 = G__36479;
i__35869_36389 = G__36480;
continue;
} else {
var G__36481 = cljs.core.next(seq__35865_36434__$1);
var G__36482 = null;
var G__36483 = (0);
var G__36484 = (0);
seq__35865_36386 = G__36481;
chunk__35867_36387 = G__36482;
count__35868_36388 = G__36483;
i__35869_36389 = G__36484;
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
var len__4818__auto___36490 = arguments.length;
var i__4819__auto___36491 = (0);
while(true){
if((i__4819__auto___36491 < len__4818__auto___36490)){
args__4824__auto__.push((arguments[i__4819__auto___36491]));

var G__36492 = (i__4819__auto___36491 + (1));
i__4819__auto___36491 = G__36492;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35931){
var G__35932 = cljs.core.first(seq35931);
var seq35931__$1 = cljs.core.next(seq35931);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35932,seq35931__$1);
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
var G__35940 = arguments.length;
switch (G__35940) {
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
var c__32333__auto___36500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_35945){
var state_val_35946 = (state_35945[(1)]);
if((state_val_35946 === (1))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35945__$1,(2),once_or_cleanup);
} else {
if((state_val_35946 === (2))){
var inst_35942 = (state_35945[(2)]);
var inst_35943 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35945__$1 = (function (){var statearr_35947 = state_35945;
(statearr_35947[(7)] = inst_35942);

return statearr_35947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35945__$1,inst_35943);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32149__auto__ = null;
var shadow$dom$state_machine__32149__auto____0 = (function (){
var statearr_35948 = [null,null,null,null,null,null,null,null];
(statearr_35948[(0)] = shadow$dom$state_machine__32149__auto__);

(statearr_35948[(1)] = (1));

return statearr_35948;
});
var shadow$dom$state_machine__32149__auto____1 = (function (state_35945){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_35945);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e35949){var ex__32152__auto__ = e35949;
var statearr_35950_36501 = state_35945;
(statearr_35950_36501[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_35945[(4)]))){
var statearr_35951_36502 = state_35945;
(statearr_35951_36502[(1)] = cljs.core.first((state_35945[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36504 = state_35945;
state_35945 = G__36504;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
shadow$dom$state_machine__32149__auto__ = function(state_35945){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32149__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32149__auto____1.call(this,state_35945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32149__auto____0;
shadow$dom$state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32149__auto____1;
return shadow$dom$state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_35954 = f__32334__auto__();
(statearr_35954[(6)] = c__32333__auto___36500);

return statearr_35954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
