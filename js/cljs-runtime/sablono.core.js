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
var G__42136__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41792 = cljs.core.seq(vec__41791);
var first__41793 = cljs.core.first(seq__41792);
var seq__41792__$1 = cljs.core.next(seq__41792);
var tag = first__41793;
var body = seq__41792__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42146__i = 0, G__42146__a = new Array(arguments.length -  0);
while (G__42146__i < G__42146__a.length) {G__42146__a[G__42146__i] = arguments[G__42146__i + 0]; ++G__42146__i;}
  args = new cljs.core.IndexedSeq(G__42146__a,0,null);
} 
return G__42136__delegate.call(this,args);};
G__42136.cljs$lang$maxFixedArity = 0;
G__42136.cljs$lang$applyTo = (function (arglist__42147){
var args = cljs.core.seq(arglist__42147);
return G__42136__delegate(args);
});
G__42136.cljs$core$IFn$_invoke$arity$variadic = G__42136__delegate;
return G__42136;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5523__auto__ = (function sablono$core$update_arglists_$_iter__41800(s__41801){
return (new cljs.core.LazySeq(null,(function (){
var s__41801__$1 = s__41801;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41801__$1);
if(temp__5823__auto__){
var s__41801__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41801__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41801__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41803 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41802 = (0);
while(true){
if((i__41802 < size__5522__auto__)){
var args = cljs.core._nth(c__5521__auto__,i__41802);
cljs.core.chunk_append(b__41803,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42148 = (i__41802 + (1));
i__41802 = G__42148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41803),sablono$core$update_arglists_$_iter__41800(cljs.core.chunk_rest(s__41801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41803),null);
}
} else {
var args = cljs.core.first(s__41801__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41800(cljs.core.rest(s__41801__$2)));
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
var len__5769__auto___42149 = arguments.length;
var i__5770__auto___42150 = (0);
while(true){
if((i__5770__auto___42150 < len__5769__auto___42149)){
args__5775__auto__.push((arguments[i__5770__auto___42150]));

var G__42151 = (i__5770__auto___42150 + (1));
i__5770__auto___42150 = G__42151;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5523__auto__ = (function sablono$core$iter__41814(s__41815){
return (new cljs.core.LazySeq(null,(function (){
var s__41815__$1 = s__41815;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41815__$1);
if(temp__5823__auto__){
var s__41815__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41815__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41815__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41817 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41816 = (0);
while(true){
if((i__41816 < size__5522__auto__)){
var style = cljs.core._nth(c__5521__auto__,i__41816);
cljs.core.chunk_append(b__41817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42152 = (i__41816 + (1));
i__41816 = G__42152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41817),sablono$core$iter__41814(cljs.core.chunk_rest(s__41815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41817),null);
}
} else {
var style = cljs.core.first(s__41815__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41814(cljs.core.rest(s__41815__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41809){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41809));
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
sablono.core.link_to41830 = (function sablono$core$link_to41830(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42157 = arguments.length;
var i__5770__auto___42158 = (0);
while(true){
if((i__5770__auto___42158 < len__5769__auto___42157)){
args__5775__auto__.push((arguments[i__5770__auto___42158]));

var G__42159 = (i__5770__auto___42158 + (1));
i__5770__auto___42158 = G__42159;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41830.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.link_to41830.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41830.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41830.cljs$lang$applyTo = (function (seq41833){
var G__41834 = cljs.core.first(seq41833);
var seq41833__$1 = cljs.core.next(seq41833);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41834,seq41833__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41830);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41845 = (function sablono$core$mail_to41845(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42168 = arguments.length;
var i__5770__auto___42169 = (0);
while(true){
if((i__5770__auto___42169 < len__5769__auto___42168)){
args__5775__auto__.push((arguments[i__5770__auto___42169]));

var G__42170 = (i__5770__auto___42169 + (1));
i__5770__auto___42169 = G__42170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41845.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.mail_to41845.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41851){
var vec__41852 = p__41851;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41852,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41845.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41845.cljs$lang$applyTo = (function (seq41846){
var G__41847 = cljs.core.first(seq41846);
var seq41846__$1 = cljs.core.next(seq41846);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41847,seq41846__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41845);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41857 = (function sablono$core$unordered_list41857(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function sablono$core$unordered_list41857_$_iter__41858(s__41859){
return (new cljs.core.LazySeq(null,(function (){
var s__41859__$1 = s__41859;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41859__$1);
if(temp__5823__auto__){
var s__41859__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41859__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41859__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41861 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41860 = (0);
while(true){
if((i__41860 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41860);
cljs.core.chunk_append(b__41861,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42172 = (i__41860 + (1));
i__41860 = G__42172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41861),sablono$core$unordered_list41857_$_iter__41858(cljs.core.chunk_rest(s__41859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41861),null);
}
} else {
var x = cljs.core.first(s__41859__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41857_$_iter__41858(cljs.core.rest(s__41859__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41857);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41868 = (function sablono$core$ordered_list41868(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5523__auto__ = (function sablono$core$ordered_list41868_$_iter__41869(s__41870){
return (new cljs.core.LazySeq(null,(function (){
var s__41870__$1 = s__41870;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41870__$1);
if(temp__5823__auto__){
var s__41870__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41870__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41870__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41872 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41871 = (0);
while(true){
if((i__41871 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41871);
cljs.core.chunk_append(b__41872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42177 = (i__41871 + (1));
i__41871 = G__42177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41872),sablono$core$ordered_list41868_$_iter__41869(cljs.core.chunk_rest(s__41870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41872),null);
}
} else {
var x = cljs.core.first(s__41870__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41868_$_iter__41869(cljs.core.rest(s__41870__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41868);
/**
 * Create an image element.
 */
sablono.core.image41884 = (function sablono$core$image41884(var_args){
var G__41888 = arguments.length;
switch (G__41888) {
case 1:
return sablono.core.image41884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41884.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41884.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41884.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41884);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41892_SHARP_,p2__41893_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41892_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41893_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41897_SHARP_,p2__41898_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41897_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41898_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41906 = arguments.length;
switch (G__41906) {
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
sablono.core.color_field41917 = (function sablono$core$color_field41917(var_args){
var G__41922 = arguments.length;
switch (G__41922) {
case 1:
return sablono.core.color_field41917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41917.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41779__auto__);
}));

(sablono.core.color_field41917.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.color_field41917.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41917);

/**
 * Creates a date input field.
 */
sablono.core.date_field41923 = (function sablono$core$date_field41923(var_args){
var G__41925 = arguments.length;
switch (G__41925) {
case 1:
return sablono.core.date_field41923.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41923.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41923.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41779__auto__);
}));

(sablono.core.date_field41923.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.date_field41923.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41923);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41926 = (function sablono$core$datetime_field41926(var_args){
var G__41928 = arguments.length;
switch (G__41928) {
case 1:
return sablono.core.datetime_field41926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41926.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41779__auto__);
}));

(sablono.core.datetime_field41926.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.datetime_field41926.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41926);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41936 = (function sablono$core$datetime_local_field41936(var_args){
var G__41938 = arguments.length;
switch (G__41938) {
case 1:
return sablono.core.datetime_local_field41936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41936.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41779__auto__);
}));

(sablono.core.datetime_local_field41936.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.datetime_local_field41936.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41936);

/**
 * Creates a email input field.
 */
sablono.core.email_field41945 = (function sablono$core$email_field41945(var_args){
var G__41947 = arguments.length;
switch (G__41947) {
case 1:
return sablono.core.email_field41945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41945.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41779__auto__);
}));

(sablono.core.email_field41945.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.email_field41945.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41945);

/**
 * Creates a file input field.
 */
sablono.core.file_field41948 = (function sablono$core$file_field41948(var_args){
var G__41950 = arguments.length;
switch (G__41950) {
case 1:
return sablono.core.file_field41948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41948.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41779__auto__);
}));

(sablono.core.file_field41948.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.file_field41948.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41948);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41951 = (function sablono$core$hidden_field41951(var_args){
var G__41953 = arguments.length;
switch (G__41953) {
case 1:
return sablono.core.hidden_field41951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41951.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41779__auto__);
}));

(sablono.core.hidden_field41951.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.hidden_field41951.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41951);

/**
 * Creates a month input field.
 */
sablono.core.month_field41955 = (function sablono$core$month_field41955(var_args){
var G__41958 = arguments.length;
switch (G__41958) {
case 1:
return sablono.core.month_field41955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41955.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41779__auto__);
}));

(sablono.core.month_field41955.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.month_field41955.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41955);

/**
 * Creates a number input field.
 */
sablono.core.number_field41963 = (function sablono$core$number_field41963(var_args){
var G__41965 = arguments.length;
switch (G__41965) {
case 1:
return sablono.core.number_field41963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41963.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41779__auto__);
}));

(sablono.core.number_field41963.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.number_field41963.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41963);

/**
 * Creates a password input field.
 */
sablono.core.password_field41970 = (function sablono$core$password_field41970(var_args){
var G__41972 = arguments.length;
switch (G__41972) {
case 1:
return sablono.core.password_field41970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41970.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41779__auto__);
}));

(sablono.core.password_field41970.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.password_field41970.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41970);

/**
 * Creates a range input field.
 */
sablono.core.range_field41973 = (function sablono$core$range_field41973(var_args){
var G__41975 = arguments.length;
switch (G__41975) {
case 1:
return sablono.core.range_field41973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41973.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41779__auto__);
}));

(sablono.core.range_field41973.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.range_field41973.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41973);

/**
 * Creates a search input field.
 */
sablono.core.search_field41976 = (function sablono$core$search_field41976(var_args){
var G__41978 = arguments.length;
switch (G__41978) {
case 1:
return sablono.core.search_field41976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41976.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41779__auto__);
}));

(sablono.core.search_field41976.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.search_field41976.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41976);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41979 = (function sablono$core$tel_field41979(var_args){
var G__41981 = arguments.length;
switch (G__41981) {
case 1:
return sablono.core.tel_field41979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41979.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41779__auto__);
}));

(sablono.core.tel_field41979.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.tel_field41979.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41979);

/**
 * Creates a text input field.
 */
sablono.core.text_field41982 = (function sablono$core$text_field41982(var_args){
var G__41984 = arguments.length;
switch (G__41984) {
case 1:
return sablono.core.text_field41982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41982.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41779__auto__);
}));

(sablono.core.text_field41982.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.text_field41982.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41982);

/**
 * Creates a time input field.
 */
sablono.core.time_field41985 = (function sablono$core$time_field41985(var_args){
var G__41987 = arguments.length;
switch (G__41987) {
case 1:
return sablono.core.time_field41985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41985.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41779__auto__);
}));

(sablono.core.time_field41985.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.time_field41985.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41985);

/**
 * Creates a url input field.
 */
sablono.core.url_field41988 = (function sablono$core$url_field41988(var_args){
var G__41994 = arguments.length;
switch (G__41994) {
case 1:
return sablono.core.url_field41988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41988.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41779__auto__);
}));

(sablono.core.url_field41988.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.url_field41988.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41988);

/**
 * Creates a week input field.
 */
sablono.core.week_field41998 = (function sablono$core$week_field41998(var_args){
var G__42004 = arguments.length;
switch (G__42004) {
case 1:
return sablono.core.week_field41998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41998.cljs$core$IFn$_invoke$arity$1 = (function (name__41779__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41779__auto__);
}));

(sablono.core.week_field41998.cljs$core$IFn$_invoke$arity$2 = (function (name__41779__auto__,value__41780__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41779__auto__,value__41780__auto__);
}));

(sablono.core.week_field41998.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41998);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42008 = (function sablono$core$check_box42008(var_args){
var G__42010 = arguments.length;
switch (G__42010) {
case 1:
return sablono.core.check_box42008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42008.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42008.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42008.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42008.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42008.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42008);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42011 = (function sablono$core$radio_button42011(var_args){
var G__42013 = arguments.length;
switch (G__42013) {
case 1:
return sablono.core.radio_button42011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42011.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42011.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42011.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42011.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42011.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42011);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42027 = (function sablono$core$select_options42027(coll){
var iter__5523__auto__ = (function sablono$core$select_options42027_$_iter__42028(s__42029){
return (new cljs.core.LazySeq(null,(function (){
var s__42029__$1 = s__42029;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__42029__$1);
if(temp__5823__auto__){
var s__42029__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42029__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42029__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42031 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42030 = (0);
while(true){
if((i__42030 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__42030);
cljs.core.chunk_append(b__42031,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42042 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42042,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42042,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42042,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42027.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42027.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42027.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42254 = (i__42030 + (1));
i__42030 = G__42254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42031),sablono$core$select_options42027_$_iter__42028(cljs.core.chunk_rest(s__42029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42031),null);
}
} else {
var x = cljs.core.first(s__42029__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42045 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42027.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42027.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42027.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42027_$_iter__42028(cljs.core.rest(s__42029__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42027);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42048 = (function sablono$core$drop_down42048(var_args){
var G__42050 = arguments.length;
switch (G__42050) {
case 2:
return sablono.core.drop_down42048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42048.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42048.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42048.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42048.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42048.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42048);
/**
 * Creates a text area element.
 */
sablono.core.text_area42070 = (function sablono$core$text_area42070(var_args){
var G__42075 = arguments.length;
switch (G__42075) {
case 1:
return sablono.core.text_area42070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42070.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42070.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42070.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42070);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42080 = (function sablono$core$label42080(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42080);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42081 = (function sablono$core$submit_button42081(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42081);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42082 = (function sablono$core$reset_button42082(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42082);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42083 = (function sablono$core$form_to42083(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42261 = arguments.length;
var i__5770__auto___42262 = (0);
while(true){
if((i__5770__auto___42262 < len__5769__auto___42261)){
args__5775__auto__.push((arguments[i__5770__auto___42262]));

var G__42263 = (i__5770__auto___42262 + (1));
i__5770__auto___42262 = G__42263;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42083.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.form_to42083.cljs$core$IFn$_invoke$arity$variadic = (function (p__42086,body){
var vec__42133 = p__42086;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42133,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42133,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42083.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42083.cljs$lang$applyTo = (function (seq42084){
var G__42085 = cljs.core.first(seq42084);
var seq42084__$1 = cljs.core.next(seq42084);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42085,seq42084__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42083);

//# sourceMappingURL=sablono.core.js.map
