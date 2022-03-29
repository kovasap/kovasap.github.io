goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61765 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_61765(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61770 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_61770(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60886 = coll;
var G__60887 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60886,G__60887) : shadow.dom.lazy_native_coll_seq.call(null,G__60886,G__60887));
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
var G__60918 = arguments.length;
switch (G__60918) {
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
var G__60926 = arguments.length;
switch (G__60926) {
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
var G__60930 = arguments.length;
switch (G__60930) {
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
var G__60943 = arguments.length;
switch (G__60943) {
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
var G__60957 = arguments.length;
switch (G__60957) {
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
var G__60970 = arguments.length;
switch (G__60970) {
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
}catch (e60984){if((e60984 instanceof Object)){
var e = e60984;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60984;

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
var seq__60992 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60993 = null;
var count__60994 = (0);
var i__60995 = (0);
while(true){
if((i__60995 < count__60994)){
var el = chunk__60993.cljs$core$IIndexed$_nth$arity$2(null,i__60995);
var handler_61811__$1 = ((function (seq__60992,chunk__60993,count__60994,i__60995,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60992,chunk__60993,count__60994,i__60995,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61811__$1);


var G__61812 = seq__60992;
var G__61813 = chunk__60993;
var G__61814 = count__60994;
var G__61815 = (i__60995 + (1));
seq__60992 = G__61812;
chunk__60993 = G__61813;
count__60994 = G__61814;
i__60995 = G__61815;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60992);
if(temp__5753__auto__){
var seq__60992__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60992__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60992__$1);
var G__61817 = cljs.core.chunk_rest(seq__60992__$1);
var G__61818 = c__4679__auto__;
var G__61819 = cljs.core.count(c__4679__auto__);
var G__61820 = (0);
seq__60992 = G__61817;
chunk__60993 = G__61818;
count__60994 = G__61819;
i__60995 = G__61820;
continue;
} else {
var el = cljs.core.first(seq__60992__$1);
var handler_61821__$1 = ((function (seq__60992,chunk__60993,count__60994,i__60995,el,seq__60992__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60992,chunk__60993,count__60994,i__60995,el,seq__60992__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61821__$1);


var G__61823 = cljs.core.next(seq__60992__$1);
var G__61824 = null;
var G__61825 = (0);
var G__61826 = (0);
seq__60992 = G__61823;
chunk__60993 = G__61824;
count__60994 = G__61825;
i__60995 = G__61826;
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
var G__61014 = arguments.length;
switch (G__61014) {
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
var seq__61025 = cljs.core.seq(events);
var chunk__61026 = null;
var count__61027 = (0);
var i__61028 = (0);
while(true){
if((i__61028 < count__61027)){
var vec__61044 = chunk__61026.cljs$core$IIndexed$_nth$arity$2(null,i__61028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61044,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61829 = seq__61025;
var G__61830 = chunk__61026;
var G__61831 = count__61027;
var G__61832 = (i__61028 + (1));
seq__61025 = G__61829;
chunk__61026 = G__61830;
count__61027 = G__61831;
i__61028 = G__61832;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61025);
if(temp__5753__auto__){
var seq__61025__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61025__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61025__$1);
var G__61834 = cljs.core.chunk_rest(seq__61025__$1);
var G__61835 = c__4679__auto__;
var G__61836 = cljs.core.count(c__4679__auto__);
var G__61837 = (0);
seq__61025 = G__61834;
chunk__61026 = G__61835;
count__61027 = G__61836;
i__61028 = G__61837;
continue;
} else {
var vec__61049 = cljs.core.first(seq__61025__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61049,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61838 = cljs.core.next(seq__61025__$1);
var G__61839 = null;
var G__61840 = (0);
var G__61841 = (0);
seq__61025 = G__61838;
chunk__61026 = G__61839;
count__61027 = G__61840;
i__61028 = G__61841;
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
var seq__61054 = cljs.core.seq(styles);
var chunk__61055 = null;
var count__61056 = (0);
var i__61057 = (0);
while(true){
if((i__61057 < count__61056)){
var vec__61072 = chunk__61055.cljs$core$IIndexed$_nth$arity$2(null,i__61057);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61072,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61844 = seq__61054;
var G__61845 = chunk__61055;
var G__61846 = count__61056;
var G__61847 = (i__61057 + (1));
seq__61054 = G__61844;
chunk__61055 = G__61845;
count__61056 = G__61846;
i__61057 = G__61847;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61054);
if(temp__5753__auto__){
var seq__61054__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61054__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61054__$1);
var G__61848 = cljs.core.chunk_rest(seq__61054__$1);
var G__61849 = c__4679__auto__;
var G__61850 = cljs.core.count(c__4679__auto__);
var G__61851 = (0);
seq__61054 = G__61848;
chunk__61055 = G__61849;
count__61056 = G__61850;
i__61057 = G__61851;
continue;
} else {
var vec__61077 = cljs.core.first(seq__61054__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61077,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61853 = cljs.core.next(seq__61054__$1);
var G__61854 = null;
var G__61855 = (0);
var G__61856 = (0);
seq__61054 = G__61853;
chunk__61055 = G__61854;
count__61056 = G__61855;
i__61057 = G__61856;
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
var G__61085_61858 = key;
var G__61085_61859__$1 = (((G__61085_61858 instanceof cljs.core.Keyword))?G__61085_61858.fqn:null);
switch (G__61085_61859__$1) {
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
var ks_61865 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_61865,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_61865,"aria-");
}
})())){
el.setAttribute(ks_61865,value);
} else {
(el[ks_61865] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61102){
var map__61104 = p__61102;
var map__61104__$1 = cljs.core.__destructure_map(map__61104);
var props = map__61104__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61104__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61105 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61105,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61105,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61105,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61109 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61109,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61109;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61112 = arguments.length;
switch (G__61112) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61126){
var vec__61127 = p__61126;
var seq__61128 = cljs.core.seq(vec__61127);
var first__61129 = cljs.core.first(seq__61128);
var seq__61128__$1 = cljs.core.next(seq__61128);
var nn = first__61129;
var first__61129__$1 = cljs.core.first(seq__61128__$1);
var seq__61128__$2 = cljs.core.next(seq__61128__$1);
var np = first__61129__$1;
var nc = seq__61128__$2;
var node = vec__61127;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61132 = nn;
var G__61133 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61132,G__61133) : create_fn.call(null,G__61132,G__61133));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61135 = nn;
var G__61136 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61135,G__61136) : create_fn.call(null,G__61135,G__61136));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61143 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61143,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61143,(1),null);
var seq__61147_61882 = cljs.core.seq(node_children);
var chunk__61148_61883 = null;
var count__61149_61884 = (0);
var i__61150_61885 = (0);
while(true){
if((i__61150_61885 < count__61149_61884)){
var child_struct_61886 = chunk__61148_61883.cljs$core$IIndexed$_nth$arity$2(null,i__61150_61885);
var children_61887 = shadow.dom.dom_node(child_struct_61886);
if(cljs.core.seq_QMARK_(children_61887)){
var seq__61201_61889 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61887));
var chunk__61203_61890 = null;
var count__61204_61891 = (0);
var i__61205_61892 = (0);
while(true){
if((i__61205_61892 < count__61204_61891)){
var child_61894 = chunk__61203_61890.cljs$core$IIndexed$_nth$arity$2(null,i__61205_61892);
if(cljs.core.truth_(child_61894)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61894);


var G__61895 = seq__61201_61889;
var G__61896 = chunk__61203_61890;
var G__61897 = count__61204_61891;
var G__61898 = (i__61205_61892 + (1));
seq__61201_61889 = G__61895;
chunk__61203_61890 = G__61896;
count__61204_61891 = G__61897;
i__61205_61892 = G__61898;
continue;
} else {
var G__61900 = seq__61201_61889;
var G__61901 = chunk__61203_61890;
var G__61902 = count__61204_61891;
var G__61903 = (i__61205_61892 + (1));
seq__61201_61889 = G__61900;
chunk__61203_61890 = G__61901;
count__61204_61891 = G__61902;
i__61205_61892 = G__61903;
continue;
}
} else {
var temp__5753__auto___61904 = cljs.core.seq(seq__61201_61889);
if(temp__5753__auto___61904){
var seq__61201_61905__$1 = temp__5753__auto___61904;
if(cljs.core.chunked_seq_QMARK_(seq__61201_61905__$1)){
var c__4679__auto___61906 = cljs.core.chunk_first(seq__61201_61905__$1);
var G__61907 = cljs.core.chunk_rest(seq__61201_61905__$1);
var G__61908 = c__4679__auto___61906;
var G__61909 = cljs.core.count(c__4679__auto___61906);
var G__61910 = (0);
seq__61201_61889 = G__61907;
chunk__61203_61890 = G__61908;
count__61204_61891 = G__61909;
i__61205_61892 = G__61910;
continue;
} else {
var child_61912 = cljs.core.first(seq__61201_61905__$1);
if(cljs.core.truth_(child_61912)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61912);


var G__61915 = cljs.core.next(seq__61201_61905__$1);
var G__61916 = null;
var G__61917 = (0);
var G__61918 = (0);
seq__61201_61889 = G__61915;
chunk__61203_61890 = G__61916;
count__61204_61891 = G__61917;
i__61205_61892 = G__61918;
continue;
} else {
var G__61928 = cljs.core.next(seq__61201_61905__$1);
var G__61929 = null;
var G__61930 = (0);
var G__61931 = (0);
seq__61201_61889 = G__61928;
chunk__61203_61890 = G__61929;
count__61204_61891 = G__61930;
i__61205_61892 = G__61931;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61887);
}


var G__61932 = seq__61147_61882;
var G__61933 = chunk__61148_61883;
var G__61934 = count__61149_61884;
var G__61935 = (i__61150_61885 + (1));
seq__61147_61882 = G__61932;
chunk__61148_61883 = G__61933;
count__61149_61884 = G__61934;
i__61150_61885 = G__61935;
continue;
} else {
var temp__5753__auto___61937 = cljs.core.seq(seq__61147_61882);
if(temp__5753__auto___61937){
var seq__61147_61938__$1 = temp__5753__auto___61937;
if(cljs.core.chunked_seq_QMARK_(seq__61147_61938__$1)){
var c__4679__auto___61939 = cljs.core.chunk_first(seq__61147_61938__$1);
var G__61940 = cljs.core.chunk_rest(seq__61147_61938__$1);
var G__61942 = c__4679__auto___61939;
var G__61943 = cljs.core.count(c__4679__auto___61939);
var G__61944 = (0);
seq__61147_61882 = G__61940;
chunk__61148_61883 = G__61942;
count__61149_61884 = G__61943;
i__61150_61885 = G__61944;
continue;
} else {
var child_struct_61945 = cljs.core.first(seq__61147_61938__$1);
var children_61946 = shadow.dom.dom_node(child_struct_61945);
if(cljs.core.seq_QMARK_(children_61946)){
var seq__61224_61947 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61946));
var chunk__61227_61948 = null;
var count__61228_61949 = (0);
var i__61229_61950 = (0);
while(true){
if((i__61229_61950 < count__61228_61949)){
var child_61952 = chunk__61227_61948.cljs$core$IIndexed$_nth$arity$2(null,i__61229_61950);
if(cljs.core.truth_(child_61952)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61952);


var G__61954 = seq__61224_61947;
var G__61955 = chunk__61227_61948;
var G__61956 = count__61228_61949;
var G__61957 = (i__61229_61950 + (1));
seq__61224_61947 = G__61954;
chunk__61227_61948 = G__61955;
count__61228_61949 = G__61956;
i__61229_61950 = G__61957;
continue;
} else {
var G__61958 = seq__61224_61947;
var G__61959 = chunk__61227_61948;
var G__61960 = count__61228_61949;
var G__61961 = (i__61229_61950 + (1));
seq__61224_61947 = G__61958;
chunk__61227_61948 = G__61959;
count__61228_61949 = G__61960;
i__61229_61950 = G__61961;
continue;
}
} else {
var temp__5753__auto___61962__$1 = cljs.core.seq(seq__61224_61947);
if(temp__5753__auto___61962__$1){
var seq__61224_61963__$1 = temp__5753__auto___61962__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61224_61963__$1)){
var c__4679__auto___61964 = cljs.core.chunk_first(seq__61224_61963__$1);
var G__61965 = cljs.core.chunk_rest(seq__61224_61963__$1);
var G__61966 = c__4679__auto___61964;
var G__61967 = cljs.core.count(c__4679__auto___61964);
var G__61968 = (0);
seq__61224_61947 = G__61965;
chunk__61227_61948 = G__61966;
count__61228_61949 = G__61967;
i__61229_61950 = G__61968;
continue;
} else {
var child_61969 = cljs.core.first(seq__61224_61963__$1);
if(cljs.core.truth_(child_61969)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61969);


var G__61970 = cljs.core.next(seq__61224_61963__$1);
var G__61971 = null;
var G__61972 = (0);
var G__61973 = (0);
seq__61224_61947 = G__61970;
chunk__61227_61948 = G__61971;
count__61228_61949 = G__61972;
i__61229_61950 = G__61973;
continue;
} else {
var G__61974 = cljs.core.next(seq__61224_61963__$1);
var G__61975 = null;
var G__61976 = (0);
var G__61977 = (0);
seq__61224_61947 = G__61974;
chunk__61227_61948 = G__61975;
count__61228_61949 = G__61976;
i__61229_61950 = G__61977;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61946);
}


var G__61979 = cljs.core.next(seq__61147_61938__$1);
var G__61980 = null;
var G__61981 = (0);
var G__61982 = (0);
seq__61147_61882 = G__61979;
chunk__61148_61883 = G__61980;
count__61149_61884 = G__61981;
i__61150_61885 = G__61982;
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
var seq__61254 = cljs.core.seq(node);
var chunk__61255 = null;
var count__61256 = (0);
var i__61257 = (0);
while(true){
if((i__61257 < count__61256)){
var n = chunk__61255.cljs$core$IIndexed$_nth$arity$2(null,i__61257);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61987 = seq__61254;
var G__61988 = chunk__61255;
var G__61989 = count__61256;
var G__61990 = (i__61257 + (1));
seq__61254 = G__61987;
chunk__61255 = G__61988;
count__61256 = G__61989;
i__61257 = G__61990;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61254);
if(temp__5753__auto__){
var seq__61254__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61254__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61254__$1);
var G__61993 = cljs.core.chunk_rest(seq__61254__$1);
var G__61994 = c__4679__auto__;
var G__61995 = cljs.core.count(c__4679__auto__);
var G__61996 = (0);
seq__61254 = G__61993;
chunk__61255 = G__61994;
count__61256 = G__61995;
i__61257 = G__61996;
continue;
} else {
var n = cljs.core.first(seq__61254__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61999 = cljs.core.next(seq__61254__$1);
var G__62000 = null;
var G__62001 = (0);
var G__62002 = (0);
seq__61254 = G__61999;
chunk__61255 = G__62000;
count__61256 = G__62001;
i__61257 = G__62002;
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
var G__61269 = arguments.length;
switch (G__61269) {
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
var G__61272 = arguments.length;
switch (G__61272) {
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
var G__61280 = arguments.length;
switch (G__61280) {
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
var len__4864__auto___62016 = arguments.length;
var i__4865__auto___62017 = (0);
while(true){
if((i__4865__auto___62017 < len__4864__auto___62016)){
args__4870__auto__.push((arguments[i__4865__auto___62017]));

var G__62018 = (i__4865__auto___62017 + (1));
i__4865__auto___62017 = G__62018;
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
var seq__61301_62021 = cljs.core.seq(nodes);
var chunk__61302_62022 = null;
var count__61303_62023 = (0);
var i__61304_62024 = (0);
while(true){
if((i__61304_62024 < count__61303_62023)){
var node_62026 = chunk__61302_62022.cljs$core$IIndexed$_nth$arity$2(null,i__61304_62024);
fragment.appendChild(shadow.dom._to_dom(node_62026));


var G__62028 = seq__61301_62021;
var G__62029 = chunk__61302_62022;
var G__62030 = count__61303_62023;
var G__62031 = (i__61304_62024 + (1));
seq__61301_62021 = G__62028;
chunk__61302_62022 = G__62029;
count__61303_62023 = G__62030;
i__61304_62024 = G__62031;
continue;
} else {
var temp__5753__auto___62032 = cljs.core.seq(seq__61301_62021);
if(temp__5753__auto___62032){
var seq__61301_62033__$1 = temp__5753__auto___62032;
if(cljs.core.chunked_seq_QMARK_(seq__61301_62033__$1)){
var c__4679__auto___62034 = cljs.core.chunk_first(seq__61301_62033__$1);
var G__62035 = cljs.core.chunk_rest(seq__61301_62033__$1);
var G__62036 = c__4679__auto___62034;
var G__62037 = cljs.core.count(c__4679__auto___62034);
var G__62038 = (0);
seq__61301_62021 = G__62035;
chunk__61302_62022 = G__62036;
count__61303_62023 = G__62037;
i__61304_62024 = G__62038;
continue;
} else {
var node_62039 = cljs.core.first(seq__61301_62033__$1);
fragment.appendChild(shadow.dom._to_dom(node_62039));


var G__62041 = cljs.core.next(seq__61301_62033__$1);
var G__62042 = null;
var G__62043 = (0);
var G__62044 = (0);
seq__61301_62021 = G__62041;
chunk__61302_62022 = G__62042;
count__61303_62023 = G__62043;
i__61304_62024 = G__62044;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61296){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61296));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61312_62047 = cljs.core.seq(scripts);
var chunk__61313_62048 = null;
var count__61314_62049 = (0);
var i__61315_62050 = (0);
while(true){
if((i__61315_62050 < count__61314_62049)){
var vec__61327_62051 = chunk__61313_62048.cljs$core$IIndexed$_nth$arity$2(null,i__61315_62050);
var script_tag_62052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61327_62051,(0),null);
var script_body_62053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61327_62051,(1),null);
eval(script_body_62053);


var G__62054 = seq__61312_62047;
var G__62055 = chunk__61313_62048;
var G__62056 = count__61314_62049;
var G__62057 = (i__61315_62050 + (1));
seq__61312_62047 = G__62054;
chunk__61313_62048 = G__62055;
count__61314_62049 = G__62056;
i__61315_62050 = G__62057;
continue;
} else {
var temp__5753__auto___62059 = cljs.core.seq(seq__61312_62047);
if(temp__5753__auto___62059){
var seq__61312_62060__$1 = temp__5753__auto___62059;
if(cljs.core.chunked_seq_QMARK_(seq__61312_62060__$1)){
var c__4679__auto___62061 = cljs.core.chunk_first(seq__61312_62060__$1);
var G__62062 = cljs.core.chunk_rest(seq__61312_62060__$1);
var G__62063 = c__4679__auto___62061;
var G__62064 = cljs.core.count(c__4679__auto___62061);
var G__62065 = (0);
seq__61312_62047 = G__62062;
chunk__61313_62048 = G__62063;
count__61314_62049 = G__62064;
i__61315_62050 = G__62065;
continue;
} else {
var vec__61332_62066 = cljs.core.first(seq__61312_62060__$1);
var script_tag_62067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61332_62066,(0),null);
var script_body_62068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61332_62066,(1),null);
eval(script_body_62068);


var G__62070 = cljs.core.next(seq__61312_62060__$1);
var G__62071 = null;
var G__62072 = (0);
var G__62073 = (0);
seq__61312_62047 = G__62070;
chunk__61313_62048 = G__62071;
count__61314_62049 = G__62072;
i__61315_62050 = G__62073;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61337){
var vec__61340 = p__61337;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61340,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61340,(1),null);
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
var G__61358 = arguments.length;
switch (G__61358) {
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
var seq__61380 = cljs.core.seq(style_keys);
var chunk__61381 = null;
var count__61382 = (0);
var i__61383 = (0);
while(true){
if((i__61383 < count__61382)){
var it = chunk__61381.cljs$core$IIndexed$_nth$arity$2(null,i__61383);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62084 = seq__61380;
var G__62085 = chunk__61381;
var G__62086 = count__61382;
var G__62087 = (i__61383 + (1));
seq__61380 = G__62084;
chunk__61381 = G__62085;
count__61382 = G__62086;
i__61383 = G__62087;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61380);
if(temp__5753__auto__){
var seq__61380__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61380__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61380__$1);
var G__62088 = cljs.core.chunk_rest(seq__61380__$1);
var G__62089 = c__4679__auto__;
var G__62090 = cljs.core.count(c__4679__auto__);
var G__62091 = (0);
seq__61380 = G__62088;
chunk__61381 = G__62089;
count__61382 = G__62090;
i__61383 = G__62091;
continue;
} else {
var it = cljs.core.first(seq__61380__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62098 = cljs.core.next(seq__61380__$1);
var G__62099 = null;
var G__62100 = (0);
var G__62101 = (0);
seq__61380 = G__62098;
chunk__61381 = G__62099;
count__61382 = G__62100;
i__61383 = G__62101;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k61387,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__61397 = k61387;
var G__61397__$1 = (((G__61397 instanceof cljs.core.Keyword))?G__61397.fqn:null);
switch (G__61397__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61387,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__61402){
var vec__61404 = p__61402;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61404,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61404,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61386){
var self__ = this;
var G__61386__$1 = this;
return (new cljs.core.RecordIter((0),G__61386__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61388,other61389){
var self__ = this;
var this61388__$1 = this;
return (((!((other61389 == null)))) && ((((this61388__$1.constructor === other61389.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61388__$1.x,other61389.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61388__$1.y,other61389.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61388__$1.__extmap,other61389.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k61387){
var self__ = this;
var this__4509__auto____$1 = this;
var G__61413 = k61387;
var G__61413__$1 = (((G__61413 instanceof cljs.core.Keyword))?G__61413.fqn:null);
switch (G__61413__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61387);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__61386){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__61416 = cljs.core.keyword_identical_QMARK_;
var expr__61417 = k__4511__auto__;
if(cljs.core.truth_((pred__61416.cljs$core$IFn$_invoke$arity$2 ? pred__61416.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61417) : pred__61416.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61417)))){
return (new shadow.dom.Coordinate(G__61386,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61416.cljs$core$IFn$_invoke$arity$2 ? pred__61416.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61417) : pred__61416.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61417)))){
return (new shadow.dom.Coordinate(self__.x,G__61386,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__61386),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__61386){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61386,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61391){
var extmap__4542__auto__ = (function (){var G__61425 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61391,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61391)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61425);
} else {
return G__61425;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61391),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61391),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k61439,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__61453 = k61439;
var G__61453__$1 = (((G__61453 instanceof cljs.core.Keyword))?G__61453.fqn:null);
switch (G__61453__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61439,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__61460){
var vec__61461 = p__61460;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61461,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61461,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61438){
var self__ = this;
var G__61438__$1 = this;
return (new cljs.core.RecordIter((0),G__61438__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61440,other61441){
var self__ = this;
var this61440__$1 = this;
return (((!((other61441 == null)))) && ((((this61440__$1.constructor === other61441.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.w,other61441.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.h,other61441.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.__extmap,other61441.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k61439){
var self__ = this;
var this__4509__auto____$1 = this;
var G__61474 = k61439;
var G__61474__$1 = (((G__61474 instanceof cljs.core.Keyword))?G__61474.fqn:null);
switch (G__61474__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61439);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__61438){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__61475 = cljs.core.keyword_identical_QMARK_;
var expr__61476 = k__4511__auto__;
if(cljs.core.truth_((pred__61475.cljs$core$IFn$_invoke$arity$2 ? pred__61475.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61476) : pred__61475.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61476)))){
return (new shadow.dom.Size(G__61438,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61475.cljs$core$IFn$_invoke$arity$2 ? pred__61475.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61476) : pred__61475.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61476)))){
return (new shadow.dom.Size(self__.w,G__61438,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__61438),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__61438){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61438,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61443){
var extmap__4542__auto__ = (function (){var G__61498 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61443,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61443)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61498);
} else {
return G__61498;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61443),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61443),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__62141 = (i + (1));
var G__62142 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62141;
ret = G__62142;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61539){
var vec__61540 = p__61539;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61540,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61547 = arguments.length;
switch (G__61547) {
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
var G__62146 = ps;
var G__62147 = (i + (1));
el__$1 = G__62146;
i = G__62147;
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
var vec__61590 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61590,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61590,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61590,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61593_62148 = cljs.core.seq(props);
var chunk__61594_62149 = null;
var count__61595_62150 = (0);
var i__61596_62151 = (0);
while(true){
if((i__61596_62151 < count__61595_62150)){
var vec__61608_62152 = chunk__61594_62149.cljs$core$IIndexed$_nth$arity$2(null,i__61596_62151);
var k_62153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61608_62152,(0),null);
var v_62154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61608_62152,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_62153);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62153),v_62154);


var G__62155 = seq__61593_62148;
var G__62156 = chunk__61594_62149;
var G__62157 = count__61595_62150;
var G__62158 = (i__61596_62151 + (1));
seq__61593_62148 = G__62155;
chunk__61594_62149 = G__62156;
count__61595_62150 = G__62157;
i__61596_62151 = G__62158;
continue;
} else {
var temp__5753__auto___62159 = cljs.core.seq(seq__61593_62148);
if(temp__5753__auto___62159){
var seq__61593_62160__$1 = temp__5753__auto___62159;
if(cljs.core.chunked_seq_QMARK_(seq__61593_62160__$1)){
var c__4679__auto___62161 = cljs.core.chunk_first(seq__61593_62160__$1);
var G__62162 = cljs.core.chunk_rest(seq__61593_62160__$1);
var G__62163 = c__4679__auto___62161;
var G__62164 = cljs.core.count(c__4679__auto___62161);
var G__62165 = (0);
seq__61593_62148 = G__62162;
chunk__61594_62149 = G__62163;
count__61595_62150 = G__62164;
i__61596_62151 = G__62165;
continue;
} else {
var vec__61614_62166 = cljs.core.first(seq__61593_62160__$1);
var k_62167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61614_62166,(0),null);
var v_62168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61614_62166,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_62167);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62167),v_62168);


var G__62178 = cljs.core.next(seq__61593_62160__$1);
var G__62179 = null;
var G__62180 = (0);
var G__62181 = (0);
seq__61593_62148 = G__62178;
chunk__61594_62149 = G__62179;
count__61595_62150 = G__62180;
i__61596_62151 = G__62181;
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
var vec__61622 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61622,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61622,(1),null);
var seq__61626_62184 = cljs.core.seq(node_children);
var chunk__61628_62185 = null;
var count__61629_62186 = (0);
var i__61630_62187 = (0);
while(true){
if((i__61630_62187 < count__61629_62186)){
var child_struct_62189 = chunk__61628_62185.cljs$core$IIndexed$_nth$arity$2(null,i__61630_62187);
if((!((child_struct_62189 == null)))){
if(typeof child_struct_62189 === 'string'){
var text_62190 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62190),child_struct_62189].join(''));
} else {
var children_62191 = shadow.dom.svg_node(child_struct_62189);
if(cljs.core.seq_QMARK_(children_62191)){
var seq__61671_62192 = cljs.core.seq(children_62191);
var chunk__61673_62193 = null;
var count__61674_62194 = (0);
var i__61675_62195 = (0);
while(true){
if((i__61675_62195 < count__61674_62194)){
var child_62196 = chunk__61673_62193.cljs$core$IIndexed$_nth$arity$2(null,i__61675_62195);
if(cljs.core.truth_(child_62196)){
node.appendChild(child_62196);


var G__62197 = seq__61671_62192;
var G__62198 = chunk__61673_62193;
var G__62199 = count__61674_62194;
var G__62200 = (i__61675_62195 + (1));
seq__61671_62192 = G__62197;
chunk__61673_62193 = G__62198;
count__61674_62194 = G__62199;
i__61675_62195 = G__62200;
continue;
} else {
var G__62201 = seq__61671_62192;
var G__62202 = chunk__61673_62193;
var G__62203 = count__61674_62194;
var G__62204 = (i__61675_62195 + (1));
seq__61671_62192 = G__62201;
chunk__61673_62193 = G__62202;
count__61674_62194 = G__62203;
i__61675_62195 = G__62204;
continue;
}
} else {
var temp__5753__auto___62214 = cljs.core.seq(seq__61671_62192);
if(temp__5753__auto___62214){
var seq__61671_62215__$1 = temp__5753__auto___62214;
if(cljs.core.chunked_seq_QMARK_(seq__61671_62215__$1)){
var c__4679__auto___62216 = cljs.core.chunk_first(seq__61671_62215__$1);
var G__62217 = cljs.core.chunk_rest(seq__61671_62215__$1);
var G__62218 = c__4679__auto___62216;
var G__62219 = cljs.core.count(c__4679__auto___62216);
var G__62220 = (0);
seq__61671_62192 = G__62217;
chunk__61673_62193 = G__62218;
count__61674_62194 = G__62219;
i__61675_62195 = G__62220;
continue;
} else {
var child_62221 = cljs.core.first(seq__61671_62215__$1);
if(cljs.core.truth_(child_62221)){
node.appendChild(child_62221);


var G__62222 = cljs.core.next(seq__61671_62215__$1);
var G__62223 = null;
var G__62224 = (0);
var G__62225 = (0);
seq__61671_62192 = G__62222;
chunk__61673_62193 = G__62223;
count__61674_62194 = G__62224;
i__61675_62195 = G__62225;
continue;
} else {
var G__62226 = cljs.core.next(seq__61671_62215__$1);
var G__62227 = null;
var G__62228 = (0);
var G__62229 = (0);
seq__61671_62192 = G__62226;
chunk__61673_62193 = G__62227;
count__61674_62194 = G__62228;
i__61675_62195 = G__62229;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62191);
}
}


var G__62230 = seq__61626_62184;
var G__62231 = chunk__61628_62185;
var G__62232 = count__61629_62186;
var G__62233 = (i__61630_62187 + (1));
seq__61626_62184 = G__62230;
chunk__61628_62185 = G__62231;
count__61629_62186 = G__62232;
i__61630_62187 = G__62233;
continue;
} else {
var G__62234 = seq__61626_62184;
var G__62235 = chunk__61628_62185;
var G__62236 = count__61629_62186;
var G__62237 = (i__61630_62187 + (1));
seq__61626_62184 = G__62234;
chunk__61628_62185 = G__62235;
count__61629_62186 = G__62236;
i__61630_62187 = G__62237;
continue;
}
} else {
var temp__5753__auto___62238 = cljs.core.seq(seq__61626_62184);
if(temp__5753__auto___62238){
var seq__61626_62239__$1 = temp__5753__auto___62238;
if(cljs.core.chunked_seq_QMARK_(seq__61626_62239__$1)){
var c__4679__auto___62240 = cljs.core.chunk_first(seq__61626_62239__$1);
var G__62241 = cljs.core.chunk_rest(seq__61626_62239__$1);
var G__62242 = c__4679__auto___62240;
var G__62243 = cljs.core.count(c__4679__auto___62240);
var G__62244 = (0);
seq__61626_62184 = G__62241;
chunk__61628_62185 = G__62242;
count__61629_62186 = G__62243;
i__61630_62187 = G__62244;
continue;
} else {
var child_struct_62245 = cljs.core.first(seq__61626_62239__$1);
if((!((child_struct_62245 == null)))){
if(typeof child_struct_62245 === 'string'){
var text_62248 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62248),child_struct_62245].join(''));
} else {
var children_62251 = shadow.dom.svg_node(child_struct_62245);
if(cljs.core.seq_QMARK_(children_62251)){
var seq__61690_62256 = cljs.core.seq(children_62251);
var chunk__61692_62257 = null;
var count__61693_62258 = (0);
var i__61694_62259 = (0);
while(true){
if((i__61694_62259 < count__61693_62258)){
var child_62260 = chunk__61692_62257.cljs$core$IIndexed$_nth$arity$2(null,i__61694_62259);
if(cljs.core.truth_(child_62260)){
node.appendChild(child_62260);


var G__62261 = seq__61690_62256;
var G__62262 = chunk__61692_62257;
var G__62263 = count__61693_62258;
var G__62264 = (i__61694_62259 + (1));
seq__61690_62256 = G__62261;
chunk__61692_62257 = G__62262;
count__61693_62258 = G__62263;
i__61694_62259 = G__62264;
continue;
} else {
var G__62265 = seq__61690_62256;
var G__62266 = chunk__61692_62257;
var G__62267 = count__61693_62258;
var G__62268 = (i__61694_62259 + (1));
seq__61690_62256 = G__62265;
chunk__61692_62257 = G__62266;
count__61693_62258 = G__62267;
i__61694_62259 = G__62268;
continue;
}
} else {
var temp__5753__auto___62272__$1 = cljs.core.seq(seq__61690_62256);
if(temp__5753__auto___62272__$1){
var seq__61690_62273__$1 = temp__5753__auto___62272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61690_62273__$1)){
var c__4679__auto___62274 = cljs.core.chunk_first(seq__61690_62273__$1);
var G__62275 = cljs.core.chunk_rest(seq__61690_62273__$1);
var G__62276 = c__4679__auto___62274;
var G__62277 = cljs.core.count(c__4679__auto___62274);
var G__62278 = (0);
seq__61690_62256 = G__62275;
chunk__61692_62257 = G__62276;
count__61693_62258 = G__62277;
i__61694_62259 = G__62278;
continue;
} else {
var child_62283 = cljs.core.first(seq__61690_62273__$1);
if(cljs.core.truth_(child_62283)){
node.appendChild(child_62283);


var G__62287 = cljs.core.next(seq__61690_62273__$1);
var G__62288 = null;
var G__62289 = (0);
var G__62290 = (0);
seq__61690_62256 = G__62287;
chunk__61692_62257 = G__62288;
count__61693_62258 = G__62289;
i__61694_62259 = G__62290;
continue;
} else {
var G__62291 = cljs.core.next(seq__61690_62273__$1);
var G__62292 = null;
var G__62293 = (0);
var G__62294 = (0);
seq__61690_62256 = G__62291;
chunk__61692_62257 = G__62292;
count__61693_62258 = G__62293;
i__61694_62259 = G__62294;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62251);
}
}


var G__62295 = cljs.core.next(seq__61626_62239__$1);
var G__62296 = null;
var G__62297 = (0);
var G__62298 = (0);
seq__61626_62184 = G__62295;
chunk__61628_62185 = G__62296;
count__61629_62186 = G__62297;
i__61630_62187 = G__62298;
continue;
} else {
var G__62299 = cljs.core.next(seq__61626_62239__$1);
var G__62300 = null;
var G__62301 = (0);
var G__62302 = (0);
seq__61626_62184 = G__62299;
chunk__61628_62185 = G__62300;
count__61629_62186 = G__62301;
i__61630_62187 = G__62302;
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
var len__4864__auto___62304 = arguments.length;
var i__4865__auto___62305 = (0);
while(true){
if((i__4865__auto___62305 < len__4864__auto___62304)){
args__4870__auto__.push((arguments[i__4865__auto___62305]));

var G__62306 = (i__4865__auto___62305 + (1));
i__4865__auto___62305 = G__62306;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61700){
var G__61701 = cljs.core.first(seq61700);
var seq61700__$1 = cljs.core.next(seq61700);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61701,seq61700__$1);
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
var G__61703 = arguments.length;
switch (G__61703) {
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
var c__47406__auto___62318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47407__auto__ = (function (){var switch__47127__auto__ = (function (state_61715){
var state_val_61716 = (state_61715[(1)]);
if((state_val_61716 === (1))){
var state_61715__$1 = state_61715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61715__$1,(2),once_or_cleanup);
} else {
if((state_val_61716 === (2))){
var inst_61712 = (state_61715[(2)]);
var inst_61713 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61715__$1 = (function (){var statearr_61721 = state_61715;
(statearr_61721[(7)] = inst_61712);

return statearr_61721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61715__$1,inst_61713);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47128__auto__ = null;
var shadow$dom$state_machine__47128__auto____0 = (function (){
var statearr_61722 = [null,null,null,null,null,null,null,null];
(statearr_61722[(0)] = shadow$dom$state_machine__47128__auto__);

(statearr_61722[(1)] = (1));

return statearr_61722;
});
var shadow$dom$state_machine__47128__auto____1 = (function (state_61715){
while(true){
var ret_value__47129__auto__ = (function (){try{while(true){
var result__47130__auto__ = switch__47127__auto__(state_61715);
if(cljs.core.keyword_identical_QMARK_(result__47130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47130__auto__;
}
break;
}
}catch (e61724){var ex__47131__auto__ = e61724;
var statearr_61726_62322 = state_61715;
(statearr_61726_62322[(2)] = ex__47131__auto__);


if(cljs.core.seq((state_61715[(4)]))){
var statearr_61727_62323 = state_61715;
(statearr_61727_62323[(1)] = cljs.core.first((state_61715[(4)])));

} else {
throw ex__47131__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62324 = state_61715;
state_61715 = G__62324;
continue;
} else {
return ret_value__47129__auto__;
}
break;
}
});
shadow$dom$state_machine__47128__auto__ = function(state_61715){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47128__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47128__auto____1.call(this,state_61715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47128__auto____0;
shadow$dom$state_machine__47128__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47128__auto____1;
return shadow$dom$state_machine__47128__auto__;
})()
})();
var state__47408__auto__ = (function (){var statearr_61730 = f__47407__auto__();
(statearr_61730[(6)] = c__47406__auto___62318);

return statearr_61730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47408__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
