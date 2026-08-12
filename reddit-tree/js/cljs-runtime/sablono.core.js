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
var G__38606__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37960 = cljs.core.seq(vec__37959);
var first__37961 = cljs.core.first(seq__37960);
var seq__37960__$1 = cljs.core.next(seq__37960);
var tag = first__37961;
var body = seq__37960__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38607__i = 0, G__38607__a = new Array(arguments.length -  0);
while (G__38607__i < G__38607__a.length) {G__38607__a[G__38607__i] = arguments[G__38607__i + 0]; ++G__38607__i;}
  args = new cljs.core.IndexedSeq(G__38607__a,0,null);
} 
return G__38606__delegate.call(this,args);};
G__38606.cljs$lang$maxFixedArity = 0;
G__38606.cljs$lang$applyTo = (function (arglist__38608){
var args = cljs.core.seq(arglist__38608);
return G__38606__delegate(args);
});
G__38606.cljs$core$IFn$_invoke$arity$variadic = G__38606__delegate;
return G__38606;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__37972(s__37973){
return (new cljs.core.LazySeq(null,(function (){
var s__37973__$1 = s__37973;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37973__$1);
if(temp__5753__auto__){
var s__37973__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37973__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37973__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37975 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37974 = (0);
while(true){
if((i__37974 < size__4610__auto__)){
var args = cljs.core._nth(c__4609__auto__,i__37974);
cljs.core.chunk_append(b__37975,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38610 = (i__37974 + (1));
i__37974 = G__38610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37975),sablono$core$update_arglists_$_iter__37972(cljs.core.chunk_rest(s__37973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37975),null);
}
} else {
var args = cljs.core.first(s__37973__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37972(cljs.core.rest(s__37973__$2)));
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
var len__4818__auto___38612 = arguments.length;
var i__4819__auto___38613 = (0);
while(true){
if((i__4819__auto___38613 < len__4818__auto___38612)){
args__4824__auto__.push((arguments[i__4819__auto___38613]));

var G__38614 = (i__4819__auto___38613 + (1));
i__4819__auto___38613 = G__38614;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__37999(s__38000){
return (new cljs.core.LazySeq(null,(function (){
var s__38000__$1 = s__38000;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38000__$1);
if(temp__5753__auto__){
var s__38000__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38000__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38000__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38002 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38001 = (0);
while(true){
if((i__38001 < size__4610__auto__)){
var style = cljs.core._nth(c__4609__auto__,i__38001);
cljs.core.chunk_append(b__38002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38617 = (i__38001 + (1));
i__38001 = G__38617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38002),sablono$core$iter__37999(cljs.core.chunk_rest(s__38000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38002),null);
}
} else {
var style = cljs.core.first(s__38000__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37999(cljs.core.rest(s__38000__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37990){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37990));
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
sablono.core.link_to38038 = (function sablono$core$link_to38038(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38624 = arguments.length;
var i__4819__auto___38625 = (0);
while(true){
if((i__4819__auto___38625 < len__4818__auto___38624)){
args__4824__auto__.push((arguments[i__4819__auto___38625]));

var G__38626 = (i__4819__auto___38625 + (1));
i__4819__auto___38625 = G__38626;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38038.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to38038.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38038.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38038.cljs$lang$applyTo = (function (seq38044){
var G__38049 = cljs.core.first(seq38044);
var seq38044__$1 = cljs.core.next(seq38044);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38049,seq38044__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38038);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38077 = (function sablono$core$mail_to38077(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38630 = arguments.length;
var i__4819__auto___38631 = (0);
while(true){
if((i__4819__auto___38631 < len__4818__auto___38630)){
args__4824__auto__.push((arguments[i__4819__auto___38631]));

var G__38632 = (i__4819__auto___38631 + (1));
i__4819__auto___38631 = G__38632;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38077.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to38077.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38100){
var vec__38101 = p__38100;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38077.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38077.cljs$lang$applyTo = (function (seq38083){
var G__38084 = cljs.core.first(seq38083);
var seq38083__$1 = cljs.core.next(seq38083);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38084,seq38083__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38077);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38126 = (function sablono$core$unordered_list38126(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list38126_$_iter__38127(s__38128){
return (new cljs.core.LazySeq(null,(function (){
var s__38128__$1 = s__38128;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38128__$1);
if(temp__5753__auto__){
var s__38128__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38128__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38128__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38130 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38129 = (0);
while(true){
if((i__38129 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__38129);
cljs.core.chunk_append(b__38130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38634 = (i__38129 + (1));
i__38129 = G__38634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38130),sablono$core$unordered_list38126_$_iter__38127(cljs.core.chunk_rest(s__38128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38130),null);
}
} else {
var x = cljs.core.first(s__38128__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38126_$_iter__38127(cljs.core.rest(s__38128__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38126);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38147 = (function sablono$core$ordered_list38147(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list38147_$_iter__38152(s__38153){
return (new cljs.core.LazySeq(null,(function (){
var s__38153__$1 = s__38153;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38153__$1);
if(temp__5753__auto__){
var s__38153__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38153__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38153__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38155 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38154 = (0);
while(true){
if((i__38154 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__38154);
cljs.core.chunk_append(b__38155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38636 = (i__38154 + (1));
i__38154 = G__38636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38155),sablono$core$ordered_list38147_$_iter__38152(cljs.core.chunk_rest(s__38153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38155),null);
}
} else {
var x = cljs.core.first(s__38153__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38147_$_iter__38152(cljs.core.rest(s__38153__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38147);
/**
 * Create an image element.
 */
sablono.core.image38174 = (function sablono$core$image38174(var_args){
var G__38184 = arguments.length;
switch (G__38184) {
case 1:
return sablono.core.image38174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38174.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38174.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38174.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38174);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38222_SHARP_,p2__38223_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38222_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38223_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38250_SHARP_,p2__38251_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38250_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38251_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38263 = arguments.length;
switch (G__38263) {
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
sablono.core.color_field38267 = (function sablono$core$color_field38267(var_args){
var G__38273 = arguments.length;
switch (G__38273) {
case 1:
return sablono.core.color_field38267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38267.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37939__auto__);
}));

(sablono.core.color_field38267.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.color_field38267.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38267);

/**
 * Creates a date input field.
 */
sablono.core.date_field38286 = (function sablono$core$date_field38286(var_args){
var G__38289 = arguments.length;
switch (G__38289) {
case 1:
return sablono.core.date_field38286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38286.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37939__auto__);
}));

(sablono.core.date_field38286.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.date_field38286.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38286);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38292 = (function sablono$core$datetime_field38292(var_args){
var G__38295 = arguments.length;
switch (G__38295) {
case 1:
return sablono.core.datetime_field38292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38292.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37939__auto__);
}));

(sablono.core.datetime_field38292.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.datetime_field38292.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38292);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38303 = (function sablono$core$datetime_local_field38303(var_args){
var G__38310 = arguments.length;
switch (G__38310) {
case 1:
return sablono.core.datetime_local_field38303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38303.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37939__auto__);
}));

(sablono.core.datetime_local_field38303.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.datetime_local_field38303.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38303);

/**
 * Creates a email input field.
 */
sablono.core.email_field38312 = (function sablono$core$email_field38312(var_args){
var G__38317 = arguments.length;
switch (G__38317) {
case 1:
return sablono.core.email_field38312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38312.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37939__auto__);
}));

(sablono.core.email_field38312.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.email_field38312.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38312);

/**
 * Creates a file input field.
 */
sablono.core.file_field38326 = (function sablono$core$file_field38326(var_args){
var G__38329 = arguments.length;
switch (G__38329) {
case 1:
return sablono.core.file_field38326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38326.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37939__auto__);
}));

(sablono.core.file_field38326.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.file_field38326.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38326);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38330 = (function sablono$core$hidden_field38330(var_args){
var G__38333 = arguments.length;
switch (G__38333) {
case 1:
return sablono.core.hidden_field38330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38330.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37939__auto__);
}));

(sablono.core.hidden_field38330.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.hidden_field38330.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38330);

/**
 * Creates a month input field.
 */
sablono.core.month_field38343 = (function sablono$core$month_field38343(var_args){
var G__38348 = arguments.length;
switch (G__38348) {
case 1:
return sablono.core.month_field38343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38343.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37939__auto__);
}));

(sablono.core.month_field38343.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.month_field38343.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38343);

/**
 * Creates a number input field.
 */
sablono.core.number_field38353 = (function sablono$core$number_field38353(var_args){
var G__38356 = arguments.length;
switch (G__38356) {
case 1:
return sablono.core.number_field38353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38353.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37939__auto__);
}));

(sablono.core.number_field38353.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.number_field38353.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38353);

/**
 * Creates a password input field.
 */
sablono.core.password_field38365 = (function sablono$core$password_field38365(var_args){
var G__38367 = arguments.length;
switch (G__38367) {
case 1:
return sablono.core.password_field38365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38365.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37939__auto__);
}));

(sablono.core.password_field38365.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.password_field38365.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38365);

/**
 * Creates a range input field.
 */
sablono.core.range_field38388 = (function sablono$core$range_field38388(var_args){
var G__38394 = arguments.length;
switch (G__38394) {
case 1:
return sablono.core.range_field38388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38388.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37939__auto__);
}));

(sablono.core.range_field38388.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.range_field38388.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38388);

/**
 * Creates a search input field.
 */
sablono.core.search_field38399 = (function sablono$core$search_field38399(var_args){
var G__38406 = arguments.length;
switch (G__38406) {
case 1:
return sablono.core.search_field38399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38399.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37939__auto__);
}));

(sablono.core.search_field38399.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.search_field38399.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38399);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38407 = (function sablono$core$tel_field38407(var_args){
var G__38409 = arguments.length;
switch (G__38409) {
case 1:
return sablono.core.tel_field38407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38407.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37939__auto__);
}));

(sablono.core.tel_field38407.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.tel_field38407.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38407);

/**
 * Creates a text input field.
 */
sablono.core.text_field38410 = (function sablono$core$text_field38410(var_args){
var G__38418 = arguments.length;
switch (G__38418) {
case 1:
return sablono.core.text_field38410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38410.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37939__auto__);
}));

(sablono.core.text_field38410.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.text_field38410.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38410);

/**
 * Creates a time input field.
 */
sablono.core.time_field38439 = (function sablono$core$time_field38439(var_args){
var G__38441 = arguments.length;
switch (G__38441) {
case 1:
return sablono.core.time_field38439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38439.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37939__auto__);
}));

(sablono.core.time_field38439.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.time_field38439.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38439);

/**
 * Creates a url input field.
 */
sablono.core.url_field38477 = (function sablono$core$url_field38477(var_args){
var G__38487 = arguments.length;
switch (G__38487) {
case 1:
return sablono.core.url_field38477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38477.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37939__auto__);
}));

(sablono.core.url_field38477.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.url_field38477.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38477);

/**
 * Creates a week input field.
 */
sablono.core.week_field38498 = (function sablono$core$week_field38498(var_args){
var G__38509 = arguments.length;
switch (G__38509) {
case 1:
return sablono.core.week_field38498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38498.cljs$core$IFn$_invoke$arity$1 = (function (name__37939__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37939__auto__);
}));

(sablono.core.week_field38498.cljs$core$IFn$_invoke$arity$2 = (function (name__37939__auto__,value__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37939__auto__,value__37940__auto__);
}));

(sablono.core.week_field38498.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38498);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38517 = (function sablono$core$check_box38517(var_args){
var G__38522 = arguments.length;
switch (G__38522) {
case 1:
return sablono.core.check_box38517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38517.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38517.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38517.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38517.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38517.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38517);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38527 = (function sablono$core$radio_button38527(var_args){
var G__38529 = arguments.length;
switch (G__38529) {
case 1:
return sablono.core.radio_button38527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38527.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38527.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38527.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38527.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38527.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38527);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38534 = (function sablono$core$select_options38534(coll){
var iter__4611__auto__ = (function sablono$core$select_options38534_$_iter__38535(s__38536){
return (new cljs.core.LazySeq(null,(function (){
var s__38536__$1 = s__38536;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38536__$1);
if(temp__5753__auto__){
var s__38536__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38536__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38536__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38538 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38537 = (0);
while(true){
if((i__38537 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__38537);
cljs.core.chunk_append(b__38538,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38539 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38539,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38539,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38539,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38534.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38534.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38534.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38692 = (i__38537 + (1));
i__38537 = G__38692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38538),sablono$core$select_options38534_$_iter__38535(cljs.core.chunk_rest(s__38536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38538),null);
}
} else {
var x = cljs.core.first(s__38536__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38546 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38546,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38546,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38546,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38534.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38534.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38534.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38534_$_iter__38535(cljs.core.rest(s__38536__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38534);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38561 = (function sablono$core$drop_down38561(var_args){
var G__38564 = arguments.length;
switch (G__38564) {
case 2:
return sablono.core.drop_down38561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38561.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38561.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38561.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38561.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down38561.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38561);
/**
 * Creates a text area element.
 */
sablono.core.text_area38569 = (function sablono$core$text_area38569(var_args){
var G__38571 = arguments.length;
switch (G__38571) {
case 1:
return sablono.core.text_area38569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38569.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38569.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38569.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38569);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38575 = (function sablono$core$label38575(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38575);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38577 = (function sablono$core$submit_button38577(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38577);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38578 = (function sablono$core$reset_button38578(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38578);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38589 = (function sablono$core$form_to38589(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38697 = arguments.length;
var i__4819__auto___38698 = (0);
while(true){
if((i__4819__auto___38698 < len__4818__auto___38697)){
args__4824__auto__.push((arguments[i__4819__auto___38698]));

var G__38699 = (i__4819__auto___38698 + (1));
i__4819__auto___38698 = G__38699;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38589.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to38589.cljs$core$IFn$_invoke$arity$variadic = (function (p__38592,body){
var vec__38593 = p__38592;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38593,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38593,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to38589.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38589.cljs$lang$applyTo = (function (seq38590){
var G__38591 = cljs.core.first(seq38590);
var seq38590__$1 = cljs.core.next(seq38590);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38591,seq38590__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38589);

//# sourceMappingURL=sablono.core.js.map
