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
var G__42141__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41834 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41835 = cljs.core.seq(vec__41834);
var first__41836 = cljs.core.first(seq__41835);
var seq__41835__$1 = cljs.core.next(seq__41835);
var tag = first__41836;
var body = seq__41835__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42142__i = 0, G__42142__a = new Array(arguments.length -  0);
while (G__42142__i < G__42142__a.length) {G__42142__a[G__42142__i] = arguments[G__42142__i + 0]; ++G__42142__i;}
  args = new cljs.core.IndexedSeq(G__42142__a,0,null);
} 
return G__42141__delegate.call(this,args);};
G__42141.cljs$lang$maxFixedArity = 0;
G__42141.cljs$lang$applyTo = (function (arglist__42143){
var args = cljs.core.seq(arglist__42143);
return G__42141__delegate(args);
});
G__42141.cljs$core$IFn$_invoke$arity$variadic = G__42141__delegate;
return G__42141;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5523__auto__ = (function sablono$core$update_arglists_$_iter__41839(s__41840){
return (new cljs.core.LazySeq(null,(function (){
var s__41840__$1 = s__41840;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41840__$1);
if(temp__5804__auto__){
var s__41840__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41840__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41840__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41842 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41841 = (0);
while(true){
if((i__41841 < size__5522__auto__)){
var args = cljs.core._nth(c__5521__auto__,i__41841);
cljs.core.chunk_append(b__41842,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42144 = (i__41841 + (1));
i__41841 = G__42144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41842),sablono$core$update_arglists_$_iter__41839(cljs.core.chunk_rest(s__41840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41842),null);
}
} else {
var args = cljs.core.first(s__41840__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41839(cljs.core.rest(s__41840__$2)));
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
var len__5769__auto___42145 = arguments.length;
var i__5770__auto___42146 = (0);
while(true){
if((i__5770__auto___42146 < len__5769__auto___42145)){
args__5775__auto__.push((arguments[i__5770__auto___42146]));

var G__42147 = (i__5770__auto___42146 + (1));
i__5770__auto___42146 = G__42147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5523__auto__ = (function sablono$core$iter__41856(s__41857){
return (new cljs.core.LazySeq(null,(function (){
var s__41857__$1 = s__41857;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41857__$1);
if(temp__5804__auto__){
var s__41857__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41857__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41857__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41859 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41858 = (0);
while(true){
if((i__41858 < size__5522__auto__)){
var style = cljs.core._nth(c__5521__auto__,i__41858);
cljs.core.chunk_append(b__41859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42148 = (i__41858 + (1));
i__41858 = G__42148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41859),sablono$core$iter__41856(cljs.core.chunk_rest(s__41857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41859),null);
}
} else {
var style = cljs.core.first(s__41857__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41856(cljs.core.rest(s__41857__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41848));
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
sablono.core.link_to41890 = (function sablono$core$link_to41890(var_args){
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

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41890.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.link_to41890.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41890.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41890.cljs$lang$applyTo = (function (seq41891){
var G__41892 = cljs.core.first(seq41891);
var seq41891__$1 = cljs.core.next(seq41891);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41892,seq41891__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41890);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41904 = (function sablono$core$mail_to41904(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42152 = arguments.length;
var i__5770__auto___42153 = (0);
while(true){
if((i__5770__auto___42153 < len__5769__auto___42152)){
args__5775__auto__.push((arguments[i__5770__auto___42153]));

var G__42154 = (i__5770__auto___42153 + (1));
i__5770__auto___42153 = G__42154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41904.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.mail_to41904.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41909){
var vec__41910 = p__41909;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41910,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41904.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41904.cljs$lang$applyTo = (function (seq41906){
var G__41907 = cljs.core.first(seq41906);
var seq41906__$1 = cljs.core.next(seq41906);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41907,seq41906__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41904);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41913 = (function sablono$core$unordered_list41913(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function sablono$core$unordered_list41913_$_iter__41914(s__41915){
return (new cljs.core.LazySeq(null,(function (){
var s__41915__$1 = s__41915;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41915__$1);
if(temp__5804__auto__){
var s__41915__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41915__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41915__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41917 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41916 = (0);
while(true){
if((i__41916 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41916);
cljs.core.chunk_append(b__41917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42155 = (i__41916 + (1));
i__41916 = G__42155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41917),sablono$core$unordered_list41913_$_iter__41914(cljs.core.chunk_rest(s__41915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41917),null);
}
} else {
var x = cljs.core.first(s__41915__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41913_$_iter__41914(cljs.core.rest(s__41915__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41913);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41922 = (function sablono$core$ordered_list41922(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5523__auto__ = (function sablono$core$ordered_list41922_$_iter__41923(s__41924){
return (new cljs.core.LazySeq(null,(function (){
var s__41924__$1 = s__41924;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41924__$1);
if(temp__5804__auto__){
var s__41924__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41924__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41924__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41926 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41925 = (0);
while(true){
if((i__41925 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41925);
cljs.core.chunk_append(b__41926,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42156 = (i__41925 + (1));
i__41925 = G__42156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41926),sablono$core$ordered_list41922_$_iter__41923(cljs.core.chunk_rest(s__41924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41926),null);
}
} else {
var x = cljs.core.first(s__41924__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41922_$_iter__41923(cljs.core.rest(s__41924__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41922);
/**
 * Create an image element.
 */
sablono.core.image41931 = (function sablono$core$image41931(var_args){
var G__41936 = arguments.length;
switch (G__41936) {
case 1:
return sablono.core.image41931.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41931.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41931.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41931.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41931);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41944_SHARP_,p2__41945_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41944_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41945_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41949_SHARP_,p2__41950_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41949_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41950_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41959 = arguments.length;
switch (G__41959) {
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
sablono.core.color_field41967 = (function sablono$core$color_field41967(var_args){
var G__41969 = arguments.length;
switch (G__41969) {
case 1:
return sablono.core.color_field41967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41967.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41824__auto__);
}));

(sablono.core.color_field41967.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.color_field41967.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41967);

/**
 * Creates a date input field.
 */
sablono.core.date_field41976 = (function sablono$core$date_field41976(var_args){
var G__41978 = arguments.length;
switch (G__41978) {
case 1:
return sablono.core.date_field41976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41976.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41824__auto__);
}));

(sablono.core.date_field41976.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.date_field41976.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41976);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41983 = (function sablono$core$datetime_field41983(var_args){
var G__41985 = arguments.length;
switch (G__41985) {
case 1:
return sablono.core.datetime_field41983.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41983.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41983.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41824__auto__);
}));

(sablono.core.datetime_field41983.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.datetime_field41983.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41983);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41993 = (function sablono$core$datetime_local_field41993(var_args){
var G__41998 = arguments.length;
switch (G__41998) {
case 1:
return sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41824__auto__);
}));

(sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.datetime_local_field41993.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41993);

/**
 * Creates a email input field.
 */
sablono.core.email_field42002 = (function sablono$core$email_field42002(var_args){
var G__42004 = arguments.length;
switch (G__42004) {
case 1:
return sablono.core.email_field42002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field42002.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41824__auto__);
}));

(sablono.core.email_field42002.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.email_field42002.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42002);

/**
 * Creates a file input field.
 */
sablono.core.file_field42015 = (function sablono$core$file_field42015(var_args){
var G__42018 = arguments.length;
switch (G__42018) {
case 1:
return sablono.core.file_field42015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field42015.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41824__auto__);
}));

(sablono.core.file_field42015.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.file_field42015.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42015);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42026 = (function sablono$core$hidden_field42026(var_args){
var G__42030 = arguments.length;
switch (G__42030) {
case 1:
return sablono.core.hidden_field42026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42026.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41824__auto__);
}));

(sablono.core.hidden_field42026.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.hidden_field42026.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42026);

/**
 * Creates a month input field.
 */
sablono.core.month_field42036 = (function sablono$core$month_field42036(var_args){
var G__42039 = arguments.length;
switch (G__42039) {
case 1:
return sablono.core.month_field42036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42036.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41824__auto__);
}));

(sablono.core.month_field42036.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.month_field42036.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42036);

/**
 * Creates a number input field.
 */
sablono.core.number_field42041 = (function sablono$core$number_field42041(var_args){
var G__42043 = arguments.length;
switch (G__42043) {
case 1:
return sablono.core.number_field42041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42041.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41824__auto__);
}));

(sablono.core.number_field42041.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.number_field42041.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42041);

/**
 * Creates a password input field.
 */
sablono.core.password_field42048 = (function sablono$core$password_field42048(var_args){
var G__42050 = arguments.length;
switch (G__42050) {
case 1:
return sablono.core.password_field42048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42048.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41824__auto__);
}));

(sablono.core.password_field42048.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.password_field42048.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42048);

/**
 * Creates a range input field.
 */
sablono.core.range_field42051 = (function sablono$core$range_field42051(var_args){
var G__42053 = arguments.length;
switch (G__42053) {
case 1:
return sablono.core.range_field42051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42051.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41824__auto__);
}));

(sablono.core.range_field42051.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.range_field42051.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42051);

/**
 * Creates a search input field.
 */
sablono.core.search_field42058 = (function sablono$core$search_field42058(var_args){
var G__42060 = arguments.length;
switch (G__42060) {
case 1:
return sablono.core.search_field42058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42058.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41824__auto__);
}));

(sablono.core.search_field42058.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.search_field42058.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42058);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42065 = (function sablono$core$tel_field42065(var_args){
var G__42067 = arguments.length;
switch (G__42067) {
case 1:
return sablono.core.tel_field42065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42065.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41824__auto__);
}));

(sablono.core.tel_field42065.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.tel_field42065.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42065);

/**
 * Creates a text input field.
 */
sablono.core.text_field42072 = (function sablono$core$text_field42072(var_args){
var G__42074 = arguments.length;
switch (G__42074) {
case 1:
return sablono.core.text_field42072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42072.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41824__auto__);
}));

(sablono.core.text_field42072.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.text_field42072.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42072);

/**
 * Creates a time input field.
 */
sablono.core.time_field42075 = (function sablono$core$time_field42075(var_args){
var G__42077 = arguments.length;
switch (G__42077) {
case 1:
return sablono.core.time_field42075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42075.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41824__auto__);
}));

(sablono.core.time_field42075.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.time_field42075.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42075);

/**
 * Creates a url input field.
 */
sablono.core.url_field42078 = (function sablono$core$url_field42078(var_args){
var G__42080 = arguments.length;
switch (G__42080) {
case 1:
return sablono.core.url_field42078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42078.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41824__auto__);
}));

(sablono.core.url_field42078.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.url_field42078.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42078);

/**
 * Creates a week input field.
 */
sablono.core.week_field42081 = (function sablono$core$week_field42081(var_args){
var G__42083 = arguments.length;
switch (G__42083) {
case 1:
return sablono.core.week_field42081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42081.cljs$core$IFn$_invoke$arity$1 = (function (name__41824__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41824__auto__);
}));

(sablono.core.week_field42081.cljs$core$IFn$_invoke$arity$2 = (function (name__41824__auto__,value__41825__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41824__auto__,value__41825__auto__);
}));

(sablono.core.week_field42081.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42081);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42088 = (function sablono$core$check_box42088(var_args){
var G__42099 = arguments.length;
switch (G__42099) {
case 1:
return sablono.core.check_box42088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42088.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42088.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42088.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42088.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42088.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42088);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42101 = (function sablono$core$radio_button42101(var_args){
var G__42103 = arguments.length;
switch (G__42103) {
case 1:
return sablono.core.radio_button42101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42101.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42101.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42101.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42101.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42101.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42101);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42107 = (function sablono$core$select_options42107(coll){
var iter__5523__auto__ = (function sablono$core$select_options42107_$_iter__42108(s__42109){
return (new cljs.core.LazySeq(null,(function (){
var s__42109__$1 = s__42109;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42109__$1);
if(temp__5804__auto__){
var s__42109__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42109__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42109__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42111 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42110 = (0);
while(true){
if((i__42110 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__42110);
cljs.core.chunk_append(b__42111,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42112 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42112,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42112,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42112,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42107.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42107.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42107.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42178 = (i__42110 + (1));
i__42110 = G__42178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42111),sablono$core$select_options42107_$_iter__42108(cljs.core.chunk_rest(s__42109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42111),null);
}
} else {
var x = cljs.core.first(s__42109__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42115 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42115,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42115,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42115,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42107.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42107.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42107.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42107_$_iter__42108(cljs.core.rest(s__42109__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42107);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42119 = (function sablono$core$drop_down42119(var_args){
var G__42122 = arguments.length;
switch (G__42122) {
case 2:
return sablono.core.drop_down42119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42119.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42119.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42119.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42119.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42119.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42119);
/**
 * Creates a text area element.
 */
sablono.core.text_area42124 = (function sablono$core$text_area42124(var_args){
var G__42126 = arguments.length;
switch (G__42126) {
case 1:
return sablono.core.text_area42124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42124.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42124.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42124.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42124);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42128 = (function sablono$core$label42128(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42128);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42129 = (function sablono$core$submit_button42129(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42129);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42130 = (function sablono$core$reset_button42130(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42130);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42131 = (function sablono$core$form_to42131(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42181 = arguments.length;
var i__5770__auto___42182 = (0);
while(true){
if((i__5770__auto___42182 < len__5769__auto___42181)){
args__5775__auto__.push((arguments[i__5770__auto___42182]));

var G__42183 = (i__5770__auto___42182 + (1));
i__5770__auto___42182 = G__42183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42131.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.form_to42131.cljs$core$IFn$_invoke$arity$variadic = (function (p__42136,body){
var vec__42137 = p__42136;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42137,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42137,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42131.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42131.cljs$lang$applyTo = (function (seq42134){
var G__42135 = cljs.core.first(seq42134);
var seq42134__$1 = cljs.core.next(seq42134);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42135,seq42134__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42131);

//# sourceMappingURL=sablono.core.js.map
