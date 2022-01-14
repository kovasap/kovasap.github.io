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
var G__28843__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__28685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__28686 = cljs.core.seq(vec__28685);
var first__28687 = cljs.core.first(seq__28686);
var seq__28686__$1 = cljs.core.next(seq__28686);
var tag = first__28687;
var body = seq__28686__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__28843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28844__i = 0, G__28844__a = new Array(arguments.length -  0);
while (G__28844__i < G__28844__a.length) {G__28844__a[G__28844__i] = arguments[G__28844__i + 0]; ++G__28844__i;}
  args = new cljs.core.IndexedSeq(G__28844__a,0,null);
} 
return G__28843__delegate.call(this,args);};
G__28843.cljs$lang$maxFixedArity = 0;
G__28843.cljs$lang$applyTo = (function (arglist__28845){
var args = cljs.core.seq(arglist__28845);
return G__28843__delegate(args);
});
G__28843.cljs$core$IFn$_invoke$arity$variadic = G__28843__delegate;
return G__28843;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__28704(s__28705){
return (new cljs.core.LazySeq(null,(function (){
var s__28705__$1 = s__28705;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28705__$1);
if(temp__5753__auto__){
var s__28705__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28705__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28705__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28707 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28706 = (0);
while(true){
if((i__28706 < size__4610__auto__)){
var args = cljs.core._nth(c__4609__auto__,i__28706);
cljs.core.chunk_append(b__28707,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28846 = (i__28706 + (1));
i__28706 = G__28846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28707),sablono$core$update_arglists_$_iter__28704(cljs.core.chunk_rest(s__28705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28707),null);
}
} else {
var args = cljs.core.first(s__28705__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28704(cljs.core.rest(s__28705__$2)));
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
var len__4818__auto___28847 = arguments.length;
var i__4819__auto___28848 = (0);
while(true){
if((i__4819__auto___28848 < len__4818__auto___28847)){
args__4824__auto__.push((arguments[i__4819__auto___28848]));

var G__28849 = (i__4819__auto___28848 + (1));
i__4819__auto___28848 = G__28849;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__28709(s__28710){
return (new cljs.core.LazySeq(null,(function (){
var s__28710__$1 = s__28710;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28710__$1);
if(temp__5753__auto__){
var s__28710__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28710__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28710__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28712 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28711 = (0);
while(true){
if((i__28711 < size__4610__auto__)){
var style = cljs.core._nth(c__4609__auto__,i__28711);
cljs.core.chunk_append(b__28712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28850 = (i__28711 + (1));
i__28711 = G__28850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28712),sablono$core$iter__28709(cljs.core.chunk_rest(s__28710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28712),null);
}
} else {
var style = cljs.core.first(s__28710__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28709(cljs.core.rest(s__28710__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq28708){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28708));
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
sablono.core.link_to28713 = (function sablono$core$link_to28713(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28851 = arguments.length;
var i__4819__auto___28852 = (0);
while(true){
if((i__4819__auto___28852 < len__4818__auto___28851)){
args__4824__auto__.push((arguments[i__4819__auto___28852]));

var G__28853 = (i__4819__auto___28852 + (1));
i__4819__auto___28852 = G__28853;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28713.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to28713.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to28713.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to28713.cljs$lang$applyTo = (function (seq28714){
var G__28715 = cljs.core.first(seq28714);
var seq28714__$1 = cljs.core.next(seq28714);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28715,seq28714__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to28713);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28716 = (function sablono$core$mail_to28716(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28854 = arguments.length;
var i__4819__auto___28855 = (0);
while(true){
if((i__4819__auto___28855 < len__4818__auto___28854)){
args__4824__auto__.push((arguments[i__4819__auto___28855]));

var G__28856 = (i__4819__auto___28855 + (1));
i__4819__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28716.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to28716.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28719){
var vec__28720 = p__28719;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to28716.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to28716.cljs$lang$applyTo = (function (seq28717){
var G__28718 = cljs.core.first(seq28717);
var seq28717__$1 = cljs.core.next(seq28717);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28718,seq28717__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to28716);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28723 = (function sablono$core$unordered_list28723(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list28723_$_iter__28724(s__28725){
return (new cljs.core.LazySeq(null,(function (){
var s__28725__$1 = s__28725;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28725__$1);
if(temp__5753__auto__){
var s__28725__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28725__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28725__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28727 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28726 = (0);
while(true){
if((i__28726 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__28726);
cljs.core.chunk_append(b__28727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28857 = (i__28726 + (1));
i__28726 = G__28857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28727),sablono$core$unordered_list28723_$_iter__28724(cljs.core.chunk_rest(s__28725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28727),null);
}
} else {
var x = cljs.core.first(s__28725__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28723_$_iter__28724(cljs.core.rest(s__28725__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list28723);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28745 = (function sablono$core$ordered_list28745(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list28745_$_iter__28746(s__28747){
return (new cljs.core.LazySeq(null,(function (){
var s__28747__$1 = s__28747;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28747__$1);
if(temp__5753__auto__){
var s__28747__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28747__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28747__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28749 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28748 = (0);
while(true){
if((i__28748 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__28748);
cljs.core.chunk_append(b__28749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28858 = (i__28748 + (1));
i__28748 = G__28858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28749),sablono$core$ordered_list28745_$_iter__28746(cljs.core.chunk_rest(s__28747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28749),null);
}
} else {
var x = cljs.core.first(s__28747__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28745_$_iter__28746(cljs.core.rest(s__28747__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list28745);
/**
 * Create an image element.
 */
sablono.core.image28750 = (function sablono$core$image28750(var_args){
var G__28752 = arguments.length;
switch (G__28752) {
case 1:
return sablono.core.image28750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image28750.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image28750.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image28750.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image28750);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28753_SHARP_,p2__28754_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28753_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28754_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28755_SHARP_,p2__28756_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28755_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28756_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__28758 = arguments.length;
switch (G__28758) {
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
sablono.core.color_field28759 = (function sablono$core$color_field28759(var_args){
var G__28761 = arguments.length;
switch (G__28761) {
case 1:
return sablono.core.color_field28759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field28759.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28671__auto__);
}));

(sablono.core.color_field28759.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.color_field28759.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field28759);

/**
 * Creates a date input field.
 */
sablono.core.date_field28762 = (function sablono$core$date_field28762(var_args){
var G__28764 = arguments.length;
switch (G__28764) {
case 1:
return sablono.core.date_field28762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field28762.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28671__auto__);
}));

(sablono.core.date_field28762.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.date_field28762.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field28762);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28765 = (function sablono$core$datetime_field28765(var_args){
var G__28767 = arguments.length;
switch (G__28767) {
case 1:
return sablono.core.datetime_field28765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field28765.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28671__auto__);
}));

(sablono.core.datetime_field28765.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.datetime_field28765.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field28765);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28768 = (function sablono$core$datetime_local_field28768(var_args){
var G__28770 = arguments.length;
switch (G__28770) {
case 1:
return sablono.core.datetime_local_field28768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field28768.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28671__auto__);
}));

(sablono.core.datetime_local_field28768.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.datetime_local_field28768.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field28768);

/**
 * Creates a email input field.
 */
sablono.core.email_field28771 = (function sablono$core$email_field28771(var_args){
var G__28773 = arguments.length;
switch (G__28773) {
case 1:
return sablono.core.email_field28771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field28771.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28671__auto__);
}));

(sablono.core.email_field28771.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.email_field28771.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field28771);

/**
 * Creates a file input field.
 */
sablono.core.file_field28774 = (function sablono$core$file_field28774(var_args){
var G__28776 = arguments.length;
switch (G__28776) {
case 1:
return sablono.core.file_field28774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field28774.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28671__auto__);
}));

(sablono.core.file_field28774.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.file_field28774.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field28774);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28777 = (function sablono$core$hidden_field28777(var_args){
var G__28779 = arguments.length;
switch (G__28779) {
case 1:
return sablono.core.hidden_field28777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field28777.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28671__auto__);
}));

(sablono.core.hidden_field28777.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.hidden_field28777.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field28777);

/**
 * Creates a month input field.
 */
sablono.core.month_field28780 = (function sablono$core$month_field28780(var_args){
var G__28782 = arguments.length;
switch (G__28782) {
case 1:
return sablono.core.month_field28780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field28780.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28671__auto__);
}));

(sablono.core.month_field28780.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.month_field28780.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field28780);

/**
 * Creates a number input field.
 */
sablono.core.number_field28783 = (function sablono$core$number_field28783(var_args){
var G__28785 = arguments.length;
switch (G__28785) {
case 1:
return sablono.core.number_field28783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field28783.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28671__auto__);
}));

(sablono.core.number_field28783.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.number_field28783.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field28783);

/**
 * Creates a password input field.
 */
sablono.core.password_field28786 = (function sablono$core$password_field28786(var_args){
var G__28788 = arguments.length;
switch (G__28788) {
case 1:
return sablono.core.password_field28786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field28786.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28671__auto__);
}));

(sablono.core.password_field28786.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.password_field28786.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field28786);

/**
 * Creates a range input field.
 */
sablono.core.range_field28789 = (function sablono$core$range_field28789(var_args){
var G__28791 = arguments.length;
switch (G__28791) {
case 1:
return sablono.core.range_field28789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field28789.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28671__auto__);
}));

(sablono.core.range_field28789.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.range_field28789.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field28789);

/**
 * Creates a search input field.
 */
sablono.core.search_field28792 = (function sablono$core$search_field28792(var_args){
var G__28794 = arguments.length;
switch (G__28794) {
case 1:
return sablono.core.search_field28792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field28792.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28671__auto__);
}));

(sablono.core.search_field28792.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.search_field28792.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field28792);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28795 = (function sablono$core$tel_field28795(var_args){
var G__28797 = arguments.length;
switch (G__28797) {
case 1:
return sablono.core.tel_field28795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field28795.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28671__auto__);
}));

(sablono.core.tel_field28795.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.tel_field28795.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field28795);

/**
 * Creates a text input field.
 */
sablono.core.text_field28798 = (function sablono$core$text_field28798(var_args){
var G__28800 = arguments.length;
switch (G__28800) {
case 1:
return sablono.core.text_field28798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field28798.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28671__auto__);
}));

(sablono.core.text_field28798.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.text_field28798.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field28798);

/**
 * Creates a time input field.
 */
sablono.core.time_field28801 = (function sablono$core$time_field28801(var_args){
var G__28803 = arguments.length;
switch (G__28803) {
case 1:
return sablono.core.time_field28801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field28801.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28671__auto__);
}));

(sablono.core.time_field28801.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.time_field28801.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field28801);

/**
 * Creates a url input field.
 */
sablono.core.url_field28804 = (function sablono$core$url_field28804(var_args){
var G__28806 = arguments.length;
switch (G__28806) {
case 1:
return sablono.core.url_field28804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field28804.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28671__auto__);
}));

(sablono.core.url_field28804.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.url_field28804.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field28804);

/**
 * Creates a week input field.
 */
sablono.core.week_field28807 = (function sablono$core$week_field28807(var_args){
var G__28809 = arguments.length;
switch (G__28809) {
case 1:
return sablono.core.week_field28807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field28807.cljs$core$IFn$_invoke$arity$1 = (function (name__28671__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28671__auto__);
}));

(sablono.core.week_field28807.cljs$core$IFn$_invoke$arity$2 = (function (name__28671__auto__,value__28672__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28671__auto__,value__28672__auto__);
}));

(sablono.core.week_field28807.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field28807);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28810 = (function sablono$core$check_box28810(var_args){
var G__28812 = arguments.length;
switch (G__28812) {
case 1:
return sablono.core.check_box28810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28810.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box28810.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box28810.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28810.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28810.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box28810);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28813 = (function sablono$core$radio_button28813(var_args){
var G__28815 = arguments.length;
switch (G__28815) {
case 1:
return sablono.core.radio_button28813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28813.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button28813.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button28813.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28813.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28813.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button28813);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28816 = (function sablono$core$select_options28816(coll){
var iter__4611__auto__ = (function sablono$core$select_options28816_$_iter__28817(s__28818){
return (new cljs.core.LazySeq(null,(function (){
var s__28818__$1 = s__28818;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28818__$1);
if(temp__5753__auto__){
var s__28818__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28818__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28818__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28820 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28819 = (0);
while(true){
if((i__28819 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__28819);
cljs.core.chunk_append(b__28820,((cljs.core.sequential_QMARK_(x))?(function (){var vec__28821 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28821,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28821,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28821,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options28816.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options28816.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options28816.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28896 = (i__28819 + (1));
i__28819 = G__28896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28820),sablono$core$select_options28816_$_iter__28817(cljs.core.chunk_rest(s__28818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28820),null);
}
} else {
var x = cljs.core.first(s__28818__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__28824 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options28816.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options28816.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options28816.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28816_$_iter__28817(cljs.core.rest(s__28818__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options28816);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28827 = (function sablono$core$drop_down28827(var_args){
var G__28829 = arguments.length;
switch (G__28829) {
case 2:
return sablono.core.drop_down28827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28827.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down28827.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28827.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down28827.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down28827.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down28827);
/**
 * Creates a text area element.
 */
sablono.core.text_area28830 = (function sablono$core$text_area28830(var_args){
var G__28832 = arguments.length;
switch (G__28832) {
case 1:
return sablono.core.text_area28830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area28830.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area28830.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area28830.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area28830);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28833 = (function sablono$core$label28833(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label28833);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28834 = (function sablono$core$submit_button28834(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button28834);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28835 = (function sablono$core$reset_button28835(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button28835);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28836 = (function sablono$core$form_to28836(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28900 = arguments.length;
var i__4819__auto___28901 = (0);
while(true){
if((i__4819__auto___28901 < len__4818__auto___28900)){
args__4824__auto__.push((arguments[i__4819__auto___28901]));

var G__28902 = (i__4819__auto___28901 + (1));
i__4819__auto___28901 = G__28902;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28836.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to28836.cljs$core$IFn$_invoke$arity$variadic = (function (p__28839,body){
var vec__28840 = p__28839;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to28836.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to28836.cljs$lang$applyTo = (function (seq28837){
var G__28838 = cljs.core.first(seq28837);
var seq28837__$1 = cljs.core.next(seq28837);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28838,seq28837__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to28836);

//# sourceMappingURL=sablono.core.js.map
