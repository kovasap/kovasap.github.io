goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40100 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_40100(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40101 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_40101(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39020 = coll;
var G__39021 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39020,G__39021) : shadow.dom.lazy_native_coll_seq.call(null,G__39020,G__39021));
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
var G__39049 = arguments.length;
switch (G__39049) {
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
var G__39071 = arguments.length;
switch (G__39071) {
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
var G__39089 = arguments.length;
switch (G__39089) {
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
var G__39113 = arguments.length;
switch (G__39113) {
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
var G__39141 = arguments.length;
switch (G__39141) {
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
var G__39156 = arguments.length;
switch (G__39156) {
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
}catch (e39172){if((e39172 instanceof Object)){
var e = e39172;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39172;

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
var seq__39184 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39185 = null;
var count__39186 = (0);
var i__39187 = (0);
while(true){
if((i__39187 < count__39186)){
var el = chunk__39185.cljs$core$IIndexed$_nth$arity$2(null,i__39187);
var handler_40112__$1 = ((function (seq__39184,chunk__39185,count__39186,i__39187,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39184,chunk__39185,count__39186,i__39187,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40112__$1);


var G__40113 = seq__39184;
var G__40114 = chunk__39185;
var G__40115 = count__39186;
var G__40116 = (i__39187 + (1));
seq__39184 = G__40113;
chunk__39185 = G__40114;
count__39186 = G__40115;
i__39187 = G__40116;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39184);
if(temp__5753__auto__){
var seq__39184__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39184__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39184__$1);
var G__40117 = cljs.core.chunk_rest(seq__39184__$1);
var G__40118 = c__4679__auto__;
var G__40119 = cljs.core.count(c__4679__auto__);
var G__40120 = (0);
seq__39184 = G__40117;
chunk__39185 = G__40118;
count__39186 = G__40119;
i__39187 = G__40120;
continue;
} else {
var el = cljs.core.first(seq__39184__$1);
var handler_40121__$1 = ((function (seq__39184,chunk__39185,count__39186,i__39187,el,seq__39184__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39184,chunk__39185,count__39186,i__39187,el,seq__39184__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40121__$1);


var G__40124 = cljs.core.next(seq__39184__$1);
var G__40125 = null;
var G__40126 = (0);
var G__40127 = (0);
seq__39184 = G__40124;
chunk__39185 = G__40125;
count__39186 = G__40126;
i__39187 = G__40127;
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
var G__39222 = arguments.length;
switch (G__39222) {
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
var seq__39231 = cljs.core.seq(events);
var chunk__39232 = null;
var count__39233 = (0);
var i__39234 = (0);
while(true){
if((i__39234 < count__39233)){
var vec__39253 = chunk__39232.cljs$core$IIndexed$_nth$arity$2(null,i__39234);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39253,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40135 = seq__39231;
var G__40136 = chunk__39232;
var G__40137 = count__39233;
var G__40138 = (i__39234 + (1));
seq__39231 = G__40135;
chunk__39232 = G__40136;
count__39233 = G__40137;
i__39234 = G__40138;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39231);
if(temp__5753__auto__){
var seq__39231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39231__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39231__$1);
var G__40139 = cljs.core.chunk_rest(seq__39231__$1);
var G__40140 = c__4679__auto__;
var G__40141 = cljs.core.count(c__4679__auto__);
var G__40142 = (0);
seq__39231 = G__40139;
chunk__39232 = G__40140;
count__39233 = G__40141;
i__39234 = G__40142;
continue;
} else {
var vec__39260 = cljs.core.first(seq__39231__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39260,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40143 = cljs.core.next(seq__39231__$1);
var G__40144 = null;
var G__40145 = (0);
var G__40146 = (0);
seq__39231 = G__40143;
chunk__39232 = G__40144;
count__39233 = G__40145;
i__39234 = G__40146;
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
var seq__39267 = cljs.core.seq(styles);
var chunk__39268 = null;
var count__39269 = (0);
var i__39270 = (0);
while(true){
if((i__39270 < count__39269)){
var vec__39290 = chunk__39268.cljs$core$IIndexed$_nth$arity$2(null,i__39270);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39290,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40149 = seq__39267;
var G__40150 = chunk__39268;
var G__40151 = count__39269;
var G__40152 = (i__39270 + (1));
seq__39267 = G__40149;
chunk__39268 = G__40150;
count__39269 = G__40151;
i__39270 = G__40152;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39267);
if(temp__5753__auto__){
var seq__39267__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39267__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39267__$1);
var G__40157 = cljs.core.chunk_rest(seq__39267__$1);
var G__40158 = c__4679__auto__;
var G__40159 = cljs.core.count(c__4679__auto__);
var G__40160 = (0);
seq__39267 = G__40157;
chunk__39268 = G__40158;
count__39269 = G__40159;
i__39270 = G__40160;
continue;
} else {
var vec__39295 = cljs.core.first(seq__39267__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39295,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40161 = cljs.core.next(seq__39267__$1);
var G__40162 = null;
var G__40163 = (0);
var G__40164 = (0);
seq__39267 = G__40161;
chunk__39268 = G__40162;
count__39269 = G__40163;
i__39270 = G__40164;
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
var G__39298_40165 = key;
var G__39298_40166__$1 = (((G__39298_40165 instanceof cljs.core.Keyword))?G__39298_40165.fqn:null);
switch (G__39298_40166__$1) {
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
var ks_40168 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_40168,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_40168,"aria-");
}
})())){
el.setAttribute(ks_40168,value);
} else {
(el[ks_40168] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39325){
var map__39327 = p__39325;
var map__39327__$1 = cljs.core.__destructure_map(map__39327);
var props = map__39327__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39327__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39331,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39336 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39336,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39336;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39349 = arguments.length;
switch (G__39349) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39362){
var vec__39363 = p__39362;
var seq__39364 = cljs.core.seq(vec__39363);
var first__39365 = cljs.core.first(seq__39364);
var seq__39364__$1 = cljs.core.next(seq__39364);
var nn = first__39365;
var first__39365__$1 = cljs.core.first(seq__39364__$1);
var seq__39364__$2 = cljs.core.next(seq__39364__$1);
var np = first__39365__$1;
var nc = seq__39364__$2;
var node = vec__39363;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39371 = nn;
var G__39372 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39371,G__39372) : create_fn.call(null,G__39371,G__39372));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39374 = nn;
var G__39375 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39374,G__39375) : create_fn.call(null,G__39374,G__39375));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39387 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39387,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39387,(1),null);
var seq__39391_40174 = cljs.core.seq(node_children);
var chunk__39392_40175 = null;
var count__39393_40176 = (0);
var i__39394_40177 = (0);
while(true){
if((i__39394_40177 < count__39393_40176)){
var child_struct_40184 = chunk__39392_40175.cljs$core$IIndexed$_nth$arity$2(null,i__39394_40177);
var children_40186 = shadow.dom.dom_node(child_struct_40184);
if(cljs.core.seq_QMARK_(children_40186)){
var seq__39447_40188 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40186));
var chunk__39449_40189 = null;
var count__39450_40190 = (0);
var i__39451_40191 = (0);
while(true){
if((i__39451_40191 < count__39450_40190)){
var child_40192 = chunk__39449_40189.cljs$core$IIndexed$_nth$arity$2(null,i__39451_40191);
if(cljs.core.truth_(child_40192)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40192);


var G__40193 = seq__39447_40188;
var G__40194 = chunk__39449_40189;
var G__40195 = count__39450_40190;
var G__40196 = (i__39451_40191 + (1));
seq__39447_40188 = G__40193;
chunk__39449_40189 = G__40194;
count__39450_40190 = G__40195;
i__39451_40191 = G__40196;
continue;
} else {
var G__40197 = seq__39447_40188;
var G__40198 = chunk__39449_40189;
var G__40199 = count__39450_40190;
var G__40200 = (i__39451_40191 + (1));
seq__39447_40188 = G__40197;
chunk__39449_40189 = G__40198;
count__39450_40190 = G__40199;
i__39451_40191 = G__40200;
continue;
}
} else {
var temp__5753__auto___40201 = cljs.core.seq(seq__39447_40188);
if(temp__5753__auto___40201){
var seq__39447_40202__$1 = temp__5753__auto___40201;
if(cljs.core.chunked_seq_QMARK_(seq__39447_40202__$1)){
var c__4679__auto___40203 = cljs.core.chunk_first(seq__39447_40202__$1);
var G__40204 = cljs.core.chunk_rest(seq__39447_40202__$1);
var G__40205 = c__4679__auto___40203;
var G__40206 = cljs.core.count(c__4679__auto___40203);
var G__40207 = (0);
seq__39447_40188 = G__40204;
chunk__39449_40189 = G__40205;
count__39450_40190 = G__40206;
i__39451_40191 = G__40207;
continue;
} else {
var child_40208 = cljs.core.first(seq__39447_40202__$1);
if(cljs.core.truth_(child_40208)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40208);


var G__40209 = cljs.core.next(seq__39447_40202__$1);
var G__40210 = null;
var G__40211 = (0);
var G__40212 = (0);
seq__39447_40188 = G__40209;
chunk__39449_40189 = G__40210;
count__39450_40190 = G__40211;
i__39451_40191 = G__40212;
continue;
} else {
var G__40213 = cljs.core.next(seq__39447_40202__$1);
var G__40214 = null;
var G__40215 = (0);
var G__40216 = (0);
seq__39447_40188 = G__40213;
chunk__39449_40189 = G__40214;
count__39450_40190 = G__40215;
i__39451_40191 = G__40216;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40186);
}


var G__40217 = seq__39391_40174;
var G__40218 = chunk__39392_40175;
var G__40219 = count__39393_40176;
var G__40220 = (i__39394_40177 + (1));
seq__39391_40174 = G__40217;
chunk__39392_40175 = G__40218;
count__39393_40176 = G__40219;
i__39394_40177 = G__40220;
continue;
} else {
var temp__5753__auto___40221 = cljs.core.seq(seq__39391_40174);
if(temp__5753__auto___40221){
var seq__39391_40222__$1 = temp__5753__auto___40221;
if(cljs.core.chunked_seq_QMARK_(seq__39391_40222__$1)){
var c__4679__auto___40223 = cljs.core.chunk_first(seq__39391_40222__$1);
var G__40224 = cljs.core.chunk_rest(seq__39391_40222__$1);
var G__40225 = c__4679__auto___40223;
var G__40226 = cljs.core.count(c__4679__auto___40223);
var G__40227 = (0);
seq__39391_40174 = G__40224;
chunk__39392_40175 = G__40225;
count__39393_40176 = G__40226;
i__39394_40177 = G__40227;
continue;
} else {
var child_struct_40228 = cljs.core.first(seq__39391_40222__$1);
var children_40229 = shadow.dom.dom_node(child_struct_40228);
if(cljs.core.seq_QMARK_(children_40229)){
var seq__39468_40230 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40229));
var chunk__39470_40231 = null;
var count__39471_40232 = (0);
var i__39472_40233 = (0);
while(true){
if((i__39472_40233 < count__39471_40232)){
var child_40234 = chunk__39470_40231.cljs$core$IIndexed$_nth$arity$2(null,i__39472_40233);
if(cljs.core.truth_(child_40234)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40234);


var G__40235 = seq__39468_40230;
var G__40236 = chunk__39470_40231;
var G__40237 = count__39471_40232;
var G__40238 = (i__39472_40233 + (1));
seq__39468_40230 = G__40235;
chunk__39470_40231 = G__40236;
count__39471_40232 = G__40237;
i__39472_40233 = G__40238;
continue;
} else {
var G__40239 = seq__39468_40230;
var G__40240 = chunk__39470_40231;
var G__40241 = count__39471_40232;
var G__40242 = (i__39472_40233 + (1));
seq__39468_40230 = G__40239;
chunk__39470_40231 = G__40240;
count__39471_40232 = G__40241;
i__39472_40233 = G__40242;
continue;
}
} else {
var temp__5753__auto___40243__$1 = cljs.core.seq(seq__39468_40230);
if(temp__5753__auto___40243__$1){
var seq__39468_40244__$1 = temp__5753__auto___40243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39468_40244__$1)){
var c__4679__auto___40245 = cljs.core.chunk_first(seq__39468_40244__$1);
var G__40246 = cljs.core.chunk_rest(seq__39468_40244__$1);
var G__40247 = c__4679__auto___40245;
var G__40248 = cljs.core.count(c__4679__auto___40245);
var G__40249 = (0);
seq__39468_40230 = G__40246;
chunk__39470_40231 = G__40247;
count__39471_40232 = G__40248;
i__39472_40233 = G__40249;
continue;
} else {
var child_40250 = cljs.core.first(seq__39468_40244__$1);
if(cljs.core.truth_(child_40250)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40250);


var G__40251 = cljs.core.next(seq__39468_40244__$1);
var G__40252 = null;
var G__40253 = (0);
var G__40254 = (0);
seq__39468_40230 = G__40251;
chunk__39470_40231 = G__40252;
count__39471_40232 = G__40253;
i__39472_40233 = G__40254;
continue;
} else {
var G__40255 = cljs.core.next(seq__39468_40244__$1);
var G__40256 = null;
var G__40257 = (0);
var G__40258 = (0);
seq__39468_40230 = G__40255;
chunk__39470_40231 = G__40256;
count__39471_40232 = G__40257;
i__39472_40233 = G__40258;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40229);
}


var G__40259 = cljs.core.next(seq__39391_40222__$1);
var G__40260 = null;
var G__40261 = (0);
var G__40262 = (0);
seq__39391_40174 = G__40259;
chunk__39392_40175 = G__40260;
count__39393_40176 = G__40261;
i__39394_40177 = G__40262;
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
var seq__39509 = cljs.core.seq(node);
var chunk__39510 = null;
var count__39511 = (0);
var i__39512 = (0);
while(true){
if((i__39512 < count__39511)){
var n = chunk__39510.cljs$core$IIndexed$_nth$arity$2(null,i__39512);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40270 = seq__39509;
var G__40271 = chunk__39510;
var G__40272 = count__39511;
var G__40273 = (i__39512 + (1));
seq__39509 = G__40270;
chunk__39510 = G__40271;
count__39511 = G__40272;
i__39512 = G__40273;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39509);
if(temp__5753__auto__){
var seq__39509__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39509__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39509__$1);
var G__40274 = cljs.core.chunk_rest(seq__39509__$1);
var G__40275 = c__4679__auto__;
var G__40276 = cljs.core.count(c__4679__auto__);
var G__40277 = (0);
seq__39509 = G__40274;
chunk__39510 = G__40275;
count__39511 = G__40276;
i__39512 = G__40277;
continue;
} else {
var n = cljs.core.first(seq__39509__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40279 = cljs.core.next(seq__39509__$1);
var G__40280 = null;
var G__40281 = (0);
var G__40282 = (0);
seq__39509 = G__40279;
chunk__39510 = G__40280;
count__39511 = G__40281;
i__39512 = G__40282;
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
var G__39537 = arguments.length;
switch (G__39537) {
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
var G__39552 = arguments.length;
switch (G__39552) {
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
var G__39579 = arguments.length;
switch (G__39579) {
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
var len__4864__auto___40295 = arguments.length;
var i__4865__auto___40296 = (0);
while(true){
if((i__4865__auto___40296 < len__4864__auto___40295)){
args__4870__auto__.push((arguments[i__4865__auto___40296]));

var G__40297 = (i__4865__auto___40296 + (1));
i__4865__auto___40296 = G__40297;
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
var seq__39589_40299 = cljs.core.seq(nodes);
var chunk__39590_40300 = null;
var count__39591_40301 = (0);
var i__39592_40302 = (0);
while(true){
if((i__39592_40302 < count__39591_40301)){
var node_40303 = chunk__39590_40300.cljs$core$IIndexed$_nth$arity$2(null,i__39592_40302);
fragment.appendChild(shadow.dom._to_dom(node_40303));


var G__40304 = seq__39589_40299;
var G__40305 = chunk__39590_40300;
var G__40306 = count__39591_40301;
var G__40307 = (i__39592_40302 + (1));
seq__39589_40299 = G__40304;
chunk__39590_40300 = G__40305;
count__39591_40301 = G__40306;
i__39592_40302 = G__40307;
continue;
} else {
var temp__5753__auto___40308 = cljs.core.seq(seq__39589_40299);
if(temp__5753__auto___40308){
var seq__39589_40310__$1 = temp__5753__auto___40308;
if(cljs.core.chunked_seq_QMARK_(seq__39589_40310__$1)){
var c__4679__auto___40311 = cljs.core.chunk_first(seq__39589_40310__$1);
var G__40333 = cljs.core.chunk_rest(seq__39589_40310__$1);
var G__40334 = c__4679__auto___40311;
var G__40335 = cljs.core.count(c__4679__auto___40311);
var G__40336 = (0);
seq__39589_40299 = G__40333;
chunk__39590_40300 = G__40334;
count__39591_40301 = G__40335;
i__39592_40302 = G__40336;
continue;
} else {
var node_40337 = cljs.core.first(seq__39589_40310__$1);
fragment.appendChild(shadow.dom._to_dom(node_40337));


var G__40339 = cljs.core.next(seq__39589_40310__$1);
var G__40340 = null;
var G__40341 = (0);
var G__40342 = (0);
seq__39589_40299 = G__40339;
chunk__39590_40300 = G__40340;
count__39591_40301 = G__40341;
i__39592_40302 = G__40342;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39587){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39587));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39598_40343 = cljs.core.seq(scripts);
var chunk__39599_40344 = null;
var count__39600_40345 = (0);
var i__39601_40346 = (0);
while(true){
if((i__39601_40346 < count__39600_40345)){
var vec__39619_40347 = chunk__39599_40344.cljs$core$IIndexed$_nth$arity$2(null,i__39601_40346);
var script_tag_40348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39619_40347,(0),null);
var script_body_40349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39619_40347,(1),null);
eval(script_body_40349);


var G__40350 = seq__39598_40343;
var G__40351 = chunk__39599_40344;
var G__40352 = count__39600_40345;
var G__40353 = (i__39601_40346 + (1));
seq__39598_40343 = G__40350;
chunk__39599_40344 = G__40351;
count__39600_40345 = G__40352;
i__39601_40346 = G__40353;
continue;
} else {
var temp__5753__auto___40354 = cljs.core.seq(seq__39598_40343);
if(temp__5753__auto___40354){
var seq__39598_40355__$1 = temp__5753__auto___40354;
if(cljs.core.chunked_seq_QMARK_(seq__39598_40355__$1)){
var c__4679__auto___40356 = cljs.core.chunk_first(seq__39598_40355__$1);
var G__40357 = cljs.core.chunk_rest(seq__39598_40355__$1);
var G__40358 = c__4679__auto___40356;
var G__40359 = cljs.core.count(c__4679__auto___40356);
var G__40360 = (0);
seq__39598_40343 = G__40357;
chunk__39599_40344 = G__40358;
count__39600_40345 = G__40359;
i__39601_40346 = G__40360;
continue;
} else {
var vec__39626_40361 = cljs.core.first(seq__39598_40355__$1);
var script_tag_40362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39626_40361,(0),null);
var script_body_40363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39626_40361,(1),null);
eval(script_body_40363);


var G__40368 = cljs.core.next(seq__39598_40355__$1);
var G__40369 = null;
var G__40370 = (0);
var G__40371 = (0);
seq__39598_40343 = G__40368;
chunk__39599_40344 = G__40369;
count__39600_40345 = G__40370;
i__39601_40346 = G__40371;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39630){
var vec__39632 = p__39630;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39632,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39632,(1),null);
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
var G__39653 = arguments.length;
switch (G__39653) {
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
var seq__39673 = cljs.core.seq(style_keys);
var chunk__39674 = null;
var count__39675 = (0);
var i__39676 = (0);
while(true){
if((i__39676 < count__39675)){
var it = chunk__39674.cljs$core$IIndexed$_nth$arity$2(null,i__39676);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40384 = seq__39673;
var G__40385 = chunk__39674;
var G__40386 = count__39675;
var G__40387 = (i__39676 + (1));
seq__39673 = G__40384;
chunk__39674 = G__40385;
count__39675 = G__40386;
i__39676 = G__40387;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39673);
if(temp__5753__auto__){
var seq__39673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39673__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39673__$1);
var G__40390 = cljs.core.chunk_rest(seq__39673__$1);
var G__40391 = c__4679__auto__;
var G__40392 = cljs.core.count(c__4679__auto__);
var G__40393 = (0);
seq__39673 = G__40390;
chunk__39674 = G__40391;
count__39675 = G__40392;
i__39676 = G__40393;
continue;
} else {
var it = cljs.core.first(seq__39673__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40394 = cljs.core.next(seq__39673__$1);
var G__40395 = null;
var G__40396 = (0);
var G__40397 = (0);
seq__39673 = G__40394;
chunk__39674 = G__40395;
count__39675 = G__40396;
i__39676 = G__40397;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k39689,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__39703 = k39689;
var G__39703__$1 = (((G__39703 instanceof cljs.core.Keyword))?G__39703.fqn:null);
switch (G__39703__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39689,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__39707){
var vec__39709 = p__39707;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39688){
var self__ = this;
var G__39688__$1 = this;
return (new cljs.core.RecordIter((0),G__39688__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39690,other39691){
var self__ = this;
var this39690__$1 = this;
return (((!((other39691 == null)))) && ((((this39690__$1.constructor === other39691.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39690__$1.x,other39691.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39690__$1.y,other39691.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39690__$1.__extmap,other39691.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k39689){
var self__ = this;
var this__4509__auto____$1 = this;
var G__39728 = k39689;
var G__39728__$1 = (((G__39728 instanceof cljs.core.Keyword))?G__39728.fqn:null);
switch (G__39728__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39689);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__39688){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__39729 = cljs.core.keyword_identical_QMARK_;
var expr__39730 = k__4511__auto__;
if(cljs.core.truth_((pred__39729.cljs$core$IFn$_invoke$arity$2 ? pred__39729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39730) : pred__39729.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39730)))){
return (new shadow.dom.Coordinate(G__39688,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39729.cljs$core$IFn$_invoke$arity$2 ? pred__39729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39730) : pred__39729.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39730)))){
return (new shadow.dom.Coordinate(self__.x,G__39688,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__39688),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__39688){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39688,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39694){
var extmap__4542__auto__ = (function (){var G__39741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39694,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39694)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39741);
} else {
return G__39741;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39694),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39694),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k39754,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__39765 = k39754;
var G__39765__$1 = (((G__39765 instanceof cljs.core.Keyword))?G__39765.fqn:null);
switch (G__39765__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39754,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__39771){
var vec__39772 = p__39771;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39772,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39772,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39753){
var self__ = this;
var G__39753__$1 = this;
return (new cljs.core.RecordIter((0),G__39753__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39755,other39756){
var self__ = this;
var this39755__$1 = this;
return (((!((other39756 == null)))) && ((((this39755__$1.constructor === other39756.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39755__$1.w,other39756.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39755__$1.h,other39756.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39755__$1.__extmap,other39756.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k39754){
var self__ = this;
var this__4509__auto____$1 = this;
var G__39798 = k39754;
var G__39798__$1 = (((G__39798 instanceof cljs.core.Keyword))?G__39798.fqn:null);
switch (G__39798__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39754);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__39753){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__39807 = cljs.core.keyword_identical_QMARK_;
var expr__39808 = k__4511__auto__;
if(cljs.core.truth_((pred__39807.cljs$core$IFn$_invoke$arity$2 ? pred__39807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39808) : pred__39807.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39808)))){
return (new shadow.dom.Size(G__39753,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39807.cljs$core$IFn$_invoke$arity$2 ? pred__39807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39808) : pred__39807.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39808)))){
return (new shadow.dom.Size(self__.w,G__39753,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__39753),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__39753){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39753,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39760){
var extmap__4542__auto__ = (function (){var G__39843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39760,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39760)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39843);
} else {
return G__39843;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39760),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39760),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__40454 = (i + (1));
var G__40455 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40454;
ret = G__40455;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39875){
var vec__39876 = p__39875;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39880 = arguments.length;
switch (G__39880) {
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
var G__40482 = ps;
var G__40483 = (i + (1));
el__$1 = G__40482;
i = G__40483;
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
var vec__39884 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39884,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39884,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39884,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39887_40513 = cljs.core.seq(props);
var chunk__39888_40514 = null;
var count__39889_40515 = (0);
var i__39890_40516 = (0);
while(true){
if((i__39890_40516 < count__39889_40515)){
var vec__39905_40519 = chunk__39888_40514.cljs$core$IIndexed$_nth$arity$2(null,i__39890_40516);
var k_40520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39905_40519,(0),null);
var v_40521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39905_40519,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40520);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40520),v_40521);


var G__40526 = seq__39887_40513;
var G__40527 = chunk__39888_40514;
var G__40528 = count__39889_40515;
var G__40529 = (i__39890_40516 + (1));
seq__39887_40513 = G__40526;
chunk__39888_40514 = G__40527;
count__39889_40515 = G__40528;
i__39890_40516 = G__40529;
continue;
} else {
var temp__5753__auto___40530 = cljs.core.seq(seq__39887_40513);
if(temp__5753__auto___40530){
var seq__39887_40531__$1 = temp__5753__auto___40530;
if(cljs.core.chunked_seq_QMARK_(seq__39887_40531__$1)){
var c__4679__auto___40532 = cljs.core.chunk_first(seq__39887_40531__$1);
var G__40533 = cljs.core.chunk_rest(seq__39887_40531__$1);
var G__40534 = c__4679__auto___40532;
var G__40535 = cljs.core.count(c__4679__auto___40532);
var G__40536 = (0);
seq__39887_40513 = G__40533;
chunk__39888_40514 = G__40534;
count__39889_40515 = G__40535;
i__39890_40516 = G__40536;
continue;
} else {
var vec__39908_40537 = cljs.core.first(seq__39887_40531__$1);
var k_40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39908_40537,(0),null);
var v_40539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39908_40537,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40538);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40538),v_40539);


var G__40545 = cljs.core.next(seq__39887_40531__$1);
var G__40546 = null;
var G__40547 = (0);
var G__40548 = (0);
seq__39887_40513 = G__40545;
chunk__39888_40514 = G__40546;
count__39889_40515 = G__40547;
i__39890_40516 = G__40548;
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
var vec__39912 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(1),null);
var seq__39915_40549 = cljs.core.seq(node_children);
var chunk__39917_40550 = null;
var count__39918_40551 = (0);
var i__39919_40552 = (0);
while(true){
if((i__39919_40552 < count__39918_40551)){
var child_struct_40553 = chunk__39917_40550.cljs$core$IIndexed$_nth$arity$2(null,i__39919_40552);
if((!((child_struct_40553 == null)))){
if(typeof child_struct_40553 === 'string'){
var text_40554 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40554),child_struct_40553].join(''));
} else {
var children_40556 = shadow.dom.svg_node(child_struct_40553);
if(cljs.core.seq_QMARK_(children_40556)){
var seq__39942_40557 = cljs.core.seq(children_40556);
var chunk__39944_40558 = null;
var count__39945_40559 = (0);
var i__39946_40560 = (0);
while(true){
if((i__39946_40560 < count__39945_40559)){
var child_40561 = chunk__39944_40558.cljs$core$IIndexed$_nth$arity$2(null,i__39946_40560);
if(cljs.core.truth_(child_40561)){
node.appendChild(child_40561);


var G__40562 = seq__39942_40557;
var G__40563 = chunk__39944_40558;
var G__40564 = count__39945_40559;
var G__40565 = (i__39946_40560 + (1));
seq__39942_40557 = G__40562;
chunk__39944_40558 = G__40563;
count__39945_40559 = G__40564;
i__39946_40560 = G__40565;
continue;
} else {
var G__40566 = seq__39942_40557;
var G__40567 = chunk__39944_40558;
var G__40568 = count__39945_40559;
var G__40569 = (i__39946_40560 + (1));
seq__39942_40557 = G__40566;
chunk__39944_40558 = G__40567;
count__39945_40559 = G__40568;
i__39946_40560 = G__40569;
continue;
}
} else {
var temp__5753__auto___40570 = cljs.core.seq(seq__39942_40557);
if(temp__5753__auto___40570){
var seq__39942_40571__$1 = temp__5753__auto___40570;
if(cljs.core.chunked_seq_QMARK_(seq__39942_40571__$1)){
var c__4679__auto___40572 = cljs.core.chunk_first(seq__39942_40571__$1);
var G__40573 = cljs.core.chunk_rest(seq__39942_40571__$1);
var G__40574 = c__4679__auto___40572;
var G__40575 = cljs.core.count(c__4679__auto___40572);
var G__40576 = (0);
seq__39942_40557 = G__40573;
chunk__39944_40558 = G__40574;
count__39945_40559 = G__40575;
i__39946_40560 = G__40576;
continue;
} else {
var child_40577 = cljs.core.first(seq__39942_40571__$1);
if(cljs.core.truth_(child_40577)){
node.appendChild(child_40577);


var G__40578 = cljs.core.next(seq__39942_40571__$1);
var G__40579 = null;
var G__40580 = (0);
var G__40581 = (0);
seq__39942_40557 = G__40578;
chunk__39944_40558 = G__40579;
count__39945_40559 = G__40580;
i__39946_40560 = G__40581;
continue;
} else {
var G__40582 = cljs.core.next(seq__39942_40571__$1);
var G__40583 = null;
var G__40584 = (0);
var G__40585 = (0);
seq__39942_40557 = G__40582;
chunk__39944_40558 = G__40583;
count__39945_40559 = G__40584;
i__39946_40560 = G__40585;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40556);
}
}


var G__40586 = seq__39915_40549;
var G__40587 = chunk__39917_40550;
var G__40588 = count__39918_40551;
var G__40589 = (i__39919_40552 + (1));
seq__39915_40549 = G__40586;
chunk__39917_40550 = G__40587;
count__39918_40551 = G__40588;
i__39919_40552 = G__40589;
continue;
} else {
var G__40590 = seq__39915_40549;
var G__40591 = chunk__39917_40550;
var G__40592 = count__39918_40551;
var G__40593 = (i__39919_40552 + (1));
seq__39915_40549 = G__40590;
chunk__39917_40550 = G__40591;
count__39918_40551 = G__40592;
i__39919_40552 = G__40593;
continue;
}
} else {
var temp__5753__auto___40594 = cljs.core.seq(seq__39915_40549);
if(temp__5753__auto___40594){
var seq__39915_40595__$1 = temp__5753__auto___40594;
if(cljs.core.chunked_seq_QMARK_(seq__39915_40595__$1)){
var c__4679__auto___40596 = cljs.core.chunk_first(seq__39915_40595__$1);
var G__40597 = cljs.core.chunk_rest(seq__39915_40595__$1);
var G__40598 = c__4679__auto___40596;
var G__40599 = cljs.core.count(c__4679__auto___40596);
var G__40600 = (0);
seq__39915_40549 = G__40597;
chunk__39917_40550 = G__40598;
count__39918_40551 = G__40599;
i__39919_40552 = G__40600;
continue;
} else {
var child_struct_40602 = cljs.core.first(seq__39915_40595__$1);
if((!((child_struct_40602 == null)))){
if(typeof child_struct_40602 === 'string'){
var text_40603 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40603),child_struct_40602].join(''));
} else {
var children_40604 = shadow.dom.svg_node(child_struct_40602);
if(cljs.core.seq_QMARK_(children_40604)){
var seq__39951_40605 = cljs.core.seq(children_40604);
var chunk__39953_40606 = null;
var count__39954_40607 = (0);
var i__39955_40608 = (0);
while(true){
if((i__39955_40608 < count__39954_40607)){
var child_40609 = chunk__39953_40606.cljs$core$IIndexed$_nth$arity$2(null,i__39955_40608);
if(cljs.core.truth_(child_40609)){
node.appendChild(child_40609);


var G__40610 = seq__39951_40605;
var G__40611 = chunk__39953_40606;
var G__40612 = count__39954_40607;
var G__40613 = (i__39955_40608 + (1));
seq__39951_40605 = G__40610;
chunk__39953_40606 = G__40611;
count__39954_40607 = G__40612;
i__39955_40608 = G__40613;
continue;
} else {
var G__40614 = seq__39951_40605;
var G__40615 = chunk__39953_40606;
var G__40616 = count__39954_40607;
var G__40617 = (i__39955_40608 + (1));
seq__39951_40605 = G__40614;
chunk__39953_40606 = G__40615;
count__39954_40607 = G__40616;
i__39955_40608 = G__40617;
continue;
}
} else {
var temp__5753__auto___40618__$1 = cljs.core.seq(seq__39951_40605);
if(temp__5753__auto___40618__$1){
var seq__39951_40619__$1 = temp__5753__auto___40618__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39951_40619__$1)){
var c__4679__auto___40620 = cljs.core.chunk_first(seq__39951_40619__$1);
var G__40621 = cljs.core.chunk_rest(seq__39951_40619__$1);
var G__40622 = c__4679__auto___40620;
var G__40623 = cljs.core.count(c__4679__auto___40620);
var G__40624 = (0);
seq__39951_40605 = G__40621;
chunk__39953_40606 = G__40622;
count__39954_40607 = G__40623;
i__39955_40608 = G__40624;
continue;
} else {
var child_40625 = cljs.core.first(seq__39951_40619__$1);
if(cljs.core.truth_(child_40625)){
node.appendChild(child_40625);


var G__40626 = cljs.core.next(seq__39951_40619__$1);
var G__40627 = null;
var G__40628 = (0);
var G__40629 = (0);
seq__39951_40605 = G__40626;
chunk__39953_40606 = G__40627;
count__39954_40607 = G__40628;
i__39955_40608 = G__40629;
continue;
} else {
var G__40630 = cljs.core.next(seq__39951_40619__$1);
var G__40631 = null;
var G__40632 = (0);
var G__40633 = (0);
seq__39951_40605 = G__40630;
chunk__39953_40606 = G__40631;
count__39954_40607 = G__40632;
i__39955_40608 = G__40633;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40604);
}
}


var G__40634 = cljs.core.next(seq__39915_40595__$1);
var G__40635 = null;
var G__40636 = (0);
var G__40637 = (0);
seq__39915_40549 = G__40634;
chunk__39917_40550 = G__40635;
count__39918_40551 = G__40636;
i__39919_40552 = G__40637;
continue;
} else {
var G__40641 = cljs.core.next(seq__39915_40595__$1);
var G__40642 = null;
var G__40643 = (0);
var G__40644 = (0);
seq__39915_40549 = G__40641;
chunk__39917_40550 = G__40642;
count__39918_40551 = G__40643;
i__39919_40552 = G__40644;
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
var len__4864__auto___40645 = arguments.length;
var i__4865__auto___40646 = (0);
while(true){
if((i__4865__auto___40646 < len__4864__auto___40645)){
args__4870__auto__.push((arguments[i__4865__auto___40646]));

var G__40648 = (i__4865__auto___40646 + (1));
i__4865__auto___40646 = G__40648;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39968){
var G__39969 = cljs.core.first(seq39968);
var seq39968__$1 = cljs.core.next(seq39968);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39969,seq39968__$1);
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
var G__39982 = arguments.length;
switch (G__39982) {
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
var c__26640__auto___40653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_40004){
var state_val_40005 = (state_40004[(1)]);
if((state_val_40005 === (1))){
var state_40004__$1 = state_40004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40004__$1,(2),once_or_cleanup);
} else {
if((state_val_40005 === (2))){
var inst_40001 = (state_40004[(2)]);
var inst_40002 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40004__$1 = (function (){var statearr_40013 = state_40004;
(statearr_40013[(7)] = inst_40001);

return statearr_40013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40004__$1,inst_40002);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__26556__auto__ = null;
var shadow$dom$state_machine__26556__auto____0 = (function (){
var statearr_40018 = [null,null,null,null,null,null,null,null];
(statearr_40018[(0)] = shadow$dom$state_machine__26556__auto__);

(statearr_40018[(1)] = (1));

return statearr_40018;
});
var shadow$dom$state_machine__26556__auto____1 = (function (state_40004){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_40004);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e40030){var ex__26559__auto__ = e40030;
var statearr_40034_40654 = state_40004;
(statearr_40034_40654[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_40004[(4)]))){
var statearr_40035_40655 = state_40004;
(statearr_40035_40655[(1)] = cljs.core.first((state_40004[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40656 = state_40004;
state_40004 = G__40656;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
shadow$dom$state_machine__26556__auto__ = function(state_40004){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26556__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26556__auto____1.call(this,state_40004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26556__auto____0;
shadow$dom$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26556__auto____1;
return shadow$dom$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_40051 = f__26641__auto__();
(statearr_40051[(6)] = c__26640__auto___40653);

return statearr_40051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
