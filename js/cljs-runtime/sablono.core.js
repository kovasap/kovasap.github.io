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
var G__29729__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__29452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__29453 = cljs.core.seq(vec__29452);
var first__29454 = cljs.core.first(seq__29453);
var seq__29453__$1 = cljs.core.next(seq__29453);
var tag = first__29454;
var body = seq__29453__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__29729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29734__i = 0, G__29734__a = new Array(arguments.length -  0);
while (G__29734__i < G__29734__a.length) {G__29734__a[G__29734__i] = arguments[G__29734__i + 0]; ++G__29734__i;}
  args = new cljs.core.IndexedSeq(G__29734__a,0,null);
} 
return G__29729__delegate.call(this,args);};
G__29729.cljs$lang$maxFixedArity = 0;
G__29729.cljs$lang$applyTo = (function (arglist__29735){
var args = cljs.core.seq(arglist__29735);
return G__29729__delegate(args);
});
G__29729.cljs$core$IFn$_invoke$arity$variadic = G__29729__delegate;
return G__29729;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5523__auto__ = (function sablono$core$update_arglists_$_iter__29455(s__29456){
return (new cljs.core.LazySeq(null,(function (){
var s__29456__$1 = s__29456;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29456__$1);
if(temp__5804__auto__){
var s__29456__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29456__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29456__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29458 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29457 = (0);
while(true){
if((i__29457 < size__5522__auto__)){
var args = cljs.core._nth(c__5521__auto__,i__29457);
cljs.core.chunk_append(b__29458,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__29736 = (i__29457 + (1));
i__29457 = G__29736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29458),sablono$core$update_arglists_$_iter__29455(cljs.core.chunk_rest(s__29456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29458),null);
}
} else {
var args = cljs.core.first(s__29456__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__29455(cljs.core.rest(s__29456__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29737 = arguments.length;
var i__5770__auto___29738 = (0);
while(true){
if((i__5770__auto___29738 < len__5769__auto___29737)){
args__5775__auto__.push((arguments[i__5770__auto___29738]));

var G__29739 = (i__5770__auto___29738 + (1));
i__5770__auto___29738 = G__29739;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5523__auto__ = (function sablono$core$iter__29461(s__29462){
return (new cljs.core.LazySeq(null,(function (){
var s__29462__$1 = s__29462;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29462__$1);
if(temp__5804__auto__){
var s__29462__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29462__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29462__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29464 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29463 = (0);
while(true){
if((i__29463 < size__5522__auto__)){
var style = cljs.core._nth(c__5521__auto__,i__29463);
cljs.core.chunk_append(b__29464,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__29740 = (i__29463 + (1));
i__29463 = G__29740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29464),sablono$core$iter__29461(cljs.core.chunk_rest(s__29462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29464),null);
}
} else {
var style = cljs.core.first(s__29462__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__29461(cljs.core.rest(s__29462__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq29459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29459));
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
sablono.core.link_to29468 = (function sablono$core$link_to29468(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29745 = arguments.length;
var i__5770__auto___29746 = (0);
while(true){
if((i__5770__auto___29746 < len__5769__auto___29745)){
args__5775__auto__.push((arguments[i__5770__auto___29746]));

var G__29747 = (i__5770__auto___29746 + (1));
i__5770__auto___29746 = G__29747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to29468.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.link_to29468.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to29468.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to29468.cljs$lang$applyTo = (function (seq29469){
var G__29470 = cljs.core.first(seq29469);
var seq29469__$1 = cljs.core.next(seq29469);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29470,seq29469__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to29468);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to29471 = (function sablono$core$mail_to29471(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29761 = arguments.length;
var i__5770__auto___29762 = (0);
while(true){
if((i__5770__auto___29762 < len__5769__auto___29761)){
args__5775__auto__.push((arguments[i__5770__auto___29762]));

var G__29763 = (i__5770__auto___29762 + (1));
i__5770__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to29471.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.mail_to29471.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__29475){
var vec__29476 = p__29475;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29476,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to29471.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to29471.cljs$lang$applyTo = (function (seq29472){
var G__29473 = cljs.core.first(seq29472);
var seq29472__$1 = cljs.core.next(seq29472);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29473,seq29472__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to29471);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list29479 = (function sablono$core$unordered_list29479(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function sablono$core$unordered_list29479_$_iter__29483(s__29484){
return (new cljs.core.LazySeq(null,(function (){
var s__29484__$1 = s__29484;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29484__$1);
if(temp__5804__auto__){
var s__29484__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29484__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29484__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29486 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29485 = (0);
while(true){
if((i__29485 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__29485);
cljs.core.chunk_append(b__29486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__29767 = (i__29485 + (1));
i__29485 = G__29767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29486),sablono$core$unordered_list29479_$_iter__29483(cljs.core.chunk_rest(s__29484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29486),null);
}
} else {
var x = cljs.core.first(s__29484__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list29479_$_iter__29483(cljs.core.rest(s__29484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list29479);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list29487 = (function sablono$core$ordered_list29487(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5523__auto__ = (function sablono$core$ordered_list29487_$_iter__29488(s__29489){
return (new cljs.core.LazySeq(null,(function (){
var s__29489__$1 = s__29489;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29489__$1);
if(temp__5804__auto__){
var s__29489__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29489__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29489__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29491 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29490 = (0);
while(true){
if((i__29490 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__29490);
cljs.core.chunk_append(b__29491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__29772 = (i__29490 + (1));
i__29490 = G__29772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29491),sablono$core$ordered_list29487_$_iter__29488(cljs.core.chunk_rest(s__29489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29491),null);
}
} else {
var x = cljs.core.first(s__29489__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list29487_$_iter__29488(cljs.core.rest(s__29489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list29487);
/**
 * Create an image element.
 */
sablono.core.image29492 = (function sablono$core$image29492(var_args){
var G__29494 = arguments.length;
switch (G__29494) {
case 1:
return sablono.core.image29492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image29492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image29492.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image29492.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image29492.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image29492);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29498_SHARP_,p2__29499_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29498_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29499_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29502_SHARP_,p2__29503_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29502_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29503_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__29505 = arguments.length;
switch (G__29505) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field29506 = (function sablono$core$color_field29506(var_args){
var G__29509 = arguments.length;
switch (G__29509) {
case 1:
return sablono.core.color_field29506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field29506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field29506.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__29443__auto__);
}));

(sablono.core.color_field29506.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.color_field29506.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field29506);

/**
 * Creates a date input field.
 */
sablono.core.date_field29513 = (function sablono$core$date_field29513(var_args){
var G__29523 = arguments.length;
switch (G__29523) {
case 1:
return sablono.core.date_field29513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field29513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field29513.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__29443__auto__);
}));

(sablono.core.date_field29513.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.date_field29513.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field29513);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field29531 = (function sablono$core$datetime_field29531(var_args){
var G__29537 = arguments.length;
switch (G__29537) {
case 1:
return sablono.core.datetime_field29531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field29531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field29531.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__29443__auto__);
}));

(sablono.core.datetime_field29531.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.datetime_field29531.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field29531);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field29547 = (function sablono$core$datetime_local_field29547(var_args){
var G__29549 = arguments.length;
switch (G__29549) {
case 1:
return sablono.core.datetime_local_field29547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field29547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field29547.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__29443__auto__);
}));

(sablono.core.datetime_local_field29547.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.datetime_local_field29547.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field29547);

/**
 * Creates a email input field.
 */
sablono.core.email_field29550 = (function sablono$core$email_field29550(var_args){
var G__29552 = arguments.length;
switch (G__29552) {
case 1:
return sablono.core.email_field29550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field29550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field29550.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__29443__auto__);
}));

(sablono.core.email_field29550.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.email_field29550.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field29550);

/**
 * Creates a file input field.
 */
sablono.core.file_field29553 = (function sablono$core$file_field29553(var_args){
var G__29555 = arguments.length;
switch (G__29555) {
case 1:
return sablono.core.file_field29553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field29553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field29553.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__29443__auto__);
}));

(sablono.core.file_field29553.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.file_field29553.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field29553);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field29566 = (function sablono$core$hidden_field29566(var_args){
var G__29568 = arguments.length;
switch (G__29568) {
case 1:
return sablono.core.hidden_field29566.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field29566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field29566.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__29443__auto__);
}));

(sablono.core.hidden_field29566.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.hidden_field29566.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field29566);

/**
 * Creates a month input field.
 */
sablono.core.month_field29570 = (function sablono$core$month_field29570(var_args){
var G__29580 = arguments.length;
switch (G__29580) {
case 1:
return sablono.core.month_field29570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field29570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field29570.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__29443__auto__);
}));

(sablono.core.month_field29570.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.month_field29570.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field29570);

/**
 * Creates a number input field.
 */
sablono.core.number_field29583 = (function sablono$core$number_field29583(var_args){
var G__29585 = arguments.length;
switch (G__29585) {
case 1:
return sablono.core.number_field29583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field29583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field29583.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__29443__auto__);
}));

(sablono.core.number_field29583.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.number_field29583.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field29583);

/**
 * Creates a password input field.
 */
sablono.core.password_field29588 = (function sablono$core$password_field29588(var_args){
var G__29593 = arguments.length;
switch (G__29593) {
case 1:
return sablono.core.password_field29588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field29588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field29588.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__29443__auto__);
}));

(sablono.core.password_field29588.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.password_field29588.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field29588);

/**
 * Creates a range input field.
 */
sablono.core.range_field29597 = (function sablono$core$range_field29597(var_args){
var G__29601 = arguments.length;
switch (G__29601) {
case 1:
return sablono.core.range_field29597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field29597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field29597.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__29443__auto__);
}));

(sablono.core.range_field29597.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.range_field29597.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field29597);

/**
 * Creates a search input field.
 */
sablono.core.search_field29622 = (function sablono$core$search_field29622(var_args){
var G__29624 = arguments.length;
switch (G__29624) {
case 1:
return sablono.core.search_field29622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field29622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field29622.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__29443__auto__);
}));

(sablono.core.search_field29622.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.search_field29622.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field29622);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field29626 = (function sablono$core$tel_field29626(var_args){
var G__29628 = arguments.length;
switch (G__29628) {
case 1:
return sablono.core.tel_field29626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field29626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field29626.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__29443__auto__);
}));

(sablono.core.tel_field29626.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.tel_field29626.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field29626);

/**
 * Creates a text input field.
 */
sablono.core.text_field29652 = (function sablono$core$text_field29652(var_args){
var G__29654 = arguments.length;
switch (G__29654) {
case 1:
return sablono.core.text_field29652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field29652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field29652.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__29443__auto__);
}));

(sablono.core.text_field29652.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.text_field29652.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field29652);

/**
 * Creates a time input field.
 */
sablono.core.time_field29655 = (function sablono$core$time_field29655(var_args){
var G__29657 = arguments.length;
switch (G__29657) {
case 1:
return sablono.core.time_field29655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field29655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field29655.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__29443__auto__);
}));

(sablono.core.time_field29655.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.time_field29655.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field29655);

/**
 * Creates a url input field.
 */
sablono.core.url_field29658 = (function sablono$core$url_field29658(var_args){
var G__29660 = arguments.length;
switch (G__29660) {
case 1:
return sablono.core.url_field29658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field29658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field29658.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__29443__auto__);
}));

(sablono.core.url_field29658.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.url_field29658.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field29658);

/**
 * Creates a week input field.
 */
sablono.core.week_field29661 = (function sablono$core$week_field29661(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
case 1:
return sablono.core.week_field29661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field29661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field29661.cljs$core$IFn$_invoke$arity$1 = (function (name__29443__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__29443__auto__);
}));

(sablono.core.week_field29661.cljs$core$IFn$_invoke$arity$2 = (function (name__29443__auto__,value__29444__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__29443__auto__,value__29444__auto__);
}));

(sablono.core.week_field29661.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field29661);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box29664 = (function sablono$core$check_box29664(var_args){
var G__29666 = arguments.length;
switch (G__29666) {
case 1:
return sablono.core.check_box29664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box29664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box29664.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box29664.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box29664.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box29664.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box29664.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box29664);
/**
 * Creates a radio button.
 */
sablono.core.radio_button29671 = (function sablono$core$radio_button29671(var_args){
var G__29673 = arguments.length;
switch (G__29673) {
case 1:
return sablono.core.radio_button29671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button29671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button29671.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button29671.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button29671.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button29671.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button29671.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button29671);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options29684 = (function sablono$core$select_options29684(coll){
var iter__5523__auto__ = (function sablono$core$select_options29684_$_iter__29685(s__29686){
return (new cljs.core.LazySeq(null,(function (){
var s__29686__$1 = s__29686;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29686__$1);
if(temp__5804__auto__){
var s__29686__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29686__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29686__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29688 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29687 = (0);
while(true){
if((i__29687 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__29687);
cljs.core.chunk_append(b__29688,((cljs.core.sequential_QMARK_(x))?(function (){var vec__29699 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options29684.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options29684.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options29684.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__29847 = (i__29687 + (1));
i__29687 = G__29847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29688),sablono$core$select_options29684_$_iter__29685(cljs.core.chunk_rest(s__29686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29688),null);
}
} else {
var x = cljs.core.first(s__29686__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__29702 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options29684.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options29684.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options29684.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options29684_$_iter__29685(cljs.core.rest(s__29686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options29684);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down29705 = (function sablono$core$drop_down29705(var_args){
var G__29707 = arguments.length;
switch (G__29707) {
case 2:
return sablono.core.drop_down29705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down29705.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down29705.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down29705.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down29705.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down29705.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down29705);
/**
 * Creates a text area element.
 */
sablono.core.text_area29711 = (function sablono$core$text_area29711(var_args){
var G__29716 = arguments.length;
switch (G__29716) {
case 1:
return sablono.core.text_area29711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area29711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area29711.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area29711.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area29711.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area29711);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label29717 = (function sablono$core$label29717(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label29717);
/**
 * Creates a submit button.
 */
sablono.core.submit_button29718 = (function sablono$core$submit_button29718(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button29718);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button29719 = (function sablono$core$reset_button29719(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button29719);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to29720 = (function sablono$core$form_to29720(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29850 = arguments.length;
var i__5770__auto___29851 = (0);
while(true){
if((i__5770__auto___29851 < len__5769__auto___29850)){
args__5775__auto__.push((arguments[i__5770__auto___29851]));

var G__29852 = (i__5770__auto___29851 + (1));
i__5770__auto___29851 = G__29852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to29720.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.form_to29720.cljs$core$IFn$_invoke$arity$variadic = (function (p__29723,body){
var vec__29724 = p__29723;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29724,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29724,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to29720.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to29720.cljs$lang$applyTo = (function (seq29721){
var G__29722 = cljs.core.first(seq29721);
var seq29721__$1 = cljs.core.next(seq29721);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29722,seq29721__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to29720);

//# sourceMappingURL=sablono.core.js.map
