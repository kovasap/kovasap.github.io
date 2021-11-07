goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35898 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35898(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35899 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35899(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34808 = coll;
var G__34809 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34808,G__34809) : shadow.dom.lazy_native_coll_seq.call(null,G__34808,G__34809));
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
var G__34840 = arguments.length;
switch (G__34840) {
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
var G__34848 = arguments.length;
switch (G__34848) {
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
var G__34857 = arguments.length;
switch (G__34857) {
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
var G__34865 = arguments.length;
switch (G__34865) {
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
var G__34883 = arguments.length;
switch (G__34883) {
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
var G__34895 = arguments.length;
switch (G__34895) {
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
}catch (e34912){if((e34912 instanceof Object)){
var e = e34912;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34912;

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
var seq__34925 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34926 = null;
var count__34927 = (0);
var i__34928 = (0);
while(true){
if((i__34928 < count__34927)){
var el = chunk__34926.cljs$core$IIndexed$_nth$arity$2(null,i__34928);
var handler_35920__$1 = ((function (seq__34925,chunk__34926,count__34927,i__34928,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34925,chunk__34926,count__34927,i__34928,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35920__$1);


var G__35922 = seq__34925;
var G__35923 = chunk__34926;
var G__35924 = count__34927;
var G__35925 = (i__34928 + (1));
seq__34925 = G__35922;
chunk__34926 = G__35923;
count__34927 = G__35924;
i__34928 = G__35925;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34925);
if(temp__5753__auto__){
var seq__34925__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34925__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34925__$1);
var G__35927 = cljs.core.chunk_rest(seq__34925__$1);
var G__35928 = c__4638__auto__;
var G__35929 = cljs.core.count(c__4638__auto__);
var G__35930 = (0);
seq__34925 = G__35927;
chunk__34926 = G__35928;
count__34927 = G__35929;
i__34928 = G__35930;
continue;
} else {
var el = cljs.core.first(seq__34925__$1);
var handler_35931__$1 = ((function (seq__34925,chunk__34926,count__34927,i__34928,el,seq__34925__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34925,chunk__34926,count__34927,i__34928,el,seq__34925__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35931__$1);


var G__35932 = cljs.core.next(seq__34925__$1);
var G__35933 = null;
var G__35934 = (0);
var G__35935 = (0);
seq__34925 = G__35932;
chunk__34926 = G__35933;
count__34927 = G__35934;
i__34928 = G__35935;
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
var G__34951 = arguments.length;
switch (G__34951) {
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
var seq__34960 = cljs.core.seq(events);
var chunk__34961 = null;
var count__34962 = (0);
var i__34963 = (0);
while(true){
if((i__34963 < count__34962)){
var vec__34980 = chunk__34961.cljs$core$IIndexed$_nth$arity$2(null,i__34963);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35943 = seq__34960;
var G__35944 = chunk__34961;
var G__35945 = count__34962;
var G__35946 = (i__34963 + (1));
seq__34960 = G__35943;
chunk__34961 = G__35944;
count__34962 = G__35945;
i__34963 = G__35946;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34960);
if(temp__5753__auto__){
var seq__34960__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34960__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34960__$1);
var G__35947 = cljs.core.chunk_rest(seq__34960__$1);
var G__35948 = c__4638__auto__;
var G__35949 = cljs.core.count(c__4638__auto__);
var G__35950 = (0);
seq__34960 = G__35947;
chunk__34961 = G__35948;
count__34962 = G__35949;
i__34963 = G__35950;
continue;
} else {
var vec__34984 = cljs.core.first(seq__34960__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34984,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35951 = cljs.core.next(seq__34960__$1);
var G__35952 = null;
var G__35953 = (0);
var G__35954 = (0);
seq__34960 = G__35951;
chunk__34961 = G__35952;
count__34962 = G__35953;
i__34963 = G__35954;
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
var seq__34992 = cljs.core.seq(styles);
var chunk__34993 = null;
var count__34994 = (0);
var i__34995 = (0);
while(true){
if((i__34995 < count__34994)){
var vec__35016 = chunk__34993.cljs$core$IIndexed$_nth$arity$2(null,i__34995);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35016,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35955 = seq__34992;
var G__35956 = chunk__34993;
var G__35957 = count__34994;
var G__35958 = (i__34995 + (1));
seq__34992 = G__35955;
chunk__34993 = G__35956;
count__34994 = G__35957;
i__34995 = G__35958;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34992);
if(temp__5753__auto__){
var seq__34992__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34992__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34992__$1);
var G__35959 = cljs.core.chunk_rest(seq__34992__$1);
var G__35960 = c__4638__auto__;
var G__35961 = cljs.core.count(c__4638__auto__);
var G__35962 = (0);
seq__34992 = G__35959;
chunk__34993 = G__35960;
count__34994 = G__35961;
i__34995 = G__35962;
continue;
} else {
var vec__35022 = cljs.core.first(seq__34992__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35022,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35964 = cljs.core.next(seq__34992__$1);
var G__35965 = null;
var G__35966 = (0);
var G__35967 = (0);
seq__34992 = G__35964;
chunk__34993 = G__35965;
count__34994 = G__35966;
i__34995 = G__35967;
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
var G__35027_35968 = key;
var G__35027_35969__$1 = (((G__35027_35968 instanceof cljs.core.Keyword))?G__35027_35968.fqn:null);
switch (G__35027_35969__$1) {
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
var ks_35972 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_35972,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_35972,"aria-");
}
})())){
el.setAttribute(ks_35972,value);
} else {
(el[ks_35972] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35047){
var map__35049 = p__35047;
var map__35049__$1 = cljs.core.__destructure_map(map__35049);
var props = map__35049__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35049__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35051 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35056 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35056,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35056;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35063 = arguments.length;
switch (G__35063) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35070){
var vec__35071 = p__35070;
var seq__35072 = cljs.core.seq(vec__35071);
var first__35073 = cljs.core.first(seq__35072);
var seq__35072__$1 = cljs.core.next(seq__35072);
var nn = first__35073;
var first__35073__$1 = cljs.core.first(seq__35072__$1);
var seq__35072__$2 = cljs.core.next(seq__35072__$1);
var np = first__35073__$1;
var nc = seq__35072__$2;
var node = vec__35071;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35076 = nn;
var G__35077 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35076,G__35077) : create_fn.call(null,G__35076,G__35077));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35080 = nn;
var G__35081 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35080,G__35081) : create_fn.call(null,G__35080,G__35081));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35084 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(1),null);
var seq__35087_35978 = cljs.core.seq(node_children);
var chunk__35088_35979 = null;
var count__35089_35980 = (0);
var i__35090_35981 = (0);
while(true){
if((i__35090_35981 < count__35089_35980)){
var child_struct_35984 = chunk__35088_35979.cljs$core$IIndexed$_nth$arity$2(null,i__35090_35981);
var children_35985 = shadow.dom.dom_node(child_struct_35984);
if(cljs.core.seq_QMARK_(children_35985)){
var seq__35125_35986 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35985));
var chunk__35127_35987 = null;
var count__35128_35988 = (0);
var i__35129_35989 = (0);
while(true){
if((i__35129_35989 < count__35128_35988)){
var child_35990 = chunk__35127_35987.cljs$core$IIndexed$_nth$arity$2(null,i__35129_35989);
if(cljs.core.truth_(child_35990)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35990);


var G__35991 = seq__35125_35986;
var G__35992 = chunk__35127_35987;
var G__35993 = count__35128_35988;
var G__35994 = (i__35129_35989 + (1));
seq__35125_35986 = G__35991;
chunk__35127_35987 = G__35992;
count__35128_35988 = G__35993;
i__35129_35989 = G__35994;
continue;
} else {
var G__35995 = seq__35125_35986;
var G__35996 = chunk__35127_35987;
var G__35997 = count__35128_35988;
var G__35998 = (i__35129_35989 + (1));
seq__35125_35986 = G__35995;
chunk__35127_35987 = G__35996;
count__35128_35988 = G__35997;
i__35129_35989 = G__35998;
continue;
}
} else {
var temp__5753__auto___35999 = cljs.core.seq(seq__35125_35986);
if(temp__5753__auto___35999){
var seq__35125_36000__$1 = temp__5753__auto___35999;
if(cljs.core.chunked_seq_QMARK_(seq__35125_36000__$1)){
var c__4638__auto___36001 = cljs.core.chunk_first(seq__35125_36000__$1);
var G__36002 = cljs.core.chunk_rest(seq__35125_36000__$1);
var G__36003 = c__4638__auto___36001;
var G__36004 = cljs.core.count(c__4638__auto___36001);
var G__36005 = (0);
seq__35125_35986 = G__36002;
chunk__35127_35987 = G__36003;
count__35128_35988 = G__36004;
i__35129_35989 = G__36005;
continue;
} else {
var child_36006 = cljs.core.first(seq__35125_36000__$1);
if(cljs.core.truth_(child_36006)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36006);


var G__36010 = cljs.core.next(seq__35125_36000__$1);
var G__36011 = null;
var G__36012 = (0);
var G__36013 = (0);
seq__35125_35986 = G__36010;
chunk__35127_35987 = G__36011;
count__35128_35988 = G__36012;
i__35129_35989 = G__36013;
continue;
} else {
var G__36014 = cljs.core.next(seq__35125_36000__$1);
var G__36015 = null;
var G__36016 = (0);
var G__36017 = (0);
seq__35125_35986 = G__36014;
chunk__35127_35987 = G__36015;
count__35128_35988 = G__36016;
i__35129_35989 = G__36017;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35985);
}


var G__36018 = seq__35087_35978;
var G__36019 = chunk__35088_35979;
var G__36020 = count__35089_35980;
var G__36021 = (i__35090_35981 + (1));
seq__35087_35978 = G__36018;
chunk__35088_35979 = G__36019;
count__35089_35980 = G__36020;
i__35090_35981 = G__36021;
continue;
} else {
var temp__5753__auto___36022 = cljs.core.seq(seq__35087_35978);
if(temp__5753__auto___36022){
var seq__35087_36023__$1 = temp__5753__auto___36022;
if(cljs.core.chunked_seq_QMARK_(seq__35087_36023__$1)){
var c__4638__auto___36024 = cljs.core.chunk_first(seq__35087_36023__$1);
var G__36025 = cljs.core.chunk_rest(seq__35087_36023__$1);
var G__36026 = c__4638__auto___36024;
var G__36027 = cljs.core.count(c__4638__auto___36024);
var G__36028 = (0);
seq__35087_35978 = G__36025;
chunk__35088_35979 = G__36026;
count__35089_35980 = G__36027;
i__35090_35981 = G__36028;
continue;
} else {
var child_struct_36029 = cljs.core.first(seq__35087_36023__$1);
var children_36030 = shadow.dom.dom_node(child_struct_36029);
if(cljs.core.seq_QMARK_(children_36030)){
var seq__35152_36031 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36030));
var chunk__35154_36032 = null;
var count__35155_36033 = (0);
var i__35156_36034 = (0);
while(true){
if((i__35156_36034 < count__35155_36033)){
var child_36035 = chunk__35154_36032.cljs$core$IIndexed$_nth$arity$2(null,i__35156_36034);
if(cljs.core.truth_(child_36035)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36035);


var G__36036 = seq__35152_36031;
var G__36037 = chunk__35154_36032;
var G__36038 = count__35155_36033;
var G__36039 = (i__35156_36034 + (1));
seq__35152_36031 = G__36036;
chunk__35154_36032 = G__36037;
count__35155_36033 = G__36038;
i__35156_36034 = G__36039;
continue;
} else {
var G__36040 = seq__35152_36031;
var G__36041 = chunk__35154_36032;
var G__36042 = count__35155_36033;
var G__36043 = (i__35156_36034 + (1));
seq__35152_36031 = G__36040;
chunk__35154_36032 = G__36041;
count__35155_36033 = G__36042;
i__35156_36034 = G__36043;
continue;
}
} else {
var temp__5753__auto___36044__$1 = cljs.core.seq(seq__35152_36031);
if(temp__5753__auto___36044__$1){
var seq__35152_36045__$1 = temp__5753__auto___36044__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35152_36045__$1)){
var c__4638__auto___36046 = cljs.core.chunk_first(seq__35152_36045__$1);
var G__36047 = cljs.core.chunk_rest(seq__35152_36045__$1);
var G__36048 = c__4638__auto___36046;
var G__36049 = cljs.core.count(c__4638__auto___36046);
var G__36050 = (0);
seq__35152_36031 = G__36047;
chunk__35154_36032 = G__36048;
count__35155_36033 = G__36049;
i__35156_36034 = G__36050;
continue;
} else {
var child_36051 = cljs.core.first(seq__35152_36045__$1);
if(cljs.core.truth_(child_36051)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36051);


var G__36052 = cljs.core.next(seq__35152_36045__$1);
var G__36053 = null;
var G__36054 = (0);
var G__36055 = (0);
seq__35152_36031 = G__36052;
chunk__35154_36032 = G__36053;
count__35155_36033 = G__36054;
i__35156_36034 = G__36055;
continue;
} else {
var G__36056 = cljs.core.next(seq__35152_36045__$1);
var G__36057 = null;
var G__36058 = (0);
var G__36059 = (0);
seq__35152_36031 = G__36056;
chunk__35154_36032 = G__36057;
count__35155_36033 = G__36058;
i__35156_36034 = G__36059;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36030);
}


var G__36060 = cljs.core.next(seq__35087_36023__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__35087_35978 = G__36060;
chunk__35088_35979 = G__36061;
count__35089_35980 = G__36062;
i__35090_35981 = G__36063;
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
var seq__35178 = cljs.core.seq(node);
var chunk__35179 = null;
var count__35180 = (0);
var i__35181 = (0);
while(true){
if((i__35181 < count__35180)){
var n = chunk__35179.cljs$core$IIndexed$_nth$arity$2(null,i__35181);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36065 = seq__35178;
var G__36066 = chunk__35179;
var G__36067 = count__35180;
var G__36068 = (i__35181 + (1));
seq__35178 = G__36065;
chunk__35179 = G__36066;
count__35180 = G__36067;
i__35181 = G__36068;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35178);
if(temp__5753__auto__){
var seq__35178__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35178__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35178__$1);
var G__36069 = cljs.core.chunk_rest(seq__35178__$1);
var G__36070 = c__4638__auto__;
var G__36071 = cljs.core.count(c__4638__auto__);
var G__36072 = (0);
seq__35178 = G__36069;
chunk__35179 = G__36070;
count__35180 = G__36071;
i__35181 = G__36072;
continue;
} else {
var n = cljs.core.first(seq__35178__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36073 = cljs.core.next(seq__35178__$1);
var G__36074 = null;
var G__36075 = (0);
var G__36076 = (0);
seq__35178 = G__36073;
chunk__35179 = G__36074;
count__35180 = G__36075;
i__35181 = G__36076;
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
var G__35187 = arguments.length;
switch (G__35187) {
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
var G__35194 = arguments.length;
switch (G__35194) {
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
var G__35208 = arguments.length;
switch (G__35208) {
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
var len__4818__auto___36082 = arguments.length;
var i__4819__auto___36083 = (0);
while(true){
if((i__4819__auto___36083 < len__4818__auto___36082)){
args__4824__auto__.push((arguments[i__4819__auto___36083]));

var G__36085 = (i__4819__auto___36083 + (1));
i__4819__auto___36083 = G__36085;
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
var seq__35234_36090 = cljs.core.seq(nodes);
var chunk__35235_36091 = null;
var count__35236_36092 = (0);
var i__35237_36093 = (0);
while(true){
if((i__35237_36093 < count__35236_36092)){
var node_36094 = chunk__35235_36091.cljs$core$IIndexed$_nth$arity$2(null,i__35237_36093);
fragment.appendChild(shadow.dom._to_dom(node_36094));


var G__36095 = seq__35234_36090;
var G__36096 = chunk__35235_36091;
var G__36097 = count__35236_36092;
var G__36098 = (i__35237_36093 + (1));
seq__35234_36090 = G__36095;
chunk__35235_36091 = G__36096;
count__35236_36092 = G__36097;
i__35237_36093 = G__36098;
continue;
} else {
var temp__5753__auto___36099 = cljs.core.seq(seq__35234_36090);
if(temp__5753__auto___36099){
var seq__35234_36100__$1 = temp__5753__auto___36099;
if(cljs.core.chunked_seq_QMARK_(seq__35234_36100__$1)){
var c__4638__auto___36101 = cljs.core.chunk_first(seq__35234_36100__$1);
var G__36102 = cljs.core.chunk_rest(seq__35234_36100__$1);
var G__36103 = c__4638__auto___36101;
var G__36104 = cljs.core.count(c__4638__auto___36101);
var G__36105 = (0);
seq__35234_36090 = G__36102;
chunk__35235_36091 = G__36103;
count__35236_36092 = G__36104;
i__35237_36093 = G__36105;
continue;
} else {
var node_36107 = cljs.core.first(seq__35234_36100__$1);
fragment.appendChild(shadow.dom._to_dom(node_36107));


var G__36109 = cljs.core.next(seq__35234_36100__$1);
var G__36110 = null;
var G__36111 = (0);
var G__36112 = (0);
seq__35234_36090 = G__36109;
chunk__35235_36091 = G__36110;
count__35236_36092 = G__36111;
i__35237_36093 = G__36112;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35225){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35225));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35245_36113 = cljs.core.seq(scripts);
var chunk__35246_36114 = null;
var count__35247_36115 = (0);
var i__35248_36116 = (0);
while(true){
if((i__35248_36116 < count__35247_36115)){
var vec__35256_36117 = chunk__35246_36114.cljs$core$IIndexed$_nth$arity$2(null,i__35248_36116);
var script_tag_36118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256_36117,(0),null);
var script_body_36119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256_36117,(1),null);
eval(script_body_36119);


var G__36120 = seq__35245_36113;
var G__36121 = chunk__35246_36114;
var G__36122 = count__35247_36115;
var G__36123 = (i__35248_36116 + (1));
seq__35245_36113 = G__36120;
chunk__35246_36114 = G__36121;
count__35247_36115 = G__36122;
i__35248_36116 = G__36123;
continue;
} else {
var temp__5753__auto___36124 = cljs.core.seq(seq__35245_36113);
if(temp__5753__auto___36124){
var seq__35245_36125__$1 = temp__5753__auto___36124;
if(cljs.core.chunked_seq_QMARK_(seq__35245_36125__$1)){
var c__4638__auto___36126 = cljs.core.chunk_first(seq__35245_36125__$1);
var G__36127 = cljs.core.chunk_rest(seq__35245_36125__$1);
var G__36128 = c__4638__auto___36126;
var G__36129 = cljs.core.count(c__4638__auto___36126);
var G__36130 = (0);
seq__35245_36113 = G__36127;
chunk__35246_36114 = G__36128;
count__35247_36115 = G__36129;
i__35248_36116 = G__36130;
continue;
} else {
var vec__35259_36131 = cljs.core.first(seq__35245_36125__$1);
var script_tag_36132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259_36131,(0),null);
var script_body_36133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259_36131,(1),null);
eval(script_body_36133);


var G__36135 = cljs.core.next(seq__35245_36125__$1);
var G__36136 = null;
var G__36137 = (0);
var G__36138 = (0);
seq__35245_36113 = G__36135;
chunk__35246_36114 = G__36136;
count__35247_36115 = G__36137;
i__35248_36116 = G__36138;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35262){
var vec__35263 = p__35262;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,(1),null);
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
var G__35276 = arguments.length;
switch (G__35276) {
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
var seq__35295 = cljs.core.seq(style_keys);
var chunk__35296 = null;
var count__35297 = (0);
var i__35298 = (0);
while(true){
if((i__35298 < count__35297)){
var it = chunk__35296.cljs$core$IIndexed$_nth$arity$2(null,i__35298);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36146 = seq__35295;
var G__36147 = chunk__35296;
var G__36148 = count__35297;
var G__36149 = (i__35298 + (1));
seq__35295 = G__36146;
chunk__35296 = G__36147;
count__35297 = G__36148;
i__35298 = G__36149;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35295);
if(temp__5753__auto__){
var seq__35295__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35295__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35295__$1);
var G__36150 = cljs.core.chunk_rest(seq__35295__$1);
var G__36151 = c__4638__auto__;
var G__36152 = cljs.core.count(c__4638__auto__);
var G__36153 = (0);
seq__35295 = G__36150;
chunk__35296 = G__36151;
count__35297 = G__36152;
i__35298 = G__36153;
continue;
} else {
var it = cljs.core.first(seq__35295__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36154 = cljs.core.next(seq__35295__$1);
var G__36155 = null;
var G__36156 = (0);
var G__36157 = (0);
seq__35295 = G__36154;
chunk__35296 = G__36155;
count__35297 = G__36156;
i__35298 = G__36157;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35306,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35314 = k35306;
var G__35314__$1 = (((G__35314 instanceof cljs.core.Keyword))?G__35314.fqn:null);
switch (G__35314__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35306,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35316){
var vec__35317 = p__35316;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35317,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35317,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35305){
var self__ = this;
var G__35305__$1 = this;
return (new cljs.core.RecordIter((0),G__35305__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35307,other35308){
var self__ = this;
var this35307__$1 = this;
return (((!((other35308 == null)))) && ((((this35307__$1.constructor === other35308.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35307__$1.x,other35308.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35307__$1.y,other35308.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35307__$1.__extmap,other35308.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35306){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35337 = k35306;
var G__35337__$1 = (((G__35337 instanceof cljs.core.Keyword))?G__35337.fqn:null);
switch (G__35337__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35306);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35305){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35339 = cljs.core.keyword_identical_QMARK_;
var expr__35340 = k__4470__auto__;
if(cljs.core.truth_((pred__35339.cljs$core$IFn$_invoke$arity$2 ? pred__35339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35340) : pred__35339.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35340)))){
return (new shadow.dom.Coordinate(G__35305,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35339.cljs$core$IFn$_invoke$arity$2 ? pred__35339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35340) : pred__35339.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35340)))){
return (new shadow.dom.Coordinate(self__.x,G__35305,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35305),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35305){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35305,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35309){
var extmap__4501__auto__ = (function (){var G__35351 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35309,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35309)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35351);
} else {
return G__35351;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35309),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35309),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35364,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35375 = k35364;
var G__35375__$1 = (((G__35375 instanceof cljs.core.Keyword))?G__35375.fqn:null);
switch (G__35375__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35364,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35379){
var vec__35380 = p__35379;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35363){
var self__ = this;
var G__35363__$1 = this;
return (new cljs.core.RecordIter((0),G__35363__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35365,other35366){
var self__ = this;
var this35365__$1 = this;
return (((!((other35366 == null)))) && ((((this35365__$1.constructor === other35366.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35365__$1.w,other35366.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35365__$1.h,other35366.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35365__$1.__extmap,other35366.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35364){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35398 = k35364;
var G__35398__$1 = (((G__35398 instanceof cljs.core.Keyword))?G__35398.fqn:null);
switch (G__35398__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35364);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35363){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35400 = cljs.core.keyword_identical_QMARK_;
var expr__35401 = k__4470__auto__;
if(cljs.core.truth_((pred__35400.cljs$core$IFn$_invoke$arity$2 ? pred__35400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35401) : pred__35400.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35401)))){
return (new shadow.dom.Size(G__35363,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35400.cljs$core$IFn$_invoke$arity$2 ? pred__35400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35401) : pred__35400.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35401)))){
return (new shadow.dom.Size(self__.w,G__35363,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35363),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35363){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35363,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35368){
var extmap__4501__auto__ = (function (){var G__35414 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35368,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35368)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35414);
} else {
return G__35414;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35368),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35368),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__36184 = (i + (1));
var G__36185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36184;
ret = G__36185;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35463){
var vec__35466 = p__35463;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35479 = arguments.length;
switch (G__35479) {
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
var G__36187 = ps;
var G__36188 = (i + (1));
el__$1 = G__36187;
i = G__36188;
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
var vec__35610 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35622_36191 = cljs.core.seq(props);
var chunk__35623_36192 = null;
var count__35624_36193 = (0);
var i__35625_36194 = (0);
while(true){
if((i__35625_36194 < count__35624_36193)){
var vec__35651_36196 = chunk__35623_36192.cljs$core$IIndexed$_nth$arity$2(null,i__35625_36194);
var k_36197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35651_36196,(0),null);
var v_36198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35651_36196,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36197);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36197),v_36198);


var G__36199 = seq__35622_36191;
var G__36200 = chunk__35623_36192;
var G__36201 = count__35624_36193;
var G__36202 = (i__35625_36194 + (1));
seq__35622_36191 = G__36199;
chunk__35623_36192 = G__36200;
count__35624_36193 = G__36201;
i__35625_36194 = G__36202;
continue;
} else {
var temp__5753__auto___36203 = cljs.core.seq(seq__35622_36191);
if(temp__5753__auto___36203){
var seq__35622_36204__$1 = temp__5753__auto___36203;
if(cljs.core.chunked_seq_QMARK_(seq__35622_36204__$1)){
var c__4638__auto___36205 = cljs.core.chunk_first(seq__35622_36204__$1);
var G__36206 = cljs.core.chunk_rest(seq__35622_36204__$1);
var G__36207 = c__4638__auto___36205;
var G__36208 = cljs.core.count(c__4638__auto___36205);
var G__36209 = (0);
seq__35622_36191 = G__36206;
chunk__35623_36192 = G__36207;
count__35624_36193 = G__36208;
i__35625_36194 = G__36209;
continue;
} else {
var vec__35660_36210 = cljs.core.first(seq__35622_36204__$1);
var k_36211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660_36210,(0),null);
var v_36212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660_36210,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36211);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36211),v_36212);


var G__36213 = cljs.core.next(seq__35622_36204__$1);
var G__36214 = null;
var G__36215 = (0);
var G__36216 = (0);
seq__35622_36191 = G__36213;
chunk__35623_36192 = G__36214;
count__35624_36193 = G__36215;
i__35625_36194 = G__36216;
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
var vec__35679 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35679,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35679,(1),null);
var seq__35685_36217 = cljs.core.seq(node_children);
var chunk__35687_36218 = null;
var count__35688_36219 = (0);
var i__35689_36220 = (0);
while(true){
if((i__35689_36220 < count__35688_36219)){
var child_struct_36221 = chunk__35687_36218.cljs$core$IIndexed$_nth$arity$2(null,i__35689_36220);
if((!((child_struct_36221 == null)))){
if(typeof child_struct_36221 === 'string'){
var text_36223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36223),child_struct_36221].join(''));
} else {
var children_36224 = shadow.dom.svg_node(child_struct_36221);
if(cljs.core.seq_QMARK_(children_36224)){
var seq__35769_36225 = cljs.core.seq(children_36224);
var chunk__35771_36226 = null;
var count__35772_36227 = (0);
var i__35773_36228 = (0);
while(true){
if((i__35773_36228 < count__35772_36227)){
var child_36229 = chunk__35771_36226.cljs$core$IIndexed$_nth$arity$2(null,i__35773_36228);
if(cljs.core.truth_(child_36229)){
node.appendChild(child_36229);


var G__36230 = seq__35769_36225;
var G__36231 = chunk__35771_36226;
var G__36232 = count__35772_36227;
var G__36233 = (i__35773_36228 + (1));
seq__35769_36225 = G__36230;
chunk__35771_36226 = G__36231;
count__35772_36227 = G__36232;
i__35773_36228 = G__36233;
continue;
} else {
var G__36234 = seq__35769_36225;
var G__36235 = chunk__35771_36226;
var G__36236 = count__35772_36227;
var G__36237 = (i__35773_36228 + (1));
seq__35769_36225 = G__36234;
chunk__35771_36226 = G__36235;
count__35772_36227 = G__36236;
i__35773_36228 = G__36237;
continue;
}
} else {
var temp__5753__auto___36238 = cljs.core.seq(seq__35769_36225);
if(temp__5753__auto___36238){
var seq__35769_36239__$1 = temp__5753__auto___36238;
if(cljs.core.chunked_seq_QMARK_(seq__35769_36239__$1)){
var c__4638__auto___36240 = cljs.core.chunk_first(seq__35769_36239__$1);
var G__36241 = cljs.core.chunk_rest(seq__35769_36239__$1);
var G__36242 = c__4638__auto___36240;
var G__36243 = cljs.core.count(c__4638__auto___36240);
var G__36244 = (0);
seq__35769_36225 = G__36241;
chunk__35771_36226 = G__36242;
count__35772_36227 = G__36243;
i__35773_36228 = G__36244;
continue;
} else {
var child_36245 = cljs.core.first(seq__35769_36239__$1);
if(cljs.core.truth_(child_36245)){
node.appendChild(child_36245);


var G__36246 = cljs.core.next(seq__35769_36239__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__35769_36225 = G__36246;
chunk__35771_36226 = G__36247;
count__35772_36227 = G__36248;
i__35773_36228 = G__36249;
continue;
} else {
var G__36250 = cljs.core.next(seq__35769_36239__$1);
var G__36251 = null;
var G__36252 = (0);
var G__36253 = (0);
seq__35769_36225 = G__36250;
chunk__35771_36226 = G__36251;
count__35772_36227 = G__36252;
i__35773_36228 = G__36253;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36224);
}
}


var G__36254 = seq__35685_36217;
var G__36255 = chunk__35687_36218;
var G__36256 = count__35688_36219;
var G__36257 = (i__35689_36220 + (1));
seq__35685_36217 = G__36254;
chunk__35687_36218 = G__36255;
count__35688_36219 = G__36256;
i__35689_36220 = G__36257;
continue;
} else {
var G__36258 = seq__35685_36217;
var G__36259 = chunk__35687_36218;
var G__36260 = count__35688_36219;
var G__36261 = (i__35689_36220 + (1));
seq__35685_36217 = G__36258;
chunk__35687_36218 = G__36259;
count__35688_36219 = G__36260;
i__35689_36220 = G__36261;
continue;
}
} else {
var temp__5753__auto___36262 = cljs.core.seq(seq__35685_36217);
if(temp__5753__auto___36262){
var seq__35685_36263__$1 = temp__5753__auto___36262;
if(cljs.core.chunked_seq_QMARK_(seq__35685_36263__$1)){
var c__4638__auto___36264 = cljs.core.chunk_first(seq__35685_36263__$1);
var G__36265 = cljs.core.chunk_rest(seq__35685_36263__$1);
var G__36266 = c__4638__auto___36264;
var G__36267 = cljs.core.count(c__4638__auto___36264);
var G__36268 = (0);
seq__35685_36217 = G__36265;
chunk__35687_36218 = G__36266;
count__35688_36219 = G__36267;
i__35689_36220 = G__36268;
continue;
} else {
var child_struct_36269 = cljs.core.first(seq__35685_36263__$1);
if((!((child_struct_36269 == null)))){
if(typeof child_struct_36269 === 'string'){
var text_36270 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36270),child_struct_36269].join(''));
} else {
var children_36271 = shadow.dom.svg_node(child_struct_36269);
if(cljs.core.seq_QMARK_(children_36271)){
var seq__35798_36272 = cljs.core.seq(children_36271);
var chunk__35800_36273 = null;
var count__35801_36274 = (0);
var i__35802_36275 = (0);
while(true){
if((i__35802_36275 < count__35801_36274)){
var child_36276 = chunk__35800_36273.cljs$core$IIndexed$_nth$arity$2(null,i__35802_36275);
if(cljs.core.truth_(child_36276)){
node.appendChild(child_36276);


var G__36277 = seq__35798_36272;
var G__36278 = chunk__35800_36273;
var G__36279 = count__35801_36274;
var G__36280 = (i__35802_36275 + (1));
seq__35798_36272 = G__36277;
chunk__35800_36273 = G__36278;
count__35801_36274 = G__36279;
i__35802_36275 = G__36280;
continue;
} else {
var G__36281 = seq__35798_36272;
var G__36282 = chunk__35800_36273;
var G__36283 = count__35801_36274;
var G__36284 = (i__35802_36275 + (1));
seq__35798_36272 = G__36281;
chunk__35800_36273 = G__36282;
count__35801_36274 = G__36283;
i__35802_36275 = G__36284;
continue;
}
} else {
var temp__5753__auto___36285__$1 = cljs.core.seq(seq__35798_36272);
if(temp__5753__auto___36285__$1){
var seq__35798_36286__$1 = temp__5753__auto___36285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35798_36286__$1)){
var c__4638__auto___36287 = cljs.core.chunk_first(seq__35798_36286__$1);
var G__36288 = cljs.core.chunk_rest(seq__35798_36286__$1);
var G__36289 = c__4638__auto___36287;
var G__36290 = cljs.core.count(c__4638__auto___36287);
var G__36291 = (0);
seq__35798_36272 = G__36288;
chunk__35800_36273 = G__36289;
count__35801_36274 = G__36290;
i__35802_36275 = G__36291;
continue;
} else {
var child_36292 = cljs.core.first(seq__35798_36286__$1);
if(cljs.core.truth_(child_36292)){
node.appendChild(child_36292);


var G__36293 = cljs.core.next(seq__35798_36286__$1);
var G__36294 = null;
var G__36295 = (0);
var G__36296 = (0);
seq__35798_36272 = G__36293;
chunk__35800_36273 = G__36294;
count__35801_36274 = G__36295;
i__35802_36275 = G__36296;
continue;
} else {
var G__36297 = cljs.core.next(seq__35798_36286__$1);
var G__36298 = null;
var G__36299 = (0);
var G__36300 = (0);
seq__35798_36272 = G__36297;
chunk__35800_36273 = G__36298;
count__35801_36274 = G__36299;
i__35802_36275 = G__36300;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36271);
}
}


var G__36301 = cljs.core.next(seq__35685_36263__$1);
var G__36302 = null;
var G__36303 = (0);
var G__36304 = (0);
seq__35685_36217 = G__36301;
chunk__35687_36218 = G__36302;
count__35688_36219 = G__36303;
i__35689_36220 = G__36304;
continue;
} else {
var G__36305 = cljs.core.next(seq__35685_36263__$1);
var G__36306 = null;
var G__36307 = (0);
var G__36308 = (0);
seq__35685_36217 = G__36305;
chunk__35687_36218 = G__36306;
count__35688_36219 = G__36307;
i__35689_36220 = G__36308;
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
var len__4818__auto___36313 = arguments.length;
var i__4819__auto___36314 = (0);
while(true){
if((i__4819__auto___36314 < len__4818__auto___36313)){
args__4824__auto__.push((arguments[i__4819__auto___36314]));

var G__36319 = (i__4819__auto___36314 + (1));
i__4819__auto___36314 = G__36319;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35860){
var G__35861 = cljs.core.first(seq35860);
var seq35860__$1 = cljs.core.next(seq35860);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35861,seq35860__$1);
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
var G__35869 = arguments.length;
switch (G__35869) {
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
var c__32412__auto___36327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32413__auto__ = (function (){var switch__32074__auto__ = (function (state_35878){
var state_val_35879 = (state_35878[(1)]);
if((state_val_35879 === (1))){
var state_35878__$1 = state_35878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35878__$1,(2),once_or_cleanup);
} else {
if((state_val_35879 === (2))){
var inst_35875 = (state_35878[(2)]);
var inst_35876 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35878__$1 = (function (){var statearr_35884 = state_35878;
(statearr_35884[(7)] = inst_35875);

return statearr_35884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35878__$1,inst_35876);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32075__auto__ = null;
var shadow$dom$state_machine__32075__auto____0 = (function (){
var statearr_35885 = [null,null,null,null,null,null,null,null];
(statearr_35885[(0)] = shadow$dom$state_machine__32075__auto__);

(statearr_35885[(1)] = (1));

return statearr_35885;
});
var shadow$dom$state_machine__32075__auto____1 = (function (state_35878){
while(true){
var ret_value__32076__auto__ = (function (){try{while(true){
var result__32077__auto__ = switch__32074__auto__(state_35878);
if(cljs.core.keyword_identical_QMARK_(result__32077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32077__auto__;
}
break;
}
}catch (e35886){var ex__32078__auto__ = e35886;
var statearr_35887_36329 = state_35878;
(statearr_35887_36329[(2)] = ex__32078__auto__);


if(cljs.core.seq((state_35878[(4)]))){
var statearr_35888_36330 = state_35878;
(statearr_35888_36330[(1)] = cljs.core.first((state_35878[(4)])));

} else {
throw ex__32078__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36331 = state_35878;
state_35878 = G__36331;
continue;
} else {
return ret_value__32076__auto__;
}
break;
}
});
shadow$dom$state_machine__32075__auto__ = function(state_35878){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32075__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32075__auto____1.call(this,state_35878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32075__auto____0;
shadow$dom$state_machine__32075__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32075__auto____1;
return shadow$dom$state_machine__32075__auto__;
})()
})();
var state__32414__auto__ = (function (){var statearr_35891 = f__32413__auto__();
(statearr_35891[(6)] = c__32412__auto___36327);

return statearr_35891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32414__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
