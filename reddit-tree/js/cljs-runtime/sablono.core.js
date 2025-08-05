goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__39469__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__38969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__38970 = cljs.core.seq(vec__38969);
var first__38971 = cljs.core.first(seq__38970);
var seq__38970__$1 = cljs.core.next(seq__38970);
var tag = first__38971;
var body = seq__38970__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__39469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39471__i = 0, G__39471__a = new Array(arguments.length -  0);
while (G__39471__i < G__39471__a.length) {G__39471__a[G__39471__i] = arguments[G__39471__i + 0]; ++G__39471__i;}
  args = new cljs.core.IndexedSeq(G__39471__a,0,null);
} 
return G__39469__delegate.call(this,args);};
G__39469.cljs$lang$maxFixedArity = 0;
G__39469.cljs$lang$applyTo = (function (arglist__39472){
var args = cljs.core.seq(arglist__39472);
return G__39469__delegate(args);
});
G__39469.cljs$core$IFn$_invoke$arity$variadic = G__39469__delegate;
return G__39469;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__38977(s__38978){
return (new cljs.core.LazySeq(null,(function (){
var s__38978__$1 = s__38978;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38978__$1);
if(temp__5753__auto__){
var s__38978__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38978__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38978__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38980 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38979 = (0);
while(true){
if((i__38979 < size__4610__auto__)){
var args = cljs.core._nth(c__4609__auto__,i__38979);
cljs.core.chunk_append(b__38980,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39473 = (i__38979 + (1));
i__38979 = G__39473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38980),sablono$core$update_arglists_$_iter__38977(cljs.core.chunk_rest(s__38978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38980),null);
}
} else {
var args = cljs.core.first(s__38978__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38977(cljs.core.rest(s__38978__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39474 = arguments.length;
var i__4819__auto___39475 = (0);
while(true){
if((i__4819__auto___39475 < len__4818__auto___39474)){
args__4824__auto__.push((arguments[i__4819__auto___39475]));

var G__39476 = (i__4819__auto___39475 + (1));
i__4819__auto___39475 = G__39476;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__38993(s__38994){
return (new cljs.core.LazySeq(null,(function (){
var s__38994__$1 = s__38994;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38994__$1);
if(temp__5753__auto__){
var s__38994__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38994__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38994__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38996 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38995 = (0);
while(true){
if((i__38995 < size__4610__auto__)){
var style = cljs.core._nth(c__4609__auto__,i__38995);
cljs.core.chunk_append(b__38996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39478 = (i__38995 + (1));
i__38995 = G__39478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38996),sablono$core$iter__38993(cljs.core.chunk_rest(s__38994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38996),null);
}
} else {
var style = cljs.core.first(s__38994__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38993(cljs.core.rest(s__38994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq38988){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38988));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to39008 = (function sablono$core$link_to39008(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39493 = arguments.length;
var i__4819__auto___39494 = (0);
while(true){
if((i__4819__auto___39494 < len__4818__auto___39493)){
args__4824__auto__.push((arguments[i__4819__auto___39494]));

var G__39496 = (i__4819__auto___39494 + (1));
i__4819__auto___39494 = G__39496;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to39008.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to39008.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to39008.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to39008.cljs$lang$applyTo = (function (seq39010){
var G__39011 = cljs.core.first(seq39010);
var seq39010__$1 = cljs.core.next(seq39010);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39011,seq39010__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to39008);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39035 = (function sablono$core$mail_to39035(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39498 = arguments.length;
var i__4819__auto___39499 = (0);
while(true){
if((i__4819__auto___39499 < len__4818__auto___39498)){
args__4824__auto__.push((arguments[i__4819__auto___39499]));

var G__39500 = (i__4819__auto___39499 + (1));
i__4819__auto___39499 = G__39500;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to39035.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to39035.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39046){
var vec__39047 = p__39046;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to39035.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to39035.cljs$lang$applyTo = (function (seq39038){
var G__39039 = cljs.core.first(seq39038);
var seq39038__$1 = cljs.core.next(seq39038);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39039,seq39038__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to39035);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39058 = (function sablono$core$unordered_list39058(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list39058_$_iter__39059(s__39060){
return (new cljs.core.LazySeq(null,(function (){
var s__39060__$1 = s__39060;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39060__$1);
if(temp__5753__auto__){
var s__39060__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39060__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39060__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39062 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39061 = (0);
while(true){
if((i__39061 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__39061);
cljs.core.chunk_append(b__39062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39502 = (i__39061 + (1));
i__39061 = G__39502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39062),sablono$core$unordered_list39058_$_iter__39059(cljs.core.chunk_rest(s__39060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39062),null);
}
} else {
var x = cljs.core.first(s__39060__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39058_$_iter__39059(cljs.core.rest(s__39060__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list39058);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39075 = (function sablono$core$ordered_list39075(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list39075_$_iter__39076(s__39077){
return (new cljs.core.LazySeq(null,(function (){
var s__39077__$1 = s__39077;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39077__$1);
if(temp__5753__auto__){
var s__39077__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39077__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39077__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39079 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39078 = (0);
while(true){
if((i__39078 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__39078);
cljs.core.chunk_append(b__39079,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39503 = (i__39078 + (1));
i__39078 = G__39503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39079),sablono$core$ordered_list39075_$_iter__39076(cljs.core.chunk_rest(s__39077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39079),null);
}
} else {
var x = cljs.core.first(s__39077__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39075_$_iter__39076(cljs.core.rest(s__39077__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list39075);
/**
 * Create an image element.
 */
sablono.core.image39093 = (function sablono$core$image39093(var_args){
var G__39097 = arguments.length;
switch (G__39097) {
case 1:
return sablono.core.image39093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image39093.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image39093.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image39093.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image39093);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39107_SHARP_,p2__39108_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39107_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39108_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39113_SHARP_,p2__39114_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39113_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39114_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__39120 = arguments.length;
switch (G__39120) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field39129 = (function sablono$core$color_field39129(var_args){
var G__39133 = arguments.length;
switch (G__39133) {
case 1:
return sablono.core.color_field39129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field39129.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38959__auto__);
}));

(sablono.core.color_field39129.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.color_field39129.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field39129);

/**
 * Creates a date input field.
 */
sablono.core.date_field39142 = (function sablono$core$date_field39142(var_args){
var G__39148 = arguments.length;
switch (G__39148) {
case 1:
return sablono.core.date_field39142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field39142.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38959__auto__);
}));

(sablono.core.date_field39142.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.date_field39142.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field39142);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39160 = (function sablono$core$datetime_field39160(var_args){
var G__39167 = arguments.length;
switch (G__39167) {
case 1:
return sablono.core.datetime_field39160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field39160.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38959__auto__);
}));

(sablono.core.datetime_field39160.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.datetime_field39160.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field39160);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39184 = (function sablono$core$datetime_local_field39184(var_args){
var G__39186 = arguments.length;
switch (G__39186) {
case 1:
return sablono.core.datetime_local_field39184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field39184.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38959__auto__);
}));

(sablono.core.datetime_local_field39184.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.datetime_local_field39184.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field39184);

/**
 * Creates a email input field.
 */
sablono.core.email_field39191 = (function sablono$core$email_field39191(var_args){
var G__39193 = arguments.length;
switch (G__39193) {
case 1:
return sablono.core.email_field39191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field39191.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38959__auto__);
}));

(sablono.core.email_field39191.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.email_field39191.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39191);

/**
 * Creates a file input field.
 */
sablono.core.file_field39194 = (function sablono$core$file_field39194(var_args){
var G__39198 = arguments.length;
switch (G__39198) {
case 1:
return sablono.core.file_field39194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field39194.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38959__auto__);
}));

(sablono.core.file_field39194.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.file_field39194.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field39194);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39199 = (function sablono$core$hidden_field39199(var_args){
var G__39201 = arguments.length;
switch (G__39201) {
case 1:
return sablono.core.hidden_field39199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field39199.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38959__auto__);
}));

(sablono.core.hidden_field39199.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.hidden_field39199.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field39199);

/**
 * Creates a month input field.
 */
sablono.core.month_field39202 = (function sablono$core$month_field39202(var_args){
var G__39211 = arguments.length;
switch (G__39211) {
case 1:
return sablono.core.month_field39202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field39202.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38959__auto__);
}));

(sablono.core.month_field39202.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.month_field39202.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field39202);

/**
 * Creates a number input field.
 */
sablono.core.number_field39218 = (function sablono$core$number_field39218(var_args){
var G__39220 = arguments.length;
switch (G__39220) {
case 1:
return sablono.core.number_field39218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field39218.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38959__auto__);
}));

(sablono.core.number_field39218.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.number_field39218.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field39218);

/**
 * Creates a password input field.
 */
sablono.core.password_field39227 = (function sablono$core$password_field39227(var_args){
var G__39233 = arguments.length;
switch (G__39233) {
case 1:
return sablono.core.password_field39227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field39227.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38959__auto__);
}));

(sablono.core.password_field39227.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.password_field39227.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field39227);

/**
 * Creates a range input field.
 */
sablono.core.range_field39244 = (function sablono$core$range_field39244(var_args){
var G__39246 = arguments.length;
switch (G__39246) {
case 1:
return sablono.core.range_field39244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field39244.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38959__auto__);
}));

(sablono.core.range_field39244.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.range_field39244.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field39244);

/**
 * Creates a search input field.
 */
sablono.core.search_field39255 = (function sablono$core$search_field39255(var_args){
var G__39261 = arguments.length;
switch (G__39261) {
case 1:
return sablono.core.search_field39255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field39255.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38959__auto__);
}));

(sablono.core.search_field39255.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.search_field39255.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field39255);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39266 = (function sablono$core$tel_field39266(var_args){
var G__39273 = arguments.length;
switch (G__39273) {
case 1:
return sablono.core.tel_field39266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field39266.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38959__auto__);
}));

(sablono.core.tel_field39266.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.tel_field39266.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field39266);

/**
 * Creates a text input field.
 */
sablono.core.text_field39288 = (function sablono$core$text_field39288(var_args){
var G__39293 = arguments.length;
switch (G__39293) {
case 1:
return sablono.core.text_field39288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field39288.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38959__auto__);
}));

(sablono.core.text_field39288.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.text_field39288.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field39288);

/**
 * Creates a time input field.
 */
sablono.core.time_field39300 = (function sablono$core$time_field39300(var_args){
var G__39305 = arguments.length;
switch (G__39305) {
case 1:
return sablono.core.time_field39300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field39300.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38959__auto__);
}));

(sablono.core.time_field39300.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.time_field39300.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field39300);

/**
 * Creates a url input field.
 */
sablono.core.url_field39323 = (function sablono$core$url_field39323(var_args){
var G__39332 = arguments.length;
switch (G__39332) {
case 1:
return sablono.core.url_field39323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field39323.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38959__auto__);
}));

(sablono.core.url_field39323.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.url_field39323.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field39323);

/**
 * Creates a week input field.
 */
sablono.core.week_field39364 = (function sablono$core$week_field39364(var_args){
var G__39374 = arguments.length;
switch (G__39374) {
case 1:
return sablono.core.week_field39364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field39364.cljs$core$IFn$_invoke$arity$1 = (function (name__38959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38959__auto__);
}));

(sablono.core.week_field39364.cljs$core$IFn$_invoke$arity$2 = (function (name__38959__auto__,value__38960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38959__auto__,value__38960__auto__);
}));

(sablono.core.week_field39364.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field39364);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39384 = (function sablono$core$check_box39384(var_args){
var G__39390 = arguments.length;
switch (G__39390) {
case 1:
return sablono.core.check_box39384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39384.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box39384.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box39384.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box39384.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box39384.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39384);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39392 = (function sablono$core$radio_button39392(var_args){
var G__39395 = arguments.length;
switch (G__39395) {
case 1:
return sablono.core.radio_button39392.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39392.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39392.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button39392.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button39392.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button39392.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button39392.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39392);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39406 = (function sablono$core$select_options39406(coll){
var iter__4611__auto__ = (function sablono$core$select_options39406_$_iter__39407(s__39408){
return (new cljs.core.LazySeq(null,(function (){
var s__39408__$1 = s__39408;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39408__$1);
if(temp__5753__auto__){
var s__39408__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39408__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39408__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39410 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39409 = (0);
while(true){
if((i__39409 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__39409);
cljs.core.chunk_append(b__39410,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39419 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39419,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39419,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39419,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options39406.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options39406.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options39406.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39573 = (i__39409 + (1));
i__39409 = G__39573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39410),sablono$core$select_options39406_$_iter__39407(cljs.core.chunk_rest(s__39408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39410),null);
}
} else {
var x = cljs.core.first(s__39408__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39427 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39427,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39427,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39427,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options39406.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options39406.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options39406.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39406_$_iter__39407(cljs.core.rest(s__39408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39406);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39432 = (function sablono$core$drop_down39432(var_args){
var G__39434 = arguments.length;
switch (G__39434) {
case 2:
return sablono.core.drop_down39432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39432.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down39432.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39432.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down39432.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down39432.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39432);
/**
 * Creates a text area element.
 */
sablono.core.text_area39436 = (function sablono$core$text_area39436(var_args){
var G__39438 = arguments.length;
switch (G__39438) {
case 1:
return sablono.core.text_area39436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area39436.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area39436.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area39436.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39436);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39439 = (function sablono$core$label39439(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39439);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39440 = (function sablono$core$submit_button39440(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39440);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39441 = (function sablono$core$reset_button39441(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39441);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39444 = (function sablono$core$form_to39444(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39578 = arguments.length;
var i__4819__auto___39579 = (0);
while(true){
if((i__4819__auto___39579 < len__4818__auto___39578)){
args__4824__auto__.push((arguments[i__4819__auto___39579]));

var G__39581 = (i__4819__auto___39579 + (1));
i__4819__auto___39579 = G__39581;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39444.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to39444.cljs$core$IFn$_invoke$arity$variadic = (function (p__39464,body){
var vec__39465 = p__39464;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39465,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39465,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to39444.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to39444.cljs$lang$applyTo = (function (seq39451){
var G__39452 = cljs.core.first(seq39451);
var seq39451__$1 = cljs.core.next(seq39451);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39452,seq39451__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39444);

//# sourceMappingURL=sablono.core.js.map
